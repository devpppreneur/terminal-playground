#Comandos Kit Supervivencia Consola

| Comando | Significado | Ejemplo |
|---------|-------------|---------|
| CD 	  | Cambiar Directorio | 
| LS	  | listar archivos | ls -lha |
| MV	  | Mover o Renombrar | mv test.txt test2.txt | 
| CP	  | Copiar archivos | cp test.txt ./terminal-playground ../dev | 
| RM 	  | Elimina Archivos | rm -rf |
| Man	  | Activa manual de comando | man ls |
| | Pipe  | Toma la salida del programa de la izquierda y lo conviernte en la entradad del programa de la derecha |  ls -l /usr/bin | head -n 5 |
| < 	  | Reconecta la entrada del dato | test1.txt < echo test2.txt | 
| >	  | Reconecta la salida de un dato |ls -lha > echo test.txt |
| CAT	  | Muestra lo que tiene un archivo | cat test.txt |
| CURL	  | Programa que sirve para hacer solicitudes a url desde la terminal | curl -L https://www.google.com >  google.html |
| >>	  | Agrega texto al final de un archivo sin borrar lo anterior | echo "final Instruccion" >> test.txt
| GREP 	  | Busca texto en un archivo | grep "programacion"  test.txt |
