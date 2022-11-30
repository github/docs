---
title: Navigieren in Dateien mit der neuen Codeansicht (Betaversion)
intro: Mit der neuen Codeansicht (Betaversion) kannst du deinen Code mit einer einfach navigierbaren Dateistruktur und einer integrierten Symbolsuche im Kontext anzeigen.
allowTitleToDifferFromFilename: true
versions:
  feature: file-tree-view
topics:
  - Repositories
shortTitle: New code view (beta)
ms.openlocfilehash: 0c0fe588c92f67c92d7f3ffaa09716da39ac4551
ms.sourcegitcommit: 57bef7d45acfa987d82e320c7581c87df320a28a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172187'
---
{% note %}

**Hinweis:** {% data reusables.search.code-search-code-view-beta-note %} 

{% data reusables.search.code-search-link %}

{% endnote %}

## Informationen zur neuen Codeansicht (Betaversion)
Die neue Codeansicht (Betaversion) verbessert die Navigation mit einer Dateistrukturansicht, vereinfacht die Dateibearbeitung, führt einen Symbolbereich für die Symbolsuche und -navigation ein und aktualisiert die Blame-Ansicht, um den Dateikontext beizubehalten. Die neue Codeansicht ist in eine neue Codesuchmaschine und Suchschnittstelle in einer eingeschränkten öffentlichen Betaversion auf {% data variables.product.prodname_dotcom_the_website %} integriert. {% data reusables.search.code-search-link %}

