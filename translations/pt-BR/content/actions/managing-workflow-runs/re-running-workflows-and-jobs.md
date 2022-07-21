---
title: Reexecutando fluxos de trabalho e trabalhos
intro: 'Você pode executar novamente um fluxo de trabalho{% ifversion re-run-jobs %}, todos os trabalhos que falharam na execução de um fluxo de trabalho, ou trabalhos específicos em uma execução de fluxo de trabalho{% endif %} até 30 dias após sua execução inicial.'
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

## Sobre a reexecução de fluxos de trabalho e trabalhos

A reexecução de um fluxo de trabalho{% ifversion re-run-jobs %} ou trabalhos em um fluxo de trabalho{% endif %} usa o mesmo `GITHUB_SHA` (commit SHA) e `GITHUB_REF` (Git ref) do evento original que acionou a execução do fluxo de trabalho. Você pode re-executar um fluxo de trabalho{% ifversion re-run-jobs %} ou trabalhos em um fluxo de trabalho{% endif %} por até 30 dias após a execução inicial.{% ifversion re-run-jobs %} Você não pode re-executar trabalhos em um fluxo de trabalho uma vez que seus registros superaram seus limites de retenção. Para obter mais informações, consulte "[Limites de uso, cobrança e administração](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy)."{% endif %}{% ifversion debug-reruns %} Quando você re-executar um fluxo de trabalho ou trabalhos em um fluxo de trabalho, você pode habilitar o registro de depuração para a re-execução. Isso permitirá o registro de diagnóstico do executor e o registro de depuração de etapas para a nova execução. Para obter mais informações sobre o registro de depuração, consulte "[Habilitando o registro de depuração](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)"{% endif %}

## Reexecutar todos os trabalhos em um fluxo de trabalho

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
1. No canto superior direito do fluxo de trabalho, use o menu suspenso **Reexecutar trabalhos** e selecione **Reexecutar todos os trabalhos**.

   Se nenhum trabalho falhar, você não verá o menu suspenso **Reexecutar trabalhos**. Em vez disso, clique em **Reexecutar todos os trabalhos**. ![Menu suspenso reexecutar](/assets/images/help/repository/rerun-checks-drop-down.png)
{% endif %}
{% ifversion ghes < 3.5 or ghae %}
1. No canto superior direito do fluxo de trabalho, use o menu suspenso **Reexecutar trabalhos** e selecione **Reexecutar todos os trabalhos**. ![Menu suspenso Re-run checks (Executar verificações novamente)](/assets/images/help/repository/rerun-checks-drop-down-updated.png)
{% endif %}
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para executar novamente um fluxo de trabalho com falha, use o subcomando `executar novamente`. Substitua `run-id` pelo ID da execução com falha que você deseja executar novamente.  Se você não especificar um `run-id`, {% data variables.product.prodname_cli %} irá retornar um menu interativo para você escolher uma execução com falha recente.

```shell
gh run rerun <em>run-id</em>
```

{% ifversion debug-reruns %}
{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --debug
```

{% endif %}

Para visualizar o progresso da execução do fluxo de trabalho, use o subcomando `executar inspeção` e selecione a execução na lista interativa.

```shell
gh run watch
```

{% endcli %}

{% ifversion re-run-jobs %}
## Reexecutar trabalhos que falharam em um fluxo de trabalho

Se qualquer trabalho na execução de um fluxo de trabalho falhar, você poderá executar novamente apenas os trabalhos que falharam. Ao reexecutar trabalhos que falharam em fluxo de trabalho, uma nova execução do fluxo de trabalho será iniciada para todos os trabalhos que falharam e seus dependentes. Todas as saídas para quaisquer trabalhos bem-sucedidos na execução anterior do fluxo de trabalho serão usadas para a nova execução. Todos os artefatos criados na execução inicial estarão disponíveis na reexecução. Todas as regras de proteção de ambiente que passaram na execução anterior serão automaticamente passadas na reexecução.

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. No canto superior direito do fluxo de trabalho, use o menu suspenso **Reexecutar trabalhos** e selecione **Reexecutar trabalhos com falhas**. ![Menu suspenso de executar novamente trabalhos com falha](/assets/images/help/repository/rerun-failed-jobs-drop-down.png)
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Para executar novamente trabalhos que falharam em um fluxo de trabalho executado, use o subcomando `executar novamente` com o sinalizador `--failed`. Substitua `run-id` pelo ID da execução para o qual você deseja reexecutar trabalhos que falharam. Se você não especificar um `run-id`, {% data variables.product.prodname_cli %} irá retornar um menu interativo para você escolher uma execução com falha recente.

```shell
gh run rerun <em>run-id</em> --failed
```

{% ifversion debug-reruns %}
{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --failed --debug
```

{% endif %}
{% endcli %}

## Reexecutando um trabalho específico em um fluxo de trabalho

Ao executar novamente um trabalho específico em um fluxo de trabalho, uma nova execução do fluxo de trabalho será iniciada para o trabalho e para quaisquer dependentes. Todas as saídas para outros trabalhos na execução anterior do fluxo de trabalho serão usadas para a nova execução. Todos os artefatos criados na execução inicial estarão disponíveis na reexecução. Todas as regras de proteção de ambiente que passaram na execução anterior serão automaticamente passadas na reexecução.

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Ao lado do trabalho que você deseja executar novamente, clique em {% octicon "sync" aria-label="The re-run icon" %}. ![Reexecutar trabalho selecionado](/assets/images/help/repository/re-run-selected-job.png)

   Alternativamente, clique em um trabalho para visualizar o registro. No registro, clique em {% octicon "sync" aria-label="The re-run icon" %}. ![Reexecutar trabalho selecionado](/assets/images/help/repository/re-run-single-job-from-log.png)
{% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Para executar novamente um trabalho específico em uma execução de fluxo de trabalho, use o subcomando `executar novamente` com o sinalizador `--job`. Substitua `job-id` pelo ID do trabalho que você deseja executar novamente.

```shell
gh run rerun --job <em>job-id</em>
```

{% ifversion debug-reruns %}
{% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job <em>job-id</em> --debug
```

{% endif %}
{% endcli %}

{% endif %}

{% ifversion partial-reruns-with-reusable %}

## Re-executar fluxos de trabalho e trabalhos com fluxos de trabalho reutilizáveis

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
## Revisando execuções de workflows anteriores

Você pode ver os resultados de suas tentativas anteriores de executar um fluxo de trabalho. Você também pode visualizar execuções de workflows anteriores do fluxo de trabalho usando a API. Para obter mais informações, consulte ["Obter uma execução de workflow"](/rest/reference/actions#get-a-workflow-run).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{%- ifversion re-run-jobs %}
1. Quaisquer tentativas anteriores de execução são exibidas no menu suspenso **mais recentes**. ![Tentativas de execução anteriores](/assets/images/help/repository/previous-run-attempts.png)
{%- else %}
1. Todas as tentativas anteriores de execução são mostradas no painel esquerdo. ![Reexecutar fluxo de trabalho](/assets/images/help/settings/actions-review-workflow-rerun.png)
{%- endif %}
1. Clique em uma entrada para visualizar os resultados.

{% endif %}
