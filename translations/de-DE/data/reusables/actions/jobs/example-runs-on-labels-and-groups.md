---
ms.openlocfilehash: 718f58c2013f7deda31fd2a300a5a2b3f7e4b5ec
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120921"
---
Wenn du Gruppen und Bezeichnungen kombinierst, muss der Runner beide Anforderungen erfüllen, um zum Ausführen des Auftrags berechtigt zu sein.

In diesem Beispiel wird eine Runnergruppe namens `ubuntu-runners` mit Ubuntu 16-Core-Runnern aufgefüllt, denen zudem die Bezeichnung `ubuntu-20.04-16core` zugewiesen wurde. Der `runs-on`-Schlüssel kombiniert `group` und `labels`, sodass der Auftrag an einen beliebigen verfügbaren Runner innerhalb der Gruppe weitergeleitet wird, der auch eine übereinstimmende Bezeichnung aufweist:

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
