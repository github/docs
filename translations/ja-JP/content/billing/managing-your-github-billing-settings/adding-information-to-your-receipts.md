---
title: 領収書に情報を追加する
intro: '{% data variables.product.product_name %} の領収書には、税金や会社あるいは国が求める会計情報などの情報を加えることができます。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/adding-information-to-your-receipts
  - /articles/can-i-add-my-credit-card-number-to-my-receipts/
  - /articles/can-i-add-extra-information-to-my-receipts--2/
  - /articles/how-can-i-add-extra-information-to-my-receipts/
  - /articles/could-you-add-my-card-number-to-my-receipts/
  - /articles/how-can-i-add-extra-information-to-my-personal-account-s-receipts/
  - /articles/adding-information-to-your-personal-account-s-receipts/
  - /articles/how-can-i-add-extra-information-to-my-organization-s-receipts/
  - /articles/adding-information-to-your-organization-s-receipts/
  - /articles/adding-information-to-your-receipts
  - /github/setting-up-and-managing-billing-and-payments-on-github/adding-information-to-your-receipts
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/adding-information-to-your-receipts
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Organizations
  - Receipts
  - User account
---

領収書には、{% data variables.product.prodname_dotcom %} プランと合わせて[他の有料の機能や製品](/articles/about-billing-on-github)のプランが含まれます。

{% warning %}

**警告**: セキュリティ上の理由から、領収書には秘密情報や財務情報 (クレジットカード番号など) を含めないように強くおすすめします。

{% endwarning %}

### 個人アカウントの領収書への情報の追加

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.user_settings.payment-info-link %}
{% data reusables.dotcom_billing.extra_info_receipt %}

### Organization の領収書への情報の追加

{% note %}

**メモ**: {% data reusables.dotcom_billing.org-billing-perms %}

{% endnote %}


{% data reusables.organizations.billing-settings %}
{% data reusables.user_settings.payment-info-link %}
{% data reusables.dotcom_billing.extra_info_receipt %}
