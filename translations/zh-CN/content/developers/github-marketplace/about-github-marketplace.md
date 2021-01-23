---
title: 关于 GitHub Marketplace
intro: '了解 {% data variables.product.prodname_marketplace %}，您可以在其中向所有 {% data variables.product.product_name %} 用户公开分享您的应用程序和操作。'
redirect_from:
  - /apps/marketplace/getting-started/
  - /marketplace/getting-started
versions:
  free-pro-team: '*'
---

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) 为您与希望扩展和改进其 {% data variables.product.prodname_dotcom %} 工作流程的开发者提供纽带。 您可以在 {% data variables.product.prodname_marketplace %} 中上架免费和付费的工具，供开发者使用。 {% data variables.product.prodname_marketplace %} 为开发者提供两种类型的工具：{% data variables.product.prodname_actions %} 和应用程序，每种工具都需要不同的步骤才能添加到 {% data variables.product.prodname_marketplace %} 中。

### GitHub Actions

{% data reusables.actions.actions-not-verified %}

要了解如何在 {% data variables.product.prodname_marketplace %} 中发布 {% data variables.product.prodname_actions %}，请参阅“[在 GitHub Marketplace 中发布操作](/actions/creating-actions/publishing-actions-in-github-marketplace)”。

### 应用

任何人都可以在 {% data variables.product.prodname_marketplace %} 上与其他用户分享其应用程序，但只有经 {% data variables.product.company_short %} 验证的上架产品才能包含付费计划。 更多信息请参阅“[关于经验证的创作者](/developers/github-marketplace/about-verified-creators)”。

如果您有兴趣为 {% data variables.product.prodname_marketplace %} 创建应用程序，但对于 {% data variables.product.prodname_github_apps %} 或 {% data variables.product.prodname_oauth_app %} 比较陌生，请参阅“[构建 {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)”或“[构建 {% data variables.product.prodname_oauth_app %}](/developers/apps/building-oauth-apps)”。

{% data reusables.marketplace.github_apps_preferred %}，尽管您可以在 {% data variables.product.prodname_marketplace %} 中上架 OAuth 和 {% data variables.product.prodname_github_app %}。 更多信息请参阅“[{% data variables.product.prodname_github_apps %} 与 {% data variables.product.prodname_oauth_app %} 之间的差异](/apps/differences-between-apps/)”和“[将 {% data variables.product.prodname_oauth_app %} 迁移到 {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/)”。

如果您对 {% data variables.product.prodname_marketplace %} 有疑问，请直接联系 {% data variables.contact.contact_support %}。

### 将应用程序发布到 {% data variables.product.prodname_marketplace %}

完成创建应用程序后，您可以将其发布到 {% data variables.product.prodname_marketplace %}，以便与其他用户分享它。 过程归纳如下：

1. 仔细检查您的应用程序，以确保它在其他仓库中的行为与预期一致，并且遵循最佳实践指南。 更多信息请参阅“[应用程序的安全最佳实践](/developers/github-marketplace/security-best-practices-for-apps)”和“[上架应用程序的要求](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience)”。

1. 将 web 挂钩事件添加到应用程序以跟踪用户帐单请求。 有关 {% data variables.product.prodname_marketplace %} API、web 挂钩事件以及帐单请求的更多信息，请参阅“[在应用程序中使用 {% data variables.product.prodname_marketplace %} API](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”。

1. 创建 {% data variables.product.prodname_marketplace %} 上架信息草稿。 更多信息请参阅“[起草应用程序上架信息](/developers/github-marketplace/drafting-a-listing-for-your-app)”。

1. 添加定价计划。 更多信息请参阅“[为上架产品设置定价计划](/developers/github-marketplace/setting-pricing-plans-for-your-listing)”。

1. 检查您的应用程序是否满足在 {% data variables.product.prodname_marketplace %} 中作为免费或付费应用程序上架的要求。 更多信息请参阅“[上架应用程序的要求](/developers/github-marketplace/requirements-for-listing-an-app)”。

1. 阅读并接受“[{% data variables.product.prodname_marketplace %} 开发者协议](/articles/github-marketplace-developer-agreement/)”的条款。

1. 提交要在 {% data variables.product.prodname_marketplace %} 中发布的上架信息，如果要出售应用程序，还需要请求验证。 更多信息请参阅“[提交要发布的上架信息](/developers/github-marketplace/submitting-your-listing-for-publication)”。

上架专家将联系您，提出一些问题或要求您完成其他步骤。 例如，如果您添加了付费计划，则需要完成验证过程并完成财务手续。 一旦您的上架信息得到批准，应用程序将发布到 {% data variables.product.prodname_marketplace %}。

### 查看应用程序的表现

您可以访问上架产品的指标和交易。 更多信息请参阅：

- “[查看上架产品的指标](/developers/github-marketplace/viewing-metrics-for-your-listing)”
- “[查看上架产品的交易](/developers/github-marketplace/viewing-transactions-for-your-listing)”
