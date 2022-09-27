---
title: GitHub Marketplace 应用程序的定价计划
intro: '定价计划允许您为应用程序提供不同级别的服务或资源。 您可以在 {% data variables.product.prodname_marketplace %} 上架信息中提供最多 10 个定价计划。'
redirect_from:
  - /apps/marketplace/selling-your-app/github-marketplace-pricing-plans
  - /marketplace/selling-your-app/github-marketplace-pricing-plans
  - /developers/github-marketplace/pricing-plans-for-github-marketplace-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Pricing plans for apps
ms.openlocfilehash: e1ab751c26e59ec42e16dc7d9e5c0118dedffbde
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876069'
---
{% data variables.product.prodname_marketplace %} 定价计划可以是免费、统一定价或每单位定价。 价格以美元设置、显示和处理。 付费计划仅限验证的发布者发布的应用。 有关成为已验证发布者的详细信息，请参阅“[为组织申请发布者验证](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”。

客户使用附加到其在 {% data variables.product.product_location %} 上帐户的付款方式购买您的应用程序，而不必离开 {% data variables.product.prodname_dotcom_the_website %}。 您不必编写代码来执行结算交易，但必须处理来自 {% data variables.product.prodname_marketplace %} API 的事件。 有关详细信息，请参阅“[在应用中使用 {% data variables.product.prodname_marketplace %} API](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”。

如果您在 {% data variables.product.prodname_marketplace %} 中上架的应用程序有多个计划选项，您可以设置相应的定价计划。 例如，如果您的应用程序有两个计划选项：开源计划和专业计划，您可以为开源计划设置一个免费定价计划，为专业计划设置一个统一定价计划。 每个 {% data variables.product.prodname_marketplace %} 上架产品必须为列出的每个计划提供年度和月度价格。

有关如何创建定价计划的详细信息，请参阅“[设置 {% data variables.product.prodname_marketplace %} 上架的定价计划](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)”。

{% data reusables.marketplace.free-plan-note %}

## 定价计划的类型

### 免费定价计划

{% data reusables.marketplace.free-apps-encouraged %}

免费计划对用户完全免费。 如果您设置免费定价计划，则无法向选择免费定价计划的用户收取使用应用程序的费用。 您可以为上架产品同时创建免费和付费计划。

所有应用程序都需要处理新购买和取消事件。 仅含免费计划的应用程序无需处理免费试用、升级和降级事件。 有关详细信息，请参阅“[在应用中使用 {% data variables.product.prodname_marketplace %} API](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”。

如果您向已作为免费服务在 {% data variables.product.prodname_marketplace %} 中上架的应用程序添加付费计划，则需要请求验证应用程序并完成财务手续。

### 付费定价计划

有两种类型的付费定价计划：

- 统一定价计划按月和按年收取固定费用。

- 每单位定价计划按月或按年向您指定的单位收取固定费用。 “单位”可以是您愿意指定的任何对象（例如用户、席位或人员）。

您可能还希望提供免费试用。 这些选项为客户提供为期 14 天免费试用 OAuth 或 GitHub 应用程序的机会。 设置 Marketplace 定价计划时，您可以选择为统一定价或每单位定价计划提供免费试用选项。

## 免费试用

客户可以免费试用 Marketplace 上架产品中包含免费试用选项的任何付费计划。 但是，客户不能对一个 Marketplace 产品使用多次免费试用机会。

免费试用的固定期限为 14 天。 客户在试用期结束前 4 天（免费试用期第 11 天）收到通知，他们的计划将升级。 在免费试用结束时，如果客户不取消，他们将自动注册到他们正在试用的计划中。

有关详细信息，请参阅“[处理新购买和免费试用](/developers/github-marketplace/handling-new-purchases-and-free-trials/)”。

{% note %}

注意：GitHub 希望你在取消试用后 30 天（从收到取消事件开始算起）内删除任何私人客户数据。

{% endnote %}
