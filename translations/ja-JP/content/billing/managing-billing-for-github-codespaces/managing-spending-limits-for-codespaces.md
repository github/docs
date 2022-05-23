---
title: Codespacesの利用制限の管理
intro: '{% data variables.product.prodname_codespaces %} の使用に対して利用上限を設定できます。'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
shortTitle: 利用上限
---

## {% data variables.product.prodname_codespaces %} の利用上限について

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

使用上限に達すると、Organizationあるいはリポジトリではそれ以上新しいcodespaceを作成できなくなり、既存のcodespaceも起動できなくなります。 まだ実行中の既存のcodespaceはシャットダウンされません。使用上限を変更しなければ、上限を超えた分に対する支払いは生じません。

{% data variables.product.prodname_codespaces %}の価格に関する詳細な情報については、「[{% data variables.product.prodname_codespaces %}の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)」を参照してください。

{% ifversion ghec %}
## Azureサブスクリプションの利用
Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合、Azure サブスクリプションID をEnterpriseアカウントに接続して、 {% data variables.product.prodname_codespaces %} の使用を有効にして支払うことができます。 詳しい情報については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。
{% endif %}

## Organizationの {% data variables.product.prodname_codespaces %} に対する利用上限を管理する

Organization の {% data variables.product.prodname_codespaces %} については、Organizationのオーナーと支払いマネージャーが利用上限を管理できます。

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit-codespaces %}
{% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Enterprise アカウントの {% data variables.product.prodname_codespaces %} に対する利用上限を管理する

Enterprise アカウントの {% data variables.product.prodname_codespaces %} の利用上限は、Enterprise オーナーと支払いマネージャーが管理できます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. ""[{% data variables.product.prodname_codespaces %} monthly usage]"の上で、**Spending Limit（利用上限）**をクリックしてください。 ![利用上限タブ](/assets/images/help/settings/spending-limit-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
{% endif %}

## 利用上限に達した際の変更のエクスポート

{% data reusables.codespaces.exporting-changes %}
## 使用状況の管理と利用上限のメール通知

メール通知は、利用量がアカウントの利用上限の50%、75%、90%、100%に達したときに、アカウントのオーナーと支払いマネージャーに送信されます。

You can disable these notifications anytime by navigating to the bottom of the **Spending Limit** page.

![支払いのメール通知設定のスクリーンショット](/assets/images/help/billing/codespaces-spending-limit-notifications.png)

## 参考リンク

- 「[マシンタイプへのアクセスの制限](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」
- 「[Organization内のCodespacesの支払いの管理](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)」
