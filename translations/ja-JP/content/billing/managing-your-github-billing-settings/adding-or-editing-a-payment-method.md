---
title: 支払い方法を追加または編集する
intro: アカウントに支払い方法を追加したり、アカウントの既存の支払い方法を更新することはいつでもできます。
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/adding-or-editing-a-payment-method
  - /articles/updating-your-personal-account-s-payment-method
  - /articles/how-do-i-update-my-credit-card
  - /articles/updating-your-account-s-credit-card
  - /articles/updating-your-personal-account-s-credit-card
  - /articles/updating-your-personal-account-s-paypal-information
  - /articles/does-github-provide-invoicing
  - /articles/switching-payment-methods-for-your-personal-account
  - /articles/paying-for-your-github-organization-account
  - /articles/updating-your-organization-s-credit-card
  - /articles/updating-your-organization-s-paypal-information
  - /articles/updating-your-organization-s-payment-method
  - /articles/switching-payment-methods-for-your-organization
  - /articles/adding-or-editing-a-payment-method
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/adding-or-editing-a-payment-method
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - User account
shortTitle: Manage a payment method
ms.openlocfilehash: 1fd85d480a7ed5085b9f142c82314f738fa6ffc6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087869'
---
{% data reusables.dotcom_billing.payment-methods %} {% data reusables.dotcom_billing.same-payment-method %}

個人アカウントに対する請求書の対応や、発注書のサポートはしておりません。 アカウントの月次もしくは年次の支払日に、領収書をメールします。 会社、国、会計士から、さらに詳細情報が記載された領主書を求められた場合は、領収書に[その他の情報を追加する](/articles/adding-information-to-your-personal-account-s-receipts)こともできます。

## 個人アカウントの支払い方法を更新する

{% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.update_payment_method %}
1. アカウントに更新したい既存の請求情報がある場合は、 **[Edit]\(編集\)** をクリックします。
![請求の [New Card]\(新しいカード\) ボタン](/assets/images/help/billing/billing-information-edit-button.png) {% data reusables.dotcom_billing.enter-billing-info %}
1. アカウントに更新したい既存の支払い方法がある場合は、 **[Edit]\(編集\)** をクリックします。
![請求の [New Card]\(新しいカード\) ボタン](/assets/images/help/billing/billing-payment-method-edit-button.png) {% data reusables.dotcom_billing.enter-payment-info %}

## Organization の支払い方法を更新する

{% data reusables.dotcom_billing.org-billing-perms %}

Organization がアメリカ外にあるか、{% data variables.product.product_name %} への支払いに会社の当座預金口座を使っているなら、支払い方法として PayPal が役立つかもしれません

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.update_payment_method %}
1. アカウントに更新したい既存のクレジット カードがある場合は、 **[New Card]\(新しいカード\)** をクリックします。
![請求の [New Card]\(新しいカード\) ボタン](/assets/images/help/billing/billing-new-card-button.png) {% data reusables.dotcom_billing.enter-payment-info %}
