---
title: CI 시스템에서 CodeQL CLI 구성
shortTitle: Configure CodeQL CLI
intro: '{% data variables.product.prodname_codeql_cli %}를 실행하고, {% data variables.product.prodname_codeql %} 분석을 수행하고, {% data variables.product.product_name %}에 결과를 업로드하여 {% data variables.product.prodname_code_scanning %} 경고로 표시하도록 연속 통합 시스템을 구성할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system
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
ms.openlocfilehash: 165aee9852cb6863dceddb41daf6d05176191f7a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182300'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% ifversion ghes or ghae %} {% note %}

**참고:** 이 문서에서는 {% data variables.product.product_name %} 릴리스 시점에 사용할 수 있는 {% data variables.product.prodname_codeql_cli %} 버전의 기능에 대해 설명합니다. 기업에서 이후에 출시된 {% data variables.product.prodname_codeql_cli %} 버전을 사용하는 경우 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)를 대신 참조하세요.

{% endnote %} {% endif %}

## {% data variables.product.prodname_codeql_cli %}를 사용한 코드 검사 결과 생성에 대한 정보

{% data variables.product.prodname_codeql_cli %}를 CI 시스템의 서버에서 사용할 수 있게 만들고 {% data variables.product.product_name %}으로 인증할 수 있게 만들었으면 데이터를 생성할 준비가 된 것입니다.

다음 세 가지 명령을 사용하여 결과를 생성하고 {% data variables.product.product_name %}에 업로드합니다.

<!--Option to analyze multiple languages with one call-->
1. `database create` - 리포지토리에서 지원되는 각 프로그래밍 언어의 계층 구조를 나타내는 {% data variables.product.prodname_codeql %} 데이터베이스를 만듭니다.
2. ` database analyze` - 각 {% data variables.product.prodname_codeql %} 데이터베이스를 분석하고 그 결과를 SARIF 파일로 요약하는 쿼리를 실행합니다.
3. `github upload-results` - 결과가 분기 또는 끌어오기 요청과 일치하고 {% data variables.product.prodname_code_scanning %} 경고로 표시되는 {% data variables.product.product_name %}에 결과 SARIF 파일을 업로드합니다.

<nobr>`--help`</nobr> 옵션을 사용하여 명령에 대한 명령줄 도움말을 표시할 수 있습니다.

{% data reusables.code-scanning.upload-sarif-ghas %}

## 분석할 {% data variables.product.prodname_codeql %} 데이터베이스 만들기

1. 분석하려는 코드를 체크 아웃합니다. 
    - 분기의 경우 분석하려는 분기의 헤드를 체크 아웃합니다.
    - 끌어오기 요청의 경우 끌어오기 요청의 헤드 커밋을 체크 아웃하거나, 끌어오기 요청의 {% data variables.product.prodname_dotcom %} 생성 병합 커밋을 체크 아웃합니다.
2. 모든 종속성을 사용할 수 있도록 코드베이스에 대한 환경을 설정합니다. 자세한 내용은 {% data variables.product.prodname_codeql_cli %}에 대한 설명서에서 [컴파일되지 않은 언어에 대한 데이터베이스 만들기](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) 및 [컴파일된 언어에 대한 데이터베이스 만들기](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages)를 참조하세요.
3. 코드베이스에 대한 빌드 명령(있는 경우)을 찾습니다. 일반적으로 이 명령은 CI 시스템의 구성 파일에서 사용할 수 있습니다.
4. 리포지토리의 체크 아웃 루트에서 `codeql database create` 명령을 실행하고 코드베이스를 빌드합니다.

  ```shell
  # Single supported language - create one CodeQL database
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;

  # Multiple supported languages - create one CodeQL database per language
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt;
  ```

  {% note %}

  **참고:** 컨테이너화된 빌드를 사용하는 경우 빌드 작업이 수행되는 컨테이너에서 {% data variables.product.prodname_codeql_cli %}를 실행해야 합니다.

  {% endnote %}

