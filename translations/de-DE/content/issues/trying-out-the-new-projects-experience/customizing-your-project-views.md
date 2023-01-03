---
title: Anpassen deiner Projektansichten (Beta)
intro: Zeige die benötigten Informationen an, indem du Layout, Gruppierung, Sortierung und Filter in deinem Projekt änderst.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Projects
ms.openlocfilehash: 86b8d7e439b19327b1f752f8d893e349665168f4
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145130969"
---
{% data reusables.projects.projects-beta %}

## <a name="project-command-palette"></a>Projektbefehlspalette

Über die Projektbefehlspalette kannst du im Handumdrehen Einstellungen ändern und Befehle in deinem Projekt ausführen.

1. {% data reusables.projects.open-command-palette %}
2. Gib dazu einfach den Anfang eines Befehls ein, oder navigiere im Fenster der Befehlspalette, um nach einem Befehl zu suchen. Weitere Beispiele für Befehle findest du in den nächsten Abschnitten.

## <a name="changing-the-project-layout"></a>Ändern des Projektlayouts

Du kannst dein Projekt als Tabelle oder als Board anzeigen.

1. {% data reusables.projects.open-command-palette %}
2. Beginne mit der Eingabe von „Switch layout“.
3. Wähle den erforderlichen Befehl aus. Beispiel: **Switch layout: Table**.

Alternativ klicke neben einem Ansichtsnamen auf das Symbol {% octicon "triangle-down" aria-label="the drop-down icon" %} und dann auf **Tabelle** oder **Board**.

## <a name="showing-and-hiding-fields"></a>Anzeigen und Ausblenden von Feldern

Du kannst ein bestimmtes Feld anzeigen oder ausblenden.

### <a name="showing-and-hiding-fields-in-table-layout"></a>Anzeigen und Ausblenden von Feldern im Tabellenlayout

1. {% data reusables.projects.open-command-palette %}
2. Beginne mit der Eingabe der Aktion, die du ausführen möchtest („show“ oder „hide“), oder gib den Namen des Felds ein.
3. Wähle den erforderlichen Befehl aus. Beispiel: **Show: Milestone**.

Alternativ klickst du rechts neben der Tabelle auf {% octicon "plus" aria-label="the plus icon" %}. Gib im Dropdownmenü an, welche Felder angezeigt oder ausgeblendet werden sollen. Das Symbol {% octicon "check" aria-label="check icon" %} zeigt an, welche Felder angezeigt werden.

Alternativ klicke neben einem Feldnamen auf das Symbol {% octicon "triangle-down" aria-label="the drop-down icon" %} und dann auf **Feld ausblenden**.

### <a name="showing-and-hiding-fields-in-board-layout"></a>Anzeigen und Ausblenden von Feldern im Boardlayout

1. Klicke neben dem Ansichtsnamen auf {% octicon "triangle-down" aria-label="the drop-down icon" %}.
2. Klicke unter **Konfiguration** auf {% octicon "list-unordered" aria-label="the unordered list icon" %}.
3. Wähle im angezeigten Menü Felder aus, um sie hinzuzufügen, und deaktiviere Felder, um sie aus der Ansicht zu entfernen.

## <a name="reordering-fields"></a>Neuanordnen von Feldern

Du kannst die Anordnung von Feldern ändern.

1. Klicke auf den Feldheader.
2. Halte die Maustaste gedrückt, und ziehe das Feld an die gewünschte Position.

## <a name="reordering-rows"></a>Neuanordnen von Zeilen

Im Tabellenlayout kannst du die Anordnung der Zeilen ändern.

1. Klicke auf die Nummer am Anfang der Zeile.
2. Halte die Maustaste gedrückt, und ziehe die Zeile an die gewünschte Position.

## <a name="sorting-by-field-values"></a>Sortieren nach Feldwerten

Im Tabellenlayout kannst du Elemente nach einem Feldwert sortieren.

1. {% data reusables.projects.open-command-palette %}
2. Beginne mit der Eingabe von „Sort by“ oder des Feldnamens, nach dem sortiert werden soll.
3. Wähle den erforderlichen Befehl aus. Beispiel: **Sort by: Assignees, asc**.

Alternativ klicke neben dem Feldnamen, nach dem sortiert werden soll, auf {% octicon "triangle-down" aria-label="the drop-down icon" %} und dann auf **Aufsteigend sortieren** oder **Absteigend sortieren**.

{% note %}

**Hinweis:** Bei einer sortierten Tabelle können die Zeilen nicht manuell neu angeordnet werden.

