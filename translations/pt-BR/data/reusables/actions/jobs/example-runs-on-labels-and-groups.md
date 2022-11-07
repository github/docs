---
ms.openlocfilehash: 718f58c2013f7deda31fd2a300a5a2b3f7e4b5ec
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120903"
---
Quando você combina grupos e rótulos, o executor deve atender aos dois requisitos para ser qualificado para executar o trabalho.

Neste exemplo, um grupo de executores chamado `ubuntu-runners` é preenchido com executores Ubuntu de 16 núcleos, que também receberam o rótulo `ubuntu-20.04-16core`. A chave `runs-on` combina `group` e `labels` para que o trabalho seja roteado para qualquer executor disponível dentro do grupo que também tenha um rótulo correspondente:

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
