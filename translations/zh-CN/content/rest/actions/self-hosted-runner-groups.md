---
title: 自托管运行器组
intro: 自托管运行器组 API 允许您管理自托运行器组。
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
 

## About the Self-hosted runner groups API

The Self-hosted runners groups API allows you manage groups of self-hosted runners. 更多信息请参阅“[使用组管理对自托管运行器的访问](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} 必须对仓库具有`管理`权限，或者对组织具有 `organization_self_hosted_runners` 权限。 经过身份验证的用户必须具有对存储库或组织的管理员访问权限或者企业的 `manage_runners:enterprise` 作用域才能使用此 API。
