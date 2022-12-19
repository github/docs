---
title: Eine Datei zu einem Repository hinzufügen
intro: 'Du kannst eine vorhandene Datei über die Befehlszeile in ein {% data variables.product.product_name %}-Repository hochladen und comitten.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
  - /articles/adding-a-file-to-a-repository-from-the-command-line
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-large-files/about-large-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Add a file
ms.openlocfilehash: da76e182a16b1f72b814882b816f487b8290f3be
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578908'
---
## Hinzufügen einer Datei zu einem Repository auf {% data variables.product.product_name %}

Für Dateien, die du über einen Browser zu einem Repository hinzufügst, gilt eine Beschränkung von {% data variables.large_files.max_github_browser_size %} pro Datei. Größere Dateien mit bis zu jeweils {% data variables.large_files.max_github_size %} kannst du über die Befehlszeile hinzufügen. Weitere Informationen findest du unter [Hinzufügen einer Datei zu einem Repository über die Befehlszeile](#adding-a-file-to-a-repository-using-the-command-line). Um Dateien hinzuzufügen, die größer als {% data variables.large_files.max_github_size %} sind, musst du {% data variables.large_files.product_name_long %} verwenden. Weitere Informationen findest du unter [Informationen zu großen Dateien auf {% data variables.product.product_name %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github).

{% tip %}

**Tipps:**
- Du kannst mehrere Dateien gleichzeitig zu {% data variables.product.product_name %} hochladen.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Klicke oberhalb der Dateiliste im Dropdownmenü **Datei hinzufügen** auf **Dateien hochladen**.
  ![„Dateien hochladen“ im Dropdownmenu „Datei hinzufügen“](/assets/images/help/repository/upload-files-button.png)
3. Ziehe die Datei respektive den Ordner, den/die du in das Repository hochladen möchtest, per Drag-and-Drop in die Dateistruktur.
![Drag & Drop-Bereich](/assets/images/help/repository/upload-files-drag-and-drop.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %}
6. Klicke auf **Änderungen committen**.
![Schaltfläche „Committen von Änderungen“](/assets/images/help/repository/commit-changes-button.png)

## Eine Datei über die Befehlszeile zu einem Repository hinzufügen

Du kannst eine vorhandene Datei über die Befehlszeile in ein Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} hochladen.

{% tip %}

**Tipp:** Du kannst auch [eine vorhandene Datei zu einem Repository der {% data variables.product.product_name %}-Website hinzufügen](/articles/adding-a-file-to-a-repository).

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. Verschiebe auf deinem Computer die Datei, die du zu {% data variables.product.product_name %} hochladen möchtest, in das lokale Verzeichnis, das beim Klonen des Repositorys erstellt wurde.
{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %} {% data reusables.git.stage_for_commit %}
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit. {% data reusables.git.unstage-codeblock %}
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

## Weiterführende Themen

- [Hinzufügen von lokal gehostetem Code zu {% data variables.product.product_name %}](/get-started/importing-your-projects-to-github/importing-source-code-to-github//adding-locally-hosted-code-to-github)
