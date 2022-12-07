---
title: Einen Permalink zu einem Code-Ausschnitt erstellen
intro: Du kannst einen Permalink zu einer bestimmten Code-Zeile oder einem bestimmten Code-Ausschnitt in einer spezifischen Version einer Datei oder eines Pull Requests erstellen.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-a-permanent-link-to-a-code-snippet
  - /articles/creating-a-permanent-link-to-a-code-snippet
  - /github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet
  - /github/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Permanent links to code
ms.openlocfilehash: d1c363eba2a45558f3fdc9b55025309544ef677b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068628'
---
## Verknüpfen mit Code

Diese Art von Permalink wird nur in dem Repository, aus dem er stammt, als Code-Ausschnitt dargestellt. In anderen Repositorys wird der Permalink-Code-Ausschnitt als URL angezeigt.

![In einem Kommentar dargestellter Code-Ausschnitt](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**Tipp:** Informationen zum Erstellen eines Permalinks für eine gesamte Datei findest du unter [Permalinks zu Dateien abrufen](/articles/getting-permanent-links-to-files).

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Suche den Code, zu dem Du einen Link erstellen möchtest:
    - Um Code aus einer Datei zu verknüpfen, navigiere zu dieser Datei.
    - Um Code aus einem Pull Request zu verlinken, navigiere zu diesem Pull Request. Klicke dort auf {% octicon "diff" aria-label="The file diff icon" %} **Dateien geändert**. Navigiere anschließend zu der Datei mit dem Code, den dein Kommentar enthalten soll, und klicke auf **Anzeigen**.
{% data reusables.repositories.choose-line-or-range %}
4. Klicke links von der Zeile respektive dem Abschnitt auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. Klicke im Dropdownmenü auf **Permalink kopieren**.
  ![Über 3-Punkte-Symbol erreichbares Menü mit Option zum Kopieren eines Permalinks für eine ausgewählte Zeile](/assets/images/help/repository/copy-permalink-specific-line.png)
5. Navigiere zu der Unterhaltung, in der Du auf den Code-Ausschnitt verknüpfen möchtest.
6. Kopiere den Permalink in einen Kommentar und klicke auf **Kommentar**.
  ![Kopierter Permalink in einem Kommentar im selben Repository](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

## Verknüpfen mit Markdown

Du kannst mit bestimmten Zeilen in Markdown-Dateien verknüpfen, indem du die Markdown-Datei ohne Markdown-Rendering lädst. Um eine Markdown-Datei ohne Rendering zu laden, kannst du den `?plain=1`-Parameter am Ende der URL für die Datei verwenden. Beispiel: `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1`.

Du kannst eine Verknüpfung mit einer bestimmten Zeile in der Markdown-Datei wie im Code herstellen. Füge `#L` die Zeilennummer oder Zahlen am Ende der URL hinzu. Beispiel: `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14` hebt Zeile 14 in der README.md-Datei hervor.

## Weiterführende Themen

- [Erstellen eines Issues](/articles/creating-an-issue/)
- [Einen Issue im Code öffnen](/articles/opening-an-issue-from-code/)
- [Änderungen in Pull Requests überprüfen](/articles/reviewing-changes-in-pull-requests/)
