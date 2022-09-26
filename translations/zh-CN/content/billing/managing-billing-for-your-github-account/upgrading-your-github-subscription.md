---
title: 升级 GitHub 订阅
intro: '您可以随时升级 {% data variables.product.product_location %} 上任何类型的帐户的订阅。'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription
  - /articles/upgrading-your-personal-account-s-billing-plan
  - /articles/upgrading-your-personal-account
  - /articles/upgrading-your-personal-account-from-free-to-a-paid-account
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-paypal
  - /articles/500-error-while-upgrading
  - /articles/upgrading-your-organization-s-billing-plan
  - /articles/changing-your-organization-billing-plan
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-paypal
  - /articles/upgrading-your-organization-account
  - /articles/switching-from-per-repository-to-per-user-pricing
  - /articles/adding-seats-to-your-organization
  - /articles/upgrading-your-github-billing-plan
  - /articles/upgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/upgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Troubleshooting
  - Upgrades
  - User account
shortTitle: Upgrade your subscription
ms.openlocfilehash: 47426fa211521a166738c5a9bb00edddfc2556f2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084475'
---
## 关于订阅升级

{% data reusables.accounts.accounts-billed-separately %}

升级帐户的订阅时，升级将更改仅适用于该帐户的付费功能，而不会更改您使用的任何其他帐户。

## 升级个人帐户的订阅

你可以将个人帐户从 {% data variables.product.prodname_free_user %} 升级到 {% data variables.product.prodname_pro %}，以便在个人帐户拥有的私有存储库上获取高级代码评审工具。 升级您的个人帐户不会影响您可能管理的任何组织或这些组织拥有的存储库。 {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. 在“当前计划”旁边，单击“升级”。
  ![“升级”按钮](/assets/images/help/billing/settings_billing_user_upgrade.png)
2. 在“比较计划”页上的“Pro”下，单击“升级到 Pro”。
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.show-plan-details %} {% data reusables.dotcom_billing.enter-billing-info %} {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## 管理组织的订阅

您可以将组织的订阅升级到其他产品，为现有产品添加席位，或者从每存储库定价切换到每用户定价。

### 升级组织的订阅

您可以将组织从 {% data variables.product.prodname_free_team %} 升级到 {% data variables.product.prodname_team %}，以访问团队的高级协作和管理工具，也可以将组织升级到 {% data variables.product.prodname_ghe_cloud %} 以使用更多的安全性、合规性和部署控件。 升级组织不会影响您的个人帐户或您的个人帐户拥有的存储库。 {% data reusables.gated-features.more-info-org-products %}

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %} {% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.show-plan-details %} {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.owned_by_business %} {% data reusables.dotcom_billing.finish_upgrade %}

### 使用 {% data variables.product.prodname_ghe_cloud %} 的组织的后续步骤

如果您已将组织升级到 {% data variables.product.prodname_ghe_cloud %}，便可设置组织的身份和访问管理。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[管理组织的 SAML 单一登录](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization){% ifversion fpt %}”。{% else %}."{% endif %}

如果想要将企业帐户与 {% data variables.product.prodname_ghe_cloud %} 一起使用，请联系 {% data variables.contact.contact_enterprise_sales %}。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于企业帐户](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}”。{% else %}."{% endif %}

### 将席位添加到您的组织

如果希望其他用户能够访问您 {% data variables.product.prodname_team %} 组织的私有仓库，您可以随时购买更多席位。

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

### 将组织从按仓库定价切换为按用户定价

{% data reusables.dotcom_billing.switch-legacy-billing %} 有关详细信息，请参阅“[关于每用户定价](/articles/about-per-user-pricing)”。

{% data reusables.organizations.billing-settings %}
5. 在计划名称的右侧，使用“编辑”下拉菜单，并选择“编辑计划” 。
  ![“编辑”下拉菜单](/assets/images/help/billing/per-user-upgrade-button.png)
6. 在“适用于团队的高级工具”的右侧，单击“立即升级”。
  ![“立即升级”按钮](/assets/images/help/billing/per-user-upgrade-now-button.png) {% data reusables.dotcom_billing.choose_org_plan %} {% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.owned_by_business %} {% data reusables.dotcom_billing.finish_upgrade %}

## 升级时对 500 错误进行故障排除

{% data reusables.dotcom_billing.500-error %}

## 延伸阅读

- “[{% data variables.product.prodname_dotcom %} 的产品](/articles/github-s-products)”
- “[升级或降级如何影响计费过程？](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)”
- “[关于 {% data variables.product.prodname_dotcom %} 的计费](/articles/about-billing-on-github)”。
