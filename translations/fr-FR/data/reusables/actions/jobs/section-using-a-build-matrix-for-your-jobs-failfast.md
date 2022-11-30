---
ms.openlocfilehash: 61eae3ef1bfff1fc27fcfd45a693934155021a2a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145086314"
---
Vous pouvez contrôler la façon dont les échecs de travaux sont gérés avec `jobs.<job_id>.strategy.fail-fast` et `jobs.<job_id>.continue-on-error`.

`jobs.<job_id>.strategy.fail-fast` s’applique à l’ensemble de la matrice. Si `jobs.<job_id>.strategy.fail-fast` a la valeur `true`, {% data variables.product.product_name %} annule tous les travaux en cours et en file d’attente dans la matrice en cas d’échec d’un des travaux de la matrice. Cette propriété a la valeur par défaut `true`.

`jobs.<job_id>.continue-on-error` s’applique à un seul travail. Si `jobs.<job_id>.continue-on-error` a la valeur `true`, les autres travaux de la matrice continuent de s’exécuter même en cas d’échec du travail avec `jobs.<job_id>.continue-on-error: true`.

Vous pouvez utiliser `jobs.<job_id>.strategy.fail-fast` et `jobs.<job_id>.continue-on-error` ensemble. Par exemple, le workflow suivant démarre quatre travaux. Pour chaque travail, `continue-on-error` est déterminé par la valeur de `matrix.experimental`. En cas d’échec de l’un des travaux avec `continue-on-error: false`, tous les travaux en cours ou en file d’attente sont annulés. En cas d’échec du travail avec `continue-on-error: true`, les autres travaux ne sont pas affectés.


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
