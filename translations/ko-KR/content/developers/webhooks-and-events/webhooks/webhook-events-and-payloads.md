---
title: 웹후크 이벤트 및 페이로드
intro: 각 웹후크 이벤트가 발생하는 시기와 페이로드에 포함된 항목에 대해 알아봅니다.
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks
  - /v3/activity/events/types
  - /webhooks/event-payloads
  - /developers/webhooks-and-events/webhook-events-and-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Webhook events & payloads
ms.openlocfilehash: 0592f191b463354b92c3953880c7a7a435e0b07a
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165540'
---
{% data reusables.webhooks.webhooks_intro %}

이 페이지에 나열된 이벤트를 구독하는 웹후크를 만들 수 있습니다. 각 웹후크 이벤트에는 웹후크 속성에 대한 설명과 예제 페이로드가 포함됩니다. 자세한 내용은 “[웹후크 만들기](/webhooks/creating/)”를 참조하세요.

## 웹후크 페이로드 개체 공통 속성

각 웹후크 이벤트 페이로드에는 이벤트에 고유한 속성도 포함되어 있습니다. 개별 이벤트 유형 섹션에서 고유한 속성을 찾을 수 있습니다.

키 | 유형 | 설명
----|------|-------------
`action` | `string` | 대부분의 웹후크 페이로드에는 이벤트를 트리거한 특정 활동을 포함하는 `action` 속성이 있습니다.
{% data reusables.webhooks.sender_desc %} 이 속성은 모든 웹후크 페이로드에 포함됩니다.
{% data reusables.webhooks.repo_desc %} 웹후크 페이로드는 리포지토리의 활동에서 이벤트가 발생할 때 `repository` 속성을 포함합니다.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} 자세한 내용은 “[{% data variables.product.prodname_github_app %} 빌드](/apps/building-github-apps/)”를 참조하세요.

웹후크 이벤트에 대한 고유 속성은 [이벤트 API](/rest/reference/activity#events)를 사용할 때 `payload` 속성에서 찾을 수 있는 것과 동일한 속성입니다. 한 가지 예외는 [`push` 이벤트](#push)입니다. `push` 이벤트 웹후크 페이로드의 고유 속성과 이벤트 API의 `payload` 속성은 다릅니다. 웹후크 페이로드에는 자세한 정보가 포함되어 있습니다.

{% tip %}

**참고:** 페이로드는 25MB로 제한됩니다. 이벤트가 더 큰 페이로드를 생성하는 경우에는 웹후크가 발생하지 않습니다. 예를 들어 여러 분기 또는 태그가 한 번에 푸시되는 경우 `create` 이벤트에 대해 발생할 수 있습니다. 배달을 보장하기 위해 페이로드 크기를 모니터링하는 것이 좋습니다.

{% endtip %}

### 배달 헤더

웹후크의 구성된 URL 엔드포인트로 배달되는 HTTP POST 페이로드는 다음과 같은 몇 가지 특수 헤더를 포함합니다.

헤더 | 설명
-------|-------------|
`X-GitHub-Event`| 배달을 트리거한 이벤트의 이름입니다.
`X-GitHub-Delivery`| 배달을 식별하는 [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier)입니다.{% ifversion ghes or ghae %}
`X-GitHub-Enterprise-Version` | HTTP POST 페이로드를 보낸 {% data variables.product.prodname_ghe_server %} 인스턴스의 버전입니다.
`X-GitHub-Enterprise-Host` | HTTP POST 페이로드를 보낸 {% data variables.product.prodname_ghe_server %} 인스턴스의 호스트 이름입니다.{% endif %}{% ifversion not ghae %}
`X-Hub-Signature`| 웹후크가 [`secret`](/rest/reference/repos#create-hook-config-params)로 구성된 경우 이 헤더가 전송됩니다. 이는 요청 본문의 HMAC 16진수 다이제스트이며 SHA-1 해시 함수와 `secret`을 HMAC `key`로 사용하여 생성됩니다.{% ifversion fpt or ghes or ghec %} `X-Hub-Signature`는 기존 통합과의 호환성을 위해 제공되며, 대신 더 안전한 `X-Hub-Signature-256`을 사용하는 것이 좋습니다.{% endif %}{% endif %}
`X-Hub-Signature-256`| 웹후크가 [`secret`](/rest/reference/repos#create-hook-config-params)로 구성된 경우 이 헤더가 전송됩니다. 이는 요청 본문의 HMAC 16진수 다이제스트이며 SHA-256 해시 함수 및 `secret`을 HMAC `key`로 사용하여 생성됩니다.

또한 요청에 대한 `User-Agent`에는 접두사 `GitHub-Hookshot/`이 있습니다.

### 배달 예제

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% ifversion ghes or ghae %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% ifversion not ghae %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c
> User-Agent: GitHub-Hookshot/044aadd
> Content-Type: application/json
> Content-Length: 6615
> X-GitHub-Event: issues

> {
>   "action": "opened",
>   "issue": {
>     "url": "{% data variables.product.api_url_pre %}/repos/octocat/Hello-World/issues/1347",
>     "number": 1347,
>     ...
>   },
>   "repository" : {
>     "id": 1296269,
>     "full_name": "octocat/Hello-World",
>     "owner": {
>       "login": "octocat",
>       "id": 1,
>       ...
>     },
>     ...
>   },
>   "sender": {
>     "login": "octocat",
>     "id": 1,
>     ...
>   }
> }
```

<!-- Content after this section is automatically generated -->
