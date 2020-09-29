---
title: Using actions from GitHub Marketplace
intro: 'You can browse and search for actions in {% data variables.product.prodname_marketplace %} to use in your workflows.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About actions in {% data variables.product.prodname_marketplace %}

{% data variables.product.prodname_marketplace %} is a central location for you to find actions created by the {% data variables.product.prodname_dotcom %} community.  Actions with a badge indicate {% data variables.product.prodname_dotcom %} has verified the creator of the action as a partner organization.

{% data reusables.actions.enterprise-marketplace-actions %}

You can discover new actions from the workflow editor on {% data variables.product.prodname_dotcom %}, and from the [{% data variables.product.prodname_marketplace %} page](https://github.com/marketplace/actions/).

Viewing actions directly in the workflow editor provides quick access to all actions in {% data variables.product.prodname_marketplace %}. The {% data variables.product.prodname_marketplace %} actions page offers more flexibility to filter actions by category.

### Browsing actions in the workflow editor

You can search and browse actions directly in your repository's workflow editor. From the sidebar, you can search for a specific action, view featured actions, and browse featured categories. You can also view the number of stars an action has received from the {% data variables.product.prodname_dotcom %} community.

1. In your repository, browse to the workflow file you want to edit.
1. In the upper right corner of the file view, to open the workflow editor, click {% octicon "pencil" aria-label="The edit icon" %}. ![Edit workflow file button](/assets/images/help/repository/actions-edit-workflow-file.png)
1. To the right of the editor, use the {% data variables.product.prodname_marketplace %} sidebar to browse actions. ![Marketplace workflow sidebar](/assets/images/help/repository/actions-marketplace-sidebar.png)

### Browsing actions in {% data variables.product.prodname_marketplace %}

You can find the same actions on the [{% data variables.product.prodname_marketplace %} actions page](https://github.com/marketplace/actions/). On the {% data variables.product.prodname_marketplace %} page, you have more flexibility to filter actions by category and verification.

### Adding an action to your workflow from the workflow editor

An action's listing page includes the action's version and the workflow syntax required to use the action.

1. Navigate to the action you want to use in your workflow.
1. Under "Installation", click {% octicon "clippy" aria-label="The edit icon" %} to copy the workflow syntax. ![View action listing](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. Paste the syntax as a new step in your workflow. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)."
1. If the action requires you to provide variables, set them in your workflow. For information on what variables an action might require, see the action's full listing in the {% data variables.product.prodname_marketplace %}.

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}
