---
ms.openlocfilehash: 718f58c2013f7deda31fd2a300a5a2b3f7e4b5ec
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120934"
---
Al combinar grupos y etiquetas, el ejecutor debe cumplir ambos requisitos para poder ejecutar el trabajo.

En este ejemplo, un grupo de ejecutores denominado `ubuntu-runners` se rellena con ejecutores de 16 núcleos de Ubuntu, a los que también se ha asignado la etiqueta `ubuntu-20.04-16core`. La clave `runs-on` combina `group` y `labels` para que el trabajo se enrute a cualquier ejecutor disponible dentro del grupo que también tenga una etiqueta coincidente:

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
