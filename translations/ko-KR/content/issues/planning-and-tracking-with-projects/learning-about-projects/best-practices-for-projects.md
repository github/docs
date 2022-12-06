---
title: '{% data variables.product.prodname_projects_v2 %}에 대한 모범 사례'
intro: 프로젝트를 관리하는 팁을 알아봅니다.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/best-practices-for-managing-projects
type: overview
topics:
  - Projects
  - Issues
  - Project management
ms.openlocfilehash: 1473e08a8a6d3bf4df480b4b5ce6930753a04491
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106767'
---
{% data variables.product.prodname_projects_v2 %}를 사용하여 이슈 및 끌어오기 요청이 있는 {% data variables.product.company_short %}에서 작업을 관리할 수 있습니다. 프로젝트를 효율적이고 효과적으로 관리하기 위한 팁을 읽어보세요. {% data variables.product.prodname_projects_v2 %}에 대한 자세한 내용은 “[{% data variables.product.prodname_projects_v2 %} 정보](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”를 참조하세요.

## 큰 이슈를 더 작은 이슈로 분리

큰 이슈를 더 작은 이슈로 분리하면 작업을 보다 쉽게 관리할 수 있으며 팀 멤버가 동시에 작업할 수 있습니다. 이 경우 끌어오기 요청도 더 작아지므로 검토하기가 더 쉽습니다.

더 작은 이슈가 더 큰 목표에 얼마나 적합한지 추적하려면 작업 목록, 마일스톤 또는 레이블을 사용합니다. 자세한 내용은 "[작업 목록 정보](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)", "[마일스톤 정보](/issues/using-labels-and-milestones-to-track-work/about-milestones)" 및 "[레이블 관리](/issues/using-labels-and-milestones-to-track-work/managing-labels)"를 참조하세요.

## 커뮤니케이션

이슈 및 끌어오기 요청에는 협력자와 쉽게 커뮤니케이션할 수 있도록 하는 기본 제공 기능이 포함됩니다. @mentions을 사용하여 개인 또는 전체 팀에게 댓글에 대해 경고합니다. 협력자를 이슈에 할당하여 책임을 전달합니다. 관련 이슈 또는 끌어오기 요청에 연결하여 연결 방법을 전달합니다.

## 설명 및 추가 정보 사용

프로젝트의 설명 및 추가 정보를 사용하여 프로젝트에 대한 정보를 공유합니다.

예를 들면 다음과 같습니다.

- 프로젝트의 목적 설명
- 프로젝트 보기 및 사용 방법 설명
- 자세한 정보를 위한 관련 링크 및 담당자 포함

프로젝트 추가 정보는 링크, 목록 및 헤더와 같은 이미지 및 고급 서식을 사용할 수 있는 Markdown을 지원합니다. 

자세한 내용은 “[{% data variables.projects.project_v2 %} 만들기](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)”를 참조하세요.

## 보기 사용

프로젝트 보기를 사용하여 다양한 각도에서 프로젝트를 확인합니다.

예를 들면 다음과 같습니다.

- 상태별로 필터링하여 시작되지 않은 모든 항목 보기
- 사용자 지정 우선 순위 필드별로 그룹화하여 우선 순위가 높은 항목의 볼륨 모니터링
- 사용자 지정 날짜 필드별로 정렬하여 목표 배송 날짜가 가장 빠른 항목 보기

자세한 내용은 “[보기 사용자 지정](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)”을 참조하세요.

## 단일 데이터 소스(Single Source of Truth) 유지

정보가 동기화되도록 하려면 단일 데이터 소스를 유지 관리합니다. 예를 들어 여러 필드에 분산시키는 대신 단일 위치에서 대상 배송 날짜를 추적합니다. 이렇게 하면 대상 배송 날짜가 바뀔 경우 한 위치에서만 날짜를 업데이트하면 됩니다.

{% data variables.product.prodname_projects_v2 %}는 할당자, 마일스톤 및 레이블과 같은 {% data variables.product.company_short %} 데이터를 사용하여 자동으로 최신 상태를 유지합니다. 이러한 필드 중 하나가 이슈 또는 끌어오기 요청에서 변경되면 변경 내용이 프로젝트에 자동으로 반영됩니다.

## 자동화 사용

작업을 자동화하여 작업 시간을 줄이고 프로젝트 자체에 더 많은 시간을 투입할 수 있습니다. 수동으로 작업을 수행해야 할 필요가 적을수록 프로젝트가 최신 상태를 유지할 가능성이 높아질 수 있습니다.

{% data variables.product.prodname_projects_v2 %}는 기본 제공 워크플로를 제공합니다. 예를 들어 문제가 해결되면 상태를 자동으로 "완료"로 설정할 수 있습니다. {% ifversion projects-v2-auto-archive %} 특정 조건을 충족하는 경우 항목을 자동으로 보관하도록 기본 제공 워크플로를 구성할 수도 있습니다. {% endif %}

또한 {% data variables.product.prodname_actions %} 및 GraphQL API를 사용하여 일상적인 프로젝트 관리 작업을 자동화할 수도 있습니다. 예를 들어 검토를 기다리는 끌어오기 요청을 추적하려면 프로젝트에 끌어오기 요청을 추가하고 상태를 "검토 필요"로 설정하는 워크플로를 만들 수 있습니다. 끌어오기 요청이 "검토 준비 완료"로 표시되면 이 프로세스가 자동으로 트리거될 수 있습니다.

- 기본 제공 워크플로에 대한 자세한 내용은 "[기본 제공 자동화 사용"을 참조하세요.](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations) {% ifversion projects-v2-auto-archive %}
- 항목을 자동으로 보관하는 방법에 대한 자세한 내용은 "[항목 자동 보관"을 참조하세요](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically). {% endif %}
- 예제 워크플로는 “[작업을 사용하여 {% data variables.product.prodname_projects_v2 %} 자동화](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions)”를 참조하세요.
- API에 대한 자세한 내용은 “[API를 사용하여 {% data variables.product.prodname_projects_v2 %} 관리](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)”를 참조하세요.
- {% data variables.product.prodname_actions %}에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}](/actions)”를 참조하세요.

## 다른 필드 형식 사용

요구 사항에 맞게 다양한 필드 형식을 활용합니다.

반복 필드를 사용하여 작업을 예약하거나 타임라인을 만듭니다. 반복별로 그룹화하여 항목이 반복 간에 균형을 이루는지 확인하거나 필터링하여 단일 반복에 집중할 수 있습니다. 반복 필드를 사용하면 이전 반복에서 완료한 작업을 볼 수 있으며, 이를 토대로 진행 속도를 계획하고 팀의 성과를 반영할 수 있습니다. 또한 반복 필드에는 사용자와 팀이 반복 작업에 소요되는 시간을 단축한 경우도 표시됩니다. 자세한 내용은 “[반복 필드 정보](/issues/planning-and-tracking-with-projects/understanding-field-types/about-iteration-fields)”를 참조하세요.

단일 선택 필드를 사용하여 미리 설정된 값 목록을 기준으로 작업에 대한 정보를 추적합니다. 예를 들어 우선 순위 또는 프로젝트 단계를 추적합니다. 미리 설정된 목록에서 값을 선택하므로 쉽게 그룹화하거나 필터링하여 특정 값이 있는 항목에 집중할 수 있습니다.

다양한 필드 형식에 대한 자세한 내용은 “[필드 형식 이해](/issues/planning-and-tracking-with-projects/understanding-field-types)”를 참조하세요.
