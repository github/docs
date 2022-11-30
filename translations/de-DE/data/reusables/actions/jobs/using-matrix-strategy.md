---
ms.openlocfilehash: 02f279903abd69f50ad55aa88462c9c8e4b9a1a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145091344"
---
Verwende `jobs.<job_id>.strategy.matrix`, um eine Matrix verschiedener Auftragskonfigurationen zu definieren. Definiere innerhalb der Matrix eine oder mehrere Variablen, gefolgt von einem Array an Werten. Die folgende Matrix verfügt beispielsweise über eine Variable namens `version` mit dem Wert `[10, 12, 14]` und über eine Variable namens `os` mit dem Wert `[ubuntu-latest, windows-latest]`:

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

Für jede mögliche Kombination der Variablen wird ein Auftrag ausgeführt. In diesem Beispiel führt der Workflow sechs Aufträge aus: einen für jede Kombination der Variablen `os` und `version`. 

Standardmäßig maximiert {% data variables.product.product_name %} die Anzahl der parallel ausgeführten Aufträge basierend auf der Runnerverfügbarkeit. Die Reihenfolge der Variablen in der Matrix bestimmt die Reihenfolge, in der die Aufträge erstellt werden. Die erste Variable, die du definierst, entspricht dem ersten Auftrag, der in deiner Workflowausführung erstellt wird. Die Matrix oben erstellt die Aufträge beispielsweise in der folgenden Reihenfolge:

- `{version: 10, os: ubuntu-latest}`
- `{version: 10, os: windows-latest}`
- `{version: 12, os: ubuntu-latest}`
- `{version: 12, os: windows-latest}`
- `{version: 14, os: ubuntu-latest}`
- `{version: 14, os: windows-latest}`

Eine Matrix generiert maximal 256 Aufträge pro Workflowausführung. Dieser Grenzwert gilt sowohl für von {% data variables.product.product_name %} gehostete als auch selbstgehostete Runner.

Die von dir definierten Variablen werden zu Eigenschaften im `matrix`-Kontext, und du kannst in anderen Bereichen deiner Workflowdatei auf die Eigenschaft verweisen. In diesem Beispiel kannst du `matrix.version` und `matrix.os` verwenden, um auf die aktuellen Werte von `version` und `os` zuzugreifen, die der Auftrag nutzt. Weitere Informationen findest du unter [Kontexte](/actions/learn-github-actions/contexts).
