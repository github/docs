1. Überprüfe die Komma-getrennte Datei (CSV) in `/PATH/REPO-NAME.git/git-import/raw-authors.csv`. Sie sollte die folgenden Spalten enthalten:
    - `ID`: Der im ursprünglichen Repository gespeicherte Autor, gefolgt von einem eindeutigen Kennzeichner
    - `NAME`: Der im ursprünglichen Repository gespeicherte Autor

  Um Autoren aus dem ursprünglichen Repository einer E-Mail-Adresse und einem Namen zuzuordnen, erstellst Du eine neue CSV-Datei mit den Spalten `ID,(ignored),GIT_EMAIL,GIT_NAME`, wodurch die Autorinformationen für alles durch „ID“ mit „GIT_EMAIL“ und „GIT_NAME“ ersetzt werden.


  #### Beispiel:

   - Ursprüngliche Autor-ID: `octocat@111111-2222-3333-4444-55555555555`
   - Neue E-Mail-Adresse: `octocat@github.com`
   - Neuer Name: `The Octocat`

   Um den ursprünglichen Autor dem neuen Git-Benutzer zuzuordnen, sollte in der CSV-Datei die folgende Zeile enthalten sein:

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
