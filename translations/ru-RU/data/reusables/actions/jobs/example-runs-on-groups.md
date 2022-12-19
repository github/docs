---
ms.openlocfilehash: 00f63e08cc047ce722f7a7172783c07e12344a87
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120940"
---
В этом примере средства выполнения тестов Ubuntu с 16 ядрами были добавлены в группу с именем `ubuntu-runners`. Ключ `runs-on` отправляет задание в любое доступное средство выполнения в `ubuntu-runners` группе:

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
