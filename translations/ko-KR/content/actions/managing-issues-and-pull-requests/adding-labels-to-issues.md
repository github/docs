---
title: 이슈에 레이블 추가
shortTitle: Add labels to issues
intro: '{% data variables.product.prodname_actions %}를 사용하여 이슈에 자동으로 레이블을 지정할 수 있습니다.'
redirect_from:
  - /actions/guides/adding-labels-to-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: a3523069b9422ecd8107007ca5e00fb0071dd738
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185563'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 자습서에서는 워크플로의 [`actions/github-script` 작업](https://github.com/marketplace/actions/github-script)을 사용하여 새로 열렸거나 다시 열린 이슈에 레이블을 지정하는 방법을 보여 줍니다. 예를 들어 이슈가 열리거나 다시 열릴 때마다 `triage` 레이블을 추가할 수 있습니다. 그런 다음, `triage` 레이블이 있는 이슈를 필터링하여 심사해야 하는 모든 이슈를 확인할 수 있습니다.

작업을 `actions/github-script` 통해 워크플로에서 {% data variables.product.prodname_dotcom %} API를 쉽게 사용할 수 있습니다.

자습서에서는 먼저 [`actions/github-script` 작업](https://github.com/marketplace/actions/github-script)을 사용하는 워크플로 파일을 만듭니다. 그런 다음 필요에 맞게 워크플로를 사용자 지정합니다.

## 워크플로 만들기

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 다음 YAML 콘텐츠를 워크플로 파일에 복사합니다.
  
    ```yaml{:copy}
    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                github.rest.issues.addLabels({
                  issue_number: context.issue.number,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  labels: ["triage"]
                })
    ```

4. 워크플로 파일에서 `script` 매개 변수를 사용자 지정합니다.
   - `issue_number`, `owner`및 `repo` 값은 개체를 `context` 사용하여 자동으로 설정됩니다. 이러한 항목은 변경할 필요가 없습니다.
   - `labels` 값을 이슈에 추가할 레이블 목록으로 변경합니다. 여러 레이블을 쉼표로 구분합니다. 예: `["help wanted", "good first issue"]`. 레이블에 대한 자세한 내용은 “[레이블 관리](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)”를 참조하세요.
5. {% data reusables.actions.commit-workflow %}

## 워크플로 테스트

리포지토리의 이슈가 열리거나 다시 열릴 때마다 이 워크플로는 지정된 레이블을 이슈에 추가합니다.

리포지토리에서 이슈를 만들어 워크플로를 테스트합니다.

1. 리포지토리에서 이슈를 만듭니다. 자세한 내용은 “[이슈 만들기](/github/managing-your-work-on-github/creating-an-issue)”를 참조하세요.
2. 이슈를 만들어 트리거된 워크플로 실행을 확인하려면 워크플로 실행 기록을 살펴봅니다. 자세한 내용은 “[워크플로 실행 기록 보기](/actions/managing-workflow-runs/viewing-workflow-run-history)”를 참조하세요.
3. 워크플로가 완료될 때 만든 이슈에 지정된 레이블이 추가되어 있어야 합니다.

## 다음 단계

- 작업으로 `actions/github-script` 수행할 수 있는 추가 작업에 대한 자세한 내용은 [작업 설명서를 참조`actions/github-script`하세요](https://github.com/marketplace/actions/github-script).
- 워크플로를 트리거할 수 있는 다양한 이벤트에 대한 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows#issues)”를 참조하세요.
- [GitHub 검색](https://github.com/search?q=%22uses:+actions/github-script%22&type=code)을 통해 이 작업을 사용하는 워크플로의 예제를 확인합니다.
