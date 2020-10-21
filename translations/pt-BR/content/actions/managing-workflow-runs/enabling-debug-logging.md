---
title: Habilitar log de depuração
intro: 'Se os logs do fluxo de trabalho não fornecerem detalhes suficientes para diagnosticar o motivo pelo qual um fluxo de trabalho, um trabalho ou uma etapa não está funcionando como esperado, habilite o log de depuração adicional.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Esses registros adicionais são habilitados pela definição dos segredos no repositório que contém o fluxo de trabalho. Portanto, aplicam-se os mesmos requisitos de permissão:

- {% data reusables.github-actions.permissions-statement-secrets-repository %}
- {% data reusables.github-actions.permissions-statement-secrets-organization %}
- {% data reusables.github-actions.permissions-statement-secrets-api %}

Para obter mais informações sobre segredos de configuração, consulte "[Criar e usar segredos criptografados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

### Habilitar log de diagnóstico do runner

O log de diagnóstico do executor fornece arquivos de log adicionais que contêm informações sobre como um executor está executando um trabalho. Dois arquivos de log extras foram adicionados ao arquivo de log:

* O log de processo do runner, que inclui informações sobre a coordenação e a configuração de runners para executar trabalhos.
* O log de processo do worker, que registra em log a execução de um trabalho.

1. Para habilitar o log de diagnóstico do runner, defina a seguinte chave secreta no repositório que contém o fluxo de trabalho: `ACTIONS_RUNNER_DEBUG` como `true`.

1. Para baixar os logs de diagnóstico do runner, baixe o arquivo de log da execução de fluxo de trabalho. Os logs de diagnóstico do runner ficam na pasta `runner-diagnostic-logs`. Para obter mais informações sobre o download de logs, consulte "[Fazer download de registros](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs)".

### Habilitar log de depuração da etapa

O log de depuração da etapa aumenta o detalhamento dos logs de um trabalho durante e depois da execução dele.

1. Para habilitar o log de diagnóstico da etapa, defina a seguinte chave secreta no repositório que contém o fluxo de trabalho: `ACTIONS_STEP_DEBUG` como `true`.

1. Após a configuração da chave secreta, mais eventos de depuração são exibidos nos logs da etapa. Para obter mais informações, consulte ["Exibir logs para diagnosticar falhas"](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures).
