---
ms.openlocfilehash: 0e843d106ae2cdac0dbc2fc37baec5d035b6a3c2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145098434"
---
在此示例中，`node-version` 的每个矩阵条目都配置为对 `site` 和 `datacenter` 环境变量使用不同的值。 然后，`Echo site details` 步骤使用 {% raw %}`env: ${{ matrix.env }}`{% endraw %} 来引用自定义变量：

{% raw %}
```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
       include:
         - node-version: 10.x
           site: "prod"
           datacenter: "site-a"
         - node-version: 12.x
           site: "dev"
           datacenter: "site-b"
    steps:
      - name: Echo site details
        env:
          SITE: ${{ matrix.site }}
          DATACENTER: ${{ matrix.datacenter }}
        run: echo $SITE $DATACENTER
```
{% endraw %}
