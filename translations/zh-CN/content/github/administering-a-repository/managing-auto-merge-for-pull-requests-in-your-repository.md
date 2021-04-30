---
title: 管理仓库中拉取请求的自动合并
intro: 您可以允许或禁止仓库中拉取请求的自动合并。
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: '*'
permissions: 具有维护员权限的人可以管理仓库中拉取请求的自动合并。
topics:
  - 仓库
---

如果您允许自动合并仓库中的拉取请求，则用户可以配置仓库中的单个拉取请求在满足所有合并要求时自动合并。 更多信息请参阅“[自动合并拉取请求](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. 在“Merge button（合并按钮）”下，选择或取消选择 **Allow auto-merge（允许自动合并）**。 ![允许或禁止自动合并的复选框](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)
