---
title: Dateien in einem Pull Request filtern
intro: 'Zum schnellen Überprüfen von Änderungen an einem großen Pull Request kannst du geänderte Dateien filtern{% ifversion pr-tree-view %} oder die Dateistruktur zum navigieren zwischen Dateien verwenden{% endif %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
  - /articles/filtering-files-in-a-pull-request-by-file-type
  - /articles/filtering-files-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/filtering-files-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter files
ms.openlocfilehash: 1ca50334e4329d40ee164cd01523abc69e127ab3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884173'
---
Du kannst Dateien in einem Pull Request nach Dateierweiterungstyp filtern,wie z. B. `.html` oder `.js`, nach fehlender Erweiterung, Codebesitz oder Dotfiles.{% ifversion pr-tree-view %} Mit der Dateistruktur kannst du auch nach Dateipfad filtern, zwischen Dateien navigieren oder eine allgemeine Ansicht der geänderten Dateien anzeigen.{% endif %}

## Verwenden des Dropdownmenüs „Dateifilter“

{% tip %}

**Tipp**: Um die Diff-Ansicht deines Pull Requests zu vereinfachen, kannst du Dateien, die gelöscht wurden oder die du bereits in der Pull Request-Diff-Ansicht angesehen hast, vorübergehend aus dem Dropdownmenü „Dateifilter“ ausblenden.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, nach dem du filtern möchtest.
{% data reusables.repositories.changed-files %}
4. Im Dropdownmenü „File filter“ (Dateifilter) kannst du die gewünschten Filter auswählen, deaktivieren oder anklicken.
  ![Dateifilter-Option oberhalb der Pull-Request-Diff-Ansicht](/assets/images/help/pull_requests/file-filter-option.png)
5. Klicke optional auf der Registerkarte **Geänderte Dateien** auf **Löschen**, um die Filterauswahl zu deaktivieren.
  ![Löschen der Dateifilterauswahl](/assets/images/help/pull_requests/clear-file-filter.png)

{% ifversion pr-tree-view %}
## Verwenden der Dateistruktur

{% data reusables.repositories.sidebar-pr %}
1. Klicke in der Liste der Pull Requests auf den Pull Request, nach dem du filtern möchtest.
{% data reusables.repositories.changed-files %}

1. Klicke auf eine Datei in der Dateistruktur, um die entsprechenden Datei-Diff-Ansicht anzuzeigen. Wenn die Dateistruktur ausgeblendet ist, klicke auf {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %}, um sie anzuzeigen.

   {% note %}

   **Hinweis**: Die Dateistruktur wird nicht angezeigt, wenn der Bildschirm nicht breit genug ist oder der Pull Request nur eine Datei enthält.

   {% endnote %}
   
   ![Screenshot des Suchfelds „Geänderte Dateien filtern“ und der hervorgehobenen Dateistruktur](/assets/images/help/repository/file-tree.png)
1. Um nach Dateipfad zu filtern, gib den Dateipfad ganz oder teilweise im Suchfeld **Nach geänderten Dateien filtern** ein. Alternativ dazu kannst du auch das Dropdownmenü „Dateifilter“ verwenden. Weitere Informationen findest du unter [Verwenden des Dropdownmenüs „Dateifilter“](#using-the-file-filter-dropdown).

{% endif %}

## Weiterführende Themen

- [Informationen zum Vergleichen von Branches in einem Pull Request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)
- [Suchen nach geänderten Methoden und Funktionen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)
