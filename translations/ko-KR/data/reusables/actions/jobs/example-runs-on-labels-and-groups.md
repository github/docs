---
ms.openlocfilehash: 718f58c2013f7deda31fd2a300a5a2b3f7e4b5ec
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120919"
---
그룹과 레이블을 결합할 때 실행기는 작업을 실행할 수 있도록 두 요구 사항을 모두 충족해야 합니다.

이 예제에서 라는 `ubuntu-runners` 실행기 그룹은 레이블 `ubuntu-20.04-16core`도 할당된 Ubuntu 16코어 실행기로 채워집니다. 키는 `runs-on` 및 `labels` 를 `group` 결합하여 일치하는 레이블이 있는 그룹 내에서 사용 가능한 모든 실행기로 작업이 라우팅되도록 합니다.

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      group: ubuntu-runners
      labels: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```
