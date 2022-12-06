---
ms.openlocfilehash: a35ad50ac71e34c7aecdc8f58720f962375acabd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067788"
---

Wenn du das `workflow_run`-Ereignis verwendest, kannst du angeben, in welchen Branches der auslösende Workflow ausgeführt werden muss, um deinen Workflow auszulösen.

Die Filter `branches` und `branches-ignore` akzeptieren Globmuster, die die Platzhalterzeichen `*`, `**`, `+`, `?`, `!` und andere verwenden, um zu mehr als einem Branch-Namen zu passen. Wenn ein Name eines dieser Zeichen enthält und du eine literale Übereinstimmung wünscht, musst du für jedes dieser Sonderzeichen mit *Escape* mit `\` verwenden. Weitere Informationen zu Globmustern findest du auf dem „[Filtermuster-Spickzettel](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)“.

Beispielsweise wird ein Workflow mit dem folgenden Trigger nur ausgeführt, wenn der Workflow namens `Build` in einem Branch namens `releases/` ausgeführt wird.

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
```

Beispielsweise wird ein Workflow mit dem folgenden Trigger nur ausgeführt, wenn der Workflow namens `Build` in einem Branch namens `canary` ausgeführt wird:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches-ignore:
      - "canary"
```

Du kannst die Filter `branches` und `branches-ignore` nicht für dasselbe Ereignis in einem Workflow nutzen. Wenn du Branch-Muster für ein einzelnes Ereignis sowohl einschließen als auch ausschließen möchtest, verwende den `branches`-Filter zusammen mit dem `!`-Zeichen, um die auszuschließenden Branches anzugeben.

Die Reihenfolge, in der du die Muster definierst, ist entscheidend.

- Ein passendes negatives Muster (Präfix `!`) nach einem positiven Abgleich schließt die Branch aus.
- Ein passendes positives Muster nach einem negativen Abgleich schließt die Branch wieder ein.

Beispielsweise wird ein Workflow mit dem folgenden Trigger nur ausgeführt, wenn der Workflow namens `Build` in einem Branch namens `releases/10` oder `releases/beta/mona`, aber nicht `releases/10-alpha`, `releases/beta/3-alpha` oder `main` ausgeführt wird.

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
