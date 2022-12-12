---
title: 엔터프라이즈에서 리포지토리 관리 정책 적용
intro: 엔터프라이즈 조직 내에서 리포지토리 관리에 대한 정책을 적용하거나 각 조직에서 정책을 설정하도록 허용할 수 있습니다.
permissions: Enterprise owners can enforce policies for repository management in an enterprise.
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings
  - /enterprise/admin/articles/setting-git-push-limits
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/block-force-pushes
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Repositories
  - Security
shortTitle: Repository management policies
ms.openlocfilehash: 10b34ef1d0049ca68e1b0ec655f9d6351c06d396
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192643'
---
## 엔터프라이즈의 리포지토리 관리에 대한 정책 정보

{% data variables.product.product_name %}에서 엔터프라이즈 구성원이 리포지토리를 관리하는 방법을 제어하는 정책을 적용할 수 있습니다. 또한 조직 소유자가 리포지토리 관리에 대한 정책을 관리하도록 허용할 수 있습니다. 자세한 내용은 “[리포지토리 만들기 및 관리](/repositories/creating-and-managing-repositories)” 및 “[조직 및 팀](/organizations)”을 참조하세요.

{% ifversion ghes or ghae %}

## 새 리포지토리의 기본 표시 여부 구성

다른 사람이 엔터프라이즈 내에서 새 리포지토리를 만들 때마다 사용자는 리포지토리에 대한 표시 여부를 선택해야 합니다. 엔터프라이즈에 대한 기본 표시 여부 설정을 구성하는 경우 기본적으로 선택되는 표시 여부를 선택합니다. 리포지토리 표시 여부에 대한 자세한 내용은 “[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”를 참조하세요.

엔터프라이즈 소유자가 구성원이 특정 유형의 리포지토리를 만드는 것을 허용하지 않는 경우, 구성원은 표시 여부 설정이 해당 유형으로 기본값인 경우에도 이 리포지토리를 만들 수 없습니다. 자세한 내용은 “[리포지토리 만들기에 대한 정책 설정](#enforcing-a-policy-for-repository-creation)”을 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. “기본 리포지토리 표시 여부”에서 드롭다운 메뉴를 사용하고 기본 표시 여부를 선택합니다.
  ![엔터프라이즈의 기본 리포지토리 표시 여부를 선택하는 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

{% endif %}

## 기준 리포지토리 권한에 정책 적용

엔터프라이즈가 소유한 모든 조직에서 조직 구성원에 대해 기본 리포지토리 권한 수준(없음, 읽기, 쓰기 또는 관리자)을 설정하거나 소유자가 조직 수준에서 설정을 관리하도록 허용할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
4. “기본 권한”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. “기본 권한”에서 드롭다운 메뉴를 사용하여 정책을 선택합니다.
  ![리포지토리 권한 정책 옵션이 있는 드롭다운 메뉴](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)


## 리포지토리 만들기에 대한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 구성원이 리포지토리를 만들거나 리포지토리 만들기를 조직 소유자로 제한, 또는 소유자가 조직 수준에서 설정을 관리하도록 허용할 수 있습니다. 

구성원이 조직에서 리포지토리를 만들 수 있도록 허용하는 경우 구성원이 만들 수 있는 리포지토리 유형(퍼블릭, 프라이빗 및 내부)을 선택할 수 있습니다.

{% ifversion enterprise-namespace-repo-setting %} {% ifversion ghec %} 엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하는 경우 {% else %}{% endif %}사용자가 자신의 사용자 계정이 소유한 리포지토리를 만들지 못하게 할 수도 있습니다.
{% endif %}

{% data reusables.repositories.internal-repo-default %} 내부 리포지토리에 대한 자세한 내용은 “[내부 리포지토리 만들기](/articles/creating-an-internal-repository)”를 참조하세요.

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. “리포지토리 만들기”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %} {% data reusables.enterprise-accounts.repo-creation-policy %} {% data reusables.enterprise-accounts.repo-creation-types %}{% ifversion enterprise-namespace-repo-setting %}
1. 필요에 따라 {% ifversion ghec %}엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하고{% endif %} 엔터프라이즈 구성원이 사용자 계정이 소유한 리포지토리를 만들지 못하도록 를 사용하려는 경우 **Block the creation of user namespace repositories**(사용자 네임스페이스 리포지토리 만들기 차단)를 선택합니다.
  ![정책 포크에서 비활성화된 옵션 목록을 보여 주는 스크린샷](/assets/images/help/business-accounts/restrict-personal-namespace-enabled-setting.png){% endif %}

## 프라이빗 또는 내부 리포지토리 포크에 대한 정책 적용
엔터프라이즈가 소유한 모든 조직에서 프라이빗 또는 내부 리포지토리에 액세스할 수 있는 사용자가 리포지토리를 포크하도록 허용하거나 허용하지 않을 수 있으며, 또는 소유자가 조직 수준에서 설정을 관리하도록 허용할 수 있습니다.

{% ifversion org-owners-limit-forks-creation %} 관리자 권한이 있는 사람 보다 세분화된 포크 정책을 설정할 수 있습니다. 자세한 내용은 “[조직의 포크 정책 관리](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)”를 참조하세요.
{% endif %}

{% ifversion enterprise-namespace-repo-setting %} {% note %}

**참고:** {% ifversion ghec %}엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하고{% endif %} “리포지토리 만들기” 정책이 엔터프라이즈 구성원이 자신의 사용자 계정이 소유한 리포지토리를 만들지 못하게 하는 경우 구성원은 “리포지토리 포크” 정책에 관계없이 해당 사용자 계정의 리포지토리를 포크할 수 없습니다.

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. “리포지토리 포크”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
2. "리포지토리 포크"에서 드롭다운 메뉴를 사용하고 정책을 선택합니다.

  ![리포지토리 포크 정책 옵션이 있는 드롭다운 메뉴](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png){% ifversion innersource-fork-policies %}
5. 포크를 사용하는 경우 사용자가 리포지토리를 포크할 수 있는 위치를 지정할 수 있습니다. 설정 변경에 대한 정보를 검토하고 정책을 선택합니다.

    ![리포지토리 포크 정책 옵션 목록을 보여 주는 스크린샷](/assets/images/help/business-accounts/repository-forking-policy-settings.png){% endif %}
  
## 리포지토리에 {% endif %}외부{% ifversion ghec %} 협력자를 초대하기 위한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 구성원이 {% ifversion ghec %}외부{% endif %} 협력자를 리포지토리에 초대하거나 {% ifversion ghec %}외부{% endif %} 협력자 초대를 조직 소유자로 제한할 수 있으며, {% ifversion prevent-org-admin-add-outside-collaborator %}{% ifversion ghec %}외부 협력자 {% endif %}초대를 엔터프라이즈 소유자로 제한하거나 {% endif %}조직 소유자가 조직 수준에서 설정을 관리할 수 있도록 허용할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
3. “리포지토리 {% ifversion ghec %}외부 협력자{% elsif ghes or ghae %}초대{% endif %}”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. “리포지토리 {% ifversion ghec %}외부 협력자{% elsif ghes or ghae %}초대{% endif %}”에서 드롭다운 메뉴를 사용하여 정책을 선택합니다.

  {% ifversion ghec %} ![외부 협력자 초대 정책 옵션이 있는 드롭다운 메뉴](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png) {% elsif ghes or ghae %} ![초대 정책 옵션이 있는 드롭다운 메뉴](/assets/images/enterprise/business-accounts/repository-invitation-policy-drop-down.png)  
  {% endif %}

## 기본 분기 이름에 대한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 구성원이 만드는 모든 새 리포지토리의 기본 분기 이름을 설정할 수 있습니다. 모든 조직에서 이 기본 분기 이름을 적용하거나 개별 조직에서 다른 분기 이름을 설정하도록 허용할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. **리포지토리 정책** 탭의 “기본 분기 이름”에서 새 리포지토리가 사용해야 하는 기본 분기 이름을 입력합니다.
    ![기본 분기 이름을 입력하기 위한 텍스트 상자](/assets/images/help/business-accounts/default-branch-name-text.png)
4. 필요에 따라 이 엔터프라이즈의 모든 조직에 기본 분기 이름을 적용하려면 **이 엔터프라이즈 전체에서 적용** 을 선택합니다.
    ![적용 확인란](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. **업데이트** 를 클릭합니다.
    ![업데이트 단추](/assets/images/help/business-accounts/default-branch-name-update.png)

## 리포지토리 표시 여부 변경에 대한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 관리자 액세스 권한이 있는 구성원이 리포지토리의 표시 여부를 변경하거나 리포지토리 표시 여부 변경을 조직 소유자로 제한할 수 있으며 또는 소유자가 조직 수준에서 설정을 관리하도록 허용할 수 있습니다. 구성원이 리포지토리 표시 여부를 변경하지 못하게 하면 엔터프라이즈 소유자만 리포지토리의 표시 여부를 변경할 수 있습니다.

엔터프라이즈 소유자가 리포지토리 만들기를 조직 소유자로만 제한한 경우 구성원은 리포지토리 표시 여부를 변경할 수 없습니다. 엔터프라이즈 소유자가 구성원 리포지토리 만들기를 프라이빗 리포지토리로만 제한한 경우 구성원은 리포지토리의 표시 여부만 프라이빗으로 변경할 수 있습니다. 자세한 내용은 “[리포지토리 만들기에 대한 정책 설정](#enforcing-a-policy-for-repository-creation)”을 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. “리포지토리 표시 여부 변경”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. “리포지토리 표시 유형 변경”에서 드롭다운 메뉴를 사용하여 정책을 선택합니다.
   ![리포지토리 표시 유형 정책 옵션이 있는 드롭다운 메뉴](/assets/images/help/business-accounts/repository-visibility-policy-drop-down.png)

## 리포지토리 삭제 및 전송에 대한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 관리자 권한이 있는 구성원이 리포지토리를 삭제하거나 전송하도록 허용할 수 있으며, 리포지토리 삭제 및 조직 소유자에게 전송을 제한하거나 소유자가 조직 수준에서 설정을 관리하도록 허용할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. “리포지토리 삭제 및 전송”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## 이슈를 삭제하기 위한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 관리자 액세스 권한이 있는 구성원이 리포지토리에서 이슈를 삭제하도록 허용하거나 이슈 삭제를 조직 소유자로 제한할 수 있으며, 또는 소유자가 조직 수준에서 설정을 관리하도록 허용할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. **리포지토리 정책** 탭의 “리포지토리 이슈 삭제”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. “리포지토리 이슈 삭제”에서 드롭다운 메뉴를 사용하여 정책을 선택합니다.

  ![이슈 삭제 정책 옵션이 있는 드롭다운 메뉴](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

{% ifversion ghes or ghae %}

## Git 푸시 제한에 대한 정책 적용

리포지토리 크기를 관리할 수 있도록 유지하고 성능 이슈를 방지하기 위해 엔터프라이즈의 리포지토리에 대한 파일 크기 제한을 구성할 수 있습니다.

기본적으로 리포지토리 업로드 제한을 적용하는 경우 사용자는 100MB보다 큰 파일을 추가하거나 업데이트할 수 없습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. “리포지토리 업로드 제한”에서 드롭다운 메뉴를 사용하여 최대 개체 크기를 클릭합니다.
![최대 개체 크기 옵션이 있는 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. 필요에 따라 엔터프라이즈의 모든 리포지토리에 대해 최대 업로드 제한을 적용하려면 **모든 리포지토리에 적용**
![모든 리포지토리 옵션에 최대 개체 크기 적용](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)을 선택합니다.

{% ifversion profile-name-enterprise-setting %}

## 리포지토리에 멤버 이름을 표시하기 위한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 멤버가 해당 사용자 이름 외에도 퍼블릭 및 내부 리포지토리에 대한 이슈 및 끌어오기 요청에서 주석 작성자의 프로필 이름을 볼 수 있도록 허용할 수 있습니다.

![주석에 표시된 주석 작성자의 프로필 이름](/assets/images/help/issues/commenter-full-name.png)

{% note %}

**참고:** 이 정책이 엔터프라이즈의 모든 리포지토리에 적용되면 프라이빗 리포지토리에 대한 조직 설정을 재정의합니다. 자세한 내용은 “[조직에서 멤버 이름 표시 관리](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)”를 참조하세요.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. “멤버가 퍼블릭 및 내부 리포지토리에서 주석 작성자의 프로필 이름을 볼 수 있도록 허용”에서 드롭다운 메뉴를 선택하고 정책을 클릭합니다.
![정책 드롭다운이 강조 표시된 옵션 페이지의 스크린샷](/assets/images/enterprise/site-admin-settings/comment-authors-profile-name-drop-down.png)
5. 필요에 따라 엔터프라이즈의 모든 리포지토리에 대한 프로필 이름 표시를 적용하려면 **인스턴스의 모든 리포지토리에 적용** 을 선택합니다.
![“모든 리포지토리에 적용” 옵션이 강조 표시된 스크린샷](/assets/images/enterprise/site-admin-settings/enforce-for-all-repositories-option.png)

{% endif %}

## 리포지토리 간의 끌어오기 요청에 대한 병합 충돌 편집기 구성

사용자가 컴퓨터에서 로컬로 병합 충돌을 해결하도록 요구하면 사용자가 실수로 포크에서 업스트림 리포지토리에 작성하는 것을 방지할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. “리포지토리 간의 끌어오기 요청에 대한 충돌 편집기”에서 드롭다운 메뉴를 사용하여 **사용 안 함** 을 클릭합니다.
 ![병합 충돌 편집기를 사용하지 않도록 설정하는 옵션이 있는 드롭다운 메뉴](/assets/images/enterprise/settings/conflict-editor-settings.png)

## 강제 푸시 구성

각 리포지토리는 리포지토리를 소유하는 사용자 계정 또는 조직의 설정에서 기본 강제 푸시 설정을 상속합니다. 각 조직 및 사용자 계정은 엔터프라이즈의 강제 푸시 설정에서 기본 강제 푸시 설정을 상속합니다. 엔터프라이즈에 대한 강제 푸시 설정을 변경하는 경우 정책은 모든 사용자 또는 조직이 소유한 모든 리포지토리에 적용됩니다.

### 모든 리포지토리에 강제 푸시 차단

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. “강제 푸시”에서 드롭다운 메뉴를 사용하여 **허용** 을 클릭하고 **차단** 또는 **기본 분기로 차단** 을 클릭합니다.
![강제 푸시 드롭다운](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. 필요에 따라 **모든 리포지토리에 적용** 을 선택하여, 강제 푸시에 대한 조직 및 리포지토리 수준 설정을 재정의합니다.

### 특정 리포지토리에 강제 푸시 차단

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. **푸시 및 풀** 에서 **차단** 또는 **기본 분기로 차단** 을 선택합니다.
   ![강제 푸시 차단](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### 사용자 계정 또는 조직이 소유한 리포지토리에 강제 푸시 차단

리포지토리는 사용자가 속한 사용자 계정 또는 조직에서 강제 푸시 설정을 상속합니다. 이에 따라 사용자 계정 및 조직은 엔터프라이즈의 강제 푸시 설정에서 사용자의 강제 푸시 설정을 상속합니다.

사용자 계정 또는 조직에 대한 설정을 구성하여 기본 상속된 설정을 재정의할 수 있습니다.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. “강제 푸시” 섹션의 “리포지토리 기본 설정”에서 다음을 선택합니다.
    - 모든 분기에 강제 푸시를 차단하는 **차단**
    - 기본 분기에 강제 푸시만 차단하는 **기본 분기에 차단**
  ![강제 푸시 차단](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. 필요에 따라 **모든 리포지토리에 적용** 를 선택하여 리포지토리별 설정을 재정의합니다. 이는 엔터프라이즈 차원의 정책을 재정의하지 **않음** 에 유의하세요.
   ![강제 푸시 차단](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## 익명 Git 읽기 액세스 구성

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

{% data variables.location.product_location %}에 [프라이빗 모드를 사용하도록 설정한](/enterprise/admin/configuration/enabling-private-mode) 경우 리포지토리 관리자가 퍼블릭 리포지토리에 대한 익명 Git 읽기 액세스를 사용하도록 허용할 수 있습니다.

익명 Git 읽기 액세스를 사용하도록 설정하면 사용자가 엔터프라이즈의 사용자 지정 도구에 대한 인증을 무시할 수 있습니다. 사용자 또는 리포지토리 관리자가 리포지토리에 대한 이 액세스 설정을 사용하도록 설정하면, 인증되지 않은 Git 작업 및 {% data variables.product.product_name %}에 대한 네트워크 액세스 권한이 있는 모든 사용자는 인증 없이 리포지토리에 대한 읽기 권한을 갖게 됩니다.

익명 Git 읽기 액세스는 기본적으로 사용하지 않도록 설정됩니다.{% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 or ghes = 3.7 %} {% data variables.product.product_name %} 3.6 이상으로 업그레이드하면 애플리케이션 수준에서 익명 Git 읽기 액세스가 자동으로 사용하지 않도록 설정되고 포트 9418의 `git://` 연결이 다음 오류를 반환합니다.

```
The unauthenticated git protocol on port 9418 is no longer supported.
```

{% ifversion ghes > 3.5 %}

사용자 환경에서 인증되지 않은 Git 프로토콜을 지원하려면 이 기능을 수동으로 다시 사용하도록 설정해야 합니다. 업그레이드 후 다음 명령을 실행합니다.

```ShellSession
$ sudo ghe-config app.gitauth.git-protocol true
$ sudo ghe-config-apply
```

{% endif %}

익명 Git 읽기 액세스는 {% data variables.product.prodname_ghe_server %}의 향후 릴리스에서 완전히 제거됩니다. {% data variables.product.company_short %}는 Git 프로토콜 대신 SSH를 사용하는 것이 좋습니다. 이 변경에 대한 자세한 내용은 [{% data variables.product.prodname_blog %}를 참조하세요](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

{% endif %}



필요한 경우 리포지토리 관리자가 리포지토리의 액세스 설정을 잠그면 사용자 리포지토리에서 리포지토리에 대한 익명 Git 액세스 설정을 변경하지 못하도록 방지할 수 있습니다. 리포지토리의 Git 읽기 액세스 설정을 잠그면 사이트 관리자만 설정을 변경할 수 있습니다.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### 모든 리포지토리에 대한 익명 Git 읽기 액세스 설정

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. “익명 Git 읽기 액세스”의 드롭다운 메뉴에서 **사용** 을 클릭합니다.
![메뉴 옵션 “사용” 및 “사용 안 함”을 표시하는 익명 Git 읽기 액세스 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. 필요에 따라 리포지토리 관리자가 엔터프라이즈의 모든 리포지토리에서 익명 Git 읽기 액세스 설정을 변경하지 못하도록 하려면 **리포지토리 관리자가 익명 Git 읽기 액세스를 변경하지 못하도록 방지** 를 선택합니다.
![리포지토리 관리자가 엔터프라이즈의 모든 리포지토리에 대한 익명 Git 읽기 액세스 설정을 변경하지 못하도록 방지하는 확인란을 선택](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### 특정 리포지토리에 대한 익명 Git 읽기 액세스 설정

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
6. “위험 영역”에서 “익명 Git 읽기 액세스 사용” 옆에 있는 **사용** 을 클릭합니다.
![리포지토리의 사이트 관리자 설정의 위험 영역에서 “익명 Git 읽기 액세스 사용” 아래의 “사용” 단추 ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. 변경 내용을 검토합니다. 확인하려면 **네, 익명 Git 읽기 액세스를 사용하도록 설정합니다.** 를 클릭합니다.
![팝업 창에서 익명 Git 읽기 액세스 설정 확인](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. 필요에 따라 리포지토리 관리자가 리포지토리에 대한 이 설정을 변경하지 못하도록 하려면 **리포지토리 관리자가 익명 Git 읽기 액세스를 변경하지 못하도록 방지** 를 선택합니다.
![리포지토리 관리자가 이 리포지토리에 대한 익명 Git 읽기 액세스를 변경하지 못하도록 방지하는 확인란을 선택](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}