| 옵션 | 필수 | 사용량 |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | {% data variables.product.prodname_codeql %} 데이터베이스에 대해 만들 디렉터리의 이름과 위치를 지정합니다. 기존 디렉터리를 덮어쓰려고 하면 명령이 실패합니다. 또한 `--db-cluster`를 지정하는 경우 이는 부모 디렉터리이며 하위 디렉터리는 분석된 각 언어에 대해 만들어집니다.|
| <nobr>`--language`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 데이터베이스 `{% data reusables.code-scanning.codeql-languages-keywords %}` 를 만들 언어의 식별자를 지정합니다( TypeScript 코드 {% ifversion codeql-kotlin-beta %}를 분석하고 `java` Kotlin 코드{% endif %}를 분석하는 데 사용`javascript`). <nobr>`--db-cluster`</nobr>와 함께 사용할 경우 옵션은 쉼표로 구분된 목록을 허용하거나 두 번 이상 지정할 수 있습니다.
| <nobr>`--command`</nobr> | | 권장됩니다. 코드베이스에 대한 빌드 프로세스를 호출하는 빌드 명령 또는 스크립트를 지정하는 데 사용합니다. 명령은 현재 폴더에서 실행됩니다. 또는 정의된 경우 <nobr>`--source-root`</nobr>에서 실행됩니다. Python 및 JavaScript/TypeScript 분석에는 필요하지 않습니다. |
| <nobr>`--db-cluster`</nobr> | | 선택 사항입니다. 다국어 코드베이스에서 <nobr>`--language`</nobr>에 의해 지정된 각 언어에 대해 하나의 데이터베이스를 생성하는 데 사용합니다.
| <nobr>`--no-run-unnecessary-builds`</nobr> | | 권장됩니다. {% data variables.product.prodname_codeql_cli %}가 빌드를 모니터링할 필요가 없는 언어(예: Python 및 JavaScript/TypeScript)의 빌드 명령을 표시하지 않는 데 사용합니다.
| <nobr>`--source-root`</nobr> | | 선택 사항입니다. 리포지토리의 체크 아웃 루트 외부에서 CLI를 실행하는 경우 사용합니다. 기본적으로 `database create` 명령은 현재 디렉터리가 원본 파일의 루트 디렉터리라고 가정합니다. 이 옵션을 사용하여 다른 위치를 지정합니다. |
| <nobr>`--codescanning-config`</nobr> | | 선택 사항(고급). {% data variables.product.prodname_codeql %} 데이터베이스를 만드는 방법과 이후 단계에서 실행할 쿼리를 지정하는 구성 파일이 있는 경우 사용합니다. 자세한 내용은 “[사용자 지정 구성 파일 사용](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-a-custom-configuration-file)” 및 “[데이터베이스 만들기](https://codeql.github.com/docs/codeql-cli/manual/database-create/#cmdoption-codeql-database-create-codescanning-config)”를 참조하세요. |

자세한 내용은 {% data variables.product.prodname_codeql_cli %}에 대한 설명서에서 [{% data variables.product.prodname_codeql %} 데이터베이스 만들기](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)를 참조하세요.

### 단일 언어 예제

다음은 `/checkouts/example-repo`에서 체크 아웃된 리포지토리에 대한 {% data variables.product.prodname_codeql %} 데이터베이스를 만드는 예제입니다. JavaScript 추출기를 사용하여 리포지토리에 JavaScript 및 TypeScript 코드의 계층적 표현을 만듭니다. 결과 데이터베이스는 `/codeql-dbs/example-repo`에 저장됩니다.

```
$ codeql database create /codeql-dbs/example-repo --language=javascript \
    --source-root /checkouts/example-repo

> Initializing database at /codeql-dbs/example-repo.
> Running command [/codeql-home/codeql/javascript/tools/autobuild.cmd]
    in /checkouts/example-repo.
> [build-stdout] Single-threaded extraction.
> [build-stdout] Extracting
...
> Finalizing database at /codeql-dbs/example-repo.
> Successfully created database at /codeql-dbs/example-repo.
```

### 다중 언어 예제

다음은 `/checkouts/example-repo-multi`에서 체크 아웃된 리포지토리에 대한 {% data variables.product.prodname_codeql %} 데이터베이스 2개를 만드는 예제입니다. 이는 다음을 사용합니다.

- `--db-cluster` - 두 개 이상 언어의 분석을 요청합니다.
- `--language` - 데이터베이스를 만들 언어를 지정합니다.
- `--command` - 코드베이스에 대한 빌드 명령을 도구에 알립니다(여기서는 `make`).
- `--no-run-unnecessary-builds` - 필요하지 않은 경우 언어(예: Python)의 빌드 명령을 건너뛰도록 도구에 알립니다.

결과 데이터베이스는 `/codeql-dbs/example-repo-multi`의 `python` 및 `cpp` 하위 디렉터리에 저장됩니다.

```
$ codeql database create /codeql-dbs/example-repo-multi \
    --db-cluster --language python,cpp \
    --command make --no-run-unnecessary-builds \
    --source-root /checkouts/example-repo-multi
Initializing databases at /codeql-dbs/example-repo-multi.
Running build command: [make]
[build-stdout] Calling python3 /codeql-bundle/codeql/python/tools/get_venv_lib.py
[build-stdout] Calling python3 -S /codeql-bundle/codeql/python/tools/python_tracer.py -v -z all -c /codeql-dbs/example-repo-multi/python/working/trap_cache -p ERROR: 'pip' not installed.
[build-stdout] /usr/local/lib/python3.6/dist-packages -R /checkouts/example-repo-multi
[build-stdout] [INFO] Python version 3.6.9
[build-stdout] [INFO] Python extractor version 5.16
[build-stdout] [INFO] [2] Extracted file /checkouts/example-repo-multi/hello.py in 5ms
[build-stdout] [INFO] Processed 1 modules in 0.15s
[build-stdout] <output from calling 'make' to build the C/C++ code>
Finalizing databases at /codeql-dbs/example-repo-multi.
Successfully created databases at /codeql-dbs/example-repo-multi.
$
```

## {% data variables.product.prodname_codeql %} 데이터베이스 분석

1. {% data variables.product.prodname_codeql %} 데이터베이스를 만듭니다(위 참조).
2. 데이터베이스에서 `codeql database analyze` 명령을 실행하고 사용할 {% ifversion codeql-packs %}팩 및/또는 {% endif %}쿼리를 지정합니다.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% ifversion codeql-packs %}--download &lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
  ```

{% note %}

**참고:** 단일 커밋에 대해 둘 이상의 {% data variables.product.prodname_codeql %} 데이터베이스를 분석하는 경우 이 명령에서 생성된 각 결과 세트에 대해 SARIF 범주를 지정해야 합니다. {% data variables.product.product_name %}에 결과를 업로드할 때 {% data variables.product.prodname_code_scanning %}에서는 이 범주를 사용하여 각 언어에 대한 결과를 별도로 저장합니다. 이 작업을 수행하지 않으면 각 업로드가 이전 결과를 덮어씁니다.

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% ifversion codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

| 옵션 | 필수 | 사용량 |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | 분석할 {% data variables.product.prodname_codeql %} 데이터베이스가 포함된 디렉터리의 경로를 지정합니다. |
| `<packs,queries>` | | 실행할 {% data variables.product.prodname_codeql %} 팩 또는 쿼리를 지정합니다. {% data variables.product.prodname_code_scanning %}에 사용되는 표준 쿼리를 실행하려면 이 매개 변수를 생략합니다. {% data variables.product.prodname_codeql_cli %} 번들에 포함된 다른 쿼리 모음을 보려면 `/<extraction-root>/qlpacks/codeql/<language>-queries/codeql-suites`를 살펴봅니다. 고유한 쿼리 모음을 만드는 방법에 대한 내용은 {% data variables.product.prodname_codeql_cli %} 설명서에서 [CodeQL 쿼리 모음 만들기](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)를 참조하세요.
| <nobr>`--format`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 명령에서 생성된 결과 파일의 형식을 지정합니다. {% data variables.product.company_short %}에 업로드하는 경우 {% ifversion fpt or ghae or ghec %}`sarif-latest`{% else %}`sarifv2.1.0`{% endif %}여야 합니다. 자세한 내용은 "[{% data variables.product.prodname_code_scanning %}에 대한 SARIF 지원](/code-security/secure-coding/sarif-support-for-code-scanning)"을 참조하세요.
| <nobr>`--output`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | SARIF 결과 파일을 저장할 위치를 지정합니다.
| <nobr>`--sarif-category`<nobr> | {% octicon "question" aria-label="Required with multiple results sets" %} | 단일 데이터베이스 분석의 경우 선택 사항입니다. 리포지토리에서 단일 커밋에 대해 여러 데이터베이스를 분석하는 경우 언어를 정의하는 데 필요합니다. 이 분석을 위해 SARIF 결과 파일에 포함할 범주를 지정합니다. 범주는 다양한 언어 또는 다양한 코드 부분에서 수행되지만 동일한 도구와 커밋을 대상으로 하는 여러 분석을 구분하는 데 사용됩니다.|{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
| <nobr>`--sarif-add-query-help`</nobr> | | 선택 사항입니다. 분석에 사용되는 사용자 지정 쿼리에 사용 가능한 markdown 렌더링 쿼리 도움말을 포함하려는 경우 사용합니다. SARIF 출력에 포함된 사용자 지정 쿼리의 쿼리 도움말은 관련 쿼리가 경고를 생성하는 경우 코드 검사 UI에 표시됩니다. 자세한 내용은 {% data variables.product.prodname_codeql_cli %} 설명서의 [{% data variables.product.prodname_codeql_cli %}를 사용하여 데이터베이스 분석](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/#including-query-help-for-custom-codeql-queries-in-sarif-files)을 참조하세요.{% endif %}{% ifversion codeql-packs %}
| `<packs>` | | (선택 사항) 분석에 CodeQL 쿼리 팩을 포함하려는 경우에 사용합니다. 자세한 내용은 "[{% data variables.product.prodname_codeql %} 팩 다운로드 및 사용](#downloading-and-using-codeql-query-packs)"을 참조하세요.
| <nobr>`--download`</nobr> | | (선택 사항) CodeQL 쿼리 팩 중 일부가 아직 디스크에 없어서 쿼리를 실행하기 전에 다운로드해야 하는 경우에 사용합니다.{% endif %}
| <nobr>`--threads`</nobr> | | 선택 사항입니다. 둘 이상의 스레드를 사용하여 쿼리를 실행하려는 경우 사용합니다. 기본값은 `1`입니다. 더 많은 스레드를 지정하여 쿼리 실행 속도를 높일 수 있습니다. 스레드 수를 논리 프로세서 수로 설정하려면 `0`을 지정합니다.
| <nobr>`--verbose`</nobr> | | 선택 사항입니다. 데이터베이스 생성 프로세스에서 분석 프로세스 및 진단 데이터에 관한 더 자세한 정보를 가져오는 데 사용합니다.

자세한 내용은 {% data variables.product.prodname_codeql_cli %} 설명서의 [{% data variables.product.prodname_codeql_cli %}를 사용하여 데이터베이스 분석](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)을 참조하세요.

### 기본 예제

이 예제에서는 `/codeql-dbs/example-repo`에 저장된 {% data variables.product.prodname_codeql %} 데이터베이스를 분석하고 그 결과를 SARIF 파일 `/temp/example-repo-js.sarif`로 저장합니다. `--sarif-category`를 사용하여 결과를 JavaScript로 식별하는 SARIF 파일에 추가 정보를 포함합니다. 리포지토리의 단일 커밋에 대해 분석할 {% data variables.product.prodname_codeql %} 데이터베이스가 여러 개 있는 경우 반드시 이렇게 해야 합니다.

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --sarif-category=javascript \
    --format={% ifversion fpt or ghae or ghec %}sarif-latest{% else %}sarifv2.1.0{% endif %} --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/codeql-javascript/AngularJS/DisablingSce.ql.
...
> Shutting down query evaluator.
> Interpreting results.
```

