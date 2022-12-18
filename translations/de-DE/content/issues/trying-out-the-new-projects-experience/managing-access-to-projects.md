---
title: Verwalten des Zugriffs auf Projekte (Beta)
intro: Du kannst steuern, wer deine Projekte anzeigen, bearbeiten oder verwalten kann.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 2c50343bfe8e3fd4e65a9a39b798f355cf0f13bb
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145130958"
---
{% data reusables.projects.projects-beta %}

## <a name="about-project-access"></a>Informationen zum Projektzugriff

Administrator*innen von Projekten auf Organisationsebene können den Zugriff für die gesamte Organisation, für Teams, für einzelne Organisationsmitglieder und für externe Projektmitarbeiter*innen verwalten. 

Administrator*innen von Projekten auf Benutzerebene können einzelne Projektmitarbeiter*innen einladen und ihren Zugriff verwalten.

Projektadministrator*innen können auch die Sichtbarkeit ihres Projekts für jeden im Internet steuern. Weitere Informationen findest du unter [Verwalten der Sichtbarkeit deiner Projekte](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects).

## <a name="managing-access-for-organization-level-projects"></a>Verwalten des Zugriffs für Projekte auf Organisationsebene

### <a name="managing-access-for-everyone-in-your-organization"></a>Verwalten des Zugriffs für alle Personen in deiner Organisation

Die Standardbasisrolle ist `write`, was bedeutet, dass alle Benutzer*innen in der Organisation dein Projekt anzeigen und bearbeiten können. Um den Projektzugriff für alle Personen in der Organisation zu ändern, kannst du die Basisrolle ändern. Änderungen an der Basisrolle wirken sich nur auf Organisationsmitglieder aus, die keine Organisationsinhaber*innen sind und denen kein individueller Zugriff gewährt wird.

{% data reusables.projects.project-settings %}
1. Klicke auf **Manage access** (Zugriff verwalten).
2. Wähle unter **Base role** (Basisrolle) die Standardrolle aus.
   - **No access** (Kein Zugriff): Nur Organisationsinhaber*innen und Benutzer*innen, denen individueller Zugriff gewährt wurde, können das Projekt anzeigen. Organisationsinhaber*innen sind auch Administrator*innen für das Projekt.
   - **Read** (Lesen): Jeder in der Organisation kann das Projekt anzeigen. Organisationsinhaber*innen sind auch Administrator*innen für das Projekt.
   - **Write** (Schreiben): Jeder in der Organisation kann das Projekt anzeigen und bearbeiten. Organisationsinhaber*innen sind auch Administrator*innen für das Projekt.
   - **Admin**: Jeder in der Organisation ist ein*e Administrator*in für das Projekt.

### <a name="managing-access-for-teams-and-individual-members-of-your-organization"></a>Verwalten des Zugriffs für Teams und einzelne Mitglieder deiner Organisation

Du kannst auch Teams, externe Projektmitarbeiter*innen und einzelne Organisationsmitglieder als Projektmitarbeiter*innen für ein Projekt auf Organisationsebene hinzufügen. Weitere Informationen findest du unter [Informationen zu Teams](/organizations/organizing-members-into-teams/about-teams).

Du kannst nur eine*n einzelne*n Benutzer*in einladen, an deinem Projekt auf Organisationsebene mitzuarbeiten, wenn er oder sie bereits Mitglied der Organisation oder ein*e externe*r Projektmitarbeiter*in in mindestens einem Repository in der Organisation sind.

{% data reusables.projects.project-settings %}
1. Klicke auf **Manage access** (Zugriff verwalten).
2. Suche unter **Invite collaborators** (Projektmitarbeiter einladen) nach dem Team oder einzelnen Benutzer, das bzw. den du einladen möchtest.
3. Wähle die Rolle für den bzw. die Projektmitarbeiter*in aus.
   - **Read** (Lesen): Das Team oder die Einzelperson kann das Projekt anzeigen.
   - **Write** (Schreiben): Das Team oder die Einzelperson kann das Projekt anzeigen und bearbeiten.
   - **Admin**: Das Team oder die Einzelperson kann das Projekt anzeigen, bearbeiten und neue Projektmitarbeiter*innen hinzufügen.
4. Klicke auf **Einladen**.

### <a name="managing-access-of-an-existing-collaborator-on-your-project"></a>Verwalten des Zugriffs von bestehenden Projektmitarbeiter*innen auf dein Projekt

{% data reusables.projects.project-settings %}
1. Klicke auf **Manage access** (Zugriff verwalten).
1. Suche unter **Manage access** (Zugriff verwalten) nach den Projektmitarbeiter*innen, deren Berechtigungen du ändern möchtest.

   Du kannst die Dropdownmenüs **Type** (Typ) und **Role** (Rolle) verwenden, um die Zugriffsliste zu filtern.

1. Bearbeite die Rolle für die Projektmitarbeiter*innen, oder klicke auf {% octicon "trash" aria-label="the trash icon" %}, um sie zu entfernen.

## <a name="managing-access-for-user-level-projects"></a>Verwalten des Zugriffs für Projekte auf Benutzerebene

### <a name="granting-a-collaborator-access-to-your-project"></a>Gewähren des Zugriffs auf deine Projekt für Projektmitarbeiter*innen

{% note %}

Dies betrifft nur Projektmitarbeiter*innen deines Projekts, nicht von Repositorys in deinem Projekt. Um ein Element im Projekt anzuzeigen, muss eine Person über die erforderlichen Berechtigungen für das Repository verfügen, zu dem das Element gehört. Wenn dein Projekt Elemente aus einem privaten Repository enthält, können Personen, die keine Projektmitarbeiter*innen im Repository sind, keine Elemente aus diesem Repository anzeigen. Weitere Informationen findest du unter [Festlegen der Sichtbarkeit des Repositorys](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility) und [Verwalten von Teams und Personen mit Zugriff auf dein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).

{% endnote %}

{% data reusables.projects.project-settings %}
1. Klicke auf **Manage access** (Zugriff verwalten).
2. Suche unter **Invite collaborators** (Projektmitarbeiter einladen) nach dem Benutzer bzw. der Benutzerin, den bzw. die du einladen möchtest.
3. Wähle die Rolle für den bzw. die Projektmitarbeiter*in aus.
   - **Read** (Lesen): Eine Einzelperson kann das Projekt anzeigen.
   - **Write** (Schreiben): Eine Einzelperson kann das Projekt anzeigen und bearbeiten.
   - **Admin**: Eine Einzelperson kann das Projekt anzeigen, bearbeiten und neue Projektmitarbeiter*innen hinzufügen.
4. Klicke auf **Einladen**.

### <a name="managing-access-of-an-existing-collaborator-on-your-project"></a>Verwalten des Zugriffs von bestehenden Projektmitarbeiter*innen auf dein Projekt

{% data reusables.projects.project-settings %}
1. Klicke auf **Manage access** (Zugriff verwalten).
1. Suche unter **Manage access** (Zugriff verwalten) nach den Projektmitarbeiter*innen, deren Berechtigungen du ändern möchtest.

   Du kannst die Dropdownmenüs **Role** (Rolle) verwenden, um die Zugriffsliste zu filtern.

1. Bearbeite die Rolle für die Projektmitarbeiter*innen, oder klicke auf {% octicon "trash" aria-label="the trash icon" %}, um sie zu entfernen.
