---
title: Ein Remote-Repository für einen Fork konfigurieren
intro: Du musst ein Remote-Repository konfigurieren, das auf das vorgelagerte Repository in Git verweist, um [die Synchronisation der in einem Fork vorgenommenen Änderungen](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) mit dem ursprünglichen Repository zu ermöglichen. Damit kannst du auch Änderungen im ursprünglichen Repository mit dem Fork synchronisieren.
redirect_from:
- /github/collaborating-with-issues-and-pull-requests/working-with-forks/configuring-a-remote-for-a-fork
- /articles/configuring-a-remote-for-a-fork
- /github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork
- /github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Pull requests
shortTitle: Configure a remote
ms.openlocfilehash: d474b56a9b1881d9511ccf9e239bb54e26967784
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145133853"
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. Liste das aktuell konfigurierte Remote-Repository für deine Fork auf.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```
3. Lege ein neues *Upstream*-Remoterepository fest, das mit dem Fork synchronisiert wird.
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git
  ```
4. Überprüfe das neue vorgelagerte Repository, das du für deinen Fork angegeben hast.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```