## {% data variables.product.product_name %}에 결과 업로드

{% data reusables.code-scanning.upload-sarif-alert-limit %}

{% data variables.product.product_name %}에 결과를 업로드하려면 먼저 이전에 만든 {% data variables.product.prodname_github_app %} 또는 {% data variables.product.pat_generic %}를 {% data variables.product.prodname_codeql_cli %}에 전달하는 가장 좋은 방법을 결정해야 [합니다(CI 시스템에 {% data variables.product.prodname_codeql_cli %} 설치](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github) 참조). 비밀 저장소의 안전한 사용에 관한 CI 시스템 참고 자료를 검토하는 것이 좋습니다. {% data variables.product.prodname_codeql_cli %}는 다음을 지원합니다.

- `--github-auth-stdin` 옵션을 사용하여 표준 입력을 통해 CLI에 토큰 전달(권장).
- 환경 변수 `GITHUB_TOKEN`에 비밀을 저장하고 `--github-auth-stdin` 옵션을 포함하지 않고 CLI 실행.

CI 서버에 대한 가장 안전하고 신뢰할 수 있는 방법을 결정한 경우 각 SARIF 결과 파일에서 `codeql github upload-results`를 실행하며 환경 변수 `GITHUB_TOKEN`에서 토큰을 사용할 수 없는 경우에는 `--github-auth-stdin`을 포함합니다.

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes or ghae %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

