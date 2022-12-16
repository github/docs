---
ms.openlocfilehash: eb897a445a5e5a90014097ba76a5ecb095aa0bef
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/06/2022
ms.locfileid: "148192057"
---
Vous pouvez utiliser le `jobs.<job_id>.if` conditionnel pour empêcher l’exécution d’un travail, sauf si une condition est remplie. {% data reusables.actions.if-supported-contexts %}

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
