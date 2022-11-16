---
ms.openlocfilehash: a38aec9a1becf4c15877b2d3057d413b6d609f6c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880191"
---
Чтобы удалить конкретные конфигурации, определенные в матрице, используйте `jobs.<job_id>.strategy.matrix.exclude`. Исключенная конфигурация должна иметь хотя бы частичное совпадение, чтобы ее можно было исключить. Например, следующий рабочий процесс будет выполнять девять заданий: одно задание для каждой из 12 конфигураций, минус одно исключенное задание, которое совпадает с `{os: macos-latest, version: 12, environment: production}`, и два исключенных задания, которые совпадают с `{os: windows-latest, version: 16}`.

```yaml
strategy:
  matrix:
    os: [macos-latest, windows-latest]
    version: [12, 14, 16]
    environment: [staging, production]
    exclude:
      - os: macos-latest
        version: 12
        environment: production
      - os: windows-latest
        version: 16
runs-on: {% raw %}${{ matrix.os }}{% endraw %}
```

{% note %}

**Примечание.** Все комбинации `include` обрабатываются после `exclude`. Это позволяет использовать `include` для добавления обратных комбинаций, которые были ранее исключены.

{% endnote %}