| 옵션 | 필수 | 사용량 |
|--------|:--------:|-----|
| <nobr>`--repository`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 데이터를 업로드할 리포지토리의 *소유자/이름* 을 지정합니다. 소유자는 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 엔터프라이즈 내의 조직이어야 하며, 리포지토리가 공용{% endif %}이(가) 아니면 {% data variables.product.prodname_GH_advanced_security %}을(를) 리포지토리{% ifversion fpt or ghec %}에 대해 사용하도록 설정해야 합니다. 자세한 내용은 “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”를 참조하세요.
| <nobr>`--ref`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 결과가 올바른 코드와 매칭될 수 있도록 체크 아웃하고 분석한 `ref`의 이름을 지정합니다. 분기에는 `refs/heads/BRANCH-NAME`을 사용하고, 끌어오기 요청의 헤드 커밋에는 `refs/pull/NUMBER/head`를 사용하고, {% data variables.product.prodname_dotcom %}에서 생성한 끌어오기 요청의 병합 커밋에는 `refs/pull/NUMBER/merge`를 사용합니다.
| <nobr>`--commit`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 분석한 커밋의 전체 SHA를 지정합니다.
| <nobr>`--sarif`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 로드할 SARIF 파일을 지정합니다.{% ifversion ghes or ghae %}
| <nobr>`--github-url`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | {% data variables.product.product_name %}의 URL을 지정합니다.{% endif %}
| <nobr>`--github-auth-stdin`</nobr> | | (선택 사항) 표준 입력을 통해 {% data variables.product.company_short %}의 REST API를 사용하여 인증을 위해 만든 {% data variables.product.prodname_github_app %} 또는 {% data variables.product.pat_generic %}을(를) CLI에 전달합니다. 명령이 이 토큰을 사용하여 설정된 `GITHUB_TOKEN` 환경 변수에 액세스할 수 있는 경우에는 이 항목이 필요하지 않습니다.

