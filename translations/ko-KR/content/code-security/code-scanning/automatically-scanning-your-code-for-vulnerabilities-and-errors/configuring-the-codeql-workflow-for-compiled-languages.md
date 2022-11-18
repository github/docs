---
title: 컴파일된 언어에 대한 CodeQL 워크플로 구성
shortTitle: Configure compiled languages
intro: '{% data variables.product.prodname_dotcom %}에서 {% data variables.code-scanning.codeql_workflow %}를 사용하여 컴파일된 언어로 작성된 코드를 검사하여 취약성 및 오류를 검사하는 방법을 구성할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
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
  - Repositories
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 91983e79a6381b4a38cbb1de4f6d7f228637b192
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161201'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## {% data variables.code-scanning.codeql_workflow %} 및 컴파일된 언어 정보

{% data variables.product.prodname_dotcom %}를 설정하여 리포지토리에 {% data variables.product.prodname_actions %} 워크플로를 추가함으로써 리포지토리에 대한 {% data variables.product.prodname_code_scanning %}를 실행합니다. {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}의 경우 {% data variables.code-scanning.codeql_workflow %}를 추가합니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 설정](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”을 참조하세요.

{% data reusables.code-scanning.edit-workflow %} {% data variables.product.prodname_code_scanning %}를 구성하고 워크플로 파일을 편집하는 방법에 대한 일반적인 내용은 "[{% data variables.product.prodname_code_scanning %} 구성](/code-security/secure-coding/configuring-code-scanning)" 및 "[{% data variables.product.prodname_actions %} 학습](/actions/learn-github-actions)"을 참조하세요.

##  {% data variables.product.prodname_codeql %}에 대한 자동 빌드 정보

{% data variables.product.prodname_code_scanning_capc %}은(는) 하나 이상의 데이터베이스에 대해 쿼리를 실행하여 작동합니다. 각 데이터베이스에는 리포지토리에 있는 단일 언어로 된 모든 코드의 표현이 포함됩니다.   
컴파일된 언어 C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} 및 Java의 경우 이 데이터베이스를 채우는 프로세스에는 코드 빌드 및 데이터 추출이 포함됩니다. {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

워크플로에서 `language` 행렬을 사용하는 경우 `autobuild`는 행렬에 나열된 컴파일된 각 언어를 빌드하려고 합니다. 행렬을 사용하지 않는 경우 `autobuild`는 리포지토리에서 가장 많은 원본 파일이 있는 지원되는 컴파일 언어를 빌드하려고 합니다. Go를 제외하고 명시적 빌드 명령을 제공하지 않는 한, 리포지토리에서 컴파일된 다른 언어의 분석은 실패합니다.

{% note %}

{% ifversion ghae %} **참고**: {% data reusables.actions.self-hosted-runners-software %} {% else %} **참고**: {% data variables.product.prodname_actions %}에 대해 자체 호스팅 실행기를 사용하는 경우 `autobuild` 프로세스를 사용하기 위해 추가 소프트웨어를 설치해야 할 수 있습니다. 또한 리포지토리에 특정 버전의 빌드 도구가 필요한 경우 수동으로 설치해야 할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 호스팅 실행기 사양](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”을 참조하세요.
{% endif %}

{% endnote %}

### C/C++

| 지원되는 시스템 유형 | 시스템 이름 |
|----|----|
| 운영 체제 | Windows, macOS 및 Linux |
| 빌드 시스템 | Windows: MSbuild 및 빌드 스크립트<br/>Linux 및 macOS: Autoconf, Make, CMake, qmake, Meson, Waf, SCons, Linux Kbuild 및 빌드 스크립트 |

`autobuild` 단계의 동작은 추출이 실행되는 운영 체제에 따라 달라집니다. Windows에서 `autobuild` 단계는 다음 방법을 사용하여 C/C++에 적합한 빌드 메서드를 자동 검색하려고 시도합니다.

1. 루트에 가장 가까운 솔루션(`.sln`) 또는 프로젝트(`.vcxproj`) 파일에 대해 `MSBuild.exe`를 호출합니다.
`autobuild`는 최상위 디렉터리에서 동일한(가장 짧은) 깊이에 있는 여러 솔루션 또는 프로젝트 파일을 검색하면 모두 빌드하려고 합니다.
2. 빌드 스크립트처럼 보이는 스크립트(_build.bat_, _build.cmd_ 및 _build.exe_)를 해당 순서대로 호출합니다.

Linux 및 macOS에서 `autobuild` 단계는 리포지토리에 있는 파일을 검토하여 사용되는 빌드 시스템을 확인합니다.

1. 루트 디렉터리에서 빌드 시스템을 찾습니다.
2. 찾을 수 없는 경우 C/C++용 빌드 시스템이 있는 고유한 디렉터리를 하위 디렉터리에서 검색합니다.
3. 적절한 명령을 실행하여 시스템을 구성합니다. 

### C#

| 지원되는 시스템 유형 | 시스템 이름 |
|----|----|
| 운영 체제 | Windows 및 Linux |
| 빌드 시스템 | .NET 및 MSbuild, 빌드 스크립트 |

`autobuild` 프로세스는 다음 방법을 사용하여 C#에 적합한 빌드 메서드를 자동 검색하려고 시도합니다.

1. 루트에 가장 가까운 솔루션(`.sln`) 또는 프로젝트(`.csproj`) 파일에 대해 `dotnet build`를 호출합니다.
2. 루트에 가장 가까운 솔루션 또는 프로젝트 파일에 대해 `MSbuild`(Linux) 또는 `MSBuild.exe`(Windows)를 호출합니다.
`autobuild`는 최상위 디렉터리에서 동일한(가장 짧은) 깊이에 있는 여러 솔루션 또는 프로젝트 파일을 검색하면 모두 빌드하려고 합니다.
3. 빌드 스크립트처럼 보이는 스크립트(_build_ 및 _build.sh_(Linux) 또는 _build.bat_, _build.cmd_ 및 _build.exe_(Windows))를 해당 순서대로 호출합니다.

{% ifversion codeql-go-autobuild %}

### Go

| 지원되는 시스템 유형 | 시스템 이름 |
|----|----|
| 운영 체제 | Windows, macOS 및 Linux |
| 빌드 시스템 | Go 모듈 `dep` 및 글라이드뿐만 아니라 메이크파일 및 닌자 스크립트를 포함한 빌드 스크립트 |

프로세스는 `autobuild` 모든 `.go` 파일을 추출하기 전에 Go 리포지토리에 필요한 종속성을 설치하는 적절한 방법을 자동으로 검색하려고 시도합니다.

1. `make`이러한 명령 중 하나가 성공하고 후속 `go list ./...` 명령도 성공할 때까지 , `ninja``./build` 또는 `./build.sh` 를 호출하여 필요한 종속성이 설치되었음을 나타냅니다.
2. 이러한 명령 중 어느 것도 성공하지 못한 경우 , 또는 `glide.yaml`를 `Gopkg.toml` 찾아 `go.mod`실행 `go get` 하거나(공급업체가 사용되지 않는 한) `dep ensure -v` `glide install` 각각 종속성을 설치하려고 시도합니다.
3. 마지막으로 이러한 종속성 관리자에 대한 구성 파일을 찾을 수 없는 경우 에 추가 `GOPATH`하기에 적합한 리포지토리 디렉터리 구조를 다시 정렬하고 를 사용하여 `go get` 종속성을 설치합니다. 디렉터리 구조는 추출이 완료된 후 정상으로 되돌아갑니다.
4. 를 실행하는 `go build ./...`것과 유사하게 리포지토리의 모든 Go 코드를 추출합니다.

{% endif %}

### Java

| 지원되는 시스템 유형 | 시스템 이름 |
|----|----|
| 운영 체제 | Windows, macOS 및 Linux(제한 없음) |
| 빌드 시스템 | Gradle, Maven 및 Ant |

`autobuild` 프로세스는 다음 전략을 적용하여 Java 코드베이스에 대한 빌드 시스템을 확인하려고 합니다.

1. 루트 디렉터리에서 빌드 파일을 검색합니다. Gradle, Maven 및 Ant 빌드 파일을 순서대로 확인합니다.
2. 찾은 첫 번째 빌드 파일을 실행합니다. Gradle 및 Maven 파일이 모두 있는 경우 Gradle 파일이 사용됩니다.
3. 그렇지 않으면 루트 디렉터리의 직접 하위 디렉터리에서 빌드 파일을 검색합니다. 하나의 하위 디렉터리에 빌드 파일이 포함되어 있는 경우 해당 하위 디렉터리에서 식별된 첫 번째 파일을 실행합니다(1의 경우와 동일한 기본 설정 사용). 둘 이상의 하위 디렉터리에 빌드 파일이 포함된 경우 오류를 보고합니다.

## 컴파일 언어의 빌드 단계 추가

{% data reusables.code-scanning.autobuild-add-build-steps %} 워크플로 파일을 편집하는 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_code_scanning %} 구성](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)"을 참조하세요.

