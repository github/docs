---
title: 공개 또는 비공개 GitHub 앱 만들기
intro: '{% data reusables.shortdesc.making-a-github-app-public-or-private %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps
  - /apps/building-github-apps/installation-options-for-github-apps
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/making-a-github-app-public-or-private
  - /developers/apps/making-a-github-app-public-or-private
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage app visibility
ms.openlocfilehash: f276be130be76f110d4c4ad3c0bfa3bff708aad6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065892'
---
인증 정보는 “[GitHub 앱으로 인증](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)”을 참조하세요.

## 공개 설치 흐름

공개 설치 흐름에는 방문 페이지가 있어 앱 소유자 외의 다른 사용자가 리포지토리에 앱을 설치할 수 있습니다. 이 링크는 GitHub 앱 설정 시 “공개 링크” 필드에 제공됩니다. 자세한 내용은 “[GitHub 앱 설치](/apps/installing-github-apps/)”를 참조하세요.

## 비공개 설치 흐름

비공개 설치 흐름을 사용하면 GitHub 앱의 소유자만 설치할 수 있습니다. GitHub 앱에 대한 제한된 정보는 여전히 공개 페이지에 있지만 **설치** 단추는 개별 계정으로 GitHub 앱을 소유한 경우에만 조직 관리자 또는 개인 계정에서 사용할 수 있습니다. 프라이빗 GitHub 앱은 소유자의 사용자 또는 조직 계정에만 설치할 수 있습니다.

## GitHub 앱을 설치할 수 있는 사용자 변경

GitHub 앱을 설치할 수 있는 사용자를 변경하려면 다음을 수행합니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
3. 설치 옵션을 변경할 GitHub 앱을 선택합니다.
![앱 선택](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
5. GitHub 앱의 설치 옵션에 따라 **공개** 또는 **비공개** 를 클릭합니다.
![GitHub 앱의 설치 옵션을 변경하는 단추](/assets/images/github-apps/github_apps_make_public.png)
6. GitHub 앱의 설치 옵션에 따라 **예, GitHub 앱 공개** 또는 **예, GitHub 앱 {% ifversion fpt or ghec %}내부{% else %}비공개{% endif %}** 중 하나를 클릭합니다.
![설치 옵션의 변경 내용을 확인하는 단추](/assets/images/github-apps/github_apps_confirm_installation_option.png)
