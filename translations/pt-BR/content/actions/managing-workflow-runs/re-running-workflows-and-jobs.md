---
title: Reexecutando fluxos de trabalho e trabalhos
intro: Você pode executar novamente a execução do workflow até 30 dias após sua execução inicial.
permissions: People with write permissions to a repository can re-run workflows in the repository.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Reexecutar todos os trabalhos em um fluxo de trabalho

A reexecução de um fluxo de trabalho usa o mesmo `GITHUB_SHA` (commit SHA) e `GITHUB_REF` (Git ref) do evento original que acionou a execução do fluxo de trabalho. Você pode executar novamente um fluxo de trabalho por até 30 dias após a execução inicial.

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% ifversion fpt or ghes > 3.2 or ghae-issue-4721 or ghec %}
1. No canto superior direito do fluxo de trabalho, use o menu suspenso **Reexecutar trabalhos** e selecione **Reexecutar todos os trabalhos** ![Menu suspenso reexecutar](/assets/images/help/repository/rerun-checks-drop-down.png)
{% endif %}
{% ifversion ghes < 3.3 or ghae %}
1. No canto superior direito do fluxo de trabalho, use o menu suspenso **Reexecutar trabalhos** e selecione **Reexecutar todos os trabalhos**. ![Menu suspenso Re-run checks (Executar verificações novamente)](/assets/images/help/repository/rerun-checks-drop-down-updated.png)
{% endif %}

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

{% ifversion fpt or ghes > 3.2 or ghae-issue-4721 or ghec %}
### Revisando execuções de workflows anteriores

Você pode ver os resultados de suas tentativas anteriores de executar um fluxo de trabalho. Você também pode visualizar execuções de workflows anteriores do fluxo de trabalho usando a API. Para obter mais informações, consulte ["Obter uma execução de workflow"](/rest/reference/actions#get-a-workflow-run).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Todas as tentativas anteriores de execução são mostradas no painel esquerdo. ![Reexecutar fluxo de trabalho](/assets/images/help/settings/actions-review-workflow-rerun.png)
1. Clique em uma entrada para visualizar os resultados.

{% endif %}
