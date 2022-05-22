1. Revisa el archivo (CSV) separado por coma en `/PATH/REPO-NAME.git/git-import/raw-authors.csv`. Debería contener estas columnas:
    - `ID`: el autor tal como se almacena en el repositorio original, seguido de un identificador único
    - `NOMBRE`: el autor tal como se almacena en el repositorio original

  Para mapear autores desde el repositorio original a una dirección de correo electrónico y nombre, crea un nuevo archivo CSV con las columnas `ID,(ignorado),GIT_EMAIL,GIT_NAME`, que reemplace la información de autor por "ID" con "GIT_EMAIL" y "GIT_NAME".


  #### Ejemplo:

   - ID del autor original: `octocat@111111-2222-3333-4444-55555555555`
   - Nueva dirección de correo electrónico: `octocat@github.com`
   - Nuevo nombre: `The Octocat`

   Para mapear el autor original a un nuevo usuario de Git, el archivo CSV debería incluir la línea:

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
