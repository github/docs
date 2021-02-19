---
title: Executando manualmente um fluxo de trabalho
intro: 'Quando um fluxo de trabalho é configurado para ser executado no evento `workflow_dispatch`, você pode executar o fluxo de trabalho usando a API REST ou na aba Ações em {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Configurar um fluxo de trabalho para ser executado manualmente

Para executar um fluxo de trabalho manualmente, o fluxo de trabalho deve ser configurado para ser executado no evento `workflow_dispatch`. Para obter mais informações sobre a configuração do evento `workflow_despatch`, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

### Executar um fluxo de trabalho em {% data variables.product.prodname_dotcom %}

Para acionar o evento `workflow_dispatch` em {% data variables.product.prodname_dotcom %}, seu fluxo de trabalho deve estar no branch-padrão. Siga estas etapas para acionar manualmente uma execução do fluxo de trabalho.

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja executar. ![ações selecionam fluxo de trabalho](/assets/images/actions-select-workflow.png)
1. Acima da lista de execuções de fluxo de trabalho, selecione **Executar**de fluxo de trabalho . ![expedição de fluxo de trabalho ações](/assets/images/actions-workflow-dispatch.png)
1. Selecione o ramo onde o fluxo de trabalho será executado e digite os parâmetros de entrada usados pelo fluxo de trabalho. Clique em **Executar**de fluxo de trabalho . ![ações executar manualmente fluxo de trabalho](/assets/images/actions-manually-run-workflow.png)

### Executar um fluxo de trabalho usando a API REST

Ao usar a API REST, você configura as entradas de `` e `ref` como parâmetros do corpo de solicitação. Se as entradas forem omitidas, os valores padrão definidos no arquivo de fluxo de trabalho ão usados.

Para obter mais informações sobre como usar a API REST, consulte o "[Criar um evento de expedição de fluxo de trabalho](/rest/reference/actions/#create-a-workflow-dispatch-event)."
