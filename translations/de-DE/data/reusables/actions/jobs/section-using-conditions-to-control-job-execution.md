---
ms.openlocfilehash: eb897a445a5e5a90014097ba76a5ecb095aa0bef
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: "148192066"
---
Mit der Bedingung `jobs.<job_id>.if` kannst du dafür sorgen, dass ein Schritt nur ausgeführt wird, wenn eine Bedingung erfüllt ist. {% data reusables.actions.if-supported-contexts %}

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
