---
ms.openlocfilehash: 4795fdc557dbb103d64f7b97d0fa58f445434bca
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103803"
---
Du kannst eine Umgebung für jeden Auftrag in deinem Workflow angeben. Füge dazu einen `jobs.<job_id>.environment`-Schlüssel hinzu, gefolgt vom Namen der Umgebung.

Dieser Workflow verwendet beispielsweise eine Umgebung namens `production`.

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

Wenn der obige Workflow ausgeführt wird, unterliegt der `deployment`-Auftrag allen Regeln, die für die `production`-Umgebung konfiguriert sind. Wenn beispielsweise die Umgebung Prüfer erfordert, wird der Auftrag angehalten, bis einer der Prüfer den Auftrag genehmigt.

Du kannst auch eine URL für die Umgebung angeben. Die angegebene URL wird auf der Seite „Bereitstellungen“ für das Repository angezeigt (Zugriff erfolgt durch Klicken auf **Umgebungen** auf der Homepage deines Repositorys) und im Visualisierungsdiagramm für die Workflowausführung. Wenn ein Pull Request den Workflow ausgelöst hat, wird die URL auch als Schaltfläche **Bereitstellung anzeigen** in der Pull Request-Zeitachse angezeigt.

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

![Workflowdiagramm mit URL](/assets/images/help/images/deploy-graph.png)
