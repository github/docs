---
ms.openlocfilehash: c999fec9a5ab78a42f78c5d7312f54a62b81cbef
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883082"
---
例如，以下工作流将运行六个作业，其中针对每个 `os` 和 `node` 变量组合提供一个作业。 当对应于 `windows-latest` 的 `os` 值和 `16` 的 `node` 值的作业运行时，作业中将包含一个被称为 `npm` 且值为 `6` 的其他变量。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [windows-latest, ubuntu-latest]
        node: [12, 14, 16]
        include:
          - os: windows-latest
            node: 16
            npm: 6
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
      - if: {% raw %}${{ matrix.npm }}{% endraw %}
        run: npm install -g npm@{% raw %}${{ matrix.npm }}{% endraw %}
      - run: npm --version
```
