---
title: 조직의 보안 관리자 관리
intro: 보안 관리자 역할에 팀을 할당하여 보안 팀에 조직에 대한 최소 액세스 권한을 부여할 수 있습니다.
versions:
  feature: security-managers
topics:
  - Organizations
  - Teams
shortTitle: Security manager role
permissions: Organization owners can assign the security manager role.
ms.openlocfilehash: c29dd20a123ccb20a32d40896064e11d59643bd9
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: '145068300'
---
{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

## 보안 관리자 역할 권한

보안 관리자 역할이 있는 팀의 구성원은 조직의 보안을 효과적으로 관리하는 데 필요한 권한만 갖습니다.

- 기존 리포지토리 액세스 외에도 조직의 모든 리포지토리에 대한 읽기 액세스 권한
- 조직의 모든 보안 경고에 대한 쓰기 액세스 권한 {% ifversion not fpt %}
- 조직의 보안 개요에 대한 액세스 권한 {% endif %}
- {% data variables.product.prodname_GH_advanced_security %}을(를) 사용하거나 사용하지 않도록 설정하는 기능을 포함하여 조직 수준{% ifversion not fpt %}에서 보안 설정을 구성하는 기능{% endif %}
- {% data variables.product.prodname_GH_advanced_security %}을(를) 사용하거나 사용하지 않도록 설정하는 기능을 포함하여 리포지토리 수준{% ifversion not fpt %}에서 보안 설정을 구성하는 기능{% endif %}

{% ifversion fpt %} 조직의 보안 개요를 비롯한 추가 기능은 {% data variables.product.prodname_ghe_cloud %}와 함께 {% data variables.product.prodname_advanced_security %}을(를) 사용하는 조직에서 사용할 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)를 참조하세요.
{% endif %}

팀에 보안 관리자 역할이 있는 경우 팀 및 특정 리포지토리에 대한 관리자 액세스 권한이 있는 사용자는 해당 리포지토리에 대한 팀의 액세스 수준을 변경할 수 있지만 액세스를 제거할 수는 없습니다. 자세한 내용은 “[조직 리포지토리에 대한 팀 액세스 관리](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository){% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}” 및 “[리포지토리에 액세스할 수 있는 팀과 사용자 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)”를 참조하세요.{% else %}."{% endif %}

  ![보안 관리자를 사용하여 리포지토리 액세스 UI 관리](/assets/images/help/organizations/repo-access-security-managers.png)

## 조직의 팀에 보안 관리자 역할 할당
조직의 최대 10개 팀에 보안 관리자 역할을 할당할 수 있습니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. **보안 관리자** 에서 역할을 부여할 팀을 검색하고 선택합니다. 선택한 각 팀이 검색 창 아래 목록에 표시됩니다. 
  ![보안 관리자 추가](/assets/images/help/organizations/add-security-managers.png)
## 조직의 팀에서 보안 관리자 역할 제거

{% warning %}

**경고:** 팀에서 보안 관리자 역할을 제거하면 조직 전체에서 보안 경고 및 설정을 관리하는 팀의 기능이 제거되지만, 팀은 역할이 할당되었을 때 부여된 리포지토리에 대한 읽기 권한을 유지합니다. 원치 않는 읽기 액세스를 수동으로 제거해야 합니다. 자세한 내용은 “[조직 리포지토리에 대한 팀 액세스 권한 관리](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#removing-a-teams-access-to-a-repository)”를 참조하세요.

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. **보안 관리자** 아래 제거하려는 보안 관리자 팀 오른쪽에서 {% octicon "x" aria-label="The X icon" %}을(를) 클릭합니다.
  ![보안 관리자 제거](/assets/images/help/organizations/remove-security-managers.png)
