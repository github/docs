---
title: GitHub Actions の利用上限を管理する
intro: '{% data variables.product.prodname_actions %} の使用に対して利用上限を設定できます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
topics:
  - Billing
---

### {% data variables.product.prodname_actions %} の利用上限について

{% data reusables.github-actions.actions-billing %}

{% data reusables.github-actions.actions-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} {% data variables.product.prodname_actions %} 使用料金の詳細については、「[{% data variables.product.prodname_actions %} の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)」を参照してください。

Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合、Azure サブスクリプション ID を Enterprise アカウントに接続して、アカウントを含む金額を超える {% data variables.product.prodname_actions %} の使用を有効にして支払うことができます。 詳しい情報については、「[Azure サブスクリプションを Enterprise に接続する](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。

$0 以外の利用上限を設定すると、直ちに現在の支払い期間中の超過分について責任が生じます。 たとえば、Organizationで {% data variables.product.prodname_team %} を使用していて超過を許可しておらず、月あたりのストレージ使用量が1.9GBから2.1GBに増えるワークフローアーティファクトを作成した場合、ストレージは製品に含まれる2GBをわずかに超えることになります。

超過を有効にしていないため、次にワークフローの成果物を作成しようとしても失敗します。 その月の0.1GBの超過分について請求書は発行されません。 ただし、超過分を有効にすると、最初の請求には、現在の支払いサイクルの既存の超過分 0.1GB と、発生した追加の超過分が含まれます。

### ユーザアカウントの {% data variables.product.prodname_actions %} に対する利用上限を管理する

自身のユーザアカウントに対する {% data variables.product.prodname_actions %} の利用上限は、誰でも管理できます。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Organizationの {% data variables.product.prodname_actions %} に対する利用上限を管理する

Organization の {% data variables.product.prodname_actions %} については、Organizationのオーナーと支払いマネージャーが利用上限を管理できます。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Enterprise アカウントの {% data variables.product.prodname_actions %} に対する利用上限を管理する

Enterprise アカウントの {% data variables.product.prodname_actions %} の利用上限は、Enterprise オーナーと支払いマネージャーが管理できます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. [
[{% data variables.product.prodname_actions %} and Packages monthly usage] で、[**Cost management**] をクリックします。
  ![コスト管理タブ](/assets/images/help/settings/cost-management-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
