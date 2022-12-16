---
title: Informationen zum Vergleich von Branches in Pull Requests
intro: 'In Pull Requests werden Diffs angezeigt, um die Änderungen, die du in deinem Topic-Branch vorgenommen hast, mit dem Basisbranch zu vergleichen, in dem du deine Änderungen zusammenführen möchtest.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
  - /articles/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Compare branches
ms.openlocfilehash: c45bcb3bceda42019be3139724e0b68234e90cfc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881804'
---
{% note %}

**Hinweis:** Beim Erstellen deines Pull Requests kannst du den Basis-Branch ändern, mit dem du deine Änderungen vergleichst. Weitere Informationen findest du unter [Erstellen eines Pull Requests](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository).

{% endnote %}

Du kannst vorgeschlagene Änderungen in einem Pull Request auf der Registerkarte „Geänderte Dateien“ anzeigen. ![Registerkarte „Geänderte Dateien“ eines Pull Request](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

Anstatt die Commits selbst anzuzeigen, kannst du die vorgeschlagenen Änderungen so anzeigen, wie sie in den Dateien erscheinen werden, sobald der Pull Request übertragen wurde. Die Dateien werden in alphabetischer Reihenfolge auf der Registerkarte Dateien geändert angezeigt. Ergänzungen zu den Dateien werden grün angezeigt und werden von einem `+`-Zeichen eingeleitet, während Inhalte, die entfernt wurden, rot angezeigt und von einem `-`-Zeichen eingeleitet werden.

## Anzeigeoptionen für Diffs

{% tip %}

**Tipp:** Wenn du den Kontext einer Änderung nicht nachvollziehen kannst, kannst du auf der Registerkarte Dateien geändert auf **Ansicht** klicken, um die gesamte Datei mit den vorgeschlagenen Änderungen anzuzeigen.

{% endtip %}

Du hast mehrere Möglichkeiten für die Anzeige eines Diff:
- Die einheitliche Ansicht zeigt aktualisierte und vorhandene Inhalte gemeinsam in einer linearen Ansicht.
- Die geteilte Ansicht zeigt alte Inhalte auf der einen Seite und neue Inhalte auf der anderen Seite.
- Die Rich-Diff-Ansicht zeigt eine Vorschau, wie die Änderungen nach dem Merge des Pull Requests aussehen werden.
- Die Quellansicht zeigt die Änderungen in der Quelle ohne die Formatierung der Rich-Diff-Ansicht.

Du kannst außerdem Leerzeichenänderungen ignorieren, um eine genauere Ansicht der wesentlichen Änderungen in einem Pull Request zu erhalten.

![Menü „Diff viewing options" (Diff-Anzeigeoptionen)](/assets/images/help/pull_requests/diff-settings-menu.png)

Um Änderungen in einem großen Pull Request leichter überprüfen zu können, kannst du den Diff so filtern, dass nur Dateien angezeigt werden, deren CODEINHABER*in du bist, und gelöschte oder bereits überprüfte Dateien ausgeblendet werden. Weitere Informationen findest du unter [Filtern von Dateien in einem Pull Request nach Dateityp](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request).

  ![Dropdownmenü „File filter" (Dateifilter)](/assets/images/help/pull_requests/file-filter-menu.png)

## Gründe für Anzeigefehler bei Diffs
- Du hast die maximale Anzahl von Dateien oder bestimmten Dateitypen überschritten. Weitere Informationen findest du unter [Informationen zu Repositorys](/repositories/creating-and-managing-repositories/about-repositories#limits-for-viewing-content-and-diffs-in-a-repository).
- Deine Datei erfüllt eine Regel in der *gitattributes*-Datei des Repositorys, die verhindern, dass diese Datei standardmäßig angezeigt wird. Weitere Informationen findest du unter [Anpassen der Anzeige von geänderten Dateien auf GitHub](/articles/customizing-how-changed-files-appear-on-github).

## Vergleiche von Three-Dot- (Dreipunkte-) und Two-Dot- (Zweipunkte-) Diffs von Git

Es gibt zwei Vergleichsmethoden für den `git diff`-Befehl; Zweipunkt (`git diff A..B`) und Dreipunkt (`git diff A...B`). Standardmäßig zeigen Pull Requests für {% data variables.product.prodname_dotcom %} einen Dreipunkt-Diff an.

### Vergleich der Dreipunkt-Git-Diff 

Der Dreipunkt-Vergleich zeigt den Unterschied zwischen dem neuesten gemeinsamen Commit von beiden Branches (Zusammenführungsbasis) und der neuesten Version der Themen-Branch.

### Vergleich der Zweipunkt-Git-Diff

Der Zweipunktvergleich zeigt den Unterschied zwischen dem neuesten Zustand der Basis-Branches (zum Beispiel `main`) und der neuesten Version der Themen-Branch.

Um zwei committish-Referenzen in einem Zwei-Punkte-Diff-Vergleich auf {% data variables.product.prodname_dotcom %} anzuzeigen, kannst du die URL der Seite „Änderungen vergleichen“ deines Repositorys bearbeiten. Weitere Informationen findest du im [Git-Glossar unter „committish“](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish) auf der Website des Buchs _Pro Git_.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Ein Two-Dot-Diff (Zweipunkte-Diff) vergleicht zwei Git-Committish-Referenzen, wie SHAs oder OIDs (Objekt-IDs), direkt miteinander. Auf {% data variables.product.prodname_dotcom %} müssen die Git-Committish-Referenzen in einem Two-Dot-Diff-Vergleich an das gleiche Repository oder seine Forks gepusht werden.

Wenn du einen Two-Dot-Diff in einem Pull Request simulieren und einen Vergleich zwischen den neuesten Versionen jedes Branch sehen möchtest, kannst du den Basis-Branch in deinen Themen-Branch zusammenführen, wodurch der letzte gemeinsame Vorgänger deiner Branches aktualisiert wird.

Weitere Informationen zu Git-Befehlen zum Vergleichen von Änderungen findest du unter [Optionen für „git diff“](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203) auf der Website des Buchs _Pro Git_.

## Informationen zum Dreipunkt-Vergleich auf {% data variables.product.prodname_dotcom %}

Da der Dreipunkt-Vergleich mit der Zusammenführungsbasis vergleicht, konzentriert es sich auf „was eine Pull Request eingeführt wird". 

Wenn du einen Zweipunktvergleich verwendest, ändert sich der Diff, wenn die Basis-Branch aktualisiert wird, auch wenn du keine Änderungen an der Themen-Branch vorgenommen hast. Darüber hinaus konzentriert sich ein Zweipunktvergleich auf die Basis-Branch. Dies bedeutet, dass alles, was du hinzufügst, als fehlend aus der Basis-Branch angezeigt wird, als ob es sich um eine Löschung handelte, und umgekehrt. Dadurch werden die Änderungen der Themen-Branches mehrdeutig.

Im Gegensatz dazu werden die Branches anhand des Dreipunktvergleichs immer in den Diff-Bereichen geändert, wenn die Basis-Branches aktualisiert werden, da der Diff alle Änderungen anzeigt, da die Veränderungen seit der Branches unterschiedlich sind.

### Häufiges Zusammenführen

Um Verwechslungen zu vermeiden, solltest du die Basisbranches (zum Beispiel `main`) häufig in deinen Topic-Branches zusammenführen. Durch das Zusammenführen der Basis-Branches sind die Diffs, die durch Zweipunkt- und Dreipunktvergleiche dargestellt werden, identisch. Es wird empfohlen, eine Pull Request so schnell wie möglich zusammenzuführen. Dies fordert Mitwirkende auf, Pull Requests kleiner zu machen, die im Allgemeinen empfohlen werden.

## Weiterführende Themen

- [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [Informationen zu Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
