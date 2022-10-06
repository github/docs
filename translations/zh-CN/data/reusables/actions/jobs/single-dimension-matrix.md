---
ms.openlocfilehash: 00fcbabef5e440a27a495ab562cf7ccc43a7e030
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145098436"
---
可以指定单个变量来创建单维矩阵。

例如，以下工作流使用值 `[10, 12, 14]` 定义变量 `version`。 工作流将运行三个作业，其中针对变量中的每个值提供一个作业。 每个作业都会通过 `matrix.version` 上下文访问 `version` 值，并此值作为 `node-version` 传递给 `actions/setup-node` 操作。

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
