# FireLit Swing - Register all 5 trading routines in Windows Task Scheduler
# Run in any PowerShell window (no admin needed):
#   powershell -ExecutionPolicy Bypass -File register-tasks.ps1

$ProjectDir = "C:\Users\thoma\OneDrive\Documents\trading-routine"
$Launcher   = "$ProjectDir\scripts\run-routine.bat"

$Weekdays = @("Monday","Tuesday","Wednesday","Thursday","Friday")

$tasks = @(
    @{ Name="FireLit-weekly-prep";   DaysOfWeek=@("Sunday"); Time="16:00"; Command="/weekly-prep"   },
    @{ Name="FireLit-pre-market";    DaysOfWeek=$Weekdays;   Time="06:00"; Command="/pre-market"    },
    @{ Name="FireLit-market-check";  DaysOfWeek=$Weekdays;   Time="10:00"; Command="/market-check"  },
    @{ Name="FireLit-eod-review";    DaysOfWeek=$Weekdays;   Time="15:15"; Command="/eod-review"    },
    @{ Name="FireLit-weekly-review"; DaysOfWeek=@("Friday"); Time="15:30"; Command="/weekly-review" }
)

# Clean up any half-registered tasks from prior runs
Get-ScheduledTask | Where-Object { $_.TaskName -like "FireLit-*" } | ForEach-Object {
    Unregister-ScheduledTask -TaskName $_.TaskName -Confirm:$false
    Write-Host "Removed stale task: $($_.TaskName)" -ForegroundColor Yellow
}

foreach ($task in $tasks) {
    try {
        $action   = New-ScheduledTaskAction -Execute $Launcher -Argument $task.Command -WorkingDirectory $ProjectDir
        $trigger  = New-ScheduledTaskTrigger -Weekly -DaysOfWeek $task.DaysOfWeek -At $task.Time
        $settings = New-ScheduledTaskSettingsSet -ExecutionTimeLimit (New-TimeSpan -Hours 2) -StartWhenAvailable

        Register-ScheduledTask `
            -TaskName  $task.Name `
            -Action    $action `
            -Trigger   $trigger `
            -Settings  $settings `
            -Force `
            -ErrorAction Stop | Out-Null

        Write-Host "Registered: $($task.Name) at $($task.Time)" -ForegroundColor Green
    }
    catch {
        Write-Host "FAILED: $($task.Name) - $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Done." -ForegroundColor Cyan
Write-Host ""
Write-Host "Verify registration:"
Write-Host "  Get-ScheduledTask | Where-Object { `$_.TaskName -like 'FireLit*' } | Select TaskName, State"
