---
title: Repository invitations
allowTitleToDifferFromFilename: true
shortTitle: 邀请
intro: The Repository invitations API allows you to view and manage invitations to collaborate on a repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Repository invitations API

The Repository invitations API allows you to view and manage invitations to collaborate on a repository. 受邀用户（或代表受邀用户的外部服务）可以选择接受或拒绝邀请。

To add a user as a collaborator, use the Collaborators API instead. 更多信息请参阅“[添加仓库协作者](/rest/collaborators/collaborators#add-a-repository-collaborator)”。

请注意，`repo:invite` [OAuth 作用域](/developers/apps/scopes-for-oauth-apps)授予对邀请的定向访问权限，但**不**授予对仓库代码的访问权限，而 `repo` 作用域同时授予对代码和邀请的权限。
