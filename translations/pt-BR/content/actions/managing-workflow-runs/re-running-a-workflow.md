---
title: Reexecutar um fluxo de trabalho
intro: Você pode reexecutar uma instância de um fluxo de trabalho. Reexecutar um fluxo de trabalho usa o mesmo `GITHUB_SHA` (commit SHA) e `GITHUB_REF` (Git ref) do evento original que acionou a execução do fluxo de trabalho.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Execute novamente um fluxo de trabalho usando a interface do usuário de {% data variables.product.prodname_dotcom %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. No canto superior direito do fluxo de trabalho, use o menu suspenso **Reexecutar trabalhos** e selecione **Reexecutar todos os trabalhos**{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}

### Execute novamente um fluxo de trabalho usando {% data variables.product.prodname_cli %}

{% data reusables.actions.actions-cli %}

Para executar novamente um fluxo de trabalho com falha, use o subcomando `executar novamente`. Substitua `run-id` pelo ID da execução com falha que você deseja executar novamente.  Se você não especificar um `run-id`, {% data variables.product.prodname_cli %} irá retornar um menu interativo para você escolher uma execução com falha recente.

```shell
gh run rerun <em>run-id</em>
```

Para visualizar o progresso da execução do fluxo de trabalho, use o subcomando `executar inspeção` e selecione a execução na lista interativa.

```shell
gh run watch
```
