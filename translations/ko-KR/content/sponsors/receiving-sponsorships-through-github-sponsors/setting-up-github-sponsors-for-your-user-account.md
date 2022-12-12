---
title: 사용자 계정에 대한 GitHub 스폰서 설정
intro: You can become a sponsored developer by joining {% data variables.product.prodname_sponsors %}, completing your sponsored developer profile, creating sponsorship tiers, submitting your bank and tax information, and enabling two-factor authentication for your account on {% data variables.product.product_location %}.
redirect_from:
- /articles/becoming-a-sponsored-developer
- /github/supporting-the-open-source-community-with-github-sponsors/becoming-a-sponsored-developer
- /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- User account
- Sponsors profile
shortTitle: Set up for personal account
ms.openlocfilehash: ec5b04d98410b94d5f5f12f55989b6165e5e3b20
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145140208"
---
## <a name="joining--data-variablesproductprodname_sponsors-"></a>{% data variables.product.prodname_sponsors %}에 조인

{% data reusables.sponsors.you-can-be-a-sponsored-developer %} {% data reusables.sponsors.stripe-supported-regions %}

{% data variables.product.prodname_sponsors %}를 조직으로 조인하려면 "[조직에 대한 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)"을 참조하세요.

{% data reusables.sponsors.navigate-to-github-sponsors %}
2. 조직 소유자인 경우 둘 이상의 적격 계정이 있습니다. **적격 계정 보기** 를 클릭한 다음, 계정 목록에서 개인 계정을 찾습니다.
3. **대기 목록 참가** 를 클릭합니다.
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.accept-legal-terms %}

지원되는 지역에 은행 계좌가 있는 경우 {% data variables.product.prodname_dotcom %}은 2주 이내에 애플리케이션을 검토합니다.

## <a name="completing-your-sponsored-developer-profile"></a>스폰서 개발자 프로필 완료

{% data variables.product.prodname_dotcom %}이 애플리케이션을 검토한 후 사람들이 후원을 시작할 수 있도록 스폰서 개발자 프로필을 설정할 수 있습니다.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## <a name="creating-sponsorship-tiers"></a>스폰서쉽 계층 만들기

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## <a name="submitting-your-bank-information"></a>은행 정보 제출

지원되는 지역에 거주하는 경우 다음 지침에 따라 Stripe Connect 계정을 만들어 은행 정보를 제출할 수 있습니다. 거주 지역 및 은행 계좌의 지역이 일치해야 합니다. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

## <a name="submitting-your-tax-information"></a>세금 정보 제출

{% data reusables.sponsors.tax-form-information-dev %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## <a name="enabling-two-factor-authentication-2fa-on-your--data-variablesproductprodname_dotcom--account"></a>{% data variables.product.prodname_dotcom %} 계정에서 2FA(2단계 인증) 사용

스폰서 개발자가 되려면 {% data variables.product.product_location %}에서 계정에 2FA를 사용하도록 설정해야 합니다. 자세한 내용은 “[2단계 인증 구성](/articles/configuring-two-factor-authentication)”을 참조하세요.

## <a name="submitting-your-application-to--data-variablesproductprodname_dotcom--for-approval"></a>승인을 위해 {% data variables.product.prodname_dotcom %}에 애플리케이션 제출

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
4. **승인 요청** 을 클릭합니다.
  ![승인 요청 단추](/assets/images/help/sponsors/request-approval-button.png)

{% data reusables.sponsors.github-review-app %}
