---
title: Tastenkombinationen
intro: 'Auf nahezu allen Seiten auf {% data variables.product.prodname_dotcom %} gibt es Tastenkürzel, um Aktionen schneller durchführen zu können.'
redirect_from:
  - /articles/using-keyboard-shortcuts
  - /categories/75/articles
  - /categories/keyboard-shortcuts
  - /articles/keyboard-shortcuts
  - /github/getting-started-with-github/keyboard-shortcuts
  - /github/getting-started-with-github/using-github/keyboard-shortcuts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ad75d2afe5750ee2596d2695334ab5c7101aee79
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180777'
---
## Informationen zu Tastenkürzeln

Wenn du <kbd>?</kbd> auf {% data variables.product.prodname_dotcom %} eingeben, wird ein Dialogfeld mit den Tastenkombinationen angezeigt, die für diese Seite verfügbar sind. Mit diesen Tastenkürzeln kannst du Aktionen auf der gesamten Website durchführen, ohne deine Maus zur Navigation verwenden zu müssen.

{% ifversion keyboard-shortcut-accessibility-setting %} In den Barrierefreiheitseinstellungen kannst du Tastenkombinationen mit Buchstaben deaktivieren und gleichzeitig Tastenkombinationen mit Zusatztasten zulassen. Weitere Informationen findest du unter [Verwalten von Barrierefreiheitseinstellungen](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-accessibility-settings).{% endif %}

{% ifversion command-palette %} Mit {% data variables.product.prodname_command_palette %} kannst du schnell auf eine Vielzahl von Aktionen zugreifen, ohne dir die einzelnen Tastenkombinationen merken zu müssen. Weitere Informationen findest du unter [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette).{% endif %}

In den folgenden Abschnitten sind einige der verfügbaren Tastenkombinationen aufgeführt, sortiert nach den Seiten, auf denen du sie in {% data variables.location.product_location %} verwenden kannst.

## Website-weite Tastenkürzel

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>S</kbd> oder <kbd>/</kbd> | Hiermit fokussierst du die Suchleiste. Weitere Informationen findest du unter [Informationen zur Suche auf {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).
|<kbd>G</kbd> <kbd>N</kbd> | Hiermit wechselst du zu deinen Benachrichtigungen. Weitere Informationen findest du unter [Informationen zu Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/about-notifications).
|<kbd>ESC</kbd> | Wenn auf eine Benutzer-, Issue- oder Pull-Request-Hovercard (Informationskarte) konzentriert, schließt das Kürzel die Hovercard und konzentriert sich erneut auf das Element, in dem sich die Hovercard befindet
{% ifversion command-palette %}|<kbd>COMMAND</kbd>+<kbd>K</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>K</kbd> (Windows/Linux) | Öffnet {% data variables.product.prodname_command_palette %}. Wenn du Markdowntext bearbeitest, öffne die Befehlspalette mit <kbd>COMMAND</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> oder <kbd>STRG</kbd>+<kbd>ALT</kbd>+<kbd>K</kbd>. Weitere Informationen findest du unter [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette).{% endif %}

## Repositorys

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>G</kbd> <kbd>C</kbd> | Wechselt zur Registerkarte **Code**.
|<kbd>G</kbd> <kbd>I</kbd> | Wechselt zur Registerkarte **Issues**. Weitere Informationen findest du unter [Informationen zu Issues](/articles/about-issues).
|<kbd>G</kbd> <kbd>P</kbd> | Wechselt zur Registerkarte **Pull Requests**. Weitere Informationen findest du unter [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).{% ifversion fpt or ghes or ghec %}
|<kbd>G</kbd> <kbd>A</kbd> | Wechselt zur Registerkarte **Aktionen**. Weitere Informationen findest du unter [Informationen zu Aktionen](/actions/getting-started-with-github-actions/about-github-actions).{% endif %}
|<kbd>G</kbd> <kbd>B</kbd> | Wechselt zur Registerkarte **Projekte**. Weitere Informationen findest du unter [Informationen zu Projektboards](/articles/about-project-boards).
|<kbd>G</kbd> <kbd>W</kbd> | Hiermit wechselst du zur Registerkarte **Wiki**. Weitere Informationen findest du unter [Informationen zu Wikis](/communities/documenting-your-project-with-wikis/about-wikis).{% ifversion discussions %}
|<kbd>G</kbd> <kbd>G</kbd> | Wechselt zur Registerkarte **Diskussionen**. Weitere Informationen findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions).{% endif %}

