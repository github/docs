---
title: 웹후크 정보
intro: 통합을 빌드하고 설정하는 데 도움이 되는 웹후크의 작동 방식에 대한 기본 사항을 알아봅니다.
redirect_from:
  - /webhooks
  - /developers/webhooks-and-events/about-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 08b038d5a35c4c692502545e640d04993d169b6a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112388'
---
웹후크를 사용하면 GitHub.com에서 특정 이벤트를 구독하는 [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) 또는 [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/)와 같은 통합을 빌드하거나 설정할 수 있습니다. 이러한 이벤트 중 하나가 트리거되면 웹후크에 구성된 URL로 HTTP POST 페이로드를 보냅니다. 웹후크는 외부 이슈 추적기를 업데이트하거나, CI 빌드를 트리거하거나, 백업 미러를 업데이트하거나, 프로덕션 서버에 배포하는 데 사용할 수 있습니다. 유일한 걸림돌은 사용자의 상상력입니다.

웹후크는 {% ifversion ghes or ghae %} [{% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#global-webhooks/),{% endif %} [조직][org-hooks], 특정 [리포지토리][repo-hooks] 또는 {% data variables.product.prodname_github_app %}에 설치할 수 있습니다. 설치되면 웹후크는 구독된 이벤트가 하나 이상 발생될 때마다 전송됩니다.

각 설치 대상{% ifversion ghes or ghae %}({% data variables.product.prodname_ghe_server %} 인스턴스, 특정 조직 또는 특정 리포지토리).{% else %}(specific organization or specific repository)에 대해 웹 후크를 최대 {% ifversion ghes or ghae %}250{% else %}20{% endif %}개까지 만들 수 있습니다.{% endif %}

## 이벤트

{% data reusables.webhooks.webhooks_intro %}

각 이벤트는 조직 및/또는 리포지토리에 발생할 수 있는 특정 작업 집합에 해당합니다. 예를 들어 `issues` 이벤트를 구독하는 경우 이슈가 열리고, 닫혀 있고, 레이블이 지정될 때마다 자세한 페이로드를 받게 됩니다.

사용 가능한 웹후크 이벤트 및 해당 페이로드의 전체 목록은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhook-events-and-payloads)”를 참조하세요.

## Ping 이벤트

{% data reusables.webhooks.ping_short_desc %}

`ping` 이벤트 웹후크 페이로드에 대한 자세한 내용은 [`ping`](/webhooks/event-payloads/#ping) 이벤트를 참조하세요.

[org-hooks]: /rest/reference/orgs#webhooks/
[repo-hooks]: /rest/reference/repos#webhooks
