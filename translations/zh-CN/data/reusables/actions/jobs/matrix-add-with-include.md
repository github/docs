---
ms.openlocfilehash: d0e9408a29307848c49c9d0889c96b054e1d1222
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062160"
---
例如，此矩阵将运行 10 个作业，矩阵中每个 `os` 和 `version` 的组合一个作业，再加上一个用于 `windows-latest` 的 `os` 值和 `17` 的 `version` 值的作业。

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

如果未指定任何矩阵变量，则运行 `include` 下的所有配置。 例如，以下工作流将运行两个作业，每个 `include` 一个作业。 这样你可以利用矩阵策略，而无需完全填充矩阵。

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
