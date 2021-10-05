---
title: Datei umbenennen
intro: 'You can rename any file in your repository directly in {% data variables.product.product_name %} or by using the command line.'
redirect_from:
  - /articles/renaming-a-file
  - /github/managing-files-in-a-repository/renaming-a-file
  - /articles/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/renaming-a-file
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/renaming-a-file-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

## Renaming a file on {% data variables.product.product_name %}

Renaming a file also gives you the opportunity to [move the file to a new location](/articles/moving-a-file-to-a-new-location)

{% tip %}

**Tips**:

- Wenn Du versuchst, eine Datei in einem Repository umzubenennen, zu dem Du keinen Zugriff hast, erstellen wir einen Fork des Projekts unter Deinem Benutzerkonto und helfen Dir nach dem Commit Deiner Änderung, einen [Pull Request](/articles/about-pull-requests) an das Original-Repository zu senden.
- Dateinamen, die in der Weboberfläche erstellt werden, dürfen nur alphanumerische Zeichen und Bindestriche (`-`) enthalten. Wenn Du andere Zeichen verwenden möchtest, musst Du die Dateien lokal erstellen und freigeben und sie anschließend per Push in das Repository übertragen.
- Einige Dateien, beispielsweise Bilder, kannst du nur über die Befehlszeile umbenennen. Weitere Informationen findest Du unter „[Datei über die Befehlszeile umbenennen](/articles/renaming-a-file-using-the-command-line).“

{% endtip %}

1. Navigiere innerhalb des Repositorys zu der Datei, die Du umbenennen möchtest.
2. Klicken Sie in der oberen rechten Ecke der Dateiansicht auf {% octicon "pencil" aria-label="The edit icon" %}, um den Datei-Editor zu öffnen. ![Symbol „Edit file" (Bearbeiten einer Datei)](/assets/images/help/repository/edit-file-icon.png)
3. Gib im Feld „Filename“ (Dateiname) den neuen Namen für die Datei ein. Gleichzeitig kannst Du auch den Inhalt der Datei ändern. ![Einen Dateinamen bearbeiten](/assets/images/help/repository/changing-file-name.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## Datei über die Befehlszeile umbenennen

Du kannst jede Datei Deines Repositorys über die Befehlszeile umbenennen.

Die meisten Dateien können [direkt auf {% data variables.product.product_name %} umbenannt werden](/articles/renaming-a-file), bei manchen Dateien, beispielsweise bei Bilddateien, ist dies jedoch nur über die Befehlszeile möglich.

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. Benenne die Datei um. Gib dazu zunächst den bisherigen Dateinamen und danach den gewünschten neuen Dateinamen ein. Deine Änderung wird dadurch für den Commit bereitgestellt.
  ```shell
  $ git mv <em>old_filename</em> <em>new_filename</em>
  ```
4. Mit `git status` kannst Du den alten und den neuen Dateinamen überprüfen.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #     renamed: <em>old_filename</em> -> <em>new_filename</em>
  > #
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Rename file"
  # Gibt die verfolgten Änderungen frei und bereitet sie für den Push in das Remote-Repository vor.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

