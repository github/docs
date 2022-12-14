---
title: ユーザアカウントに GitHub スポンサーを設定する
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
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145140211"
---
## <a name="joining--data-variablesproductprodname_sponsors-"></a>{% data variables.product.prodname_sponsors %} に参加する

{% data reusables.sponsors.you-can-be-a-sponsored-developer %} {% data reusables.sponsors.stripe-supported-regions %}

{% data variables.product.prodname_sponsors %} に組織として参加する方法については、「[組織の {% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)」を参照してください。

{% data reusables.sponsors.navigate-to-github-sponsors %}
2. Organization のオーナーの場合は、適格なアカウントが複数あります。 **[適格なアカウントの表示]** をクリックし、アカウントの一覧で個人アカウントを探します。
3. **[順番待ちリストに登録する]** をクリックします。
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.accept-legal-terms %}

サポートされている地域で銀行口座をお持ちであれば、{% data variables.product.prodname_dotcom %} は 2 週間以内に申請をレビューします。

## <a name="completing-your-sponsored-developer-profile"></a>スポンサード開発者プロフィールを記入する

{% data variables.product.prodname_dotcom %} で申請がレビューされたら、ユーザがあなたのスポンサーになれるようにスポンサード開発者プロフィールを設定できます。

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## <a name="creating-sponsorship-tiers"></a>スポンサーシップ層を作成する

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## <a name="submitting-your-bank-information"></a>銀行口座情報をサブミットする

サポートされている地域にお住まいの場合は、次の手順に従って Stripe Connect アカウントを作成し、銀行口座情報をサブミットできます。 在住している地位と、銀行口座の地域は一致している必要があります。 {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

## <a name="submitting-your-tax-information"></a>納税情報をサブミットする

{% data reusables.sponsors.tax-form-information-dev %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## <a name="enabling-two-factor-authentication-2fa-on-your--data-variablesproductprodname_dotcom--account"></a>{% data variables.product.prodname_dotcom %} アカウントで 2 要素認証 (2FA) を有効にする

スポンサード開発者になるには、{% data variables.product.product_location %} でアカウントの 2FA を有効にする必要があります。 詳細については、「[2 要素認証の構成](/articles/configuring-two-factor-authentication)」を参照してください。

## <a name="submitting-your-application-to--data-variablesproductprodname_dotcom--for-approval"></a>{% data variables.product.prodname_dotcom %} に申請をサブミットして承認を求める

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
4. **[承認の要求]** をクリックします。
  ![[承認の要求]](/assets/images/help/sponsors/request-approval-button.png) ボタン

{% data reusables.sponsors.github-review-app %}
