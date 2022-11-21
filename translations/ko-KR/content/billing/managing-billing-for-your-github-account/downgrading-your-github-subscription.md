---
title: GitHub 구독 다운그레이드
intro: '언제든지 {% data variables.location.product_location %}에서 모든 유형의 계정에 대한 구독을 다운그레이드할 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-your-github-subscription
  - /articles/downgrading-your-personal-account-s-billing-plan
  - /articles/how-do-i-cancel-my-account
  - /articles/downgrading-a-user-account-to-free
  - /articles/removing-paid-seats-from-your-organization
  - /articles/downgrading-your-organization-s-paid-seats
  - /articles/downgrading-your-organization-s-billing-plan
  - /articles/downgrading-an-organization-with-per-seat-pricing-to-free
  - /articles/downgrading-an-organization-with-per-repository-pricing-to-free
  - /articles/downgrading-your-organization-to-free
  - /articles/downgrading-your-organization-from-the-business-plan-to-the-team-plan
  - /articles/downgrading-your-organization-from-github-business-cloud-to-the-team-plan
  - /articles/downgrading-your-github-billing-plan
  - /articles/downgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/downgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Downgrades
  - Organizations
  - Repositories
  - User account
shortTitle: Downgrade subscription
ms.openlocfilehash: e302fb715fc2937c7ed056b813b073a66a7cc1fa
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163786'
---
## {% data variables.product.product_name %} 구독 다운그레이드

개인 계정 또는 조직의 구독을 다운그레이드하는 경우 다음 청구 날짜에 가격 책정 및 계정 기능 변경 내용이 적용됩니다. 유료 개인 계정 또는 조직 구독에 대한 변경 내용은 다른 유료 {% data variables.product.prodname_dotcom %} 기능 구독 또는 결제에 영향을 주지 않습니다. 자세한 내용은 “[업그레이드 또는 다운그레이드 시 청구 프로세스에 어떤 영향을 주나요?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)”를 참조하세요.

## 개인 계정의 구독 다운그레이드

개인 계정을 {% data variables.product.prodname_pro %}에서 {% data variables.product.prodname_free_user %}로 다운그레이드하는 경우 계정이 프라이빗 리포지토리의 고급 코드 검토 도구에 액세스할 수 없게 됩니다. {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. “현재 플랜”에서 **편집** 드롭다운을 사용하여 **Free로 다운그레이드** 를 클릭합니다.
  ![Free로 다운그레이드 단추](/assets/images/help/billing/downgrade-to-free.png)
5. 다음 청구 날짜에 개인 계정이 더 이상 액세스할 수 없게 되는 기능에 대한 정보를 읽은 다음, **내용을 이해했으며 다운그레이드를 계속합니다.** 를 클릭합니다.
  ![다운그레이드 계속 단추](/assets/images/help/billing/continue-with-downgrade.png)

프라이빗 리포지토리에 {% data variables.product.prodname_pages %} 사이트를 게시하고 사용자 지정 도메인을 추가한 경우 도메인 인수 위험을 방지하기 위해 {% data variables.product.prodname_pro %}에서 {% data variables.product.prodname_free_user %}로 다운그레이드하기 전에 DNS 레코드를 제거하거나 업데이트합니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 관리](/articles/managing-a-custom-domain-for-your-github-pages-site)”를 참조하세요.

## 조직의 구독 다운그레이드

{% data reusables.dotcom_billing.org-billing-perms %}

조직을 {% data variables.product.prodname_team %}에서 조직용 {% data variables.product.prodname_free_team %}로 다운그레이드하는 경우 계정이 팀의 고급 협업 및 관리 도구에 액세스할 수 없게 됩니다.

조직을 {% data variables.product.prodname_ghe_cloud %}에서 {% data variables.product.prodname_team %} 또는 {% data variables.product.prodname_free_team %}로 다운그레이드하는 경우 계정이 고급 보안, 규정 준수, 배포 제어에 액세스할 수 없게 됩니다. {% data reusables.gated-features.more-info %}



