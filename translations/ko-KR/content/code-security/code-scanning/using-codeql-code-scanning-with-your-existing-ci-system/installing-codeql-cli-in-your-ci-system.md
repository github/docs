---
title: CI 시스템에 CodeQL CLI 설치
shortTitle: Install CodeQL CLI
intro: '{% data variables.product.prodname_codeql_cli %}를 설치하고 이를 사용하여 타사 연속 통합 시스템에서 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}을 수행할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
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
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system
ms.openlocfilehash: e84921073dfcf791cedcebf9cd8b512b534f6e06
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098147'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_code_scanning %}에 대한 {% data variables.product.prodname_codeql_cli %} 사용 정보

{% data variables.product.prodname_codeql_cli %}는 타사 CI(연속 통합) 시스템에서 처리 중인 코드에서 {% data variables.product.prodname_code_scanning %}을 실행하는 데 사용할 수 있는 도구입니다. {% data reusables.code-scanning.about-code-scanning %} 자세한 내용은 “[{% data variables.product.prodname_codeql %}이 포함된 {% data variables.product.prodname_code_scanning %} 정보](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)”를 참조하세요. {% data variables.product.prodname_codeql %} 분석을 실행하기 위한 권장 사양(RAM, CPU 코어 및 디스크)에 대해서는 “[{% data variables.product.prodname_codeql %} 실행을 위한 권장 하드웨어 리소스](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql)”를 참조하세요.

{% data reusables.code-scanning.what-is-codeql-cli %}

