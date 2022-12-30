---
ms.openlocfilehash: 61eae3ef1bfff1fc27fcfd45a693934155021a2a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089482"
---
Можно управлять обработкой сбоев заданий с помощью `jobs.<job_id>.strategy.fail-fast` и `jobs.<job_id>.continue-on-error`.

`jobs.<job_id>.strategy.fail-fast` применяется ко всему тому. Если `jobs.<job_id>.strategy.fail-fast` задано значение `true`, {% data variables.product.product_name %} отменяет все выполняемые и помещенные в очередь задания в матрице, когда какое-либо задание в матрице завершается сбоем. По умолчанию свойство имеет значение `true`.

`jobs.<job_id>.continue-on-error` применяется к одному заданию. Если `jobs.<job_id>.continue-on-error` имеет значение `true`, другие задания в матрице будут продолжать выполняться, даже если задание с `jobs.<job_id>.continue-on-error: true` завершается сбоем.

Можно использовать `jobs.<job_id>.strategy.fail-fast` и `jobs.<job_id>.continue-on-error` совместно. Например, следующий рабочий процесс запустит четыре задания. Для каждого задания `continue-on-error` определяется значением `matrix.experimental`. При сбое любого из заданий с `continue-on-error: false` все выполняемые или помещенные в очередь задания будут отменены. При сбое задания с `continue-on-error: true` другие задания не будут затронуты.


```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    continue-on-error: {% raw %}${{ matrix.experimental }}{% endraw %}
    strategy:
      fail-fast: true
      matrix:
        version: [6, 7, 8]
        experimental: [false]
        include:
          - version: 9
            experimental: true
```
