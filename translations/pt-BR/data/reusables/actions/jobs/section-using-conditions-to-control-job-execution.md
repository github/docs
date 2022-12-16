---
ms.openlocfilehash: eb897a445a5e5a90014097ba76a5ecb095aa0bef
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/06/2022
ms.locfileid: "148192054"
---
Use o condicional `jobs.<job_id>.if` para impedir que um trabalho seja executado, a não ser que uma condição seja atendida. {% data reusables.actions.if-supported-contexts %}

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
