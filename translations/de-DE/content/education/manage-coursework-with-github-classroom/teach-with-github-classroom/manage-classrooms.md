---
title: Verwalten von Kursräumen
intro: 'Du kannst einen Kursraum für jeden Kurs erstellen und verwalten, den du mit {% data variables.product.prodname_classroom %} unterrichtest.'
permissions: 'Organization owners who are admins for a classroom can manage the classroom for an organization. {% data reusables.classroom.classroom-admins-link %}'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
  - /education/manage-coursework-with-github-classroom/manage-classrooms
ms.openlocfilehash: 0c492f26092e7e9ad47c6237a55de1cf1c90e65f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145102672'
---
## Informationen zu Kursräumen

{% data reusables.classroom.about-classrooms %}

![Klassenzimmer](/assets/images/help/classroom/classroom-hero.png)

## Informationen zur Verwaltung von Kursräumen

{% data variables.product.prodname_classroom %} verwendet Organisationskonten auf {% data variables.product.product_name %}, um Berechtigungen und die Sicherheit für alle von Ihnen erstellten Kursräume zu verwalten. Jede Organisation kann mehrere Kursräume besitzen.

Nach dem Erstellen eines Kursraums wirst du von {% data variables.product.prodname_classroom %} aufgefordert, Tutor*innen (TAs, Teaching Assistants) und Administrator*innen in den Kursraum einzuladen. In jedem Kursraum kann es eine*n oder mehrere Administrator*innen geben. Administrator*innen können als Lehrer*innen, Tutor*innen oder andere Kursadministrator*innen tätig sein, die den Kursraum auf {% data variables.product.prodname_classroom %} verwalten können.

Lade Tutoren und Administratoren in deinen Kursraum ein, indem du die persönlichen Konten in {% data variables.product.product_name %} in deiner Organisation als Organisationsbesitzer einlädst und die URL für deinen Kursraum freigibst. Organisationsbesitzer*innen können jeden Kursraum der Organisation verwalten. Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) und [Einladen von Benutzer*innen in deine Organisation](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).

Wenn du einen Kursraum nicht mehr verwendest, kannst du ihn archivieren und zu einem späteren Zeitpunkt auf diesen, die Kursliste und die Arbeitsaufträge zugreifen. Alternativ kannst du den Kursraum löschen, wenn du ihn nicht mehr benötigst. 

{% data reusables.classroom.reuse-assignment-link %}

## Über Kurslisten

Für jeden Kursraum gibt es eine Liste. Auf der Liste sind die IDs der Kursteilnehmer*innen aufgeführt, die an deinem Kurs teilnehmen.

Wenn du die URL für einen Arbeitsauftrag zum ersten Mal einem Lernenden zuweist, muss sich der Lernende bei {% data variables.product.product_name %} mit einem persönlichen Konto anmelden, um das persönliche Konto mit einem Bezeichner für den Kursraum zu verknüpfen. Nachdem der Lernende ein persönliches Konto verknüpft hat, kannst du das zugehörige persönliche Konto in der Liste sehen. Du kannst auch anzeigen, wann der*die Kursteilnehmer*in einen Arbeitsauftrag akzeptiert oder eingereicht hat.

![Kursliste](/assets/images/help/classroom/roster-hero.png)

## Voraussetzungen

