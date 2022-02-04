---
title: 查看仓库活动的摘要
intro: 'You can view an overview of a repository''s pull request, issue, and commit activity.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: 查看仓库活动
---

## About Pulse

您可以通过 Pulse 查看仓库活动的概览。 Pulse includes a list of open and merged pull requests, open and closed issues, and a graph showing the commit activity for the top 15 users who committed to the default branch of the project in the selected [time period](/articles/viewing-a-summary-of-repository-activity#filtering-by-time).

如果提交合作作者的提交已合并到仓库的默认分支并且他们是贡献最多提交的前 15 名用户，则提交合作作者将包括在提交活动摘要中。

## Accessing Pulse

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

## 按时间过滤

默认情况下，Pulse 显示过去七天的仓库活动。 要选择不同的时间段，请单击 Pulse 概览右上角中的 **Period（周期）**下拉列表。

![按时间过滤 Pulse 活动](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
