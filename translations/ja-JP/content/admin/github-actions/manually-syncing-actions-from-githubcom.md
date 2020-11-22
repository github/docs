---
title: Manually syncing actions from GitHub.com
intro: '{% data variables.product.prodname_dotcom_the_website %} からのアクションにアクセスする必要があるユーザは、特定のアクションを {% data variables.product.prodname_ghe_server %} インスタンスに同期できます。'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

{% data reusables.actions.enterprise-no-internet-actions %}

{% data variables.product.prodname_dotcom_the_website %} の特定のアクションをワークフローで使用できるようにするには、{% data variables.product.company_short %} のオープンソースの [`actions-sync`](https://github.com/actions/actions-sync) ツールを使用して、アクションリポジトリを {% data variables.product.prodname_dotcom_the_website %} から Enterprise インスタンスに同期します。 {% data variables.product.prodname_dotcom_the_website %} からアクションにアクセスする他の方法については、「[{% data variables.product.prodname_ghe_server %} での {% data variables.product.prodname_dotcom_the_website %} アクションの使用について](/enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server)」を参照してください。

### About the `actions-sync` tool

`actions-sync` ツールは、{% data variables.product.prodname_dotcom_the_website %} API と {% data variables.product.prodname_ghe_server %} インスタンスの API にアクセスできるマシンで実行する必要があります。 The machine doesn't need to be connected to both at the same time.

If your machine has access to both systems at the same time, you can do the sync with a single `actions-sync sync` command. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands.

`actions-sync` ツールは、パブリックリポジトリに保存されている {% data variables.product.prodname_dotcom_the_website %} からのみアクションをダウンロードできます。

### 必要な環境

* Before using the the `actions-sync` tool, you must ensure that all destination organizations already exist on your enterprise instance. The following example demonstrates how to sync actions to an organization named `synced-actions` on an enterprise instance. For more information, see "[Creating a new organization from scratch](/github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch)."
* You must create a personal access token (PAT) on your enterprise instance that can create and write to repositories in the destination organizations. 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

### Example: Using the `actions-sync` tool

この例は、`actions-sync` ツールを使用して、個々のアクションを {% data variables.product.prodname_dotcom_the_website %} から Enterprise インスタンスに同期する方法を示しています。

{% note %}

**注釈:** この例では、`actions-sync sync` コマンドを使用します。これには、マシンから {% data variables.product.prodname_dotcom_the_website %} API と {% data variables.product.prodname_ghe_server %} インスタンスの API の両方への同時アクセスが必要です。 If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands. For more information, see the [`actions-sync` README](https://github.com/actions/actions-sync#not-connected-instances).

{% endnote %}

1. Download and extract the latest [`actions-sync` release](https://github.com/actions/actions-sync/releases) for your machine's operating system.
1. Create a directory to store cache files for the tool.
1. Run the `actions-sync sync` command:

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "docker/build-push-action:synced-actions/docker-build-push-action"
   ```

   The above command uses the following arguments:

   * `--cache-dir`: The cache directory on the machine running the command.
   * `--destination-token`: A personal access token for the destination enterprise instance.
   * `--destination-url`: The URL of the destination enterprise instance.
   * `--repo-name`: The action repository to sync. This takes the format of `owner/repository:destination_owner/destination_repository`.

     * 上記の例では、[`docker/build-push-action`](https://github.com/docker/build-push-action) リポジトリを宛先 {% data variables.product.prodname_ghe_server %} インスタンスの `synced-actions/docker-build-push-action` リポジトリに同期します。 You must create the organization named `synced-actions` on your enterprise instance before running the above command.
     * If you omit `:destination_owner/destination_repository`, the tool uses the original owner and repository name for your enterprise instance. Before running the command, you must create a new organization on your instance that matches the owner name of the action. Consider using a central organization to store the synced actions on your instance, as this means you will not need to  create multiple new organizations if you sync actions from different owners.
     * You can sync multiple actions by replacing the `--repo-name` parameter with `--repo-name-list` or `--repo-name-list-file`. For more information, see the [`actions-sync` README](https://github.com/actions/actions-sync#actions-sync).
1. After the action repository is created on your enterprise instance, people in your enterprise can use the destination repository to reference the action in their workflows. For the example action shown above:

   ```
   uses: synced-actions/docker-build-push-action@v1
   ```

   詳しい情報については、「[GitHub Actionsのワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)」を参照してください。
