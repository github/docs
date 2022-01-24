---
title: Eventos que acionam fluxos de trabalho
intro: 'É possível configurar a execução de seus fluxos de trabalho quando uma atividade específica acontece no {% data variables.product.product_name %} em um período agendado ou quando ocorre um evento externo do {% data variables.product.product_name %}.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/reference/events-that-trigger-workflows
  - /actions/learn-github-actions/events-that-trigger-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Eventos que acionam fluxos de trabalho
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre acionadores de fluxo de trabalho

Os acionadores de fluxo de trabalho são eventos que fazem com que um fluxo de trabalho seja executado. Esses eventos podem ser:

- Eventos que ocorrem no repositório do fluxo de trabalho
- Eventos que ocorrem fora de {% data variables.product.product_name %} e acionam um evento `repository_dispatch` em {% data variables.product.product_name %}
- Horários agendados
- Manual

Por exemplo, você pode configurar o fluxo de trabalho para executar quando um push é feito no branch padrão do seu repositório, quando uma versão é criada, ou quando um problema é aberto.

Os gatilhos de fluxo de trabalho estão definidos com a chave `on`. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#on)".

As etapas a seguir ocorrem para acionar a execução de um fluxo de trabalho:

1. Um evento ocorre no seu repositório. O evento tem um SHA de commit associado e um ref de Git.
1. {% data variables.product.product_name %} pesquisa no diretório `.github/workflows` no seu repositório para arquivos de fluxo de trabalho que estão presentes no commit SHA ou no ref do Git do evento.

1. A execução de um fluxo de trabalho é acionada para todos fluxos de trabalho com valores `on:` que correspondem ao evento de acionamento. Alguns eventos também exigem que o arquivo do fluxo de trabalho esteja presente no branch padrão do repositório para ser executado.

  Cada execução de fluxo de trabalho usará a versão do fluxo de trabalho que está presente no SHA do commit ou na ref do Git do evento. Quando um fluxo de trabalho é executado, o {% data variables.product.product_name %} configura as variáveis de ambiente `GITHUB_SHA` (commit SHA) e `GITHUB_REF` (Git ref) no ambiente do executor. Para obter mais informações, consulte "[Usando variáveis de ambiente](/actions/automating-your-workflow-with-github-actions/using-environment-variables)".

### Acionando um fluxo de trabalho a partir de um fluxo de trabalho

{% data reusables.github-actions.actions-do-not-trigger-workflows %} Para obter mais informações, consulte "[Efetuando a autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Se você deseja acionar um fluxo de trabalho de dentro de uma execução de fluxo de trabalho, você pode usar um token de acesso pessoal em vez de `GITHUB_TOKEN` para acionar eventos que exigem um token. Você deverá criar um token de acesso pessoal e armazená-lo como um segredo. Para minimizar seus custos de uso {% data variables.product.prodname_actions %}, certifique-se de que você não cria execução de fluxo de trabalho recursivo ou não intencional. Para obter mais informações sobre a criação de um token de acesso pessoal, consulte[Criando um token de acesso pessoal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)." Para mais informações sobre como armazenar um token de acesso pessoal como segredo, consulte "[Criar e armazenar segredos criptografados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

Por exemplo, o fluxo de trabalho a seguir usa um token de acesso pessoal (armazenado como um segredo chamado `MY_TOKEN`) para adicionar uma etiqueta a um problema por meio de {% data variables.product.prodname_cli %}. Todos os fluxos de trabalho que forem executados quando uma etiqueta é adicionada, serão executados assim que esta etapa for executada.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.MY_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

Inversamente, o fluxo de trabalho a seguir usa `GITHUB_TOKEN` para adicionar uma etiqueta a um problema. Ele não acionará nenhum fluxo de trabalho executado quando uma etiqueta é adicionada.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

## Usando eventos para acionar fluxos de trabalho

Use a chave `on` para especificar quais eventos acionam o seu fluxo de trabalho. Para obter mais informações sobre eventos que você pode usar, consulte "[Eventos disponíveis](#available-events)" abaixo.

{% data reusables.github-actions.actions-on-examples %}

## Usando informações do evento

As informações sobre o evento que desencadeou uma execução de fluxo de trabalho estão disponíveis no contexto `github.event`. As propriedades no contexto `github.event` dependem do tipo de evento que acionou o fluxo de trabalho. Por exemplo, um fluxo de trabalho acionado quando um problema está etiquetado teria informações sobre o problema e a etiqueta.

### Visualizando todas as propriedades de um evento

Referência à documentação de evento de webhook para propriedades comuns e cargas de exemplo. Para obter mais informações, consulte "[Eventos e cargas de Webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)".

Você também pode imprimir o contexto inteiro de `github.event` para ver quais propriedades estão disponíveis para o evento que acionou o seu fluxo de trabalho:

```yaml
jobs:
  print_context:
    runs-on: ubuntu-latest
    steps:
      - env:
          EVENT_CONTEXT: {% raw %}${{ toJSON(github.event) }}{% endraw %}
        run: |
          echo $EVENT_CONTEXT
```

### Acessando e usando as propriedades do evento

Você pode usar o contexto `github.event` no fluxo de trabalho. Por exemplo, o fluxo de trabalho a seguir é executado quando um pull request que muda `package*.json`, `.github/CODEOWNERS` ou `.github/workflows/**` é aberto. Se o autor do pull request (`github.event.pull_request.user.login`) não for `octobot` ou `dependabot[bot]`, o fluxo de trabalho usará o {% data variables.product.prodname_cli %} para etiquetar e comentar no pull request (`github.event.pull_request.number`).

