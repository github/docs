---
ms.openlocfilehash: 95ea94c1f81a3b586d60d96dbd5a882dcdbe89fc
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103687"
---
Du kannst `defaults.run` verwenden, um Standardoptionen für `shell` und `working-directory` für alle [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)-Schritte in einem Workflow bereitzustellen. Du kannst auch Standardeinstellungen für `run` festlegen, die nur für einen Auftrag verfügbar sind. Weitere Informationen findest du unter [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun). In diesem Schlüsselwort kannst Du keine Kontexte oder Ausdrücke verwenden.

{% data reusables.actions.defaults-override %}

#### Beispiel: Festlegen der Standardshell und des Arbeitsverzeichnisses

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