또는 {% data variables.product.prodname_actions %}를 사용하여 {% data variables.product.product_name %} 내에서 {% data variables.product.prodname_code_scanning %}을 실행할 수 있습니다. 자세한 내용은 작업을 사용한 {% data variables.product.prodname_code_scanning %}에 관한 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 설정](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”을 참조하세요. CI 시스템에 대한 옵션 개요는 “[CI 시스템의 CodeQL {% data variables.product.prodname_code_scanning %} 정보](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)”를 참조하세요.

{% data reusables.code-scanning.licensing-note %}

## {% data variables.product.prodname_codeql_cli %} 다운로드

https://github.com/github/codeql-action/releases 에서 {% data variables.product.prodname_codeql %} 번들을 다운로드해야 합니다. 번들에는 다음이 포함됩니다.

- {% data variables.product.prodname_codeql_cli %} 제품
- https://github.com/github/codeql에서 호환되는 쿼리 및 라이브러리 버전
- 번들에 포함되는 모든 쿼리의 사전 컴파일 버전

{% ifversion ghes or ghae %}

{% note %} {% data variables.product.product_name %}{% ifversion ghes %} {{ allVersions[currentVersion].currentRelease }}{% endif %}의 경우 {% data variables.product.prodname_codeql_cli %} 버전 {% data variables.product.codeql_cli_ghes_recommended_version %}을(를) 권장합니다.
{% endnote %}

{% endif %}

항상 {% data variables.product.prodname_codeql %} 번들을 사용해야 합니다. 이 번들은 호환성을 보장하고 {% data variables.product.prodname_codeql_cli %} 쿼리를 별도로 다운로드하고 {% data variables.product.prodname_codeql %} 쿼리를 체크 아웃하는 것보다 훨씬 나은 성능을 제공합니다. 하나의 특정 플랫폼에서만 CLI를 실행하는 경우 적절한 `codeql-bundle-PLATFORM.tar.gz` 파일을 다운로드합니다. 또는 지원되는 모든 플랫폼에 해당하는 CLI가 포함된 `codeql-bundle.tar.gz`를 다운로드할 수 있습니다.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

## CI 시스템에서 {% data variables.product.prodname_codeql_cli %} 설정

CodeQL {% data variables.product.prodname_code_scanning %} 분석을 실행하려는 모든 CI 서버에서 {% data variables.product.prodname_codeql_cli %} 번들의 전체 콘텐츠를 사용할 수 있도록 해야 합니다. 예를 들어 중앙 내부 위치에서 번들을 복사하고 추출하도록 각 서버를 구성할 수 있습니다. 또는 REST API를 사용하여 {% data variables.product.prodname_dotcom %}에서 직접 번들을 가져와 쿼리에 대한 최신 개선 사항을 활용할 수 있습니다. {% data variables.product.prodname_codeql_cli %}에 대한 업데이트는 2~3주마다 릴리스됩니다. 예를 들면 다음과 같습니다.

```shell
$ wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ./codeql-bundle-linux64.tar.gz
```

{% data variables.product.prodname_codeql_cli %} 번들을 추출한 후 서버에서 `codeql` 실행 파일을 실행할 수 있습니다.

- `/<extraction-root>/codeql/codeql`을 실행합니다. 여기서 `<extraction-root>`는 {% data variables.product.prodname_codeql_cli %} 번들을 추출한 폴더입니다.
- `codeql`처럼 실행 파일을 실행할 수 있도록 `PATH`에 `/<extraction-root>/codeql`를 추가합니다.

{% ifversion fpt 또는 ghec 또는 ghes > 3.7 또는 ghae > 3.7 %} {% note %}

{% 데이터 variables.product.prodname_codeql_cli %}을(를) 사용하여 Python으로 작성된 코드를 분석하는 경우 CI 시스템에 Python 3이 설치되어 있는지 확인해야 합니다.

{% endnote %} {% endif %}

## {% data variables.product.prodname_codeql_cli %} 설정을 테스트합니다.

{% data variables.product.prodname_codeql_cli %} 번들을 추출한 후 다음 명령을 실행하여 CLI가 데이터베이스를 만들고 분석하도록 올바르게 설정되어 있는지 확인할 수 있습니다.

- `/<extraction-root>/codeql`이 `PATH`에 있는 경우 `codeql resolve qlpacks`입니다.
- 그렇지 않으면 `/<extraction-root>/codeql/codeql resolve qlpacks`입니다.

**성공적인 출력에서 추출은 다음과 같습니다.**
```
codeql/cpp-all (/<extraction-root>/qlpacks/codeql/cpp-all/<version>)
codeql/cpp-examples (/<extraction-root>/qlpacks/codeql/cpp-examples/<version>)
codeql/cpp-queries (/<extraction-root>/qlpacks/codeql/cpp-queries/<version>)
codeql/csharp-all (/<extraction-root>/qlpacks/codeql/charp-all/<version>)
codeql/csharp-examples (/<extraction-root>/qlpacks/codeql/charp-examples/<version>)
codeql/csharp-queries (/<extraction-root>/qlpacks/codeql/charp-queries/<version>)
codeql/java-all (/<extraction-root>/qlpacks/codeql/java-all/<version>)
codeql/java-examples (/<extraction-root>/qlpacks/codeql/java-examples/<version>)
codeql/java-queries (/<extraction-root>/qlpacks/codeql/java-queries/<version>)
codeql/javascript-all (/<extraction-root>/qlpacks/codeql/javascript-all/<version>)
codeql/javascript-examples (/<extraction-root>/qlpacks/codeql/javascript-examples/<version>)
codeql/javascript-queries (/<extraction-root>/qlpacks/codeql/javascript-queries/<version>)
codeql/python-all (/<extraction-root>/qlpacks/codeql/python-all/<version>)
codeql/python-examples (/<extraction-root>/qlpacks/codeql/python-examples/<version>)
codeql/python-queries (/<extraction-root>/qlpacks/codeql/python-queries/<version>)
codeql/ruby-all (/<extraction-root>/qlpacks/codeql/ruby-all/<version>)
codeql/ruby-examples (/<extraction-root>/qlpacks/codeql/ruby-examples/<version>)
codeql/ruby-queries (/<extraction-root>/qlpacks/codeql/ruby-queries/<version>)
...
```

출력에 예상된 언어가 포함되어 있고 qlpack 파일의 디렉터리 위치가 올바른지 확인해야 합니다. `github/codeql`의 체크 아웃을 사용하지 않는 한, 위치는 위에서 `<extraction root>`로 표시된 추출된 {% data variables.product.prodname_codeql_cli %} 번들 내에 있어야 합니다. {% data variables.product.prodname_codeql_cli %}에서 예상 언어에 대한 qlpack을 찾을 수 없는 경우 {% data variables.product.prodname_codeql %} 번들을 다운로드했는지 확인하고 {% data variables.product.prodname_codeql_cli %}의 독립 실행형 복사본이 아닌지 확인합니다.

## {% data variables.product.product_name %}을 사용한 인증용 토큰 생성

각 CI 서버에는 {% 데이터 variables.product.prodname_codeql_cli %}에 결과를 업로드하는 데 사용할 {% 데이터 variables.product.prodname_github_app %} 또는 {% 데이터 variables.product.product_name variables.product.pat_generic %}이(가) 필요합니다. 액세스 토큰 또는 `security_events` 쓰기 권한이 있는 {% data variables.product.prodname_github_app %}을 사용해야 합니다. CI 서버가 이미 이 범위의 토큰을 사용하여 {% data variables.product.product_name %}의 리포지토리를 체크 아웃하는 경우 잠재적으로 {% data variables.product.prodname_codeql_cli %}에서 동일한 토큰을 사용하도록 허용할 수 있습니다. 그렇지 않으면 `security_events` 쓰기 권한이 있는 새 토큰을 만들고 이를 CI 시스템의 비밀 저장소에 추가해야 합니다. 자세한 내용은 "[{% 데이터 variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" 및 "%}을(를) [variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.

## 다음 단계

이제 {% data variables.product.prodname_codeql %} 분석을 실행하고, 결과를 생성하고, 결과가 분기 또는 끌어오기 요청과 일치하고 {% data variables.product.prodname_code_scanning %} 경고로 표시되는 {% data variables.product.product_name %}에 업로드하도록 CI 시스템을 구성할 준비가 되었습니다. 자세한 내용은 “[CI 시스템에서 {% data variables.product.prodname_codeql_cli %} 구성](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)”을 참조하세요.
