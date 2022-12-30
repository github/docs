---
ms.openlocfilehash: dae1f0d42b9b0b2e122bfcfc2a096d062efd8ee0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145103689"
---
Utilisez `jobs.<job_id>.defaults.run` pour fournir le `shell` par défaut, et `working-directory` pour toutes les étapes `run` du travail. Le contexte et l’expression ne sont pas autorisés dans cette section.

Vous pouvez fournir des options `shell` et `working-directory` par défaut toutes les étapes [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) d’un travail. Vous pouvez également définir des paramètres par défaut de `run` pour l’ensemble du workflow. Pour plus d’informations, consultez [`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun). Vous ne pouvez pas utiliser de contextes ou d’expressions dans ce mot clé.

{% data reusables.actions.defaults-override %}

#### Exemple : Définition d’options d’étape `run` par défaut pour un travail

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
