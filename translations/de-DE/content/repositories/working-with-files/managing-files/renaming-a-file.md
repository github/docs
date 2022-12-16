---
title: Umbenennen einer Datei
intro: 'Du kannst Dateien direkt in deinem Repository auf {% data variables.product.product_name %} umbenennen oder die Befehlszeile verwenden.'
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
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 826c9c45ee8cace0d3e81c78fc010ac4c76f9ab1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131968'
---
## Umbenennen einer Datei in {% data variables.product.product_name %}

Durch das Umbenennen einer Datei hast du auch die Möglichkeit, [die Datei an einen neuen Speicherort zu verschieben](/articles/moving-a-file-to-a-new-location)

{% tip %}

**Tipps**:

- Wenn du versuchst, eine Datei in einem Repository umzubenennen, auf das du keinen Zugriff hast, erstellen wir einen Fork des Projekts in deinem persönlichen Konto und helfen dir, nach dem Commit deiner Änderung einen [Pull Request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) an das Original-Repository zu senden.
- Dateinamen, die in der Weboberfläche erstellt werden, dürfen nur alphanumerische Zeichen und Bindestriche (`-`) enthalten. Wenn du andere Zeichen verwenden möchtest, musst du die Dateien lokal erstellen und freigeben und sie anschließend per Push in das Repository übertragen.
- Einige Dateien, beispielsweise Bilder, kannst du nur über die Befehlszeile umbenennen. Weitere Informationen findest du unter [Umbenennen einer Datei über die Befehlszeile](/articles/renaming-a-file-using-the-command-line).

{% endtip %}

1. Navigiere innerhalb des Repositorys zu der Datei, die du umbenennen möchtest.
2. Klicke zum Öffnen des Datei-Editors oben rechts in der Dateiansicht auf {% octicon "pencil" aria-label="The edit icon" %}.
![Symbol „Datei bearbeiten"](/assets/images/help/repository/edit-file-icon.png)
3. Gib im Feld „Filename“ (Dateiname) den neuen Namen für die Datei ein. Gleichzeitig kannst du auch den Inhalt der Datei ändern.
![Bearbeiten eines Dateinamens](/assets/images/help/repository/changing-file-name.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Datei über die Befehlszeile umbenennen 

Du kannst jede Datei deines Repositorys über die Befehlszeile umbenennen.

Die meisten Dateien können [direkt auf {% data variables.product.product_name %} umbenannt werden](/articles/renaming-a-file). Bei manchen Dateien, beispielsweise bei Bilddateien, ist dies jedoch nur über die Befehlszeile möglich.

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. Benenne die Datei um. Gib dazu zunächst den bisherigen Dateinamen und danach den gewünschten neuen Dateinamen ein. Deine Änderung wird dadurch für den Commit bereitgestellt.
  ```shell
  $ git mv <em>old_filename</em> <em>new_filename</em>
  ```
4. Mit `git status` kannst du die alten und neuen Dateinamen überprüfen.
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
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

