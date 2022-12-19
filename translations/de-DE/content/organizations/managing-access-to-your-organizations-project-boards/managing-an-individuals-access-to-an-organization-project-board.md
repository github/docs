---
title: 'Verwalten des Zugriffs einer Einzelperson auf das {% data variables.product.prodname_project_v1 %} einer Organisation'
intro: 'Als Organisationsbesitzer*in oder {% data variables.projects.projects_v1_board %}administrator*in kannst du den Zugriff einzelner Mitglieder auf ein organisationseigenes {% data variables.projects.projects_v1_board %} verwalten.'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage individual access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: ceecfd317322f65541591f833c04f86d5b483c0e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109534'
---
{% data reusables.projects.project_boards_old %}

{% note %}

**Hinweis:** {% data reusables.project-management.cascading-permissions %} Weitere Informationen findest du unter [{% data variables.product.prodname_project_v1_caps %}-Berechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization). 

{% endnote %}

## Erteilen von Zugriff auf ein {% data variables.projects.projects_v1_board %} für Organisationsmitglieder

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Klicke auf **Projekte (klassisch)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. Gib unter „Search by username, full name or email address“ (Nach Benutzernamen, vollständigem Namen oder E-Mail-Adresse suchen) den Namen, den Benutzernamen oder die {% data variables.product.prodname_dotcom %}-E-Mail-Adresse des Mitarbeiters ein.
   ![Abschnitt „Mitarbeiter“ mit dem im Suchfeld eingegebenen Oktocat-Benutzernamen](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}

## Ändern des Zugriffs eines Organisationsmitglieds auf ein {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Klicke auf **Projekte (klassisch)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.collaborator-permissions %}

## Entfernen des Zugriffs eines Organisationsmitglieds auf ein {% data variables.projects.projects_v1_board %}

Wenn du einen Mitarbeiter aus einem {% data variables.projects.projects_v1_board %} entfernst, kann er je nach den Berechtigungen seiner anderen Rollen möglicherweise dennoch weiterhin auf das Board zugreifen. Um den Zugriff auf ein {% data variables.projects.projects_v1_board %} komplett zu verhindern, musst du den Zugriff für jede Rolle dieses Mitarbeiters entfernen. Eine Person kann beispielsweise als Organisationsmitglied oder Teammitglied Zugriff auf das {% data variables.projects.projects_v1_board %} haben. Weitere Informationen findest du unter [{% data variables.product.prodname_project_v1_caps %}-Berechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization).

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Klicke auf **Projekte (klassisch)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}

## Weiterführende Themen

- [{% data variables.product.prodname_project_v1_caps %}-Berechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization)
