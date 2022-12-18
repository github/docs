---
title: CodeQL 워크플로 문제 해결
shortTitle: Troubleshoot CodeQL workflow
intro: '{% data variables.product.prodname_code_scanning %}에 문제가 있는 경우 문제 해결을 위한 이러한 팁을 사용하여 문제를 해결할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Troubleshooting
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 4cbf57959776fee375eef2ea08778bf4c66b6324
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161193'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

{% ifversion ghes or ghae %} {% note %}

**참고:** 이 문서에서는 이 {% data variables.product.product_name %} 버전의 초기 릴리스에 포함된 CodeQL 작업 및 관련 CodeQL CLI 번들의 버전에서 사용할 수 있는 기능을 설명합니다. 엔터프라이즈에서 더 최신 버전의 CodeQL 작업을 사용하는 경우, 최신 기능에 대한 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 문서](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow)를 참조하세요. {% ifversion not ghae %} 최신 버전 사용에 대한 자세한 내용은 “[어플라이언스에 대한 코드 검사 구성](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)”을 참조하세요.{% endif %}

{% endnote %} {% endif %}

## 디버깅을 위한 자세한 로그 생성

더 자세한 로깅 출력을 생성하려면 단계 디버그 로깅을 사용하도록 설정하면 됩니다. 자세한 내용은 “[디버그 로깅 사용](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)”을 참조하세요.

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

## {% data variables.product.prodname_codeql %} 디버깅 아티팩트 만들기

{% data variables.product.prodname_codeql %}을 디버그하는 데 도움이 되는 아티팩트를 가져올 수 있습니다.
디버그 아티팩트는 아티팩트(`debug-artifacts`)로 실행되는 워크로드로 업로드됩니다. 데이터에는 {% data variables.product.prodname_codeql %} 로그, {% data variables.product.prodname_codeql %} 데이터베이스 및 워크플로에서 생성된 모든 SARIF 파일이 포함됩니다.

이러한 아티팩트는{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}으로 문제를 디버그하는 데 도움이 됩니다. GitHub 지원에 문의하면 해당 사용자가 이 데이터를 요청할 수 있습니다.

{% endif %}

{% ifversion codeql-action-debug-logging %}

### 디버그 로깅을 사용하도록 설정하고 작업을 다시 실행하여 {% data variables.product.prodname_codeql %} 디버깅 아티팩트 만들기

디버그 로깅을 사용하도록 설정하고 작업을 다시 실행하여 {% data variables.product.prodname_codeql %} 디버깅 아티팩트 만들 수 있습니다. {% data variables.product.prodname_actions %} 워크플로 및 작업을 다시 실행하는 방법에 대한 자세한 내용은 “[워크플로 및 작업 다시 실행”](/actions/managing-workflow-runs/re-running-workflows-and-jobs)을 참조하세요.

**디버그 로깅 사용** 을 선택해야 합니다. 이 옵션은 다시 실행에 대한 실행기 진단 로깅 및 단계 디버그 로깅이 사용하도록 설정합니다. 그런 다음 `debug-artifacts`를 다운로드하여 자세히 조사할 수 있습니다. 작업을 다시 실행하여 {% data variables.product.prodname_codeql %} 디버깅 아티팩트를 만들 때 워크플로 파일을 수정할 필요가 없습니다.

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

### 워크플로 플래그를 사용하여 {% data variables.product.prodname_codeql %} 디버깅 아티팩트 만들기

워크플로에서 플래그를 사용하여 {% data variables.product.prodname_codeql %} 디버깅 아티팩트를 만들 수 있습니다. 이를 위해 {% data variables.code-scanning.codeql_workflow %} 파일의 단계를 수정 `init` 하고 를 설정 `debug: true`해야 합니다.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

{% endif %}

## 컴파일된 언어에 대한 자동 빌드 실패

프로젝트 내에서 컴파일된 언어에 대한 코드 자동 빌드가 실패하는 경우 다음 문제 해결 단계를 시도합니다.

