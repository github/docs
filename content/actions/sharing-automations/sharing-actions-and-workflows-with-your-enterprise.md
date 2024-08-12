---
title: Sharing actions and workflows with your enterprise
intro: You can share an action or reusable workflow with your enterprise without publishing the action or workflow publicly.
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share with your enterprise
redirect_from:
  - /actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise
---

## About {% data variables.product.prodname_actions %} access to internal {% ifversion private-actions %}and private {% endif %}repositories

If your organization is owned by an enterprise account, you can share actions and reusable workflows within your enterprise, without publishing them publicly, by allowing {% data variables.product.prodname_actions %} workflows to access an internal {% ifversion private-actions %}or private {% endif %}repository that contains the action or reusable workflow.

Any actions or reusable workflows stored in the internal {% ifversion private-actions %}or private {% endif %}repository can be used in workflows defined in other internal or private repositories owned by the same organization, or by any organization owned by the enterprise. Actions and reusable workflows stored in internal repositories cannot be used in public repositories {% ifversion private-actions %}and actions and reusable workflows stored in private repositories cannot be used in public or internal repositories{% endif %}.

{% warning %}

**Warning**:
* {% data reusables.actions.outside-collaborators-actions %}
* {% data reusables.actions.scoped-token-note %}

{% endwarning %}

## Sharing actions and workflows with your enterprise

1. Store the action or reusable workflow in an internal {% ifversion private-actions %}or private {% endif %}repository. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories)."
1. Configure the repository to allow access to workflows in other internal {% ifversion private-actions %}or private {% endif %}repositories. For more information, see {% ifversion private-actions %}"[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)" and {% endif %}"[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)."

## Further reading

* "[AUTOTITLE](/admin/overview/about-enterprise-accounts)"
* "[AUTOTITLE](/actions/using-workflows/reusing-workflows)"
