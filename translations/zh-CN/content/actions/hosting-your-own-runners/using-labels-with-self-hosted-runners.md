---
title: 将标签与自托管运行程序结合使用
intro: 您可以使用标签以基于其特性来组织自托管运行器。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Label runners
ms.openlocfilehash: 7808c49e29b0d89db747f185545c273a6a78f403
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145066826'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

有关如何使用标签将作业路由到特定类型的自托管运行器的信息，请参阅“[在工作流中使用自托管运行器](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)”。

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

## 创建自定义标签

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %}
 1. 在“Labels（标签）”部分，单击 {% octicon "gear" aria-label="The Gear icon" %}。
 1. 在“查找或创建标签”字段中，键入新标签的名称，然后单击“创建新标签”。
 将创建自定义标签并分配给自托管运行器。 可以从自托管的运行器中删除自定义标签，但当前无法手动删除。 {% data reusables.actions.actions-unused-labels %} {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. 在“筛选器标签”字段中，键入新标签的名称，然后单击“创建新标签”。
    ![添加运行器标签](/assets/images/help/settings/actions-add-runner-label.png)
    
将创建自定义标签并分配给自托管运行器。 可以从自托管的运行器中删除自定义标签，但当前无法手动删除。 {% data reusables.actions.actions-unused-labels %} {% endif %}

## 分配标签给自托管的运行器

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. 要将标签分配给您的自托管运行器，在“Find or create a label（查找或创建标签）”字段中单击标签。 {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. 单击标签以将其分配给您的自托管运行器。 {% endif %}

## 删除自托管运行器中的自定义标签

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. 在“查找或创建标签”字段中，分配的标签标有 {% octicon "check" aria-label="The Check icon" %} 图标。 单击标记的标签以将其从您的自托管运行器取消分配。 {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. 单击分配的标签以将其从您的自托管运行器中删除。 {% data reusables.actions.actions-unused-labels %} {% endif %}

## 使用配置脚本创建和分配标签

您可以使用自托管运行器上的配置脚本创建和分配自定义标签。 例如，此命令将名为 `gpu` 的标签分配给自托管运行器。 

```shell
./config.sh --labels gpu
```

如果标签不存在，则创建该标签。 还可使用此方法为运行器（例如 `x64` 或 `linux`）分配默认标签。 使用配置脚本分配默认标签后， {% data variables.product.prodname_actions %} 会接受它们，而不验证运行器是否实际使用该操作系统或架构。

您可以使用逗号分隔来分配多个标签。 例如：

```shell
./config.sh --labels gpu,x64,linux
```

{% note %}

** 注：** 如果替换现有的运行器，则必须重新分配任何自定义标签。

{% endnote %}
