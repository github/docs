---
ms.openlocfilehash: 00fcbabef5e440a27a495ab562cf7ccc43a7e030
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114176"
---
Можно указать одну переменную для создания одномерной матрицы.

Например, следующий рабочий процесс определяет переменную `version` со значениями `[10, 12, 14]`. Рабочий процесс будет выполнять три задания, по одному для каждого значения в переменной. Каждое задание будет получать доступ к значению `version` через контекст `matrix.version` и передавать значение `node-version` в действие `actions/setup-node`.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
