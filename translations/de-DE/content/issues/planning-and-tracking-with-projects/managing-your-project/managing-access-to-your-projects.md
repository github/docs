---
title: 'Verwalten des Zugriffs auf deine {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} access'
intro: 'Erfahre, wie du Team- und individuellen Zugriff auf dein {% data variables.projects.project_v2 %} verwaltest.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-access-to-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 9c414ab3bfbbd9bbf488a73e5dd2600458074914
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109262'
---
## Informationen zum Projektzugriff

Administrator*innen von Projekten auf Organisationsebene können den Zugriff für die gesamte Organisation, für Teams, für einzelne Organisationsmitglieder und für externe Projektmitarbeiter*innen verwalten. 

Administrator*innen von Projekten auf Benutzerebene können einzelne Projektmitarbeiter*innen einladen und ihren Zugriff verwalten.

Projektadministrator*innen können auch die Sichtbarkeit ihres Projekts für jeden im Internet steuern. Weitere Informationen findest du unter [Verwalten der Sichtbarkeit deiner Projekte](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects).

## Verwalten des Zugriffs für Projekte auf Organisationsebene

### Verwalten des Zugriffs für alle Personen in deiner Organisation

Die Standardbasisrolle ist `write`, was bedeutet, dass jeder in der Organisation dein Projekt anzeigen und bearbeiten kann. Um den Projektzugriff für alle Personen in der Organisation zu ändern, kannst du die Basisrolle ändern. Änderungen an der Basisrolle wirken sich nur auf Organisationsmitglieder aus, die keine Organisationsinhaber*innen sind und denen kein individueller Zugriff gewährt wird.

{% data reusables.projects.project-settings %}
1. Klicke auf **Manage access** (Zugriff verwalten).
   ![Screenshot des Elements „Manage access“ (Zugriff verwalten)](/assets/images/help/projects-v2/manage-access.png)
2. Wähle unter **Base role** (Basisrolle) die Standardrolle aus.
   ![Screenshot des Menüs „Base role“ (Basisrolle)](/assets/images/help/projects-v2/base-role.png)
   - **No access** (Kein Zugriff): Nur Organisationsinhaber*innen und Benutzer*innen, denen individueller Zugriff gewährt wurde, können das Projekt anzeigen. Organisationsinhaber*innen sind auch Administrator*innen für das Projekt.
   - **Read** (Lesen): Jeder in der Organisation kann das Projekt anzeigen. Organisationsinhaber*innen sind auch Administrator*innen für das Projekt.
   - **Write** (Schreiben): Jeder in der Organisation kann das Projekt anzeigen und bearbeiten. Organisationsinhaber*innen sind auch Administrator*innen für das Projekt.
   - **Admin**: Jeder in der Organisation ist ein*e Administrator*in für das Projekt.

### Verwalten des Zugriffs für Teams und einzelne Mitglieder deiner Organisation

Du kannst auch Teams, externe Projektmitarbeiter*innen und einzelne Organisationsmitglieder als Projektmitarbeiter*innen für ein Projekt auf Organisationsebene hinzufügen. Weitere Informationen findest du unter [Informationen zu Teams](/organizations/organizing-members-into-teams/about-teams).

{% ifversion projects-v2-add-to-team %}

Wenn du einem Team Leseberechtigungen oder mehr für ein Projekt erteilst, wird das Projekt auch auf der Projektseite des Teams angezeigt. Du kannst auch auf der Projektseite des Teams einem Team Projekte hinzufügen. Weitere Informationen findest du unter [Hinzufügen deines Projekts zu einem Team](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team).  

{% endif %}

Du kannst nur eine*n einzelne*n Benutzer*in einladen, an deinem Projekt auf Organisationsebene mitzuarbeiten, wenn er oder sie bereits Mitglied der Organisation oder ein*e externe*r Projektmitarbeiter*in in mindestens einem Repository in der Organisation sind.

{% data reusables.projects.project-settings %}
1. Klicke auf **Manage access** (Zugriff verwalten).
   ![Screenshot des Elements „Manage access“ (Zugriff verwalten)](/assets/images/help/projects-v2/manage-access.png)
2. Suche unter **Invite collaborators** (Projektmitarbeiter einladen) nach dem Team oder einzelnen Benutzer, das bzw. den du einladen möchtest.
   ![Screenshot: Suchen nach Mitarbeiter*innen](/assets/images/help/projects-v2/access-search.png)
3. Wähle die Rolle für den bzw. die Projektmitarbeiter*in aus.
   ![Screenshot: Auswählen einer Rolle](/assets/images/help/projects-v2/access-role.png)
   - **Read** (Lesen): Das Team oder die Einzelperson kann das Projekt anzeigen.
   - **Write** (Schreiben): Das Team oder die Einzelperson kann das Projekt anzeigen und bearbeiten.
   - **Admin**: Das Team oder die Einzelperson kann das Projekt anzeigen, bearbeiten und neue Projektmitarbeiter*innen hinzufügen.
