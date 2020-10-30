---
title: 查看 GitHub 包使用情况
intro: '您可以查看 {% data variables.product.prodname_registry %} 的存储空间和数据传输使用详情。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

### 查看用户帐户的 {% data variables.product.prodname_registry %} 使用情况

任何人都可以查看自己用户帐户的 {% data variables.product.prodname_registry %} 使用情况。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### 查看组织的 {% data variables.product.prodname_registry %} 使用情况

Organization owners and billing managers can view {% data variables.product.prodname_registry %} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {% data variables.product.prodname_registry %} usage in the organization billing page.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### 查看企业帐户的 {% data variables.product.prodname_registry %} 使用情况

Enterprise owners and billing managers can view {% data variables.product.prodname_registry %} usage for an enterprise account.

{% note %}

**注：**企业帐户的计费详细信息仅汇总每个组织的存储数据使用情况。 {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. 在“{% data variables.product.prodname_registry %}”下，查看您的企业帐户中每个组织的数据传输使用详情。 ![数据传输使用详情](/assets/images/help/billing/packages-data-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
