---
title: Mergekonflikte nach einem „git rebase“ beheben
intro: 'Mit einem `git rebase`-Vorgang verschiebst du in der Regel Commits. Dabei können Mergekonflikte entstehen. Das bedeutet, dass zwei deiner Commits dieselbe Zeile in derselben Datei geändert haben und Git nicht weiß, welche Änderung übernommen werden soll.'
redirect_from:
  - /articles/resolving-merge-conflicts-after-a-git-rebase
  - /github/using-git/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/using-git/resolving-merge-conflicts-after-a-git-rebase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Resolve conflicts after rebase
ms.openlocfilehash: 8798282fb804f7b2389d98f69ba2b0e855a2289a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104580'
---
Wenn durch die Neuanordnung und Bearbeitung der Commits durch `git rebase` ein Mergekonflikt entsteht, gibt Git die folgende Meldung im Terminal aus:

```shell
error: could not apply fa39187... something to add to patch A

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
```

Git teilt Dir hier also mit, welcher Commit den Konflikt verursacht (`fa39187`). Außerdem werden drei Lösungsmöglichkeiten angeboten:

* Du kannst `git rebase --abort` ausführen, um das Rebase vollständig rückgängig zu machen. Dadurch wird der Branch in den Zustand zurückversetzt, den er vor dem Aufruf von `git rebase` hatte.
* Du kannst `git rebase --skip` ausführen, um den Commit vollständig zu überspringen. In diesem Fall wird keine der Änderungen, die durch den Commit durchgeführt werden sollen, übernommen. Für diese Option wirst du Dich vermutlich nur selten entscheiden.
* Du kannst den Konflikt beheben.

Um den Konflikt zu beheben, kannst du die [Standardprozeduren zum Beheben von Mergekonflikten über die Befehlszeile](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) befolgen. Nach der Behebung des Konflikts musst du `git rebase --continue` aufrufen, damit Git das Rebase fortsetzt.
