---
title: 编辑 GitHub 应用程序的权限
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
  - /developers/apps/editing-a-github-apps-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Edit permissions
ms.openlocfilehash: 1777a06a44c42a2b90351d2c7206e07cfc689882
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085018'
---
{% note %}

注意：在帐户所有者或组织批准更改之前，更新的权限不会对安装生效。 可以使用 [InstallationEvent Webhook](/webhooks/event-payloads/#installation) 来了解用户何时接受应用的新权限。 [用户级权限](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)是一个例外，它不需要帐户所有者批准权限更改。

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. 选择要更改其权限的 GitHub 应用程序。
![应用选择](/assets/images/github-apps/github_apps_select-app.png)
5. 在左侧边栏中，单击“权限和 Webhook”。
![权限和 Webhook](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. 修改要更改的权限。 对于每种类型的权限，从下拉列表中选择“只读”、“读取和写入”或“无访问权限”。
![GitHub 应用的权限选择](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. 在“Subscribe to events（订阅事件）”中，选择应用程序要订阅的任何事件。
![GitHub 应用订阅事件的权限选择](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. （可选）在“Add a note to users（向用户添加注释）”中，添加注释，告诉用户为什么要更改 GitHub 应用程序请求的权限。
![用于向用户添加注释的输入框，说明 GitHub 应用权限更改的原因](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. 单击“保存更改”。 
![用于保存权限更改的按钮](/assets/images/github-apps/github_apps_save_changes.png)
