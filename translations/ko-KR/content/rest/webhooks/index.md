---
title: 리포지토리 웹후크
intro: REST API를 사용하여 리포지토리에 대한 웹후크를 만들고 관리합니다.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
children:
  - /repo-config
  - /repo-deliveries
  - /repos
redirect_from:
  - /rest/reference/webhooks
ms.openlocfilehash: 5654fb1644f654c4664cccdeb987667c157b16cf
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193541'
---
## 리포지토리 웹후크 정보

리포지토리 웹후크를 사용하면 리포지토리에서 특정 이벤트가 발생할 때마다 HTTP `POST` 페이로드를 받을 수 있습니다. {% data reusables.webhooks.webhooks-rest-api-links %}

조직의 모든 리포지토리에서 이벤트를 수신하도록 단일 웹후크를 설정하려면 [조직 웹후크](/rest/reference/orgs#webhooks)에 대한 REST API 설명서를 참조하세요.

REST API 외에도 {% data variables.product.prodname_dotcom %}는 리포지토리의 [PubSubHubbub](#pubsubhubbub) 허브 역할을 할 수도 있습니다.

### 웹후크 받기

{% data variables.product.product_name %}가 웹후크 페이로드를 보내려면 인터넷에서 서버에 액세스할 수 있어야 합니다. 또한 HTTPS를 통해 암호화된 페이로드를 보낼 수 있도록 SSL을 사용하는 것이 좋습니다.

#### 웹후크 헤더

{% data variables.product.product_name %}는 이벤트 유형과 페이로드 식별자를 구분하기 위해 여러 HTTP 헤더를 함께 보냅니다. 자세한 내용은 [웹후크 헤더](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers)를 참조하세요.

### PubSubHubbub

GitHub는 모든 리포지토리에 대한 [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) 허브 역할을 할 수도 있습니다. PSHB는 토픽이 업데이트될 때 서버가 업데이트를 수신하도록 등록할 수 있는 간단한 게시/구독 프로토콜입니다. 업데이트는 HTTP POST 요청과 함께 콜백 URL로 전송됩니다.
GitHub 리포지토리의 푸시에 대한 토픽 URL은 다음과 같은 형식입니다.

`https://github.com/{owner}/{repo}/events/{event}`

이벤트는 사용 가능한 모든 웹후크 이벤트일 수 있습니다. 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhook-events-and-payloads)”를 참조하세요.

#### 응답 형식

기본 형식은 [기존 사후 수신 후크가 기대하는](/post-receive-hooks/) POST에서 `payload` 매개 변수로 전송된 JSON 본문입니다.  `Accept` 헤더 또는 `.json` 확장으로 원시 JSON 본문을 받도록 지정할 수도 있습니다.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

#### 콜백 URL

콜백 URL은 `http://` 프로토콜을 사용할 수 있습니다.

    # Send updates to postbin.org
    http://postbin.org/123

#### 구독

GitHub PubSubHubbub 엔드포인트는 `{% data variables.product.api_url_code %}/hub`입니다. curl이 있는 성공적인 요청은 다음과 같습니다.

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

PubSubHubbub 요청은 여러 번 보낼 수 있습니다. 후크가 이미 있는 경우 요청에 따라 수정됩니다.

##### 매개 변수

속성 | 형식 | 설명
-----|------|--------------
``hub.mode``|`string` | **필수**. `subscribe` 또는 `unsubscribe`입니다.
``hub.topic``|`string` |**필수**.  구독할 GitHub 리포지토리의 URI입니다.  경로는 `/{owner}/{repo}/events/{event}` 형식이어야 합니다.
``hub.callback``|`string` | 토픽에 대한 업데이트를 받을 URI입니다.
``hub.secret``|`string` | 발신되는 본문 콘텐츠의 해시 서명을 생성하는 공유 비밀 키입니다.  원시 요청 본문을 {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` 또는 `X-Hub-Signature-256` 헤더{% elsif ghae %}`X-Hub-Signature-256` 헤더{% endif %}의 내용과 비교하여 푸시가 GitHub에서 제공되었는지 확인할 수 있습니다. 자세한 내용은 [PubSubHubbub 설명서](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify)를 참조하세요.
