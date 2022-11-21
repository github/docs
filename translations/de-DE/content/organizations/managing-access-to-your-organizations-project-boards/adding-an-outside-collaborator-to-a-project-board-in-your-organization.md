---
title: 'Hinzufügen externer Mitarbeiter*innen zu einem {% data variables.product.prodname_project_v1 %} in deiner Organisation'
intro: 'Als Organisationsbesitzer*in oder {% data variables.projects.projects_v1_board %}administrator kannst du externe Mitarbeiter*innen hinzufügen und ihre Berechtigungen für ein {% data variables.projects.projects_v1_board %} anpassen.'
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
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109784'
---
{% data reusables.projects.project_boards_old %}

Externe Mitarbeiter*innen sind Personen, die nicht explizit Mitglieder deiner Organisation sein, aber auf ein {% data variables.projects.projects_v1_board %} in deiner Organisation zugreifen können.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Klicke auf **Projekte (klassisch)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. Gib unter „Search by username, full name or email address“ (Nach Benutzername, vollständigem Namen oder E-Mail-Adresse suchen) den Namen, den Benutzernamen oder die {% data variables.product.prodname_dotcom %}-E-Mail-Adresse des externen Mitarbeiters ein.
   ![Abschnitt „Mitarbeiter“ mit dem im Suchfeld eingegebenen Oktocat-Benutzernamen](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}
