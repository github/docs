---
title: 创建 OAuth 应用程序
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps
  - /apps/building-oauth-apps/creating-an-oauth-app
  - /developers/apps/creating-an-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 0bde9fbadc2005a67ecfc561b21cae48f768975e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180341'
---
{% ifversion fpt or ghec %} {% note %}

  注意：{% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
4. 单击“新建 OAuth 应用”。
![创建新 OAuth 应用的按钮](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  注意：如果以前没有创建过应用，该按钮将显示“注册新应用程序” 。

  {% endnote %}
6. 在“Application name（应用程序名称）”中，输入应用程序的名称。
![应用名称字段](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  警告：仅在 OAuth 应用中使用你考虑公开的信息。 创建 OAuth 应用程序时，应避免使用敏感数据（如内部 URL）。

  {% endwarning %}

7. 在“Homepage URL（主页 URL）”中，输入应用程序网站的完整 URL。
![应用主页 URL 字段](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. （可选）在“Application description（应用程序说明）”中，输入用户将看到的应用程序说明。
![应用说明字段](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. 在“Authorization callback URL（授权回调 URL）”中，输入应用程序的回调 URL。
![应用的授权回调 URL 字段](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png) {% ifversion fpt or ghes or ghec %} {% note %}

   注意：与 {% data variables.product.prodname_github_apps %} 不同，OAuth 应用不能有多个回调 URL。

   {% endnote %} {% endif %}{% ifversion device-flow-is-opt-in %}
1. 如果 OAuth 应用将使用设备流来识别和授权用户，请单击“启用设备流”。 有关设备流的详细信息，请参阅“[授权 OAuth 应用](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)”。
  ![显示启用设备流的字段的屏幕截图](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
2.  单击“注册应用程序”。
![注册应用程序的按钮](/assets/images/oauth-apps/oauth_apps_register_application.png)