4. Klicke auf **Einladen**.
   ![Screenshot der Schaltfläche „Einladen“](/assets/images/help/projects-v2/access-invite.png)

### Verwalten des Zugriffs eines vorhandenen Projektmitarbeiters auf dein Projekt

{% data reusables.projects.project-settings %}
1. Klicke auf **Manage access** (Zugriff verwalten).
   ![Screenshot des Elements „Manage access“ (Zugriff verwalten)](/assets/images/help/projects-v2/manage-access.png)
1. Suche unter **Manage access** (Zugriff verwalten) nach den Projektmitarbeiter*innen, deren Berechtigungen du ändern möchtest.

   Du kannst die Dropdownmenüs **Type** (Typ) und **Role** (Rolle) verwenden, um die Zugriffsliste zu filtern.
   ![Screenshot eines Mitarbeiters](/assets/images/help/projects-v2/access-find-member.png)

1. Bearbeite die Rolle für den bzw. die Mitarbeiter*in(nen).
   ![Screenshot: Ändern der Rolle eines Mitarbeiters](/assets/images/help/projects-v2/access-change-role.png)
1. Klicke wahlweise auf **Entfernen**, um den bzw. die Mitarbeiter*in(nen) zu entfernen.
   ![Screenshot: Entfernen eines Mitarbeiters](/assets/images/help/projects-v2/access-remove-member.png)

## Verwalten des Zugriffs für Projekte auf Benutzerebene

### Projektmitarbeiter*innen Zugriff auf deine Projekt gewähren

{% note %}

Dies betrifft nur Projektmitarbeiter*innen für dein Projekt, nicht für Repositorys in deinem Projekt. Um ein Element im Projekt anzuzeigen, muss eine Person über die erforderlichen Berechtigungen für das Repository verfügen, zu dem das Element gehört. Wenn dein Projekt Elemente aus einem privaten Repository enthält, können Personen, die keine Projektmitarbeiter*innen im Repository sind, keine Elemente aus diesem Repository anzeigen. Weitere Informationen findest du unter [Festlegen der Sichtbarkeit des Repositorys](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility) und [Verwalten von Teams und Personen mit Zugriff auf dein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).

{% endnote %}

{% data reusables.projects.project-settings %}
1. Klicke auf **Manage access** (Zugriff verwalten).
   ![Screenshot des Elements „Manage access“ (Zugriff verwalten)](/assets/images/help/projects-v2/manage-access.png)
2. Suche unter **Invite collaborators** (Projektmitarbeiter einladen) nach dem Benutzer bzw. der Benutzerin, den bzw. die du einladen möchtest.
   ![Screenshot: Suchen nach Mitarbeiter*innen](/assets/images/help/projects-v2/access-search.png)
3. Wähle die Rolle für den bzw. die Projektmitarbeiter*in aus.
   ![Screenshot: Auswählen einer Rolle](/assets/images/help/projects-v2/access-role.png)
   - **Read** (Lesen): Eine Einzelperson kann das Projekt anzeigen.
   - **Write** (Schreiben): Eine Einzelperson kann das Projekt anzeigen und bearbeiten.
   - **Admin**: Eine Einzelperson kann das Projekt anzeigen, bearbeiten und neue Projektmitarbeiter*innen hinzufügen.
4. Klicke auf **Einladen**.
   ![Screenshot der Schaltfläche „Einladen“](/assets/images/help/projects-v2/access-invite.png)

### Verwalten des Zugriffs eines vorhandenen Projektmitarbeiters auf dein Projekt

{% data reusables.projects.project-settings %}
1. Klicke auf **Manage access** (Zugriff verwalten).
   ![Screenshot des Elements „Manage access“ (Zugriff verwalten)](/assets/images/help/projects-v2/manage-access.png)
1. Suche unter **Manage access** (Zugriff verwalten) nach den Projektmitarbeiter*innen, deren Berechtigungen du ändern möchtest.

   Du kannst die Dropdownmenüs **Type** (Typ) und **Role** (Rolle) verwenden, um die Zugriffsliste zu filtern.
   ![Screenshot eines Mitarbeiters](/assets/images/help/projects-v2/access-find-member.png)

1. Bearbeite die Rolle für den bzw. die Mitarbeiter*in(nen).
   ![Screenshot: Ändern der Rolle eines Mitarbeiters](/assets/images/help/projects-v2/access-change-role.png)
1. Klicke wahlweise auf **Entfernen**, um den bzw. die Mitarbeiter*in(nen) zu entfernen.
   ![Screenshot: Entfernen eines Mitarbeiters](/assets/images/help/projects-v2/access-remove-member.png)
