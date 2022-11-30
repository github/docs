---
title: Verwenden der automatischen Bewertung
intro: 'Du kannst automatisch Feedback zu Codeübermittlungen von deinen Kursteilnehmern bereitstellen, indem du Tests konfigurierst, die im Aufgabenrepository ausgeführt werden.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can set up and use autograding on assignments in a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/adding-tests-for-auto-grading
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-teachers
  - /education/manage-coursework-with-github-classroom/use-autograding
ms.openlocfilehash: b3e9b44da93d799972b93a9f6e822b767099fdba
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102668'
---
## Informationen zur automatischen Bewertung

{% data reusables.classroom.about-autograding %}

Nachdem ein Kursteilnehmer eine Aufgabe angenommen hat, führt {% data variables.product.prodname_actions %} bei jedem Push in das Aufgabenrepository die Befehle für deinen Test mit automatischer Bewertung in einer Linux-Umgebung aus, die den neuesten Code des Kursteilnehmers enthält. {% data variables.product.prodname_classroom %} erstellt die notwendigen Workflows für {% data variables.product.prodname_actions %}. Du benötigst keine Erfahrung mit {% data variables.product.prodname_actions %}, um die automatische Bewertung zu nutzen.

Du kannst ein Testframework verwenden, einen benutzerdefinierten Befehl ausführen, Eingabe-/Ausgabetests schreiben oder verschiedene Testmethoden kombinieren. Die Linux-Umgebung zur automatischen Bewertung umfasst viele beliebte Softwaretools. Weitere Informationen findest du in den Details zur neuesten Version von Ubuntu in [Spezifikationen für {% data variables.product.company_short %}-gehostete Runner](/actions/reference/specifications-for-github-hosted-runners#supported-software).

Eine Übersicht darüber, welche Kursteilnehmer die Tests mit automatischer Bewertung bestanden haben, erhältst du, indem du in {% data variables.product.prodname_classroom %} zur Aufgabe navigierst. Ein grünes Häkchen bedeutet, dass alle Tests für den Kursteilnehmer bestanden wurden, bei einem roten X wurden einige oder alle Tests nicht bestanden. Wenn du Punkte für einen oder mehrere Tests vergibst, zeigt eine Blase die Punktzahl für die Tests im Verhältnis zur maximal möglichen Punktzahl für die Aufgabe an.

![Übersicht über eine Aufgabe mit den Ergebnissen der automatischen Bewertung](/assets/images/help/classroom/assignment-individual-hero.png)

## Bewertungsmethoden

Es gibt zwei Bewertungsmethoden: E/A-Tests (Eingabe/Ausgabe) und Ausführungsbefehlstests.

### E/A-Test

Ein E/A-Test führt optional einen Setupbefehl aus und liefert dann eine Standardeingabe für einen Testbefehl. {% data variables.product.prodname_classroom %} wertet die Ausgabe des Testbefehls anhand eines erwarteten Ergebnisses aus.

| Einstellung | BESCHREIBUNG |
| :- | :- |
| **Testname** | Der Name des Tests, um den Test in Protokollen zu identifizieren |
| **Setupbefehl** | _Optional:_ Ein Befehl, der vor den Tests ausgeführt wird, z. B. Kompilierung oder Installation |
| **Ausführungsbefehl** | Der Befehl zum Ausführen des Tests und zum Generieren der Standardausgabe für die Auswertung |
| **Eingaben** | Standardeingabe für den Ausführungsbefehl |
| **Erwartete Ausgabe** | Die Ausgabe, die du als Standardausgabe des Ausführungsbefehls erwartest |
| **Vergleich** | Die Art des Vergleichs zwischen der Ausgabe des Ausführungsbefehls und der erwarteten Ausgabe<br/><br/><ul><li>**Enthalten**: Der Test gilt als bestanden, wenn die erwartete Ausgabe<br/>an beliebiger Stelle in der Standardausgabe des Ausführungsbefehls enthalten ist.</li><li>**Genau**: Der Test gilt als bestanden, wenn die erwartete Ausgabe<br/>exakt mit der Standardausgabe des Ausführungsbefehls übereinstimmt.</li><li>**RegEx**: Der Test gilt als bestanden, wenn der reguläre Ausdruck in der erwarteten<br/>Ausgabe mit der Standardausgabe des Ausführungsbefehls übereinstimmt.</li></ul> |
| **Timeout** | Zeitraum in Minuten, die ein Test ausgeführt werden kann, bevor ein Fehler auftritt. |
| **Points** | _Optional:_ Die Anzahl von Punkten, die für den Test in eine Gesamtpunktzahl einfließen |

### Ausführungsbefehlstest

Ein Ausführungsbefehlstest führt einen Setupbefehl und anschließend einen Testbefehl aus. {% data variables.product.prodname_classroom %} überprüft den Beendigungsstatus des Testbefehls. Der Exitcode `0` bedeutet, dass der Vorgang erfolgreich war, jeder andere Exitcode führt zu einem Fehler.

{% data variables.product.prodname_classroom %} stellt Voreinstellungen für sprachspezifische Ausführungsbefehlstests für eine Vielzahl von Programmiersprachen bereit. Zum Beispiel wird für den Test **Knoten ausführen** der Setupbefehl mit `npm install` und der Testbefehl mit `npm test` vorausgefüllt.

| Einstellung | BESCHREIBUNG |
| :- | :- |
| **Testname** | Der Name des Tests, um den Test in Protokollen zu identifizieren |
| **Setupbefehl** | _Optional:_ Ein Befehl, der vor den Tests ausgeführt wird, z. B. Kompilierung oder Installation |
| **Ausführungsbefehl** | Der Befehl zum Ausführen des Tests und zum Generieren eines Exitcodes für die Auswertung |
| **Timeout** | Zeitraum in Minuten, die ein Test ausgeführt werden kann, bevor ein Fehler auftritt. |
| **Points** | _Optional:_ Die Anzahl von Punkten, die für den Test in eine Gesamtpunktzahl einfließen |

## Konfigurieren von Tests mit automatischer Bewertung für eine Aufgabe

Du kannst beim Erstellen einer neuen Aufgabe Tests mit automatischer Bewertung hinzufügen. {% data reusables.classroom.for-more-information-about-assignment-creation %}

Du kannst Tests mit automatischer Bewertung für eine vorhandene Aufgabe hinzufügen, bearbeiten oder löschen. Alle Änderungen, die du über die Classroom-Benutzeroberfläche vornimmst, werden in die vorhandenen Repositorys der Kursteilnehmer gepusht. Deshalb solltest du beim Bearbeiten deiner Tests mit Bedacht vorgehen.

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.assignments-click-pencil %}
1. Klicke in der linken Seitenleiste auf **Bewertung und Feedback**.
  ![„Bewertung und Feedback“ links neben den Basiseinstellungen der Aufgabe](/assets/images/help/classroom/assignments-click-grading-and-feedback.png)
