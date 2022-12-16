---
title: 레이블이 추가될 때 이슈에 주석 달기
intro: '{% data variables.product.prodname_actions %}를 사용하여 특정 레이블이 적용될 때 발생하는 이슈에 자동으로 주석을 달 수 있습니다.'
redirect_from:
  - /actions/guides/commenting-on-an-issue-when-a-label-is-added
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Add label to comment on issue
ms.openlocfilehash: 02484ffce5af753f06ac0523ef8e6ab853f47454
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409043'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 자습서에서는 [`peter-evans/create-or-update-comment` 작업](https://github.com/marketplace/actions/create-or-update-comment)을 사용하여 특정 레이블이 적용될 때 이슈에 주석을 다는 방법을 보여 줍니다. 예를 들어 `help-wanted` 레이블이 이슈에 추가될 때 주석을 추가하여 기여자에게 이슈 관련 작업을 권장할 수 있습니다.

자습서에서는 먼저 [`peter-evans/create-or-update-comment` 작업](https://github.com/marketplace/actions/create-or-update-comment)을 사용하는 워크플로 파일을 만듭니다. 그런 다음 필요에 맞게 워크플로를 사용자 지정합니다.

## 워크플로 만들기

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 다음 YAML 콘텐츠를 워크플로 파일에 복사합니다.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@a35cf36e5301d70b76f316e867e7788a55a31dae
            with:
              issue-number: {% raw %}${{ github.event.issue.number }}{% endraw %}
              body: |
                This issue is available for anyone to work on. **Make sure to reference this issue in your pull request.** :sparkles: Thank you for your contribution! :sparkles:
    ```

4. 워크플로 파일의 매개 변수를 사용자 지정합니다.
   - `if: github.event.label.name == 'help-wanted'`의 `help-wanted`를 작업할 레이블로 바꿉니다. 둘 이상의 레이블에 대해 작업하려면 조건을 `||`로 구분합니다. 예를 들어 `if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'`는 `bug` 또는 `fix me` 레이블이 이슈에 추가될 때마다 주석을 답니다.
   - `body` 값을 추가할 주석으로 변경합니다. GitHub Flavored Markdown이 지원됩니다. Markdown에 대한 자세한 내용은 “[기본 쓰기 및 서식 구문](/github/writing-on-github/basic-writing-and-formatting-syntax)”을 참조하세요.
5. {% data reusables.actions.commit-workflow %}

## 워크플로 테스트

리포지토리의 이슈에 레이블이 지정될 때마다 이 워크플로가 실행됩니다. 추가된 레이블이 워크플로 파일에서 지정한 레이블 중 하나인 경우 `peter-evans/create-or-update-comment` 작업은 지정된 주석을 이슈에 추가합니다.

지정된 레이블을 이슈에 적용하여 워크플로를 테스트합니다.

1. 리포지토리에서 이슈를 엽니다. 자세한 내용은 “[이슈 만들기](/github/managing-your-work-on-github/creating-an-issue)”를 참조하세요.
2. 워크플로 파일에서 지정된 레이블을 사용하여 이슈에 레이블을 지정합니다. 자세한 내용은 “[레이블 관리](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)”를 참조하세요.
3. 이슈에 레이블을 지정하여 트리거된 워크플로 실행을 확인하려면 워크플로 실행 기록을 살펴봅니다. 자세한 내용은 “[워크플로 실행 기록 보기](/actions/managing-workflow-runs/viewing-workflow-run-history)”를 참조하세요.
4. 워크플로가 완료될 때 레이블을 지정한 이슈에 주석이 추가되어 있어야 합니다.

## 다음 단계

- `peter-evans/create-or-update-comment` 작업으로 수행할 수 있는 추가 작업(예: 반응 추가)에 대한 자세한 내용은 [`peter-evans/create-or-update-comment` 작업](https://github.com/marketplace/actions/create-or-update-comment) 설명서를 참조하세요.
