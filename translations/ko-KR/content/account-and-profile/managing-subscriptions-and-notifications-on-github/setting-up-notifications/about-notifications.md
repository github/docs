---
title: 알림 정보
intro: '알림은 구독한 {% 데이터 variables.location.product_location %}의 활동에 대한 업데이트를 제공합니다. 알림 받은 편지함을 사용하여 업데이트를 사용자 지정, 심사 및 관리할 수 있습니다.'
redirect_from:
  - /articles/notifications
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: bc51117a56ff5e72879a60d3dd32131487a9677a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098997'
---
## 알림 및 구독

구독을 통해 {% 데이터 variables.location.product_location %}에서 특정 활동에 대한 지속적인 업데이트를 받을 수 있습니다. 알림은 구독하는 특정 활동에 대해 수신하는 업데이트입니다.

### 구독 옵션

다음 사항에 대한 알림을 구독하도록 선택할 수 있습니다.
- 특정 이슈, 끌어오기 요청 또는 gist의 대화
- 리포지토리 또는 팀 토론의 모든 활동
- {% data variables.product.prodname_actions %}로 설정된 리포지토리의 워크플로 상태와 같은 CI 작업 
- 리포지토리 {% data reusables.notifications-v2.custom-notification-types %}(사용하도록 설정된 경우)

포크를 제외하고 푸시 액세스 권한이 있는 모든 리포지토리를 자동으로 시청하도록 선택할 수도 있습니다. **시청** 을 클릭하여 수동으로 액세스할 수 있는 다른 리포지토리를 시청할 수 있습니다.

대화에 더 이상 관심이 없는 경우 구독을 취소하거나 시청을 해제하거나 나중에 받게 될 알림 유형을 사용자 지정할 수 있습니다. 예를 들어 특정 리포지토리에서 알림을 더 이상 받지 않으려면 **구독 취소** 를 클릭할 수 있습니다. 자세한 내용은 “[구독 관리](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)”를 참조하세요.

### 기본 구독

일반적으로 다음과 같은 경우 기본적으로 대화가 자동으로 구독됩니다.
- 알림 설정에서 참가하는 리포지토리 또는 팀에 대한 자동 시청을 사용하지 않도록 설정하지 않은 경우. 이 설정은 기본적으로 사용하도록 설정되어 있습니다.
- 이슈 또는 끌어오기 요청에 할당된 경우
- 끌어오기 요청, 이슈를 시작했거나 팀 토론 게시물을 만든 경우
- 스레드에 주석을 추가한 경우
- **시청** 또는 **구독** 을 클릭하여 스레드를 수동으로 구독한 경우
- 사용자 이름이 @mentioned된 경우
- 이슈를 닫거나 끌어오기 요청을 병합하는 등 스레드의 상태를 변경한 경우
- @mentioned된 팀의 구성원인 경우

기본적으로 사용자가 만들고 개인 계정이 소유한 모든 리포지토리를 자동으로 시청합니다.

자동으로 구독하는 대화에서 구독을 취소하려면 알림 설정을 변경하거나 {% 데이터 variables.location.product_location %}에서 직접 구독을 취소하거나 조사 취소 작업을 수행할 수 있습니다. 자세한 내용은 “[구독 관리](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)”를 참조하세요.

## 알림 및 구독 사용자 지정

[https://github.com/notifications](https://github.com/notifications){% ifversion fpt or ghes or ghec %} 및 {% data variables.product.prodname_mobile %} 앱{% endif %}의 알림 받은 편지함, 메일 또는 옵션의 조합을 통해 알림을 보도록 선택할 수 있습니다.

수신하려는 업데이트 유형과 해당 업데이트를 보낼 위치를 사용자 지정하려면 알림 설정을 구성합니다. 자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)”을 참조하세요.

구독을 관리하기 쉽게 유지하려면 구독 및 시청한 리포지토리를 검토하고 필요에 따라 구독을 취소합니다. 자세한 내용은 “[GitHub 작업에 대한 구독 관리](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)”를 참조하세요.

특정 끌어오기 요청 또는 이슈에 대한 업데이트를 수신하는 방법을 사용자 지정하려면 이슈 또는 끌어오기 요청 내에서 기본 설정을 구성할 수 있습니다. 자세한 내용은 “[단일 알림 심사](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)”를 참조하세요.

