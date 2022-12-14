---
title: 카드가 프로젝트 보드 열에 추가되면 레이블 제거
intro: '{% data variables.product.prodname_actions %}을(를) 사용하여 {% data variables.projects.projects_v1_board %}의 특정 열에 문제 또는 끌어오기 요청이 추가되면 레이블을 자동으로 제거할 수 있습니다.'
redirect_from:
  - /actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Remove label when adding card
ms.openlocfilehash: d86d9e5ad198c9cf8811b47f2a6c8a7114e20104
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185631'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 자습서에서는 조건부와 함께 작업을 사용하여 [`actions/github-script`](https://github.com/marketplace/actions/github-script) {% data variables.projects.projects_v1_board %}의 특정 열에 추가된 문제 및 끌어오기 요청에서 레이블을 제거하는 방법을 보여 줍니다. 예를 들어 프로젝트 카드를 `Done` 열로 이동할 때 `needs review` 레이블을 제거할 수 있습니다.

자습서에서는 먼저 [`actions/github-script` 작업](https://github.com/marketplace/actions/github-script)을 사용하는 워크플로 파일을 만듭니다. 그런 다음 필요에 맞게 워크플로를 사용자 지정합니다.

## 워크플로 만들기

1. {% data reusables.actions.choose-repo %}
2. 리포지토리에 속하는 {% 데이터 variables.projects.projects_v1_board %}을 선택합니다. 이 워크플로는 사용자 또는 조직에 속한 프로젝트에서 사용할 수 없습니다. 기존 {% data variables.projects.projects_v1_board %}을(를) 사용하거나 새 {% data variables.projects.projects_v1_board %}을(를) 만들 수 있습니다. 프로젝트를 만드는 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_project_v1 %} 만들기"를 참조하세요](/github/managing-your-work-on-github/creating-a-project-board).
3. {% data reusables.actions.make-workflow-file %}
4. 다음 YAML 콘텐츠를 워크플로 파일에 복사합니다.

    ```yaml{:copy}
    name: Remove a label
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_label:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                // this gets the number at the end of the content URL, which should be the issue/PR number
                const issue_num = context.payload.project_card.content_url.split('/').pop()
                github.rest.issues.removeLabel({
                  issue_number: issue_num,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  name: ["needs review"]
                })
    ```

5. 워크플로 파일에서 매개 변수를 사용자 지정합니다.
   - `github.event.project_card.column_id == '12345678'`에서 `12345678`를 해당 위치로 이동된 문제 및 끌어오기 요청의 레이블을 해제하려는 열의 ID로 바꿉니다.

     열 ID를 찾으려면 {% data variables.projects.projects_v1_board %}로 이동합니다. 열 제목 옆에 있는 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음 **열 복사 링크** 를 클릭합니다. 열 ID는 복사된 링크의 끝에 있는 숫자입니다. 예를 들어 `24687531`은 `https://github.com/octocat/octo-repo/projects/1#column-24687531`의 열 ID입니다.

     둘 이상의 레이블에 대해 작업하려면 조건을 `||`로 구분합니다. 예를 들어 `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'`은 프로젝트 카드가 `12345678` 열 또는 `87654321` 열에 추가될 때마다 작동합니다. 열은 다른 프로젝트 보드에 있을 수 있습니다.
   - 함수의 `github.rest.issues.removeLabel()` 값을 `name` 지정된 열로 이동된 문제 또는 끌어오기 요청에서 제거하려는 레이블의 이름으로 변경합니다. 레이블에 대한 자세한 내용은 “[레이블 관리](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)”를 참조하세요.
6. {% data reusables.actions.commit-workflow %}

## 워크플로 테스트

리포지토리의 {% data variables.projects.projects_v1_board %}에 있는 프로젝트 카드가 이동할 때마다 이 워크플로가 실행됩니다. 카드가 문제 또는 끌어오기 요청이고 지정한 열로 이동되면 워크플로는 문제 또는 끌어오기 요청에서 지정된 레이블을 제거합니다. 메모인 카드는 영향을 받지 않습니다.

{% data variables.projects.projects_v1_board %}의 문제를 대상 열로 이동하여 워크플로를 테스트합니다.

1. 리포지토리에서 이슈를 엽니다. 자세한 내용은 “[이슈 만들기](/github/managing-your-work-on-github/creating-an-issue)”를 참조하세요.
2. 워크플로를 제거할 레이블과 관련된 문제에 레이블을 지정합니다. 자세한 내용은 “[레이블 관리](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)”를 참조하세요.
3. 워크플로 파일에 지정한 {% data variables.projects.projects_v1_board %} 열에 문제를 추가합니다. 자세한 내용은 “[{% data variables.product.prodname_project_v1 %}에 문제 추가 및 끌어오기 요청](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)”을 참조하세요.
4. 프로젝트에 문제를 추가하여 트리거된 워크플로 실행을 보려면 워크플로 실행 기록을 확인합니다. 자세한 내용은 “[워크플로 실행 기록 보기](/actions/managing-workflow-runs/viewing-workflow-run-history)”를 참조하세요.
5. 워크플로가 완료되면 프로젝트 열에 추가한 문제에 지정된 레이블이 제거되어야 합니다.

## 다음 단계

- 작업으로 `actions/github-script` 수행할 수 있는 추가 작업에 대한 자세한 내용은 [작업 설명서를 참조`actions/github-script`하세요](https://github.com/marketplace/actions/github-script).
- [GitHub 검색](https://github.com/search?q=%22uses:+actions/github-script%22&type=code)을 통해 이 작업을 사용하는 워크플로의 예제를 확인합니다.
