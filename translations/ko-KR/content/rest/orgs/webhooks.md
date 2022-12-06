---
title: 조직 웹후크
allowTitleToDifferFromFilename: true
shortTitle: Webhooks
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 68b043b92589bf1c1b3a6b543168d5b5b8c85118
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066844'
---
## 조직 웹후크 API 정보

조직 웹후크를 사용하면 조직에서 특정 이벤트가 발생할 때마다 HTTP `POST` 페이로드를 받을 수 있습니다. {% data reusables.webhooks.webhooks-rest-api-links %}

구독할 수 있는 작업에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 이벤트 유형](/developers/webhooks-and-events/github-event-types)”을 참조하세요.

### 범위 및 제한 사항

조직 웹후크에 대한 모든 작업을 수행하려면 인증된 사용자가 관리되고 있는 조직의 관리자여야 합니다. 또한 OAuth 토큰에는 `admin:org_hook` 범위가 필요합니다. 자세한 내용은 “[OAuth 앱에 대한 범위](/developers/apps/scopes-for-oauth-apps)”를 참조하세요.

웹후크 구성에 있을 수 있는 중요한 데이터를 보호하기 위해 다음 액세스 제어 규칙도 적용합니다.

- OAuth 애플리케이션은 OAuth 애플리케이션에서 만들지 않은 웹후크를 나열하거나 보거나 편집할 수 없습니다.
- 사용자는 OAuth 애플리케이션에서 만든 웹후크를 나열하거나 보거나 편집할 수 없습니다.

### 웹후크 받기

{% data variables.product.product_name %}가 웹후크 페이로드를 보내려면 인터넷에서 서버에 액세스할 수 있어야 합니다. 또한 HTTPS를 통해 암호화된 페이로드를 보낼 수 있도록 SSL을 사용하는 것이 좋습니다.

더 많은 모범 사례는 [가이드를 참조하세요](/guides/best-practices-for-integrators/).

#### 웹후크 헤더

{% data variables.product.product_name %}는 이벤트 유형과 페이로드 식별자를 구분하기 위해 여러 HTTP 헤더를 함께 보냅니다. 자세한 내용은 [웹후크 헤더](/webhooks/event-payloads/#delivery-headers)를 참조하세요.
