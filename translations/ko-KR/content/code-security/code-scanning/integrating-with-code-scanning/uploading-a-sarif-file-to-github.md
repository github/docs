---
title: GitHub에 SARIF 파일 업로드
shortTitle: Upload a SARIF file
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'People with write permissions to a repository can upload {% data variables.product.prodname_code_scanning %} data generated outside {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/integrating-with-code-scanning/uploading-a-sarif-file-to-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - Actions
  - Repositories
  - CI
  - SARIF
ms.openlocfilehash: 3def104e487f54e2c48d462d1dcfe8bab63c6fa3
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161163'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_code_scanning %}에 대한 SARIF 파일 업로드 정보

{% data variables.product.prodname_dotcom %}은 SARIF(정적 분석 결과 교환 형식) 파일의 정보를 사용하여 리포지토리에 {% data variables.product.prodname_code_scanning %} 경고를 만듭니다. API 또는 {% data variables.product.prodname_actions %}를 사용하여 리포지토리에 SARIF 파일을 업로드할 수 있습니다. 자세한 내용은 "[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)"를 참조하세요.

{% data variables.product.prodname_codeql %}을 포함한 많은 정적 분석 보안 테스트 도구를 사용하여 SARIF 파일을 생성할 수 있습니다. 그 결과에서 SARIF 버전 2.1.0을 사용해야 합니다. 자세한 내용은 "[{% data variables.product.prodname_code_scanning %}에 대한 SARIF 지원](/code-security/secure-coding/sarif-support-for-code-scanning)"을 참조하세요.

{% data variables.product.prodname_actions %}, {% data variables.product.prodname_code_scanning %} API, {% ifversion codeql-runner-supported %} {% data variables.code-scanning.codeql_runner %}, {% endif %} 또는 {% data variables.product.prodname_codeql_cli %}를 사용하여 결과를 업로드할 수 있습니다. 최상의 업로드 방법은 SARIF 파일을 생성하는 방법에 따라 달라집니다. 다음 예를 참고하세요.

- {% data variables.product.prodname_actions %}를 사용하여 {% data variables.product.prodname_codeql %} 작업을 실행한다면 추가 작업이 필요하지 않습니다. {% data variables.product.prodname_codeql %} 작업은 분석이 끝나면 SARIF 파일을 자동으로 업로드합니다.
- {% data variables.product.prodname_actions %}를 사용하여 SARIF 호환 분석 도구를 실행한다면, 결과를 업로드하는 최종 단계를 포함하도록 워크플로를 업데이트할 수 있습니다(아래 참조).
 - CI 시스템에서 {% data variables.product.prodname_codeql_cli %}를 사용하여 {% data variables.product.prodname_code_scanning %}을 실행한다면 CLI를 사용하여 결과를 {% data variables.product.prodname_dotcom %}에 업로드할 수 있습니다(자세한 내용은 “[CI 시스템에 {% data variables.product.prodname_codeql_cli %} 설치](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)” 참조).{% ifversion codeql-runner-supported %}
