---
ms.openlocfilehash: 50b42f8e3c703723fc592bf63881c997e88b059c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145098451"
---
默认情况下，{% data variables.product.product_name %} 将根据运行器的可用性将并行运行的作业数最大化。 若要设置使用 `matrix` 作业策略时可以同时运行的最大作业数，请使用 `jobs.<job_id>.strategy.max-parallel`。

例如，以下工作流一次最多运行两个作业，即使运行器可同时运行六个作业。

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
