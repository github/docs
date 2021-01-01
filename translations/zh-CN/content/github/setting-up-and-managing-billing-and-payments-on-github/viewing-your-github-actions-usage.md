---
title: 查看 GitHub 操作使用情况
intro: '您可以查看 {% data variables.product.prodname_actions %} 的分钟数和存储空间使用详情。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

还可以查看单个工作流程运行的计费作业执行分钟数。 For more information, see "[Viewing job execution time](/actions/managing-workflow-runs/viewing-job-execution-time)."

### 查看用户帐户的 {% data variables.product.prodname_actions %} 使用情况

任何人都可以查看自己用户帐户的 {% data variables.product.prodname_actions %} 使用情况。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### 查看组织的 {% data variables.product.prodname_actions %} 使用情况

组织所有者和帐单管理员可查看组织的 {% data variables.product.prodname_actions %} 使用情况。 对于由企业帐户管理的组织，只有组织所有者可以在组织的帐单页面中查看 {% data variables.product.prodname_actions %} 使用情况。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### 查看企业帐户的 {% data variables.product.prodname_actions %} 使用情况

企业所有者和帐单管理员可查看企业帐户的 {% data variables.product.prodname_actions %} 使用情况。

{% note %}

**注：**企业帐户的计费详细信息不会汇总每个操作系统的使用分钟数。 {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. 在“
{% data variables.product.prodname_actions %}", view details of usage of data transfer by each organization in your enterprise account.
  ![分钟数使用详情](/assets/images/help/billing/actions-minutes-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
