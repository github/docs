---
ms.openlocfilehash: 02f279903abd69f50ad55aa88462c9c8e4b9a1a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145087287"
---
使用 `jobs.<job_id>.strategy.matrix` 定义不同作业配置的矩阵。 在矩阵中，定义一个或多个变量，后跟一个值数组。 例如，以下矩阵有一个称为 `version` 的变量，其值为 `[10, 12, 14]` ，以及一个称为 `os` 的变量，其值为 `[ubuntu-latest, windows-latest]`：

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

将针对变量的每个可能组合运行作业。 在此示例中，工作流将运行六个作业，其中一个作业用于每个 `os` 和 `version` 变量组合。 

默认情况下，{% data variables.product.product_name %} 将根据运行器的可用性最大程度地增加并行运行的作业数量。 矩阵中变量的顺序决定了作业的创建顺序。 定义的第一个变量将是在工作流运行中创建的第一个作业。 例如，上述矩阵将按以下顺序创建作业：

- `{version: 10, os: ubuntu-latest}`
- `{version: 10, os: windows-latest}`
- `{version: 12, os: ubuntu-latest}`
- `{version: 12, os: windows-latest}`
- `{version: 14, os: ubuntu-latest}`
- `{version: 14, os: windows-latest}`

矩阵在每次工作流运行时最多将生成 256 个作业。 此限制适用于 {% data variables.product.product_name %} 托管和自托管运行器。

定义的变量将成为 `matrix` 上下文中的属性，你可以在工作流文件的其他区域中引用该属性。 在此示例中，可以使用 `matrix.version` 和 `matrix.os` 来访问作业正在使用的 `version` 和 `os` 的当前值。 有关详细信息，请参阅“[上下文](/actions/learn-github-actions/contexts)”。
