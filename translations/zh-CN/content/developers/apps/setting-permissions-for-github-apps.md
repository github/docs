---
title: 设置 GitHub 应用程序的权限
intro: '{% data reusables.shortdesc.permissions_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-permissions-for-github-apps/
  - /apps/building-github-apps/permissions-for-github-apps/
  - /apps/building-github-apps/setting-permissions-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

创建 GitHub 应用程序时，您可以选择访问最终用户数据所需的权限。 还可以添加和删除权限。 更多信息请参阅“[编辑 GitHub 应用程序的权限](/apps/managing-github-apps/editing-a-github-app-s-permissions/)”。

### 元数据权限

默认情况下，GitHub 应用程序对元数据端点具有 `Read-only` 权限。 元数据是只读终结点的集合，提供有关授权安装设施可访问资源的一般信息。

{% data reusables.apps.metadata-permissions %} 有关元数据端点的列表，请参阅“[元数据权限](/rest/reference/permissions-required-for-github-apps#metadata-permissions)”。
