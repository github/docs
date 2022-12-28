---
title: Vorgelagertes Repository in Ihren Fork mergen
intro: If you don't have push (write) access to an upstream repository, then you can pull commits from that repository into your own fork.
redirect_from:
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
shortTitle: Merge an upstream repo
ms.openlocfilehash: 7622e4865efc444a253cbbedf04ede0e47535967
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145133854"
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. Ändere das aktuelle Arbeitsverzeichnis in das lokale Projekt.
3. Checke den Branch aus, in den Du zusammenführen möchtest. In der Regel wirst du die Zusammenführung in den Standardbranch ausführen.
  ```shell
  $ git checkout <em>DEFAULT_BRANCH_NAME</em>
  ```
4. Rufe den gewünschten Branch aus dem vorgelagerten Repository ab. Auf diese Weise wird der Commit-Verlauf unverändert beibehalten.
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. Wenn Konflikte auftreten, behebe sie. Weitere Informationen findest du unter [Beheben von Mergekonflikten](/github/collaborating-with-pull-requests/addressing-merge-conflicts).
6. Gib den Merge frei.
7. Überprüfe die Änderungen, und stelle sicher, dass alles in Ordnung ist.
8. Übertrage den Merge in Dein GitHub-Repository.
  ```shell
  $ git push origin <em>DEFAULT_BRANCH_NAME</em>
  ```
