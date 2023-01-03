---
title: OAuth 앱 만들기
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180345'
---
{% ifversion fpt or ghec %} {% note %}

  **참고:** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
4. **새 OAuth 앱** 을 클릭합니다.
![새 OAuth 앱을 만드는 단추](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **참고:** 이전에 앱을 만들지 않은 경우 이 단추를 클릭하면 **새 애플리케이션을 등록하세요** 라고 표시됩니다.

  {% endnote %}
6. “애플리케이션 이름”에 앱의 이름을 입력합니다.
![앱 이름 필드](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **경고:**  퍼블릭으로 간주하는 OAuth 앱의 정보만 사용합니다. OAuth 앱을 만들 때는 내부 URL과 같은 중요한 데이터를 사용하지 마세요.

  {% endwarning %}

7. “홈페이지 URL”에서 앱 웹 사이트의 전체 URL을 입력합니다.
![앱의 홈페이지 URL 필드](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. 필요에 따라 “애플리케이션 설명”에서 사용자에게 표시할 앱에 대한 설명을 입력합니다.
![앱 설명 필드](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. “권한 부여 콜백 URL”에 앱의 콜백 URL을 입력합니다.
![앱 권한 부여 콜백 URL 필드](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png) {% ifversion fpt or ghes or ghec %} {% note %}

   **참고:** OAuth 앱에는 {% data variables.product.prodname_github_apps %}과 달리 콜백 URL이 여러 개 있을 수 없습니다.

   {% endnote %} {% endif %}{% ifversion device-flow-is-opt-in %}
1. OAuth 앱이 디바이스 흐름을 사용하여 사용자를 식별하고 권한을 부여하는 경우 **디바이스 흐름 사용** 을 클릭합니다. 디바이스 흐름에 대한 자세한 내용은 “[OAuth 앱 권한 부여](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)”를 참조하세요.
  ![디바이스 흐름 활성화 필드를 보여 주는 스크린샷](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
2.  **Register application(응용 프로그램 등록)** 을 클릭합니다.
![애플리케이션 등록 단추](/assets/images/oauth-apps/oauth_apps_register_application.png)
