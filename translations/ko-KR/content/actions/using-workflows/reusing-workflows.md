---
title: 워크플로 다시 사용
shortTitle: Reuse workflows
intro: 기존 워크플로를 다시 사용하여 워크플로를 만들 때 중복을 방지하는 방법을 알아봅니다.
redirect_from:
  - /actions/learn-github-actions/reusing-workflows
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: 2053b2bfd653a1f6633ab5d568e5b2fdb75d7335
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191928'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.reusable-workflows-enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

워크플로를 복사하여 다른 워크플로로 붙여넣는 대신 워크플로를 재사용할 수 있습니다. 사용자와 재사용 가능한 워크플로에 대한 액세스 권한이 있는 사용자는 다른 워크플로에서 재사용 가능한 워크플로를 호출할 수 있습니다.

워크플로를 다시 사용하면 중복을 방지할 수 있습니다. 이렇게 하면 워크플로를 더 쉽게 유지 관리할 수 있으며 작업과 마찬가지로 다른 사용자의 작업을 기반으로 하여 새 워크플로를 더 빠르게 만들 수 있습니다. 워크플로 재사용은 또한 잘 설계되고 이미 테스트되어 효과적인 것으로 입증된 워크플로를 사용할 수 있도록 지원하여 모범 사례를 촉진합니다. 조직은 중앙에서 유지 관리할 수 있는 재사용 가능한 워크플로 라이브러리를 빌드할 수 있습니다.

아래 다이어그램은 재사용 가능한 워크플로를 사용하는 진행 중인 워크플로 실행을 보여 줍니다.

* 다이어그램 왼쪽에 있는 세 개의 빌드 작업이 각각 성공적으로 완료되면 "배포"라는 종속 작업이 실행됩니다.
* "배포" 작업은 "스테이징", "검토" 및 "프로덕션"의 세 가지 작업을 포함하는 재사용 가능한 워크플로를 호출합니다.
* “프로덕션” 배포 작업은 “스테이징” 작업이 성공적으로 완료된 후에만 실행됩니다.
* 작업이 환경을 대상으로 하는 경우 워크플로 실행에는 작업의 단계 수를 보여 주는 진행률 표시줄이 표시됩니다. 아래 다이어그램에서 "프로덕션" 작업에는 8단계가 포함되어 있으며 6단계는 현재 처리 중입니다.
* 재사용 가능한 워크플로를 사용하여 배포 작업을 실행하면 워크플로에서 코드를 복제하지 않고 각 빌드에 대해 해당 작업을 실행할 수 있습니다.

![배포를 위해 재사용 가능한 워크플로의 다이어그램](/assets/images/help/images/reusable-workflows-ci-cd.png)

다른 워크플로를 사용하는 워크플로를 “호출자” 워크플로라고 합니다. 재사용 가능한 워크플로는 “호출된” 워크플로입니다. 한 호출자 워크플로는 여러 호출된 워크플로를 사용할 수 있습니다. 호출된 각 워크플로는 한 줄에 참조됩니다. 그 결과 호출자 워크플로 파일에는 몇 줄의 YAML만 포함될 수 있지만 실행할 때 많은 수의 작업을 수행할 수 있습니다. 워크플로를 다시 사용하면 호출자 워크플로의 일부인 것처럼 호출된 전체 워크플로가 사용됩니다.

다른 리포지토리의 워크플로를 다시 사용하는 경우 호출된 워크플로의 모든 작업은 호출자 워크플로의 일부인 것처럼 실행됩니다. 예를 들어 호출된 워크플로 `actions/checkout`을 사용하는 경우 작업은 호출된 워크플로가 아닌 호출자 워크플로를 호스트하는 리포지토리의 콘텐츠를 확인합니다.

