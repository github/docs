---
title: 코드 검사에 대한 SARIF 지원
shortTitle: SARIF support
intro: '{% data variables.product.prodname_dotcom %}의 리포지토리에 있는 타사 정적 분석 도구의 결과를 표시하려면 {% data variables.product.prodname_code_scanning %}에 대한 SARIF 2.1.0 JSON 스키마의 특정 하위 집합을 지원하는 SARIF 파일에 저장된 결과가 필요합니다. 기본 {% data variables.product.prodname_codeql %} 정적 분석 엔진을 사용하는 경우 결과는 {% data variables.product.prodname_dotcom %}의 리포지토리에 자동으로 표시됩니다.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning
  - /code-security/secure-coding/sarif-support-for-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/sarif-support-for-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - SARIF
ms.openlocfilehash: 30bd32fe0d34e8297bdda654a04be6330179846d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098918'
---
{% data reusables.code-scanning.beta %}

## SARIF 지원 정보

SARIF(정적 분석 결과 교환 형식)는 출력 파일 형식을 정의하는 [OASIS 표준](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html)입니다. SARIF 표준은 정적 분석 도구가 결과를 공유하는 방법을 간소화하는 데 사용됩니다. {% data variables.product.prodname_code_scanning_capc %}는 SARIF 2.1.0 JSON 스키마의 하위 집합을 지원합니다.

