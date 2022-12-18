---
title: CI 시스템에서 CodeQL 실행기 문제 해결
shortTitle: Troubleshoot CodeQL runner
intro: '{% data variables.code-scanning.codeql_runner %}에 문제가 있는 경우 다음 팁을 사용하여 문제를 해결할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/troubleshooting-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Troubleshooting
  - Integration
  - CI
ms.openlocfilehash: b241e0c01b463a46a1eb3b47b68ba0283a94609d
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161166'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

## `init` 명령이 너무 오래 걸림

{% data variables.code-scanning.codeql_runner %}에서 코드를 빌드하고 분석하려면 {% data variables.product.prodname_codeql %} 번들에 액세스해야 합니다. 이 번들에는 {% data variables.product.prodname_codeql %} CLI 및 {% data variables.product.prodname_codeql %} 라이브러리가 포함되어 있습니다.

컴퓨터 `init` 에서 처음으로 {% data variables.code-scanning.codeql_runner %}를 사용하는 경우 명령은 {% data variables.product.prodname_codeql %} 번들을 컴퓨터에 다운로드합니다. 이 다운로드는 몇 분 정도 걸릴 수 있습니다.
{% data variables.product.prodname_codeql %} 번들은 실행 사이에 캐시되므로 동일한 컴퓨터에서 {% data variables.code-scanning.codeql_runner %}를 다시 사용하는 경우 {% data variables.product.prodname_codeql %} 번들을 다시 다운로드하지 않습니다.

이 자동 다운로드를 방지하려면 {% data variables.product.prodname_codeql %} 번들을 컴퓨터에 수동으로 다운로드하고 `init` 명령의 `--codeql-path` 플래그를 사용하여 경로를 지정할 수 있습니다.

## 빌드 중에 코드를 찾을 수 없음

`analyze`{% data variables.code-scanning.codeql_runner %}에 대한 명령이 오류`No source code was seen during the build`와 함께 실패하면 {% data variables.product.prodname_codeql %}에서 코드를 모니터링할 수 없음을 나타냅니다. 이러한 실패를 설명할 수 있는 몇 가지 이유가 있습니다.

1. 자동 언어 검색은 지원되는 언어를 식별했지만 리포지토리에는 해당 언어의 분석 가능한 코드가 없습니다. 일반적인 예는 언어 검색 서비스에서 특정 프로그래밍 언어(예: `.h` 또는 `.gyp` 파일)와 연결된 파일을 찾지만 리포지토리에 해당 실행 코드가 없는 경우입니다. 이 문제를 해결하려면 `init` 명령의 `--languages` 플래그를 사용하여 분석하려는 언어를 수동으로 정의할 수 있습니다. 자세한 내용은 "[CI 시스템에서 {% data variables.code-scanning.codeql_runner %} 구성"을 참조하세요](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system).

1. `autobuild` 명령을 사용하지 않고 컴파일된 언어를 분석하고 `init` 단계 후 직접 빌드 단계를 실행합니다. 빌드가 작동하려면 {% data variables.code-scanning.codeql_runner %}에서 빌드 프로세스를 모니터링할 수 있도록 환경을 설정해야 합니다. `init` 명령은 필요한 환경 변수를 내보내는 방법에 대한 지침을 생성하므로 `init` 명령을 실행한 후 스크립트를 복사하고 실행할 수 있습니다.
   - macOS 및 Linux에서 다음을 수행합니다.
     ```shell
      $ . codeql-runner/codeql-env.sh
     ```
   - Windows에서 명령 셸(`cmd`) 또는 일괄 처리 파일(`.bat`)을 사용합니다.
     ```shell
     > call codeql-runner\codeql-env.bat
     ```
   - Windows에서 PowerShell을 사용하여 다음을 수행합니다.
     ```shell
     > cat codeql-runner\codeql-env.sh | Invoke-Expression
     ```

   환경 변수도 `codeql-runner/codeql-env.json` 파일에 저장됩니다. 이 파일에는 환경 변수 키를 값에 매핑하는 단일 JSON 개체가 포함되어 있습니다. `init` 명령에서 생성된 스크립트를 실행할 수 없는 경우 데이터를 JSON 형식으로 대신 사용할 수 있습니다.

   {% note %}

   **참고:** `init` 명령의 `--temp-dir` 플래그를 사용하여 임시 파일에 대한 사용자 지정 디렉터리를 지정한 경우 `codeql-env` 파일 경로가 다를 수 있습니다.

   {% endnote %}

1. macOS에서 `autobuild` 명령을 사용하지 않고 컴파일된 언어를 분석하고 `init` 단계 후 직접 빌드 단계를 실행합니다. 최신 버전의 OSX에서 기본값인 SIP(시스템 무결성 보호)를 사용하도록 설정하면 분석이 실패할 수 있습니다. 이 문제를 해결하려면 빌드 명령에 `$CODEQL_RUNNER` 환경 변수를 접두사로 추가합니다. 
   예를 들어 빌드 명령이 `cmd arg1 arg2`인 경우 `$CODEQL_RUNNER cmd arg1 arg2`를 실행해야 합니다.

1. 코드는 컨테이너 또는 별도의 컴퓨터에 빌드됩니다. 컨테이너화된 빌드를 사용하거나 빌드를 다른 컴퓨터에 아웃소싱하는 경우 컨테이너 또는 빌드 작업이 수행되는 컴퓨터에서 {% data variables.code-scanning.codeql_runner %}를 실행해야 합니다. 자세한 내용은 “[컨테이너에서 CodeQL 코드 검색 실행](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)”을 참조하세요.