재사용 가능한 워크플로가 호출자 워크플로에 의해 트리거되면 `github` 컨텍스트는 항상 호출자 워크플로와 연결됩니다. 호출된 워크플로에 `github.token`대한 액세스 및 `secrets.GITHUB_TOKEN`에 대한 액세스 권한이 자동으로 부여됩니다. `github` 컨텍스트에 대한 자세한 내용은 “[GitHub Actions 컨텍스트 및 식 구문](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”을 참조하세요.

{% data variables.product.prodname_actions %} 워크플로에서 참조된 재사용된 워크플로우를 워크플로가 포함된 리포지토리의 종속성 그래프에 표시된 종속성으로 볼 수 있습니다. 자세한 내용은 “[종속성 그래프 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”를 참조하세요.

### 재사용 가능한 워크플로 및 시작 워크플로

시작 워크플로를 사용하면 워크플로를 만들 수 있는 권한이 있는 조직의 모든 사용자가 더 빠르고 쉽게 워크플로를 만들 수 있습니다. 사용자가 새 워크플로를 만들 때 시작 워크플로를 선택할 수 있으며 워크플로 작성 작업의 일부 또는 전부가 해당 워크플로에 대해 수행됩니다. 시작 워크플로 내에서 재사용 가능한 워크플로를 참조하여 사용자가 중앙 관리형 워크플로 코드를 쉽게 재사용할 수 있도록 할 수 있습니다. 재사용 가능한 워크플로를 참조할 때 태그 또는 커밋 SHA를 사용하는 경우 해당 워크플로를 다시 사용하는 모든 사용자가 항상 동일한 YAML 코드를 사용하도록 할 수 있습니다. 그러나 태그 또는 분기로 재사용 가능한 워크플로를 참조하는 경우 해당 버전의 워크플로를 신뢰할 수 있어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 보안 강화](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows)”를 참조하세요.

자세한 내용은 “[조직의 시작 워크플로 만들기](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)”를 참조하세요.

## 재사용 가능한 워크플로에 대한 액세스

{% ifversion ghes or ghec or ghae %}다음 중 {% else %}하나{% endif %}에 해당하는 경우 다른 워크플로에서 재사용 가능한 워크플로를 사용할 수 있습니다.

* 두 워크플로가 모두 동일한 리포지토리에 있습니다.
* 호출된 워크플로는 퍼블릭 리포지토리{% ifversion actions-workflow-policy %}에 저장되며, {% ifversion ghec %}엔터프라이즈{% else %}조직{% endif %}에서 재사용 가능한 퍼블릭 워크플로를 사용할 수 있습니다{% endif %}.{% ifversion ghes or ghec or ghae %}
* 호출된 워크플로는 내부 리포지토리에 저장되며 해당 리포지토리에 대한 설정을 통해 액세스할 수 있습니다. 자세한 정보는 {% ifversion internal-actions %}“[엔터프라이즈와 작업 및 워크플로 공유](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)”{% else %}“[리포지토리의 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository){% endif %}”를 참조하세요.{% endif %}

## 실행기 사용

{% ifversion fpt or ghes or ghec %}

### GitHub 호스팅 실행기 사용

{% data variables.product.prodname_dotcom %} 호스팅 실행기의 할당은 항상 호출자 컨텍스트만 사용하여 평가됩니다. {% data variables.product.prodname_dotcom %}호스팅 실행기에 대한 청구는 항상 호출자에 연결됩니다. 호출자 워크플로는 호출된 리포지토리에서 {% data variables.product.prodname_dotcom %} 호스팅 실행기를 사용할 수 없습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 호스팅 실행기 정보](/actions/using-github-hosted-runners/about-github-hosted-runners)”를 참조하세요.

### 자체 호스팅 실행기 정보

{% endif %}

호출자 워크플로와 동일한 사용자, 조직{% ifversion ghes or ghec or ghae %} 또는 엔터프라이즈에서{% endif %} 소유한 호출된 워크플로는 호출자의 컨텍스트에서 자체 호스팅된 실행기에 액세스할 수 있습니다. 즉, 호출된 워크플로는 다음에 위치한 자체 호스팅 실행기에 액세스할 수 있습니다.
* 호출자 리포지토리
* 호출자 리포지토리에서 실행기를 사용할 수 있는 경우 호출자 리포지토리의 조직{% ifversion ghes or ghec or ghae %} 또는 엔터프라이즈{% endif %}

## 제한 사항

