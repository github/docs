---
title: Executando manualmente um fluxo de trabalho
intro: 'Quando um fluxo de trabalho é configurado para ser executado no evento `workflow_dispatch`, você pode executar o fluxo de trabalho usando a aba de Ações em {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_cli %} ou a API REST.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Executar um fluxo de trabalho manualmente
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Configurar um fluxo de trabalho para ser executado manualmente

Para executar um fluxo de trabalho manualmente, o fluxo de trabalho deve ser configurado para ser executado no evento `workflow_dispatch`. Para acionar o evento `workflow_dispatch`, seu fluxo de trabalho deve estar no branch padrão. Para obter mais informações sobre a configuração do evento `workflow_despatch`, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

{% data reusables.repositories.permissions-statement-write %}

## Executando um fluxo de trabalho

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja executar. ![ações selecionam fluxo de trabalho](/assets/images/actions-select-workflow.png)
1. Acima da lista de execuções de fluxo de trabalho, selecione **Executar**de fluxo de trabalho . ![expedição de fluxo de trabalho ações](/assets/images/actions-workflow-dispatch.png)
1. Use o menu suspenso **Branch** para selecionar o branch do fluxo de trabalho e digite os parâmetros de entrada. Clique em **Executar**de fluxo de trabalho . ![ações executar manualmente fluxo de trabalho](/assets/images/actions-manually-run-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para executar um fluxo de trabalho, use o subcomando `execução do fluxo de trabalho`. Substitua o parâmetro `fluxo de trabalho` Pelo nome, ID ou nome do arquivo do fluxo de trabalho que você deseja executar. Por exemplo, `"Verificador de Link"`, `1234567`, ou `"link-check-test.yml"`. Se você não especificar um fluxo de trabalho, {% data variables.product.prodname_cli %} irá retornar um menu interativo para você escolher um fluxo de trabalho.

```shell
gh workflow run <em>workflow</em>
```

Se o fluxo de trabalho aceitar entradas, {% data variables.product.prodname_cli %} solicitará que você os insira. Como alternativa, você pode usar `-f` ou `-F` para adicionar uma entrada no formato `key=value`. Use `-F` para ler de um arquivo.

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

Você também pode passar as entradas como JSON usando a entrada padrão.

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

Para executar um fluxo de trabalho em um branch que não seja o branch padrão do repositório, use o sinalizador`--ref`.

```shell
gh workflow run <em>workflow</em> --ref <em>branch-name</em>
```

Para visualizar o progresso da execução do fluxo de trabalho, use o subcomando `executar inspeção` e selecione a execução na lista interativa.

```shell
gh run watch
```

{% endcli %}

## Executar um fluxo de trabalho usando a API REST

When using the REST API, you configure the `inputs` and `ref` as request body parameters. Se as entradas forem omitidas, serão usados os valores-padrão definidos no arquivo de fluxo de trabalho.

For more information about using the REST API, see the "[Create a workflow dispatch event](/rest/reference/actions/#create-a-workflow-dispatch-event)."
