---
ms.openlocfilehash: 4795fdc557dbb103d64f7b97d0fa58f445434bca
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114417"
---
Puedes especificar un ambiente para cada job de tu flujo de trabajo. Para ello, agregue una clave `jobs.<job_id>.environment` seguida del nombre del entorno.

Por ejemplo, en este flujo de trabajo se utilizará un entorno llamado `production`.

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

Cuando se ejecute el flujo de trabajo anterior, el trabajo `deployment` estará sujeto a las reglas configuradas para el entorno `production`. Por ejemplo, si el ambiente requiere revisores, el job se pausará hasta que uno de ellos lo apruebe.

También puedes especificar una URL para el ambiente. La URL especificada aparecerá en la página de implementaciones del repositorio (a la que se accede al hacer clic en **Environments** (Entornos) en la página principal del repositorio) y en el gráfico de visualización de la ejecución del flujo de trabajo. Si una solicitud de incorporación de cambios ha desencadenado el flujo de trabajo, la URL también se muestra como un botón **View deployment** (Ver implementación) en la escala de tiempo de la solicitud de incorporación de cambios.

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

![Gráfica de flujo de trabajo con URL](/assets/images/help/images/deploy-graph.png)
