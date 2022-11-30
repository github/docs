---
ms.openlocfilehash: f51b958c86c6ede52591986f9d208864612047db
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065433"
---
### Especificando a versão e a arquitetura da JVM

O fluxo de trabalho inicial configura o `PATH` para conter OpenJDK 8 para a plataforma x64. Se você quiser usar uma versão diferente do Java, ou escolher uma arquitetura diferente (`x64` ou `x86`), você pode usar a ação `setup-java` para escolher um ambiente de execução Java diferente.

Por exemplo, para usar a versão 11 do JDK fornecida pelo Adoptium para a plataforma x64, você poderá usar a ação `setup-java` e configurar os parâmetros `java-version`, `distribution` e `architecture` para `'11'`, `'adopt'` e `x64`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11 for x64
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
      architecture: x64
```

Para obter mais informações, confira a ação [`setup-java`](https://github.com/actions/setup-java).
