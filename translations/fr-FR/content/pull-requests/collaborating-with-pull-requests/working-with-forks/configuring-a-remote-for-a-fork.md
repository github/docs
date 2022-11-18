---
title: Configuration d’un dépôt distant pour une duplication
intro: 'Vous devez configurer un dépôt distant qui pointe vers le dépôt en amont dans Git pour [synchroniser les modifications que vous apportez dans une duplication (fork)](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) avec le dépôt d’origine. Cela vous permet également de synchroniser les modifications apportées dans le dépôt d’origine avec la duplication (fork).'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133852'
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. Affichez le dépôt distant actuellement configuré pour votre duplication.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```
3. Spécifiez un nouveau dépôt distant *en amont* qui sera synchronisé avec la duplication (fork).
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git
  ```
4. Vérifiez le nouveau dépôt en amont que vous avez spécifié pour votre duplication.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```