## Quellcodebearbeitung

| Tastenkombination | Beschreibung |-----------|------------{% ifversion fpt or ghec %} |<kbd>.</kbd> | Öffnet ein Repository oder einen Pull Request auf derselben Browserregisterkarte im webbasierten Editor. Du musst angemeldet sein, um den Editor zu nutzen. Weitere Informationen findest du unter [Webbasierter Editor](/codespaces/developing-in-codespaces/web-based-editor).
|<kbd>></kbd> | Öffnet ein Repository oder einen Pull Request auf einer neuen Browserregisterkarte im webbasierten Editor. Du musst angemeldet sein, um den Editor zu nutzen. Weitere Informationen findest du unter [Webbasierter Editor](/codespaces/developing-in-codespaces/web-based-editor).{% endif %} |<kbd>COMMAND</kbd>+<kbd>B</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>B</kbd> (Windows/Linux) | Fügt die Markdownformatierung von Text als fett ein. |<kbd>COMMAND</kbd>+<kbd>I</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>I</kbd> (Windows/Linux) | Fügt die Markdownformatierung von Text als kursiv ein. |<kbd>COMMAND</kbd>+<kbd>K</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>K</kbd> (Windows/Linux) | Fügt die Markdownformatierung zum Erstellen eines Links ein.{% ifversion fpt or ghec or ghae or ghes > 3.3 %} |<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>7</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>7</kbd> (Windows/Linux) | Fügt die Markdownformatierung für eine sortierte Liste ein. |<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>8</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>8</kbd> (Windows/Linux) | Fügt die Markdownformatierung für eine unsortierte Liste ein. |<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>.</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>.</kbd> (Windows/Linux) | Fügt die Markdownformatierung für ein Zitat ein.{% endif %} |<kbd>E</kbd> | Öffnet die Quellcodedatei in der Registerkarte **Datei bearbeiten**. |<kbd>COMMAND</kbd>+<kbd>F</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>F</kbd> (Windows/Linux) | Startet die Suche im Datei-Editor. |<kbd>COMMAND</kbd>+<kbd>G</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>G</kbd> (Windows/Linux) | Sucht nach dem nächsten Eintrag. |<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>G</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>G</kbd> (Windows/Linux) | Sucht nach dem vorherigen Eintrag. |<kbd>COMMAND</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>F</kbd> (Windows/Linux) | Ersetzt den Eintrag. |<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>R</kbd> (Windows/Linux) | Ersetzt alle Einträge.|<kbd>ALT</kbd>+<kbd>G</kbd> | Springt zur entsprechenden Zeile. |<kbd>COMMAND</kbd>+<kbd>Z</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>Z</kbd> (Windows/Linux) | Macht die Aktion rückgängig. |<kbd>COMMAND</kbd>+<kbd>Y</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>Y</kbd> (Windows/Linux) | Wiederholt die Aktion. |<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>P</kbd> | Wechselt zwischen den Registerkarten **Datei bearbeiten** und **Vorschau der Änderungen**. |<kbd>COMMAND</kbd>+<kbd>S</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>S</kbd> (Windows/Linux) | Schreibt eine Commitnachricht.

