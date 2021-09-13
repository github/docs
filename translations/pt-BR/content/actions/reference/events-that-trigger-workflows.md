---
title: Eventos que acionam fluxos de trabalho
intro: 'É possível configurar a execução de seus fluxos de trabalho quando uma atividade específica acontece no {% data variables.product.product_name %} em um período agendado ou quando ocorre um evento externo do {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.actions %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Configurar eventos de fluxo de trabalho

É possível configurar fluxos de trabalho para serem executados por um ou mais eventos usando a a sintaxe do fluxo de trabalho `on`. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#on)".

{% data reusables.github-actions.actions-on-examples %}

{% note %}

**Observação:** Você não pode acionar novas execuções do fluxo de trabalho usando o `GITHUB_TOKEN`. Para obter mais informações, consulte "[Acionando novos fluxos de trabalho usando um token de acesso pessoal](#triggering-new-workflows-using-a-personal-access-token)".

{% endnote %}

As etapas a seguir ocorrem para acionar a execução de um fluxo de trabalho:

1. Um evento ocorre no seu repositório e o evento resultante tem um commit de SHA e ref de Git associados.
2. É feita uma pesquisa no diretório `.github/workflows` com relação aos arquivos do fluxo de trabalho no SHA ou Git ref associado. Os arquivos do fluxo de trabalho devem estar presentes nesse commit SHA ou no Git ref para serem considerados.

  Por exemplo, se o evento ocorreu em um determinado branch do repositório, os arquivos do fluxo de trabalho devem estar presentes no repositório desse branch.
1. Os arquivos do fluxo de trabalho para o commit SHA e Git ref são inspecionados, e aciona-se uma nova execução de fluxo de trabalho para quaisquer fluxos de trabalho com valores `on:` que correspondem ao evento de acionado.

  O fluxo de trabalho é executado no código do seu repositório no mesmo commit SHA e Git ref que acionou o evento. Quando um fluxo de trabalho é executado, o {% data variables.product.product_name %} configura as variáveis de ambiente `GITHUB_SHA` (commit SHA) e `GITHUB_REF` (Git ref) no ambiente do executor. Para obter mais informações, consulte "[Usando variáveis de ambiente](/actions/automating-your-workflow-with-github-actions/using-environment-variables)".

### Eventos programados

O evento `agenda` permite que você acione um fluxo de trabalho em um horário agendado.

{% data reusables.actions.schedule-delay %}

#### `schedule`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------- | ------------------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n/a                     | n/a                | Último commit no branch padrão | Branch padrão | Quando a execução do fluxo de trabalho programado é definida. Um fluxo de trabalho programado usa a [sintaxe cron POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Para obter mais informações, consulte "[Acionar um fluxo de trabalho com eventos](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)". |

{% data reusables.repositories.actions-scheduled-workflow-example %}

A sintaxe cron tem cinco campos separados por um espaço, e cada campo representa uma unidade de tempo.

```
┌───────────── minuto (0 - 59)
│ ┌───────────── hora (0 - 23)
│ │ ┌───────────── dia do mês (1 - 31)
│ │ │ ┌───────────── mês (1 - 12 ou JAN-DEZ)
│ │ │ │ ┌───────────── dia da semana (0 - 6 ou DOM-SAB)
│ │ │ │ │                                   
│ │ │ │ │
│ │ │ │ │
* * * * *
```

Você pode usar estes operadores em qualquer um dos cinco campos:

| Operador | Descrição                   | Exemplo                                                                                         |
| -------- | --------------------------- | ----------------------------------------------------------------------------------------------- |
| *        | Qualquer valor              | `* * * * *` executa cada minuto de todos os dias.                                               |
| ,        | Separador de lista de valor | `2,10 4,5 * * *` executa no minuto 2 e 10 da quarta e quinta hora de todos os dias.             |
| -        | Intervalo de valores        | `0 4-6 * * *` executa no minuto 0 da quarta, quinta e sexta hora.                               |
| /        | Valores de etapa            | `20/15 * * * *` executa a cada 15 minutos começando do miuto 20 até o 59 (minutos 20, 35 e 50). |

{% note %}

**Observação:** o {% data variables.product.prodname_actions %} não é compatível com a sintaxe não padrão `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly` e `@reboot`.

{% endnote %}

