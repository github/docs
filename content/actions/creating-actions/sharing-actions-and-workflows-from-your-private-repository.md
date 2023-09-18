---
title: Sharing actions and workflows from your private repository
intro: You can share an action or reusable workflow without publishing them publicly.
versions:
  fpt: '*'
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share from your private repository
---

## About {% data variables.product.prodname_actions %} access to private repositories

You can share actions and reusable workflows from your private repository, without making them public, by allowing {% data variables.product.prodname_actions %} workflows to access a private repository that contains the action or reusable workflow.

Any actions or reusable workflows stored in the private repository can be used in workflows defined in other private repositories owned by the same organization or user. Actions and reusable workflows stored in private repositories cannot be used in public repositories.

{% warning %}

**Warning**:
- If you make a private repository accessible to {% data variables.product.prodname_actions %} workflows in other repositories, outside collaborators on the other repositories can indirectly access the private repository, even though they do not have direct access to these repositories. The outside collaborators can view logs for workflow runs when actions or workflows from the private repository are used.
- {% data reusables.actions.scoped-token-note %}

{% endwarning %}

## Sharing actions and workflows from your private repository

1. Store the action or reusable workflow in a private repository. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."
1. Configure the repository to allow access to workflows in other private repositories. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)."

## Further reading

- "[AUTOTITLE](/actions/using-workflows/reusing-workflows)"
