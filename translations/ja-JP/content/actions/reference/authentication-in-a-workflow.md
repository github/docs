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

You can use the `GITHUB_TOKEN` by using the standard syntax for referencing secrets: {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Examples of using the `GITHUB_TOKEN` include passing the token as an input to an action, or using it to make an authenticated {% data variables.product.prodname_dotcom %} API request.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
{% note %}

**Important:** An action can access the `GITHUB_TOKEN` through the `github.token` context even if the workflow does not explicitly pass the `GITHUB_TOKEN` to the action. As a good security practice, you should always make sure that actions only have the minimum access they require by limiting the permissions granted to the `GITHUB_TOKEN`. 詳しい情報については「[`GITHUB_TOKEN`の権限](#permissions-for-the-github_token)」を参照してください。

{% endnote %}
{% endif %}

{% data reusables.github-actions.actions-do-not-trigger-workflows %}

#### Example 1: passing the `GITHUB_TOKEN` as an input

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

#### Example 2: calling the REST API

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
The following table shows the permissions granted to the `GITHUB_TOKEN` by default. People with admin permissions to an enterprise, organization, or repository can set the default permissions to be either permissive or restricted. For information on how to set the default permissions for the `GITHUB_TOKEN` for your enterprise, organization, or repository, see "[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account#setting-the-permissions-of-the-github_token-for-your-enterprise)," "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)," or "[Disabling or limiting {% data variables.product.prodname_actions %} for a repository](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository#setting-the-permissions-of-the-github_token-for-a-repository)."

| スコープ                | Default access<br>(permissive) | Default access<br>(restricted) | Maximum access<br>by forked repos |
| ------------------- | ------------------------------------ | ------------------------------------ | --------------------------------------- |
| actions             | 読み取り/書き込み                            | なし                                   | 読み取り                                    |
| checks              | 読み取り/書き込み                            | なし                                   | 読み取り                                    |
| contents            | 読み取り/書き込み                            | 読み取り                                 | 読み取り                                    |
| deployments         | 読み取り/書き込み                            | なし                                   | 読み取り                                    |
| issues              | 読み取り/書き込み                            | なし                                   | 読み取り                                    |
| メタデータ               | 読み取り                                 | 読み取り                                 | 読み取り                                    |
| パッケージ               | 読み取り/書き込み                            | なし                                   | 読み取り                                    |
| pull requests       | 読み取り/書き込み                            | なし                                   | 読み取り                                    |
| repository projects | 読み取り/書き込み                            | なし                                   | 読み取り                                    |
| security events     | 読み取り/書き込み                            | なし                                   | 読み取り                                    |
| statuses            | 読み取り/書き込み                            | なし                                   | 読み取り                                    |
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
#### Modifying the permissions for the `GITHUB_TOKEN`

You can modify the permissions for the `GITHUB_TOKEN` in individual workflow files. If the default permissions for the `GITHUB_TOKEN` are restrictive, you may have to elevate the permissions to allow some actions and commands to run successfully. If the default permissions are permissive, you can edit the workflow file to remove some permissions from the `GITHUB_TOKEN`. As a good security practice, you should grant the `GITHUB_TOKEN` the least required access.

You can see the permissions that `GITHUB_TOKEN` had for a specific job in the "Set up job" section of the workflow run log. 詳しい情報については、「[ワークフロー実行ログを使用する](/actions/managing-workflow-runs/using-workflow-run-logs)」を参照してください。

You can use the `permissions` key in your workflow file to modify permissions for the `GITHUB_TOKEN` for an entire workflow or for individual jobs. This allows you to configure the minimum required permissions for a workflow or job. When the `permissions` key is used, all unspecified permissions are set to no access, with the exception of the `metadata` scope, which always gets read access.

{% data reusables.github-actions.forked-write-permission %}

The two workflow examples earlier in this article show the `permissions` key being used at the workflow level, and at the job level. In [Example 1](#example-1-passing-the-github_token-as-an-input) the two permissions are specified for the entire workflow. In [Example 2](#example-2-calling-the-rest-api) write access is granted for one scope for a single job.

For full details of the `permissions` key, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#permissions)."

##### How the permissions are calculated for a workflow job

The permissions for the `GITHUB_TOKEN` are initially set to the default setting for the enterprise, organization, or repository. If the default is set to the restricted permissions at any of these levels then this will apply to the relevant repositories. For example, if you choose the restricted default at the organization level then all repositories in that organization will use the restricted permissions as the default. The permissions are then adjusted based on any configuration within the workflow file, first at the workflow level and then at the job level. Finally, if the workflow was triggered by a pull request from a forked repository, and the **Send write tokens to workflows from pull requests** setting is not selected, the permissions are adjusted to change any write permissions to read only.

#### Granting additional permissions
{% endif %}

`GITHUB_TOKEN`で利用できない権限を要求するトークンが必要な場合は、個人アクセストークンを生成して、それをリポジトリのシークレットに設定できます。

1. リポジトリに対して適切な権限を持つトークンを利用もしくは生成してください。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
1. ワークフローのリポジトリにそのトークンをシークレットとして追加し、 {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}構文でそれを参照してください。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。
