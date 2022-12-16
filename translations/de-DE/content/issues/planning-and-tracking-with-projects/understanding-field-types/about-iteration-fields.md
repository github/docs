---
title: Informationen zu Iterationsfeldern
shortTitle: About iteration fields
intro: Du kannst Iterationen erstellen, um anstehende Arbeits- und Gruppenelemente zu planen.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
- /issues/trying-out-the-new-projects-experience/managing-iterations
type: tutorial
topics:
- Projects
ms.openlocfilehash: 93039327ab7075e0f79c9d5ae5d6652aa635a500
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109779"
---
Du kannst ein Iterationsfeld erstellen, um Elemente bestimmten sich wiederholenden Zeitblöcken zuzuordnen. Iterationen können auf eine beliebige Zeitspanne festgelegt werden, Pausen enthalten und einzeln bearbeitet werden, wenn der Name und der Datumsbereich geändert werden müssen. Bei Projekten kannst du nach Iteration gruppieren, um die Ausgewogenheit der anstehenden Arbeit zu visualisieren, Filter verwenden, um sich auf eine einzelne Iteration zu konzentrieren, und nach Iteration sortieren.

Du kannst nach Iterationen filtern, indem du den Iterationsnamen oder `@current` für die aktuelle Iteration bzw. `@previous` für die vorherige Iteration oder `@next` für die nächste Iteration angibst. Du kannst auch Operatoren verwenden, z. B. `>`, `>=`, `<`, `<=` und `..`.  Beispiel: `iteration:>"Iteration 4"` und `iteration:<@current`. Weitere Informationen findest du unter [Filtering projects](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) („Filtern von Projekten“).

Wenn du zum ersten Mal ein Iterationsfeld erstellst, werden automatisch drei Iterationen erstellt.  Du kannst zusätzliche Iterationen hinzufügen und weitere Änderungen auf der Einstellungsseite deines Projekts vornehmen.

![Screenshot der Einstellungen für ein Iterationsfeld](/assets/images/help/issues/iterations-example.png)

## Hinzufügen eines Iterationsfelds

{% data reusables.projects.new-field %}
1. Wähle **Iteration**
   ![Screenshot der Option „Iteration“](/assets/images/help/projects-v2/new-field-iteration.png)
2. Wahlweise kannst du auf das Kalender-Dropdownmenü neben „Beginnt am“ klicken und ein neues Startdatum auswählen, wenn du nicht möchtest, dass die Iteration heute beginnt.
   ![Screenshot des Startdatums der Iteration](/assets/images/help/projects-v2/iteration-field-starts.png)
3. Um die Dauer der einzelnen Iterationen zu ändern, gib eine neue Zahl ein, wähle dann das Dropdownmenü aus, und klicke dann auf **Tage** oder **Wochen**.
   ![Screenshot der Iterationsdauer](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Klicke auf **Speichern**.
   ![Screenshot der Schaltfläche „Speichern“](/assets/images/help/projects-v2/new-field-save-and-create.png)

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Neues Feld erstellen“.

## Hinzufügen neuer Iterationen

{% data reusables.projects.project-settings %}
1. Klicke auf den Namen des Iterationsfelds, das du anpassen möchtest.
   ![Screenshot eines Iterationsfelds](/assets/images/help/projects-v2/select-iteration-field.png)
1. Wenn du eine neue Iteration derselben Dauer hinzufügen möchtest, klicke auf **Add iteration** (Iteration hinzufügen).
   ![Screenshot der Schaltfläche „Add iteration“ (Iteration hinzufügen)](/assets/images/help/projects-v2/add-iteration.png)
1. Wahlweise kannst du die Dauer und Startzeit der neuen Iteration anpassen, indem du auf {% octicon "triangle-down" aria-label="The triangle icon" %} **Weitere Optionen** klickst, ein Startdatum und eine Dauer auswählst und dann auf **Hinzufügen** klickst.
   ![Screenshot des Formulars zum Hinzufügen von Iterationsoptionen](/assets/images/help/projects-v2/add-iteration-options.png)
1. Klicke auf **Änderungen speichern**.
   ![Screenshot der Schaltfläche „Speichern“](/assets/images/help/projects-v2/iteration-save.png)

## Bearbeiten einer Iteration

Du kannst Iterationen in deinen Projekteinstellungen bearbeiten. Du kannst auch auf die Einstellungen für ein Iterationsfeld zugreifen, indem du in der Tabellenüberschrift für das Feld auf {% octicon "triangle-down" aria-label="The triangle icon" %} und dann auf **Werte bearbeiten** klickst.

{% data reusables.projects.project-settings %}
1. Klicke auf den Namen des Iterationsfelds, das du anpassen möchtest.
   ![Screenshot eines Iterationsfelds](/assets/images/help/projects-v2/select-iteration-field.png)
1. Wenn du den Namen einer Iteration ändern möchtest, klicke auf den Namen, und beginne mit der Eingabe.
   ![Screenshot eines Titelfelds zum Umbenennen einer Iteration](/assets/images/help/projects-v2/iteration-rename.png)
1. Um das Datum oder die Dauer einer Iteration zu ändern, klicke auf das Datum, um den Kalender zu öffnen. Klicke auf den Starttag, dann auf den Endtag, und zum Abschluss auf **Anwenden**.
   ![Screenshot der Iterationsdaten](/assets/images/help/projects-v2/iteration-date.png)
1. Wenn du optional eine Iteration löschen möchtest, klicke auf {% octicon "trash" aria-label="The trash icon" %}.
   ![Screenshot der Schaltfläche „Löschen“](/assets/images/help/projects-v2/iteration-delete.png)
2. Klicke auf **Änderungen speichern**.
   ![Screenshot der Schaltfläche „Speichern“](/assets/images/help/projects-v2/iteration-save.png)

## Einfügen einer Pause

Du kannst Pausen in deine Iterationen einfügen, um zu kommunizieren, wenn du eine Pause von der geplanten Arbeit einlegst. Die Dauer einer neuen Pause wird standardmäßig auf die Länge der zuletzt erstellten Iteration festgelegt.

{% data reusables.projects.project-settings %}
1. Klicke auf den Namen des Iterationsfelds, das du anpassen möchtest.
   ![Screenshot eines Iterationsfelds](/assets/images/help/projects-v2/select-iteration-field.png)
2. Klicke auf der Trennlinie rechts oberhalb einer Iteration auf **Pause einfügen**.
   ![Screenshot mit der Position der Schaltfläche „Pause einfügen“](/assets/images/help/issues/iteration-insert-break.png)
3. Wenn du optional die Dauer der Pause ändern möchtest, klicke auf das Datum, um den Kalender zu öffnen. Klicke auf den Starttag, dann auf den Endtag, und zum Abschluss auf **Anwenden**.
4. Klicke auf **Änderungen speichern**.
   ![Screenshot der Schaltfläche „Speichern“](/assets/images/help/projects-v2/iteration-save.png)
