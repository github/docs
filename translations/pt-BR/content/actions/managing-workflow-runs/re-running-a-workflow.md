---
title: Reexecutar um fluxo de trabalho
intro: Você pode executar novamente uma instância de um fluxo de trabalho até 30 dias após a execução inicial.
product: '{% data reusables.gated-features.actions %}'
permissions: People with write permissions to a repository can re-run workflows in the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

A reexecução de um fluxo de trabalho usa o mesmo `GITHUB_SHA` (commit SHA) e `GITHUB_REF` (Git ref) do evento original que acionou a execução do fluxo de trabalho. Você pode executar novamente um fluxo de trabalho até 30 dias após a execução inicial.

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. No canto superior direito do fluxo de trabalho, use o menu suspenso **Reexecutar trabalhos** e selecione **Reexecutar todos os trabalhos**{% ifversion fpt or ghes > 3.0 or ghae %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para executar novamente um fluxo de trabalho com falha, use o subcomando `executar novamente`. Substitua `run-id` pelo ID da execução com falha que você deseja executar novamente.  Se você não especificar um `run-id`, {% data variables.product.prodname_cli %} irá retornar um menu interativo para você escolher uma execução com falha recente.

```shell
gh run rerun <em>run-id</em>
```

Para visualizar o progresso da execução do fluxo de trabalho, use o subcomando `executar inspeção` e selecione a execução na lista interativa.

```shell
gh run watch
```

{% endcli %}
