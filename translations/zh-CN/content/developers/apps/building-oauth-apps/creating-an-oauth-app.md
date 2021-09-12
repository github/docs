---
title: 创建 OAuth 应用程序
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps/
  - /apps/building-oauth-apps/creating-an-oauth-app
  - /developers/apps/creating-an-oauth-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - OAuth Apps
---

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

  **注意：** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
4. 单击 **New OAuth App（新建 OAuth 应用程序）**。 ![创建新 OAuth 应用程序的按钮](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **注：**如果您以前没有创建过应用程序，该按钮将显示 **Register a new application（注册新应用程序）**。

  {% endnote %}
6. 在“Application name（应用程序名称）”中，输入应用程序的名称。 ![应用程序名称字段](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **警告：**仅在 OAuth 应用程序中使用您认为公开的信息。 创建 OAuth 应用程序时，应避免使用敏感数据（如内部 URL）。

  {% endwarning %}

7. 在“Homepage URL（主页 URL）”中，输入应用程序网站的完整 URL。 ![应用程序主页 URL 字段](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. （可选）在“Application description（应用程序说明）”中，输入用户将看到的应用程序说明。 ![应用程序说明字段](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. 在“Authorization callback URL（授权回调 URL）”中，输入应用程序的回调 URL。 ![应用程序的授权回调 URL 字段](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   {% note %}

   **注：**与 {% data variables.product.prodname_github_apps %} 不同，OAuth 应用程序不能有多个回调 URL。

   {% endnote %}
{% endif %}
10. 单击 **Register application（注册应用程序）**。 ![注册应用程序的按钮](/assets/images/oauth-apps/oauth_apps_register_application.png)
