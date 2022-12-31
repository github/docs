---
title: GitHub REST API에 대한 빠른 시작
intro: '{% data variables.product.prodname_dotcom %} REST API를 시작하는 방법을 알아봅니다.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
topics:
  - API
redirect_from:
  - /guides/getting-started
  - /v3/guides/getting-started
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 001c4e3291e697be034579525d9f0bc6da8c0c88
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192883'
---
이 문서에서는 {% data variables.product.prodname_cli %}, JavaScript 또는 cURL을 사용하여 {% data variables.product.prodname_dotcom %} REST API를 빠르게 시작하는 방법을 설명합니다. 자세한 내용은 “[REST API 시작](/rest/guides/getting-started-with-the-rest-api)”을 참조하세요.

{% cli %}

## {% data variables.product.prodname_cli %}를 사용하여 시작

### 명령줄에서 {% data variables.product.prodname_cli %} 사용

{% data variables.product.prodname_cli %}는 명령줄에서 {% data variables.product.prodname_dotcom %} REST API를 사용하는 가장 쉬운 방법입니다.

1. 아직 설치하지 않은 경우 {% data variables.product.prodname_cli %}를 설치합니다. 설치 지침은 [{% data variables.product.prodname_cli %} 리포지토리](https://github.com/cli/cli#installation)를 참조하세요.
1. `auth login` 하위 명령을 사용하여 {% data variables.product.prodname_cli %}에 인증합니다. 자세한 내용은 [{% data variables.product.prodname_cli %} `auth login` 설명서](https://cli.github.com/manual/gh_auth_login)를 참조하세요.

   ```shell
   gh auth login
   ```

1. `api` 하위 명령을 사용하여 API 요청을 만듭니다. 자세한 내용은 [{% data variables.product.prodname_cli %} `api` 설명서](https://cli.github.com/manual/gh_api)를 참조하세요.

   ```shell
   gh api repos/octocat/Spoon-Knife/issues
   ```

### {% data variables.product.prodname_actions %}에서 {% data variables.product.prodname_cli %} 사용

{% data variables.product.prodname_actions %} 워크플로에서 {% data variables.product.prodname_cli %}를 사용할 수도 있습니다. 자세한 내용은 “[워크플로에서 GitHub CLI 사용](/actions/using-workflows/using-github-cli-in-workflows)”을 참조하세요.

`gh auth login` 명령을 사용하는 대신 액세스 토큰을 `GH_TOKEN`이라는 환경 변수로 전달합니다. {% data variables.product.prodname_dotcom %}에서는 토큰을 만드는 대신 기본 제공 `GITHUB_TOKEN`을 사용하는 것이 좋습니다. 가능하지 않은 경우 토큰을 비밀로 저장하고 아래 예제의 `GITHUB_TOKEN`을 비밀의 이름으로 바꿉니다. `GITHUB_TOKEN`에 대한 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication)”을 참조하세요. 비밀에 대한 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

```yaml
on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          gh api repos/octocat/Spoon-Knife/issues
```

{% data variables.product.prodname_github_app %}을 사용하여 인증하는 경우 워크플로 내에서 설치 액세스 토큰을 만들 수 있습니다.

1. {% data variables.product.prodname_github_app %}의 ID를 비밀로 저장합니다. 다음 예에서 `APP_ID`을 비밀의 이름으로 바꿉니다. 앱의 설정 페이지 또는 API를 통해 앱 ID를 찾을 수 있습니다. 자세한 내용은 REST API 설명서의 "[앱](/rest/apps/apps#get-an-app)"을 참조하세요. 비밀에 대한 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.
1. 앱에 대한 프라이빗 키를 생성합니다. 결과 파일의 내용을 비밀로 저장합니다. (`-----BEGIN RSA PRIVATE KEY-----` 및 `-----END RSA PRIVATE KEY-----`를 포함하여 파일의 전체 내용을 저장합니다.) 다음 예에서 `APP_PEM`을 비밀의 이름으로 바꿉니다. 자세한 내용은 “[{% data variables.product.prodname_github_apps %}에서 인증](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)”을 참조하세요.
1. 토큰을 생성하는 단계를 추가하고 `GITHUB_TOKEN` 대신 해당 토큰을 사용합니다. 이 토큰은 60분 후에 만료됩니다. 예를 들면 다음과 같습니다.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Use API
        env:
          GH_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          gh api repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

## JavaScript 사용 시작

Octokit.js를 사용하여 JavaScript 스크립트에서 {% data variables.product.prodname_dotcom %} REST API와 상호 작용할 수 있습니다. 자세한 내용은 [Octokit.js 추가 정보](https://github.com/octokit/octokit.js/#readme)를 참조하세요.

### Octokit.js 사용

1. 액세스 토큰을 만듭니다. 예를 들어 {% data variables.product.pat_generic %} 또는 {% data variables.product.prodname_github_app %} 사용자-서버 액세스 토큰을 만듭니다. 자세한 내용은 "[{% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" 또는 "[GitHub 앱에 대한 사용자 식별 및 권한 부여](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)"를 참조하세요.

   {% warning %}

   **경고**: 액세스 토큰을 암호와 같이 취급하세요.

   토큰을 안전하게 유지하기 위해 비밀로 저장하고 {% data variables.product.prodname_actions %}를 통해 스크립트를 실행할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에서 Octokit.js 사용](#using-octokitjs-in-github-actions)” 섹션을 참조하세요.

   {%- ifversion fpt or ghec %}

   또한 토큰을 {% data variables.product.prodname_codespaces %} 비밀로 저장하고 {% data variables.product.prodname_codespaces %}에서 스크립트를 실행할 수도 있습니다. 자세한 내용은 “[codespace에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”를 참조하세요.{% endif %}

   이러한 옵션을 사용할 수 없는 경우 [1Password CLI](https://developer.1password.com/docs/cli/secret-references/)와 같은 다른 서비스를 사용하여 토큰을 안전하게 저장하는 것이 좋습니다.

   {% endwarning %}

1. `octokit`설치 예들 들어 `npm install octokit`입니다. `octokit`를 설치 또는 로드하는 다른 방법은 [Octokit.js 추가 정보](https://github.com/octokit/octokit.js/#readme)를 참조하세요.
1. 스크립트로 `octokit`를 가져옵니다. 예들 들어 `import { Octokit } from "octokit";`입니다. `octokit`를 가져오는 다른 방법은 [the Octokit.js 추가 정보](https://github.com/octokit/octokit.js/#readme)를 참조하세요.
1. 토큰을 사용하여 `Octokit`의 인스턴스를 만듭니다. `YOUR-TOKEN`을 실제 토큰으로 바꿉니다.

   ```javascript
   const octokit = new Octokit({
     auth: 'YOUR-TOKEN'
   });
   ```

1. `octokit.request`를 사용하여 요청을 실행합니다. HTTP 메서드와 경로를 첫 번째 인수로 보냅니다. 개체의 경로, 쿼리 및 본문 매개 변수를 두 번째 인수로 지정합니다. 예를 들어 다음 요청에서 HTTP 메서드는 `GET`이며, 경로는 `/repos/{owner}/{repo}/issues`이고 매개 변수는 `owner: "octocat"` 및 `repo: "Spoon-Knife"`입니다.

   ```javascript
   await octokit.request("GET /repos/{owner}/{repo}/issues", {
     owner: "octocat",
     repo: "Spoon-Knife",
   });
   ```

### {% data variables.product.prodname_actions %}에서 Octokit.js 사용

{% data variables.product.prodname_actions %} 워크플로에서 JavaScript 스크립트를 실행할 수도 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”을 참조하세요.

{% data variables.product.prodname_dotcom %}에서는 토큰을 만드는 대신 기본 제공 `GITHUB_TOKEN`을 사용하는 것이 좋습니다. 가능하지 않은 경우 토큰을 비밀로 저장하고 아래 예제의 `GITHUB_TOKEN`을 비밀의 이름으로 바꿉니다. `GITHUB_TOKEN`에 대한 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication)”을 참조하세요. 비밀에 대한 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

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
    permissions:
      issues: read
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
        run: |
          node .github/actions-scripts/use-the-api.mjs
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

JavaScript 스크립트 예제(파일 경로: `.github/actions-scripts/use-the-api.mjs`):

```javascript
import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: process.env.TOKEN
});

try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "octocat",
      repo: "Spoon-Knife",
    });

  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}
```

{% data variables.product.prodname_github_app %}을 사용하여 인증하는 경우 워크플로 내에서 설치 액세스 토큰을 만들 수 있습니다.

1. {% data variables.product.prodname_github_app %}의 ID를 비밀로 저장합니다. 다음 예에서 `APP_ID`을 비밀의 이름으로 바꿉니다. 앱의 설정 페이지 또는 앱 API를 통해 앱 ID를 찾을 수 있습니다. 자세한 내용은 “[앱](/rest/apps/apps#get-an-app)”을 참조하세요. 비밀에 대한 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.
1. 앱에 대한 프라이빗 키를 생성합니다. 결과 파일의 내용을 비밀로 저장합니다. (`-----BEGIN RSA PRIVATE KEY-----` 및 `-----END RSA PRIVATE KEY-----`를 포함하여 파일의 전체 내용을 저장합니다.) 다음 예에서 `APP_PEM`을 비밀의 이름으로 바꿉니다. 자세한 내용은 “[{% data variables.product.prodname_github_apps %}에서 인증](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)”을 참조하세요.
1. 토큰을 생성하는 단계를 추가하고 `GITHUB_TOKEN` 대신 해당 토큰을 사용합니다. 이 토큰은 60분 후에 만료됩니다. 예를 들면 다음과 같습니다.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
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

      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Run script
        run: |
          node .github/actions-scripts/use-the-api.mjs
        env:
          TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

{% endjavascript %}

{% curl %}

## cURL 사용 시작

### 명령줄에서 cURL 사용

{% note %}

**참고:** 명령줄에서 API 요청을 만들려면 {% data variables.product.prodname_dotcom %}에서 인증 및 요청을 간소화하는 {% data variables.product.prodname_cli %}를 사용하는 것이 좋습니다. {% data variables.product.prodname_cli %}를 사용하여 REST API를 시작하는 방법에 대한 자세한 내용은 이 문서의 {% data variables.product.prodname_cli %} 버전을 참조하세요.

{% endnote %}

1. cURL이 컴퓨터에 아직 설치되어 있지 않은 경우 cURL을 설치합니다. cURL이 설치되어 있는지 확인하려면 명령줄에서 `curl --version`을 실행합니다. 출력이 cURL 버전에 대한 정보인 경우 cURL이 설치된 것입니다. `command not found: curl`와 유사한 메시지가 표시되면 cURL을 다운로드하여 설치해야 합니다. 자세한 내용은 [cURL 프로젝트 다운로드 페이지](https://curl.se/download.html)를 참조하세요.
1. 액세스 토큰을 만듭니다. 예를 들어 {% data variables.product.pat_generic %} 또는 {% data variables.product.prodname_github_app %} 사용자-서버 액세스 토큰을 만듭니다. 자세한 내용은 "[{% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" 또는 "[GitHub 앱에 대한 사용자 식별 및 권한 부여](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)"를 참조하세요.

   {% warning %}

   **경고**: 액세스 토큰을 암호와 같이 취급하세요.

   {%- ifversion fpt or ghec %}

   토큰을 안전하게 유지하기 위해 토큰을 {% data variables.product.prodname_codespaces %} 비밀로 저장하고 {% data variables.product.prodname_codespaces %}를 통해 명령줄을 사용할 수 있습니다. 자세한 내용은 “[codespace에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”를 참조하세요.{% endif %}

   cURL 대신 {% data variables.product.prodname_cli %}를 사용할 수도 있습니다. {% data variables.product.prodname_cli %}가 대신 인증을 처리합니다. 자세한 내용은 이 페이지의 {% data variables.product.prodname_cli %} 버전을 참조하세요.

   이러한 옵션을 사용할 수 없는 경우 [1Password CLI](https://developer.1password.com/docs/cli/secret-references/)와 같은 다른 서비스를 사용하여 토큰을 안전하게 저장하는 것이 좋습니다.

   {% endwarning %}

1. `cURL` 명령을 사용하여 요청을 수행합니다. `Authorization` 헤더로 토큰을 전달합니다. `YOUR-TOKEN`을 실제 토큰으로 바꿉니다.

   ```shell
   curl --request GET \
   --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer YOUR-TOKEN"
   ```

   {% note %}

   **참고:** {% data reusables.getting-started.bearer-vs-token %}

   {% endnote %}

### {% data variables.product.prodname_actions %}에서 cURL 사용

{% data variables.product.prodname_actions %} 워크플로에서도 cURL을 사용할 수 있습니다.

{% data variables.product.prodname_dotcom %}에서는 토큰을 만드는 대신 기본 제공 `GITHUB_TOKEN`을 사용하는 것이 좋습니다. 가능하지 않은 경우 토큰을 비밀로 저장하고 아래 예제의 `GITHUB_TOKEN`을 비밀의 이름으로 바꿉니다. `GITHUB_TOKEN`에 대한 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication)”을 참조하세요. 비밀에 대한 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

```yaml
on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
          --header "Accept: application/vnd.github+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

{% data variables.product.prodname_github_app %}을 사용하여 인증하는 경우 워크플로 내에서 설치 액세스 토큰을 만들 수 있습니다.

1. {% data variables.product.prodname_github_app %}의 ID를 비밀로 저장합니다. 다음 예에서 `APP_ID`을 비밀의 이름으로 바꿉니다. 앱의 설정 페이지 또는 앱 API를 통해 앱 ID를 찾을 수 있습니다. 자세한 내용은 “[앱](/rest/apps/apps#get-an-app)”을 참조하세요. 비밀에 대한 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.
1. 앱에 대한 프라이빗 키를 생성합니다. 결과 파일의 내용을 비밀로 저장합니다. (`-----BEGIN RSA PRIVATE KEY-----` 및 `-----END RSA PRIVATE KEY-----`를 포함하여 파일의 전체 내용을 저장합니다.) 다음 예에서 `APP_PEM`을 비밀의 이름으로 바꿉니다. 자세한 내용은 “[{% data variables.product.prodname_github_apps %}에서 인증](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)”을 참조하세요.
1. 토큰을 생성하는 단계를 추가하고 `GITHUB_TOKEN` 대신 해당 토큰을 사용합니다. 이 토큰은 60분 후에 만료됩니다. 예를 들면 다음과 같습니다.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Use API
        env:
          GH_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
          --header "Accept: application/vnd.github+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

{% endcurl %}

## 다음 단계

자세한 내용은 “[REST API 시작](/rest/guides/getting-started-with-the-rest-api)”을 참조하세요.
