---
title: GitHub 구독 업그레이드
intro: '언제든지 {% 데이터 variables.location.product_location %}에서 모든 유형의 계정에 대한 구독을 업그레이드할 수 있습니다.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription
  - /articles/upgrading-your-personal-account-s-billing-plan
  - /articles/upgrading-your-personal-account
  - /articles/upgrading-your-personal-account-from-free-to-a-paid-account
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-paypal
  - /articles/500-error-while-upgrading
  - /articles/upgrading-your-organization-s-billing-plan
  - /articles/changing-your-organization-billing-plan
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-paypal
  - /articles/upgrading-your-organization-account
  - /articles/switching-from-per-repository-to-per-user-pricing
  - /articles/adding-seats-to-your-organization
  - /articles/upgrading-your-github-billing-plan
  - /articles/upgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/upgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Troubleshooting
  - Upgrades
  - User account
shortTitle: Upgrade your subscription
ms.openlocfilehash: c3f45c6cdf68b970a442bce2ed07f1f882e758d4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097932'
---
## 구독 업그레이드 정보

{% data reusables.accounts.accounts-billed-separately %}

계정의 구독을 업그레이드할 경우 업그레이드는 해당 계정에서만 사용할 수 있는 유료 기능을 변경하고 사용하는 다른 계정은 변경되지 않습니다.

## 개인 계정의 구독 업그레이드

개인 계정을 {% data variables.product.prodname_free_user %}에서 {% data variables.product.prodname_pro %}로 업그레이드하여 개인 계정이 소유하는 프라이빗 리포지토리에 대한 고급 코드 검토 도구를 얻을 수 있습니다. 개인 계정을 업그레이드해도 사용자가 관리할 수 있는 조직 또는 해당 조직이 소유한 리포지토리에는 영향을 주지 않습니다. {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. "현재 계획" 옆에 있는 **업그레이드** 를 클릭합니다.
  ![Upgrade(업그레이드) 단추](/assets/images/help/billing/settings_billing_user_upgrade.png)
2. "플랜 비교" 페이지의 "Pro"에서 **Pro로 업그레이드** 를 클릭합니다.
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.show-plan-details %} {% data reusables.dotcom_billing.enter-billing-info %} {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## 조직의 구독 관리

조직의 구독을 다른 제품으로 업그레이드하거나, 기존 제품에 사용자를 추가하거나, 리포지토리별 가격 책정을 사용자별 가격 책정으로 전환할 수 있습니다.

### 조직의 구독 업그레이드

조직을 조직용 {% data variables.product.prodname_free_team %}에서 {% data variables.product.prodname_team %}으로 업그레이드하여 팀을 위한 고급 협업 및 관리 도구에 액세스하거나 {% data variables.product.prodname_ghe_cloud %}로 업그레이드하여 추가로 보안, 규정 준수 및 배포 컨트롤을 사용할 수 있습니다. 조직 업그레이드는 개인 계정 또는 개인 계정이 소유한 리포지토리에 영향을 주지 않습니다. {% data reusables.gated-features.more-info-org-products %}

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %} {% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.show-plan-details %} {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.owned_by_business %} {% data reusables.dotcom_billing.finish_upgrade %}

### {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직을 위한 다음 단계

조직을 {% data variables.product.prodname_ghe_cloud %}로 업그레이드한 경우 조직의 ID 및 액세스 관리를 설정할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서의 "[조직의 SAML Single Sign-On 관리](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization){% ifversion fpt %}"를 참조하세요.{% else %}."{% endif %}

{% data variables.product.prodname_ghe_cloud %}에서 엔터프라이즈 계정을 사용하려면 {% data variables.contact.contact_enterprise_sales %}에 문의하세요. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서의 “[엔터프라이즈 계정 정보](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}”를 참조하세요.{% else %}."{% endif %}

### 조직에 사용자 추가

추가 사용자가 {% data variables.product.prodname_team %} 조직의 개인 리포지토리에 액세스할 수 있도록 하려면 언제든지 사용자를 더 구매할 수 있습니다.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

### 조직을 리포지토리별 가격 책정에서 사용자별 가격 책정으로 전환

{% data reusables.dotcom_billing.switch-legacy-billing %} 자세한 내용은 "[사용자별 가격 책정 정보](/articles/about-per-user-pricing)"를 참조하세요.

{% data reusables.organizations.billing-settings %}
5. 플랜 이름 오른쪽에 있는 **편집** 드롭다운 메뉴를 사용하고 **플랜 편집** 을 선택합니다.
  ![편집 드롭다운 메뉴](/assets/images/help/billing/per-user-upgrade-button.png)
6. "팀용 고급 도구" 오른쪽에서 **지금 업그레이드** 를 클릭합니다.
  ![지금 업그레이드 단추](/assets/images/help/billing/per-user-upgrade-now-button.png) {% data reusables.dotcom_billing.choose_org_plan %} {% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.owned_by_business %} {% data reusables.dotcom_billing.finish_upgrade %}

## 업그레이드 시 500 오류 문제 해결

{% data reusables.dotcom_billing.500-error %}

## 추가 참고 자료

- “[{% data variables.product.prodname_dotcom %} 제품](/articles/github-s-products)”
- “[업그레이드 또는 다운그레이드 시 청구 프로세스에 어떤 영향을 주나요?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)”
- “[{% data variables.product.prodname_dotcom %} 요금 청구 정보](/articles/about-billing-on-github)”
