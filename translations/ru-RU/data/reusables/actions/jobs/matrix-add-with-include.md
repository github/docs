---
ms.openlocfilehash: d0e9408a29307848c49c9d0889c96b054e1d1222
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062165"
---
Например, в этой матрице будет выполняться 10 заданий, по одному для каждого сочетания `os` и `version` в матрице, а также еще одно задание для `windows-latest` со значением `os` и `17` со значением `version`.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [macos-latest, windows-latest, ubuntu-latest]
        version: [12, 14, 16]
        include:
          - os: windows-latest
            version: 17
```

Если не указать переменные матрицы, будут выполняться все конфигурации в `include`. Например, следующий рабочий процесс выполнит два задания, по одному для каждого элемента `include`. Это позволяет использовать не полностью заполненную матрицу.

```yaml
jobs:
  includes_only:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        include:
          - site: "production"
            datacenter: "site-a"
          - site: "staging"
            datacenter: "site-b"

```
