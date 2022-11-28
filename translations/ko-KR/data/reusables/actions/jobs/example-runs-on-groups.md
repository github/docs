---
ms.openlocfilehash: 00f63e08cc047ce722f7a7172783c07e12344a87
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120930"
---
이 예제에서는 Ubuntu 16코어 실행기가 라는 `ubuntu-runners`그룹에 추가되었습니다. 키는 `runs-on` 그룹의 사용 가능한 `ubuntu-runners` 실행기에 작업을 보냅니다.

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: 
      group: ubuntu-runners
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```
