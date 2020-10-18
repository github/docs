---
title: Unterschiede zwischen Commit-Ansichten
redirect_from:
  - /articles/differences-between-commit-views
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Auf {% data variables.product.product_name %} können Sie den Commit-Verlauf eines Repositorys anzeigen, indem Sie

- Direkt zur [Commit-Seite](https://github.com/mozilla/rust/commits/master) eines Repositorys nagivierst
- Auf eine Datei und dann auf **History** (Verlauf) klickst, um zum [Commit-Verlauf für eine bestimmte Datei ](https://github.com/mozilla/rust/commits/master/README.md) zu gelangen

Manchmal kann es vorkommen, dass diese beiden Commit-Ansichten _unterschiedliche_ Informationen anzeigen. Beim Verlauf einer einzelnen Datei fehlen möglicherweise Commits, die im Commit-Verlauf des gesamten Repositorys enthalten sind.

Bei Git gibt es mehrere Möglichkeiten, den Verlauf eines Repositorys anzuzeigen. Wenn Git den Verlauf einer einzelnen Datei anzeigt, wird der Verlauf vereinfacht, indem Commits, die keine Änderungen dieser Datei zur Folge hatten, weggelassen werden. Anstatt bei jedem einzelnen Commit zu überprüfen, ob er sich auf die Datei auswirkt, lässt Git einen ganzen Branch weg, wenn dieser Branch nach dem Merge den endgültigen Inhalt der Datei nicht beeinflusst. Alle Commits auf dem Branch, die sich auf die Datei ausgewirkt haben, werden nicht angezeigt.

Für den Commit-Verlauf einer Datei nutzt {% data variables.product.product_name %} explizit diese einfache Strategie. So wird der Verlauf vereinfacht, indem Commits, die sich nicht auf das endgültige Ergebnis ausgewirkt haben, weggelassen werden. Wenn beispielsweise ein Nebenbranch eine Änderung vorgenommen und sie dann rückgängig gemacht hat, wird dieser Commit nicht im Branch-Verlauf aufgeführt. Damit erhöht sich die Effizienz bei Branch-Reviews, da nur Commits angezeigt werden, die sich auf die Datei auswirken.

Diese gekürzte Ansicht enthält möglicherweise nicht immer alle Informationen, die Du benötigst. Wenn Sie den gesamten Verlauf einsehen möchten, bietet {% data variables.product.product_name %} eine Ansicht mit weiteren Informationen auf der Commit-Seite eines Repositorys.

Weitere Informationen zum Umgang von Git mit Commit-Verläufen findest Du im Abschnitt „[Vereinfachter Verlauf](https://git-scm.com/docs/git-log#_history_simplification)“ im Hilfe-Artikel `git log`.

### Weiterführende Informationen

- „[Commits signieren](/articles/signing-commits)“
- „[Commits suchen](/articles/searching-commits)“