Você pode usar [crontab guru](https://crontab.guru/) para ajudar a gerar a sintaxe cron e confirmar a hora em que ela será executada. Para ajudar você a começar, há também uma lista de [exemplos de crontab guru](https://crontab.guru/examples.html).

As notificações de fluxos de trabalho agendados são enviadas ao usuário que modificou a sintaxe cron no arquivo do fluxo de trabalho. Para obter mais informações, consulte "[Notificações para execuções do fluxo de trabalho](/actions/guides/about-continuous-integration#notifications-for-workflow-runs)".

### Eventos manuais

Você pode acionar as execuções de fluxo de trabalho manualmente. Para acionar fluxos de trabalho específicos em um repositório, use o evento `workflow_dispatch`. Para acionar mais de um fluxo de trabalho em um repositório e criar eventos personalizados e tipos de eventos, use o evento `repository_dispatch`.

#### `workflow_dispatch`

| Carga de evento webhook                                          | Tipos de atividade | `GITHUB_SHA`                                  | `GITHUB_REF`             |
| ---------------------------------------------------------------- | ------------------ | --------------------------------------------- | ------------------------ |
| [workflow_dispatch](/webhooks/event-payloads/#workflow_dispatch) | n/a                | Último commit de merge no branch `GITHUB_REF` | Branch que recebeu envio |

É possível configurar as propriedades de entrada definidas por personalização, os valores-padrão de entrada e as entradas obrigatórias para o evento diretamente no seu fluxo de trabalho. Quando o fluxo de trabalho é executado, você pode acessar os valores de entrada no `github.event.inputs` contexto. Para obter mais informações, consulte "[Contexto e sintaxe de expressão para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

Você pode acionar manualmente uma execução de fluxo de trabalho usando a API do {% data variables.product.product_name %} e do {% data variables.product.product_name %}. Para obter mais informações, consulte "[Executando um fluxo de trabalho manualmente](/actions/managing-workflow-runs/manually-running-a-workflow)."

 Ao ativar o evento em {% data variables.product.prodname_dotcom %}, você poderá fornecer a `ref` e quaisquer `entradas` diretamente no {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Usar entradas e saídas com uma ação](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)".

 Para acionar o evento do webhook `workflow_dispatch` usando a API REST, você deve enviar uma solicitação `POST` para um ponto de extremidade da API do {% data variables.product.prodname_dotcom %} e fornecer o `ref` e qualquer `entrada` necessária. Para obter mais informações, consulte o ponto de extremidade da API REST "[Criar um evento de envio de fluxo de trabalho](/rest/reference/actions/#create-a-workflow-dispatch-event)".

##### Exemplo

Para usar o evento `workflow_dispatch`, é necessário incluí-lo como um gatilho no seu arquivo de fluxo de trabalho do GitHub Actions. O exemplo abaixo só executa o fluxo de trabalho quando é acionado manualmente:

```yaml
on: workflow_dispatch
```

##### Exemplo de configuração de fluxo de trabalho

Este exemplo define o nome `` e `entradas de` domésticas e as imprime usando os contextos `github.event.inputs.name` e `github.event.inputs.home` . Se `home` não for fornecido, será impresso o valor-padrão 'The Octoverse'.

{% raw %}
```yaml
name: Manually triggered workflow
on:
  workflow_dispatch:
    inputs:
      name:
        description: 'Person to greet'
        required: true
        default: 'Mona the Octocat'
      home:
        description: 'location'
        required: false
        default: 'The Octoverse'

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Hello ${{ github.event.inputs.name }}!"
          eco "- em ${{ github.event.inputs.home }}!"
```
{% endraw %}

#### `repository_dispatch`

| Carga de evento webhook                                              | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| -------------------------------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [repository_dispatch](/webhooks/event-payloads/#repository_dispatch) | n/a                | Último commit no branch padrão | Branch padrão |

{% data reusables.github-actions.branch-requirement %}

Você pode usar a API do {% data variables.product.product_name %} para acionar um evento do webhook denominado [`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) quando quiser acionar um fluxo de trabalho para uma atividade que ocorre fora do {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Criar um evento de envio do repositório](/rest/reference/repos#create-a-repository-dispatch-event)".

Para acionar o evento webhook `repository_dispatch` personalizado, envie uma solicitação `POST` para um ponto de extremidade da API do {% data variables.product.product_name %} e forneça um nome de `event_type` para descrever o tipo de atividade. Para acionar a execução de um fluxo de trabalho, configure também o fluxo de trabalho para usar o evento `repository_dispatch`.

##### Exemplo

Por padrão, todos os `event_types` acionam a execução de um fluxo de trabalho. É possível limitar a execução do fluxo de trabalho quando um valor `event_type` específico for enviado na carga do webhook `repository_dispatch`. Você define os tipos de eventos enviados na carga `repository_dispatch` ao criar o evento de despacho de repositório.

```yaml
em:
  repository_dispatch:
    tipos: [opened, deleted]
```

### Eventos webhook

Você pode configurar seu fluxo de trabalho para executar quando eventos de webhook forem gerados em {% data variables.product.product_name %}. Alguns eventos são acionados por mais de um tipo de atividade. Se mais de um tipo de atividade acionar o evento, especifique quais tipos de atividade ativarão a execução do fluxo de trabalho. Para obter mais informações, consulte "[Webhooks](/webhooks).

Nem todos os eventos de webhook acionam fluxos de trabalho. Para obter a lista completa de eventos de webhook disponíveis e suas cargas, consulte "[Eventos e cargas de webhook](/developers/webhooks-and-events/webhook-events-and-payloads)".

#### `check_run`

Executa o fluxo de trabalho sempre que o evento `check_run` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[Execuções de verificação](/rest/reference/checks#runs)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                            | Tipos de atividade                                            | `GITHUB_SHA`                   | `GITHUB_REF`  |
| -------------------------------------------------- | ------------------------------------------------------------- | ------------------------------ | ------------- |
| [`check_run`](/webhooks/event-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed` | Último commit no branch padrão | Branch padrão |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando uma execução de verificação tiver sido `rerequested` ou `completed`.

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

#### `check_suite`

Executa o fluxo de trabalho sempre que o evento `check_suite` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[Conjuntos de verificações](/rest/reference/checks#suites)".

{% data reusables.github-actions.branch-requirement %}

{% note %}

**Observação:** Para evitar fluxos de trabalho recursivos, este evento não aciona fluxos de trabalho se o conjunto de verificação foi criado por {% data variables.product.prodname_actions %}.

{% endnote %}

| Carga de evento webhook                                | Tipos de atividade                                                         | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ------------------------------------------------------ | -------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`check_suite`](/webhooks/event-payloads/#check_suite) | - `completed`<br/>- `requested`<br/>- `rerequested`<br/> | Último commit no branch padrão | Branch padrão |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando um conjunto de verificações tiver sido `rerequested` ou `completed`.

```yaml
on:
  check_suite:
    types: [rerequested, completed]
```

#### `create`

Executa o fluxo de trabalho sempre que alguém cria um branch ou tag, o que aciona o evento `create`. Para obter informações sobre a API REST, consulte "[Criar uma referência](/rest/reference/git#create-a-reference)".

| Carga de evento webhook                      | Tipos de atividade | `GITHUB_SHA`                          | `GITHUB_REF`         |
| -------------------------------------------- | ------------------ | ------------------------------------- | -------------------- |
| [`create`](/webhooks/event-payloads/#create) | n/a                | Último commit no branch ou tag criado | Branch ou tag criado |

Por exemplo, você pode executar um fluxo de trabalho quando o evento `create` ocorrer.

```yaml
on:
  create
```

#### `delete`

Executa o fluxo de trabalho sempre que alguém exclui um branch ou tag, o que aciona o evento `delete`. Para obter informações sobre a API REST, consulte "[Excluir uma referência](/rest/reference/git#delete-a-reference)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                      | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| -------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [`delete`](/webhooks/event-payloads/#delete) | n/a                | Último commit no branch padrão | Branch padrão |

Por exemplo, você pode executar um fluxo de trabalho quando o evento `delete` ocorrer.

```yaml
on:
  delete
```

#### `implantação`

Executa o fluxo de trabalho sempre que alguém cria uma implantação, o que aciona o evento `deployment`. Implantações criadas com um commit SHA podem não ter um Git ref. Para obter informações sobre a API REST, consulte "[Implantações](/rest/reference/repos#deployments)".

| Carga de evento webhook                               | Tipos de atividade | `GITHUB_SHA`            | `GITHUB_REF`                                     |
| ----------------------------------------------------- | ------------------ | ----------------------- | ------------------------------------------------ |
| [`implantação`](/webhooks/event-payloads/#deployment) | n/a                | Commit a ser implantado | Branch ou tag a ser implantado (vazio se commit) |

Por exemplo, você pode executar um fluxo de trabalho quando o evento `deployment` ocorrer.

```yaml
on:
  deployment
```

#### `implantação_status`

Executa o fluxo de trabalho sempre que um terceiro fornece um status de implantação, o que aciona o evento `deployment_status`. Implantações criadas com um commit SHA podem não ter um Git ref. Para obter informações sobre a API REST, consulte "[Criar um status de implantação](/rest/reference/repos#create-a-deployment-status)".

| Carga de evento webhook                                             | Tipos de atividade | `GITHUB_SHA`            | `GITHUB_REF`                                     |
| ------------------------------------------------------------------- | ------------------ | ----------------------- | ------------------------------------------------ |
| [`implantação_status`](/webhooks/event-payloads/#deployment_status) | n/a                | Commit a ser implantado | Branch ou tag a ser implantado (vazio se commit) |

Por exemplo, você pode executar um fluxo de trabalho quando o evento `deployment_status` ocorrer.

```yaml
on:
  deployment_status
```

{% note %}

**Observação:** Quando o estado de um status de implantação está definido como `inativo`, um evento webhook não será criado.

{% endnote %}

#### `bifurcação`

Executa o fluxo de trabalho sempre que alguém bifurca um repositório, o que aciona o evento `fork`. Para obter informações sobre a API REST, consulte "[Criar uma bifurcação](/rest/reference/repos#create-a-fork)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                        | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ---------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [`bifurcação`](/webhooks/event-payloads/#fork) | n/a                | Último commit no branch padrão | Branch padrão |

Por exemplo, você pode executar um fluxo de trabalho quando o evento `fork` ocorrer.

```yaml
on:
  fork
```

#### `gollum`

Executa o fluxo de trabalho quando alguém cria ou atualiza uma página wiki, o que aciona o evento `gollum`.

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                      | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| -------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [`gollum`](/webhooks/event-payloads/#gollum) | n/a                | Último commit no branch padrão | Branch padrão |

Por exemplo, você pode executar um fluxo de trabalho quando o evento `gollum` ocorrer.

```yaml
on:
  gollum
```

#### `issue_comment`

Executa o fluxo de trabalho sempre que o evento `issue_comment` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[Comentários do problema](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                                                                      | Tipos de atividade                                                | `GITHUB_SHA`                   | `GITHUB_REF`  |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------ | ------------- |
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando um comentário de problema tiver sido `created` ou `deleted`.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

O evento `issue_comment` ocorre para comentários em ambos os problemas e pull requests. Para determinar se o evento `issue_comment` foi acionado a partir de um problema ou pull request, você poderá verificar a carga do evento para a propriedade `issue.pull_request` e usá-la como condição para ignorar um trabalho.

Por exemplo, você pode optar por executar o trabalho `pr_commented` quando eventos de comentários ocorrem em um pull request e executar o trabalho `issue_commented` quando os eventos de comentários ocorrem em um problema.

{% raw %}
```yaml
on: issue_comment

jobs:
  pr_commented:
    # This job only runs for pull request comments
    name: PR comment
    if: ${{ github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Comment on PR #${{ github.event.issue.number }}"

  issue_commented:
    # This job only runs for issue comments
    name: Issue comment
    if: ${{ !github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Comment on issue #${{ github.event.issue.number }}"
```
{% endraw %}

#### `Problemas`

Executa o fluxo de trabalho sempre que o evento `issues` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[problemas](/rest/reference/issues)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                         | Tipos de atividade                                                                                                                                                                                                                                                                                                                                                     | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`Problemas`](/webhooks/event-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Último commit no branch padrão | Branch padrão |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando um comentário tiver sido `opened`, `edited` ou `milestoned`.

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

#### `etiqueta`

Executa o fluxo de trabalho sempre que o evento `label` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[Etiquetas](/rest/reference/issues#labels)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                       | Tipos de atividade                                                | `GITHUB_SHA`                   | `GITHUB_REF`  |
| --------------------------------------------- | ----------------------------------------------------------------- | ------------------------------ | ------------- |
| [`etiqueta`](/webhooks/event-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando uma etiqueta tiver sido `created` ou `deleted`.

```yaml
on:
  label:
    types: [created, deleted]
```

#### `marco`

Executa o fluxo de trabalho sempre que o evento `milestone` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[Marcos](/rest/reference/issues#milestones)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                        | Tipos de atividade                                                                                          | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`marco`](/webhooks/event-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando um marco tiver sido `aberto` ou `apagado`.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

#### `page_build`

Executa o fluxo de trabalho sempre que alguém faz push em um branch habilitado para o {% data variables.product.product_name %} Pages, o que aciona o evento `page_build`. Para obter informações sobre a API REST, consulte "[Páginas](/rest/reference/repos#pages)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                              | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF` |
| ---------------------------------------------------- | ------------------ | ------------------------------ | ------------ |
| [`page_build`](/webhooks/event-payloads/#page_build) | n/a                | Último commit no branch padrão | n/a          |

Por exemplo, você pode executar um fluxo de trabalho quando o evento `page_build` ocorrer.

```yaml
on:
  page_build
```

#### `project`

Executa o fluxo de trabalho sempre que o evento `project` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[Projetos](/rest/reference/projects)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                        | Tipos de atividade                                                                                                                  | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`project`](/webhooks/event-payloads/#project) | - `created`<br/>- `updated`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando um projeto tiver sido `created` ou `deleted`.

```yaml
on:
  project:
    types: [created, deleted]
```

#### `project_card`

Executa o fluxo de trabalho sempre que o evento `project_card` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[Cartões de projeto](/rest/reference/projects#cards)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                                  | Tipos de atividade                                                                                             | `GITHUB_SHA`                   | `GITHUB_REF`  |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`project_card`](/webhooks/event-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` to an issue<br/>- `edited`<br/>- `deleted` | Último commit no branch padrão | Branch padrão |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando um cartão de projeto tiver sido `opened` ou `deleted`.

```yaml
on:
  project_card:
    types: [created, deleted]
```

#### `project_column`

Executa o fluxo de trabalho sempre que o evento `project_column` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[Colunas do projeto](/rest/reference/projects#columns)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                                      | Tipos de atividade                                                          | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ------------------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`project_column`](/webhooks/event-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Último commit no branch padrão | Branch padrão |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando uma coluna de projeto tiver sido `created` ou `deleted`.

```yaml
on:
  project_column:
    types: [created, deleted]
```

#### `público`

Executa o fluxo de trabalho sempre que alguém torna público um repositório privado, o que aciona o evento `public`. Para obter informações sobre a API REST, consulte "[Editar repositórios](/rest/reference/repos#edit)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                       | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| --------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [`público`](/webhooks/event-payloads/#public) | n/a                | Último commit no branch padrão | Branch padrão |

Por exemplo, você pode executar um fluxo de trabalho quando o evento `public` ocorrer.

```yaml
on:
  public
```

#### `pull_request`

Executa o fluxo de trabalho sempre que o evento `pull_request` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[Pull requests](/rest/reference/pulls)".

{% note %}

**Observação:** por padrão, um fluxo de trabalho só é executado quando o tipo de atividade de uma `pull_request` é `opened`, `synchronize` ou `reopened`. Para acionar fluxos de trabalho para mais tipos de atividade, use a palavra-chave `types`.

{% endnote %}

| Carga de evento webhook                                  | Tipos de atividade                                                                                                                                                                                                                                                                                                                                   | `GITHUB_SHA`                                  | `GITHUB_REF`                                      |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------- |
| [`pull_request`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | Último commit de merge no branch `GITHUB_REF` | Branch de merge da PR `refs/pull/:prNumber/merge` |

É possível estender ou limitar os tipos de atividade padrão usando a palavra-chave `types`. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

Por exemplo, você pode executar um fluxo de trabalho quando um pull request tiver sido `atribuído`, `aberto`, `sincronizado` ou `reaberto`.

```yaml
on:
  pull_request:
    types: [assigned, opened, synchronize, reopened]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

#### `pull_request_review`

Executa o fluxo de trabalho sempre que o evento `pull_request_review` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[Revisões de pull request](/rest/reference/pulls#reviews)".

| Carga de evento webhook                                                | Tipos de atividade                                         | `GITHUB_SHA`                                  | `GITHUB_REF`                                      |
| ---------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------- |
| [`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Último commit de merge no branch `GITHUB_REF` | Branch de merge da PR `refs/pull/:prNumber/merge` |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando uma revisão de pull request tiver sido `edited` ou `dismissed`.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

#### `pull_request_review_comment`

Executa o fluxo de trabalho sempre que um comentário no diff unificado de uma pull request é modificado, o que aciona o evento `pull_request_review_comment`. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte [Comentários da revisão](/rest/reference/pulls#comments).

| Carga de evento webhook                                                                | Tipos de atividade                                     | `GITHUB_SHA`                                  | `GITHUB_REF`                                      |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------- | ------------------------------------------------- |
| [`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted` | Último commit de merge no branch `GITHUB_REF` | Branch de merge da PR `refs/pull/:prNumber/merge` |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando um comentário de revisão de pull request tiver sido `created` ou `deleted`.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

#### `pull_request_target`

Este evento é executado no contexto da base do pull request, em vez de no commit de merge como o evento `pull_request` faz.  Isso impede a execução de código de fluxo de trabalho inseguro do cabeçalho do pull request que poderia alterar seu repositório ou roubar quaisquer segredos que você usa no fluxo de trabalho. Este evento permite que você faça coisas como criar fluxos de trabalho que etiquetam e comentam em pull requests com base no conteúdo da carga do evento.

{% warning %}

**Aviso:** O evento `pull_request_target` recebe um token de repositório de leitura/gravação e pode acessar segredos, mesmo quando é acionado a partir de uma bifurcação. Embora o fluxo de trabalho seja executado no contexto da base do pull request, você deve certificar-se de que você não irá fazer checkout, construir ou executar o código não confiável do pull request com este evento. Além disso, qualquer cache compartilham o mesmo escopo do branch de base e ajuda a evitar envenenamento do cache. Você não deve salvar o cache se houver a possibilidade de que o conteúdo de cache ter sido alterado. Para obter mais informações, consulte "[Proteger seus GitHub Actions e fluxos de trabalho: Evitar solicitações pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)" no site do GitHub Security Lab.

{% endwarning %}

| Carga de evento webhook                                         | Tipos de atividade                                                                                                                                                                                                                                                                                                                                   | `GITHUB_SHA`                          | `GITHUB_REF`                |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------- |
| [`pull_request_target`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | Último commit no branch de base do PR | Branch-base do pull request |

Por padrão, um fluxo de trabalho só é executado quando o tipo de atividade de `pull_request_target`é `aberto,`, `sincronizado` ou `reaberto`. Para acionar fluxos de trabalho para mais tipos de atividade, use a palavra-chave `types`. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

Por exemplo, você pode executar um fluxo de trabalho quando um pull request tiver sido `atribuído`, `aberto`, `sincronizado` ou `reaberto`.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

{% endif %}

#### `push`

{% note %}

**Observação:** a carga de webhook disponível para o GitHub Actions não inclui os atributos `added`, `removed` e `modified` no objeto `commit`. É possível recuperar o objeto de commit completo usando a API REST. Para obter mais informações, consulte "[Obter um commit](/rest/reference/repos#get-a-commit)".

{% endnote %}

Executa o fluxo de trabalho quando alguém faz push em um branch de repositório, o que aciona o evento `push`.

| Carga de evento webhook                  | Tipos de atividade | `GITHUB_SHA`                                                              | `GITHUB_REF`   |
| ---------------------------------------- | ------------------ | ------------------------------------------------------------------------- | -------------- |
| [`push`](/webhooks/event-payloads/#push) | n/a                | Commit com push, exceto se excluindo um branch (quando é o branch padrão) | ref atualizado |

Por exemplo, você pode executar um fluxo de trabalho quando o evento `push` ocorrer.

```yaml
on:
  push
```

#### `registry_package`

Executa o seu fluxo de trabalho sempre que um pacote for `publicado` ou `atualizado`. Para obter mais informações, consulte "[Gerenciando pacotes com o {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages)".

| Carga de evento webhook                                 | Tipos de atividade                     | `GITHUB_SHA`               | `GITHUB_REF`                      |
| ------------------------------------------------------- | -------------------------------------- | -------------------------- | --------------------------------- |
| [`registry_package`](/webhooks/event-payloads/#package) | - `publicado`<br/>- `atualizado` | Commit do pacote publicado | Branch ou tag do pacote publicado |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando um pacote tiver sido `publicado`.

```yaml
em:
  registry_package:
    tipos: [published]
```

#### `versão`

{% note %}

**Observação:** O evento `versão` não é acionado para versões de rascunho.

{% endnote %}

Executa o fluxo de trabalho sempre que o evento `release` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[Versões](/rest/reference/repos#releases)".

| Carga de evento webhook                       | Tipos de atividade                                                                                                                                                | `GITHUB_SHA`                    | `GITHUB_REF`  |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------- |
| [`versão`](/webhooks/event-payloads/#release) | - `publicado` <br/>- `não publicado` <br/>- `criado` <br/>- `editado` <br/>- `excluído` <br/>- `pré-lançado`<br/> - `lançado` | Último commit na versão com tag | Tag da versão |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando uma versão tiver sido `published`.

```yaml
on:
  release:
    types: [published]
```

{% note %}

**Observação:** O tipo</code>prereleased`não será acionado para pré-versões publicadas a partir de versões de rascunho, mas o tipo <code>published` será acionado. Se você quiser que um fluxo de trabalho seja executado quando *e* forem publicadas pré-versões, assine `published` em vez de `released` e `prereleased`.

{% endnote %}

#### `status`

Executa o fluxo de trabalho sempre que o status de um commit do Git muda, o que aciona o evento `status`. Para obter informações sobre a API REST, consulte [Status](/rest/reference/repos#statuses).

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                      | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF` |
| -------------------------------------------- | ------------------ | ------------------------------ | ------------ |
| [`status`](/webhooks/event-payloads/#status) | n/a                | Último commit no branch padrão | n/a          |

Por exemplo, você pode executar um fluxo de trabalho quando o evento `status` ocorrer.

```yaml
on:
  status
```

#### `inspecionar`

Executa o fluxo de trabalho sempre que o evento `watch` ocorre. {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre a API REST, consulte "[Marcar com uma estrela](/rest/reference/activity#starring)".

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                          | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ------------------------------------------------ | ------------------ | ------------------------------ | ------------- |
| [`inspecionar`](/webhooks/event-payloads/#watch) | - `started`        | Último commit no branch padrão | Branch padrão |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Por exemplo, você pode executar um fluxo de trabalho quando alguém marca um repositório com estrela, que é o tipo de atividade `started` que aciona o evento de inspeção.

```yaml
on:
  watch:
    types: [started]
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

#### `workflow_run`

{% data reusables.webhooks.workflow_run_desc %}

{% data reusables.github-actions.branch-requirement %}

| Carga de evento webhook                                  | Tipos de atividade                    | `GITHUB_SHA`                   | `GITHUB_REF`  |
| -------------------------------------------------------- | ------------------------------------- | ------------------------------ | ------------- |
| [`workflow_run`](/webhooks/event-payloads/#workflow_run) | - `completed`<br/>- `requested` | Último commit no branch padrão | Branch padrão |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

Se precisar filtrar os branches desse evento, você poderá usar `branches` ou `branches-ignore`.

Neste exemplo, um fluxo de trabalho está configurado para ser executado após o fluxo de trabalho "Executar Testes" separado ser concluído.

```yaml
on:
  workflow_run:
    workflows: ["Run Tests"]
    branches: [main]
    types: 
      - completed
      - requested
```

{% endif %}

Para executar um trabalho de fluxo de trabalho condicionalmente baseado no resultado da execução do fluxo de trabalho anterior, você pode usar a condicional [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif) ou [`jobs.<job_id>.steps[*].if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif) combinada com com a conclusão `` da execução anterior. Por exemplo:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'success' }}{% endraw %}
    steps:
      ...
  on-failure:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'failure' }}{% endraw %}
    steps:
      ...
```

### Acionar novos fluxos de trabalho usando um token de acesso pessoal

{% data reusables.github-actions.actions-do-not-trigger-workflows %} Para obter mais informações, consulte "[Efetuando a autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Se você deseja acionar um fluxo de trabalho a partir de uma execução do fluxo de trabalho, você pode acionar o evento usando um token de acesso pessoal. Você deverá criar um token de acesso pessoal e armazená-lo como um segredo. Para minimizar seus custos de uso {% data variables.product.prodname_actions %}, certifique-se de que você não cria execução de fluxo de trabalho recursivo ou não intencional. Para mais informações sobre como armazenar um token de acesso pessoal como segredo, consulte "[Criar e armazenar segredos criptografados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".
