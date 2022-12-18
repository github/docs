---
title: 워크플로 트리거
shortTitle: Trigger a workflow
intro: '{% data variables.product.prodname_actions %} 워크플로를 자동으로 트리거하는 방법'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cd91670d3d06d4d8f954afa114f6c4f189825d86
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191905'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 워크플로 트리거 정보

{% data reusables.actions.about-triggers %}

워크플로 트리거는 `on` 키로 정의됩니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/articles/workflow-syntax-for-github-actions#on)”을 참조하세요.

워크플로 실행을 트리거하려면 다음 단계를 수행합니다.

1. 리포지토리에서 이벤트가 발생합니다. 이벤트에 연결된 커밋 SHA 및 Git 참조가 있습니다.
1. {% data variables.product.product_name %}는 리포지토리의 `.github/workflows`디렉터리에서 이벤트의 연결된 커밋 SHA 또는 Git 참조에 있는 워크플로 파일을 검색합니다.
1. `on:` 값이 트리거 이벤트와 일치하는 모든 워크플로에 대해 워크플로 실행이 트리거됩니다. 또한 일부 이벤트를 실행하려면 워크플로 파일이 리포지토리의 기본 분기에 있어야 합니다.

  각 워크플로 실행은 이벤트의 연결된 커밋 SHA 또는 Git 참조에 있는 워크플로의 버전을 사용합니다. 워크플로가 실행되면 {% data variables.product.product_name %}는 실행기 환경에서 `GITHUB_SHA`(커밋 SHA) 및 `GITHUB_REF`(Git 참조) 환경 변수를 설정합니다. 자세한 내용은 “[환경 변수 사용](/actions/automating-your-workflow-with-github-actions/using-environment-variables)”을 참조하세요.

### 워크플로에서 워크플로 트리거

