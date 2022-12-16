---
title: GitHub 앱 수정
intro: '{% data reusables.shortdesc.modifying_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/modifying-a-github-app
  - /apps/managing-github-apps/modifying-a-github-app
  - /developers/apps/modifying-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 9038a938d26aa5f1e9ec3cdec6fcecd417f0baf8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178505'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. “기본 정보”에서 변경하려는 GitHub 앱 정보를 수정합니다.
![GitHub 앱에 대한 기본 정보 섹션](/assets/images/github-apps/github_apps_basic_information.png){% ifversion device-flow-is-opt-in %}
1. GitHub 앱이 디바이스 흐름을 사용하여 사용자를 식별하고 권한을 부여하는 경우 **디바이스 흐름 사용** 을 클릭합니다. 디바이스 흐름에 대한 자세한 내용은 “[OAuth 앱 권한 부여](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)”를 참조하세요.
  ![디바이스 흐름 활성화 필드를 보여 주는 스크린샷](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
6. **변경 내용 저장** 을 클릭합니다.
![GitHub 앱의 변경 내용을 저장하는 단추](/assets/images/github-apps/github_apps_save_changes.png)
