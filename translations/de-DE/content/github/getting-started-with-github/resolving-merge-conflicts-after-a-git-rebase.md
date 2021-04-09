---
title: Mergekonflikte nach einem „git rebase“ beheben
intro: 'Mit einem „git rebase“ verschiebst Du in der Regel Commits. Dabei können Mergekonflikte entstehen. Zwei Deiner Commits haben die gleiche Zeile in der gleichen Datei geändert und Git weiß nicht, welche der Änderungen übernommen werden soll.'
redirect_from:
  - /articles/resolving-merge-conflicts-after-a-git-rebase
  - /github/using-git/resolving-merge-conflicts-after-a-git-rebase
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


Wenn durch die Neuanordnung und Bearbeitung der Commits durch ein `git rebase` ein Mergekonflikt entsteht, gibt Git die folgende Meldung im Terminal aus:

```shell
error: could not apply fa39187... something to add to patch A

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
```

Git teilt Dir hier also mit, welcher Commit den Konflikt verursacht (`fa39187`). Außerdem werden drei Lösungsmöglichkeiten angeboten:

* Du kannst `git rebase --abort` ausführen, um das Rebase vollständig rückgängig zu machen. Dadurch wird der Branch in den Zustand zurückversetzt, den er vor dem Aufruf von `git rebase` hatte.
* Du kannst `git rebase --skip` ausführen, um den Commit vollständig zu überspringen. In diesem Fall wird keine der Änderungen, die durch den Commit durchgeführt werden sollen, übernommen. Für diese Option wirst Du Dich vermutlich nur selten entscheiden.
* Du kannst den Konflikt beheben.

Zur Behebung des Konflikts folge den [Standardverfahren zur Behebung von Mergekonflikten über die Befehlszeile](/articles/resolving-a-merge-conflict-using-the-command-line). Nach der Behebung des Konflikts musst Du `git rebase --continue` aufrufen, damit Git das Rebase fortsetzt.
