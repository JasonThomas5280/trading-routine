@echo off
:: FireLit Swing — Routine Launcher
:: Usage: run-routine.bat <slash-command>
:: Example: run-routine.bat /pre-market
::
:: Called by Windows Task Scheduler. Launches Claude Code in the
:: trading-routine directory with the given slash command.

set ROUTINE=%1
set PROJECT_DIR=C:\Users\thoma\OneDrive\Documents\trading-routine

if "%ROUTINE%"=="" (
    echo ERROR: No routine specified. Usage: run-routine.bat /pre-market
    exit /b 1
)

cd /d "%PROJECT_DIR%"

:: Load env vars from .env so scripts can call Alpaca, Alpha Vantage, etc.
for /f "usebackq tokens=1,* delims==" %%A in (`findstr /v "^#" .env ^| findstr /v "^$"`) do (
    set "%%A=%%B"
)

:: Launch Claude Code with the slash command (non-interactive, print output)
claude --print "%ROUTINE%"
