---
title: 创建 GitHub 应用程序
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration/
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps/
  - /apps/building-github-apps/creating-a-github-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% if currentVersion == "free-pro-team@latest" %} 要了解如何使用 GitHub 应用程序清单允许用户创建预配置 GitHub 应用程序，请参阅“[从清单创建 GitHub 应用程序](/apps/building-github-apps/creating-github-apps-from-a-manifest/)。”{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

  **注意：** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. 单击 **New GitHub App（新建 GitHub 应用程序）**。 ![用于创建新 GitHub 应用程序的按钮](/assets/images/github-apps/github_apps_new.png)
5. 在“GitHub App name（GitHub 应用程序名称）”中，输入应用程序的名称。 ![GitHub 应用程序名称字段](/assets/images/github-apps/github_apps_app_name.png)

  给应用程序一个清晰简洁的名称。 应用程序不能与现有 GitHub 用户同名，除非它是您自己的用户或组织的名称。 当您的集成执行操作时，应用程序名称的缓存版本将显示在用户界面上。

6. （可选）在“Description（说明）”中，输入用户将看到的应用程序说明。 ![GitHub 应用程序说明字段](/assets/images/github-apps/github_apps_description.png)
7. 在“Homepage URL（主页 URL）”中，输入应用程序网站的完整 URL。 ![GitHub 应用程序主页 URL 字段](/assets/images/github-apps/github_apps_homepage_url.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
8. 在“Callback URL（回调 URL）”中，键入用户授权安装后要重定向到的完整 URL。 如果应用程序需要识别和授权用户到服务器的请求，则使用此 URL。

  您可以使用 **Add callback URL（添加回调 URL）**来提供额外的回调 URL，最多不超过 10 个。

  ![用于“添加回调 URL”的按钮和回调 URL 的字段](/assets/images/github-apps/github_apps_callback_url_multiple.png)
{% else %}
8. 在“User authorization callback URL（用户授权回调 URL）”中，键入用户授权安装后要重定向到的完整 URL。 如果应用程序需要识别和授权用户到服务器的请求，则使用此 URL。 ![GitHub 应用程序的用户授权回调 URL 字段](/assets/images/github-apps/github_apps_user_authorization.png)

{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
9. 默认情况下，为了提高应用程序的安全性，应用程序将使用过期用户授权令牌。 要选择不使用过期用户令牌，您必须取消选中“Expire user authorization tokens（过期用户授权令牌）”。 要了解有关设置刷新令牌流程和过期用户令牌的好处，请参阅“[刷新用户到服务器的访问令牌](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)”。 ![在 GitHub 应用程序设置过程中选择加入过期用户令牌的选项](/assets/images/github-apps/expire-user-tokens-selection.png)
{% endif %}
9. 如果应用程序授权用户使用 OAuth 流程，您可以选择**在安装过程中请求用户授权 (OAuth)**，以允许用户在安装应用程序时授权它，从而省去一个步骤。 如果您选择此选项，则“设置 URL”将不可用，用户在安装应用程序后将被重定向到您的“用户授权回调 URL”。 更多信息请参阅“[在安装过程中授权用户](/apps/installing-github-apps/#authorizing-users-during-installation)”。 ![安装过程中请求用户授权](/assets/images/github-apps/github_apps_request_auth_upon_install.png)
10. 如果安装后需要附加设置，请添加一个“设置 URL”以便在用户安装应用程序后重定向他们。 ![GitHub 应用程序的设置 URL 字段 ](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  **注：**如果您在上一步选择了**在安装过程中请求用户授权 (OAuth)**，此字段将不可用，用户在安装应用程序后将被重定向到“用户授权回调 URL”。

  {% endnote %}

11. 在“Webhook URL（Web 挂钩 URL）”中，输入事件将 POST 到的 URL。 每个应用程序都会收到自己的 web 挂钩（每当应用程序被安装或修改时都会通知您）以及应用程序订阅的任何其他事件。 ![GitHub 应用程序的 web 挂钩 URL 字段](/assets/images/github-apps/github_apps_webhook_url.png)

12. （可选）在“Webhook Secret（Web 挂钩密钥）”中，输入用于保护 web 挂钩的可选密钥令牌。 ![添加 web 挂钩密钥令牌的字段](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  **注：**我们强烈建议您设置密钥令牌。 更多信息请参阅“[保护 web 挂钩](/webhooks/securing/)”。

  {% endnote %}

13. 在“Permissions（权限）”中，选择应用程序将请求的权限。 对于每种类型的权限，请使用下拉菜单并单击 **Read-only（只读）**、**Read & write（读取和写入）** 或 **No access（无访问权限）**。 ![GitHub 应用程序的各种权限](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
14. 在“Subscribe to events（订阅事件）”中，选择您想要应用程序接收的事件。
15. 要选择可安装应用程序的位置，请选择 **Only on this account（仅在此帐户上）**或 **Any account（任何帐户）**。 有关安装选项的更多信息，请参阅“[将 GitHub 应用程序设为公开或私有](/apps/managing-github-apps/making-a-github-app-public-or-private/)”。 ![GitHub 应用程序的安装选项](/assets/images/github-apps/github_apps_installation_options.png)
16. 单击 **Create GitHub App（创建 GitHub 应用程序）**。 ![创建 GitHub 应用程序的按钮](/assets/images/github-apps/github_apps_create_github_app.png)
