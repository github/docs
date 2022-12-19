---
title: 업스트림 리포지토리를 포크에 병합
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
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145139496"
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. 현재 작업 디렉터리를 로컬 프로젝트로 변경합니다.
3. 병합하려는 분기를 확인합니다. 일반적으로 기본 분기에 병합됩니다.
  ```shell
  $ git checkout <em>DEFAULT_BRANCH_NAME</em>
  ```
4. 업스트림 리포지토리에서 원하는 분기를 끌어옵니다. 이 메서드는 수정 없이 커밋 기록을 유지합니다.
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. 충돌이 있는 경우 해결합니다. 자세한 내용은 “[병합 충돌 해결](/github/collaborating-with-pull-requests/addressing-merge-conflicts)”을 참조하세요.
6. 병합을 커밋합니다.
7. 변경 내용을 검토하고 만족스러운지 확인합니다.
8. GitHub 리포지토리에 병합을 푸시합니다.
  ```shell
  $ git push origin <em>DEFAULT_BRANCH_NAME</em>
  ```
