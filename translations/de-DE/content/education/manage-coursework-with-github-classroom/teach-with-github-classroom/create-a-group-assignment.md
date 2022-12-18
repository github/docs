---
title: Erstellen einer Gruppenaufgabe
intro: 'Du kannst eine gemeinsame Aufgabe für Teams von Kursteilnehmern erstellen, die an deinem Kurs teilnehmen.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage group assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/create-group-assignments
  - /education/manage-coursework-with-github-classroom/create-a-group-assignment
ms.openlocfilehash: 71c5f5eaf97ba58e25921c1e2be6fc638550dfa8
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179760'
---
## Informationen zu Gruppenaufgaben

{% data reusables.classroom.assignments-group-definition %} Kursteilnehmer*innen können wie ein Team professioneller Entwickler*innen zusammen an einer Gruppenaufgabe in einem geteilten Repository arbeiten.

Wenn Kursteilnehmer*innen eine Gruppenaufgabe annehmen, können sie ein neues Team erstellen oder einem vorhandenen Team beitreten. {% data variables.product.prodname_classroom %} speichert die Teams für eine Aufgabe als Gruppe. Du kannst die Gruppe von Teams für eine bestimmte Aufgabe benennen, wenn du die Aufgabe erstellst. Darüber hinaus kannst du die Gruppe von Teams für eine spätere Aufgabe wiederverwenden.

{% data reusables.classroom.classroom-creates-group-repositories %}

{% data reusables.classroom.about-assignments %}

Du kannst entscheiden, wie viele Teams einer Aufgabe zugeordnet werden können und wie viele Mitglieder jedes Team haben darf. Jedes Team, das ein*e Kursteilnehmer*in für eine Aufgabe erstellt, ist ein Team in deiner Organisation auf {% data variables.product.product_name %}. Der Sichtbarkeitsstatus des Teams ist geheim. Teams, die du auf {% data variables.product.product_name %} erstellst, werden nicht in {% data variables.product.prodname_classroom %} angezeigt. Weitere Informationen findest du unter [Informationen zu Teams](/organizations/organizing-members-into-teams/about-teams).