{% endnote %}

Führe ähnliche Schritte aus, um eine Sortierung zu entfernen.

1. {% data reusables.projects.open-command-palette %}
2. Beginne mit der Eingabe von „Remove sort-by“.
3. Wähle **Remove sort-by** aus.

Alternativ klicke neben dem Ansichtsnamen auf {% octicon "triangle-down" aria-label="the drop-down icon" %} und dann auf das Menüelement der aktuellen Sortierung.

## <a name="grouping-by-field-values-in-table-layout"></a>Gruppieren nach Feldwerten im Tabellenlayout

Im Tabellenlayout kannst du Elemente nach einem benutzerdefinierten Feldwert gruppieren. Wenn Elemente gruppiert sind und du ein Element in eine neue Gruppe ziehst, wird der Wert dieser Gruppe angewendet. Wenn du Elemente z. B. nach „Status“ gruppierst und ein Element mit dem Status `In progress` in die Gruppe `Done` ziehst, wird der Status des Elements in `Done` geändert. Wenn du einer Gruppe ein neues Element hinzufügst, wird das neue Element mit dem Wert der Gruppe gefüllt.

{% note %}

**Hinweis:** Derzeit können Elemente nicht nach Titel, Bezeichnungen, Prüfern oder verknüpften Pull Requests gruppiert werden.

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. Beginne mit der Eingabe von „Group by“ oder des Feldnamens, nach dem gruppiert werden soll.
3. Wähle den erforderlichen Befehl aus. Beispiel: **Group by: Status**.

Alternativ klicke neben dem Feldnamen, nach dem gruppiert werden soll, auf {% octicon "triangle-down" aria-label="the drop-down icon" %} und dann auf **Nach Werten gruppieren**.

Führe ähnliche Schritte aus, um eine Gruppierung zu entfernen.

1. {% data reusables.projects.open-command-palette %}
2. Beginne mit der Eingabe von „Remove group-by“.
3. Wähle **Remove group-by** aus.

Alternativ klicke neben dem Ansichtsnamen auf {% octicon "triangle-down" aria-label="the drop-down icon" %} und dann auf das Menüelement, das die aktuelle Gruppierung anzeigt.

## <a name="setting-the-column-field-in-board-layout"></a>Festlegen des Spaltenfelds im Boardlayout

Im Boardlayout wählst du ein einzelnes Auswahl- oder Iterationsfeld für deine Spalten aus. Wenn du ein Element in eine neue Spalte ziehst, wird der Wert dieser Spalte auf das gezogene Element angewendet. Beispiel: Wenn du das Feld „Status“ für deine Boardspalten verwendest und ein Element mit dem Status `In progress` in die Spalte `Done` ziehen, ändert sich der Status des Elements in `Done`.

1. {% data reusables.projects.open-command-palette %}
1. Beginne mit der Eingabe von „Column field by“ oder des Feldnamens, der für deine Spalten verwendet werden soll.
1. Wähle den erforderlichen Befehl aus. Beispiel: **Column field by: Status**.

Alternativ klicke neben der Boardansicht, die geändert werden soll, auf {% octicon "triangle-down" aria-label="the drop-down icon" %} und dann auf {% octicon "columns" aria-label="the column icon" %} **Spaltenfeld**. Wähle das Feld aus, das du für die Boardspalten verwenden möchtest.

## <a name="filtering-items"></a>Filtern von Elementen

Klicke oben in der Tabelle auf {% octicon "filter" aria-label="the filter icon" %}, um die Leiste zum Filtern nach Schlüsselwort oder Feld einzublenden. Beginne mit der Eingabe des Feldnamens und des Werts, nach dem du filtern möchtest. Während der Eingabe werden mögliche Werte angezeigt.

{% data reusables.projects.projects-filters %}

Alternativ kannst du die Befehlspalette verwenden.

1. {% data reusables.projects.open-command-palette %}
2. Beginne mit der Eingabe von „Filter by“ oder des Feldnamens, nach dem du filtern möchtest.
3. Wähle den erforderlichen Befehl aus. Beispiel: **Filter by Status**.
4. Gib den Wert ein, nach dem du filtern möchtest. Beispiel: „In progress“. Du kannst die Liste auch nach Elementen filtern, die einen bestimmten Wert nicht aufweisen (wähle z. B. „Exclude status“ und einen Status aus), oder nach Elementen, bei denen kein Wert vorhanden ist (wähle z. B. „No status“ aus).

