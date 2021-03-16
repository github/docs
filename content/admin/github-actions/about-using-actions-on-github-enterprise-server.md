---
title: About using actions on GitHub Enterprise Server
intro: '{% data variables.product.prodname_ghe_server %} includes most {% data variables.product.prodname_dotcom %}-authored actions, and has options for enabling access to other actions from {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data variables.product.prodname_actions %} workflows can use _actions_, which are individual tasks that you can combine to create jobs and customize your workflow. You can create your own actions, or use and customize actions shared by the {% data variables.product.prodname_dotcom %} community.

{% data reusables.actions.enterprise-no-internet-actions %}

### Official actions bundled with {% data variables.product.prodname_ghe_server %}

Most official {% data variables.product.prodname_dotcom %}-authored actions are automatically bundled with {% data variables.product.prodname_ghe_server %}, and are captured at a point in time from {% data variables.product.prodname_marketplace %}. When your {% data variables.product.prodname_ghe_server %} instance is updated, the bundled official actions are also updated.

The bundled official actions include `actions/checkout`, `actions/upload-artifact`, `actions/download-artifact`, `actions/labeler`, and various `actions/setup-` actions, among others. To see all the official actions included on your enterprise instance, browse to the `actions` organization on your instance: <code>https://<em>HOSTNAME</em>/actions</code>.

Each action is a repository in the `actions` organization, and each action repository includes the necessary tags, branches, and commit SHAs that your workflows can use to reference the action.

{% note %}

**Note:** When using setup actions (such as `actions/setup-LANGUAGE`) on {% data variables.product.prodname_ghe_server %} with self-hosted runners, you might need to set up the tools cache on runners that do not have internet access. For more information, see "[Setting up the tool cache on self-hosted runners without internet access](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)."

{% endnote %}

### Configuring access to actions on {% data variables.product.prodname_dotcom_the_website %}

If users on your enterprise instance need access to other actions from {% data variables.product.prodname_dotcom_the_website %} or {% data variables.product.prodname_marketplace %}, there are a few configuration options.

The recommended approach is to enable automatic access to all actions from {% data variables.product.prodname_dotcom_the_website %}. You can do this by using {% data variables.product.prodname_github_connect %} to integrate {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_ghe_cloud %}. For more information, see "[Enabling automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)". {% data reusables.actions.enterprise-limit-actions-use %}

Alternatively, if you want stricter control over which actions are allowed in your enterprise, you can manually download and sync actions onto your enterprise instance using the `actions-sync` tool. For more information, see "[Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)."
