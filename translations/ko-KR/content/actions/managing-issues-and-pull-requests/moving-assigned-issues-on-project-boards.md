---
title: 프로젝트 보드에서 할당된 문제 이동
intro: '{% data variables.product.prodname_actions %}를 사용하면 문제가 할당된 경우 문제를 프로젝트 보드의 특정 열로 자동으로 이동할 수 있습니다.'
redirect_from:
  - /actions/guides/moving-assigned-issues-on-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Move assigned issues
ms.openlocfilehash: 785614a4a55704179c84e5421cd465ff99747021
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097818'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 자습서에서는 이 [작업`alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation)을 사용하여 문제가 할당된 경우 프로젝트 보드의 특정 열로 문제를 자동으로 이동하는 방법을 보여 줍니다. 예를 들어 문제가 할당되면 프로젝트 보드의 `In Progress` 열로 이동할 수 있습니다.

자습서에서는 먼저 [`alex-page/github-project-automation-plus` 작업](https://github.com/marketplace/actions/github-project-automation)을 사용하는 워크플로 파일을 만듭니다. 그런 다음 필요에 맞게 워크플로를 사용자 지정합니다.

## 워크플로 만들기

1. {% data reusables.actions.choose-repo %}
2. 리포지토리에서 프로젝트 보드를 선택합니다. 기존 프로젝트를 사용하거나 새 프로젝트를 만들 수 있습니다. 프로젝트를 만드는 방법에 대한 자세한 내용은 “[프로젝트 보드 만들기](/github/managing-your-work-on-github/creating-a-project-board)”를 참조하세요.
3. {% data reusables.actions.make-workflow-file %}
4. 다음 YAML 콘텐츠를 워크플로 파일에 복사합니다.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@5bcba1c1c091a222584d10913e5c060d32c44044
            with:
              project: Docs Work
              column: In Progress
              repo-token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
    ```

5. 워크플로 파일에서 매개 변수를 사용자 지정합니다.
   - `project`의 값을 프로젝트 보드의 이름으로 변경합니다. 이름이 같은 프로젝트 보드가 여러 개 있는 경우 `alex-page/github-project-automation-plus` 작업은 지정된 이름이 있는 모든 프로젝트에서 작동합니다.
   - `column`의 값을 문제가 할당될 때 이동하려는 열의 이름으로 변경합니다.
   - 값을 `repo-token`으로 변경합니다.
     1. 범위가 있는 {% 데이터 variables.product.pat_v1 %}을(를) 만듭니다 `repo` . 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.
     1. 이 {% 데이터 variables.product.pat_generic %}을(를) 리포지토리에 비밀로 저장합니다. 비밀을 저장하는 방법에 대한 자세한 내용은 “[암호화된 비밀](/actions/reference/encrypted-secrets)”을 참조하세요.
     1. 워크플로 파일에서 `PERSONAL_ACCESS_TOKEN`을 비밀 이름으로 바꿉니다.
6. {% data reusables.actions.commit-workflow %}

## 워크플로 테스트

리포지토리의 문제가 할당될 때마다 문제가 지정된 프로젝트 보드 열로 이동됩니다. 문제가 프로젝트 보드에 아직 없는 경우 프로젝트 보드에 추가됩니다.

리포지토리가 사용자 소유인 경우 `alex-page/github-project-automation-plus` 작업은 리포지토리의 모든 프로젝트 또는 지정된 프로젝트 이름 및 열이 있는 개인 계정에 대해 작동합니다. 마찬가지로 리포지토리가 조직 소유인 경우 작업은 리포지토리의 모든 프로젝트 또는 지정된 프로젝트 이름 및 열이 있는 조직에 대해 작동합니다.

리포지토리에서 문제를 할당하여 워크플로를 테스트합니다.

1. 리포지토리에서 이슈를 엽니다. 자세한 내용은 “[어셈블리 만들기](/github/managing-your-work-on-github/creating-an-issue)”를 참조하세요.
2. 문제를 할당합니다. 자세한 내용은 “[다른 GitHub 사용자에게 문제 할당 및 끌어오기 요청](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users)”을 참조하세요.
3. 이슈에 레이블을 지정하여 트리거된 워크플로 실행을 확인하려면 워크플로 실행 기록을 살펴봅니다. 자세한 내용은 “[워크플로 실행 기록 보기](/actions/managing-workflow-runs/viewing-workflow-run-history)”를 참조하세요.
4. 워크플로가 완료되면 할당한 문제를 지정된 프로젝트 보드 열에 추가해야 합니다.

## 다음 단계

- 프로젝트 카드 삭제 또는 보관과 같이 `alex-page/github-project-automation-plus` 작업으로 수행할 수 있는 추가 작업에 대해 자세히 알아보려면 [`alex-page/github-project-automation-plus` 작업 문서](https://github.com/marketplace/actions/github-project-automation)를 방문하세요.
