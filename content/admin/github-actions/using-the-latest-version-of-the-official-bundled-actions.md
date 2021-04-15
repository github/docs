---
title: Using the latest version of the official bundled actions
intro: 'You can update the actions that are bundled with your {% data variables.product.prodname_ghe_server %} instance, or use actions directly from {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  enterprise-server: '>=2.22'
topics:
  - enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Your {% data variables.product.prodname_ghe_server %} instance includes a number of built-in actions that you can use in your workflows. For more information about the bundled actions, see ["Official actions bundled with {% data variables.product.prodname_ghe_server %}"](/admin/github-actions/about-using-actions-on-github-enterprise-server#official-actions-bundled-with-github-enterprise-server).

These bundled actions are a point-in-time snapshot of the official actions found at https://github.com/actions; as a result, these actions may be older versions that can be updated. To update these actions, you can use `actions-sync` to retrieve updated versions from {% data variables.product.prodname_dotcom_the_website %}.


These options are described in more detail in the following sections.

### Using actions-sync to update a bundled action

To update the bundled actions, you can use the `actions-sync` tool to synchronize actions with {% data variables.product.prodname_dotcom_the_website %}. For more information on using `actions-sync`, see "[Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom)."

### Using actions from {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.github-actions.actions-github-connect-requirement %}

Once configured, you can use a new version of an action from {% data variables.product.prodname_dotcom_the_website %} by manually specifying the required version in the workflow file. For example, to use version `v2.2.1` of `actions/setup-python` from {% data variables.product.prodname_dotcom_the_website %}, you can specify the tag `actions/setup-python@v2.2.1` in your workflow file.
