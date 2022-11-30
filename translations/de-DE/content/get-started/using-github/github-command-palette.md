---
title: GitHub-Befehlspalette
intro: 'Verwende die Befehlspalette in {% data variables.product.product_name %} zum Navigieren, Suchen und Ausführen von Befehlen direkt über die Tastatur.'
versions:
  feature: command-palette
shortTitle: GitHub Command Palette
ms.openlocfilehash: 5c6b739f2422be780cef6fa0e44e5d75663cc036
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159053'
---
{% data reusables.command-palette.beta-note %}

## Informationen zur {% data variables.product.prodname_command_palette %}

Du kannst mit der {% data variables.product.prodname_command_palette %} zwischen Befehlen für {% data variables.product.product_name %} navigieren, die Befehle suchen und ausführen. Die Befehlspalette ist eine On-Demand-Methode, um Vorschläge basierend auf deinem aktuellen Kontext und deinen zuletzt verwendeten Ressourcen anzuzeigen. Du kannst die Befehlspalette von überall in {% data variables.product.product_name %} mit einer Tastenkombination öffnen, wodurch du Zeit sparst und die Hände auf der Tastatur halten können.

### Schnelle Navigation

Wenn du die Befehlspalette öffnest, werden die Vorschläge optimiert, um dir von überall in einem Repository, einem persönlichen Konto oder einer Organisation einfachen Zugriff auf Seiten der obersten Ebene, wie die Seite „Issues“, zu ermöglichen. Wenn der gewünschte Ort nicht aufgeführt ist, beginne mit der Eingabe des Namens oder der Nummer für den Speicherort, um die Vorschläge zu verfeinern.

