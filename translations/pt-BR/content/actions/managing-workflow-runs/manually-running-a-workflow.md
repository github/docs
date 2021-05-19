---
title: Executando manualmente um fluxo de trabalho
intro: 'Quando um fluxo de trabalho é configurado para ser executado no evento `workflow_dispatch`, você pode executar o fluxo de trabalho usando a aba de Ações em {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_cli %} ou a API REST.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Configurar um fluxo de trabalho para ser executado manualmente

Para executar um fluxo de trabalho manualmente, o fluxo de trabalho deve ser configurado para ser executado no evento `workflow_dispatch`. Para obter mais informações sobre a configuração do evento `workflow_despatch`, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

### Executar um fluxo de trabalho em {% data variables.product.prodname_dotcom %}

Para acionar o evento `workflow_dispatch` em {% data variables.product.prodname_dotcom %}, seu fluxo de trabalho deve estar no branch-padrão. Siga estas etapas para acionar manualmente uma execução do fluxo de trabalho.

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja executar. ![ações selecionam fluxo de trabalho](/assets/images/actions-select-workflow.png)
1. Acima da lista de execuções de fluxo de trabalho, selecione **Executar**de fluxo de trabalho . ![expedição de fluxo de trabalho ações](/assets/images/actions-workflow-dispatch.png)
1. Selecione o ramo onde o fluxo de trabalho será executado e digite os parâmetros de entrada usados pelo fluxo de trabalho. Clique em **Executar**de fluxo de trabalho . ![ações executar manualmente fluxo de trabalho](/assets/images/actions-manually-run-workflow.png)

### Executar um fluxo de trabalho usando {% data variables.product.prodname_cli %}

{% data reusables.actions.actions-cli %}

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

### Executar um fluxo de trabalho usando a API REST

Ao usar a API REST, você configura as entradas de `` e `ref` como parâmetros do corpo de solicitação. Se as entradas forem omitidas, os valores padrão definidos no arquivo de fluxo de trabalho ão usados.

Para obter mais informações sobre como usar a API REST, consulte o "[Criar um evento de expedição de fluxo de trabalho](/rest/reference/actions/#create-a-workflow-dispatch-event)."
