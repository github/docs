---
title: Sharing actions and workflows with your enterprise
intro: You can share an action or workflow with your enterprise without publishing the action or workflow publicly.
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share with your enterprise
---

{% note %}

**Note:** Allowing workflows to access actions in internal repositories is currently in beta and subject to change.

{% endnote %}

## About {% data variables.product.prodname_actions %} access to internal repositories

If your organization is owned by an enterprise account, you can share actions and workflows within your enterprise, without publishing the action or workflow publicly, by allowing {% data variables.product.prodname_actions %} workflows to access an internal repository that contains the action or workflow.

Any actions or workflows stored in the internal repository can be used in workflows defined in other private and internal repositories owned by the same organization, or by any organization owned by the enterprise. Actions and workflows stored in internal repositories cannot be used in public repositories.

{% warning %}

**Aviso**: {% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## Sharing actions and workflows with your enterprise

1. Store the action or workflow in an internal repository. Para obter mais informações, consulte "[Sobre repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)".
1. Configure the repository to allow access to workflows in other private and internal repositories. Para obter mais informações, consulte "[Gerenciar configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)".

## Leia mais

- "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)"
- "[Reusing workflows](/actions/using-workflows/reusing-workflows)"
