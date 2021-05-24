---
title: Administrar las GitHub Actions con GitHub CLI
intro: 'Puedes utilizar el {% data variables.product.prodname_cli %} para interactuar con las {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - Workflows
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Configurar {% data variables.product.prodname_cli %}

{% data reusables.cli.download-update-cli %} {% data reusables.cli.actions-cli-version %} {% data reusables.cli.cli-manual %}

{% data reusables.cli.cli-auth %}

{% data reusables.cli.cli-repo %}

### Administrar las {% data variables.product.prodname_actions %} con el {% data variables.product.prodname_cli %}

Para ver todos los comandos disponibles relacionados con las {% data variables.product.prodname_actions %}, ejecuta `gh actions`.

Para obtener más información sobre cómo utilizar los comandos en escenarios específicos, consulta los siguientes procedimientos:

- "[Volver a ejecutar un flujo de trabajo](/actions/managing-workflow-runs/re-running-a-workflow#re-run-a-workflow-through-github-cli)"
- "[Ejecutar un flujo de trabajo manualmente](/actions/managing-workflow-runs/manually-running-a-workflow#running-a-workflow-using-github-cli)"
- "[Descargar artefactos de flujos de trabajo](/actions/managing-workflow-runs/downloading-workflow-artifacts#download-artifacts-through-github-cli)"
- "[Utilizar bitácoras de ejecución de flujos de trabajo](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-through-github-cli)"
- "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history#viewing-workflow-run-history-with-github-cli)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
- "[Inhabilitar y habilitar un flujo de trabajo](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow#disabling-and-enabling-workflows-through-github-cli)"{% endif %}
