---
title: 支払い方法を追加または編集する
intro: アカウントに支払い方法を追加したり、アカウントの既存の支払い方法を更新することはいつでもできます。
redirect_from:
  - /articles/updating-your-personal-account-s-payment-method/
  - /articles/how-do-i-update-my-credit-card/
  - /articles/updating-your-account-s-credit-card/
  - /articles/updating-your-personal-account-s-credit-card/
  - /articles/updating-your-personal-account-s-paypal-information/
  - /articles/does-github-provide-invoicing/
  - /articles/switching-payment-methods-for-your-personal-account/
  - /articles/paying-for-your-github-organization-account/
  - /articles/updating-your-organization-s-credit-card/
  - /articles/updating-your-organization-s-paypal-information/
  - /articles/updating-your-organization-s-payment-method/
  - /articles/switching-payment-methods-for-your-organization/
  - /articles/adding-or-editing-a-payment-method
versions:
  free-pro-team: '*'
topics:
  - Billing
---

{% data reusables.dotcom_billing.payment-methods %} {% data reusables.dotcom_billing.same-payment-method %}

個人アカウントに対する請求書の対応や、発注書のサポートはしておりません。 アカウントの月次もしくは年次の支払日に、領収書をメールします。 あなたの会社、国、会計士が領収書にさらなる詳細を必要とする場合は、領収書に[情報を追加](/articles/adding-information-to-your-personal-account-s-receipts)できます。

### 個人アカウントの支払い方法を更新する

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.dotcom_billing.update_payment_method %}
1. If your account has an existing credit card that you want to update, click **New Card**. ![Billing New Card button](/assets/images/help/billing/billing-new-card-button.png)
{% data reusables.dotcom_billing.enter-payment-info %}

### Organization の支払い方法を更新する

{% data reusables.dotcom_billing.org-billing-perms %}

Organization がアメリカ外にあるか、{% data variables.product.product_name %} への支払いに会社の当座預金口座を使っているなら、支払い方法として PayPal が役立つかもしれません


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.dotcom_billing.update_payment_method %}
1. If your account has an existing credit card that you want to update, click **New Card**. ![Billing New Card button](/assets/images/help/billing/billing-new-card-button.png)
{% data reusables.dotcom_billing.enter-payment-info %}
