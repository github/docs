---
title: GitHub パッケージの使用状況を表示する
intro: '{% data variables.product.prodname_registry %} について、ストレージとデータ転送の使用状況の詳細を表示できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-packages-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/viewing-your-github-packages-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Packages
  - Organizations
  - User account
shortTitle: 使用状況の表示
---

## 個人アカウントの {% data variables.product.prodname_registry %} の使用状況を表示する

自身の個人アカウントの {% data variables.product.prodname_registry %} の使用状況は、誰でも表示できます。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

## Organizationの {% data variables.product.prodname_registry %} の使用状況を表示する

Organization については、Organization のオーナーと支払いマネージャーが {% data variables.product.prodname_registry %} の使用状況を管理できます。 Enterprise アカウントで管理されている Organization の場合、Organization の支払いページで {% data variables.product.prodname_registry %} の使用状況を確認できるのは Organization のオーナーだけです。

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## Enterprise アカウントの {% data variables.product.prodname_registry %} の使用状況を表示する

Enterprise アカウントについては、Enterprise オーナーと支払いマネージャーが {% data variables.product.prodname_registry %} の使用状況を確認できます。

{% note %}

**注釈:** Enterprise アカウントの支払い詳細には、Organizationごとのストレージデータ使用状況の概要しか示されません。 {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. [{% data variables.product.prodname_registry %}] で、Enterprise アカウントの Organization ごとにデータ転送の使用状況の詳細を表示します。 ![データ転送の利用状況の詳細](/assets/images/help/billing/packages-data-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
{% endif %}
