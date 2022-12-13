---
title: 엔터프라이즈에서 사용자 보기
intro: 엔터프라이즈 소유 리소스에 대한 액세스 또는 사용자 라이선스 사용량을 감사하기 위해 엔터프라이즈 소유자는 엔터프라이즈의 모든 엔터프라이즈 관리자 및 멤버를 볼 수 있습니다.
permissions: Enterprise owners can view the people in an enterprise.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
ms.openlocfilehash: 1c9b8402a0924c799f4747cf5a6cdae051aa4a49
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120595'
---
## 엔터프라이즈 사용자 목록 정보

엔터프라이즈 리소스에 대한 액세스를 감사하고 라이선스 사용을 관리하기 위해 엔터프라이즈에 액세스할 수 있는 모든 사용자의 목록을 볼 수 있습니다. 

현재 모든 엔터프라이즈 멤버 및 엔터프라이즈 관리자{% ifversion ghec %}뿐만 아니라 멤버 및 관리자가 되기 위해 보류 중인 초대를 볼 수 있습니다{% endif %}. 이 정보를 더 쉽게 사용할 수 있도록 목록을 검색하고 필터링할 수 있습니다.

{% ifversion ghec %}

엔터프라이즈에 대해 {% data variables.product.prodname_github_connect %}이(가) 구성된 경우 엔터프라이즈의 사용자 목록을 필터링할 때 다음 제한 사항이 적용됩니다.

- 2FA(2단계 인증) 상태에 대한 필터는 {% data variables.product.prodname_ghe_server %} 인스턴스에만 계정이 있는 사용자를 표시하지 않습니다.
- {% data variables.product.prodname_ghe_server %} 인스턴스의 계정에 대한 필터를 조직의 필터 또는 2FA 상태와 결합하면 결과가 표시되지 않습니다.

{% data variables.product.prodname_github_connect %}에 대한 자세한 내용은 다음 문서를 참조하세요.

- {% data variables.product.prodname_ghe_server %} 설명서의 “[{% data variables.product.prodname_github_connect %} 정보](/enterprise-server/admin/configuration/configuring-github-connect/about-github-connect)”
- {% data variables.product.prodname_ghe_managed %} 설명서의 “[{% data variables.product.prodname_github_connect %} 정보](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect)”

{% endif %}

{% ifversion enterprise-member-csv %} 엔터프라이즈에 대한 멤버 자격 정보를 내보낼 수도 있습니다. 자세한 내용은 "[엔터프라이즈에 대한 멤버 자격 정보 내보내기"를 참조하세요](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise).
{% endif %}

## 엔터프라이즈 관리자 보기

현재 엔터프라이즈 소유자{% ifversion ghec %} 및 청구 관리자{% endif %}를 모두 볼 수 있습니다.{% ifversion enterprise-membership-view-improvements %} 각 관리자{% ifversion ghec %}에 대한 유용한 정보를 확인하고 역할{% endif %}을 기준으로 목록을 필터링할 수 있습니다.{% endif %} 사용자 이름 또는 표시 이름을 검색하여 특정 사용자를 찾을 수 있습니다.

{% ifversion ghes > 3.5 %} 계정이 일시 중단된 엔터프라이즈 소유자는 엔터프라이즈 관리자 목록에 포함되며 일시 중단된 것으로 식별됩니다. 표시되는 일시 중단된 소유자의 권한을 강등하는 것이 좋습니다. 자세한 내용은 “[사이트 관리자 승격 또는 강등](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator#demoting-a-site-administrator-from-the-enterprise-settings)”을 참조하세요.
{% endif %}

{% ifversion not ghae %} 관리자를 제거할 수도 있습니다. 자세한 내용은 “[엔터프라이즈를 관리할 사용자 초대](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account)”를 참조하세요.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}

## 멤버 {% ifversion enterprise-membership-view-improvements %}{% else %}및 외부 협력자{% endif %} 보기

