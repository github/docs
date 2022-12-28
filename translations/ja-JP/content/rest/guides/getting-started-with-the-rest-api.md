---
title: REST API を使用した作業の開始
intro: '{% data variables.product.prodname_dotcom %} REST API の使用方法について学習します。'
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
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184262'
---
## {% data variables.product.prodname_dotcom %} REST API について

この記事では、{% data variables.product.prodname_cli %}、JavaScript、または cURL を使う {% data variables.product.prodname_dotcom %} REST API の使用方法について説明します。 クイックスタート ガイドについては、「[GitHub REST API のクイックスタート](/rest/quickstart)」を参照してください。

REST API への要求を行うときは、HTTP メソッドとパスを指定します。 さらに、要求ヘッダーとパス、クエリ、または本文のパラメーターを指定することもできます。 API では、応答状態コードと応答ヘッダー、また場合によっては応答本文が返されます。

REST API リファレンス ドキュメントでは、すべての操作の HTTP メソッド、パス、およびパラメーターについて説明します。 また、各操作の要求と応答の例も表示されます。 詳しくは、[REST のリファレンス ドキュメント](/rest)をご覧ください。

{% data variables.product.company_short %} の API について詳しくは、「[{% data variables.product.company_short %} の API について](/developers/overview/about-githubs-apis)」を参照してください。

## 要求を行う

