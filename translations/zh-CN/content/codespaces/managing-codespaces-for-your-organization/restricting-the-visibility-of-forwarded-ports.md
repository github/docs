---
title: 限制转发端口的可见性
shortTitle: Restrict port visibility
intro: 你可以针对用户从组织中的 codespace 转发端口时选择的可见性选项设置约束。
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: ad670b43e0ac2a80e43048ffa61e0c83a8d12130
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158971'
---
## 概述

通常，在 codespace 中，可以私密地（仅向你自己）、向组织成员或公开（向任何具有 URL 的人）转发端口。 有关详细信息，请参阅“[在 codespace 中转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”。

作为组织所有者，你可能希望对用户在转发端口时可以设置的可见性选项配置约束。 例如，出于安全原因，你可能希望禁止公共端口转发。 为此，你可以在组织的 {% data variables.product.prodname_github_codespaces %} 设置中定义一个或多个策略。

### 设置端口可见性约束时的行为

如果存在不再符合你定义的策略的现有 codespaces，这些 codespaces 将继续运行，直到它们停止或超时。当用户继续使用 codespace 时，将受策略约束。

{% note %}

注意：无法禁用专用端口转发，因为 {% data variables.product.prodname_github_codespaces %} 需要专用端口转发才能继续按照设计的方式工作，例如在端口 22 上转发 SSH。

{% endnote %}

### 设置组织范围和存储库特定的策略

创建策略时，您可以选择是将其应用于组织中的所有存储库，还是仅应用于指定的存储库。 如果设置了组织范围的策略，则为各个存储库设置的任何策略都必须在组织级别设置的限制范围内。 添加策略会增加可见性选项的限制，而不是减少。

例如，你可以创建一个组织范围的策略，将可见性选项限制在组织范围内。 然后，可以为存储库 A 设置一个策略，该策略不允许公共和组织可见性，这将导致此存储库只能使用专用端口转发。 如果为存储库 A 设置一个既允许公开又允许组织的策略，将只有组织可见，因为组织范围的策略不允许公开可见性。

如果添加组织范围的策略，则应将其设置为组织中任何存储库可用的最宽松的可见性选项。 然后，您可以添加特定于存储库的策略以进一步限制选择。

{% data reusables.codespaces.codespaces-org-policies-note %}

## 添加限制端口可见性选项的策略

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. 单击“添加约束”并选择“端口可见性” 。

   ![“添加约束”下拉菜单的屏幕截图](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. 单击 {% octicon "pencil" aria-label="The edit icon" %} 编辑约束。

   ![用于编辑约束的铅笔图标的屏幕截图](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. 清除不希望提供的端口可见性选项（组织或公共） 。

   ![清除端口可见性选项的屏幕截图](/assets/images/help/codespaces/choose-port-visibility-options.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. 如果要向策略添加另一个约束，请单击“添加约束”并选择另一个约束。 有关其他约束的信息，请参阅：
   * “[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
   * [限制 codespace 的基础映像](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)
   * [限制空闲超时期限](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)
   * [限制 codespace 的保持期](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)
1. 向策略添加完约束后，单击“保存”。

策略将应用于对组织计费的所有新 codespace。 下次启动现有 codespace 时，端口可见性约束也会对其应用。

## 编辑策略

可以编辑现有策略。 例如，你可能想要在策略中添加或移除约束。

1. 显示“Codespace policies（代码空间策略）”页。 有关详细信息，请参阅“[添加策略以限制端口可见性选项](#adding-a-policy-to-limit-the-port-visibility-options)”。
1. 单击要编辑的策略的名称。
1. 单击“端口可见性”约束旁边的铅笔图标 ({% octicon "pencil" aria-label="The edit icon" %})。
1. 执行所需更改，然后单击“保存”。

## 删除策略 

1. 显示“Codespace policies（代码空间策略）”页。 有关详细信息，请参阅“[添加策略以限制端口可见性选项](#adding-a-policy-to-limit-the-port-visibility-options)”。
1. 单击要删除的策略右侧的删除按钮。

   ![策略的“删除”按钮的屏幕截图](/assets/images/help/codespaces/policy-delete.png)
