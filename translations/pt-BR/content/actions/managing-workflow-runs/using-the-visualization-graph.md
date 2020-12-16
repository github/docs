---
title: Usar o gráfico de visualização
intro: Cada execução de fluxo de trabalho gera um gráfico em tempo real que ilustra o progresso da execução. Você pode usar este gráfico para monitorar e depurar fluxos de trabalho.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.visualization-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}

1. O gráfico exibe cada trabalho no fluxo de trabalho. Um ícone à esquerda do nome do trabalho indica o status do trabalho. As linhas entre as trabalhos indicam dependências. ![Gráfico de fluxo de trabalho](/assets/images/help/images/workflow-graph.png)

2. Clique em um trabalho para visualizar o registro da tarefa. ![Gráfico de fluxo de trabalho](/assets/images/help/images/workflow-graph-job.png)
