---
title: 알림
intro: '알림 API를 사용하면 {% data variables.product.product_name %} 알림을 관리할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 6459a2a2e5d26b0250d52688488eb4092939ab7b
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098973'
---
## 알림 API 정보

{% data reusables.user-settings.notifications-api-classic-pat-only %}

알림 API를 사용하면 {% data variables.product.product_name %} 알림을 관리할 수 있습니다. 알림에 대한 자세한 내용은 "[알림 정보](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)"를 참조하세요.

모든 알림 API 호출에는 `notifications` 또는 `repo` API 범위가 필요합니다.  이렇게 하면 일부 문제 및 커밋 콘텐츠에 대한 읽기 전용 액세스 권한이 주어집니다. 각각의 엔드포인트에서 문제 및 커밋에 액세스하려면 `repo` 범위가 여전히 필요합니다.

알림은 “스레드”로 돌아갑니다.  스레드에는 문제, 끌어오기 요청 또는 커밋에 대한 현재 토론에 대한 정보가 포함됩니다.

알림은 `Last-Modified` 머리글을 사용한 폴링에 최적화되어 있습니다.  새 알림이 없으면 `304 Not Modified` 응답이 표시되고 현재 속도 제한은 그대로 유지됩니다.  폴링이 허용되는 빈도(초)를 지정하는 `X-Poll-Interval` 머리글이 있습니다.  서버 로드가 많은 경우 시간이 늘어날 수 있습니다.  머리글을 준수하세요.

``` shell
# Add authentication to your requests
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/2 200
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/2 304
> X-Poll-Interval: 60
```

### 알림 이유 정보

알림 API에서 응답을 검색할 때 각 페이로드에는 `reason`이라는 키가 있습니다. 이는 알림을 트리거하는 이벤트에 해당합니다.

알림을 받을 수 있는 잠재적인 `reason`은 다음과 같습니다.

이유 이름 | 설명
------------|------------
`assign` | 문제에 할당되었습니다.
`author` | 스레드를 만들었습니다.
`comment` | 스레드에 주석을 달았습니다.
`ci_activity` | 트리거한 {% data variables.product.prodname_actions %} 워크플로 실행이 완료되었습니다.
`invitation` | 리포지토리에 기여하라는 초대를 수락했습니다.
`manual` | 문제 또는 끌어오기 요청을 통해 스레드를 구독했습니다.
`mention` | 귀하는 콘텐츠에서 특별히 **@mentioned** 되었습니다.
`review_requested` | 귀하 또는 귀하가 속한 팀이 끌어오기 요청을 검토하도록 요청받았습니다.{% ifversion fpt or ghec %}
`security_alert` | {% data variables.product.prodname_dotcom %}가 리포지토리에서 [보안 취약성](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)을 발견했습니다.{% endif %}
`state_change` | 스레드 상태를 변경했습니다(예: 문제 닫기 또는 끌어오기 요청 병합).
`subscribed` | 리포지토리를 보고 있습니다.
`team_mention` | 언급된 팀에 있었습니다.

`reason`은 스레드별로 수정되며 이후 알림의 `reason`이 다른 경우 변경될 수 있습니다.

예를 들어 문제의 작성자인 경우 해당 문제에 대한 후속 알림에는 `reason`의 `author`가 있습니다. 동일한 문제에 대해 **@mentioned** 가 있는 경우 이후에 가져오는 알림의 `reason`은 `mention`입니다. `reason`은 다시 언급되었는지 여부에 관계없이 `mention`으로 유지됩니다.