Wenn du Zugriff auf die neue Codeansicht (Betaversion) und die neue Codesuche erhalten möchtest, kannst du dich für die [Warteliste](https://github.com/features/code-search-code-view/signup) registrieren.

Feedback zur neuen Betaversion der Codeansicht kannst du über das [Diskussionsforum](https://github.com/orgs/community/discussions/categories/repositories) abgeben.

## Aktivieren und Deaktivieren der neuen Codesuche und Codeansicht (Betaversion)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## Verwenden der Dateistrukturansicht
Die neue Dateistrukturansicht ist ein Bereich, in dem die Verzeichnisse und Dateien eines Repositorys in einer leicht navigierbaren Struktur angezeigt werden. Du kannst schnell zwischen Verzeichnissen und Dateien wechseln und den Kontext für jedes angezeigte Element verstehen.

1. Wähle ein Repository aus, und klicke dann auf ein Verzeichnis oder eine Datei in diesem Repository, um die Dateistrukturansicht zu öffnen.

  ![Screenshot: Repository „github/docs“ mit Hervorhebung der Dateistrukturansicht](/assets/images/help/repository/file-tree-view-directory-selected.png)

1. Um nach einem bestimmten Verzeichnis oder einer bestimmten Datei zu suchen, klicke auf die Suchleiste {% octicon "filter" aria-label="The filter icon" %} **Zu Datei springen**, gib dann den Verzeichnis- oder Dateinamen ein, und wähle das Verzeichnis oder die Datei in den Ergebnissen aus. Du kannst den Dateipfad für ein Verzeichnis oder eine Datei unter jedem Suchergebnis anzeigen.

  ![Screenshot: Dateistrukturansicht mit Hervorhebung der Suchleiste „Zu Datei springen“](/assets/images/help/repository/file-tree-view-jump-to-file.png)

     - Um im Repository mit der {% data variables.product.prodname_dotcom %}-Suchleiste zu suchen, klicke auf {% octicon "search" aria-label="The search icon" %}.

        ![Screenshot: Dateistrukturansicht mit Hervorhebung des Suchsymbols](/assets/images/help/repository/file-tree-view-search-icon.png)

1. Um zwischen Branches zu wechseln, wähle das Dropdownmenü für Branches {% octicon "git-branch" aria-label="The branch icon" %} aus, und klicke dann in den Ergebnissen auf den gewünschten Branch. Um alle Branches für ein Repository anzuzeigen, klicke auf **Alle Branches anzeigen**.

  ![Screenshot: Dateistrukturansicht mit Hervorhebung der Registerkarte „Branches“ des Dropdownmenüs „Branch“](/assets/images/help/repository/file-tree-view-branch-dropdown.png)

1. Um zwischen Tags zu wechseln, wähle das Dropdownmenü für Branches {% octicon "git-branch" aria-label="The branch icon" %} aus, und klicke auf die Registerkarte **Tags** und dann in den Ergebnissen auf das gewünschte Tag. Um alle Tags für ein Repository anzuzeigen, klicke auf **Alle Tags anzeigen**.

  ![Screenshot: Dateistrukturansicht mit Hervorhebung der Registerkarte „Tags“ des Dropdownmenüs „Branch“](/assets/images/help/repository/file-tree-view-branch-dropdown-tags.png)

## Arbeiten mit Dateien
In der neuen Codeansicht wurden außerdem die Möglichkeiten für die Arbeit mit Dateien aktualisiert. Vorhandene Funktionen, etwa zum Bearbeiten einer Datei, Erstellen oder Hochladen einer Datei und Löschen einer Datei oder eines Verzeichnisses, wurden optimiert. Du hast jetzt schnellen Zugriff auf die Bearbeitung einer Datei auf github.dev oder in {% data variables.product.prodname_desktop %} sowie eine integrierte Funktion für die dateiinterne Suche. 

1. Wähle ein Repository aus, und klicke dann auf eine Datei innerhalb dieses Repositorys, um die neue Codeansicht zu öffnen.

  ![Screenshot: Repository „github/docs“ mit Hervorhebung einer ausgewählten Datei in der Dateistrukturansicht](/assets/images/help/repository/file-tree-view-file-selected.png)

1. Um eine Datei im integrierten Datei-Editor zu bearbeiten, klicke auf {% octicon "pencil" aria-label="The pencil icon" %}.

  ![Screenshot: Datei-Editor in der neuen Codeansicht mit Hervorhebung des Bearbeitungssymbols](/assets/images/help/repository/code-view-edit-icon.png)

1. Wähle zum Bearbeiten einer Datei im {% data variables.codespaces.serverless %} von github.dev oder in {% data variables.product.prodname_desktop %} {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %} neben {% octicon "pencil" aria-label="The pencil icon" %} aus, und klicke dann auf **github.dev** oder **{% data variables.product.prodname_desktop %}** .

  {% note %}

  **Hinweis:** Der {% data variables.codespaces.serverless %} von github.dev befindet sich derzeit in der Betavorschau. Du kannst [in unseren Diskussionen](https://github.com/community/community/discussions/categories/general) Feedback bereitstellen.

  {% endnote %}

  ![Screenshot: Datei-Editor in der neuen Codeansicht mit Hervorhebung des Dropdownmenüs „Bearbeiten“](/assets/images/help/repository/code-view-edit-dropdown.png)

1. Um bestimmte Zeichen in einer Datei zu suchen, zeige den Rohcode der Datei an, indem du auf die Schaltfläche **Code** klickst. Drücke als Nächstes <kbd>BEFEHL</kbd>+<kbd>F</kbd> (Mac) oder <kbd>STRG</kbd>+<kbd>F</kbd> (Windows/Linux), und gib die Zeichen ein, die du suchen möchtest. Du kannst zwischen den Ergebnissen navigieren, indem du <kbd>EINGABE</kbd> (Mac) oder die <kbd>EINGABETASTE</kbd> (Windows/Linux) drückst oder auf {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} und {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %} klickst.

  {% note %}

  **Hinweis:** Wenn du die Standardsuchfunktion des Browsers verwenden möchtest, drücke zweimal <kbd>BEFEHL</kbd>+<kbd>F</kbd> (Mac) oder <kbd>STRG</kbd>+<kbd>F</kbd> (Windows/Linux). Beachte, dass mit der Standardsuchfunktion des Browsers nicht eine gesamte große Datei durchsucht werden kann. Mit der in die neue Codeansicht integrierten Suche dies jedoch möglich.

  {% endnote %}

  ![Screenshot: Funktion „In Datei suchen“ in der neuen Codeansicht](/assets/images/help/repository/code-view-find-in-file.png)

1. Um einem bestimmten Verzeichnis eine neue Datei hinzuzufügen, klicke auf dieses Verzeichnis und dann auf {% octicon "plus" aria-label="The plus sign icon" %} **Neue Datei**, oder klicke in der Dateistrukturansicht auf {% octicon "plus" aria-label="The plus sign icon" %}.

  ![Screenshot: Dateistrukturansicht mit Hervorhebung des Plussymbols](/assets/images/help/repository/file-tree-view-new-file-icon.png)

1. Um ein Verzeichnis oder eine Datei zu löschen, navigiere zum Verzeichnis oder zur Datei, und klicke auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. Klicke dann auf **Verzeichnis löschen** oder **Datei löschen**.

  ![Screenshot: Optionsmenü in der neuen Codeansicht mit Hervorhebung der Option „Verzeichnis löschen“](/assets/images/help/repository/code-view-delete-directory.png)

1. Um eine Datei hochzuladen, navigiere zum ausgewählten Verzeichnis, und klicke dann auf {% octicon "upload" aria-label="The upload icon" %} **Dateien hochladen**, oder ziehe die Datei per Drag & Drop in deinen Browser.

  ![Screenshot: Schaltfläche „Dateien hochladen“ in der neuen Codeansicht](/assets/images/help/repository/code-view-upload-files.png)

## Verwenden des Symbolbereichs
Mit dem Symbolbereich kannst du jetzt schnell Symbole wie Funktionen oder Klassen in deinen Code anzeigen und zwischen diesen navigieren. Du kannst in einer einzelnen Datei, in allen Dateien in einem Repository oder sogar in allen öffentlichen Repositorys auf {% data variables.product.prodname_dotcom %} nach einem Symbol suchen.

Die Symbolsuche ist ein Feature der neuen Codesuche (Betaversion). Weitere Informationen findest du unter [Grundlegendes zur Syntax für die Codesuche (Betaversion) auf GitHub](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier).

1. Wähle ein Repository aus, und navigiere dann zu einer Datei, die Symbole enthält.
2. Klicke zum Öffnen des Symbolbereichs auf {% octicon "code-square" aria-label="The code square icon" %}.

  ![Screenshot: Symbolbereichssymbol in der neuen Codeansicht](/assets/images/help/repository/code-view-symbols-pane-icon.png)

  Alternativ kannst du den Symbolbereich öffnen, indem du in deiner Datei auf ein geeignetes Symbol klickst. Klickbare Symbole werden gelb hervorgehoben, wenn du mit dem Mauszeiger darauf zeigst.

  ![Screenshot: Datei in der neuen Codeansicht mit Hervorhebung eines klickbaren Symbols](/assets/images/help/repository/code-view-clickable-symbol.png)

1. Klicke im Symbolbereich oder in der Datei selbst auf das Symbol, das du suchen möchtest.

  ![Screenshot: Symbolbereich mit Hervorhebung eines automatisch aufgefüllten Symbols](/assets/images/help/repository/code-view-symbols-pane-symbol.png)

   - Um im gesamten Repository nach einem Symbol zu suchen, klicke auf **Dieses Symbol in diesem Repository suchen**. Klicke auf **Alle Repositorys**, um in allen Repositorys auf {% data variables.product.prodname_dotcom %} nach einem Symbol zu suchen.

      ![Screenshot: Symbolbereich mit Hervorhebung der Optionen zum Erweitern des Suchbereichs für ein Symbol](/assets/images/help/repository/code-view-symbols-pane-expand-search.png)

1. Um zwischen Verweisen auf ein Symbol zu navigieren, klicke auf {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} oder {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %}.

  ![Screenshot: Symbolbereich mit Hervorhebung der Suchnavigations-Chevrons](/assets/images/help/repository/code-view-symbol-result-navigation.png)

1. Wenn du zu einem bestimmten Verweis auf ein Symbol navigieren möchtest, klicke unter {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} **In dieser Datei** auf ein Ergebnis der Symbolsuche.

  ![Screenshot: Symbolbereich mit Hervorhebung eines Ergebnisses der Symbolsuche](/assets/images/help/repository/code-view-symbol-search-result.png)

1. Wenn du die Suche nach einem bestimmten Symbol beenden möchtest, klicke auf {% octicon "arrow-left" aria-label="The left arrow icon" %} **Alle Symbole**.

  ![Screenshot: Symbolbereich mit Hervorhebung der Schaltfläche „Alle Symbole“](/assets/images/help/repository/code-view-symbols-pane-all-symbols.png)

## Verwenden der Blame-Ansicht
Wenn du zur Blame-Ansicht wechselst, verlierst du nicht mehr den Dateikontext, da du nun die neue Codeansicht verwenden kannst, um schnell zwischen der Blame-Ansicht, der Rohcodeansicht und der Vorschau für eine Datei (abhängig vom Dateityp) umschalten kannst.

1. Wähle ein Repository aus, und klicke dann auf eine Datei innerhalb dieses Repositorys, um die neue Codeansicht zu öffnen.

  ![Screenshot: Repository „github/docs“ mit Hervorhebung einer ausgewählten Datei in der Dateistrukturansicht](/assets/images/help/repository/file-tree-view-file-selected.png)

1. Um den Revisionsverlauf der Datei anzuzeigen, klicke auf **Blame**. In dieser Ansicht erhältst du einen zeilenbasierten Revisionsverlauf. Dabei ist der Code in einer Datei nach Commit getrennt. Jeder Commit listet den Ersteller, die Commitbeschreibung und das Commitdatum auf.

  ![Screenshot: Neue Codeansicht mit Hervorhebung der Schaltfläche „Blame“](/assets/images/help/repository/code-view-blame-button.png)

   - Um Versionen einer Datei vor einem bestimmten Commit anzuzeigen, klicke auf {% octicon "versions" aria-label="The versions icon" %}.

      ![Screenshot: Commit in der Blame-Ansicht mit Hervorhebung des Versionssymbols](/assets/images/help/repository/code-view-blame-hide-commit.png)

   - Um weitere Details zu bestimmten Commits anzuzeigen, klicke auf die Commitbeschreibung.

      ![Screenshot: Commit in der Blame-Ansicht mit Hervorhebung der Commitbeschreibung](/assets/images/help/repository/code-view-blame-commit-description.png)

1. Klicke auf **Code**, um zur Rohcodeansicht zurückzukehren.

  ![Screenshot: Symbolleiste der Codeansicht mit Hervorhebung der Schaltfläche „Codeansicht“](/assets/images/help/repository/code-view-button.png)

   - Wenn du eine Markdowndatei anzeigst, kannst du auch auf **Vorschau** klicken, um zur Ansicht mit angewendeter Markdownformatierung zurückzukehren.

      ![Screenshot: Symbolleiste der Codeansicht mit Hervorhebung der Markdownschaltfläche „Vorschau“](/assets/images/help/repository/code-view-preview-button.png)

## Weiterführende Themen

- [Verschieben einer Datei an einen neuen Speicherort](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location)
- [Informationen zur Codesuche (Betaversion) auf GitHub](/search-github/github-code-search/about-github-code-search)
