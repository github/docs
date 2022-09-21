---
ms.openlocfilehash: 543455f8802e8e2c8b4dc60283c442a536476751
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114233"
---
Puede usar el condicional `jobs.<job_id>.if` para impedir que se ejecute una tarea si no se cumple una condición. Puedes usar cualquier contexto y expresión admitidos para crear un condicional.

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
