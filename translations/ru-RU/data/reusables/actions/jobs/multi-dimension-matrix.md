---
ms.openlocfilehash: 9a29d1039a0929c7366eeb4624e1fb6fb8a2e4f9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529339"
---
Для создания многомерной матрицы можно указать несколько переменных. Задание будет выполняться для каждой возможной комбинации переменных.

Например, для следующего рабочего процесса устанавливаются две переменные:

- Две операционные системы, указанные в переменной `os`
- Три версии Node.js, указанные в переменной `version`

Рабочий процесс будет выполнять шесть заданий, по одному для каждой комбинации переменных `os` и `version`. В каждом задании параметру `runs-on` присваивается текущее значение `os` и передается текущее значение `version` в действие `actions/setup-node`.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [ubuntu-22.04, ubuntu-20.04]
        version: [10, 12, 14]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
