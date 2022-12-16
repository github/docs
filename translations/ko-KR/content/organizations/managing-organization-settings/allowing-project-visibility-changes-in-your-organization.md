---
title: 조직의 프로젝트 표시 유형 변경 허용
intro: '조직 소유자는 관리자 권한이 있는 구성원이 조직 내 {% data variables.projects.projects_v2_and_v1 %}의 표시 유형을 조정하도록 허용할 수 있습니다.'
versions:
  feature: classic-project-visibility-permissions-or-projects-v2
topics:
  - Organizations
  - Projects
shortTitle: Project visibility permissions
allowTitleToDifferFromFilename: true
permissions: 'Organization owners can allow {% data variables.projects.project_v2_and_v1 %} visibility changes for an organization.'
ms.openlocfilehash: 5f8963e8c03e2c0a62586964b6331ec7b3d945b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109538'
---
## 프로젝트의 표시 유형 변경 정보

구성원이 {% data variables.projects.projects_v2_and_v1 %}를 프라이빗에서 퍼블릭으로 변경하는 것을 제한하는 등 조직에서 {% data variables.projects.projects_v2_and_v1 %}의 표시 유형을 변경할 수 있는 사람을 제한할 수 있습니다. 

{% data variables.projects.project_v2_and_v1 %} 표시 유형을 변경하는 기능을 조직 소유자로만 제한하거나 관리자 권한이 부여된 모든 사람이 표시 유형을 변경하도록 허용할 수 있습니다.

{% ifversion project-visibility-policy %} 엔터프라이즈 소유자가 엔터프라이즈 수준에서 {% data variables.projects.projects_v2_and_v1 %}에 대한 표시 유형 변경을 제한하는 경우 이 옵션을 사용할 수 없습니다. 자세한 내용은 “[엔터프라이즈에서 프로젝트에 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise)”을 참조하세요.
{% endif %}

## 구성원이 프로젝트 표시 유형을 변경할 수 있도록 허용

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 사이드바의 “코드, 계획, 자동화” 섹션에서 **{% octicon "table" aria-label="The table icon" %} 프로젝트** 를 클릭합니다.
1. 구성원이 프로젝트 표시 유형을 조정할 수 있도록 하려면 **구성원이 이 조직의 프로젝트 표시 유형을 변경할 수 있도록 허용** 을 선택합니다.
  ![표시 유형 변경 내용을 설정하는 확인란을 보여 주는 스크린샷](/assets/images/help/projects-v2/visibility-change-checkbox.png)
1. **저장** 을 클릭합니다.

## 추가 참고 자료

{% ifversion projects-v2 %}
- “[{% data variables.projects.projects_v2 %}의 표시 유형 관리](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects)” {%- endif %}{%- ifversion projects-v1 %}
- “[{% data variables.product.prodname_project_v1 %} 표시 유형 변경](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)” {% endif %}
