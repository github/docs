---
title: 'Hinzufügen deines {% data variables.projects.project_v2 %}s zu einem Team'
shortTitle: 'Adding a {% data variables.projects.project_v2 %} to a team'
intro: 'Du kannst Projekte zu Teams hinzufügen, um Berechtigungen zu verwalten und die Auffindbarkeit von Projekten zu verbessern.'
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
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108283'
---
## Informationen zum Hinzufügen von Projekten zu Teams

Du kannst deinem Team Projekte hinzufügen, damit das gesamte Team Zugriff auf die jeweiligen Projekte hat. Wenn du einem Team ein Projekt hinzufügst, wird dieses Projekt auf der Projektseite des Teams aufgeführt. So können die Teammitglieder leichter erkennen, welche Projekte ein bestimmtes Team verwendet.

Teams erhalten Leseberechtigungen für jedes Projekt, dem sie hinzugefügt werden. Diese Berechtigung wird den bestehenden Berechtigungen hinzugefügt, die für das Projekt und die einzelnen Teammitglieder gelten. So wird sichergestellt, dass alle höheren Berechtigungen erhalten bleiben. Weitere Informationen zum Festlegen von Berechtigungen für Teams und einzelne Mitwirkende findest du unter [Verwalten des Zugriffs auf deine Projekte](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects).

## Hinzufügen eines Projekts zu einem Team

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. Klicke auf {% octicon "project" aria-label="The Projects icon" %} **Projekte**.
   
   ![Screenshot der Registerkarte für Teamprojekte](/assets/images/help/organizations/team-project-board-button.png)
   
1. Klicke auf **Projekt hinzufügen**.
   
   ![Screenshot der Schaltfläche „Projekt hinzufügen“](/assets/images/help/organizations/team-project-add-project.png)
   
1. Beginne damit, den Namen des hinzuzufügenden Projekts einzugeben, und wähle dann das Projekt in der Ergebnisliste aus.  
   
   {% note %}
   
   **Hinweis:** Wenn diese Änderung dazu führt, dass die Projektberechtigungen der Teammitglieder erhöht werden, wirst du von {% data variables.product.product_name %} aufgefordert, deine Auswahl zu bestätigen.
   
   {% endnote %}
   
   ![Screenshot des Formulars „Projekt hinzufügen“](/assets/images/help/organizations/team-project-search.png)
   

## Entfernen eines Projekts aus einem Team

{% data reusables.projects.project-settings %}
1. Klicke auf **Manage access** (Zugriff verwalten).
   
   ![Screenshot des Elements „Manage access“ (Zugriff verwalten)](/assets/images/help/projects-v2/manage-access.png)
   
1. Klicke neben dem Team, das du aus dem Projekt entfernen möchtest, auf **Entfernen**.
   
   ![Screenshot: Entfernen eines Mitarbeiters](/assets/images/help/projects-v2/access-remove-member.png)
   

{% ifversion projects-v1 %}

## Weitere Informationsquellen

- [Verwalten des Teamzugriffs auf ein {% data variables.product.prodname_project_v1 %} einer Organisation](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)

{% endif %}
