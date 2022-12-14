---
title: Anpassen einer Ansicht
intro: Zeige die benötigten Informationen an, indem du Layout, Gruppierung, Sortierung und Filter in deinem Projekt änderst.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
- /issues/trying-out-the-new-projects-experience/customizing-your-project-views
type: tutorial
topics:
- Projects
ms.openlocfilehash: 0a7d1076fcf1a9d7f20b65a5e0a75b7d8029f834
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106773"
---
## Ändern des Projektlayouts

Du kannst dein Projekt als Tabelle oder als Board anzeigen.

{% data reusables.projects.open-view-menu %}
1. Klicke unter „Layout“ auf **Tabelle** oder **Board**.
   ![Screenshot der Option „Layout“](/assets/images/help/projects-v2/table-or-board.png)

 

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Layout wechseln“.

## Anzeigen und Ausblenden von Feldern

Du kannst ein bestimmtes Feld anzeigen oder ausblenden.

{% data reusables.projects.open-view-menu %}
1. Klicke unter „Konfiguration“ auf {% octicon "note" aria-label="the note icon" %} und die Liste der derzeit angezeigten Felder.
   ![Screenshot der Menüoption zum Ein- oder Ausblenden von Feldern](/assets/images/help/projects-v2/show-hide-fields-menu-item.png)
1. Wähle die Spalten aus, die du ein- oder ausblenden möchtest.
   ![Screenshot des Menüs zum Ein- und Ausblenden von Feldern](/assets/images/help/projects-v2/show-hide-fields.png)

Du kannst auch einzelne Felder in der Tabellenansicht ausblenden.

