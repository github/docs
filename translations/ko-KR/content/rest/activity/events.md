---
title: 이벤트
intro: '이벤트 API는 {% data variables.product.prodname_dotcom %} 이벤트에 대한 읽기 전용 API입니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 09ad462fe00e84344bd1f0a33f97380a3f03e656
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064308'
---
이러한 이벤트는 사이트의 다양한 작업 스트림을 강화합니다.

이벤트 API는 {% data variables.product.product_name %}의 작업에 의해 트리거되는 다양한 유형의 이벤트를 반환할 수 있습니다. 이벤트 API에서 수신할 수 있는 특정 이벤트에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 이벤트 유형](/developers/webhooks-and-events/github-event-types)”을 참조하세요. 리포지토리 문제에 대한 이벤트 API도 사용할 수 있습니다. 자세한 내용은 “[문제 이벤트 API](/rest/reference/issues#events)”를 참조하세요.

이벤트는 “ETag” 머리글을 사용하여 폴링에 최적화됩니다. 새 이벤트가 트리거되지 않은 경우 “304 수정되지 않음” 응답이 표시되고 현재 속도 제한은 그대로 유지됩니다. 폴링이 허용되는 빈도(초)를 지정하는 “X-Poll-Interval” 헤더도 있습니다. 서버 로드가 많은 경우 시간이 늘어날 수 있습니다. 머리글을 준수하세요.

``` shell
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events
> HTTP/2 200
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# The quotes around the ETag value are important
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/2 304
> X-Poll-Interval: 60
```

지난 90일 이내에 만들어진 이벤트만 타임라인에 포함됩니다. 90일보다 오래된 이벤트는 포함되지 않습니다(타임라인의 총 이벤트 수가 300개 미만인 경우에도).
