@echo off
title Push TravelAI Bharat to GitHub
echo =======================================================
echo   TravelAI Bharat - Git Push to GitHub
echo   Repository: https://github.com/chayan0516/tripmind-ai
echo =======================================================
echo.
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Code pushed to GitHub successfully!
) else (
    echo [FAILED] Push failed. If prompted, please authorize GitHub in your browser.
)
echo.
pause
