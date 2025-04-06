---
title: Manually syncing actions from GitHub.com
intro: 'For users that need access to actions from {% data variables.product.prodname_dotcom_the_website %}, you can sync specific actions to your enterprise.'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
  - /admin/github-actions/manually-syncing-actions-from-githubcom
  - /admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom
versions:
  ghes: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
shortTitle: Manually sync actions
---

{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

{% ifversion ghes %}

We recommend enabling automatic access to all actions by using {% data variables.product.prodname_github_connect %} to integrate {% data variables.product.product_name %} with {% data variables.product.prodname_ghe_cloud %}. See "[AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."

If you want stricter control over which actions are allowed in your enterprise, you{% else %}You{% endif %} can follow this guide to use our open source [`actions-sync`](https://github.com/actions/actions-sync) tool to sync individual action repositories from {% data variables.product.prodname_dotcom_the_website %} to your enterprise.

When you upgrade {% data variables.product.product_name %}, bundled actions are automatically replaced with the default versions in the upgrade package. These may not be the latest available version. As a best practice, if you use `actions-sync` to update actions, you should always rerun `actions-sync` after any {% data variables.product.product_name %} upgrade (major or minor) to ensure that the actions remain up to date.

## About the `actions-sync` tool

The `actions-sync` tool must be run on a machine that can access the {% data variables.product.prodname_dotcom_the_website %} API and your {% data variables.product.product_name %} instance's API. The machine doesn't need to be connected to both at the same time.

If your machine has access to both systems at the same time, you can do the sync with a single `actions-sync sync` command. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands.

The `actions-sync` tool can only download actions from {% data variables.product.prodname_dotcom_the_website %} that are stored in public repositories.

{% note %}

**Note:** The `actions-sync` tool is intended for use in systems where {% data variables.product.prodname_github_connect %} is not enabled. If you run the tool on a system with {% data variables.product.prodname_github_connect %} enabled, you may see the error `The repository <repo_name> has been retired and cannot be reused`. This indicates that a workflow has used that action directly on {% data variables.product.prodname_dotcom_the_website %} and the namespace is retired on {% data variables.location.product_location %}. See "[AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)."

{% endnote %}

## Prerequisites

* Before using the `actions-sync` tool, you must ensure that all destination organizations already exist in your enterprise. The following example demonstrates how to sync actions to an organization named `synced-actions`. See "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."
* You must create a {% data variables.product.pat_generic %} on your enterprise that can create and write to repositories in the destination organizations. See "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."{% ifversion ghes %}
* If you want to sync the bundled actions in the `actions` organization on {% data variables.location.product_location %}, you must be an owner of the `actions` organization.

  {% note %}

  **Note:** By default, even site administrators are not owners of the bundled `actions` organization.

  {% endnote %}

  Site administrators can use the `ghe-org-admin-promote` command in the administrative shell to promote a user to be an owner of the bundled `actions` organization. See "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)" and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-org-admin-promote)."

  ```shell
  ghe-org-admin-promote -u USERNAME -o actions
  ```{% endif %}

## Example: Using the `actions-sync` tool

This example demonstrates using the `actions-sync` tool to sync an individual action from {% data variables.product.prodname_dotcom_the_website %} to an enterprise instance.

{% note %}

**Note:** This example uses the `actions-sync sync` command, which requires concurrent access to both the {% data variables.product.prodname_dotcom_the_website %} API and your enterprise instance's API from your machine. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands. See the [`actions-sync` README](https://github.com/actions/actions-sync#not-connected-instances).

{% endnote %}

1. Download and extract the latest [`actions-sync` release](https://github.com/actions/actions-sync/releases) for your machine's operating system.
1. Create a directory to store cache files for the tool.
1. In your terminal, change to the `bin` directory within the release directory you just extracted. For example:

   ```shell
   cd PATH/TO/gh_DATETIME_OS_ARCHITECTURE/bin
   ```

1. Run the `actions-sync sync` command:

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "actions/stale:synced-actions/actions-stale"
   ```

   The above command uses the following arguments:

   * `--cache-dir`: The cache directory on the machine running the command.
   * `--destination-token`: A {% data variables.product.pat_generic %} for the destination enterprise instance.
   * `--destination-url`: The URL of the destination enterprise instance.
   * `--repo-name`: The action repository to sync. This takes the format of `owner/repository:destination_owner/destination_repository`.

     * The above example syncs the [`actions/stale`](https://github.com/actions/stale) repository to the `synced-actions/actions-stale` repository on the destination enterprise instance. You must create the organization named `synced-actions` in your enterprise before running the above command.
     * If you omit `:destination_owner/destination_repository`, the tool uses the original owner and repository name for your enterprise. Before running the command, you must create a new organization in your enterprise that matches the owner name of the action. Consider using a central organization to store the synced actions in your enterprise, as this means you will not need to create multiple new organizations if you sync actions from different owners.
     * You can sync multiple actions by replacing the `--repo-name` parameter with `--repo-name-list` or `--repo-name-list-file`. See the [`actions-sync` README](https://github.com/actions/actions-sync#actions-sync).
1. After the action repository is created in your enterprise, people in your enterprise can use the destination repository to reference the action in their workflows. For the example action shown above:

   ```yaml
   uses: synced-actions/actions-stale@v1
   ```

   See "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsuses)."
