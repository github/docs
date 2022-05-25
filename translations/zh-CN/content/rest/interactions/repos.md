---
title: 存储库交互
shortTitle: 仓库
intro: 存储库交互 API 允许具有所有者或管理员权限的用户临时限制哪类用户可以在公共存储库中发表评论、开设议题或创建拉取请求。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## 关于存储库交互 API

存储库交互 API 允许具有所有者或管理员权限的用户临时限制哪类用户可以在公共存储库中发表评论、开设议题或创建拉取请求。 {% data reusables.interactions.interactions-detail %} 以下是有关 {% data variables.product.product_name %} 用户类型的更多信息：

* 仓库中的 {% data reusables.interactions.existing-user-limit-definition %}。
* 仓库中的 {% data reusables.interactions.contributor-user-limit-definition %}。
* 仓库中的 {% data reusables.interactions.collaborator-user-limit-definition %}。

如果对拥有该仓库的用户或组织启用了交互限制，单个仓库的限制就不能更改。 而应使用[用户](#user)或[组织](#organization)交互端点来更改交互限制。
