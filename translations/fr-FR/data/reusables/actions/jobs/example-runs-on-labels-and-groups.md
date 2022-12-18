---
ms.openlocfilehash: 718f58c2013f7deda31fd2a300a5a2b3f7e4b5ec
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120909"
---
Quand vous combinez des groupes et des étiquettes, l’exécuteur doit satisfaire aux deux exigences pour pouvoir exécuter le travail.

Dans cet exemple, un groupe d’exécuteurs appelé `ubuntu-runners` est rempli avec des exécuteurs Ubuntu 16 cœurs, qui ont également reçu l’étiquette `ubuntu-20.04-16core`. La clé `runs-on` combine `group` et `labels` afin que le travail soit routé vers n’importe quel exécuteur disponible au sein du groupe qui a également une étiquette correspondante :

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
