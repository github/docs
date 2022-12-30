---
title: 엔터프라이즈에서의 역할
intro: 엔터프라이즈의 모든 사용자가 엔터프라이즈의 멤버입니다. 엔터프라이즈의 설정 및 데이터에 대한 액세스를 제어하려면 엔터프라이즈 구성원에게 다른 역할을 할당할 수 있습니다.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
ms.openlocfilehash: 10787e2326f2bb3c4768c5e499d445f65cf9e57d
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: '146178457'
---
## 엔터프라이즈에서의 역할 정보

엔터프라이즈의 모든 사용자가 엔터프라이즈의 멤버입니다. 엔터프라이즈 멤버에게 관리 역할을 할당할 수도 있습니다. 각 관리자 역할은 비즈니스 기능에 매핑되며 엔터프라이즈 내에서 특정 작업을 수행할 수 있는 권한을 제공합니다.

{% data reusables.enterprise-accounts.enterprise-administrators %}

{% ifversion ghec %} 엔터프라이즈에서 {% data variables.product.prodname_emus %}을(를) 사용하지 않는 경우, 사용자가 제어하는 {% data variables.product.product_name %}의 사용자 계정을 사용하여 관리자 역할에 누군가를 초대할 수 있습니다. 자세한 내용은 “[엔터프라이즈를 관리할 사용자 초대](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)”를 참조하세요.

{% data variables.product.prodname_emus %}을(를) 사용하는 엔터프라이즈에서는 ID 공급자를 통해 새 소유자와 멤버를 프로비전해야 합니다. 엔터프라이즈 소유자 및 조직 소유자는 {% data variables.product.prodname_dotcom %}을(를) 사용하여 새 멤버 또는 소유자를 엔터프라이즈에 추가할 수 없습니다. IdP를 사용하여 멤버의 엔터프라이즈 역할을 선택할 수 있으며 {% data variables.product.prodname_dotcom %}에서 변경할 수 없습니다. {% data variables.product.prodname_dotcom %}에서 조직의 멤버 역할을 선택할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”를 참조하세요.
{% else %} 엔터프라이즈에 사용자를 추가하는 방법에 대한 자세한 내용은 “[인증](/admin/authentication)”을 참조하세요.

{% endif %}

## 엔터프라이즈 소유자

엔터프라이즈 소유자는 엔터프라이즈를 완전히 제어할 수 있으며 다음을 포함한 모든 조치를 취할 수 있습니다.
- 관리자 관리
- 엔터프라이즈에서{% ifversion remove-enterprise-members %} 조직{% ifversion ghec %}{% elsif ghae or ghes %}{% endif %} {% ifversion ghec %}추가 및 제거{% elsif ghae or ghes %}Managing{% endif %}
- 엔터프라이즈가 소유한 모든 조직에서 엔터프라이즈 멤버 제거{% endif %}
- 엔터프라이즈 설정 관리
- 조직 전체에서 정책 적용 {% ifversion ghec %}- 청구 설정 관리{% endif %}

{% ifversion enterprise-owner-join-org %} 엔터프라이즈 소유자는 기본적으로 조직 설정 또는 콘텐츠에 액세스할 수 없습니다. 액세스 권한을 얻기 위해 엔터프라이즈 소유자는 엔터프라이즈가 소유한 모든 조직에 가입할 수 있습니다. 자세한 내용은 “[엔터프라이즈가 소유한 조직에서 역할 관리](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)”를 참조하세요.

엔터프라이즈 내 조직 소유자는 엔터프라이즈 소유자가 아닌 이상 엔터프라이즈 자체에 액세스할 수 없습니다.
{% else %} 엔터프라이즈 소유자는 조직 소유자가 되거나 조직이 소유한 리포지토리에 직접 액세스할 수 없는 한 조직 설정 또는 콘텐츠에 액세스할 수 없습니다. 마찬가지로 엔터프라이즈 내 조직 소유자는 엔터프라이즈 소유자가 아닌 이상 엔터프라이즈 자체에 액세스할 수 없습니다.
{% endif %}

엔터프라이즈 소유자는 엔터프라이즈 내에서 하나 이상의 조직의 소유자 또는 멤버인 경우에만 라이선스를 사용합니다. 기업 소유자가 여러 조직에서 역할을 하더라도 하나의 라이선스를 사용합니다. {% ifversion ghec %} 엔터프라이즈 소유자는 {% data variables.product.prodname_dotcom %}에 대한 개인 계정이 있어야 합니다.{% endif %} 모범 사례로, 비즈니스 위험을 줄이기 위해 회사의 엔터프라이즈 소유자는 소수로 구성하는 것이 좋습니다.

## 엔터프라이즈 멤버

엔터프라이즈가 소유한 조직의 멤버도 자동으로 엔터프라이즈 멤버입니다. 멤버는 조직에서 공동 작업할 수 있으며 조직 소유자일 수 있지만, 청구 설정{% endif %}을 포함하여 엔터프라이즈 설정{% ifversion ghec %}에 액세스하거나 구성할 수 없습니다.

엔터프라이즈의 사용자는 엔터프라이즈가 소유한 다양한 조직과 해당 조직 내의 리포지토리에 대한 액세스 수준이 다를 수 있습니다. 각 사용자가 액세스할 수 있는 리소스를 볼 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 사용자 보기](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)”를 참조하세요.

조직 수준의 사용 권한에 대한 자세한 내용은 “[조직 내 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요.

조직에서 소유한 리포지토리에 대한 외부 협력자 액세스 권한이 있는 사용자도 엔터프라이즈의 사용자 탭에 나열되지만 엔터프라이즈 멤버가 아니며 엔터프라이즈에 액세스할 수 없습니다. 외부 협력자에 대한 자세한 내용은 “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)”을 참조하세요.

{% ifversion ghec %}

## 청구 관리자

청구 관리자는 엔터프라이즈의 청구 설정에만 액세스할 수 있습니다. 엔터프라이즈의 청구 관리자는 다음을 수행할 수 있습니다.
- 사용자 라이선스, {% data variables.large_files.product_name_short %} 팩 및 기타 청구 설정 보기 및 관리
- 청구 관리자 목록 보기
- 다른 청구 관리자 추가 또는 제거

청구 관리자는 엔터프라이즈 내에서 하나 이상의 조직의 소유자 또는 멤버인 경우에만 라이선스를 사용합니다. 청구 관리자는 엔터프라이즈의 조직 또는 리포지토리에 액세스할 수 없으며 엔터프라이즈 소유자를 추가하거나 제거할 수 없습니다. 청구 관리자는 {% data variables.product.prodname_dotcom %} 개인 계정이 있어야 합니다.

## 지원 자격 정보

{% data reusables.enterprise-accounts.support-entitlements %}

## 추가 참고 자료

- “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”

{% endif %}
