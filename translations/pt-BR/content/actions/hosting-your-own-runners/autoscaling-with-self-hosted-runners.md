---
title: Redimensionamento automático com executores auto-hospedados
shortTitle: Autoscale self-hosted runners
intro: Você pode dimensionar automaticamente seus executores auto-hospedados em resposta a eventos de webhooks.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
ms.openlocfilehash: 2fe0c197ac122ea9cd976c2718a492bd80c073fe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107554'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre o dimensionamento automático

Você pode aumentar ou diminuir automaticamente o número de executores auto-hospedados no seu ambiente em resposta aos eventos do webhook que você recebe com uma determinada etiqueta. Por exemplo, você poderá criar uma automação que adiciona um novo executor auto-hospedado sempre que receber um evento de webhook [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) com a atividade [`queued`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job), o que notifica você de que um novo trabalho está pronto para processamento. A carga do webhook inclui dados da etiqueta. Portanto, você pode identificar o tipo de executor que a tarefa está solicitando. Depois que o trabalho for concluído, crie uma automação que remove o executor em resposta à atividade `workflow_job` [`completed`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job). 

## Soluções de dimensionamento automático recomendadas

{% data variables.product.prodname_dotcom %} recomenda e faz parcerias estreitas com dois projetos de código aberto que você pode usar para dimensionar automaticamente os seus executores. Uma ou ambas as soluções podem ser adequadas, com base nas suas necessidades. 

Os repositórios a seguir possuem instruções detalhadas para configurar esses dimensionadores automáticos: 

