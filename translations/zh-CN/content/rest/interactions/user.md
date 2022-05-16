---
title: 用户交互
shortTitle: 用户
allowTitleToDifferFromFilename: true
intro: 用户交互 API 允许您临时限制哪类用户可以在公共仓库上发表评论、开设问题或创建拉取请求。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## 关于用户交互 API

用户交互 API 允许您临时限制哪类用户可以在公共仓库上发表评论、开设问题或创建拉取请求。 {% data reusables.interactions.interactions-detail %} 以下是有关 {% data variables.product.product_name %} 用户类型的更多信息：

* 与仓库交互产生的 {% data reusables.interactions.existing-user-limit-definition %}。
* 与仓库交互产生的 {% data reusables.interactions.contributor-user-limit-definition %}。
* 与仓库交互产生的 {% data reusables.interactions.collaborator-user-limit-definition %}。

在用户级别设置交互限制将覆盖为用户拥有的各个仓库设置的任何交互限制。 要为用户拥有的个别仓库设置不同的交互限制，请使用[仓库](#repository)交互端点。
