---
title: CI 시스템에서 CodeQL 실행기 실행
shortTitle: Run CodeQL runner
intro: '{% data variables.code-scanning.codeql_runner %}를 사용하여 타사 연속 통합 시스템에서 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}를 수행할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system
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
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
ms.openlocfilehash: 7e60376ed165a3af2da7f000c37d326cb33ade99
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161096'
---
<!--UI-LINK: When GitHub Enterprise Server <=3.0 doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% ifversion codeql-runner-supported %}

{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.code-scanning.codeql_runner %} 정보

{% data variables.code-scanning.codeql_runner %}는 타사 CI(연속 통합) 시스템에서 처리하는 코드에서 {% data variables.product.prodname_code_scanning %}를 실행하는 데 사용할 수 있는 도구입니다. {% data reusables.code-scanning.about-code-scanning %} 자세한 내용은 "[{% data variables.product.prodname_codeql %}이 포함된 {% data variables.product.prodname_code_scanning %} 정보](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)"를 참조하세요.

대부분의 경우 CI 시스템에서 직접 {% data variables.product.prodname_codeql_cli %}를 사용하여 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}를 쉽게 설정할 수 있습니다. 

또는 {% data variables.product.prodname_actions %}를 사용하여 {% data variables.product.product_name %}에서 {% data variables.product.prodname_code_scanning %}를 실행할 수 있습니다. 자세한 내용은 “[리포지토리에 대해 {% data variables.product.prodname_code_scanning %} 설정](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”을 참조하세요.

{% data variables.code-scanning.codeql_runner %}는 {% data variables.product.prodname_dotcom %} 리포지토리의 체크 아웃에서 {% data variables.product.prodname_codeql %} 분석을 실행하는 명령줄 도구입니다. 타사 시스템에 실행기를 추가한 다음, 실행기를 호출하여 코드를 분석하고 결과를 {% data variables.product.product_name %}에 업로드합니다. 이러한 결과는 리포지토리에 {% data variables.product.prodname_code_scanning %} 경고로 표시됩니다.

{% note %}

**참고:** {% ifversion fpt or ghec %}
* {% data variables.code-scanning.codeql_runner %}는 {% data variables.product.prodname_codeql %} CLI를 사용하여 코드를 분석하므로 라이선스 조건이 동일합니다. {% data variables.product.prodname_dotcom_the_website %}에서 유지 관리되는 퍼블릭 리포지토리에서 무료로 사용할 수 있으며 {% data variables.product.prodname_advanced_security %} 라이선스가 있는 고객이 소유한 프라이빗 리포지토리에서 사용할 수 있습니다. 자세한 내용은 "[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} 사용 약관](https://securitylab.github.com/tools/codeql/license)" 및 "[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)"를 참조하세요.
{% else %}
* {% data variables.code-scanning.codeql_runner %}는 {% data variables.product.prodname_advanced_security %} 라이선스가 있는 고객에게 제공됩니다.
{% endif %} {% ifversion ghae %}
* {% data variables.code-scanning.codeql_runner %}는 {% data variables.product.prodname_codeql %} CLI와 혼동해서는 안 됩니다. {% data variables.product.prodname_codeql %} CLI는 보안 조사를 위해 {% data variables.product.prodname_codeql %} 데이터베이스를 만들고 {% data variables.product.prodname_codeql %} 쿼리를 실행할 수 있는 명령줄 인터페이스입니다.
자세한 내용은 "[{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/)"를 참조하세요.
{% endif %} {% endnote %}

## {% data variables.code-scanning.codeql_runner %} 다운로드

{% data variables.code-scanning.codeql_runner %}는 https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action/releases에서 다운로드할 수 있습니다. 일부 운영 체제에서는 이를 실행하려면 다운로드한 파일에 대한 사용 권한을 변경해야 할 수 있습니다.

Linux에서:

```shell
chmod +x codeql-runner-linux
```

macOS에서:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

Windows에서 `codeql-runner-win.exe` 파일은 일반적으로 사용 권한을 변경할 필요가 없습니다.

## CI 시스템에 {% data variables.code-scanning.codeql_runner %} 추가

{% data variables.code-scanning.codeql_runner %}를 다운로드하고 실행될 수 있는지 확인하면 {% data variables.product.prodname_code_scanning %}에 사용하려는 각 CI 서버에서 실행기를 사용할 수 있도록 해야 합니다. 예를 들어 중앙 내부 위치에서 실행기를 복사하도록 각 서버를 구성할 수 있습니다. 또는 REST API를 사용하여 {% data variables.product.prodname_dotcom %}에서 직접 실행기를 가져올 수 있습니다. 예를 들면 다음과 같습니다. 

```shell
wget https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

이 외에도 각 CI 서버에는 다음이 필요합니다.

- 사용할 {% data variables.code-scanning.codeql_runner %}에 대한 {% data variables.product.prodname_github_app %} 또는 {% data variables.product.pat_generic %} `repo` 범위에서 액세스 토큰을 사용하거나 `security_events` 쓰기 권한과 `metadata` 및 `contents` 읽기 권한으로 {% data variables.product.prodname_github_app %}을 사용해야 합니다. 자세한 내용은 "[{% data variables.product.prodname_github_apps %} 빌드](/developers/apps/building-github-apps)" 및 "[{% data variables.product.pat_generic %} 만들기"를 참조하세요](/github/authenticating-to-github/creating-a-personal-access-token).
- {% data variables.code-scanning.codeql_runner %}의 이 릴리스와 연결된 {% data variables.product.prodname_codeql %} 번들에 액세스합니다. 이 패키지에는 {% data variables.product.prodname_codeql %} 분석에 필요한 쿼리 및 라이브러리와 실행기에서 내부적으로 사용되는 {% data variables.product.prodname_codeql %} CLI가 포함되어 있습니다. 자세한 내용은 "[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)"를 참조하세요.

{% data variables.product.prodname_codeql %} 번들에 대한 액세스를 제공하는 옵션은 다음과 같습니다.

1. {% data variables.code-scanning.codeql_runner %}에서 번들을 자동으로 다운로드할 수 있도록 CI 서버가 https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action에 액세스할 수 있도록 허용합니다.
1. 번들을 수동으로 다운로드/추출하고, 다른 중앙 리소스와 함께 저장하고, 플래그를 사용하여 <nobr>`--codeql-path`</nobr> 호출에서 번들의 위치를 지정하여 {% data variables.code-scanning.codeql_runner %}를 초기화합니다.

## {% data variables.code-scanning.codeql_runner %} 호출

분석하려는 리포지토리의 체크 아웃 위치에서 {% data variables.code-scanning.codeql_runner %}를 호출해야 합니다. 두 가지 주요 명령은 다음과 같습니다.

1. `init`는 실행기를 초기화하고 분석할 각 언어에 대한 {% data variables.product.prodname_codeql %} 데이터베이스를 만드는 데 필요합니다. 이러한 데이터베이스는 후속 명령에 의해 채워지고 분석됩니다.
1. `analyze`는 {% data variables.product.prodname_codeql %} 데이터베이스를 입력하고, 분석하고, 결과를 {% data variables.product.product_name %}에 업로드하는 데 필요합니다.

두 명령 모두 인증에 사용할 {% data variables.product.product_name %}, 리포지토리 *OWNER/NAME* 및 {% data variables.product.prodname_github_apps %} 또는 {% data variables.product.pat_generic %}의 URL을 지정해야 합니다. 또한 CI 서버가 `github/codeql-action` 리포지토리에서 직접 다운로드할 수 있는 액세스 권한이 없는 한, CodeQL 번들의 위치도 지정해야 합니다.

{% data variables.code-scanning.codeql_runner %}에서 플래그를 사용하여 서버에 대한 향후 분석을 위해 CodeQL 번들을 저장하는 위치와 를 사용하여 <nobr>`--tools-dir`</nobr> <nobr>`--temp-dir`</nobr>분석하는 동안 임시 파일을 저장하는 위치를 구성할 수 있습니다.

실행기의 명령줄 참조를 보려면 `-h` 플래그를 사용합니다. 예를 들어 모든 명령을 나열하려면 `codeql-runner-OS -h`를 사용하고, `init` 명령에 사용할 수 있는 모든 플래그를 나열하려면 `codeql-runner-OS init -h`를 실행합니다(여기서 `OS`는 사용 중인 실행 파일에 따라 다름). 자세한 내용은 “[CI 시스템에서 {% data variables.product.prodname_code_scanning %} 구성](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system#codeql-runner-command-reference)”을 참조하세요.

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### 기본 예제

이 예제에서는 `{% data variables.command_line.git_url_example %}`에서 호스트되는 `octo-org/example-repo` 리포지토리에 대한 Linux CI 서버에서 {% data variables.product.prodname_codeql %} 분석을 실행합니다. 리포지토리에는 빌드하지 않고 {% data variables.product.prodname_codeql %}에서 직접 분석할 수 있는 언어(즉, Go, JavaScript, Python 및 TypeScript)만 포함되어 있으므로 이 프로세스는 매우 간단합니다.

이 예제에서는 서버에 `github/codeql-action` 리포지토리에서 직접 {% data variables.product.prodname_codeql %} 번들을 다운로드하기 위한 액세스 권한이 있으므로 `--codeql-path` 플래그를 사용할 필요가 없습니다.

1. 분석할 리포지토리를 체크 아웃합니다.
1. 리포지토리가 체크 아웃된 디렉터리로 이동합니다.
1. {% data variables.code-scanning.codeql_runner %}를 초기화하고 검색된 언어에 대한 {% data variables.product.prodname_codeql %} 데이터베이스를 만듭니다.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

{% data reusables.code-scanning.codeql-runner-analyze-example %}

### 컴파일된 언어 예제

이 예제는 이전 예제와 유사합니다. 그러나 이번에는 리포지토리에 C/C++, C# 또는 Java 코드가 있습니다. 이러한 언어에 대한 {% data variables.product.prodname_codeql %} 데이터베이스를 만들려면 CLI에서 빌드를 모니터링해야 합니다. 초기화 프로세스가 끝나면 실행기는 코드를 빌드하기 전에 환경을 설정하는 데 필요한 명령을 보고합니다. 일반 CI 빌드 프로세스를 호출한 다음, `analyze` 명령을 실행하기 전에 이 명령을 실행해야 합니다.

1. 분석할 리포지토리를 체크 아웃합니다.
1. 리포지토리가 체크 아웃된 디렉터리로 이동합니다.
1. {% data variables.code-scanning.codeql_runner %}를 초기화하고 검색된 언어에 대한 {% data variables.product.prodname_codeql %} 데이터베이스를 만듭니다.
    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so that CodeQL can monitor the build, for example by running 
      ". /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
    ```
1. `init` 작업에서 생성된 스크립트를 소싱하여 빌드를 모니터링할 환경을 설정합니다. 다음 코드 조각에서 선행 점과 공백을 확인합니다.

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. 코드를 빌드합니다. macOS에서 빌드 명령에 환경 변수 `$CODEQL_RUNNER`를 접두사로 추가해야 합니다. 자세한 내용은 "[CI 시스템에서 {% data variables.code-scanning.codeql_runner %} 문제 해결"을 참조하세요](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system#no-code-found-during-the-build).

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**참고:** 컨테이너화된 빌드를 사용하는 경우 빌드 작업이 수행되는 컨테이너에서 {% data variables.code-scanning.codeql_runner %}를 실행해야 합니다.

{% endnote %}

## 추가 참고 자료

- "[CI 시스템에서 {% data variables.code-scanning.codeql_runner %} 구성](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)"
- "[CI 시스템에서 {% data variables.code-scanning.codeql_runner %} 문제 해결](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system)"

{% else %}

## {% data variables.code-scanning.codeql_runner %} 정보

{% data variables.code-scanning.codeql_runner %}는 더 이상 사용되지 않습니다. [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-cli-binaries/releases) 버전 2.7.6에는 완전한 기능 패리티가 있습니다.

{% data variables.product.prodname_codeql_cli %}로 마이그레이션에 대한 자세한 내용은 “[CodeQL 실행기에서 CodeQL CLI로 마이그레이션](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)”을 참조하세요.

## 추가 참고 자료

- GitHub 블로그의 [CodeQL 실행기 사용 중단](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/)

{% endif %}
