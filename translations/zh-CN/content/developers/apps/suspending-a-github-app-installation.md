---
title: 挂起 GitHub 应用程序安装
intro: '{% data reusables.shortdesc.suspending_a_github_app %}'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - GitHub Apps
---

### 挂起 GitHub 应用程序

拥有和维护 GitHub 应用程序的集成者（也称为 GitHub 应用程序所有者）可以使用具有 JWT 的 REST API 端点来挂起或取消挂起 GitHub 应用程序安装设施。 更多信息请参阅“[GitHub 应用程序 REST API](/rest/reference/apps)”。

安装 GitHub 应用程序的人（也称为安装设施所有者）只能通过其应用程序的安装设置来挂起或取消挂起 GitHub 应用程序。 安装设施所有者不能使用 API 来挂起或取消挂起其应用程序安装设施。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. 选择
要挂起的 {% data variables.product.prodname_github_app %}。
![应用程序选择](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
6. 在安装设施的挂起设置旁边，单击 **Suspend（挂起）**或 **Unsuspend（取消挂起）**。 ![挂起 GitHub 应用程序](/assets/images/github-apps/suspend-a-github-app.png)
