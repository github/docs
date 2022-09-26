---
ms.openlocfilehash: 543455f8802e8e2c8b4dc60283c442a536476751
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145094356"
---
Use o condicional `jobs.<job_id>.if` para impedir que um trabalho seja executado, a não ser que uma condição seja atendida. Você pode usar qualquer contexto e expressão compatível para criar uma condicional.

{% data reusables.actions.expression-syntax-if %} Para obter mais informações, confira "[Expressões](/actions/learn-github-actions/expressions)".

### Exemplo: Somente executar o trabalho para um repositório específico

Este exemplo usa `if` para controlar quando o trabalho `production-deploy` pode ser executado. Ele só será executado se o repositório for chamado `octo-repo-prod` e estiver na organização `octo-org`. Caso contrário, o trabalho será marcado como _ignorado_.

```yaml{:copy}
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: github.repository == 'octo-org/octo-repo-prod'
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
```
