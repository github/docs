---
ms.openlocfilehash: a38aec9a1becf4c15877b2d3057d413b6d609f6c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065430"
---
Para remover configurações específicas definidas na matriz, use `jobs.<job_id>.strategy.matrix.exclude`. Uma configuração excluída só precisa ser uma correspondência parcial para que ela seja excluída. Por exemplo, o fluxo de trabalho a seguir executará nove trabalhos: um trabalho para cada uma das 12 configurações, menos o trabalho excluído correspondente `{os: macos-latest, version: 12, environment: production}`e os dois trabalhos excluídos correspondentes `{os: windows-latest, version: 16}`.

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

**Observação:** todas as combinações de `include` são processadas após `exclude`. Isso permite que você use `include` para adicionar combinações anteriores que já foram excluídas.

{% endnote %}
