---
ms.openlocfilehash: eb897a445a5e5a90014097ba76a5ecb095aa0bef
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/06/2022
ms.locfileid: "148192068"
---
Puede usar el condicional `jobs.<job_id>.if` para impedir que se ejecute una tarea si no se cumple una condición. {% data reusables.actions.if-supported-contexts %}

{% data reusables.actions.expression-syntax-if %} Para más información, vea "[Expresiones](/actions/learn-github-actions/expressions)".

### Ejemplo: Solo ejecutar un job para un repositorio específico

En este ejemplo se usa `if` para controlar cuándo se puede ejecutar el trabajo `production-deploy`. Solo se ejecutará si el repositorio se denomina `octo-repo-prod` y está dentro de la organización `octo-org`. De lo contrario, el trabajo se marcará como _omitido_.

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
