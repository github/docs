---
title: 구독 관리
intro: 알림을 효율적으로 관리하는 데 도움이 되도록 구독을 취소하는 방법은 여러 가지입니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/managing-your-subscriptions
shortTitle: Manage your subscriptions
ms.openlocfilehash: 750a3a9ad87ff9aa709b84a98f548d85d53072ee
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091457'
---
구독을 이해하고 구독을 취소할지 여부를 결정하는 데 도움이 되도록 “[구독 보기](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)”를 참조하세요.

{% note %}

**참고:** 구독을 취소하는 대신 리포지토리를 무시하는 옵션이 있습니다. 리포지토리를 무시하는 경우 알림을 받지 못합니다. @mentioned인 경우 알림을 받지 못하기 때문에 리포지토리를 무시하지 않는 것이 좋습니다. {% ifversion fpt or ghec %} 남용이 발생하여 리포지토리를 무시하려는 경우 {% data variables.contact.contact_support %}에 문의하시면 도와드리겠습니다. {% data reusables.policies.abuse %} {% endif %}

{% endnote %}

## 구독을 취소하는 방법 선택

리포지토리를 신속하게 감시 해제(또는 구독 취소)하려면 [github.com/watching](https://github.com/watching)로 이동하여 팔로우 중인 모든 리포지토리를 확인합니다. 자세한 내용은 “[리포지토리 감시 해제](#unwatching-repositories)”를 참조하세요.

동시에 여러 알림의 구독을 취소하려면 수신함 또는 구독 페이지를 사용하여 구독을 취소할 수 있습니다. 두 옵션 모두 “조사된 리포지토리” 페이지보다 구독에 대한 더 많은 컨텍스트를 제공합니다.

### 수신함의 구독을 취소할 때의 이점

수신함에서 알림의 구독을 취소할 때 몇 가지 다른 심사 옵션이 있으며 사용자 지정 필터 및 토론 유형별로 알림을 필터링할 수 있습니다. 자세한 내용은 “[수신함 알림 관리](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)”를 참조하세요.

### 구독 페이지의 구독을 취소할 때의 이점

구독 페이지에서 알림의 구독을 취소할 때 구독하는 알림을 더 많이 확인하고 “가장 최근에 구독한” 또는 “가장 오래 전에 구독한 알림”을 기준으로 정렬할 수 있습니다.

구독 페이지에는 수신함에서 **완료** 로 표시된 알림을 포함하여 현재 구독 중인 모든 알림이 표시됩니다.

리포지토리 및 알림을 받는 이유로만 구독을 필터링할 수 있습니다.

## 수신함에서 알림 구독 취소

수신함의 알림 구독을 취소하면 수신함에서 알림이 자동으로 사라집니다.

{% data reusables.notifications.access_notifications %}
1. 알림 수신함에서 구독 취소할 알림을 선택합니다.
2. **구독 취소** 를 클릭합니다.
  ![기본 수신함에서 구독 취소 옵션](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

## 구독 페이지에서 알림 구독 취소

{% data reusables.notifications.access_notifications %}
1. 왼쪽 사이드바의 리포지토리 목록에서 “알림 관리” 드롭다운을 사용하여 **구독** 을 클릭합니다.
  ![알림 드롭다운 메뉴 옵션 관리](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. 구독을 취소하려는 알림을 선택합니다. 오른쪽 위에서 **구독 취소** 를 클릭합니다.
  ![구독 페이지](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

## 리포지토리 감시 해제

리포지토리를 감시 해제하면 대화에 참여하거나 @mentioned되지 않는 한 해당 리포지토리에서 이후 업데이트를 구독 취소합니다.

{% data reusables.notifications.access_notifications %}
1. 왼쪽 사이드바의 리포지토리 목록에서 “알림 관리” 드롭다운을 사용하여 **감시 리포지토리** 를 클릭합니다.

  ![알림 드롭다운 메뉴 옵션 관리](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. 감시 리포지토리 페이지에서 감시하는 리포지토리를 평가한 후 다음 작업을 수행할지 여부를 선택합니다.
   
   - 리포지토리 감시 해제
   - 리포지토리에 대한 모든 알림 무시
   - 사용하도록 설정된 경우 알림을 받는 이벤트 유형을 사용자 지정({% data reusables.notifications-v2.custom-notification-types %})
   
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5819 %}
1. 필요에 따라 지정된 사용자 또는 조직이 소유한 모든 리포지토리에서 구독을 취소하려면 **모두 감시 해제** 드롭다운을 선택하고 구독을 취소하려는 리포지토리가 있는 조직을 클릭합니다. 모든 리포지토리를 감시 해제하는 단추는 10개가 넘는 리포지토리의 모든 활동 또는 사용자 지정 알림을 감시하는 경우에만 사용할 수 있습니다.

   ![모두 감시 해제 단추의 스크린샷.](/assets/images/help/notifications-v2/unsubscribe-from-all-repos.png)

   - **감시 해제** 를 클릭하여 선택한 사용자 또는 조직이 소유한 리포지토리를 감시 해제할지 확인하거나 **취소** 를 클릭하여 취소합니다.

   ![모든 확인 대화 상자의 감시 해제 스크린샷.](/assets/images/help/notifications-v2/unwatch-repo-dialog.png)

{% endif %}
