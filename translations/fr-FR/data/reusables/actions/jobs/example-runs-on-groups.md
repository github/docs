---
ms.openlocfilehash: 00f63e08cc047ce722f7a7172783c07e12344a87
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120931"
---
Dans cet exemple, des exécuteurs Ubuntu 16 cœurs ont été ajoutés à un groupe appelé `ubuntu-runners`. La clé `runs-on` envoie le travail à n’importe quel exécuteur disponible dans le groupe `ubuntu-runners` :

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
