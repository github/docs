---
title: Ein Repository duplizieren
intro: 'Um einen Mirror eines Repository zu behalten, ohne es zu forken, kannst du einen speziellen Klonbefehl ausführen und dann einen Spiegel-Push in das neue Repository durchführen.'
redirect_from:
  - /articles/duplicating-a-repo
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 4c893597918cb4837e88d13aa6a51b769ab13dd1
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135486'
---
{% ifversion fpt or ghec %}

{% note %}

**Hinweis:** Wenn du ein Projekt auf einem anderen Versionskontrollsystem gehostet hast, kannst du dein Projekt automatisch mit dem {% data variables.product.prodname_dotcom %}-Importer in {% data variables.product.prodname_dotcom %} importieren. Weitere Informationen findest du unter [Informationen über {% data variables.product.prodname_dotcom %}-Importer](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer).

{% endnote %}

{% endif %}

Bevor du das ursprüngliche Repository an deine neue Kopie oder _Spiegelung_ des Repositorys übertragen kannst, musst du [das neue Repository](/articles/creating-a-new-repository) unter {% data variables.location.product_location %} erstellen. In diesen Beispielen sind `exampleuser/new-repository` oder `exampleuser/mirrored` die Spiegel.

## Ein Repository spiegeln

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Erstelle einen leeren Klon des Repositorys.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. Führe den Spiegel-Push in das neue Repository durch.
  ```shell
  $ cd OLD-REPOSITORY.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
4. Entferne das temporäre lokale Repository, das du früher erstellt hast.
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## Ein Repository spiegeln, das {% data variables.large_files.product_name_long %}-Objekte enthält

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Erstelle einen leeren Klon des Repositorys. Ersetze den Beispiel-Benutzernamen durch den Namen der Person oder Organisation, der das Repository gehört, und ersetze den Beispiel-Repository-Namen durch den Namen des Repositorys, das du duplizieren möchtest.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. Navigiere zu dem Repository, das du gerade geklont hast.
  ```shell
  $ cd OLD-REPOSITORY.git
  ```
4. Rufe die {% data variables.large_files.product_name_long %}-Objekte des Repositorys ab.
  ```shell
  $ git lfs fetch --all
  ```
5. Führe den Spiegel-Push in das neue Repository durch.
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
6. Übertrage die {% data variables.large_files.product_name_long %}-Objekte des Repositorys zu deinem Spiegel.
  ```shell
  $ git lfs push --all https://github.com/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
7. Entferne das temporäre lokale Repository, das du früher erstellt hast.
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## Ein Repository an einem anderen Ort spiegeln

Wenn du ein Repository an einem anderen Ort spiegeln und Aktualisierungen vom Original-Repository abrufen möchtest, kannst du einen Spiegel klonen und die Änderungen regelmäßig per Push übertragen.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Erstelle einen leeren gespiegelten Klon des Repositorys.
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/REPOSITORY-TO-MIRROR.git
  ```
3. Lege den Push-Ort auf deinen Spiegel fest.
  ```shell
  $ cd REPOSITORY-TO-MIRROR
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/MIRRORED
  ```
Wie ein leerer Klon enthält ein gespiegelter Klon alle Remote-Branches und Tags. Alle lokalen Verweise werden jedoch bei jedem Abrufen überschrieben, sodass er immer mit dem Original-Repository übereinstimmt. Das Festlegen einer Push-URL vereinfacht Pushes zu deinem Spiegel.

4. Um deinen Spiegel zu aktualisieren, rufe Änderungen ab und übertrage sie per Push.
  ```shell
  $ git fetch -p origin
  $ git push --mirror
  ```
{% ifversion fpt or ghec %}
## Weiterführende Themen

* [Pushen von Änderungen an GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github)
* [Informationen zu Git Large File Storage und GitHub Desktop](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)
* [Informationen zu GitHub Importer](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)

{% endif %}
