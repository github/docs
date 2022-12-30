---
title: GitHub 앱 설치 일시 중단
intro: '{% data reusables.shortdesc.suspending_a_github_app %}'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
  - /developers/apps/suspending-a-github-app-installation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Suspend app installation
ms.openlocfilehash: c87d1a82b2ccc18284ddc9ec3b28de5e1342b3cb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089854'
---
## GitHub 앱 일시 중단

GitHub 앱 소유자라고도 하는 GitHub 앱을 소유하고 유지 관리하는 통합자는 JWT와 함께 REST API 엔드포인트를 사용하여 GitHub 앱 설치를 일시 중단하거나 일시 중단을 해제할 수 있습니다. 자세한 내용은 [GitHub 앱 REST API](/rest/reference/apps)를 참조하세요.

설치 소유자라고도 하는 GitHub 앱을 설치한 사용자는 앱의 설치 설정을 통해서 GitHub 앱을 일시 중단하거나 일시 중단을 해제할 수 있습니다. 설치 소유자는 API를 사용하여 앱 설치를 일시 중단하거나 일시 중단을 해제할 수 없습니다.

{% data variables.product.prodname_github_app %} 소유자가 설치를 일시 중단한 경우 설치 소유자는 {% data variables.product.prodname_github_app %} 설치의 일시 중단을 해제할 수 없습니다. 그러나 설치 소유자는 앱이 일시 중단되는 동안 리포지토리 선택과 같은 다른 설정을 변경할 수 있습니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. 일시 중단할 {% data variables.product.prodname_github_app %}을(를) 선택합니다.
![앱 선택](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
6. 설치의 일시 중단 설정 옆에 있는 **일시 중단** 또는 **일시 중단 해제** 를 클릭합니다.
![GitHub 앱 일시 중단](/assets/images/github-apps/suspend-a-github-app.png)