{% ifversion nested-reusable-workflow %}
* 최대 4개 수준의 워크플로를 연결할 수 있습니다. 자세한 내용은 "[재사용 가능한 워크플로 중첩"을 참조하세요.](#nesting-reusable-workflows)
{% else %}
* 재사용 가능한 워크플로는 다른 재사용 가능한 워크플로를 호출할 수 없습니다.
{% endif %}
* 프라이빗 리포지토리 내에 저장된 재사용 가능한 워크플로는 동일한 리포지토리 내의 워크플로에서만 사용할 수 있습니다.
* 호출자 워크플로의 워크플로 수준에서 정의된 `env` 컨텍스트에서 설정된 환경 변수는 호출된 워크플로로 전파되지 않습니다. `env` 컨텍스트에 대한 자세한 내용은 “[GitHub Actions 컨텍스트 및 식 구문](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)”을 참조하세요.{% ifversion actions-reusable-workflow-matrix %}{% else %}
* 이 `strategy` 속성은 재사용 가능한 워크플로를 호출하는 작업에서 지원되지 않습니다.{% endif %}

## 재사용 가능한 워크플로 만들기

재사용 가능한 워크플로는 YAML 형식의 파일로, 다른 워크플로 파일과 매우 유사합니다. 다른 워크플로 파일과 마찬가지로 리포지토리의 `.github/workflows` 디렉터리에서 재사용 가능한 워크플로를 찾습니다. `workflows` 디렉터리의 하위 디렉터리가 지원되지 않습니다.

워크플로를 다시 사용하려면 다음 `on` 값이 `workflow_call`을 포함해야 합니다.

```yaml
on:
  workflow_call:
```

### 재사용 가능한 워크플로에서 입력 및 비밀 사용

호출자 워크플로에서 전달된 다음 호출된 워크플로 내에서 사용할 수 있는 입력 및 비밀을 정의할 수 있습니다. 재사용 가능한 워크플로에서 입력 또는 비밀을 사용하는 세 가지 단계가 있습니다.

1. 재사용 가능한 워크플로에서 `inputs` 및 `secrets` 키워드를 사용하여 호출자 워크플로에서 전달될 입력 또는 비밀을 정의합니다.
   {% raw %}
   ```yaml
   on:
     workflow_call:
       inputs:
         config-path:
           required: true
           type: string
       secrets:
         envPAT:
           required: true
   ```
   {% endraw %} 입력 및 비밀을 정의하는 구문에 대한 자세한 내용은 [`on.workflow_call.inputs`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) 및 [`on.workflow_call.secrets`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets)를 참조하세요.
   {% ifversion actions-inherit-secrets-reusable-workflows %}
1. 다시 사용 가능한 워크플로에서 이전 단계에서 `on` 키에 정의한 입력 또는 비밀을 참조합니다.

   {% note %}

   **참고**: 비밀이 호출 워크플로에서 `secrets: inherit`를 사용하여 상속되는 경우에는 `on` 키에 명시적으로 정의되지 않더라도 비밀을 참조할 수 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit)”을 참조하세요.

   {% endnote %} {%- else %}
1. 다시 사용 가능한 워크플로에서 이전 단계에서 `on` 키에 정의한 입력 또는 비밀을 참조합니다.
   {%- endif %}

   {% raw %}
   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       environment: production
       steps:
       - uses: actions/labeler@v4
         with:
           repo-token: ${{ secrets.envPAT }}
           configuration-path: ${{ inputs.config-path }}
   ```
   {% endraw %} 위의 예제에서 `envPAT`는 `production` 환경에 추가된 환경 비밀입니다. 따라서 이 환경은 작업 내에서 참조됩니다.

   {% note %}

   **참고**: 환경 비밀은 리포지토리에 대해 정의한 환경에 저장된 암호화된 문자열입니다. 환경 비밀은 적절한 환경을 참조하는 워크플로 작업에서만 사용할 수 있습니다. 자세한 내용은 “[배포에 환경 사용](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)”을 참조하세요.

   {% endnote %}

1. 호출자 워크플로에서 입력 또는 비밀을 전달합니다.

{% indented_data_reference reusables.actions.pass-inputs-to-reusable-workflows spaces=3 %}

### 재사용 가능한 워크플로 예제

이 재사용 가능한 `workflow-B.yml`라는 워크플로 파일(뒷부분의 [예제 호출자 워크플로](#example-caller-workflow)에서 참조)은 호출자 워크플로에서 입력 문자열과 비밀을 가져와서 작업에서 사용합니다.

{% raw %}
```yaml{:copy}
name: Reusable workflow example

on:
  workflow_call:
    inputs:
      config-path:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v4
      with:
        repo-token: ${{ secrets.token }}
        configuration-path: ${{ inputs.config-path }}
