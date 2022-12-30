---
ms.openlocfilehash: d0e9408a29307848c49c9d0889c96b054e1d1222
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062166"
---
Por ejemplo, esta matriz ejecutará 10 trabajos, uno para cada combinación de `os` y `version` en la matriz, además de un trabajo para el valor `os` de `windows-latest` y el valor `version` de `17`.

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

Si no especificas ninguna variable de matriz, se ejecutarán todas las configuraciones de `include`. Por ejemplo, el siguiente flujo de trabajo ejecutaría dos trabajos, uno para cada entrada `include`. Esto permite aprovechar la estrategia de matriz sin tener una matriz totalmente rellenada.

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
