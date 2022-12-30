---
ms.openlocfilehash: 4795fdc557dbb103d64f7b97d0fa58f445434bca
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145094402"
---
Você pode especificar um ambiente para cada tarefa do seu fluxo de trabalho. Para fazer isso, adicione uma chave `jobs.<job_id>.environment` seguida do nome do ambiente.

Por exemplo, este fluxo de trabalho usará um ambiente chamado `production`.

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

Quando o fluxo de trabalho acima for executado, o trabalho `deployment` estará sujeito às regras configuradas para o ambiente `production`. Por exemplo, se o ambiente exigir revisores, o trabalho fará a pausa até que um dos revisores aprove o trabalho.

Você também pode especificar uma URL para o ambiente. A URL especificada será exibida na página de implantações do repositório (acessada por meio de um clique em **Ambientes** na home page do repositório) e no grafo de visualização da execução de fluxo de trabalho. Se uma solicitação de pull disparar o fluxo de trabalho, a URL também será exibida como um botão **Exibir implantação** na linha do tempo da solicitação de pull.

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

![Gráfico do fluxo de trabalho com o URL](/assets/images/help/images/deploy-graph.png)
