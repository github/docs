---
title: 사용자당 가격 책정 정보
intro: '{% ifversion fpt or ghec %}조직{% ifversion ghec %} 및 엔터프라이즈의 경우{% endif %} {% else %}{% endif %}청구서는 선택한 사용이 허가된 사용자 수로 시작됩니다.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
ms.openlocfilehash: 16de23fa922a593bb03fedcb7f902822cffce7f9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106671'
---
## 사용자당 가격 책정 정보

{% ifversion fpt %}

{% data variables.product.prodname_dotcom_the_website %}의 새로운 조직은 {% data variables.product.prodname_free_team %}를 사용하여 퍼블릭 및 오픈 소스 프로젝트를 구축하거나 사용자당 가격으로 유료 제품으로 업그레이드할 수 있습니다. 자세한 내용은 “[{% data variables.product.company_short %}의 제품](/get-started/learning-about-github/githubs-products)” 및 “[{% data variables.product.prodname_dotcom %} 구독 업그레이드](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”를 참조하세요.

2016년 5월 11일 이전에 유료 구독을 사용하는 조직은 기존 리포지토리별 계획을 유지하거나 사용자별 가격 책정으로 전환할 수 있습니다. {% data variables.product.company_short %}는 12개월 전에 구독에 대한 위임된 변경 내용을 알려 줍니다. 구독 전환에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 구독 업그레이드](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)”를 참조하세요.

{% else %}

청구서의 기초는{% ifversion ghec %} 조직 또는{% endif %} 엔터프라이즈에 대해 선택한 표준 사용이 허가된 사용자 수입니다.

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

동일한 사용자가 여러 엔터프라이즈 배포에 대해 둘 이상의 라이선스를 사용하지 않도록 하려면 {% data variables.product.prodname_ghe_server %}와 {% data variables.product.prodname_ghe_cloud %} 환경 간에 라이선스 사용량을 동기화할 수 있습니다. 자세한 내용은 “[GitHub Enterprise에 대한 라이선스 정보](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)”를 참조하세요.

사용이 허가된 사용자 외에도 청구서에 {% data variables.product.prodname_GH_advanced_security %}와 같은 다른 요금이 포함될 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 청구 정보](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”를 참조하세요.
{% endif %}

## 라이선스를 사용하는 사용자

{% ifversion fpt %}

다음 사용자에 대한 {% data variables.product.company_short %} 청구서:

- 소유자를 포함한 조직 멤버
- 포크를 제외한 조직 소유의 프라이빗 리포지토리에 대한 외부 협력자
- 포크를 제외한 조직 소유의 프라이빗 또는 내부 리포지토리에서 외부 협력자가 되라는 보류 중인 초대가 있는 사람
- 휴면 사용자

{% note %}

**참고:** 
- {% data variables.product.company_short %}은 사용자 계정이 조직 소유의 여러 리포지토리에 액세스할 수 있더라도 청구 목적으로 각 외부 협력자를 한 번 계산합니다.
- {% data reusables.organizations.org-invite-scim %}

{% endnote %}

{% data variables.product.company_short %}은(는) 다음 사용자에 대해 청구되지 않습니다.

- 청구 관리자
- 청구 관리자가 되기 위해 보류 중인 초대가 있는 사람
- 조직 소유의 퍼블릭 리포지토리에서 외부 협력자가 되도록 보류 중인 초대가 있는 모든 사용자

{% else %}

{% data variables.product.company_short %}는 {% data variables.product.prodname_enterprise %}의 각 배포에 대해 다음 계정에 대한 요금을 청구합니다.

### {% data variables.product.prodname_ghe_cloud %}에서 라이선스를 사용하는 계정

{% data variables.product.company_short %}은(는) {% data variables.product.prodname_ghe_cloud %}에서 다음 계정 각각에 대해 요금을 청구합니다.

- 엔터프라이즈에서 하나 이상의 조직의 구성원 또는 소유자인 엔터프라이즈 소유자
- 소유자를 포함한 조직 멤버
- 포크를 제외하고 조직이 소유한 프라이빗 또는 내부 리포지토리의 외부 협력자
- 휴면 사용자

엔터프라이즈에서 {% data variables.product.prodname_emus %}을(를) 사용하지 않는 경우 다음 각 계정에 대해서도 요금이 청구됩니다.

- 조직 소유자 또는 멤버가 되기 위해 보류 중인 초대를 가진 모든 사람
- 포크를 제외한 조직 소유의 프라이빗 또는 내부 리포지토리에서 외부 협력자가 되라는 보류 중인 초대가 있는 사람

{% note %}

**참고:** 
  - {% data variables.product.company_short %}은 사용자 계정에 엔터프라이즈의 여러 조직에 멤버 자격이 있거나 조직이 소유한 여러 리포지토리에 액세스하는 경우에도 청구 목적으로 각 구성원 또는 외부 협력자를 한 번 계산합니다.
  - {% data reusables.organizations.org-invite-scim %}

{% endnote %}

{% data variables.product.company_short %}은(는) 다음 계정에 대해 청구되지 않습니다.

- 일시 중단된 {% 데이터 variables.enterprise.prodname_managed_users_caps %}
- 엔터프라이즈에서 하나 이상의 조직의 멤버 또는 소유자가 아닌 Enterprise 소유자
- 엔터프라이즈 청구 관리자
- 개별 조직에 대한 청구 관리자
- 청구 관리자가 되기 위해 보류 중인 초대가 있는 사람
- 조직 소유의 퍼블릭 리포지토리에서 외부 협력자가 되도록 보류 중인 초대가 있는 모든 사용자

### {% data variables.product.prodname_ghe_server %}에서 라이선스를 사용하는 계정

{% data variables.product.prodname_ghe_server %}의 각 사용자 계정은 좌석을 사용합니다.

일시 중단된 사용자는 사용이 허가된 사용자 수를 계산할 때 계산되지 않습니다. 자세한 내용은 {% data variables.product.prodname_ghe_server %} 설명서의 "[사용자 일시 중단 및 일시 중단 해제]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users){% ifversion not ghes %}"를 참조하세요. {% else %}." {% endif %}

휴면 사용자는 좌석 라이선스를 차지합니다. 따라서 휴면 사용자를 일시 중단하여 사용자 라이선스를 해제하도록 선택할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_server %} 설명서의 "[휴면 사용자 관리]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users){% ifversion not ghes %}"를 참조하세요. {% else %}." {% endif %}

