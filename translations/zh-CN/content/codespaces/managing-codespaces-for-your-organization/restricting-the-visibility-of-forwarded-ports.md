---
title: Restricting the visibility of forwarded ports
shortTitle: Restricting port visibility
intro: You can set constraints on the visibility options users can choose when they forward ports from codespaces in your organization.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## 概览

Typically, within a codespace you are able to forward ports privately (only to yourself), to members of your organization, or publicly (to anyone with the URL). 更多信息请参阅“[在代码空间中转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”。

As an organization owner, you may want to configure constraints on the visibility options users can set when forwarding ports. For example, for security reasons, you may want to disallow public port forwarding. 为此，您可以在组织的 {% data variables.product.prodname_codespaces %} 设置中定义一个或多个策略。

### Behavior when you set a port visibility constraint

If there are existing codespaces that no longer conform to a policy you have defined, these codespaces will continue to operate until they are stopped or time out. When the user resumes the codespace, it will be subject to the policy constraints.

{% note %}

**Note**: You can't disable private port forwarding, as private port forwarding is required by {% data variables.product.prodname_codespaces %} to continue working as designed, for example to forward SSH on port 22.

{% endnote %}

### 设置组织范围和存储库特定的策略

创建策略时，您可以选择是将其应用于组织中的所有存储库，还是仅应用于指定的存储库。 如果设置了组织范围的策略，则为各个存储库设置的任何策略都必须在组织级别设置的限制范围内。 Adding policies makes the choice of visibility options more, not less, restrictive.

For example, you could create an organization-wide policy that restricts the visibility options to organization only. You can then set a policy for Repository A that disallows both public and organization visibility, which would result in only private port forwarding being available for this repository. Setting a policy for Repository A that allowed both public and organization would result in only organization visibility, because the organization-wide policy does not allow public visibility.

If you add an organization-wide policy, you should set it to the most lenient visibility option that will be available for any repository in your organization. 然后，您可以添加特定于存储库的策略以进一步限制选择。

## Adding a policy to limit the port visibility options

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, select **{% octicon "codespaces" aria-label="The codespaces icon" %} {% data variables.product.prodname_codespaces %}** then click **Policies**.
1. 在“Codespace policies（代码空间策略）”页面上，单击 **Create Policy（创建策略）**。
1. 输入新策略的名称。
1. Click **Add constraint** and choose **Port visibility**.

   ![Add a constraint for port visibility](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. Click {% octicon "pencil" aria-label="The edit icon" %} to edit the constraint

   ![Edit the port visibility constraint](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. Clear the selection of the port visibility options (**Org** or **Public**) that you don't want to be available.

   ![Choose the port visibility options](/assets/images/help/codespaces/choose-port-visibility-options.png)

1. 在“Change policy target（更改策略目标）”区域中，单击下拉按钮。
1. 选择 **All repositories（所有存储库）** 或 **Selected repositories（选定的存储库）**，以确定此策略将应用于哪些存储库。
1. 如果选择了 **Selected repositories（所选仓库）**：
   1. 单击 {% octicon "gear" aria-label="The settings icon" %}。

      ![编辑策略的设置](/assets/images/help/codespaces/policy-edit.png)

   2. 选择要应用此策略的存储库。
   3. 在存储库列表的底部，单击 **Select repositories（选择存储库）**。

      ![为此策略选择存储库](/assets/images/help/codespaces/policy-select-repos.png)

1. 单击 **Save（保存）**。

## 编辑策略

1. 显示“Codespace policies（代码空间策略）”页。 For more information, see "[Adding a policy to limit the port visibility options](#adding-a-policy-to-limit-the-port-visibility-options)."
1. 单击要编辑的策略的名称。
1. 进行所需的更改，然后单击 **Save（保存）**。

## 删除策略

1. 显示“Codespace policies（代码空间策略）”页。 For more information, see "[Adding a policy to limit the port visibility options](#adding-a-policy-to-limit-the-port-visibility-options)."
1. 单击要删除的策略右侧的删除按钮。

   ![策略的删除按钮](/assets/images/help/codespaces/policy-delete.png)
