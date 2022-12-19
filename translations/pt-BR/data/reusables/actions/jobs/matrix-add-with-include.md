---
ms.openlocfilehash: d0e9408a29307848c49c9d0889c96b054e1d1222
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147062159"
---
Por exemplo, essa matriz executará dez trabalhos, um para cada combinação de `os` e `version` na matriz, além de um trabalho para o valor `os` de `windows-latest` e o valor `version` de `17`.

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

Se você não especificar nenhuma variável de matriz, todas as configurações abaixo de `include` serão executadas. Por exemplo, o fluxo de trabalho a seguir executaria dois trabalhos, um para cada entrada `include`. Isso permite que você aproveite a estratégia de matriz sem ter uma matriz totalmente populada.

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
