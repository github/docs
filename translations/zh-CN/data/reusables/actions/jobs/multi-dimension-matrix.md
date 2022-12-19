---
ms.openlocfilehash: 9a29d1039a0929c7366eeb4624e1fb6fb8a2e4f9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529334"
---
可以指定多个变量来创建多维矩阵。 将针对变量的每个可能组合运行作业。

例如，以下工作流指定两个变量：

- `os` 变量中指定的两个操作系统
- `version` 变量中指定的三个 Node.js 版本

工作流将运行六个作业，其中针对每个 `os` 和 `version` 变量组合提供一个作业。 每个作业都会将 `runs-on` 值设置为当前的 `os` 值，并将当前的 `version` 值传递给 `actions/setup-node` 操作。

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
