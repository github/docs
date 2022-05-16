---
title: 自托管运行器
intro: 自托管运行器 API 允许您注册、查看和删除自托管的运行器。
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
 

## 关于自托管运行器 API

自托管运行器 API 允许您注册、查看和删除自托管的运行器。 {% data reusables.actions.about-self-hosted-runners %} 更多信息请参阅“[托管您自己的运行器](/actions/hosting-your-own-runners)”。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} 必须对仓库具有`管理`权限，或者对组织具有 `organization_self_hosted_runners` 权限。 经过身份验证的用户必须具有对存储库或组织的管理员访问权限或者企业的 `manage_runners:enterprise` 作用域才能使用此 API。
