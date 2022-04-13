---
title: 监控您当前的作业
intro: '监控 {% data variables.product.prodname_dotcom %} 托管的运行器如何处理组织或企业中的作业，并了解任何相关约束。'
versions:
  feature: github-runner-dashboard
shortTitle: 监控您当前的作业
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 查看组织或企业中的活动作业

您可以获取当前在组织或企业中 {% data variables.product.prodname_dotcom %} 托管的运行器上运行的所有作业列表。

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %}
{% data reusables.actions.github-hosted-runners-table-entry %}
1. 查看“Active jobs（活动作业）”部分，其中包含当前在 {% data variables.product.prodname_dotcom %} 托管的运行器上运行的所有作业列表。

  ![活动作业列表的屏幕截图](/assets/images/help/settings/actions-runner-active-jobs.png)

## 查看组织或企业中排队的作业

{% data variables.product.prodname_dotcom %} 托管的运行器允许您并发运行作业，并且并发作业的最大数量将根据您的计划而有所不同。 如果达到最大并发作业数，则任何新作业都将开始进入队列。 若要了解有关计划可用的并发作业数的详细信息，请参阅“[使用限制、计费和管理](/actions/learn-github-actions/usage-limits-billing-and-administration)”。

以下过程演示如何检查可以运行的最大并发作业数。

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %}
{% data reusables.actions.github-hosted-runners-table-entry %}
1. 查看“All jobs usage（所有作业使用情况）”部分，其中列出了活动作业数和可以运行的最大作业数。 在此示例中， `9` 个作业正在运行，最大作业数为 `180`。 ![帐户的最大作业数屏幕截图](/assets/images/help/settings/github-hosted-runners-max-jobs.png)