타사 정적 코드 분석 엔진의 SARIF 파일을 업로드하려면 업로드된 파일이 SARIF 2.1.0 버전을 사용해야 합니다. {% data variables.product.prodname_dotcom %}은 SARIF 파일을 구문 분석하고 리포지토리의 결과를 사용하여 {% data variables.product.prodname_code_scanning %} 환경의 일부로 경고를 표시합니다. 자세한 내용은 "[{% data variables.product.prodname_dotcom %}에 SARIF 파일 업로드](/code-security/secure-coding/uploading-a-sarif-file-to-github)"를 참조하세요. SARIF 2.1.0 JSON 스키마에 대한 자세한 내용은 [`sarif-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Documents/CommitteeSpecifications/2.1.0/sarif-schema-2.1.0.json)을 참조하세요.

{% data variables.product.prodname_codeql_workflow %}와 함께 {% data variables.product.prodname_actions %}를 사용하거나{% ifversion codeql-runner-supported %}, {% data variables.product.prodname_codeql_runner %} 사용,{% endif %} {% data variables.product.prodname_codeql_cli %}를 사용하는 경우 {% data variables.product.prodname_code_scanning %} 결과는 지원되는 SARIF 2.1.0 하위 집합을 자동으로 사용합니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 설정](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”{% ifversion codeql-runner-supported %}, “[CI 시스템에서 {% data variables.product.prodname_codeql_runner %} 실행](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)”,{% endif %} 또는 “[CI 시스템에 CodeQL CLI 설치](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)”를 참조하세요.

동일한 커밋에 대한 여러 SARIF 파일을 업로드하고, 각 파일의 데이터를 {% data variables.product.prodname_code_scanning %} 결과로 표시할 수 있습니다. 커밋에 대한 여러 SARIF 파일을 업로드하는 경우 각 분석의 "범주"를 지정해야 합니다. 다음과 같은 범주 지정 방법이 있으며 분석 방법에 따라 달라집니다.
- 직접 {% data variables.product.prodname_codeql_cli %} 사용 - SARIF 파일을 생성할 때 `--sarif-category` 인수를 `codeql database analyze` 명령에 전달합니다. 자세한 내용은 "[CI 시스템에서 CodeQL CLI 구성](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#about-generating-code-scanning-results-with-codeql-cli)"을 참조하세요.
- `codeql-action/analyze`와 함께 {% data variables.product.prodname_actions %} 사용 - 범주가 워크플로 이름 및 행렬 변수(일반적으로 `language`)에서 자동으로 설정됩니다. 작업에 대한 `category` 입력을 지정하여 재정의할 수 있습니다. 이 방법은 단일 워크플로에서 모노 리포지토리의 여러 섹션을 분석할 때 유용합니다.
- {% data variables.product.prodname_actions %}를 사용하여 다른 정적 분석 도구의 결과를 업로드한 다음, 한 워크플로에서 동일한 도구에 대해 둘 이상의 결과 파일을 업로드하는 경우 `category` 입력을 지정해야 합니다. 자세한 내용은 "[{% data variables.product.prodname_actions %}를 사용하여 {% data variables.product.prodname_code_scanning %} 분석 업로드](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)"를 참조하세요.
- 이러한 방법을 사용하지 않는 경우 업로드할 각 SARIF 파일에서 고유한 `runAutomationDetails.id`를 지정해야 합니다. 이 속성에 대한 자세한 내용은 아래의 [`runAutomationDetails` 개체](#runautomationdetails-object)를 참조하세요.

동일한 도구에서 동일한 범주를 사용하여 커밋에 대한 두 번째 SARIF 파일을 업로드하는 경우 이전 결과를 덮어씁니다. 그러나 단일 {% data variables.product.prodname_actions %} 워크플로 실행에서 동일한 도구 및 범주에 대한 여러 SARIF 파일을 업로드하려고 하면 구성 오류가 감지되고 실행이 실패합니다.

{% data variables.product.prodname_dotcom %}은 SARIF 파일의 속성을 사용하여 경고를 표시합니다. 예를 들어 `shortDescription` 및 `fullDescription`은 {% data variables.product.prodname_code_scanning %} 경고의 맨 위에 표시됩니다. `location`은 {% data variables.product.prodname_dotcom %}이 코드 파일에 주석을 표시하는 것을 허용합니다. 자세한 내용은 "[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)"를 참조하세요.

SARIF를 처음 접하여 자세히 알아보려는 경우 Microsoft의 [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) 리포지토리를 참조하세요.

## 실행에서 {% data variables.product.prodname_code_scanning %} 경고를 추적하는 데이터 제공

새 코드 검사 결과가 업로드될 때마다 결과가 처리되고 경고가 리포지토리에 추가됩니다. 동일한 문제에 대한 중복 경고를 방지하기 위해 {% data variables.product.prodname_code_scanning %}에서 지문을 사용하여 다양한 실행의 결과와 맞춰보기 때문에 선택한 분기에 대한 최신 실행에서 한 번만 표시됩니다. 따라서 파일을 편집할 때 경고를 올바른 코드 줄과 매칭할 수 있습니다. 결과에 대한 `ruleID`는 분석 전체에서 동일해야 합니다.
 
### 일관된 파일 경로 보고

파일 경로는 안정적인 지문을 계산할 수 있도록 실행 전체에서 일관되어야 합니다. 파일 경로가 동일한 결과에 대해 다른 경우 새 분석이 있을 때마다 새 경고가 생성되고 이전 경고가 닫힙니다. 이로 인해 동일한 결과에 대해 여러 경고가 발생합니다.

### 지문 생성을 위한 데이터 포함

{% data variables.product.prodname_dotcom %}은 OASIS 표준의 `partialFingerprints` 속성을 사용하여 두 결과가 논리적으로 같은 것을 감지합니다. 자세한 내용은 OASIS 설명서의 "[partialFingerprints 속성](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611)" 항목을 참조하세요.

{% data variables.product.prodname_codeql_workflow %}에서, {% ifversion codeql-runner-supported %}{% data variables.product.prodname_codeql_runner %} 사용, {% endif %}또는 {% data variables.product.prodname_codeql_cli %}를 사용하여 만든 SARIF 파일에는 지문 데이터가 포함됩니다. `upload-sarif` 작업을 사용하여 SARIF 파일을 업로드할 때 이 데이터가 없는 경우 {% data variables.product.prodname_dotcom %}이 원본 파일에서 `partialFingerprints` 필드를 채우려고 시도합니다. 결과 업로드에 대한 자세한 내용은 "[{% data variables.product.prodname_dotcom %}에 SARIF 파일 업로드](/code-security/secure-coding/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)"를 참조하세요.

지문 데이터 없이 `/code-scanning/sarifs` API 엔드포인트를 사용하여 SARIF 파일을 업로드하는 경우 {% data variables.product.prodname_code_scanning %} 경고가 처리되고 표시되지만 사용자에게 중복 경고가 표시될 수 있습니다. 중복 경고가 표시되지 않도록 하려면 SARIF 파일을 업로드하기 전에 지문 데이터를 계산하고 `partialFingerprints` 속성을 채워야 합니다. https://github.com/github/codeql-action/blob/main/src/fingerprints.ts 에서 `upload-sarif` 작업이 유용한 시작점을 사용하는 스크립트를 찾을 수 있습니다. API에 대한 자세한 내용은 "[분석을 SARIF 데이터로 업로드](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)"를 참조하세요.

## 규칙 및 결과 이해

SARIF 파일은 규칙과 결과를 모두 지원합니다. 이러한 요소에 저장된 정보는 유사하지만 다른 용도로 사용됩니다.

- 규칙은 `toolComponent` 개체에 포함된 `reportingDescriptor` 개체의 배열입니다. 분석 중에 실행되는 규칙의 세부 정보를 저장하는 위치입니다. 이러한 개체의 정보는 일반적으로 도구를 업데이트할 때 자주 변경되지 않습니다.

- 결과는 `run` 개체의 `results` 아래에 일련의 `result` 개체로 저장됩니다. 각 `result` 개체에는 코드베이스에 있는 하나의 경고에 대한 세부 정보가 포함되어 있습니다. `results` 개체 내에서 경고를 감지한 규칙을 참조할 수 있습니다.

동일한 도구와 규칙을 사용하여 다른 코드베이스를 분석하여 생성된 SARIF 파일을 비교할 때 분석 결과에는 차이가 있지만 규칙에는 표시되지 않습니다.

## 원본 파일의 루트 지정

{% data variables.product.prodname_code_scanning_capc %}은 분석된 리포지토리의 루트를 기준으로 보고된 결과를 상대 경로를 사용하여 해석합니다. 결과에 절대 URI가 포함된 경우 URI는 상대 URI로 변환됩니다. 그런 다음 상대 URI를 리포지토리에 커밋된 파일과 일치시킬 수 있습니다.

다음 방법 중 하나로 절대 URI에서 상대 URI로 변환하기 위한 원본 루트를 제공할 수 있습니다.

- [`github/codeql-action/analyze` 작업에 대한 `checkout_path`](https://github.com/github/codeql-action/blob/c2c0a2908e95769d01b907f9930050ecb5cf050d/analyze/action.yml#L44-L47) 입력
- SARIF 업로드 API 엔드포인트에 대한 `checkout_uri` 매개 변수. 자세한 내용은 REST API 설명서에서 “[{% data variables.product.prodname_code_scanning_capc %}](/rest/code-scanning#upload-an-analysis-as-sarif-data)”을 참조하세요.
- SARIF 파일의 [`invocation.workingDirectory.uri`](https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html#_Toc9244365) 속성

원본 루트를 제공하는 경우 절대 URI를 사용하여 지정된 아티팩트 위치는 동일한 URI 체계를 사용해야 합니다. 원본 루트의 URI 체계와 하나 이상의 절대 URI가 일치하지 않으면 업로드가 거부됩니다.

예를 들어 SARIF 파일은 `file:///github/workspace` 소스 루트를 사용하여 업로드됩니다. 

```
# Conversion of absolute URIs to relative URIs for location artifacts

file:///github/workspace/src/main.go -> src/main.go
file:///tmp/go-build/tmp.go          -> file:///tmp/go-build/tmp.go
```

두 개의 절대 URI가 원본 루트와 동일한 URI 체계를 사용하므로 파일이 성공적으로 업로드됩니다.

## SARIF 파일 유효성 검사

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

{% data variables.product.prodname_dotcom %} 수집 규칙에 대해 테스트하여 SARIF 파일이 {% data variables.product.prodname_code_scanning %}과 호환되는지 확인할 수 있습니다. 자세한 내용은 [Microsoft SARIF 유효성 검사기](https://sarifweb.azurewebsites.net/)를 참조하세요.

{% data reusables.code-scanning.upload-sarif-alert-limit %}

## 지원되는 SARIF 출력 파일 속성

{% data variables.product.prodname_codeql %}이 아닌 코드 분석 엔진을 사용하는 경우 지원되는 SARIF 속성을 검토하여 {% data variables.product.prodname_dotcom %}에 분석 결과가 표시되는 방식을 최적화할 수 있습니다.

{% note %}

**참고:** “필수”로 표시된 모든 속성에 대해 명시적 값을 제공해야 합니다. 빈 문자열은 필수 속성에 대해 지원되지 않습니다.

{% endnote %}

유효한 SARIF 2.1.0 출력 파일을 모두 업로드할 수 있지만, {% data variables.product.prodname_code_scanning %}은 지원되는 다음 속성만 사용합니다.

### `sarifLog` 개체의  멤버의 부모에 대해 SQL Server 인스턴스 이름을 표시합니다.

| Name | 설명 |
|----|----|
|  `$schema` | **필수 사항입니다.** 2\.1.0 버전의 SARIF JSON 스키마 URI입니다. 예: `https://json.schemastore.org/sarif-2.1.0.json`. |
| `version` | **필수 사항입니다.** {% data variables.product.prodname_code_scanning_capc %}는 SARIF 버전 `2.1.0`만 지원합니다.
| `runs[]` | **필수 사항입니다.** SARIF 파일에는 하나 이상의 실행 배열이 포함되어 있습니다. 각 실행은 분석 도구의 단일 실행을 나타냅니다. `run`에 대한 자세한 내용은 [`run` 개체](#run-object)를 참조하세요.

### `run` 개체의  멤버의 부모에 대해 SQL Server 인스턴스 이름을 표시합니다.

{% data variables.product.prodname_code_scanning_capc %}는 `run` 개체를 사용하여 도구를 통해 결과를 필터링하고 결과의 원본에 대한 정보를 제공합니다. `run` 개체에는 결과를 생성한 도구에 대한 정보가 들어 있는 `tool.driver` 도구 구성 요소 개체가 포함되어 있습니다. 각 `run`은 하나의 분석 도구에 대한 결과만 가질 수 있습니다.

| Name | 설명 |
|----|----|
| `tool.driver` | **필수 사항입니다.** 분석 도구를 설명하는 `toolComponent` 개체입니다. 자세한 내용은 [`toolComponent` 개체](#toolcomponent-object)를 참조하세요. |
| `tool.extensions[]` | **선택 사항입니다.** 분석 중에 도구에서 사용하는 플러그 인 또는 확장을 나타내는 `toolComponent` 개체의 배열입니다. 자세한 내용은 [`toolComponent` 개체](#toolcomponent-object)를 참조하세요. |
| `invocation.workingDirectory.uri` | **선택 사항입니다.** 이 필드는 (SARIF 업로드 API에만 해당) 또는 `checkout_path` ({% 데이터 variables.product.prodname_actions %}만) 제공되지 않은 경우에만 `checkout_uri` 사용됩니다. 이 값은 [`physicalLocation`개체](#physicallocation-object)에 사용되는 절대 URI를 상대 URI로 변환하는 데 사용됩니다. 자세한 내용은 “[원본 파일의 루트 지정](#specifying-the-root-for-source-files)”을 참조하세요.|
| `results[]` | **필수 사항입니다.** 분석 도구의 결과입니다. {% data variables.product.prodname_code_scanning_capc %}는 {% data variables.product.prodname_dotcom %}에 결과를 표시합니다. 자세한 내용은 [`result` 개체](#result-object)를 참조하세요.

### `toolComponent` 개체의  멤버의 부모에 대해 SQL Server 인스턴스 이름을 표시합니다.

| Name | 설명 |
|----|----|
| `name` | **필수 사항입니다.** 분석 도구의 이름입니다. {% data variables.product.prodname_code_scanning_capc %}는 도구별로 결과를 필터링할 수 있도록 {% data variables.product.prodname_dotcom %}에 이름을 표시합니다. |
| `version` | **선택 사항입니다.** 분석 도구의 버전입니다. {% data variables.product.prodname_code_scanning_capc %}는 버전 번호를 사용하여 분석 중인 코드의 변경이 아닌 도구 버전 변경으로 인해 결과가 변경되었을 수 있는 시기를 추적합니다. SARIF 파일에 `semanticVersion` 필드가 있으면 {% data variables.product.prodname_code_scanning %}에서 `version`이 사용되지 않은 것입니다. |
| `semanticVersion` | **선택 사항입니다.** 분석 도구의 버전이며, 유의적 버전 2.0 형식으로 지정되었습니다. {% data variables.product.prodname_code_scanning_capc %}는 버전 번호를 사용하여 분석 중인 코드의 변경이 아닌 도구 버전 변경으로 인해 결과가 변경되었을 수 있는 시기를 추적합니다. SARIF 파일에 `semanticVersion` 필드가 있으면 {% data variables.product.prodname_code_scanning %}에서 `version`이 사용되지 않은 것입니다. 자세한 내용은 유의적 버전 설명서의 "[유의적 버전 2.0.0](https://semver.org/)"을 참조하세요. |
| `rules[]` | **필수 사항입니다.** 규칙을 나타내는 `reportingDescriptor` 개체의 배열입니다. 분석 도구는 규칙을 사용하여 분석 중인 코드에서 문제를 찾습니다. 자세한 내용은 [`reportingDescriptor` 개체](#reportingdescriptor-object)를 참조하세요. |

### `reportingDescriptor` 개체의  멤버의 부모에 대해 SQL Server 인스턴스 이름을 표시합니다.

분석 중에 실행되는 규칙의 세부 정보를 저장하는 위치입니다. 이러한 개체의 정보는 일반적으로 도구를 업데이트할 때 자주 변경되지 않습니다. 자세한 내용은 위의 “[규칙 및 결과 이해](#understanding-rules-and-results)”를 참조하세요.

| Name | 설명 |
|----|----|
| `id` |  **필수 사항입니다.** 규칙의 고유 식별자입니다. `id`는 SARIF 파일의 다른 부분에서 참조되며 {% data variables.product.prodname_dotcom %}에 URL을 표시하기 위해 {% data variables.product.prodname_code_scanning %}에서 사용할 수 있습니다. |
| `name` | **선택 사항입니다.** 규칙의 이름입니다. {% data variables.product.prodname_code_scanning_capc %}는 규칙으로 결과를 필터링할 수 있도록 {% data variables.product.prodname_dotcom %}에 이름을 표시합니다. |
| `shortDescription.text` | **필수 사항입니다.** 규칙에 대한 간단한 설명입니다. {% data variables.product.prodname_code_scanning_capc %}는 {% data variables.product.prodname_dotcom %}에서 연결된 결과 옆에 간단한 설명을 표시합니다.
| `fullDescription.text` | **필수 사항입니다.** 규칙에 대한 설명입니다. {% data variables.product.prodname_code_scanning_capc %}는 {% data variables.product.prodname_dotcom %}에서 연결된 결과 옆에 전체 설명을 표시합니다. 허용되는 최대 문자 수는 1000자입니다.
| `defaultConfiguration.level` | **선택 사항입니다.** 규칙의 기본 심각도 수준입니다. {% data variables.product.prodname_code_scanning_capc %}는 심각도 수준을 사용하여 특정 규칙에 대한 결과가 얼마나 중요한지 이해하는 데 도움을 줍니다. 이 값은 `result` 개체의 `level` 특성을 통해 재정의할 수 있습니다. 자세한 내용은 [`result` 개체](#result-object)를 참조하세요. 기본값: `warning`.
| `help.text` | **필수 사항입니다.** 텍스트 형식을 사용하는 규칙에 대한 설명서입니다. {% data variables.product.prodname_code_scanning_capc %}는 연결된 결과 옆에 이 도움말 설명서를 표시합니다.
| `help.markdown` | **권장 사항입니다.** Markdown 형식을 사용하는 규칙에 대한 설명서입니다. {% data variables.product.prodname_code_scanning_capc %}는 연결된 결과 옆에 이 도움말 설명서를 표시합니다. `help.markdown`을 사용할 수 있는 경우 `help.text` 대신 표시됩니다.
| `properties.tags[]` | **선택 사항입니다.** 문자열 배열입니다. {% data variables.product.prodname_code_scanning_capc %}는 {% data variables.product.prodname_dotcom %}에서 결과를 필터링할 수 있도록 `tags`를 사용합니다. 예를 들어 `security` 태그가 있는 모든 결과를 필터링할 수 있습니다.
| `properties.precision` | **권장 사항입니다.** 이 규칙이 나타내는 결과가 true인 빈도를 나타내는 문자열입니다. 예를 들어 규칙에 알려진 높은 가양성 비율이 있는 경우 정밀도는 `low`입니다. {% data variables.product.prodname_code_scanning_capc %}는 `level` 및 `precision`이 가장 높은 결과가 가장 먼저 표시되도록 결과를 정밀도 순서대로 {% data variables.product.prodname_dotcom %}에 정렬합니다. 정밀도는 `very-high`, `high`, `medium`, `low` 중 하나입니다. 
| `properties.problem.severity` | **권장 사항입니다.** 비보안 쿼리에서 생성된 경고의 심각도 수준을 나타내는 문자열입니다. `properties.precision` 속성과 함께 이 문자열은 `problem.severity` 및 `precision`이 가장 높은 결과가 가장 먼저 표시되도록 결과를 기본적으로 {% data variables.product.prodname_dotcom %}에 표시할지 여부를 결정합니다. `error`는 `warning`, `recommendation` 중 하나일 수 있습니다.
| `properties.security-severity` | **권장 사항입니다.** 보안 쿼리(`@tags`에 `security`가 포함된)의 심각도 수준을 의미하는 0.0~10.0 사이의 점수를 나타내는 문자열입니다. `properties.precision` 속성과 함께 이 문자열은 `security-severity` 및 `precision`이 가장 높은 결과가 가장 먼저 표시되도록 결과를 기본적으로 {% data variables.product.prodname_dotcom %}에 표시할지 여부를 결정합니다. {% data variables.product.prodname_code_scanning_capc %}는 숫자 점수를 다음과 같이 변환합니다. 9.0 초과는 `critical`, 7.0~8.9는 `high`, 4.0~6.9는 `medium`, 3.9 이하는 `low`. 

### `result` 개체의  멤버의 부모에 대해 SQL Server 인스턴스 이름을 표시합니다.

각 `result` 개체에는 코드베이스에 있는 하나의 경고에 대한 세부 정보가 포함되어 있습니다. `results` 개체 내에서 경고를 감지한 규칙을 참조할 수 있습니다. 자세한 내용은 위의 “[규칙 및 결과 이해](#understanding-rules-and-results)”를 참조하세요.

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| Name | 설명 |
|----|----|
| `ruleId`| **선택 사항입니다.** 규칙의 고유 식별자입니다(`reportingDescriptor.id`). 자세한 내용은 [`reportingDescriptor` 개체](#reportingdescriptor-object)를 참조하세요. {% data variables.product.prodname_code_scanning_capc %}는 규칙 식별자를 사용하여 {% data variables.product.prodname_dotcom %}에서 결과를 규칙으로 필터링합니다.
| `ruleIndex`| **선택 사항입니다.** 도구 구성 요소 `rules` 배열에 있는 연결된 규칙(`reportingDescriptor` 개체)의 인덱스입니다. 자세한 내용은 [`run` 개체](#run-object)를 참조하세요. 이 속성의 허용 범위는 0부터 2^63 - 1까지입니다.
| `rule`| **선택 사항입니다.** 이 결과에 대한 규칙(보고 설명자)을 찾는 데 사용되는 참조입니다. 자세한 내용은 [`reportingDescriptor` 개체](#reportingdescriptor-object)를 참조하세요.
| `level`| **선택 사항입니다.** 결과의 심각도입니다. 이 수준은 규칙에 정의된 기본 심각도를 재정의합니다. {% data variables.product.prodname_code_scanning_capc %}는 수준을 사용하여 {% data variables.product.prodname_dotcom %}에서 결과를 심각도로 필터링합니다.
| `message.text`| **필수 사항입니다.** 결과를 설명하는 메시지입니다. {% data variables.product.prodname_code_scanning_capc %}는 메시지 텍스트를 결과의 제목으로 표시합니다. 표시되는 공간이 제한된 경우 메시지의 첫 번째 문장만 표시됩니다.
| `locations[]`| **필수 사항입니다.** 결과가 최대 10개까지 감지된 위치 세트입니다. 지정된 모든 위치에서 변경 작업을 수행해야만 문제를 해결할 수 있는 경우를 제외하고 하나의 위치만 포함해야 합니다. **참고:** 결과를 표시하려면 {% data variables.product.prodname_code_scanning %}에 하나 이상의 위치가 필요합니다. {% data variables.product.prodname_code_scanning_capc %}는 이 속성을 사용하여 결과에 주석을 달 파일을 결정합니다. 이 배열의 첫 번째 값만 사용됩니다. 그 외의 값은 무시됩니다.
| `partialFingerprints`| **필수 사항입니다.** 결과의 고유 ID를 추적하는 데 사용되는 문자열 세트입니다. {% data variables.product.prodname_code_scanning_capc %}는 `partialFingerprints`를 사용하여 커밋 및 분기에서 동일한 결과를 정확하게 식별합니다. `partialFingerprints`가 있으면 {% data variables.product.prodname_code_scanning_capc %}는 partialFingerprints를 사용하려고 시도합니다. `upload-action`을 사용하여 타사 SARIF 파일을 업로드하는 경우 SARIF 파일에 `partialFingerprints`가 없으면 이 작업에서 자동으로 생성합니다. 자세한 내용은 “[실행에서 코드 검색 경고를 추적하기 위한 데이터 제공](#providing-data-to-track-code-scanning-alerts-across-runs)”을 참조하세요.  **참고:** {% data variables.product.prodname_code_scanning_capc %}는 `primaryLocationLineHash`만 사용합니다.
| `codeFlows[].threadFlows[].locations[]`| **선택 사항입니다.** 실행 스레드를 통해 프로그램의 진행 상황을 설명하는 `threadFlow` 개체의 `location` 개체 배열입니다. `codeFlow` 개체는 결과를 검색하는 데 사용되는 코드 실행 패턴을 설명합니다. 코드 흐름이 제공되면 {% data variables.product.prodname_code_scanning %}은 관련 결과에 대한 {% data variables.product.prodname_dotcom %}에서 코드 흐름을 확장합니다. 자세한 내용은 [`location` 개체](#location-object)를 참조하세요.
| `relatedLocations[]`| 이 결과와 관련된 위치 세트입니다. {% data variables.product.prodname_code_scanning_capc %}는 결과 메시지에 관련 위치가 포함되어 있으면 관련 위치에 연결합니다. 자세한 내용은 [`location` 개체](#location-object)를 참조하세요.

### `location` 개체의  멤버의 부모에 대해 SQL Server 인스턴스 이름을 표시합니다.

프로그래밍 아티팩트 내의 위치(예: 리포지토리의 파일 또는 빌드 중에 생성된 파일)입니다.

| Name | 설명 |
|----|----|
| `location.id` | **선택 사항입니다.** 이 위치를 단일 결과 개체 내의 다른 모든 위치와 구별하는 고유 식별자입니다. 이 속성의 허용 범위는 0부터 2^63 - 1까지입니다.
| `location.physicalLocation` | **필수 사항입니다.** 아티팩트 및 지역을 식별합니다. 자세한 내용은 [`physicalLocation`](#physicallocation-object)를 참조하세요.
| `location.message.text` | **선택 사항입니다.** 위치와 관련된 메시지입니다.

### `physicalLocation` 개체의  멤버의 부모에 대해 SQL Server 인스턴스 이름을 표시합니다.

| Name | 설명 |
|----|----|
| `artifactLocation.uri`| **필수 사항입니다.** 아티팩트 위치를 나타내는 URI로, 일반적으로 리포지토리의 파일 또는 빌드 중에 생성된 파일입니다. 최상의 결과를 얻으려면 이 경로가 분석 중인 GitHub 리포지토리 루트의 상대 경로인 것이 좋습니다. 예들 들어 `src/main.js`입니다. 아티팩트 URI에 대한 자세한 내용은 “[원본 파일의 루트 지정](#specifying-the-root-for-source-files)”을 참조하세요.|
| `region.startLine` | **필수 사항입니다.** 지역에서 첫 번째 문자의 줄 번호입니다.
| `region.startColumn` | **필수 사항입니다.** 지역에서 첫 번째 문자의 열 번호입니다.
| `region.endLine` | **필수 사항입니다.** 지역에서 마지막 문자의 줄 번호입니다.
| `region.endColumn` | **필수 사항입니다.** 지역 다음에 나오는 문자의 열 번호입니다.

### `runAutomationDetails` 개체의  멤버의 부모에 대해 SQL Server 인스턴스 이름을 표시합니다.

`runAutomationDetails` 개체에는 실행 ID를 지정하는 정보가 포함됩니다.

{% note %}

**참고:** `runAutomationDetails`는 SARIF v2.1.0 개체입니다. {% data variables.product.prodname_codeql_cli %}를 사용하는 경우 사용할 SARIF 버전을 지정할 수 있습니다. `runAutomationDetails`에 해당하는 개체는 SARIF v1의 경우 `<run>.automationId`이고, SARIF v2의 경우는 `<run>.automationLogicalId`입니다.

{% endnote %}

| Name | 설명 |
|----|----|
| `id`| **선택 사항입니다.** 분석 범주 및 실행 ID를 식별하는 문자열입니다. 동일한 도구와 커밋에 대한 여러 SARIF 파일을 업로드하되, 다른 언어로 또는 코드의 다른 부분에서 수행하려는 경우에 사용합니다. |

`runAutomationDetails` 개체 사용은 선택 사항입니다.

`id` 필드에는 분석 범주 및 실행 ID가 포함될 수 있습니다. `id` 필드의 실행 ID 부분은 사용하지 않지만 저장하겠습니다.

동일한 도구 또는 커밋에 대한 여러 분석을 구별하되, 다른 언어로 또는 코드의 다른 부분에서 수행하려면 범주를 사용합니다. 분석 실행 날짜와 같은 분석의 특정 실행을 식별하려면 실행 ID를 사용합니다.

`id`는 `category/run-id`로 해석됩니다. `id`에 슬래시(`/`)가 없으면 전체 문자열이 `run_id`이고 `category`는 비어 있는 것입니다. 그렇지 않으면 문자열의 마지막 슬래시까지는 전부 `category`이고, 그 뒤는 전부 `run_id`입니다.

| `id` | category | `run_id` |
|----|----|----|
| my-analysis/tool1/2021-02-01 | my-analysis/tool1 | 2021-02-01
| my-analysis/tool1/ | my-analysis/tool1 | _no `run-id`_
| my-analysis for tool1 | _no category_ | my-analysis for tool1

- `id`가 "my-analysis/tool1/2021-02-01"인 실행은 "my-analysis/tool1"에 속합니다. 아마도 2021년 2월 2일의 실행인 것 같습니다.
- `id`가 "my-analysis/tool1/"인 실행은 "my-analysis/tool1" 범주에 속하지만 해당 범주의 다른 실행과 구별되지 않습니다.
- `id`가 "my-analysis for tool1"인 실행은 고유 식별자를 가지고 있지만 어떤 범주에 속하는지 유추할 수 없습니다.

`runAutomationDetails` 개체 및 `id` 필드에 대한 자세한 내용은 OASIS 설명서의 [runAutomationDetails 개체](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012479)를 참조하세요.

지원되는 나머지 필드는 무시됩니다.

## SARIF 출력 파일 예제

다음 예제 SARIF 출력 파일은 지원되는 속성 및 예제 값을 보여줍니다.

### 최소 필수 속성이 예제

이 SARIF 출력 파일에는 {% data variables.product.prodname_code_scanning %} 결과가 예상대로 작동하는 데 필요한 최소 필수 속성을 보여주는 예제 값이 포함되어 있습니다. 속성을 제거하거나 값을 생략하거나, 빈 문자열을 사용하면 이 데이터가 올바르게 표시되지 않거나 {% data variables.product.prodname_dotcom %}에서 동기화되지 않습니다. 

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "rules": [
            {
              "id": "R01"
                      ...
              "properties" : {
                 "id" : "java/unsafe-deserialization",
                 "kind" : "path-problem",
                 "name" : "...",
                 "problem.severity" : "error",
                 "security-severity" : "9.8",
               }
            }
          ]
        }
      },
      "results": [
        {
          "ruleId": "R01",
          "message": {
            "text": "Result text. This result does not have a rule associated."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "fileURI"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1"
          }
        }
      ]
    }
  ]
}
```

### 지원되는 모든 SARIF 속성을 보여 주는 예제

이 SARIF 출력 파일에는 {% data variables.product.prodname_code_scanning %}을 지원하는 모든 SARIF 속성을 보여주는 예제 값이 있습니다.

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "semanticVersion": "2.0.0",
          "rules": [
            {
              "id": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
              "name": "js/unused-local-variable",
              "shortDescription": {
                "text": "Unused variable, import, function or class"
              },
              "fullDescription": {
                "text": "Unused variables, imports, functions or classes may be a symptom of a bug and should be examined carefully."
              },
              "defaultConfiguration": {
                "level": "note"
              },
              "properties": {
                "tags": [
                  "maintainability"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
              "name": "js/inconsistent-use-of-new",
              "shortDescription": {
                "text": "Inconsistent use of 'new'"
              },
              "fullDescription": {
                "text": "If a function is intended to be a constructor, it should always be invoked with 'new'. Otherwise, it should always be invoked as a normal function, that is, without 'new'."
              },
              "properties": {
                "tags": [
                  "reliability",
                  "correctness",
                  "language-features"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "R01"
            }
          ]
        }
      },
      "automationDetails": {
        "id": "my-category/"
      },
      "results": [
        {
          "ruleId": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
          "ruleIndex": 0,
          "message": {
            "text": "Unused variable foo."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "main.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1",
            "primaryLocationStartColumnFingerprint": "4"
          }
        },
        {
          "ruleId": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
          "ruleIndex": 1,
          "message": {
            "text": "Function resolvingPromise is sometimes invoked as a constructor (for example [here](1)), and sometimes as a normal function (for example [here](2))."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/promises.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "5061c3315a741b7d:1",
            "primaryLocationStartColumnFingerprint": "7"
          },
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/ParseObject.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2281,
                  "startColumn": 33,
                  "endColumn": 55
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/LiveQueryClient.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 166
                }
              },
              "message": {
                "text": "here"
              }
            }
          ]
        },
        {
          "ruleId": "R01",
          "message": {
            "text": "Specifying both [ruleIndex](1) and [ruleID](2) might lead to inconsistencies."
          },
          "level": "error",
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 54,
                  "startColumn": 10,
                  "endLine": 55,
                  "endColumn": 25
                }
              }
            }
          ],
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 81,
                  "startColumn": 10,
                  "endColumn": 18
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 82,
                  "startColumn": 10,
                  "endColumn": 21
                }
              },
              "message": {
                "text": "here"
              }
            }
          ],
          "codeFlows": [
            {
              "threadFlows": [
                {
                  "locations": [
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "startLine": 11,
                            "endLine": 29,
                            "startColumn": 10,
                            "endColumn": 18
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        },
                        "message": {
                          "text": "Rule has index 0"
                        }
                      }
                    },
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "endColumn": 47,
                            "startColumn": 12,
                            "startLine": 12
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "ABC:2"
          }
        }
      ],
      "columnKind": "utf16CodeUnits"
    }
  ]
}
```

