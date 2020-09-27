---
title: 查看 GitHub 操作使用情况
intro: '您可以查看 {{ site.data.variables.product.prodname_actions }} 的分钟数和存储空间使用详情。'
product: '{{ site.data.reusables.gated-features.actions }}'
versions:
  free-pro-team: '*'
---

还可以查看单个工作流程运行的计费作业执行分钟数。 更多信息请参阅“[管理工作流程运行](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-billable-job-execution-minutes)”。

### 查看用户帐户的 {{ site.data.variables.product.prodname_actions }} 使用情况

任何人都可以查看自己用户帐户的 {{ site.data.variables.product.prodname_actions }} 使用情况。

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.dotcom_billing.actions-minutes }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### 查看组织的 {{ site.data.variables.product.prodname_actions }} 使用情况

Organization owners and billing managers can view {{ site.data.variables.product.prodname_actions }} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {{ site.data.variables.product.prodname_actions }} usage in the organization billing page.

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.dotcom_billing.actions-minutes }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### 查看企业帐户的 {{ site.data.variables.product.prodname_actions }} 使用情况

Enterprise owners and billing managers can view {{ site.data.variables.product.prodname_actions }} usage for an enterprise account.

{% note %}

**Note:** Billing details for enterprise accounts don't summarize the usage minutes for each operating system. {{ site.data.reusables.github-actions.enterprise-billing-details }}

{% endnote %}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.billing-tab }}
1. 在“{{ site.data.variables.product.prodname_actions }}”下，查看您的企业帐户中每个组织的数据传输使用详情。 ![分钟数使用详情](/assets/images/help/billing/actions-minutes-enterprise.png)
{{ site.data.reusables.dotcom_billing.actions-packages-storage-enterprise-account }}
{{ site.data.reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts }}
