---
title: Administrar ejecuciones de flujo de trabajo
shortTitle: Administrar ejecuciones de flujo de trabajo
intro: 'Puedes ver el estado y resultados de cada paso en tu flujo de trabajo, cancelar un flujo de trabajo pendiente, {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}revisar los despliegues, {% endif %}ver los minutos de ejecución facturables de los jobs, depurar y volver a ejecutar un flujo de trabajo fallido, buscar y descargar bitácoras, y descargar artefactos.'
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}{% link_in_list /using-the-visualization-graph %}{% endif %}
{% link_in_list /viewing-workflow-run-history %}
{% link_in_list /using-workflow-run-logs %}
{% link_in_list /manually-running-a-workflow %}
{% link_in_list /re-running-a-workflow %}
{% link_in_list /canceling-a-workflow %}
{% link_in_list /reviewing-deployments %}
{% link_in_list /disabling-and-enabling-a-workflow %}
{% link_in_list /deleting-a-workflow-run %}
{% link_in_list /viewing-job-execution-time %}
{% link_in_list /downloading-workflow-artifacts %}
{% link_in_list /removing-workflow-artifacts %}
{% link_in_list /enabling-debug-logging %}
{% link_in_list /adding-a-workflow-status-badge %}
