---
title: 조직의 사용자 지정 리포지토리 역할 관리
intro: 조직에 대한 사용자 지정 리포지토리 역할을 만들거나 편집하거나 삭제할 수 있습니다.
permissions: Organization owners can manage custom repository roles.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: Manage custom roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
ms.openlocfilehash: f7f8be4eda3ecf62a1b587a509881f9fee1a463f
ms.sourcegitcommit: ca040a1871ab5e929b596686ef955b02c5afa051
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/02/2022
ms.locfileid: '148131020'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## 사용자 지정 리포지토리 역할 정보

{% data reusables.organizations.about-custom-repo-roles %} 자세한 내용은 "[사용자 지정 리포지토리 역할 정보](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)"를 참조하세요.

## 리포지토리 역할 만들기

새 리포지토리 역할을 만들려면 상속된 역할에 권한을 추가하고 사용자 지정 역할에 이름을 지정합니다.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
5. **역할 만들기** 를 클릭합니다.
  !["역할 만들기" 단추 스크린샷](/assets/images/help/organizations/repository-role-create-role.png)
4. "이름" 아래에 리포지토리 역할의 이름을 입력합니다.
  ![리포지토리 역할의 이름을 입력할 필드](/assets/images/help/organizations/repository-role-name.png)
5. "설명"에서 리포지토리 역할에 대한 설명을 입력합니다.
  ![리포지토리 역할에 대한 설명을 입력할 필드](/assets/images/help/organizations/repository-role-description.png)
6. "상속할 역할 선택"에서 상속할 역할을 선택합니다.
  ![리포지토리 역할 기본 역할 옵션 선택](/assets/images/help/organizations/repository-role-base-role-option.png)
7. "권한 추가"에서 드롭다운 메뉴를 사용하여 사용자 지정 역할에 포함할 권한을 선택합니다.
  ![리포지토리 역할 드롭다운에서 권한 수준 선택](/assets/images/help/organizations/repository-role-drop-down.png)
7. **역할 만들기** 를 클릭합니다.
  ![리포지토리 역할 만들기 확인](/assets/images/help/organizations/repository-role-creation-confirm.png)

## 리포지토리 역할 편집

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. 편집할 역할 오른쪽에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음, **편집** 을 클릭합니다.
  ![리포지토리 역할에 대한 드롭다운 메뉴의 편집 옵션](/assets/images/help/organizations/repository-role-edit-setting.png)
4. 편집한 다음, **역할 업데이트** 를 클릭합니다.
  ![필드 편집 및 리포지토리 역할 업데이트](/assets/images/help/organizations/repository-role-update.png)

## 리포지토리 역할 삭제

기존 리포지토리 역할을 삭제하면 사용자 지정 역할이 있는 보류 중인 모든 초대, 팀 및 사용자가 조직의 기본 권한에 다시 할당됩니다.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. 삭제할 역할 오른쪽에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음, **삭제** 를 클릭합니다.
  ![리포지토리 역할에 대한 드롭다운 메뉴의 편집 옵션](/assets/images/help/organizations/repository-role-delete-setting.png)
4. 제거하려는 역할에 대한 변경 내용을 검토한 다음, **역할 삭제** 를 클릭합니다.
  ![리포지토리 역할 삭제 확인](/assets/images/help/organizations/repository-role-delete-confirm.png)
