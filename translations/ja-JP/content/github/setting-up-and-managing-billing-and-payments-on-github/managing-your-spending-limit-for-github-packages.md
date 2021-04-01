---
title: GitHub パッケージの利用上限を管理する
intro: '{% data variables.product.prodname_registry %} の使用に対して利用上限を設定できます。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - 支払い
---

### {% data variables.product.prodname_registry %} の利用上限について

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} For more information about pricing for {% data variables.product.prodname_registry %} usage, see "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."

Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合、Azure サブスクリプション ID を Enterprise アカウントに接続して、アカウントを含む金額を超える {% data variables.product.prodname_registry %} の使用を有効にして支払うことができます。 For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

As soon as you set a spending limit other than $0, you will be responsible for any existing overages in the current billing period. たとえば、Organizationで {% data variables.product.prodname_team %} を使用していて超過を許可しておらず、月あたりのストレージ使用量が1.9GBから2.1GBに増えるプライベートパッケージの新しいバージョンを発行した場合、ストレージは製品に含まれる2GBをわずかに超えることになります。

超過を有効にしていなかったため、次にパッケージのバージョンを発行しようとしても失敗します。 その月の0.1GBの超過分について請求書は発行されません。 However, if you enable overages, your first bill will include the 0.1GB of existing overage for the current billing cycle, as well as any additional overages you accrue.

### ユーザアカウントの {% data variables.product.prodname_registry %} に対する利用上限を管理する

自身のユーザアカウントに対する {% data variables.product.prodname_registry %} の利用上限は、誰でも管理できます。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Organizationの {% data variables.product.prodname_registry %} に対する利用上限を管理する

Organization の {% data variables.product.prodname_registry %} については、Organizationのオーナーと支払いマネージャーが利用上限を管理できます。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Enterprise アカウントの {% data variables.product.prodname_registry %} に対する利用上限を管理する

Enterprise アカウントの {% data variables.product.prodname_registry %} については、Enterprise オーナーと支払いマネージャーが利用上限を管理できます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. [
[{% data variables.product.prodname_actions %} and Packages monthly usage] で、[**Cost management**] をクリックします。
  ![コスト管理タブ](/assets/images/help/settings/cost-management-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