- {% data variables.code-scanning.codeql_runner %}는 CI 시스템에서 {% data variables.product.prodname_code_scanning %}를 실행하기 위해 기본적으로 실행기는 완료 시 {% data variables.product.prodname_dotcom %}에 결과를 자동으로 업로드합니다. 자동 업로드를 차단하는 경우 결과를 업로드할 준비가 되면 명령을 사용할 `upload` 수 있습니다(자세한 내용은 "[CI 시스템에서 {% data variables.code-scanning.codeql_runner %} 실행](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)"을 참조하세요.{ % endif %}
- 결과를 리포지토리 외부의 아티팩트로 생성하는 도구를 사용한다면 {% data variables.product.prodname_code_scanning %} API를 사용하여 파일을 업로드할 수 있습니다(자세한 내용은 "[분석을 SARIF 데이터로 업로드](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)" 참조).

{% data reusables.code-scanning.not-available %}

## {% data variables.product.prodname_actions %}를 사용하여 {% data variables.product.prodname_code_scanning %} 분석 업로드

{% data variables.product.prodname_actions %}를 사용하여 타사 SARIF 파일을 리포지토리에 업로드하려면 워크플로가 필요합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”를 참조하세요.

워크플로는 `github/codeql-action` 리포지토리에 속한 `upload-sarif` 작업을 사용해야 합니다. 여기에는 업로드 구성에 사용할 수 있는 입력 매개 변수가 포함되어 있습니다. 사용할 기본 입력 매개 변수는 다음과 같습니다.

- `sarif-file`은 업로드할 SARIF 파일의 파일 또는 디렉터리를 구성합니다. 디렉터리나 파일 경로는 리포지토리의 루트가 기준입니다.
- `category`(선택 사항)는 SARIF 파일의 결과에 대한 범주를 할당합니다. 이렇게 하면 동일한 커밋을 다양한 방법으로 분석하고 {% data variables.product.prodname_dotcom %}의 {% data variables.product.prodname_code_scanning %} 보기를 사용하여 결과를 검토할 수 있습니다. 예를 들어 다양한 도구를 사용하여 분석할 수 있으며, 모노 리포지토리에서는 변경된 파일의 하위 집합에 따라 리포지토리의 여러 조각을 분석할 수 있습니다.

자세한 내용은 [`upload-sarif` 작업](https://github.com/github/codeql-action/tree/{% ifversion actions-node16-action %}v2{% else %}v1{% endif %}/upload-sarif)을 참조하세요.

`push` 및 `scheduled` 이벤트가 발생할 때 실행되도록 `upload-sarif` 작업을 구성할 수 있습니다. {% data variables.product.prodname_actions %}  이벤트에 대한 자세한 내용은 "[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows)"를 참조하세요.

SARIF 파일에 `partialFingerprints`가 포함되지 않은 경우 `upload-sarif` 작업이 `partialFingerprints` 필드를 계산하고 중복 경고를 방지하려고 시도합니다. {% data variables.product.prodname_dotcom %}은 리포지토리에 SARIF 파일과 정적 분석에 사용되는 소스 코드가 모두 포함된 경우에만 `partialFingerprints`를 만들 수 있습니다. 중복 경고를 방지하는 자세한 방법은 "[코드 검사에 대한 SARIF 지원 정보](/code-security/secure-coding/sarif-support-for-code-scanning#providing-data-to-track-code-scanning-alerts-across-runs)"를 참조하세요.

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### 리포지토리 외부에서 생성된 SARIF 파일에 대한 예제 워크플로

리포지토리에 커밋한 후 SARIF 파일을 업로드하는 새 워크플로를 만들 수 있습니다. 이는 SARIF 파일이 리포지토리 외부의 아티팩트로 생성될 때 유용합니다.

이 예제에서는 커밋이 리포지토리에 푸시될 때마다 워크플로가 실행됩니다. 이 작업은 `partialFingerprints` 속성을 사용하여 변경이 발생했는지 여부를 확인합니다. 커밋이 푸시될 때 실행되는 것 외에도 이 워크플로는 일주일에 한 번 실행되도록 예약됩니다. 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows)”를 참조하세요.

이 워크플로는 리포지토리의 루트에 있는 `results.sarif` 파일을 업로드합니다. 워크플로 파일 생성에 대한 자세한 내용은 "[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)"를 참조하세요.

또는 이 워크플로를 수정하여 SARIF 파일 디렉터리를 업로드할 수도 있습니다. 예를 들어, 모든 SARIF 파일을 `sarif-output`는 리포지토리의 루트에 있는 디렉터리에 배치하고 작업의 입력 매개 변수 `sarif_file`를 `sarif-output`로 설정할 수 있을 것입니다. 디렉터리를 업로드하는 경우 각 SARIF 파일에는 결과의 범주를 정의하는 고유한 `runAutomationDetails.id` 항목이 포함되어야 합니다. 자세한 내용은 "[`runAutomationDetails` 개체](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#runautomationdetails-object)"를 참조하세요.

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Thursday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 4'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      # This step checks out a copy of your repository.
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Upload SARIF file
        uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
          # Optional category for the results
          # Used to differentiate multiple results for one commit
          category: my-analysis-tool
```

### ESLint 분석 도구를 실행하는 예제 워크플로

CI(연속 통합) 워크플로의 일부로 타사 SARIF 파일을 생성하는 경우 `upload-sarif` 작업을 CI 테스트 실행 후 단계로 추가할 수 있습니다. CI 워크플로가 아직 없는 경우 {% data variables.product.prodname_actions %} 템플릿을 사용하여 만들 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 빠른 시작](/actions/quickstart)”을 참조하세요.

이 예제에서는 커밋이 리포지토리에 푸시될 때마다 워크플로가 실행됩니다. 이 작업은 `partialFingerprints` 속성을 사용하여 변경이 발생했는지 여부를 확인합니다. 커밋이 푸시될 때 실행되는 것 외에도 이 워크플로는 일주일에 한 번 실행되도록 예약됩니다. 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows)”를 참조하세요.

워크플로는 ESLint 정적 분석 도구를 워크플로의 단계로서 실행하는 예제를 보여 줍니다. `Run ESLint` 단계에서는 ESLint 도구를 실행하고 `results.sarif` 파일을 출력합니다. 그런 다음 워크플로는 `upload-sarif` 작업을 사용하여 {% data variables.product.prodname_dotcom %}에 `results.sarif` 파일을 업로드합니다. 워크플로 파일을 만드는 자세한 방법은 "[GitHub Actions 소개"](/actions/learn-github-actions/introduction-to-github-actions)를 참조하세요.

```yaml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Wednesday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 3'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run npm install
        run: npm install
      # Runs the ESlint code analysis
      - name: Run ESLint
        # eslint exits 1 if it finds anything to report
        run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
      # Uploads results.sarif to GitHub repository using the upload-sarif action
      - uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
```

## 추가 참고 자료

- “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions)”
- "[워크플로 기록 보기](/actions/managing-workflow-runs/viewing-workflow-run-history)"
- "[CI 시스템의 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 정보](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)"
- "[분석을 SARIF 데이터로 업로드](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)"
