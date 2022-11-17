---
title: Разрешение изменения видимости проекта в организации
intro: 'Владельцы организации могут разрешить участникам с разрешениями администратора настроить видимость {% data variables.projects.projects_v2_and_v1 %} в своей организации.'
versions:
  feature: classic-project-visibility-permissions-or-projects-v2
topics:
  - Organizations
  - Projects
shortTitle: Project visibility permissions
allowTitleToDifferFromFilename: true
permissions: 'Organization owners can allow {% data variables.projects.project_v2_and_v1 %} visibility changes for an organization.'
ms.openlocfilehash: 5f8963e8c03e2c0a62586964b6331ec7b3d945b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109536'
---
## Сведения об изменениях видимости для проектов

Вы можете ограничить доступ к изменению видимости {% data variables.projects.projects_v2_and_v1 %} в организации, например запретить участникам изменять состояние {% data variables.projects.projects_v2_and_v1 %} с частного на общедоступное. 

Вы можете предоставить возможность изменять видимость {% data variables.projects.project_v2_and_v1 %} только владельцам организации или любому пользователю с административными правами доступа.

{% ifversion project-visibility-policy %} Этот параметр может быть недоступен, если владелец предприятия ограничивает изменение видимости для {% data variables.projects.projects_v2_and_v1 %} на корпоративном уровне. Дополнительные сведения см. в разделе [Применение политик для проектов на вашем предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise).
{% endif %}

## Разрешение участникам изменять видимость проекта

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. В разделе "Планирование и автоматизация кода" на боковой панели щелкните **{% octicon "table" aria-label="The table icon" %} Проекты**.
1. Чтобы разрешить участникам настраивать видимость проекта, выберите **Разрешить участникам изменять видимость проекта для этой организации**.
  ![Снимок экрана: флажок для настройки изменений видимости](/assets/images/help/projects-v2/visibility-change-checkbox.png)
1. Выберите команду **Сохранить**.

## Дополнительные материалы

{% ifversion projects-v2 %}
- [Управление видимостью {% data variables.projects.projects_v2 %}](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects) {%- endif %}{%- ifversion projects-v1 %}
- [Изменение видимости {% data variables.product.prodname_project_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility) {% endif %}
