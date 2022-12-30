---
title: Non-Fast-Forward-Fehler handhaben
intro: 'Manchmal kann Git deine Änderungen nicht für Remoterepositorys durchführen, ohne dass Commits verloren gehen. Wenn dieses Problem auftritt, wird dein Push abgelehnt.'
redirect_from:
  - /articles/dealing-with-non-fast-forward-errors
  - /github/using-git/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/using-git/dealing-with-non-fast-forward-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Non-fast-forward error
ms.openlocfilehash: 59e1957bf2376462c1267527b1bc29ed9de49db9
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '145125794'
---
Wenn ein anderer Benutzer einen Push zum selben Branch durchgeführt hat wie Du, kann Git deine Änderungen nicht überführen:

```shell
$ git push origin main
> To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
>  ! [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

Du kannst dieses Problem beheben, indem du die am Remotebranch vorgenommenen Änderungen [abrufst und mit den lokal durchgeführten Änderungen mergst](/github/getting-started-with-github/getting-changes-from-a-remote-repository):

```shell
$ git fetch origin
# Fetches updates made to an online repository
$ git merge origin <em>YOUR_BRANCH_NAME</em>
# Merges updates made online with your local work
```

Du kannst auch einfach `git pull` verwenden, um beide Befehle gleichzeitig auszuführen:

```shell
$ git pull origin <em>YOUR_BRANCH_NAME</em>
# Grabs online updates and merges them with your local work
```
