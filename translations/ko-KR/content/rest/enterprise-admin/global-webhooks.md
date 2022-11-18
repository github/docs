---
title: 전역 webhook
intro: '전역 webhook는 엔터프라이즈에 설치됩니다. 전역 웹후크를 사용하여 엔터프라이즈의 사용자, 조직, 팀 및 리포지토리에 대한 규칙을 자동으로 모니터링하거나 적용하고 대응할 수 있습니다.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0066ad821aeab046000991fee0b736997e39b7b8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099118'
---
전역 웹후크는 [조직](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [사용자](/developers/webhooks-and-events/webhook-events-and-payloads#user), [리포지토리](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [팀](/developers/webhooks-and-events/webhook-events-and-payloads#team), [구성원](/developers/webhooks-and-events/webhook-events-and-payloads#member), [멤버 자격](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [포크](/developers/webhooks-and-events/webhook-events-and-payloads#fork) 및 [ping](/developers/webhooks-and-events/about-webhooks#ping-event) 이벤트 유형을 구독할 수 있습니다.

*이 API는 [인증된](/rest/overview/resources-in-the-rest-api#authentication) 사이트 관리자만 사용할 수 있습니다.* 일반 사용자가 액세스하려고 하면 `404` 응답을 수신하게 됩니다. 전역 웹후크를 구성하는 방법을 알아보려면 [전역 웹후크 정보](/enterprise/admin/user-management/about-global-webhooks)를 참조하세요.

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}
