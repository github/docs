---
ms.openlocfilehash: ec9ff0fb1eb8f9fd06d4da13716b3e8e31a758e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145883581"
---
Use `jobs.<job_id>.needs` para identificar los trabajos que se deben completar correctamente antes de que se ejecute este trabajo. Puede ser una cadena o matriz de cadenas. Si un job falla, se saltarán todos los jobs que lo necesiten a menos de que éstos utilicen una expresión condicional que ocasione que el job continúe. Si una ejecución contiene una serie de trabajos que se necesitan entre sí, se aplica un error a todos los trabajos de la cadena de dependencias desde el punto de error en adelante.

#### Ejemplo: Requerir jobs dependientes exitosos 

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

En este ejemplo, `job1` se debe completar correctamente antes de que comience `job2` y `job3` espera a que se completen `job1` y `job2`.

En este ejemplo, los trabajos se ejecutan de manera secuencial:

1. `job1`
2. `job2`
3. `job3`

#### Ejemplo: No requerir jobs dependientes exitosos

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

En este ejemplo, `job3` usa la expresión condicional `always()` para que siempre se ejecute después de que se hayan completado `job1` y `job2`, independientemente de si se han realizado correctamente. Para más información, vea "[Expresiones](/actions/learn-github-actions/expressions#status-check-functions)".
