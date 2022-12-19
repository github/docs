---
title: GitHub 앱의 권한 편집
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
  - /developers/apps/editing-a-github-apps-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Edit permissions
ms.openlocfilehash: 1777a06a44c42a2b90351d2c7206e07cfc689882
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089889'
---
{% note %}

**참고:** 업데이트된 권한은 계정 또는 조직의 소유자가 변경 내용을 승인할 때까지 설치에 영향을 주지 않습니다. [InstallationEvent 웹후크](/webhooks/event-payloads/#installation)를 사용하여 사용자가 앱에 대한 새 권한을 수락하는 시점을 확인할 수 있습니다. 한 가지 예외는 계정 소유자가 권한 변경을 승인할 필요가 없는 [사용자 수준 권한](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)입니다.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. 사용 권한을 변경할 GitHub 앱을 선택합니다.
![앱 선택](/assets/images/github-apps/github_apps_select-app.png)
5. 왼쪽 사이드바에서 **사용 권한 & 웹후크** 를 클릭합니다.
![사용 권한 및 웹후크](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. 변경하려는 권한을 수정합니다. 각 사용 권한 유형에 대해 드롭다운에서 “읽기 전용”, “읽기 & 쓰기” 또는 “액세스 권한 없음”을 선택합니다.
![GitHub 앱에 대한 사용 권한 선택](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. “이벤트 구독”에서 앱을 구독하려는 이벤트를 선택합니다.
![이벤트에 대해 GitHub 앱을 구독하기 위한 권한 선택](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. 필요에 따라 “사용자에게 메모 추가”에서 GitHub 앱이 요청하는 사용 권한을 변경하는 이유를 사용자에게 알리는 메모를 추가합니다.
![사용자에게 GitHub 앱 사용 권한이 변경된 이유를 설명하는 메모를 추가하는 입력 상자](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. **변경 내용 저장** 을 클릭합니다.
![사용 권한의 변경 내용을 저장하는 단추](/assets/images/github-apps/github_apps_save_changes.png)