- {% data variables.product.prodname_code_scanning %} 워크플로에서 `autobuild` 단계를 제거하고 특정 빌드 단계를 추가합니다. 워크플로 편집에 대한 자세한 내용은 "[{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)"을(를) 참조하세요. `autobuild` 바꾸기에 대한 자세한 내용은 “[컴파일된 언어를 위한 {% data variables.product.prodname_codeql %} 워크플로 구성](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”을 참조하세요.

- 워크플로에서 분석할 언어를 명시적으로 지정하지 않으면 {% data variables.product.prodname_codeql %}은(는) 코드 베이스에서 지원되는 언어를 암시적으로 검색합니다. 이 구성에서는 컴파일된 언어 C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} 및 Java에서 {% data variables.product.prodname_codeql %}는 가장 많은 원본 파일로 언어를 분석합니다. 워크플로를 편집하고 분석할 언어를 지정하는 행렬을 추가합니다. 기본 CodeQL 분석 워크플로는 이러한 행렬을 사용합니다.

  워크플로의 다음 추출은 작업 전략 내에서 행렬을 사용하여 언어를 지정한 다음 “{% data variables.product.prodname_codeql %}” 단계 내에서 각 언어를 참조하는 방법을 보여 줍니다.

  ```yaml
  jobs:
    analyze:
      permissions:
        security-events: write
        actions: read
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: {% data reusables.actions.action-codeql-action-init %}
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  워크플로 편집에 대한 자세한 내용은 “[코드 검사 구성](/code-security/secure-coding/configuring-code-scanning)”을 참조하세요.

## 빌드 중에 코드를 찾을 수 없음

워크플로가 `No source code was seen during the build` 또는 `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32` 오류로 인해 실패하거나 {% data variables.product.prodname_codeql %}이(가) 코드를 모니터링할 수 없음을 나타냅니다. 이러한 실패를 설명할 수 있는 몇 가지 이유는 다음과 같습니다.

1. 리포지토리에는 {% data variables.product.prodname_codeql %}에서 지원하는 언어로 작성된 소스 코드가 포함되어 있지 않을 수 있습니다. 지원되는 언어 목록을 확인하고 이 경우 {% data variables.product.prodname_codeql %} 워크플로를 제거합니다. 자세한 내용은 “[CodeQL을 사용하는 코드 검사 안내](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql)”를 참조하세요.

1. 자동 언어 검색은 지원되는 언어를 식별했지만 리포지토리에는 해당 언어의 분석 가능한 코드가 없습니다. 일반적인 예는 언어 검색 서비스에서 특정 프로그래밍 언어(예: `.h` 또는 `.gyp` 파일)와 연결된 파일을 찾지만 리포지토리에 해당 실행 코드가 없는 경우입니다. 이 문제를 해결하기 위해 `language` 행렬의 언어 목록을 업데이트하여 분석하려는 언어를 수동으로 정의할 수 있습니다. 예를 들어 다음 구성은 Go 및 JavaScript만 분석합니다.

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # Supported options are listed in a comment in the default workflow.
      language: ['go', 'javascript']
  ```

   자세한 내용은 위에 있는 “[컴파일된 언어에 대한 자동 빌드 실패](#automatic-build-for-a-compiled-language-fails)”의 워크플로 추출을 참조하세요.

1. {% data variables.product.prodname_code_scanning %} 워크플로는 컴파일된 언어(C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} 또는 Java)를 분석하지만 코드가 컴파일되지 않았습니다. 기본적으로 {% data variables.product.prodname_codeql %} 분석 워크플로에는 `autobuild` 단계가 포함되어 있지만, 이 단계는 최상의 프로세스를 나타내며 특정 빌드 환경에 따라 코드를 빌드하는 데 성공하지 못할 수 있습니다. `autobuild` 단계를 제거하고 빌드 단계를 수동으로 포함하지 않은 경우에도 컴파일이 실패할 수 있습니다.  빌드 단계 지정에 대한 자세한 내용은 “[컴파일된 언어를 위한 {% data variables.product.prodname_codeql %} 워크플로 구성](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”을 참조하세요.
1. 워크플로는 컴파일된 언어(C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} 또는 Java)를 분석하지만, 빌드의 일부는 성능을 향상시키기 위해 캐시됩니다(Gradle 또는 Bazel과 같은 빌드 시스템에서 발생할 가능성이 가장 높임). {% data variables.product.prodname_codeql %}은(는) 리포지토리의 데이터 흐름을 이해하기 위해 컴파일러의 활동을 관찰하므로 {% data variables.product.prodname_codeql %}은(는) 분석을 수행하기 위해 완전한 빌드가 필요합니다.
1. 워크플로는 컴파일된 언어(C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} 또는 Java)를 분석하지만 워크플로의 및 `analyze` 단계 간에 `init` 컴파일이 발생하지 않습니다. {% data variables.product.prodname_codeql %}을(를) 수행하려면 컴파일러의 활동을 관찰하고 분석을 수행하기 위해 이 두 단계 사이에 빌드가 수행되어야 합니다.
1. 컴파일된 코드(C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} 또는 Java)가 성공적으로 컴파일되었지만 {% data variables.product.prodname_codeql %}에서 컴파일러 호출을 검색할 수 없습니다. 가장 일반적인 원인은 다음과 같습니다.

   - {% data variables.product.prodname_codeql %}에 대한 별도의 컨테이너에서 빌드 프로세스를 실행합니다. 자세한 내용은 “[컨테이너에서 CodeQL 코드 검색 실행](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)”을 참조하세요.
   - 디먼 프로세스를 사용하여 GitHub Actions 외부의 분산 빌드 시스템을 통해 빌드합니다.
   - {% data variables.product.prodname_codeql %}은(는) 사용 중인 특정 컴파일러를 인식하지 못합니다.

  .NET Framework 프로젝트 및 `dotnet build` 또는 `msbuild`를 사용하는 C# 프로젝트의 경우 코드를 빌드할 때 워크플로의 `run` 단계에서 `/p:UseSharedCompilation=false`를 지정해야 합니다.
  
  예를 들어 C#에 대한 다음 구성은 첫 번째 빌드 단계에서 플래그를 전달합니다.

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false
   ```

  특정 컴파일러 또는 구성에 다른 문제가 발생하면 {% data variables.contact.contact_support %}에 문의하세요.

빌드 단계 지정에 대한 자세한 내용은 “[컴파일된 언어를 위한 {% data variables.product.prodname_codeql %} 워크플로 구성](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”을 참조하세요.

{% ifversion fpt or ghes > 3.1  or ghae or ghec %}

## 검색된 코드 줄이 예상보다 적음

C/C++, C#, Go 및 Java와 같은 컴파일된 언어의 경우 {% data variables.product.prodname_codeql %}은(는) 분석 중에 빌드된 파일만 검색합니다. 따라서 일부 소스 코드가 올바르게 컴파일되지 않은 경우 검색된 코드 줄 수가 예상보다 적습니다. 여러 가지 이유로 이와 같은 현상이 발생할 수 있습니다.

1. {% data variables.product.prodname_codeql %} `autobuild` 기능은 추론을 사용하여 리포지토리에서 코드를 빌드합니다. 그러나 경우에 따라 이 방법은 리포지토리를 불완전하게 분석합니다. 예를 들어 단일 리포지토리에 여러 `build.sh` 명령이 있는 경우 `autobuild` 단계에서는 명령 중 하나만 실행하므로 일부 원본 파일이 컴파일되지 않을 수 있기 때문에 분석이 완료되지 않을 수 있습니다.
1. 일부 컴파일러는 {% data variables.product.prodname_codeql %}에서 작동하지 않으며 코드를 분석하는 동안 문제가 발생할 수 있습니다. 예를 들어 Project Lombok은 퍼블릭이 아닌 컴파일러 API를 사용하여 컴파일러 동작을 수정합니다. 이러한 컴파일러 수정에 사용된 가정은 {% data variables.product.prodname_codeql %}의 Java 추출기에서 유효하지 않으므로 코드를 분석할 수 없습니다.

{% data variables.product.prodname_codeql %} 분석에서 예상보다 적은 수의 코드 줄을 검색하는 경우 필요한 모든 소스 파일이 컴파일되었는지 확인하는 몇 가지 방법이 있습니다.

### `autobuild` 단계 바꾸기

`autobuild` 단계를 프로덕션에서 사용하는 것과 동일한 빌드 명령으로 바꿉니다. 이렇게 하면 {% data variables.product.prodname_codeql %}이(가) 검사하려는 모든 원본 파일을 컴파일하는 방법을 정확히 알 수 있습니다.
자세한 내용은 “[컴파일된 언어를 위한 {% data variables.product.prodname_codeql %} 워크플로 구성](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”을 참조하세요.

### {% data variables.product.prodname_codeql %} 데이터베이스에서 원본 파일의 복사본 검사

{% data variables.product.prodname_codeql %} 데이터베이스에 포함된 소스 코드의 복사본을 검사하여 일부 원본 파일이 분석되지 않은 이유를 이해할 수 있습니다. 작업 워크플로에서 데이터베이스를 가져오려면 {% data variables.product.prodname_codeql %} 워크플로 파일의 `init` 단계를 수정하고 `debug: true`를 설정합니다.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

이렇게 하면 로컬 컴퓨터에 다운로드할 수 있는 작업 아티팩트로 데이터베이스가 업로드됩니다. 자세한 내용은 “[워크플로 아티팩트 저장](/actions/guides/storing-workflow-data-as-artifacts)”을 참조하세요.

아티팩트에는 {% data variables.product.prodname_codeql %}에서 검사한 원본 파일의 보관된 복사본(_src.zip_)이 포함됩니다. 리포지토리의 소스 코드 파일과 _src.zip_ 에 있는 파일을 비교하면 누락된 파일 형식을 확인할 수 있습니다. 분석되지 않는 파일 형식을 알고 나면 {% data variables.product.prodname_codeql %} 분석을 위해 워크플로를 변경하는 방법을 더 쉽게 이해할 수 있습니다.

## 생성된 코드에서 발견된 경고

{% data reusables.code-scanning.alerts-found-in-generated-code %}

## 데이터베이스의 추출 오류

{% data variables.product.prodname_codeql %} 팀은 중요한 추출 오류에 대해 지속적으로 작업하여 모든 원본 파일을 검사할 수 있도록 합니다. 그러나 {% data variables.product.prodname_codeql %} 추출기는 데이터베이스를 만드는 동안 때때로 오류를 생성합니다. {% data variables.product.prodname_codeql %}은(는) 로그 파일에서 데이터베이스를 만드는 동안 생성된 추출 오류 및 경고에 대한 정보를 제공합니다.
추출 진단 정보는 전체 데이터베이스 상태를 나타냅니다. 대부분의 추출기 오류는 분석에 큰 영향을 주지 않습니다. 소수의 추출기 오류가 정상 상태이며 일반적으로 양호한 분석 상태를 나타냅니다.

그러나 데이터베이스를 만드는 동안 컴파일된 대부분의 파일에서 추출기 오류가 표시되는 경우 일부 원본 파일이 제대로 추출되지 않은 이유를 이해하기 위해 오류를 자세히 살펴봐야 합니다.

{% else %}

## `autobuild`를 사용하여 리포지토리의 일부가 분석되지 않았습니다.

{% data variables.product.prodname_codeql %} `autobuild` 기능은 추론을 사용하여 리포지토리에서 코드를 빌드합니다. 그러나 경우에 따라 이 방법으로 리포지토리를 불완전하게 분석할 수 있습니다. 예를 들어 단일 리포지토리에 여러 `build.sh` 명령이 있는 경우 `autobuild` 단계에서는 명령 중 하나만 실행하므로 분석이 완료되지 않을 수 있습니다. 해결 방법은 `autobuild` 단계를 분석하려는 모든 소스 코드를 빌드하는 빌드 단계로 바꾸는 것입니다. 자세한 내용은 “[컴파일된 언어를 위한 {% data variables.product.prodname_codeql %} 워크플로 구성](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”을 참조하세요.
{% endif %}

## 빌드 시간이 너무 오래 걸림

{% data variables.product.prodname_codeql %} 분석을 사용하여 빌드를 실행하는 데 너무 오래 걸리는 경우 빌드 시간을 줄이는 몇 가지 방법이 있습니다.

### 메모리 또는 코어 늘리기

자체 호스팅 실행기를 사용하여 {% data variables.product.prodname_codeql %} 분석을 실행하는 경우 해당 실행기의 메모리 또는 코어 수를 늘릴 수 있습니다.

### 행렬 빌드를 사용하여 분석 병렬 처리

기본 {% data variables.code-scanning.codeql_workflow %}는 각 언어의 분석이 병렬로 실행되도록 하는 언어 행렬을 사용합니다. “CodeQL 초기화” 단계에서 직접 분석하려는 언어를 지정한 경우 각 언어에 대한 분석이 순차적으로 수행됩니다. 여러 언어의 분석 속도를 향상하려면 행렬을 사용하도록 워크플로를 수정합니다. 자세한 내용은 위에 있는 “[컴파일된 언어에 대한 자동 빌드 실패](#automatic-build-for-a-compiled-language-fails)”의 워크플로 추출을 참조하세요.

### 단일 워크플로에서 분석되는 코드의 양을 줄입니다.

분석 시간은 일반적으로 분석되는 코드의 양에 비례합니다. 예를 들어 테스트 코드를 제외하거나 분석을 한 번에 코드의 하위 집합만 분석하는 여러 워크플로로 분리하여 한 번에 분석되는 코드의 양을 줄이면 분석 시간을 줄일 수 있습니다.

{% data reusables.code-scanning.alerts-found-in-generated-code %}

위에서 설명한 대로 분석을 여러 워크플로로 분할하는 경우 리포지토리의 모든 코드를 분석하는 `schedule`에서 워크플로를 하나 이상 실행하는 것이 좋습니다. {% data variables.product.prodname_codeql %}은(는) 구성 요소 간의 데이터 흐름을 분석하므로 일부 복잡한 보안 동작은 전체 빌드에서만 검색될 수 있습니다.

### `schedule` 이벤트 중에만 실행

`push` 또는 `pull_request` 이벤트를 실행하는 동안 분석이 너무 느릴 경우에는 `schedule` 이벤트에서만 분석을 트리거해야 합니다. 자세한 내용은 “[이벤트](/actions/learn-github-actions/introduction-to-github-actions#events)”를 참조하세요.

### 워크플로가 실행되는 쿼리 도구 모음 확인

기본적으로 각 언어에 사용할 수 있는 세 가지 기본 쿼리 도구 모음이 있습니다. CodeQL 데이터베이스 빌드를 최적화했는데 처리 시간이 아직 너무 오래 걸리는 경우 실행하는 쿼리 수를 줄이면 됩니다. 기본 쿼리 도구 모음은 자동으로 실행됩니다. 가양성 결과의 비율이 가장 낮은 가장 빠른 보안 쿼리를 포함합니다.

기본 쿼리 외에도 추가 쿼리 또는 쿼리 그룹을 실행할 수 있습니다. 워크플로가 `queries` 요소를 사용하여 실행할 추가 쿼리 도구 모음 또는 추가 쿼리를 정의하는지 확인합니다. 추가 쿼리 도구 모음 또는 쿼리를 사용하지 않도록 설정하여 실험할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_code_scanning %} 구성](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)”을 참조하세요.

{% ifversion codeql-ml-queries %} {% note %}

**참고:** JavaScript용 `security-extended` 또는 `security-and-quality` 쿼리 도구 모음을 실행하는 경우 일부 쿼리는 실험적 기술을 사용합니다. 자세한 내용은 “[코드 검사 경고 정보](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)”를 참조하세요.
{% endnote %} {% endif %}

{% ifversion fpt or ghec %}

## 분석 플랫폼 간에 결과가 다름

Python으로 작성된 코드를 분석하는 경우 Linux, macOS 또는 Windows에서 {% data variables.code-scanning.codeql_workflow %}를 실행하는지 여부에 따라 다른 결과가 표시 될 수 있습니다.

Linux를 사용하는 GitHub 호스팅 실행기에서 {% data variables.code-scanning.codeql_workflow %}는 Python 종속성을 설치하고 분석하려고 시도하므로 더 많은 결과가 발생할 수 있습니다. 자동 설치를 사용하지 않도록 설정하려면 워크플로의 "CodeQL 초기화" 단계에 `setup-python-dependencies: false`를 추가합니다. Python 종속성 분석을 구성하는 방법에 대한 자세한 내용은 “[Python 종속성 분석”](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)을 참조하세요.

{% endif %}

## 오류: "서버 오류"

서버 오류로 인해 {% data variables.product.prodname_code_scanning %}에 대한 워크플로 실행이 실패하는 경우 워크플로를 다시 실행해 보세요. 문제가 지속되면 {% data variables.contact.contact_support %}에 문의하세요.

## 오류: "디스크 부족" 또는 "메모리 부족"

매우 큰 프로젝트의 경우 {% data variables.product.prodname_codeql %}은(는) 실행기의 디스크 또는 메모리가 부족할 수 있습니다.
{% ifversion fpt or ghec %}호스트된 {% data variables.product.prodname_actions %} 실행기에서 이 문제가 발생하는 경우 문제를 조사할 수 있도록 {% data variables.contact.contact_support %}에 문의하세요.
{% else %}이 문제가 발생하면 실행기에서 메모리를 늘려 보세요.{% endif %}

{% ifversion fpt or ghec %}

## 오류: 403 {% data variables.product.prodname_dependabot %}을(를) 사용할 때 “통합을 통해 리소스에 액세스할 수 없음”

{% data variables.product.prodname_dependabot %}은(는) 워크플로 실행을 트리거할 때 신뢰할 수 없는 것으로 간주되며 워크플로는 읽기 전용 범위로 실행됩니다. 분기에 대한 {% data variables.product.prodname_code_scanning %} 결과를 업로드하려면 일반적으로 `security_events: write` 범위가 필요합니다. 그러나 {% data variables.product.prodname_code_scanning %}을(를) 사용하면 `pull_request` 이벤트가 작업 실행을 트리거할 때 항상 결과를 업로드할 수 있습니다. 이 때문에 {% data variables.product.prodname_dependabot %} 분기의 경우 `pull_request` 이벤트 대신 `push` 이벤트를 사용하는 것이 좋습니다.

간단한 방법은 이 분기 집합에 대해 열린 끌어오기 요청뿐만 아니라 기본 분기 및 기타 중요한 장기 실행 분기에 대한 푸시에서 실행하는 것입니다.

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

다른 방법은 {% data variables.product.prodname_dependabot %} 분기를 제외한 모든 푸시에서 실행하는 것입니다.

```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