{% ifversion fpt or ghes or ghec %} {% data variables.product.prodname_mobile %} 앱에서 푸시 알림을 사용자 지정하고 예약할 수 있습니다. 자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#managing-your-notification-settings-with-github-mobile)”을 참조하세요.
{% endif %}

## 알림을 받는 이유

받은 편지함은 기본 필터로 구성됩니다. 이는 사용자가 알림에 대한 후속 조치를 수행해야 하는 가장 일반적인 이유입니다. 받은 편지함 필터에 대한 자세한 내용은 “[받은 편지함의 알림 관리](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#default-notification-filters)”를 참조하세요.

받은 편지함에는 알림을 받는 `reasons`가 레이블로 표시됩니다.

![받은 편지함의 이유 레이블](/assets/images/help/notifications-v2/reasons-as-labels-in-inbox.png)

알림을 구독하는 이유별로 받은 편지함을 필터링할 수 있습니다. 예를 들어 누군가가 검토를 요청한 끌어오기 요청만 보려면 `review-requested` 쿼리 필터를 사용할 수 있습니다.

![검토 요청 이유별로 알림 필터링](/assets/images/help/notifications-v2/review-requested-reason.png)

메일로 알림을 받도록 구성했는데 해당 없는 알림을 받고 있다고 생각되는 경우 의도한 수신자를 표시하는 메일 헤더를 사용하여 문제를 해결해 보세요. 자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)”을 참조하세요.

## 받은 편지함의 알림 심사

알림을 효과적으로 관리하려면 다음과 같은 옵션을 사용하여 받은 편지함을 심사할 수 있습니다.
- **완료** 로 표시되는 알림은 받은 편지함에서 제거합니다. 사이드바에서 **완료** 를 클릭하거나 `is:done` 쿼리를 사용하여 **완료** 알림을 한곳에서 모두 검토할 수 있습니다.
- 알림을 읽거나 읽지 않은 상태로 표시합니다.
- 나중에 검토할 수 있는 알림을 **저장** 합니다. **저장됨** 알림은 받은 편지함에서 플래그가 지정됩니다. **저장됨** 을 클릭하거나 `is:saved` 쿼리를 사용하여 **저장됨** 알림을 사이드바의 한곳에서 모두 검토할 수 있습니다.
- 이 알림 및 이 대화의 이후 업데이트에서 자동으로 구독을 취소합니다. 구독을 취소하면 받은 편지함의 알림도 제거됩니다. 대화에서 구독을 취소했는데 누군가가 사용자 이름이나 업데이트를 받고 있는 팀을 멘션하면 이 대화에서 다시 알림을 받기 시작합니다.

받은 편지함에서 한 번에 여러 알림을 심사할 수도 있습니다. 자세한 내용은 “[받은 편지함의 알림 관리](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)”를 참조하세요.

## 알림 받은 편지함 사용자 지정

{% 데이터 variables.location.product_location %}{% ifversion fpt 또는 ghec %} 또는 {% 데이터 variables.product.prodname_mobile %}{% endif %}에 있는 받은 편지함의 알림 그룹에 집중하려면 사용자 지정 필터를 만들 수 있습니다. 예를 들어 기여하는 오픈 소스 프로젝트에 대한 사용자 지정 필터를 만들고 멘션된 리포지토리에 대한 알림만 볼 수 있습니다. 자세한 내용은 “[받은 편지함의 알림 관리](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)”를 참조하세요. 심사 워크플로를 사용자 지정하는 방법에 대한 자세한 예는 “[알림 심사 워크플로 사용자 지정](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)”을 참조하세요.

## 알림 보존 정책

**저장됨** 으로 표시되지 않은 알림은 5개월 동안 보관됩니다. **저장됨** 으로 표시된 알림은 무기한 보관됩니다. 저장된 알림이 5개월 이상 되어 저장을 취소하면 해당 알림이 1일 내에 받은 편지함에서 사라집니다.

## 피드백 및 지원

알림에 대한 피드백 또는 기능 요청이 있는 경우 [{% data variables.product.prodname_github_community %} 토론](https://github.com/orgs/community/discussions/categories/general)을 사용하세요.
