---
title: 支払い方法を削除する
intro: '{{ site.data.variables.product.prodname_dotcom }} の有料プランで支払い方法を使用していない場合、その支払い方法を削除すればアカウントに保存されなくなります。'
redirect_from:
  - /articles/removing-a-credit-card-associated-with-your-user-account/
  - /articles/removing-a-payment-method-associated-with-your-user-account/
  - /articles/removing-a-credit-card-associated-with-your-organization/
  - /articles/removing-a-payment-method-associated-with-your-organization/
  - /articles/removing-a-payment-method
versions:
  free-pro-team: '*'
---

{{ site.data.variables.product.product_name }} のクーポン付きプランの支払いをしていて、{{ site.data.variables.product.product_name }} の[他の有料機能や製品](/articles/about-billing-on-github)の支払い方法を使用していない場合、クレジットカードや PayPal の情報を削除できます。

{% tip %}

**ヒント:** 他の有料機能や製品のプランがなくて[アカウントを無料製品にダウングレード](/articles/downgrading-your-github-subscription)した場合、支払い情報は自動的に削除されます。

{% endtip %}

### 個人アカウントの支払い方法を削除する

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.user_settings.payment-info-tab }}
{{ site.data.reusables.dotcom_billing.remove-payment-method }}
{{ site.data.reusables.dotcom_billing.remove_payment_info }}

### Organization の支払い方法を削除する

{{ site.data.reusables.dotcom_billing.org-billing-perms }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.user_settings.payment-info-tab }}
{{ site.data.reusables.dotcom_billing.remove-payment-method }}
{{ site.data.reusables.dotcom_billing.remove_payment_info }}
