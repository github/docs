---
title: 管理仓库
intro: '您可以管理连接到 {% data variables.product.prodname_insights %} 的仓库以及每个仓库的指标中包含的数据。'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-repositories
  - /insights/installing-and-configuring-github-insights/managing-repositories
permissions: 'People with admin permissions in {% data variables.product.prodname_insights %} can manage repositories. '
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---

### 关于仓库管理

要让 {% data variables.product.prodname_insights %} 包含来自 {% data variables.product.prodname_enterprise %} 中的仓库的数据，您必须将拥有该仓库的组织添加到 {% data variables.product.prodname_insights %}。 更多信息请参阅“[管理组织](/github/installing-and-configuring-github-insights/managing-organizations)”。

将组织添加到 {% data variables.product.prodname_insights %} 后，该组织拥有的每个仓库在满足以下要求时将自动导入：
- 至少有一个提交
- 不是私有仓库
- 未存档
- 在最近 6 个月内有推送

仓库数据通过 web 挂钩定期同步更新。 您可以随时手动刷新仓库数据或取消正在进行的数据导入。

{% data reusables.github-insights.repository-groups %}

您可以从 {% data variables.product.prodname_insights %} 中排除特定仓库或所有仓库的特定文件。

### 关于导入时间

{% data variables.product.prodname_insights %} 可导入每个仓库最近三年的数据。 根据仓库的大小和复杂性，初始导入可能需要一段时间，在此期间 {% data variables.product.prodname_insights %} 数据不完整。 通常，初始导入几个团队需要一到两天。 大型而复杂的初始导入可能需要长达两周的时间。

| 仓库大小                 | 初始导入时间   |
| -------------------- | -------- |
| < 10,000 个提交         | < 1 小时   |
| 10,000 至 300,000 个提交 | 1 到 10 天 |
| 300,000 个提交或更多       | 10 天 +   |

完成初始导入后，因增量变化而进行的后续导入将需要两分钟或更短时间。

要减少导入时间，您可以在导入之前从 {% data variables.product.prodname_insights %} 中排除非标准文件夹中的任何第三方库。 更多信息请参阅“[管理排除过滤器](#managing-exclusion-filters)”。

如果您有许多大型仓库，可通过提供具有更多内核的应用程序服务器来缩短初始导入时间。 具有更多内核的应用程序服务器可执行更多并发导入作业。

| 应用程序服务器内核 | 并发初始导入作业 |
| --------- | -------- |
| 16 个内核    | 1 个作业    |
| 32 个内核    | 4 个作业    |

导入大量的拉取请求可能会触发 {% data variables.product.prodname_enterprise %} 的速率限制。 在这种情况下，导入将暂停一小时后再恢复。 为缩短导入时间，您可以暂时增加 {% data variables.product.prodname_enterprise %} 的速率上限。 更多信息请参阅“[配置速率限制](/enterprise/{{ currentVersion }}/admin/installation/configuring-rate-limits)”。

### 查看和管理仓库

您可以查看已导入仓库和可导入的仓库。 如果导入正在进行，您可以查看导入状态和预计的导入完成时间。

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
3. （可选）要添加尚未导入的仓库，请在该仓库名称的右侧，单击 **Add（添加）**。 ![添加按钮](/assets/images/help/insights/add-button.png)
4. （可选）要手动刷新仓库数据，请在该仓库名称的右侧，单击 **{% octicon "sync" aria-label="The refresh icon" %}** 刷新按钮。 ![刷新按钮](/assets/images/help/insights/refresh-button.png)
5. （可选）要取消正在进行的导入，请在该仓库名称的右侧，单击 **Cancel（取消）**。 ![取消按钮](/assets/images/help/insights/cancel-button.png)
6. （可选）要删除已导入仓库，请在该仓库名称的右侧，单击 **Remove（删除）**。 ![删除按钮](/assets/images/help/insights/remove-button.png)

### 管理报告的仓库组

您可以创建仓库组、在组中添加或删除仓库以及删除仓库组。

#### 创建仓库组

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
2. 在右上角，单击 **Create Group（创建组）**。 ![创建组按钮](/assets/images/help/insights/create-group.png)
3. 在“Group Name（组名称）”下，输入组的名称。 ![组名称字段](/assets/images/help/insights/group-name.png)
4. 单击 **Create（创建）**。

#### 将仓库添加到仓库组

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
{% data reusables.github-insights.edit-group %}
4. 在“Repositories（仓库）”下，使用下拉菜单选择要添加到组的仓库。 ![仓库下拉菜单](/assets/images/help/insights/repositories-drop-down.png)
5. 单击 **Done（完成）**。

#### 删除仓库组

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
{% data reusables.github-insights.edit-group %}
4. 单击 **Delete Group（删除组）**。 ![删除组按钮](/assets/images/help/insights/delete-group.png)
5. 单击 **Confirm（确认）**。

### 管理排除过滤器

您可以创建文件排除规则列表，以从所有 {% data variables.product.prodname_insights %} 数据中忽略指定文件。 文件排除规则遵循在 *.gitignore* 文件中使用的相同规则。 更多信息请参阅 Git 文档中的“[gitignore](https://git-scm.com/docs/gitignore)”。

#### 为所有仓库添加文件排除规则

全局文件排除项的更改仅适用于新导入的数据，不会追溯影响现有数据。 要将新的排除规则应用于现有数据，您可以删除仓库，然后将其重新添加到 {% data variables.product.prodname_insights %}。

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.exclude-files-tab %}
3. （可选）在“Exclude files（排除文件）”下，选择 **Include all binaries（包括所有二进制文件）**。 ![包括所有二进制文件复选框](/assets/images/help/insights/include-all-binaries-global.png)
4. 在代码编辑器中，将新的排除规则添加到列表。 ![添加全局排除规则的代码编辑器](/assets/images/help/insights/global-exclusion-list.png)
5. 单击 **Save Changes（保存更改）**。

#### 为一个仓库添加文件排除规则

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.exclude-files-tab %}
3. 在“Repositories with File Filters（带有文件过滤器的仓库）”的右侧，单击 **Add Filter（添加过滤器）**。 ![添加过滤器按钮](/assets/images/help/insights/add-filter.png)
4. 使用“Repository（仓库）”下拉菜单选择一个仓库。 ![仓库下拉菜单](/assets/images/help/insights/repository-drop-down-exclude.png)
5. （可选）要对现有数据应用排除规则，请选择 **Re-import（重新导入）**。 ![重新导入复选框](/assets/images/help/insights/re-import-checkbox.png)
6. （可选）选择 **Include all binaries（包括所有二进制文件）**。 ![包括所有二进制文件复选框](/assets/images/help/insights/include-all-binaries-repo.png)
7. 在代码编辑器中，添加要应用到仓库的排除规则。 ![添加仓库排除规则的代码编辑器](/assets/images/help/insights/repo-exclusion-list.png)
8. 单击 **Create Filter（创建过滤器）**。
