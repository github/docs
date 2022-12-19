---
ms.openlocfilehash: 9a9d2b4deb488e7b8fa5f0df2377e7d5ca57d194
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884440"
---
Контексты можно использовать для создания матриц. Дополнительные сведения о контекстах см. в разделе [Контексты](/actions/learn-github-actions/contexts).

Например, следующий рабочий процесс активирует событие `repository_dispatch` и использует сведения из его полезных данных для построения матрицы. При создании события диспетчеризации репозитория с полезными данными, как показано ниже, переменная `version` матрицы будет иметь значение `[12, 14, 16]`. Дополнительные сведения о триггере `repository_dispatch` см. в разделе [События, активирующие рабочие процессы](/actions/using-workflows/events-that-trigger-workflows#repository_dispatch).

```json
{
  "event_type": "test",
  "client_payload": {
    "versions": [12, 14, 16]
  }
}
```

```yaml
on:
  repository_dispatch:
    types:
      - test
 
jobs:
  example_matrix:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        version: {% raw %}${{ github.event.client_payload.versions }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