{% data reusables.actions.actions-do-not-trigger-workflows %} 자세한 내용은 “[GITHUB_TOKEN으로 인증](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”을 참조하세요.

워크플로 실행 내에서 워크플로를 트리거하려는 경우 토큰이 필요한 이벤트를 트리거하는 대신 `GITHUB_TOKEN` {% data variables.product.pat_generic %}를 사용할 수 있습니다. {% data variables.product.pat_generic %}을(를) 만들고 비밀로 저장해야 합니다. {% data variables.product.prodname_actions %} 사용 비용을 최소화하려면 재귀 또는 의도하지 않은 워크플로 실행을 만들지 않도록 합니다. {% data variables.product.pat_generic %}을(를) 만드는 방법에 대한 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기"를 참조하세요](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). {% data variables.product.pat_generic %}을 비밀로 저장하는 방법에 대한 자세한 내용은 "[암호화된 비밀 만들기 및 저장"을 참조하세요](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets).

예를 들어 다음 워크플로는 {% data variables.product.pat_generic %}(라는 `MY_TOKEN`비밀로 저장됨)를 사용하여 {% data variables.product.prodname_cli %}을 통해 문제에 레이블을 추가합니다. 레이블이 추가되면 실행되는 모든 워크플로는 이 단계가 수행되면 실행됩니다.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.MY_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

반대로 다음 워크플로는 `GITHUB_TOKEN`을 사용하여 이슈에 레이블을 추가합니다. 레이블이 추가될 때 실행되는 워크플로는 트리거되지 않습니다.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

## 이벤트를 사용하여 워크플로 트리거

`on` 키를 사용하여 워크플로를 트리거하는 이벤트를 지정합니다. 사용할 수 있는 이벤트에 대한 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/using-workflows/events-that-trigger-workflows)”를 참조하세요.

### 단일 이벤트 사용

{% data reusables.actions.on-single-example %}

### 여러 이벤트 사용

{% data reusables.actions.on-multiple-example %}

### 여러 이벤트와 함께 활동 유형 및 필터 사용

작업 유형 및 필터를 사용하여 워크플로가 실행되는 시기를 추가로 제어할 수 있습니다. 자세한 내용은 [이벤트 작업 유형 사용](#using-event-activity-types) 및 [필터 사용](#using-filters)을 참조하세요. {% data reusables.actions.actions-multiple-types %}

## 이벤트 작업 유형 사용

{% data reusables.actions.actions-activity-types %}

## 필터 사용

{% data reusables.actions.actions-filters %}

### 필터를 사용하여 끌어오기 요청 이벤트에 특정 분기를 대상으로 지정

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### 필터를 사용하여 푸시 이벤트에 특정 분기 또는 태그를 대상으로 지정

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### 필터를 사용하여 끌어오기 요청 또는 푸시 이벤트에 특정 경로를 대상으로 지정

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### 필터를 사용하여 워크플로 실행 이벤트에 특정 분기를 대상으로 지정

{% data reusables.actions.workflows.section-specifying-branches %}

## 수동으로 트리거된 워크플로에 대한 입력 정의

{% data reusables.actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## 재사용 가능한 워크플로에 대한 입력, 출력, 비밀 정의

{% data reusables.actions.reusable-workflows-enterprise-beta %}

재사용 가능한 워크플로가 호출 워크플로에서 받아야 하는 입력 및 비밀을 정의할 수 있습니다. 재사용 가능한 워크플로가 호출 워크플로에 사용할 수 있도록 하는 출력을 지정할 수도 있습니다. 자세한 내용은 “[워크플로 다시 사용](/actions/using-workflows/reusing-workflows)”을 참조하세요.

{% endif %}

## 이벤트 정보 사용

워크플로 실행을 트리거한 이벤트에 대한 정보는 `github.event` 컨텍스트를 참조하세요. `github.event` 컨텍스트의 속성은 워크플로를 트리거한 이벤트 유형에 따라 달라집니다. 예를 들어 이슈에 레이블이 지정되면 트리거되는 워크플로에는 이슈 및 레이블에 대한 정보가 있습니다.

### 이벤트의 모든 속성 보기

일반적인 속성 및 예제 페이로드에 대한 웹후크 이벤트 설명서를 참조하세요. 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)”를 참조하세요.

전체 `github.event` 컨텍스트를 인쇄하여 워크플로를 트리거한 이벤트에 사용할 수 있는 속성을 확인할 수도 있습니다.

```yaml
jobs:
  print_context:
    runs-on: ubuntu-latest
    steps:
      - env:
          EVENT_CONTEXT: {% raw %}${{ toJSON(github.event) }}{% endraw %}
        run: |
          echo $EVENT_CONTEXT
```

### 이벤트 속성 액세스 및 사용

워크플로의 `github.event` 컨텍스트를 사용할 수 있습니다. 예를 들어 `package*.json`, `.github/CODEOWNERS` 또는 `.github/workflows/**`를 변경하는 끌어오기 요청이 열리면 다음 워크플로가 실행됩니다. 끌어오기 요청 작성자(`github.event.pull_request.user.login`)가 `octobot` 또한 `dependabot[bot]`이 아닌 경우 워크플로는 {% data variables.product.prodname_cli %}를 사용하여 끌어오기 요청(`github.event.pull_request.number`)에 레이블을 지정하고 주석을 적용합니다.

```yaml
on:
  pull_request:
    types:
      - opened
    paths:
      - '.github/workflows/**'
      - '.github/CODEOWNERS'
      - 'package*.json'

jobs:
  triage:
    if: >-
      github.event.pull_request.user.login != 'octobot' &&
      github.event.pull_request.user.login != 'dependabot[bot]'
    runs-on: ubuntu-latest
    steps:
      - name: "Comment about changes we can't accept"
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          PR: {% raw %}${{ github.event.pull_request.html_url }}{% endraw %}
        run: |
          gh pr edit $PR --add-label 'invalid'
          gh pr comment $PR --body 'It looks like you edited `package*.json`, `.github/CODEOWNERS`, or `.github/workflows/**`. We do not allow contributions to these files. Please review our [contributing guidelines](https://github.com/octo-org/octo-repo/blob/main/CONTRIBUTING.md) for what contributions are accepted.'
```

컨텍스트에 대한 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts)”를 참조하세요. 이벤트 페이로드에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)”를 참조하세요.

## 워크플로 실행 방법 추가 제어

이벤트, 이벤트 작업 유형 또는 이벤트 필터가 제공하는 것보다 더 세부적인 제어를 원하는 경우 조건부 및 환경을 사용하여 워크플로의 개별 작업 또는 단계가 실행될지 여부를 제어할 수 있습니다.

### 조건부 사용

조건부를 사용하여 워크플로의 작업 또는 단계 실행 여부를 추가로 제어할 수 있습니다.

#### 이벤트 페이로드에서 값을 사용하는 예제

예를 들어 이슈에 특정 레이블이 추가될 때 워크플로를 실행하려면 `issues labeled` 이벤트 작업 유형에서 트리거하고 조건부를 사용하여 워크플로를 트리거한 레이블을 확인할 수 있습니다. 다음 워크플로는 워크플로 리포지토리의 이슈에 레이블이 추가될 때 실행되지만 레이블에 `bug`라는 이름이 지정된 경우에만 `run_if_label_matches` 작업이 실행됩니다.

```yaml
on:
  issues:
    types:
      - labeled

jobs:
  run_if_label_matches:
    if: github.event.label.name == 'bug'
    runs-on: ubuntu-latest
    steps:
      - run: echo 'The label was bug'
```

#### 이벤트 유형을 사용하는 예제

예를 들어 워크플로를 트리거한 이벤트에 따라 다른 작업 또는 단계를 실행하려는 경우 조건부를 사용하여 이벤트 컨텍스트에 특정 이벤트 유형이 있는지 확인할 수 있습니다. 이슈 또는 끌어오기 요청이 종결될 때마다 다음 워크플로가 실행됩니다. 이슈가 종결되었기 때문에 워크플로가 실행된 경우 `github.event` 컨텍스트에 `issue`에 대한 값은 포함되지만 `pull_request`에 대한 값은 포함되지 않습니다. 따라서 `if_issue` 단계가 실행되지만 `if_pr` 단계는 실행되지 않습니다. 반대로 끌어오기 요청이 종결되어 워크플로가 실행되면 `if_pr` 단계가 실행되지만 `if_issue` 단계가 실행되지 않습니다.

```yaml
on:
  issues:
    types:
      - closed
  pull_request:
    types:
      - closed

jobs:
  state_event_type:
    runs-on: ubuntu-latest
    steps:
    - name: if_issue
      if: github.event.issue
      run: |
        echo An issue was closed
    - name: if_pr
      if: github.event.pull_request
      run: |
        echo A pull request was closed
```

이벤트 컨텍스트에서 사용할 수 있는 정보에 대한 자세한 내용은 “[이벤트 정보 사용](#using-event-information)”을 참조하세요. 조건부를 사용하는 방법에 대한 자세한 내용은 “[언어 식](/actions/learn-github-actions/expressions)”을 참조하세요.

### 환경을 사용하여 워크플로 작업을 수동으로 트리거

워크플로에서 특정 작업을 수동으로 트리거하려는 경우 특정 팀 또는 사용자의 승인이 필요한 환경을 사용할 수 있습니다. 먼저 필요한 검토자를 사용하여 환경을 구성합니다. 자세한 내용은 “[배포에 환경 사용](/actions/deployment/targeting-different-environments/using-environments-for-deployment)”을 참조하세요. 그런 다음, `environment:` 키를 사용하여 워크플로 작업에서 환경 이름을 참조합니다. 환경을 참조하는 모든 작업은 하나 이상의 검토자가 작업을 승인할 때까지 실행되지 않습니다.

예를 들어 다음 워크플로는 main에 대한 푸시가 있을 때마다 실행됩니다. `build` 작업은 항상 실행됩니다. `publish` 작업은 `build` 작업이 성공적으로 완료된 후와(원인: `needs: [build]`)`production` 환경에 대한 모든 규칙이 통과된 후(원인: `environment: production`)에만 실행됩니다.

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: build
        echo 'building'

  publish:
    needs: [build]
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: publish
        echo 'publishing'
```

{% note %}

{% data reusables.gated-features.environments %}

{% endnote %}

## 사용 가능한 이벤트

사용 가능한 전체 이벤트 목록은 “[워크플로를 트리거하는 이벤트](/actions/using-workflows/events-that-trigger-workflows)”를 참조하세요.
