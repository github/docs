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

## Sobre eventos que acionam fluxos de trabalho

Os acionadores de fluxo de trabalho são eventos que fazem com que um fluxo de trabalho seja executado. Para obter mais informações sobre como usar os gatilhos de fluxo de trabalho, consulte "[Acionando um fluxo de trabalho](/actions/using-workflows/triggering-a-workflow)".

## Eventos disponíveis

Alguns eventos têm vários tipos de atividades. Para esses eventos, você pode especificar quais tipos de atividade ativarão a execução de um fluxo de trabalho. Para obter mais informações sobre o significado de cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhook-events-and-payloads)". Observe que nem todos os eventos de webhook acionam fluxos de trabalho.

{% ifversion fpt or ghec or ghes > 3.3 or ghae  %}
### `branch_protection_rule`

| Carga de evento webhook                                                                                                 | Tipos de atividade                                     | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------ | ------------- |
| [`branch_protection_rule`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

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

{% data reusables.actions.branch-requirement %}

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

{% data reusables.actions.branch-requirement %}

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

{% data reusables.actions.branch-requirement %}

{% note %}

**Observação**: Um evento não será criado quando você excluir mais de três tags de uma só vez.

{% endnote %}

Executa o fluxo de trabalho quando alguém exclui uma referência Git (branch ou tag) no repositório do fluxo de trabalho. Para obter informações sobre as APIs para excluir uma referência do Git, consulte "[deleteRef](/graphql/reference/mutations#deleteref)" na documentação da API do GraphQL ou "[Excluir uma referência](/rest/reference/git#delete-a-reference)" na documentação da API REST.

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

Executa o fluxo de trabalho quando uma terceira parte fornece um status de implantação. Implantações criadas com um commit SHA podem não ter um Git ref. Para informações sobre as APIs para criar um status de implantação, consulte "[createDeploymentStatus](/graphql/reference/mutations#createdeploymentstatus)" na documentação da API do GraphQL ou "[Criar um status de implantação](/rest/reference/deployments#create-a-deployment-status)" na documentação da API REST.

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

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Executa o fluxo de trabalho quando uma discussão no repositório do fluxo de trabalho é criada ou modificada. Para atividade relacionada a comentários em uma discussão, use o evento [`discussion_comment`](#discussion_comment). Para obter mais informações sobre discussões, consulte "[Sobre discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions). " Para obter informações sobre a API do GraphQL, consulte "[Discussão](/graphql/reference/objects#discussion)".

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

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Executa o fluxo de trabalho quando um comentário em uma discussão no repositório do fluxo de trabalho é criado ou modificado. Para atividade relacionada a uma discussão, ao contrário de comentários na discussão, use o evento [`discussão`](#discussion). Para obter mais informações sobre discussões, consulte "[Sobre discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions). " Para obter informações sobre a API do GraphQL, consulte "[Discussão](/graphql/reference/objects#discussion)".

Por exemplo, você pode executar um fluxo de trabalho quando um comentário de discussão tiver sido `criado` ou `excluído`.

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

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando alguém bifurca um repositório. Para obter informações sobre a API REST, consulte "[Criar uma bifurcação](/rest/reference/repos#create-a-fork)".

Por exemplo, você pode executar um fluxo de trabalho quando o evento `fork` ocorrer.

```yaml
on:
  fork
```

### `gollum`

| Carga de evento webhook                                                                  | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ---------------------------------------------------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [`gollum`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#gollum) | n/a                | Último commit no branch padrão | Branch padrão |

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando alguém cria ou atualiza uma página wiki. Para obter mais informações, consulte "[Sobre wikis](/communities/documenting-your-project-with-wikis/about-wikis)."

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

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando um problema ou comentário de pull request é criado, editado ou excluído. Para informação sobre as APIs de comentário de problema, consulte "[IssueComment](/graphql/reference/objects#issuecomment)" na documentação da API do GraphQL ou "[Comentários do problema](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)" na documentação da API REST.

Por exemplo, você pode executar um fluxo de trabalho quando um problema ou comentário de pull request tiver sido criado `` ou `excluído`.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### `issue_comment` apenas em problemas ou pull requests

O evento `issue_comment` ocorre para comentários em ambos os problemas e pull requests. Você pode usar a propriedade `github.event.issue.pull_request` em uma condicional de realizar uma ação diferente dependendo se o objeto de gatilho foi um problema ou pull request.

Por exemplo, este fluxo de trabalho irá executar o trabalho `pr_commented` apenas se o evento `issue_comment` teve origem em um pull request. Será executado o trabalho `issue_commented` somente se o evento `issue_comment` originar de um problema.

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

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando um problema no repositório do fluxo de trabalho é criado ou modificado. Para atividade relacionada a comentários em uma issue, use o evento [`issue_comment`](#issue_comment). Para obter mais informações sobre os problemas, consulte "[Sobre os problemas](/issues/tracking-your-work-with-issues/about-issues)". Para informações sobre as APIs do problema, consulte "[Problema](/graphql/reference/objects#issue)" na documentação da API do GraphQL ou "[Problemas](/rest/reference/issues)" na documentação da API REST.

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

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando uma etiqueta no repositório do fluxo de trabalho é criada ou modificada. Para obter mais informações sobre etiquetas, consulte "[Gerenciar etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)". Para obter informações sobre a API da etiqueta, consulte "[Etiqueta](/graphql/reference/objects#label)" na documentação da API do GraphQL ou "[Etiquetas](/rest/reference/issues#labels)" na documentação da API REST.

Se você deseja executar seu fluxo de trabalho quando uma etiqueta for adicionada ou removida de um problema, pull request ou discussão, use os tipos de atividade o `labeled` ou `unlabeled` para os eventos [`issues`](#issues), [`pull_request`](#pull_request), [`pull_request_target`](#pull_request_target) ou [`discussion`](#discussion).

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

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando um marco no repositório do fluxo de trabalho é criado ou modificado. Para obter mais informações sobre marcos, consulte "[Sobre marcos](/issues/using-labels-and-milestones-to-track-work/about-milestones)". Para informações sobre as APIs do marco, consulte "[Marco](/graphql/reference/objects#milestone)" na documentação da API do GraphQL ou "[Marcos](/rest/reference/issues#milestones)" na documentação da API REST.

Se quiser executar o seu fluxo de trabalho quando um problema for adicionado ou removido de um marco, use os tipos de atividade os `milestoned` ou `demilestoned` para os eventos [`issues`](#issues).

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

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando alguém faz push em um branch que é a fonte de publicação para {% data variables.product.prodname_pages %}, se o {% data variables.product.prodname_pages %} estiver habilitado no repositório. Para obter mais informações sobre fontes de publicação {% data variables.product.prodname_pages %}, consulte "[Configurando uma fonte de publicação para o site do GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)". Para obter informações sobre a API REST, consulte "[Páginas](/rest/reference/repos#pages)".

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

**Observação**: {% data reusables.developer-site.multiple_activity_types %} O tipo de atividade `editado` refere-se a quando um quadro de projeto, não é uma coluna ou um cartão no quadro de projeto, é editado. Para obter informações sobre cada tipo de atividade, consulte "[Eventos Webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Observação**: Este evento ocorre apenas para projetos pertencentes ao repositório do fluxo de trabalho, não é para projetos pertencentes à organização ou de propriedade de usuários ou para projetos pertencentes a outro repositório.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Observação**: Este evento não ocorre para projetos (beta). Para obter mais informações, consulte "[Sobre projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)".

{% endnote %}
{% endif %}

Executa o fluxo de trabalho quando um quadro de projeto é criado ou modificado. Para atividades relacionadas a cartões ou colunas em um quadro de projeto, use os eventos [`project_card`](#project_card) ou [`project_column`](#project_column). Para obter mais informações sobre os quadros de projeto, consulte "[Sobre quadros de projeto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)". Para informações sobre as APIs do quadro de projeto, consulte " [Projeto](/graphql/reference/objects#project)" na documentação da API GraphQL ou "[Projetos](/rest/reference/projects)" na documentação da API REST.

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

{% data reusables.actions.branch-requirement %}

{% note %}

**Observação**: Este evento ocorre apenas para projetos pertencentes ao repositório do fluxo de trabalho, não é para projetos pertencentes à organização ou de propriedade de usuários ou para projetos pertencentes a outro repositório.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Observação**: Este evento não ocorre para projetos (beta). Para obter mais informações, consulte "[Sobre projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)".

{% endnote %}
{% endif %}

Executa o fluxo de trabalho quando um cartão em um quadro de projeto é criado ou modificado. Para atividade relacionada aos quadros ou colunas do projeto em um quadro de projeto, use o evento [`projeto`](#project) ou [`projeto_column`](#project_column). Para obter mais informações sobre os quadros de projeto, consulte "[Sobre quadros de projeto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)". Para obter informações sobre as APIs de cartão do projeto, consulte "[ProjectCard](/graphql/reference/objects#projectcard)" na documentação da API do GraphQL ou "[Cartões de projeto](/rest/reference/projects#cards)" na documentação da API REST.

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

{% data reusables.actions.branch-requirement %}

{% note %}

**Observação**: Este evento ocorre apenas para projetos pertencentes ao repositório do fluxo de trabalho, não é para projetos pertencentes à organização ou de propriedade de usuários ou para projetos pertencentes a outro repositório.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Observação**: Este evento não ocorre para projetos (beta). Para obter mais informações, consulte "[Sobre projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)".

{% endnote %}
{% endif %}

Executa o fluxo de trabalho quando uma coluna em um quadro de projeto é criada ou modificada. Para a atividade relacionada a quadros de projetos ou cartões em um quadro de projeto, use o evento [`projeto`](#project) ou [`project_card`](#project_card). Para obter mais informações sobre os quadros de projeto, consulte "[Sobre quadros de projeto](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)". Para obter informações sobre a coluna API do projeto, consulte "[Coluna do Projeto](/graphql/reference/objects#projectcolumn)" na Documentação da API do GraphQL ou "[Colunas do Projeto](/rest/reference/projects#columns)" na documentação da API REST.

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

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando o repositório do fluxo de trabalho é alterado de privado para público. Para obter informações sobre a API REST, consulte "[Editar repositórios](/rest/reference/repos#edit)".

Por exemplo, você pode executar um fluxo de trabalho quando o evento `public` ocorrer.

```yaml
on:
  public
```

### `pull_request`

| Carga de evento webhook                                                                              | Tipos de atividade                                                                                                                                                                                                                                                                                                                                                                                                                                         | `GITHUB_SHA`                                  | `GITHUB_REF`                                      |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------- |
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Último commit de merge no branch `GITHUB_REF` | Branch de merge da PR `refs/pull/:prNumber/merge` |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request)". Por padrão, um fluxo de trabalho só é executado quando um tipo de atividade de um evento de `pull_request` é `opened,`, `sincronize` ou `reopened`. Para acionar fluxos de trabalho em diferentes tipos de atividade, use a palavra-chave `tipos`. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

{% endnote %}

{% note %}

**Observação:** Os fluxos de trabalho não serão executados na atividade `pull_request` se o pull request tiver um conflito de merge. O conflito de merge tem de ser resolvido primeiro.

Inversamente, os fluxos de trabalho com o evento `pull_request_target` serão executados mesmo se o pull request tiver um conflito de merge. Antes de usar o acionamento de `pull_request_target`, você deve estar ciente dos riscos de segurança. Para obter mais informações, consulte [`pull_request_target`](#pull_request_target).

{% endnote %}

Executa o fluxo de trabalho quando ocorre uma atividade em no pull request no repositório do fluxo de trabalho. Por exemplo, se nenhum tipo de atividade for especificado, o fluxo de trabalho será executado quando um pull request é abertp ou reaberto ou quando o branch principal do pull request é atualizado. Para atividade relacionada a revisões de pull request, comentários de revisão de pull request ou comentários de pull request, use os eventos o [`pull_request_review`](#pull_request_review), [`pull_request_review_comment`](#pull_request_review_comment) ou [`issue_comment`](#issue_comment). Para informações sobre as APIs do pull request, consulte "[PullRequest](/graphql/reference/objects#pullrequest)" na documentação da API do GraphQL ou "[Pull requests](/rest/reference/pulls)" na documentação da API REST.

Observe que `GITHUB_SHA` para este evento é o último commit de merge de merge do branch de merge do pull request. Se você deseja obter o ID do commit para o último commit na branch principal do pull request, use `github.event.pull_request.head.sha`.

Por exemplo, você pode executar um fluxo de trabalho quando um pull request for aberto ou reaberto.

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

Você pode usar o contexto do evento para controlar ainda mais quando os trabalhos no seu fluxo de trabalho serão executados. Por exemplo, este fluxo de trabalho será executado quando uma revisão for solicitada em um pull request, mas o trabalho de `specific_review_requested` só será executado quando uma análise de `octo-team` for solicitada.

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

#### Executando seu fluxo de trabalho com base no branch de cabeçalho ou de base de um pull request

É possível usar o filtro `branches` ou `branches-ignore` para configurar seu fluxo de trabalho para que sejam executados apenas em pull requests que aponte para branches específicos. Para obter mais informações, consulte " Sintaxe de fluxo de trabalho[para o GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)".

Por exemplo, este fluxo de trabalho será executado quando alguém abrir um pull request que aponte para um branch cujo nome começa com `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:    
      - 'releases/**'
```

{% note %}

**Observação:** {% data reusables.actions.branch-paths-filter %} Por exemplo, o fluxo de trabalho a seguir será executado somente quando um pull request que inclui uma mudança para um arquivo (`.js`) do JavaScript for aberto em um branch cujo nome começa com `releases/`:

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

Para executar um trabalho com base no nome do branch de cabeçalho do pull request (ao contrário do nome da branch de base do pull request), use o contexto `github.head_ref` em uma condicional. Por exemplo, este fluxo de trabalho será executado sempre que um pull request for aberto, mas o trabalho `run_if` só será executado se o cabeçalho do pull request for um branch cujo nome comece com `releases/`:

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

#### Executando seu fluxo de trabalho com base em arquivos alterados em um pull request

Também é possível configurar o fluxo de trabalho para ser executado quando um pull request alterar arquivos específicos. Para obter mais informações, consulte " Sintaxe de fluxo de trabalho[para o GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Por exemplo, este fluxo de trabalho será executado quando um pull request incluir uma alteração para um arquivo (`.js`) do JavaScript:

```yaml
on:
  pull_request:
    paths:
      - '**.js'
```

{% note %}

**Observação:** {% data reusables.actions.branch-paths-filter %} Por exemplo, o fluxo de trabalho a seguir será executado somente quando um pull request que inclui uma mudança para um arquivo (`.js`) do JavaScript for aberto em um branch cujo nome começa com `releases/`:

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

#### Executando o fluxo de trabalho quando um executado um merge de pull request

Quando um pull request faz merge, o pull request é automaticamente fechado. Para executar um fluxo de trabalho quando um pull request é mesclado, use o tipo de evento `pull_request` `fechado` junto com uma condição que verifica o valor de `merged` do evento. Por exemplo, o fluxo de trabalho a seguir será executado sempre que um pull request for fechado. O trabalho `if_merged` só será executado se o pull request também tiver sido mesclado.

```yaml
on:
  pull_request:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_comment` (use `issue_comment`)

Para executar o fluxo de trabalho quando um comentário em um pull request (não no diff de um pull request) for criado, editado, ou excluído, use o evento [`issue_comment`](#issue_comment). Para a atividade relacionada a revisões de pull request ou comentários de revisão de pull request use os eventos [`pull_request_review`](#pull_request_review) ou [`pull_request_review_comment`](#pull_request_review_comment).

### `pull_request_review`

| Carga de evento webhook                                                                                            | Tipos de atividade                                         | `GITHUB_SHA`                                  | `GITHUB_REF`                                      |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------- |
| [`pull_request_review`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Último commit de merge no branch `GITHUB_REF` | Branch de merge da PR `refs/pull/:prNumber/merge` |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Executa o fluxo de trabalho quando uma revisão de pull request é enviada, editada ou ignorada. Uma revisão de pull request é um grupo de comentários de revisão de pull request, além de um comentário e estado de texto. Para atividade relacionada a comentários de revisão de pull request ou comentários de pull request, use os eventos [`pull_request_review_comment`](#pull_request_review_comment) ou [`issue_comment`](#issue_comment). Para obter informações sobre as APIs de revisão de pull request, consulte "[PullRequestReview](/graphql/reference/objects#pullrequest)" na documentação da API do GraphQL ou "[Revisões de pull request](/rest/reference/pulls#reviews)" na documentação da API REST.

Por exemplo, você pode executar um fluxo de trabalho quando uma revisão de pull request tiver sido `edited` ou `dismissed`.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### Executando um fluxo de trabalho quando um pull request é aprovado

Para executar o fluxo de trabalho quando um pull request for aprovado, você poderá acionar o seu fluxo de trabalho com o tipo `submitted` do evento `pull_request_review` e, em seguida, verificar o estado da revisão com a propriedade `github.event.review.state`. Por exemplo, este fluxo de trabalho será executado sempre que uma revisão de pull request for enviada, mas o trabalho `aprovado` só será executado se a revisão enviada for uma revisão de aprovação:

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

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Executa o fluxo de trabalho quando um comentário de revisão de pull request é modificado. Um comentário de revisão de pull request é um comentário no diff de um pull request. Para a atividade relacionada aos revisores de pull request ou comentários de pull request use os eventos [`pull_request_review`](#pull_request_review) ou [`issue_comment`](#issue_comment). Para informações sobre as APIs de revisão de pull request, consulte "[PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment)" na documentação da API do GraphQL ou "[Comentários de revisão](/rest/reference/pulls#comments)" na documentação da API REST.

Por exemplo, você pode executar um fluxo de trabalho quando um comentário de revisão de pull request tiver sido `created` ou `deleted`.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_target`

| Carga de evento webhook                                                                              | Tipos de atividade                                                                                                                                                                                                                                                                                                                                                                                                                                         | `GITHUB_SHA`                          | `GITHUB_REF`                |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------- |
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Último commit no branch de base do PR | Branch-base do pull request |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target)." Por padrão, um fluxo de trabalho só é executado quando o tipo de atividade de `pull_request_target`é `aberto,`, `sincronizado` ou `reaberto`. Para acionar fluxos de trabalho em diferentes tipos de atividade, use a palavra-chave `tipos`. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

{% endnote %}

Executa o fluxo de trabalho quando ocorre uma atividade em no pull request no repositório do fluxo de trabalho. Por exemplo, se nenhum tipo de atividade for especificado, o fluxo de trabalho será executado quando um pull request é abertp ou reaberto ou quando o branch principal do pull request é atualizado.

Este evento é executado no contexto da base do pull request, em vez de no contexto do commit de merge, como faz o evento `pull_request`. Isso impede a execução de código inseguro do cabeçalho do pull request que poderia alterar seu repositório ou roubar quaisquer segredos que você usa no fluxo de trabalho. Este evento permite que seu fluxo de trabalho faça coisas como etiquetar ou comentar nos pull requests a partir das bifurcações. Evite usar este evento se você precisar criar ou executar o código a partir do pull request.

{% warning %}

**Warning:** For workflows that are triggered by the `pull_request_target` event, the `GITHUB_TOKEN` is granted read/write repository permission unless the `permissions` key is specified and the workflow can access secrets, even when it is triggered from a fork. Although the workflow runs in the context of the base of the pull request, you should make sure that you do not check out, build, or run untrusted code from the pull request with this event. Additionally, any caches share the same scope as the base branch. To help prevent cache poisoning, you should not save the cache if there is a possibility that the cache contents were altered. For more information, see "[Keeping your GitHub Actions and workflows secure: Preventing pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)" on the GitHub Security Lab website.

{% endwarning %}

For example, you can run a workflow when a pull request has been `assigned`, `opened`, `synchronize`, or `reopened`.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### Executando seu fluxo de trabalho com base no branch de cabeçalho ou de base de um pull request

É possível usar o filtro `branches` ou `branches-ignore` para configurar seu fluxo de trabalho para que sejam executados apenas em pull requests que aponte para branches específicos. Para obter mais informações, consulte " Sintaxe de fluxo de trabalho[para o GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)".

Por exemplo, este fluxo de trabalho será executado quando alguém abrir um pull request que aponte para um branch cujo nome começa com `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:    
      - 'releases/**'
```

{% note %}

**Observação:** {% data reusables.actions.branch-paths-filter %} Por exemplo, o fluxo de trabalho a seguir será executado somente quando um pull request que inclui uma mudança para um arquivo (`.js`) do JavaScript for aberto em um branch cujo nome começa com `releases/`:

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

Para executar um trabalho com base no nome do branch de cabeçalho do pull request (ao contrário do nome da branch de base do pull request), use o contexto `github.head_ref` em uma condicional. Por exemplo, este fluxo de trabalho será executado sempre que um pull request for aberto, mas o trabalho `run_if` só será executado se o cabeçalho do pull request for um branch cujo nome comece com `releases/`:

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

#### Executando seu fluxo de trabalho com base em arquivos alterados em um pull request

You can use the `paths` or `paths-ignore` filter to configure your workflow to run when a pull request changes specific files. Para obter mais informações, consulte " Sintaxe de fluxo de trabalho[para o GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Por exemplo, este fluxo de trabalho será executado quando um pull request incluir uma alteração para um arquivo (`.js`) do JavaScript:

```yaml
on:
  pull_request_target:
    paths:
      - '**.js'
```

{% note %}

**Observação:** {% data reusables.actions.branch-paths-filter %} Por exemplo, o fluxo de trabalho a seguir será executado somente quando um pull request que inclui uma mudança para um arquivo (`.js`) do JavaScript for aberto em um branch cujo nome começa com `releases/`:

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

#### Executando o fluxo de trabalho quando um executado um merge de pull request

Quando um pull request faz merge, o pull request é automaticamente fechado. To run a workflow when a pull request merges, use the `pull_request_target` `closed` event type along with a conditional that checks the `merged` value of the event. Por exemplo, o fluxo de trabalho a seguir será executado sempre que um pull request for fechado. O trabalho `if_merged` só será executado se o pull request também tiver sido mesclado.

```yaml
on:
  pull_request_target:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

### `push`

| Carga de evento webhook                                                              | Tipos de atividade | `GITHUB_SHA`                                                              | `GITHUB_REF`   |
| ------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------- | -------------- |
| [`push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#push) | n/a                | Commit com push, exceto se excluindo um branch (quando é o branch padrão) | ref atualizado |

{% note %}

**Note:** The webhook payload available to GitHub Actions does not include the `added`, `removed`, and `modified` attributes in the `commit` object. You can retrieve the full commit object using the API. For information, see "[Commit](/graphql/reference/objects#commit)" in the GraphQL API documentation or "[Get a commit](/rest/reference/commits#get-a-commit)" in the REST API documentation.

{% endnote %}

{% note %}

**Note**: An event will not be created when you push more than three tags at once.

{% endnote %}

Runs your workflow when you push a commit or tag.

For example, you can run a workflow when the `push` event occurs.

```yaml
on:
  push
```

#### Executando o fluxo de trabalho apenas quando um push para branches específicos ocorre

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

**Note:** {% data reusables.actions.branch-paths-filter %} For example, the following workflow will only run when a push that includes a change to a JavaScript (`.js`) file is made to a branch whose name starts with `releases/`:

```yaml
on:
  push:
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Executando o fluxo de trabalho somente quando ocorre um push de tags específicas

You can use the `tags` or `tags-ignore` filter to configure your workflow to only run when specific tags or are pushed. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)."

For example, this workflow will run when someone pushes a tag that starts with `v1.`.

```yaml
on:
  push:
    tags:        
      - v1.**
```

#### Executando seu fluxo de trabalho apenas quando um push afeta arquivos específicos

You can use the `paths` or `paths-ignore` filter to configure your workflow to run when a push to specific files occurs. Para obter mais informações, consulte " Sintaxe de fluxo de trabalho[para o GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

For example, this workflow will run when someone pushes a change to a JavaScript file (`.js`):

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Note:** {% data reusables.actions.branch-paths-filter %} For example, the following workflow will only run when a push that includes a change to a JavaScript (`.js`) file is made to a branch whose name starts with `releases/`:

```yaml
on:
  push:
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

{% data reusables.actions.branch-requirement %}

Runs your workflow when activity related to {% data variables.product.prodname_registry %} occurs in your repository. For more information, see "[{% data variables.product.prodname_registry %} Documentation](/packages)."

For example, you can run a workflow when a package has been `published`.

```yaml
em:
  registry_package:
    tipos: [published]
```

### `versão`

| Carga de evento webhook                                                                   | Tipos de atividade                                                                                                                                              | `GITHUB_SHA`                    | `GITHUB_REF`                                      |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------- |
| [`versão`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Último commit na versão com tag | Ref da tag da versão `refs/tags/<tag_name>` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**Note:** Workflows are not triggered for the `created`, `edited`, or `deleted` activity types for draft releases. When you create your release through the {% data variables.product.product_name %} browser UI, your release may automatically be saved as a draft.

{% endnote %}

{% note %}

**Note:** The `prereleased` type will not trigger for pre-releases published from draft releases, but the `published` type will trigger. If you want a workflow to run when stable *and* pre-releases publish, subscribe to `published` instead of `released` and `prereleased`.

{% endnote %}

Runs your workflow when release activity in your repository occurs. For information about the release APIs, see "[Release](/graphql/reference/objects#release)" in the GraphQL API documentation or "[Releases](/rest/reference/releases)" in the REST API documentation.

For example, you can run a workflow when a release has been `published`.

```yaml
on:
  release:
    types: [published]
```

### `repository_dispatch`

| Carga de evento webhook                                                                                          | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ---------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------ | ------------- |
| [repository_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) | Personalizado      | Último commit no branch padrão | Branch padrão |

{% data reusables.actions.branch-requirement %}

You can use the {% data variables.product.product_name %} API to trigger a webhook event called [`repository_dispatch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) when you want to trigger a workflow for activity that happens outside of {% data variables.product.product_name %}. For more information, see "[Create a repository dispatch event](/rest/reference/repos#create-a-repository-dispatch-event)."

When you make a request to create a `repository_dispatch` event, you must specify an `event_type` to describe the activity type. By default, all `repository_dispatch`  activity types trigger a workflow to run. You can use the `types` keyword to limit your workflow to run when a specific `event_type` value is sent in the `repository_dispatch` webhook payload.

```yaml
on:
  repository_dispatch:
    types: [on-demand-test]
```

{% note %}

**Note:** The `event_type` value is limited to 100 characters.

{% endnote %}

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

The `schedule` event allows you to trigger a workflow at a scheduled time.

{% data reusables.repositories.actions-scheduled-workflow-example %}

Cron syntax has five fields separated by a space, and each field represents a unit of time.

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

You can use these operators in any of the five fields:

| Operador | Descrição                   | Exemplo                                                                                         |
| -------- | --------------------------- | ----------------------------------------------------------------------------------------------- |
| *        | Qualquer valor              | `15 * * *` é executado a cada quarto de hora todos os dias.                                     |
| ,        | Separador de lista de valor | `2,10 4,5 * * *` executa no minuto 2 e 10 da quarta e quinta hora de todos os dias.             |
| -        | Intervalo de valores        | `30 4-6 * *` é executado a cada meia hora da quarta, quinta e sexta hora.                       |
| /        | Valores de etapa            | `20/15 * * * *` executa a cada 15 minutos começando do miuto 20 até o 59 (minutos 20, 35 e 50). |

{% note %}

**Note:** {% data variables.product.prodname_actions %} does not support the non-standard syntax `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly`, and `@reboot`.

{% endnote %}

You can use [crontab guru](https://crontab.guru/) to help generate your cron syntax and confirm what time it will run. To help you get started, there is also a list of [crontab guru examples](https://crontab.guru/examples.html).

Notifications for scheduled workflows are sent to the user who last modified the cron syntax in the workflow file. Para obter mais informações, consulte "[Notificações para execuções de fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs)".

### `status`

| Carga de evento webhook                                                                  | Tipos de atividade | `GITHUB_SHA`                   | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------- | ------------------ | ------------------------------ | ------------ |
| [`status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | n/a                | Último commit no branch padrão | n/a          |

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando o status do commit de Git é alterado. Por exemplo, os commits podem ser marcados como `erro`, `falha`, `pendente` ou `sucesso`. Se você quiser fornecer mais informações sobre a mudança de status, você deverá usar o evento [`check_run`](#check_run). Para obter informações sobre as APIs de status do commit, consulte "[Status](/graphql/reference/objects#statue)" na documentação da API do GraphQL ou "[Status](/rest/reference/commits#commit-statuses)" na documentação da API REST.

Por exemplo, você pode executar um fluxo de trabalho quando o evento `status` ocorrer.

```yaml
on:
  status
```

Se você quiser executar um trabalho no seu fluxo de trabalho com base no novo estado do commit, você poderá usar o contexto `github.event.state`. Por exemplo, os seguintes acionadores de fluxo de trabalho quando um commit muda de status mas o trabalho `if_error_or_failed` só é executado se o novo estado de commit for `erro` ou `falha`.

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

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Embora apenas o tipo de atividade `iniciado` seja compatível, especificar que o tipo de atividade manterá seu fluxo de trabalho específico se mais tipos de atividade forem adicionados posteriormente. Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando o repositório do fluxo de trabalho é favoritado. Para obter informações sobre as APIs do pull request, consulte "[addStar](/graphql/reference/mutations#addstar)" na documentação da API do GraphQL ou "[Marcando como favorito](/rest/reference/activity#starring)" na documentação da API REST.

Por exemplo, você pode executar um fluxo de trabalho quando alguém favorita um repositório, que é o tipo de atividade `favoritada` para um evento de inspeção.

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

`workflow_call` é usado para indicar que um fluxo de trabalho pode ser chamado por outro fluxo de trabalho. Quando um fluxo de trabalho é acionado com o evento `workflow_call` a carga de eventos no fluxo de trabalho chamado é a mesma carga de eventos do fluxo de trabalho de chamada. Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".

O exemplo abaixo só executa o fluxo de trabalho quando é chamado a partir de outro fluxo de trabalho:

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| Carga de evento webhook                                                                                      | Tipos de atividade | `GITHUB_SHA`                                  | `GITHUB_REF`             |
| ------------------------------------------------------------------------------------------------------------ | ------------------ | --------------------------------------------- | ------------------------ |
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | n/a                | Último commit de merge no branch `GITHUB_REF` | Branch que recebeu envio |

Para acionar manualmente um fluxo de trabalho, use o evento `workflow_dispatch`. Você pode acionar manualmente uma execução de fluxo de trabalho usando a API do {% data variables.product.product_name %}, {% data variables.product.prodname_cli %} ou a interface do nevegador de {% data variables.product.product_name %}. Para obter mais informações, consulte "[Executando um fluxo de trabalho manualmente](/actions/managing-workflow-runs/manually-running-a-workflow)."

```yaml
on: workflow_dispatch
```

#### Fornecendo entradas

É possível configurar as propriedades de entrada definidas por personalização, os valores-padrão de entrada e as entradas obrigatórias para o evento diretamente no seu fluxo de trabalho. Ao iniciar o evento, você pode fornecer `ref` e qualquer `entrada`. Quando o fluxo de trabalho é executado, você pode acessar os valores de entrada no contexto de {% ifversion actions-unified-inputs %}`entradas`{% else %}`github.event.inputs`{% endif %}. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts)".

{% data reusables.actions.inputs-vs-github-event-inputs %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %}
Este exemplo define as entradas chamadas `logLevel`, `tags` e `ambiente`. Você passa os valores destas entradas para o fluxo de trabalho quando o executa. Em seguida, esse fluxo de trabalho imprime os valores no log, usando as propriedades de contexto de {% ifversion actions-unified-inputs %}`inputs.logLevel`, `inputs.tags` e `inputs.environment`{% else %}`github.event.inputs.logLevel`, `github.event.inputs.tags` e `github.event.inputs.environment`{% endif %}.

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
          LEVEL: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.logLevel }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.logLevel }}{% endraw %}{% endif %}
          TAGS: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.tags }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.tags }}{% endraw %}{% endif %}
          ENVIRONMENT: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.environment }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.environment }}{% endraw %}{% endif %}
```

Se você executar este fluxo de trabalho em um navegador, você deverá inserir valores para as entradas necessárias manualmente antes de o fluxo de trabalho ser executado.

![Inserindo entradas para um fluxo de trabalho](/assets/images/help/images/workflow-dispatch-inputs.png)

Você também pode passar entradas quando executar um fluxo de trabalho a partir de um script ou usando {% data variables.product.prodname_cli %}. Por exemplo:

```
gh workflow run run-tests.yml -f logLevel=warning -f tags=false -f environment=staging
```

Para obter mais informações, consulte as informações do {% data variables.product.prodname_cli %} em "[Executando um fluxo de trabalho manualmente](/actions/managing-workflow-runs/manually-running-a-workflow)".

{% else %}
Esse exemplo define as entradas `name` e `home` e as imprime nos contextos {% ifversion actions-unified-inputs %}`inputs.name` and `inputs.home`{% else %}`github.event.inputs.name` e `github.event.inputs.home`{% endif %}. Se `home` não for fornecido, será impresso o valor-padrão 'The Octoverse'.

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
          NAME: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.name }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.name }}{% endraw %}{% endif %}
          HOME: {% ifversion actions-unified-inputs %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% endif %}
```
{% endif %}

### `workflow_run`

| Carga de evento webhook                                                                              | Tipos de atividade                    | `GITHUB_SHA`                   | `GITHUB_REF`  |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------ | ------------- |
| [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_run) | - `completed`<br/>- `requested` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} O tipo de atividade `solicitado` não ocorre quando um fluxo de trabalho é executado novamente. Para obter informações sobre cada tipo de atividade, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Observação:** Você não pode usar `workflow_run` para encadear mais de três níveis de fluxos de trabalho. Por exemplo, se você tentar acionar cinco fluxos de trabalho (denominado `B` a `F`) para serem executados sequencialmente após a execução de um fluxo de trabalho inicial `A` (isto é: `A` → `B` → `C` → `D` → `E` → `F`), os fluxos de trabalho `E` e `F` não serão executados.

{% endnote %}

Este evento ocorre quando uma execução do fluxo de trabalho é solicitada ou concluída. Ele permite que você execute um fluxo de trabalho baseado na execução ou conclusão de outro fluxo de trabalho. O fluxo de trabalho iniciado pelo evento `workflow_run` pode acessar segredos e escrever tokens, mesmo que o fluxo de trabalho anterior não possa. Isso é útil em casos em que o fluxo de trabalho anterior não é intencionalmente privilegiado, mas você precisa tomar uma ação privilegiada em um fluxo de trabalho posterior.

Neste exemplo, um fluxo de trabalho está configurado para ser executado após o fluxo de trabalho "Executar Testes" separado ser concluído.

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

Se você especificar vários `fluxos de trabalho` para o evento `workflow_run`, apenas um dos fluxos de trabalho deverá ser executado. Por exemplo, um fluxo de trabalho com o seguinte gatilho será executado sempre que o fluxo de trabalho "Staging" ou "Lab" forem concluídos.

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### Executando um fluxo de trabalho com base na conclusão de outro fluxo de trabalho

A execução de um fluxo de trabalho é acionada independentemente da conclusão do fluxo de trabalho anterior. Se você deseja executar um trabalho ou etapa com base no resultado do fluxo de trabalho acionado, você poderá usar uma condição com a propriedade `github.event.workflow_run.conclusion`. Por exemplo, este fluxo de trabalho será executado sempre que um fluxo de trabalho chamado "Criação" for concluído, mas o trabalho `on-sucess` só será executado se a "Criação" for bem-sucedida e o trabalho `on-failed` só será executado se o fluxo de trabalho "Criação" falhar:

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

#### Limitando seu fluxo de trabalho para ser executado com base em branches

Você pode usar o filtro dos `branches` ou `branches-ignore` para especificar em quais branches o fluxo de trabalho de acionamento deve ser executado para acionar seu fluxo de trabalho. Para obter mais informações, consulte " Sintaxe de fluxo de trabalho[para o GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore)". Por exemplo, um fluxo de trabalho com o seguinte gatilho só será executado quando o fluxo de trabalho chamado `Build` for executado em um branch denominado `canary`.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### Usando dados do fluxo de trabalho acionador

Você pode acessar a carga do evento [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run) que corresponde ao fluxo de trabalho que acionou seu fluxo de trabalho. Por exemplo, se o fluxo de trabalho de acionamento gerar artefatos, um fluxo de trabalho acionado com o evento `workflow_run` poderá acessar esses artefatos.

O seguinte fluxo de trabalho faz o upload de dados como um artefato. (Neste exemplo simplificado, os dados são o número do pull request.)

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
      - uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: pr_number
          path: pr/
```

Quando uma execução do fluxo de trabalho acima é concluída, ela aciona a execução de um fluxo de trabalho seguinte. O fluxo de trabalho a seguir usa o contexto `github.event.workflow_run` e a API REST de {% data variables.product.product_name %} para fazer o download do artefato que foi carregado pelo fluxo de trabalho acima, abre o zip do artefato baixado e faz comentários no pull request cujo número foi carregado como um artefato.

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
        uses: {% data reusables.actions.action-github-script %}
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
        uses: {% data reusables.actions.action-github-script %}
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
