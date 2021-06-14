---
title: ワークフローで認証する
intro: '{% data variables.product.prodname_dotcom %}は、{% data variables.product.prodname_actions %}の代理で認証を受けるために利用できるトークンを提供します。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### `GITHUB_TOKEN`シークレットについて

{% data variables.product.prodname_dotcom %}は、ワークフローで利用する`GITHUB_TOKEN`シークレットを自動的に生成します。 この`GITHUB_TOKEN`は、ワークフローの実行内での認証に利用できます。

{% data variables.product.prodname_actions %}を有効化すると、{% data variables.product.prodname_dotcom %}はリポジトリに{% data variables.product.prodname_github_app %}をインストールします。 `GITHUB_TOKEN`シークレットは、{% data variables.product.prodname_github_app %}インストールアクセストークンです。 このインストールアクセストークンは、リポジトリにインストールされた{% data variables.product.prodname_github_app %}の代わりに認証を受けるために利用できます このトークンの権限は、ワークフローを含むリポジトリに限定されます。 詳しい情報については「[`GITHUB_TOKEN`の権限](#permissions-for-the-github_token)」を参照してください。

各ジョブの開始前に、{% data variables.product.prodname_dotcom %} はジョブのインストールアクセストークンをフェッチします。 トークンはジョブが終了すると期限切れになります。

このトークンは、`github.token`コンテキストにもあります。 詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)」を参照してください。

### ワークフロー内での`GITHUB_TOKEN`の利用

シークレットを参照するための標準構文 {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} を使用して、`GITHUB_TOKEN` を使用できます。 `GITHUB_TOKEN` の使用例には、トークンをアクションへの入力として渡すことや、トークンを使用して認証済みの {% data variables.product.prodname_dotcom %} APIリクエストを作成することが含まれます。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
{% note %}