자세한 내용은 {% data variables.product.prodname_codeql_cli %} 설명서의 [github 업로드 결과](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/)를 참조하세요.

### 기본 예제

다음은 SARIF 파일 `temp/example-repo-js.sarif`의 결과를 `my-org/example-repo` 리포지토리에 업로드하는 예제입니다. 이 예제에서는 `main` 분기의 `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` 커밋에 대한 결과가 있다고 {% data variables.product.prodname_code_scanning %} API에 알립니다.

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes or ghae %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

업로드에 실패하지 않는 한 이 명령의 출력은 없습니다. 명령 프롬프트는 업로드가 완료되고 데이터 처리가 시작될 때 반환됩니다. 작은 코드베이스에서는 잠시 후 {% data variables.product.product_name %}에서 {% data variables.product.prodname_code_scanning %} 경고를 탐색할 수 있습니다. 체크 아웃한 코드에 따라 끌어오기 요청에서 직접 또는 분기의 **보안** 탭에서 경고를 볼 수 있습니다. 자세한 내용은 "[끌어오기 요청에서 {% data variables.product.prodname_code_scanning %} 경고 심사](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)" 및 "[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)"를 참조하세요.

{% ifversion codeql-packs %}
## {% data variables.product.prodname_codeql %} 쿼리 팩 다운로드 및 사용

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{% data variables.product.prodname_codeql_cli %} 번들에는 {% data variables.product.company_short %} 전문가, 보안 연구원 및 커뮤니티 기여자들이 유지 관리하는 쿼리가 포함되어 있습니다. 다른 조직에서 개발한 쿼리를 실행하려는 경우 {% data variables.product.prodname_codeql %} 쿼리 팩은 쿼리를 다운로드하여 실행할 수 있는 효율적이고 신뢰할 수 있는 방법을 제공합니다. 자세한 내용은 "[CodeQL을 사용하는 코드 검사 안내](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)"를 참조하세요.

