---
title: Using the latest version of the official bundled actions
intro: 'You can update the actions that are bundled with your {% data variables.product.prodname_ghe_server %} instance, or use actions directly from {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  enterprise-server: '>=2.22'
topics:
  - корпоративный
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Your {% data variables.product.prodname_ghe_server %} instance includes a number of built-in actions that you can use in your workflows. For more information about the bundled actions, see ["Official actions bundled with {% data variables.product.prodname_ghe_server %}"](/admin/github-actions/about-using-actions-on-github-enterprise-server#official-actions-bundled-with-github-enterprise-server).

These bundled actions are a point-in-time snapshot of the official actions found at https://github.com/actions; as a result, these actions may be older versions that can be updated. To update these actions, you can use `actions-sync` to retrieve updated versions from {% data variables.product.prodname_dotcom_the_website %}.

Alternatively, if your {% data variables.product.prodname_ghe_server %} instance has {% data variables.product.prodname_github_connect %} enabled, then you have additional options for using the latest actions from {% data variables.product.prodname_dotcom_the_website %}:

- Your workflow file can directly reference a specific tag that only exists on {% data variables.product.prodname_dotcom_the_website %}.
- To force the workflow file to use the actions on {% data variables.product.prodname_dotcom_the_website %}, you can edit the tag assigned to the bundled actions.

These options are described in more detail in the following sections.

### Using actions-sync to update a bundled action

To update the bundled actions, you can use the `actions-sync` tool to synchronize actions with {% data variables.product.prodname_dotcom_the_website %}. For more information on using `actions-sync`, see "[Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom)."

### Using actions from {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.github-actions.actions-github-connect-requirement %}

Once configured, you can use a new version of an action from {% data variables.product.prodname_dotcom_the_website %} by manually specifying the required version in the workflow file. For example, to use version `v2.2.1` of `actions/setup-python` from {% data variables.product.prodname_dotcom_the_website %}, you can specify the tag `actions/setup-python@v2.2.1` in your workflow file.

### Using the latest version by removing the specific action's tag

{% data reusables.github-actions.actions-github-connect-requirement %}

If you remove the version tag that was previously assigned to an action, {% data variables.product.prodname_ghe_server %} will check {% data variables.product.prodname_dotcom_the_website %} for the required tag. For more information on working with tags, see "[Viewing tags](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags#viewing-tags)."

For example, to use version `v2.2.1` of `actions/setup-python` from {% data variables.product.prodname_dotcom_the_website %}:

1. In {% data variables.product.prodname_ghe_server %}, delete the `v2` tag from the `actions/setup-python` repository.
1. Create a workflow that uses `actions/setup-python` with the `v2` tag.

When the workflow is unable to find the specified `v2` tag on {% data variables.product.prodname_ghe_server %}, it checks {% data variables.product.prodname_dotcom_the_website %} for the required tag. If it finds a tagged version of that action, {% data variables.product.prodname_ghe_server %} uses the version from {% data variables.product.prodname_dotcom_the_website %}.
