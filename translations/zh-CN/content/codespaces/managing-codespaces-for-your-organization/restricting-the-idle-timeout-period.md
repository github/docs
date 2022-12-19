---
title: 限制空闲超时期限
shortTitle: Restrict timeout periods
intro: 你可以为组织拥有的任何 codespace 设置最大超时时间。
permissions: 'To manage timeout constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: b07d1834078b065eee89acdb84e0e80a2db1e8a6
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158987'
---
## 概述

默认情况下，codespace 会在处于非活动状态 30 分钟后超时。 当 codespace 超时时，它会停止，并且不会再产生计算使用费用。 

{% data variables.product.prodname_dotcom %} 用户的个人设置允许他们为创建的 codespace 定义自己的超时期限。 这可能比默认的 30 分钟期限长。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_github_codespaces %} 的超时时间](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)”。

作为组织所有者，你可能希望为针对组织拥有的存储库创建的 codespace 的最大空闲超时时间配置约束。 这有助于限制与长时间处于非活动状态后超时的 codespace 相关的成本。 你可以为组织拥有的所有存储库的 codespace 或特定存储库的 codespace 设置最大超时。 

{% note %}

注意：最大空闲超时约束仅应用于组织拥有的 codespace。

{% endnote %}

有关 {% data variables.product.prodname_github_codespaces %} 计算使用量的定价的详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”。

### 设置最大空闲超时约束时的行为

如果某人在其个人设置中将默认空闲超时设置为 90 分钟，然后为具有最大空闲超时约束的存储库启动 codespace 60 分钟，则该 codespace 将在处于非活动状态 60 分钟后超时。 codespace 创建完成后，将显示一条消息，指出这一点：

> 根据组织的策略，此 codespace 的空闲超时设置为 60 分钟。

### 设置组织范围和存储库特定的策略

创建策略时，你可以选择是将其应用于组织中的所有存储库，还是仅应用于指定的存储库。 如果创建具有超时约束的组织范围的策略，则针对特定存储库的任何策略中的超时约束必须属于为整个组织配置的限制。 在组织范围的策略、针对指定存储库的策略或某人的个人设置中的策略中，将应用最短的超时期限。

如果添加具有超时约束的组织范围的策略，则应将超时设置为最长可接受的期限。 然后，可以添加单独的策略，将组织内特定存储库的最大超时设置为较短的期限。

{% data reusables.codespaces.codespaces-org-policies-note %}

## 添加策略以设置最大空闲超时期限

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. 单击“添加约束”，然后选择“最大空闲超时”。 

   ![“添加约束”下拉菜单的屏幕截图](/assets/images/help/codespaces/add-constraint-dropdown-timeout.png)

1. 单击 {% octicon "pencil" aria-label="The edit icon" %} 编辑约束。

   ![用于编辑约束的铅笔图标的屏幕截图](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. 输入 codespace 的最大分钟数可以在超时之前保持非活动状态，然后单击“保存”。

   ![设置最大超时（以分钟为单位）的屏幕截图](/assets/images/help/codespaces/maximum-minutes-timeout.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. 如果要向策略添加另一个约束，请单击“添加约束”并选择另一个约束。 有关其他约束的信息，请参阅：
   * “[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
   * [限制 codespace 的基础映像](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)
   * [限制转发端口的可见性](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [限制 codespace 的保持期](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)
1. 向策略添加完约束后，单击“保存”。

策略将应用于对组织计费的所有新 codespace。 下次启动现有 codespace 时，超时约束也会对其应用。

## 编辑策略

可以编辑现有策略。 例如，你可能想要在策略中添加或移除约束。

1. 显示“Codespace policies（代码空间策略）”页。 有关详细信息，请参阅“[添加策略以设置最大空闲超时期限](#adding-a-policy-to-set-a-maximum-idle-timeout-period)”。
1. 单击要编辑的策略的名称。
1. 单击“最大空闲超时”约束旁边的铅笔图标 ({% octicon "pencil" aria-label="The edit icon" %})。
1. 执行所需更改，然后单击“保存”。

## 删除策略 

1. 显示“Codespace policies（代码空间策略）”页。 有关详细信息，请参阅“[添加策略以设置最大空闲超时期限](#adding-a-policy-to-set-a-maximum-idle-timeout-period)”。
1. 单击要删除的策略右侧的删除按钮。

   ![策略的“删除”按钮的屏幕截图](/assets/images/help/codespaces/policy-delete.png)
