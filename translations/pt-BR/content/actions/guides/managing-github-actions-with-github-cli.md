---
title: Gerenciar o GitHub Actions com o GitHub CLI
intro: 'Você pode usar {% data variables.product.prodname_cli %} para interagir com {% data variables.product.prodname_actions %}.'
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

### Configurar o {% data variables.product.prodname_cli %}

{% data reusables.cli.download-update-cli %} {% data reusables.cli.actions-cli-version %} {% data reusables.cli.cli-manual %}

{% data reusables.cli.cli-auth %}

{% data reusables.cli.cli-repo %}

### Gerenciar {% data variables.product.prodname_actions %} com {% data variables.product.prodname_cli %}

Para visualizar todos os comandos disponíveis relacionados a {% data variables.product.prodname_actions %}, execute `gh actions`.

Para obter mais informações sobre o uso de comandos em cenários específicos, consulte os procedimentos a seguir:

- "[Reexecutar um fluxo de trabalho](/actions/managing-workflow-runs/re-running-a-workflow#re-run-a-workflow-through-github-cli)"
- "[Executar um fluxo de trabalho manualmente](/actions/managing-workflow-runs/manually-running-a-workflow#running-a-workflow-using-github-cli)
- "[Fazer o download dos artefatos do fluxo de trabalho](/actions/managing-workflow-runs/downloading-workflow-artifacts#download-artifacts-through-github-cli)"
- "[Usar registros de execução de fluxo de trabalho](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-through-github-cli)"
- "[Visualizar histórico de execução de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history#viewing-workflow-run-history-with-github-cli)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
- "[Desabilitar e habilitar um fluxo de trabalho](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow#disabling-and-enabling-workflows-through-github-cli)"{% endif %}
