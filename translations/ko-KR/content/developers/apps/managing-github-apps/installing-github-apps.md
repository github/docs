---
title: GitHub 앱 설치
intro: '앱이 공개인 경우 누구나 {% ifversion fpt or ghec %} {% data variables.product.prodname_marketplace %} 또는 {% endif %}(설치 URL)을 사용하여 리포지토리에 앱을 설치할 수 있습니다. 앱이 비공개인 경우 소유한 리포지토리에만 앱을 설치할 수 있습니다.'
redirect_from:
  - /apps/installing-github-apps
  - /developers/apps/installing-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 4244e1e4aacbcc5f7e0f16092df9823ce5832f0a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089878'
---
{% note %}

**참고:** 누군가가 선택한 리포지토리에만 앱을 설치하더라도 {% data variables.product.prodname_github_app %}은(는) 앱이 만드는 모든 리포지토리에 액세스할 수 있습니다.

{% endnote %}

## 리포지토리에 프라이빗 GitHub 앱 설치

프라이빗 GitHub 앱을 만든 후 조직 또는 사용자 리포지토리 중 하나에 설치할 수 있습니다. 자세한 내용은 “[프라이빗 설치 흐름](/apps/managing-github-apps/making-a-github-app-public-or-private/#private-installation-flow)”을 참조하세요.

1. [GitHub 앱 설정 페이지](https://github.com/settings/apps)에서 앱을 선택합니다.
2. 왼쪽 사이드바에서 **앱 설치** 를 클릭합니다.
3. 올바른 리포지토리가 포함된 조직 또는 개인 계정 옆에 있는 **설치** 를 클릭합니다.
4. 모든 리포지토리에 앱을 설치하거나 리포지토리를 선택합니다.
![앱 설치 권한](/assets/images/install_permissions.png)
5. 설치되면 선택한 계정에 앱에 대한 구성 옵션이 표시됩니다. 여기에서 변경하거나 이전 단계를 반복하여 다른 계정에 앱을 설치할 수 있습니다.

{% ifversion fpt or ghec %}
## GitHub Marketplace에서 앱 제공

사용자가 앱에 대한 세부 정보를 검색하고 볼 수 있는 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace)에서 유료 또는 무료 버전의 앱을 제공할 수 있습니다. {% data variables.product.prodname_marketplace %}은(는) 주문이 완료되면 GitHub 앱을 자동으로 설치합니다.

{% data variables.product.prodname_marketplace %}에 앱을 나열하는 방법에 대해 자세히 알아보려면 “[GitHub Marketplace에서 시작하기](/marketplace/getting-started/)”를 참조하세요.

{% data variables.product.prodname_marketplace %}에서 앱을 설치하는 방법에 대해 자세히 알아보려면 “[GitHub Marketplace에서 앱 구매 및 설치](/articles/purchasing-and-installing-apps-in-github-marketplace)”를 참조하세요.

{% endif %}

## 사용자가 자신의 리포지토리에 공개 앱을 설치할 수 있도록 허용

앱의 홈페이지와 같은 위치에 설치 URL을 제공하여 다른 사용자가 공개 앱을 설치하도록 설정할 수 있습니다. 그런 다음 GitHub 방문 페이지에서 앱의 홈페이지를 가리킬 수 있습니다.

 OAuth 앱에서 GitHub 앱으로 마이그레이션하는 경우 쿼리 매개 변수를 사용하여 GitHub 앱을 설치할 때 리포지토리 및 계정을 미리 선택할 수 있습니다. 자세한 내용은 “[OAuth 앱을 GitHub 앱으로 마이그레이션](/apps/migrating-oauth-apps-to-github-apps/)”을 참조하세요.

다음 단계에서는 [{% data variables.product.prodname_github_app %} 빌드가 완료된 것](/apps/building-github-apps/)으로 가정합니다.

1. [GitHub 앱 설정 페이지](https://github.com/settings/apps)에서 다른 사용자가 설치하도록 구성하려는 공개 앱을 선택합니다.
2. “홈페이지 URL”에서 앱 홈페이지의 URL을 입력하고 **변경 내용 저장** 을 클릭합니다.
![홈페이지 URL](/assets/images/github-apps/github_apps_homepageURL.png)
3. GitHub는 앱의 “홈페이지 URL” 링크가 포함된 앱의 방문 페이지를 제공합니다. GitHub 방문 페이지를 방문하려면 “공개 링크”에서 URL을 복사하여 브라우저에 붙여 넣습니다.
![공개 링크](/assets/images/github-apps/github_apps_public_link.png)
4. 앱 설치 URL이 포함된 앱의 홈페이지를 만듭니다. `{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new`

## 설치하는 동안 사용자에게 권한 부여

앱 설치 중에 완료하여 권한 부여 프로세스를 간소화할 수 있습니다. 이렇게 하려면 GitHub에서 앱을 만들거나 수정할 때 **설치 중 사용자 권한 부여 요청(OAuth)** 을 선택합니다. 자세한 내용은 “[GitHub 앱 만들기](/apps/building-github-apps/creating-a-github-app/)”를 참조하세요.

누군가가 앱을 설치한 후에는 사용자에 대한 액세스 토큰을 가져와야 합니다. 자세한 내용은 “[사이트에서 사용자 식별](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)”의 2단계와 3단계를 참조하세요.
## 설치하는 동안 애플리케이션 상태 유지

앱의 설치 URL에서 `state` 매개 변수를 제공하여 애플리케이션 페이지의 상태를 유지하고 GitHub 앱에 대한 업데이트를 설치, 인증 또는 수락한 후 해당 상태로 다시 돌아갈 수 있습니다. 예를 들어 `state`를 사용하여 사용자 또는 계정에 설치를 상호 연결할 수 있습니다.

상태를 유지하려면 설치 URL에 추가합니다.

`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new?state=AB12t`
