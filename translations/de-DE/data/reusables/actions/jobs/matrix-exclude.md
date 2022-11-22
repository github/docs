---
ms.openlocfilehash: a38aec9a1becf4c15877b2d3057d413b6d609f6c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880188"
---
Um bestimmte Konfigurationen zu entfernen, die in der Matrix definiert sind, verwende `jobs.<job_id>.strategy.matrix.exclude`. Eine ausgeschlossene Konfiguration muss nur eine teilweise Übereinstimmung sein, damit sie ausgeschlossen werden kann. Der folgende Workflow führt z. B. neun Aufträge aus: ein Auftrag für jede der 12 Konfigurationen, minus der ausgeschlossenen Aufgabe, die mit `{os: macos-latest, version: 12, environment: production}` übereinstimmt, und die beiden ausgeschlossenen Aufträge, die mit `{os: windows-latest, version: 16}` übereinstimmen.

```yaml
strategy:
  matrix:
    os: [macos-latest, windows-latest]
    version: [12, 14, 16]
    environment: [staging, production]
    exclude:
      - os: macos-latest
        version: 12
        environment: production
      - os: windows-latest
        version: 16
runs-on: {% raw %}${{ matrix.os }}{% endraw %}
```

{% note %}

**Hinweis:** Alle `include`-Kombinationen werden nach `exclude` verarbeitet. So kannst du mit `include` wieder Kombinationen hinzufügen, die zuvor ausgeschlossen waren.

{% endnote %}
