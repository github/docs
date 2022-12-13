---
title: Reexecutando fluxos de trabalho e trabalhos
intro: 'Você pode executar novamente um fluxo de trabalho{% ifversion re-run-jobs %}, todos os trabalhos que falharam na execução de um fluxo de trabalho ou trabalhos específicos em uma execução de fluxo de trabalho{% endif %} até 30 dias após a execução inicial.'
permissions: People with write permissions to a repository can re-run workflows in the repository.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 086a57b238b4a11e38013997dfcb85418a6961bd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147419718'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre a reexecução de fluxos de trabalho e trabalhos

A nova execução de um fluxo de trabalho{% ifversion re-run-jobs %} ou de trabalhos em um fluxo de trabalho{% endif %} usa o mesmo `GITHUB_SHA` (SHA do commit) e a mesma `GITHUB_REF` (referência do Git) do evento original que disparou a execução de fluxo de trabalho. {% ifversion actions-stable-actor-ids %}O fluxo de trabalho usará os privilégios do ator que inicialmente disparou o fluxo de trabalho, não os privilégios do ator que iniciou a execução novamente. {% endif %}Você pode executar novamente um fluxo de trabalho{% ifversion re-run-jobs %} ou trabalhos em um fluxo de trabalho{% endif %} até 30 dias após a execução inicial.{% ifversion re-run-jobs %} Você não poderá executar novamente trabalhos em um fluxo de trabalho depois que os logs ultrapassarem os limites de retenção. Para obter mais informações, confira "[Limites de uso, cobrança e administração](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy)".{% endif %} {% ifversion debug-reruns %} Ao executar novamente um fluxo de trabalho ou os trabalhos em um fluxo de trabalho, você pode habilitar o log de depuração para a nova execução. Isso habilitará o log de diagnóstico do executor e o log de depuração de etapas para a execução nova. Para obter mais informações sobre o log de depuração, confira "[Como habilitar o log de depuração](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)".{% endif %}

## Reexecutar todos os trabalhos em um fluxo de trabalho

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
1. No canto superior direito do fluxo de trabalho, use o menu suspenso **Executar os trabalhos novamente** e selecione **Executar todos os trabalhos novamente**.

   Se nenhum trabalho falhar, você não verá o menu suspenso **Executar os trabalhos novamente**. Em vez disso, clique em **Executar todos os trabalhos novamente**.
    ![Menu suspenso Executar verificações novamente](/assets/images/help/repository/rerun-checks-drop-down.png) {% endif %} {% ifversion ghes < 3.5 or ghae %}
1. No canto superior direito do fluxo de trabalho, use o menu suspenso **Executar os trabalhos novamente** e selecione **Executar todos os trabalhos novamente**.
    ![Menu suspenso Executar verificações novamente](/assets/images/help/repository/rerun-checks-drop-down-updated.png) {% endif %} {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para executar novamente uma execução de fluxo de trabalho com falha, use o subcomando `run rerun`. Substitua `run-id` pela ID da execução com falha que deseja executar novamente.  Se você não especificar uma `run-id`, a {% data variables.product.prodname_cli %} retornará um menu interativo para você escolher uma execução recente com falha.

```shell
gh run rerun <em>run-id</em>
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --debug
```

{% endif %}

Para ver o progresso da execução do fluxo de trabalho, use o subcomando `run watch` e selecione a execução na lista interativa.

```shell
gh run watch
```

{% endcli %}

{% ifversion re-run-jobs %}
## Reexecutar trabalhos que falharam em um fluxo de trabalho

Se qualquer trabalho na execução de um fluxo de trabalho falhar, você poderá executar novamente apenas os trabalhos que falharam. Ao reexecutar trabalhos que falharam em fluxo de trabalho, uma nova execução do fluxo de trabalho será iniciada para todos os trabalhos que falharam e seus dependentes. Todas as saídas para quaisquer trabalhos bem-sucedidos na execução anterior do fluxo de trabalho serão usadas para a nova execução. Todos os artefatos criados na execução inicial estarão disponíveis na reexecução. Todas as regras de proteção de ambiente que passaram na execução anterior serão automaticamente passadas na reexecução.

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. No canto superior direito do fluxo de trabalho, use o menu suspenso **Executar os trabalhos novamente** e selecione **Executar os trabalhos com falha novamente**.
    ![Menu suspenso Executar trabalhos com falha novamente](/assets/images/help/repository/rerun-failed-jobs-drop-down.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Para executar os trabalhos com falha novamente em uma execução de fluxo de trabalho, use o subcomando `run rerun` com o sinalizador `--failed`. Substitua `run-id` pela ID da execução para a qual deseja executar novamente os trabalhos com falha. Se você não especificar uma `run-id`, a {% data variables.product.prodname_cli %} retornará um menu interativo para você escolher uma execução recente com falha.

```shell
gh run rerun <em>run-id</em> --failed
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --failed --debug
```

{% endif %} {% endcli %}

## Reexecutando um trabalho específico em um fluxo de trabalho

Ao executar novamente um trabalho específico em um fluxo de trabalho, uma nova execução do fluxo de trabalho será iniciada para o trabalho e para quaisquer dependentes. Todas as saídas para outros trabalhos na execução anterior do fluxo de trabalho serão usadas para a nova execução. Todos os artefatos criados na execução inicial estarão disponíveis na reexecução. Todas as regras de proteção de ambiente que passaram na execução anterior serão automaticamente passadas na reexecução.

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Ao lado do trabalho que você deseja executar novamente, clique em {% octicon "sync" aria-label="The re-run icon" %}.
   ![Nova execução do trabalho selecionado](/assets/images/help/repository/re-run-selected-job.png)

   Alternativamente, clique em um trabalho para visualizar o registro. No registro, clique em {% octicon "sync" aria-label="The re-run icon" %}.
   ![Executar novamente o trabalho selecionado](/assets/images/help/repository/re-run-single-job-from-log.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Para executar novamente um trabalho específico em uma execução de fluxo de trabalho, use o subcomando `run rerun` com o sinalizador `--job`. Substitua `job-id` pela ID do trabalho que deseja executar novamente.

```shell
gh run rerun --job <em>job-id</em>
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job <em>job-id</em> --debug
```

{% endif %} {% endcli %}

{% endif %}

{% ifversion partial-reruns-with-reusable %}

## Executar novamente fluxos de trabalho e trabalhos com fluxos de trabalho reutilizáveis

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
## Revisando execuções de workflows anteriores

Você pode ver os resultados de suas tentativas anteriores de executar um fluxo de trabalho. Você também pode visualizar execuções de workflows anteriores do fluxo de trabalho usando a API. Para obter mais informações, confira ["Obter uma execução de fluxo de trabalho"](/rest/reference/actions#get-a-workflow-run).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {%- ifversion re-run-jobs %}
1. Todas as tentativas de execução anteriores são mostradas no menu suspenso **Mais recente**.
   ![Tentativas de execução anteriores](/assets/images/help/repository/previous-run-attempts.png) {%- else %}
1. Todas as tentativas anteriores de execução são mostradas no painel esquerdo.
    ![Nova execução do fluxo de trabalho](/assets/images/help/settings/actions-review-workflow-rerun.png) {%- endif %}
1. Clique em uma entrada para visualizar os resultados.

{% endif %}
