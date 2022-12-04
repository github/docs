---
title: Configuración de un repositorio remoto para una bifurcación
intro: 'Debes configurar un remoto que apunte al repositorio ascendente en Git para [sincronizar los cambios que realizas en una bifurcación](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) con el repositorio original. Esto también te permite sincronizar los cambios en el repositorio original con la bifurcación.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188388'
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. Enumera el repositorio remoto configurado actualmente para tu bifurcación.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  ```
3. Especifica un nuevo repositorio *ascendente* remoto que se sincronizará con la bifurcación.
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
  ```
4. Verifica el nuevo repositorio ascendente que especificaste para tu bifurcación.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
  ```
