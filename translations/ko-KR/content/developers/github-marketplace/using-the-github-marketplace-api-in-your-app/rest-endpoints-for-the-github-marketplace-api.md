---
title: GitHub Marketplace API에 대한 REST 엔드포인트
intro: '{% data variables.product.prodname_marketplace %}에서 앱을 관리하려면 이러한 {% data variables.product.prodname_marketplace %} API 엔드포인트를 사용합니다.'
redirect_from:
  - /apps/marketplace/github-marketplace-api-endpoints
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
  - /developers/github-marketplace/rest-endpoints-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: REST API
ms.openlocfilehash: aac7df5600863521c482b8a13c31abf8fd103ecf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145112495'
---
Marketplace 목록에 사용할 수 있는 몇 가지 유용한 엔드포인트는 다음과 같습니다.

* [플랜 나열](/rest/reference/apps#list-plans)
* [플랜에 대한 계정 나열](/rest/reference/apps#list-accounts-for-a-plan)
* [계정에 대한 구독 플랜 가져오기](/rest/reference/apps#get-a-subscription-plan-for-an-account)
* [인증된 사용자의 구독 나열](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)

{% data variables.product.prodname_marketplace %} API를 사용할 때 인증하는 방법에 대한 자세한 내용은 다음 페이지를 참조하세요.

* [OAuth 앱에 대한 권한 부여 옵션](/apps/building-oauth-apps/authorizing-oauth-apps/)
* [GitHub 앱에 대한 권한 부여 옵션](/apps/building-github-apps/authenticating-with-github-apps/)

{% note %}

**참고:** [REST API에 대한 속도 제한](/rest/overview/resources-in-the-rest-api#rate-limiting)은 모든 {% data variables.product.prodname_marketplace %} API 엔드포인트에 적용됩니다.

{% endnote %}
