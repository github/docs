---
title: 조직에 대한 GitHub 스폰서 설정
intro: '조직은 {% data variables.product.prodname_sponsors %}에 가입하여 작업에 대한 결제를 받을 수 있습니다.'
redirect_from:
  - /articles/setting-up-github-sponsorship-for-your-organization
  - /articles/receiving-sponsorships-as-a-sponsored-organization
  - /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization
permissions: 'Organization owners can set up {% data variables.product.prodname_sponsors %} for an organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Sponsors profile
  - Open Source
shortTitle: Set up for organization
ms.openlocfilehash: 96f452628732eae2f208e03fb09c0401e02b16ec
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098099'
---
## {% data variables.product.prodname_sponsors %} 참가

{% data reusables.sponsors.you-can-be-a-sponsored-organization %} {% data reusables.sponsors.stripe-supported-regions %}

조직이 {% data variables.product.prodname_sponsors %}에 참가하라는 초대를 받은 후 아래 단계를 완료하여 스폰서 조직이 될 수 있습니다.

조직 외부의 개인 기여자로 {% data variables.product.prodname_sponsors %}에 참가하려면 "[개인 계정에 대한 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)"을 참조하세요.

{% data reusables.sponsors.navigate-to-github-sponsors %} {% data reusables.sponsors.view-eligible-accounts %}
3. 조직 오른쪽에서 **대기 목록 참가** 를 클릭합니다.
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.payout-choice %} ![ 은행 계좌와 회계 호스트 중에서 선택하는 옵션의 스크린샷](/assets/images/help/sponsors/org-waitlist-payout-options.png)

{% data reusables.sponsors.accept-legal-terms %}

## 스폰서 조직 프로필 작성

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.meet-the-team %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## 스폰서쉽 계층 만들기

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## 은행 정보 제출

스폰서 조직으로서 지원되는 지역의 은행 계좌 또는 회계 호스트를 통해 지급을 받게 됩니다.

{% data reusables.sponsors.bank-info-fiscal-host-reminder %} 회계 호스트를 설정하고 사용하는 방법에 대한 자세한 내용은 "[회계 호스트를 사용하여 GitHub 스폰서 지급을 받습니다](/sponsors/receiving-sponsorships-through-github-sponsors/using-a-fiscal-host-to-receive-github-sponsors-payouts)."를 참조하세요.

은행 계좌로 지급을 받기로 선택한 경우 은행 계좌는 조직의 전용 은행 계좌 또는 개인 은행 계좌일 수 있습니다. [Stripe Atlas](https://stripe.com/atlas)와 같은 서비스를 통해 비즈니스 은행 계좌를 받을 수 있습니다. 조직에 대해 {% data variables.product.prodname_sponsors %}를 설정하는 개인도 동일한 지원되는 지역에 있어야 합니다. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

## 세금 정보 제출

{% data reusables.sponsors.tax-form-information-org %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## {% data variables.product.prodname_dotcom %} 계정에서 2FA(2단계 인증) 사용

조직이 스폰서 조직이 되기 전에 {% 데이터 variables.location.product_location %}에서 계정에 대해 2FA를 사용하도록 설정해야 합니다. 자세한 내용은 “[2단계 인증 구성](/articles/configuring-two-factor-authentication)”을 참조하세요.

## 승인을 위해 {% data variables.product.prodname_dotcom %}에 애플리케이션 제출

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.request-approval %}

{% data reusables.sponsors.github-review-app %}

## 추가 참고 자료

- “[{% data variables.product.prodname_sponsors %} 정보](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)”
- "[{% data variables.product.prodname_sponsors %}를 통해 스폰서쉽 받기](/sponsors/receiving-sponsorships-through-github-sponsors)"
