---
title: 'Добавление {% data variables.projects.project_v2 %} в команду'
shortTitle: 'Adding a {% data variables.projects.project_v2 %} to a team'
intro: Вы можете добавлять проекты в команды для управления разрешениями и улучшения возможности обнаружения проектов.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-add-to-team
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners or people with the team maintainer role and admin permissions on a project can add a project to a team.
ms.openlocfilehash: 21e0944c95949aedf9a0039ef7b576b8840635b1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108800'
---
## Сведения о добавлении проектов в команды

Вы можете добавить проекты в команду, чтобы предоставить всем участникам совместной работы доступ к своим проектам. При добавлении проекта в команду он отображается на странице проектов команды, что упрощает для участников определение проектов, которые использует определенная команда.

Командам предоставляются разрешения на чтение для любого проекта, в который они добавляются. Это разрешение добавляется к существующим разрешениям для проекта и отдельных участников группы, обеспечивая сохранение любых более высоких разрешений. Дополнительные сведения о настройке разрешений для команд и отдельных участников см. в разделе [Управление доступом к проектам](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects).

## Добавление проекта в команду

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. Щелкните {% octicon "project" aria-label="The Projects icon" %} **Проекты**.
   
   ![Снимок экрана: вкладка "Командные проекты".](/assets/images/help/organizations/team-project-board-button.png)
   
1. Щелкните **Добавить проект**.
   
   ![Снимок экрана: кнопка "Добавить проект".](/assets/images/help/organizations/team-project-add-project.png)
   
1. Начните вводить имя проекта, который вы хотите добавить, а затем выберите проект в списке совпадений.  
   
   {% note %}
   
   **Примечание:** Если это изменение приведет к увеличению разрешений проекта для участников команды, {% data variables.product.product_name %} предложит подтвердить выбор.
   
   {% endnote %}
   
   ![Снимок экрана: форма "Добавить проект".](/assets/images/help/organizations/team-project-search.png)
   

## Удаление проекта из команды

{% data reusables.projects.project-settings %}
1. Щелкните **Управление доступом**.
   
   ![Снимок экрана: пункт "Управление доступом"](/assets/images/help/projects-v2/manage-access.png)
   
1. Рядом с командой, которую вы хотите удалить из проекта, нажмите кнопку **Удалить**.
   
   ![Снимок экрана: удаление участника совместной работы](/assets/images/help/projects-v2/access-remove-member.png)
   

{% ifversion projects-v1 %}

## Дополнительные материалы

- [Управление доступом команды к организации {% data variables.product.prodname_project_v1 %}](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)

{% endif %}
