@echo off
set sortie=%~n1.html
echo %sortie%
cd %~dp1
cd ..
path\to\pandoc.exe %1  --template "path\to\.resources\myTemplate.html" --resource-path \path\to\.resources\;. --mathml -o %sortie%
"path\to\prince" %sortie% --no-author-style -s "path\to\.resources\printPrince.css" --page-margin=10mm  --media=screen
"path\to\prince" %sortie% --no-author-style -s "path\to\.resources\printPrinceProf.css" --page-margin=10mm  --media=screen -o %~n1.prof.pdf
pause