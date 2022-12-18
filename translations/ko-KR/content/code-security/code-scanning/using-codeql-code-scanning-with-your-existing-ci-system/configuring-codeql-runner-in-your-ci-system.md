---
title: CI 시스템에서 CodeQL 실행기 구성
shortTitle: Configure CodeQL runner
intro: '{% data variables.code-scanning.codeql_runner %}가 프로젝트의 코드를 검사하고 결과를 {% data variables.product.prodname_dotcom %}에 업로드하는 방법을 구성할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Integration
  - CI
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 64245dd9f320947510db3e108b30c886c95b89d1
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161072'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## CI 시스템의 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 구성 정보

{% data variables.product.prodname_code_scanning %}을(를) CI 시스템에 통합하려면 {% data variables.code-scanning.codeql_runner %}를 사용할 수 있습니다. 자세한 내용은 "[CI 시스템에서 {% data variables.code-scanning.codeql_runner %} 실행"을 참조하세요](/code-security/secure-coding/running-codeql-runner-in-your-ci-system).

일반적으로 다음과 같이 {% data variables.code-scanning.codeql_runner %}를 호출합니다.

```shell
$ /path/to-runner/codeql-runner-OS <COMMAND> <FLAGS>
```

`/path/to-runner/` 는 CI 시스템에서 {% data variables.code-scanning.codeql_runner %}를 다운로드한 위치에 따라 달라집니다. `codeql-runner-OS`는 사용하는 운영 체제에 따라 달라집니다.
각각 Linux, macOS 및 Windows 시스템의 {% data variables.code-scanning.codeql_runner %}, `codeql-runner-linux`, `codeql-runner-macos`및 `codeql-runner-win`의 세 가지 버전이 있습니다. 

{% data variables.code-scanning.codeql_runner %}가 코드를 검사하는 방식을 사용자 지정하려면 및 와 `--queries`같은 `--languages` 플래그를 사용하거나 별도의 구성 파일에서 사용자 지정 설정을 지정할 수 있습니다.

## 끌어오기 요청 검사

끌어오기 요청을 만들 때마다 코드를 검사하면 개발자가 코드에 새로운 취약성 및 오류를 도입할 수 없습니다.

끌어오기 요청을 검사하려면 `analyze` 명령을 실행하고 `--ref` 플래그를 사용하여 끌어오기 요청을 지정합니다. 참조는 끌어오기 요청 분기의 HEAD 커밋 또는 기본 분기와의 병합 커밋을 체크 아웃했는지 여부에 따라 `refs/pull/<PR-number>/head` 또는 `refs/pull/<PR-number>/merge`입니다.

```shell
$ /path/to-runner/codeql-runner-linux analyze --ref refs/pull/42/merge
```

{% note %}

**참고**: 타사 도구를 사용하여 코드를 분석하고 결과를 끌어오기 요청 검사로 표시하려면 `upload` 명령을 실행하고 `--ref` 플래그를 사용하여 분기 대신 끌어오기 요청을 지정해야 합니다. 참조는 `refs/pull/<PR-number>/head` 또는 `refs/pull/<PR-number>/merge`입니다.

{% endnote %}

## 자동 언어 검색 재정의

{% data variables.code-scanning.codeql_runner %}는 지원되는 언어로 작성된 코드를 자동으로 검색하고 검색합니다.

{% data reusables.code-scanning.codeql-languages-bullets %}

{% data reusables.code-scanning.specify-language-to-analyze %}

자동 언어 검색을 재정의하려면 `--languages` 플래그를 사용하여 `init` 명령을 실행하고 쉼표로 구분된 언어 키워드 목록을 실행합니다. 지원되는 언어의 키워드는 {% data reusables.code-scanning.codeql-languages-keywords %}입니다.

```shell
$ /path/to-runner/codeql-runner-linux init --languages cpp,java
```

## 추가 쿼리 실행

{% data reusables.code-scanning.run-additional-queries %}

{% data reusables.code-scanning.codeql-query-suites-explanation %}

하나 이상의 쿼리를 추가하려면 쉼표로 구분된 경로 목록을 `init` 명령의 `--queries` 플래그에 전달합니다. 구성 파일에서 추가 쿼리를 지정할 수도 있습니다.

