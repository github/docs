---
title: Einen Fork synchronisieren
intro: 'Synchronisiere den Fork eines Repositorys, um ihn auf dem aktuellen Stand mit dem vorgelagerten Repository zu halten.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/syncing-a-fork
  - /articles/syncing-a-fork
  - /github/collaborating-with-issues-and-pull-requests/syncing-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /articles/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
permissions: People with write access for a forked repository can sync the fork to the upstream repository.
ms.openlocfilehash: 85b149e26cb65a428d7e9b66aea99d6b62430ae0
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188328'
---
## Synchronisieren eines Forks über die Webbenutzeroberfläche

{% ifversion syncing-fork-web-ui %}
1. Navigiere in {% data variables.product.product_name %} zur Hauptseite des geforkten Repositorys, das du mit dem vorgelagerten Repository synchronisieren möchtest.
2. Wähle das Dropdownmenü **Fork synchronisieren** aus.
    ![Hervorgehobenes Dropdownmenü „Fork synchronisieren“](/assets/images/help/repository/sync-fork-dropdown.png)
3. Überprüfe die Details zu den Commits aus dem vorgelagerten Repository, und klicke dann auf **Branch aktualisieren**.
    ![Modale Forksynchronisierung mit hervorgehobener Schaltfläche „Branch aktualisieren“](/assets/images/help/repository/update-branch-button.png) {% else %}
1. Navigiere in {% data variables.product.product_name %} zur Hauptseite des geforkten Repositorys, das du mit dem vorgelagerten Repository synchronisieren möchtest.
2. Wähle das Dropdownmenü **Vorgelagertes Repository abrufen** aus.
    ![Dropdownliste „Vorgelagertes Repository abrufen“](/assets/images/help/repository/fetch-upstream-drop-down.png)
3. Überprüfe die Details zu den Commits aus dem vorgelagerten Repository, und klicke dann auf **Abrufen und zusammenführen**.
    ![Schaltfläche „Abrufen und zusammenführen“](/assets/images/help/repository/fetch-and-merge-button.png){% endif %}

Wenn die Änderungen aus dem vorgelagerten Repository Konflikte verursachen, fordert {% data variables.product.company_short %} dich auf, einen Pull Request zu erstellen, um die Konflikte zu beheben.

## Synchronisieren eines Forkbranches mit {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Weitere Informationen zu {% data variables.product.prodname_cli %} findest du unter [Informationen zu {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli).

Verwende zum Aktualisieren des Remoteforks aus dem übergeordneten Element den Unterbefehl `gh repo sync -b BRANCHNAME`, und gib den Forknamen und den Branchnamen als Argument an.

```shell
$ gh repo sync owner/cli-fork -b BRANCH_NAME
```

Wenn die Änderungen aus dem vorgelagerten Repository Konflikte verursachen, kann {% data variables.product.prodname_cli %} keine Synchronisierung ausführen. Du kannst das Flag `-force` festlegen, um den Zielbranch zu überschreiben.

## Synchronisieren eines Forkbranches über die Befehlszeile

Bevor du den Fork mit einem vorgelagerten Repository synchronisieren kannst, musst du in Git ein Remoterepository konfigurieren, das auf das vorgelagerte Repository verweist. Weitere Informationen findest du unter [Konfigurieren eines Remoterepositorys für einen Fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Ändere das aktuelle Arbeitsverzeichnis in das lokale Projekt.
3. Rufe die Branches und die jeweiligen Commits aus dem vorgelagerten Repository ab. Commits in `BRANCHNAME` werden im lokalen Branch `upstream/BRANCHNAME` gespeichert.

  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY
  >  * [new branch]      main     -> upstream/main
  ```

4. Sieh dir den lokalen Standardbranch des Forks an. In diesem Fall verwenden wir `main`.

  ```shell
  $ git checkout main
  > Switched to branch 'main'
  ```

5. Führe die Änderungen aus dem vorgelagerten Standardbranch (in diesem Fall `upstream/main`) in deinem lokalen Standardbranch zusammen. Dadurch wird der Standardbranch deines Forks ohne Verlust der lokalen Änderungen mit dem vorgelagerten Repository synchronisiert.

  ```shell
  $ git merge upstream/main
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ```
  
  Wenn dein lokaler Branch noch keine eindeutigen Commits besitzt, führt Git eine schnelle Weiterleitung aus. Weitere Informationen findest du unter [Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) in der Git-Dokumentation.
  ```shell
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ``` 
  Wenn dein lokaler Branch eindeutige Commits hatte, musst du möglicherweise Konflikte lösen. Weitere Informationen findest du unter [Informationen zu Mergekonflikten](/github/collaborating-with-pull-requests/addressing-merge-conflicts).

{% tip %}

**Tipp:** Durch Synchronisierung des Forks wird nur die lokale Kopie des Repositorys aktualisiert. Um den Fork auf {% data variables.location.product_location %} zu aktualisieren, musst du [deine Änderungen pushen](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}
