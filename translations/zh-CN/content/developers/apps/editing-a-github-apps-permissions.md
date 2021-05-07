---
title: 编辑 GitHub 应用程序的权限
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions/
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% note %}

**注：**在帐户或组织的所有者批准更改之前，更新的权限不会对安装设施生效。 您可以使用 [InstallationEvent web 挂钩](/webhooks/event-payloads/#installation)了解用户何时接受应用程序的新权限。 [用户级权限](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)是一个例外，它不需要帐户所有者批准权限更改。

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. 选择要更改其权限的 GitHub 应用程序。 ![应用程序选择](/assets/images/github-apps/github_apps_select-app.png)
5. 在左侧栏中，单击 **Permissions & webhooks（权限和 web 挂钩）**。 ![权限和 web 挂钩](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. 修改要更改的权限。 对于每种类型的权限，从下拉列表中选择“Read-only（只读）”、“Read & write（读写）”或“No access（无访问权限）”。 ![GitHub 应用程序的权限选择](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. 在“Subscribe to events（订阅事件）”中，选择应用程序要订阅的任何事件。 ![GitHub 应用程序订阅事件的权限选择](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. （可选）在“Add a note to users（向用户添加注释）”中，添加注释，告诉用户为什么要更改 GitHub 应用程序请求的权限。 ![用于向用户添加注释以解释 GitHub 应用程序权限更改原因的输入框](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. 单击 **Save changes（保存更改）**。 ![保存权限更改的按钮](/assets/images/github-apps/github_apps_save_changes.png)
