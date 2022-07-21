---
title: 组织交互
shortTitle: 组织
intro: 组织交互 API 允许组织所有者临时限制哪类用户可以在组织的公共仓库中发表评论、开设议题或创建拉取请求。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## 关于组织交互 API

组织交互 API 允许组织所有者临时限制哪类用户可以在组织的公共仓库中发表评论、开设议题或创建拉取请求。 {% data reusables.interactions.interactions-detail %} 以下是有关 {% data variables.product.product_name %} 用户类型的更多信息：

* 组织中的 {% data reusables.interactions.existing-user-limit-definition %}。
* 组织中的 {% data reusables.interactions.contributor-user-limit-definition %}。
* 组织中的 {% data reusables.interactions.collaborator-user-limit-definition %}。

在组织级别设置交互限制将覆盖为组织拥有的各个仓库设置的任何交互限制。 要为组织拥有的各个仓库设置不同的交互限制，请改用[仓库](#repository)交互端点。
