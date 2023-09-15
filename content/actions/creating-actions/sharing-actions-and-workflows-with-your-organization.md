---
title: Sharing actions and workflows with your organization
intro: You can share an action or reusable workflow with your organization without publishing the action or workflow publicly.
versions:
  fpt: '*'
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share with your organization
---

## About {% data variables.product.prodname_actions %} access to private {% ifversion internal-actions %} or internal {% endif %}repositories

You can share actions and reusable workflows within your organization, without publishing them publicly, by allowing {% data variables.product.prodname_actions %} workflows to access a private {% ifversion internal-actions %} or internal {% endif %}repository that contains the action or reusable workflow.

Any actions or reusable workflows stored in the private repository can be used in workflows defined in other private {% ifversion internal-actions %} or internal {% endif %}repositories owned by the same organization. Actions and reusable workflows stored in internal repositories cannot be used in public repositories {% ifversion private-actions %}and actions and reusable workflows stored in private repositories cannot be used in public or internal repositories{% endif %}.

{% warning %}

**Warning**:
- {% data reusables.actions.outside-collaborators-actions %}
- {% data reusables.actions.scoped-token-note %}

{% endwarning %}

## Sharing actions and workflows with your organization

1. Store the action or reusable workflow in a private {% ifversion internal-actions %} or internal {% endif %}repository. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."
1. Configure the repository to allow access to workflows in other private repositories. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)."

## Further reading

- "[AUTOTITLE](/actions/using-workflows/reusing-workflows)"
