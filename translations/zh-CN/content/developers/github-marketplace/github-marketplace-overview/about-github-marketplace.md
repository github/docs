---
title: 关于 GitHub Marketplace
intro: '了解 {% data variables.product.prodname_marketplace %}，您可以在其中向所有 {% data variables.product.product_name %} 用户公开分享您的应用程序和操作。'
redirect_from:
  - /apps/marketplace/getting-started
  - /marketplace/getting-started
  - /developers/github-marketplace/about-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 5a722d35fb74607b9200a1fe30d804df44330cea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084978'
---
[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) 为你与希望扩展和改进其 {% data variables.product.prodname_dotcom %} 工作流的开发者提供纽带。 您可以在 {% data variables.product.prodname_marketplace %} 中上架免费和付费的工具，供开发者使用。 {% data variables.product.prodname_marketplace %} 为开发者提供两种类型的工具：{% data variables.product.prodname_actions %} 和应用程序，每种工具都需要不同的步骤才能添加到 {% data variables.product.prodname_marketplace %} 中。

## GitHub 操作

{% data reusables.actions.actions-not-verified %}

要了解如何在 {% data variables.product.prodname_marketplace %} 中发布 {% data variables.product.prodname_actions %}，请参阅“[在 GitHub Marketplace 中发布操作](/actions/creating-actions/publishing-actions-in-github-marketplace)”。

## “应用”

任何人都可以在 {% data variables.product.prodname_marketplace %} 上与其他用户分享其应用程序，但只有组织拥有的应用程序才能出售。 

要发布应用程序付费计划并显示 Marketplace 徽章，您必须完成发布者验证过程。 有关详细信息，请参阅“[为你的组织申请发布者验证](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”或“[列出应用的要求](/developers/github-marketplace/requirements-for-listing-an-app)”。

组织满足要求后，组织中具有所有者权限的人可以发布其任何应用程序的付费计划。 每个具有付费计划的应用程序还要完成财务手续才能启用付款。

要发布具有免费计划的应用程序，只需满足上架任何应用程序的一般要求即可。 有关详细信息，请参阅“[所有 GitHub Marketplace 列表的要求](/developers/github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings)”。

### 不熟悉应用程序？

如果你有兴趣为 {% data variables.product.prodname_marketplace %} 创建应用程序，但对于 {% data variables.product.prodname_github_apps %} 或 {% data variables.product.prodname_oauth_apps %} 比较陌生，请参阅“[构建 {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)”或“[构建 {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps)”。

### {% data variables.product.prodname_github_apps %} 与 {% data variables.product.prodname_oauth_apps %} 的比较

{% data reusables.marketplace.github_apps_preferred %}，尽管您可以在 {% data variables.product.prodname_marketplace %} 同时列出OAuth 和 {% data variables.product.prodname_github_apps %}。 更多信息请参阅“[{% data variables.product.prodname_github_apps %} 与 {% data variables.product.prodname_oauth_apps %} 之间的差异](/apps/differences-between-apps/)”和“[将 {% data variables.product.prodname_oauth_apps %} 迁移到 {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/)”。

## 将应用程序发布到 {% data variables.product.prodname_marketplace %} 概述

完成创建应用程序后，您可以将其发布到 {% data variables.product.prodname_marketplace %}，以便与其他用户分享它。 过程归纳如下：

1. 仔细检查您的应用程序，以确保它在其他仓库中的行为与预期一致，并且遵循最佳实践指南。 有关详细信息，请参阅“[应用的安全最佳做法](/developers/github-marketplace/security-best-practices-for-apps)”和“[上架应用的要求](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience)”。

1. 将 web 挂钩事件添加到应用程序以跟踪用户帐单请求。 有关 {% data variables.product.prodname_marketplace %} API、Webhook 事件以及计费请求的更多信息，请参阅“[在应用中使用 {% data variables.product.prodname_marketplace %} API](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”。

1. 创建 {% data variables.product.prodname_marketplace %} 上架信息草稿。 有关详细信息，请参阅“[起草应用上架信息](/developers/github-marketplace/drafting-a-listing-for-your-app)”。

1. 添加定价计划。 有关详细信息，请参阅“[为上架产品设置定价计划](/developers/github-marketplace/setting-pricing-plans-for-your-listing)”。

1. 阅读并接受 [{% data variables.product.prodname_marketplace %} 开发人员协议](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement)的条款。

1. 提交要在 {% data variables.product.prodname_marketplace %} 中发布的上架信息。 有关详细信息，请参阅“[提交上架产品以供发布](/developers/github-marketplace/submitting-your-listing-for-publication)”。

## 查看应用程序的表现

您可以访问上架产品的指标和交易。 有关详细信息，请参阅：

- [查看上架产品的指标](/developers/github-marketplace/viewing-metrics-for-your-listing)
- [查看上架产品的交易](/developers/github-marketplace/viewing-transactions-for-your-listing)

## 联系支持 

如果您对 {% data variables.product.prodname_marketplace %} 有疑问，请直接联系 {% data variables.contact.contact_support %}。
