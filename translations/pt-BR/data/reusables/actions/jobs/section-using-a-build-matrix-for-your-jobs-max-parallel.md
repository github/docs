---
ms.openlocfilehash: 50b42f8e3c703723fc592bf63881c997e88b059c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094357"
---
Por padrão, o {% data variables.product.product_name %} maximizará o número de trabalhos executados em paralelo, dependendo da disponibilidade do executor. Para definir o número máximo de trabalhos que podem ser executados simultaneamente com uma estratégia de trabalho `matrix`, use `jobs.<job_id>.strategy.max-parallel`.

Por exemplo, o fluxo de trabalho a seguir executará no máximo dois trabalhos por vez, mesmo que haja executores disponíveis para executar todos os seis trabalhos ao mesmo tempo.

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
