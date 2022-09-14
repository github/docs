---
title: Implantando com GitHub Actions
intro: Aprenda a controlar imolantações com funcionalidades como ambientes e simultaneidade.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/deploying-with-github-actions
topics:
  - CD
shortTitle: Deploy with GitHub Actions
ms.openlocfilehash: 533d85d83bea53d34af3d8b9a47d0d4426ea4bc6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145179181'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

{% data variables.product.prodname_actions %} oferece funcionalidades que permitem que você controle implantações. Você pode:

- Acionar fluxos de trabalho com uma série de eventos.
- Configurar ambientes para definir regras antes que um trabalho possa prosseguir e limitar o acesso a segredos.
- Usar a simultaneidade para controlar o número de implantações em execução por vês.

Para obter mais informações sobre a implantação contínua, confira "[Sobre a implantação contínua](/actions/deployment/about-continuous-deployment)".

## Pré-requisitos

Você deve estar familiarizado com a sintaxe de {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Aprenda a usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

## Acionando a sua implantação

Você pode usar uma série de eventos para acionar seu fluxo de trabalho de implantação. Algumas das opções mais comuns são: `pull_request`, `push` e `workflow_dispatch`.

Por exemplo, um fluxo de trabalho com os seguintes gatilhos é executado sempre que:

- Há um push para o branch `main`.
- Uma solicitação de pull direcionada ao branch `main` é aberta, sincronizada ou reaberta.
- Alguém a aciona manualmente.

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:
```

Para obter mais informações, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".

## Usar ambientes

{% data reusables.actions.about-environments %}

## Usando simultaneidade

A moeda garante que apenas um único trabalho ou fluxo de trabalho que usa o mesmo grupo de concorrência seja executado de cada vez. Você pode usar a concorrência para que um ambiente tenha, no máximo, uma implantação em andamento e uma implantação pendente por vez.

{% note %}

**Observação:** `concurrency` e `environment` não estão conectados. O valor da simultaneidade pode ser qualquer regra; não precisa ser o nome de um ambiente. Além disso, se outro fluxo de trabalho usar o mesmo ambiente, mas não especificar a equivalência, esse fluxo de trabalho não estará sujeito a nenhuma regra de simultaneidade.

{% endnote %}

Por exemplo, quando o fluxo de trabalho a seguir for executado, ele será colocado em pausa com o status `pending` se qualquer trabalho ou fluxo de trabalho que usa o grupo de simultaneidade `production` estiver em andamento. Ele também cancelará qualquer trabalho ou fluxo de trabalho que use o grupo de simultaneidade `production` e que tenha o status `pending`. Isso significa que haverá, no máximo, um trabalho ou um fluxo de trabalho em execução e um pendente que usa o grupo de simultaneidade `production`.

```yaml
name: Deployment

concurrency: production

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

Você também pode especificar simultaneidade no nível do trabalho. Isso permitirá que outros trabalhos no fluxo de trabalho continuem mesmo que o trabalho simultâneo esteja `pending`.

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
    concurrency: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Use também `cancel-in-progress` para cancelar qualquer trabalho ou fluxo de trabalho em execução no mesmo grupo de simultaneidade.

```yaml
name: Deployment

concurrency: 
  group: production
  cancel-in-progress: true

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

Para obter diretrizes sobre como escrever etapas específicas à implantação, confira "[Como encontrar exemplos de implantação](#finding-deployment-examples)".

## Exibir o histórico de implantações

Quando um fluxo de trabalho de {% data variables.product.prodname_actions %} é implantado em um ambiente, o ambiente é exibido na página principal do repositório. Para obter mais informações sobre como ver implantações em ambientes, confira "[Como ver o histórico de implantações](/developers/overview/viewing-deployment-history)".

## Monitoramento de fluxo de trabalho

Cada execução de fluxo de trabalho gera um gráfico em tempo real que ilustra o progresso da execução. Você pode usar este gráfico para monitorar e depurar implantações. Para obter mais informações, confira "[Como usar o grafo de visualização](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)".

Você também pode visualizar os registros de cada execução do fluxo de trabalho e o histórico de execuções do fluxo de trabalho. Para obter mais informações, confira "[Como ver o histórico de execução do fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".

## Rastreando implantações por meio de aplicativos

{% ifversion fpt or ghec %} Se a sua conta pessoal ou de organização no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} estiver integrada ao Microsoft Teams ou ao Slack, você poderá acompanhar as implantações que usam ambientes por meio do Microsoft Teams ou do Slack. Por exemplo, você pode receber notificações por meio do aplicativo quando uma implantação estiver pendente de aprovação, quando uma implantação for aprovada, ou quando o status de implantação for alterado. Para obter mais informações sobre como integrar o Microsoft Teams ou o Slack, confira "[Extensões e integrações do GitHub](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools)".
{% endif %}

Você também pode criar um aplicativo que usa webhooks de status de implantação e implantação para rastrear implantações. {% data reusables.actions.environment-deployment-event %} Para obter mais informações, confira "[Aplicativos](/developers/apps)" e "[Eventos e cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)".

{% ifversion fpt or ghes or ghec %}

## Escolher um executor

Você pode executar seu fluxo de trabalho de implantação em executores hospedados no {% data variables.product.company_short %} ou em executores auto-hospedados. O tráfego dos executores hospedados no {% data variables.product.company_short %} pode vir de uma [ampla variedade de endereços de rede](/rest/reference/meta#get-github-meta-information). Se você está fazendo a implantação em um ambiente interno e a empresa restringe o tráfego externo em redes privadas, os fluxos de trabalho do {% data variables.product.prodname_actions %} em execução nos executores hospedados no {% data variables.product.company_short %} podem não conseguir se comunicar com os serviços ou recursos internos. Para superar isso, você pode hospedar seus próprios executores. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Sobre os executores hospedados no GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners)".

{% endif %}

## Exibindo um selo de status

Você pode usar um selo de status para exibir o status do seu fluxo de trabalho de implantação. {% data reusables.repositories.actions-workflow-status-badge-intro %}

Para obter mais informações, confira "[Como adicionar uma notificação de status do fluxo de trabalho](/actions/managing-workflow-runs/adding-a-workflow-status-badge)".

## Procurando exemplos de implantação

Este artigo mostrou as funcionalidades de {% data variables.product.prodname_actions %} que você pode adicionar aos seus fluxos de trabalho de implantação.

{% data reusables.actions.cd-templates-actions %}