1. Füge einen Test mit automatischer Bewertung hinzu, bearbeite oder lösche ihn.
    - Wähle unter „Tests mit automatischer Bewertung hinzufügen“ das Dropdownmenü **Test hinzufügen** aus, und klicke dann auf die gewünschte Bewertungsmethode.
       ![Verwenden des Dropdownmenüs „Test hinzufügen“ zum Auswählen einer Bewertungsmethode](/assets/images/help/classroom/autograding-click-grading-method.png) Konfiguriere den Test, und klicke dann auf **Testfall speichern**.
       ![Schaltfläche „Testfall speichern“ für einen Test mit automatischer Bewertung](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - Um einen Test zu bearbeiten, klickst du rechts neben dem Testnamen auf {% octicon "pencil" aria-label="The pencil icon" %}.
        ![Bleistiftsymbol zum Bearbeiten eines Tests mit automatischer Bewertung](/assets/images/help/classroom/autograding-click-pencil.png) Konfiguriere den Test, und klicke dann auf **Testfall speichern**.
       ![Schaltfläche „Testfall speichern“ für einen Test mit automatischer Bewertung](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - Um einen Test zu löschen, klickst du rechts neben dem Testnamen auf {% octicon "trash" aria-label="The trash icon" %}.
        ![Papierkorbsymbol zum Löschen eines Tests mit automatischer Bewertung](/assets/images/help/classroom/autograding-click-trash.png)
1. Klicke unten auf der Seite auf **Aufgabe aktualisieren**.
  ![Schaltfläche „Aufgabe aktualisieren“ unten auf der Seite](/assets/images/help/classroom/assignments-click-update-assignment.png)

## Anzeigen und Herunterladen von Ergebnissen für Tests mit automatischer Bewertung

### Herunterladen von Ergebnissen der automatischen Bewertung

Über die Schaltfläche „Herunterladen“ kannst du eine CSV-Datei mit den Ergebnissen der automatischen Bewertung für deine Kursteilnehmer herunterladen. Dadurch wird eine CSV-Datei generiert und heruntergeladen, die einen Link zum Repository des Kursteilnehmers, das zugehörige {% data variables.product.prodname_dotcom %}-Handle, die Kursplan-ID, den Zeitstempel der Übermittlung und die Punktzahl der automatischen Bewertung enthält.

![Schaltfläche „Herunterladen“ mit ausgewählter Einstellung „Bewertungen herunterladen“ und zusätzlicher Option „Repositorys herunterladen“](/assets/images/help/classroom/download-grades.png)

### Anzeigen einzelner Protokolle
{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-assignment-in-list %}
1. Klicke rechts neben einer Übermittlung auf **Test anzeigen**.
  ![Schaltfläche „Test anzeigen“ für eine Aufgabenübermittlung](/assets/images/help/classroom/assignments-click-view-test.png)
1. Überprüfe die Testausgabe. Weitere Informationen findest du unter [Verwenden von Workflowausführungsprotokollen](/actions/managing-workflow-runs/using-workflow-run-logs).

## Weitere Informationsquellen

- [{% data variables.product.prodname_actions %}-Dokumentation](/actions)