또한 사용자 지정 설정에 구성 파일을 사용하고 플래그가 있는 추가 쿼리 `--queries` 를 지정하는 경우 {% data variables.code-scanning.codeql_runner %}는 구성 파일의 쿼리 대신 플래그로 지정된 추가 쿼리를 <nobr>`--queries`</nobr> 사용합니다.
플래그 및 구성 파일에 지정된 추가 쿼리의 결합된 집합을 실행하려면 <nobr>`--queries`</nobr>에 전달된 값 앞에 `+` 기호를 접두사로 추가합니다.
자세한 내용은 “[사용자 지정 구성 파일 사용](#using-a-custom-configuration-file)”을 참조하세요.

다음 예제에서 기호는 `+` {% data variables.code-scanning.codeql_runner %}가 참조된 구성 파일에 지정된 쿼리와 함께 추가 쿼리를 사용하는지 확인합니다.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml 
    --queries +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

## 사용자 지정 구성 파일 사용

{% data variables.code-scanning.codeql_runner %} 명령에 추가 정보를 전달하는 대신 별도의 구성 파일에서 사용자 지정 설정을 지정할 수 있습니다.

구성 파일은 YAML 파일입니다. 아래 예제와 같이 {% data variables.product.prodname_actions %}의 워크플로 구문과 유사한 구문을 사용합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions)”을 참조하세요. 

`init` 명령의 `--config-file` 플래그를 사용하여 구성 파일을 지정합니다. <nobr>`--config-file`</nobr> 값은 사용하려는 구성 파일의 경로입니다. 이 예제에서는 구성 파일 _.github/codeql/codeql-config.yml_ 을 로드합니다.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

### 예제 구성 파일

{% data reusables.code-scanning.example-configuration-files %}

## 컴파일된 언어에 대해 {% data variables.product.prodname_code_scanning %} 구성

컴파일된 언어 C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} 및 Java의 경우 {% data variables.product.prodname_codeql %}는 분석하기 전에 코드를 빌드합니다. {% data reusables.code-scanning.analyze-go %}

많은 일반적인 빌드 시스템의 경우 {% data variables.code-scanning.codeql_runner %}는 코드를 자동으로 빌드할 수 있습니다. 코드를 자동으로 빌드하려면 `init` 단계와 `analyze` 단계 사이에 `autobuild`를 실행합니다. 리포지토리에 특정 버전의 빌드 도구가 필요한 경우 먼저 빌드 도구를 수동으로 설치해야 할 수 있습니다. 

`autobuild` 프로세스는 리포지토리에 대해 컴파일된 언어를 하나만 빌드하려고 시도합니다. 분석을 위해 자동으로 선택된 언어는 파일이 가장 많은 언어입니다. 언어를 명시적으로 선택하려면 `autobuild` 명령의 `--language` 플래그를 사용합니다.

```shell
$ /path/to-runner/codeql-runner-linux autobuild --language csharp
```

