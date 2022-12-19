---
title: GitHub 앱 만들기
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179089'
---
{% ifversion fpt or ghec %} 사용자가 미리 구성된 GitHub 앱을 만들 수 있는 GitHub 앱 매니페스트를 사용하는 방법을 알아보려면 “[매니페스트에서 GitHub 앱 만들기](/apps/building-github-apps/creating-github-apps-from-a-manifest/)”를 참조하세요. {% endif %}

{% ifversion fpt or ghec %} {% note %}

  **Note:** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.apps.settings-step %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. **새 GitHub 앱** 을 클릭합니다.
![새 GitHub 앱을 만드는 단추](/assets/images/github-apps/github_apps_new.png)
1. “GitHub 앱 이름”에 앱의 이름을 입력합니다.
![GitHub 앱 이름 필드](/assets/images/github-apps/github_apps_app_name.png)

  앱에 명확하고 간결한 이름을 지정합니다. 앱은 고유의 사용자 이름 또는 조직 이름이 아니면 기존 GitHub 계정과 동일한 이름을 가질 수 없습니다. 통합이 작업을 수행할 때 앱 이름의 슬러그 버전이 사용자 인터페이스에 표시됩니다.

1. 필요에 따라 “설명”에서 사용자에게 표시할 앱에 대한 설명을 입력합니다.
![GitHub 앱 설명 필드](/assets/images/github-apps/github_apps_description.png)
1. “홈페이지 URL”에서 앱 웹 사이트의 전체 URL을 입력합니다.
![GitHub 앱의 홈페이지 URL 필드](/assets/images/github-apps/github_apps_homepage_url.png) {% ifversion fpt or ghes or ghec %}
1. “콜백 URL”에서 사용자가 설치 권한을 부여한 후 리디렉션할 전체 URL을 입력합니다. 이 URL은 앱이 사용자-서버 요청을 식별하고 권한을 부여해야 하는 경우에 사용됩니다.

  **콜백 URL 추가** 를 사용하여 최대 10개까지 추가 콜백 URL을 제공할 수 있습니다.

  ![‘콜백 URL 추가’ 단추 및 콜백 URL 필드](/assets/images/github-apps/github_apps_callback_url_multiple.png) {% else %}
1. “사용자 권한 부여 콜백 URL”에서 사용자가 설치 권한을 부여한 후 리디렉션할 전체 URL을 입력합니다. 이 URL은 앱이 사용자-서버 요청을 식별하고 권한을 부여해야 하는 경우에 사용됩니다.
![GitHub 앱의 사용자 권한 부여 콜백 URL 필드](/assets/images/github-apps/github_apps_user_authorization.png)

{% endif %}
1. 기본적으로 앱의 보안을 개선하기 위해 앱은 만료되는 사용자 권한 부여 토큰을 사용합니다. 만료되는 사용자 토큰 사용을 옵트아웃하려면 “사용자 권한 부여 토큰 만료”를 선택 취소해야 합니다. 새로 고침 토큰 흐름 설정 및 만료되는 사용자 토큰의 혜택에 대한 자세한 내용은 “[사용자-서버 액세스 토큰 새로 고침](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)”을 참조하세요.
  ![GitHub 앱 설정 중 만료되는 사용자 토큰에 옵트인하는 옵션](/assets/images/github-apps/expire-user-tokens-selection.png)
1. 앱이 OAuth 흐름을 사용하여 사용자에게 권한을 부여하는 경우 **설치 중에 OAuth(사용자 권한 부여) 요청** 을 선택하면 사용자가 앱을 설치할 때 앱에 권한을 부여하고 단계를 하나 건너뛸 수 있습니다. 이 옵션을 선택하면 “설치 URL”을 사용할 수 없게 되고 사용자가 앱을 설치한 후 “사용자 권한 부여 콜백 URL”로 리디렉션됩니다. 자세한 내용은 “[설치하는 동안 사용자에게 권한 부여](/apps/installing-github-apps/#authorizing-users-during-installation)”를 참조하세요.
![설치 중 사용자 권한 부여 요청](/assets/images/github-apps/github_apps_request_auth_upon_install.png){% ifversion device-flow-is-opt-in %}
1. GitHub 앱이 디바이스 흐름을 사용하여 사용자를 식별하고 권한을 부여하는 경우 **디바이스 흐름 사용** 을 클릭합니다. 디바이스 흐름에 대한 자세한 내용은 “[OAuth 앱 권한 부여](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)”를 참조하세요.
  ![디바이스 흐름 활성화 필드를 보여 주는 스크린샷](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
1. 설치 후 추가 설정이 필요한 경우 “설치 URL”을 추가하여 사용자가 앱을 설치한 후로 리디렉션합니다.
![GitHub 앱의 설정 URL 필드](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  **참고:** 이전 단계에서 **설치하는 동안 OAuth(사용자 권한 부여 요청)** 를 선택하면 이 필드를 사용할 수 없게 되고 사용자가 앱을 설치한 후 “사용자 권한 부여 콜백 URL”로 리디렉션됩니다.

  {% endnote %}

1. “웹후크 URL”에서 이벤트가 게시할 URL을 입력합니다. 각 앱은 앱이 설치되거나 수정될 때마다 사용자에게 알리는 자체 웹후크와 앱이 구독하는 다른 이벤트를 수신합니다.
![GitHub 앱의 웹후크 URL 필드](/assets/images/github-apps/github_apps_webhook_url.png)

1. 필요에 따라 “Webhook 비밀”에서 웹후크를 보호하는 데 사용되는 선택적 비밀 토큰을 입력합니다.
![웹후크에 대한 비밀 토큰을 추가하는 필드](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  **참고:** 비밀 토큰을 설정하는 것이 좋습니다. 자세한 내용은 “[웹후크 보안](/webhooks/securing/)”을 참조하세요.

  {% endnote %}

1. “사용 권한”에서 앱이 요청할 권한을 선택합니다. 각 사용 권한 유형에 대해 드롭다운 메뉴를 사용하고 **읽기 전용**, **읽기 및 쓰기** 또는 **액세스 없음** 을 클릭합니다.
![GitHub 앱에 대한 다양한 권한](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
1. “이벤트 구독”에서 앱에서 받기를 원하는 이벤트를 선택합니다.
1. 앱을 설치할 수 있는 위치를 선택하려면 **이 계정에서만** 또는 **모든 계정** 을 선택합니다. 설치 옵션에 대한 자세한 내용은 “[GitHub 앱을 퍼블릭 또는 프라이빗으로 만들기](/apps/managing-github-apps/making-a-github-app-public-or-private/)”를 참조하세요.
![GitHub 앱에 대한 설치 옵션](/assets/images/github-apps/github_apps_installation_options.png)
1. **GitHub 앱 만들기** 를 클릭합니다.
![GitHub 앱을 만드는 단추](/assets/images/github-apps/github_apps_create_github_app.png)
