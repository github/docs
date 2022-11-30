---
title: 'Verwalten des Teamzugriffs auf das {% data variables.product.prodname_project_v1 %} einer Organisation'
intro: 'Als Organisationsbesitzer*in oder {% data variables.projects.projects_v1_board %}administrator*in kannst du Teamzugriff für ein organisationseigenes {% data variables.projects.projects_v1_board %} erteilen.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c49fab76bbf286f865e3845356213bc1af18b20a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109457'
---
{% data reusables.projects.project_boards_old %}

{% warning %}

**Warnungen:**
- Du kannst die Berechtigungsstufe eines Teams ändern, wenn das Team direkten Zugriff auf ein {% data variables.projects.projects_v1_board %} hat. Wenn der Zugriff des Teams auf das {% data variables.projects.projects_v1_board %} von einem übergeordneten Team geerbt wird, musst du den Zugriff des übergeordneten Teams auf das {% data variables.projects.projects_v1_board %} ändern.
- Wenn du Zugriff auf ein {% data variables.projects.projects_v1_board %} für ein übergeordnetes Team hinzufügst oder entfernst, erhalten alle ihm untergeordneten Teams ebenfalls Zugriff auf das {% data variables.projects.projects_v1_board %}. Weitere Informationen findest du unter [Informationen zu Teams](/articles/about-teams).

{% endwarning %}

## Erteilen von Teamzugriff auf ein {% data variables.projects.projects_v1_board %}

Du kannst einem gesamten Team dieselbe Berechtigungsstufe für ein {% data variables.projects.projects_v1_board %} zuweisen.

{% note %}

**Hinweis**: {% data reusables.project-management.cascading-permissions %} Wenn ein(e) Organisationsbesitzer*in beispielsweise einem Team Leseberechtigungen für ein {% data variables.projects.projects_v1_board %} erteilt hat und ein(e) {% data variables.projects.projects_v1_board %}administrator*in einem Mitglied dieses Teams individuelle Administratorberechtigungen für dieses Projektboard zuweist, besitzt diese Person Administratorberechtigungen für das {% data variables.projects.projects_v1_board %}. Weitere Informationen findest du unter [{% data variables.product.prodname_project_v1_caps %}-Berechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization).

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Klicke auf **Projekte (klassisch)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. Klicke auf der linken Randleiste auf **Teams**.
9. Wenn du ein Team hinzufügen möchtest, klicke auf **Team hinzufügen: Team auswählen**. Wähle dann ein Team im Dropdownmenü aus, oder suche nach dem Team, das du hinzufügen möchtest.
 ![Dropdownmenü zum Hinzufügen von Teams mit einer Liste der Teams in der Organisation](/assets/images/help/projects/add-a-team.png)
10. Verwende das Dropdownmenü neben dem Teamnamen, um die gewünschte Berechtigungsstufe auszuwählen: **Lesen**, **Schreiben** oder **Administrator**. ![Dropdownmenü „Teamberechtigungen“ mit den Optionen „Lesen“, „Schreiben“ und „Administrator“](/assets/images/help/projects/org-project-team-choose-permissions.png)

## Konfigurieren von Teamzugriff auf ein {% data variables.projects.projects_v1_board %}

Wenn der Zugriff eines Teams auf das {% data variables.projects.projects_v1_board %} von einem übergeordneten Team geerbt wird, musst du den Zugriff des übergeordneten Teams auf das {% data variables.projects.projects_v1_board %} ändern, um den Zugriff der untergeordneten Teams zu aktualisieren.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. Klicke oberhalb der Unterhaltung des Teams auf {% octicon "project" aria-label="The Projects icon" %} **Projekte**.
  ![Registerkarte mit Teamrepositorys](/assets/images/help/organizations/team-project-board-button.png)
5. Zum Ändern der Berechtigungsstufen verwende das Dropdownmenü rechts neben dem zu aktualisierenden {% data variables.projects.projects_v1_board %}. Wenn du ein {% data variables.projects.projects_v1_board %} entfernen möchtest, klicke auf **{% octicon "trash" aria-label="The trash icon" %}** .
  ![Papierkorbschaltfläche zum Entfernen eines Projektboards aus dem Team](/assets/images/help/organizations/trash-button.png)

{% ifversion projects-v2-add-to-team %}

## Weitere Informationsquellen

- [Hinzufügen deines Projekts zu einem Team](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)


{% endif %}
