---
title: 限制 codespace 的基础映像
shortTitle: Restrict base image
intro: 可以指定哪些基础映像可用于在组织内创建的新 codespace。
permissions: 'To manage image constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 1da438a680dd3e60c1deeec46a98fbcf48f84e5b
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158995'
---
## 概述

创建 codespace 时，远程虚拟机上会自动创建 Docker 容器。 Docker 容器是通过 Docker 映像创建的。 映像实际上是 Docker 容器的模板，它确定了 codespace 提供的结果环境的许多方面。

可以在存储库的开发容器配置中指定映像，从而选择要用于 codespace 的映像。 例如，可以使用 `devcontainer.json` 文件中的 `image` 属性来执行此操作。

```json{:copy}
"image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:18",
```

有关详细信息，请参阅 containers.dev 上的[开发容器规范](https://containers.dev/implementors/json_reference/)。

如果未在存储库的开发容器配置中指定映像，则使用默认映像。 默认映像包含许多常用语言和常用工具的运行时版本。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)”。

作为组织所有者，你可以添加一个策略来限制哪些映像可用于组织内创建的 codespace。

如果开发容器配置中指定的映像与其中一个允许的映像不匹配，则当有人尝试为存储库创建 codespace 时，会显示以下消息：

> 无法创建 codespace：根据组织管理员设置的组织策略，不允许使用基础映像“来自开发容器配置的详细信息”。

{% note %}

**注释**： 
* 基础映像策略仅在创建 codespace 时适用。 目前，在重新生成容器时不适用。 将来的版本中可能会发生变化。 有关详细信息，请参阅“[codespace 生命周期](/codespaces/developing-in-codespaces/the-codespace-lifecycle#rebuilding-a-codespace)”。
* 基本映像策略不适用于默认映像，也不适用于在开发容器配置中引入错误导致无法重新生成容器的情况下用于恢复 codespace 的映像。 

{% endnote %}

### 设置组织范围和存储库特定的策略

创建策略时，您可以选择是将其应用于组织中的所有存储库，还是仅应用于指定的存储库。 如果设置了组织范围的策略，则为各个存储库设置的任何策略都必须在组织级别设置的限制范围内。 添加策略会增加映像的限制，而不是减少。

例如，你可以创建一个组织范围的策略，将基础映像限制为十个指定映像中的任意一个。 然后，可以为存储库 A 设置一个策略，将映像限制为仅在组织级别指定的两个映像的子集上。 为存储库 A 指定其他映像将不起作用，因为这些映像未在组织级别策略中指定。 如果添加组织范围的策略，则应将其设置为组织中任何存储库可用的最大映像选择范围。 然后，您可以添加特定于存储库的策略以进一步限制选择。

{% data reusables.codespaces.codespaces-org-policies-note %}

## 添加策略以定义允许的映像

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. 单击“添加约束”并选择“基础映像” 。

   ![“添加约束”下拉菜单的屏幕截图](/assets/images/help/codespaces/add-constraint-dropdown-image.png)

1. 单击 {% octicon "pencil" aria-label="The edit icon" %} 编辑约束。

   ![用于编辑约束的铅笔图标的屏幕截图](/assets/images/help/codespaces/edit-image-constraint.png)

1. 在“允许的值”字段中，输入想要允许的映像的完整 URL。

   ![“允许的值”字段中条目的屏幕截图](/assets/images/help/codespaces/image-allowed-values.png)
 
   {% note %}

   注意：必须指定与开发容器配置中指定的值完全匹配的映像 URL。

   {% endnote %}

1. 单击加号按钮 ({% octicon "plus" aria-label="The plus icon" %}) 添加值。
1. 如果需要，请重复前两个步骤以添加更多映像 URL。
{% data reusables.codespaces.codespaces-policy-targets %}
1. 如果要向策略添加另一个约束，请单击“添加约束”并选择另一个约束。 有关其他约束的信息，请参阅：
   * “[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
   * [限制转发端口的可见性](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [限制空闲超时期限](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)
   * [限制 codespace 的保持期](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)
1. 向策略添加完约束后，单击“保存”。

当有人尝试创建可向组织收费的新 codespace 时，将应用该策略。 基本映像约束不会影响现有 codespace（无论是活动的还是停止的）。

## 编辑策略

可以编辑现有策略。 例如，你可能想要在策略中添加或移除约束。

1. 显示“Codespace policies（代码空间策略）”页。 有关详细信息，请参阅“[添加策略以定义允许的映像](#adding-a-policy-to-define-the-allowed-images)”。
1. 单击要编辑的策略的名称。
1. 单击“基础映像”约束旁边的铅笔图标 ({% octicon "pencil" aria-label="The edit icon" %})。
1. 添加或移除映像 URL。
1. 单击“保存”。

## 删除策略 

1. 显示“Codespace policies（代码空间策略）”页。 有关详细信息，请参阅“[添加策略以定义允许的映像](#adding-a-policy-to-define-the-allowed-images)”。
1. 单击要删除的策略右侧的删除按钮。

   ![策略的“删除”按钮的屏幕截图](/assets/images/help/codespaces/policy-delete.png)
