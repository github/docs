---
title: Using the latest version of the official bundled actions
intro: 'You can update the actions that are bundled with your enterprise, or use actions directly from {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: Use the latest bundled actions
---
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Your enterprise instance includes a number of built-in actions that you can use in your workflows. For more information about the bundled actions, see "[Official actions bundled with your enterprise instance](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)."

These bundled actions are a point-in-time snapshot of the official actions found at https://github.com/actions, so there may be newer versions of these actions available. You can use the `actions-sync` tool to update these actions, or you can configure {% data variables.product.prodname_github_connect %} to allow access to the latest actions on {% data variables.product.prodname_dotcom_the_website %}. These options are described in the following sections.

## Using `actions-sync` to update the bundled actions

To update the bundled actions, you can use the `actions-sync` tool to update the snapshot. For more information on using `actions-sync`, see "[Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom)."

## Using {% data variables.product.prodname_github_connect %} to access the latest actions

You can use {% data variables.product.prodname_github_connect %} to allow {% data variables.product.product_name %} to use actions from {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Enabling automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)."

Once {% data variables.product.prodname_github_connect %} is configured, you can use the latest version of an action by deleting its local repository in the `actions` organization on your instance. For example, if your enterprise instance is using `v1` of the `actions/checkout` action, and you need to use `{% data reusables.actions.action-checkout %}` which isn't available on your enterprise instance, perform the following steps to be able to use the latest `checkout` action from {% data variables.product.prodname_dotcom_the_website %}:

1. From an enterprise owner account on {% data variables.product.product_name %}, navigate to the repository you want to delete from the *actions* organization (in this example `checkout`).
1. By default, site administrators are not owners of the bundled *actions* organization. To get the access required to delete the `checkout` repository, you must use the site admin tools. Click {% octicon "rocket" aria-label="The rocket ship" %} in the upper-right corner of any page in that repository.
  ![Rocketship icon for accessing site admin settings](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. Click {% octicon "shield-lock" %} **Security** to see the security overview for the repository.
  ![Security header the repository](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. Under "Privileged access", click **Unlock**.
  ![Unlock button](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. Under **Reason**, type a reason for unlocking the repository, then click **Unlock**.
  ![Confirmation dialog](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. Now that the repository is unlocked, you can leave the site admin pages and delete the repository within the `actions` organization. At the top of the page, click the repository name, in this example **checkout**, to return to the summary page.
  ![Repository name link](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. Under "Repository info", click **View code** to leave the site admin pages and display the `checkout` repository.
1. Delete the `checkout` repository within the `actions` organization. For information on how to delete a repository, see "[Deleting a repository](/github/administering-a-repository/deleting-a-repository)."
  ![View code link](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. Configure your workflow's YAML to use `{% data reusables.actions.action-checkout %}`.
1. Each time your workflow runs, the runner will use the specified version of `actions/checkout` from {% data variables.product.prodname_dotcom_the_website %}.

   {% ifversion ghes > 3.2 or ghae-issue-4815 %}
   {% note %}

   **Note:** The first time the `checkout` action is used from {% data variables.product.prodname_dotcom_the_website %}, the `actions/checkout` namespace is automatically retired on {% data variables.product.product_location %}. If you ever want to revert to using a local copy of the action, you first need to remove the namespace from retirement. For more information, see "[Automatic retirement of namespaces for actions accessed on {% data variables.product.prodname_dotcom_the_website%}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)."

   {% endnote %}
   {% endif %}
