---
title: 개인 계정에 대한 GitHub 스폰서 설정
intro: '{% 데이터 variables.product.prodname_sponsors %}에 가입하고, 스폰서 개발자 프로필을 작성하고, 후원 계층을 만들고, 은행 및 세금 정보를 제출하고, {% 데이터 variables.location.product_location %}에서 계정에 대해 2단계 인증을 사용하도록 설정하여 스폰서 개발자가 될 수 있습니다.'
redirect_from:
  - /articles/becoming-a-sponsored-developer
  - /github/supporting-the-open-source-community-with-github-sponsors/becoming-a-sponsored-developer
  - /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account
  - /sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - User account
  - Sponsors profile
shortTitle: Set up for personal account
ms.openlocfilehash: 2c09631a8c023a49e3889497b90fe746f7730454
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098630'
---
## {% data variables.product.prodname_sponsors %}에 참가

{% data reusables.sponsors.you-can-be-a-sponsored-developer %} {% data reusables.sponsors.stripe-supported-regions %}

{% data variables.product.prodname_sponsors %}를 조직으로 조인하려면 "[조직에 대한 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)"을 참조하세요.

{% data reusables.sponsors.navigate-to-github-sponsors %}
2. 조직 소유자인 경우 둘 이상의 적격 계정이 있습니다. **스폰서 받기** 를 클릭한 다음 계정 목록에서 개인 계정을 찾습니다.
  ![스폰서 가져오기 단추의 스크린샷](/assets/images/help/sponsors/get-sponsored.png)
3. **대기 목록 참가** 를 클릭합니다.
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.payout-choice %} ![ 은행 계좌와 회계 호스트 중에서 선택하는 옵션의 스크린샷](/assets/images/help/sponsors/user-waitlist-payout-options.png)

{% data reusables.sponsors.accept-legal-terms %}

지원되는 지역에 은행 계좌가 있는 경우 {% data variables.product.prodname_dotcom %}은 2주 이내에 애플리케이션을 검토합니다.

## 스폰서 개발자 프로필 완료

{% data variables.product.prodname_dotcom %}이 애플리케이션을 검토한 후 사람들이 후원을 시작할 수 있도록 스폰서 개발자 프로필을 설정할 수 있습니다.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## 스폰서쉽 계층 만들기

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## 은행 정보 제출

스폰서 사용자는 지원되는 지역의 은행 계좌 또는 회계 호스트를 통해 지급을 받게 됩니다.

{% data reusables.sponsors.bank-info-fiscal-host-reminder %} 회계 호스트 설정 및 사용에 대한 자세한 내용은 "[회계 호스트를 사용하여 GitHub 스폰서 지급액 받기](/sponsors/receiving-sponsorships-through-github-sponsors/using-a-fiscal-host-to-receive-github-sponsors-payouts)"를 참조하세요.

은행 계좌로 지급을 받기로 선택한 경우 거주 지역 및 은행 계좌의 지역이 일치해야 합니다. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

## 세금 정보 제출

{% data reusables.sponsors.tax-form-information-dev %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## {% data variables.product.prodname_dotcom %} 계정에서 2FA(2단계 인증) 사용

스폰서 개발자가 되기 전에 {% 데이터 variables.location.product_location %}에서 계정에 대해 2FA를 사용하도록 설정해야 합니다. 자세한 내용은 “[2단계 인증 구성](/articles/configuring-two-factor-authentication)”을 참조하세요.

## 승인을 위해 {% data variables.product.prodname_dotcom %}에 애플리케이션 제출

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
4. **승인 요청** 을 클릭합니다.
  ![승인 요청 단추](/assets/images/help/sponsors/request-approval-button.png)

{% data reusables.sponsors.github-review-app %}
