---
title: Git rebase an der Befehlszeile verwenden
redirect_from:
  - /articles/using-git-rebase
  - /articles/using-git-rebase-on-the-command-line
  - /github/using-git/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git/using-git-rebase-on-the-command-line
intro: Im Folgenden findest du ein kurzes Tutorial zur Verwendung von `git rebase` über die Befehlszeile.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git rebase
ms.openlocfilehash: e0d2d2d10da187d6cc38a72a44e8235ec1f6f73f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145130497'
---
## Verwenden von Git-Rebase

In diesem Beispiel werden mit Ausnahme von `exec` alle verfügbaren `git rebase`-Befehle vorgestellt.

Wir beginnen das Rebasing, indem wir `git rebase --interactive HEAD~7` im Terminal eingeben. Unser bevorzugter Texteditor zeigt die folgenden Zeilen an:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B
```

In diesem Beispiel führen wir folgende Schritte aus:

* Den fünften Commit (`fa39187`) mithilfe von `squash` in den `"Patch A"`-Commit (`1fc6c95`) einfügen
* Den letzten Commit (`7b36971`) vor den `"Patch B"`-Commit (`6b2481b`) verschieben. Dieser bleibt ein `pick`.
* Den `"A fix for Patch B"`-Commit (`c619268`) mit dem `"Patch B"`-Commit (`6b2481b`) zusammenführen und die Commitnachricht mit `fixup` ignorieren.
* Den dritten Commit (`dd1475d`) mithilfe von `edit` in zwei kleinere Commits aufteilen.
* Die Commitnachricht des falsch geschriebenen Commits (`4ca2acc`) mit `reword` korrigieren.

Puh! Klingt nach jeder Menge Arbeit, doch indem wir die Schritte einzeln durchführen, können wir diese Änderungen ohne Weiteres vornehmen.

Zunächst müssen wir die Befehle in der Datei wie folgt ändern:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Wir haben den Befehl in jeder Zeile von `pick` in den gewünschten Befehl geändert.

Speichere nun den Vorgang und schließe den Editor. Dadurch wird der interaktive Rebase-Vorgang gestartet.

Git überspringt den ersten Rebase-Befehl `pick 1fc6c95`, da nichts unternommen werden muss, und geht zum nächsten Befehl über: `squash fa39187`. Da für diesen Vorgang deine Eingabe erforderlich ist, öffnet Git den Texteditor erneut. Die geöffnete Datei sieht in etwa wie folgt aus:

```
# This is a combination of two commits.
# The first commit's message is:

Patch A

# This is the 2nd commit message:

something to add to patch A

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
# modified:   a
#
```

Diese Git-Datei enthält Informationen dazu, welche Aktionen mit `squash` durchgeführt werden. Sie enthält die Nachricht des ersten Commits (`"Patch A"`) und die Nachricht des zweiten Commits (`"something to add to patch A"`). Wenn du mit diesen Commit-Mitteilungen zufrieden bist, kannst du die Datei speichern und den Editor schließen. Andernfalls kannst du einfach den Text der Commit-Mitteilung ändern.

Wenn der Editor geschlossen ist, wird der Rebase-Vorgang fortgesetzt:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Git verarbeitet die beiden `pick`-Befehle (für `pick 7b36971` und `pick 6b2481b`). *Außerdem* wird der `fixup`-Befehl (`fixup c619268`) verarbeitet, da er keine Interaktion erfordert. `fixup` führt die Änderungen von `c619268` mit dem Commit davor (`6b2481b`) zusammen. Beide Änderungen weisen dieselbe Commitnachricht auf: `"Patch B"`.

Git gelangt zum `edit dd1475d`-Vorgang, hält an und gibt im Terminal die folgende Meldung aus:

```shell
You can amend the commit now, with

        git commit --amend

Once you are satisfied with your changes, run

        git rebase --continue
```

An diesem Punkt kannst du die Dateien in deinem Projekt bearbeiten, um zusätzliche Änderungen vorzunehmen. Für jede von dir vorgenommene Änderung musst du einen neuen Commit durchführen. Gib dazu den Befehl `git commit --amend` ein. Nachdem du alle Änderungen vorgenommen hast, kannst du `git rebase --continue` ausführen.

Anschließend gelangt Git zum Befehl `reword 4ca2acc`.  Daraufhin wird dein Texteditor erneut geöffnet und die folgenden Informationen werden angezeigt:

```
i cant' typ goods

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD^1 <file>..." to unstage)
#
# modified:   a
#
```

Git zeigt erneut die zu bearbeitende Commit-Mitteilung an. Du kannst den Text ändern (`"i cant' typ goods"`), die Datei speichern und den Editor schließen. Git schließt den Rebase-Vorgang ab, und du kehrst zum Terminal zurück.

## Code mit Rebasing an GitHub übertragen

Da du den Git-Verlauf geändert hast, funktioniert das normale `git push origin` **nicht**. Du musst den Befehl ändern, indem du deine neuesten Änderungen per erzwungenem Push-Vorgang überträgst:

```shell
# Don't override changes
$ git push origin main --force-with-lease

# Override changes
$ git push origin main --force
```

{% warning %}

Das erzwungene Pushen hat ernste Auswirkungen, da so die zeitliche Abfolge von Commits für den Branch geändert wird. Insbesondere, wenn mehrere Personen auf dein Repository zugreifen, sollte das Pushen mit Vorsicht verwendet werden.

{% endwarning %}

## Weitere Informationsquellen

* [Mergekonflikte nach einem „Git Rebase“ beheben](/github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase)
