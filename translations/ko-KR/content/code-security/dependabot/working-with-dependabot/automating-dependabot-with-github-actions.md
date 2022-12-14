---
title: GitHub Actions를 통한 Dependabot 자동화
intro: '{% data variables.product.prodname_actions %}를 사용하여 일반적인 {% data variables.product.prodname_dependabot %} 관련 작업을 자동화하는 방법의 예입니다.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Use Dependabot with Actions
redirect_from:
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions
ms.openlocfilehash: 3280b42309b388c5faf2071d6e3a39d9a0e58474
ms.sourcegitcommit: 67aba5f277f3a8ef2ab1ccb14465ae486eabaa2b
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165083'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot %} 및 {% data variables.product.prodname_actions %} 정보

{% data variables.product.prodname_dependabot %}은 종속성을 최신 상태로 유지하기 위해 끌어오기 요청을 만들고, 해당 끌어오기 요청이 생성될 때 {% data variables.product.prodname_actions %}를 사용하여 자동화된 작업을 수행할 수 있습니다. 예를 들어 추가 아티팩트 가져오기, 레이블 추가, 테스트 실행 또는 끌어오기 요청 수정 등이 있습니다.

## 이벤트에 응답

{% data variables.product.prodname_dependabot %}은 끌어오기 요청 및 댓글에서 {% data variables.product.prodname_actions %} 워크플로를 트리거할 수 있지만 다른 방식으로 처리되는 이벤트도 있습니다.

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} , , , `push``deployment_status` `pull_request_review_comment``deployment``pull_request_review``create`및 이벤트를 사용하여 `pull_request`{% data variables.product.prodname_dependabot %}(`github.actor == 'dependabot[bot]'`)에서 시작한 워크플로의 경우 {% endif %} 제한 사항이 적용됩니다.

- {% ifversion ghes = 3.3 %}`GITHUB_TOKEN`에는 관리자가 제한을 제거하지 않는 한 읽기 전용 권한이 있습니다.{% else %}`GITHUB_TOKEN`에는 기본적으로 읽기 전용 권한이 있습니다.{% endif %}
- {% ifversion ghes = 3.3 %}관리자가 제한을 해제하지 않으면 비밀에 액세스할 수 없습니다.{% else %}비밀은 {% data variables.product.prodname_dependabot %} 비밀의 내용에 따라 입력됩니다. {% data variables.product.prodname_actions %} 비밀을 사용할 수 없습니다.{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} 이벤트를 사용하여 `pull_request_target` {% data variables.product.prodname_dependabot %}(`github.actor == 'dependabot[bot]'`)에서 시작한 워크플로의 경우 끌어오기 요청의 기본 참조가 {% data variables.product.prodname_dependabot %}(`github.actor == 'dependabot[bot]'`)`GITHUB_TOKEN`에 의해 만들어진 경우 는 읽기 전용이며 비밀을 사용할 수 없습니다.
{% endif %}

{% ifversion actions-stable-actor-ids %}이러한 제한은 다른 행위자가 워크플로를 다시 실행하는 경우에도 적용됩니다.{% endif %}

자세한 내용은 “[GitHub Actions 및 워크플로 보안 유지: pwn 요청 방지](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/)”를 참조하세요.

{% ifversion fpt or ghec or ghes > 3.3 %}

### `GITHUB_TOKEN` 권한 변경

기본적으로 {% data variables.product.prodname_dependabot %}로 트리거된 {% data variables.product.prodname_actions %} 워크플로에는 `GITHUB_TOKEN`과 읽기 전용 권한이 제공됩니다. 워크플로의 `permissions` 키를 사용하여 토큰에 대한 액세스를 늘릴 수 있습니다.

{% raw %}

```yaml
name: CI
on: pull_request

# Set the access for individual scopes, or use permissions: write-all
permissions:
  pull-requests: write
  issues: write
  repository-projects: write
  ...

jobs:
  ...
```

{% endraw %}

자세한 내용은 “[GITHUB_TOKEN에 대한 권한 수정](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token)”을 참조하세요.

### 비밀에 액세스

