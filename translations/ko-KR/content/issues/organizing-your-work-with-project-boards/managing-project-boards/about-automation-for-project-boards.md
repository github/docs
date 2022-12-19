---
title: '{% data variables.product.prodname_projects_v1 %}에 대한 자동화 정보'
intro: '{% data variables.projects.projects_v1_board %} 카드의 상태가 연결된 이슈 및 끌어오기 요청과 동기화를 유지하도록 자동 워크플로를 구성할 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Automation for {% data variables.product.prodname_projects_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 28c4719cca14dff54d971b9a081837c172f4da76
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108981'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %}  자세한 내용은 “[조직의 {% data variables.product.prodname_projects_v1_caps %} 권한](/articles/project-board-permissions-for-an-organization)”을 참조하세요.

{% data variables.projects.projects_v1_board %} 열에 대한 트리거 이벤트를 기반으로 작업을 자동화할 수 있습니다. 이렇게 하면 {% data variables.projects.projects_v1_board %}를 관리하는 일부 수동 작업이 제거됩니다. 예를 들어 {% data variables.projects.projects_v1_board %}에 추가하는 새 이슈 또는 끌어오기 요청이 구성된 열로 자동으로 이동되는 “할 일” 열을 구성할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_projects_v1 %}에 대한 자동화 구성](/articles/configuring-automation-for-project-boards)”을 참조하세요.  

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data variables.projects.projects_v1_board_caps %} 자동화는 또한 특정 작업에 대한 표준 워크플로를 만들어 팀이 {% data variables.projects.projects_v1_board %}의 목적과 팀의 개발 프로세스에 대한 공유된 이해를 개발하는 데 도움이 될 수 있습니다.

{% data reusables.project-management.resync-automation %}

## 자동화 옵션

| 열 사전 설정 | 구성 옵션 |
| --- | --- |
| 할 일 | <ul><li>새로 추가된 모든 이슈를 여기로 이동</li><li>새로 추가된 모든 끌어오기 요청을 여기로 이동</li><li>다시 연 모든 이슈를 여기로 이동</li><li>다시 연 모든 끌어오기 요청을 여기로 이동</li></ul> |
| 진행 중 | <ul><li>새로 연 모든 끌어오기 요청을 여기로 이동</li><li>다시 연 모든 이슈를 여기로 이동</li><li>다시 연 모든 끌어오기 요청을 여기로 이동</li><li>기본 분기의 최소 필수 검토 수를 충족하는 모든 끌어오기 요청을 여기로 이동</li><li>기본 분기의 최소 필수 검토 수를 더 이상 충족하지 않는 모든 끌어오기 요청을 여기로 이동</li></ul> |
| 완료 | <ul><li>종결된 모든 이슈를 여기로 이동</li><li>병합된 모든 끌어오기 요청을 여기로 이동</li><li>종결되고 병합되지 않은 모든 끌어오기 요청을 여기로 이동</li></ul> |

## 프로젝트 진행률 추적

{% data variables.projects.projects_v1_board %}의 진행률을 추적할 수 있습니다. “할 일”, “진행 중” 또는 “완료” 열의 카드는 전체 프로젝트 진행률에 포함됩니다. {% data reusables.project-management.project-progress-locations %}

자세한 내용은 “[{% data variables.product.prodname_project_v1 %}의 진행률 추적](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)”을 참조하세요.

## 추가 참고 자료
- “[{% data variables.product.prodname_projects_v1 %}에 대한 자동화 구성](/articles/configuring-automation-for-project-boards)”{% ifversion fpt or ghec %}
- “[{% data variables.product.prodname_project_v1 %} 복사](/articles/copying-a-project-board)”{% endif %}
