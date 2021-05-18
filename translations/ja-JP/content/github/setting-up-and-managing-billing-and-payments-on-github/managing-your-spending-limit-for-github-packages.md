---
title: GitHub パッケージの利用上限を管理する
intro: '{% data variables.product.prodname_registry %} の使用に対して利用上限を設定できます。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - Billing
---

### {% data variables.product.prodname_registry %} の利用上限について

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} {% data variables.product.prodname_registry %} 使用料金の詳細については、「[{% data variables.product.prodname_registry %} の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)」を参照してください。

Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合、Azure サブスクリプション ID を Enterprise アカウントに接続して、アカウントを含む金額を超える {% data variables.product.prodname_registry %} の使用を有効にして支払うことができます。 詳しい情報については、「[Azure サブスクリプションを Enterprise に接続する](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。

$0 以外の利用上限を設定すると、直ちに現在の支払い期間中の超過分について責任が生じます。 たとえば、Organizationで {% data variables.product.prodname_team %} を使用していて超過を許可しておらず、月あたりのストレージ使用量が1.9GBから2.1GBに増えるプライベートパッケージの新しいバージョンを発行した場合、ストレージは製品に含まれる2GBをわずかに超えることになります。

超過を有効にしていなかったため、次にパッケージのバージョンを発行しようとしても失敗します。 その月の0.1GBの超過分について請求書は発行されません。 ただし、超過分を有効にすると、最初の請求には、現在の支払いサイクルの既存の超過分 0.1GB と、発生した追加の超過分が含まれます。

### ユーザアカウントの {% data variables.product.prodname_registry %} に対する利用上限を管理する

自身のユーザアカウントに対する {% data variables.product.prodname_registry %} の利用上限は、誰でも管理できます。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Organizationの {% data variables.product.prodname_registry %} に対する利用上限を管理する

Organization の {% data variables.product.prodname_registry %} については、Organizationのオーナーと支払いマネージャーが利用上限を管理できます。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Enterprise アカウントの {% data variables.product.prodname_registry %} に対する利用上限を管理する

Enterprise アカウントの {% data variables.product.prodname_registry %} については、Enterprise オーナーと支払いマネージャーが利用上限を管理できます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Above "
{% data variables.product.prodname_actions %} and Packages monthly usage", click **Spending Limit**.
  ![Spending limit tab](/assets/images/help/settings/spending-limit-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
