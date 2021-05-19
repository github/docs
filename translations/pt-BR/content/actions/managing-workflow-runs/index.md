---
title: Gerenciar fluxos de trabalho
shortTitle: Gerenciar fluxos de trabalho
intro: 'Você pode visualizar o status e os resultados de cada etapa do seu fluxo de trabalho, cancelar um fluxo de trabalho pendente, {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}revisar implantações, {% endif %}visualizar acúmulos de execução de trabalhos faturáveis, depurar e executar novamente um fluxo de trabalho que falhou, pesquisar e fazer o download de registros e artefatos.'
redirect_from:
  - /actions/configuring-and-managing-workflows/managing-a-workflow-run
  - /articles/viewing-your-repository-s-workflows
  - /articles/viewing-your-repositorys-workflows
  - /articles/managing-a-workflow-run
  - /github/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/configuring-and-managing-workflows/configuring-and-managing-workflow-files-and-runs
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}{% link_in_list /using-the-visualization-graph %}{% endif %}
{% link_in_list /viewing-workflow-run-history %}
{% link_in_list /using-workflow-run-logs %}
{% link_in_list /manually-running-a-workflow %}
{% link_in_list /re-running-a-workflow %}
{% link_in_list /canceling-a-workflow %}
{% link_in_list /approving-workflow-runs-from-public-forks %}
{% link_in_list /reviewing-deployments %}
{% link_in_list /disabling-and-enabling-a-workflow %}
{% link_in_list /deleting-a-workflow-run %}
{% link_in_list /viewing-job-execution-time %}
{% link_in_list /downloading-workflow-artifacts %}
{% link_in_list /removing-workflow-artifacts %}
{% link_in_list /enabling-debug-logging %}
{% link_in_list /adding-a-workflow-status-badge %}
