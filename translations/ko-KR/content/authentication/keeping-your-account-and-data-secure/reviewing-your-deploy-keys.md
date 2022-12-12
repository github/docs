---
title: 배포 키 검토
intro: 배포 키를 검토하여 권한이 없는(또는 손상되었을 수 있는) 키가 없는지 확인해야 합니다. 유효한 기존 배포 키를 승인할 수도 있습니다.
redirect_from:
  - /articles/reviewing-your-deploy-keys
  - /github/authenticating-to-github/reviewing-your-deploy-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-deploy-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Deploy keys
ms.openlocfilehash: 964ec4cbc91745c041dd973e4e950b605c5c0233
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088408'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
3. 사이드바의 “Security”(보안) 섹션에서 **{% octicon "key" aria-label="The key icon" %} Deploy keys**(키 배포)를 클릭합니다.
{% else %}
3. 왼쪽 사이드바에서 **Deploy keys**(키 배포)를 클릭합니다.
![키 배포 설정](/assets/images/help/settings/settings-sidebar-deploy-keys.png) {% endif %}
4. 키 배포 페이지에서 계정과 연결된 배포 키를 기록해 둡니다. 인식할 수 없거나 오래된 항목의 경우 **Delete**(삭제)를 클릭합니다. 유지하려는 유효한 배포 키가 있는 경우 **Approve**(승인)를 클릭합니다.
    ![배포 키 목록](/assets/images/help/settings/settings-deploy-key-review.png)

자세한 내용은 “[배포 키 관리](/guides/managing-deploy-keys)”를 참조하세요.

## 추가 참고 자료
- [알림 구성](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
