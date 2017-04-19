@echo off
call electron . %* && goto end
pause
:end
exit /b
