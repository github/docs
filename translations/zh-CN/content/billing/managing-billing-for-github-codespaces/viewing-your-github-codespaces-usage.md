---
title: 查看 GitHub Codespaces 使用情况
shortTitle: 查看使用情况
intro: '您可以查看 {% data variables.product.prodname_github_codespaces %} 使用的计算分钟数和存储空间。'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
---

## 查看组织的 {% data variables.product.prodname_github_codespaces %} 使用情况

组织所有者和帐单管理员可查看组织的 {% data variables.product.prodname_github_codespaces %} 使用情况。 对于由企业帐户管理的组织，组织所有者可以在组织计费页面中查看 {% data variables.product.prodname_codespaces %} 使用情况，企业管理员可以查看整个企业的使用情况。

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.codespaces-minutes %}
{% data reusables.dotcom_billing.actions-packages-report-download-org-account %}
1. Filter the report to show only rows that mention "Codespaces" in the `Product` field.

   ![A usage report filtered for Codespaces](/assets/images/help/codespaces/CSV-usage-report.png)

{% ifversion ghec %}
## 查看企业帐户的 {% data variables.product.prodname_codespaces %} 使用情况

企业所有者和帐单管理员可查看企业帐户的 {% data variables.product.prodname_codespaces %} 使用情况。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. 在“{% data variables.product.prodname_codespaces %}”下，查看企业帐户中每个组织的使用详细信息。
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
{% endif %}