### 기본 분기에서도 분석에 실패하는 경우

기본 분기의 커밋에서 {% data variables.code-scanning.codeql_workflow %}가 여전히 실패하는 경우 다음을 확인해야 합니다.

- {% data variables.product.prodname_dependabot %}이(가) 커밋을 작성했는지 여부
- `@dependabot squash and merge`를 사용하여 커밋을 포함하는 끌어오기 요청이 병합되었는지 여부

이 유형의 병합 커밋은 {% data variables.product.prodname_dependabot %}에 의해 작성되므로 커밋에서 실행되는 모든 워크플로에는 읽기 전용 권한이 있습니다. 리포지토리에서 {% data variables.product.prodname_code_scanning %} 및 {% data variables.product.prodname_dependabot %} 보안 업데이트 또는 버전 업데이트를 사용하도록 설정한 경우 {% data variables.product.prodname_dependabot %} `@dependabot squash and merge` 명령을 사용하지 않는 것이 좋습니다. 대신 리포지토리에 자동 병합을 사용하도록 설정할 수 있습니다. 즉, 필요한 모든 검토가 충족되고 상태 검사에 통과하면 끌어오기 요청이 자동으로 병합됩니다. 자동 병합을 사용하도록 설정하는 방법에 대한 자세한 내용은 “[끌어오기 요청 자동 병합](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)”을 참조하세요.
{% endif %}

