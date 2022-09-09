---
ms.openlocfilehash: 0e843d106ae2cdac0dbc2fc37baec5d035b6a3c2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114169"
---
En este ejemplo, las entradas de matriz de `node-version` se configuran a fin de usar otro valores para las variables de entorno `site` y `datacenter`. Después, el paso `Echo site details` usa {% raw %}`env: ${{ matrix.env }}`{% endraw %} para hacer referencia a las variables personalizadas:

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
