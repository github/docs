---
title: Datei an einen neuen Speicherort verschieben
intro: 'You can move a file to a different directory on {% data variables.product.product_name %} or by using the command line.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/moving-a-file-to-a-new-location-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Move a file
---

Du kannst nicht nur den Speicherort der Datei ändern, sondern im selben Commit auch [den Inhalt Deiner Datei aktualisieren](/articles/editing-files-in-your-repository) oder [den Namen der Datei ändern](/articles/renaming-a-file).

## Moving a file to a new location on {% data variables.product.product_name %}

{% tip %}

**Tips**:

- Wenn Du versuchst, eine Datei in einem Repository zu verschieben, zu dem Du keinen Zugriff hast, erstellen wir einen Fork des Projekts unter Deinem Benutzerkonto und helfen Dir nach dem Commit Deiner Änderung, einen [Pull Request](/articles/about-pull-requests) an das Original-Repository zu senden.
- Einige Dateien, beispielsweise Bilder, kannst Du nur über die Befehlszeile verschieben. Weitere Informationen findest Du unter „[Datei über die Befehlszeile an einen neuen Speicherort verschieben](/articles/moving-a-file-to-a-new-location-using-the-command-line)“.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. Navigiere in Deinem Repository zu der Datei, die Du verschieben möchtest.
2. Klicken Sie in der oberen rechten Ecke der Dateiansicht auf {% octicon "pencil" aria-label="The edit icon" %}, um den Datei-Editor zu öffnen. ![Symbol „Edit file" (Bearbeiten einer Datei)](/assets/images/help/repository/move-file-edit-file-icon.png)
3. Gib im Feld „Filename“ (Dateiname) den neuen Namen für die Datei ein. Beachte dabei die folgenden Richtlinien: ![Einen Dateinamen bearbeiten](/assets/images/help/repository/moving_files.gif)
    - Um die Datei **in einen Unterordner** zu verschieben, gib den gewünschten Ordnernamen ein, gefolgt von einem Schrägstrich (`/`). Dein neuer Ordnername wird ein neues Element in den Navigations-Breadcrumbs.
    - Um die Datei in ein Verzeichnis zu verschieben, das **oberhalb des aktuellen Speicherorts der Datei** liegt, platziere den Mauszeiger am Anfang des Dateinamen-Felds. Gib dann entweder `../` ein, um ein ganzes Verzeichnis nach oben zu wechseln, oder drücke auf die `backspace`-Taste (Rücktaste), um den Namen des übergeordneten Ordners zu bearbeiten.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## Datei über die Befehlszeile an einen neuen Speicherort verschieben

Du kannst über die Befehlszeile Dateien innerhalb eines Repositorys verschieben, indem Du die Datei vom alten Speicherort entfernst und am neuen Speicherort hinzufügst.

Die meisten Dateien können [direkt auf {% data variables.product.product_name %} verschoben werden](/articles/moving-a-file-to-a-new-location), bei manchen Dateien, beispielsweise bei Bilddateien, ist dies jedoch nur über die Befehlszeile möglich.

{% data reusables.command_line.manipulating_file_prereqs %}

1. Verschiebe auf dem Computer die Datei an einen neuen Speicherort innerhalb des Verzeichnisses, das beim Klonen des Repositorys lokal auf dem Computer erstellt wurde.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Mit `git status` kannst Du den alten und den neuen Speicherort überprüfen.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes not staged for commit:
  > #   (use "git add/rm <file>..." to update what will be committed)
  > #   (use "git checkout -- <file>..." to discard changes in working directory)
  > #
  > #     deleted:    /<em>old-folder</em>/<em>image.png</em>
  > #
  > # Untracked files:
  > #   (use "git add <file>..." to include in what will be committed)
  > #
  > #     /<em>new-folder</em>/<em>image.png</em>
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
{% data reusables.git.stage_for_commit %} Dadurch wird die Datei am alten Speicherort gelöscht (`git rm`) und am neuen Speicherort hinzugefügt (`git add`).
  ```shell
  $ git add .
  # Fügt die Datei zu Deinem lokalen Repository hinzu und stellt sie für den Commit bereit.
  # {% data reusables.git.unstage-codeblock %}
  ```
5. Mit `git status` kannst Du die für den Commit vorgemerkten Änderungen überprüfen.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #    renamed:    /old-folder/image.png -> /new-folder/image.png
  # Displays the changes staged for commit
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Move file to new directory"
  # Gib die verfolgten Änderungen für den Commit frei und bereitet sie für den Push zum Remote-Repository vor.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}
