---
title: Настройка удаленного репозитория для вилки
intro: 'Необходимо настроить удаленный репозиторий, указывающий на вышестоящий репозиторий в Git, чтобы [синхронизировать изменения, внесенные в вилку](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) с исходным репозиторием. Это также позволяет синхронизировать изменения, внесенные в исходный репозиторий с созданной вилкой.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188387'
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. Получите текущий настроенный удаленный репозиторий для вилки.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  ```
3. Укажите новый удаленный *вышестоящий* репозиторий, который будет синхронизирован с вилкой.
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
  ```
4. Проверьте новый вышестоящий репозиторий, указанный для вилки.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
  ```