![Repository-Vorschläge der Befehlspalette](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### Einfacher Zugriff auf Befehle

Die Möglichkeit, Befehle direkt über die Tastatur auszuführen, ohne durch eine Reihe von Menüs zu navigieren, kann die Verwendung von {% data variables.product.prodname_dotcom %} ändern. Du kannst z. B. Designs mit wenigen Tastatureingaben wechseln, sodass du einfach zwischen Designs umschalten kannst, wenn sich deine Anforderungen ändern.

![Design mit Befehlspalette ändern](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## Öffnen der {% data variables.product.prodname_command_palette %}

Öffne die Befehlspalette mit einer der folgenden Standardtastenkombinationen:
- Windows und Linux: <kbd>STRG</kbd>+<kbd>K</kbd> oder <kbd>STRG</kbd>+<kbd>ALT</kbd>+<kbd>K</kbd>
- Mac: <kbd>BEFEHL</kbd>+<kbd>K</kbd> oder <kbd>BEFEHL</kbd>+<kbd>WAHL</kbd>+<kbd>K</kbd>

Du kannst die Tastenkombinationen, die du zum Öffnen der Befehlspalette verwendest, im [Abschnitt „Barrierefreiheit“](https://github.com/settings/accessibility) deiner Benutzereinstellungen anpassen. Weitere Informationen findest du unter [Anpassen deiner {% data variables.product.prodname_command_palette %}-Tastenkombinationen](#customizing-your-github-command-palette-keyboard-shortcuts).

Wenn du die Befehlspalette öffnest, wird deine Position oben links angezeigt und als Bereich für Vorschläge verwendet (z. B. die `mashed-avocado`-Organisation).

![Start der Befehlspalette](/assets/images/help/command-palette/command-palette-launch.png)

{% note %}

**Hinweise:**
- Wenn du Markdowntext bearbeitest, öffne die Befehlspalette mit <kbd>STRG</kbd>+<kbd>ALT</kbd>+<kbd>K</kbd> (Windows und Linux) oder <kbd>COMMAND</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> (Mac).{% ifversion projects-v2 %}
- Wenn du an einem {% data variables.projects.project_v2 %}arbeitest, wird stattdessen eine projektspezifische Befehlspalette angezeigt. Weitere Informationen findest du unter [Anpassen einer Ansicht](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view).{% endif %}

{% endnote %}

### Anpassen deiner {% data variables.product.prodname_command_palette %}-Tastenkombinationen


Die Standardtastenkombinationen, die zum Öffnen der Befehlspalette verwendet werden, können in Konflikt mit deinen Standardtastenkombinationen für Betriebssystem und Browser stehen. Du hast die Möglichkeit, deine Tastenkombinationen im [Abschnitt „Barrierefreiheit“](https://github.com/settings/accessibility) deiner Kontoeinstellungen anzupassen. In den Befehlspaletteneinstellungen kannst du die Tastenkombinationen zum Öffnen der Befehlspalette sowohl im Suchmodus als auch im Befehlsmodus anpassen. 

![Tastenkombinationseinstellungen für Befehlspaletten](/assets/images/help/command-palette/command-palette-keyboard-shortcut-settings.png)
## Navigieren mit der {% data variables.product.prodname_command_palette %}

Du kannst die Befehlspalette verwenden, um zu einer beliebigen Seite zu navigieren, auf die du in {% data variables.product.product_name %} Zugriff hast.

{% data reusables.command-palette.open-palette %}

2. Beginne mit der Eingabe des Pfads, zu dem du navigieren möchtest. Die Vorschläge in der Befehlspalette ändern sich, um deinem Text zu entsprechen.

   ![Aktueller Bereich der Befehlspalettennavigation](/assets/images/help/command-palette/command-palette-navigation-current-scope.png)

{% data reusables.command-palette.change-scope %}

   Du kannst auch Tastatureingaben verwenden, um deine Suche einzugrenzen. Weitere Informationen findest du unter [Tastatureingabefunktionen](#keystroke-functions).

4. Beende die Eingabe des Pfads, oder verwende die Pfeiltasten, um den gewünschten Pfad aus der Liste der Vorschläge hervorzuheben.

5. Verwende die <kbd>EINGABETASTE</kbd>, um zu deinem ausgewählten Speicherort zu springen. Verwende alternativ <kbd>STRG</kbd>+<kbd>EINGABE</kbd> (Windows und Linux) oder <kbd>BEFEHL</kbd>+<kbd>EINGABE</kbd> (Mac), um den Speicherort auf einer neuen Browserregisterkarte zu öffnen.

## Suchen mit der {% data variables.product.prodname_command_palette %}

Du kannst mit der Befehlspalette nach etwas auf {% data variables.location.product_location %} suchen.

{% data reusables.command-palette.open-palette %}

{% data reusables.command-palette.change-scope %}

3. Verwende optional Tastatureingaben, um bestimmte Arten von Ressourcen zu finden:

   - <kbd>#</kbd> Suchen nach Issues, Pull Requests, Diskussionen und Projekten
   - <kbd>!</kbd> Suchen nach Projekten
   - <kbd>@</kbd> Suchen nach Benutzern, Organisationen und Repositorys
   - <kbd>/</kbd> Suche nach Dateien innerhalb eines Repositorybereichs

   ![Suche nach Dateien mit der Befehlspalette](/assets/images/help/command-palette/command-palette-search-files.png)

4. Beginne mit der Eingabe deiner Suchbegriffe. Die Befehlspalette bietet dir basierend auf deinem Suchbereich eine Reihe von vorgeschlagenen Suchvorgängen.

   {% tip %}

   Du kannst auch die vollständige Syntax der in {% data variables.product.prodname_dotcom %} integrierten Suche in der Befehlspalette verwenden. Weitere Informationen findest du unter [Suchen nach Informationen in {% data variables.product.prodname_dotcom %}](/search-github).

   {% endtip %}

5. Verwende die Pfeiltasten, um das gewünschte Suchergebnis hervorzuheben, und verwende die <kbd>EINGABETASTE</kbd>, um zu deinem ausgewählten Speicherort zu springen. Verwende alternativ <kbd>STRG</kbd>+<kbd>EINGABE</kbd> (Windows und Linux) oder <kbd>BEFEHL</kbd>+<kbd>EINGABE</kbd> (Mac), um den Speicherort auf einer neuen Browserregisterkarte zu öffnen.

## Ausführen von Befehlen über die {% data variables.product.prodname_command_palette %}

Du kannst die {% data variables.product.prodname_command_palette %} verwenden, um Befehle auszuführen. Du kannst beispielsweise ein neues Repository oder Issue erstellen oder dein Design ändern. Wenn du einen Befehl ausführst, bestimmt die zugrunde liegende Seite oder der in der Befehlspalette angezeigte Bereich, wo die Aktion stattfindet.

- Pull Request- und Issuebefehle werden immer auf der zugrunde liegenden Seite ausgeführt.
- Befehle auf höherer Ebene, z. B. Repositorybefehle, werden im Bereich ausgeführt, der in der Befehlspalette angezeigt wird.

Eine vollständige Liste der unterstützten Befehle findest du unter [Referenz für {% data variables.product.prodname_command_palette %}](#github-command-palette-reference).

1. Die Standardtastenkombination zum Öffnen der Befehlspalette im Befehlsmodus sind <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>K</kbd> (Windows und Linux) oder <kbd>BEFEHL</kbd>+<kbd>UMSCHALT</kbd>+<kbd>K</kbd> (Mac). Wenn die Befehlspalette bereits geöffnet ist, drücke <kbd>></kbd>, um zum Befehlsmodus zu wechseln. {% data variables.product.prodname_dotcom %} schlägt Befehle anhand deiner Position vor.

   ![Befehlsmodus der Befehlspalette](/assets/images/help/command-palette/command-palette-command-mode.png)

{% data reusables.command-palette.change-scope %}

3. Wenn der gewünschte Befehl nicht angezeigt wird, aktiviere den Bereich, und beginne dann mit der Eingabe des Befehlsnamens im Textfeld.

4. Verwende die Pfeiltasten, um den gewünschten Befehl hervorzuheben, und verwende die <kbd>EINGABETASTE</kbd>, um ihn auszuführen.


## Schließen der Befehlspalette

Wenn die Befehlspalette aktiv ist, kannst du eine der folgenden Tastenkombinationen verwenden, um die Befehlspalette zu schließen:

- Such- und Navigationsmodus: <kbd>ESC</kbd> oder <kbd>STRG</kbd>+<kbd>K</kbd> (Windows und Linux)  <kbd>BEFEHL</kbd>+<kbd>K</kbd> (Mac)
- Befehlsmodus: <kbd>ESC</kbd> oder <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>K</kbd> (Windows und Linux)  <kbd>BEFEHL</kbd>+<kbd>UMSCHALT</kbd>+<kbd>K</kbd> (Mac)

Wenn du die Tastenkombinationen der Befehlspalette in den Barrierefreiheitseinstellungen angepasst hast, werden deine angepassten Tastenkombinationen sowohl zum Öffnen als auch zum Schließen der Befehlspalette verwendet.  

## Referenz für {% data variables.product.prodname_command_palette %}

### Tastatureingabefunktionen

Diese Tastatureingaben sind verfügbar, wenn sich die Befehlspalette im Navigations- oder Suchmodus befindet; sie sind also nicht im Befehlsmodus verfügbar.

| Tastatureingabe | Funktion |
| :- | :- |
|<kbd>></kbd>| Befehlsmodus aktivieren. Weitere Informationen findest du unter [Ausführen von Befehlen über die {% data variables.product.prodname_command_palette %}](#running-commands-from-the-github-command-palette). |
|<kbd>#</kbd>| Suchen nach Issues, Pull Requests, Diskussionen und Projekten. Weitere Informationen findest du unter [Suchen mit der {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette).|
|<kbd>@</kbd>| Suchen nach Benutzern, Organisationen und Repositorys. Weitere Informationen findest du unter [Suchen mit der {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette).|
|<kbd>/</kbd>| Suchen nach Dateien innerhalb eines Repositorybereichs oder Repositorys innerhalb eines Organisationsbereichs. Weitere Informationen findest du unter [Suchen mit der {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette). |
|<kbd>!</kbd>| Nur nach Projekten suchen. Weitere Informationen findest du unter [Suchen mit der {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette).|
|<kbd>STRG</kbd>+<kbd>C</kbd> oder <kbd>BEFEHL</kbd>+<kbd>C</kbd>| Die Such- oder Navigations-URL für das hervorgehobene Ergebnis in die Zwischenablage kopieren.|
|<kbd>EINGABETASTE</kbd>| Zum hervorgehobenen Ergebnis springen oder den hervorgehobenen Befehl ausführen.|
|<kbd>STRG</kbd>+<kbd>EINGABE</kbd> oder <kbd>BEFEHL</kbd>+<kbd>EINGABE</kbd>| Das hervorgehobene Such- oder Navigationsergebnis in einer neuen Browerregisterkarte öffnen.|
|<kbd>?</kbd>| Die Hilfe in der Befehlspalette anzeigen.|

### Globale Befehle

Diese Befehle sind von allen Bereichen aus verfügbar.

| Befehl | Verhalten|
| :- | :- | :- |
|`Import repository`|Neues Repository erstellen, indem ein Projekt aus einem anderen Versionssteuerungssystem importiert wird. Weitere Informationen findest du unter [Importieren eines Repositorys mit GitHub Importer](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer).  |
|`New gist`|Neues Gist öffnen. Weitere Informationen findest du unter [Erstellen eines Gist](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists). |
|`New organization`|Neue Organisation erstellen. Weitere Informationen findest du unter [Erstellen einer neuen Organisation von Grund auf](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch). |
|`New project`|Neues Projektboard erstellen. Weitere Informationen findest du unter [Erstellen eines Projekts](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project).  |
|`New repository`|Neues Repository ohne Vorlage erstellen. Weitere Informationen findest du unter [Erstellen eines neuen Repositorys](/repositories/creating-and-managing-repositories/creating-a-new-repository). |
|`Switch theme to <theme name>`|Direkt zu einem anderen Design für die Benutzeroberfläche wechseln. Weitere Informationen findest du unter [Verwalten deiner Designeinstellungen](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings). |


### Organisationsbefehle

Diese Befehle sind nur im Bereich einer Organisation verfügbar.

| Befehl | Verhalten|
| :- | :- |
| `New team`| Neues Team in der aktuellen Organisation erstellen. Weitere Informationen findest du unter [Erstellen eines Teams](/organizations/organizing-members-into-teams/creating-a-team).

### Repositorybefehle

Die meisten dieser Befehle sind nur auf der Startseite des Repositorys verfügbar. Wenn ein Befehl auch auf anderen Seiten verfügbar ist, wird dies in der Spalte „Verhalten“ angegeben.

| Befehl | Verhalten|
| :- | :- |
|`Clone repository: <URL type>`|Die URL, die zum Klonen des Repositorys mit {% data variables.product.prodname_cli %}, HTTPS oder SSH erforderlich ist, in die Zwischenablage kopieren. Weitere Informationen findest du unter [Klonen eines Repositorys](/repositories/creating-and-managing-repositories/cloning-a-repository).|
|`New discussion`|Neue Diskussion im Repository erstellen. Weitere Informationen findest du unter [Erstellen einer neuen Diskussion](/discussions/quickstart#creating-a-new-discussion).|
|`New file`|Eine neue Datei von einer beliebigen Seite im Repository erstellen. Weitere Informationen findest du unter [Hinzufügen einer Datei zu einem Repository](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).
|`New issue`|Ein neues Issue von einer beliebigen Seite im Repository öffnen. Weitere Informationen findest du unter [Erstellen eines Issues](/issues/tracking-your-work-with-issues/creating-an-issue).|
|`Open in new codespace`|Einen Codespace für dieses Repository erstellen und öffnen. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).|
|`Open in github.dev editor`|Das aktuelle Repository im github.dev-Editor öffnen. Weitere Informationen findest du unter [Öffnen des webbasierten Editors](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor).|

### Dateibefehle

Diese Befehle sind nur verfügbar, wenn du die Befehlspalette von einer Datei in einem Repository öffnest.

| Befehl | Verhalten|
| :- | :- |
|`Copy permalink`|Link zu der Datei erstellen, die den aktuellen Commit-SHA enthält, und den Link in die Zwischenablage kopieren. Weitere Informationen findest du unter [Abrufen dauerhafter Links zu Dateien](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit).
|`Open in github.dev editor`|Die aktuell angezeigte Datei im github.dev-Editor öffnen. Weitere Informationen findest du unter [Öffnen des webbasierten Editors](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor).|

### Diskussionsbefehle

Diese Befehle sind nur verfügbar, wenn du die Befehlspalette von einer Diskussion öffnest. Sie wirken auf deiner aktuellen Seite und sind nicht von dem Bereich betroffen, der in der Befehlspalette festgelegt ist.

| Befehl | Verhalten|
| :- | :- |
|`Delete discussion...`|Die Diskussion endgültig löschen. Weitere Informationen findest du unter [Verwalten von Diskussionen](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion).
|`Edit discussion body`|Den Haupttext der Diskussion öffnen, der zur Bearbeitung bereit ist.
|`Subscribe`/`unsubscribe`|Benachrichtigungen zu Ergänzungen für die Diskussion abonnieren oder nicht mehr abonnieren. Weitere Informationen findest du unter [Informationen zu Benachrichtigungen](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).
|`Transfer discussion...`|Diskussion in ein anderes Repository verschieben. Weitere Informationen findest du unter [Verwalten von Diskussionen](/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion).

### Issuebefehle

Diese Befehle sind nur verfügbar, wenn du die Befehlspalette von einem Issue öffnest. Sie wirken auf deiner aktuellen Seite und sind nicht von dem Bereich betroffen, der in der Befehlspalette festgelegt ist.

| Befehl | Verhalten|
| :- | :- |
|`Close`/`reopen issue`|Das aktuelle Issue schließen oder erneut öffnen. Weitere Informationen findest du unter [Informationen zu Issues](/issues/tracking-your-work-with-issues/about-issues).|
|`Convert issue to discussion...`|Das aktuelle Issue in eine Diskussion umwandeln. Weitere Informationen findest du unter [Moderieren von Diskussionen](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion).
|`Delete issue...`|Das akuelle Issue löschen. Weitere Informationen findest du unter [Löschen eines Issues](/issues/tracking-your-work-with-issues/deleting-an-issue).|
|`Edit issue body`|Den Haupttext des Issues öffnen, der zur Bearbeitung bereit ist.
|`Edit issue title`|Den Titel des Issues öffnen, der zur Bearbeitung bereit ist.
|`Lock issue`|Neue Kommentare auf Benutzer mit Schreibzugriff auf das Repository beschränken. Weitere Informationen findest du unter [Sperren von Unterhaltungen](/communities/moderating-comments-and-conversations/locking-conversations).
|`Pin`/`unpin issue`|Ändern, ob das Issue im Abschnitt „Angeheftete Issues“ für das Repository angezeigt wird. Weitere Informationen findest du unter [Anheften eines Issues an dein Repository](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository).|
|`Subscribe`/`unsubscribe`|Benachrichtigungen zu Änderungen für dieses Issue abonnieren oder nicht mehr abonnieren. Weitere Informationen findest du unter [Informationen zu Benachrichtigungen](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).
|`Transfer issue...`|Das Issue an ein anderes Repository übertragen. Weitere Informationen findest du unter [Übertragen eines Issues an ein anderes Repository](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository).|

### Pull Request-Befehle

Diese Befehle sind nur verfügbar, wenn du die Befehlspalette von einem Pull Request öffnest. Sie wirken auf deiner aktuellen Seite und sind nicht von dem Bereich betroffen, der in der Befehlspalette festgelegt ist.

| Befehl | Verhalten|
| :- | :- |
|`Close`/`reopen pull request`|Aktuellen Pull Request schließen oder erneut öffnen. Weitere Informationen findest du unter [Informationen zu Pull Requests](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).|
|`Convert to draft`/`Mark pull request as ready for review`|Den Status des Pull Requests ändern, um ihn als bereit oder nicht bereit, zur Überprüfung, anzuzeigen. Weitere Informationen findest du unter [Ändern des Status eines Pull Requests](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).|
|`Copy current branch name`| Den Namen des Head-Branch für den Pull Request zur Zwischenablage hinzufügen.
|`Edit pull request body`|Den Haupttext des Pull Requests öffnen, der zur Bearbeitung bereit ist.
|`Edit pull request title`|Den Titel des Pull Requests öffnen, der zur Bearbeitung bereit ist.
|`Open in new codespace`|Einen Codespace für den Head-Branch des Pull Requests erstellen und öffnen. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).
|`Subscribe`/`unsubscribe`|Benachrichtigungen zu Änderungen für diesen Pull Request abonnieren oder nicht mehr abonnieren. Weitere Informationen findest du unter [Informationen zu Benachrichtigungen](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).
|`Update current branch`|Den Head-Branch des Pull Requests mit Änderungen aus dem Basisbranch aktualisieren. Dieser Befehl ist nur für Pull Requests verfügbar, die auf den Standardbranch des Repositorys abzielen. Weitere Informationen findest du unter [Informationen zu Branches](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches).|
