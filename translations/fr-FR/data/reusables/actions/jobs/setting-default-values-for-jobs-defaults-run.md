---
ms.openlocfilehash: 95ea94c1f81a3b586d60d96dbd5a882dcdbe89fc
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103686"
---
Vous pouvez utiliser `defaults.run` afin de fournir les options `shell` et `working-directory` par défaut pour toutes les étapes [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) d’un workflow. Vous pouvez également définir pour `run` des paramètres par défaut qui sont disponibles uniquement pour un travail. Pour plus d’informations, consultez [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun). Vous ne pouvez pas utiliser de contextes ou d’expressions dans ce mot clé.

{% data reusables.actions.defaults-override %}

#### Exemple : Définir l’interpréteur de commandes et le répertoire de travail par défaut

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