`autobuild` 명령으로 코드를 빌드할 수 없는 경우 `init` 단계와 `analyze` 단계 사이에서 빌드 단계를 직접 실행할 수 있습니다. 자세한 내용은 "[CI 시스템에서 {% data variables.code-scanning.codeql_runner %} 실행"을 참조하세요](/code-security/secure-coding/running-codeql-runner-in-your-ci-system#compiled-language-example).

## {% data variables.product.prodname_code_scanning %} 데이터를 {% data variables.product.prodname_dotcom %}에 업로드

기본적으로 {% data variables.code-scanning.codeql_runner %}는 명령을 실행할 `analyze` 때 {% data variables.product.prodname_code_scanning %}의 결과를 업로드합니다. `upload` 명령을 사용하여 SARIF 파일을 별도로 업로드할 수도 있습니다.

데이터를 업로드하면 {% data variables.product.prodname_dotcom %}이(가) 리포지토리에 경고를 표시합니다. 
- 끌어오기 요청에 업로드한 경우(예: `--ref refs/pull/42/merge` 또는 `--ref refs/pull/42/head`) 결과는 끌어오기 요청 검사에서 결과가 경고로 표시됩니다. 자세한 내용은 “[끌어오기 요청에서 코드 검사 경고 심사](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)”를 참조하세요.
- 분기에 업로드한 경우(예: `--ref refs/heads/my-branch`) 결과는 리포지토리의 **보안** 탭에 표시됩니다. 자세한 내용은 “[리포지토리에 대한 코드 검사 경고 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)를 참조하세요.

## {% data variables.code-scanning.codeql_runner %} 명령 참조

{% data variables.code-scanning.codeql_runner %}는 다음 명령과 플래그를 지원합니다.

### `init`

{% data variables.code-scanning.codeql_runner %}를 초기화하고 분석할 각 언어에 대한 {% data variables.product.prodname_codeql %} 데이터베이스를 만듭니다.

| 플래그 | 필수 | 입력 값 |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | 초기화할 리포지토리의 이름입니다. |
| `--github-url` | ✓ | 리포지토리가 호스트되는 {% data variables.product.prodname_dotcom %} 인스턴스의 URL입니다. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | 표준 입력에서 {% data variables.product.prodname_github_apps %} 토큰 또는 {% data variables.product.pat_generic %}를 읽습니다. |
| `--languages` | | 분석할 언어의 쉼표로 구분된 목록입니다. 기본적으로 {% data variables.code-scanning.codeql_runner %}는 리포지토리에서 지원되는 모든 언어를 검색하고 분석합니다. |
| `--queries` | | 기본 보안 쿼리 제품군 외에도 실행할 추가 쿼리의 쉼표로 구분된 목록입니다. 그러면 사용자 지정 구성 파일의 `queries` 설정이 재정의됩니다. |
| `--config-file` | | 사용자 지정 구성 파일의 경로입니다. |
| `--codeql-path` | | 사용할 {% data variables.product.prodname_codeql %} CLI 실행 파일의 복사본 경로입니다. 기본적으로 {% data variables.code-scanning.codeql_runner %}는 복사본을 다운로드합니다. |
| `--temp-dir` | | 임시 파일이 저장되는 디렉터리입니다. 기본값은 `./codeql-runner`입니다. |
| `--tools-dir` | | {% data variables.product.prodname_codeql %} 도구 및 기타 파일이 실행 사이에 저장되는 디렉터리입니다. 기본값은 홈 디렉터리의 하위 디렉터리입니다. |
| <nobr>`--checkout-path`</nobr> | | 리포지토리의 체크 아웃 경로입니다. 기본값은 현재 작업 디렉터리입니다. | 
| `--debug` | | 없음 자세한 출력을 인쇄합니다. |
| <nobr>`--trace-process-name`</nobr> | | 고급, Windows만 해당됩니다. 이 프로세스의 Windows 추적기가 삽입되는 프로세스의 이름입니다. |
| <nobr>`--trace-process-level`</nobr> | | 고급, Windows만 해당됩니다. 이 프로세스의 Windows 추적기가 삽입되는 부모 프로세스의 수준 수입니다. |
| `-h`, `--help` | | 없음 명령에 대한 도움말을 표시합니다. |

### `autobuild`

컴파일된 언어 C/C++, C#, Java에 대한 코드를 빌드하려고 시도합니다. 해당 언어의 경우 {% data variables.product.prodname_codeql %}은(는) 코드를 분석하기 전에 작성합니다. `init` 및 `analyze` 단계 사이에 `autobuild`를 실행합니다.

| 플래그 | 필수 | 입력 값 |
| ---- |:--------:| ----------- |
| `--language` | | 빌드할 언어입니다. 기본적으로 {% data variables.code-scanning.codeql_runner %}는 대부분의 파일을 사용하여 컴파일된 언어를 빌드합니다. |
| <nobr>`--temp-dir`</nobr> | | 임시 파일이 저장되는 디렉터리입니다. 기본값은 `./codeql-runner`입니다. |
| `--debug` | | 없음 자세한 출력을 인쇄합니다. |
| <nobr> `-h`, `--help`</nobr> | | 없음 명령에 대한 도움말을 표시합니다. |

### `analyze`

{% data variables.product.prodname_codeql %} 데이터베이스의 코드를 분석하고 결과를 {% data variables.product.product_name %}에 업로드합니다.

| 플래그 | 필수 | 입력 값 |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | 분석할 리포지토리의 이름입니다. |
| `--commit` | ✓ | 분석할 커밋의 SHA입니다. Git 및 Azure DevOps에서 이는 `git rev-parse HEAD` 값에 해당합니다. Jenkins에서 이는 `$GIT_COMMIT`에 해당합니다. |
| `--ref` | ✓ | 분석할 참조의 이름입니다(예: `refs/heads/main` 또는 `refs/pull/42/merge`). Git 또는 Jenkins에서 이는 `git symbolic-ref HEAD` 값에 해당합니다. Azure DevOps에서 이 값은 `$(Build.SourceBranch)`에 해당합니다. |
| `--github-url` | ✓ | 리포지토리가 호스트되는 {% data variables.product.prodname_dotcom %} 인스턴스의 URL입니다. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | 표준 입력에서 {% data variables.product.prodname_github_apps %} 토큰 또는 {% data variables.product.pat_generic %}을(를) 읽습니다. |
| <nobr>`--checkout-path`</nobr> | | 리포지토리의 체크 아웃 경로입니다. 기본값은 현재 작업 디렉터리입니다.  |
| `--no-upload` | | 없음 {% data variables.code-scanning.codeql_runner %}에서 {% data variables.product.product_name %}에 결과를 업로드하는 것을 중지합니다. |
| `--output-dir` | | 출력 SARIF 파일이 저장되는 디렉터리입니다. 기본값은 임시 파일의 디렉터리에 있습니다. |
| `--ram` | | 쿼리를 실행할 때 사용할 메모리 양입니다. 기본값은 사용 가능한 모든 메모리를 사용하는 것입니다. |
| <nobr>`--no-add-snippets`</nobr> | | 없음 SARIF 출력에서 코드 조각을 제외합니다. |
| <nobr>`--category`<nobr> | | 이 분석을 위해 SARIF 결과 파일에 포함할 범주입니다. 범주는 다양한 언어 또는 다양한 코드 부분에서 수행되지만 동일한 도구와 커밋을 대상으로 하는 여러 분석을 구분하는 데 사용할 수 있습니다. 이 값은 SARIF v2.1.0의 `<run>.automationDetails.id` 속성에 표시됩니다. |
| `--threads` | | 쿼리를 실행할 때 사용할 스레드 수입니다. 기본값은 사용 가능한 모든 코어를 사용하는 것입니다. |
| `--temp-dir` | | 임시 파일이 저장되는 디렉터리입니다. 기본값은 `./codeql-runner`입니다. |
| `--debug` | | 없음 자세한 출력을 인쇄합니다. |
| `-h`, `--help` | | 없음 명령에 대한 도움말을 표시합니다. |

### `upload`

{% data variables.product.product_name %}에 SARIF 파일을 업로드합니다.

{% note %}

**참고**: CodeQL 실행기를 사용하여 코드를 분석하는 경우 `analyze` 명령은 기본적으로 SARIF 결과를 업로드합니다. `upload` 명령을 사용하여 다른 도구에서 생성된 SARIF 결과를 업로드할 수 있습니다.

{% endnote %}

| 플래그 | 필수 | 입력 값 |
| ---- |:--------:| ----------- |
| `--sarif-file` | ✓ | 업로드할 SARIF 파일 또는 여러 SARIF 파일이 포함된 디렉터리입니다. |
| `--repository` | ✓ | 분석된 리포지토리의 이름입니다. |
| `--commit` | ✓ | 분석된 커밋의 SHA입니다. Git 및 Azure DevOps에서 이는 `git rev-parse HEAD` 값에 해당합니다. Jenkins에서 이는 `$GIT_COMMIT`에 해당합니다. |
| `--ref` | ✓ | 분석된 참조의 이름입니다(예: `refs/heads/main` 또는 `refs/pull/42/merge`). Git 또는 Jenkins에서 이는 `git symbolic-ref HEAD` 값에 해당합니다. Azure DevOps에서 이 값은 `$(Build.SourceBranch)`에 해당합니다. |
| `--github-url` | ✓ | 리포지토리가 호스트되는 {% data variables.product.prodname_dotcom %} 인스턴스의 URL입니다. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | 표준 입력에서 {% data variables.product.prodname_github_apps %} 토큰 또는 {% data variables.product.pat_generic %}을(를) 읽습니다. |
| <nobr>`--checkout-path`</nobr> | | 리포지토리의 체크 아웃 경로입니다. 기본값은 현재 작업 디렉터리입니다.  |
| `--debug` | | 없음 자세한 출력을 인쇄합니다. |
| `-h`, `--help` | | 없음 명령에 대한 도움말을 표시합니다. |
