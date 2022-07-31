---
title: Sobre monitoramento e solução de problemas
intro: 'Você pode utilizar as ferramentas em {% data variables.product.prodname_actions %} para monitorar e depurar seus fluxos de trabalho.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Sobre monitoramento e solução de problemas
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Monitorando seus fluxos de trabalho

{% ifversion github-runner-dashboard %}
### Monitorando os seus trabalhos atuais na sua organização ou empresa

{% data reusables.actions.github-hosted-runners-check-concurrency %}

{% endif %}

### Usar o gráfico de visualização

Cada execução de fluxo de trabalho gera um gráfico em tempo real que ilustra o progresso da execução. Você pode usar este gráfico para monitorar e depurar fluxos de trabalho. Por exemplo:

   ![Gráfico de fluxo de trabalho](/assets/images/help/images/workflow-graph.png)

Para obter mais informações, consulte "[Usar o gráfico de visualização](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)".

### Adicionar um selo de status de fluxo de trabalho

{% data reusables.repositories.actions-workflow-status-badge-intro %}

Para obter mais informações, consulte "[Adicionando um selo de status do fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)".

{% ifversion fpt or ghec %}
### Visualizar o tempo de execução do trabalho

Para identificar quanto tempo um trabalho levou para ser executado, você pode ver seu tempo de execução. Por exemplo:

   ![Link com informações sobre o tempo faturável e execução](/assets/images/help/repository/view-run-billable-time.png)

Para obter mais informações, consulte "[Visualizar o tempo de execução do trabalho](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)".
{% endif %}

### Visualizar o histórico de execução do fluxo de trabalho

Você pode visualizar o status de cada trabalho e etapa de um fluxo de trabalho. Por exemplo:

   ![Nome da execução do fluxo de trabalho](/assets/images/help/repository/run-name.png)

Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".

## Solucionando problemas dos seus fluxos de trabalho

### Usar registros de execução do fluxo de trabalho

A execução de cada fluxo de trabalho gera registros de atividade que você pode visualizar, pesquisar e baixar. Por exemplo:

   ![Resultados do fluxo de trabalho do Super linter](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

Para obter mais informações, consulte "[Usar registros de execução do fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)".

### Habilitar log de depuração

Se os logs do fluxo de trabalho não fornecerem detalhes suficientes para diagnosticar o motivo pelo qual um fluxo de trabalho, um trabalho ou uma etapa não está funcionando como esperado, habilite o log de depuração adicional. Para obter mais informações, consulte "[Habilitar o registro de depuração](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)".

## Monitoramento e resolução de problemas dos executores auto-hospedados

Se você usar executores auto-hospedados, você poderá ver a atividade deles e diagnosticar problemas comuns.

Para obter mais informações, consulte "[Monitoring and troubleshooting self-hosted runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)."
