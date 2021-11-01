---
title: Tastenkürzel
intro: 'Auf nahezu allen Seiten auf {% data variables.product.prodname_dotcom %} gibt es Tastenkürzel, um Aktionen schneller durchführen zu können.'
redirect_from:
  - /articles/using-keyboard-shortcuts/
  - /categories/75/articles/
  - /categories/keyboard-shortcuts/
  - /articles/keyboard-shortcuts
  - /github/getting-started-with-github/keyboard-shortcuts
  - /github/getting-started-with-github/using-github/keyboard-shortcuts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## Informationen zu Tastenkürzeln

Typing <kbd>?</kbd> on {% data variables.product.prodname_dotcom %} brings up a dialog box that lists the keyboard shortcuts available for that page. Mit diesen Tastenkürzeln kannst Du Aktionen auf der gesamten Website durchführen, ohne Deine Maus zur Navigation verwenden zu müssen.

Im Folgenden findest Du eine Liste mit einigen der verfügbaren Tastenkürzel.
{% if command-palette %}
The {% data variables.product.prodname_command_palette %} also gives you quick access to a wide range of actions, without the need to remember keyboard shortcuts. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

## Seitenweite Tastenkürzel

| Tastenkürzel                   | Beschreibung                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>s</kbd> oder <kbd>/</kbd> | Hiermit fokussierst Du die Suchleiste. Weitere Informationen findest Du unter „[Informationen zur Suche auf {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).“                                                                                                                   |
| <kbd>g</kbd> <kbd>n</kbd>      | Gehe zu Deinen Benachrichtigungen. Weitere Informationen findest Du unter {% ifversion fpt or ghes or ghae or ghec %}„[Über Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}„[Über Benachrichtigungen](/github/receiving-notifications-about-activity-on-github/about-notifications){% endif %}." |
| <kbd>esc</kbd>                 | Wenn auf eine Benutzer-, Issue- oder Pull-Request-Hovercard (Informationskarte) konzentriert, schließt das Kürzel die Hovercard und konzentriert sich erneut auf das Element, in dem sich die Hovercard befindet                                                                                                                                               |

{% if command-palette %}

<kbd>control</kbd><kbd>k</kbd> or <kbd>command</kbd><kbd>k</kbd> | Opens the {% data variables.product.prodname_command_palette %}. If you are editing Markdown text, open the command palette with <kbd>Ctl</kbd><kbd>alt</kbd><kbd>k</kbd> or <kbd>⌘</kbd><kbd>option</kbd><kbd>k</kbd>. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

## Repositorys

| Tastenkürzel              | Beschreibung                                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>g</kbd> <kbd>c</kbd> | Hiermit wechselst Du zur Registerkarte **Code**                                                                                                                                      |
| <kbd>g</kbd> <kbd>i</kbd> | Hiermit wechselst Du zur Registerkarte **Issues**. Weitere Informationen findest Du unter „[Informationen zu Issues](/articles/about-issues).“                                       |
| <kbd>g</kbd> <kbd>p</kbd> | Hiermit wechselst Du zur Registerkarte **Pull Requests**. For more information, see "[About pull requests](/articles/about-pull-requests)."{% ifversion fpt or ghes or ghec %}
| <kbd>g</kbd> <kbd>a</kbd> | Go to the **Actions** tab. For more information, see "[About Actions](/actions/getting-started-with-github-actions/about-github-actions)."                                           |
| <kbd>g</kbd> <kbd>b</kbd> | Hiermit wechselst Du zur Registerkarte **Projects** (Projekte). Weitere Informationen findest Du unter „[Informationen zu Projektboards](/articles/about-project-boards).“           |
| <kbd>g</kbd> <kbd>w</kbd> | Hiermit wechselst Du zur Registerkarte **Wiki**. For more information, see "[About wikis](/communities/documenting-your-project-with-wikis/about-wikis)."{% ifversion fpt or ghec %}
| <kbd>g</kbd> <kbd>g</kbd> | Go to the **Discussions** tab. For more information, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."{% endif %}

## Quellcodebearbeitung

| Tastenkürzel                                                    | Beschreibung                                                                                                                                                                  |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| <kbd>.</kbd>                                                    | Opens a repository or pull request in the web-based editor. For more information, see "[Web-based editor](/codespaces/developing-in-codespaces/web-based-editor)."{% endif %}
| <kbd>Steuertaste + b</kbd> oder <kbd>Befehlstaste + b</kbd>     | Hiermit wird die Markdown-Formatierung für den Fettdruck von Text eingefügt.                                                                                                  |
| <kbd>Steuertaste + i</kbd> oder <kbd>Befehlstaste + i</kbd>     | Hiermit wird die Markdown-Formatierung für die Kursivsetzung von Text eingefügt.                                                                                              |
| <kbd>Steuertaste + k</kbd> oder <kbd>Befehlstaste + k</kbd>     | Inserts Markdown formatting for creating a link{% ifversion fpt or ghec or ghae-next or ghes > 3.3 %}
| <kbd>control shift 7</kbd> or <kbd>command shift 7</kbd>        | Inserts Markdown formatting for an ordered list                                                                                                                               |
| <kbd>control shift 8</kbd> or <kbd>command shift 8</kbd>        | Inserts Markdown formatting for an unordered list                                                                                                                             |
| <kbd>control shift .</kbd> or <kbd>command shift.</kbd>         | Inserts Markdown formatting for a quote{% endif %}
| <kbd>e</kbd>                                                    | Öffne Quellcode-Datei in der Registerkarte **Edit file** (Datei anpassen)                                                                                                     |
| <kbd>Steuertaste + f</kbd> oder <kbd>Befehlstaste + f</kbd>     | Hiermit suchen Sie im Datei-Editor.                                                                                                                                           |
| <kbd>Steuertaste + g</kbd> oder <kbd>Befehlstaste + g</kbd>     | Hiermit suchen Sie nach dem nächsten Eintrag.                                                                                                                                 |
| <kbd>control shift g</kbd> or <kbd>command shift g</kbd>        | Hiermit suchen Sie nach dem vorherigen Eintrag.                                                                                                                               |
| <kbd>control shift f</kbd> or <kbd>command option f</kbd>       | Hiermit ersetzen Sie den Eintrag.                                                                                                                                             |
| <kbd>control shift r</kbd> or <kbd>command shift option f</kbd> | Hiermit ersetzen Sie alle Einträge.                                                                                                                                           |
| <kbd>Alt+g</kbd>                                                | Hiermit springen Sie zur entspechenden Zeile.                                                                                                                                 |
| <kbd>Steuertaste + z</kbd> oder <kbd>Befehlstaste + z</kbd>     | Hiermit machen Sie die Aktion rückgängig.                                                                                                                                     |
| <kbd>Steuertaste + y</kbd> oder <kbd>Befehlstaste + y</kbd>     | Hiermit wiederholen Sie die Aktion.                                                                                                                                           |
| <kbd>command shift p</kbd>                                      | Umschalten zwischen den Registerkarten **Edit file** (Datei bearbeiten) und **Preview changes** (Änderungsvorschau)                                                           |
| <kbd>control s</kbd> or <kbd>command s</kbd>                    | Write a commit message                                                                                                                                                        |

Weitere Tastenkürzel findest Du in der [CodeMirror-Dokumentation](https://codemirror.net/doc/manual.html#commands).

## Quellcodedurchsuchung

| Tastenkürzel | Beschreibung                                                                                                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>t</kbd> | Hiermit wird die Dateisuche aktiviert                                                                                                                                                    |
| <kbd>l</kbd> | Springe zu einer Zeile in Deinem Code                                                                                                                                                    |
| <kbd>w</kbd> | Wechsle zu einem neuen Branch oder Tag                                                                                                                                                   |
| <kbd>y</kbd> | Erweitere eine URL auf ihre kanonische Form. Weitere Informationen findest Du unter „[Permalinks zu Dateien abrufen](/articles/getting-permanent-links-to-files)“                        |
| <kbd>i</kbd> | Zeige Kommentare zu Diffs an oder blende sie aus. Weitere Informationen findest Du unter „[Kommentare zum Diff eines Pull Requests](/articles/commenting-on-the-diff-of-a-pull-request)“ |
| <kbd>a</kbd> | Show or hide annotations on diffs                                                                                                                                                        |
| <kbd>b</kbd> | Öffne die Blame-Ansicht. Weitere Informationen findest Du unter „[Änderungen in einer Datei verfolgen](/articles/tracing-changes-in-a-file)“                                             |

## Kommentare

| Tastenkürzel                                                                                    | Beschreibung                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Steuertaste + b</kbd> oder <kbd>Befehlstaste + b</kbd>                                     | Hiermit wird die Markdown-Formatierung für den Fettdruck von Text eingefügt.                                                                                                                                                                                                                                |
| <kbd>Steuertaste + i</kbd> oder <kbd>Befehlstaste + i</kbd>                                     | Inserts Markdown formatting for italicizing text{% ifversion fpt or ghae-next or ghes > 3.1 or ghec %}
| <kbd>control e</kbd> or <kbd>command e</kbd>                                                    | Inserts Markdown formatting for code or a command within a line{% endif %}
| <kbd>Steuertaste + k</kbd> oder <kbd>Befehlstaste + k</kbd>                                     | Hiermit wird die Markdown-Formatierung zum Erstellen eines Links eingefügt.                                                                                                                                                                                                                                 |
| <kbd>Steuertaste + Umschalttaste + p</kbd> oder <kbd>Befehlstaste + Umschalttaste + p</kbd>     | Toggles between the **Write** and **Preview** comment tabs{% ifversion fpt or ghae-next or ghes > 3.2 or ghec %}
| <kbd>control shift 7</kbd> or <kbd>command shift 7</kbd>                                        | Inserts Markdown formatting for an ordered list                                                                                                                                                                                                                                                             |
| <kbd>control shift 8</kbd> or <kbd>command shift 8</kbd>                                        | Inserts Markdown formatting for an unordered list{% endif %}
| <kbd>Steuertaste + Eingabetaste</kbd>                                                           | Hiermit wird ein Kommentar abgesendet.                                                                                                                                                                                                                                                                      |
| <kbd>Steuertaste + .</kbd> und dann <kbd>Steuertaste + [Nummer der gespeicherten Antwort]</kbd> | Hiermit wird das Menü für gespeicherte Antworten geöffnet und im Kommentarfeld automatisch eine gespeicherte Antwort eingetragen. Weitere Informationen findest Du unter „[Informationen zu gespeicherten Antworten](/articles/about-saved-replies)“.{% ifversion fpt or ghae-next or ghes > 3.2 or ghec %}
| <kbd>control shift .</kbd> or <kbd>command shift.</kbd>                                         | Inserts Markdown formatting for a quote{% endif %}{% ifversion fpt or ghec %}
| <kbd>Steuertaste + g</kbd> oder <kbd>Befehlstaste + g</kbd>                                     | Hiermit wird ein Vorschlag eingefügt. Weitere Informationen findest Du unter „[Vorgeschlagene Änderungen in einem Pull Request überprüfen](/articles/reviewing-proposed-changes-in-a-pull-request).“ 
{% endif %}
| <kbd>r</kbd>                                                                                    | Hiermit wird der ausgewählte Text in Deiner Antwort zitiert. Weitere Informationen findest Du unter „[Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax#quoting-text).“                                                                                          |

## Issue- und Pull-Request-Listen

| Tastenkürzel                                                | Beschreibung                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>c</kbd>                                                | Hiermit wird ein Issue erstellt.                                                                                                                                                                                                                                                     |
| <kbd>Steuertaste + /</kbd> oder <kbd>Befehlstaste + /</kbd> | Hiermit wird der Fokus Deines Cursors auf die Suchleiste mit den Issues oder mit den Pull Requests gelegt. For more information, see "[Filtering and searching issues and pull requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)."| |
| <kbd>u</kbd>                                                | Hiermit wird nach Autor gefiltert.                                                                                                                                                                                                                                                   |
| <kbd>l</kbd>                                                | Hiermit wird nach Kennzeichnungen gefiltert oder werden diese bearbeitet. Weitere Informationen findest Du unter „[Issues und Pull Requests nach Kennzeichnungen filtern](/articles/filtering-issues-and-pull-requests-by-labels).“                                                  |
| <kbd>Alt</kbd> und klicken                                  | Hiermit werden Kennzeichnungen beim Filtern nach Kennzeichnungen ausgeschlossen. Weitere Informationen findest Du unter „[Issues und Pull Requests nach Kennzeichnungen filtern](/articles/filtering-issues-and-pull-requests-by-labels).“                                           |
| <kbd>m</kbd>                                                | Hiermit wird nach Meilensteinen gefiltert oder werden diese bearbeitet. Weitere Informationen findest Du unter „[Issues und Pull Requests nach Meilensteinen filtern](/articles/filtering-issues-and-pull-requests-by-milestone).“                                                   |
| <kbd>a</kbd>                                                | Hiermit wird nach Bearbeitern gefiltert oder werden diese bearbeitet. Weitere Informationen findest Du unter „[Issues und Pull Requests nach Bearbeitern filtern](/articles/filtering-issues-and-pull-requests-by-assignees).“                                                       |
| <kbd>o</kbd> oder <kbd>Eingabetaste</kbd>                   | Hiermit wird ein Issue geöffnet.                                                                                                                                                                                                                                                     |

## Issues und Pull Requests
| Tastenkürzel                                                                              | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>q</kbd>                                                                              | Hiermit wird ein Reviewer angefordert. Weitere Informationen findest Du unter „[Pull-Request-Review anfordern](/articles/requesting-a-pull-request-review/).“                                                                                                                                                                                                                                              |
| <kbd>m</kbd>                                                                              | Hiermit wird ein Meilenstein festgelegt. Weitere Informationen findest Du unter „[Meilensteine mit Issues und Pull Requests verknüpfen](/articles/associating-milestones-with-issues-and-pull-requests/).“                                                                                                                                                                                                 |
| <kbd>l</kbd>                                                                              | Hiermit wird eine Kennzeichnung angewendet. Weitere Informationen findest Du unter „[Kennzeichnungen auf Issues und Pull Requests anwenden](/articles/applying-labels-to-issues-and-pull-requests/).“                                                                                                                                                                                                      |
| <kbd>a</kbd>                                                                              | Hiermit wird ein Bearbeiter festgelegt. Weitere Informationen findest Du unter „[Issues und Pull Requests anderen {% data variables.product.company_short %}-Benutzern zuweisen](/articles/assigning-issues-and-pull-requests-to-other-github-users/).“                                                                                                                                                    |
| <kbd>Befehlstaste + Umschalttaste+p</kbd> oder <kbd>Steuertaste + Umschalttaste + p</kbd> | Toggles between the **Write** and **Preview** tabs{% ifversion fpt or ghec %}
| <kbd>Alt</kbd> und klicken                                                                | When creating an issue from a task list, open the new issue form in the current tab by holding <kbd>alt</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. Weitere Informationen findest Du unter „[Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).“                 |
| <kbd>shift</kbd> and click                                                                | When creating an issue from a task list, open the new issue form in a new tab by holding <kbd>shift</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. Weitere Informationen findest Du unter „[Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).“                     |
| <kbd>command</kbd> or <kbd>control + shift</kbd> and click                                | When creating an issue from a task list, open the new issue form in the new window by holding <kbd>command</kbd> or <kbd>control + shift</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. For more information, see "[About task lists](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)."{% endif %}

## Änderungen in Pull Requests

| Tastenkürzel                                            | Beschreibung                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>c</kbd>                                            | Hiermit wird die Liste der Commits im Pull Request geöffnet.                                                                                                                                                                                                                                                                                                                             |
| <kbd>t</kbd>                                            | Hiermit wird die Liste der geänderten Dateien im Pull Request geöffnet.                                                                                                                                                                                                                                                                                                                  |
| <kbd>j</kbd>                                            | Hiermit verschiebt sich die Auswahl in der Liste nach unten                                                                                                                                                                                                                                                                                                                              |
| <kbd>k</kbd>                                            | Hiermit verschiebt sich die Auswahl in der Liste nach oben                                                                                                                                                                                                                                                                                                                               |
| <kbd>Befehlstaste + Umschalttaste + Eingabetaste </kbd> | Hiermit fügst Du einen einzelnen Kommentar zu einer Pull-Request-Diff hinzu                                                                                                                                                                                                                                                                                                              |
| <kbd>Alt</kbd> und klicken                              | Umschalten zwischen Reduzieren und Erweitern aller veralteten Review-Kommentare in einem Pull Request durch das Drücken von `alt` und klicken auf **Show outdated** (zeige veraltete) oder **Hide outdated** (blende veraltete aus).|{% ifversion fpt or ghes or ghae or ghec %}
| Klicke, dann <kbd>Shift</kbd> und klicke                | Kommentiere mehrere Zeilen eines Pull-Requests, indem Du auf eine Zeilennummer klickst, <kbd>shift</kbd> gedrückt hältst und dann auf eine andere Zeilennummer klickst. Weitere Informationen findest Du unter „[Einen Pull Request kommentieren](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)."
{% endif %}

## Projektboards

### Spalte verschieben

| Tastenkürzel                                                                                         | Beschreibung                                                        |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| <kbd>Eingabetaste</kbd> oder <kbd>Leertaste</kbd>                                                    | Hiermit wird die fokussierte Spalte verschoben.                     |
| <kbd>Esc</kbd>                                                                                       | Hiermit wird die ausgeführte Verschiebung abgebrochen.              |
| <kbd>Eingabetaste</kbd>                                                                              | Hiermit wird die ausgeführte Verschiebung abgeschlossen.            |
| <kbd>←</kbd> oder <kbd>h</kbd>                                                                       | Hiermit wird die Spalte nach links verschoben.                      |
| <kbd>command + ←</kbd> or <kbd>command + h</kbd> or <kbd>control + ←</kbd> or <kbd>control + h</kbd> | Hiermit wird die Spalte an die äußerste linke Position verschoben.  |
| <kbd>→</kbd> oder <kbd>l</kbd>                                                                       | Hiermit wird die Spalte nach rechts verschoben.                     |
| <kbd>command + →</kbd> or <kbd>command + l</kbd> or <kbd>control + →</kbd> or <kbd>control + l</kbd> | Hiermit wird die Spalte an die äußerste rechte Position verschoben. |

### Karte verschieben

| Tastenkürzel                                                                                                                         | Beschreibung                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| <kbd>Eingabetaste</kbd> oder <kbd>Leertaste</kbd>                                                                                    | Hiermit wird die fokussierte Karte verschoben.                                             |
| <kbd>Esc</kbd>                                                                                                                       | Hiermit wird die ausgeführte Verschiebung abgebrochen.                                     |
| <kbd>Eingabetaste</kbd>                                                                                                              | Hiermit wird die ausgeführte Verschiebung abgeschlossen.                                   |
| <kbd>↓</kbd> oder <kbd>j</kbd>                                                                                                       | Hiermit wird die Karte nach unten verschoben.                                              |
| <kbd>command + ↓</kbd> or <kbd>command + j</kbd> or <kbd>control + ↓</kbd> or <kbd>control + j</kbd>                                 | Hiermit wird die Karte in den unteren Bereich der Spalte verschoben.                       |
| <kbd>↑</kbd> oder <kbd>k</kbd>                                                                                                       | Hiermit wird die Karte nach oben verschoben.                                               |
| <kbd>command + ↑</kbd> or <kbd>command + k</kbd> or <kbd>control + ↑</kbd> or <kbd>control + k</kbd>                                 | Hiermit wird die Karte in den oberen Bereich der Spalte verschoben.                        |
| <kbd>←</kbd> oder <kbd>h</kbd>                                                                                                       | Hiermit wird die Karte in den unteren Bereich der Spalte auf der linken Seite verschoben.  |
| <kbd>shift + ←</kbd> or <kbd>shift + h</kbd>                                                                                         | Hiermit wird die Karte in den oberen Bereich der Spalte auf der linken Seite verschoben.   |
| <kbd>command + ←</kbd> or <kbd>command + h</kbd> or <kbd>control + ←</kbd> or <kbd>control + h</kbd>                                 | Hiermit wird die Karte in den unteren Bereich der Spalte ganz links verschoben.            |
| <kbd>command + shift + ←</kbd> or <kbd>command + shift + h</kbd> or <kbd>control + shift + ←</kbd> or <kbd>control + shift + h</kbd> | Hiermit wird die Karte in den oberen Bereich der Spalte ganz links verschoben.             |
| <kbd>→</kbd>                                                                                                                         | Hiermit wird die Karte in den unteren Bereich der Spalte auf der rechten Seite verschoben. |
| <kbd>shift + →</kbd> or <kbd>shift + l</kbd>                                                                                         | Hiermit wird die Karte in den oberen Bereich der Spalte auf der rechten Seite verschoben.  |
| <kbd>command + →</kbd> or <kbd>command + l</kbd> or <kbd>control + →</kbd> or <kbd>control + l</kbd>                                 | Hiermit wird die Karte in den unteren Bereich der Spalte ganz rechts verschoben.           |
| <kbd>command + shift + →</kbd> or <kbd>command + shift + l</kbd> or <kbd>control + shift + →</kbd> or <kbd>control + shift + l</kbd> | Hiermit wird die Karte in den unteren Bereich der Spalte ganz rechts verschoben.           |

### Previewing a card

| Tastenkürzel   | Beschreibung                |
| -------------- | --------------------------- |
| <kbd>esc</kbd> | Close the card preview pane |

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| Tastenkürzel                                              | Beschreibung                                                                |
| --------------------------------------------------------- | --------------------------------------------------------------------------- |
| <kbd>command + space </kbd> or <kbd>control + space</kbd> | Hiermit erhältst Du im Workflow-Editor Vorschläge für Deine Workflow-Datei. |
| <kbd>g</kbd> <kbd>f</kbd>                                 | Go to the workflow file                                                     |
| <kbd>shift + t</kbd> or <kbd>T</kbd>                      | Toggle timestamps in logs                                                   |
| <kbd>shift + f</kbd> or <kbd>F</kbd>                      | Toggle full-screen logs                                                     |
| <kbd>esc</kbd>                                            | Exit full-screen logs                                                       |

{% endif %}

## Benachrichtigungen
{% ifversion fpt or ghes or ghae or ghec %}
| Tastenkürzel         | Beschreibung            |
| -------------------- | ----------------------- |
| <kbd>e</kbd>         | Als erledigt markieren  |
| <kbd>shift + u</kbd> | Als ungelesen markieren |
| <kbd>shift + i</kbd> | Als gelesen markieren   |
| <kbd>shift + m</kbd> | Kündigen                |

{% else %}

| Tastenkürzel                                     | Beschreibung                             |
| ------------------------------------------------ | ---------------------------------------- |
| <kbd>e</kbd> oder <kbd>I</kbd> oder <kbd>y</kbd> | Als gelesen markieren                    |
| <kbd>shift + m</kbd>                             | Hiermit wird der Thread stummgeschaltet. |
{% endif %}

## Netzwerkdiagramm

| Tastenkürzel                                 | Beschreibung                                 |
| -------------------------------------------- | -------------------------------------------- |
| <kbd>←</kbd> oder <kbd>h</kbd>               | Hiermit wird nach links gescrollt.           |
| <kbd>→</kbd> oder <kbd>l</kbd>               | Hiermit wird nach rechts gescrollt.          |
| <kbd>↑</kbd> oder <kbd>k</kbd>               | Hiermit wird nach oben gescrollt.            |
| <kbd>↓</kbd> oder <kbd>j</kbd>               | Hiermit wird nach unten gescrollt.           |
| <kbd>shift + ←</kbd> or <kbd>shift + h</kbd> | Hiermit wird komplett nach links gescrollt.  |
| <kbd>shift + →</kbd> or <kbd>shift + l</kbd> | Hiermit wird komplett nach rechts gescrollt. |
| <kbd>shift + ↑</kbd> or <kbd>shift + k</kbd> | Hiermit wird komplett nach oben gescrollt.   |
| <kbd>shift + ↓</kbd> or <kbd>shift + j</kbd> | Hiermit wird komplett nach unten gescrollt.  |
