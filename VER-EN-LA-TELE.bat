@echo off
title LetiyvicFlix - Servidor para la tele
cd /d "%~dp0"
powershell -NoProfile -Command "$ip=(Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.IPAddress -like '192.168.*' -or $_.IPAddress -like '10.*'} | Select-Object -First 1 -ExpandProperty IPAddress); Write-Host ''; Write-Host '  ==============================================' -ForegroundColor Red; Write-Host '   LETIYVICFLIX  -  emitiendo en tu casa' -ForegroundColor Red; Write-Host '  ==============================================' -ForegroundColor Red; Write-Host ''; Write-Host ('   En el navegador de la tele (o iPad/movil) abre:') -ForegroundColor White; Write-Host ''; Write-Host ('        http://' + $ip + ':8000') -ForegroundColor Green; Write-Host ''; Write-Host '   (La tele debe estar en el mismo WiFi que este PC)' -ForegroundColor Gray; Write-Host '   Deja esta ventana abierta mientras la veais.' -ForegroundColor Gray; Write-Host '   Para apagar el servidor: cierra esta ventana.' -ForegroundColor Gray; Write-Host ''"
python -m http.server 8000
pause
