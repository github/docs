---
title: 将标签与 AE 托管的运行器一起使用
intro: '您可以使用标签以基于其特性来组织 {% data variables.actions.hosted_runner %}。'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

有关如何使用标签将作业路由到特定类型的 {% data variables.actions.hosted_runner %} 的信息，请参阅“[在工作流程中使用 {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-ae-hosted-runners-in-a-workflow)”。


{% note %}

**注意：**要管理您的 {% data variables.actions.hosted_runner %} 的标签，您需要联系 {% data variables.product.prodname_dotcom %} 支持。

{% endnote %}

### 查看 {% data variables.actions.hosted_runner %} 的标签
{% data reusables.github-actions.hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.hosted-runner-list %}
{% data reusables.github-actions.hosted-runner-list-group %}
1. 找到要检查的运行器，然后单击 {% octicon "triangle-down" aria-label="The downward triangle" %} 以查看标签选择菜单。 已分配给您的运行器的标签旁边有 {% octicon "check" aria-label="Check mark" %}。

![更改运行器标签](/assets/images/help/settings/actions-hosted-runner-list-label.png)
