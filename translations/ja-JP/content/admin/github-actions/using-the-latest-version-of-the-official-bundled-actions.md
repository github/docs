---
title: Using the latest version of the official bundled actions
intro: 'You can update the actions that are bundled with your enterprise, or use actions directly from {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  enterprise-server: '>=2.22'
  github-ae: next
topics:
  - Enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Your enterprise instance includes a number of built-in actions that you can use in your workflows. For more information about the bundled actions, see "[Official actions bundled with your enterprise instance](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)."

These bundled actions are a point-in-time snapshot of the official actions found at https://github.com/actions, so there may be newer versions of these actions available. You can use the `actions-sync` tool to update these actions, or you can configure {% data variables.product.prodname_github_connect %} to allow access to the latest actions on {% data variables.product.prodname_dotcom_the_website %}. These options are described in the following sections.

### Using `actions-sync` to update the bundled actions

To update the bundled actions, you can use the `actions-sync` tool to update the snapshot. For more information on using `actions-sync`, see "[Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom)."

### Using {% data variables.product.prodname_github_connect %} to access the latest actions

You can use {% data variables.product.prodname_github_connect %} to allow {% data variables.product.product_name %} to use actions from {% data variables.product.prodname_dotcom_the_website %}. 詳しい情報については、「[{% data variables.product.prodname_github_connect %} を使用した {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。

Once {% data variables.product.prodname_github_connect %} is configured, you can use the latest version of an action by deleting its local repository in the `actions` organization on your instance. For example, if your enterprise instance is using the `actions/checkout@v1` action, and you need to use `actions/checkout@v2` which isn't available on your enterprise instance, perform the following steps to be able to use the latest `checkout` action from {% data variables.product.prodname_dotcom_the_website %}:

1. By default, site administrators are not owners of the bundled actions organization. To get the required access to delete the `checkout` repository, use the `ghe-org-admin-promote` command to promote a user to be an owner of the bundled `actions` organization. For more information, see "[Accessing the administrative shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" and "[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)." 例:

   ```shell
   $ ghe-org-admin-promote -u octocat -o actions
    Do you want to give organization admin privileges for actions to octocat? (y/N) y
    Making octocat an admin of actions
     --> Adding octocat as an admin of actions
     --> octocat is now an admin of the actions organization
     --> Done.
   ```
1. On your {% data variables.product.product_name %} instance, delete the `checkout` repository within the `actions` organization. For information on how to delete a repository, see "[Deleting a repository ](/github/administering-a-repository/deleting-a-repository)."
1. It is recommended that you leave the `actions` organization once you no longer require administrative access. For more information, see "[Removing yourself from an organization ](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-an-organization)."
1. Configure your workflow's YAML to use `actions/checkout@v2`.
1. Each time your workflow runs, the runner will use the `v2` version of `actions/checkout` from {% data variables.product.prodname_dotcom_the_website %}.
