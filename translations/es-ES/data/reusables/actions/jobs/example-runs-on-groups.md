---
ms.openlocfilehash: 00f63e08cc047ce722f7a7172783c07e12344a87
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120941"
---
En este ejemplo, se han agregado ejecutores de 16 núcleos de Ubuntu a un grupo denominado `ubuntu-runners`. La clave `runs-on` envía el trabajo a cualquier ejecutor disponible del grupo `ubuntu-runners`:

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
