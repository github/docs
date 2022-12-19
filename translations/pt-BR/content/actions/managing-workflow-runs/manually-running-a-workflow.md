---
title: Executar um fluxo de trabalho manualmente
intro: 'Quando um fluxo de trabalho é configurado para ser executado no evento `workflow_dispatch`, você pode executar o fluxo de trabalho usando a guia Ações no {% data variables.product.prodname_dotcom %}, a {% data variables.product.prodname_cli %} ou a API REST.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manually run a workflow
ms.openlocfilehash: 22717c31a6bc2599f066b0e870f0aa652c18cc6f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095093'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Configurar um fluxo de trabalho para ser executado manualmente

Para executar um fluxo de trabalho manualmente, o fluxo de trabalho precisa ser configurado para ser executado no evento `workflow_dispatch`. Para disparar o evento `workflow_dispatch`, seu fluxo de trabalho precisa estar no branch padrão. Para obter mais informações sobre o evento `workflow_dispatch`, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

{% data reusables.repositories.permissions-statement-write %}

## Executando um fluxo de trabalho

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja executar.
![selecionar fluxo de trabalho nas ações](/assets/images/actions-select-workflow.png)
1. Acima da lista de execuções de fluxo de trabalho, selecione **Executar fluxo de trabalho**.
![expedição do fluxo de trabalho das ações](/assets/images/actions-workflow-dispatch.png)
1. Use o menu suspenso **Branch** para selecionar o branch do fluxo de trabalho e digite os parâmetros de entrada. Clique em **Executar fluxo de trabalho**.
![fluxo de trabalho da execução manual das ações](/assets/images/actions-manually-run-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para executar um fluxo de trabalho, use o subcomando `workflow run`. Substitua o parâmetro `workflow` pelo nome, pela ID ou pelo nome do arquivo de fluxo de trabalho que deseja executar. Por exemplo, `"Link Checker"`, `1234567` ou `"link-check-test.yml"`. Se você não especificar um fluxo de trabalho, {% data variables.product.prodname_cli %} irá retornar um menu interativo para você escolher um fluxo de trabalho.

```shell
gh workflow run <em>workflow</em>
```

Se o fluxo de trabalho aceitar entradas, {% data variables.product.prodname_cli %} solicitará que você os insira. Como alternativa, você pode usar `-f` ou `-F` para adicionar uma entrada no formato `key=value`. Use `-F` para fazer a leitura de um arquivo.

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

Você também pode passar as entradas como JSON usando a entrada padrão.

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

Para executar um fluxo de trabalho em um branch que não seja o branch padrão do repositório, use o sinalizador `--ref`.

```shell
gh workflow run <em>workflow</em> --ref <em>branch-name</em>
```

Para ver o progresso da execução do fluxo de trabalho, use o subcomando `run watch` e selecione a execução na lista interativa.

```shell
gh run watch
```

{% endcli %}

## Executar um fluxo de trabalho usando a API REST

Ao usar a API REST, você configura os parâmetros do corpo da solicitação `inputs` e `ref`. Se as entradas forem omitidas, serão usados os valores-padrão definidos no arquivo de fluxo de trabalho.

{% note %}

**Nota:** você pode definir até 10 `inputs` para um evento `workflow_dispatch`.

{% endnote %}

Para obter mais informações sobre como usar a API REST, confira "[Criar um evento de expedição de fluxo de trabalho](/rest/reference/actions/#create-a-workflow-dispatch-event)".
