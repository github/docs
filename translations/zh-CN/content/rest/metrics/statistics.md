---
title: 统计
intro: 'The Repository Statistics API allows you to fetch the data that {% data variables.product.product_name %} uses for visualizing different types of repository activity.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

### 谈一谈缓存

计算仓库统计信息是一项昂贵的操作，所以我们尽可能返回缓存的数据。  如果您查询仓库的统计信息时，数据尚未缓存，您将会收到 `202` 响应；同时触发后台作业以开始编译这些统计信息。 稍等片刻，待作业完成，然后再次提交请求。 如果作业已完成，该请求将返回 `200` 响应，响应正文中包含统计信息。

仓库统计信息由仓库默认分支的 SHA 缓存；推送到默认分支将重置统计信息缓存。

### 统计排除某些类型的提交

API 公开的统计信息与[各种仓库图](/github/visualizing-repository-data-with-graphs/about-repository-graphs)显示的统计信息相匹配。

总结：
- 所有统计信息都排除合并提交。
- 参与者统计信息还排除空提交。
