---
title: 添加 AE 托管的运行器
intro: '您可以将 {% data variables.actions.hosted_runner %} 添加到组织或企业。'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

{% note %}

**注意：**要添加 {% data variables.actions.hosted_runner %} 到 {% data variables.product.prodname_ghe_managed %}，您需要联系 {% data variables.product.prodname_dotcom %} 支持。 本文介绍支持部门完成此过程所需的信息。

{% endnote %}

{% data variables.actions.hosted_runner %} 可以使用基础 Azure 操作系统映像，您可以创建自己的自定义映像。

### 从基础 Azure 映像添加 {% data variables.actions.hosted_runner %}

您可以添加使用基础 Azure 操作系统映像的 {% data variables.actions.hosted_runner %}。 要将 {% data variables.actions.hosted_runner %} 添加到您的组织或企业，请联系 {% data variables.product.prodname_dotcom %} 支持并备好以下信息：
 - 所需的操作系统：可用选项请参阅[“软件规格](/actions/using-github-hosted-runners/about-ae-hosted-runners#software-specifications)”。
 - 为每个 {% data variables.actions.hosted_runner %} 池选择一个名称。 这些名称被创建为标签，允许您将工作流程路由到这些运行器。 更多信息请参阅[“在工作流程中使用 {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-ae-hosted-runners-in-a-workflow)”。
 - 将 {% data variables.actions.hosted_runner %} 添加到何处：确定将接收该运行器的组织和企业的名称。

### 使用自定义映像添加 {% data variables.actions.hosted_runner %}

要创建自定义操作系统映像，请参阅[“创建自定义映像”](/actions/using-github-hosted-runners/creating-custom-images)的步骤。

使用上述步骤创建自定义映像后，请联系 {% data variables.product.prodname_dotcom %} 支持并提供以下详细信息：

  - 在遵循自定义映像创建步骤时生成的 SAS URI。
  - 映像使用的操作系统类型：可以是 Linux 或 Windows。
  - 映像名称：
  - 版本.
  - 新池的 VM SKU。
  - 为每个 {% data variables.actions.hosted_runner %} 池选择一个名称。 这些名称被创建为标签，允许您将工作流程路由到这些运行器。 更多信息请参阅[“在工作流程中使用 {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-ae-hosted-runners-in-a-workflow)”。
  - 将 {% data variables.actions.hosted_runner %} 添加到何处：确定将接收该运行器的组织和企业的名称。

### 查看您的 {% data variables.actions.hosted_runner %}

在 {% data variables.product.prodname_dotcom %} 支持部门添加您的运行器后，您将能够在您的运行器列表中找到它们：

{% data reusables.github-actions.hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.hosted-runner-list %}