{% endif %}

## 구독 변경 정보

{% ifversion fpt %}

언제든지 {% data variables.product.prodname_dotcom %} 구독을 변경할 수 있습니다.

### 사용자별 플랜에 대한 조직의 변경 내용 정보

{% endif %}

언제든지 {% ifversion fpt or ghec %} 조직{% endif %}{% ifversion ghec %} 또는{% endif %}{% ifversion ghec or ghes %} 엔터프라이즈에{% endif %}에 더 많은 사용이 허가된 사용자를 추가할 수 있습니다. 사용 중인 사용자보다 더 많은 사용자에 대해 결제하는 경우 사용자 수를 줄일 수도 있습니다.{% ifversion fpt %} 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 구독 업그레이드](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)” 및 “[{% data variables.product.prodname_dotcom %} 구독 다운그레이드](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)”를 참조하세요.

구독에 대한 질문이 있는 경우 {% data variables.contact.contact_support %}에 문의하세요.

팀의 협업 기능을 추가로 지원하기 위해 SAML Single Sign-On 및 고급 감사와 같은 기능을 포함하는 {% data variables.product.prodname_ghe_cloud %}로 업그레이드할 수 있습니다. {% data reusables.enterprise.link-to-ghec-trial %}

{% data variables.product.prodname_ghe_cloud %}에 대한 사용자별 가격 책정에 대한 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서를 참조하세요](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% else %}

{% data variables.product.prodname_dotcom_the_website %}에서 엔터프라이즈 계정을 사용하고 구독 변경에 대한 질문이 있는 경우 {% data variables.contact.contact_enterprise_sales %}에 문의하세요.

{% endif %} {% ifversion ghec %}

{% data variables.product.prodname_ghe_cloud %}에서 개별 조직을 사용하는 경우 구독을 업그레이드하거나 다운그레이드할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 구독 업그레이드](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)” 또는 “[{% data variables.product.prodname_dotcom %} 구독 다운그레이드](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)”를 참조하세요. 구독에 대한 질문이 있는 경우 {% data variables.contact.contact_support %}에 문의하세요.

{% endif %}

{% ifversion fpt %}

### 사용자별 플랜에 대한 조직의 변경 정보

조직의 청구 설정에서 레거시 유료 플랜 간에 업그레이드하거나 다운그레이드할 수 있습니다. 더 많은 개인 리포지토리가 있는 플랜으로 업그레이드하면 {% data variables.product.company_short %}에서 즉시 계정을 새 플랜으로 이동하고 청구 주기에 남은 일수에 비례한 가격 차이를 청구합니다.

프라이빗 리포지토리가 적은 레거시 유료 플랜으로 다운그레이드하면 새 플랜이 다음 청구 날짜에 적용됩니다. 새 플랜에서 허용하는 것보다 더 많은 프라이빗 리포지토리가 있는 경우 새 플랜이 적용될 때 프라이빗 리포지토리가 잠깁니다. 프라이빗 리포지토리 수를 줄이려면 일부 프라이빗 리포지토리를 공개하거나 로컬로 프라이빗 리포지토리를 복제하고 {% data variables.product.prodname_dotcom %}에서 복사본을 삭제할 수 있습니다.

{% endif %}

## 추가 참고 자료

{%- ifversion not fpt %}
- “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”
- "[엔터프라이즈의 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)" {%- endif %}
- “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”
- "[조직의 리포지토리에 외부 협력자 추가](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)"
