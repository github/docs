---
ms.openlocfilehash: 0e843d106ae2cdac0dbc2fc37baec5d035b6a3c2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114168"
---
В этом примере записи матрицы для `node-version` каждая из них настроена для использования различных значений для переменных среды `site` и `datacenter`. Затем шаг `Echo site details` использует {% raw %}`env: ${{ matrix.env }}`{% endraw %} для ссылки на пользовательские переменные:

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
