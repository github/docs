---
title: 포크에 대한 원격 리포지토리 구성
intro: '원본 리포지토리와 [포크에서 변경한 내용을 동기화](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)하려면 Git의 업스트림 리포지토리를 가리키는 원격을 구성해야 합니다. 이렇게 하면 원본 리포지토리의 변경 내용을 포크와 동기화할 수도 있습니다.'
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
ms.contentlocale: ko-KR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188377'
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. 포크에 대해 현재 구성된 원격 리포지토리를 나열합니다.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  ```
3. 포크와 동기화할 새 원격 *업스트림* 리포지토리를 지정합니다.
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
  ```
4. 포크에 대해 지정한 새 업스트림 리포지토리를 확인합니다.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
  ```
