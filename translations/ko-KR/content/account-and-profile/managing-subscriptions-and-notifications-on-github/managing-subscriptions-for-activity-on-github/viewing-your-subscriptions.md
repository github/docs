---
title: 구독 보기
intro: 알림의 위치와 알림의 양을 파악하려면 구독 및 감시되는 리포지토리를 정기적으로 검토하는 것이 좋습니다.
redirect_from:
  - /articles/subscribing-to-conversations
  - /articles/unsubscribing-from-conversations
  - /articles/subscribing-to-and-unsubscribing-from-notifications
  - /articles/listing-the-issues-and-pull-requests-youre-subscribed-to
  - /articles/watching-repositories
  - /articles/unwatching-repositories
  - /articles/watching-and-unwatching-repositories
  - /articles/watching-and-unwatching-releases-for-a-repository
  - /articles/watching-and-unwatching-team-discussions
  - /articles/listing-watched-repositories
  - /articles/listing-the-repositories-you-re-watching
  - /articles/listing-the-repositories-youre-watching
  - /github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: View subscriptions
ms.openlocfilehash: 2e3fca1f56e26e9f17a56911b93480a538c715ec
ms.sourcegitcommit: 37e362868bd023d87b257fb2436ae76a81dc8f8b
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008776'
---
{% data variables.product.product_name %}에서 진행 중인 작업의 구독에 대한 알림을 받습니다. 대화를 구독할 수 있는 여러 가지 이유가 있습니다. 자세한 내용은 “[알림 정보](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)”를 참조하세요.

정상 알림 워크플로의 일부로 구독을 감사하고 구독을 취소하는 것이 좋습니다. 구독 취소 옵션에 대한 자세한 내용은 “[구독 관리](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)”를 참조하세요.

## 너무 많은 알림을 받는 이유 진단

받은 편지함에 관리할 알림이 너무 많은 경우 구독을 너무 많이 했는지 확인하거나 알림 설정을 변경하여 구독과 수신하는 알림 유형을 줄이세요. 예를 들어 팀 또는 리포지토리에 참가할 때마다 모든 리포지토리 및 모든 팀 토론을 자동으로 시청하는 설정을 사용하지 않도록 설정할 수 있습니다.

{% ifversion update-notification-settings-22 %} ![ 팀 및 리포지](/assets/images/automatically-watch-repos-and-teams.png) 토리에 대한 자동 시청 옵션의 스크린샷 {% else %} ![팀 및 리포지](/assets/images/help/notifications-v2/automatic-watching-example.png)토리에 대한 자동 시청 옵션의 스크린샷{% endif %}

자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)”을 참조하세요.

리포지토리 구독에 대한 개요를 보려면 “[시청하는 리포지토리 검토](#reviewing-repositories-that-youre-watching)”를 참조하세요. {% tip %}

**팁:** {% data variables.product.product_name %}의 리포지토리 페이지 또는 [시청 페이지](https://github.com/watching)에서 **시청/시청 해제** 드롭다운 목록의 **사용자 지정** 옵션을 사용하여 알림을 받을 이벤트 유형을 선택할 수 있습니다. 자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)”을 참조하세요.

{% endtip %}

많은 사람이 과거에 시청하기로 선택한 리포지토리를 잊어버립니다. “시청한 리포지토리” 페이지에서 리포지토리를 신속하게 시청 해제할 수 있습니다. 구독을 취소하는 방법에 대한 자세한 내용은 {% data variables.product.prodname_blog %}에서 “[시청 해제 권장 사항](https://github.blog/changelog/2020-11-10-unwatch-recommendations/)” 및 “[구독 관리](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)”를 참조하세요. 수신하는 알림에 도움이 되는 심사 워크플로를 만들 수도 있습니다. 심사 워크플로에 대한 지침은 “[알림 심사 워크플로 사용자 지정](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)”을 참조하세요.

## 모든 구독 검토

{% data reusables.notifications.access_notifications %}
1. 왼쪽 사이드바의 알림을 받는 리포지토리 목록에서 “알림 관리” 드롭다운을 사용하여 **구독** 을 클릭합니다.
  ![알림 관리 드롭다운 메뉴 옵션](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. 필터 및 정렬을 사용하여 구독 목록의 범위를 좁히고 더 이상 알림을 받지 않으려는 대화의 구독을 취소합니다.

  ![구독 페이지](/assets/images/help/notifications-v2/all-subscriptions.png)

{% tip %}

**팁:**
- 잊어버린 구독을 검토하려면 “오래전에 구독한 항목”을 기준으로 정렬하세요.

- 알림을 계속 받을 수 있는 리포지토리 목록을 검토하려면 “리포지토리별 필터링” 드롭다운 메뉴에서 리포지토리 목록을 확인하세요.

{% endtip %}

## 시청하는 리포지토리 검토

1. 왼쪽 사이드바의 리포지토리 목록에서 “알림 관리” 드롭다운 메뉴를 사용하고 **시청한 리포지토리** 를 클릭합니다.
  ![알림 관리 드롭다운 메뉴 옵션](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. 시청하는 리포지토리를 평가하고 업데이트가 여전히 관련성이 있고 유용한지 결정합니다. 리포지토리를 시청하면 해당 리포지토리의 모든 대화에 대한 알림을 받게 됩니다.
![시청 알림 페이지](/assets/images/help/notifications-v2/watched-notifications-custom.png)

  {% tip %}

  **팁:** 리포지토리를 시청하는 대신 {% data reusables.notifications-v2.custom-notification-types %}(리포지토리에 사용하도록 설정된 경우)에 대한 업데이트가 있거나 이 옵션의 조합이 있는 경우에만 알림을 받거나 리포지토리를 완전히 시청 해제하세요.
  
  리포지토리를 시청 해제해도 @mentioned되거나 스레드에 참여하면 알림을 계속 받을 수 있습니다. 특정 이벤트 유형에 대한 알림을 받도록 구성하는 경우 리포지토리에 이벤트 유형에 대한 업데이트가 있거나, 스레드에 참여 중이거나, 사용자 또는 사용자가 속한 팀이 @mentioned된 경우에만 알림을 받습니다.

  {% endtip %}
