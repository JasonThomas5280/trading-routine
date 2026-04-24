#!/usr/bin/env bash
# clickup.sh — send messages and docs to ClickUp
#
# Required env vars (production):
#   CLICKUP_API_KEY       — from ClickUp → Settings → Apps → API Token
#   CLICKUP_CHANNEL_ID    — chat channel to send daily summaries to
#   CLICKUP_LIST_ID       — list ID for weekly review docs
#
# Placeholder mode: if any var is unset, script echoes to stdout and appends
# to memory/DAILY-SUMMARY.md in the repo root so workflows still complete
# cleanly. This matches the Bull pattern — routines don't block on ClickUp.

set -euo pipefail

BASE="https://api.clickup.com/api/v2"

# Find repo root (the dir containing CLAUDE.md) so we can locate DAILY-SUMMARY.md
_repo_root() {
  local dir
  dir="$(pwd)"
  while [[ "$dir" != "/" ]]; do
    if [[ -f "$dir/CLAUDE.md" ]]; then
      echo "$dir"
      return 0
    fi
    dir="$(dirname "$dir")"
  done
  echo "$(pwd)"   # fallback
}

_placeholder_append() {
  local message="$1"
  local root; root="$(_repo_root)"
  local file="$root/memory/DAILY-SUMMARY.md"
  mkdir -p "$(dirname "$file")"
  {
    echo ""
    echo "---"
    echo "## $(date '+%Y-%m-%d %H:%M CT') [clickup-placeholder]"
    echo ""
    echo "$message"
  } >> "$file"
  echo "📝 [placeholder mode] Appended to $file" >&2
}

usage() {
  cat <<EOF
Usage: clickup.sh <command> <args...>

Commands:
  message "<text>"                 Send a channel message (daily summary, alert)
  doc "<title>" "<markdown body>"  Create a ClickUp doc (weekly review)
  task "<title>" "<description>"   Create a ClickUp task (rarely used)

Placeholder mode: If CLICKUP_API_KEY / CLICKUP_CHANNEL_ID / CLICKUP_LIST_ID 
are unset, the message is echoed and appended to memory/DAILY-SUMMARY.md.

Examples:
  clickup.sh message "🟢 BOUGHT 1.5 shrs \$NVDA @ \$487.50"
  clickup.sh doc "Week ending 2026-04-17" "# Weekly Review..."
EOF
}

cmd="${1:-}"; shift || true

case "$cmd" in
  message)
    message="${1:?message text required}"
    if [[ -z "${CLICKUP_API_KEY:-}" || -z "${CLICKUP_CHANNEL_ID:-}" ]]; then
      echo "$message"
      _placeholder_append "$message"
      exit 0
    fi
    body=$(jq -n --arg content "$message" '{type: "message", content_format: "text/md", content: $content}')
    curl -sS --fail-with-body -X POST \
      "$BASE/workspace/${CLICKUP_WORKSPACE_ID:-default}/chat/channels/$CLICKUP_CHANNEL_ID/messages" \
      -H "Authorization: $CLICKUP_API_KEY" \
      -H "Content-Type: application/json" \
      -d "$body"
    ;;

  doc)
    title="${1:?title required}"
    content="${2:?content required}"
    if [[ -z "${CLICKUP_API_KEY:-}" || -z "${CLICKUP_LIST_ID:-}" ]]; then
      echo "=== $title ==="
      echo "$content"
      _placeholder_append "### $title

$content"
      exit 0
    fi
    body=$(jq -n --arg name "$title" --arg content "$content" \
      '{name: $name, content: $content}')
    curl -sS --fail-with-body -X POST \
      "$BASE/list/$CLICKUP_LIST_ID/doc" \
      -H "Authorization: $CLICKUP_API_KEY" \
      -H "Content-Type: application/json" \
      -d "$body"
    ;;

  task)
    title="${1:?title required}"
    desc="${2:-}"
    if [[ -z "${CLICKUP_API_KEY:-}" || -z "${CLICKUP_LIST_ID:-}" ]]; then
      _placeholder_append "TASK: $title
$desc"
      exit 0
    fi
    body=$(jq -n --arg name "$title" --arg desc "$desc" \
      '{name: $name, description: $desc}')
    curl -sS --fail-with-body -X POST \
      "$BASE/list/$CLICKUP_LIST_ID/task" \
      -H "Authorization: $CLICKUP_API_KEY" \
      -H "Content-Type: application/json" \
      -d "$body"
    ;;

  "" | -h | --help | help)
    usage
    ;;

  *)
    echo "Unknown command: $cmd" >&2
    usage
    exit 1
    ;;
esac