## 오류: “.ql 파일, .qls 파일, 디렉터리 또는 쿼리 팩 사양이 아닙니다.”

CodeQL이 워크플로에서 요청된 위치에서 명명된 쿼리, 쿼리 도구 모음 또는 쿼리 팩을 찾을 수 없는 경우 이 오류가 표시됩니다. 이 오류의 이유에는 일반적으로 다음 두 가지가 있습니다.

- 워크플로에 오타가 있습니다.
- 워크플로가 경로로 참조하는 리소스의 이름이 변경되었거나 삭제되었거나 새 위치로 이동되었습니다.

리소스의 위치를 확인한 후 워크플로를 업데이트하여 올바른 위치를 지정할 수 있습니다.

## 경고: "git checkout HEAD^2가 더 이상 필요하지 않음"

이전 {% data variables.product.prodname_codeql %} 워크플로를 사용하는 경우 “{% data variables.product.prodname_codeql %}” 작업의 출력에서 다음과 같은 경고가 나타날 수 있습니다.

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

{% data variables.product.prodname_codeql %} 워크플로에서 다음 줄을 제거하여 이 문제를 해결합니다. 이러한 줄은 {% data variables.product.prodname_codeql %} 워크플로의 초기 버전에서 `Analyze` 작업의 `steps` 섹션에 포함되어 있었습니다.

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

워크플로의 수정된 `steps` 섹션은 다음과 같습니다.

```yaml
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

{% data variables.product.prodname_codeql %} 워크플로 파일을 편집하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_code_scanning %} 구성](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)”을 참조하세요.
