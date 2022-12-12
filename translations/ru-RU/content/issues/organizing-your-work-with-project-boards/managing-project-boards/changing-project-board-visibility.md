---
title: 'Изменение видимости {% data variables.product.prodname_project_v1 %}'
intro: 'Как владелец организации или администратор {% data variables.projects.projects_v1_board %} вы можете сделать {% data variables.projects.projects_v1_board %} {% ifversion ghae %}внутренним{% else %}общедоступным{% endif %} или частным.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Change visibility
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 445675ee14c1d1fb47ded4321ae6ac8816fa6d6f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109100'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% note %}

**{% ifversion classic-project-visibility-permissions %}Примечания{% else %}Примечание{% endif %}:** {% ifversion classic-project-visibility-permissions %}

* {% data reusables.projects.owners-can-limit-visibility-permissions %}
* {% endif %}Когда вы делаете {% data variables.projects.projects_v1_board %} {% ifversion ghae %}внутренней{% else %}общедоступной{% endif %}, сотрудники организации по умолчанию получают доступ на чтение. Вы можете предоставить определенным сотрудникам организации разрешения на запись или администрирование, предоставив доступ командам, в которые они входят, или добавив их к {% data variables.projects.projects_v1_board %} в качестве участников совместной работы. Дополнительные сведения см. в разделе [Разрешения для {% data variables.product.prodname_project_v1_caps %} в организации](/articles/project-board-permissions-for-an-organization).

{% endnote %}

1. Перейдите к доске проекта, которую нужно сделать {% ifversion ghae %}внутренней{% else %}общедоступной{% endif %} или частной.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.choose-visibility %}
1. Выберите команду **Сохранить**.
