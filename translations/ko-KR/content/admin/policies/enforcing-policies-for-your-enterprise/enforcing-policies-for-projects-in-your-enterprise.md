---
title: 엔터프라이즈 프로젝트에 대한 정책 적용
intro: '엔터프라이즈 조직 내에서 {% data variables.projects.projects_v2_and_v1 %}에 대한 정책을 적용하거나 각 조직에서 정책을 설정하도록 허용할 수 있습니다.'
permissions: Enterprise owners can enforce policies for projects in an enterprise.
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Projects
shortTitle: Project board policies
ms.openlocfilehash: 2bb72b21094fadea8f584eb4749ed0cea69619ee
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108798'
---
## 엔터프라이즈의 프로젝트에 대한 정책 정보

엔터프라이즈 구성원이 {% data variables.projects.projects_v2_and_v1 %}를 관리하는 방법을 제어하는 정책을 적용하거나 조직 소유자가 조직 수준에서 {% data variables.projects.projects_v2_and_v1 %}에 대한 정책을 관리할 수 있도록 허용할 수 있습니다.{% ifversion project-visibility-policy %}

일부 정책은 {% data variables.product.prodname_projects_v2 %}(새 프로젝트 환경 및 이전 환경인 {% data variables.product.prodname_projects_v1 %})에 모두 적용되는 반면, 일부는 {% data variables.product.prodname_projects_v1 %}에만 적용됩니다. 각 경험에 대한 자세한 내용은 “[{% data variables.product.prodname_projects_v2 %} 정보](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)” 및 “[{% data variables.product.prodname_projects_v1 %} 정보](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”를 참조하세요.
{% else %}자세한 내용은 “[프로젝트 보드 정보](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”를 참조하세요.{% endif %}

## 조직 전체 프로젝트에 대한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 조직 전체 프로젝트 보드를 사용하거나 사용하지 않도록 설정할 수 있으며 소유자가 조직 수준에서 설정을 관리하도록 허용할 수도 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. “조직 프로젝트”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. “조직 프로젝트”에서 드롭다운 메뉴를 사용하고 정책을 선택합니다.
  ![조직 프로젝트 보드 정책 옵션이 있는 드롭다운 메뉴](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

{% ifversion project-visibility-policy %}
## 프로젝트 표시 유형 변경에 대한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 프로젝트에 대한 관리자 액세스 권한이 있는 사용자가 프로젝트 표시 유형을 변경하거나 소유자가 조직 수준에서 설정을 관리하도록 허용할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
1. “프로젝트 표시 유형 변경 권한”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. 드롭다운 메뉴를 선택한 다음, 정책을 클릭합니다.

   ![“프로젝트 표시 유형 변경 권한” 정책 구성을 위한 드롭다운 메뉴의 스크린샷](/assets/images/help/business-accounts/project-visibility-change-drop-down.png) {% endif %}

{% ifversion projects-v1 %}
## {% data variables.product.prodname_projects_v1 %}에 대한 정책 적용

일부 정책은 {% data variables.product.prodname_projects_v1 %}에만 적용됩니다.

### 리포지토리 프로젝트에 대한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 리포지토리 수준 프로젝트를 사용하거나 사용하지 않도록 설정할 수 있으며, 소유자가 조직 수준에서 설정을 관리하도록 허용할 수도 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. “리포지토리 프로젝트”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. “리포지토리 프로젝트”에서 드롭다운 메뉴를 사용하고 정책을 선택합니다.

   ![리포지토리 프로젝트 보드 정책 옵션이 있는 드롭다운 메뉴](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png) {% endif %}
