---
title: Bearbeiten einer Aufgabe
intro: Du kannst vorhandene Aufgaben in deinem Kurs bearbeiten.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can edit assignments for that classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Edit an assignment
ms.openlocfilehash: 65814debd3fb5bf64ea83b04bef6349b7755b77f
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179860'
---
## Informationen zum Bearbeiten von Aufgaben

Nach dem Erstellen einer Aufgabe kannst du viele Aspekte der Aufgabe bearbeiten, um sie besser auf die Anforderungen von dir selbst und den Lernenden abzustimmen. Beachte, dass du den Aufgabentyp (Einzel- oder Gruppenaufgabe) oder die integrierte Onlineentwicklungsumgebung (Integrated Development Environment, IDE) nach der Erstellung der Aufgabe nicht mehr ändern kannst. Weitere Informationen findest du unter [Erstellen einer einzelnen Aufgabe](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment) und [Erstellen einer Gruppenaufgabe](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment).

## Bearbeiten einer vorhandenen Aufgabe

1. Melde dich bei {% data variables.product.prodname_classroom_with_url %} an.
1. Navigiere zu einem Kursraum.

    ![Screenshot: Classroom-Kachel in GitHub Education mit hervorgehobenem Classroom-Namen](/assets/images/help/classroom/classroom-card.png)

1. Klicke auf der Registerkarte {% octicon "repo" aria-label="The repo icon" %} **Aufgaben** neben der zu bearbeitenden Aufgabe auf {% octicon "pencil" aria-label="The pencil icon" %}.

    {% note %}
    
    **Hinweis:** Du kannst eine Aufgabe auch auf der Seite der Aufgabe bearbeiten. Um auf die Seite der Aufgabe zuzugreifen, klicke auf der Registerkarte **Aufgaben** auf den Aufgabennamen.
    
    {% endnote %}

    ![Screenshot: Aufgabe mit Hervorhebung des Bearbeitungssymbols](/assets/images/help/classroom/edit-assignment.png)

1. Klicke unter „Aufgabentitel“ in das Textfeld, lösche den vorhandenen Text, und gib den neuen Aufgabentitel ein.

    ![Screenshot: Aufgaben-Editor mit hervorgehobenem Textfeld „Aufgabentitel“](/assets/images/help/classroom/edit-assignment-title.png)

1. Um das Standardpräfix für das Aufgabenrepository jedes Lernenden zu bearbeiten, klicke auf {% octicon "pencil" aria-label="The pencil icon" %}.

    {% note %}

    **Hinweis:** Wenn du den Titel oder das Standardrepositorypräfix einer Aufgabe bearbeitest, wird der Name vorhandener Aufgabenrepositorys nicht geändert.

    {% endnote %}

    ![Screenshot: Aufgaben-Editor mit hervorgehobenem Bearbeitungssymbol für Repositorypräfixe von Lernenden](/assets/images/help/classroom/edit-assignment-repository-prefix-icon.png)

    Gib dann unter „Benutzerdefiniertes Repositorypräfix“ das neue Präfix ein.

    ![Screenshot: Aufgaben-Editor mit hervorgehobenem Textfeld „Benutzerdefiniertes Repositorypräfix“](/assets/images/help/classroom/edit-assignment-repository-prefix.png)

1. Klicke unter „Stichtag (optional)“ in das Textfeld, und weise dann mit der Datumsauswahl einen neuen Stichtag zu. Der neue Stichtag darf nicht in der Vergangenheit liegen, und durch die erneute Zuweisung eines Stichtags wird der Stichtag für alle Lernenden aktualisiert.

    ![Screenshot: Aufgaben-Editor mit Hervorhebung des Felds „Stichtag (optional)“](/assets/images/help/classroom/edit-assignment-deadline.png)

1. Um den Status einer Aufgabe zu ändern, wähle das Dropdownmenü **Aufgabenstatus** aus, und klicke dann auf **Aktiv** oder **Inaktiv**.

    {% note %}
  
    **Hinweis:** Inaktive Aufgaben können von Lernenden nicht akzeptiert werden. Ein Aufgabenstatus sollte in „Inaktiv“ geändert werden, wenn keine Lernenden mehr eine Aufgabe annehmen sollen oder wenn der Stichtag der Aufgabe verstrichen ist.
  
    {% endnote %}

    ![Screenshot: Aufgaben-Editor mit hervorgehobenem Dropdownmenü „Aufgabenstatus“](/assets/images/help/classroom/edit-assignment-status-dropdown.png)

