---
title: Configuration d’un dépôt distant pour une duplication
intro: 'Vous devez configurer un dépôt distant qui pointe vers le dépôt en amont dans Git pour [synchroniser les modifications que vous apportez dans une duplication (fork)](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) avec le dépôt d’origine. Cela vous permet également de synchroniser les modifications apportées dans le dépôt d’origine avec la duplication (fork).'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/configuring-a-remote-for-a-fork
  - /articles/configuring-a-remote-for-a-fork
  - /github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Configure a remote repository
ms.openlocfilehash: 495d3c825356fd69c9130f8a122aa7a8702ff317
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188378'
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. Affichez le dépôt distant actuellement configuré pour votre duplication.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  ```
3. Spécifiez un nouveau dépôt distant *en amont* qui sera synchronisé avec la duplication (fork).
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
  ```
4. Vérifiez le nouveau dépôt en amont que vous avez spécifié pour votre duplication.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
  ```
