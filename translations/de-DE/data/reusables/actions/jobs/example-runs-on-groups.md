---
ms.openlocfilehash: 00f63e08cc047ce722f7a7172783c07e12344a87
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120928"
---
In diesem Beispiel wurden Ubuntu 16-Core-Runner zu einer Gruppe namens `ubuntu-runners` hinzugefügt. Der `runs-on`-Schlüssel sendet den Auftrag an einen beliebigen verfügbaren Runner in der Gruppe `ubuntu-runners`:

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
