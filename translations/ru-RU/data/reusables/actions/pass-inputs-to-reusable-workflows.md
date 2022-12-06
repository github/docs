---
ms.openlocfilehash: 0e043c5b9b4163a5d2c900188b5b98faeccfa786
ms.sourcegitcommit: 34a7be5cc8176dea971cbbdea77cbe7a3ff4fa65
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: "148009948"
---
Чтобы передать именованные входные данные в вызываемый рабочий процесс, используйте в задании ключевое слово `with`. Используйте ключевое слово `secrets` для передачи именованных секретов. Тип данных входного значения должен соответствовать типу, указанному в вызываемом рабочем процессе (логическое значение, число или строка).

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      config-path: .github/labeler.yml
    secrets:
      envPAT: ${{ secrets.envPAT }}
```
{% endraw %}

{% ifversion actions-inherit-secrets-reusable-workflows %} Рабочие процессы, вызывающие повторно используемые рабочие процессы в одной организации или предприятии, могут применять ключевое слово `inherit` для неявной передачи секретов.

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      config-path: .github/labeler.yml
    secrets: inherit
```
{% endraw %}

{%endif%}
