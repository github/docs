---
title: GitHub Actions for GitHub AE 使用入门
intro: '了解在 {% data variables.product.prodname_ghe_managed %} 上配置 {% data variables.product.prodname_actions %}。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

本文介绍站点管理员如何配置 {% data variables.product.prodname_ghe_managed %} 来使用 {% data variables.product.prodname_actions %}。

### 管理企业中 {% data variables.product.prodname_actions %} 的访问权限

您可以使用策略来管理 {% data variables.product.prodname_actions %} 的访问。 更多信息请参阅“[为企业执行 GitHub Actions 策略](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)”。

### 添加运行器

{% note %}

**注意：**要添加 {% data variables.actions.hosted_runner %} 到 {% data variables.product.prodname_ghe_managed %}，您需要联系 {% data variables.product.prodname_dotcom %} 支持。

{% endnote %}

要运行 {% data variables.product.prodname_actions %} 工作流程，您需要添加运行器。 您可以在企业、组织或仓库级别添加运行器。 更多信息请参阅“[关于 {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/about-ae-hosted-runners)”。


### {% data variables.product.prodname_actions %} 的一般安全性增强

如需了解有关 {% data variables.product.prodname_actions %} 安全实践的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的安全性增强](/actions/learn-github-actions/security-hardening-for-github-actions)”。
