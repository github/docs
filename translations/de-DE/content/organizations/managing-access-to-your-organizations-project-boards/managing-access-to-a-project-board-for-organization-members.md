---
title: 'Verwalten des Zugriffs auf ein {% data variables.product.prodname_project_v1 %} für Organisationsmitglieder'
intro: 'Als Organisationsbesitzer*in oder {% data variables.projects.projects_v1_board %}administrator*in kannst du für alle Organisationsmitglieder eine Standardberechtigungsstufe für ein {% data variables.projects.projects_v1_board %} festlegen.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage access for members
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c0b280f6c1b28532b191282db465b5ae5b3c274
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109441'
---
{% data reusables.projects.project_boards_old %}

Standardmäßig haben Organisationsmitglieder Schreibzugriff auf die {% data variables.projects.projects_v1_boards %} ihrer Organisation, sofern Organisationsbesitzer*innen oder {% data variables.projects.projects_v1_board %}administrator*innen keine unterschiedlichen Berechtigungen für bestimmte {% data variables.projects.projects_v1_boards %} festgelegt haben.

## Eine grundlegende Berechtigungsebene für alle Organisationsmitglieder festlegen

{% tip %}

**Tipp:** Du kannst einem Organisationsmitglied höhere Berechtigungen für ein {% data variables.projects.projects_v1_board %} erteilen. Weitere Informationen findest du unter [Projektboardberechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization).

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Klicke auf **Projekte (klassisch)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. Wähle unter „Organisationsmitgliedsberechtigung“ eine Baselineberechtigungsebene für alle Organisationsmitglieder aus: **Lesen**, **Schreiben**, **Administrator** oder **Keine**.
![Optionen für Baseline-Projektboardberechtigungen für alle Organisationsmitglieder](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. Klicken Sie auf **Speichern**.

## Weiterführende Themen

- [Verwalten des Zugriffs einer Einzelperson auf das {% data variables.product.prodname_project_v1 %} einer Organisation](/articles/managing-an-individual-s-access-to-an-organization-project-board)
- [Verwalten des Teamzugriffs auf das {% data variables.product.prodname_project_v1 %} einer Organisation](/articles/managing-team-access-to-an-organization-project-board)
- [{% data variables.product.prodname_project_v1_caps %}-Berechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization)
