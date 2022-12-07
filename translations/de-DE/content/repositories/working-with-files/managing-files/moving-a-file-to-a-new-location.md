---
title: Verschieben einer Datei an einen neuen Speicherort
intro: 'Du kannst eine Datei in ein anderes Verzeichnis auf {% data variables.product.product_name %} verschieben oder die Befehlszeile verwenden.'
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
  ghec: '*'
topics:
  - Repositories
shortTitle: Move a file
ms.openlocfilehash: 90e9434401795b6222d6304464c5a7d3839e0b7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131979'
---
Zusätzlich zum Ändern des Dateispeicherorts kannst du auch [den Inhalt deiner Datei aktualisieren](/articles/editing-files-in-your-repository) oder ihr im selben Commit [einen neuen Namen](/articles/renaming-a-file) geben.

## Verschieben einer Datei an einen neuen Speicherort in {% data variables.product.product_name %}

{% tip %}

**Tipps**:

- Wenn du versuchst, eine Datei in einem Repository umzubenennen, auf das du keinen Zugriff hast, erstellen wir einen Fork des Projekts in deinem persönlichen Konto und helfen dir, nach dem Commit deiner Änderung einen [Pull Request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) an das Original-Repository zu senden.
- Einige Dateien, beispielsweise Bilder, kannst du nur über die Befehlszeile verschieben. Weitere Informationen findest du unter [Verschieben einer Datei an einen neuen Speicherort über die Befehlszeile](/articles/moving-a-file-to-a-new-location-using-the-command-line).
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. Navigiere in deinem Repository zu der Datei, die du verschieben möchtest.
2. Klicke zum Öffnen des Datei-Editors oben rechts in der Dateiansicht auf {% octicon "pencil" aria-label="The edit icon" %}.
![Symbol „Datei bearbeiten“](/assets/images/help/repository/move-file-edit-file-icon.png)
3. Ändere unter Beachtung der Richtlinien unter ![Bearbeiten eines Dateinamens](/assets/images/help/repository/moving_files.gif) im Feld „Dateiname“ den Namen für die Datei.
    - Um die Datei **in einen Unterordner** zu verschieben, gib den Namen des gewünschten Ordners ein, gefolgt von `/`. Dein neuer Ordnername wird ein neues Element in den Navigations-Breadcrumbs.
    - Um die Datei in ein Verzeichnis zu verschieben, das **im Verzeichnispfad über dem aktuellen Speicherort der Datei liegt**, zeige mit dem Mauszeiger auf den Anfang des Felds „Dateiname“, und gib dann `../` ein, um im Verzeichnispfad eine ganze Ebene nach oben zu wechseln. Alternativ kannst du auch die Taste `backspace` verwenden, um den Namen des übergeordneten Ordners zu bearbeiten.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Datei über die Befehlszeile an einen neuen Speicherort verschieben 

Du kannst über die Befehlszeile Dateien innerhalb eines Repositorys verschieben, indem du die Datei vom alten Speicherort entfernst und am neuen Speicherort hinzufügst.

Die meisten Dateien können [direkt in {% data variables.product.product_name %} verschoben werden](/articles/moving-a-file-to-a-new-location). Bei einigen Dateien (z. B. Bilddateien) ist das jedoch nur über die Befehlszeile möglich.

{% data reusables.command_line.manipulating_file_prereqs %}

1. Verschiebe auf dem Computer die Datei an einen neuen Speicherort innerhalb des Verzeichnisses, das beim Klonen des Repositorys lokal auf dem Computer erstellt wurde.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Mit `git status` kannst du die alten und neuen Dateispeicherorte überprüfen.
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
  # Adds the file to your local repository and stages it for commit.
  # {% data reusables.git.unstage-codeblock %}
  ```
5. Mit `git status` kannst du die für den Commit anstehenden Änderungen überprüfen.
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
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}
