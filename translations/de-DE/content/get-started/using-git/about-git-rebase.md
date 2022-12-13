---
title: Informationen zu Git-Rebase
redirect_from:
  - /rebase
  - /articles/interactive-rebase
  - /articles/about-git-rebase
  - /github/using-git/about-git-rebase
  - /github/getting-started-with-github/about-git-rebase
  - /github/getting-started-with-github/using-git/about-git-rebase
intro: 'Mit dem Befehl `git rebase` kannst du schnell und einfach mehrere Commits auf einmal ändern und den Verlauf deines Repositorys anpassen. Du kannst Commits neu anordnen, bearbeiten oder squashen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5ffa3cbb1fcb6c8c37e56e434b08018582a0ff2b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104588'
---
Normalerweise würdest du Folgendes verwenden `git rebase`:

* Frühere Commit-Mitteilungen bearbeiten
* Mehrere Commits zu einem einzigen zusammenfassen
* Commits, die nicht mehr benötigt werden, löschen oder rückgängig machen

{% warning %}

**Warnung**: Da die Änderung deines Commit-Verlaufs zu Schwierigkeiten für alle anderen Benutzer des Repositorys führen kann, gilt ein Commit-Rebase nach dem Push an ein Repository als schlechte Praktik. Informationen zu einem sicheren Rebase auf {% data variables.product.product_location %} findest du unter „[Informationen zum Zusammenführen von Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)“.

{% endwarning %}

## Commit-Rebase gegen einen Branch

Um ein Rebase für alle Commits zwischen einem anderen Branch und dem aktuellen Branch-Status durchzuführen, kannst du den folgenden Befehl in deiner Shell eingeben (entweder die Eingabeaufforderung unter Windows oder das Terminal unter Mac und Linux):

```shell
$ git rebase --interactive <em>other_branch_name</em>
```

## Commit-Rebase anhand eines Zeitpunkts

Um ein Rebase für die letzten Commits in deinem aktuellen Branch durchzuführen, kannst du den folgenden Befehl in deiner Shell eingeben:

```shell
$ git rebase --interactive HEAD~7
```

## Während des Rebasings verfügbare Befehle

Beim Rebasing stehen sechs Befehle zur Verfügung:

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code> bedeutet einfach, dass der Commit enthalten ist. Wenn du die Reihenfolge der <code>pick</code>-Befehle neu anordnest, ändert sich die Reihenfolge der Commits während des Rebasings. Wenn du keinen Commit einbeziehen möchtest, solltest du die gesamte Zeile löschen. </dd>

<dt><code>reword</code></dt>
<dd>Der Befehl <code>reword</code> ist vergleichbar mit <code>pick</code>. Nachdem du ihn verwendet hast, wird der Rebase-Prozess jedoch angehalten, sodass du die Commitnachricht ändern kannst. Die Änderungen, die durch den Commit vorgenommen werden, sind davon nicht betroffen. </dd>

<dt><code>edit</code></dt>
<dd>Wenn du <code>edit</code> für einen Commit auswählst, hast du die Möglichkeit, den Commit zu ändern, was bedeutet, dass du den Commit hinzufügen oder komplett ändern kannst. Du kannst auch zusätzliche Commits erstellen, bevor du mit dem Rebasing fortfährst. Auf diese Weise kannst du einen großen Commit in kleinere aufteilen oder fehlerhafte Änderungen, die in einem Commit vorgenommen wurden, entfernen. </dd>

<dt><code>squash</code></dt>
<dd>Mit diesem Befehl kannst du zwei oder mehr Commits zu einem einzigen Commit zusammenfassen. Ein Commit wird in den Commit darüber eingefügt. Git gibt Dir die Möglichkeit, eine neue Commit-Mitteilung zu schreiben, die beide Änderungen beschreibt.</dd>

<dt><code>fixup</code></dt>
<dd>Dies ist vergleichbar mit <code>squash</code>. Allerdings wird die Nachricht des zusammenzuführenden Commits verworfen. Der Commit wird einfach in den Commit darüber zusammengefügt, und die Mitteilung des vorstehenden Commits wird verwendet, um beide Änderungen zu beschreiben.</dd>

<dt><code>exec</code></dt>
<dd>Hiermit kannst du beliebige Shell-Befehle auf einem Commit ausführen.</dd>
</dl>

## Hier ist ein Beispiel zur Verwendung von `git rebase`.

Unabhängig davon, welchen Befehl du verwendest, startet Git deinen [Standard-Text-Editor](/github/getting-started-with-github/associating-text-editors-with-git) und öffnet eine Datei, die die Commits im ausgewählten Bereich enthält. Diese Datei sieht in etwa so aus:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B

# Rebase 41a72e6..7b36971 onto 41a72e6
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
```

Wenn man diese Informationen von oben nach unten betrachtet, wird Folgendes deutlich:

- Es werden sieben Commits aufgelistet, was darauf hindeutet, dass es sieben Änderungen zwischen unserem Startpunkt und unserem aktuellen Branch-Status gab.
- Die Commits, die du für das Rebasing ausgewählt hast, werden in der Reihenfolge der ältesten Änderungen (oben) bis hin zu den neuesten Änderungen (unten) sortiert.
- In jeder Zeile sind ein Befehl (standardmäßig `pick`), der Commit-SHA und die Commitnachricht aufgeführt. Beim gesamten `git rebase`-Verfahren geht es um die Änderung dieser drei Spalten. Die vorgenommenen Änderungen stellen ein *Rebase* auf dein Repository dar.
- Nach den Commits erfährst du in Git, mit welchem Commitbereich wir arbeiten (`41a72e6..7b36971`).
- Schließlich bietet Git etwas Unterstützung, indem es Dir die Befehle nennt, die Dir beim Rebasing von Commits zur Verfügung stehen.

## Weitere Informationsquellen

- [Verwenden von Git-Rebase](/articles/using-git-rebase)
- [Kapitel „Git-Branching“ im _Pro Git_-Buch](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [Kapitel „Interaktives Rebasing“ im _Pro Git_-Buch](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- [Commit-Squashing mit Rebase](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)
- „[Synchronisieren deines Branchs](/desktop/contributing-to-projects/syncing-your-branch)“ in der {% data variables.product.prodname_desktop %}-Dokumentation