要求を行うには、まず HTTP メソッドと、使用する操作のパスを見つけます。 たとえば、"Octocat の取得" 操作では、`GET` メソッドと `/octocat` パスが使用されます。 この操作の完全なリファレンス ドキュメントについては、「[Octocat の取得](/rest/meta#get-octocat)」を参照してください。

{% cli %}

{% note %}

**注**: {% data variables.product.prodname_cli %} の例のコマンドを使用するには、{% data variables.product.prodname_cli %} をインストールする必要があります。 インストールの手順については、[{% data variables.product.prodname_cli %} リポジトリ](https://github.com/cli/cli#installation)を参照してください。

{% endnote %}

まだ {% data variables.product.prodname_cli %} に対して認証されていない場合は、要求を行う前に `gh auth login` サブコマンドを使用して認証する必要があります。 詳しくは、「[認証](#authenticating)」を参照してください。

{% data variables.product.prodname_cli %} を使用して要求を行うには、パスと共に `api` サブコマンドを使用します。 メソッドを指定するには、`--method` または `-X` フラグを使用します。

```shell
gh api /octocat --method GET
```

{% endcli %}

{% javascript %}

{% note %}

**注**: JavaScript の例で使用されている Octokit.js ライブラリを使うには、`octokit` をインストールしてインポートする必要があります。 詳しくは、[Octokit.js の README](https://github.com/octokit/octokit.js/#readme) を参照してください。

{% endnote %}

JavaScript を使用して要求を行うために、Octokit.js を使用できます。 詳しくは、[Octokit.js の README](https://github.com/octokit/octokit.js/#readme) を参照してください。

まず、`Octokit` のインスタンスを作成します。{% ifversion ghes or ghae %}ベース URL を `{% data variables.product.api_url_code %}` に設定します。 `[hostname]` を {% data variables.location.product_location %}の名前に置き換えます。{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});
```

その後、`request` メソッドを使用して要求を行います。 HTTP メソッドとパスを最初の引数として渡します。

```javascript
await octokit.request("GET /octocat", {});
```

{% endjavascript %}

{% curl %}

パスの前に {% data variables.product.prodname_dotcom %} REST API のベース URL `{% data variables.product.api_url_code %}` を付加し、完全な URL (`{% data variables.product.api_url_code %}/octocat`) を取得します。{% ifversion ghes or ghae %}`[hostname]` は、{% data variables.location.product_location %} の名前に置き換えます。{% endif %}

コマンド ラインで `curl` コマンドを使用します。 `--request` または `-X` フラグを使用し、その後に HTTP メソッドを指定します。 `--url` フラグを使用し、その後に完全な URL を指定します。

```shell
curl --request GET \
--url "https://api.github.com/octocat"
```

{% note %}

**注**: "コマンドが見つかりません: curl" のようなメッセージが表示される場合は、cURL をダウンロードしてインストールする必要があることがあります。 詳しくは、[cURL プロジェクトのダウンロード ページ](https://curl.se/download.html)を参照してください。

{% endnote %}

{% endcurl %}

認証、パラメーターの送信、応答の使用方法について学習する場合は、引き続きお読みください。

## 認証

多くの操作では、認証が必要であるか、認証されている場合は追加情報が返されます。 また、認証されると、1 時間あたりにさらに多くの要求を行うことができます。{% cli %}一部の REST API 操作には認証なしでアクセスできますが、`api` サブコマンドを使用するには、{% data variables.product.prodname_cli %} に対して認証を行う必要があります。{% endcli %}

### トークンについて

トークンを追加することで、要求を認証できます。

個人用に {% data variables.product.company_short %} REST API を使用する場合は、{% data variables.product.pat_generic %}を作成できます。 この記事で使用する REST API 操作には、{% data variables.product.pat_v1_plural %}{% ifversion pat-v2 %} の `repo` スコープ、または特に明記されていない限り、{% data variables.product.pat_v2 %}のパブリック リポジトリへの読み取り専用アクセスが必要です{% endif %}。 その他の操作には、異なるスコープ{% ifversion pat-v2%}またはアクセス許可が必要です{% endif %}。 {% data variables.product.pat_generic %}の作成について詳しくは、「[{% data variables.product.pat_generic %}の作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)」をご覧ください。

Organization または他のユーザーの代わりに API を使用する場合、{% data variables.product.company_short %} では、{% data variables.product.prodname_github_app %} の使用が推奨されます。 操作が {% data variables.product.prodname_github_apps %} で使用できる場合、その操作の REST リファレンス ドキュメントには "GitHub Apps で動作する" と示されます。 この記事で使用される REST API 操作には、{% data variables.product.prodname_github_apps %} の `issues` の読み取りおよび書き込みアクセス許可が必要です。 その他の操作では、異なるアクセス許可が必要な場合があります。 詳しくは、「[GitHub App を作成する](/developers/apps/building-github-apps/creating-a-github-app)」、「[GitHub Apps による認証](/developers/apps/building-github-apps/authenticating-with-github-apps)」、「[GitHub アプリのユーザーを特定および認可する](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)」を参照してください。

{% data variables.product.prodname_actions %} ワークフローで API を使用する場合、{% data variables.product.company_short %} では、トークンを作成するのではなく、組み込み `GITHUB_TOKEN` で認証することが推奨されます。 `permissions` キーを使用して、`GITHUB_TOKEN` へのアクセス許可を付与できます。 詳しくは、「[自動トークン認証](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)」を参照してください。

### 認証の例

{% cli %}

{% data variables.product.prodname_cli %} では、アクセス トークンを事前に作成する必要はありません。 `auth login` サブコマンドを使用して、{% data variables.product.prodname_cli %} に対する認証を行います。

```shell
gh auth login
```

`--scopes` フラグを使用して、必要なスコープを指定できます。 作成したトークンで認証する場合は、`--with-token` フラグを使用できます。 詳しくは、[{% data variables.product.prodname_cli %} `auth login` ドキュメント](https://cli.github.com/manual/gh_auth_login)を参照してください。

{% endcli %}

{% javascript %}

{% warning %}

**警告**: アクセス トークンは、パスワードと同様の扱いとしてください。

トークンを安全な状態に保つために、トークンをシークレットとして格納し、{% data variables.product.prodname_actions %} を使用してスクリプトを実行できます。 詳細については、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

{% ifversion ghec or fpt %}また、トークンを {% data variables.product.prodname_codespaces %} シークレットとして格納し、{% data variables.product.prodname_codespaces %} でスクリプトを実行することもできます。 詳しくは、「[codespaces の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」を参照してください。{% endif %}

これらのオプションが使用できない場合は、[1Password CLI](https://developer.1password.com/docs/cli/secret-references/) などの別のサービスを使用してトークンを安全に格納することを検討してください。

{% endwarning %}

Octokit.js ライブラリで認証するには、`Octokit` のインスタンスの作成時にトークンを渡すことができます。 `YOUR-TOKEN` をお使いのトークンに置き換えます。{% ifversion ghes or ghae %}`[hostname]` をお使いの {% data variables.location.product_location %}の名前に置き換えます。{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: 'YOUR-TOKEN',
});
```

{% endjavascript %}

{% curl %}

{% warning %}

**警告**: アクセス トークンはパスワードと同様に扱ってください。

アカウントを安全な状態に保てるように、cURL の代わりに {% data variables.product.prodname_cli %} を使用できます。 {% data variables.product.prodname_cli %} で自動的に認証が行われます。 詳しくは、このページの {% data variables.product.prodname_cli %} バージョンを参照してください。

{% ifversion ghec or fpt %}また、トークンを {% data variables.product.prodname_codespaces %} シークレットとして格納し、{% data variables.product.prodname_codespaces %} を介してコマンド ラインを使用することもできます。 詳しくは、「[codespaces の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」を参照してください。{% endif %}

これらのオプションが使用できない場合は、[1Password CLI](https://developer.1password.com/docs/cli/secret-references/) などの別のサービスを使用してトークンを安全に格納することを検討してください。

{% endwarning %}

cURL では、トークンを含む `Authorization` ヘッダーを送信します。 `YOUR-TOKEN` は実際のトークンに置き換えてください。

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% note %}

**注:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

{% endcurl %}

### {% data variables.product.prodname_actions %} の認証例

{% cli %}

`run` キーワードを使用して、{% data variables.product.prodname_actions %} ワークフローで {% data variables.product.prodname_cli %} コマンドを実行することもできます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)」を参照してください。

`gh auth login` コマンドを使用するのでなく、トークンを `GH_TOKEN` という環境変数として渡します。 {% data variables.product.prodname_dotcom %} では、トークンを作成するのではなく、組み込みの `GITHUB_TOKEN` で認証することが推奨されます。 これができない場合は、ご利用のトークンをシークレットとして格納し、次の例で `GITHUB_TOKEN` を自分のシークレットの名前に置き換えます。 `GITHUB_TOKEN` について詳しくは、「[自動トークン認証](/actions/security-guides/automatic-token-authentication)」を参照してください。 シークレットについて詳しくは、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

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

`run` キーワードを使用して、{% data variables.product.prodname_actions %} ワークフローで JavaScript スクリプトを実行することもできます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)」を参照してください。

{% data variables.product.prodname_dotcom %} では、トークンを作成するのではなく、組み込みの `GITHUB_TOKEN` で認証することが推奨されます。 これができない場合は、ご利用のトークンをシークレットとして格納し、次の例で `GITHUB_TOKEN` を自分のシークレットの名前に置き換えます。 `GITHUB_TOKEN` について詳しくは、「[自動トークン認証](/actions/security-guides/automatic-token-authentication)」を参照してください。 シークレットについて詳しくは、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

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

ファイル パス `.github/actions-scripts/use-the-api.mjs` を含む JavaScript スクリプトの例:

```javascript
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: process.env.TOKEN,
});

await octokit.request("GET /octocat", {});
```

スクリプトを別のファイルに格納し、ワークフローからスクリプトを実行するのではなく、`actions/github-script` アクションを使用してスクリプトを実行できます。 詳しくは、[actions/github-script README](https://github.com/actions/github-script) をご覧ください。

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

`run` キーワードを使用して、{% data variables.product.prodname_actions %} ワークフローで cURL コマンドを実行することもできます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)」を参照してください。

{% data variables.product.prodname_dotcom %} では、トークンを作成するのではなく、組み込みの `GITHUB_TOKEN` で認証することが推奨されます。 これができない場合は、ご利用のトークンをシークレットとして格納し、次の例で `GITHUB_TOKEN` を自分のシークレットの名前に置き換えます。 `GITHUB_TOKEN` について詳しくは、「[自動トークン認証](/actions/security-guides/automatic-token-authentication)」を参照してください。 シークレットについて詳しくは、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

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

## ヘッダーの使用

ほとんどの操作では、値が `application/vnd.github+json` の `Accept` ヘッダーを渡す必要があることを指定します。 他の操作では、別の `Accept` ヘッダーまたは追加のヘッダーを送信する必要があることを指定する場合があります。

{% cli %}

{% data variables.product.prodname_cli %} でヘッダーを送信するには、`--header` または `-H` フラグを使用し、その後にヘッダーを `key: value` 形式で指定します。

```shell
gh api --header 'Accept: application/vnd.github+json'{% ifversion api-date-versioning %} --header 'X-GitHub-Api-Version:{{ allVersions[currentVersion].latestApiVersion }}'{% endif %} --method GET /octocat
```

{% endcli %}

{% javascript %}

Octokit.js ライブラリでは自動的に `Accept: application/vnd.github+json` ヘッダーが渡されます。 追加のヘッダーまたは別の `Accept` ヘッダーを渡すには、`headers` メソッドに 2 番目の引数として渡されるオブジェクトに `request` プロパティを追加します。 `headers` プロパティの値は、キーがヘッダー名で値がヘッダー値のオブジェクトです。 たとえば、値が `text/plain` の `content-type` ヘッダーを送信する場合は次のようになります。

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

cURL でヘッダーを送信するには、`--header` または `-H` フラグを使用し、その後にヘッダーを `key: value` 形式で指定します。

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"{% ifversion api-date-versioning %}\
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"{% endif %}
```

{% endcurl %}

## パス パラメーターの使用

パス パラメーターでは操作パスを変更します。 たとえば、"リポジトリの issue の一覧表示" パスは `/repos/{owner}/{repo}/issues` となります。 中かっこ `{}` は、指定する必要があるパス パラメーターを示します。 この場合は、リポジトリの所有者と名前を指定する必要があります。 この操作のリファレンス ドキュメントについては、「[リポジトリの issue の一覧表示](/rest/issues/issues#list-repository-issues)」を参照してください。

{% cli %}

{% ifversion ghes or ghae %} {% note %}

**注:** このコマンドを {% data variables.location.product_location %}で動作させるには、`octocat/Spoon-Knife` を、{% data variables.location.product_location %}によって所有されているリポジトリに置き換えます。 それ以外の場合は、`gh auth login` コマンドを再実行して、{% data variables.location.product_location %}ではなく {% data variables.product.prodname_dotcom_the_website %} に対して認証を行います。

{% endnote %} {% endif %}

`octocat/Spoon-Knife` リポジトリから issue を取得するには、`{owner}` を `octocat`に、`{repo}` を `Spoon-Knife` に置き換えます。

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

{% ifversion ghes or ghae %} {% note %}

**注:** この例を {% data variables.location.product_location %}で動作させるには、`octocat/Spoon-Knife` を、{% data variables.location.product_location %} によって所有されているリポジトリに置き換えます。 それ以外の場合は、新しい `Octokit` インスタンスを作成、`baseURL` は指定しません。

{% endnote %} {% endif %}

Octokit.js で要求を行うと、パス パラメーターを含むすべてのパラメーターが、`request` メソッドの 2 番目の引数としてオブジェクトで渡されます。 `octocat/Spoon-Knife` リポジトリから issue を取得するには、`owner` を `octocat` として、`repo` を `Spoon-Knife` として指定します。

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife"
});
```

{% endjavascript %}

{% curl %}

`octocat/Spoon-Knife` リポジトリから issue を取得するには、`{owner}` を `octocat`に、`{repo}` を `Spoon-Knife` に置き換えます。 完全なパスを構築するには、{% data variables.product.prodname_dotcom %} REST API のベース URL `https://api.github.com` を先頭に付加します (`https://api.github.com/repos/octocat/Spoon-Knife/issues`)。

{% ifversion ghes or ghae %} {% note %}

**注:** {% data variables.product.prodname_dotcom_the_website %} の代わりに {% data variables.location.product_location %} を使用する場合は、`https://api.github.com` の代わりに `{% data variables.product.api_url_code %}`に使用し、`[hostname]` を {% data variables.location.product_location %}の名前に置き換えます。 `octocat/Spoon-Knife` を、{% data variables.location.product_location %}によって所有されているリポジトリに置き換えます。

{% endnote %} {% endif %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

この操作では、issue のリストと各 issue に関するデータが返されます。 応答の使用について詳しくは、「[応答の使用](#using-the-response)」セクションを参照してください。

## クエリ パラメーターの使用

クエリ パラメーターを使用すると、要求に対して返されるデータを制御できます。 たとえば、クエリ パラメーターを使用すると、応答のページ分割時に返される項目の数を指定できます。

既定では、"リポジトリの issue の一覧表示" 操作で 30 個の issue が返され、作成日の降順で並べ替えられます。 `per_page` パラメーターを使用すると、30 個ではなく 2 個の issue を返すことができます。 `sort` パラメーターを使用すると、作成日ではなく、最終更新日で issue を並べ替えることができます。 `direction` パラメーターを使用すると、降順ではなく昇順で結果を並べ替えることができます。

{% cli %}

{% data variables.product.prodname_cli %} の場合は、`-F` フラグを使用して、数値、ブール値、または null 値のパラメーターを渡します。 文字列パラメーターを渡すには、`-f` を使用します。

{% note %}

**注**: {% data variables.product.prodname_cli %} では現在、配列のパラメーターは受け入れられていません。 詳しくは、[こちらの issue](https://github.com/cli/cli/issues/1484) を参照してください。

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 -f sort=updated -f direction=asc
```

{% endcli %}

{% javascript %}

Octokit.js で要求を行うと、クエリ パラメーターを含むすべてのパラメーターが、`request` メソッドの 2 番目の引数としてオブジェクトで渡されます。

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

cURL の場合は、パスの末尾に `?` を追加してから、クエリ パラメーターの名前と値を `parameter_name=value` 形式で付加します。 複数のクエリ パラメーターは `&` で区切ります。

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2&sort=updated&direction=asc" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

この操作では、issue のリストと各 issue に関するデータが返されます。 応答の使用について詳しくは、「[応答の使用](#using-the-response)」セクションを参照してください。

## 本文パラメーターの使用

本文パラメーターを使用すると、API に追加のデータを渡すことができます。 たとえば、"issue の作成" 操作では、新しい issue のタイトルを指定する必要があります。 また、issue 本文に配置するテキストなど、他の情報を指定することもできます。 この操作の完全なリファレンス ドキュメントについては、「[issue の作成](/rest/issues/issues#create-an-issue)」を参照してください。

"issue の作成" 操作では、上記の例の "リポジトリの issue の一覧表示" 操作と同じパスが使用されますが、`GET` メソッドではなく `POST` メソッドが使用されます。

{% cli %}

{% data variables.product.prodname_cli %} の場合は、`-F` フラグを使用して、数値、ブール値、または null 値のパラメーターを渡します。 文字列パラメーターを渡すには、`-f` を使用します。

{% note %}

**注**: {% data variables.product.prodname_cli %} では現在、配列のパラメーターは受け入れられていません。 詳しくは、[こちらの issue](https://github.com/cli/cli/issues/1484) を参照してください。

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method POST /repos/octocat/Spoon-Knife/issues -f title="Created with the REST API" -f body="This is a test issue created by the REST API"
```

{% endcli %}

{% javascript %}

{% ifversion pat-v2 %}

{% note %}

{% data variables.product.pat_v2 %}を使用している場合は、`octocat/Spoon-Knife` を、自分が所有している、または自分がメンバーである Organization によって所有されているリポジトリに置き換える必要があります。 お使いのトークンは、リポジトリにアクセスできる必要があり、リポジトリの issue に対する読み取りと書き込みのアクセス許可が必要です。 リポジトリの作成について詳しくは、「[リポジトリの作成](/get-started/quickstart/create-a-repo)」を参照してください。 {% data variables.product.pat_v2 %}へのアクセスとアクセス許可の付与について詳しくは、「[{% data variables.product.pat_generic %}の作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。

{% endnote %}

{% endif %}

Octokit.js で要求を行うと、本文パラメーターを含むすべてのパラメーターが、`request` メソッドの 2 番目の引数としてオブジェクトで渡されます。

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

{% data variables.product.pat_v2 %}を使用している場合は、`octocat/Spoon-Knife` を、自分が所有している、または自分がメンバーである Organization によって所有されているリポジトリに置き換える必要があります。 お使いのトークンは、リポジトリにアクセスできる必要があり、リポジトリの issue に対する読み取りと書き込みのアクセス許可が必要です。 リポジトリの作成について詳しくは、「[リポジトリの作成](/get-started/quickstart/create-a-repo)」を参照してください。 {% data variables.product.pat_v2 %}へのアクセスとアクセス許可の付与について詳しくは、「[{% data variables.product.pat_generic %}の作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。

{% endnote %}

{% endif %}

cURL の場合は、`--data` フラグを使用して JSON オブジェクトで本文パラメーターを渡します。

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

この操作によって issue が作成され、新しい issue に関するデータが返されます。 応答で、issue の `html_url` を見つけ、ブラウザーでその issue に移動します。 応答の使用について詳しくは、「[応答の使用](#using-the-response)」セクションを参照してください。

## 応答の使用

### 応答コードとヘッダーについて

すべての要求で、応答の成功を示す HTTP 状態コードが返されます。 応答コードについて詳しくは、[MDN HTTP 応答状態コードに関するドキュメント](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)を参照してください。

さらに、応答には、応答の詳細を示すヘッダーが含まれます。 `X-` または `x-` で始まるものは、{% data variables.product.company_short %} のカスタム ヘッダーです。 たとえば、`x-ratelimit-remaining` と `x-ratelimit-reset` ヘッダーは、一定期間に行うことができる要求の数を示します。

{% cli %}

状態コードとヘッダーを表示するには、要求を送信するときに `--include` または `--i` フラグを使用します。

たとえば、次の要求があります。

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 --include
```

次のような応答コードとヘッダーが返されます。

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

この例では、応答コードは `200` で、要求が成功したことを示します。

{% endcli %}

{% javascript %}

Octokit.js で要求を行うと、`request` メソッドでは promise が返されます。 要求が成功した場合、promise は、応答のHTTP 状態コード (`status`) と応答ヘッダー (`headers`) を含むオブジェクトに解決されます。 エラーが発生した場合、promise は、応答のHTTP 状態コード (`status`) と応答ヘッダー (`response.headers`) を含むオブジェクトに解決されます。

`try/catch` ブロックを使用して、エラーが発生した場合にそれをキャッチできます。 たとえば、次のスクリプトの要求が成功した場合、そのスクリプトでは状態コードと `x-ratelimit-remaining` ヘッダーの値がログに記録されます。 要求が成功しなかった場合、スクリプトでは状態コード、`x-ratelimit-remaining` ヘッダーの値、およびエラー メッセージがログに記録されます。

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

状態コードとヘッダーを表示するには、要求を送信するときに `--include` または `--i` フラグを使用します。

たとえば、次の要求があります。

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--include
```

次のような応答コードとヘッダーが返されます。

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

この例では、応答コードは `200` で、要求が成功したことを示します。

{% endcurl %}

### 応答本文について

多くの操作で応答本文が返されます。 特に指定しない限り、応答本文は JSON 形式となります。 たとえば、この要求では、各 issue に関するデータと共に issue のリストが返されます。

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

必要な情報を指定する GraphQL API とは異なり、REST API では通常、必要以上の情報が返されます。 必要に応じて、応答を解析して特定の情報を引き出すことができます。

{% cli %}

たとえば、`>` を使用して、応答をファイルにリダイレクトできます。

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 > data.json
```

その後、jq を使用して、各 issue のタイトルと作成者 ID を取得できます。

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

前の 2 つのコマンドでは次のようなものが返されます。

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

jq について詳しくは、[jq のドキュメント](https://stedolan.github.io/jq/)と [jq play](https://jqplay.org/) を参照してください。

{% endcli %}

{% javascript %}

たとえば、各 issue のタイトルと作成者 ID を取得できます。

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

たとえば、`>` を使用して、応答をファイルにリダイレクトできます。

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" > data.json
```

その後、jq を使用して、各 issue のタイトルと作成者 ID を取得できます。

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

前の 2 つのコマンドでは次のようなものが返されます。

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

jq について詳しくは、[jq のドキュメント](https://stedolan.github.io/jq/)と [jq play](https://jqplay.org/) を参照してください。

{% endcurl %}

## 次の手順

この記事では、リポジトリの issue を一覧表示して作成する方法について説明しました。 さらに練習する場合は、issue にコメントを付けたり、issue のタイトルを編集したり、issue を閉じてみたりしてください。 これらの操作について詳しくは、「[issue コメントの作成](/rest/issues#create-an-issue-comment)」と「[issue の更新](/rest/issues/issues#update-an-issue)」を参照してください。

使用できる操作について詳しくは、[REST リファレンス ドキュメント](/rest)を参照してください。