Im Boardlayout kannst du auf Elementdaten klicken, um nach Elementen mit diesem Wert zu filtern. Klicke beispielsweise auf eine zugewiesene Person, um nur Elemente für diese Person anzuzeigen. Soll der Filter entfernt werden, klicke noch mal auf die Elementdaten.

Weitere Informationen findest du unter [Filtering projects](/issues/trying-out-the-new-projects-experience/filtering-projects) („Filtern von Projekten“).

## <a name="creating-a-project-view"></a>Erstellen einer Projektansicht

In Projektansichten kannst du im Handumdrehen bestimmte Aspekte deines Projekts anzeigen. Die einzelnen Ansichten werden auf separaten Registerkarten in deinem Projekt angezeigt. 

Du kannst z. B. über folgende Ansichten verfügen:
- Eine Ansicht, in der alle noch nicht gestarteten Elemente aufgeführt sind (Filterung nach „Status“).
- Eine Ansicht, in der die Arbeitsauslastung für jedes Team angezeigt wird (Gruppierung nach einem benutzerdefinierten Feld „Team“).
- Eine Ansicht, in der die Elemente mit dem frühesten Zielversanddatum angezeigt werden (Sortierung nach einem Datumsfeld).

So füge eine neue Ansicht hinzu:

1. {% data reusables.projects.open-command-palette %}
2. Beginne mit der Eingabe von „New view“ (für eine neue Ansicht) oder „Duplicate view“ (zum Duplizieren einer Ansicht).
3. Wähle den erforderlichen Befehl aus.

Alternativ klicke neben der Ansicht ganz rechts auf {% octicon "plus" aria-label="the plus icon" %} **Neue Ansicht**.

Alternativ klicke neben einem Ansichtsnamen auf {% octicon "triangle-down" aria-label="the drop-down icon" %} und dann auf **Ansicht duplizieren**.

Die neue Ansicht wird automatisch gespeichert.

## <a name="saving-changes-to-a-view"></a>Speichern von Änderungen an einer Ansicht

Wenn du Änderungen an einer Ansicht vornimmst (Daten in einer Ansicht z. B. sortieren, neu anordnen, filtern oder gruppieren), erscheint neben dem Ansichtsnamen ein Punkt, der auf Änderungen hinweist, die noch nicht gespeichert wurden. 

![Indikator für nicht gespeicherte Änderungen](/assets/images/help/projects/unsaved-changes.png)

Wenn du die Änderungen nicht speichern möchtest, kannst du diesen Indikator ignorieren. Deine Änderungen sind für andere Benutzer*innen nicht sichtbar.

So speicherst du die aktuelle Konfiguration der Ansicht für alle Projektmitglieder:
1. {% data reusables.projects.open-command-palette %}
1. Beginne mit der Eingabe von „Save view“ oder „Save changes to new view“.
1. Wähle den erforderlichen Befehl aus.

Alternativ klicke neben einem Ansichtsnamen auf {% octicon "triangle-down" aria-label="the drop-down icon" %} und dann auf **Ansicht speichern** oder **Änderungen in neuer Ansicht speichern**.

## <a name="reordering-saved-views"></a>Neuanordnen von gespeicherten Ansichten

Wenn du die Anordnung der Registerkarten mit deinen gespeicherten Ansichten ändern möchtest, klicke auf eine Registerkarte, und ziehe sie an eine neue Position.

Die neue Anordnung der Registerkarten wird automatisch gespeichert.

## <a name="renaming-a-saved-view"></a>Umbenennen einer gespeicherten Ansicht

So benennst du eine Ansicht um:
1. Doppelklicke auf der Projektregisterkarte auf den Namen der Ansicht.
1. Ändere den Namen.
1. Drücke die EINGABETASTE, oder klicke auf eine Stelle außerhalb der Registerkarte.

Die Namensänderung wird automatisch gespeichert.

## <a name="deleting-a-saved-view"></a>Löschen einer gespeicherten Ansicht

Löschen einer Ansicht:
1. {% data reusables.projects.open-command-palette %}
2. Beginne mit der Eingabe von „Delete view“.
3. Wähle den erforderlichen Befehl aus.

Alternativ klicke neben einem Ansichtsnamen auf {% octicon "triangle-down" aria-label="the drop-down icon" %} und dann auf **Ansicht löschen**.

## <a name="further-reading"></a>Weitere Informationsquellen

- [About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects) („Informationen zu Projekten (Beta)“)
- [Creating a project (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project) („Erstellen eines Projekts (Beta)“)
