---
title: 管理贡献者和团队
intro: 您可以管理指标和报告中包含的人员和团队。
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-contributors-and-teams
permissions: 'People with admin permissions in {% data variables.product.prodname_insights %} can manage contributors and teams.'
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---

### 关于 {% data variables.product.prodname_insights %} 中的贡献者和团队

{% data variables.product.prodname_insights %} 中的贡献者是与 {% data variables.product.prodname_enterprise %} 数据相关联的实体。 您可以编辑和隐藏贡献者。

有时，同一个人可能显示为多个贡献者。 例如，某人在 Git 中使用了多个提交电子邮件地址，而 {% data variables.product.prodname_insights %} 中的每个电子邮件地址都对应一个唯一的贡献者。 您可以合并多个贡献者以整合来自同一个人的所有数据。

您还可以将贡献者分成团队。 您可以使用团队作为报告的过滤器。 更多信息请参阅“[查看关键指标和报告](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)”。

### 编辑贡献者

您可以编辑贡献者在 {% data variables.product.prodname_insights %} 中的显示名称。

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
{% data reusables.github-insights.edit-contributor %}
4. 在“First Name（名字）”下，输入贡献者的名字。 ![名字字段](/assets/images/help/insights/first-name.png)
5. 在“Last Name（姓氏）”下，输入贡献者的姓氏。 ![姓氏字段](/assets/images/help/insights/last-name.png)
6. 单击 **Rename（重命名）**。

### 管理贡献者可见性

隐藏贡献者会在所有指标中排除与该贡献者关联的所有数据。

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
{% data reusables.github-insights.edit-contributor %}
3. 选择或取消选择 **Show contributor（显示贡献者）**。 ![显示或隐藏贡献者的复选框](/assets/images/help/insights/show-contributor.png)
4. 单击 **Done（完成）**。

### 合并贡献者数据

合并两个或多个贡献者时，这些贡献者的 {% data variables.product.prodname_insights %} 数据将与一个主贡献者相关联。 在指标中，所有合并的贡献者数据都属于主贡献者。

您可以根据 {% data variables.product.prodname_insights %} 检测到的具有匹配名称的贡献者，手动或自动合并贡献者。

#### 自动合并贡献者

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
3. 在“All Contributors（所有贡献者）”下，单击 **Auto-Merge（自动合并）** ![自动合并按钮](/assets/images/help/insights/auto-merge.png)
4. （可选）要从合并中排除某个贡献者，请在该贡献者的右侧单击 **Skip（跳过）**。 ![跳过按钮](/assets/images/help/insights/skip-contributor.png)
5. 对于每个组，选择一个主贡献者。 ![选择主贡献者的单选按钮](/assets/images/help/insights/select-primary.png)
6. 单击 **Merge All（全部合并）**。

#### 手动合并贡献者

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
3. 选择您要合并的贡献者。 ![选择贡献者](/assets/images/help/insights/select-contributors.png)
4. 在“All Contributors（所有贡献者）”下，单击 **Merge（合并）**。 ![合并按钮](/assets/images/help/insights/merge-button.png)
5. 选择主贡献者。 ![选择主贡献者的单选按钮](/assets/images/help/insights/select-primary.png)
6. 单击 **Merge accounts（合并帐户）**。

#### 取消合并贡献者

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
4. 在贡献者的右侧，单击 **Unmerge（取消合并）**。 ![取消合并按钮](/assets/images/help/insights/unmerge-contributor.png)

### 管理 {% data variables.product.prodname_insights %} 中的团队

{% data variables.product.prodname_insights %} 中有两种类型的团队：从 {% data variables.product.product_name %} 导入的团队和自定义团队。

当一个组织被添加到 {% data variables.product.prodname_insights %} 时，该组织的所有成员均从 {% data variables.product.product_name %} 导入。 您可以在 {% data variables.product.prodname_insights %} 中按这些团队进行搜索和过滤。 您可以在 {% data variables.product.product_name %} 中管理团队。

您可以在 {% data variables.product.prodname_insights %} 中创建和管理自定义团队。 自定义团队可包括来自 {% data variables.product.product_name %} 中多个组织的成员。

#### 创建自定义团队

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
2. 在“Teams（团队）”的右侧，单击 **Create Team（创建团队）**。 ![创建团队按钮](/assets/images/help/insights/create-team.png)
3. 在“Team Name（团队名称）”下，为团队输入唯一名称。 ![团队名称字段](/assets/images/help/insights/team-name.png)
4. 单击 **Create（创建）**。

#### 将贡献者添加到自定义团队

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. 在“Contributors（贡献者）”下，使用下拉菜单并选择贡献者。 ![贡献者下拉菜单](/assets/images/help/insights/contributors-drop-down.png)
4. 单击 **Done（完成）**。

#### 从自定义团队中删除贡献者

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. 在要删除的贡献者的右侧，单击 {% octicon "trash" aria-label="The trash icon" %}。 ![回收站按钮](/assets/images/help/insights/contributor-trashcan.png)

#### 重命名自定义团队

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. 在“Team Name（团队名称）”下，为团队输入唯一名称。 ![团队名称字段](/assets/images/help/insights/rename-team.png)
4. 单击 **Rename（重命名）**。 ![重命名按钮](/assets/images/help/insights/rename-button-team.png)
5. 单击 **Done（完成）**。

#### 删除自定义团队

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. 单击 **Delete Team（删除团队）**。 ![删除团队按钮](/assets/images/help/insights/delete-team.png)
4. 单击 **Confirm（确认）**。
