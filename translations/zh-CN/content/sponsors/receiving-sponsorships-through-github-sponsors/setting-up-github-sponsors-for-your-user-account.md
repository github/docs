---
title: 为您的用户帐户设置 GitHub Sponsors
intro: You can become a sponsored developer by joining {% data variables.product.prodname_sponsors %}, completing your sponsored developer profile, creating sponsorship tiers, submitting your bank and tax information, and enabling two-factor authentication for your account on {% data variables.product.product_location %}.
redirect_from:
- /articles/becoming-a-sponsored-developer
- /github/supporting-the-open-source-community-with-github-sponsors/becoming-a-sponsored-developer
- /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- User account
- Sponsors profile
shortTitle: Set up for personal account
ms.openlocfilehash: ec5b04d98410b94d5f5f12f55989b6165e5e3b20
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145130244"
---
## <a name="joining--data-variablesproductprodname_sponsors-"></a>加入 {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-developer %} {% data reusables.sponsors.stripe-supported-regions %}

若要将 {% data variables.product.prodname_sponsors %} 作为组织加入，请参阅“[为组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”。

{% data reusables.sponsors.navigate-to-github-sponsors %}
2. 如果您是组织所有者，则有多个符合条件的帐户。 单击“查看符合条件的帐户”，然后在帐户列表中找到你的个人帐户。
3. 单击“加入等待列表”。
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.accept-legal-terms %}

如果您在受支持的区域有银行帐户， {% data variables.product.prodname_dotcom %} 将在两周内审核您的申请。

## <a name="completing-your-sponsored-developer-profile"></a>填写被赞助开发者个人资料

在 {% data variables.product.prodname_dotcom %} 审核您的申请后，您可以设置您的被赞助开发者个人资料，以便人们可以开始赞助您。

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## <a name="creating-sponsorship-tiers"></a>创建赞助等级

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## <a name="submitting-your-bank-information"></a>提交您的银行信息

如果您居住在受支持的区域，可以按照这些说明创建 Stripe Connect 帐户来提交银行信息。 您居住的区域与您的银行帐户所在区域必须匹配。 {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

## <a name="submitting-your-tax-information"></a>提交您的税务信息

{% data reusables.sponsors.tax-form-information-dev %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## <a name="enabling-two-factor-authentication-2fa-on-your--data-variablesproductprodname_dotcom--account"></a>在您的 {% data variables.product.prodname_dotcom %} 帐户上启用双重身份验证 (2FA)。

在成为被赞助的开发者之前，您必须为您在 {% data variables.product.product_location %} 上的帐户启用 2FA。 有关详细信息，请参阅“[配置双因素身份验证](/articles/configuring-two-factor-authentication)”。

## <a name="submitting-your-application-to--data-variablesproductprodname_dotcom--for-approval"></a>向 {% data variables.product.prodname_dotcom %} 提交申请以请求批准

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
4. 单击“请求审批”。
  ![“请求审批”按钮](/assets/images/help/sponsors/request-approval-button.png)

{% data reusables.sponsors.github-review-app %}
