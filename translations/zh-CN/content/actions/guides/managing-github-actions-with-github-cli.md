---
title: 使用 GitHub CLI 管理 GitHub Actions
intro: '您可以使用 {% data variables.product.prodname_cli %} 与 {% data variables.product.prodname_actions %} 互动。'
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

### 设置 {% data variables.product.prodname_cli %}

{% data reusables.cli.download-update-cli %} {% data reusables.cli.actions-cli-version %} {% data reusables.cli.cli-manual %}

{% data reusables.cli.cli-auth %}

{% data reusables.cli.cli-repo %}

### 通过 {% data variables.product.prodname_cli %} 管理 {% data variables.product.prodname_actions %}

要查看所有与 {% data variables.product.prodname_actions %} 相关的可用命令，运行 `gh actions`。

有关在特定情况下使用命令的更多信息，请参阅以下程序：

- ""[重新运行工作流程](/actions/managing-workflow-runs/re-running-a-workflow#re-run-a-workflow-through-github-cli)"
- "[手动运行工作流程](/actions/managing-workflow-runs/manually-running-a-workflow#running-a-workflow-using-github-cli)"
- "[下载工作流程构件](/actions/managing-workflow-runs/downloading-workflow-artifacts#download-artifacts-through-github-cli)"
- "[使用工作流程运行日志](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-through-github-cli)"
- "[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history#viewing-workflow-run-history-with-github-cli)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
- "[禁用和启用工作流程](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow#disabling-and-enabling-workflows-through-github-cli)"{% endif %}
