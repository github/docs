---
title: Implantações
intro: A API de implantações permite que você crie e exclua implantações e ambientes de implantação.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: a75c94b609bd166971e23516e8b2af318236a026
ms.sourcegitcommit: 95e6f3d3aba8c637a3f72b571a6beacaa38d367f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/11/2022
ms.locfileid: '147067959'
---
## <a name="about-the-deployments-api"></a>Sobre a API de implantações

As implantações são solicitações para implantar um ref específico (branch, SHA, tag). O GitHub expede um [evento `deployment`](/developers/webhooks-and-events/webhook-events-and-payloads#deployment) que os serviços externos podem escutar e executar uma ação quando implantações são criadas. As implantações permitem que os desenvolvedores e as organizações construam ferramentas associadas em torno de implantações sem ter que se preocupar com os detalhes de implementação da entrega de diferentes tipos de aplicativos (p. ex., web, nativo).

Os status de implantação permitem que serviços externos marquem as implantações com um estado `error`, `failure`, `pending`, `in_progress`, `queued` ou `success` que os sistemas que escutam os [eventos `deployment_status`](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status) podem consumir.

Os status de implantação também podem incluir uma `description` e uma `log_url` opcional, que são altamente recomendados, pois tornam os status de implantação mais úteis. A `log_url` é a URL completa da saída da implantação, e a `description` é um resumo de alto nível do que aconteceu com a implantação.

O GitHub expede os eventos `deployment` e `deployment_status` quando implantações e status de implantação são criados. Esses eventos permitem que as integrações de terceiros recebam resposta para solicitações de implantação e atualizem o status de implantação conforme o progresso é feito.

Abaixo está um diagrama de sequência sobre para como essas interações funcionariam.

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

Tenha em mente que o GitHub nunca terá acesso aos seus servidores. Cabe à sua integração de terceiros interagir com os eventos de implantação. Vários sistemas podem ouvir eventos de implantação, e cabe a cada um desses sistemas decidir se serão responsáveis por retirar o código dos seus servidores, criar código nativo, etc.

Observe que o [escopo do OAuth](/developers/apps/scopes-for-oauth-apps) `repo_deployment` permite acesso direcionado a implantações e status de implantações **sem** permitir acesso ao código do repositório, enquanto os escopos {% ifversion not ghae %}`public_repo` e{% endif %}`repo` também concedem permissão para o código.

### <a name="inactive-deployments"></a>Implantações inativas

Quando você definir o estado de uma implantação como `success`, todas as implantações anteriores de ambiente não transitório e de não produção no mesmo repositório com o mesmo nome de ambiente se tornarão `inactive`. Para evitar isso, você pode definir `auto_inactive` como `false` ao criar o status da implantação.

Você pode comunicar que um ambiente transitório não existe mais definindo o `state` dele como `inactive`.  A configuração do `state` como `inactive` mostrar a implantação como `destroyed` no {% data variables.product.prodname_dotcom %} e remove o acesso a ela.
