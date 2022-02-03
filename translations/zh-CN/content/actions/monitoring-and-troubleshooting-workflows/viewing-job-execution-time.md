---
title: 查看作业执行时间
intro: 您可以查看作业的执行时间，包括某个作业累积的可计费分钟数。
redirect_from:
  - /actions/managing-workflow-runs/viewing-job-execution-time
versions:
  fpt: '*'
  ghec: '*'
shortTitle: 查看作业执行时间
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Billable job execution minutes are only shown for jobs run on private repositories that use {% data variables.product.prodname_dotcom %}-hosted runners and are rounded up to the next minute. 如果在公共仓库中使用 {% data variables.product.prodname_actions %}，或在自托管的运行器中运行作业时，将没有可计费分钟数。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在作业摘要下，您可以查看作业的执行时间。 要查看有关计费作业执行时间的详细信息，请单击 **Billable time（计费时间）**下的时间。 ![运行和可计费时间详细信息链接](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **Note:** The billable time shown does not include any minute multipliers. To view your total {% data variables.product.prodname_actions %} usage, including minute multipliers, see "[Viewing your {% data variables.product.prodname_actions %} usage](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage)."

   {% endnote %}
