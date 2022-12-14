---
title: Verwalten von Iterationen in Projekten (Beta)
intro: Du kannst Iterationen erstellen, um anstehende Arbeits- und Gruppenelemente zu planen.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: e64eb3e29efe513578984bc0c198ac8743803287
ms.sourcegitcommit: 95e6f3d3aba8c637a3f72b571a6beacaa38d367f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/11/2022
ms.locfileid: "147067570"
---
{% data reusables.projects.projects-beta %}

## <a name="about-iterations"></a>Informationen zu Iterationen

Du kannst ein Iterationsfeld erstellen, um Elemente bestimmten sich wiederholenden Zeitblöcken zuzuordnen. Iterationen können auf eine beliebige Zeitspanne festgelegt werden, Pausen enthalten und einzeln bearbeitet werden, wenn der Name und der Datumsbereich geändert werden müssen. Bei Projekten kannst du nach Iteration gruppieren, um die Ausgewogenheit der anstehenden Arbeit zu visualisieren, Filter verwenden, um sich auf eine einzelne Iteration zu konzentrieren, und nach Iteration sortieren.

Wenn du zum ersten Mal ein Iterationsfeld erstellst, werden automatisch drei Iterationen erstellt.  Du kannst zusätzliche Iterationen hinzufügen und weitere Änderungen auf der Einstellungsseite deines Projekts vornehmen.

![Screenshot der Einstellungen für ein Iterationsfeld](/assets/images/help/issues/iterations-example.png)

## <a name="creating-an-iteration-field"></a>Erstellen eines Iterationsfelds

Du kannst die Befehlspalette oder die Benutzeroberfläche des Projekts verwenden, um ein Iterationsfeld zu erstellen.

1. {% data reusables.projects.open-command-palette %} Beginne zunächst damit, einen Teil von „Neues Feld erstellen“ einzutippen. Wenn „Neues Feld erstellen“ in der Befehlspalette angezeigt wird, wähle diese Option aus.

   Alternativ kannst du in der Kopfzeile im Feld ganz rechts auf das folgende Symbol klicken: {% octicon "plus" aria-label="the plus icon" %}. Es wird ein Dropdownmenü mit den Projektfeldern angezeigt. Klicke auf **Neues Feld**.
1. Gib im Textfeld einen Namen für das neue Iterationsfeld ein.
1. Wähle unten das Dropdownmenü aus, und klicke auf **Iteration**.
1. Um optional ein anderes Startdatum als den aktuellen Tag auszuwählen, wähle das Kalender-Dropdownmenü neben „Beginnt am“ aus, und klicke auf ein neues Startdatum.
2. Um die Dauer der einzelnen Iterationen zu ändern, gib eine neue Zahl ein, wähle dann das Dropdownmenü aus, und klicke dann auf **Tage** oder **Wochen**.
3. Klicke auf **Speichern und erstellen**.
  
## <a name="adding-new-iterations"></a>Hinzufügen neuer Iterationen

{% data reusables.projects.project-settings %}
1. Klicke auf den Namen des Iterationsfelds, das du anpassen möchtest.
1. Wenn du eine neue Iteration derselben Dauer hinzufügen möchtest, klicke auf **Add iteration** (Iteration hinzufügen).
1. Wenn du optional die Dauer und die Startzeit der neuen Iteration anpassen möchtest, klicke neben „Iteration hinzufügen“ auf {% octicon "triangle-down" aria-label="The triangle icon" %}, wähle ein Startdatum und eine Dauer aus, und klicke auf **Hinzufügen**.
1. Klicke auf **Änderungen speichern**.

## <a name="editing-an-iteration"></a>Bearbeiten einer Iteration

Du kannst Iterationen in deinen Projekteinstellungen bearbeiten. Du kannst auch auf die Einstellungen für ein Iterationsfeld zugreifen, indem du in der Tabellenüberschrift für das Feld auf {% octicon "triangle-down" aria-label="The triangle icon" %} und dann auf **Werte bearbeiten** klickst.

{% data reusables.projects.project-settings %}
1. Klicke auf den Namen des Iterationsfelds, das du anpassen möchtest.
1. Wenn du den Namen einer Iteration ändern möchtest, klicke auf den Namen, und beginne mit der Eingabe.
1. Um das Datum oder die Dauer einer Iteration zu ändern, klicke auf das Datum, um den Kalender zu öffnen. Klicke auf den Starttag, dann auf den Endtag, und zum Abschluss auf **Anwenden**.
1. Wenn du optional eine Iteration löschen möchtest, klicke auf {% octicon "trash" aria-label="The trash icon" %}.
1. Klicke auf **Änderungen speichern**.

## <a name="inserting-a-break"></a>Einfügen einer Pause

Du kannst Pausen in deine Iterationen einfügen, um zu kommunizieren, wenn du eine Pause von der geplanten Arbeit einlegst. Die Dauer einer neuen Pause wird standardmäßig auf die Länge der zuletzt erstellten Iteration festgelegt.

{% data reusables.projects.project-settings %}
1. Klicke auf den Namen des Iterationsfelds, das du anpassen möchtest.
2. Klicke auf der Trennlinie rechts oberhalb einer Iteration auf **Pause einfügen**.
   ![Screenshot mit der Position der Schaltfläche „Pause einfügen“](/assets/images/help/issues/iteration-insert-break.png)
3. Wenn du optional die Dauer der Pause ändern möchtest, klicke auf das Datum, um den Kalender zu öffnen. Klicke auf den Starttag, dann auf den Endtag, und zum Abschluss auf **Anwenden**.
4. Klicke auf **Änderungen speichern**.