엔터프라이즈의 모든 현재 멤버{% ifversion enterprise-membership-view-improvements %}{% else %} 또는 외부 협력자{% endif %}를 볼 수 있습니다. 각 계정에 대한 유용한 정보를 확인하고 역할 기준과 같은 유용한 방법으로 목록을 필터링할 수 있습니다. 사용자 이름 또는 표시 이름을 검색하여 특정 사용자를 찾을 수 있습니다.

사용자의 이름을 클릭하면 해당 사용자가 속한 조직과 같이 엔터프라이즈에 대한 사용자 액세스의 자세한 정보를 볼 수 있습니다.

{% ifversion remove-enterprise-members %} 엔터프라이즈가 소유한 모든 조직에서 엔터프라이즈 멤버를 제거할 수도 있습니다. 자세한 내용은 “[엔터프라이즈에서 멤버 제거](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)”를 참조하세요.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}{% ifversion enterprise-membership-view-improvements %}{% else %}
1. 필요에 따라 구성원 목록이 아닌 외부 협력자 목록을 보려면 **외부 협력자** 를 클릭합니다.

   ![엔터프라이즈 멤버 페이지의 외부 협력자 탭](/assets/images/help/business-accounts/outside-collaborators-tab.png){% endif %}

{% ifversion enterprise-membership-view-improvements %}
## 외부 협력자 보기

엔터프라이즈의 모든 현재 외부 협력자를 볼 수 있습니다. 각 협력자에 대한 유용한 정보를 확인하고 조직 기준과 같은 유용한 방법으로 목록을 필터링할 수 있습니다. 사용자 이름 또는 표시 이름을 검색하여 특정 협력자를 찾을 수 있습니다.

협력자가 액세스할 수 있는 모든 리포지토리 목록과 같이 해당 사용자의 이름을 클릭하여 해당 사용자의 엔터프라이즈 액세스에 대한 자세한 정보를 볼 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. “사람”에서 **외부 협력자** 를 클릭합니다.

  ![엔터프라이즈 설정 사이드바의 외부 협력자 탭]{% ifversion ghec%}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% else %}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% endif %}
  
{% endif %}

{% ifversion ghec %}
## 보류 중인 초대 보기

엔터프라이즈의 멤버, 관리자 또는 외부 협력자가 되기 위해 보류 중인 모든 초대를 볼 수 있습니다. 조직 기준과 같은 유용한 방법으로 목록을 필터링할 수 있습니다. 사용자 이름 또는 표시 이름을 검색하여 특정 사용자를 찾을 수 있습니다.

보류 중인 멤버 목록에서 개별 계정에 대해 엔터프라이즈가 소유한 조직에 가입하기 위한 모든 초대를 취소할 수 있습니다. 동일한 사람이 엔터프라이즈 관리자 또는 외부 협력자가 되도록 하기 위한 초대는 취소되지 않습니다. 

{% note %}

**참고:** SCIM을 통해 초대를 프로비저닝한 경우 {% data variables.product.prodname_dotcom %}가 아닌 IdP(ID 공급자)를 통해 초대를 취소해야 합니다.

{% endnote %}

{% data variables.visual_studio.prodname_vss_ghe %}를 사용하는 경우 보류 중인 초대 목록에는 구독자에게 조직에 가입할 보류 중인 초대가 없더라도 {% data variables.product.prodname_dotcom %}에서 조직에 가입하지 않은 모든 {% data variables.product.prodname_vs %} 구독자가 포함됩니다. {% data variables.product.prodname_vs %} 구독자가 {% data variables.product.prodname_enterprise %}에 액세스하는 방법에 대한 자세한 내용은 "[{% data variables.visual_studio.prodname_vss_ghe %} 설정](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)"을 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. “사람”에서 **보류 중인 초대** 를 클릭합니다.

   ![사이드바의 “보류 중인 초대” 탭 스크린샷](/assets/images/help/enterprises/pending-invitations-tab.png)
1. 필요에 따라 계정의 모든 초대를 취소하여 엔터프라이즈가 소유한 조직에 가입하려면 계정 오른쪽에 있는 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음 **초대 취소** 를 클릭합니다.

   ![“초대 취소” 단추의 스크린샷](/assets/images/help/enterprises/cancel-enterprise-member-invitation.png)
