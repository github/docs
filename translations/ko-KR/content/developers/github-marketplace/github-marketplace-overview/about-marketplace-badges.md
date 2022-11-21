---
title: 마켓플레이스 배지 정보
intro: '{% data variables.product.prodname_marketplace %}에서 일부 앱 및 작업 목록에 대해 볼 수 있는 배지에 대해 알아봅니다.'
redirect_from:
  - /developers/github-marketplace/about-verified-creator-badges
  - /developers/github-marketplace/about-marketplace-badges
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: bba9137fc39c1bc101a75650dcea03e651d37fff
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089726'
---
## GitHub 앱

{% data variables.product.prodname_marketplace %}의 특정 앱에는 {% octicon "verified" aria-label="The verified badge" %} 배지와 “게시자 도메인 및 전자 메일 확인됨”이라는 도구 설명이 있습니다. 즉, 앱을 소유하려면 조직에서 다음 사항을 충족해야 합니다.

- 도메인에 대해 소유권이 확인되고 해당 프로필에 확인된 배지가 있습니다.
- {% data variables.product.prodname_dotcom %} 지원이 조직에 닿을 수 있도록 이메일 주소를 확인했습니다.
- 조직에 2단계 인증이 필요합니다. 자세한 내용은 “[조직에서 2단계 인증 필요](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)”를 참조하세요.

![GitHub 앱의 Marketplace 배지](/assets/images/marketplace/apps-with-verified-publisher-badge-tooltip.png)

{% note %} {% data variables.product.prodname_dotcom %}은(는) 앱을 분석하지 않습니다. 마켓플래이스 배지 {% octicon "verified" aria-label="The verified badge" %}은(는) 게시자가 위에 나열된 요구 사항을 충족하는지만 확인합니다.
{% endnote %}

이 배지를 앱에 추가하는 방법을 알아보려면 “[조직에 대한 게시자 확인 신청](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”을 참조하세요.

{% data variables.product.prodname_marketplace %}의 일부 앱에는 {% octicon "verified" aria-label="The verified badge" %} 배지와 “게시자 도메인 및 전자 메일 확인됨” 대신 “앱에서 목록에 대한 요구 사항 충족”이라는 도구 설명이 있습니다. 즉, 앱은 “[앱을 나열하기 위한 요구 사항](/developers/github-marketplace/requirements-for-listing-an-app)”에 설명된 대로 나열 요구 사항을 충족하지만, 게시자는 “[조직에 대한 게시자 확인 신청](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”에 설명된 대로 확인되지 않았습니다. 이 배지가 있는 앱은 게시자가 확인을 위해 성공적으로 적용될 때까지 가격 책정 플랜을 변경할 수 없습니다.

![GitHub 앱의 Marketplace 배지](/assets/images/marketplace/apps-with-unverified-publisher-badge-tooltip.png)

{% data variables.product.prodname_marketplace %}에 앱을 나열하기 위한 요구 사항에 대한 자세한 내용은 “[{% data variables.product.prodname_marketplace %}에 앱을 나열하기 위한 요구 사항](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)”을 참조하세요.

사용할 앱을 찾는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 검색](/search-github/searching-on-github/searching-github-marketplace)”을 참조하세요.

## GitHub 작업 

{% octicon "verified" aria-label="The verified badge" %} 또는 확인된 작업자 배지가 있는 작업은 {% data variables.product.prodname_dotcom %}에서 작업 작성자를 파트너 조직으로 확인했음을 나타냅니다.

![GitHub 작업에 대해 확인된 작성자 배지](/assets/images/marketplace/verified-creator-badge-for-actions.png)

{% data variables.product.prodname_marketplace %}에 GitHub 작업을 게시하는 방법에 대한 자세한 내용은 “[GitHub 마켓플레이스에서 작업 게시](/actions/creating-actions/publishing-actions-in-github-marketplace)”를 참조하세요.
