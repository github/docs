---
title: Using the latest version of the official bundled actions
intro: 'You can update the actions that are bundled with your enterprise, or use actions directly from {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  enterprise-server: '>=2.22'
  github-ae: 'next'
topics:
  - enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Your enterprise instance includes a number of built-in actions that you can use in your workflows. For more information about the bundled actions, see "[Official actions bundled with your enterprise instance](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)."

These bundled actions are a point-in-time snapshot of the official actions found at https://github.com/actions; as a result, these actions may be older versions that can be updated. To update these actions, you can use `actions-sync` to retrieve updated versions from {% data variables.product.prodname_dotcom_the_website %}.

These options are described in more detail in the following sections.

### Using actions-sync to update a bundled action

To update the bundled actions, you can use the `actions-sync` tool to synchronize actions with {% data variables.product.prodname_dotcom_the_website %}. For more information on using `actions-sync`, see "[Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom)."

### Using actions from {% data variables.product.prodname_dotcom_the_website %}

To allow {% data variables.product.product_name %} to use actions directly from {% data variables.product.prodname_dotcom_the_website %}, you can use {% data variables.product.prodname_github_connect %}. For more information, see "[Enabling automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)."

Once configured, you can use a new version of an action from {% data variables.product.prodname_dotcom_the_website %} by manually specifying the required version in the workflow file. For example, to use version `v2.2.1` of `actions/setup-python` from {% data variables.product.prodname_dotcom_the_website %}, you can specify the tag `actions/setup-python@v2.2.1` in your workflow file.
