---
title: Codespacesの使用状況の表示
shortTitle: 使用状況の表示
intro: '{% data variables.product.prodname_codespaces %}によるコンピュートの分とストレージを見ることができます。'
permissions: 'To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
---

## Organizationの {% data variables.product.prodname_codespaces %} の使用状況を表示する

Organization については、Organization のオーナーと支払いマネージャーが {% data variables.product.prodname_codespaces %} の使用状況を管理できます。 Enterpriseアカウントが管理しているOrganizationでは、OrganizationのオーナーはOrganizationの支払いページで{% data variables.product.prodname_codespaces %}の使用状況を見ることができ、Enterpriseの管理者はEnterprise全体の使用状況を見ることができます。

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.codespaces-minutes %}
{% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## Enterprise アカウントの {% data variables.product.prodname_codespaces %} の使用状況を表示する

Enterprise アカウントについては、Enterprise オーナーと支払いマネージャーが {% data variables.product.prodname_codespaces %} の使用状況を確認できます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. 「{% data variables.product.prodname_codespaces %}」の下で、Enterpriseアカウント内の各Organizationの使用状況の詳細を見ます。
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
{% endif %}
