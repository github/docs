---
title: Sharing actions and workflows with your organization
intro: You can share an action or reusable workflow with your organization without publishing the action or workflow publicly.
versions:
  fpt: '*'
topics:
  - Actions
  - Action development
shortTitle: Share with your organization
redirect_from:
  - /actions/creating-actions/sharing-actions-and-workflows-with-your-organization
  - /actions/sharing-automations/sharing-actions-and-workflows-with-your-organization
  - /actions/how-tos/sharing-automations/sharing-actions-and-workflows-with-your-organization
  - /actions/administering-github-actions/sharing-workflows-secrets-and-runners-with-your-organization
---

> [!WARNING]
> * {% data reusables.actions.outside-collaborators-actions %}
> * {% data reusables.actions.scoped-token-note %}

## Sharing actions and workflows with your organization

1. Store the action or reusable workflow in a private repository. For more information, see [AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).
1. On {% data variables.product.prodname_dotcom %}, navigate to the main page of the private repository.
1. Under your repository name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
{% data reusables.repositories.settings-sidebar-actions-general %}
1. To grant access to other private repositories in the organization, in the **Access** section at the bottom of the page, select **Accessible from repositories in the 'ORGANIZATION-NAME' organization**.
1. Click **Save** to apply the settings.

## Next steps

To learn how to reuse your shared workflows, see [AUTOTITLE](/actions/using-workflows/reusing-workflows).
