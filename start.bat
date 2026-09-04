@echo off
title TravelAI Bharat - Incredible India
echo ========================================================
echo   Starting TravelAI Bharat (Incredible India)
echo ========================================================
echo.
echo Opening your browser at http://localhost:3000/ ...
timeout /t 2 >nul
start http://localhost:3000/
echo.
call npm.cmd run dev
pause
