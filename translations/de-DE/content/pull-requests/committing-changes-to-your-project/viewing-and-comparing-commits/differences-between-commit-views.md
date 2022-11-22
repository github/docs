---
title: Unterschiede zwischen Commit-Ansichten
intro: Je nach ausgewählter Anzeigemethode können Unterschiede im Commitverlauf auftreten.
redirect_from:
  - /articles/differences-between-commit-views
  - /github/committing-changes-to-your-project/differences-between-commit-views
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/differences-between-commit-views
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit views
ms.openlocfilehash: 2b5d59d385f815bd09c853e398d372bb4c861650
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '145132514'
---
Auf {% data variables.product.product_name %} kannst du den Commit-Verlauf eines Repositorys folgendermaßen anzeigen:

- Direkte Navigation zur [Seite „Commits“](https://github.com/mozilla/rust/commits/master)eines Repositorys
- Klicke auf eine Datei und dann auf **Verlauf**, um zum [Commitverlauf für eine bestimmte Datei](https://github.com/mozilla/rust/commits/master/README.md) zu gelangen.

Diese beiden Commit-Ansichten können manchmal _unterschiedliche_ Informationen anzeigen. Beim Verlauf einer einzelnen Datei fehlen möglicherweise Commits, die im Commit-Verlauf des gesamten Repositorys enthalten sind.

Bei Git gibt es mehrere Möglichkeiten, den Verlauf eines Repositorys anzuzeigen. Wenn Git den Verlauf einer einzelnen Datei anzeigt, wird der Verlauf vereinfacht, indem Commits, die keine Änderungen dieser Datei zur Folge hatten, weggelassen werden. Anstatt bei jedem einzelnen Commit zu überprüfen, ob er sich auf die Datei auswirkt, lässt Git einen ganzen Branch weg, wenn dieser Branch nach dem Merge den endgültigen Inhalt der Datei nicht beeinflusst. Alle Commits auf dem Branch, die sich auf die Datei ausgewirkt haben, werden nicht angezeigt.

Für den Commit-Verlauf einer Datei nutzt {% data variables.product.product_name %} explizit diese einfache Strategie. So wird der Verlauf vereinfacht, indem Commits, die sich nicht auf das endgültige Ergebnis ausgewirkt haben, weggelassen werden. Wenn beispielsweise ein Nebenbranch eine Änderung vorgenommen und sie dann rückgängig gemacht hat, wird dieser Commit nicht im Branch-Verlauf aufgeführt. Damit erhöht sich die Effizienz bei Branch-Reviews, da nur Commits angezeigt werden, die sich auf die Datei auswirken.

Diese gekürzte Ansicht enthält möglicherweise nicht immer alle Informationen, die benötigt werden. Wenn du den gesamten Verlauf einsehen möchtest, bietet {% data variables.product.product_name %} eine Ansicht mit weiteren Informationen auf der Commit-Seite eines Repositorys.

Weitere Informationen dazu, wie Git den Commitverlauf behandelt, findest du im Abschnitt [Vereinfachung des Verlaufs](https://git-scm.com/docs/git-log#_history_simplification) des Hilfeartikels `git log`.

## Weiterführende Themen

- [Commits signieren](/articles/signing-commits)
- [Commits durchsuchen](/search-github/searching-on-github/searching-commits)
