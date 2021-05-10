---
title: GitHub.com からアクションを手動で同期する
intro: '{% data variables.product.prodname_dotcom_the_website %} からのアクションにアクセスする必要があるユーザは、特定のアクションを {% data variables.product.prodname_ghe_server %} インスタンスに同期できます。'
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

{% data reusables.actions.enterprise-no-internet-actions %}

{% data variables.product.prodname_dotcom_the_website %} からのアクションへのアクセスを有効化する際に推奨されるアプローチは、すべてのアクションへの自動アクセスを有効化することです。 これを行うには、{% data variables.product.prodname_github_connect %} を使用して {% data variables.product.prodname_ghe_server %} を {% data variables.product.prodname_ghe_cloud %} と統合します。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} を使用した {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。

ただし、Enterprise で許可されるアクションをより厳密に制御する場合は、このガイドに従って、{% data variables.product.company_short %} のオープンソース [`actions-sync`](https://github.com/actions/actions-sync) ツールを使用して、個々のアクションリポジトリを {% data variables.product.prodname_dotcom_the_website %} から Enterprise インスタンスに同期できます。

### `actions-sync` ツールについて

`actions-sync` ツールは、{% data variables.product.prodname_dotcom_the_website %} API と {% data variables.product.prodname_ghe_server %} インスタンスの API にアクセスできるマシンで実行する必要があります。 両方のマシンに同時に接続する必要はありません。

マシンが両方のシステムに同時にアクセスできる場合、1 つの `actions-sync sync` コマンドで同期を実行できます。 一度に 1 つのシステムにのみアクセスできる場合は、`actions-sync pull` および `push` コマンドを使用できます。

`actions-sync` ツールは、パブリックリポジトリに保存されている {% data variables.product.prodname_dotcom_the_website %} からのみアクションをダウンロードできます。

### 必要な環境

* `actions-sync` ツールを使用する前に、すべての宛先 Organization が Enterprise インスタンスにすでに存在していることを確認する必要があります。 次の例は、Enterprise インスタンスの `synced-actions` という名前の Organization にアクションを同期する方法を示しています。 詳しい情報については、「[新しい Organization をゼロから作成する](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。
* Enterprise インスタンスに、宛先 Organization のリポジトリを作成して書き込むことができる個人アクセストークン (PAT) を作成する必要があります。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
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

**注釈:** この例では、`actions-sync sync` コマンドを使用します。これには、マシンから {% data variables.product.prodname_dotcom_the_website %} API と {% data variables.product.prodname_ghe_server %} インスタンスの API の両方への同時アクセスが必要です。 一度に 1 つのシステムにのみアクセスできる場合は、`actions-sync pull` および `push` コマンドを使用できます。 詳しい情報については、「[`actions/cache` README](https://github.com/actions/actions-sync#not-connected-instances)」を参照してください。

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

     * 上記の例では、[`docker/build-push-action`](https://github.com/docker/build-push-action) リポジトリを宛先 {% data variables.product.prodname_ghe_server %} インスタンスの `synced-actions/docker-build-push-action` リポジトリに同期します。 上記のコマンドを実行する前に、Enterprise インスタンスで `synced-actions` という名前の Organization を作成する必要があります。
     * `:destination_owner/destination_repository` を省略すると、ツールは Enterprise インスタンスの元の所有者とリポジトリ名を使用します。 コマンドを実行する前に、アクションの所有者名と一致する新しい Organization をインスタンスに作成する必要があります。 同期されたアクションをインスタンスに保存するために中枢の Organization を使用することを検討してください。これは、異なる所有者からのアクションを同期する場合、複数の新しい Organization を作成する必要がないということです。
     * `--repo-name` パラメータを `--repo-name-list` または `--repo-name-list-file` に置き換えることにより、複数のアクションを同期できます。 詳しい情報については、「[`actions/cache` README](https://github.com/actions/actions-sync#actions-sync)」を参照してください。
1. Enterprise インスタンスでアクションリポジトリが作成された後、Enterprise 内のユーザは、宛先リポジトリを使用してワークフロー内のアクションを参照できます。 上記のアクション例の場合:

   ```yaml
   uses: synced-actions/docker-build-push-action@v1
   ```

   詳しい情報については、「[GitHub Actionsのワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)」を参照してください。
