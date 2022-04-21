---
title: 邀请
intro: 仓库邀请 API 允许用户或外部服务邀请其他用户参与仓库协作。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

受邀用户（或代表受邀用户的外部服务）可以选择接受或拒绝邀请。

请注意，`repo:invite` [OAuth 作用域](/developers/apps/scopes-for-oauth-apps)授予对邀请的定向访问权限，但**不**授予对仓库代码的访问权限，而 `repo` 作用域同时授予对代码和邀请的权限。

### 邀请用户参与仓库

使用 API 端点来添加协作者。 更多信息请参阅“[添加仓库协作者](/rest/collaborators/collaborators#add-a-repository-collaborator)”。
