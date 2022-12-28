---
title: 限制 codespace 的保持期
shortTitle: Restrict the retention period
intro: 可以为组织拥有的任何 codespace 设置最大保持期。
permissions: 'To manage retention constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 3c114fe41b06176899f9dd11a6dcd51c038c88e5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158979'
---
## 概述

{% data variables.product.prodname_github_codespaces %} 在停止后自动删除，并在定义的天数内保持非活动状态。 创建 codespace 时，将设置每个 codespace 的保持期且不会更改。 

有权访问 {% data variables.product.prodname_github_codespaces %} 的每个人都可以为其创建的 codespace 配置保持期。 此默认保持期的初始设置为 30 天。 个人用户可以在 0-30 天内设置此期限。 有关详细信息，请参阅“[配置 codespace 的自动删除](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)”。 

作为组织所有者，你可能希望为针对组织拥有的存储库创建的 codespace 的最大保持期配置约束。 这有助于限制与停止的 codespace 相关联的存储成本，然后在它们自动删除之前保持未使用状态。 有关存储费用的详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”。 可以为组织拥有的所有或特定存储库设置最大保持期。 

### 设置组织范围和存储库特定的策略

创建策略时，你可以选择是将其应用于组织中的所有存储库，还是仅应用于指定的存储库。 如果使用 codespace 保留约束创建组织范围的策略，则针对特定存储库的任何策略中的保留约束应小于为整个组织配置的限制，否则它们将不起作用。 在组织范围的策略、针对指定存储库的策略或某人个人设置中默认保持期中，将应用最短保持期。

如果添加具有保留约束的组织范围的策略，则应将保持期设置为最长可接受的期限。 然后，可以添加单独的策略，将组织内特定存储库的最大保持期设置为较短的期限。

{% data reusables.codespaces.codespaces-org-policies-note %}

## 添加策略来设置最大 codespace 保持期

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. 单击“添加约束”并选择“保持期”。

   ![“添加约束”下拉菜单的屏幕截图](/assets/images/help/codespaces/add-constraint-dropdown-retention.png)

1. 单击 {% octicon "pencil" aria-label="The edit icon" %} 编辑约束。

   ![用于编辑约束的铅笔图标的屏幕截图](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. 输入在自动删除 codespace 之前可以保持停止的最大天数，然后单击“保存”。

   ![设置屏幕截图（以天为单位）的屏幕截图](/assets/images/help/codespaces/maximum-days-retention.png)

   {% note %}

   **注释**： 
   * 在此上下文中，一天指的是 24 小时时段，从 codespace 当天停止的时间开始。
   * 有效范围是 0 到 30 天。
   * 将期限设置为 `0` 将导致 codespace 在停止时或由于不活动而超时时被立即删除。

   {% endnote %}

{% data reusables.codespaces.codespaces-policy-targets %}
1. 如果要向策略添加另一个约束，请单击“添加约束”并选择另一个约束。 有关其他约束的信息，请参阅：
   * “[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
   * [限制 codespace 的基础映像](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)
   * [限制转发端口的可见性](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [限制空闲超时期限](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)
1. 向策略添加完约束后，单击“保存”。

策略将应用于对组织计费的所有新 codespace。 保持期约束仅在创建 codespace 时应用。

## 编辑策略

可以编辑现有策略。 例如，你可能想要在策略中添加或移除约束。

保持期约束仅在创建 codespace 时应用于它们。 编辑策略不会影响现有 codespace。

1. 显示“Codespace policies（代码空间策略）”页。 有关详细信息，请参阅“[添加策略以设置最大 codespace 保持期](#adding-a-policy-to-set-a-maximum-codespace-retention-period)”。
1. 单击要编辑的策略的名称。
1. 单击“保持期”约束旁边的铅笔图标 ({% octicon "pencil" aria-label="The edit icon" %})。
1. 执行所需更改，然后单击“保存”。

## 删除策略 

可以随时删除策略。 删除策略不会影响现有 codespace。

1. 显示“Codespace policies（代码空间策略）”页。 有关详细信息，请参阅“[添加策略以设置最大 codespace 保持期](#adding-a-policy-to-set-a-maximum-codespace-retention-period)”。
1. 单击要删除的策略右侧的删除按钮。

   ![策略的“删除”按钮的屏幕截图](/assets/images/help/codespaces/policy-delete.png)
