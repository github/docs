---
title: 上架应用程序的要求
intro: '{% data variables.product.prodname_marketplace %} 上的应用程序必须满足本页列出的要求才能发布上架。'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /developers/github-marketplace/requirements-for-listing-an-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Listing requirements
ms.openlocfilehash: 58112d935a77119325dab4ad72c87561d0c00e47
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084989'
---
<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

在 {% data variables.product.prodname_marketplace %} 中上架应用程序的要求取决于您是要提供免费应用程序还是付费应用程序。

## 对所有 {% data variables.product.prodname_marketplace %} 上架产品的要求

{% data variables.product.prodname_marketplace %} 中的所有上架产品应该是能够为 {% data variables.product.product_name %} 社区提供价值的工具。 提交要发布的上架信息时，必须阅读并接受“[{% data variables.product.prodname_marketplace %} 开发人员协议](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement)”的条款。

### 所有应用程序的用户体验要求

所有上架产品应满足以下要求，无论它们是免费应用程序还是付费应用程序。

- 上架信息不得主动诱导用户离开 {% data variables.product.product_name %}。
- 上架信息必须包含发布者的有效联系信息。
- 上架信息必须包含应用程序的相关说明。
- 上架信息必须指定定价计划。
- 应用程序必须为客户提供价值，并通过身份验证以外的其他方式与平台集成。
- 应用程序必须在 {% data variables.product.prodname_marketplace %} 中公开可用，并且不能是测试版或只能通过邀请获取。
- 应用程序必须设置 web 挂钩事件，以便在发生计划更改或取消时通过 {% data variables.product.prodname_marketplace %} API 通知发布者。 有关详细信息，请参阅“[在应用中使用 {% data variables.product.prodname_marketplace %} API](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”。

有关提供良好客户体验的详细信息，请参阅“[应用的客户体验最佳做法](/developers/github-marketplace/customer-experience-best-practices-for-apps)”。

### 所有应用程序的品牌和上架要求

- 使用 GitHub 徽标的应用程序必须遵循 {% data variables.product.company_short %} 指南。 有关详细信息，请参阅“[{% data variables.product.company_short %} 徽标和用法](https://github.com/logos)”。
- 应用必须具有符合“[编写 {% data variables.product.prodname_marketplace %} 上架产品描述](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)”中提供的建议的徽标、功能卡和屏幕截图图像。
- 上架信息必须包含认真编写并且没有语法错误的说明。 有关编写上架产品的指导，请参阅“[编写 {% data variables.product.prodname_marketplace %} 上架产品描述](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)”。

为了保护您的客户，我们建议您还要遵循安全最佳实践。 有关详细信息，请参阅“[应用的安全性最佳做法](/developers/github-marketplace/security-best-practices-for-apps)”。

## 免费应用程序注意事项

{% data reusables.marketplace.free-apps-encouraged %} 

## 付费应用程序的要求

要在 {% data variables.product.prodname_marketplace %} 上发布应用程序的付费计划，您的应用程序必须由身份为经验证发布者的组织所拥有。 有关验证过程或转移应用所有权的详细信息，请参阅“[为组织申请发布者验证](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”。

如果您的应用程序已发布，并且您是经验证的发布者，则您可以使用定价计划编辑器发布新的付费计划。 有关详细信息，请参阅“[设置上架产品的定价计划](/developers/github-marketplace/setting-pricing-plans-for-your-listing)”。

要发布付费应用程序（或提供付费计划的应用程序），您还必须满足以下要求：

- {% data variables.product.prodname_github_apps %} 应至少有 100 个安装设施。
- {% data variables.product.prodname_oauth_apps %} 应至少有 200 个用户。
- 所有付费应用程序必须处理关于新购买、升级、降级、取消和免费试用的 {% data variables.product.prodname_marketplace %} 购买事件。 有关详细信息，请参阅下面的“[付费应用的计费要求](#billing-requirements-for-paid-apps)”。

当您准备在 {% data variables.product.prodname_marketplace %} 上发布应用程序时，您必须请求验证应用程序上架信息。

{% note %}

注意：{% data reusables.marketplace.app-transfer-to-org-for-verification %} 有关如何将应用转移到组织的信息，请参阅：“[提交要发布的上架信息](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)”。

{% endnote %}

## 付费应用程序的计费要求

您的应用程序无需处理付款，但需要使用 {% data variables.product.prodname_marketplace %} 购买事件来管理新购买、升级、降级、取消和免费试用。 有关如何将这些事件集成到应用的信息，请参阅“[在应用中使用 {% data variables.product.prodname_marketplace %} API](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”。

GitHub 的计费 API 允许客户在不离开 GitHub 的情况下购买应用程序，并使用已附加到其在 {% data variables.product.product_location %} 上帐户的付款方式来支付服务费用。

- 应用程序必须在付费订阅计划中支持月度和年度计费。
- 上架产品可提供免费和付费计划的任何组合。 免费计划是可选项，但建议提供。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_marketplace %} 上架产品的定价计划](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)”。
