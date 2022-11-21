---
ms.openlocfilehash: 543455f8802e8e2c8b4dc60283c442a536476751
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103710"
---
Vous pouvez utiliser le `jobs.<job_id>.if` conditionnel pour empêcher l’exécution d’un travail, sauf si une condition est remplie. Vous pouvez utiliser n’importe quel contexte et n’importe quelle expression pris en charge pour créer une condition.

{% data reusables.actions.expression-syntax-if %} Pour plus d’informations, consultez « [Expressions](/actions/learn-github-actions/expressions) ».

### Exemple : Exécuter un travail uniquement pour un dépôt spécifique

Cet exemple utilise `if` pour contrôler le moment où le travail `production-deploy` peut s’exécuter. Il s’exécute uniquement si le dépôt se nomme `octo-repo-prod`, et s’il se trouve dans l’organisation `octo-org`. Sinon, le travail est marqué comme étant _ignoré_.

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
