---
title: 关于仓库图
intro: 仓库图可帮助您查看和分析仓库的数据。
redirect_from:
  - /articles/using-graphs/
  - /articles/about-repository-graphs
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 仓库
---

仓库图提供有关 {% if currentVersion == "free-pro-team@latest" %} 流量、依赖于仓库的项目、{% endif %} 仓库贡献者和提交以及仓库复刻和网络的信息。 如果是您维护仓库，您可以使用此数据更好地了解谁在使用您的仓库，以及为什么使用。

{% if currentVersion == "free-pro-team@latest" %}

有些仓库图仅在具有 {% data variables.product.prodname_free_user %} 的公共仓库中可用：
- 脉冲
- 贡献者
- 流量
- 提交
- 代码频率
- 网络

所有其他仓库图在所有仓库中可用。 每个仓库图在具有 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %} 及 {% data variables.product.prodname_ghe_cloud %} 的公共和私有仓库中可用。 {% data reusables.gated-features.more-info %}

{% endif %}

### 延伸阅读

- "[访问基本仓库数据](/articles/accessing-basic-repository-data)"
- "[分析对仓库内容的更改](/articles/analyzing-changes-to-a-repository-s-content)"
- "[了解仓库之间的联系](/articles/understanding-connections-between-repositories)"
