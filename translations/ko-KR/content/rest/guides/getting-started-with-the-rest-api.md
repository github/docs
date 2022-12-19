---
title: REST API 시작
intro: '{% data variables.product.prodname_dotcom %} REST API를 사용하는 방법을 알아봅니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Using the API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 66620b01bb488f8c74111b56255ff06702e402e8
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184263'
---
## {% data variables.product.prodname_dotcom %} REST API 정보

이 문서에서는 {% data variables.product.prodname_cli %}, JavaScript 또는 cURL을 사용하는 {% data variables.product.prodname_dotcom %} REST API를 사용하는 방법을 설명합니다. 빠른 시작 가이드는 “[GitHub REST API에 대한 빠른 시작](/rest/quickstart)”을 참조하세요.

REST API를 요청할 때 HTTP 메서드와 경로를 지정합니다. 또한 요청 헤더와 경로, 쿼리 또는 본문 매개 변수를 지정할 수도 있습니다. API는 응답 상태 코드, 응답 헤더 및 잠재적으로 응답 본문을 반환합니다.

REST API 참조 설명서에서는 모든 작업에 대한 HTTP 메서드, 경로 및 매개 변수를 설명합니다. 또한 각 작업에 대한 예제 요청 및 응답도 표시합니다. 자세한 내용은 [REST 참조 문서](/rest)를 참조하세요.

{% data variables.product.company_short %}의 API에 대한 자세한 내용은 "[{% data variables.product.company_short %}의 API 정보](/developers/overview/about-githubs-apis)"를 참조하세요.

## 요청 수행

