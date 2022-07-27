---
title: 限制空闲超时期限
shortTitle: 限制超时期限
intro: 您可以为组织拥有的任何代码空间设置最长超时期限。
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage timeout constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## 概览

默认情况下，代码空间在处于非活动状态 30 分钟后超时。 若代码空间超时，它将停止，并且将不再产生计算使用费用。

{% data variables.product.prodname_dotcom %} 用户的个人设置允许他们为其创建的代码空间定义自己的超时期限。 这可能比默认的 30 分钟长。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_github_codespaces %} 的超时期](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)”。

作为组织所有者，您可能希望为为组织拥有的存储库创建的代码空间的最大空闲超时期限配置限制。 这可以帮助您限制与代码空间相关的成本，这些代码空间在长时间处于非活动状态后会超时。 您可以为组织拥有的所有存储库的代码空间或特定存储库的代码空间设置最大超时。

{% note %}

**注意**：最大空闲超时约束仅适用于组织拥有的代码空间。

{% endnote %}

有关 {% data variables.product.prodname_github_codespaces %} 计算使用价格的更多信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”。

### 设置最大空闲超时约束时的行为

如果有人在其个人设置中将默认空闲超时设置为 90 分钟，然后他们以最大空闲超时限制为 60 分钟启动存储库的代码空间，则该代码空间将在不活动 60 分钟后超时。 代码空间创建完成后，将显示一条消息，说明这一点：

> 根据组织的策略，此代码空间的空闲超时设置为 60 分钟。

### 设置组织范围和存储库特定的策略

创建策略时，您可以选择是将其应用于组织中的所有存储库，还是仅应用于指定的存储库。 如果创建具有超时约束的组织范围策略，则针对特定存储库的任何策略中的超时约束必须位于为整个组织配置的限制范围内。 应用组织范围策略、针对指定存储库的策略或某人的个人设置中最短的超时期限。

如果添加具有超时约束的组织范围策略，则应将超时设置为可接受的最长期限。 然后，您可以添加单独的策略，将组织中特定存储库的最大超时时间设置为较短的时间段。

## 添加策略以设置最大空闲超时期限

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. 单击 **Add constraint（添加约束）** ，然后选择 **Maximum idle timeout（最大空闲超时）**。

   ![为空闲超时添加约束](/assets/images/help/codespaces/add-constraint-dropdown-timeout.png)

1. 单击 {% octicon "pencil" aria-label="The edit icon" %} 编辑约束。

   ![编辑超时约束](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. 输入代码空间在超时之前可以保持非活动状态的最大分钟数，然后单击 **Save（保存）**。

   ![设置最大超时（以分钟为单位）](/assets/images/help/codespaces/maximum-minutes-timeout.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. 如果要向策略添加其他约束，请单击 **Add constraint（添加约束）** ，然后选择另一个约束。 有关其他约束的信息，请参阅“[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”、“[限制转发端口的可见性](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)”和“[限制代码空间的保留期](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”。
1. 向策略添加完约束后，单击 **Save（保存）**。

该策略将应用于创建的所有新代码空间，在现有代码空间下次启动时也会应用于它们。

## 编辑策略

您可以编辑现有策略。 例如，您可能希望在策略中添加或删除约束。

1. 显示“Codespace policies（代码空间策略）”页。 更多信息请参阅“[添加策略以设置最大空闲超时期限](#adding-a-policy-to-set-a-maximum-idle-timeout-period)”。
1. 单击要编辑的策略的名称。
1. 进行所需的更改，然后单击 **Save（保存）**。

## 删除策略

1. 显示“Codespace policies（代码空间策略）”页。 更多信息请参阅“[添加策略以设置最大空闲超时期限](#adding-a-policy-to-set-a-maximum-idle-timeout-period)”。
1. 单击要删除的策略右侧的删除按钮。

   ![策略的删除按钮](/assets/images/help/codespaces/policy-delete.png)
