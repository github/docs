---
ms.openlocfilehash: 476305b7c40430f20edb235a1c1ce73482464c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "146064235"
---
Wenn Du die Ereignisse `pull_request` und `pull_request_target` verwendest, kannst Du einen Workflow konfigurieren, der nur für Pull Requests ausgeführt werden kann, die auf bestimmte Branches abzielen.

Verwende den Filter `branches`, wenn Du Branchnamenmuster entweder einschließen oder ein- und ausschließen möchtest. Verwende den Filter `branches-ignore`, wenn du Branchnamenmuster nur ausschließen möchtest. Du kannst die Filter `branches` und `branches-ignore` nicht für dasselbe Ereignis in einem Workflow nutzen.

Wenn Du sowohl `branches`/`branches-ignore` als auch [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore) definierst, wird der Workflow nur ausgeführt, wenn beide Filter zutreffen.

Die Schlüsselwörter `branches` und `branches-ignore` akzeptieren Globmuster, die die Platzhalterzeichen `*`, `**`, `+`, `?`, `!` verwenden, um zu mehr als einem Branchnamen zu passen. Wenn ein Name eines dieser Zeichen enthält und Du eine literale Übereinstimmung wünscht, musst Du jedes dieser Sonderzeichen mit `\` als Escapezeichen verwenden. Weitere Informationen zu Globmustern findest Du im „[Filtermuster-Spickzettel](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)“.

#### Beispiel: Einschließen von Branches

Die in `branches` definierten Muster werden mit dem Namen des Git-Ref ausgewertet. Der folgende Workflow würde zum Beispiel immer dann ablaufen, wenn ein `pull_request`-Ereignis für einen Pull Request vorliegt:

- Ein Branch namens `main` (`refs/heads/main`)
- Ein Branch namens `mona/octocat` (`refs/heads/mona/octocat`)
- Ein Branch, dessen Name mit `releases/` beginnt, wie `releases/10` (`refs/heads/releases/10`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
```

#### Beispiel: Ausschließen von Branches

Wenn ein Muster dem Muster `branches-ignore` entspricht, wird der Workflow nicht ausgeführt. Die in `branches` definierten Muster werden mit dem Namen des Git-Ref ausgewertet. Der folgende Arbeitsablauf würde zum Beispiel immer dann ablaufen, wenn ein `pull_request`-Ereignis eintritt, es sei denn, der Pull Request ist zielgerichtet:

- Ein Branch namens `mona/octocat` (`refs/heads/mona/octocat`)
- Ein Branch, dessen Name mit `releases/**-alpha` übereinstimmt, wie `releases/beta/3-alpha` (`refs/heads/releases/beta/3-alpha`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
```

#### Beispiel: Einschließen und Ausschließen von Branches

Du kannst dasselbe Ereignis nicht mit `branches` und `branches-ignore` in einem einzigen Workflow filtern. Wenn Du Branchmuster für ein einzelnes Ereignis sowohl einschließen als auch ausschließen möchten, verwendest Du den Filter `branches` zusammen mit dem Zeichen `!`, um die auszuschließenden Branches anzugeben.

Wenn Du einen Branch mit dem Zeichen `!` definierst, musst Du auch mindestens einen Branch ohne das Zeichen `!` definieren. Wenn Du nur Branches ausschließen möchten, verwendest Du stattdessen `branches-ignore`.

Die Reihenfolge, in der Du die Muster definierst, ist entscheidend.

- Ein passendes negatives Muster (mit dem Präfix `!`) nach einer positiven Übereinstimmung schließt den Verweis auf Git aus.
- Ein übereinstimmendes positives Muster nach einem negativen Abgleich schließt die Git-Ref wieder ein.

Der folgende Workflow wird bei `pull_request`-Ereignissen für Pull Requests ausgeführt, die auf `releases/10` oder `releases/beta/mona` abzielen, aber nicht für Pull-Requests, die auf `releases/10-alpha` oder `releases/beta/3-alpha` abzielen, weil das negative Muster `!releases/**-alpha` auf das positive Muster folgt.

```yaml
on:
  pull_request:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```
