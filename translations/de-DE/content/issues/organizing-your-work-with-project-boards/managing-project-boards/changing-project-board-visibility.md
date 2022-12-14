---
title: 'Ändern der Sichtbarkeit von {% data variables.product.prodname_project_v1 %}.'
intro: 'Als Organisationsbesitzer*in oder {% data variables.projects.projects_v1_board %}administrator*in kannst du ein {% data variables.projects.projects_v1_board %} als {% ifversion ghae %}intern{% else %}öffentlich{% endif %} oder privat festlegen.'
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
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108483'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% note %}

**{% ifversion classic-project-visibility-permissions %}Hinweise{% else %}Hinweis{% endif %}:** {% ifversion classic-project-visibility-permissions %}

* {% data reusables.projects.owners-can-limit-visibility-permissions %}
* {% endif %}Wenn du dein {% data variables.projects.projects_v1_board %} als {% ifversion ghae %}intern{% else %}öffentlich{% endif %} kennzeichnest, erhalten Organisationsmitglieder standardmäßig Lesezugriff. Du kannst bestimmten Organisationsmitgliedern Schreib- oder Administratorberechtigungen erteilen, indem du Teams, denen diese Mitglieder angehören, Zugriff auf das {% data variables.projects.projects_v1_board %} gewährst oder dem Projektboard die gewünschten Mitglieder als Mitarbeiter hinzufügst. Weitere Informationen findest du unter [{% data variables.product.prodname_project_v1_caps %}-Berechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization).

{% endnote %}

1. Navigiere zum Projektboard, das als {% ifversion ghae %}intern{% else %}öffentlich{% endif %} oder privat gekennzeichnet werden soll.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.choose-visibility %}
1. Klicken Sie auf **Speichern**.