요청을 수행하려면 먼저 사용하려는 작업의 HTTP 메서드 및 경로를 찾습니다. 예를 들어 “Octocat 가져오기” 작업은 `GET` 메서드와 `/octocat` 경로를 사용합니다. 이 작업에 대한 전체 참조 설명서는 “[Octocat 가져오기](/rest/meta#get-octocat)”를 참조하세요.

{% cli %}

{% note %}

**참고**: {% data variables.product.prodname_cli %} 예제의 명령을 사용하려면 {% data variables.product.prodname_cli %}를 설치해야 합니다. 설치 지침은 [{% data variables.product.prodname_cli %} 리포지토리](https://github.com/cli/cli#installation)를 참조하세요.

{% endnote %}

{% data variables.product.prodname_cli %}에 아직 인증되지 않은 경우 요청을 하기 전에 `gh auth login` 하위 명령을 사용하여 인증해야 합니다. 자세한 내용은 “[인증](#authenticating)”을 참조하세요.

{% data variables.product.prodname_cli %}를 사용하여 요청하려면 경로와 함께 `api` 하위 명령을 사용합니다. `--method` 또는 `-X` 플래그를 사용하여 메서드를 지정합니다.

```shell
gh api /octocat --method GET
```

{% endcli %}

{% javascript %}

{% note %}

**참고**: JavaScript 예제에서 사용되는 Octokit.js 라이브러리를 사용하려면 `octokit`를 설치하나 다음 가져와야 합니다. 자세한 내용은 [Octokit.js 추가 정보](https://github.com/octokit/octokit.js/#readme)를 참조하세요.

{% endnote %}

JavaScript를 사용하여 요청을 수행하기 위해 Octokit.js 사용할 수 있습니다. 자세한 내용은 [Octokit.js 추가 정보](https://github.com/octokit/octokit.js/#readme)를 참조하세요.

먼저, `Octokit`의 인스턴스를 만듭니다.{% ifversion ghes or ghae %} 기준 URL을 `{% data variables.product.api_url_code %}`(으)로 설정합니다. 을 {% data variables.location.product_location %}의 이름으로 바꿉 있습니다 `[hostname]` .{ % endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});
```

그런 다음, `request` 메서드를 사용하여 요청을 수행합니다. HTTP 메서드와 경로를 첫 번째 인수로 전달합니다.

```javascript
await octokit.request("GET /octocat", {});
```

{% endjavascript %}

{% curl %}

{% data variables.product.prodname_dotcom %} REST API `{% data variables.product.api_url_code %}`의 기본 URL 앞에 전체 URL `{% data variables.product.api_url_code %}/octocat`을 가져오는 경로에 .{ % ifversion ghes or ghae %} 을 {% data variables.location.product_location %}의 이름으로 바꿉 `[hostname]` 니다.{ % endif %}

명령줄에서 `curl` 명령을 사용합니다. `--request` 또는 `-X` 플래그를 사용하고 그 뒤에는 HTTP 메서드가 따라옵니다. `--url` 플래그를 사용하고 그 뒤에는 전체 URL이 따라옵니다.

```shell
curl --request GET \
--url "https://api.github.com/octocat"
```

{% note %}

**참고**: “command not found: curl”과 유사한 메시지가 표시되면 cURL을 다운로드하여 설치해야 할 수 있습니다. 자세한 내용은 [cURL 프로젝트 다운로드 페이지](https://curl.se/download.html)를 참조하세요.

{% endnote %}

{% endcurl %}

계속해서 읽으면 인증하고, 매개 변수를 보내고, 응답을 사용하는 방법을 살펴볼 수 있습니다.

## 인증

인증된 경우 많은 작업에 인증이 필요하거나 추가 정보를 반환해야 합니다. 또한 인증되면 시간당 더 많은 요청을 수행할 수 있습니다. {% cli %} 일부 REST API 작업에는 인증 없이 액세스할 수 있지만 `api` 하위 명령을 사용하려면 {% data variables.product.prodname_cli %}에 인증해야 합니다.{% endcli %}

### 토큰 정보

토큰을 추가하여 요청을 인증할 수 있습니다.

개인 용도로 {% data variables.product.company_short %} REST API를 사용하려는 경우 {% data variables.product.pat_generic %}을(를) 만들 수 있습니다. 이 문서에서 사용되는 REST API 작업에는 {% data variables.product.pat_v1_plural %}{% ifversion pat-v2 %} 또는 달리 명시되지 않은 한 {% data variables.product.pat_v2 %}s{% endif %}에 대한 퍼블릭 리포지토리에 대한 읽기 전용 액세스 범위가 필요합니다 `repo` . 다른 작업에는 다른 범위{% ifversion pat-v2%} 또는 권한{% endif %}이(가) 필요할 수 있습니다. {% data variables.product.pat_generic %}을(를) 만드는 방법에 대한 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기"를 참조하세요](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

조직 또는 다른 사용자를 대신하여 API를 사용하려는 경우 {% data variables.product.company_short %}에서 {% data variables.product.prodname_github_app %}을(를) 사용하는 것이 좋습니다. {% data variables.product.prodname_github_apps %}에 작업을 사용할 수 있는 경우 해당 작업에 대한 REST 참조 설명서에 “GitHub 앱에서 작동”이라고 표시됩니다. 이 문서에서 사용되는 REST API 작업에는 {% data variables.product.prodname_github_apps %}에 대한 `issues` 읽기 및 쓰기 권한이 필요합니다. 다른 작업에는 다른 사용 권한이 필요할 수 있습니다. 자세한 내용은 “[GitHub 앱 만들기](/developers/apps/building-github-apps/creating-a-github-app)”, “[GitHub 앱을 사용하여 인증](/developers/apps/building-github-apps/authenticating-with-github-apps)” 및 “[GitHub 앱의 사용자 식별 및 권한 부여](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)”를 참조하세요.

{% data variables.product.prodname_actions %} 워크플로에서 API를 사용하려면 {% data variables.product.company_short %}에서 토큰을 만드는 대신 기본 제공 `GITHUB_TOKEN`으로 인증하는 것이 좋습니다. `permissions` 키를 사용하여 `GITHUB_TOKEN`에 대한 사용 권한을 부여할 수 있습니다. 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)”을 참조하세요.

### 인증 예제

{% cli %}

{% data variables.product.prodname_cli %}에서는 액세스 토큰을 미리 만들 필요가 없습니다. `auth login` 하위 명령을 사용하여 {% data variables.product.prodname_cli %}에 인증합니다.

```shell
gh auth login
```

`--scopes` 플래그를 사용하여 원하는 범위를 지정할 수 있습니다. 만든 토큰으로 인증하려는 경우 `--with-token` 플래그를 사용할 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_cli %} `auth login` 설명서](https://cli.github.com/manual/gh_auth_login)를 참조하세요.

{% endcli %}

{% javascript %}

{% warning %}

**경고**: 액세스 토큰을 암호와 같이 취급하세요.

토큰을 안전하게 유지하기 위해 비밀로 저장하고 {% data variables.product.prodname_actions %}를 통해 스크립트를 실행할 수 있습니다. 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

{% ifversion ghec or fpt %}또한 토큰을 {% data variables.product.prodname_codespaces %} 비밀로 저장하고 {% data variables.product.prodname_codespaces %}에서 스크립트를 실행할 수도 있습니다. 자세한 내용은 “[codespace에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”를 참조하세요.{% endif %}

이러한 옵션을 사용할 수 없는 경우 [1Password CLI](https://developer.1password.com/docs/cli/secret-references/)와 같은 다른 서비스를 사용하여 토큰을 안전하게 저장하는 것이 좋습니다.

{% endwarning %}

Octokit.js 라이브러리를 사용하여 인증하려면 `Octokit`의 인스턴스를 만들 때 토큰을 전달할 수 있습니다. 를 토큰으로 대체 `YOUR-TOKEN` 합니다.{ % ifversion ghes or ghae %} 을 {% data variables.location.product_location %}의 이름으로 바꿉 `[hostname]` 니다.{ % endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: 'YOUR-TOKEN',
});
```

{% endjavascript %}

{% curl %}

{% warning %}

**경고**: 액세스 토큰을 암호와 같이 취급하세요.

계정을 안전하게 유지하기 위해 cURL 대신 {% data variables.product.prodname_cli %}를 사용할 수 있습니다. {% data variables.product.prodname_cli %}가 대신 인증을 처리합니다. 자세한 내용은 이 페이지의 {% data variables.product.prodname_cli %} 버전을 참조하세요.

{% ifversion ghec or fpt %}또한 토큰을 {% data variables.product.prodname_codespaces %} 비밀로 저장하고 {% data variables.product.prodname_codespaces %}를 통해 명령줄을 사용할 수 있습니다. 자세한 내용은 “[codespace에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”를 참조하세요.{% endif %}

이러한 옵션을 사용할 수 없는 경우 [1Password CLI](https://developer.1password.com/docs/cli/secret-references/)와 같은 다른 서비스를 사용하여 토큰을 안전하게 저장하는 것이 좋습니다.

{% endwarning %}

cURL을 사용하면 토큰이 포함된 `Authorization` 헤더를 보냅니다. `YOUR-TOKEN`을 실제 토큰으로 바꿉니다.

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% note %}

**참고:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

{% endcurl %}

### {% data variables.product.prodname_actions %}에 대한 인증 예제

{% cli %}

또한 {% data variables.product.prodname_actions %} 워크플로에서 `run` 키워드를 사용하여 {% data variables.product.prodname_cli %} 명령을 실행할 수도 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”을 참조하세요.

`gh auth login` 명령을 사용하는 대신 토큰을 `GH_TOKEN`이라는 환경 변수로 전달합니다. {% data variables.product.prodname_dotcom %}에서는 토큰을 만드는 대신 기본 제공 `GITHUB_TOKEN`을 사용하여 인증하는 것이 좋습니다. 가능하지 않은 경우 토큰을 비밀로 저장하고 아래 예제의 `GITHUB_TOKEN`을 비밀의 이름으로 바꿉니다. `GITHUB_TOKEN`에 대한 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication)”을 참조하세요. 비밀에 대한 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

```yaml
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          gh api /octocat
```

{% endcli %}

{% javascript %}

또한 `run` 키워드를 사용하여{% data variables.product.prodname_actions %} 워크플로에서 JavaScript 스크립트를 실행할 수도 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”을 참조하세요.

{% data variables.product.prodname_dotcom %}에서는 토큰을 만드는 대신 기본 제공 `GITHUB_TOKEN`을 사용하여 인증하는 것이 좋습니다. 가능하지 않은 경우 토큰을 비밀로 저장하고 아래 예제의 `GITHUB_TOKEN`을 비밀의 이름으로 바꿉니다. `GITHUB_TOKEN`에 대한 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication)”을 참조하세요. 비밀에 대한 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

다음 예제 워크플로:

1. 리포지토리 콘텐츠 체크 아웃
1. Node.js 설정
1. `octokit`를 설치합니다.
1. `GITHUB_TOKEN`의 값을 `TOKEN`이라는 환경 변수로 저장하고, 이 환경 변수에 `process.env.TOKEN`으로 액세스할 수 있는 `.github/actions-scripts/use-the-api.mjs`를 실행합니다.

예제 워크플로:

```yaml
on:
  workflow_dispatch:
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - name: Check out repo content
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.17.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Run script
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          node .github/actions-scripts/use-the-api.mjs
```

JavaScript 스크립트 예제(파일 경로: `.github/actions-scripts/use-the-api.mjs`):

```javascript
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: process.env.TOKEN,
});

await octokit.request("GET /octocat", {});
```

스크립트를 별도의 파일에 저장하고 워크플로에서 스크립트를 실행하는 대신 `actions/github-script` 작업을 사용하여 스크립트를 실행할 수 있습니다. 자세한 내용은 [actions/github-script 추가 정보](https://github.com/actions/github-script)를 참조하세요.

```yaml
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - uses: {% data reusables.actions.action-github-script %}
        with:
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          script: |
            await github.request('GET /octocat', {})
```

{% endjavascript %}

{% curl %}

또한 `run` 키워드를 사용하여{% data variables.product.prodname_actions %} 워크플로에서 cURL 명령을 실행할 수도 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”을 참조하세요.

{% data variables.product.prodname_dotcom %}에서는 토큰을 만드는 대신 기본 제공 `GITHUB_TOKEN`을 사용하여 인증하는 것이 좋습니다. 가능하지 않은 경우 토큰을 비밀로 저장하고 아래 예제의 `GITHUB_TOKEN`을 비밀의 이름으로 바꿉니다. `GITHUB_TOKEN`에 대한 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication)”을 참조하세요. 비밀에 대한 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

```yaml
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/octocat" \
          --header "Authorization: Bearer $GH_TOKEN"
```

{% endcurl %}

## 헤더 사용

대부분의 작업은 값 `application/vnd.github+json`과 함께 `Accept` 헤더를 전달해야 한다고 지정합니다. 다른 작업에서는 다른 `Accept` 헤더 또는 추가 헤더를 보내야 한다고 지정할 수 있습니다.

{% cli %}

{% data variables.product.prodname_cli %}를 사용하여 헤더를 보내려면 `key: value` 형식으로 뒤에 헤더가 따라오는 `--header` 또는 `-H` 플래그를 사용합니다.

```shell
gh api --header 'Accept: application/vnd.github+json'{% ifversion api-date-versioning %} --header 'X-GitHub-Api-Version:{{ allVersions[currentVersion].latestApiVersion }}'{% endif %} --method GET /octocat
```

{% endcli %}

{% javascript %}

Octokit.js 라이브러리는 자동으로 `Accept: application/vnd.github+json` 헤더를 전달합니다. 추가 헤더 또는 다른 `Accept` 헤더를 전달하려면 `request` 메서드에 두 번째 인수로 전달되는 개체에 `headers` 속성을 추가합니다. `headers` 속성의 값은 헤더 이름을 키로, 헤더 값을 값으로 가지고 있는 개체입니다. 예를 들어 `text/plain`의 값과 함께 `content-type` 헤더를 보내려면 다음을 수행합니다.

```javascript
await octokit.request("GET /octocat", {
  headers: {
    "content-type": "text/plain",{% ifversion api-date-versioning %}
    "X-GitHub-Api-Version": "{{ allVersions[currentVersion].latestApiVersion }}",{% endif %}
  },
});
```

{% endjavascript %}

{% curl %}

cURL을 사용하여 헤더를 보내려면 `key: value` 형식으로 뒤에 헤더가 따라오는 `--header` 또는 `-H` 플래그를 사용합니다.

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"{% ifversion api-date-versioning %}\
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"{% endif %}
```

{% endcurl %}

## 경로 매개 변수 사용

경로 매개 변수는 작업 경로를 수정합니다. 예를 들어 “리포지토리 이슈 나열” 경로는 `/repos/{owner}/{repo}/issues`입니다. 중괄호 `{}`는 지정해야 하는 경로 매개 변수를 나타냅니다. 이 경우 리포지토리 소유자 및 이름을 지정해야 합니다. 이 작업에 대한 참조 설명서는 “[리포지토리 이슈 나열](/rest/issues/issues#list-repository-issues)”을 참조하세요.

{% cli %}

{% ifversion ghes or ghae %} {% note %}

**참고:** 이 명령이 {% data variables.location.product_location %}에 대해 작동하려면 을 {% data variables.location.product_location %}이 소유한 리포지토리로 대체 `octocat/Spoon-Knife` 합니다. 그렇지 않으면 명령을 다시 실행 `gh auth login` 하여 {% data variables.location.product_location %} 대신 {% data variables.product.prodname_dotcom_the_website %}에 인증합니다.

{% endnote %} {% endif %}

`octocat/Spoon-Knife` 리포지토리에서 이슈를 가져오려면 `octocat`으로 `{owner}`를, `Spoon-Knife`로 `{repo}`를 바꿉니다.

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

{% ifversion ghes or ghae %} {% note %}

**참고:** 이 예제가 {% data variables.location.product_location %}에서 작동하려면 을 {% data variables.location.product_location %}이 소유한 리포지토리로 대체 `octocat/Spoon-Knife` 합니다. 그렇지 않으면 새 `Octokit` 인스턴스를 만들고 `baseURL`은 지정하지 않습니다.

{% endnote %} {% endif %}

Octokit.js를 사용하여 요청하면 경로 매개 변수를 포함한 모든 매개 변수가 개체에서 `request` 메서드에 대한 두 번째 인수로 전달됩니다. `octocat/Spoon-Knife` 리포지토리에서 이슈를 가져오려면 `owner`를 `octocat`으로, `repo`를 `Spoon-Knife`로 지정합니다.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife"
});
```

{% endjavascript %}

{% curl %}

`octocat/Spoon-Knife` 리포지토리에서 이슈를 가져오려면 `octocat`으로 `{owner}`를, `Spoon-Knife`로 `{repo}`를 바꿉니다. 전체 경로를 빌드하려면 {% data variables.product.prodname_dotcom %} REST API인 `https://api.github.com`(`https://api.github.com/repos/octocat/Spoon-Knife/issues`)에 대한 기준 URL 앞에 추가합니다.

{% ifversion ghes or ghae %} {% note %}

**참고:** {% data variables.product.prodname_dotcom_the_website %} 대신 {% data variables.location.product_location %}를 사용하려면 대신 `https://api.github.com` 를 사용하고 `{% data variables.product.api_url_code %}` 을 {% data variables.location.product_location %}의 이름으로 바 `[hostname]` 꿉다. 을 {% data variables.location.product_location %}이 소유한 리포지토리로 대체 `octocat/Spoon-Knife` 합니다.

{% endnote %} {% endif %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

작업은 각 이슈에 대한 이슈 및 데이터 목록을 반환합니다. 응답 사용에 대한 자세한 내용은 “[응답 사용](#using-the-response)” 섹션을 참조하세요.

## 쿼리 매개 변수 사용

쿼리 매개 변수를 사용하면 요청에 대해 반환되는 데이터를 제어할 수 있습니다. 예를 들어 쿼리 매개 변수를 사용하면 응답에 페이지를 매길 때 반환되는 항목 수를 지정할 수 있습니다.

기본적으로 “리포지토리 이슈 나열” 작업은 만든 날짜별로 내림차순으로 정렬된 30개의 이슈를 반환합니다. `per_page` 매개 변수를 사용하여 30이 아닌 두 가지 이슈를 반환할 수 있습니다. `sort` 매개 변수를 사용하여 만든 날짜가 아니라 마지막으로 업데이트된 날짜를 기준으로 이슈를 정렬할 수 있습니다. `direction` 매개 변수를 사용하여 결과를 내림차순 대신 오름차순으로 정렬할 수 있습니다.

{% cli %}

{% data variables.product.prodname_cli %}의 경우 `-F` 플래그를 사용하여 숫자, 부울 또는 null인 매개 변수를 전달합니다. `-f`를 사용하여 문자열 매개 변수를 전달합니다.

{% note %}

**참고**: 현재, {% data variables.product.prodname_cli %}는 배열인 매개 변수를 허용하지 않습니다. 자세한 내용은 [이 이슈](https://github.com/cli/cli/issues/1484)를 참조하세요.

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 -f sort=updated -f direction=asc
```

{% endcli %}

{% javascript %}

Octokit.js를 사용하여 요청하면 쿼리 매개 변수를 포함한 모든 매개 변수가 개체에서 `request` 메서드에 대한 두 번째 인수로 전달됩니다.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 2,
  sort: "updated",
  direction: "asc",
});
```

{% endjavascript %}

{% curl %}

cURL의 경우 경로 끝에 `?`를 추가한 다음 쿼리 매개 변수 이름과 값을 `parameter_name=value` 양식으로 추가합니다. 쿼리 매개 변수가 여러 개이면 `&`로 구분합니다.

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2&sort=updated&direction=asc" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

작업은 각 이슈에 대한 이슈 및 데이터 목록을 반환합니다. 응답 사용에 대한 자세한 내용은 “[응답 사용](#using-the-response)” 섹션을 참조하세요.

## 본문 매개 변수 사용

본문 매개 변수를 사용하면 추가 데이터를 API에 전달할 수 있습니다. 예를 들어 “이슈 만들기” 작업을 수행하려면 새 이슈에 대한 제목을 지정해야 합니다. 또한 이슈 본문에 넣을 텍스트와 같은 다른 정보를 지정할 수도 있습니다. 이 작업에 대한 전체 참조 설명서는 “[이슈 만들기](/rest/issues/issues#create-an-issue)”를 참조하세요.

“이슈 만들기” 작업은 위의 예제에서 “리포지토리 이슈 나열” 작업과 동일한 경로를 사용하지만 `GET` 메서드 대신 `POST` 메서드를 사용합니다.

{% cli %}

{% data variables.product.prodname_cli %}의 경우 `-F` 플래그를 사용하여 숫자, 부울 또는 null인 매개 변수를 전달합니다. `-f`를 사용하여 문자열 매개 변수를 전달합니다.

{% note %}

**참고**: 현재, {% data variables.product.prodname_cli %}는 배열인 매개 변수를 허용하지 않습니다. 자세한 내용은 [이 이슈](https://github.com/cli/cli/issues/1484)를 참조하세요.

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method POST /repos/octocat/Spoon-Knife/issues -f title="Created with the REST API" -f body="This is a test issue created by the REST API"
```

{% endcli %}

{% javascript %}

{% ifversion pat-v2 %}

{% note %}

{% data variables.product.pat_v2 %}을(를) 사용하는 경우 을 소유한 리포지토리 또는 구성원인 조직이 소유한 리포지토리로 바꾸어 `octocat/Spoon-Knife` 야 합니다. 토큰은 해당 리포지토리에 액세스할 수 있어야 하며 리포지토리 문제에 대한 읽기 및 쓰기 권한이 있어야 합니다. 리포지토리를 만드는 방법에 대한 자세한 내용은 "[리포지토리 만들기"를](/get-started/quickstart/create-a-repo) 참조하세요. {% data variables.product.pat_v2 %}에 액세스 및 권한을 부여하는 방법에 대한 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기"를 참조하세요](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% endnote %}

{% endif %}

Octokit.js를 사용하여 요청하면 본문 매개 변수를 포함한 모든 매개 변수가 개체에서 `request` 메서드에 대한 두 번째 인수로 전달됩니다.

```javascript
await octokit.request("POST /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  title: "Created with the REST API",
  body: "This is a test issue created by the REST API",
});
```

{% endjavascript %}

{% curl %}

{% ifversion pat-v2 %}

{% note %}

{% data variables.product.pat_v2 %}을(를) 사용하는 경우 을 소유한 리포지토리 또는 구성원인 조직이 소유한 리포지토리로 바꾸어 `octocat/Spoon-Knife` 야 합니다. 토큰은 해당 리포지토리에 액세스할 수 있어야 하며 리포지토리 문제에 대한 읽기 및 쓰기 권한이 있어야 합니다. 리포지토리를 만드는 방법에 대한 자세한 내용은 "[리포지토리 만들기"를](/get-started/quickstart/create-a-repo) 참조하세요. {% data variables.product.pat_v2 %}에 액세스 및 권한을 부여하는 방법에 대한 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기"를 참조하세요](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% endnote %}

{% endif %}

cURL의 경우 `--data` 플래그를 사용하여 JSON 개체의 본문 매개 변수를 전달합니다.

```shell
curl --request POST \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--data '{
  "title": "Created with the REST API",
  "body": "This is a test issue created by the REST API"
}'
```

{% endcurl %}

이 작업은 이슈를 만들고 새 이슈에 대한 데이터를 반환합니다. 응답에서 이슈를 찾아 `html_url` 브라우저에서 이슈를 탐색합니다. 응답 사용에 대한 자세한 내용은 “[응답 사용](#using-the-response)” 섹션을 참조하세요.

## 응답 사용

### 응답 코드 및 헤더 정보

모든 요청은 응답의 성공을 나타내는 HTTP 상태 코드를 반환합니다. 응답 코드에 대한 자세한 내용은 [MDN HTTP 응답 상태 코드 설명서](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)를 참조하세요.

또한 응답에는 응답에 대한 자세한 내용을 제공하는 헤더가 포함됩니다. `X-` 또는 `x-`로 시작하는 헤더는 {% data variables.product.company_short %}에 고유합니다. 예를 들어 헤더 `x-ratelimit-remaining` 및 `x-ratelimit-reset`은 기간 동안 수행할 수 있는 요청 수를 알려줍니다.

{% cli %}

상태 코드 및 헤더를 보려면 요청을 보낼 때 `--include` 또는 `--i` 플래그를 사용합니다.

예를 들어, 이 요청은 다음과 같습니다.

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 --include
```

다음과 같은 응답 코드 및 헤더를 반환합니다.

```shell
HTTP/2.0 200 OK
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
Cache-Control: private, max-age=60, s-maxage=60
Content-Security-Policy: default-src 'none'
Content-Type: application/json; charset=utf-8
Date: Thu, 04 Aug 2022 19:56:41 GMT
Etag: W/"a63dfbcfdb73621e9d2e89551edcf9856731ced534bd7f1e114a5da1f5f73418"
Link: <https://api.github.com/repositories/1300192/issues?per_page=1&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=1&page=14817>; rel="last"
Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
Server: GitHub.com
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
Vary: Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With
X-Accepted-Oauth-Scopes: repo
X-Content-Type-Options: nosniff
X-Frame-Options: deny
X-Github-Api-Version-Selected: 2022-08-09
X-Github-Media-Type: github.v3; format=json
X-Github-Request-Id: 1C73:26D4:E2E500:1EF78F4:62EC2479
X-Oauth-Client-Id: 178c6fc778ccc68e1d6a
X-Oauth-Scopes: gist, read:org, repo, workflow
X-Ratelimit-Limit: 15000
X-Ratelimit-Remaining: 14996
X-Ratelimit-Reset: 1659645499
X-Ratelimit-Resource: core
X-Ratelimit-Used: 4
X-Xss-Protection: 0
```

이 예제에서 응답 코드는 성공적인 요청을 나타내는 `200`입니다.

{% endcli %}

{% javascript %}

Octokit.js 사용하여 요청을 수행하면 `request` 메서드는 프라미스를 반환합니다. 요청에 성공하면 프라미스는 응답의 HTTP 상태 코드(`status`) 및 응답 헤더(`headers`)를 포함하는 개체로 확인됩니다. 오류가 발생하면 프라미스는 응답의 HTTP 상태 코드(`status`) 및 응답 헤더(`response.headers`)를 포함하는 개체로 확인됩니다.

오류가 발생하는 경우 `try/catch` 블록을 사용하여 오류를 catch할 수 있습니다. 예를 들어 다음 스크립트의 요청이 성공하면 스크립트는 상태 코드와 `x-ratelimit-remaining` 헤더 값을 기록합니다. 요청에 실패하면 스크립트는 상태 코드, `x-ratelimit-remaining` 헤더의 값 및 오류 메시지를 기록합니다.

```javascript
try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
    per_page: 2,
  });

  console.log(`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`)
}
```

{% endjavascript %}

{% curl %}

상태 코드 및 헤더를 보려면 요청을 보낼 때 `--include` 또는 `--i` 플래그를 사용합니다.

예를 들어, 이 요청은 다음과 같습니다.

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--include
```

다음과 같은 응답 코드 및 헤더를 반환합니다.

```shell
HTTP/2 200
server: GitHub.com
date: Thu, 04 Aug 2022 20:07:51 GMT
content-type: application/json; charset=utf-8
cache-control: public, max-age=60, s-maxage=60
vary: Accept, Accept-Encoding, Accept, X-Requested-With
etag: W/"7fceb7e8c958d3ec4d02524b042578dcc7b282192e6c939070f4a70390962e18"
x-github-media-type: github.v3; format=json
link: <https://api.github.com/repositories/1300192/issues?per_page=2&sort=updated&direction=asc&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&sort=updated&direction=asc&page=7409>; rel="last"
access-control-expose-headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
access-control-allow-origin: *
strict-transport-security: max-age=31536000; includeSubdomains; preload
x-frame-options: deny
x-content-type-options: nosniff
x-xss-protection: 0
referrer-policy: origin-when-cross-origin, strict-origin-when-cross-origin
content-security-policy: default-src 'none'
x-ratelimit-limit: 15000
x-ratelimit-remaining: 14996
x-ratelimit-reset: 1659645535
x-ratelimit-resource: core
x-ratelimit-used: 4
accept-ranges: bytes
content-length: 4936
x-github-request-id: 14E0:4BC6:F1B8BA:208E317:62EC2715
```

이 예제에서 응답 코드는 성공적인 요청을 나타내는 `200`입니다.

{% endcurl %}

### 응답 본문 정보

많은 작업에서 응답 본문을 반환합니다. 달리 지정하지 않는 한 응답 본문은 JSON 형식입니다. 예를 들어 이 요청은 각 이슈에 대한 데이터와 관련된 이슈 목록을 반환합니다.

{% cli %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2
```

{% endcli %}

{% javascript %}

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 2,
});
```

{% endjavascript %}

{% curl %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

원하는 정보를 지정하는 GraphQL API와 달리 REST API는 일반적으로 필요한 것보다 더 많은 정보를 반환합니다. 원하는 경우 응답을 구문 분석하여 특정 정보를 가져올 수 있습니다.

{% cli %}

예를 들어 `>`는 응답을 파일로 리디렉션하는 데 사용할 수 있습니다.

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 > data.json
```

그런 다음 jq를 사용하여 각 이슈의 제목 및 작성자 ID를 가져올 수 있습니다.

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

이전 두 명령은 다음과 같이 반환합니다.

```
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

jq에 대한 자세한 내용은 [jq 설명서](https://stedolan.github.io/jq/) 및 [jq play](https://jqplay.org/)를 참조하세요.

{% endcli %}

{% javascript %}

예를 들어 각 이슈의 제목 및 작성자 ID를 가져올 수 있습니다.

```javascript
try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
    per_page: 2,
  });

  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}
```

{% endjavascript %}

{% curl %}

예를 들어 `>`는 응답을 파일로 리디렉션하는 데 사용할 수 있습니다.

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" > data.json
```

그런 다음 jq를 사용하여 각 이슈의 제목 및 작성자 ID를 가져올 수 있습니다.

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

이전 두 명령은 다음과 같이 반환합니다.

```
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

jq에 대한 자세한 내용은 [jq 설명서](https://stedolan.github.io/jq/) 및 [jq play](https://jqplay.org/)를 참조하세요.

{% endcurl %}

## 다음 단계

이 문서에서는 리포지토리에서 이슈를 나열하고 만드는 방법을 보여 줍니다. 더 많은 연습을 위해 이슈에 대해 주석을 달거나, 이슈의 제목을 편집하거나, 이슈를 닫습니다. 이러한 작업에 대한 자세한 내용은 “[이슈 주석 만들기](/rest/issues#create-an-issue-comment)” 및 “[이슈 업데이트](/rest/issues/issues#update-an-issue)”를 참조하세요.

사용할 수 있는 작업에 대한 자세한 내용은 [REST 참조 설명서](/rest)를 참조하세요.
