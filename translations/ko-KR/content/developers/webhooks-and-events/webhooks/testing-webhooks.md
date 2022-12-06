---
title: 웹후크 테스트
intro: '응답뿐만 아니라 HTTP 요청 및 페이로드를 포함하여 {% data variables.product.prodname_dotcom %}에 대한 웹후크 배달을 검토합니다.'
redirect_from:
  - /webhooks/testing
  - /developers/webhooks-and-events/testing-webhooks
  - /articles/testing-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 5b9287030169ecac751b407ad915d4fa69bf8182
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145996219'
---
[이제 로컬 서버를 구성](/webhooks/configuring/)했으므로 코드를 제한으로 푸시하는 데 관심이 있을 수 있습니다. 이를 위해 GitHub 웹후크 보기는 배포된 페이로드를 테스트하기 위한 몇 가지 도구를 제공합니다.

## 최근 배달 나열

모든 웹후크에는 고유한 “최근 배달” 섹션이 있는데, 이 섹션에는 배달 성공(녹색 확인 표시) 또는 실패(빨간색 확인 표시)가 한눈에 파악할 수 있도록 나열됩니다. 각 배달이 시도된 시점을 식별할 수도 있습니다.

{% data variables.product.product_name %}는 각 웹후크 배달 로그를 {% ifversion fpt or ghec %} 30{% else %}8{% endif %}일 동안 유지합니다.

![최근 배달 보기](/assets/images/webhooks_recent_deliveries.png)

## 결과 자세히 조사

개별 배달을 확장하면 GitHub가 서버로 보내려는 정보를 *정확하게* 확인할 수 있습니다. 여기에는 HTTP 요청과 응답이 모두 포함됩니다.

### 요청

웹후크 배달 보기는 GitHub에서 보낸 헤더에 대한 정보를 제공합니다.
또한 JSON 페이로드에 대한 세부 정보도 포함합니다.

![페이로드 요청 보기](/assets/images/payload_request_tab.png)

### 응답

응답 탭에는 GitHub에서 페이로드를 받은 후 서버가 응답하는 방법이 나열됩니다. 여기에는 상태 코드, 헤더 및 응답 본문 내의 추가 데이터가 포함됩니다.

![페이로드 응답 보기](/assets/images/payload_response_tab.png)
