---
ms.openlocfilehash: 61eae3ef1bfff1fc27fcfd45a693934155021a2a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145084916"
---
你可以使用 `jobs.<job_id>.strategy.fail-fast` 和 `jobs.<job_id>.continue-on-error` 来控制如何处理作业失败。

`jobs.<job_id>.strategy.fail-fast` 适用于整个矩阵。 如果 `jobs.<job_id>.strategy.fail-fast` 设置为 `true`，则在矩阵中的任何作业失败的情况下，{% data variables.product.product_name %} 将取消矩阵中所有正在进行和加入队列的作业。 此属性的默认值为 `true`。

`jobs.<job_id>.continue-on-error` 适用于单个作业。 如果 `jobs.<job_id>.continue-on-error` 为 `true`，即使具有 `jobs.<job_id>.continue-on-error: true` 的作业失败，矩阵中的其他作业也将继续运行。

可以同时使用 `jobs.<job_id>.strategy.fail-fast` 和 `jobs.<job_id>.continue-on-error`。 例如，以下工作流将启动四个作业。 对于每个作业，`continue-on-error` 都由 `matrix.experimental` 的值确定。 如果任何具有 `continue-on-error: false` 的作业失败，所有正在进行或加入队列的作业都将被取消。 如果具有 `continue-on-error: true` 的作业失败，则其他作业将不会受到影响。


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
