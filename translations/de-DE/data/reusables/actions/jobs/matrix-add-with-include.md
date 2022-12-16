---
ms.openlocfilehash: d0e9408a29307848c49c9d0889c96b054e1d1222
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062162"
---
Diese Matrix führt beispielsweise zehn Aufträge aus, einen für jede Kombination von `os` und `version` in der Matrix sowie einen Auftrag für den Wert `os` von `windows-latest` und den Wert `version` von `17`.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [macos-latest, windows-latest, ubuntu-latest]
        version: [12, 14, 16]
        include:
          - os: windows-latest
            version: 17
```

Wenn du keine Matrixvariablen angibst, werden alle Konfigurationen unter `include` ausgeführt. Der folgende Workflow würde beispielsweise zwei Aufträge ausführen, einen für jeden `include`-Eintrag. Auf diese Weise kannst du die Matrixstrategie nutzen, ohne eine vollständig ausgefüllte Matrix zu haben.

```yaml
jobs:
  includes_only:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        include:
          - site: "production"
            datacenter: "site-a"
          - site: "staging"
            datacenter: "site-b"

```
