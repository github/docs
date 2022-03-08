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

## About {% data variables.product.prodname_actions %} access to internal repositories

If your organization is owned by an enterprise account, you can share actions and workflows within your enterprise, without publishing the action or workflow publicly, by allowing {% data variables.product.prodname_actions %} workflows to access an internal repository that contains the action or workflow.

Any actions or workflows stored in the internal repository can be used in workflows defined in other private and internal repositories owned by the same organization, or by any organization owned by the enterprise. Actions and workflows stored in internal repositories cannot be used in public repositories.

{% warning %}

**Warning**: {% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## Sharing actions and workflows with your enterprise

1. Store the action or workflow in an internal repository. 更多信息请参阅“[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)”。
1. Configure the repository to allow access to workflows in other private and internal repositories. 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)”。

## 延伸阅读

- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”
- "[Reusing workflows](/actions/using-workflows/reusing-workflows)"