{% data variables.product.prodname_codeql %} 팩을 사용하여 데이터베이스를 분석하려면 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}에서 필요한 패키지를 다운로드해야 합니다. 이 작업은 `codeql database analyze` 명령에서 `--download` 플래그를 사용하여 수행할 수 있습니다. 패키지를 공개적으로 사용할 수 없는 경우 인증하려면 {% data variables.product.prodname_github_app %} 또는 {% data variables.product.pat_generic %}를 사용해야 합니다. 자세한 내용과 예제는 위의 "[{% data variables.product.product_name %}에 결과 업로드](#uploading-results-to-github)"를 참조하세요.

| 옵션 | 필수 | 사용량 |
|--------|:--------:|-----|
| <nobr>`<scope/name@version:path>`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 쉼표로 구분된 목록을 사용하여 다운로드할 하나 이상의 CodeQL 쿼리 팩의 범위와 이름을 지정합니다. 필요에 따라 다운로드하고 압축을 풀 버전을 포함시킵니다. 기본적으로 이 팩의 최신 버전이 다운로드됩니다. 필요에 따라 실행할 쿼리, 디렉터리 또는 쿼리 모음의 경로를 포함시킵니다. 경로가 없으면 이 팩의 기본 쿼리를 실행합니다. |
| <nobr>`--github-auth-stdin`</nobr> | | (선택 사항) 표준 입력을 통해 {% data variables.product.company_short %}의 REST API를 사용하여 인증을 위해 만든 {% data variables.product.prodname_github_app %} 또는 {% data variables.product.pat_generic %}을(를) CLI에 전달합니다. 명령이 이 토큰을 사용하여 설정된 `GITHUB_TOKEN` 환경 변수에 액세스할 수 있는 경우에는 이 항목이 필요하지 않습니다.

### 기본 예제

이 예제에서는 `codeql database analyze` 명령을 실행하고 `--download` 옵션을 선택하여 다음을 수행합니다.

