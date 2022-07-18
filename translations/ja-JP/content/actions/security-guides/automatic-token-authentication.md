---
title: Automatic token authentication
intro: '{% data variables.product.prodname_dotcom %}は、{% data variables.product.prodname_actions %}の代理で認証を受けるために利用できるトークンを提供します。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Automatic token authentication
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## `GITHUB_TOKEN`シークレットについて

At the start of each workflow run, {% data variables.product.prodname_dotcom %} automatically creates a unique `GITHUB_TOKEN` secret to use in your workflow. この`GITHUB_TOKEN`は、ワークフローの実行内での認証に利用できます。

{% data variables.product.prodname_actions %}を有効化すると、{% data variables.product.prodname_dotcom %}はリポジトリに{% data variables.product.prodname_github_app %}をインストールします。 `GITHUB_TOKEN`シークレットは、{% data variables.product.prodname_github_app %}インストールアクセストークンです。 このインストールアクセストークンは、リポジトリにインストールされた{% data variables.product.prodname_github_app %}の代わりに認証を受けるために利用できます このトークンの権限は、ワークフローを含むリポジトリに限定されます。 詳しい情報については「[`GITHUB_TOKEN`の権限](#permissions-for-the-github_token)」を参照してください。

各ジョブの開始前に、{% data variables.product.prodname_dotcom %} はジョブのインストールアクセストークンをフェッチします。 {% data reusables.actions.github-token-expiration %}

このトークンは、`github.token`コンテキストにもあります。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts#github-context)」を参照してください。

## ワークフロー内での`GITHUB_TOKEN`の利用

シークレットを参照するための標準構文 {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} を使用して、`GITHUB_TOKEN` を使用できます。 Examples of using the `GITHUB_TOKEN` include passing the token as an input to an action, or using it to make an authenticated {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API request.

{% note %}

**重要:** ワークフローが `GITHUB_TOKEN` をアクションに明示的に渡さない場合でも、アクションは `github.token` コンテキストを介して `GITHUB_TOKEN` にアクセスできます。 セキュリティを強化するには、`GITHUB_TOKEN` に付与されるアクセス許可を制限することにより、アクションに必要な最小限のアクセスのみが含まれるようにする必要があります。 詳しい情報については「[`GITHUB_TOKEN`の権限](#permissions-for-the-github_token)」を参照してください。

{% endnote %}

{% data reusables.actions.actions-do-not-trigger-workflows %}

### 例 1: `GITHUB_TOKEN` を入力として渡す

{% data reusables.actions.github_token-input-example %}

### 例 2: REST API を呼び出す

`GITHUB_TOKEN`を使って、認証されたAPIコールを発行できます。 以下のワークフローの例では、{% data variables.product.prodname_dotcom %} REST APIを使ってIssueを作成しています。

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_commit:
    runs-on: ubuntu-latest 
    permissions:
      issues: write 
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## `GITHUB_TOKEN`の権限

{% data variables.product.prodname_github_apps %} が各権限でアクセスできる API エンドポイントについては、「[{% data variables.product.prodname_github_app %} の権限](/rest/reference/permissions-required-for-github-apps)」を参照してください。

次の表は、デフォルトで `GITHUB_TOKEN` に付与される権限を示しています。 People with admin permissions to an {% ifversion not ghes %}enterprise, organization, or repository,{% else %}organization or repository{% endif %} can set the default permissions to be either permissive or restricted. For information on how to set the default permissions for the `GITHUB_TOKEN` for your enterprise, organization, or repository, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)," "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)," or "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."

| スコープ        | デフォルトアクセス<br>(許可) | デフォルトアクセス<br>(制限付き) | フォークされたリポジトリ<br>による最大アクセス   |
| ----------- | ----------------------- | ------------------------- | --------------------------------- |
| actions     | 読み取り/書き込み               | なし                        | 読み取り                              |
| checks      | 読み取り/書き込み               | なし                        | 読み取り                              |
| contents    | 読み取り/書き込み               | 読み取り                      | 読み取り                              |
| deployments | 読み取り/書き込み               | なし                        | read |{% ifversion fpt or ghec %}
| id-token    | なし                      | なし                        | read 
{% endif %}
| issues      | 読み取り/書き込み               | なし                        | 読み取り                              |
| メタデータ       | 読み取り                    | 読み取り                      | 読み取り                              |
| パッケージ       | 読み取り/書き込み               | なし                        | 読み取り                              |
{%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-6187 %}
| pages         | read/write  | none | read |
{%- endif %}
| pull-requests | read/write  | none | read | | repository-projects | read/write | none | read | | security-events     | read/write | none | read | | statuses      | read/write  | none | read |

{% data reusables.actions.workflow-runs-dependabot-note %}

### `GITHUB_TOKEN` の権限を変更する

個々のワークフローファイルの `GITHUB_TOKEN` の権限を変更できます。 `GITHUB_TOKEN` のデフォルトの権限が制限付きの場合は、一部のアクションとコマンドを正常に実行できるように、権限を昇格させる必要がある場合があります。 デフォルトの権限が許可の場合は、ワークフローファイルを編集して、`GITHUB_TOKEN` から一部の権限を削除できます。 セキュリティを強化するには、`GITHUB_TOKEN` に必要最小限のアクセスを許可する必要があります。

`GITHUB_TOKEN` が特定のジョブに対して保持していた権限は、ワークフロー実行ログの [Set up job] セクションで確認できます。 詳しい情報については、「[ワークフロー実行ログを使用する](/actions/managing-workflow-runs/using-workflow-run-logs)」を参照してください。

ワークフローファイルの `permissions` キーを使用して、ワークフロー全体または個々のジョブの `GITHUB_TOKEN` の権限を変更できます。 これにより、ワークフローまたはジョブに最低限必要な権限を設定できます。 `permissions` キーを使用すると、常に読み取りアクセスを取得する `metadata` スコープを除いて、指定されていないすべての権限が権限なしに設定されます。

{% data reusables.actions.forked-write-permission %}

この記事の前半の 2 つのワークフロー例は、ワークフローレベルとジョブレベルで使用されている `permissions` キーを示しています。 [例 1](#example-1-passing-the-github_token-as-an-input) では、ワークフロー全体に対して 2 つの権限が指定されています。 [例 2](#example-2-calling-the-rest-api) では、1 つのジョブに対し 1 つのスコープに書き込み権限が付与されています。

`permissions` キーの詳細については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#permissions)」を参照してください。

#### ワークフロージョブの権限の計算方法

`GITHUB_TOKEN` の権限は、最初は Enterprise、Organization、またはリポジトリのデフォルトに設定されています。 デフォルトがこれらのレベルのいずれかで制限付きの権限に設定されている場合、これは関連するリポジトリに適用されます。 たとえば、Organization レベルで制限付きのデフォルトを選択した場合、その Organization 内のすべてのリポジトリは、制限付きの権限をデフォルトとして使用します。 次に、ワークフローファイル内の構成に基づいて、最初にワークフローレベルで、次にジョブレベルで権限が調整されます。 最後に、ワークフローがフォークされたリポジトリからのプルリクエストによってトリガーされ、[**Send write tokens to workflows from pull requests**](プルリクエストから書き込みトークンをワークフローに送信) 設定が選択されていない場合、権限が調整され、書き込み権限が読み取り専用に変更されます。

### 追加の権限を付与する

`GITHUB_TOKEN`で利用できない権限を要求するトークンが必要な場合は、個人アクセストークンを生成して、それをリポジトリのシークレットに設定できます。

1. リポジトリに対して適切な権限を持つトークンを利用もしくは生成してください。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
1. ワークフローのリポジトリにそのトークンをシークレットとして追加し、 {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}構文でそれを参照してください。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

### 参考リンク

- "[Resources in the REST API](/rest/overview/resources-in-the-rest-api#rate-limiting)"
