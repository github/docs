---
title: 'Добавление стороннего участника совместной в {% data variables.product.prodname_project_v1 %} в вашей организации'
intro: 'Как владелец организации или администратор {% data variables.projects.projects_v1_board %} вы можете добавить стороннего участника совместной работы и настроить его разрешения для {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /articles/adding-an-outside-collaborator-to-a-project-board-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-an-outside-collaborator-to-a-project-board-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a collaborator
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 517e0c6f71d1b70eb19dc85dfe3334ff0144c814
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110138'
---
{% data reusables.projects.project_boards_old %}

Сторонний участник совместной работы — это пользователь, который явно не назначен участником вашей организации, но имеет разрешения для доступа к {% data variables.projects.projects_v1_board %} в вашей организации.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Щелкните **Проекты (классические)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. В разделе "Поиск по имени пользователя, полному имени или адресу электронной почты" введите имя стороннего участника совместной работы, имя пользователя или адрес электронной почты {% data variables.product.prodname_dotcom %}.
   ![Раздел "Участники совместной работы" с именем пользователя Octocat, указанным в поле поиска ](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}
