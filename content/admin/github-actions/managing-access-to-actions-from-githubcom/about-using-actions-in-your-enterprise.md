---
title: About using actions in your enterprise
intro: '{% data variables.product.product_name %} includes most {% data variables.product.prodname_dotcom %}-authored actions, and has options for enabling access to other actions from {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
shortTitle: About actions in your enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About actions on {% data variables.product.product_name %}

{% data variables.product.prodname_actions %} workflows can use _actions_, which are individual tasks that you can combine to create jobs and customize your workflow. You can create your own actions, or use and customize actions shared by the {% data variables.product.prodname_dotcom %} community.

{% data reusables.actions.enterprise-no-internet-actions %} You can restrict your developers to using actions that are stored on {% data variables.location.product_location %}, which includes most official {% data variables.product.company_short %}-authored actions, as well as any actions your developers create. Alternatively, to allow your developers to benefit from the full ecosystem of actions built by industry leaders and the open source community, you can configure access to other actions from {% data variables.product.prodname_dotcom_the_website %}. 

We recommend allowing automatic access to all actions from {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghes %}However, this does require {% data variables.product.product_name %} to make outbound connections to {% data variables.product.prodname_dotcom_the_website %}. If you don't want to allow these connections, or{% else %}If{% endif %} you want to have greater control over which actions are used on your enterprise, you can manually sync specific actions from {% data variables.product.prodname_dotcom_the_website %}.

## Official actions bundled with your enterprise instance

{% data reusables.actions.actions-bundled-with-ghes %}

The bundled official actions include the following, among others.
- `actions/checkout`
- `actions/upload-artifact`
- `actions/download-artifact`
- `actions/labeler`
- Various `actions/setup-` actions

To see all the official actions included on your enterprise instance, browse to the `actions` organization on your instance: <code>https://<em>HOSTNAME</em>/actions</code>.

There is no connection required between {% data variables.location.product_location %} and {% data variables.product.prodname_dotcom_the_website %} to use these actions.

Each action is a repository in the `actions` organization, and each action repository includes the necessary tags, branches, and commit SHAs that your workflows can use to reference the action. For information on how to update the bundled official actions, see "[Using the latest version of the official bundled actions](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions)."

{% note %}

**Notes:** 
- When using setup actions (such as `actions/setup-LANGUAGE`) on {% data variables.product.product_name %} with self-hosted runners, you might need to set up the tools cache on runners that do not have internet access. For more information, see "[Setting up the tool cache on self-hosted runners without internet access](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)."
- When {% data variables.product.product_name %} is updated, bundled actions are automatically replaced with default versions in the upgrade package.

{% endnote %}

## Configuring access to actions on {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.actions.access-actions-on-dotcom %}

The recommended approach is to enable automatic access to all actions from {% data variables.product.prodname_dotcom_the_website %}. You can do this by using {% data variables.product.prodname_github_connect %} to integrate {% data variables.product.product_name %} with {% data variables.product.prodname_ghe_cloud %}. For more information, see "[Enabling automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)". 

{% ifversion ghes %}
{% note %}

**Note:** Before you can configure access to actions on {% data variables.product.prodname_dotcom_the_website %}, you must configure {% data variables.location.product_location %} to use {% data variables.product.prodname_actions %}. For more information, see "[Getting started with {% data variables.product.prodname_actions %} for GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)."


{% endnote %}
{% endif %}

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

{% data reusables.actions.enterprise-limit-actions-use %}

Alternatively, if you want stricter control over which actions are allowed in your enterprise, or you do not want to allow outbound connections to {% data variables.product.prodname_dotcom_the_website %}, you can manually download and sync actions onto your enterprise instance using the `actions-sync` tool. For more information, see "[Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)."