Ein Video zum Erstellen einer Gruppenaufgabe findest du unter [Grundlagen der Einrichtung von {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom).

{% data reusables.classroom.reuse-assignment-link %}

## Voraussetzungen

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Erstellen einer Aufgabe

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Festlegen der Grundeinstellungen für eine Aufgabe

Benenne die Aufgabe, entscheide, ob du einen Abgabetermin festlegen möchtest, definiere Teams, und wähle die Sichtbarkeit von Aufgabenrepositorys aus.

- [Benennen einer Aufgabe](#naming-an-assignment)
- [Festlegen eines Abgabetermins für eine Aufgabe](#assigning-a-deadline-for-an-assignment)
- [Auswählen eines Aufgabentyps](#choosing-an-assignment-type)
- [Definieren von Teams für eine Aufgabe](#defining-teams-for-an-assignment)
- [Auswählen der Sichtbarkeit von Aufgabenrepositorys](#choosing-a-visibility-for-assignment-repositories)

### Benennen einer Aufgabe

Für eine Gruppenaufgabe benennt {% data variables.product.prodname_classroom %} Repositorys nach Repositorypräfix und dem Namen des Teams. Standardmäßig ist das Repositorypräfix der Aufgabentitel. Wenn du eine Aufgabe „Aufgabe-1“ nennst und der Name des Teams auf {% data variables.product.product_name %} „student-team“ ist, lautet der Name des Aufgabenrepositorys für Teammitglieder `assignment-1-student-team`.

{% data reusables.classroom.assignments-type-a-title %}

### Festlegen eines Abgabetermins für eine Aufgabe

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Auswählen eines Aufgabentyps

Klicke unter „Einzel- oder Gruppenaufgabe“ auf das Dropdownmenü, und wähle dann **Gruppenaufgabe** aus. Du kannst den Aufgabentyp nach Erstellen der Aufgabe nicht mehr ändern. Wenn du lieber eine Einzelaufgabe erstellen möchtest, findest du weitere Informationen unter [Erstellen einer Einzelaufgabe](/education/manage-coursework-with-github-classroom/create-an-individual-assignment).

### Definieren von Teams für eine Aufgabe

Wenn du bereits eine Gruppenaufgabe für den Kurs erstellt hast, kannst du eine Gruppe von Teams für die neue Aufgabe wiederverwenden. Gib den Namen für eine Gruppe ein, um eine neue Gruppe mit den Teams zu erstellen, die deine Kursteilnehmer*innen für die Aufgabe erstellen. Optional kannst du die maximale Anzahl von Teammitgliedern und Teams insgesamt eingeben.

{% tip %}

**Tipps**:

- Es wird empfohlen, Details zur Gruppe von Teams in den Namen für die Gruppe einzuschließen. Wenn du beispielsweise die Gruppe von Teams für eine Aufgabe verwenden möchtest, benenne die Gruppe nach der Aufgabe. Wenn du die Gruppe für ein ganzes Semester oder einen ganzen Kurs verwenden willst, benenne die Gruppe nachdem Semester oder Kurs.

- Wenn du Kursteilnehmer*innen einem bestimmten Team zuweisen möchtest, gib den Kursteilnehmer*innen einen Namen für das Team, und stelle eine Liste aller Mitglieder bereit.

{% endtip %}

![Parameter für das Team, das an einer Gruppenaufgabe beteiligt ist](/assets/images/help/classroom/assignments-define-teams.png)

### Auswählen der Sichtbarkeit von Aufgabenrepositorys

{% data reusables.classroom.assignments-repository-visibility-and-permissions %}

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Hinzufügen von Startcode und Konfigurieren einer Entwicklungsumgebung

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Auswählen eines Vorlagenrepositorys](#choosing-a-template-repository)
- [Auswählen einer integrierten Entwicklungsumgebung (IDE)](#choosing-an-integrated-development-environment-ide)

### Auswählen eines Vorlagenrepositorys

Standardmäßig erstellt eine neue Aufgabe ein leeres Repository für jedes Team, das ein*e Kursteilnehmer*in erstellt. {% data reusables.classroom.you-can-choose-a-template-repository %} 

{% data reusables.classroom.assignments-guide-choose-template-repository %}

### Auswählen einer integrierten Entwicklungsumgebung (IDE)

{% data reusables.classroom.about-online-ides %} Weitere Informationen findest du unter [Integrieren von {% data variables.product.prodname_classroom %} mit einer IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide).

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

## Abgeben von Feedback

Optional kannst du Aufgaben automatisch benoten und Raum für Diskussionen über die einzelnen Übermittlungen mit dem Team schaffen.

- [Automatisches Testen von Aufgaben](#testing-assignments-automatically)
- [Erstellen eines Pull Requests für Feedback](#creating-a-pull-request-for-feedback)

### Automatisches Testen von Aufgaben

{% data reusables.classroom.assignments-guide-using-autograding %}

### Erstellen eines Pull Requests für Feedback

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

## Einladen von Kursteilnehmer*innen zu einer Aufgabe

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

Auf der Registerkarte **Teams** für die Aufgabe kannst du die Teams anzeigen, die an einer Aufgabe arbeiten oder diese übermittelt haben. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Group assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-group-hero.png">
</div>

## Überwachen des Fortschritts von Kursteilnehmer*innen
Auf der Übersichtsseite für Aufgaben werden Informationen zum Aufgabenannahmestatus und Teamfortschritt angezeigt. Möglicherweise werden basierend auf den Konfigurationen deiner Aufgaben verschiedene Zusammenfassungsinformationen angezeigt.

- **Teams insgesamt:** Anzahl der erstellten Teams
- **Kursteilnehmerliste:** Anzahl der Kursteilnehmer*innen auf der Kursliste
- **Kursteilnehmer*innen, die nicht in einem Teams sind:** Anzahl der Kursteilnehmer*innen in der Kursliste, die noch keinem Team angehören
-  **Akzeptierte Teams:** Anzahl der Teams, die die Aufgabe angenommen haben
-  **Übermittelte Aufgaben:** Anzahl der Teams, die die Aufgabe übermittelt haben. Die Übermittlung wird zum Abgabezeitpunkt für die Aufgabe ausgelöst.
-  **Teams, die bestanden haben:** Anzahl der Teams, die derzeit den automatisch benoteten Test für diese Aufgabe bestehen

## Nächste Schritte

- Nachdem du die Aufgabe erstellt hast und die Kursteilnehmer*innen Teams gebildet haben, können Teammitglieder mithilfe von Git und {% data variables.product.product_name %}-Features mit der Arbeit an der Aufgabe beginnen. Kursteilnehmer*innen können das Repository klonen, Commits pushen, Branches verwalten, Pull Requests erstellen und überprüfen, Mergekonflikte adressieren und Änderungen mit Issues diskutieren. Sowohl du als auch das Team kann den Commitverlauf für das Repository überprüfen. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github), [Repositorys](/repositories), [Verwenden von Git](/github/getting-started-with-github/using-git) und [Zusammenarbeiten mit Issues und Pull Requests](/github/collaborating-with-issues-and-pull-requests). Im kostenlosen Kurs zum [Auflösen von Mergekonflikten](https://github.com/skills/resolve-merge-conflicts) in {% data variables.product.prodname_learning %} erhältst du ebenfalls Informationen.

- Wenn ein Team eine Aufgabe abgeschlossen hat, kannst du die Dateien im Repository oder den Verlauf und Visualisierungen für das Repository überprüfen, um besser zu verstehen, wie das Team zusammengearbeitet hat. Weitere Informationen findest du unter [Visualisieren von Repositorydaten mit Graphen](/github/visualizing-repository-data-with-graphs).

- Du kannst Feedback zu einer Aufgabe bereitstellen, indem du einzelne Commits oder Zeilen in einem Pull Request kommentierst. Weitere Informationen findest du unter [Kommentieren eines Pull Requests](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) und [Öffnen eines Issues zu Code](/github/managing-your-work-on-github/opening-an-issue-from-code). Weitere Informationen zum Erstellen gespeicherter Antworten für Feedback zu häufigen Fehlern findest du unter [Informationen zu gespeicherten Antworten](/github/writing-on-github/about-saved-replies).

## Weiterführende Themen

- [{% data variables.product.prodname_global_campus %} für Lehrkräfte](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)
- [Verknüpfen eines Learning Management System-Kurses mit einem Kursraum](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)
- [Verwenden vorhandener Teams in Gruppenaufgaben](https://education.github.community/t/using-existing-teams-in-group-assignments/6999) in der {% data variables.product.prodname_education %}-Community
