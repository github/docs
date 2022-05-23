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
shortTitle: Implantar com GitHub Actions
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

{% data variables.product.prodname_actions %} oferece funcionalidades que permitem que você controle implantações. Você pode:

- Acionar fluxos de trabalho com uma série de eventos.
- Configurar ambientes para definir regras antes que um trabalho possa prosseguir e limitar o acesso a segredos.
- Usar a simultaneidade para controlar o número de implantações em execução por vês.

Para obter mais informações sobre a implantação contínua, consulte "[Sobre a implantação contínua](/actions/deployment/about-continuous-deployment)".

## Pré-requisitos

Você deve estar familiarizado com a sintaxe de {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

## Acionando a sua implantação

Você pode usar uma série de eventos para acionar seu fluxo de trabalho de implantação. Alguns dos mais comuns são: `pull_request`, `push` e `workflow_despatch`.

Por exemplo, um fluxo de trabalho com os seguintes gatilhos é executado sempre que:

- Há um push para o branch `principal`.
- Um pull request direcionado ao branch `principal` está aberto, sincronizado ou reaberto.
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

Para obter mais informações, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".

## Usar ambientes

{% data reusables.actions.about-environments %}

## Usando simultaneidade

A moeda garante que apenas um único trabalho ou fluxo de trabalho que usa o mesmo grupo de concorrência seja executado de cada vez. Você pode usar a concorrência para que um ambiente tenha, no máximo, uma implantação em andamento e uma implantação pendente por vez.

{% note %}

**Observação:** `simultaneidade` e `ambiente` não estão conectados. O valor da simultaneidade pode ser qualquer regra; não precisa ser o nome de um ambiente. Além disso, se outro fluxo de trabalho usar o mesmo ambiente, mas não especificar a equivalência, esse fluxo de trabalho não estará sujeito a nenhuma regra de simultaneidade.

{% endnote %}

Por exemplo, quando o fluxo de trabalho a seguir é executado, ele será pausado com o status `pendente` se algum trabalho ou fluxo de trabalho que usa a simultaneidade de `produção` estiver em andamento. Ele também cancelará qualquer trabalho ou fluxo de trabalho que usar o grupo de simultaneidade de `produção` e tiver o status `pendente`. Isto significa que haverá o máximo de uma execução e um trabalho pendente ou fluxo de trabalho no qual usa o grupo de concorrência `de produção`.

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

Você também pode especificar simultaneidade no nível do trabalho. Isso permitirá que outras tarefas no fluxo de trabalho prossigam mesmo se o trabalho simultâneo estará `pendente`.

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

Você também pode usar o `cancel-in-progress` para cancelar qualquer trabalho ou fluxo de trabalho atualmente em execução no mesmo grupo de concorrência.

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

Para orientação sobre a escrita de etapas específicas de implantação, consulte "[Encontrando exemplos de implantação](#finding-deployment-examples)".

## Visualizar histórico de implantação

Quando um fluxo de trabalho de {% data variables.product.prodname_actions %} é implantado em um ambiente, o ambiente é exibido na página principal do repositório. Para obter mais informações sobre a visualização de implantações em ambientes, consulte "[Visualizando histórico de implantação](/developers/overview/viewing-deployment-history)".

## Monitoramento de fluxo de trabalho

Cada execução de fluxo de trabalho gera um gráfico em tempo real que ilustra o progresso da execução. Você pode usar este gráfico para monitorar e depurar implantações. Para obter mais informações, "[Usando o gráfico de visualização](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)".

Você também pode visualizar os registros de cada execução do fluxo de trabalho e o histórico de execuções do fluxo de trabalho. Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".

## Rastreando implantações por meio de aplicativos

{% ifversion fpt or ghec %}
Se a sua conta pessoal ou organização em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} estiver integrada ao Microsoft Teams ou o Slack, você poderá acompanhar implantações que usam ambientes por meio do Microsoft Teams ou Slack. Por exemplo, você pode receber notificações por meio do aplicativo quando uma implantação estiver pendente de aprovação, quando uma implantação for aprovada, ou quando o status de implantação for alterado. Para obter mais informações sobre integração do Microsoft Teams ou Slack, consulte "[Extensões e integrações do GitHub](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools)".
{% endif %}

Você também pode criar um aplicativo que usa webhooks de status de implantação e implantação para rastrear implantações. {% data reusables.actions.environment-deployment-event %} Para obter mais informações, consulte "[Apps](/developers/apps)" e "[Eventos e cargas do Webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)."

{% ifversion fpt or ghes or ghec %}

## Escolhendo um corredor

Você pode executar seu fluxo de trabalho de implantação em executores hospedados em {% data variables.product.company_short %} ou em executores auto-hospedados. O tráfego dos executores hospedados em {% data variables.product.company_short %} pode vir de uma [ampla gama de endereços de rede](/rest/reference/meta#get-github-meta-information). Se você estiver fazendo a implantação em um ambiente interno e sua empresa restringir o tráfego externo em redes privadas, os fluxos de trabalho de {% data variables.product.prodname_actions %} em execução em executores hospedados em {% data variables.product.company_short %} podem não conseguir comunicar-se com seus serviços ou recursos internos. Para superar isso, você pode hospedar seus próprios executores. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Sobre executores hospedados no GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners)."

{% endif %}

## Exibindo um selo de status

Você pode usar um selo de status para exibir o status do seu fluxo de trabalho de implantação. {% data reusables.repositories.actions-workflow-status-badge-intro %}

Para obter mais informações, consulte "[Adicionando um selo de status do fluxo de trabalho](/actions/managing-workflow-runs/adding-a-workflow-status-badge)".

## Procurando exemplos de implantação

Este artigo mostrou as funcionalidades de {% data variables.product.prodname_actions %} que você pode adicionar aos seus fluxos de trabalho de implantação.

{% data reusables.actions.cd-templates-actions %}