{% note %}

**참고:** 
  - 조직이 엔터프라이즈 계정으로 소유하는 경우 조직 수준에서 청구를 관리할 수 없습니다. 다운그레이드하려면 먼저 엔터프라이즈 계정에서 조직을 제거해야 합니다. 자세한 내용은 "[엔터프라이즈에서 조직 제거"를 참조하세요](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise).
  - 현재 {% data variables.product.prodname_ghe_cloud %}을(를) 시험하고 있고 평가판이 끝나기 전에 {% data variables.product.prodname_enterprise %}을(를) 구매하지 않으면 조직이 자동으로 {% data variables.product.prodname_free_team %} 또는 {% data variables.product.prodname_team %}로 다운그레이드됩니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_cloud %} 평가판 설정](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial)”을 참조하세요.

{% endnote %}

{% data reusables.organizations.billing-settings %}
1. “현재 플랜”에서 **편집** 드롭다운을 사용하여 원하는 다운그레이드 옵션을 클릭합니다.
  ![다운그레이드 단추](/assets/images/help/billing/downgrade-option-button.png) {% data reusables.dotcom_billing.confirm_cancel_org_plan %}

## 레거시 리포지토리당 가격 책정을 사용하여 조직 구독 다운그레이드

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %} 자세한 내용은 “[리포지토리당 가격 책정에서 사용자당 가격 책정으로 조직 전환](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing)”을 참조하세요.

{% data reusables.organizations.billing-settings %}
5. “구독”에서 “편집” 드롭다운을 선택하고 **플랜 편집** 을 클릭합니다.
    ![플랜 편집 드롭다운](/assets/images/help/billing/edit-plan-dropdown.png)
1. “청구/플랜”에서 변경할 플랜 옆에 있는 **다운그레이드** 를 클릭합니다.
    ![다운그레이드 단추](/assets/images/help/billing/downgrade-plan-option-button.png)
1. 계정을 다운그레이드하는 이유를 입력하고 **플랜 다운그레이드** 을 클릭합니다.
    ![다운그레이드 이유 텍스트 상자 및 다운그레이드 단추](/assets/images/help/billing/downgrade-plan-button.png)

## 조직에서 유료 사용자 제거

조직에서 사용하는 유료 사용자 수를 줄이기 위해 조직에서 멤버를 제거하거나 멤버를 외부 협력자로 변환하고 퍼블릭 리포지토리에 대한 액세스 권한만 부여할 수 있습니다. 자세한 내용은 다음을 참조하세요.
- “[조직에서 멤버 제거](/articles/removing-a-member-from-your-organization)”
- “[조직 멤버를 외부 협력자로 변환](/articles/converting-an-organization-member-to-an-outside-collaborator)”
- “[조직 리포지토리에 대한 개인 액세스 권한 관리](/articles/managing-an-individual-s-access-to-an-organization-repository)”

{% data reusables.organizations.billing-settings %}
1. “현재 플랜”에서 **편집** 드롭다운을 사용하여 **사용자 제거** 를 클릭합니다.
  ![사용자 제거 드롭다운](/assets/images/help/billing/remove-seats-dropdown.png)
1. “사용자 제거”에서 다운그레이드할 사용자 수를 선택합니다.
  ![사용자 제거 옵션](/assets/images/help/billing/remove-seats-amount.png)
1. 다음 청구 날짜의 새 결제 정보를 검토하고 **사용자 제거** 를 클릭합니다.
  ![사용자 제거 단추](/assets/images/help/billing/remove-seats-button.png)

## 추가 참고 자료

- “[{% data variables.product.prodname_dotcom %} 제품](/articles/github-s-products)”
- “[업그레이드 또는 다운그레이드 시 청구 프로세스에 어떤 영향을 주나요?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)”
- “[{% data variables.product.prodname_dotcom %} 요금 청구 정보](/articles/about-billing-on-github)”
- “[사용자당 가격 책정 정보](/articles/about-per-user-pricing)”
