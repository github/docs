---
title: GitHub パッケージの使用状況を表示する
intro: '{% data variables.product.prodname_registry %} について、ストレージとデータ転送の使用状況の詳細を表示できます。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - 支払い
---

### ユーザアカウントの {% data variables.product.prodname_registry %} の使用状況を表示する

自身のユーザアカウントの {% data variables.product.prodname_registry %} の使用状況は、誰でも表示できます。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Organizationの {% data variables.product.prodname_registry %} の使用状況を表示する

Organization については、Organization のオーナーと支払いマネージャーが {% data variables.product.prodname_registry %} の使用状況を管理できます。 Enterprise アカウントで管理されている Organization の場合、Organization の支払いページで {% data variables.product.prodname_registry %} の使用状況を確認できるのは Organization のオーナーだけです。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Enterprise アカウントの {% data variables.product.prodname_registry %} の使用状況を表示する

Enterprise アカウントについては、Enterprise オーナーと支払いマネージャーが {% data variables.product.prodname_registry %} の使用状況を確認できます。

{% note %}

**注釈:** Enterprise アカウントの支払い詳細には、Organizationごとのストレージデータ使用状況の概要しか示されません。 {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. [
[{% data variables.product.prodname_registry %}] で、Enterprise アカウントの Organization ごとにデータ転送の使用状況の詳細を表示します。
  ![データ転送の利用状況の詳細](/assets/images/help/billing/packages-data-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