1. 최신 버전의 `octo-org/security-queries` 팩을 다운로드합니다.
2. 버전 1.0.1과 *호환* 되는 `octo-org/optional-security-queries` 팩 버전(이 예제에서는 버전 1.0.2)을 다운로드합니다. semver 호환성에 대한 자세한 내용은 [npm의 의미 체계 버전 범위 설명서](https://github.com/npm/node-semver#ranges)를 참조하세요.
3. `octo-org/security-queries`에서 모든 기본 쿼리를 실행합니다.
4. `octo-org/optional-security-queries`에서 `queries/csrf.ql` 쿼리만 실행합니다.

```
$ echo $OCTO-ORG_ACCESS_TOKEN | codeql database analyze --download /codeql-dbs/example-repo \
    octo-org/security-queries \
    octo-org/optional-security-queries@~1.0.1:queries/csrf.ql \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

> Download location: /Users/mona/.codeql/packages
> Installed fresh octo-org/security-queries@1.0.0
> Installed fresh octo-org/optional-security-queries@1.0.2
> Running queries.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> [1/2] Found in cache: /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> Starting evaluation of octo-org/security-queries/query1.ql.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> [2/2] Found in cache: /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> Starting evaluation of octo-org/optional-security-queries/queries/csrf.ql.
> [2/2 eval 694ms] Evaluation done; writing results to octo-org/security-queries/query1.bqrs.
> Shutting down query evaluator.
> Interpreting results.
```

### {% data variables.product.prodname_codeql %} 팩 직접 다운로드

{% data variables.product.prodname_codeql %} 팩을 즉시 실행하지 않고 다운로드하려면 `codeql pack download` 명령을 사용합니다. 이 방법은 인터넷에 액세스하지 않고 {% data variables.product.prodname_codeql %} 쿼리를 실행할 때 유용합니다. {% data variables.product.prodname_codeql %} 분석을 실행하는 경우 이전 예제와 동일한 방식으로 팩, 버전 및 경로를 지정할 수 있습니다.

```shell
echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download &lt;scope/name@version:path&gt; &lt;scope/name@version:path&gt; ...
```

### 여러 {% data variables.product.company_short %} 컨테이너 레지스트리에서 {% data variables.product.prodname_codeql %} 팩 다운로드

{% data variables.product.prodname_codeql %} 팩이 여러 컨테이너 레지스트리에 있는 경우 각 팩을 찾을 위치를 {% data variables.product.prodname_codeql_cli %}에 지시해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_code_scanning %} 구성](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors#downloading-codeql-packs-from-github-enterprise-server)”을 참조하세요.
{% endif %}

## {% data variables.product.prodname_codeql %} 분석을 위한 CI 구성 예제

다음은 지원되는 두 언어로 코드베이스를 분석한 후 결과를 {% data variables.product.product_name %}에 업로드하는 데 사용할 수 있는 일련의 명령 예제입니다.

```shell
# Create CodeQL databases for Java and Python in the 'codeql-dbs' directory
# Call the normal build script for the codebase: 'myBuildScript'

codeql database create codeql-dbs --source-root=src \
    --db-cluster --language=java,python --command=./myBuildScript

# Analyze the CodeQL database for Java, 'codeql-dbs/java'
# Tag the data as 'java' results and store in: 'java-results.sarif'

codeql database analyze codeql-dbs/java java-code-scanning.qls \
    --format=sarif-latest --sarif-category=java --output=java-results.sarif

# Analyze the CodeQL database for Python, 'codeql-dbs/python'
# Tag the data as 'python' results and store in: 'python-results.sarif'

codeql database analyze codeql-dbs/python python-code-scanning.qls \
    --format=sarif-latest --sarif-category=python --output=python-results.sarif

# Upload the SARIF file with the Java results: 'java-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=java-results.sarif --github-auth-stdin

# Upload the SARIF file with the Python results: 'python-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=python-results.sarif --github-auth-stdin
```

## CI 시스템에서 {% data variables.product.prodname_codeql_cli %} 문제 해결

### 로그 및 진단 정보 보기

{% data variables.product.prodname_code_scanning %} 쿼리 모음을 사용하여 {% data variables.product.prodname_codeql %} 데이터베이스를 분석할 때, CLI는 경고에 대한 상세 정보를 생성하는 것 외에도 데이터베이스 생성 단계 및 요약 메트릭의 진단 데이터를 보고합니다. 경고가 거의 없는 리포지토리의 경우 이 정보는 코드에 문제가 거의 없는지 또는 {% data variables.product.prodname_codeql %} 데이터베이스를 생성하는 동안 오류가 없었는지 확인하는 데 유용할 수 있습니다. `codeql database analyze`에서 보다 자세한 출력을 얻으려면 `--verbose` 옵션을 사용합니다.

사용 가능한 진단 정보 유형에 대한 자세한 내용은 "[{% data variables.product.prodname_code_scanning %} 로그 보기](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information)"를 참조하세요.

### {% data variables.product.prodname_code_scanning_capc %}는 분석된 언어 중 하나의 분석 결과만 표시

기본적으로 {% data variables.product.prodname_code_scanning %}은 리포지토리에 대한 분석마다 하나의 SARIF 결과 파일이 있을 것으로 기대합니다. 따라서 커밋에 대한 두 번째 SARIF 결과 파일을 업로드하면 두 번째가 원래 데이터 세트를 대체하는 것으로 처리됩니다.

리포지토리의 커밋에 대한 {% data variables.product.prodname_code_scanning %} API에 둘 이상의 결과 세트를 업로드하려면 각 결과 세트를 고유한 세트로 식별해야 합니다. 각 커밋에 대해 분석할 {% data variables.product.prodname_codeql %} 데이터베이스를 둘 이상 만드는 리포지토리의 경우 `--sarif-category` 옵션을 사용하여 해당 리포지토리에 대해 생성하는 각 SARIF 파일의 언어 또는 기타 고유 범주를 지정합니다.

{% ifversion fpt or ghec or ghes > 3.7 or ghae > 3.7 %}
### Python 추출 문제

더 구체적으로 CodeQL 데이터베이스 생성 단계(코드 추출)를 위해 {% data variables.product.prodname_codeql_cli %}에 대한 Python 2 지원을 더 이상 사용하지 않습니다.

{% data variables.product.prodname_codeql_cli %}을(를) 사용하여 Python으로 작성된 코드에서 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}를 실행하는 경우 CI 시스템에 Python 3이 설치되어 있는지 확인해야 합니다.

{% endif %}

## 추가 참고 자료

- [CodeQL 데이터베이스 만들기](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [CodeQL CLI를 사용하여 데이터베이스 분석](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
- [CodeQL 팩 게시 및 사용](https://codeql.github.com/docs/codeql-cli/publishing-and-using-codeql-packs/)
