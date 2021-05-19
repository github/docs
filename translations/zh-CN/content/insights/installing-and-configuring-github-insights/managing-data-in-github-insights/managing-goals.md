---
title: 管理目标
intro: 您可以使用“目标”为关键指标设定目标并衡量实现这些目标的成功率。
redirect_from:
  - /github/installing-and-configuring-github-insights/creating-and-managing-goals
  - /insights/installing-and-configuring-github-insights/managing-goals
permissions: 'Anyone with access to {% data variables.product.prodname_insights %} can manage goals.'
versions:
  enterprise-server: '*'
---
### 关于目标

目标是指您为关键目标设定的用于衡量团队成功率的目标。 为关键指标设定目标时，可以使用图表上的目标线和成功率指标了解团队绩效与目标的对比情况。 例如，您可以将 `code review turnaround time` 的目标设定为 4 小时。 关键指标图表上的目标线可显示哪些代码审查实现了目标，哪些没有实现。 如果您的团队在 4 小时内完成了一半代码审查，`success rate` 就是 50%。

目标仅用于关键指标。 某些报告还可以显示哪些工作（如各个拉取请求）不符合您的目标。 更多信息请参阅“[查看关键指标和报告](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)”。

目标无法创建或删除。 编辑目标时，新目标将适用于使用 {% data variables.product.prodname_insights %} 应用程序的所有用户。

### 编辑目标

{% data reusables.github-insights.navigate-to-key-metrics %}
{% data reusables.github-insights.choose-key-metric %}
1. 在目标右侧，单击 {% octicon "gear" aria-label="The gear icon" %}。 ![用于编辑目标的齿轮图标](/assets/images/help/insights/edit-goal.png)
2. 在文本字段中，输入新的目标值。 ![目标值字段](/assets/images/help/insights/input-goal.png)
3. 单击 **Save（保存）**。 ![保存目标](/assets/images/help/insights/save-goal.png)
