---
title: 限制代码空间的保留期
shortTitle: 限制保留期
intro: 您可以为组织拥有的任何代码空间设置最长保留期。
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage retention constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## 概览

{% data variables.product.prodname_codespaces %} 在停止后会自动删除，并在定义的天数内保持非活动状态。 每个代码空间的保留期是在创建代码空间时设置的，不会更改。

有权访问 {% data variables.product.prodname_github_codespaces %} 的每个人都可以为他们创建的代码空间配置保留期。 此默认保留期的初始设置为 30 天。 单个用户可以将此时间段设置在 0-30 天的范围内。 更多信息请参阅“[配置代码空间的自动删除](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)”。

作为组织所有者，您可能希望为为组织拥有的存储库创建的代码空间的最长保留期配置限制。 这可以帮助您限制与代码空间相关的存储成本，这些代码空间已停止，然后一直处于未使用状态，直到它们被自动删除。 有关存储费用的详细信息，请参阅[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”。 您可以为组织拥有的所有仓库或特定仓库设置最长保留期。

### 设置组织范围和存储库特定的策略

创建策略时，您可以选择是将其应用于组织中的所有存储库，还是仅应用于指定的存储库。 如果创建具有代码空间保留约束的组织范围的策略，则针对特定存储库的任何策略中的保留约束应短于为整个组织配置的限制，否则它们将不起作用。 应用组织范围策略、针对指定存储库的策略或某人个人设置的默认保留期中最短的保留期。

如果添加具有保留约束的组织范围策略，则应将保留期设置为可接受的最长期限。 然后，您可以添加单独的策略，将组织中特定存储库的最大保留期设置为较短的时间段。

## 添加策略以设置最大代码空间保留期

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. 单击 **Add constraint（添加约束）** ，然后选择 **Retention period（保留期）**。

   ![为保留期添加约束](/assets/images/help/codespaces/add-constraint-dropdown-retention.png)

1. 单击 {% octicon "pencil" aria-label="The edit icon" %} 编辑约束。

   ![编辑超时约束](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. 输入代码空间在被自动删除之前可以保持停止状态的最大天数，然后单击 **Save（保存）**。

   ![设置保留期（天）](/assets/images/help/codespaces/maximum-days-retention.png)

   {% note %}

   **注意**：
   * 在这种情况下，一天是 24 小时的时间，从代码停止的那一刻开始。
   * 有效范围为 0-30 天。
   * 将周期设置为 `0` 将导致代码空间在停止时立即删除，或者由于不活动而超时被删除。

   {% endnote %}

{% data reusables.codespaces.codespaces-policy-targets %}
1. 如果要向策略添加其他约束，请单击 **Add constraint（添加约束）** ，然后选择另一个约束。 有关其他约束的信息，请参阅“[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”、“[限制转发端口的可见性](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)”和“[限制空闲超时期](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)”。
1. 向策略添加完约束后，单击 **Save（保存）**。

该策略将应用于创建的所有新代码空间。

## 编辑策略

您可以编辑现有策略。 例如，您可能希望在策略中添加或删除约束。

保留期约束仅在创建代码空间时应用于代码空间。 编辑策略对现有代码空间没有影响。

1. 显示“Codespace policies（代码空间策略）”页。 更多信息请参阅“[添加策略以设置最大代码空间保留期](#adding-a-policy-to-set-a-maximum-codespace-retention-period)”。
1. 单击要编辑的策略的名称。
1. 进行所需的更改，然后单击 **Save（保存）**。

## 删除策略

您可以随时删除策略。 删除策略对现有代码空间没有影响。

1. 显示“Codespace policies（代码空间策略）”页。 更多信息请参阅“[添加策略以设置最大代码空间保留期](#adding-a-policy-to-set-a-maximum-codespace-retention-period)”。
1. 单击要删除的策略右侧的删除按钮。

   ![策略的删除按钮](/assets/images/help/codespaces/policy-delete.png)
