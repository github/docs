---
title: 查看 GitHub 操作使用情况
intro: '您可以查看 {% data variables.product.prodname_actions %} 的分钟数和存储空间使用详情。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

还可以查看单个工作流程运行的计费作业执行分钟数。 更多信息请参阅“[管理工作流程运行](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-billable-job-execution-minutes)”。

### 查看用户帐户的 {% data variables.product.prodname_actions %} 使用情况

任何人都可以查看自己用户帐户的 {% data variables.product.prodname_actions %} 使用情况。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### 查看组织的 {% data variables.product.prodname_actions %} 使用情况

Organization owners and billing managers can view {% data variables.product.prodname_actions %} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {% data variables.product.prodname_actions %} usage in the organization billing page.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### 查看企业帐户的 {% data variables.product.prodname_actions %} 使用情况

Enterprise owners and billing managers can view {% data variables.product.prodname_actions %} usage for an enterprise account.

{% note %}

**Note:** Billing details for enterprise accounts don't summarize the usage minutes for each operating system. {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. 在“{% data variables.product.prodname_actions %}”下，查看您的企业帐户中每个组织的数据传输使用详情。 ![分钟数使用详情](/assets/images/help/billing/actions-minutes-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
