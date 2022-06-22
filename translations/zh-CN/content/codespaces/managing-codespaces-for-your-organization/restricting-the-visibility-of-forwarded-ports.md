---
title: 限制转发端口的可见性
shortTitle: 限制端口可见性
intro: 您可以对用户在从组织中的代码空间转发端口时可以选择的可见性选项设置约束。
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## 概览

通常，在代码空间中，您可以私下（仅向自己）、向组织成员或公开（向具有 URL 的任何人）转发端口。 更多信息请参阅“[在代码空间中转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”。

作为组织所有者，您可能希望对用户在转发端口时可以设置的可见性选项配置约束。 例如，出于安全原因，您可能希望禁止公共端口转发。 为此，您可以在组织的 {% data variables.product.prodname_codespaces %} 设置中定义一个或多个策略。

### 设置端口可见性约束时的行为

如果存在不再符合您定义的策略的现有代码空间，则这些代码空间将继续运行，直到它们停止或超时。 当用户恢复代码空间时，它将受限于策略约束。

{% note %}

**注意**：您无法禁用专用端口转发，因为 {% data variables.product.prodname_codespaces %} 需要专用端口转发才能继续按设计工作，例如在端口 22 上转发 SSH。

{% endnote %}

### 设置组织范围和存储库特定的策略

创建策略时，您可以选择是将其应用于组织中的所有存储库，还是仅应用于指定的存储库。 如果设置了组织范围的策略，则为各个存储库设置的任何策略都必须在组织级别设置的限制范围内。 添加策略会使可见性选项的选择受到限制更多，而不是更少。

例如，您可以创建一个组织范围的策略，将可见性选项限制为仅组织。 然后，您可以为存储库 A 设置一个策略，不允许公共和组织可见性，这将导致只有私有端口转发可用于此存储库。 为存储库 A 设置同时允许公共和组织的策略将仅导致组织可见性，因为组织范围的策略不允许公共可见性。

如果添加组织范围的策略，则应将其设置为适用于组织中的任何存储库的最宽松的可见性选项。 然后，您可以添加特定于存储库的策略以进一步限制选择。

## 添加策略以限制端口可见性选项

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. 单击 **Add constraint（添加约束）** ，然后选择 **Port visibility（端口可见性）**。

   ![为端口可见性添加约束](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. 单击 {% octicon "pencil" aria-label="The edit icon" %} 编辑约束。

   ![编辑端口可见性约束](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. 清除选择的端口可见性选项（**Org** 或 **Public**）。

   ![选择端口可见性选项](/assets/images/help/codespaces/choose-port-visibility-options.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. 如果要向策略添加其他约束，请单击 **Add constraint（添加约束）** ，然后选择另一个约束。 有关其他约束的信息，请参阅“[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”和“[限制空闲超时期限](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)”。
1. 向策略添加完约束后，单击 **Save（保存）**。
## 编辑策略

您可以编辑现有策略。 例如，您可能希望在策略中添加或删除约束。

1. 显示“Codespace policies（代码空间策略）”页。 更多信息请参阅“[添加策略以限制端口可见性选项](#adding-a-policy-to-limit-the-port-visibility-options)”。
1. 单击要编辑的策略的名称。
1. 进行所需的更改，然后单击 **Save（保存）**。

## 删除策略

1. 显示“Codespace policies（代码空间策略）”页。 更多信息请参阅“[添加策略以限制端口可见性选项](#adding-a-policy-to-limit-the-port-visibility-options)”。
1. 单击要删除的策略右侧的删除按钮。

   ![策略的删除按钮](/assets/images/help/codespaces/policy-delete.png)
