---
title: 查看 GitHub Actions 使用情况
intro: '您可以查看 {% data variables.product.prodname_actions %} 的分钟数和存储空间使用详情。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/viewing-your-github-actions-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - User account
shortTitle: 查看 Actions 使用情况
---

还可以查看单个工作流程运行的计费作业执行分钟数。 更多信息请参阅“[查看作业执行时间](/actions/managing-workflow-runs/viewing-job-execution-time)”。

## 查看个人帐户的 {% data variables.product.prodname_actions %} 使用情况

任何人都可以查看自己个人帐户的 {% data variables.product.prodname_actions %} 使用情况。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

## 查看组织的 {% data variables.product.prodname_actions %} 使用情况

组织所有者和帐单管理员可查看组织的 {% data variables.product.prodname_actions %} 使用情况。 对于由企业帐户管理的组织，只有组织所有者可以在组织的帐单页面中查看 {% data variables.product.prodname_actions %} 使用情况。

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## 查看企业帐户的 {% data variables.product.prodname_actions %} 使用情况

企业所有者和帐单管理员可查看企业帐户的 {% data variables.product.prodname_actions %} 使用情况。

{% note %}

**注：**企业帐户的计费详细信息不会汇总每个操作系统的使用分钟数。 {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. 在“{% data variables.product.prodname_actions %}”下，查看您的企业帐户中每个组织的数据传输使用详情。 ![分钟数使用详情](/assets/images/help/billing/actions-minutes-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
{% endif %}
