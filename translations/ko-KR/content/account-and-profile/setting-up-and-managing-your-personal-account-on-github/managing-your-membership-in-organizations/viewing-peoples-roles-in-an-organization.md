---
title: 조직에서 사용자의 역할 보기
intro: '조직의 사용자 목록을 보고 해당 역할별로 필터링할 수 있습니다. 조직 소유자에 대한 자세한 내용은 “[조직 내 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요.'
permissions: Organization members can see people's roles in the organization.
redirect_from:
  - /articles/viewing-people-s-roles-in-an-organization
  - /articles/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: View people in an organization
ms.openlocfilehash: e0632ffeb394615b7b64ad55673b69fc738bca27
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179633'
---
## 조직 역할 보기

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 조직의 사용자 목록이 표시됩니다. 역할별로 목록을 필터링하려면 **역할** 을 클릭하고 검색할 역할을 선택합니다.
  ![click-role](/assets/images/help/organizations/view-list-of-people-in-org-by-role.png)

{% ifversion fpt %}

조직에서 {% data variables.product.prodname_ghe_cloud %}를 사용하는 경우 모든 엔터프라이즈 조직의 청구 설정 및 정책을 관리하는 엔터프라이즈 소유자도 볼 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization#view-enterprise-owners-and-their-roles-in-an-organization)를 참조하세요.

{% endif %}

{% ifversion enterprise-owners-visible-for-org-members %}
## 조직에서 엔터프라이즈 소유자 및 해당 역할 보기

조직이 엔터프라이즈 계정으로 관리되는 경우 모든 엔터프라이즈 조직의 청구 설정 및 정책을 관리하는 엔터프라이즈 소유자를 볼 수 있습니다. 엔터프라이즈 계정에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정 유형](/get-started/learning-about-github/types-of-github-accounts)”을 참조하세요.

엔터프라이즈 소유자가 조직에서 특정 역할을 하는지 여부를 확인할 수도 있습니다. 엔터프라이즈 소유자는 조직 멤버거나 다른 조직 역할이 있거나 조직과 관련이 없을 수도 있습니다.

{% note %}

**참고:** 조직 소유자인 경우 조직에서 역할을 하도록 엔터프라이즈 소유자를 초대할 수 있습니다. 엔터프라이즈 소유자가 초대를 수락하면 조직의 사용자 또는 라이선스가 엔터프라이즈에 대해 사용 가능한 라이선스에서 사용됩니다. 라이선스 작동 방식에 대한 자세한 내용은 “[엔터프라이즈에서의 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)”을 참조하세요.

{% endnote %}

| **엔터프라이즈 역할** | **조직 역할** | **조직 액세스 또는 영향** |
|----|----|----|----|
| 엔터프라이즈 소유자 | 관련이 없거나 공식적인 조직 역할이 없음 | 조직 콘텐츠 또는 리포지토리에 액세스할 수 없지만 조직에 영향을 미치는 엔터프라이즈 설정 및 정책을 관리합니다. |
| 엔터프라이즈 소유자 | 조직 소유자 | 팀 등을 통해 조직 설정을 구성하고 조직 리소스에 대한 액세스를 관리할 수 있습니다. | 
| 엔터프라이즈 소유자 | 조직 멤버 | 조직의 설정에 액세스하지 않으면서도 리포지토리와 같은 조직 리소스 및 콘텐츠에 액세스할 수 있습니다. |

조직의 모든 역할을 검토하려면 “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요. {% ifversion custom-repository-roles %} 조직 구성원은 특정 리포지토리에 대한 사용자 지정 역할을 할 수도 있습니다. 자세한 내용은 “[조직의 사용자 지정 리포지토리 역할 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”를 참조하세요.{% endif %}

엔터프라이즈 소유자 역할에 대한 자세한 내용은 “[엔터프라이즈에서의 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)”을 참조하세요. 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 왼쪽 사이드바의 “엔터프라이즈 권한”에서 **엔터프라이즈 소유자** 를 클릭합니다.
  ![사이드바 메뉴의 “Enterprise 소유자” 옵션 스크린샷](/assets/images/help/organizations/enterprise-owners-sidebar.png)
5. 엔터프라이즈의 엔터프라이즈 소유자 목록을 봅니다. 엔터프라이즈 소유자도 조직의 멤버인 경우 조직에서 엔터프라이즈 소유자 역할을 확인할 수 있습니다.

  ![조직의 엔터프라이즈 소유자 및 역할 목록 스크린샷](/assets/images/help/organizations/enterprise-owners-list-on-org-page.png)

{% endif %}