```yaml
on:
  pull_request:
    types:
      - opened
    paths:
      - '.github/workflows/**'
      - '.github/CODEOWNERS'
      - 'package*.json'

jobs:
  triage:
    if: >-
      github.event.pull_request.user.login != 'octobot' &&
      github.event.pull_request.user.login != 'dependabot[bot]'
    runs-on: ubuntu-latest
    steps:
      - name: "Comment about changes we can't accept"
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          PR: {% raw %}${{ github.event.pull_request.html_url }}{% endraw %}
        run: |
          gh pr edit $PR --add-label 'invalid'
          gh pr comment $PR --body 'It looks like you edited `package*.json`, `.github/CODEOWNERS`, or `.github/workflows/**`. Nós não permitimos contribuições para esses arquivos. Consulte nossas [diretrizes de contribuição](https://github.com/octo-org/octo-repo/blob/main/CONTRIBUTING.md) para saber quais contribuições são aceitas.'
```

Para obter mais informações sobre os contextos, consulte "[Contextos](/actions/learn-github-actions/contexts)". Para obter mais informações sobre cargas de eventos, consulte "[Eventos Webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)".

## Controlando ainda mais como seu fluxo de trabalho será executado

If you want more granular control than events, event activity types, or event filters provide, you can use conditionals{% ifversion fpt or ghae or ghes > 3.1 or ghec %} and environments{% endif %} to control whether individual jobs or steps in your workflow will run.

### Usando condicionais

Você pode usar condicionais para controlar ainda mais se os trabalhos ou etapas no seu fluxo de trabalho serão executados. Se você quiser, por exemplo, que o fluxo de trabalho seja executado quando uma etiqueta específica for adicionada a um problema, você poderá acionar o tipo de atividade do evento `issues labeled` e usar uma condicional para verificar qual etiqueta acionou o fluxo de trabalho. O fluxo de trabalho a seguir será executado quando qualquer etiqueta for adicionada a um problema no repositório do fluxo de trabalho, mas a o trabalho `run_if_label_matches` só será executado se a etiqueta tiver o nome de `bug`.

```yaml
on:
  issues:
    types:
      - labeled

jobs:
  run_if_label_matches:
    if: github.event.label.name == 'bug'
    runs-on: ubuntu-latest
    steps:
      - run: echo 'The label was bug'
```

Para obter mais informações, consulte "[Expressões](/actions/learn-github-actions/expressions)".

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
### Usando ambientes para acionar trabalhos de fluxo de trabalho manualmente

Se você quiser acionar manualmente uma tarefa específica em um fluxo de trabalho, você pode usar um ambiente que exige a aprovação de uma equipe ou usuário específico. Primeiro, configure um ambiente com os revisores necessários. Para obter mais informações, consulte "[Usando ambientes para implantação](/actions/deployment/targeting-different-environments/using-environments-for-deployment)". Em seguida, faça referência ao nome do ambiente em um trabalho no seu fluxo de trabalho usando o a chave `environment:`. Qualquer trabalho que faz referência ao ambiente não será executado até que pelo menos um revisor aprove o trabalho.

Por exemplo, o seguinte fluxo de trabalho será executado sempre que houver um push para o principal. O trabalho `build` sempre será executado. The `publish` job will only run after the `build` job successfully completes (due to `needs: [build]`) and after all of the rules (including required reviewers) for the environment called `production` pass (due to `environment: production`).

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: build
        echo 'building'

  publish:
    needs: [build]
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: publish
        echo 'publishing'
```

{% note %}

{% data reusables.gated-features.environments %}

{% endnote %}
{% endif %}

## Eventos disponíveis

Alguns eventos têm vários tipos de atividades. Para esses eventos, você pode especificar quais tipos de atividade ativarão a execução de um fluxo de trabalho. Para obter mais informações sobre o significado de cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhook-events-and-payloads)". Observe que nem todos os eventos de webhook acionam fluxos de trabalho.

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4968  %}
### `branch_protection_rule`

| Carga de evento webhook                                                                                                 | Tipos de atividade                                     | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------ | ------------- |
| [`branch_protection_rule`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

Executa o fluxo de trabalho quando as regras de proteção de branch no repositório do fluxo de trabalho são alteradas. Para obter mais informações sobre as regras de proteção de branches, consulte "[Sobre branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)". Para informações sobre as APIs das regras de proteção de branch, consulte "[BranchProtectionRule](/graphql/reference/objects#branchprotectionrule)" na documentação da API do GraphQL ou "[Branches](/rest/reference/branches)" na documentação da API REST.


Por exemplo, você pode executar um fluxo de trabalho quando uma regra de proteção de branch tiver sido `criada` ou `excluída`:

```yaml
on:
  branch_protection_rule:
    types: [created, deleted]
```

{% endif %}

### `check_run`

| Carga de evento webhook                                                                        | Tipos de atividade                                                                          | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`check_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>-`requested_action` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

Executa o fluxo de trabalho quando ocorre a atividade relacionada a uma execução de verificação. Uma execução de verificação é um teste individual que faz parte de um conjunto de verificações. Para obter informações, consulte "[Primeiros passos com a API de Verificações](/rest/guides/getting-started-with-the-checks-api)". Para informações sobre as APIs de verificação, consulte "[CheckRun](/graphql/reference/objects#checkrun)" na documentação da API do GraphQL ou "[Verificações](/rest/reference/checks#runs)" na documentação da API REST.

Por exemplo, você pode executar um fluxo de trabalho quando uma execução de verificação tiver sido `rerequested` ou `completed`.

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

### `check_suite`

| Carga de evento webhook                                                                            | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| -------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [`check_suite`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_suite) | - `completed`      | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite)". Embora apenas o tipo de atividade `iniciado` seja compatível, especificar o tipo de atividade manterá o fluxo de trabalho específico se mais tipos de atividade forem adicionados posteriormente. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

{% note %}

**Observação:** Para evitar fluxos de trabalho recursivos, este evento não aciona fluxos de trabalho se o conjunto de verificação foi criado por {% data variables.product.prodname_actions %}.

{% endnote %}

Executa o fluxo de trabalho quando ocorre a atividade do conjunto de verificações. Um conjunto de verificações é uma coleção das execuções de verificação criadas para um commit específico. O conjunto de verificações resumem o status e a conclusão das execuções de verificação que estão no conjunto. Para obter informações, consulte "[Primeiros passos com a API de Verificações](/rest/guides/getting-started-with-the-checks-api)". Para obter informações sobre as APIs de Verificação, consulte "[CheckSuite](/graphql/reference/objects#checksuite)" na documentação da API do GraphQL ou "[Verificações](/rest/reference/checks#suites)" na documentação da API REST.

Por exemplo, você pode executar um fluxo de trabalho quando um conjunto de verificações tiver sido `concluído`.

```yaml
on:
  check_suite:
    types: [completed]
```

### `create`

| Carga de evento webhook                                                                  | Tipos de atividade | `GITHUB_SHA`                          | `GITHUB_REF`         |
| ---------------------------------------------------------------------------------------- | ------------------ | ------------------------------------- | -------------------- |
| [`create`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#create) | n/a                | Último commit no branch ou tag criado | Branch ou tag criado |

{% note %}

**Observação**: Um evento não será criado quando você criar mais de três tags de uma só vez.

{% endnote %}

Executa o fluxo de trabalho quando alguém cria uma referência Git (branch ou tag) no repositório do fluxo de trabalho. Para obter informações sobre APIs para criar uma referência do Git, consulte "[createRef](/graphql/reference/mutations#createref)" na documentação da API do GraphQL ou "[Criar uma referência](/rest/reference/git#create-a-reference)" na documentação da API REST.

Por exemplo, você pode executar um fluxo de trabalho quando o evento `create` ocorrer.

```yaml
on:
  create
```

### `delete`

| Carga de evento webhook                                                                  | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ---------------------------------------------------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [`delete`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#delete) | n/a                | Último commit no branch padrão | Branch padrão |

{% data reusables.github-actions.branch-requirement %}

{% note %}

**Observação**: Um evento não será criado quando você excluir mais de três tags de uma só vez.

{% endnote %}

Executa o fluxo de trabalho quando alguém exclui uma referência Git (branch ou tag) no repositório do fluxo de trabalho. For information about the APIs to delete a Git reference, see "[deleteRef](/graphql/reference/mutations#deleteref)" in the GraphQL API documentation or "[Delete a reference](/rest/reference/git#delete-a-reference)" in the REST API documentation.

Por exemplo, você pode executar um fluxo de trabalho quando o evento `delete` ocorrer.

```yaml
on:
  delete
```

### `implantação`

| Carga de evento webhook                                                                           | Tipos de atividade | `GITHUB_SHA`            | `GITHUB_REF`                                                             |
| ------------------------------------------------------------------------------------------------- | ------------------ | ----------------------- | ------------------------------------------------------------------------ |
| [`implantação`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment) | n/a                | Commit a ser implantado | Branch ou tag a ser implantado (vazio, se criado com o SHA de um commit) |

Executa o fluxo de trabalho quando alguém cria uma implantação no repositório do fluxo de trabalho. Implantações criadas com um commit SHA podem não ter um Git ref. Para obter informações sobre as APIs para criar uma implantação, consulte "[createDeploymen](/graphql/reference/mutations#createdeployment)" na documentação da API do GraphQL ou "[Implantações](/rest/reference/repos#deployments)" na documentação da API REST.

Por exemplo, você pode executar um fluxo de trabalho quando o evento `deployment` ocorrer.

```yaml
on:
  deployment
```

### `implantação_status`

| Carga de evento webhook                                                                                         | Tipos de atividade | `GITHUB_SHA`            | `GITHUB_REF`                                     |
| --------------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------- | ------------------------------------------------ |
| [`implantação_status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment_status) | n/a                | Commit a ser implantado | Branch ou tag a ser implantado (vazio se commit) |

{% note %}

**Observação:** Quando o estado de um estado de implantação está definido como `inativo`, a execução de um fluxo de trabalho não será acionada.

{% endnote %}

Executa o fluxo de trabalho quando uma terceira parte fornece um status de implantação. Implantações criadas com um commit SHA podem não ter um Git ref. For information about the APIs to create a deployment status, see "[createDeploymentStatus](/graphql/reference/mutations#createdeploymentstatus)" in the GraphQL API documentation or "[Create a deployment status](/rest/reference/deployments#create-a-deployment-status)" in the REST API documentation.

Por exemplo, você pode executar um fluxo de trabalho quando o evento `deployment_status` ocorrer.

```yaml
on:
  deployment_status
```

{% ifversion fpt or ghec %}
### `discussão`

| Carga de evento webhook                                                                         | Tipos de atividade                                                                                                                                                                                                                                                                                      | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`discussão`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#discussion) | - `created`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `category_changed`<br/> - `answered`<br/> - `unanswered` | Último commit no branch padrão | Branch padrão |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Runs your workflow when a discussion in the workflow's repository is created or modified. Para atividade relacionada a comentários em uma discussão, use o evento [`discussion_comment`](#discussion_comment). For more information about discussions, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)." For information about the GraphQL API, see "[Discussion](/graphql/reference/objects#discussion)."

Por exemplo, você pode executar um fluxo de trabalho quando uma discussão tiver sido `created`, `edited` ou `answered`.

```yaml
on:
  discussion:
    types: [created, edited, answered]
```

### `discussion_comment`

| Carga de evento webhook                                                                                | Tipos de atividade                                                | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------ | ------------- |
| [`discussion_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#discussion_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Runs your workflow when a comment on a discussion in the workflow's repository is created or modified. For activity related to a discussion as opposed to comments on the discussion, use the [`discussion`](#discussion) event. For more information about discussions, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)." For information about the GraphQL API, see "[Discussion](/graphql/reference/objects#discussion)."

For example, you can run a workflow when a discussion comment has been `created` or `deleted`.

```yaml
on:
  discussion_comment:
    types: [created, deleted]
```

{% endif %}

### `bifurcação`

| Carga de evento webhook                                                                    | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ------------------------------------------------------------------------------------------ | ------------------ | ------------------------------ | ------------- |
| [`bifurcação`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#fork) | n/a                | Último commit no branch padrão | Branch padrão |

{% data reusables.github-actions.branch-requirement %}

Runs your workflow when someone forks a repository. Para obter informações sobre a API REST, consulte "[Criar uma bifurcação](/rest/reference/repos#create-a-fork)".

Por exemplo, você pode executar um fluxo de trabalho quando o evento `fork` ocorrer.

```yaml
on:
  fork
```

### `gollum`

| Carga de evento webhook                                                                  | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ---------------------------------------------------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [`gollum`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#gollum) | n/a                | Último commit no branch padrão | Branch padrão |

{% data reusables.github-actions.branch-requirement %}

Runs your workflow when someone creates or updates a Wiki page. Para obter mais informações, consulte "[Sobre wikis](/communities/documenting-your-project-with-wikis/about-wikis)."

Por exemplo, você pode executar um fluxo de trabalho quando o evento `gollum` ocorrer.

```yaml
on:
  gollum
```

### `issue_comment`

| Carga de evento webhook                                                                      | Tipos de atividade                                                | `GITHUB_SHA`                   | `GITHUB_REF`  |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------ | ------------- |
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

Runs your workflow when an issue or pull request comment is created, edited, or deleted. For information about the issue comment APIs, see "[IssueComment](/graphql/reference/objects#issuecomment)" in the GraphQL API documentation or "[Issue comments](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)" in the REST API documentation.

For example, you can run a workflow when an issue or pull request comment has been `created` or `deleted`.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### `issue_comment` on issues only or pull requests only

O evento `issue_comment` ocorre para comentários em ambos os problemas e pull requests. You can use the `github.event.issue.pull_request` property in a conditional to take different action depending on whether the triggering object was an issue or pull request.

For example, this workflow will run the `pr_commented` job only if the `issue_comment` event originated from a pull request. It will run the `issue_commented` job only if the `issue_comment` event originated from an issue.

```yaml
on: issue_comment

jobs:
  pr_commented:
    # This job only runs for pull request comments
    name: PR comment
    if: {% raw %}${{ github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on PR $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}

  issue_commented:
    # This job only runs for issue comments
    name: Issue comment
    if: {% raw %}${{ !github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on issue $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}
```

### `Problemas`

| Carga de evento webhook                                                                     | Tipos de atividade                                                                                                                                                                                                                                                                                                                                                     | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`Problemas`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Último commit no branch padrão | Branch padrão |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

Runs your workflow when an issue in the workflow's repository is created or modified. For activity related to comments in an issue, use the [`issue_comment`](#issue_comment) event. Para obter mais informações sobre os problemas, consulte "[Sobre os problemas](/issues/tracking-your-work-with-issues/about-issues)". For information about the issue APIs, see "[Issue](/graphql/reference/objects#issue)" in the GraphQL API documentation or "[Issues](/rest/reference/issues)" in the REST API documentation.

Por exemplo, você pode executar um fluxo de trabalho quando um comentário tiver sido `opened`, `edited` ou `milestoned`.

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

### `etiqueta`

| Carga de evento webhook                                                                   | Tipos de atividade                                                | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------ | ------------- |
| [`etiqueta`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

Runs your workflow when a label in your workflow's repository is created or modified. For more information about labels, see "[Managing labels](/issues/using-labels-and-milestones-to-track-work/managing-labels)." For information about the label APIs, see "[Label](/graphql/reference/objects#label)" in the GraphQL API documentation or "[Labels](/rest/reference/issues#labels)" in the REST API documentation.

If you want to run your workflow when a label is added to or removed from an issue, pull request, or discussion, use the `labeled` or `unlabeled` activity types for the [`issues`](#issues), [`pull_request`](#pull_request), [`pull_request_target`](#pull_request_target), or [`discussion`](#discussion) events instead.

Por exemplo, você pode executar um fluxo de trabalho quando uma etiqueta tiver sido `created` ou `deleted`.

```yaml
on:
  label:
    types: [created, deleted]
```

### `marco`

| Carga de evento webhook                                                                    | Tipos de atividade                                                                                          | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`marco`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

Runs your workflow when a milestone in the workflow's repository is created or modified. For more information about milestones, see "[About milestones](/issues/using-labels-and-milestones-to-track-work/about-milestones)." For information about the milestone APIs, see "[Milestone](/graphql/reference/objects#milestone)" in the GraphQL API documentation or "[Milestones](/rest/reference/issues#milestones)" in the REST API documentation.

If you want to run your workflow when an issue is added to or removed from a milestone, use the `milestoned` or `demilestoned` activity types for the [`issues`](#issues) event instead.

Por exemplo, você pode executar um fluxo de trabalho quando um marco tiver sido `aberto` ou `apagado`.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

### `page_build`

| Carga de evento webhook                                                                          | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF` |
| ------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------ | ------------ |
| [`page_build`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#page_build) | n/a                | Último commit no branch padrão | n/a          |

{% data reusables.github-actions.branch-requirement %}

Runs your workflow when someone pushes to a branch that is the publishing source for {% data variables.product.prodname_pages %}, if {% data variables.product.prodname_pages %} is enabled for the repository. For more information about {% data variables.product.prodname_pages %} publishing sources, see "[Configuring a publishing source for your GitHub Pages site](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)." Para obter informações sobre a API REST, consulte "[Páginas](/rest/reference/repos#pages)".

Por exemplo, você pode executar um fluxo de trabalho quando o evento `page_build` ocorrer.

```yaml
on:
  page_build
```

### `project`

| Carga de evento webhook                                                                    | Tipos de atividade                                                                                            | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`project`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project) | - `created`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} The `edited` activity type refers to when a project board, not a column or card on the project board, is edited. For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

{% note %}

**Note**: This event only occurs for projects owned by the workflow's repository, not for organization-owned or user-owned projects or for projects owned by another repository.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Note**: This event does not occur for projects (beta). For more information, see "[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)."

{% endnote %}
{% endif %}

Runs your workflow when a project board is created or modified. For activity related to cards or columns in a project board, use the [`project_card`](#project_card) or [`project_column`](#project_column) events instead. For more information about project boards, see "[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)." For information about the project board APIs, see "[Project](/graphql/reference/objects#project)" in the GraphQL API documentation or "[Projects](/rest/reference/projects)" in the REST API documentation.

Por exemplo, você pode executar um fluxo de trabalho quando um projeto tiver sido `created` ou `deleted`.

```yaml
on:
  project:
    types: [created, deleted]
```

### `project_card`

| Carga de evento webhook                                                                              | Tipos de atividade                                                                                             | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`project_card`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` to an issue<br/>- `edited`<br/>- `deleted` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

{% note %}

**Note**: This event only occurs for projects owned by the workflow's repository, not for organization-owned or user-owned projects or for projects owned by another repository.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Note**: This event does not occur for projects (beta). For more information, see "[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)."

{% endnote %}
{% endif %}

Executa o fluxo de trabalho quando um cartão em um quadro de projeto é criado ou modificado. Para atividade relacionada aos quadros ou colunas do projeto em um quadro de projeto, use o evento [`projeto`](#project) ou [`projeto_column`](#project_column). For more information about project boards, see "[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)." For information about the project card APIs, see "[ProjectCard](/graphql/reference/objects#projectcard)" in the GraphQL API documentation or "[Project cards](/rest/reference/projects#cards)" in the REST API documentation.

Por exemplo, você pode executar um fluxo de trabalho quando um cartão de projeto tiver sido `aberto` ou `excluído`.

```yaml
on:
  project_card:
    types: [created, deleted]
```

### `project_column`

| Carga de evento webhook                                                                                  | Tipos de atividade                                                          | `GITHUB_SHA`                   | `GITHUB_REF`  |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------ | ------------- |
| [`project_column`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Último commit no branch padrão | Branch padrão |

{% note %}

**Nota**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

{% note %}

**Note**: This event only occurs for projects owned by the workflow's repository, not for organization-owned or user-owned projects or for projects owned by another repository.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Note**: This event does not occur for projects (beta). For more information, see "[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)."

{% endnote %}
{% endif %}

Executa o fluxo de trabalho quando uma coluna em um quadro de projeto é criada ou modificada. Para a atividade relacionada a quadros de projetos ou cartões em um quadro de projeto, use o evento [`projeto`](#project) ou [`project_card`](#project_card). For more information about project boards, see "[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)." Para obter informações sobre a coluna API do projeto, consulte "[Coluna do Projeto](/graphql/reference/objects#projectcolumn)" na Documentação da API do GraphQL ou "[Colunas do Projeto](/rest/reference/projects#columns)" na documentação da API REST.

Por exemplo, você pode executar um fluxo de trabalho quando uma coluna de projeto tiver sido `created` ou `deleted`.

```yaml
on:
  project_column:
    types: [created, deleted]
```

### `público`

| Carga de evento webhook                                                                   | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ----------------------------------------------------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [`público`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#public) | n/a                | Último commit no branch padrão | Branch padrão |

{% data reusables.github-actions.branch-requirement %}

Executa o fluxo de trabalho quando o repositório do fluxo de trabalho é alterado de privado para público. Para obter informações sobre a API REST, consulte "[Editar repositórios](/rest/reference/repos#edit)".

Por exemplo, você pode executar um fluxo de trabalho quando o evento `public` ocorrer.

```yaml
on:
  public
```

### `pull_request`

| Carga de evento webhook                                                                              | Tipos de atividade                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `GITHUB_SHA`                                  | `GITHUB_REF`                                      |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------- |
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed`{% ifversion fpt or ghes > 3.0 or ghae or ghec %} <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled`{% endif %} | Último commit de merge no branch `GITHUB_REF` | Branch de merge da PR `refs/pull/:prNumber/merge` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request)." By default, a workflow only runs when a `pull_request` event's activity type is `opened`, `synchronize`, or `reopened`. You can specify different activity types using the `types` keyword. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

{% endnote %}

{% note %}

**Note:** By default, only the `opened`, `synchronize`, and `reopened` activity types trigger workflows that run on the `pull_request` event. To trigger workflows by different activity types, use the `types` keyword.

{% endnote %}

{% note %}

**Note:** Workflows will not run on `pull_request` activity if the pull request has a merge conflict. O conflito de merge tem de ser resolvido primeiro.

Conversely, workflows with the `pull_request_target` event will run even if the pull request has a merge conflict. Before using the `pull_request_target` trigger, you should be aware of the security risks. For more information, see [`pull_request_target`](#pull_request_target).

{% endnote %}

Runs your workflow when activity on a pull request in the workflow's repository occurs. For example, if no activity types are specified, the workflow runs when a pull request is opened or reopened or when the head branch of the pull request is updated. For activity related to pull request reviews, pull request review comments, or pull request comments, use the [`pull_request_review`](#pull_request_review), [`pull_request_review_comment`](#pull_request_review_comment), or [`issue_comment`](#issue_comment) events instead. For information about the pull request APIs, see "[PullRequest](/graphql/reference/objects#pullrequest)" in the GraphQL API documentation or "[Pull requests](/rest/reference/pulls)" in the REST API documentation.

Note that `GITHUB_SHA` for this event is the last merge commit of the pull request merge branch. If you want to get the commit ID for the last commit to the head branch of the pull request, use `github.event.pull_request.head.sha` instead.

For example, you can run a workflow when a pull request has been opened or reopened.

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

You can use the event context to further control when jobs in your workflow will run. For example, this workflow will run when a review is requested on a pull request, but the `specific_review_requested` job will only run when a review by `octo-team` is requested.

```yaml
on:
  pull_request:
    types: [review_requested]
jobs:
  specific_review_requested:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.requested_team.name == 'octo-team'}}{% endraw %}
    steps:
      - run: echo 'A review from octo-team was requested'
```

#### Running your workflow based on the head or base branch of a pull request

You can use the `branches` or `branches-ignore` filter to configure your workflow to only run on pull requests that target specific branches. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)."

For example, this workflow will run when someone opens a pull request that targets a branch whose name starts with `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:    
      - 'releases/**'
```

{% note %}

**Note:** {% data reusables.github-actions.branch-paths-filter %} For example, the following workflow will only run when a pull request that includes a change to a JavaScript (`.js`) file is opened on a branch whose name starts with `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

To run a job based on the pull request's head branch name (as opposed to the pull request's base branch name), use the `github.head_ref` context in a conditional. For example, this workflow will run whenever a pull request is opened, but the `run_if` job will only execute if the head of the pull request is a branch whose name starts with `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### Running your workflow based on files changed in a pull request

You can also configure your workflow to run when a pull request changes specific files. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."

For example, this workflow will run when a pull request includes a change to a JavaScript file (`.js`):

```yaml
on:
  pull_request:
    paths:
      - '**.js'
```

{% note %}

**Note:** {% data reusables.github-actions.branch-paths-filter %} For example, the following workflow will only run when a pull request that includes a change to a JavaScript (`.js`) file is opened on a branch whose name starts with `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_comment` (use `issue_comment`)

To run your workflow when a comment on a pull request (not on a pull request's diff) is created, edited, or deleted, use the [`issue_comment`](#issue_comment) event. For activity related to pull request reviews or pull request review comments, use the [`pull_request_review`](#pull_request_review) or [`pull_request_review_comment`](#pull_request_review_comment) events.

### `pull_request_review`

| Carga de evento webhook                                                                                            | Tipos de atividade                                         | `GITHUB_SHA`                                  | `GITHUB_REF`                                      |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------- |
| [`pull_request_review`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Último commit de merge no branch `GITHUB_REF` | Branch de merge da PR `refs/pull/:prNumber/merge` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Runs your workflow when a pull request review is submitted, edited, or dismissed. A pull request review is a group of pull request review comments in addition to a body comment and a state. For activity related to pull request review comments or pull request comments, use the [`pull_request_review_comment`](#pull_request_review_comment) or [`issue_comment`](#issue_comment) events instead. For information about the pull request review APIs, see "[PullRequestReview](/graphql/reference/objects#pullrequest)" in the GraphQL API documentation or "[Pull request reviews](/rest/reference/pulls#reviews)" in the REST API documentation.

Por exemplo, você pode executar um fluxo de trabalho quando uma revisão de pull request tiver sido `edited` ou `dismissed`.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### Running a workflow when a pull request is approved

To run your workflow when a pull request has been approved, you can trigger your workflow with the `submitted` type of `pull_request_review` event, then check the review state with the `github.event.review.state` property. For example, this workflow will run whenever a pull request review is submitted, but the `approved` job will only run if the submitted review is an approving review:

```yaml
on:
  pull_request_review:
    types: [submitted]

jobs:
  approved:
    if: github.event.review.state == 'approved'
    runs-on: ubuntu-latest
    steps:
      - run: echo "This PR was approved"
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_review_comment`

| Carga de evento webhook                                                                                                            | Tipos de atividade                                     | `GITHUB_SHA`                                  | `GITHUB_REF`                                      |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------- | ------------------------------------------------- |
| [`pull_request_review_comment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted` | Último commit de merge no branch `GITHUB_REF` | Branch de merge da PR `refs/pull/:prNumber/merge` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Runs your workflow when a pull request review comment is modified. A pull request review comment is a comment on a pull request's diff. For activity related to pull request reviews or pull request comments, use the [`pull_request_review`](#pull_request_review) or [`issue_comment`](#issue_comment) events instead. For information about the pull request review comment APIs, see "[PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment)" in the GraphQL API documentation or "[Review comments](/rest/reference/pulls#comments)" in the REST API documentation.

Por exemplo, você pode executar um fluxo de trabalho quando um comentário de revisão de pull request tiver sido `created` ou `deleted`.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_target`

| Carga de evento webhook                                                                              | Tipos de atividade                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `GITHUB_SHA`                          | `GITHUB_REF`                |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------- |
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed`{% ifversion fpt or ghes > 3.0 or ghae or ghec %} <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled`{% endif %} | Último commit no branch de base do PR | Branch-base do pull request |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target)." Por padrão, um fluxo de trabalho só é executado quando o tipo de atividade de `pull_request_target`é `aberto,`, `sincronizado` ou `reaberto`. Para acionar fluxos de trabalho para mais tipos de atividade, use a palavra-chave `types`. You can specify different activity types using the `types` keyword. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

{% endnote %}

{% note %}

**Note:** By default, only the `opened`, `synchronize`, and `reopened` activity types trigger workflows that run on the `pull_request` event. To trigger workflows by different activity types, use the `types` keyword.

{% endnote %}

Runs your workflow when activity on a pull request in the workflow's repository occurs. For example, if no activity types are specified, the workflow runs when a pull request is opened or reopened or when the head branch of the pull request is updated.

This event runs in the context of the base of the pull request, rather than in the context of the merge commit, as the `pull_request` event does. This prevents execution of unsafe code from the head of the pull request that could alter your repository or steal any secrets you use in your workflow. This event allows your workflow to do things like label or comment on pull requests from forks. Avoid using this event if you need to build or run code from the pull request.

{% warning %}

**Warning:** For workflows that are triggered by the `pull_request_target` event, the `GITHUB_TOKEN` is granted read/write repository permission unless the `permissions` key is specified and the workflow can access secrets, even when it is triggered from a fork. Embora o fluxo de trabalho seja executado no contexto da base do pull request, você deve certificar-se de que você não irá fazer checkout, construir ou executar o código não confiável do pull request com este evento. Additionally, any caches share the same scope as the base branch. To help prevent cache poisoning, you should not save the cache if there is a possibility that the cache contents were altered. Para obter mais informações, consulte "[Proteger seus GitHub Actions e fluxos de trabalho: Evitar solicitações pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)" no site do GitHub Security Lab.

{% endwarning %}

Por exemplo, você pode executar um fluxo de trabalho quando um pull request tiver sido `atribuído`, `aberto`, `sincronizado` ou `reaberto`.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### Running your workflow based on the head or base branch of a pull request

You can use the `branches` or `branches-ignore` filter to configure your workflow to only run on pull requests that target specific branches. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)."

For example, this workflow will run when someone opens a pull request that targets a branch whose name starts with `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:    
      - 'releases/**'
```

{% note %}

**Note:** {% data reusables.github-actions.branch-paths-filter %} For example, the following workflow will only run when a pull request that includes a change to a JavaScript (`.js`) file is opened on a branch whose name starts with `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

To run a job based on the pull request's head branch name (as opposed to the pull request's base branch name), use the `github.head_ref` context in a conditional. For example, this workflow will run whenever a pull request is opened, but the `run_if` job will only execute if the head of the pull request is a branch whose name starts with `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### Running your workflow based on files changed in a pull request

You can use the `paths` or `paths-ignore` filter to configure your workflow to run when a pull request changes specific files. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."

For example, this workflow will run when a pull request includes a change to a JavaScript file (`.js`):

```yaml
on:
  pull_request_target:
    paths:
      - '**.js'
```

{% note %}

**Note:** {% data reusables.github-actions.branch-paths-filter %} For example, the following workflow will only run when a pull request that includes a change to a JavaScript (`.js`) file is opened on a branch whose name starts with `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

### `push`

| Carga de evento webhook                                                              | Tipos de atividade | `GITHUB_SHA`                                                              | `GITHUB_REF`   |
| ------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------- | -------------- |
| [`push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#push) | n/a                | Commit com push, exceto se excluindo um branch (quando é o branch padrão) | ref atualizado |

{% note %}

**Observação:** a carga de webhook disponível para o GitHub Actions não inclui os atributos `added`, `removed` e `modified` no objeto `commit`. You can retrieve the full commit object using the API. For information, see "[Commit](/graphql/reference/objects#commit)" in the GraphQL API documentation or "[Get a commit](/rest/reference/commits#get-a-commit)" in the REST API documentation.

{% endnote %}

{% note %}

**Note**: An event will not be created when you push more than three tags at once.

{% endnote %}

Runs your workflow when you push a commit or tag.

Por exemplo, você pode executar um fluxo de trabalho quando o evento `push` ocorrer.

```yaml
on:
  push
```

#### Running your workflow only when a push to specific branches occurs

You can use the `branches` or `branches-ignore` filter to configure your workflow to only run when specific branches are pushed. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)."

For example, this workflow will run when someone pushes to `main` or to a branch that starts with `releases/`.

```yaml
on:
  push:
    branches:    
      - 'main'
      - 'releases/**'
```

{% note %}

**Note:** {% data reusables.github-actions.branch-paths-filter %} For example, the following workflow will only run when a push that includes a change to a JavaScript (`.js`) file is made to a branch whose name starts with `releases/`:

```yaml
on:
  push:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Running your workflow only when a push of specific tags occurs

You can use the `tags` or `tags-ignore` filter to configure your workflow to only run when specific tags or are pushed. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)."

For example, this workflow will run when someone pushes a tag that starts with `v1.`.

```yaml
on:
  push:
    tags:        
      - v1.**
```

#### Running your workflow only when a push affects specific files

You can use the `paths` or `paths-ignore` filter to configure your workflow to run when a push to specific files occurs. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."

For example, this workflow will run when someone pushes a change to a JavaScript file (`.js`):

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Note:** {% data reusables.github-actions.branch-paths-filter %} For example, the following workflow will only run when a push that includes a change to a JavaScript (`.js`) file is made to a branch whose name starts with `releases/`:

```yaml
on:
  push:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

### `registry_package`

| Carga de evento webhook                                                                             | Tipos de atividade                     | `GITHUB_SHA`               | `GITHUB_REF`                      |
| --------------------------------------------------------------------------------------------------- | -------------------------------------- | -------------------------- | --------------------------------- |
| [`registry_package`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#package) | - `publicado`<br/>- `atualizado` | Commit do pacote publicado | Branch ou tag do pacote publicado |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#registry_package)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

Runs your workflow when activity related to {% data variables.product.prodname_registry %} occurs in your repository. For more information, see "[{% data variables.product.prodname_registry %} Documentation](/packages)."

Por exemplo, você pode executar um fluxo de trabalho quando um pacote tiver sido `publicado`.

```yaml
em:
  registry_package:
    tipos: [published]
```

### `versão`

| Carga de evento webhook                                                                   | Tipos de atividade                                                                                                                                              | `GITHUB_SHA`                    | `GITHUB_REF`  |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------- |
| [`versão`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Último commit na versão com tag | Tag da versão |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**Note:** Workflows are not triggered for the `created`, `edited`, or `deleted` activity types for draft releases. When you create your release through the {% data variables.product.product_name %} browser UI, your release may automatically be saved as a draft.

{% endnote %}

{% note %}

**Observação:** O tipo</code>prereleased`não será acionado para pré-versões publicadas a partir de versões de rascunho, mas o tipo <code>published` será acionado. Se você quiser que um fluxo de trabalho seja executado quando *e* forem publicadas pré-versões, assine `published` em vez de `released` e `prereleased`.

{% endnote %}

Runs your workflow when release activity in your repository occurs. For information about the release APIs, see "[Release](/graphql/reference/objects#release)" in the GraphQL API documentation or "[Releases](/rest/reference/repos#releases)" in the REST API documentation.

Por exemplo, você pode executar um fluxo de trabalho quando uma versão tiver sido `published`.

```yaml
on:
  release:
    types: [published]
```

### `repository_dispatch`

| Carga de evento webhook                                                                                          | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ---------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [repository_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) | Personalizado      | Último commit no branch padrão | Branch padrão |

{% data reusables.github-actions.branch-requirement %}

You can use the {% data variables.product.product_name %} API to trigger a webhook event called [`repository_dispatch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) when you want to trigger a workflow for activity that happens outside of {% data variables.product.product_name %}. Para obter mais informações, consulte "[Criar um evento de envio do repositório](/rest/reference/repos#create-a-repository-dispatch-event)".

When you make a request to create a `repository_dispatch` event, you must specify an `event_type` to describe the activity type. By default, all `repository_dispatch`  activity types trigger a workflow to run. You can use the `types` keyword to limit your workflow to run when a specific `event_type` value is sent in the `repository_dispatch` webhook payload.

```yaml
on:
  repository_dispatch:
    types: [on-demand-test]
```

Any data that you send through the `client_payload` parameter will be available in the `github.event` context in your workflow. For example, if you send this request body when you create a repository dispatch event:

```json
{
  "event_type": "test_result",
  "client_payload": {
    "passed": false,
    "message": "Error: timeout"
  }
}
```

then you can access the payload in a workflow like this:

```yaml
on:
  repository_dispatch:
    types: [test_result]

jobs:
  run_if_failure:
    if: {% raw %}${{ !github.event.client_payload.passed }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - env:
          MESSAGE: {% raw %}${{ github.event.client_payload.message }}{% endraw %}
        run: echo $MESSAGE
```

### `schedule`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------- | ------------------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n/a                     | n/a                | Último commit no branch padrão | Branch padrão | Quando a execução do fluxo de trabalho programado é definida. Um fluxo de trabalho programado usa a [sintaxe cron POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Para obter mais informações, consulte "[Acionar um fluxo de trabalho com eventos](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)". |

{% data reusables.actions.schedule-delay %}

O evento `agenda` permite que você acione um fluxo de trabalho em um horário agendado.

{% data reusables.repositories.actions-scheduled-workflow-example %}

A sintaxe cron tem cinco campos separados por um espaço, e cada campo representa uma unidade de tempo.

```
┌───────────── minuto (0 a 59)
│ ┌───────────── hora (0 a 23)
│ │ ┌───────────── dia do mês (1 a 31)
│ │ │ ┌───────────── mês (1 - 12 ou dezembro a janeiro)
│ │ │ │ ┌───────────── dia da semana (0 a 6 ou domingo a sábado)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

Você pode usar estes operadores em qualquer um dos cinco campos:

| Operador | Descrição                   | Exemplo                                                                                         |
| -------- | --------------------------- | ----------------------------------------------------------------------------------------------- |
| *        | Qualquer valor              | `15 * * * *` runs at every minute 15 of every hour of every day.                                |
| ,        | Separador de lista de valor | `2,10 4,5 * * *` executa no minuto 2 e 10 da quarta e quinta hora de todos os dias.             |
| -        | Intervalo de valores        | `30 4-6 * * *` runs at minute 30 of the 4th, 5th, and 6th hour.                                 |
| /        | Valores de etapa            | `20/15 * * * *` executa a cada 15 minutos começando do miuto 20 até o 59 (minutos 20, 35 e 50). |

{% note %}

**Observação:** o {% data variables.product.prodname_actions %} não é compatível com a sintaxe não padrão `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly` e `@reboot`.

{% endnote %}

Você pode usar [crontab guru](https://crontab.guru/) para ajudar a gerar a sintaxe cron e confirmar a hora em que ela será executada. Para ajudar você a começar, há também uma lista de [exemplos de crontab guru](https://crontab.guru/examples.html).

As notificações de fluxos de trabalho agendados são enviadas ao usuário que modificou a sintaxe cron no arquivo do fluxo de trabalho. For more information, see "[Notifications for workflow runs](/actions/guides/about-continuous-integration#notifications-for-workflow-runs)."

### `status`

| Carga de evento webhook                                                                  | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------- | ------------------ | ------------------------------ | ------------ |
| [`status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | n/a                | Último commit no branch padrão | n/a          |

{% data reusables.github-actions.branch-requirement %}

Runs your workflow when the status of a Git commit changes. For example, commits can be marked as `error`, `failure`, `pending`, or `success`. If you want to provide more details about the status change, you may want to use the [`check_run`](#check_run) event. For information about the commit status APIs, see "[Status](/graphql/reference/objects#statue)" in the GraphQL API documentation or "[Statuses](/rest/reference/commits#commit-statuses)" in the REST API documentation.

Por exemplo, você pode executar um fluxo de trabalho quando o evento `status` ocorrer.

```yaml
on:
  status
```

If you want to run a job in your workflow based on the new commit state, you can use the `github.event.state` context. For example, the following workflow triggers when a commit status changes, but the `if_error_or_failure` job only runs if the new commit state is `error` or `failure`.

```yaml
on:
  status
jobs:
  if_error_or_failure:
    runs-on: ubuntu-latest
    if: >-
      github.event.state == 'error' ||
      github.event.state == 'failure'
    steps:
      - env:
          DESCRIPTION: {% raw %}${{ github.event.description }}{% endraw %}
        run: |
          echo The status is error or failed: $DESCRIPTION
```

### `inspecionar`

| Carga de evento webhook                                                                      | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| -------------------------------------------------------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [`inspecionar`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#watch) | - `started`        | Último commit no branch padrão | Branch padrão |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} Although only the `started` activity type is supported, specifying the activity type will keep your workflow specific if more activity types are added in the future. For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

Runs your workflow when the workflow's repository is starred. For information about the pull request APIs, see "[addStar](/graphql/reference/mutations#addstar)" in the GraphQL API documentation or "[Starring](/rest/reference/activity#starring)" in the REST API documentation.

For example, you can run a workflow when someone stars a repository, which is the `started` activity type for a watch event.

```yaml
on:
  watch:
    types: [started]
```

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

### `workflow_call`

| Carga de evento webhook                | Tipos de atividade | `GITHUB_SHA`                           | `GITHUB_REF`                           |
| -------------------------------------- | ------------------ | -------------------------------------- | -------------------------------------- |
| Igual ao fluxo de trabalho de chamadas | n/a                | Igual ao fluxo de trabalho de chamadas | Igual ao fluxo de trabalho de chamadas |

`workflow_call` is used to indicate that a workflow can be called by another workflow. When a workflow is triggered with the `workflow_call` event, the event playload in the called workflow is the same event payload from the calling workflow. Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".

O exemplo abaixo só executa o fluxo de trabalho quando é chamado a partir de outro fluxo de trabalho:

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| Carga de evento webhook                                                                                      | Tipos de atividade | `GITHUB_SHA`                                  | `GITHUB_REF`             |
| ------------------------------------------------------------------------------------------------------------ | ------------------ | --------------------------------------------- | ------------------------ |
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | n/a                | Último commit de merge no branch `GITHUB_REF` | Branch que recebeu envio |

To manually trigger a workflow, use the `workflow_dispatch` event. You can manually trigger a workflow run using the {% data variables.product.product_name %} API, {% data variables.product.prodname_cli %}, or {% data variables.product.product_name %} browser interface. Para obter mais informações, consulte "[Executando um fluxo de trabalho manualmente](/actions/managing-workflow-runs/manually-running-a-workflow)."

```yaml
on: workflow_dispatch
```

#### Providing inputs

É possível configurar as propriedades de entrada definidas por personalização, os valores-padrão de entrada e as entradas obrigatórias para o evento diretamente no seu fluxo de trabalho. When you trigger the event, you can provide the `ref` and any `inputs`. Quando o fluxo de trabalho é executado, você pode acessar os valores de entrada no contexto `github.event.inputs`. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %}
This example defines inputs called `logLevel`, `tags`, and `environment`. You pass values for these inputs to the workflow when you run it. This workflow then prints the values to the log, using the `github.event.inputs.logLevel`, `github.event.inputs.tags`, and  `github.event.inputs.environment` context properties.

{% raw %}
```yaml
on: 
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'     
        required: true
        default: 'warning' 
        type: choice
        options:
        - info
        - warning
        - debug 
      tags:
        description: 'Test scenario tags'
        required: false 
        type: boolean
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true 

jobs:
  log-the-inputs:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Log level: $LEVEL"
          echo "Tags: $TAGS"
          echo "Environment: $ENVIRONMENT"
        env:
          LEVEL: ${{ github.event.inputs.logLevel }}
          TAGS: ${{ github.event.inputs.tags }}
          ENVIRONMENT: ${{ github.event.inputs.environment }}
```
{% endraw %}

If you run this workflow from a browser you must enter values for the required inputs manually before the workflow will run.

![Entering inputs for a workflow](/assets/images/help/images/workflow-dispatch-inputs.png)

You can also pass inputs when you run a workflow from a script, or by using {% data variables.product.prodname_cli %}. Por exemplo:

```
gh workflow run run-tests.yml -f logLevel=warning -f tags=false -f environment=staging
```

For more information, see the {% data variables.product.prodname_cli %} information in "[Manually running a workflow](/actions/managing-workflow-runs/manually-running-a-workflow)."


{% else %}
Este exemplo define as entradas do `nome` e `home` e as imprime usando os contextos `github.event.inputs.name` e `github.event.inputs.home`. Se `home` não for fornecido, será impresso o valor-padrão 'The Octoverse'.

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
          echo Hello $NAME!
          echo -in $HOME
        env:
          NAME: {% raw %}${{ github.event.inputs.name }}{% endraw %}
          HOME: {% raw %}${{ github.event.inputs.home }}{% endraw %}
```
{% endif %}

### `workflow_run`

| Carga de evento webhook                                                                              | Tipos de atividade                    | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------ | ------------- |
| [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_run) | - `completed`<br/>- `requested` | Último commit no branch padrão | Branch padrão |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} The `requested` activity type does no occur when a workflow is re-run. For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.github-actions.branch-requirement %}

{% note %}

**Note:** You can't use `workflow_run` to chain together more than three levels of workflows. Por exemplo, se você tentar acionar cinco fluxos de trabalho (denominado `B` a `F`) para serem executados sequencialmente após a execução de um fluxo de trabalho inicial `A` (isto é: `A` → `B` → `C` → `D` → `E` → `F`), os fluxos de trabalho `E` e `F` não serão executados.

{% endnote %}

This event occurs when a workflow run is requested or completed. It allows you to execute a workflow based on execution or completion of another workflow. The workflow started by the `workflow_run` event is able to access secrets and write tokens, even if the previous workflow was not. This is useful in cases where the previous workflow is intentionally not privileged, but you need to take a privileged action in a later workflow.

Neste exemplo, um fluxo de trabalho está configurado para ser executado após o fluxo de trabalho "Executar Testes" separado ser concluído.

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

If you specify multiple `workflows` for the `workflow_run` event, only one of the workflows needs to run. For example, a workflow with the following trigger will run whenever the "Staging" workflow or the "Lab" workflow completes.

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### Running a workflow based on the conclusion of another workflow

A workflow run is triggered regardless of the conclusion of the previous workflow. If you want to run a job or step based on the result of the triggering workflow, you can use a conditional with the `github.event.workflow_run.conclusion` property. For example, this workflow will run whenever a workflow named "Build" completes, but the `on-success` job will only run if the "Build" workflow succeeded, and the `on-failure` job will only run if the "Build" workflow failed:

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'success' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow passed'
  on-failure:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'failure' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow failed'
```

#### Limiting your workflow to run based on branches

You can use the `branches` or `branches-ignore` filter to specify what branches the triggering workflow must run on in order to trigger your workflow. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore)." For example, a workflow with the following trigger will only run when the workflow named `Build` runs on a branch named `canary`.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### Using data from the triggering workflow

You can access the [`workflow_run` event payload](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run) that corresponds to the workflow that triggered your workflow. For example, if your triggering workflow generates artifacts, a workflow triggered with the `workflow_run` event can access these artifacts.

The following workflow uploads data as an artifact. (In this simplified example, the data is the pull request number.)

```yaml
name: Upload data

on:
  pull_request:

jobs:
  upload:
    runs-on: ubuntu-latest

    steps:        
      - name: Save PR number
        env:
          PR_NUMBER: {% raw %}${{ github.event.number }}{% endraw %}
        run: |
          mkdir -p ./pr
          echo $PR_NUMBER > ./pr/pr_number
      - uses: actions/upload-artifact@v2
        with:
          name: pr_number
          path: pr/
```

When a run of the above workflow completes, it triggers a run of the following workflow. The following workflow uses the `github.event.workflow_run` context and the {% data variables.product.product_name %} REST API to download the artifact that was uploaded by the above workflow, unzips the downloaded artifact, and comments on the pull request whose number was uploaded as an artifact.

```yaml
name: Use the data

on:
  workflow_run:
    workflows: [Upload data]
    types:
      - completed

jobs:
  download:
    runs-on: ubuntu-latest
    steps:
      - name: 'Download artifact'
        uses: actions/github-script@v5
        with:
          script: |
            let allArtifacts = await github.rest.actions.listWorkflowRunArtifacts({
               owner: context.repo.owner,
               repo: context.repo.repo,
               run_id: context.payload.workflow_run.id,
            });
            let matchArtifact = allArtifacts.data.artifacts.filter((artifact) => {
              return artifact.name == "pr_number"
            })[0];
            let download = await github.rest.actions.downloadArtifact({
               owner: context.repo.owner,
               repo: context.repo.repo,
               artifact_id: matchArtifact.id,
               archive_format: 'zip',
            });
            let fs = require('fs');
            fs.writeFileSync(`${process.env.GITHUB_WORKSPACE}/pr_number.zip`, Buffer.from(download.data));

      - name: 'Unzip artifact'
        run: unzip pr_number.zip

      - name: 'Comment on PR'
        uses: actions/github-script@v5
        with:
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          script: |
            let fs = require('fs');
            let issue_number = Number(fs.readFileSync('./pr_number'));
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: issue_number,
              body: 'Thank you for the PR!'
            });
```
