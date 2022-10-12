---
ms.openlocfilehash: a38aec9a1becf4c15877b2d3057d413b6d609f6c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880186"
---
若要移除矩阵中定义的特定配置，请使用 `jobs.<job_id>.strategy.matrix.exclude`。 排除的配置必须是部分匹配项，才能将其排除。 例如，以下工作流将运行 9 个作业：每 12 个配置一个作业，再减去一个与 `{os: macos-latest, version: 12, environment: production}` 匹配的排除作业，以及两个与 `{os: windows-latest, version: 16}` 匹配的排除作业。

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

注意：所有 `include` 组合会在 `exclude` 之后处理。 这允许你使用 `include` 添加回以前排除的组合。

{% endnote %}