- [actions-runner-controller/actions-runner-controller](https://github.com/actions-runner-controller/actions-runner-controller) – Um controlador do Kubernetes para os executores auto-hospedados do {% data variables.product.prodname_actions %}.
- [philips-labs/terraform-aws-github-runner](https://github.com/philips-labs/terraform-aws-github-runner) – Um módulo do Terraform para os executores escalonáveis do {% data variables.product.prodname_actions %} na Amazon Web Services.

Cada solução tem certas especificações que podem ser importantes para considerar:

| **Recursos** | **actions-runner-controller** | **terraform-aws-github-runner** |
| :--- | :--- | :--- |
| Runtime | Kubernetes | VMs do Linux e do Windows |
| Nuvens compatíveis | Azure, Amazon Web Services, Google Cloud Platform, nos locais | Amazon Web Services |
| Onde os executores podem ser dimensionados | Níveis de empresa, organização e repositório. Por etiqueta do executor e grupo de executores. | Níveis de organização e repositório. Por etiqueta do executor e grupo de executores. |
| Como os executores podem ser dimensionados | Eventos de webhook, Programados, Baseados em extrações | Eventos de Webhook, Programados (únicamente executores a nível de organização) |

## Usaar executores efêmeros para dimensionamento automático

{% data variables.product.prodname_dotcom %} recomenda implementar o dimensionamento automático com executores auto-hospedados efêmeros. Nãose recomenda o dimensionamento automático com executores auto-hospedados persistentes. Em certos casos, {% data variables.product.prodname_dotcom %} não pode garantir que os trabalhos não sejam atribuídos a executores persistentes enquanto eles são desativados. Com executores efêmeros, é possível garantir iss, porque {% data variables.product.prodname_dotcom %} só atribui um trabalho a um executor.

Esta abordagem permite que você gerencie os seus executores como sistemas efêmeros, já que você pode usar automação para fornecer um ambiente limpo para cada trabalho. Isso ajuda a limitar a exposição de quaisquer recursos sensíveis de trabalhos anteriores e também ajuda a mitigar o risco de um executor comprometido receber novos trabalhos.  

Para adicionar um executor efêmero ao seu ambiente, inclua o parâmetro `--ephemeral` ao registrar o executor usando `config.sh`. Por exemplo:

```shell
./config.sh --url https://github.com/octo-org --token example-token --ephemeral
```

O serviço {% data variables.product.prodname_actions %} irá cancelar o resgistro do runner automaticamente depois de ter processado um trabalho. Em seguida, você poderá criar a sua própria automação que limpa o runner depois que ele tiver seu registro cancelado.

{% note %}

**Observação:** se um trabalho estiver rotulado para certo tipo de executor, mas nenhuma correspondência desse tipo estiver disponível, o trabalho não falhará imediatamente no momento da colocação na fila. Em vez disso, o trabalho permanecerá na fila até que o período de tempo limite de 24 horas expire.

{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae %}

## Controlando atualizações de software dos executores em executores auto-hospedados

Por padrão, os executores auto-hospedados realizarão automaticamente uma atualização de software sempre que uma nova versão do executor estiver disponível.  Se você usar executoresefêmeros em contêineres, isso pode gerar a atualizações de software repetidas quando uma nova versão do executor for lançada.  A desabilitação das atualizações automáticas permite que você atualize a versão do executor na imagem do contêiner diretamente no seu próprio agendamento.

Para desativar as atualizações automáticas de software e instalar atualizações de software por conta própria, especifique o sinalizador `--disableupdate` ao registrar o executor usando `config.sh`. Por exemplo:

```shell
./config.sh --url https://github.com/YOUR-ORGANIZATION --token EXAMPLE-TOKEN --disableupdate
```

Se você desabilitar as atualizações automáticas, você ainda deverá atualizar sua versão do executor regularmente.  A nova funcionalidade do {% data variables.product.prodname_actions %} exige alterações no serviço do {% data variables.product.prodname_actions %} _e_ no software do executor.  O executor pode não conseguir de processar corretamente os trabalhos que aproveitam novas funcioanlidades em {% data variables.product.prodname_actions %} sem a atualização de um software.

Se você desabilitar as atualizações automáticas, será necessário atualizar a versão do seu executor no prazo de 30 dias a contar da nova versão disponível.  O ideal é se inscrever para receber notificações de versões no [repositório `actions/runner`](https://github.com/actions/runner/releases). Para obter mais informações, confira "[Como configurar notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#about-custom-notifications)".

Para obter instruções sobre como instalar a última versão do executor, confira as instruções de instalação da [última versão](https://github.com/actions/runner/releases).

{% note %}

**Observação:** se você não executar uma atualização de software em 30 dias, o serviço do {% data variables.product.prodname_actions %} não colocará trabalhos na fila para o executor.  Além disso, se uma atualização crítica de segurança for necessária, o serviço de {% data variables.product.prodname_actions %} não colocará os trabalhos na fila do seu executor até que ele seja atualizado.

{% endnote %}

{% endif %}

## Usando webhooks para dimensionamento automático

Você pode criar seu ambiente de dimensionamento automático usando cargas recebidas do webhook [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job). Esse webhook está disponível nos níveis do repositório, da organização e da empresa, e a carga desse evento contém uma chave `action` que corresponde às fases do ciclo de vida de um trabalho de fluxo de trabalho, por exemplo, quando os trabalhos são `queued`, `in_progress` e `completed`. Você deverá criar a sua própria automação de dimensionamento em resposta a estas cargas de webhook.

- Para obter mais informações sobre o webhook `workflow_job`, confira "[Eventos e cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)".
- Para saber como trabalhar com webhooks, confira "[Como criar webhooks](/developers/webhooks-and-events/webhooks/creating-webhooks)".

## Requisitos de autenticação

Você pode registrar e excluir os executores auto-hospedados da organização e do repositório usando [a API](/rest/reference/actions#self-hosted-runners). Para efetuar a autenticação na API, a implementação do seu dimensionamento automático pode usar um token de acesso ou um aplicativo de {% data variables.product.prodname_dotcom %}. 

Seu token de acesso exigirá o seguinte escopo:

- Para repositórios privados, use um token de acesso com o [escopo `repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).
- Para repositórios públicos, use um token de acesso com o [escopo `public_repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).
- Para organizações, use um token de acesso com o [escopo `admin:org`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).

Para efetuar a autenticação usando um aplicativo de {% data variables.product.prodname_dotcom %}, este deverá ter as seguintes permissões:
- Para repositórios, atribua a permissão `administration`.
- Para organizações, atribua a permissão `organization_self_hosted_runners`.

Você pode registrar e excluir os executores auto-hospedados da empresa usando [a API](/rest/reference/actions#self-hosted-runners). Para efetuar a autenticação na API, sua implementação de dimensionamento automático pode usar um token de acesso.

Seu token de acesso exigirá o escopo `manage_runners:enterprise`.