1.  Wähle unter „Repositorysichtbarkeit“ eine Sichtbarkeit aus. Wenn Du private Repositorys verwendest, wird das von dir bereitgestellte Feedback nur dem Kursteilnehmer oder dem Team angezeigt.

    {% note %}
    
    **Hinweis:** Wenn du die Sichtbarkeit für Aufgabenrepositorys änderst, wird die Sichtbarkeit vorhandener Aufgabenrepositorys nicht rückwirkend geändert.
    
    {% endnote %}

    ![Screenshot: Aufgaben-Editor mit hervorgehobenen Optionsfeldern „Repository-Sichtbarkeit“](/assets/images/help/classroom/edit-assignment-repository-visibility.png)

1.  Aktiviere oder deaktiviere optional **Kursteilnehmern Zugriff auf ihr Repository gewähren**. Weitere Informationen zu Administratorberechtigungen für Repositorys findest Du unter [Informationen zu Repositorys](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) und [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

    {% note %}

    **Hinweis:** Durch das Gewähren oder Widerrufen des Administratorzugriffs für Lernende nach dem Erstellen einer Aufgabe werden die Berechtigungen für vorhandene Aufgabenrepositorys nicht rückwirkend geändert.

    {% endnote %}

    ![Screenshot: Aufgaben-Editor mit hervorgehobenem Kontrollkästchen „Kursteilnehmern Zugriff auf ihr Repository gewähren“](/assets/images/help/classroom/edit-assignment-admin-access.png)

1. Wenn du das Vorlagenrepository für deine Aufgabe einrichten oder ändern möchtest, wähle im Abschnitt „Vorlagenrepository hinzufügen, um Startcode für Kursteilnehmer bereitzustellen“ das Dropdownmenü **Repository auswählen** aus.
       - Um ein Vorlagenrepository auszuwählen, beginne mit der Eingabe des Repositorynamens im Textfeld, und klicke dann in den Suchergebnissen auf das Repository.
       - Um ein Vorlagenrepository zu entfernen, lösche den Text im Textfeld.

    {% note %}

    **Hinweis:** Standardmäßig erstellt eine Aufgabe ein leeres Repository für sämtliche Lernenden im Listenfeld für den Classroom.

    {% endnote %}

    ![Screenshot: Aufgaben-Editor mit hervorgehobenem Dropdownmenü „Repository auswählen“](/assets/images/help/classroom/edit-assignment-template-repository.png)

1. Um einen neuen Test mit automatischer Bewertung hinzuzufügen, wähle im Abschnitt „Tests mit automatischer Bewertung hinzufügen“ das Dropdownmenü **Test hinzufügen** aus, und klicke dann in den angezeigten Optionen auf eine Bewertungsmethode. Weitere Informationen findest du unter„ [Verwenden der automatischen Bewertung](/education/manage-coursework-with-github-classroom/use-autograding)“.
    
    ![Screenshot: Aufgaben-Editor mit hervorgehobenem Dropdownmenü „Test hinzufügen“](/assets/images/help/classroom/edit-assignment-add-test.png)

    Darüber hinaus kannst du vorhandene Tests mit automatischer Bewertung mit {% octicon "pencil" aria-label="The pencil icon" %} oder {% octicon "trash" aria-label="The trash icon" %} bearbeiten bzw. löschen.

    ![Screenshot: Aufgaben-Editor mit hervorgehobenem Dropdownmenü „Test hinzufügen“](/assets/images/help/classroom/edit-assignment-edit-test.png)

1.  Wenn du Pull Requests für Feedback aktivieren oder deaktivieren möchtest, aktiviere oder deaktiviere **Feedback-Pull Requests aktivieren**.

    {% note %}
    
    **Hinweis:** Durch das Aktivieren oder Deaktivieren von Feedback-Pull Requests für eine Aufgabe werden keine Feedback-Pull Requests für vorhandene Aufgabenrepositorys erstellt oder gelöscht.
    
    {% endnote %}

    ![Screenshot: Aufgaben-Editor mit hervorgehobenem Kontrollkästchen „Feedback-Pull Requests aktivieren“](/assets/images/help/classroom/edit-assignment-feedback.png)

{% data reusables.classroom.update-assignment %}

## Weiterführende Themen

- [Erstellen einer Einzelaufgabe](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)
- [Erstellen einer Gruppenaufgabe](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)
