---
title: Warum sind Commits in der falschen Reihenfolge?
intro: 'Wenn Du Deinen Commit-Verlauf über den Befehl „git rebase“ oder über einen erzwungenen Push-Vorgang umschreibst, wirst Du beim Öffnen eines Pull Requests feststellen, dass Deine Commit-Abfolge eine abweichende Reihenfolge aufweist.'
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

GitHub hebt Pull Requests als einen Raum für Diskussionen hervor. Alle Aspekte davon – Kommentare, Referenzen und Commits – werden in chronologischer Reihenfolge dargestellt. Wenn beim [Durchführen von Rebasing-Vorgängen](/articles/about-git-rebase) Dein Git-Commit-Verlauf umgeschrieben wird, ändert sich dadurch das Raum-Zeit-Kontinuum, was bedeutet, dass Commits möglicherweise nicht wie von Dir erwartet auf der GitHub-Oberfläche dargestellt werden.

Sollen Commits immer in der richtigen Reihenfolge angezeigt werden, solltest Du `git rebase` nicht verwenden. Sei jedoch versichert, dass nichts defekt ist, wenn die Elemente nicht in der chronologischen Reihenfolge angezeigt werden!
