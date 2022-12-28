---
ms.openlocfilehash: dae1f0d42b9b0b2e122bfcfc2a096d062efd8ee0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145103688"
---
Verwende `jobs.<job_id>.defaults.run`, um für alle `run`-Schritte im Auftrag eine Standardeinstellung für `shell` und `working-directory` bereitzustellen. Kontext und Ausdruck sind in diesem Abschnitt nicht zulässig.

Du kannst für `shell` und `working-directory` Standardoptionen für alle [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)-Schritte in einem Auftrag bereitstellen. Außerdem kannst du für den gesamten Workflow Standardeinstellungen für `run` festlegen. Weitere Informationen findest du unter [`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun). In diesem Schlüsselwort kannst Du keine Kontexte oder Ausdrücke verwenden.

{% data reusables.actions.defaults-override %}

#### Beispiel: Festlegen von Standardoptionen für den `run`-Schritt für einen Auftrag

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
