---
title: GitHub REST API のクイックスタート
intro: '{% data variables.product.prodname_dotcom %} REST API の使用を開始する方法について説明します。'
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
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192882'
---
この記事では、{% data variables.product.prodname_cli %}、JavaScript、または cURL を使用して、{% data variables.product.prodname_dotcom %} REST API の使用をすばやく開始する方法について説明します。 詳しいガイドについては、「[REST API を使用した作業の開始](/rest/guides/getting-started-with-the-rest-api)」をご覧ください。

{% cli %}

## {% data variables.product.prodname_cli %} を使用した作業の開始

### コマンド ラインでの {% data variables.product.prodname_cli %} の使用

{% data variables.product.prodname_cli %} は、コマンド ラインから {% data variables.product.prodname_dotcom %} REST API を使用する方法として最も簡単です。

1. {% data variables.product.prodname_cli %} をまだインストールしていない場合は、インストールしてください。 インストールの手順については、[{% data variables.product.prodname_cli %} リポジトリ](https://github.com/cli/cli#installation)を参照してください。
1. `auth login` サブコマンドを使用して、{% data variables.product.prodname_cli %} に対する認証を行います。 詳しくは、[{% data variables.product.prodname_cli %}`auth login` のドキュメント](https://cli.github.com/manual/gh_auth_login)を参照してください。

   ```shell
   gh auth login
   ```

1. `api` サブコマンドを使用して API 要求を行います。 詳しくは、[{% data variables.product.prodname_cli %}`api` のドキュメント](https://cli.github.com/manual/gh_api)を参照してください。

   ```shell
   gh api repos/octocat/Spoon-Knife/issues
   ```

### {% data variables.product.prodname_actions %} での {% data variables.product.prodname_cli %} の使用

{% data variables.product.prodname_actions %} ワークフローでは、{% data variables.product.prodname_cli %} を使用することもできます。 詳しくは、「[ワークフローでの GitHub CLI の使用](/actions/using-workflows/using-github-cli-in-workflows)」を参照してください。

`gh auth login` コマンドを使用するのでなく、アクセス トークンを `GH_TOKEN` という環境変数として渡します。 {% data variables.product.prodname_dotcom %} では、トークンを作成するのでなく組み込みの `GITHUB_TOKEN` を使用することをお勧めしています。 これができない場合は、ご利用のトークンをシークレットとして格納し、次の例で `GITHUB_TOKEN` を実際のシークレットの名前に置き換えます。 `GITHUB_TOKEN` について詳しくは、「[自動トークン認証](/actions/security-guides/automatic-token-authentication)」を参照してください。 シークレットについて詳しくは、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

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

{% data variables.product.prodname_github_app %} を使用して認証する場合は、ワークフロー内にインストール アクセス トークンを作成します。

1. {% data variables.product.prodname_github_app %} の ID をシークレットとして保存します。 以下の例では、`APP_ID` をシークレットの名前に置き換えます。 アプリ ID は、アプリの設定ページで、あるいは API を通じて確認できます。 詳しくは、REST API のドキュメントの「[アプリ](/rest/apps/apps#get-an-app)」をご覧ください。 シークレットについて詳しくは、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。
1. アプリケーションの秘密鍵を生成してください。 作成されたファイルの内容をシークレットとして保存します。 (`-----BEGIN RSA PRIVATE KEY-----` および `-----END RSA PRIVATE KEY-----` を含め、ファイルの内容全体を保存します)。以下の例では、`APP_PEM` をシークレットの名前に置き換えます。 詳細については、「[{% data variables.product.prodname_github_apps %} による認証](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)」を参照してください。
1. トークンを生成するステップを追加し、`GITHUB_TOKEN` ではなくそのトークンを使用します。 このトークンは 60 分後に期限切れになるので注意してください。 次に例を示します。

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

## JavaScript の使用を開始する

Octokit.js を使用すれば、JavaScript スクリプト内で {% data variables.product.prodname_dotcom %} REST API とやりとりすることができます。 詳しくは、[Octokit.js の README](https://github.com/octokit/octokit.js/#readme) を参照してください。

### Octokit.js の使用

1. アクセス トークンを作成します。 たとえば、{% data variables.product.pat_generic %} または {% data variables.product.prodname_github_app %} のユーザーからサーバーへのアクセス トークンを作成します。 詳しい情報については、「[{% data variables.product.pat_generic %} の作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)」か「[GitHub App のユーザーの特定と認可](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)」を参照してください。

   {% warning %}

   **警告**: アクセス トークンはパスワードと同様に扱ってください。

   トークンを安全な状態に保つには、ご利用のトークンをシークレットとして格納し、{% data variables.product.prodname_actions %} を介してスクリプトを実行します。 詳しくは、「[{% data variables.product.prodname_actions %} での Octokit.js の使用](#using-octokitjs-in-github-actions)」セクションを参照してください。

   {%- ifversion fpt or ghec %}

   ご利用のトークンを {% data variables.product.prodname_codespaces %} シークレットとして格納し、スクリプトを {% data variables.product.prodname_codespaces %} で実行することもできます。 詳しくは、「[codespaces の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」を参照してください。{% endif %}

   これらのオプションが使用できない場合は、[1Password CLI](https://developer.1password.com/docs/cli/secret-references/) などの別のサービスを使用してトークンを安全に格納することを検討してください。

   {% endwarning %}

1. `octokit`をインストールする。 たとえば、「 `npm install octokit` 」のように入力します。 `octokit` をインストールまたは読み込むための他の方法については、[Octokit.js の README](https://github.com/octokit/octokit.js/#readme) を参照してください。
1. スクリプトで `octokit` をインポートします。 たとえば、「 `import { Octokit } from "octokit";` 」のように入力します。 その他の `octokit` のインポート方法については、[Octokit.js の README](https://github.com/octokit/octokit.js/#readme) を参照してください。
1. 実際のトークンを指定して `Octokit` のインスタンスを作成します。 `YOUR-TOKEN` を実際のトークンに置き換えます。

   ```javascript
   const octokit = new Octokit({
     auth: 'YOUR-TOKEN'
   });
   ```

1. `octokit.request` を使用して、要求を実行します。 HTTP メソッドとパスを最初の引数として送信します。 オブジェクト内のパス、クエリ、および本文のパラメーターを 2 番目の引数として指定します。 たとえば、次の要求では、HTTP メソッドは `GET`、パスは `/repos/{owner}/{repo}/issues`、パラメーターは `owner: "octocat"` および `repo: "Spoon-Knife"` となっています。

   ```javascript
   await octokit.request("GET /repos/{owner}/{repo}/issues", {
     owner: "octocat",
     repo: "Spoon-Knife",
   });
   ```

### {% data variables.product.prodname_actions %} での Octokit.js の使用

また、{% data variables.product.prodname_actions %} ワークフローで JavaScript スクリプトを実行することもできます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)」を参照してください。

{% data variables.product.prodname_dotcom %} では、トークンを作成するのでなく組み込みの `GITHUB_TOKEN` を使用することをお勧めしています。 これができない場合は、ご利用のトークンをシークレットとして格納し、次の例で `GITHUB_TOKEN` を実際のシークレットの名前に置き換えます。 `GITHUB_TOKEN` について詳しくは、「[自動トークン認証](/actions/security-guides/automatic-token-authentication)」を参照してください。 シークレットについて詳しくは、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

次のワークフロー例を参照してください。

1. リポジトリのコンテンツをチェックアウトする
1. Node.js を設定する
1. `octokit` をインストールする
1. `GITHUB_TOKEN` の値を、`TOKEN` と呼ばれる環境変数として格納し、`.github/actions-scripts/use-the-api.mjs` を実行する。これにより、その環境変数に `process.env.TOKEN` としてアクセスできます。

ワークフローの例:

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

ファイル パス `.github/actions-scripts/use-the-api.mjs` を含む JavaScript スクリプトの例:

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

{% data variables.product.prodname_github_app %} を使用して認証する場合は、ワークフロー内にインストール アクセス トークンを作成します。

1. {% data variables.product.prodname_github_app %} の ID をシークレットとして保存します。 以下の例では、`APP_ID` をシークレットの名前に置き換えます。 アプリケーションIDは、アプリケーションの設定ページで、あるいはアプリケーションのAPIを通じて確認できます。 詳細については、「[アプリ](/rest/apps/apps#get-an-app)」を参照してください。 シークレットについて詳しくは、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。
1. アプリケーションの秘密鍵を生成してください。 作成されたファイルの内容をシークレットとして保存します。 (`-----BEGIN RSA PRIVATE KEY-----` および `-----END RSA PRIVATE KEY-----` を含め、ファイルの内容全体を保存します)。以下の例では、`APP_PEM` をシークレットの名前に置き換えます。 詳細については、「[{% data variables.product.prodname_github_apps %} による認証](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)」を参照してください。
1. トークンを生成するステップを追加し、`GITHUB_TOKEN` ではなくそのトークンを使用します。 このトークンは 60 分後に期限切れになるので注意してください。 次に例を示します。

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

## cURL の使用を開始する

### コマンド ラインでの cURL の使用

{% note %}

**注:** コマンド ラインから API 要求を行う場合、{% data variables.product.prodname_dotcom %} では、{% data variables.product.prodname_cli %} を使用することをお勧めします。これにより、認証と要求が簡略化されます。 {% data variables.product.prodname_cli %} を使用して REST API の使用を開始する方法について詳しくは、この記事の {% data variables.product.prodname_cli %} バージョンを参照してください。

{% endnote %}

1. cURL がまだコンピューターにインストールされていない場合は、cURL をインストールします。 cURL がインストールされているかどうかを確認するには、コマンド ラインで `curl --version` を実行します。 出力が cURL バージョンに関する情報である場合は、cURL がインストールされています。 `command not found: curl` のようなメッセージが表示された場合は、cURL をダウンロードしてインストールする必要があります。 詳しくは、[cURL プロジェクトのダウンロードに関するページ](https://curl.se/download.html)を参照してください。
1. アクセス トークンを作成します。 たとえば、{% data variables.product.pat_generic %} または {% data variables.product.prodname_github_app %} のユーザーからサーバーへのアクセス トークンを作成します。 詳しい情報については、「[{% data variables.product.pat_generic %} の作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)」か「[GitHub App のユーザーの特定と認可](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)」を参照してください。

   {% warning %}

   **警告**: アクセス トークンは、パスワードと同様の扱いとしてください。

   {%- ifversion fpt or ghec %}

   トークンを安全な状態に保つには、トークンを {% data variables.product.prodname_codespaces %} シークレットとして格納し、{% data variables.product.prodname_codespaces %} を介してコマンド ラインを使用します。 詳しくは、「[codespaces の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」を参照してください。{% endif %}

   cURL ではなく {% data variables.product.prodname_cli %} を使用することもできます。 認証は {% data variables.product.prodname_cli %} によって自動的に処理されます。 詳しくは、このページの {% data variables.product.prodname_cli %} バージョンを参照してください。

   これらのオプションが使用できない場合は、[1Password CLI](https://developer.1password.com/docs/cli/secret-references/) などの別のサービスを使用してトークンを安全に格納することを検討してください。

   {% endwarning %}

1. `cURL` コマンドを使用して要求を行います。 `Authorization` ヘッダーにトークンを渡します。 `YOUR-TOKEN` を実際のトークンに置き換えます。

   ```shell
   curl --request GET \
   --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer YOUR-TOKEN"
   ```

   {% note %}

   **注:** {% data reusables.getting-started.bearer-vs-token %}

   {% endnote %}

### {% data variables.product.prodname_actions %} での cURL の使用

{% data variables.product.prodname_actions %} ワークフローでも cURL を使用できます。

{% data variables.product.prodname_dotcom %} では、トークンを作成するのでなく組み込みの `GITHUB_TOKEN` を使用することをお勧めしています。 これができない場合は、ご利用のトークンをシークレットとして格納し、次の例で `GITHUB_TOKEN` を実際のシークレットの名前に置き換えます。 `GITHUB_TOKEN` について詳しくは、「[自動トークン認証](/actions/security-guides/automatic-token-authentication)」を参照してください。 シークレットについて詳しくは、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

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

{% data variables.product.prodname_github_app %} を使用して認証する場合は、ワークフロー内にインストール アクセス トークンを作成します。

1. {% data variables.product.prodname_github_app %} の ID をシークレットとして保存します。 以下の例では、`APP_ID` をシークレットの名前に置き換えます。 アプリケーションIDは、アプリケーションの設定ページで、あるいはアプリケーションのAPIを通じて確認できます。 詳細については、「[アプリ](/rest/apps/apps#get-an-app)」を参照してください。 シークレットについて詳しくは、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。
1. アプリケーションの秘密鍵を生成してください。 作成されたファイルの内容をシークレットとして保存します。 (`-----BEGIN RSA PRIVATE KEY-----` および `-----END RSA PRIVATE KEY-----` を含め、ファイルの内容全体を保存します)。以下の例では、`APP_PEM` をシークレットの名前に置き換えます。 詳細については、「[{% data variables.product.prodname_github_apps %} による認証](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)」を参照してください。
1. トークンを生成するステップを追加し、`GITHUB_TOKEN` ではなくそのトークンを使用します。 このトークンは 60 分後に期限切れになるので注意してください。 次に例を示します。

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

## 次の手順

詳しいガイドについては、「[REST API を使用した作業の開始](/rest/guides/getting-started-with-the-rest-api)」をご覧ください。
