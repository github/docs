---
ms.openlocfilehash: a38aec9a1becf4c15877b2d3057d413b6d609f6c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880185"
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
