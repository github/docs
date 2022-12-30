---
title: 앱을 나열하기 위한 요구 사항
intro: '{% data variables.product.prodname_marketplace %}의 앱은 목록을 게시하기 전에 이 페이지에 설명된 요구 사항을 충족해야 합니다.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /developers/github-marketplace/requirements-for-listing-an-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Listing requirements
ms.openlocfilehash: 3054055d65453330965defb15252684882ca79fa
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098598'
---
<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

{% data variables.product.prodname_marketplace %}에 앱을 나열하기 위한 요구 사항은 무료 또는 유료 앱을 제공할지 여부에 따라 달라집니다.

## 모든 {% data variables.product.prodname_marketplace %} 목록에 대한 요구 사항

{% data variables.product.prodname_marketplace %}의 모든 목록은 {% data variables.product.product_name %} 커뮤니티에 가치를 제공하는 도구에 대한 목록이어야 합니다. 게시 목록을 제출할 때 “[{% data variables.product.prodname_marketplace %} 개발자 계약](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement)”의 계약조건을 읽고 동의해야 합니다.

### 모든 앱에 대한 사용자 환경 요구 사항

모든 목록은 무료 또는 유료 앱용인지 관계없이 다음 요구 사항을 충족해야 합니다.

- 목록은 {% data variables.product.product_name %}에서 사용자를 적극적으로 설득해서는 안 됩니다.
- 목록에는 게시자에 대한 유효한 연락처 정보가 포함되어야 합니다.
- 목록에는 애플리케이션에 대한 관련 설명이 있어야 합니다.
- 목록은 가격 책정 플랜을 지정해야 합니다.
- 앱은 고객에게 가치를 제공하고 인증 이외의 방식으로 플랫폼과 통합해야 합니다.
- 앱은 {% data variables.product.prodname_marketplace %}에서 공개적으로 사용할 수 있어야 합니다. 베타 버전으로 제공되지 않으며, 초대 전용으로 사용할 수 없습니다.
- 앱에는 {% data variables.product.prodname_marketplace %} API를 사용하여 게시자에게 플랜 변경 또는 취소를 알리도록 웹후크 이벤트가 설정되어 있어야 합니다. 자세한 내용은 “[앱에서 {% data variables.product.prodname_marketplace %} API 사용](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”을 참조하세요.

좋은 고객 환경을 제공하는 방법에 대한 자세한 내용은 “[앱에 대한 고객 환경 모범 사례](/developers/github-marketplace/customer-experience-best-practices-for-apps)”를 참조하세요.

### 모든 앱에 대한 브랜드 및 목록 요구 사항

- GitHub 로고를 사용하는 앱은 {% data variables.product.company_short %} 지침을 따라야 합니다. 자세한 내용은 “[{% data variables.product.company_short %}의 로고 및 사용 현황](https://github.com/logos)”을 참조하세요.
- 앱에는 “[{% data variables.product.prodname_marketplace %} 목록 설명](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)”에 제공된 권장 사항을 충족하는 로고, 기능 카드 및 스크린샷 이미지가 있어야 합니다.
- 목록에는 문법 오류가 없고 잘 작성된 설명이 포함되어야 합니다. 목록 작성에 대한 지침은 “[{% data variables.product.prodname_marketplace %} 목록 설명 작성](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)”을 참조하세요.

고객을 보호하려면 보안 모범 사례도 따르는 것이 좋습니다. 자세한 내용은 “[앱에 대한 보안 모범 사례](/developers/github-marketplace/security-best-practices-for-apps)”를 참조하세요.

## 무료 앱에 대한 고려 사항

{% data reusables.marketplace.free-apps-encouraged %} 

## 유료 앱에 대한 요구 사항

{% data variables.product.prodname_marketplace %}의 앱에 대한 유료 플랜을 게시하려면 확인된 게시자 조직에서 앱을 소유해야 합니다. 확인 프로세스 또는 앱 소유권 이전에 대한 자세한 내용은 “[조직에 대한 게시자 확인 신청](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”을 참조하세요.

앱이 이미 게시되어 있고 확인된 게시자인 경우 가격 책정 플랜 편집기에서 새 유료 플랜을 게시할 수 있습니다. 자세한 내용은 “[목록에 대한 가격 책정 플랜 설정](/developers/github-marketplace/setting-pricing-plans-for-your-listing)”을 참조하세요.

유료 앱(또는 유료 플랜을 제공하는 앱)을 게시하려면 다음 요구 사항도 충족해야 합니다.

- {% data variables.product.prodname_github_apps %}에는 최소 100개의 설치가 있어야 합니다.
- {% data variables.product.prodname_oauth_apps %} 에는 최소 200명의 사용자가 있어야 합니다.
- 모든 유료 앱은 새 구매, 업그레이드, 다운그레이드, 취소 및 무료 평가판에 대한 {% data variables.product.prodname_marketplace %} 구매 이벤트를 처리해야 합니다. 자세한 내용은 아래의 “[유료 앱에 대한 청구 요구 사항](#billing-requirements-for-paid-apps)”을 참조하세요.

{% data variables.product.prodname_marketplace %}에 앱을 게시할 준비가 되면 앱 목록에 대한 확인을 요청해야 합니다.

{% note %}

**참고:** {% data reusables.marketplace.app-transfer-to-org-for-verification %} 조직에 앱을 전송하는 방법에 대한 자세한 내용은 “[게시를 위해 목록 제출](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)”을 확인하세요.

{% endnote %}

## 유료 앱에 대한 청구 요구 사항

앱은 결제를 처리할 필요가 없지만 {% data variables.product.prodname_marketplace %} 구매 이벤트를 사용하여 새 구매, 업그레이드, 다운그레이드, 취소 및 무료 평가판을 관리해야 합니다. 이러한 이벤트를 앱에 통합하는 방법에 대한 자세한 내용은 “[앱에서 {% data variables.product.prodname_marketplace %} API 사용](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”을 참조하세요.

GitHub의 청구 API를 사용하면 고객이 GitHub를 떠나지 않고 앱을 구매하고 {% 데이터 variables.location.product_location %}의 계정에 이미 연결된 결제 방법으로 서비스에 대한 비용을 지불할 수 있습니다.

- 앱은 유료 구독 구매에 대한 월간 및 연간 청구를 모두 지원해야 합니다.
- 목록은 무료 및 유료 플랜의 조합을 제공할 수 있습니다. 무료 플랜은 선택 사항이지만 권장됩니다. 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 목록의 가격 책정 플랜](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)”을 참조하세요.