1. 필요에 따라 엔터프라이즈 관리자 또는 외부 협력자에 대해 보류 중인 초대를 보려면 “보류 중인 멤버”에서 **관리자** 또는 **외부 협력자** 를 클릭합니다.

   ![“멤버”, “관리자”, “외부 협력자” 탭의 스크린샷](/assets/images/help/enterprises/pending-invitations-type-tabs.png)

## {% data variables.enterprise.prodname_emu_enterprise %}에서 일시 중단된 멤버 보기

엔터프라이즈에서 {% data variables.product.prodname_emus %}을(를) 사용하는 경우 일시 중단된 사용자를 볼 수 있습니다. 일시 중단된 사용자는 are members who have been deprovisioned after being unassigned from the {% data variables.product.prodname_emu_idp_application %} 애플리케이션에서 할당이 취소되거나 ID 공급자에서 삭제된 후 프로비전이 해제된 멤버입니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)”를 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. 일시 중단된 멤버 목록을 보려면 활성 멤버 목록 위에서 **일시 중단** 을 클릭합니다.
  ![“일시 중단된” 옵션을 보여 주는 스크린샷](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## 휴면 사용자 보기

{% ifversion ghes or ghae %}일시 중단되지 않았고 {% endif %}사이트 관리자가 아닌 모든 휴면 사용자의 목록을 볼 수 있습니다. {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} 자세한 내용은 “[휴면 사용자 관리](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)”를 참조하세요.

{% ifversion filter-by-enterprise-member-type %}
## {% data variables.enterprise.prodname_emu_enterprise %}{% endif %}에서 멤버 유형{% ifversion ghec %}을 기준으로 필터링

{% ifversion ghec %} 엔터프라이즈에서 {% data variables.product.prodname_emus %}을(를) 사용하는 경우{% elsif ghes or ghae %}{% endif %}는 형식별로 조직의 구성원 목록을 필터링하여 멤버 자격이 IdP를 통해 관리되는지 또는 직접 관리되는지 확인할 수 있습니다. IdP를 통해 관리되는 멤버 자격은 IdP 그룹을 통해 추가되었으며 IdP 그룹은 조직 내의 팀에 연결되었습니다. 직접 관리되는 멤버 자격이 조직에 수동으로 추가되었습니다. 조직에서 멤버 자격을 관리되는 방식에 따라 제거 방법을 결정합니다. 이 필터를 사용하여 구성원을 조직에 추가한 방법을 확인할 수 있으므로 멤버를 제거하는 방법을 알 수 있습니다. {% ifversion ghec %} 자세한 내용은 "[{% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users#about-organization-membership-management)정보"를 참조하세요. {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. 검색 창의 "조직"에서 조직이 검색 결과에 나타날 때까지 조직의 이름을 입력하기 시작한 다음 조직의 이름을 클릭합니다.
   ![조직 검색 필드 스크린샷](/assets/images/help/enterprises/organization-search.png)
1. 조직 이름 아래에서 {% octicon "person" aria-label="The Person icon" %} **사람** 클릭합니다.
   ![사람 탭의 스크린샷](/assets/images/help/enterprises/emu-organization-people-tab.png)
1. 멤버 목록 위에서 **형식** 을 클릭한 다음 보려는 멤버 유형을 선택합니다.
   !["형식" 단추의 스크린샷](/assets/images/help/enterprises/filter-by-member-type.png)

{% endif %}

{% ifversion ghec or ghes %}
## 확인된 도메인에서 메일 주소가 없는 멤버 보기

{% data variables.product.prodname_dotcom_the_website %}에서 사용자 계정과 연결된 확인된 도메인의 메일 주소가 없는 엔터프라이즈의 멤버 목록을 볼 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. “알림 기본 설정”에서 {% octicon "eye" aria-label="The github eye icon" %} **승인되거나 확인된 도메인 메일 없이 엔터프라이즈 멤버 보기** 링크를 클릭합니다.
{% endif %}

## 추가 참고 자료

- “[엔터프라이즈에서의 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”