`autobuild` 단계를 제거한 후 `run` 단계의 주석 처리를 제거하고 리포지토리에 적합한 빌드 명령을 추가합니다. 워크플로 `run` 단계에서는 운영 체제의 셸을 사용하여 명령줄 프로그램을 실행합니다. 이러한 명령을 수정하고 더 많은 명령을 추가하여 빌드 프로세스를 사용자 지정할 수 있습니다.

``` yaml
- run: |
    make bootstrap
    make release
```

`run` 키워드에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”을 참조하세요.

리포지토리에 여러 컴파일 언어가 포함된 경우 언어별 빌드 명령을 지정할 수 있습니다. 예를 들어, 리포지토리에 C/C++, C# 및 Java가 포함되어 있고 `autobuild`가 C/C++ 및 C#을 올바르게 빌드하지만 Java를 빌드하지 못하는 경우 `init` 단계 후 워크플로에서 다음 구성을 사용할 수 있습니다. 이렇게 C/C++ 및 C#에 `autobuild`를 계속 사용하는 동안 Java에 대한 빌드 단계가 지정됩니다.

```yaml
- if: matrix.language == 'cpp' || matrix.language == 'csharp' 
  name: Autobuild
  uses: {% data reusables.actions.action-codeql-action-autobuild %}

- if: matrix.language == 'java' 
  name: Build Java
  run: |
    make bootstrap
    make release
```

`if` 조건에 대한 자세한 내용은 “[GitHub Actions에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif)”을 참조하세요.

`autobuild`가 코드를 빌드하지 않는 이유에 대한 자세한 팁과 요령은 "[{% data variables.product.prodname_codeql %} 워크플로 문제 해결](/code-security/secure-coding/troubleshooting-the-codeql-workflow)"을 참조하세요.

컴파일된 언어에 대한 수동 빌드 단계를 추가했으나 {% data variables.product.prodname_code_scanning %}가 리포지토리에서 아직 작동하지 않는 경우 {% data variables.contact.contact_support %}에 문의하세요.
