---
ms.openlocfilehash: 61eae3ef1bfff1fc27fcfd45a693934155021a2a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145092084"
---
Puedes controlar cómo se manejan los errores de trabajo con `jobs.<job_id>.strategy.fail-fast` y `jobs.<job_id>.continue-on-error`.

`jobs.<job_id>.strategy.fail-fast` se aplica a toda la matriz. Si `jobs.<job_id>.strategy.fail-fast` se establece en `true`, {% data variables.product.product_name %} cancelará todos los trabajos en curso y en cola en la matriz si se produce un error de cualquiera de los trabajos de esta. El valor predeterminado de esta propiedad es `true`.

`jobs.<job_id>.continue-on-error` se aplica a un solo trabajo. Si `jobs.<job_id>.continue-on-error` es `true`, el resto de los trabajos de la matriz seguirán ejecutándose aunque se produzca un error en el trabajo con `jobs.<job_id>.continue-on-error: true`.

Puede usar `jobs.<job_id>.strategy.fail-fast` y `jobs.<job_id>.continue-on-error` de forma conjunta. Por ejemplo, el flujo de trabajo siguiente iniciará cuatro trabajos. En cada trabajo, `continue-on-error` se determina mediante el valor de `matrix.experimental`. Si se produce un error en alguno de los trabajos con `continue-on-error: false`, se cancelarán todos los trabajos en curso o en la cola. Si se produce un error en el trabajo con `continue-on-error: true`, el resto de trabajos no se verán afectados.


```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    continue-on-error: {% raw %}${{ matrix.experimental }}{% endraw %}
    strategy:
      fail-fast: true
      matrix:
        version: [6, 7, 8]
        experimental: [false]
        include:
          - version: 9
            experimental: true
```
