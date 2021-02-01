---
title: Manually syncing actions from GitHub.com
intro: 'For users that need access to actions from {% data variables.product.prodname_dotcom_the_website %}, you can sync specific actions to your {% data variables.product.prodname_ghe_server %} instance.'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

The recommended approach of enabling access to actions from {% data variables.product.prodname_dotcom_the_website %} is to enable automatic access to all actions. You can do this by using {% data variables.product.prodname_github_connect %} to integrate {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_ghe_cloud %} . For more information, see "[Enabling automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

However, if you want stricter control over which actions are allowed in your enterprise, you can follow this guide to use {% data variables.product.company_short %}'s open source [`actions-sync`](https://github.com/actions/actions-sync) tool to sync individual action repositories from {% data variables.product.prodname_dotcom_the_website %} to your enterprise instance.

### About the `actions-sync` tool

The `actions-sync` tool must be run on a machine that can access the {% data variables.product.prodname_dotcom_the_website %} API and your {% data variables.product.prodname_ghe_server %} instance's API. The machine doesn't need to be connected to both at the same time.

If your machine has access to both systems at the same time, you can do the sync with a single `actions-sync sync` command. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands.

The `actions-sync` tool can only download actions from {% data variables.product.prodname_dotcom_the_website %} that are stored in public repositories.

### Требования

* Before using the `actions-sync` tool, you must ensure that all destination organizations already exist on your enterprise instance. The following example demonstrates how to sync actions to an organization named `synced-actions` on an enterprise instance. For more information, see "[Creating a new organization from scratch](/github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch)."
* You must create a personal access token (PAT) on your enterprise instance that can create and write to repositories in the destination organizations. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

### Example: Using the `actions-sync` tool

This example demonstrates using the `actions-sync` tool to sync an individual action from {% data variables.product.prodname_dotcom_the_website %} to an enterprise instance.

{% note %}

**Note:** This example uses the `actions-sync sync` command, which requires concurrent access to both the {% data variables.product.prodname_dotcom_the_website %} API and your {% data variables.product.prodname_ghe_server %} instance's API from your machine. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands. For more information, see the [`actions-sync` README](https://github.com/actions/actions-sync#not-connected-instances).

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

     * The above example syncs the [`docker/build-push-action`](https://github.com/docker/build-push-action) repository to the `synced-actions/docker-build-push-action` repository on the destination {% data variables.product.prodname_ghe_server %} instance. You must create the organization named `synced-actions` on your enterprise instance before running the above command.
     * If you omit `:destination_owner/destination_repository`, the tool uses the original owner and repository name for your enterprise instance. Before running the command, you must create a new organization on your instance that matches the owner name of the action. Consider using a central organization to store the synced actions on your instance, as this means you will not need to  create multiple new organizations if you sync actions from different owners.
     * You can sync multiple actions by replacing the `--repo-name` parameter with `--repo-name-list` or `--repo-name-list-file`. For more information, see the [`actions-sync` README](https://github.com/actions/actions-sync#actions-sync).
1. After the action repository is created on your enterprise instance, people in your enterprise can use the destination repository to reference the action in their workflows. For the example action shown above:

   ```
   uses: synced-actions/docker-build-push-action@v1
   ```

   For more information, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)."
