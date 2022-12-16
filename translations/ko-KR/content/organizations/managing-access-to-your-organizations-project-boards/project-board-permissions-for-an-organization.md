---
title: '조직에 대한 {% data variables.product.prodname_project_v1_caps %} 권한'
intro: '{% data variables.projects.projects_v1_board %} 관리자 권한이 있는 조직 소유자와 사용자는 조직의 {% data variables.projects.projects_v1_boards %}에 대한 읽기, 쓰기 및 관리자 권한이 있는 사용자를 사용자 지정할 수 있습니다.'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/project-board-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: '{% data variables.product.prodname_project_v1_caps %} permissions'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fbc3ec7db52d6b4a417a4e9e93aea9ae717e2fca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614209'
---
{% data reusables.projects.project_boards_old %}

## 권한 개요

사용자 및 팀의 {% data variables.projects.projects_v1_board %}에 대한 세 가지 수준의 사용 권한이 있습니다.

{% data reusables.project-management.project-board-permissions %}

조직 소유자와 관리자 권한이 있는 사용자는 조직 {% data variables.projects.projects_v1_board %}에 개별적으로, 외부 협력자 또는 조직 구성원으로, 또는 팀 또는 조직의 구성원 자격을 통해 사용자에게 액세스 권한을 부여할 수 있습니다. 외부 협력자는 조직 구성원이 아니지만 조직에서 공동 작업할 수 있는 권한을 부여받은 사람입니다.

{% data variables.projects.projects_v1_board %}에 대한 관리자 권한이 있는 조직 소유자 및 사용자는 다음도 수행할 수 있습니다.
- 모든 조직 구성원에 대한 기본 프로젝트 보드 권한을 설정합니다.
- 조직 구성원, 팀, 외부 협력자를 위한 프로젝트 보드에 대한 액세스를 관리합니다. 자세한 내용은 “[조직 {% data variables.product.prodname_project_v1 %}에 대한 팀 액세스 관리](/articles/managing-team-access-to-an-organization-project-board)”, “[조직 {% data variables.product.prodname_project_v1 %}에 대한 개인의 액세스 관리](/articles/managing-an-individual-s-access-to-an-organization-project-board)” 또는 “[조직 구성원의 {% data variables.product.prodname_project_v1 %}에 대한 액세스 관리](/articles/managing-access-to-a-project-board-for-organization-members)”를 참조하세요.
- 프로젝트 보드 표시 여부를 관리합니다. 자세한 내용은 “[조직 구성원의 {% data variables.product.prodname_project_v1 %}에 대한 액세스 관리](/articles/managing-access-to-a-project-board-for-organization-members)”를 참조하세요.

## {% data variables.projects.projects_v1_boards %}에 대한 연계 권한

{% data reusables.project-management.cascading-permissions %}

예를 들어 조직 소유자가 모든 조직 구성원에게 {% data variables.projects.projects_v1_board %}에 대한 읽기 권한을 부여하고 {% data variables.projects.projects_v1_board %} 관리자가 조직 구성원에게 개별 공동 작업자로서 해당 보드에 쓰기 권한을 부여하는 경우 해당 사용자는 {% data variables.projects.projects_v1_board %}에 대한 쓰기 권한을 갖게 됩니다.

## {% data variables.projects.projects_v1_board_caps %} 표시 유형

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

{% data reusables.project-management.project-board-visibility %} {% data variables.projects.projects_v1_board %}의 표시 유형을 프라이빗에서 {% ifversion ghae %}내부{% else %}퍼블릭{% endif %}으로 변경하고 다시 돌아갈 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_project_v1 %} 표시 유형 변경](/articles/changing-project-board-visibility)”을 참조하세요.

## 추가 참고 자료

- “[{% data variables.product.prodname_project_v1 %} 표시 유형 변경](/articles/changing-project-board-visibility)”
- “[조직 {% data variables.product.prodname_project_v1 %}에 대한 개인의 액세스 관리](/articles/managing-an-individual-s-access-to-an-organization-project-board)”
- “[조직 {% data variables.product.prodname_project_v1 %}에 대한 팀 액세스 관리](/articles/managing-team-access-to-an-organization-project-board)”
- “[조직 구성원의 {% data variables.product.prodname_project_v1 %}에 대한 액세스 관리](/articles/managing-access-to-a-project-board-for-organization-members)”
