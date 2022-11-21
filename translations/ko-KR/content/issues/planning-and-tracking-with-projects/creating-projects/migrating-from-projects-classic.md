---
title: '{% data variables.product.prodname_projects_v1 %}에서 마이그레이션'
intro: '{% data variables.projects.projects_v1_board %}를 새 {% data variables.product.prodname_projects_v2 %} 환경으로 마이그레이션할 수 있습니다.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/migrating-your-project
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 2efe16be4b865e4315bce1fee633c313a3d7e512
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109687'
---
{% note %}

**참고:**

- 마이그레이션하는 프로젝트에 1,200개 이상의 항목이 포함된 경우 열려 있는 이슈에 높은 우선 순위가 지정되고, 그 다음에는 열린 끌어오기 요청 및 메모가 표시됩니다. 나머지 공간은 종결된 이슈, 병합된 끌어오기 요청 및 닫힌 끌어오기 요청에 사용됩니다. 이 제한으로 인해 마이그레이션할 수 없는 항목은 보관 파일로 이동됩니다. 보관 제한인 10,000개 항목에 도달하면 추가 항목이 마이그레이션되지 않습니다.
- 메모 카드는 초안 이슈로 변환되고 내용은 초안 이슈의 본문에 저장됩니다. 정보가 누락된 것으로 표시되면 숨겨진 필드를 표시합니다. 자세한 내용은 “[필드 표시 및 숨기기](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#showing-and-hiding-fields)”를 참조하세요.
- 자동화는 마이그레이션되지 않습니다.
- 심사, 보관 및 작업은 마이그레이션되지 않습니다.
- 마이그레이션 후에는 새로 마이그레이션된 프로젝트와 이전 프로젝트가 동기화된 상태로 유지되지 않습니다.

{% endnote %}

## 프로젝트 마이그레이션 정보

프로젝트 보드를 모든 새 {% data variables.product.prodname_projects_v2 %} 환경으로 마이그레이션하고 테이블, 여러 보기, 새 자동화 옵션, 강력한 필드 형식을 사용해 볼 수 있습니다. 자세한 내용은 “[프로젝트 정보](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”를 참조하세요.

## 조직 프로젝트 보드 마이그레이션

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. 왼쪽에서 **프로젝트(클래식)** 를 클릭합니다.
  ![프로젝트(클래식) 메뉴 옵션을 보여 주는 스크린샷](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## 사용자 프로젝트 보드 마이그레이션

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. 프로필 페이지의 상단에 있는 기본 탐색에서 {% octicon "project" aria-label="The project board icon" %} **프로젝트** 를 클릭합니다.
![프로젝트 탭](/assets/images/help/projects/user-projects-tab.png)
1. 프로젝트 목록 위에서 **프로젝트(클래식)** 를 클릭합니다.
  ![프로젝트(클래식) 메뉴 옵션을 보여 주는 스크린샷](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## 리포지토리 프로젝트 보드 마이그레이션

{% note %}

**참고:** {% data variables.projects.projects_v2_caps %}는 리포지토리 수준 프로젝트를 지원하지 않습니다. 리포지토리 프로젝트 보드를 마이그레이션하면 리포지토리 프로젝트를 소유하는 조직 또는 개인 계정으로 마이그레이션되고 마이그레이션된 프로젝트는 원래 리포지토리에 고정됩니다.

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. 리포지토리 이름에서 {% octicon "project" aria-label="The project board icon" %} **프로젝트** 를 클릭합니다.
![프로젝트 탭](/assets/images/help/projects/repo-tabs-projects.png)
1. **프로젝트(클래식)** 를 클릭합니다.
  ![프로젝트(클래식) 메뉴 옵션을 보여 주는 스크린샷](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
