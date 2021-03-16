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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### `GITHUB_TOKEN`シークレットについて

{% data variables.product.prodname_dotcom %}は、ワークフローで利用する`GITHUB_TOKEN`シークレットを自動的に生成します。 この`GITHUB_TOKEN`は、ワークフローの実行内での認証に利用できます。

{% data variables.product.prodname_actions %}を有効化すると、{% data variables.product.prodname_dotcom %}はリポジトリに{% data variables.product.prodname_github_app %}をインストールします。 `GITHUB_TOKEN`シークレットは、{% data variables.product.prodname_github_app %}インストールアクセストークンです。 このインストールアクセストークンは、リポジトリにインストールされた{% data variables.product.prodname_github_app %}の代わりに認証を受けるために利用できます。 このトークンの権限は、ワークフローを含むリポジトリに限定されます。 詳しい情報については「[`GITHUB_TOKEN`の権限](#permissions-for-the-github_token)」を参照してください。

各ジョブの開始前に、{% data variables.product.prodname_dotcom %} はジョブのインストールアクセストークンをフェッチします。 トークンはジョブが終了すると期限切れになります。

このトークンは、`github.token`コンテキストにもあります。 詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)」を参照してください。

### ワークフロー内での`GITHUB_TOKEN`の利用

`GITHUB_TOKEN`シークレットを利用するためには、ワークフローファイル内で参照しなければなりません。 トークンの利用には、そのトークンを要求するアクションへ入力としてそのトークンを渡すことや、認証を受けた{% data variables.product.prodname_dotcom %} APIコールの発行が含まれます。

{% data reusables.github-actions.actions-do-not-trigger-workflows %}

#### `GITHUB_TOKEN`を入力として渡す例

以下のワークフローの例では[labeler action](https://github.com/actions/labeler)を使用しています。これには、`repo-token`入力パラメータの値として`GITHUB_TOKEN`を渡すことが必要です。

  {% raw %}
  ```yaml
  name: Pull request labeler
  on:
  - pull_request
  jobs:
    triage:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/labeler@v2
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
  ```
  {% endraw %}

#### REST APIの呼び出しの例

`GITHUB_TOKEN`を使って、認証されたAPIコールを発行できます。 以下のワークフローの例では、{% data variables.product.prodname_dotcom %} REST APIを使ってIssueを作成しています。

  {% raw %}
  ```yaml
  name: Create issue on commit
  on:
  - push
  jobs:
    create_commit:
      runs-on: ubuntu-latest
      steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url https://api.github.com/repos/${{ github.repository }}/issues \
          --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${{ github.sha }}",
            "body": "This issue was automatically created by the GitHub Action workflow **${{ github.workflow }}**. \n\n The commit hash was: _${{ github.sha }}_."
            }'
  ```
  {% endraw %}

### `GITHUB_TOKEN`の権限

{% data variables.product.prodname_github_apps %} が各権限でアクセスできる API エンドポイントについては、「[{% data variables.product.prodname_github_app %} の権限](/rest/reference/permissions-required-for-github-apps)」を参照してください。

| 権限                  | アクセスタイプ   | フォークしたリポジトリからのアクセス |
| ------------------- | --------- | ------------------ |
| actions             | 読み取り/書き込み | 読み取り               |
| checks              | 読み取り/書き込み | 読み取り               |
| contents            | 読み取り/書き込み | 読み取り               |
| deployments         | 読み取り/書き込み | 読み取り               |
| issues              | 読み取り/書き込み | 読み取り               |
| metadata            | 読み取り      | 読み取り               |
| packages            | 読み取り/書き込み | 読み取り               |
| pull requests       | 読み取り/書き込み | 読み取り               |
| repository projects | 読み取り/書き込み | 読み取り               |
| statuses            | 読み取り/書き込み | 読み取り               |

`GITHUB_TOKEN`で利用できない権限を要求するトークンが必要な場合は、個人アクセストークンを生成して、それをリポジトリのシークレットに設定できます。

1. リポジトリに対して適切な権限を持つトークンを利用もしくは生成してください。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
1. ワークフローのリポジトリにそのトークンをシークレットとして追加し、 {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}構文でそれを参照してください。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。
