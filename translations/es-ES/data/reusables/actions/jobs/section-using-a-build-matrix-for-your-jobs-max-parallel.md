---
ms.openlocfilehash: 50b42f8e3c703723fc592bf63881c997e88b059c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114234"
---
De forma predeterminada, {% data variables.product.product_name %} maximizará el número de trabajos ejecutados en paralelo en función de la disponibilidad del ejecutor. Para establecer el número máximo de trabajos que se pueden ejecutar simultáneamente al usar una estrategia de trabajo `matrix`, usa `jobs.<job_id>.strategy.max-parallel`.

Por ejemplo, el siguiente flujo de trabajo ejecutará un máximo de dos trabajos a la vez, incluso si hay ejecutores disponibles para ejecutar los seis trabajos a la vez.

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
