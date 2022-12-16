---
title: 엔터프라이즈를 관리할 사용자 초대
intro: '{% endif %}엔터프라이즈 계정에 엔터프라이즈 소유자를 {% elsif ghes %}추가하기 위해 엔터프라이즈 소유자 또는 청구 관리자가 되도록 사람들을 {% ifversion ghec %}i초대할 수 있습니다. {% endif %}엔터프라이즈 계정에 더 이상 액세스할 필요가 없는 엔터프라이즈 소유자 {% ifversion ghec %}또는 청구 관리자를 제거할 수도 있습니다.'
permissions: 'Enterprise owners can {% ifversion ghec %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Invite people to manage
ms.openlocfilehash: 7cdbee6f1b37a8300f3523712c6e0dda4293af74
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180449'
---
## 엔터프라이즈 계정을 관리할 수 있는 사용자 정보

{% data reusables.enterprise-accounts.enterprise-administrators %} 자세한 내용은 "[엔터프라이즈에서의 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)"을 참조하세요.

{% ifversion ghes %}

{% data variables.product.prodname_dotcom_the_website %}에서 엔터프라이즈 계정의 소유자 및 청구 관리자를 관리하려면 {% data variables.product.prodname_ghe_cloud %} 설명서에서 "[엔터프라이즈를 관리할 사용자 초대](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)"를 참조하세요.

{% endif %}

{% ifversion ghec %}

엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하는 경우 엔터프라이즈 소유자는 ID 공급자를 통해서만 추가하거나 제거할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”를 참조하세요.

{% endif %}

{% tip %}

**팁:** 엔터프라이즈 계정이 소유한 조직 내에서 사용자를 관리하는 자세한 방법은 "[조직의 구성원 자격 관리](/articles/managing-membership-in-your-organization)" 및 "[역할을 사용하여 조직에 대한 사용자 액세스 관리](/articles/managing-peoples-access-to-your-organization-with-roles)"를 참조하세요.

{% endtip %}

## 엔터프라이즈 관리자를 엔터프라이즈 계정에 {% ifversion ghec %}초대{% elsif ghes %}추가{% endif %}

{% ifversion ghec %}엔터프라이즈 계정에 가입하도록 누군가를 초대했다면, 초대받은 사람은 이메일로 전송된 초대를 수락해야 엔터프라이즈 계정에 액세스할 수 있습니다. 보류 중인 초대는 7일 후에 만료됩니다.{% endif %}

{% ifversion enterprise-membership-view-improvements %} 보류 중인 모든 초대를 확인하여 엔터프라이즈 계정의 관리자가 될 수 있습니다. 자세한 내용은 “[엔터프라이즈의 사용자 보기](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-pending-invitations)”를 참조하세요.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. 관리자 목록 위에서 {% ifversion ghec %}**관리자 초대**{% elsif ghes %}**소유자 추가**{% endif %}를 클릭합니다.
  {% ifversion ghec %} ![엔터프라이즈 소유자 목록 위에 있는 "관리자 초대" 단추](/assets/images/help/business-accounts/invite-admin-button.png) {% elsif ghes %} ![엔터프라이즈 소유자 목록 위에 있는 "관리자 추가" 단추](/assets/images/help/business-accounts/add-owner-button.png) {% endif %}
1. 엔터프라이즈 관리자가 되도록 초대할 사용자의 사용자 이름, 전체 이름 또는 전자 메일 주소를 입력한 다음 결과에서 적절한 사용자를 선택합니다.
  ![사용자의 사용자 이름, 전체 이름 또는 전자 메일 주소를 입력할 필드가 있는 모달 상자 및 초대 단추](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion ghec %}
1. **소유자** 또는 **청구 관리자** 를 선택합니다.
  ![역할 선택지가 있는 모달 상자](/assets/images/help/business-accounts/invite-admins-roles.png)
1. **초대 보내기** 를 클릭합니다.
  ![초대 보내기 단추](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. **추가** 를 클릭합니다.
  !["추가" 단추](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## 엔터프라이즈 계정에서 엔터프라이즈 관리자 제거

엔터프라이즈 소유자만 엔터프라이즈 계정에서 다른 엔터프라이즈 관리자를 제거할 수 있습니다.

{% ifversion ghec %} 제거하려는 관리자가 엔터프라이즈가 소유한 조직의 구성원인 경우 **구성원으로 변환** 을 선택하면 관리 역할이 제거하지만 조직 구성원 자격은 유지됩니다. **엔터프라이즈에서 제거** 를 선택하면 관리 역할과 조직 구성원 자격이 모두 제거됩니다.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. 제거할 사용자의 사용자 이름 옆에 있는 {% octicon "gear" aria-label="The Settings gear" %}를 클릭한 다음 {% ifversion ghes %}**소유자 제거**{% elsif ghec %}**구성원으로 변환** 이나 **엔터프라이즈에서 제거** 를 클릭합니다.{% endif %}
  {% ifversion ghec %} ![엔터프라이즈 관리자를 제거하는 메뉴 옵션이 있는 설정 기어](/assets/images/help/business-accounts/remove-admin.png) {% elsif ghes %} ![엔터프라이즈 관리자를 제거하는 메뉴 옵션이 있는 설정 기어](/assets/images/help/business-accounts/ghes-remove-owner.png) {% endif %}
1. 확인을 읽은 다음 {% ifversion ghes %}**소유자 제거**{% elsif ghec %}**예, USERNAME을 구성원으로 변환합니다** 를 클릭합니다{% endif %}.
