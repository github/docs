---
title: Erstellen einer Einzelaufgabe
intro: 'Du kannst eine Aufgabe für Studierende im Kurs erstellen, die individuell abgeschlossen werden soll.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage individual assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/creating-an-individual-assignment
  - /education/manage-coursework-with-github-classroom/create-an-individual-assignment
shortTitle: Individual assignment
ms.openlocfilehash: 1ffa725be4e42695b297545f65c998b14ed8e000
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179747'
---
## Informationen zu Einzelaufgaben

{% data reusables.classroom.assignments-individual-definition %}

{% data reusables.classroom.classroom-creates-individual-repositories %}

{% data reusables.classroom.about-assignments %}

Ein Video zum Erstellen einer Einzelaufgabe findest du unter [Grundlagen der Einrichtung von {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom).

{% data reusables.classroom.reuse-assignment-link %}

## Voraussetzungen

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Erstellen einer Aufgabe

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Festlegen der Grundeinstellungen für eine Aufgabe

Benenne die Aufgabe, entscheide, ob du einen Abgabetermin festlegen möchtest, und wähle die Sichtbarkeit von Aufgabenrepositorys aus.

- [Benennen einer Aufgabe](#naming-an-assignment)
- [Festlegen eines Abgabetermins für eine Aufgabe](#assigning-a-deadline-for-an-assignment)
- [Auswählen eines Aufgabentyps](#choosing-an-assignment-type)
- [Auswählen der Sichtbarkeit von Aufgabenrepositorys](#choosing-a-visibility-for-assignment-repositories)

### Benennen einer Aufgabe

Bei einer einzelnen Aufgabe werden Repositorys von {% data variables.product.prodname_classroom %} durch das Repositorypräfix und den {% data variables.product.product_name %}-Benutzernamen des Kursteilnehmers benannt. Standardmäßig ist das Repositorypräfix der Aufgabentitel. Wenn du eine Aufgabe beispielsweise „assignment-1“ nennst und der Name des Kursteilnehmers auf {% data variables.product.product_name %} @octocat lautet, wird der Name des Aufgabenrepositorys für @octocat auf `assignment-1-octocat` festgelegt.

{% data reusables.classroom.assignments-type-a-title %}

### Festlegen eines Abgabetermins für eine Aufgabe

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Auswählen eines Aufgabentyps

Klicke unter „Einzel- oder Gruppenaufgabe“ im Dropdownmenü auf **Einzelaufgabe**. Du kannst den Aufgabentyp nach Erstellen der Aufgabe nicht mehr ändern. Wenn du lieber eine Gruppenaufgabe erstellen möchtest, findest du unter [Erstellen einer Gruppenaufgabe](/education/manage-coursework-with-github-classroom/create-a-group-assignment) weitere Informationen.

### Auswählen der Sichtbarkeit von Aufgabenrepositorys

{% data reusables.classroom.assignments-repository-visibility-and-permissions %}

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Hinzufügen von Startcode und Konfigurieren einer Entwicklungsumgebung

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Auswählen eines Vorlagenrepositorys](#choosing-a-template-repository)
- [Auswählen einer integrierten Entwicklungsumgebung (IDE)](#choosing-an-integrated-development-environment-ide)

### Auswählen eines Vorlagenrepositorys

Standardmäßig erstellt eine neue Aufgabe ein leeres Repository für sämtliche Kursteilnehmenden im Listenfeld für den Classroom. {% data reusables.classroom.you-can-choose-a-template-repository %}

{% data reusables.classroom.assignments-guide-choose-template-repository %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

### Auswählen einer integrierten Entwicklungsumgebung (IDE)

{% data reusables.classroom.about-online-ides %} Weitere Informationen findest du unter [Integrieren von {% data variables.product.prodname_classroom %} mit einer IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide).

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

## Bereitstellen von Feedback für eine Aufgabe

Optional kannst du Aufgaben automatisch benoten und Raum für Diskussionen über die einzelnen Übermittlungen mit den Kursteilnehmenden schaffen.

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

Auf der Registerkarte **Kursliste** für die Aufgabe kannst du anzeigen, ob ein Kursteilnehmer dem Kursraum beigetreten ist und eine Aufgabe angenommen oder eingereicht hat. Du kannst auf dieser Registerkarte auch die {% data variables.product.prodname_dotcom %}-Aliase von Kursteilnehmenden mit ihrem zugeordneten Listenbezeichner verknüpfen und umgekehrt. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

## Überwachen des Fortschritts von Kursteilnehmer*innen
Auf der Seite mit der Aufgabenübersicht findest du eine Übersicht über deine angenommenen Aufgaben und den Fortschritt der Kursteilnehmenden. Möglicherweise werden basierend auf den Konfigurationen deiner Aufgaben verschiedene Zusammenfassungsinformationen angezeigt.

- **Kursteilnehmerliste:** Anzahl der Kursteilnehmer*innen auf der Kursliste
- **Hinzugefügte Kursteilnehmende:** Anzahl der {% data variables.product.prodname_dotcom %}-Konten, die die Aufgabe akzeptiert haben und keinem Listenbezeichner zugeordnet sind
-  **Akzeptierte Kursteilnehmende:** Anzahl der Konten, die diese Aufgabe akzeptiert haben
-  **Übermittelte Aufgaben:** Anzahl der Kursteilnehmenden, die die Aufgabe übermittelt haben. Die Übermittlung wird zum Abgabezeitpunkt für die Aufgabe ausgelöst.
-  **Bestandene Kursteilnehmende:** Anzahl der Kursteilnehmenden, die derzeit die automatisch benoteten Tests für diese Aufgabe bestehen

## Nächste Schritte

- Nachdem du die Aufgabe erstellt hast, können die Kursteilnehmenden mithilfe von Git und {% data variables.product.product_name %}-Features mit der Arbeit an der Aufgabe beginnen. Kursteilnehmer*innen können das Repository klonen, Commits pushen, Branches verwalten, Pull Requests erstellen und überprüfen, Mergekonflikte adressieren und Änderungen mit Issues diskutieren. Sowohl du als auch die Kursteilnehmenden können den Commitverlauf für das Repository überprüfen. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github), [Repositorys](/repositories) und [Zusammenarbeiten an Issues und Pull Requests](/github/collaborating-with-issues-and-pull-requests).

- Wenn ein Kursteilnehmer eine Aufgabe abgeschlossen hat, kannst du die Dateien im Repository oder den Verlauf und die Visualisierungen für das Repository überprüfen, um seine Arbeit besser zu verstehen. Weitere Informationen findest du unter [Visualisieren von Repositorydaten mit Graphen](/github/visualizing-repository-data-with-graphs).

- Du kannst Feedback zu einer Aufgabe bereitstellen, indem du einzelne Commits oder Zeilen in einem Pull Request kommentierst. Weitere Informationen findest du unter [Kommentieren eines Pull Requests](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) und [Öffnen eines Issues zu Code](/github/managing-your-work-on-github/opening-an-issue-from-code). Weitere Informationen zum Erstellen gespeicherter Antworten für Feedback zu häufigen Fehlern findest du unter [Informationen zu gespeicherten Antworten](/github/writing-on-github/about-saved-replies).

## Weiterführende Themen

- [{% data variables.product.prodname_global_campus %} für Lehrkräfte](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)
- [Verbinden eines Lernverwaltungssystems mit {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)