1. Klicke neben dem Feld, das du ausblenden möchtest, auf {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
   ![Screenshot des Symbols „Feldmenü“](/assets/images/help/projects-v2/modify-field-menu.png)
1. Klicke auf {% octicon "eye-closed" aria-label="the eye closed icon" %} **Feld ausblenden**.
   ![Screenshot der Menüoption „Feld ausblenden“](/assets/images/help/projects-v2/hide-field-via-menu.png)

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne, „einblenden“, „ausblenden“ oder den Namen des Felds einzugeben.

## Neuanordnen von Feldern

Im Tabellenlayout kannst du die Anordnung der Felder ändern.

1. Klicke auf den Feldheader.
   ![Screenshot des Feldheaders](/assets/images/help/projects-v2/select-field-header.png)
2. Halte die Maustaste gedrückt, und ziehe das Feld an die gewünschte Position.

## Neuanordnen von Zeilen

Im Tabellenlayout kannst du die Anordnung der Zeilen ändern.

1. Klicke auf die Nummer am Anfang der Zeile.
   ![Screenshot der Zeilennummer](/assets/images/help/projects-v2/select-row-number.png)
2. Halte die Maustaste gedrückt, und ziehe die Zeile an die gewünschte Position.

## Sortieren nach Feldwerten

Im Tabellenlayout kannst du Elemente nach einem Feldwert sortieren.

{% note %}

**Hinweis:** Bei einer sortierten Tabelle können die Zeilen nicht manuell neu angeordnet werden.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Klicke auf **Sortieren**.
   ![Screenshot des Menüelements „Sortieren“](/assets/images/help/projects-v2/sort-menu-item.png)
1. Wähle das Feld aus, nach dem sortiert werden soll.
   ![Screenshot des Menüs „Sortieren“](/assets/images/help/projects-v2/sort-menu.png)
2. Wahlweise kannst du die Richtung der Sortierung ändern, indem du auf {% octicon "sort-desc" aria-label="the sort icon" %} klickst.
   ![Screenshot der Option „Sortierreihenfolge“](/assets/images/help/projects-v2/sort-order.png)
3. Wahlweise kannst du eine Sortierung entfernen, indem du am Ende der Liste auf {% octicon "x" aria-label="the x icon" %} **Keine Sortierung** klickst.
   ![Screenshot von „Keine Sortierung“](/assets/images/help/projects-v2/no-sorting.png)

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Sortieren nach“.

## Gruppieren nach Feldwerten im Tabellenlayout

Im Tabellenlayout kannst du Elemente nach einem benutzerdefinierten Feldwert gruppieren. Wenn Elemente gruppiert sind und du ein Element in eine neue Gruppe ziehst, wird der Wert dieser Gruppe angewendet. Wenn du Elemente z. B. nach „Status“ gruppierst und ein Element mit dem Status `In progress` in die Gruppe `Done` ziehst, wird der Status des Elements in `Done` geändert. Wenn du einer Gruppe ein neues Element hinzufügst, wird das neue Element mit dem Wert der Gruppe gefüllt.

{% note %}

**Hinweis:** Elemente können nicht nach Titel, Bezeichnungen, Prüfer*innen oder verknüpften Pull Requests gruppiert werden.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Klicke auf {% octicon "rows" aria-label="the rows icon" %} **Gruppieren**.
   ![Screenshot des Menüelements „Gruppieren“](/assets/images/help/projects-v2/group-menu-item.png)
1. Wähle das Feld aus, nach dem die Gruppierung erfolgen soll.
   ![Screenshot des Menüs „Gruppieren“](/assets/images/help/projects-v2/group-menu.png)
2. Wahlweise kannst du eine Gruppierung deaktivieren, indem du am Ende der Liste auf {% octicon "x" aria-label="the x icon" %} **Keine Gruppierung** klickst.
   ![Screenshot von „Keine Gruppierung“](/assets/images/help/projects-v2/no-grouping.png)

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Gruppieren nach“.

{% ifversion projects-v2-numeric-summary %}

## Anzeigen der Summe eines Zahlenfelds

Du kannst eine Ansicht so konfigurieren, dass sie die Summe eines oder mehrerer Zahlenfelder anzeigt, einschließlich einer Zählung der Elemente in der Gruppe oder Spalte. Wenn du z. B. über ein Zahlenfeld verfügst, in dem du die Anzahl der Stunden angibst, die für die Erledigung der einzelnen Aufgaben benötigt werden, kannst du die Summe dieser Stunden für jede Gruppe oder Spalte anzeigen.

Im Boardlayout werden Feldsummen oben in jeder Spalte angezeigt. Im Tabellenlayout werden beim Aktivieren der Gruppierung nach einem Feld die Feldsummen in die Überschrift jeder Gruppe eingeschlossen.

{% data reusables.projects.open-view-menu %}
1. Klicke auf {% octicon "number" aria-label="the number icon" %} **Feldsumme**.
   
   ![Screenshot des Menüelements „Feldsumme“](/assets/images/help/projects-v2/field-sum-menu.png)
   
1. Wähle die Felder aus, die du einschließen möchten.
   
   ![Screenshot des Menüs „Feldsumme“](/assets/images/help/projects-v2/field-sum-select-field.png)
   

{% endif %}

## Festlegen des Spaltenfelds im Boardlayout

Im Boardlayout wählst du ein einzelnes Auswahl- oder Iterationsfeld für deine Spalten aus. Wenn du ein Element in eine neue Spalte ziehst, wird der Wert dieser Spalte auf das gezogene Element angewendet. Beispiel: Wenn du das Feld „Status“ für deine Boardspalten verwendest und ein Element mit dem Status `In progress` in die Spalte `Done` ziehen, ändert sich der Status des Elements in `Done`.

{% data reusables.projects.open-view-menu %}
1. Klicke auf {% octicon "columns" aria-label="the columns icon" %} **Spaltenfeld**.
   ![Screenshot des Elements „Spaltenfeld“](/assets/images/help/projects-v2/column-field-menu-item.png)
1. Wähle das Feld aus, das du verwenden möchtest.
   ![Screenshot des Menüs „Spaltenfeld“](/assets/images/help/projects-v2/column-field-menu.png)

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Spaltenfeld nach“.

{% ifversion projects-v2-column-visibility %}

## Anzeigen und Ausblenden von Spalten im Boardlayout

Im Boardlayout kannst du auswählen, welche Spalten angezeigt werden sollen. Die verfügbaren Spalten setzen sich aus dem Inhalt des von dir ausgewählten Spaltenfelds zusammen.

1. Scrolle im Boardlayout nach rechts zu deinen Spalten, und klicke auf {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Screenshot der Schaltfläche mit dem Pluszeichen](/assets/images/help/projects-v2/board-add-column.png)
   
1. Wähle die Spalten aus, die du anzeigen möchtest.
   
   ![Screenshot der Liste mit Spalten](/assets/images/help/projects-v2/board-select-columns.png)
   
{% endif %}
