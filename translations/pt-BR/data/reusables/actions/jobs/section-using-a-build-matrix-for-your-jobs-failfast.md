---
ms.openlocfilehash: 61eae3ef1bfff1fc27fcfd45a693934155021a2a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145083894"
---
Você pode controlar como as falhas de trabalho são tratadas com `jobs.<job_id>.strategy.fail-fast` e `jobs.<job_id>.continue-on-error`.

`jobs.<job_id>.strategy.fail-fast` aplica-se a toda a matriz. Se `jobs.<job_id>.strategy.fail-fast` estiver definido como `true`, {% data variables.product.product_name %} cancelará todos os trabalhos em andamento e enfileirados na matriz se algum trabalho na matriz falhar. Essa propriedade tem como padrão `true`.

`jobs.<job_id>.continue-on-error` aplica-se a um único trabalho. Se `jobs.<job_id>.continue-on-error` for `true`, outros trabalhos na matriz continuarão em execução mesmo que o trabalho com `jobs.<job_id>.continue-on-error: true` falhe.

Você não pode usar `jobs.<job_id>.strategy.fail-fast` e `jobs.<job_id>.continue-on-error` juntos. Por exemplo, o fluxo de trabalho a seguir iniciará quatro trabalhos. Para cada trabalho, `continue-on-error` é determinado pelo valor de `matrix.experimental`. Se algum dos trabalhos com `continue-on-error: false` falhar, todos os trabalhos em andamento ou enfileirados serão cancelados. Se o trabalho com `continue-on-error: true` falhar, os outros trabalhos não serão afetados.


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
