---
ms.openlocfilehash: a38aec9a1becf4c15877b2d3057d413b6d609f6c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880192"
---
Para quitar configuraciones específicas definidas en la matriz, usa `jobs.<job_id>.strategy.matrix.exclude`. Una configuración excluida solo debe ser una coincidencia parcial para que se excluya. Por ejemplo, el siguiente flujo de trabajo ejecutará nueve trabajos: un trabajo para cada una de las 12 configuraciones menos el trabajo excluido que coincide con `{os: macos-latest, version: 12, environment: production}` y los dos trabajos excluidos que coinciden con `{os: windows-latest, version: 16}`.

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

**Nota:** Todas las combinaciones de `include` se procesan después de `exclude`. Esto le permite usar `include` para volver a agregar combinaciones previamente excluidas.

{% endnote %}
