---
title: クライアントの有料 Organization をアップグレードまたはダウングレードする
intro: 支払いマネージャーは、クライアントの有料 Organization をいつでもアップグレードまたはダウングレードできます。
redirect_from:
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
versions:
  free-pro-team: '*'
---

{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**ヒント**:
- クライアントの Organization をアップグレードする前に、 [Organization のファイルで支払い方法を表示または更新](/articles/adding-or-editing-a-payment-method)することができます。
- これらの手順は、*シートごとのプラン*で Organization をアップグレードおよびダウングレードするためのものです。 クライアントが*レガシーのリポジトリ単位プラン*で {% data variables.product.product_name %} を支払っている場合は、レガシーのプランをアップグレードまたは[ダウングレード](/articles/downgrading-your-github-subscription)するか、[Organization をシート単位の価格に切り替える](/articles/upgrading-your-github-subscription)ことができます。

{% endtip %}

### Organization の有料シート数をアップグレードする

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

シートを追加した後は、追加したシート数と支払いサイクルの残り時間に基づいて、Organization のファイルに支払われた支払い方法に比例額が課金されます。

### Organization の有料シート数を無料にダウングレードする

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.downgrade-org-to-free %}
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}
