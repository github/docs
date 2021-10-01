---
title: About monitoring and troubleshooting
intro: 'You can use the tools in {% data variables.product.prodname_actions %} to monitor and debug your workflows.'
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: About monitoring and troubleshooting
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Monitoring your workflows

{% ifversion fpt or ghae or ghes > 3.0 %}

### Usar o gráfico de visualização

Cada execução de fluxo de trabalho gera um gráfico em tempo real que ilustra o progresso da execução. Você pode usar este gráfico para monitorar e depurar fluxos de trabalho. Por exemplo:

   ![Gráfico de fluxo de trabalho](/assets/images/help/images/workflow-graph.png)

For more information, see "[Using the visualization graph](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)."

{% endif %}

### Adicionar um selo de status de fluxo de trabalho

{% data reusables.repositories.actions-workflow-status-badge-intro %}

Para obter mais informações, consulte "[Adicionando um selo de status do fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)".

{% ifversion fpt %}
### Visualizar o tempo de execução do trabalho

To identify how long a job took to run, you can view its execution time. Por exemplo:

   ![Link com informações sobre o tempo faturável e execução](/assets/images/help/repository/view-run-billable-time.png)

Para obter mais informações, consulte "[Visualizar o tempo de execução do trabalho](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)".
{% endif %}

### Visualizar o histórico de execução do fluxo de trabalho

You can view the status of each job and step in a workflow. Por exemplo:

   ![Nome da execução do fluxo de trabalho](/assets/images/help/repository/run-name.png)

Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".

## Troubleshooting your workflows

### Usar registros de execução do fluxo de trabalho

Each workflow run generates activity logs that you can view, search, and download. Por exemplo:

   ![Resultados do fluxo de trabalho do Super linter](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

Para obter mais informações, consulte "[Usar registros de execução do fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)".

### Habilitar log de depuração

Se os logs do fluxo de trabalho não fornecerem detalhes suficientes para diagnosticar o motivo pelo qual um fluxo de trabalho, um trabalho ou uma etapa não está funcionando como esperado, habilite o log de depuração adicional. Para obter mais informações, consulte "[Habilitar o registro de depuração](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)".

## Monitoramento e resolução de problemas dos executores auto-hospedados

If you use self-hosted runners, you can view their activity and diagnose common issues.

Para obter mais informações, consulte "[Monitoring and troubleshooting self-hosted runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)."
