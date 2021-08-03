---
title: Datei über die Befehlszeile an einen neuen Speicherort verschieben
intro: 'Du kannst über die Befehlszeile Dateien innerhalb eines Repositorys verschieben, indem Du die Datei vom alten Speicherort entfernst und am neuen Speicherort hinzufügst.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
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

### Weiterführende Informationen

- „[Datei über die Befehlszeile umbenennen](/articles/renaming-a-file-using-the-command-line)“
- „[Eine Datei über die Befehlszeile zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository-using-the-command-line)“