{% data variables.product.prodname_dependabot %} 이벤트가 워크플로를 트리거하는 경우 워크플로에서 사용할 수 있는 유일한 비밀은 {% data variables.product.prodname_dependabot %} 비밀뿐입니다. {% data variables.product.prodname_actions %} 비밀을 사용할 수 없습니다. 따라서 {% data variables.product.prodname_dependabot %} 이벤트에 의해 트리거되는 워크플로에서 사용되는 비밀을 {% data variables.product.prodname_dependabot %} 비밀로 저장해야 합니다. 자세한 내용은 “[Dependabot에 대한 암호화된 비밀 관리](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”를 참조하세요.

{% data variables.product.prodname_dependabot %} 비밀은 `secrets` 컨텍스트에 추가되고 {% data variables.product.prodname_actions %}에 대한 비밀과 정확히 동일한 구문을 사용하여 참조됩니다. 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow)”을 참조하세요.

{% data variables.product.prodname_dependabot %} 및 다른 행위자가 트리거하는 워크플로가 있는 경우 가장 간단한 해결 방법은 작업에 필요한 권한과 이름이 동일한 {% data variables.product.prodname_dependabot %} 비밀에 토큰을 저장하는 것입니다. 그러면 워크플로는 해당 비밀에 대한 단일 호출을 포함할 수 있습니다. {% data variables.product.prodname_dependabot %}의 비밀 이름이 다른 경우 조건을 사용하여 여러 작업자가 사용할 올바른 비밀을 지정합니다. 조건을 사용하는 예시는 아래의 “[일반적인 자동화](#common-dependabot-automations)”를 참조하세요.

사용자 이름 및 암호를 사용하여 AWS의 프라이빗 컨테이너 레지스트리에 액세스하려면 워크플로에 `username` 및 `password`에 대한 비밀이 포함되어 있어야 합니다. 아래 예시에서 {% data variables.product.prodname_dependabot %}이 워크플로를 트리거하면 이름이 `READONLY_AWS_ACCESS_KEY_ID``READONLY_AWS_ACCESS_KEY`인 {% data variables.product.prodname_dependabot %} 비밀이 사용됩니다. 다른 작업자가 워크플로를 트리거하는 경우 해당 이름의 작업 비밀이 사용됩니다.

```yaml
name: CI
on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      - name: Login to private container registry for dependencies
        uses: docker/login-action@v1
        with:
          registry: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
          username: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY_ID }}{% endraw %}
          password: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY }}{% endraw %}

      - name: Build the Docker image
        run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
```

{% endif %}

{% ifversion ghes = 3.3 %}

{% note %}

**참고:** 사이트 관리자는 {% data variables.location.product_location %}에 대한 이러한 제한을 재정의할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 {% data variables.product.prodname_actions %} 문제 해결](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#troubleshooting-failures-when-dependabot-triggers-existing-workflows)”을 참조하세요.

제한 사항이 제거되는 경우 {% data variables.product.prodname_dependabot %}에서 워크플로가 트리거되면 {% data variables.product.prodname_actions %} 비밀에 액세스할 수 있으며 `permissions` 조건을 사용하여 읽기 전용 액세스에서 `GITHUB_TOKEN`의 기본 범위를 확대할 수 있습니다. “`pull_request` 이벤트 처리” 및 “`push` 이벤트 처리” 섹션의 특정 단계는 더 이상 적용되지 않으므로 무시할 수 있습니다.

{% endnote %}

### `pull_request` 이벤트 처리

워크플로에서 비밀 또는 쓰기 권한이 있는 `GITHUB_TOKEN`에 대한 액세스 권한이 필요한 경우 두 가지 옵션(`pull_request_target` 사용 또는 두 개의 별도 워크플로 사용)이 있습니다. 이 섹션에서는 `pull_request_target`과 “[`push`이벤트 처리](#handling-push-events)”에서 아래의 두 워크플로를 사용하는 방법에 대해 자세히 설명합니다.

다음은 현재 실패할 수 있는 `pull_request` 워크플로의 간단한 예시입니다.

```yaml
### This workflow now has no secrets and a read-only token
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # Always check the actor is Dependabot to prevent your workflow from failing on non-Dependabot PRs
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
```

`pull_request`를 포크에서 끌어오기 요청에 사용되는 `pull_request_target`으로 바꾸고 끌어오기 요청 `HEAD`를 명시적으로 체크 아웃할 수 있습니다.

{% warning %}

**경고:** `pull_request`대신 `pull_request_target`을 사용하면 안전하지 않은 동작에 노출됩니다. 아래 “[`push` 이벤트 처리](#handling-push-events)”에 설명된 대로 두 워크플로 메서드를 사용하는 것이 좋습니다.

{% endwarning %}

```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Workflow
on:
  pull_request_target

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          # Check out the pull request HEAD
          ref: {% raw %}${{ github.event.pull_request.head.sha }}{% endraw %}
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

또한 필요한 것보다 더 많은 권한이 있는 토큰이 유출되지 않도록, `GITHUB_TOKEN`에 부여된 액세스 권한을 축소하는 것이 좋습니다. 자세한 내용은 “[`GITHUB_TOKEN`에 대한 권한](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)”을 참조하세요.

### `push` 이벤트 처리

`push` 이벤트에 해당하는 `pull_request_target`이 없으므로 아티팩트 업로드로 끝나는 신뢰할 수 없는 워크플로 1개와 아티팩트를 다운로드하고 계속해서 처리하는 신뢰할 수 있는 두 번째 워크플로, 총 2개의 워크플로를 사용해야 합니다.

첫 번째 워크플로는 신뢰할 수 없는 작업을 수행합니다.

{% raw %}

```yaml
### This workflow doesn't have access to secrets and has a read-only token
name: Dependabot Untrusted Workflow
on:
  push

jobs:
  check-dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: ...
```

{% endraw %}

두 번째 워크플로는 첫 번째 워크플로가 성공적으로 완료된 후 신뢰할 수 있는 작업을 수행합니다.

{% raw %}

```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Trusted Workflow
on:
  workflow_run:
    workflows: ["Dependabot Untrusted Workflow"]
    types:
      - completed

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - uses: ...
```

{% endraw %}

{% endif %}

### 수동으로 워크플로 다시 실행

{% ifversion actions-stable-actor-ids %}

Dependabot 워크플로를 수동으로 다시 실행하면 다시 실행을 시작한 사용자에게 다른 권한이 있더라도 이전과 동일한 권한으로 실행됩니다. 자세한 내용은 “[워크플로 및 작업 다시 실행](/actions/managing-workflow-runs/re-running-workflows-and-jobs)”을 참조하세요.

{% else %}

실패한 Dependabot 워크플로를 수동으로 다시 실행할 수도 있으며, 이 워크플로는 읽기-쓰기 토큰과 비밀에 대한 액세스 권한을 통해 실행됩니다. 실패한 워크플로를 수동으로 다시 실행하기 전에 업데이트되는 종속성을 확인하여 변경 사항으로 인해 악의적이거나 의도하지 않은 동작이 발생하지 않도록 해야 합니다.

{% endif %}

## 일반적인 Dependabot 자동화

다음은 {% data variables.product.prodname_actions %}를 사용하여 자동화할 수 있는 일반적인 시나리오입니다.

{% ifversion ghes = 3.3 %}

{% note %}

**참고:** 사이트 관리자가 {% data variables.location.product_location %}에서 {% data variables.product.prodname_dependabot %}에 대한 제한을 재정의 `pull_request_target` 한 경우 다음 워크플로 대신 를 사용할 `pull_request` 수 있습니다.

{% endnote %}

{% endif %}

### 끌어오기 요청에 대한 메타데이터 가져오기

대량의 자동화를 사용하려면 끌어오기 요청의 내용에 대한 정보, 즉 종속성 이름이 무엇인지, 프로덕션 종속성인지, 주요 업데이트인지, 사소한 업데이트인지 또는 패치 업데이트인지를 알고 있어야 합니다.

`dependabot/fetch-metadata` 작업은 사용자에게 모든 정보를 제공합니다.

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.dependabot-metadata.outputs.dependency-names
      #  - steps.dependabot-metadata.outputs.dependency-type
      #  - steps.dependabot-metadata.outputs.update-type      
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.metadata.outputs.dependency-names
      #  - steps.metadata.outputs.dependency-type
      #  - steps.metadata.outputs.update-type      
```

{% endraw %}

{% endif %}

자세한 내용은 [`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata) 리포지토리를 참조하세요.

### 끌어오기 요청에 레이블 지정

{% data variables.product.prodname_dotcom %} 레이블을 기반으로 하는 다른 자동화 또는 심사 워크플로가 있는 경우 제공된 메타데이터에 따라 레이블을 할당하도록 작업을 구성할 수 있습니다.

예를 들어 레이블을 사용하여 모든 프로덕션 종속성 업데이트에 플래그를 지정하려는 경우:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.dependabot-metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% endif %}

### 끌어오기 요청 승인

Dependabot 끌어오기 요청을 자동으로 승인하려면 워크플로에서 {% data variables.product.prodname_cli %}를 사용할 수 있습니다.

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request_target

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

### 끌어오기 요청에서 자동 병합 사용

유지 관리자가 자동 병합에 대한 특정 끌어오기 요청을 표시하도록 허용하려면 {% data variables.product.prodname_dotcom %}의 자동 병합 기능을 사용할 수 있습니다. 이렇게 하면 분기 보호 규칙에 필요한 테스트 및 승인이 성공적으로 충족될 때 끌어오기 요청을 병합할 수 있습니다. 자세한 내용은 "[끌어오기 요청 자동 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)" 및 "[분기 보호 규칙 관리"를 참조하세요](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule).

{% note %}

**참고:** 상태 검사를 사용하여 끌어오기 요청을 테스트하는 경우 {% data variables.product.prodname_dependabot %} 끌어오기 요청에 대한 대상 분기 **를 병합하기 전에 상태 검사** 필요를 통과하도록 설정해야 합니다. 이 분기 보호 규칙은 필요한 모든 상태 검사가 통과하지 않는 한 끌어오기 요청이 병합되지 않도록 합니다. 자세한 내용은 “[분기 보호 규칙 관리](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)”를 참조하세요.

{% endnote %}

대신 {% data variables.product.prodname_actions %} 및 {% data variables.product.prodname_cli %}를 사용할 수 있습니다. 다음은 `my-dependency`에 대한 모든 패치 업데이트를 자동으로 병합하는 예제입니다.

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  contents: write
  pull-requests: write
  
jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.dependabot-metadata.outputs.dependency-names, 'my-dependency') && steps.dependabot-metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request

permissions:
  contents: write
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.metadata.outputs.dependency-names, 'my-dependency') && steps.metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

## 실패한 워크플로 실행 문제 해결

워크플로 실행이 실패하면 다음을 확인합니다.

{% ifversion ghes = 3.3 %}

- 올바른 작업자가 워크플로를 트리거하는 경우에만 워크플로를 실행합니다.
- `pull_request`에 대해 올바른 `ref`를 체크 아웃합니다.
- Dependabot이 트리거하는 `pull_request`, `pull_request_review`, `pull_request_review_comment` 또는 `push` 이벤트 내에서 비밀에 대한 액세스를 시도하지 않습니다.
- Dependabot이 트리거하는 `pull_request`, `pull_request_review`, `pull_request_review_comment` 또는 `push`이벤트 내에서 `write` 작업을 시도하지 않습니다.

{% else %}

- 올바른 작업자가 워크플로를 트리거하는 경우에만 워크플로를 실행합니다.
- `pull_request`에 대해 올바른 `ref`를 체크 아웃합니다.
- 비밀은 {% data variables.product.prodname_actions %} 비밀이 아닌 {% data variables.product.prodname_dependabot %} 비밀에서 제공됩니다.
- 올바른 권한이 있는 `GITHUB_TOKEN`이 있습니다.

{% endif %}

{% data variables.product.prodname_actions %}를 작성하고 디버깅하는 방법에 대한 자세한 내용은 “[GitHub Actions에 대해 알아보기](/actions/learn-github-actions)”을 참조하세요.
