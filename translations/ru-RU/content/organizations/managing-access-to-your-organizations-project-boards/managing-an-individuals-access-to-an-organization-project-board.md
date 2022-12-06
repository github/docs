---
title: 'Управление доступом пользователя к {% data variables.product.prodname_project_v1 %} организации'
intro: 'Как владелец организации или администратор {% data variables.projects.projects_v1_board %} вы можете управлять доступом отдельных участников к {% data variables.projects.projects_v1_board %}, принадлежащим вашей организации.'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage individual access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: ceecfd317322f65541591f833c04f86d5b483c0e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109535'
---
{% data reusables.projects.project_boards_old %}

{% note %}

**Примечание.** {% data reusables.project-management.cascading-permissions %} Дополнительные сведения см. в разделе [Разрешения для {% data variables.product.prodname_project_v1_caps %} в организации](/articles/project-board-permissions-for-an-organization). 

{% endnote %}

## Предоставление участнику организации доступа к {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Щелкните **Проекты (классические)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. В разделе "Поиск по имени пользователя, полному имени или адресу электронной почты" введите имя участника совместной работы, имя пользователя или адрес электронной почты {% data variables.product.prodname_dotcom %}.
   ![Раздел "Участники совместной работы" с именем пользователя Octocat, указанным в поле поиска ](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}

## Изменение доступа участника организации к {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Щелкните **Проекты (классические)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.collaborator-permissions %}

## Удаление у участников организации доступа к {% data variables.projects.projects_v1_board %}

При удалении участника совместной работы с {% data variables.projects.projects_v1_board %} он сохранит доступ к доске с учетом разрешений, которые у него имеются для других ролей. Чтобы полностью удалить доступ к {% data variables.projects.projects_v1_board %} необходимо удалить доступ для каждой роли, которая есть у пользователя. Например, у пользователя может быть доступ к {% data variables.projects.projects_v1_board %} в качестве участника организации или участника группы. Дополнительные сведения см. в разделе [Разрешения для {% data variables.product.prodname_project_v1_caps %} в организации](/articles/project-board-permissions-for-an-organization).

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Щелкните **Проекты (классические)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}

## Дополнительные материалы

- [Разрешения для {% data variables.product.prodname_project_v1_caps %} в организации](/articles/project-board-permissions-for-an-organization)
