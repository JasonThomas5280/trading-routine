#!/usr/bin/env bash
# perplexity.sh — research synthesis via Perplexity API
# 
# Required env var:
#   PERPLEXITY_API_KEY — from https://www.perplexity.ai/settings/api
#
# Graceful failure: if no key set, exit 2 (different from curl errors=1) so 
# calling routines can detect and fall back to native WebSearch cleanly.

set -euo pipefail

if [[ -z "${PERPLEXITY_API_KEY:-}" ]]; then
  echo "PERPLEXITY_API_KEY not set — fall back to native WebSearch" >&2
  exit 2
fi

MODEL="${PERPLEXITY_MODEL:-sonar}"    # options: sonar, sonar-pro (more thorough)
BASE="https://api.perplexity.ai"

usage() {
  cat <<EOF
Usage: perplexity.sh "<query>"

Options (env vars):
  PERPLEXITY_MODEL=sonar         (default: sonar; set to sonar-pro for deeper)
  PERPLEXITY_MAX_TOKENS=800      (default: 800)

Exit codes:
  0   success — response on stdout
  1   curl/API error (transient or auth)
  2   API key not set (calling routine should fall back to WebSearch)

Example:
  perplexity.sh "Overnight news for NVDA relevant to short-term stock price. 3 bullets. Cite."
EOF
}

query="${1:-}"
if [[ -z "$query" ]]; then
  usage
  exit 1
fi

max_tokens="${PERPLEXITY_MAX_TOKENS:-800}"

body=$(jq -n \
  --arg model "$MODEL" \
  --arg content "$query" \
  --argjson max "$max_tokens" \
  '{
    model: $model,
    messages: [
      {role: "system", content: "You are a financial research assistant. Be concise. Cite sources. No fluff."},
      {role: "user", content: $content}
    ],
    max_tokens: $max,
    temperature: 0.2,
    return_citations: true
  }')

response=$(curl -sS --fail-with-body -X POST "$BASE/chat/completions" \
  -H "Authorization: Bearer $PERPLEXITY_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$body")

# Extract content + citations for a clean output
if command -v jq >/dev/null 2>&1; then
  content=$(echo "$response" | jq -r '.choices[0].message.content')
  citations=$(echo "$response" | jq -r '.citations[]? // empty' | sed 's/^/  - /')
  
  echo "$content"
  if [[ -n "$citations" ]]; then
    echo ""
    echo "Sources:"
    echo "$citations"
  fi
else
  echo "$response"
fi