**重要:** ワークフローが `GITHUB_TOKEN` をアクションに明示的に渡さない場合でも、アクションは `github.token` コンテキストを介して `GITHUB_TOKEN` にアクセスできます。 セキュリティを強化するには、`GITHUB_TOKEN` に付与されるアクセス許可を制限することにより、アクションに必要な最小限のアクセスのみが含まれるようにする必要があります。 詳しい情報については「[`GITHUB_TOKEN`の権限](#permissions-for-the-github_token)」を参照してください。

{% endnote %}
{% endif %}

{% data reusables.github-actions.actions-do-not-trigger-workflows %}

#### 例 1: `GITHUB_TOKEN` を入力として渡す

以下のワークフローの例では[labeler action](https://github.com/actions/labeler)を使用しています。これには、`repo-token`入力パラメータの値として`GITHUB_TOKEN`を渡すことが必要です。

```yaml
name: Pull request labeler

on: [ pull_request_target ]

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}permissions:
  contents: read
  pull-requests: write

{% endif %}
jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/labeler@v2
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

#### 例 2: REST API を呼び出す

`GITHUB_TOKEN`を使って、認証されたAPIコールを発行できます。 以下のワークフローの例では、{% data variables.product.prodname_dotcom %} REST APIを使ってIssueを作成しています。

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_commit:
    runs-on: ubuntu-latest {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      issues: write {% endif %}
    steps:
      - name: Create issue using REST API
        run: {% raw %}
          curl --request POST \
          --url https://api.github.com/repos/${{ github.repository }}/issues \
          --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${{ github.sha }}",
            "body": "This issue was automatically created by the GitHub Action workflow **${{ github.workflow }}**. \n\n The commit hash was: _${{ github.sha }}_."
            }' \
          --fail{% endraw %}
```

### `GITHUB_TOKEN`の権限

{% data variables.product.prodname_github_apps %} が各権限でアクセスできる API エンドポイントについては、「[{% data variables.product.prodname_github_app %} の権限](/rest/reference/permissions-required-for-github-apps)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
次の表は、デフォルトで `GITHUB_TOKEN` に付与される権限を示しています。 Enterprise、Organization、またはリポジトリへの管理者権限を持つユーザは、デフォルトの権限を許可または制限のいずれかに設定できます。 Enterprise、Organization、またはリポジトリの `GITHUB_TOKEN` のデフォルトの権限を設定する方法については、「[Enterprise アカウントでの {% data variables.product.prodname_actions %} ポリシーの適用](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account#setting-the-permissions-of-the-github_token-for-your-enterprise)」、「[Organization の {% data variables.product.prodname_actions %} の無効化または制限](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)」、または「[リポジトリの {% data variables.product.prodname_actions %} の無効化または制限](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository#setting-the-permissions-of-the-github_token-for-a-repository)」を参照してください。

| スコープ                | デフォルトアクセス<br>(許可) | デフォルトアクセス<br>(制限付き) | フォークされたリポジトリ<br>による最大アクセス |
| ------------------- | ----------------------- | ------------------------- | ------------------------------- |
| actions             | 読み取り/書き込み               | なし                        | 読み取り                            |
| checks              | 読み取り/書き込み               | なし                        | 読み取り                            |
| contents            | 読み取り/書き込み               | 読み取り                      | 読み取り                            |
| deployments         | 読み取り/書き込み               | なし                        | 読み取り                            |
| issues              | 読み取り/書き込み               | なし                        | 読み取り                            |
| メタデータ               | 読み取り                    | 読み取り                      | 読み取り                            |
| パッケージ               | 読み取り/書き込み               | なし                        | 読み取り                            |
| pull requests       | 読み取り/書き込み               | なし                        | 読み取り                            |
| repository projects | 読み取り/書き込み               | なし                        | 読み取り                            |
| security events     | 読み取り/書き込み               | なし                        | 読み取り                            |
| statuses            | 読み取り/書き込み               | なし                        | 読み取り                            |
{% else %}
| スコープ                | アクセスタイプ   | フォークしたリポジトリからのアクセス |
| ------------------- | --------- | ------------------ |
| actions             | 読み取り/書き込み | 読み取り               |
| checks              | 読み取り/書き込み | 読み取り               |
| contents            | 読み取り/書き込み | 読み取り               |
| deployments         | 読み取り/書き込み | 読み取り               |
| issues              | 読み取り/書き込み | 読み取り               |
| メタデータ               | 読み取り      | 読み取り               |
| パッケージ               | 読み取り/書き込み | 読み取り               |
| pull requests       | 読み取り/書き込み | 読み取り               |
| repository projects | 読み取り/書き込み | 読み取り               |
| statuses            | 読み取り/書き込み | 読み取り               |
{% endif %}

{% data reusables.actions.workflow-runs-dependabot-note %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
#### `GITHUB_TOKEN` の権限を変更する

個々のワークフローファイルの `GITHUB_TOKEN` の権限を変更できます。 `GITHUB_TOKEN` のデフォルトの権限が制限付きの場合は、一部のアクションとコマンドを正常に実行できるように、権限を昇格させる必要がある場合があります。 デフォルトの権限が許可の場合は、ワークフローファイルを編集して、`GITHUB_TOKEN` から一部の権限を削除できます。 セキュリティを強化するには、`GITHUB_TOKEN` に必要最小限のアクセスを許可する必要があります。

`GITHUB_TOKEN` が特定のジョブに対して保持していた権限は、ワークフロー実行ログの [Set up job] セクションで確認できます。 詳しい情報については、「[ワークフロー実行ログを使用する](/actions/managing-workflow-runs/using-workflow-run-logs)」を参照してください。

ワークフローファイルの `permissions` キーを使用して、ワークフロー全体または個々のジョブの `GITHUB_TOKEN` の権限を変更できます。 これにより、ワークフローまたはジョブに最低限必要な権限を設定できます。 `permissions` キーを使用すると、常に読み取りアクセスを取得する `metadata` スコープを除いて、指定されていないすべての権限が権限なしに設定されます。

{% data reusables.github-actions.forked-write-permission %}

この記事の前半の 2 つのワークフロー例は、ワークフローレベルとジョブレベルで使用されている `permissions` キーを示しています。 [例 1](#example-1-passing-the-github_token-as-an-input) では、ワークフロー全体に対して 2 つの権限が指定されています。 [例 2](#example-2-calling-the-rest-api) では、1 つのジョブに対し 1 つのスコープに書き込み権限が付与されています。

`permissions` キーの詳細については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#permissions)」を参照してください。

##### ワークフロージョブの権限の計算方法

`GITHUB_TOKEN` の権限は、最初は Enterprise、Organization、またはリポジトリのデフォルトに設定されています。 デフォルトがこれらのレベルのいずれかで制限付きの権限に設定されている場合、これは関連するリポジトリに適用されます。 たとえば、Organization レベルで制限付きのデフォルトを選択した場合、その Organization 内のすべてのリポジトリは、制限付きの権限をデフォルトとして使用します。 次に、ワークフローファイル内の構成に基づいて、最初にワークフローレベルで、次にジョブレベルで権限が調整されます。 最後に、ワークフローがフォークされたリポジトリからのプルリクエストによってトリガーされ、[**Send write tokens to workflows from pull requests**](プルリクエストから書き込みトークンをワークフローに送信) 設定が選択されていない場合、権限が調整され、書き込み権限が読み取り専用に変更されます。

#### 追加の権限を付与する
{% endif %}

`GITHUB_TOKEN`で利用できない権限を要求するトークンが必要な場合は、個人アクセストークンを生成して、それをリポジトリのシークレットに設定できます。

1. リポジトリに対して適切な権限を持つトークンを利用もしくは生成してください。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
1. ワークフローのリポジトリにそのトークンをシークレットとして追加し、 {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}構文でそれを参照してください。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。
