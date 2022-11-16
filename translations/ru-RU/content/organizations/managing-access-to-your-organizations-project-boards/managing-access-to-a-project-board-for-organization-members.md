---
title: 'Управление доступом к {% data variables.product.prodname_project_v1 %} для участников организации'
intro: 'Как владелец организации или администратор {% data variables.projects.projects_v1_board %} вы можете задать уровень разрешений по умолчанию для {% data variables.projects.projects_v1_board %} для всех участников организации.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage access for members
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c0b280f6c1b28532b191282db465b5ae5b3c274
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109440'
---
{% data reusables.projects.project_boards_old %}

По умолчанию члены организации имеют доступ на запись на {% data variables.projects.projects_v1_boards %} своей организации, если только владельцы организации или администраторы {% data variables.projects.projects_v1_board %} не настроили другие разрешения для {% data variables.projects.projects_v1_boards %}.

## Настройка базового уровня разрешений для всех участников организации

{% tip %}

**Совет.** Вы можете предоставить участнику организации более высокие разрешения для {% data variables.projects.projects_v1_board %}. Дополнительные сведения см. в статье [Разрешения для панели проекта для организации](/articles/project-board-permissions-for-an-organization).

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Щелкните **Проекты (классические)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. В разделе "Разрешения для участника организации" выберите базовый уровень разрешений для всех участников организации: **Чтение**, **Запись**, **Администратор** или **Нет**.
![Базовые параметры разрешений всех участников организации для панели проекта](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. Выберите команду **Сохранить**.

## Дополнительные материалы

- [Управление доступом пользователя к {% data variables.product.prodname_project_v1 %} организации](/articles/managing-an-individual-s-access-to-an-organization-project-board)
- [Управление доступом команды к {% data variables.product.prodname_project_v1 %} организации](/articles/managing-team-access-to-an-organization-project-board)
- [Разрешения для {% data variables.product.prodname_project_v1_caps %} в организации](/articles/project-board-permissions-for-an-organization)
