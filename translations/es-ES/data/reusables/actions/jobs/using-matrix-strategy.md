---
ms.openlocfilehash: 02f279903abd69f50ad55aa88462c9c8e4b9a1a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145093112"
---
Use `jobs.<job_id>.strategy.matrix` definir una matriz de diferentes configuraciones de trabajo. En la matriz, define una o más variables seguidas de una matriz de valores. Por ejemplo, la matriz siguiente tiene una variable llamada `version` con el valor `[10, 12, 14]` y una variable llamada `os` con el valor `[ubuntu-latest, windows-latest]`:

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

Se ejecutará un trabajo para cada combinación posible de las variables. En este ejemplo, el flujo de trabajo ejecutará seis trabajos, uno por cada combinación de las variables `os` y `version`. 

De forma predeterminada, {% data variables.product.product_name %} maximizará el número de trabajos ejecutados en paralelo en función de la disponibilidad del ejecutor. El orden de las variables de la matriz determina el orden en el que se crean los trabajos. La primera variable que definas será el primer trabajo que se cree en tu ejecución de flujo de trabajo. Por ejemplo, la matriz anterior creará los trabajos en el orden siguiente:

- `{version: 10, os: ubuntu-latest}`
- `{version: 10, os: windows-latest}`
- `{version: 12, os: ubuntu-latest}`
- `{version: 12, os: windows-latest}`
- `{version: 14, os: ubuntu-latest}`
- `{version: 14, os: windows-latest}`

Una matriz puede generar un máximo de 256 trabajos por ejecución de flujo de trabajo. Este límite se aplica tanto a los ejecutores autohospedados como a los hospedados por {% data variables.product.product_name %}.

Las variables que defines se convierten en propiedades en el contexto de `matrix` y puedes hacer referencia a la propiedad en otras áreas del archivo de flujo de trabajo. En este ejemplo, puedes usar `matrix.version` y `matrix.os` para acceder al valor actual de `version` y `os` que el trabajo utiliza. Para más información, vea "[Contextos](/actions/learn-github-actions/contexts)".
