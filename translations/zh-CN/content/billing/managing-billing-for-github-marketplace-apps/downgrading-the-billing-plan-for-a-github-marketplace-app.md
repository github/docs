---
title: 降级 GitHub Marketplace 应用程序的结算方案
intro: '如果您想要使用不同的结算方案，可以随时降级您的 {% data variables.product.prodname_marketplace %} 应用程序。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-the-billing-plan-for-a-github-marketplace-app
  - /articles/downgrading-an-app-for-your-personal-account
  - /articles/downgrading-an-app-for-your-organization
  - /articles/downgrading-the-billing-plan-for-a-github-marketplace-app
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/downgrading-the-billing-plan-for-a-github-marketplace-app
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Downgrades
  - Marketplace
  - Organizations
  - User account
shortTitle: Downgrade billing plan
ms.openlocfilehash: c50995729c266cbfdac13b81da4f0ffaa0b4ff85
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084516'
---
降级应用程序后，您的订阅在当前结算周期结束之前将保持有效。 降级会在下一个结算日期生效。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_marketplace %} 的计费](/articles/about-billing-for-github-marketplace)”。

{% data reusables.marketplace.downgrade-marketplace-only %}

## 降级个人帐户的应用程序

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.marketplace.downgrade-app-billing-settings %} {% data reusables.marketplace.choose-new-plan %} {% data reusables.marketplace.choose-new-quantity %} {% data reusables.marketplace.issue-plan-changes %}

## 降级组织的应用程序

{% data reusables.marketplace.marketplace-org-perms %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.marketplace.downgrade-app-billing-settings %} {% data reusables.marketplace.choose-new-plan %} {% data reusables.marketplace.choose-new-quantity %} {% data reusables.marketplace.issue-plan-changes %}

## 延伸阅读

- [取消 {% data variables.product.prodname_marketplace %} 应用](/articles/canceling-a-github-marketplace-app/)
