---
title: Unterordner in ein neues Repository auslagern
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository/
  - /articles/splitting-a-subfolder-out-into-a-new-repository
  - /github/using-git/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/splitting-a-subfolder-out-into-a-new-repository
intro: Einzelne Ordner eines Git-Repositorys kannst Du in neue Repositorys auslagern.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
Wenn Du bei der Erstellung eines Repository-Klons einen Ordner in ein separates Repository verschiebst, verlierst Du weder Deinen Git-Verlauf noch die bereits vorgenommenen Änderungen.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Ändere Dein aktuelles Arbeitsverzeichnis in das Verzeichnis, in dem das neue Repository erstellt werden soll.
3. Klone das Repository, das den Unterordner enthält.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY-NAME</em>
  ```
4. Ändere Dein aktuelles Arbeitsverzeichnis in das Verzeichnis mit dem geklonten Repository.
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  ```
5. Zum Extrahieren des Unterordners aus der Gesamtheit der Repository-Dateien führe [`git filter-branch`](https://git-scm.com/docs/git-filter-branch) mit Angabe der folgenden Informationen aus:
    - `FOLDER-NAME`: Der Ordner Deines Projekts, aus dem Du ein eigenes Repository erstellen möchtest.

    {% windows %}

      {% tip %}

      **Tipp:** Windows-Benutzer verwenden zum Trennen von Ordnern den Schrägstrich `/`.

      {% endtip %}

    {% endwindows %}
    - `BRANCH-NAME`: The default branch for your current project, for example, `main` or `gh-pages`.
    ```shell
    $ git filter-branch --prune-empty --subdirectory-filter <em>FOLDER-NAME BRANCH-NAME</em>
    # Filter the specified branch in your directory and remove empty commits
    > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
    > Ref 'refs/heads/<em>BRANCH-NAME</em>' was rewritten
    ```
  Das Repository sollte nun nur die Dateien des zuvor angegebenen Unterordners enthalten.

6. [Erstelle ein neues Repository](/articles/creating-a-new-repository/) auf {% data variables.product.product_name %}.
7. Klicken Sie oben auf der Seite zur Schnelleinrichtung Ihres neuen {% data variables.product.product_name %}-Repositorys auf {% octicon "clippy" aria-label="The copy to clipboard icon" %}, um die URL des Remote-Repositorys zu kopieren. ![Feld zum Kopieren der Remote-Repository-URL](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

  {% tip %}

  **Tip:** For information on the difference between HTTPS and SSH URLs, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

  {% endtip %}

8. Prüfe den bestehenden Remote-Namen Deines Repositorys. Zwei gängige Namen sind z. B. `origin` oder `upstream`.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (push)
  ```

9. Richte für Dein neues Repository eine neue Remote-URL mit dem vorhandenen Remote-Namen und der URL des Remote-Repositorys ein, die Du in Schritt 7 kopiert hast.
  ```shell
  git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git
  ```
10. Vergewissere Dich, dass die Remote-URL in den Namen des neuen Repositorys geändert wurde.
  ```shell
  $ git remote -v
  # Verifiziere die neue Remote-URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (push)
  ```
11. Übertrage Deine Änderungen am neuen Repository per Push auf {% data variables.product.product_name %}.
  ```shell
  git push -u origin <em>BRANCH-NAME</em>
  ```