```
{% endraw %}

## 재사용 가능한 워크플로 호출

`uses` 키워드를 사용하여 재사용 가능한 워크플로를 호출합니다. 워크플로 내에서 작업을 사용하는 경우와 달리 작업 단계 내에서가 아니라 작업 내에서 직접 재사용 가능한 워크플로를 호출합니다.

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

{% ifversion fpt or ghec or ghes > 3.4 또는 ghae > 3.4 %}다음 구문 중 하나를 사용하여 재사용 가능한 워크플로 파일을 참조합니다.{% else %}구문:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

별도의 작업에서 각각을 참조하여 여러 워크플로를 호출할 수 있습니다.

{% data reusables.actions.uses-keyword-example %}

### 재사용 가능한 워크플로에서 입력 및 비밀 전달

{% data reusables.actions.pass-inputs-to-reusable-workflows%}

{% ifversion actions-reusable-workflow-matrix %}
### 재사용 가능한 워크플로에 행렬 전략 사용

행렬 전략을 사용하는 작업은 재사용 가능한 워크플로를 호출할 수 있습니다.

매트릭스 전략을 사용하면 단일 작업 정의에서 변수를 사용하여 변수의 조합을 기반으로 하는 여러 작업 실행을 자동으로 만들 수 있습니다. 예를 들어 행렬 전략을 사용하여 재사용 가능한 워크플로에 다른 입력을 전달할 수 있습니다. 행렬에 대한 자세한 내용은 "[작업에 행렬 사용](/actions/using-jobs/using-a-matrix-for-your-jobs)"을 참조하세요.

아래 예제 작업은 재사용 가능한 워크플로를 호출하고 값`[dev, stage, prod]`으로 변수 `target` 를 정의하여 행렬 컨텍스트를 참조합니다. 변수의 각 값에 대해 하나씩 세 개의 작업을 실행합니다.

{% raw %}
```yaml{:copy}
jobs:
  ReuseableMatrixJobForDeployment:
    strategy:
      matrix:
        target: [dev, stage, prod]
    uses: octocat/octo-repo/.github/workflows/deployment.yml@main
    with:
      target: ${{ matrix.target }}
