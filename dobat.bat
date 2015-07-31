mode com3: BAUD=9600 DATA=8
set wget_="C:\Program Files (x86)\GnuWin32\bin\wget.exe"

:loop
for /f %%f in ('%wget_% -qO- http://86.147.187.219/getpumplights.php' ) do call :SetPump %%f
TIMEOUT /T 1
goto loop

goto :EOF

:SetPump
if  "%1" == "PETROL" echo 1000 > COM3:
if  "%1" == "DIESEL" echo  0100 > COM3:
if  "%1" == "GAS" echo 0010 > COM3:
if  "%1" == "ELECTRICITY" echo 0001 > COM3: