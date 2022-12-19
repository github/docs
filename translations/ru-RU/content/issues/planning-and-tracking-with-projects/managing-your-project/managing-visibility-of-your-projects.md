---
title: 'Управление видимостью {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} visibility'
intro: 'Сведения о настройке {% data variables.projects.project_v2 %} для частного или общедоступного просмотра.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners can manage the visibility of project boards in their organization. Organization owners can also allow collaborators with admin permissions to manage project visibility. Visibility of user projects can be managed by the owner of the project and collaborators with admin permissions.
ms.openlocfilehash: fbe4f0943010129b14ace21f6071b99e1160053b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110139'
---
## Сведения о видимости проекта

Проекты могут быть общедоступными или частными. Если проект общедоступный, его могут просматривать все пользователи в Интернете. Частные проекты видят только пользователи, которым предоставлен доступ на чтение.

Речь идет только о видимости проекта; для просмотра отдельных элементов у пользователя должны быть необходимые разрешения в отношении репозитория, к которому относится тот или иной элемент. Если проект содержит элементы из частного репозитория, пользователи, которые не являются участниками совместной работы в этом репозитории, не смогут просматривать элементы из этого репозитория.

![Проект со скрытым элементом](/assets/images/help/projects/hidden-items.png)

Администраторы проектов и владельцы организации могут управлять видимостью проекта. Владельцы организации{% ifversion project-visibility-policy %} и владельцы предприятия{% endif %} могут ограничить возможность изменения видимости проекта только владельцами организации.

В общедоступных и частных проектах аналитические сведения видны только пользователям с разрешениями на запись для проекта.

В частных проектах, принадлежащих организациям, аватары пользователей, которые вносят обновления в проект в текущий момент, отображаются в пользовательском интерфейсе проекта.

Администраторы проектов также могут управлять доступом на запись и администрирование в отношении проекта и доступом на чтение для отдельных пользователей. Дополнительные сведения см. в статье [Управление доступом к проектам](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects).

## Изменение видимости проекта

{% data reusables.projects.project-settings %}
1. Рядом с элементом **Видимость** в разделе "Зона опасности" выберите **Частный** или **Общедоступный**.
   ![Снимок экрана: элементы управления видимостью](/assets/images/help/projects-v2/visibility.png)

## Дополнительные материалы

- [Разрешение изменения видимости проекта в организации](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