Weitere Tastenkombinationen findest du in der [CodeMirror-Dokumentation](https://codemirror.net/doc/manual.html#commands).

## Quellcodedurchsuchung

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>T</kbd> | Hiermit wird die Dateisuche aktiviert
|<kbd>L</kbd> | Hiermit springst du zu einer Zeile in deinem Code
|<kbd>W</kbd> | Wechsle zu einem neuen Branch oder Tag
|<kbd>J</kbd> | Erweitere eine URL auf ihre kanonische Form. Weitere Informationen findest du unter [Abrufen dauerhafter Links zu Dateien](/articles/getting-permanent-links-to-files).
|<kbd>I</kbd> | Zeige Kommentare zu Diffs an oder blende sie aus. Weitere Informationen findest du unter [Kommentieren der Unterschiede eines Pull Requests](/articles/commenting-on-the-diff-of-a-pull-request).
|<kbd>A</kbd> | Blendet Anmerkungen zu Unterschieden ein oder aus.
|<kbd>B</kbd> | Öffne die Blame-Ansicht. Weitere Informationen findest du unter [Verfolgen von Änderungen in einer Datei](/articles/tracing-changes-in-a-file).

## Kommentare

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>COMMAND</kbd>+<kbd>B</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>B</kbd> (Windows/Linux) | Hiermit wird die Markdown-Formatierung für den Fettdruck von Text eingefügt.
|<kbd>COMMAND</kbd>+<kbd>I</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>I</kbd> (Windows/Linux) | Hiermit wird die Markdown-Formatierung für die Kursivsetzung von Text eingefügt.
|<kbd>COMMAND</kbd>+<kbd>E</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>E</kbd> (Windows/Linux) | Fügt die Markdownformatierung für Code oder einen Befehl in einer Zeile ein.{% ifversion fpt or ghae > 3.3 or ghes or ghec %}
|<kbd>COMMAND</kbd>+<kbd>K</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>K</kbd> (Windows/Linux) | Fügt die Markdownformatierung zum Erstellen eines Links ein.{% endif %}{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %}
|<kbd>COMMAND</kbd>+<kbd>V</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>V</kbd> (Windows/Linux) | Bei Anwendung auf hervorgehobenem Text wird hiermit ein Markdown-Link erstellt{% endif %}.
|<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>P</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>P</kbd> (Windows/Linux) | Wechselt zwischen den Registerkarten **Schreiben** und **Vorschau** für Kommentare.{% ifversion fpt or ghae or ghes > 3.4 or ghec %}
|<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>V</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>V</kbd> (Windows/Linux) | Fügt einen HTML-Link als reinen Text ein.{% endif %}
|<kbd>BEFEHL</kbd>+<kbd>UMSCHALT</kbd>+<kbd>OPTION</kbd>+<kbd>V</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>ALT</kbd>+<kbd>V</kbd> (Windows/Linux) | Fügt einen HTML-Link als reinen Text ein.
|<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>7</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>7</kbd> (Windows/Linux) | Fügt die Markdownformatierung für eine sortierte Liste ein.
|<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>8</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>8</kbd> (Windows/Linux) | Fügt die Markdownformatierung für eine unsortierte Liste ein.
|<kbd>COMMAND</kbd>+<kbd>EINGABETASTE</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>EINGABETASTE</kbd> (Windows/Linux) | Hiermit wird ein Kommentar abgesendet.
|<kbd>STRG</kbd>+ <kbd>.</kbd> und dann <kbd>STRG</kbd>+<kbd>[gespeicherte Antwortnummer]</kbd> | Hiermit wird das Menü für gespeicherte Antworten geöffnet und im Kommentarfeld automatisch eine gespeicherte Antwort eingetragen. Weitere Informationen findest du unter [Informationen zu gespeicherten Antworten](/articles/about-saved-replies).
|<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>.</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>.</kbd> (Windows/Linux) | Fügt die Markdownformatierung für ein Zitat ein.{% ifversion fpt or ghec %}
|<kbd>COMMAND</kbd>+<kbd>G</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>G</kbd> (Windows/Linux) | Hiermit wird ein Vorschlag eingefügt. Weitere Informationen findest du unter [Überprüfen vorgeschlagener Änderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request). |{% endif %}
|<kbd>R</kbd> | Hiermit wird der ausgewählte Text in deiner Antwort zitiert. Weitere Informationen findest du unter [Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax#quoting-text). |

## Issue- und Pull-Request-Listen

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>C</kbd> | Ausgabe erstellen
|<kbd>COMMAND</kbd>+<kbd>/</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>/</kbd> (Windows/Linux) | Hiermit wird der Fokus deines Cursors auf die Suchleiste der Issues oder Pull Requests gelegt. Weitere Informationen findest du unter [Filtern und Suchen von Issues und Pull Requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests).||
|<kbd>U</kbd> | Hiermit wird nach Autor gefiltert.
|<kbd>L</kbd> | Hiermit wird nach Kennzeichnungen gefiltert oder werden diese bearbeitet. Weitere Informationen findest du unter [Filtern von Issues und Pull Requests nach Bezeichnungen](/articles/filtering-issues-and-pull-requests-by-labels).
|<kbd>ALT</kbd> und Klicken | Hiermit werden Kennzeichnungen beim Filtern nach Kennzeichnungen ausgeschlossen. Weitere Informationen findest du unter [Filtern von Issues und Pull Requests nach Bezeichnungen](/articles/filtering-issues-and-pull-requests-by-labels).
|<kbd>M</kbd> | Hiermit wird nach Meilensteinen gefiltert oder werden diese bearbeitet. Weitere Informationen findest du unter [Filtern von Issues und Pull Requests nach Meilensteinen](/articles/filtering-issues-and-pull-requests-by-milestone).
|<kbd>A</kbd> | Hiermit wird nach Bearbeitern gefiltert oder werden diese bearbeitet. Weitere Informationen findest du unter [Filtern von Issues und Pull Requests nach zugewiesenen Personen](/articles/filtering-issues-and-pull-requests-by-assignees).
|<kbd>O</kbd> oder <kbd>EINGABETASTE</kbd> | Hiermit wird ein Issue geöffnet.

## Issues und Pull Requests
| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>Q</kbd> | Hiermit wird ein Reviewer angefordert. Weitere Informationen findest du unter [Anfordern einer Pull Request-Überprüfung](/articles/requesting-a-pull-request-review/).
|<kbd>M</kbd> | Hiermit wird ein Meilenstein festgelegt. Weitere Informationen findest du unter [Zuordnen von Meilensteinen zu Issues und Pull Requests](/articles/associating-milestones-with-issues-and-pull-requests/).
|<kbd>L</kbd> | Hiermit wird eine Kennzeichnung angewendet. Weitere Informationen findest du unter [Anwenden von Bezeichnungen auf Issues und Pull Requests](/articles/applying-labels-to-issues-and-pull-requests/).
|<kbd>A</kbd> | Hiermit wird ein Bearbeiter festgelegt. Weitere Informationen findest du unter [Zuweisen von Issues und Pull Requests zu anderen {% data variables.product.company_short %}-Benutzer*innen](/articles/assigning-issues-and-pull-requests-to-other-github-users/).
|<kbd>X</kbd> | Verknüpft ein Issue oder einen Pull Request aus demselben Repository. Weitere Informationen findest du unter [Verknüpfen eines Pull Requests mit einem Issue](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue/).
|<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>P</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>P</kbd> (Windows/Linux) | Schaltet zwischen den Registerkarten **Schreiben** und **Vorschau** um.{% ifversion fpt or ghec %}
|<kbd>ALT</kbd> und Klicken | Wenn du beim Erstellen eines Issues aus einer Aufgabenliste die <kbd>ALT</kbd>-Taste gedrückt hältst und auf {% octicon "issue-opened" aria-label="The issue opened icon" %} in der oberen rechten Ecke der Aufgabe klickst, wird das neue Issueformular in der aktuellen Registerkarte geöffnet. Weitere Informationen findest du unter [Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).
|<kbd>UMSCHALT</kbd> und Klicken | Wenn du beim Erstellen eines Issues aus einer Aufgabenliste die <kbd>UMSCHALT</kbd>-Taste gedrückt hältst und auf {% octicon "issue-opened" aria-label="The issue opened icon" %} in der oberen rechten Ecke der Aufgabe klickst, wird das neue Issueformular in einer neuen Registerkarte geöffnet. Weitere Informationen findest du unter [Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).
|<kbd>COMMAND</kbd> und Klicken (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd> und Klicken (Windows/Linux) | Wenn du beim Erstellen eines Issues aus einer Aufgabenliste die <kbd>COMMAND</kbd>-Taste oder <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd> gedrückt hältst und auf {% octicon "issue-opened" aria-label="The issue opened icon" %} in der oberen rechten Ecke der Aufgabe klickst, wird das neue Issueformular im neuen Fenster geöffnet. Weitere Informationen findest du unter [Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).{% endif %}

## Registerkarte „Dateien geändert“ in Pull Requests

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>C</kbd> | Öffne das Dropdownmenü **Commits**, um zu filtern, welche Commits in den Diffs angezeigt werden.
|<kbd>T</kbd> | Verschieben des Cursors in das Feld „Geänderte Dateien filtern“
|<kbd>BEFEHL</kbd>+<kbd>UMSCHALT</kbd>+<kbd>EINGABETASTE</kbd> (Mac) oder <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>EINGABETASTE</kbd> (Windows/Linux) | Übermitteln eines Reviewkommentars |
|<kbd>OPTION</kbd> und klicken (Mac) oder <kbd>ALT</kbd> und klicken (Windows/Linux) | Erweitern bzw. Reduzieren aller veralteten Reviewkommentare in einem Pull Request (z. B. indem du die <kbd>ALT</kbd>-Taste gedrückt hältst und auf **Veraltete einblenden** oder **Veraltete ausblenden** klickst) |
|Klicken, dann <kbd>UMSCHALT</kbd> und Klicken | Wenn du auf eine Zeilennummer klickst, dann die <kbd>UMSCHALT</kbd>-Taste gedrückt hältst und auf eine andere Zeilennummer klickst, kannst du mehrere Zeilen eines Pull Requests kommentieren. Weitere Informationen findest du unter [Kommentieren von Pull Requests](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request).|

{% ifversion projects-v2 %}

## {% data variables.projects.projects_v2_caps %}

### Navigieren in einem Projekt

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>BEFEHL</kbd>+<kbd>F</kbd> (Mac) oder <kbd>STRG</kbd>+<kbd>F</kbd> (Windows/Linux) | Fokusfilterfeld
|<kbd>←</kbd> | Zellenfokus nach links verschieben
|<kbd>→</kbd> | Zellenfokus nach rechts verschieben
|<kbd>↑</kbd> | Zellenfokus nach oben verschieben
|<kbd>↓</kbd> | Zellenfokus nach unten verschieben

### Bearbeiten eines Projekts

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>EINGABETASTE</kbd> | Bearbeitungsmodus für fokussierte Zelle umschalten
|<kbd>ESC</kbd> | Bearbeitung für fokussierte Zelle abbrechen
|<kbd>BEFEHL</kbd>+<kbd>UMSCHALT</kbd>+<kbd>\</kbd> (Mac) oder <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>\</kbd> (Windows/Linux) | Menü „Zeilenaktionen“ öffnen
|<kbd>UMSCHALT</kbd>+<kbd>LEERTASTE</kbd> | Element auswählen
|<kbd>LeerZchn</kbd> | Ausgewähltes Element öffnen
|<kbd>e</kbd> | Ausgewählte Elemente archivieren

{% endif %}

## {% data variables.product.prodname_projects_v1_caps %}

### Spalte verschieben

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>EINGABETASTE</kbd> oder <kbd>LEERTASTE</kbd> | Hiermit wird die fokussierte Spalte verschoben.
|<kbd>ESC</kbd> | Hiermit wird die ausgeführte Verschiebung abgebrochen.
|<kbd>EINGABETASTE</kbd> | Hiermit wird die ausgeführte Verschiebung abgeschlossen.
|<kbd>←</kbd> oder <kbd>H</kbd> | Hiermit wird die Spalte nach links verschoben.
|<kbd>COMMAND</kbd>+<kbd>←</kbd> oder <kbd>COMMAND</kbd>+<kbd>H</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>←</kbd> oder <kbd>STRG</kbd>+<kbd>H</kbd> (Windows/Linux) | Hiermit wird die Spalte an die äußerste linke Position verschoben.
|<kbd>→</kbd> oder <kbd>L</kbd> | Hiermit wird die Spalte nach rechts verschoben.
|<kbd>COMMAND</kbd>+<kbd>→</kbd> oder <kbd>COMMAND</kbd>+<kbd>L</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>→</kbd> oder <kbd>STRG</kbd>+<kbd>L</kbd> (Windows/Linux) | Hiermit wird die Spalte an die äußerste rechte Position verschoben.

### Karte verschieben

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>EINGABETASTE</kbd> oder <kbd>LEERTASTE</kbd> | Hiermit wird die fokussierte Karte verschoben.
|<kbd>ESC</kbd> | Hiermit wird die ausgeführte Verschiebung abgebrochen.
|<kbd>EINGABETASTE</kbd> | Hiermit wird die ausgeführte Verschiebung abgeschlossen.
|<kbd>↓</kbd> oder <kbd>J</kbd> | Hiermit wird die Karte nach unten verschoben.
|<kbd>COMMAND</kbd>+<kbd>↓</kbd> oder <kbd>COMMAND</kbd>+<kbd>J</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>↓</kbd> oder <kbd>STRG</kbd>+<kbd>J</kbd> (Windows/Linux) | Hiermit wird die Karte in den unteren Bereich der Spalte verschoben.
|<kbd>↑</kbd> oder <kbd>K</kbd> | Hiermit wird die Karte nach oben verschoben.
|<kbd>COMMAND</kbd>+<kbd>↑</kbd> oder <kbd>COMMAND</kbd>+<kbd>K</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>↑</kbd> oder <kbd>STRG</kbd>+<kbd>K</kbd> (Windows/Linux) | Hiermit wird die Karte in den oberen Bereich der Spalte verschoben.
|<kbd>←</kbd> oder <kbd>H</kbd> | Hiermit wird die Karte in den unteren Bereich der Spalte auf der linken Seite verschoben.
|<kbd>UMSCHALT</kbd>+<kbd>←</kbd> oder <kbd>UMSCHALT</kbd>+<kbd>H</kbd> | Hiermit wird die Karte in den oberen Bereich der Spalte auf der linken Seite verschoben.
|<kbd>COMMAND</kbd>+<kbd>←</kbd> oder <kbd>COMMAND</kbd>+<kbd>H</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>←</kbd> oder <kbd>STRG</kbd>+<kbd>H</kbd> (Windows/Linux) | Hiermit wird die Karte in den unteren Bereich der Spalte ganz links verschoben.
|<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>←</kbd> oder <kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>H</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>←</kbd> oder <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>H</kbd> (Windows/Linux) | Hiermit wird die Karte in den oberen Bereich der Spalte ganz links verschoben.
|<kbd>→</kbd> | Hiermit wird die Karte in den unteren Bereich der Spalte auf der rechten Seite verschoben.
|<kbd>UMSCHALT</kbd>+<kbd>→</kbd> oder <kbd>UMSCHALT</kbd>+<kbd>L</kbd> | Hiermit wird die Karte in den oberen Bereich der Spalte auf der rechten Seite verschoben.
|<kbd>COMMAND</kbd>+<kbd>→</kbd> oder <kbd>COMMAND</kbd>+<kbd>L</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>→</kbd> oder <kbd>STRG</kbd>+<kbd>L</kbd> (Windows/Linux) | Hiermit wird die Karte in den unteren Bereich der Spalte ganz rechts verschoben.
|<kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>→</kbd> oder <kbd>COMMAND</kbd>+<kbd>UMSCHALT</kbd>+<kbd>L</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>→</kbd> oder <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>L</kbd> (Windows/Linux) | Hiermit wird die Karte in den unteren Bereich der Spalte ganz rechts verschoben.

### Vorschau einer Karte

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>ESC</kbd> | Schließt den Kartenvorschaubereich.

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>COMMAND</kbd>+<kbd>LEERTASTE</kbd> (Mac) oder </br> <kbd>STRG</kbd>+<kbd>LEERTASTE</kbd> (Windows/Linux) | Hiermit erhältst du im Workflow-Editor Vorschläge für deine Workflowdatei.
|<kbd>G</kbd> <kbd>F</kbd> | Wechselt zur Workflowdatei.
|<kbd>UMSCHALT</kbd>+<kbd>T</kbd> oder <kbd>T</kbd> | Schaltet Zeitstempel in Protokollen um.
|<kbd>UMSCHALT</kbd>+<kbd>F</kbd> oder <kbd>F</kbd> | Schaltet Vollbildprotokolle um.
|<kbd>ESC</kbd> | Beendet Vollbildprotokolle.

{% endif %}

## Benachrichtigungen

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>E</kbd> | Als erledigt markieren
|<kbd>UMSCHALT</kbd>+<kbd>U</kbd>| Als ungelesen markieren
|<kbd>UMSCHALT</kbd>+<kbd>I</kbd>| Als gelesen markieren
|<kbd>UMSCHALT</kbd>+<kbd>M</kbd> | Abbestellen

## Netzwerkdiagramm

| Tastenkombination | Beschreibung
|-----------|------------
|<kbd>←</kbd> oder <kbd>H</kbd> | Nach links scrollen
|<kbd>→</kbd> oder <kbd>L</kbd> | Nach rechts scrollen
|<kbd>↑</kbd> oder <kbd>K</kbd> | Bildlauf nach oben
|<kbd>↓</kbd> oder <kbd>J</kbd> | Bildlauf nach unten
|<kbd>UMSCHALT</kbd>+<kbd>←</kbd> (Mac) oder </br> <kbd>UMSCHALT</kbd>+<kbd>H</kbd> (Windows/Linux) | Hiermit wird komplett nach links gescrollt.
|<kbd>UMSCHALT</kbd>+<kbd>→</kbd> (Mac) oder </br> <kbd>UMSCHALT</kbd>+<kbd>L</kbd> (Windows/Linux) | Hiermit wird komplett nach rechts gescrollt.
|<kbd>UMSCHALT</kbd>+<kbd>↑</kbd> (Mac) oder </br> <kbd>UMSCHALT</kbd>+<kbd>K</kbd> (Windows/Linux) | Hiermit wird komplett nach oben gescrollt.
|<kbd>UMSCHALT</kbd>+<kbd>↓</kbd> (Mac) oder </br> <kbd>UMSCHALT</kbd>+<kbd>J</kbd> (Windows/Linux) | Hiermit wird komplett nach unten gescrollt.
