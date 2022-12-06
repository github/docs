---
title: 새 구매 및 평가판 처리
intro: '고객이 {% data variables.product.prodname_marketplace %} 앱의 유료 플랜, 무료 평가판 또는 무료 버전을 구매하면 구매 흐름을 시작하는 `purchased` 작업으로 [`marketplace_purchase` 이벤트](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) 웹후크를 받게 됩니다.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /developers/github-marketplace/handling-new-purchases-and-free-trials
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: New purchases & free trials
ms.openlocfilehash: b0c1cf055d912cd83e2167bfcbd0136a2644b1aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089625'
---
{% warning %}

{% data variables.product.prodname_marketplace %}에서 {% data variables.product.prodname_github_app %}을 제공하는 경우 귀하의 앱은 OAuth 권한 부여 흐름을 따르는 사용자를 식별해야 합니다. 이 흐름을 지원하기 위해 별도의 {% data variables.product.prodname_oauth_app %}을 설정할 필요가 없습니다. 자세한 내용은 “[{% data variables.product.prodname_github_apps %}의 사용자 식별 및 권한 부여](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”를 참조하세요.

{% endwarning %}

## 1단계. 초기 구매 및 웹후크 이벤트

고객이 귀하의 {% data variables.product.prodname_marketplace %} 앱을 구매하기 전에 [목록 플랜](/marketplace/selling-your-app/github-marketplace-pricing-plans/)을 선택합니다. 또한 고객은 개인 계정 또는 조직 계정에서 앱을 구매할지 여부를 선택합니다.

고객이 **주문 완료 및 설치 시작** 을 클릭하여 구매를 완료합니다.

{% data variables.product.product_name %}는 `purchased` 작업과 함께 [`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) 웹후크를 앱에 보냅니다.

`marketplace_purchase` 웹후크에서 `effective_date` 및 `marketplace_purchase` 개체를 읽고 고객이 구매한 플랜, 청구 기간이 시작되는 시점 및 다음 청구 기간이 시작되는 시점을 결정합니다.

앱이 평가판을 제공하는 경우 웹후크에서 `marketplace_purchase[on_free_trial]` 특성을 읽습니다. 값이 `true`인 경우 앱은 평가판 시작 날짜(`effective_date`)와 평가판 종료 날짜(`free_trial_ends_on`)를 추적해야 합니다. `free_trial_ends_on` 날짜를 사용하여 앱의 UI에 남은 평가판 사용 일 수를 표시합니다. 배너 또는 [청구 UI](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui)에서 이 정보를 표시할 수 있습니다. 평가판이 끝나기 전에 취소를 처리하는 방법을 알아보려면 “[플랜 취소 처리](/developers/github-marketplace/handling-plan-cancellations)”를 참조하세요. 평가판 만료 시 평가판을 유료 플랜으로 전환하는 방법을 알아보려면 “[플랜 변경 처리](/developers/github-marketplace/handling-plan-changes)”를 참조하세요.

`marketplace_purchase` 이벤트 페이로드의 예는 “[{% data variables.product.prodname_marketplace %} 웹후크 이벤트](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)”를 참조하세요.

## 2단계. 설치

귀하의 앱이 {% data variables.product.prodname_github_app %}인 경우 {% data variables.product.product_name %}에서는 구매 시 앱에서 액세스할 수 있는 리포지토리를 선택하라는 메시지를 고객에게 표시합니다. {% data variables.product.product_name %}는 고객이 선택한 계정에 앱을 설치하고 선택한 리포지토리에 대한 액세스 권한을 부여합니다.

이 때, {% data variables.product.prodname_github_app %} 설정에서 **설정 URL** 을 지정한 경우 {% data variables.product.product_name %}는 고객을 해당 URL로 리디렉션합니다. 설정 URL을 지정하지 않으면 {% data variables.product.prodname_github_app %}의 구매를 처리할 수 없습니다.

{% note %}

**참고:** **설정 URL** 은 {% data variables.product.prodname_github_app %} 설정에서 선택 사항으로 표시되지만 {% data variables.product.prodname_marketplace %}에서 앱을 제공하려는 경우에는 필수 필드입니다.

{% endnote %}

앱이 {% data variables.product.prodname_oauth_app %}인 경우 {% data variables.product.product_name %}는 아무 곳에도 앱을 설치하지 않습니다. 대신 {% data variables.product.product_name %}는 [{% data variables.product.prodname_marketplace %} 목록](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls)에서 지정한 **설치 URL** 로 고객을 리디렉션합니다.

고객이 {% data variables.product.prodname_oauth_app %}을 구매하면 {% data variables.product.product_name %}가 귀하가 선택한 URL(설정 URL 또는 설치 URL)로 고객을 리디렉션하고 해당 URL에는 고객이 선택한 가격 책정 플랜이 쿼리 매개 변수 `marketplace_listing_plan_id`로 포함됩니다.

## 3단계: 권한 부여

고객이 귀하의 앱을 구매할 때 OAuth 권한 부여 흐름을 통해 고객을 보내야 합니다.

* 앱이 {% data variables.product.prodname_github_app %}인 경우 {% data variables.product.product_name %}가 고객을 **설정 URL** 로 리디렉션하는 즉시 권한 부여 흐름을 시작합니다. “[{% data variables.product.prodname_github_apps %}의 사용자 식별 및 권한 부여](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”의 단계를 따르세요.

* 앱이 {% data variables.product.prodname_oauth_app %}인 경우 {% data variables.product.product_name %}가 고객을 **설치 URL** 로 리디렉션하는 즉시 권한 부여 흐름을 시작합니다. “[{% data variables.product.prodname_oauth_apps %} 권한 부여](/apps/building-oauth-apps/authorizing-oauth-apps/)”의 단계를 따르세요.

두 유형의 앱에 대해 첫 번째 단계는 고객을 [https://github.com/login/oauth/authorize](https://github.com/login/oauth/authorize)로 리디렉션하는 것입니다.

고객이 권한 부여를 완료하면 앱은 고객에 대한 OAuth 액세스 토큰을 받습니다. 이 토큰은 다음 단계에서 필요합니다.

{% note %}

**참고:** 평가판에서 고객에게 권한을 부여하는 경우 유료 플랜에서 고객에게 부여할 수 있는 것과 동일한 액세스 권한을 부여합니다.  평가 기간이 종료된 후 해당 고객을 유료 플랜으로 이동합니다.

{% endnote %}

## 4단계. 고객 계정 프로비저닝

앱은 모든 새 구매에 대한 고객 계정을 프로비저닝해야 합니다. [. 권한 부여](#step-3-authorization)에서 고객에 대해 받은 액세스 토큰을 사용하여 “[인증된 사용자에 대한 구독 나열](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)” 엔드포인트를 호출합니다. 응답에는 고객의 `account` 정보가 포함되며 해당 고객이 평가판(`on_free_trial`)을 사용 중인지 여부가 표시됩니다. 이 정보를 사용하여 설정 및 프로비저닝을 완료합니다.

{% data reusables.marketplace.marketplace-double-purchases %}

조직 및 사용자별 구매인 경우 고객에게 구매한 앱에 액세스할 수 있는 조직 구성원을 선택하라는 메시지를 표시할 수 있습니다.

조직 구성원이 앱에 대한 액세스 권한을 받는 방법을 사용자 지정할 수 있습니다. 몇 가지 제안 사항은 다음과 같습니다.

**정액제 가격 책정:** 고정 요금 가격을 사용하여 조직에 대해 구매가 이루어진 경우 앱은 API를 통해 [조직의 모든 구성원을 얻고](/rest/reference/orgs#list-organization-members) 조직 관리자에게 통합자 측에서 유료 사용자가 있는 구성원을 선택하라는 메시지를 표시할 수 있습니다.

**단위당 가격 책정:** 단위당 사용자를 프로비저닝하는 한 가지 방법은 사용자가 앱에 로그인할 때 실제 사용수를 더하는 것입니다. 고객이 실제 사용자 수 임계값에 도달하면 앱에서는 {% data variables.product.prodname_marketplace %}를 통해 업그레이드해야 한다는 메시지를 사용자에게 표시할 수 있습니다.
