---
ms.openlocfilehash: 50b42f8e3c703723fc592bf63881c997e88b059c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114235"
---
По умолчанию {% data variables.product.product_name %} максимизирует количество параллельно выполняемых заданий в зависимости от доступности средства выполнения. Для настройки максимального числа заданий, которые могут выполняться одновременно при применении стратегии задания `matrix`, используйте `jobs.<job_id>.strategy.max-parallel`.

Например, следующий рабочий процесс будет выполнять не более двух заданий одновременно, даже если для одновременного выполнения всех шести заданий доступны средства выполнения.

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
