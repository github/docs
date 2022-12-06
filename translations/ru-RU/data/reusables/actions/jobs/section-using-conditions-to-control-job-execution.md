---
ms.openlocfilehash: 543455f8802e8e2c8b4dc60283c442a536476751
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114232"
---
Условное выражение `jobs.<job_id>.if` можно использовать для предотвращения выполнения задания, если условие не выполняется. Для создания условного выражения можно использовать любой поддерживаемый контекст и любое выражение.

{% data reusables.actions.expression-syntax-if %} Дополнительные сведения см. в разделе [Выражения](/actions/learn-github-actions/expressions).

### Пример. Выполнение задания только для определенного репозитория

В этом примере используется `if` для управления выполнением задания `production-deploy`. Оно будет выполняться только в том случае, если репозиторий имеет имя `octo-repo-prod` и находится в организации `octo-org`. В противном случае задание будет отмечено как _пропущенное_.

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
