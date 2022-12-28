---
title: GitHub Marketplace 정보
intro: '모든 {% data variables.product.product_name %} 사용자와 앱 및 작업을 공개적으로 공유할 수 있는 {% data variables.product.prodname_marketplace %}에 대해 알아봅니다.'
redirect_from:
  - /apps/marketplace/getting-started
  - /marketplace/getting-started
  - /developers/github-marketplace/about-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 5a722d35fb74607b9200a1fe30d804df44330cea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089729'
---
[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace)은(는) 사용자를 {% data variables.product.prodname_dotcom %} 워크플로를 확장하고 개선하려는 개발자에게 연결합니다. {% data variables.product.prodname_marketplace %}에서 개발자에 대해 사용할 수 있는 무료 및 유료 도구를 나열할 수 있습니다. {% data variables.product.prodname_marketplace %}은(는) 개발자에게 {% data variables.product.prodname_actions %} 및 앱이라는 두 가지 유형의 도구를 제공하며, 각 도구에는 {% data variables.product.prodname_marketplace %}에 추가하기 위한 여러 단계가 필요합니다.

## GitHub 작업

{% data reusables.actions.actions-not-verified %}

{% data variables.product.prodname_marketplace %}에 {% data variables.product.prodname_actions %}을(를) 게시하는 방법에 대한 자세한 내용은 “[GitHub Marketplace에서 작업 게시](/actions/creating-actions/publishing-actions-in-github-marketplace)”를 참조하세요.

## 앱

누구나 {% data variables.product.prodname_marketplace %}에서 다른 사용자와 앱을 무료로 공유할 수 있지만 조직에서 소유의 앱만 해당 앱을 판매할 수 있습니다. 

앱에 대한 유료 플랜을 게시하고 마켓플레이스 배지를 표시하려면 게시자 확인 프로세스를 완료해야 합니다. 자세한 내용은 “[조직에 대한 게시자 확인 신청](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)” 또는 “[앱을 나열하기 위한 요구 사항](/developers/github-marketplace/requirements-for-listing-an-app)”을 참조하세요.

조직이 요구 사항을 충족하면 조직의 소유자 권한이 있는 사용자는 앱에 대한 유료 플랜을 게시할 수 있습니다. 유료 플랜이 있는 각 앱은 결제를 가능하게 하는 금융 온보딩 프로세스를 거치기도 합니다.

무료 플랜으로 앱을 게시하려면 모든 앱을 나열하기 위한 일반적인 요구 사항만 충족하면 됩니다. 자세한 내용은 “[모든 GitHub Marketplace 목록에 대한 요구 사항](/developers/github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings)”을 참조하세요.

### 앱이 처음이신가요?

{% data variables.product.prodname_marketplace %}의 앱을 제작하는 데 관심이 있지만 {% data variables.product.prodname_github_apps %} 또는 {% data variables.product.prodname_oauth_apps %}에 대해 잘 모르신다면 “[{% data variables.product.prodname_github_apps %} 빌드](/developers/apps/building-github-apps)” 또는 “[{% data variables.product.prodname_oauth_apps %} 빌드](/developers/apps/building-oauth-apps)”를 참조하세요.

### {% data variables.product.prodname_github_apps %} 대 {% data variables.product.prodname_oauth_apps %}

{% data variables.product.prodname_marketplace %}에서 OAuth 및 {% data variables.product.prodname_github_apps %} 둘 다 나열할 수 있지만 {% data reusables.marketplace.github_apps_preferred %}입니다. 자세한 내용은 “[{% data variables.product.prodname_github_apps %} 및 {% data variables.product.prodname_oauth_apps %}의 차이점](/apps/differences-between-apps/)”과 “[{% data variables.product.prodname_oauth_apps %}에서 {% data variables.product.prodname_github_apps %}(으)로 마이그레이션](/apps/migrating-oauth-apps-to-github-apps/)”을 참조하세요.

## {% data variables.product.prodname_marketplace %}에 앱 게시 개요

앱 만들기를 마쳤으면 {% data variables.product.prodname_marketplace %}에 게시하여 다른 사용자와 공유할 수 있습니다. 요약하면 프로세스는 다음과 같습니다.

1. 앱을 주의 깊게 검토하여 다른 리포지토리에서 예상대로 동작하고 모범 사례 지침을 따르는지 확인합니다. 자세한 내용은 “[앱에 대한 보안 모범 사례](/developers/github-marketplace/security-best-practices-for-apps)” 및 “[앱을 나열하기 위한 요구 사항](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience)”을 참조하세요.

1. 웹후크 이벤트를 앱에 추가하여 사용자 청구 요청을 추적합니다. {% data variables.product.prodname_marketplace %} API, 웹후크 이벤트 및 청구 요청에 대한 자세한 내용은 “[앱에서 {% data variables.product.prodname_marketplace %} API 사용](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”을 참조하세요.

1. {% data variables.product.prodname_marketplace %} 목록 초안을 만듭니다. 자세한 내용은 “[앱 목록 초안 작성](/developers/github-marketplace/drafting-a-listing-for-your-app)”을 참조하세요.

1. 가격 책정 플랜을 선택합니다. 자세한 내용은 “[목록에 대한 가격 책정 플랜 설정](/developers/github-marketplace/setting-pricing-plans-for-your-listing)”을 참조하세요.

1. “[{% data variables.product.prodname_marketplace %} 개발자 계약](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement)”의 약관을 읽고 동의합니다.

1. {% data variables.product.prodname_marketplace %}에 게시할 목록을 제출합니다. 자세한 내용은 “[게시할 목록 제출](/developers/github-marketplace/submitting-your-listing-for-publication)”을 참조하세요.

## 앱의 성능 보기

목록에 대한 메트릭 및 트랜잭션에 액세스할 수 있습니다. 자세한 내용은 다음을 참조하세요.

- “[목록에 대한 메트릭 보기](/developers/github-marketplace/viewing-metrics-for-your-listing)”
- “[목록에 대한 트랜잭션 보기](/developers/github-marketplace/viewing-transactions-for-your-listing)”

## 지원 센터에 연락 

{% data variables.product.prodname_marketplace %}에 대한 질문이 있는 경우 {% data variables.contact.contact_support %}에 직접 문의하세요.
