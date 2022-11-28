---
ms.openlocfilehash: 543455f8802e8e2c8b4dc60283c442a536476751
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103711"
---
Mit der Bedingung `jobs.<job_id>.if` kannst du dafür sorgen, dass ein Schritt nur ausgeführt wird, wenn eine Bedingung erfüllt ist. Du kannst eine Bedingung mit jedem unterstützten Kontext und Ausdruck erstellen.

{% data reusables.actions.expression-syntax-if %} Weitere Informationen findest du unter [Ausdrücke](/actions/learn-github-actions/expressions).

### Beispiel: Ausführen eines Auftrags nur für bestimmte Repositorys

In diesem Beispiel wird `if` verwendet, um zu steuern, wann der Auftrag `production-deploy` ausgeführt werden kann. Er wird nur ausgeführt, wenn das Repository `octo-repo-prod` heißt und sich innerhalb der Organisation `octo-org` befindet. Andernfalls wird der Auftrag als _übersprungen_ markiert.

```yaml{:copy}
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: github.repository == 'octo-org/octo-repo-prod'
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
```
