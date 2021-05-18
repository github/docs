---
title: 管理事件
intro: '{% data reusables.github-insights.events %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/creating-and-managing-events
permissions: 'People with admin permissions to {% data variables.product.prodname_insights %} can manage events.'
versions:
  enterprise-server: '*'
---

### 关于事件

事件可为指标添加上下文。 例如，节假日或发布日可能会导致工作模式的变化，因此了解这些事件的发生时间可能会改变您对指标的评估。 您可以针对团队重组、新员工入职、团队范围变化以及任何可能影响团队工作的其他因素而创建事件。

在 {% data variables.product.prodname_insights %} 中创建事件后，任何人都可以将该事件视为某些指标中的注释。 更多信息请参阅“[查看关键指标和报告](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)”。

### 创建事件

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.events-tab %}
2. 单击 **Add Event（添加事件）**。 ![添加事件按钮](/assets/images/help/insights/add-event.png)
3. 在“Title（标题）”下，为事件输入一个描述性的名称。 ![标题字段](/assets/images/help/insights/title-field.png)
4. 使用“Start Date（开始日期）”下拉菜单，选择事件的开始日期。 ![开始日期下拉菜单](/assets/images/help/insights/start-date.png)
5. 使用“End Date（结束日期）”下拉菜单，选择事件的结束日期。 ![结束日期下拉菜单](/assets/images/help/insights/end-date.png)
6. 单击 **Save（保存）**。

### 删除事件

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.events-tab %}
3. 在要删除的事件的右侧，单击 **{% octicon "trash" aria-label="The trash icon" %}**。 ![回收站按钮](/assets/images/help/insights/trashcan-button.png)
4. 单击 **Confirm（确认）**。
