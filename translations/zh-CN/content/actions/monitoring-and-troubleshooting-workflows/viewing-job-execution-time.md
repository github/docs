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

计费作业执行分钟数仅显示在使用 {% data variables.product.prodname_dotcom %} 托管运行器的私有存储库上运行的作业，并四舍五入到下一分钟。 如果在公共仓库中使用 {% data variables.product.prodname_actions %}，或在自托管的运行器中运行作业时，将没有可计费分钟数。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在作业摘要下，您可以查看作业的执行时间。 要查看有关计费作业执行时间的详细信息，请单击 **Billable time（计费时间）**下的时间。 ![运行和可计费时间详细信息链接](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **注意：** 显示的计费时间不包括任何分钟乘数。 要查看您的 {% data variables.product.prodname_actions %} 总使用情况，包括分钟乘法，请参阅"[查看您的 {% data variables.product.prodname_actions %} 使用情况](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage)。"

   {% endnote %}
