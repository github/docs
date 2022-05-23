---
title: 与企业共享操作和工作流程
intro: 您可以与企业共享操作或工作流程，而无需公开发布操作或工作流程。
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: 与企业共享
---

## 关于 {% data variables.product.prodname_actions %} 对内部存储库的访问

如果您的组织由企业帐户拥有，则通过允许 {% data variables.product.prodname_actions %} 工作流程访问包含操作或工作流程的内部存储库，您可以在企业内共享操作和工作流程，而无需公开发布操作或工作流程。

存储在内部存储库中的任何操作或工作流程都可以在同一组织拥有的其他私有和内部存储库或者企业拥有的任何组织所定义的工作流程中使用。 存储在内部存储库中的操作和工作流程不能在公共存储库中使用。

{% warning %}

**警告**：{% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## 与企业共享操作和工作流程

1. 将操作或工作流程存储在内部存储库中。 更多信息请参阅“[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)”。
1. 配置存储库以允许访问其他私有和内部存储库中的工作流程。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)”。

## 延伸阅读

- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”
- "[重用工作流程](/actions/using-workflows/reusing-workflows)"
