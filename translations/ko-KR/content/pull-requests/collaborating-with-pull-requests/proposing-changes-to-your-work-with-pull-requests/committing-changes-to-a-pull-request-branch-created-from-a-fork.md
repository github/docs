---
title: 포크에서 만든 끌어오기 요청 분기에 변경 내용 커밋
intro: 끌어오기 요청 작성자의 권한으로 리포지토리의 포크에서 만든 끌어오기 요청 분기에서 변경 내용을 커밋할 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Commit to PR branch from fork
ms.openlocfilehash: 2af0bc9969d662d4b4b41331345b6d229b5a7a49
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094643'
---
다음과 같은 끌어오기 요청 분기에 대해서만 커밋을 수행할 수 있습니다.
- 푸시 액세스 권한이 있고 해당 리포지토리의 포크에서 생성된 리포지토리에서 열린 분기
- 사용자 소유의 포크에 있는 분기
- 끌어오기 요청 작성자로부터 권한이 부여된 분기
- 커밋을 방지하는 [분기 제한](/github/administering-a-repository/about-protected-branches#restrict-who-can-push-to-matching-branches)이 없는 분기

끌어오기 요청을 만든 사용자만 커밋을 사용자 소유 포크로 푸시할 수 있는 권한을 부여할 수 있습니다. 자세한 내용은 “[포크에서 만든 끌어오기 요청 분기에 대한 변경 허용](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)”을 참조하세요.

{% note %}

**참고:** 리포지토리의 포크에 대한 자체 복사본(또는 포크)을 만들고 원래 끌어오기 요청 변경 내용이 만들어진 동일한 헤드 분기에 변경 내용을 커밋하여 {% 데이터 variables.location.product_location %}을(를) 통해 리포지토리의 포크에서 끌어오기 요청 분기에 커밋할 수도 있습니다. 몇 가지 일반적인 지침은 "[포크에서 끌어오기 요청 만들기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"를 참조하세요.

{% endnote %}

1. {% data variables.product.product_name %}에서 끌어오기 요청 분기가 만들어진 포크(또는 리포지토리의 복사본)의 기본 페이지로 이동합니다.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% tip %}

 **팁:** {% data variables.product.prodname_desktop %}을 사용하여 포크를 복제하려면 "[{% data variables.product.prodname_desktop %}에 리포지토리 복제](/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop)"를 참조하세요.

 {% endtip %}
4. 현재 작업 디렉터리를 복제 대상 디렉터리를 다운로드하려는 위치로 변경합니다.
  ```shell
  $ cd open-source-projects
  ```
5. `git clone`을 입력한 다음, 3단계에서 복사한 URL을 붙여넣습니다.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/USERNAME/FORK-OF-THE-REPOSITORY
  ```
6. **Enter** 키를 누릅니다. 로컬 복제본이 만들어집니다.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/USERNAME/FORK-OF-THE-REPOSITORY
  > Cloning into `FORK-OF-THE-REPOSITORY`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
 {% tip %}

 **팁:** "오류: 대상 경로 'REPOSITORY-NAME'이(가) 이미 있고 빈 디렉터리가 아닙니다."라는 오류 메시지는 현재 작업 디렉터리에 동일한 이름의 리포지토리가 이미 포함되어 있음을 의미합니다. 오류를 해결하려면 다른 디렉터리에 포크를 복제해야 합니다.

 {% endtip %}
7. 새 복제된 리포지토리로 이동합니다.
  ```shell
  $ cd FORK-OF-THE-REPOSITORY
  ```
7. 분기를 원래 변경이 수행된 끌어오기 요청의 비교 분기로 전환합니다. 원래 끌어오기 요청으로 이동하면 끌어오기 요청의 맨 위에 비교 분기가 표시됩니다.
![compare-branch-example](/assets/images/help/pull_requests/compare-branch-example.png) 이 예제에서 비교 분기는 `test-branch`입니다.
  ```shell
  $ git checkout TEST-BRANCH
  ```

 {% tip %}

 **팁:** 예제를 포함하여 끌어오기 요청 분기에 대한 자세한 내용은 "[끌어오기 요청 만들기](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)"를 참조하세요.

 {% endtip %}
8. 이 시점에서 이 분기를 사용하여 원하는 모든 작업을 수행할 수 있습니다. 새 커밋을 푸시하거나, 일부 로컬 테스트를 실행하거나, 다른 분기를 분기에 병합할 수 있습니다. 원하는 대로 수정합니다.
9. 끌어오기 요청의 헤드 분기에 변경 내용을 커밋한 후에는 변경 내용을 원래 끌어오기 요청까지 직접 푸시할 수 있습니다. 이 예제에서 헤드 분기는 `test-branch`입니다.
  ```shell
  $ git push origin <em>test-branch</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/USERNAME/FORK-OF-THE-REPOSITORY.git
  > 12da2e9..250e946  TEST-BRANCH -> TEST-BRANCH
  ```

{% 데이터 variables.location.product_location %}의 원래 끌어오기 요청에 새 커밋이 반영됩니다.

## 추가 정보

- “[포크 정보](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)”
