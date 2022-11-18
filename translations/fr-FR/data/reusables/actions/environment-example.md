---
ms.openlocfilehash: 4795fdc557dbb103d64f7b97d0fa58f445434bca
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103802"
---
Vous pouvez spécifier un environnement pour chacun des travaux de votre workflow. Pour ce faire, ajoutez une clé `jobs.<job_id>.environment` suivie du nom de l’environnement.

Par exemple, ce workflow utilise un environnement appelé `production`.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Lorsque le workflow ci-dessus s’exécute, le travail `deployment` est soumis à toutes les règles configurées pour l’environnement `production`. Par exemple, si l’environnement nécessite des réviseurs, le travail s’interrompt jusqu’à ce que l’un des réviseurs approuve le travail.

Vous pouvez également spécifier une URL pour l’environnement. L’URL spécifiée apparaît sur la page des déploiements du référentiel (accessible en cliquant sur **Environnements** sur la page d’accueil de votre référentiel) et dans le graphique de visualisation de l’exécution du workflow. Si une demande de tirage (pull request) a déclenché le workflow, l’URL apparaît également sous forme de bouton **Afficher le déploiement** dans la chronologie de la demande de tirage.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: 
      name: production
      url: https://github.com
    steps:
      - name: deploy
        # ...deployment-specific steps
```

![Graphique de workflow avec URL](/assets/images/help/images/deploy-graph.png)