```
{% endraw %} {% endif %}

### 재사용 가능한 워크플로를 호출하는 작업에 대해 지원되는 키워드

재사용 가능한 워크플로를 호출하는 경우 호출이 포함된 작업에서 다음 키워드만 사용할 수 있습니다.

* [`jobs.<job_id>.name`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id) {%- ifversion actions-inherit-secrets-reusable-workflows %}
* [`jobs.<job_id>.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit) {%- endif %} {%- ifversion actions-reusable-workflow-matrix %}
* [`jobs.<job_id>.strategy`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategy) {%- endif %}
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)
* [`jobs.<job_id>.concurrency`](/actions/reference/workflow-syntax-for-github-actions#concurrency)

   {% note %}

   **참고:**

   * 호출 작업에 `jobs.<job_id>.permissions`가 지정되지 않은 경우 호출된 워크플로에 `GITHUB_TOKEN`에 대한 기본 사용 권한이 있습니다. 자세한 내용은 “[워크플로의 인증](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)”을 참조하세요.
   * 호출자 워크플로에서 전달된 `GITHUB_TOKEN` 권한은 호출된 워크플로에 의해서만 다운그레이드(상승되지 않음)할 수 있습니다.

   {% endnote %}

### 호출자 워크플로 예제

이 워크플로 파일은 두 개의 워크플로 파일을 호출합니다. 이 중 두 번째인 ([재사용 가능한 워크플로 예제](#example-reusable-workflow)에 나타난) `workflow-B.yml`에 입력(`config-path`) 및 비밀(`token`)을 전달합니다.

{% raw %}
```yaml{:copy}
name: Call a reusable workflow

on:
  pull_request:
    branches:
      - main

jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/workflow-A.yml@v1

  call-workflow-passing-data:
    permissions:
      contents: read
      pull-requests: write
    uses: octo-org/example-repo/.github/workflows/workflow-B.yml@main
    with:
      config-path: .github/labeler.yml
    secrets:
      token: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% ifversion nested-reusable-workflow %}
## 재사용 가능한 워크플로 중첩

최대 4개의 워크플로 수준(즉, 1개의 최상위 호출자 워크플로 및 최대 3개 수준의 재사용 가능한 워크플로)을 연결할 수 있습니다. 예: _caller-workflow.yml_ → _called-workflow-1.yml_ → _called-workflow-2.yml_ → _called-workflow-3.yml_. 워크플로 트리의 루프는 허용되지 않습니다.

재사용 가능한 워크플로 내에서 재사용 가능한 다른 워크플로를 호출할 수 있습니다.

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:

jobs:
  call-another-reusable:
    uses: octo-org/example-repo/.github/workflows/another-reusable.yml@v1
```
{% endraw %}

### 중첩된 워크플로에 비밀 전달

호출 워크플로에서 `jobs.<job_id>.secrets`를 사용하여 명명된 비밀을 직접 호출된 워크플로에 전달할 수 있습니다. 또는 `jobs.<job_id>.secrets.inherit`를 사용하여 호출 워크플로의 모든 비밀을 직접 호출된 워크플로에 전달할 수 있습니다. 자세한 내용은 위의 “[재사용 가능한 워크플로에 입력 및 비밀 전달](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow)” 섹션과 참조 문서 “[GitHub Actions 워크플로 구문](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit)”을 참조하세요. 비밀은 직접 호출된 워크플로에만 전달되므로 워크플로 체인 A > B > C에서 워크플로 C는 비밀이 A에서 B로 전달된 다음 B에서 C로 전달된 경우에만 A로부터 비밀을 받습니다.

다음 예제에서 워크플로 A는 `inherit` 키워드를 사용하여 모든 비밀을 워크플로 B에 전달하지만 워크플로 B는 비밀을 하나만 워크플로 C에 전달합니다. 워크플로 B에 전달된 다른 비밀은 모두 워크플로 C에서 사용할 수 없습니다.

{% raw %}
```yaml
jobs:
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit # pass all secrets
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
    secrets:
      envPAT: ${{ secrets.envPAT }} # pass just this secret
```
{% endraw %}

### 액세스 및 사용 권한

중첩된 재사용 가능 워크플로를 포함하고 있는 워크플로는 중첩된 워크플로 중 하나라도 초기 호출자 워크플로에 액세스할 수 없는 경우 실패합니다. 자세한 내용은 “[재사용 가능한 워크플로에 대한 액세스](/actions/using-workflows/reusing-workflows#access-to-reusable-workflows)”를 참조하세요.

`GITHUB_TOKEN` 사용 권한은 중첩된 워크플로에서 동일하거나 더 제한적일 수 있습니다. 예를 들어 워크플로 체인 A > B > C에서 워크플로 A에 `package: read` 토큰 권한이 있는 경우 B와 C는 `package: write` 사용 권한을 가질 수 없습니다. 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication)”을 참조하세요.

API를 사용하여 특정 워크플로 실행에 관련된 워크플로 파일을 확인하는 방법에 대한 자세한 내용은 "[사용 중인 워크플로 모니터링"을 참조하세요](#monitoring-which-workflows-are-being-used).
{% endif %}

## 재사용 가능한 워크플로의 출력 사용

재사용 가능한 워크플로는 호출자 워크플로에서 사용하려는 데이터를 생성할 수 있습니다. 이러한 출력을 사용하려면 재사용 가능한 워크플로의 출력으로 지정해야 합니다.{% ifversion actions-reusable-workflow-matrix %}

출력을 설정하는 재사용 가능한 워크플로가 행렬 전략으로 실행되는 경우 출력은 실제로 값을 설정하는 행렬의 재사용 가능한 워크플로를 마지막으로 성공적으로 완료하여 설정한 출력이 됩니다.
즉, 재사용 가능한 워크플로의 마지막 성공적 완료가 출력에 대해 빈 문자열을 설정하고, 재사용 가능한 워크플로의 마지막 두 번째 성공적 완료가 출력에 대한 실제 값을 설정하는 경우 출력에는 재사용 가능한 워크플로의 마지막 두 번째 완료의 값이 포함됩니다. {% endif %}

다음 재사용 가능한 워크플로에는 두 단계를 포함하는 단일 작업이 있습니다. 각 단계에서는 “hello” 및 “world”라는 단일 단어를 출력으로 설정합니다. 작업의 `outputs` 섹션에서는 다음 단계 출력을 `output1` 또는 `output2`라는 작업 출력에 매핑합니다. 그런 다음 `on.workflow_call.outputs` 섹션에서는 워크플로 자체에 대해 두 개의 출력을 정의합니다. 하나는 `output1`에 매핑되는 `firstword`라는 출력이고 다른 하나는 `output2`에 매핑되는 `secondword`라는 출력입니다.

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=firstword::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "secondword=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=secondword::world"
{%- endif %}{% raw %}
```
{% endraw %}

이제 동일한 워크플로 내의 작업에서 출력을 사용하는 것과 동일한 방식으로 호출자 워크플로의 출력을 사용할 수 있습니다. 다시 사용할 수 있는 워크플로의 워크플로 수준에서 정의된 이름(`firstword` 및 `secondword`)를 사용하여 출력을 참조합니다. 이 워크플로에서는 `job1`에서 재사용 가능한 워크플로를 호출하고 `job2`에서 재사용 가능한 워크플로의 출력(“hello world”)을 워크플로 로그의 표준 출력으로 출력합니다.

{% raw %}
```yaml{:copy}
name: Call a reusable workflow and use its outputs

on:
  workflow_dispatch:

jobs:
  job1:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@v1

  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{ needs.job1.outputs.firstword }} ${{ needs.job1.outputs.secondword }}
```
{% endraw %}

작업 출력 사용에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)”을 참조하세요.

## 사용 중인 워크플로 모니터링

{% data variables.product.prodname_dotcom %} REST API를 사용하여 재사용 가능한 워크플로가 사용되는 방식을 모니터링할 수 있습니다. `prepared_workflow_job` 감사 로그 작업은 워크플로 작업이 시작될 때 트리거됩니다. 기록된 데이터에는 다음이 포함됩니다.
* `repo` - 워크플로 작업이 있는 조직/리포지토리입니다. 다른 워크플로를 호출하는 작업의 경우 호출자 워크플로의 조직/리포지토리입니다.
* `@timestamp` - 작업이 시작된 날짜 및 시간(Unix epoch 형식)입니다.
* `job_name` - 실행된 작업의 이름입니다.
{% ifversion nested-reusable-workflow %}
* `calling_workflow_refs` - 이 워크플로 작업에 관련된 모든 호출자 워크플로에 대한 파일 경로 배열입니다. 배열의 항목은 호출된 역순입니다. 예를 들어 A > B > C 워크플로 체인에서 워크플로 C에서 작업에 대한 로그를 볼 때 배열은 입니다 `["octo-org/octo-repo/.github/workflows/B.yml", "octo-org/octo-repo/.github/workflows/A.yml"]`.
* `calling_workflow_shas` - 이 워크플로 작업에 관련된 모든 호출자 워크플로에 대한 SHA 배열입니다. 배열에는 배열과 동일한 순서로 동일한 수의 항목이 `calling_workflow_refs` 포함됩니다. {% endif %}
* `job_workflow_ref` - 사용된 워크플로 파일(`{owner}/{repo}/{path}/{filename}@{ref}` 형식)입니다. 다른 워크플로를 호출하는 작업의 경우 호출된 워크플로를 식별합니다.

REST API를 사용하여 조직의 감사 로그를 쿼리하는 방법에 대한 자세한 내용은 “[조직](/rest/reference/orgs#get-the-audit-log-for-an-organization)”을 참조하세요.

{% note %}

**참고**: `prepared_workflow_job`에 대한 감사 데이터는 REST API를 사용하여서만 볼 수 있습니다. {% data variables.product.prodname_dotcom %} 웹 인터페이스에 표시되지 않으며 JSON/CSV 내보낸 감사 데이터에 포함되어 있지 않습니다.

{% endnote %}

{% ifversion partial-reruns-with-reusable %}

## 재사용 가능한 워크플로를 사용하여 워크플로 및 작업 다시 실행

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

## 다음 단계

{% data variables.product.prodname_actions %}에 대해 계속 알아보려면 “[워크플로를 트리거하는 이벤트](/actions/learn-github-actions/events-that-trigger-workflows)”를 참조하세요.

{% ifversion restrict-groups-to-workflows %}재사용 가능한 특정 워크플로만 실행할 수 있는 자체 호스팅 실행기 그룹을 만들어 배포를 표준화할 수 있습니다. 자세한 내용은 “[그룹을 사용하여 자체 호스팅 실행기에 대한 액세스 관리](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”를 참조하세요.{% endif %}
