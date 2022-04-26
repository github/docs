---
title: 限制对计算机类型的访问
shortTitle: Restrict machine types
intro: 您可以对用户在组织中创建代码空间时可以选择的计算机类型设置约束。
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access to machine types for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## 概览

通常，在创建代码空间时，系统会为将运行代码空间的计算机提供一系列规范。 您可以选择最适合您需求的计算机类型。 更多信息请参阅“[创建代码空间](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”。 如果您为使用 {% data variables.product.prodname_github_codespaces %} 付费，那么您选择的计算机类型将影响您的账单金额。 有关计价的更多信息，请参阅“[关于代码空间的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)”。

作为组织所有者，您可能希望对可用的计算机类型配置约束。 例如，如果组织中的工作不需要大量的计算能力或存储空间，则可以从用户可以选择的选项列表中删除资源丰富的计算机。 为此，您可以在组织的 {% data variables.product.prodname_codespaces %} 设置中定义一个或多个策略。

### 设置计算机类型约束时的行为

如果存在不再符合您定义的策略的现有代码空间，则这些代码空间将继续运行，直到它们停止或超时。 当用户尝试恢复代码空间时，将显示一条消息，告知他们此组织不再允许当前选择的计算机类型，并提示他们选择备用计算机类型。

如果删除组织中单个存储库的 {% data variables.product.prodname_codespaces %} 配置所需的更高规范的计算机类型，则无法为该存储库创建代码空间。 当有人尝试创建代码空间时，他们将看到一条消息，告诉他们没有有效的计算机类型可以满足存储库 {% data variables.product.prodname_codespaces %} 配置的要求。

{% note %}

**注意**：任何可以在存储库中编辑 `devcontainer.json` 配置文件的人都可以为计算机设置可用于该存储库代码空间的最低规范。 更多信息请参阅“[为代码空间计算机设置最低规范](/codespaces/setting-up-your-project-for-codespaces/setting-a-minimum-specification-for-codespace-machines)”。

{% endnote %}

如果为计算机类型设置策略会阻止用户对特定存储库使用 {% data variables.product.prodname_codespaces %} ，则有两种选择：

* 您可以调整策略以专门从受影响的存储库中删除限制。
* 由于新策略，任何拥有无法再访问的代码空间的人都可以将其代码空间导出到分支。 此分支将包含它们从代码空间所做的所有更改。 然后，他们可以使用兼容的计算机类型在此分支上打开新的代码空间，或者在本地处理此分支。 更多信息请参阅“[将更改导出到分支](/codespaces/troubleshooting/exporting-changes-to-a-branch)”。

### 设置组织范围和存储库特定的策略

创建策略时，您可以选择是将其应用于组织中的所有存储库，还是仅应用于指定的存储库。 如果设置了组织范围的策略，则为各个存储库设置的任何策略都必须在组织级别设置的限制范围内。 添加策略会使计算机的选择受到限制更多，而不是更少。

例如，您可以创建一个组织范围的策略，将计算机类型限制为 2 核或 4 核。 然后，您可以为存储库 A 设置一个策略，将其限制为仅 2 核计算机。 为存储库 A 设置策略以将其限制为具有 2、4 或 8 核的计算机将导致仅选择 2 核和 4 核计算机，因为组织范围的策略会阻止访问 8 核计算机。

如果添加组织范围的策略，则应将其设置为可用于组织中任何存储库的最大计算机类型选择范围。 然后，您可以添加特定于存储库的策略以进一步限制选择。

## 添加策略以限制可用的计算机类型

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. 单击 **Add constraint（添加约束）** ，然后选择 **Machine types（计算机类型）**。

   ![为计算机类型添加约束](/assets/images/help/codespaces/add-constraint-dropdown.png)

1. 单击 {% octicon "pencil" aria-label="The edit icon" %} 以编辑约束，然后清除您不希望可用的任何计算机类型的选择。

   ![编辑计算机类型约束](/assets/images/help/codespaces/edit-machine-constraint.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. If you want to add another constraint to the policy, click **Add constraint** and choose another constraint. For information about other constraints, see "[Restricting the visibility of forwarded ports](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)" and "[Restricting the idle timeout period](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)."
1. After you have finished adding constraints to your policy, click **Save**.
## 编辑策略

You can edit an existing policy. For example, you may want to add or remove constraints to or from a policy.

1. 显示“Codespace policies（代码空间策略）”页。 更多信息请参阅“[添加策略以限制可用计算机类型](#adding-a-policy-to-limit-the-available-machine-types)”。
1. 单击要编辑的策略的名称。
1. 进行所需的更改，然后单击 **Save（保存）**。

## 删除策略

1. 显示“Codespace policies（代码空间策略）”页。 更多信息请参阅“[添加策略以限制可用计算机类型](#adding-a-policy-to-limit-the-available-machine-types)”。
1. 单击要删除的策略右侧的删除按钮。

   ![策略的删除按钮](/assets/images/help/codespaces/policy-delete.png)

## 延伸阅读

- "[管理代码空间的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)"
