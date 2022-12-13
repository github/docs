---
title: 'Deaktivieren von {% ifversion projects-v2 %}Projekten{% else %}Projektboards{% endif %} in deiner Organisation'
intro: 'Organisationsbesitzer*innen können {% ifversion projects-v2 %}organisationsweite {% data variables.projects.projects_v2 %}, organisationsweite {% data variables.projects.projects_v1_boards %} sowie {% data variables.projects.projects_v1_boards %} auf Repositoryebene{% else %}organisationsweite Projektboards und Repository-Projektboards{% endif %} in einer Organisation deaktivieren.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Disable projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1e2aed1e7c689bee83dabc4a6750f8976206f4a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423324'
---
Wenn du organisationsweite Projektboards deaktivierst, kannst du keine neuen Projektboards auf Organisationsebene mehr erstellen. Außerdem sind vorhandene Projektboards auf Organisationsebene dann nicht mehr über deren frühere URL zugänglich. Projektboards in Repositorys in der Organisation sind nicht betroffen. {% ifversion projects-v2 %} Diese Einstellungen gelten für {% data variables.projects.projects_v2 %} und {% data variables.projects.projects_v1_boards %}. {% endif %}

Wenn du Repository-Projektboards in einer Organisation deaktiviert hast, kannst du keine neuen Projektboards in den Repositorys der Organisation mehr erstellen. Außerdem sind vorhandene Projektboards in Repositorys der Organisation dann nicht mehr über deren frühere URL zugänglich. Projektboards auf Organisationsebene sind nicht betroffen.


Wenn du Projektboards deaktivierst, werden keine Projektboardinformationen mehr auf Zeitskalen oder in [Überwachungsprotokollen](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization) angezeigt.


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. Klicke im Abschnitt „Codeplanung und Automatisierung“ der Seitenleiste auf **{% octicon "table" aria-label="The table icon" %} Projekte**.
{% endif %}
1. Lege fest, ob du organisationsweite Projektboards, Repository-Projektboards der Organisation oder beides deaktivieren möchtest. Führe anschließend unter „Projects“ (Projekte) Folgendes aus:
    - Um organisationsweite Projektboards zu deaktivieren, hebe die Auswahl von **Projekte für die Organisation aktivieren** auf.
    - Um Repository-Projektboards in der Organisation zu deaktivieren, hebe die Auswahl von **Projekte für alle Repositorys aktivieren** auf.
  ![Kontrollkästchen, um Projekte für eine Organisation oder für alle Repositorys einer Organisation zu deaktivieren](/assets/images/help/projects/disable-org-projects-checkbox.png)
1. Klicken Sie auf **Speichern**.

{% data reusables.organizations.disable_project_board_results %}

## Weiterführende Themen

{% ifversion projects-v2 %}- [Informationen zu {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects){% endif %}
- [Informationen zu {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)
- [Schließen eines {% data variables.projects.projects_v1_board %}s](/articles/closing-a-project-board)
- [Löschen eines {% data variables.projects.projects_v1_board %}s](/articles/deleting-a-project-board)
- [Deaktivieren von {% data variables.projects.projects_v1_boards %} in einem Repository](/articles/disabling-project-boards-in-a-repository)
