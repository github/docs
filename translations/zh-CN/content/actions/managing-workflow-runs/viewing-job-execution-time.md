---
title: 查看作业执行时间
intro: '您可以查看作业的执行时间，包括某个作业累积的可计费分钟数。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

仅为在私有仓库上运行，使用 {% data variables.product.prodname_dotcom %}- 托管的运行器的作业显示可计费作业执行分钟数。 如果在公共仓库中使用 {% data variables.product.prodname_actions %}，或在自托管的运行器中运行作业时，将没有可计费分钟数。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在作业摘要下，您可以查看作业的执行时间。 要查看可计费的作业执行时间，单击 **Run and billable time details（运行和可计费时间详细信息）**。 ![运行和可计费时间详细信息链接](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **注意：**显示的可计费时间不包括任何四舍五入或分钟乘数。 要查看您的 {% data variables.product.prodname_actions %} 总使用情况，包括四舍五入和分钟乘法，请参阅"[查看您的 {% data variables.product.prodname_actions %} 使用情况](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage)。"

   {% endnote %}
