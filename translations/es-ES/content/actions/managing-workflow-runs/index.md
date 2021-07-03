---
title: Administrar ejecuciones de flujo de trabajo
shortTitle: Administrar ejecuciones de flujo de trabajo
intro: 'Puedes ver el estado y resultados de cada paso de tu flujo de trabajo, cancelar un flujo de trabajo pendiente, {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}revisar los despliegues, {% endif %}ver los minutos de ejecución de jobs que se van a facturar, depurar y volver a ejecutar un flujo de trabajo fallido, buscar y descargar las bitácoras y descargar artefactos.'
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
children:
  - /using-the-visualization-graph
  - /viewing-workflow-run-history
  - /using-workflow-run-logs
  - /manually-running-a-workflow
  - /re-running-a-workflow
  - /canceling-a-workflow
  - /approving-workflow-runs-from-public-forks
  - /reviewing-deployments
  - /disabling-and-enabling-a-workflow
  - /deleting-a-workflow-run
  - /viewing-job-execution-time
  - /downloading-workflow-artifacts
  - /removing-workflow-artifacts
  - /enabling-debug-logging
  - /adding-a-workflow-status-badge
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}{% endif %}
