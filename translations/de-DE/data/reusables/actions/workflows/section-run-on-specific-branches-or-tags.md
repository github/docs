---
ms.openlocfilehash: 4e50754bfa8075681d503e689df630855eedbbab
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089107"
---

Wenn du das `push`-Ereignis verwendest, kannst du einen Workflow so konfigurieren, dass er auf bestimmten Branches oder Tags ausgeführt wird.

Verwende den Filter `branches`, wenn du Branchnamenmuster entweder einschließen oder ein- und ausschließen möchtest. Verwende den Filter `branches-ignore`, wenn du Branchnamenmuster nur ausschließen möchtest. Du kannst die Filter `branches` und `branches-ignore` nicht für dasselbe Ereignis in einem Workflow nutzen.

Verwende den Filter `tags`, wenn du Tagnamenmuster entweder einschließen oder ein- und ausschließen möchtest. Verwende den Filter `tags-ignore`, wenn du Tagnamenmuster nur ausschließen möchtest. Du kannst die Filter `tags` und `tags-ignore` nicht für dasselbe Ereignis in einem Workflow nutzen.

Wenn du nur `tags`/`tags-ignore` oder nur `branches`/`branches-ignore` definierst, wird der Workflow nicht für Ereignisse ausgeführt, die sich auf die nicht definierten Git-Verweise auswirken. Wenn du weder `tags`/`tags-ignore` noch `branches`/`branches-ignore` definierst, wird der Workflow für Ereignisse ausgeführt, die sich entweder auf Branches oder Tags auswirken. Wenn du sowohl `branches`/`branches-ignore` als auch [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore) definierst, wird der Workflow nur ausgeführt, wenn beide Filter zutreffen.

Die Schlüsselwörter `branches`, `branches-ignore`, `tags` und `tags-ignore` akzeptieren Globmuster, die die Zeichen `*`, `**`, `+`, `?`, `!` etc. verwenden, um mehr als einem Branch- oder Tagnamen zu entsprechen. Wenn ein Name eines dieser Zeichen enthält und du eine genaue Übereinstimmung möchtest, musst du jedes dieser Sonderzeichen mit `\` *versehen*. Weitere Informationen zu Globmustern findest du im [Spickzettel zu Filtermustern](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

#### Beispiel: Einschließen von Branches und Tags

Die in `branches` und `tags` definierten Muster werden anhand des Namens des Git-Verweises ausgewertet. Der folgende Workflow wird beispielsweise jedes Mal ausgeführt, wenn ein `push`-Ereignis an folgende Instanzen ausgeführt wird:

- Ein Branch namens `main` (`refs/heads/main`)
- Ein Branch namens `mona/octocat` (`refs/heads/mona/octocat`)
- Ein Branch, dessen Name mit `releases/` beginnt, wie `releases/10` (`refs/heads/releases/10`)
- Ein Tag namens `v2` (`refs/tags/v2`)
- Ein Tag, dessen Name mit `v1.` beginnt, wie `v1.9.1` (`refs/tags/v1.9.1`)

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
    # Sequence of patterns matched against refs/tags
    tags:        
      - v2
      - v1.*
```

#### Beispiel: Ausschließen von Branches und Tags

Wenn ein Muster dem Muster `branches-ignore` oder `tags-ignore` entspricht, wird der Workflow nicht ausgeführt. Die in `branches` und `tags` definierten Muster werden anhand des Namens des Git-Verweises ausgewertet. Der folgende Workflow wird beispielsweise immer dann ausgeführt, wenn ein `push`-Ereignis auftritt, es sei denn, das `push`-Ereignis wird an folgende Instanzen ausgeführt:

- Ein Branch namens `mona/octocat` (`refs/heads/mona/octocat`)
- Ein Branch, dessen Name mit `releases/**-alpha` übereinstimmt, wie `beta/3-alpha` (`refs/releases/beta/3-alpha`)
- Ein Tag namens `v2` (`refs/tags/v2`)
- Ein Tag, dessen Name mit `v1.` beginnt, wie `v1.9` (`refs/tags/v1.9`)

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
    # Sequence of patterns matched against refs/tags
    tags-ignore:        
      - v2
      - v1.*
```

#### Beispiel: Einschließen und Ausschließen von Branches und Tags

Du kannst `branches` und `branches-ignore` nicht verwenden, um dasselbe Ereignis in einem einzigen Workflow zu filtern. Ebenso kannst du `tags` und `tags-ignore` nicht verwenden, um dasselbe Ereignis in einem einzigen Workflow zu filtern. Wenn du Branch- oder Tagmuster für ein einzelnes Ereignis sowohl einschließen als auch ausschließen möchtest, verwende den Filter `branches` oder `tags` zusammen mit dem Zeichen `!`, um die auszuschließenden Branches und Tags anzugeben.

Wenn du einen Branch mit dem Zeichen `!` definierst, musst du auch mindestens einen Branch ohne das Zeichen `!` definieren. Wenn du nur Branches ausschließen möchtest, verwende stattdessen `branches-ignore`. Wenn du ebenfalls einen Tag mit dem Zeichen `!` definierst, musst du auch mindestens einen Tag ohne das Zeichen `!` definieren. Wenn du nur Tags ausschließen möchtest, verwende stattdessen `tags-ignore`.

Die Reihenfolge, in der Du die Muster definierst, ist entscheidend.

- Ein passendes negatives Muster (mit dem Präfix `!`) nach einer positiven Übereinstimmung schließt den Verweis auf Git aus.
- Ein übereinstimmendes positives Muster nach einem negativen Abgleich schließt die Git-Ref wieder ein.

Der folgenden Workflow führt Pushes an `releases/10` oder `releases/beta/mona` aus, aber nicht an `releases/10-alpha` oder `releases/beta/3-alpha`, da das negative Muster `!releases/**-alpha` dem positiven Muster folgt.

```yaml
on:
  push:
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
