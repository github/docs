---
title: Visualizar o histórico de execução do fluxo de trabalho
intro: Você pode visualizar registros para cada execução de um fluxo de trabalho. Os registros incluem a situação de cada trabalho e a etapa de um fluxo de trabalho.
redirect_from:
  - /actions/managing-workflow-runs/viewing-workflow-run-history
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: View workflow run history
ms.openlocfilehash: bfef1ccd9f15480000332aec3ced6dc326cb9af3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145096102'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

### Visualizando execuções de fluxo de trabalho recentes

Para listar as execuções de fluxo de trabalho recentes, use o subcomando `run list`.

```shell
gh run list
```

Para especificar o número máximo de execuções a serem retornadas, use o sinalizador `-L` ou `--limit`. O padrão é `10`.

```shell
gh run list --limit 5
```

Para retornar apenas as execuções de fluxo de trabalho especificadas, use o sinalizador `-w` ou `--workflow`.  Substitua `workflow` pelo nome, pela ID ou pelo nome de arquivo do fluxo de trabalho. Por exemplo, `"Link Checker"`, `1234567` ou `"link-check-test.yml"`.

```shell
gh run list --workflow <em>workflow</em>
```

### Visualizar detalhes para uma execução específica do fluxo de trabalho

Para ver os detalhes de uma execução de fluxo de trabalho específica, use o subcomando `run view`. Substitua `run-id` pela ID da execução que deseja ver. Se você não especificar uma `run-id`, a {% data variables.product.prodname_cli %} retornará um menu interativo para você escolher uma execução recente.

```shell
gh run view <em>run-id</em>
```

Para incluir as etapas de trabalho na saída, use o sinalizador `-v` ou `--verbose`.

```shell
gh run view <em>run-id</em> --verbose
```

Para ver os detalhes de um trabalho específico na execução, use o sinalizador `-j` ou `--job`.  Substitua `job-id` pela ID do trabalho que deseja ver.

```shell
gh run view --job <em>job-id</em>
```

Para ver o log completo de um trabalho, use o sinalizador `--log`.

```shell
gh run view --job <em>job-id</em> --log
```

Use o sinalizador `--exit-status` para sair com um status diferente de zero se a execução falhar. Por exemplo:

```shell
gh run view 0451 --exit-status && echo "run pending or passed"
```

{% endcli %}
