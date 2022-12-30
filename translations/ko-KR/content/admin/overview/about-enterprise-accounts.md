---
title: 엔터프라이즈 계정 정보
intro: '{% data variables.product.product_name %}을 사용하면 엔터프라이즈 계정을 사용하여 {% ifversion ghec %}조직 간의 협업을 가능하게 하는 동시에 {% elsif ghes or ghae %}give{% endif %}관리자에게 단일 가시성 및 관리 지점을 제공할 수 있습니다.'
redirect_from:
  - /articles/about-github-business-accounts
  - /articles/about-enterprise-accounts
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: b0d1455fef80094f0dcdf20332605bd427d9c441
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127629'
---
## {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}의 엔터프라이즈 계정 정보

{% ifversion ghec %}

{% data variables.product.prodname_dotcom_the_website %}의 엔터프라이즈 계정을 사용하면 여러 조직을 관리할 수 있습니다. 엔터프라이즈 계정에는 {% data variables.product.prodname_dotcom %}의 조직 또는 사용자 계정과 같은 핸들이 있어야 합니다.

{% elsif ghes or ghae %}

{% ifversion ghes %}{% data variables.location.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}의 엔터프라이즈 계정을 사용하면 조직을 관리할 수 있습니다{% ifversion ghes {% endif %}이(가) 소유한 {% elsif ghae %}의 {% ifversion ghes %}{% data variables.product.prodname_ghe_server %} 인스턴스{% elsif ghae %}enterprise{% endif %}.

{% endif %}

조직은 엔터프라이즈 멤버가 한 번에 여러 프로젝트에서 협업할 수 있는 공유 계정입니다. 조직 소유자는 정교한 보안 및 관리 기능을 사용하여 조직의 데이터 및 프로젝트에 대한 액세스를 관리할 수 있습니다. 자세한 내용은 “[조직 정보](/organizations/collaborating-with-groups-in-organizations/about-organizations)”를 참조하세요.

{% ifversion ghec %} 엔터프라이즈 설정에서 엔터프라이즈 소유자는 기존 조직을 초대하여 엔터프라이즈 계정에 가입하거나, 엔터프라이즈 계정 간에 조직을 이전하거나, 새 조직을 만들 수 있습니다. 자세한 내용은 “[엔터프라이즈에 조직 추가](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)”를 참조하세요.
{% endif %}

엔터프라이즈 계정을 사용하면 엔터프라이즈가 소유한 모든 조직에 대한 정책을 관리하고 적용할 수 있습니다. {% data reusables.enterprise.about-policies %} 자세한 내용은 “[엔터프라이즈 정책 정보](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)”를 참조하세요.

{% ifversion ghec %}

{% data reusables.enterprise.create-an-enterprise-account %} 자세한 내용은 “[엔터프라이즈 계정 만들기](/admin/overview/creating-an-enterprise-account)”를 참조하세요.

{% endif %}

## 엔터프라이즈 계정 관리 정보

{% ifversion ghes or ghae %}

{% ifversion ghae %}{% data variables.product.product_name %}{% elsif ghes %}{% data variables.product.prodname_ghe_server %}인스턴스의 엔터프라이즈 계정에서{% endif %} 관리자는 엔터프라이즈 멤버십을{% ifversion enterprise-owner-join-org %} 보고{% ifversion remove-enterprise-members %} 관리하고{% endif %}, 엔터프라이즈가 소유한 조직에서 자신의 멤버십을 관리하고,{% endif %} {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}인스턴스{% elsif ghae %} 엔터프라이즈에 대해 {% data variables.product.prodname_ghe_managed %}를 관리할 수 있습니다{% endif %}.

{% ifversion ghes %}
- 라이선스 현황{% endif %}
- 보안({% ifversion ghae %}Single Sign-On, IP 허용 목록, {% endif %}SSH 인증 기관, 2단계 인증)
- 엔터프라이즈 계정이 소유한 조직에 대한 엔터프라이즈 정책

{% endif %}

{% ifversion ghes %}

### {% data variables.product.prodname_ghe_cloud %}의 엔터프라이즈 계정 관리 정보

{% endif %}

{% ifversion ghec or ghes %}{% data variables.product.prodname_enterprise %}를 사용하거나 구매하면 {% ifversion ghes %}또한{% endif %} {% data variables.product.prodname_dotcom_the_website %}에서 {% data variables.product.prodname_ghe_cloud %}에 대한 엔터프라이즈 계정도 만들 수 있습니다. {% data variables.product.prodname_dotcom_the_website %}의 엔터프라이즈 계정 관리자는 엔터프라이즈 멤버십을{% ifversion enterprise-owner-join-org %} 보고 {% ifversion remove-enterprise-members %} 관리하고{% endif %}, 엔터프라이즈가 소유한 조직에서 자신의 멤버십을 관리하고,{% endif %} {% ifversion ghes %}엔터프라이즈 계정에 대해 {% data variables.product.prodname_dotcom_the_website %}를 관리할 수 있습니다{% endif %}.

- 청구 및 사용량({% data variables.product.prodname_dotcom_the_website %} 서비스, {% data variables.product.prodname_GH_advanced_security %}, 사용자 라이선스)
- 보안(Single Sign-On, IP 허용 목록, SSH 인증 기관, 2단계 인증)
- 엔터프라이즈 계정이 소유한 조직에 대한 엔터프라이즈 정책

{% data variables.product.prodname_ghe_cloud %} 및 {% data variables.product.prodname_ghe_server %}를 모두 사용하는 경우 {% data variables.product.prodname_dotcom_the_website %}의 엔터프라이즈 계정에서 {% data variables.product.prodname_ghe_server %}에 대해 다음을 관리할 수도 있습니다.

- {% data variables.product.prodname_ghe_server %} 인스턴스에 대한 청구 및 사용량
- {% data variables.contact.enterprise_support %}을 사용하여 요청 및 지원 번들 공유

{% data variables.location.product_location_enterprise %}의 엔터프라이즈 계정을 {% data variables.product.prodname_dotcom_the_website %}의 엔터프라이즈 계정에 연결하여 {% data variables.product.prodname_dotcom_the_website %}의 {% data variables.product.prodname_enterprise %} 구독에 대한 라이선스 사용량 세부 정보를 볼 수도 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_server %} 설명서에서 {% ifversion ghec %}“[{% data variables.product.prodname_ghe_server %} 및 {% data variables.product.prodname_ghe_cloud %} 간 라이선스 사용 현황 동기화](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”를 참조하세요.{% elsif ghes %}“[{% data variables.product.prodname_ghe_server %} 및 {% data variables.product.prodname_ghe_cloud %} 간 라이선스 사용 현황 동기화](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).”{% endif %}

{% data variables.product.prodname_ghe_cloud %} 및 {% data variables.product.prodname_ghe_server %}의 차이점에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 제품](/get-started/learning-about-github/githubs-products)”을 참조하세요. {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

## 엔터프라이즈 계정에 대한 청구 정보

엔터프라이즈 계정에 대한 청구서에는 엔터프라이즈의 각 멤버에 대한 월별 비용이 포함됩니다. 이 청구서에는 엔터프라이즈 계정 외부 조직의 모든 유료 라이선스{% ifversion ghec %}가 포함됩니다. {% data variables.product.prodname_marketplace %}, {% endif %}{% ifversion ghec or ghae %}엔터프라이즈에 대한 추가 유료 서비스{% ifversion ghec %}의 앱에 대한 구독은 {% data variables.large_files.product_name_long %},{% endif %} 및 {% endif %} 사용 현황에 대한 {% data variables.product.prodname_GH_advanced_security %}에 대한 데이터 팩과 같습니다.

{% ifversion ghec %}

{% data variables.product.prodname_ghe_cloud %} 구독에 대한 청구의 자세한 내용은 “[엔터프라이즈 계정의 구독 및 사용 현황 보기](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)” 및 “[엔터프라이즈에 대한 청구 정보](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”를 참조하세요.

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

{% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}에 대한 청구의 자세한 내용은 “[엔터프라이즈에 대한 청구 정보](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”를 참조하세요.

{% endif %}

{% ifversion ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.prodname_enterprise %}는 두 가지 배포 옵션을 제공합니다. {% data variables.product.prodname_ghe_cloud %} 외에도 {% data variables.product.prodname_ghe_server %}를 사용하여 데이터 센터 또는 지원되는 클라우드 공급자에서 엔터프라이즈에 대한 개발 작업을 호스트할 수 있습니다. {% endif %}{% data variables.product.prodname_dotcom_the_website %}의 Enterprise 소유자는 엔터프라이즈 계정을 사용하여 {% data variables.product.prodname_ghe_server %} 인스턴스에 대한 결제 및 라이선스를 관리할 수 있습니다. 자세한 내용은 “[{% data variables.product.company_short %}의 제품](/get-started/learning-about-github/githubs-products#github-enterprise)” 및 “[{% data variables.product.prodname_enterprise %}에 대한 라이선스 관리](/billing/managing-your-license-for-github-enterprise)”를 참조하세요.

{% endif %}

## 추가 참고 자료

- GraphQL API 설명서의 “[엔터프라이즈 계정](/graphql/guides/managing-enterprise-accounts)”
