---
title: GitHub Actions の利用上限を管理する
intro: '{% data variables.product.prodname_actions %} の使用に対して利用上限を設定できます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

### {% data variables.product.prodname_actions %} の利用上限について

{% data reusables.github-actions.actions-billing %} {% data reusables.github-actions.actions-spending-limit %}

設定する利用上限を引き上げたり、一部のアカウントについて無制限に設定することができます。 OrganizationまたはEnterprise アカウントの分を請求書で支払っている場合、超過分を前払いして、利用上限を引き上げることができます。 The spending limit applies to your combined overages for {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %}. For more information about pricing for {% data variables.product.prodname_actions %} usage, see "[About billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."

利用上限を$0より高く設定すると、過去に発生した超過分についても請求が生じます。 たとえば、Organizationで {% data variables.product.prodname_team %} を使用していて超過を許可しておらず、月あたりのストレージ使用量が1.9GBから2.1GBに増えるワークフローアーティファクトを作成した場合、ストレージは製品に含まれる2GBをわずかに超えることになります。

超過を有効にしていなかったため、次にパッケージのバージョンを発行しようとしても失敗します。 その月の0.1GBの超過分について請求書は発行されません。 ただし、次の月に超過を有効にすると、新しい請求サイクルの超過分に加えて、過去の0.1GB超過分が最初の請求書に含まれます。

### ユーザアカウントの {% data variables.product.prodname_actions %} に対する利用上限を管理する

自身のユーザアカウントに対する {% data variables.product.prodname_actions %} の利用上限は、誰でも管理できます。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Organizationの {% data variables.product.prodname_actions %} に対する利用上限を管理する

Organization の {% data variables.product.prodname_actions %} については、Organizationのオーナーと支払いマネージャーが利用上限を管理できます。

Organizationアカウントに対して請求書での支払いをしている場合、{% data variables.product.product_name %}上のEnterpriseアカウントに対する料金の上限を管理できません。 Organizationが所有するリポジトリで、各リポジトリに含まれるストレージまたはデータ転送を超えて{% data variables.product.prodname_actions %}を使用を許可する場合は、超過分を前払いすることができます。 超過分は前払いする必要があるので、請求書で支払わうアカウントに対して無制限の使用を有効にすることはできません。 利用上限は、事前支払いした額の150%になります。 質問がある場合は[営業チームまでお問い合わせ](https://enterprise.github.com/contact)ください。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Enterprise アカウントの {% data variables.product.prodname_actions %} に対する利用上限を管理する

Enterprise owners and billing managers can manage the spending limit for {% data variables.product.prodname_actions %} for an enterprise account.

{% data reusables.github-actions.spending-limit-enterprise-account %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "
{% data variables.product.prodname_actions %} and Packages monthly usage", click **Cost management**.
  ![コスト管理タブ](/assets/images/help/settings/cost-management-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
