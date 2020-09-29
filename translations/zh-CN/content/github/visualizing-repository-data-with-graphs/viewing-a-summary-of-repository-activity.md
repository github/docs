---
title: 查看仓库活动的摘要
intro: '您可以通过 Pulse 查看仓库活动的概览。 Pulse 包括打开及合并的拉取请求列表、打开和关闭的议题列表，以及显示在所选[时间段](/articles/viewing-a-summary-of-repository-activity#filtering-by-time)内提交到项目默认分支的前 15 名用户的提交活动图表。'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

如果提交合作作者的提交已合并到仓库的默认分支并且他们是贡献最多提交的前 15 名用户，则提交合作作者将包括在提交活动摘要中。

### 访问 Pulse

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

### 按时间过滤

默认情况下，Pulse 显示过去七天的仓库活动。 要选择不同的时间段，请单击 Pulse 概览右上角中的 **Period（周期）**下拉列表。

![按时间过滤 Pulse 活动](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