Du musst über ein Organisationskonto auf {% data variables.product.product_name %} verfügen, um Kursräume auf {% data variables.product.prodname_classroom %} zu verwalten. Weitere Informationen findest du unter [Arten von {% data variables.product.company_short %}-Konten](/github/getting-started-with-github/types-of-github-accounts#organization-accounts) und [Grundlegendes Neuerstellen einer Organisation](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

Du musst die OAuth-App für {% data variables.product.prodname_classroom %} autorisieren, damit deine Organisation Kursräume für dein Organisationskonto verwalten kann. Weitere Informationen findest du unter [Autorisieren von OAuth-Apps](/github/authenticating-to-github/authorizing-oauth-apps).

## Erstellen eines Kursraums

{% data reusables.classroom.sign-into-github-classroom %}
1. Klicke auf **Neuer Kursraum**.
  ![Die Schaltfläche „Neuer Kursraum“](/assets/images/help/classroom/click-new-classroom-button.png) {% data reusables.classroom.guide-create-new-classroom %}

Nachdem du einen Kursraum erstellt hast, kannst du damit beginnen, Arbeitsaufträge für die Kursteilnehmer*innen zu erstellen. Weitere Informationen findest du unter [Verwenden von Git und {% data variables.product.company_short %}-Einstiegsarbeitsaufträgen](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment), [Erstellen eines einzelnen Arbeitsauftrags](/education/manage-coursework-with-github-classroom/create-an-individual-assignment), [Erstellen eines Arbeitsauftrags für eine Gruppe](/education/manage-coursework-with-github-classroom/create-a-group-assignment) und [Wiederverwenden eines Arbeitsauftrags](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment).

## Erstellen einer Kursliste

Du kannst eine Liste der Kursteilnehmer*innen erstellen, die an deinem Kurs teilnehmen.

Wenn für den Kurs bereits eine Liste existiert, kannst du die Kursteilnehmer*innen auf der Liste aktualisieren oder die Liste löschen. Weitere Informationen findest du unter [Hinzufügen von Kursteilnehmer*innen zur Kursliste](#adding-students-to-the-roster-for-your-classroom) oder [Löschen einer Kursliste](#deleting-a-roster-for-a-classroom).

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Wenn du {% data variables.product.prodname_classroom %} mit deinem LMS (Learning Management System, Lernverwaltungssystem) verbinden und eine Liste importieren möchtest, klicke auf {% octicon "mortar-board" aria-label="The mortar board icon" %} **Aus einem Lernverwaltungssystem importieren**, und befolgst du die Anweisungen. Weitere Informationen findest du unter [Verbinden eines Lernverwaltungssystems mit {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom).
    ![Die Schaltfläche „Aus einem Lernverwaltungssystem importieren“](/assets/images/help/classroom/click-import-from-a-learning-management-system-button.png)
1. Gib die IDs der Kursteilnehmer*innen für die Liste an.
     - Wenn du eine Liste durch das Hochladen einer Datei mit den IDs der Kursteilnehmer*innen importieren möchtest, klicke auf **CSV- oder Textdatei hochladen**.
     - Gib die IDs der Kursteilnehmer*innen ein, um eine Liste manuell zu erstellen.
       ![Textfeld zum Eingeben der IDs der Kursteilnehmer*innen und die Schaltfläche „CSV- oder Textdatei hochladen“](/assets/images/help/classroom/type-or-upload-student-identifiers.png)
1. Klicke auf **Liste erstellen**.
  ![Die Schaltfläche „Liste erstellen“](/assets/images/help/classroom/click-create-roster-button.png)

## Hinzufügen von Kursteilnehmer*innen zur Kursliste

In deinem Kursraum muss bereits eine Liste vorhanden sein, um Kursteilnehmer*innen hinzufügen zu können. Weitere Informationen zum Erstellen einer Liste findest du unter [Erstellen einer Kursliste](#creating-a-roster-for-your-classroom).

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Klicke rechts von „Kursliste“ auf **Kursteilnehmer aktualisieren**.
  ![Die Schaltfläche „Kursteilnehmer aktualisieren“ rechts neben der Überschrift „Kursliste“, die sich über einer Liste der Kursteilnehmer*innen befindet](/assets/images/help/classroom/click-update-students-button.png)
1. Befolge die Anweisungen, um der Liste Kursteilnehmer*innen hinzuzufügen.
    - Klicke auf **Mit einem Lernverwaltungssystem synchronisieren**, um Kursteilnehmer*innen von einem LMS zu importieren. Weitere Informationen zum Importieren einer Liste aus einem LMS findest du unter [Verknüpfen eines Lernverwaltungssystems mit {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom).
    - Wenn du Kursteilnehmer*innen manuell hinzufügen möchtest, klicke unter „Kursteilnehmer manuell hinzufügen“ auf **CSV- oder Textdatei hochladen**, oder gib die IDs der Kursteilnehmer*innen ein. Klicke anschließend auf **Listeneinträge hinzufügen**.
      ![Dialogfeld, in dem du eine Methode zum Hinzufügen von Kursteilnehmer*innen zum Kursraum auswählen kannst](/assets/images/help/classroom/classroom-add-students-to-your-roster.png)

## Umbenennen eines Kursraums

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. Gib unter „Name des Kursraums“ einen neuen Namen für den Kursraum ein.
  ![Textfeld unter „Name des Kursraums“ zum Eingeben des Kursraumnamens](/assets/images/help/classroom/settings-type-classroom-name.png)
1. Klicke auf **Kursraum umbenennen**.
  ![Die Schaltfläche „Kursraum umbenennen“](/assets/images/help/classroom/settings-click-rename-classroom-button.png)

## Archivieren oder Aufheben der Archivierung eines Kursraums

Du kannst Kursräume archivieren, die nicht länger auf {% data variables.product.prodname_classroom %} genutzt werden. Wenn du einen Kursraum archivierst, kannst du keine neuen Arbeitsaufträge erstellen oder vorhandene Arbeitsaufträge für den Kursraum bearbeiten. Kursteilnehmer*innen können keine Einladungen zu Arbeitsaufträgen in archivierten Kursräumen annehmen.

{% data reusables.classroom.sign-into-github-classroom %}
1. Klicke rechts neben dem Namen eines Kursraums auf das {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}-Dropdownmenü, und klicke dann auf **Archivieren**.
  ![Dropdownmenü des Symbols mit den drei Punkten und das Menüelement „Archivieren“](/assets/images/help/classroom/use-drop-down-then-click-archive.png)
1. Um die Archivierung eines Kursraums aufzuheben, klicke rechts neben dem Namen des Kursraums auf das {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}-Dropdownmenü, und klicke auf **Archivierung aufheben**.
  ![Dropdownmenü des Symbols mit den drei Punkten und das Menüelement „Archivierung aufheben“](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

## Löschen einer Kursliste

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Klicke unter „Diese Liste löschen“ auf **Liste löschen**.
  ![Die Schaltfläche „Liste löschen“ unter „Diese Liste löschen“ auf der Registerkarte „Kursteilnehmer“ für einen Kursraum](/assets/images/help/classroom/students-click-delete-roster-button.png)
1. Lies die Warnungen, und klicke dann auf **Liste löschen**.
  ![Die Schaltfläche „Liste löschen“ unter „Diese Liste löschen“ auf der Registerkarte „Kursteilnehmer“ für einen Kursraum](/assets/images/help/classroom/students-click-delete-roster-button-in-modal.png)

## Löschen eines Kursraums

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. Klicke rechts neben „Diesen Kursraum löschen“ auf **Kursraum löschen**.
  ![Die Schaltfläche „Repository löschen“](/assets/images/help/classroom/click-delete-classroom-button.png)
1. **Lies die Warnungen**.
1. Gib den Namen des zu löschenden Kursraums ein, um sicherzustellen, dass du den richtigen Kursraum löschst.
  ![Dialogfeld zum Löschen eines Kursraums mit Warnungen und einem Textfeld für den Namen des Kursraums](/assets/images/help/classroom/delete-classroom-modal-with-warning.png)
1. Klicke auf **Kursraum löschen**.
  ![Die Schaltfläche „Kursraum löschen“](/assets/images/help/classroom/delete-classroom-click-delete-classroom-button.png)
