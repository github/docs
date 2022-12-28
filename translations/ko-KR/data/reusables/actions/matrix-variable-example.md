---
ms.openlocfilehash: 0e843d106ae2cdac0dbc2fc37baec5d035b6a3c2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114167"
---
이 예제에서 `node-version`에 대한 행렬 항목은 각각 `site` 환경 변수 및 `datacenter` 환경 변수에 서로 다른 값을 사용하도록 구성됩니다. 그런 다음, `Echo site details`이 단계는 {% raw %}`env: ${{ matrix.env }}`{% endraw %}를 사용하여 사용자 지정 변수를 참조합니다.

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
