---
ms.openlocfilehash: eb897a445a5e5a90014097ba76a5ecb095aa0bef
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/06/2022
ms.locfileid: "148192063"
---
Условное выражение `jobs.<job_id>.if` можно использовать для предотвращения выполнения задания, если условие не выполняется. {% data reusables.actions.if-supported-contexts %}

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
