---
title: GitHub.com からアクションを手動で同期する
intro: 'For users that need access to actions from {% data variables.product.prodname_dotcom_the_website %}, you can sync specific actions to your enterprise.'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  enterprise-server: '>=2.22'
  github-ae: next
topics:
  - Enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.actions.enterprise-no-internet-actions %}

{% data variables.product.prodname_dotcom_the_website %} からのアクションへのアクセスを有効化する際に推奨されるアプローチは、すべてのアクションへの自動アクセスを有効化することです。 これを行うには、{% data variables.product.prodname_github_connect %} を使用して {% data variables.product.product_name %} を {% data variables.product.prodname_ghe_cloud %} と統合します。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} を使用した {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。

However, if you want stricter control over which actions are allowed in your enterprise, you can follow this guide to use {% data variables.product.company_short %}'s open source [`actions-sync`](https://github.com/actions/actions-sync) tool to sync individual action repositories from {% data variables.product.prodname_dotcom_the_website %} to your enterprise.

### `actions-sync` ツールについて

`actions-sync` ツールは、{% data variables.product.prodname_dotcom_the_website %} API と {% data variables.product.product_name %} インスタンスの API にアクセスできるマシンで実行する必要があります。 両方のマシンに同時に接続する必要はありません。

マシンが両方のシステムに同時にアクセスできる場合、1 つの `actions-sync sync` コマンドで同期を実行できます。 一度に 1 つのシステムにのみアクセスできる場合は、`actions-sync pull` および `push` コマンドを使用できます。

`actions-sync` ツールは、パブリックリポジトリに保存されている {% data variables.product.prodname_dotcom_the_website %} からのみアクションをダウンロードできます。

### 必要な環境

* Before using the `actions-sync` tool, you must ensure that all destination organizations already exist in your enterprise. The following example demonstrates how to sync actions to an organization named `synced-actions`. 詳しい情報については、「[新しい Organization をゼロから作成する](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。
* You must create a personal access token (PAT) on your enterprise that can create and write to repositories in the destination organizations. 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
* If you want to sync the bundled actions in the `actions` organization on {% data variables.product.product_location %}, you must be an owner of the `actions` organization.

  {% note %}

  **Note:** By default, even site administrators are not owners of the bundled `actions` organization.

  {% endnote %}

  Site administrators can use the `ghe-org-admin-promote` command in the administrative shell to promote a user to be an owner of the bundled `actions` organization. For more information, see "[Accessing the administrative shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" and "[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)."

  ```shell
  ghe-org-admin-promote -u <em>USERNAME</em> -o actions
  ```

### 例: `actions-sync` ツールを使用する

この例は、`actions-sync` ツールを使用して、個々のアクションを {% data variables.product.prodname_dotcom_the_website %} から Enterprise インスタンスに同期する方法を示しています。

{% note %}

**Note:** This example uses the `actions-sync sync` command, which requires concurrent access to both the {% data variables.product.prodname_dotcom_the_website %} API and your enterprise instance's API from your machine. 一度に 1 つのシステムにのみアクセスできる場合は、`actions-sync pull` および `push` コマンドを使用できます。 詳しい情報については、「[`actions/cache` README](https://github.com/actions/actions-sync#not-connected-instances)」を参照してください。

{% endnote %}

1. マシンのオペレーティングシステムの最新の [`actions-sync` リリース](https://github.com/actions/actions-sync/releases)をダウンロードして抽出します。
1. ツールのキャッシュファイルを保存するディレクトリを作成します。
1. `actions-sync sync` コマンドを実行します。

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "docker/build-push-action:synced-actions/docker-build-push-action"
   ```

   上記のコマンドでは、次の引数を使用しています。

   * `--cache-dir`: コマンドを実行しているマシンのキャッシュディレクトリ。
   * `--destination-token`: 宛先 Enterprise インスタンスの個人アクセストークン。
   * `--destination-url`: 宛先 Enterprise インスタンスの URL。
   * `--repo-name`: 同期するアクションリポジトリ。 これは、`owner/repository:destination_owner/destination_repository` の形式を採用しています。

     * The above example syncs the [`docker/build-push-action`](https://github.com/docker/build-push-action) repository to the `synced-actions/docker-build-push-action` repository on the destination enterprise instance. You must create the organization named `synced-actions` in your enterprise before running the above command.
     * If you omit `:destination_owner/destination_repository`, the tool uses the original owner and repository name for your enterprise. Before running the command, you must create a new organization in your enterprise that matches the owner name of the action. Consider using a central organization to store the synced actions in your enterprise, as this means you will not need to create multiple new organizations if you sync actions from different owners.
     * `--repo-name` パラメータを `--repo-name-list` または `--repo-name-list-file` に置き換えることにより、複数のアクションを同期できます。 詳しい情報については、「[`actions/cache` README](https://github.com/actions/actions-sync#actions-sync)」を参照してください。
1. After the action repository is created in your enterprise, people in your enterprise can use the destination repository to reference the action in their workflows. 上記のアクション例の場合:

   ```yaml
   uses: synced-actions/docker-build-push-action@v1
   ```

   詳しい情報については、「[GitHub Actionsのワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)」を参照してください。
