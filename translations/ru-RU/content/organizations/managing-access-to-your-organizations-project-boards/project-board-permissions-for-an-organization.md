---
title: 'Разрешения для {% data variables.product.prodname_project_v1_caps %} в организации'
intro: 'Владельцы и пользователи организации с разрешениями администратора {% data variables.projects.projects_v1_board %} могут настраивать, у кого должны быть разрешения на чтение, запись и администрирование в {% data variables.projects.projects_v1_boards %} в организации.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614210'
---
{% data reusables.projects.project_boards_old %}

## Permissions overview (Общие сведения о разрешениях)

Существует три уровня разрешений для {% data variables.projects.projects_v1_board %} для людей и команд:

{% data reusables.project-management.project-board-permissions %}

Владельцы организации и пользователи с разрешениями администратора могут предоставлять пользователям доступ к {% data variables.projects.projects_v1_board %} организации индивидуально, как стороннему участнику или как участнику организации, либо посредством членства в команде или организации. Сторонний участник совместной работы — это пользователь, который не является членом организации, но ему предоставлены разрешения на совместную работу в вашей организации.

Владельцы организации и пользователи с разрешениями администратора для {% data variables.projects.projects_v1_board %} также могут:
- Настройка разрешений по умолчанию для доступа к панели проекта всех участников организации.
- Управление доступом к панели проекта для участников организации, команд и внешних участников совместной работы. Дополнительные сведения см. в разделе [Управление доступом команды к {% data variables.product.prodname_project_v1 %} организации](/articles/managing-team-access-to-an-organization-project-board), [Управление доступом пользователя к {% data variables.product.prodname_project_v1 %} организации](/articles/managing-an-individual-s-access-to-an-organization-project-board) или [Управление доступом к {% data variables.product.prodname_project_v1 %} для членов организации](/articles/managing-access-to-a-project-board-for-organization-members).
- Управление видимостью панели проекта. Дополнительные сведения см. в разделе [Управление доступом к {% data variables.product.prodname_project_v1 %} для участников организации](/articles/managing-access-to-a-project-board-for-organization-members).

## Каскадные разрешения для {% data variables.projects.projects_v1_boards %}

{% data reusables.project-management.cascading-permissions %}

Например, если владелец организации предоставил членам организации разрешения на чтение для {% data variables.projects.projects_v1_board %}, и администратор {% data variables.projects.projects_v1_board %} предоставляет члену организации разрешения на запись для этой панели, как для отдельного участника совместной работы, то такой пользователь будет иметь разрешения на запись для {% data variables.projects.projects_v1_board %}.

## Видимость {% data variables.projects.projects_v1_board_caps %}

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

{% data reusables.project-management.project-board-visibility %} Можно изменить видимость {% data variables.projects.projects_v1_board %} с "Частная" на {% ifversion ghae %}"Внутренняя"{% else %}"Общедоступная"{% endif %} и обратно. Дополнительные сведения см. в разделе [Изменение видимости {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility).

## Дополнительные материалы

- [Изменение видимости {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility)
- [Управление доступом пользователя к {% data variables.product.prodname_project_v1 %} организации](/articles/managing-an-individual-s-access-to-an-organization-project-board)
- [Управление доступом команды к {% data variables.product.prodname_project_v1 %} организации](/articles/managing-team-access-to-an-organization-project-board)
- [Управление доступом к {% data variables.product.prodname_project_v1 %} для участников организации](/articles/managing-access-to-a-project-board-for-organization-members)
