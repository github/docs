---
title: 创建 GitHub 应用程序
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps
  - /apps/building-github-apps/creating-a-github-app
  - /developers/apps/creating-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: bca6b800f8ea6042e4cbcdb95bd39b56f61433c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179085'
---
{% ifversion fpt or ghec %}若要了解如何使用 GitHub 应用清单支持用户创建预配置的 GitHub 应用，请参阅“[从清单创建 GitHub 应用](/apps/building-github-apps/creating-github-apps-from-a-manifest/)”。{% endif %}

{% ifversion fpt or ghec %} {% note %}

  注意：{% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.apps.settings-step %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. 单击“新建 GitHub 应用”。
![用于创建新 GitHub 应用的按钮](/assets/images/github-apps/github_apps_new.png)
1. 在“GitHub App name（GitHub 应用程序名称）”中，输入应用程序的名称。
![GitHub 应用的名称字段](/assets/images/github-apps/github_apps_app_name.png)

  给应用程序一个清晰简洁的名称。 应用程序不能与现有 GitHub 帐户同名，除非它是您自己的用户或组织的名称。 当您的集成执行操作时，应用程序名称的缓存版本将显示在用户界面上。

1. （可选）在“Description（说明）”中，输入用户将看到的应用程序说明。
![GitHub 应用的说明字段](/assets/images/github-apps/github_apps_description.png)
1. 在“Homepage URL（主页 URL）”中，输入应用程序网站的完整 URL。
![GitHub 应用的主页 URL 字段](/assets/images/github-apps/github_apps_homepage_url.png) {% ifversion fpt or ghes or ghec %}
1. 在“Callback URL（回调 URL）”中，键入用户授权安装后要重定向到的完整 URL。 如果应用程序需要识别和授权用户到服务器的请求，则使用此 URL。

  可以使用“添加回调 URL”来提供额外的回调 URL，最多不超过 10 个。

  ![“添加回调 URL”按钮和用于回调 URL 的字段](/assets/images/github-apps/github_apps_callback_url_multiple.png) {% else %}
1. 在“User authorization callback URL（用户授权回调 URL）”中，键入用户授权安装后要重定向到的完整 URL。 如果应用程序需要识别和授权用户到服务器的请求，则使用此 URL。
![GitHub 应用的用户授权回调 URL 字段](/assets/images/github-apps/github_apps_user_authorization.png)

{% endif %}
1. 默认情况下，为了提高应用程序的安全性，应用程序将使用过期用户授权令牌。 要选择不使用过期用户令牌，您必须取消选中“Expire user authorization tokens（过期用户授权令牌）”。 若要详细了解如何设置刷新令牌流以及用户令牌过期的好处，请参阅“[刷新用户到服务器访问令牌](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)”。
  ![在 GitHub 应用安装过程中选择加入过期用户令牌的选项](/assets/images/github-apps/expire-user-tokens-selection.png)
1. 如果应用授权用户使用 OAuth 流，则你可以选择“在安装过程中请求用户授权(OAuth)”，以允许用户在安装应用时对其进行授权，从而省去一个步骤。 如果您选择此选项，则“设置 URL”将不可用，用户在安装应用程序后将被重定向到您的“用户授权回调 URL”。 有关详细信息，请参阅“[在安装期间授权用户](/apps/installing-github-apps/#authorizing-users-during-installation)”。
![在安装过程中请求用户授权](/assets/images/github-apps/github_apps_request_auth_upon_install.png){% ifversion device-flow-is-opt-in %}
1. 如果 GitHub 应用使用设备流来标识和授权用户，请单击“启用设备流”。 有关设备流的详细信息，请参阅“[授权 OAuth 应用](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)”。
  ![显示启用设备流的字段的屏幕截图](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
1. 如果安装后需要附加设置，请添加一个“设置 URL”以便在用户安装应用程序后重定向他们。
![GitHub 应用的安装 URL 字段](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  注意：如果在上一步选择了“在安装过程中请求用户授权(OAuth)”，此字段将不可用，用户在安装应用后将被重定向到“用户授权回调 URL” 。

  {% endnote %}

1. 在“Webhook URL（Web 挂钩 URL）”中，输入事件将 POST 到的 URL。 每个应用程序都会收到自己的 web 挂钩（每当应用程序被安装或修改时都会通知您）以及应用程序订阅的任何其他事件。
![GitHub 应用的 Webhook URL 字段](/assets/images/github-apps/github_apps_webhook_url.png)

1. （可选）在“Webhook Secret（Web 挂钩密钥）”中，输入用于保护 web 挂钩的可选密钥令牌。
![添加 Webhook 机密令牌的字段](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  注意：强烈建议设置机密令牌。 有关详细信息，请参阅“[保护 Webhook](/webhooks/securing/)”。

  {% endnote %}

1. 在“Permissions（权限）”中，选择应用程序将请求的权限。 对于每种权限类型，请使用下拉菜单，然后单击“只读”、“读写”或“无访问权限”  。
![GitHub 应用的各种权限](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
1. 在“Subscribe to events（订阅事件）”中，选择您想要应用程序接收的事件。
1. 若要选择应用的安装位置，请选择“仅在此帐户上”或“任何帐户” 。 有关安装选项的详细信息，请参阅“[将 GitHub 应用设为公开或专用](/apps/managing-github-apps/making-a-github-app-public-or-private/)”。
![GitHub 应用的安装选项](/assets/images/github-apps/github_apps_installation_options.png)
1. 单击“创建 GitHub 应用”。
![创建 GitHub 应用的按钮](/assets/images/github-apps/github_apps_create_github_app.png)
