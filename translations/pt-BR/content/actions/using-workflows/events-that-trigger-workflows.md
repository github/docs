---
title: Eventos que disparam fluxos de trabalho
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
shortTitle: Events that trigger workflows
ms.openlocfilehash: bef348caaccfdad85782811d4addd78cd7ad7460
ms.sourcegitcommit: 8476dc3d513740e7cb84a91c45768cf44db5df4f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/04/2022
ms.locfileid: '147496561'
---
## <a name="about-events-that-trigger-workflows"></a>Sobre eventos que acionam fluxos de trabalho

Os acionadores de fluxo de trabalho são eventos que fazem com que um fluxo de trabalho seja executado. Para obter mais informações sobre como usar gatilhos de fluxo de trabalho, confira "[Como disparar um fluxo de trabalho](/actions/using-workflows/triggering-a-workflow)".

## <a name="available-events"></a>Eventos disponíveis

Alguns eventos têm vários tipos de atividades. Para esses eventos, você pode especificar quais tipos de atividade ativarão a execução de um fluxo de trabalho. Para obter mais informações sobre o que cada tipo de atividade significa, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhook-events-and-payloads)". Observe que nem todos os eventos de webhook acionam fluxos de trabalho.

{% ifversion fpt or ghec or ghes > 3.3 or ghae  %}
### `branch_protection_rule`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`branch_protection_rule`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando as regras de proteção de branch no repositório do fluxo de trabalho são alteradas. Para obter mais informações sobre as regras de proteção de branch, confira "[Sobre os branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)". Para obter informações sobre as APIs da regra de proteção de branch, confira "[BranchProtectionRule](/graphql/reference/objects#branchprotectionrule)" na documentação da API do GraphQL ou "[Branches](/rest/reference/branches)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando uma regra de proteção de branch for `created` ou `deleted`:

```yaml
on:
  branch_protection_rule:
    types: [created, deleted]
```

{% endif %}

### `check_run`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>-`requested_action` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando ocorre a atividade relacionada a uma execução de verificação. Uma execução de verificação é um teste individual que faz parte de um conjunto de verificações. Para obter mais informações, confira "[Introdução à API de Verificações](/rest/guides/getting-started-with-the-checks-api)". Para obter informações sobre as APIs de execução de verificação, confira "[CheckRun](/graphql/reference/objects#checkrun)" na documentação da API do GraphQL ou "[Verificações](/rest/reference/checks#runs)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando uma execução de verificação for `rerequested` ou `completed`.

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

### `check_suite`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_suite`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_suite) | - `completed` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite)". Embora apenas o tipo de atividade `started` seja compatível, a especificação do tipo de atividade manterá o fluxo de trabalho específico se mais tipos de atividade forem adicionados no futuro. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Observação:** para evitar fluxos de trabalho recursivos, esse evento não dispara fluxos de trabalho se o conjunto de verificações foi criado pelo {% data variables.product.prodname_actions %}.

{% endnote %}

Executa o fluxo de trabalho quando ocorre a atividade do conjunto de verificações. Um conjunto de verificações é uma coleção das execuções de verificação criadas para um commit específico. O conjunto de verificações resumem o status e a conclusão das execuções de verificação que estão no conjunto. Para obter mais informações, confira "[Introdução à API de Verificações](/rest/guides/getting-started-with-the-checks-api)". Para obter informações sobre as APIs do conjunto de verificações, confira "[CheckSuite](/graphql/reference/objects#checksuite)" na documentação da API do GraphQL ou "[Verificações](/rest/reference/checks#suites)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando um conjunto de verificações for `completed`.

```yaml
on:
  check_suite:
    types: [completed]
```

### `create`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`create`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#create) | N/D | Último commit no branch ou tag criado | Branch ou tag criado |

{% note %}

**Observação**: um evento não será criado quando você criar mais de três marcas de uma só vez.

{% endnote %}

Executa o fluxo de trabalho quando alguém cria uma referência Git (branch ou tag) no repositório do fluxo de trabalho. Para obter informações sobre as APIs usadas para criar uma referência do Git, confira "[createRef](/graphql/reference/mutations#createref)" na documentação da API do GraphQL ou "[Criar uma referência](/rest/reference/git#create-a-reference)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando o evento `create` ocorrer.

```yaml
on:
  create
```

### `delete`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`delete`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#delete) | n/a | Último commit no branch padrão | Branch padrão |

{% data reusables.actions.branch-requirement %}

{% note %}

**Observação**: um evento não será criado quando você excluir mais de três marcas de uma só vez.

{% endnote %}

Executa o fluxo de trabalho quando alguém exclui uma referência Git (branch ou tag) no repositório do fluxo de trabalho. Para obter informações sobre as APIs usadas para excluir uma referência do Git, confira "[deleteRef](/graphql/reference/mutations#deleteref)" na documentação da API do GraphQL ou "[Excluir uma referência](/rest/reference/git#delete-a-reference)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando o evento `delete` ocorrer.

```yaml
on:
  delete
```

### `deployment`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment) | N/D | Commit a ser implantado | Branch ou tag a ser implantado (vazio, se criado com o SHA de um commit)|

Executa o fluxo de trabalho quando alguém cria uma implantação no repositório do fluxo de trabalho. As implantações criadas com um SHA de commit podem não ter uma referência do Git. Para obter informações sobre as APIs usadas para criar uma implantação, confira "[createDeployment](/graphql/reference/mutations#createdeployment)" na documentação da API do GraphQL ou "[Implantações](/rest/reference/repos#deployments)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando o evento `deployment` ocorrer.

```yaml
on:
  deployment
```

### `deployment_status`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment_status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment_status) | N/D | Commit a ser implantado | Branch ou tag a ser implantado (vazio se commit)|

{% note %}

**Observação:** quando o estado de um status de implantação for definido como `inactive`, uma execução de fluxo de trabalho não será disparada.

{% endnote %}

Executa o fluxo de trabalho quando uma terceira parte fornece um status de implantação. As implantações criadas com um SHA de commit podem não ter uma referência do Git. Para obter informações sobre as APIs usadas para criar um status de implantação, confira "[createDeploymentStatus](/graphql/reference/mutations#createdeploymentstatus)" na documentação da API do GraphQL ou "[Criar um status de implantação](/rest/reference/deployments#create-a-deployment-status)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando o evento `deployment_status` ocorrer.

```yaml
on:
  deployment_status
```

{% ifversion discussions %}
### `discussion`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#discussion) | - `created`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `category_changed`<br/> - `answered`<br/> - `unanswered` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Executa o fluxo de trabalho quando uma discussão no repositório do fluxo de trabalho é criada ou modificada. Para as atividades relacionadas a comentários sobre uma discussão, use o evento [`discussion_comment`](#discussion_comment). Para obter mais informações sobre as discussões, confira "[Sobre as discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions)". Para obter informações sobre a API do GraphQL, confira "[Discussão](/graphql/reference/objects#discussion)".

Por exemplo, você poderá executar um fluxo de trabalho quando uma discussão for `created`, `edited` ou `answered`.

```yaml
on:
  discussion:
    types: [created, edited, answered]
```

### `discussion_comment`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#discussion_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Executa o fluxo de trabalho quando um comentário em uma discussão no repositório do fluxo de trabalho é criado ou modificado. Para as atividades relacionadas a uma discussão em vez de comentários sobre uma discussão, use o evento [`discussion`](#discussion). Para obter mais informações sobre as discussões, confira "[Sobre as discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions)". Para obter informações sobre a API do GraphQL, confira "[Discussão](/graphql/reference/objects#discussion)".

Por exemplo, você poderá executar um fluxo de trabalho quando um comentário de discussão for `created` ou `deleted`.

```yaml
on:
  discussion_comment:
    types: [created, deleted]
```

{% endif %}

### `fork`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`fork`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#fork) | n/a | Último commit no branch padrão |  Branch padrão |

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando alguém bifurca um repositório. Para obter informações sobre a API REST, confira "[Criar um fork](/rest/reference/repos#create-a-fork)".

Por exemplo, você poderá executar um fluxo de trabalho quando o evento `fork` ocorrer.

```yaml
on:
  fork
```

### `gollum`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`gollum`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#gollum) | n/a | Último commit no branch padrão |  Branch padrão |

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando alguém cria ou atualiza uma página wiki. Para obter mais informações, confira "[Sobre os wikis](/communities/documenting-your-project-with-wikis/about-wikis)".

Por exemplo, você poderá executar um fluxo de trabalho quando o evento `gollum` ocorrer.

```yaml
on:
  gollum
```

### `issue_comment`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando um problema ou comentário de pull request é criado, editado ou excluído. Para obter informações sobre as APIs de comentários sobre problemas, confira "[IssueComment](/graphql/reference/objects#issuecomment)" na documentação da API do GraphQL ou "[Comentários sobre problemas](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando um comentário ou um problema de uma solicitação de pull for `created` ou `deleted`.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### <a name="issue_comment-on-issues-only-or-pull-requests-only"></a>`issue_comment` apenas em problemas ou em solicitações de pull

O evento `issue_comment` ocorre em comentários sobre problemas e solicitações de pull. Você pode usar a propriedade `github.event.issue.pull_request` em um condicional para realizar uma ação diferente, dependendo se o objeto de gatilho foi um problema ou uma solicitação de pull.

Por exemplo, esse fluxo de trabalho executará o trabalho `pr_commented` somente se o evento `issue_comment` for originado de uma solicitação de pull. Ele executará o trabalho `issue_commented` somente se o evento `issue_comment` tiver se originado de um problema.

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

### `issues`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issues`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando um problema no repositório do fluxo de trabalho é criado ou modificado. Para as atividades relacionadas a comentários em um problema, use o evento [`issue_comment`](#issue_comment). Para obter mais informações sobre problemas, confira "[Sobre os problemas](/issues/tracking-your-work-with-issues/about-issues)". Para obter informações sobre as APIs de problemas, confira "[Problema](/graphql/reference/objects#issue)" na documentação da API do GraphQL ou "[Problemas](/rest/reference/issues)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando um problema for `opened`, `edited` ou `milestoned`.

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

### `label`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`label`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando uma etiqueta no repositório do fluxo de trabalho é criada ou modificada. Para obter mais informações sobre rótulos, confira "[Como gerenciar rótulos](/issues/using-labels-and-milestones-to-track-work/managing-labels)". Para obter informações sobre as APIs de rótulo, confira "[Rótulo](/graphql/reference/objects#label)" na documentação da API do GraphQL ou "[Rótulos](/rest/reference/issues#labels)" na documentação da API REST.

Caso deseje executar seu fluxo de trabalho quando um rótulo for adicionado ou removido de um problema, uma solicitação de pull ou uma discussão, use os tipos de atividades `labeled` ou `unlabeled` para os eventos [`issues`](#issues), [`pull_request`](#pull_request), [`pull_request_target`](#pull_request_target) ou [`discussion`](#discussion).

Por exemplo, você poderá executar um fluxo de trabalho quando um rótulo for `created` ou `deleted`.

```yaml
on:
  label:
    types: [created, deleted]
```

{% ifversion fpt or ghec  %}

### `merge_group`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`merge_group`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#merge_group) | `checks_requested` | SHA do grupo de mesclagem | Referência do grupo de mesclagem |

{% data reusables.pull_requests.merge-queue-beta %}

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Embora apenas o tipo de atividade `checks_requested` tenha suporte, a especificação do tipo de atividade manterá seu fluxo de trabalho específico se mais tipos de atividade forem adicionados posteriormente. Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#merge_group)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Executa o fluxo de trabalho quando uma solicitação de pull é adicionada a uma fila de mesclagem, o que adiciona a solicitação de pull a um grupo de mesclagem. Para obter mais informações, confira "[Como mesclar uma solicitação de pull com uma fila de mesclagem](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)".

Por exemplo, você poderá executar um fluxo de trabalho quando a atividade `checks_requested` tiver ocorrido.

```yaml
on:
  merge_group:
    types: [checks_requested]

```

{% endif %}
### `milestone`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`milestone`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando um marco no repositório do fluxo de trabalho é criado ou modificado. Para obter mais informações sobre marcos, confira "[Sobre os marcos](/issues/using-labels-and-milestones-to-track-work/about-milestones)". Para obter informações sobre as APIs de marco, confira "[Marco](/graphql/reference/objects#milestone)" na documentação da API do GraphQL ou "[Marcos](/rest/reference/issues#milestones)" na documentação da API REST.

Caso deseje executar seu fluxo de trabalho quando um problema for adicionado ou removido de um marco, use os tipos de atividades `milestoned` ou `demilestoned` para o evento [`issues`](#issues).

Por exemplo, você poderá executar um fluxo de trabalho quando um marco for `opened` ou `deleted`.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

### `page_build`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`page_build`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#page_build) | n/a | Último commit no branch padrão | n/a |

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando alguém faz push em um branch que é a fonte de publicação para {% data variables.product.prodname_pages %}, se o {% data variables.product.prodname_pages %} estiver habilitado no repositório. Para obter mais informações sobre as fontes de publicação do {% data variables.product.prodname_pages %}, confira "[Como configurar uma fonte de publicação para seu site do GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)". Para obter informações sobre a API REST, confira "[Páginas](/rest/reference/repos#pages)".

Por exemplo, você poderá executar um fluxo de trabalho quando o evento `page_build` ocorrer.

```yaml
on:
  page_build
```

### `project`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project) | - `created`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} O tipo de atividade `edited` refere-se a quando um quadro de projetos, não uma coluna nem um cartão no quadro de projetos, é editado. Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Observação**: esse evento só ocorre em projetos pertencentes ao repositório do fluxo de trabalho, não em projetos pertencentes à organização ou a usuários nem em projetos pertencentes a outro repositório.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Observação**: esse evento ocorre apenas para {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

Executa o fluxo de trabalho quando um quadro de projeto é criado ou modificado. Para as atividades relacionadas a cartões ou a colunas em um quadro de projeto, use os eventos [`project_card`](#project_card) ou [`project_column`](#project_column). Para obter mais informações sobre os quadros de projetos, confira "[Sobre os quadros de projetos](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)". Para obter informações sobre as APIs de quadro de projetos, confira "[Projeto](/graphql/reference/objects#project)" na documentação da API do GraphQL ou "[Projetos](/rest/reference/projects)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando um projeto for `created` ou `deleted`.

```yaml
on:
  project:
    types: [created, deleted]
```

### `project_card`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_card`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` em um problema<br/>- `edited`<br/>- `deleted` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Observação**: esse evento só ocorre em projetos pertencentes ao repositório do fluxo de trabalho, não em projetos pertencentes à organização ou a usuários nem em projetos pertencentes a outro repositório.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Observação**: esse evento ocorre apenas para {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

Executa o fluxo de trabalho quando um cartão em um quadro de projeto é criado ou modificado. Para as atividades relacionadas a quadros de projetos ou a colunas em um quadro de projetos, use o evento [`project`](#project) ou [`project_column`](#project_column). Para obter mais informações sobre os quadros de projetos, confira "[Sobre os quadros de projetos](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)". Para obter informações sobre as APIs de cartão de projeto, confira "[ProjectCard](/graphql/reference/objects#projectcard)" na documentação da API do GraphQL ou "[Cartões de projetos](/rest/reference/projects#cards)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando um cartão de projeto for `created` ou `deleted`.

```yaml
on:
  project_card:
    types: [created, deleted]
```

### `project_column`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_column`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Observação**: esse evento só ocorre em projetos pertencentes ao repositório do fluxo de trabalho, não em projetos pertencentes à organização ou a usuários nem em projetos pertencentes a outro repositório.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**Observação**: esse evento ocorre apenas para {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

Executa o fluxo de trabalho quando uma coluna em um quadro de projeto é criada ou modificada. Para as atividades relacionadas a quadros de projetos ou a cartões em um quadro de projetos, use o evento [`project`](#project) ou [`project_card`](#project_card). Para obter mais informações sobre os quadros de projetos, confira "[Sobre os quadros de projetos](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)". Para obter informações sobre as APIs de coluna de projeto, confira "[Coluna de Projeto](/graphql/reference/objects#projectcolumn)" na documentação da API do GraphQL ou "[Colunas de projeto](/rest/reference/projects#columns)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando uma coluna de projeto for `created` ou `deleted`.

```yaml
on:
  project_column:
    types: [created, deleted]
```

### `public`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`public`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#public) | n/a | Último commit no branch padrão |  Branch padrão |

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando o repositório do fluxo de trabalho é alterado de privado para público. Para obter informações sobre a API REST, confira "[Editar repositórios](/rest/reference/repos#edit)".

Por exemplo, você poderá executar um fluxo de trabalho quando o evento `public` ocorrer.

```yaml
on:
  public
```

### `pull_request`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Último commit de mesclagem no branch `GITHUB_REF` | Branch de mesclagem de PR `refs/pull/:prNumber/merge` |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request)". Por padrão, um fluxo de trabalho só é executado quando o tipo de atividade de um evento `pull_request` é `opened`, `synchronize` ou `reopened`. Para disparar fluxos de trabalho em diferentes tipos de atividades, use a palavra-chave `types`. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

{% endnote %}

{% note %}

**Observação:** os fluxos de trabalho não serão executados na atividade `pull_request` se a solicitação de pull tiver um conflito de mesclagem. O conflito de merge tem de ser resolvido primeiro.

Inversamente, os fluxos de trabalho com o evento `pull_request_target` serão executados mesmo que a solicitação de pull tenha um conflito de mesclagem. Antes de usar o gatilho `pull_request_target`, você deve estar ciente dos riscos de segurança. Para obter mais informações, confira [`pull_request_target`](#pull_request_target).

{% endnote %}

Executa o fluxo de trabalho quando ocorre uma atividade em no pull request no repositório do fluxo de trabalho. Por exemplo, se nenhum tipo de atividade for especificado, o fluxo de trabalho será executado quando um pull request é abertp ou reabertp ou quando o branch principal do pull request é atualizado. Para as atividades relacionadas a revisões de solicitação de pull, a comentários de revisão de uma solicitação de pull ou a comentários de uma solicitação de pull, use os eventos [`pull_request_review`](#pull_request_review), [`pull_request_review_comment`](#pull_request_review_comment) ou [`issue_comment`](#issue_comment). Para obter informações sobre as APIs de solicitação de pull, confira "[PullRequest](/graphql/reference/objects#pullrequest)" na documentação da API do GraphQL ou "[Solicitações de pull](/rest/reference/pulls)" na documentação da API REST.

Observe que o `GITHUB_SHA` desse evento é o último commit de mesclagem do branch de mesclagem da solicitação de pull. Caso deseje obter a ID de commit do último commit no branch principal da solicitação de pull, use `github.event.pull_request.head.sha`.

Por exemplo, você pode executar um fluxo de trabalho quando um pull request for aberto ou reaberto.

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

Você pode usar o contexto do evento para controlar ainda mais quando os trabalhos no seu fluxo de trabalho serão executados. Por exemplo, esse fluxo de trabalho será executado quando uma revisão for solicitada em uma solicitação de pull, mas o trabalho `specific_review_requested` só será executado quando uma revisão por `octo-team` for solicitada.

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

#### <a name="running-your-workflow-based-on-the-head-or-base-branch-of-a-pull-request"></a>Executando seu fluxo de trabalho com base no branch de cabeçalho ou de base de um pull request

Você pode usar o filtro `branches` ou `branches-ignore` para configurar seu fluxo de trabalho para que ele seja executado somente em solicitações de pull direcionadas a branches específicos. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)".

Por exemplo, este fluxo de trabalho será executado quando alguém abrir uma solicitação de pull direcionada a um branch cujo nome começa com `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**Observação:** {% data reusables.actions.branch-paths-filter %} Por exemplo, o seguinte fluxo de trabalho só será executado quando uma solicitação de pull que inclui uma alteração em um arquivo JavaScript (`.js`) for aberta em um branch cujo nome começa com `releases/`:

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

Para executar um trabalho com base no nome do branch de cabeçalho da solicitação de pull (em vez do nome do branch base da solicitação de pull), use o contexto `github.head_ref` em um condicional. Por exemplo, este fluxo de trabalho será executado sempre que uma solicitação de pull for aberta, mas o trabalho `run_if` só será executado se o cabeçalho da solicitação de pull for um branch cujo nome começa com `releases/`:

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

#### <a name="running-your-workflow-based-on-files-changed-in-a-pull-request"></a>Executando seu fluxo de trabalho com base em arquivos alterados em um pull request

Também é possível configurar o fluxo de trabalho para ser executado quando um pull request alterar arquivos específicos. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Por exemplo, este fluxo de trabalho será executado quando uma solicitação de pull incluir uma alteração em um arquivo JavaScript (`.js`):

```yaml
on:
  pull_request:
    paths:
      - '**.js'
```

{% note %}

**Observação:** {% data reusables.actions.branch-paths-filter %} Por exemplo, o seguinte fluxo de trabalho só será executado quando uma solicitação de pull que inclui uma alteração em um arquivo JavaScript (`.js`) for aberta em um branch cujo nome começa com `releases/`:

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

#### <a name="running-your-workflow-when-a-pull-request-merges"></a>Executando o fluxo de trabalho quando um executado um merge de pull request

Quando um pull request faz merge, o pull request é automaticamente fechado. Para executar um fluxo de trabalho quando uma solicitação de pull é mesclada, use o tipo de evento `pull_request` `closed` com um condicional que verifica o valor `merged` do evento. Por exemplo, o fluxo de trabalho a seguir será executado sempre que um pull request for fechado. O trabalho `if_merged` só será executado se a solicitação de pull também tiver sido mesclada.

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

### <a name="pull_request_comment-use-issue_comment"></a>`pull_request_comment` (use `issue_comment`)

Para executar o fluxo de trabalho quando um comentário em uma solicitação de pull (não na comparação de uma solicitação de pull) é criado, editado ou excluído, use o evento [`issue_comment`](#issue_comment). Para as atividades relacionadas a revisões de solicitação de pull ou a comentários de revisão de uma solicitação de pull, use os eventos [`pull_request_review`](#pull_request_review) ou [`pull_request_review_comment`](#pull_request_review_comment).

### `pull_request_review`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Último commit de mesclagem no branch `GITHUB_REF` | Branch de mesclagem de PR `refs/pull/:prNumber/merge` |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Executa o fluxo de trabalho quando uma revisão de pull request é enviada, editada ou ignorada. Uma revisão de pull request é um grupo de comentários de revisão de pull request, além de um comentário e estado de texto. Para as atividades relacionadas a comentários de revisão de uma solicitação de pull ou a comentários de uma solicitação de pull, use os eventos [`pull_request_review_comment`](#pull_request_review_comment) ou [`issue_comment`](#issue_comment). Para obter informações sobre as APIs de revisão de solicitação de pull, confira "[PullRequestReview](/graphql/reference/objects#pullrequest)" na documentação da API do GraphQL ou "[Revisões de solicitação de pull](/rest/reference/pulls#reviews)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando uma revisão de solicitação de pull for `edited` ou `dismissed`.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### <a name="running-a-workflow-when-a-pull-request-is-approved"></a>Executando um fluxo de trabalho quando um pull request é aprovado

Para executar o fluxo de trabalho quando uma solicitação de pull tiver sido aprovada, dispare o fluxo de trabalho com o tipo `submitted` de evento `pull_request_review` e verifique o estado de revisão com a propriedade `github.event.review.state`. Por exemplo, este fluxo de trabalho será executado sempre que uma revisão de solicitação de pull for enviada, mas o trabalho `approved` só será executado se a revisão enviada for uma revisão de aprovação:

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

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review_comment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted`| Último commit de mesclagem no branch `GITHUB_REF` | Branch de mesclagem de PR `refs/pull/:prNumber/merge` |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Executa o fluxo de trabalho quando um comentário de revisão de pull request é modificado. Um comentário de revisão de pull request é um comentário no diff de um pull request. Para as atividades relacionadas a revisões de solicitação de pull ou a comentários de uma solicitação de pull, use os eventos [`pull_request_review`](#pull_request_review) ou [`issue_comment`](#issue_comment). Para obter informações sobre as APIs de comentário de revisão de solicitação de pull, confira "[PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment)" na documentação da API do GraphQL ou "[Comentários de revisão](/rest/reference/pulls#comments)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando um comentário de revisão de uma solicitação de pull for `created` ou `deleted`.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_target`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Último commit no branch de base do PR | Branch-base do pull request |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target)". Por padrão, um fluxo de trabalho só é executado quando o tipo de atividade de um evento `pull_request_target` é `opened`, `synchronize` ou `reopened`. Para disparar fluxos de trabalho em diferentes tipos de atividades, use a palavra-chave `types`. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)".

{% endnote %}

Executa o fluxo de trabalho quando ocorre uma atividade em no pull request no repositório do fluxo de trabalho. Por exemplo, se nenhum tipo de atividade for especificado, o fluxo de trabalho será executado quando um pull request é abertp ou reabertp ou quando o branch principal do pull request é atualizado.

Esse evento é executado no contexto da base da solicitação de pull, em vez de no contexto do commit de mesclagem, como o evento `pull_request` faz. Isso impede a execução de código inseguro do cabeçalho do pull request que poderia alterar seu repositório ou roubar quaisquer segredos que você usa no fluxo de trabalho. Este evento permite que seu fluxo de trabalho faça coisas como etiquetar ou comentar nos pull requests a partir das bifurcações. Evite usar este evento se você precisar criar ou executar o código a partir do pull request.

{% warning %}

**Aviso:** para os fluxos de trabalho que são disparados pelo evento `pull_request_target`, o `GITHUB_TOKEN` recebe a permissão de leitura/gravação no repositório, a menos que a chave `permissions` seja especificada e o fluxo de trabalho possa acessar segredos, mesmo quando ela for disparada em um fork. Embora o fluxo de trabalho seja executado no contexto da base do pull request, você deve certificar-se de que você não irá fazer checkout, construir ou executar o código não confiável do pull request com este evento. Além disso, qualquer cache compartilha o mesmo escopo do ramo de base. Para evitar envenenamento do cache, você não deve salvar o cache se houver a possibilidade de que o conteúdo do cache tenha sido alterado. Para obter mais informações, confira "[Como manter o GitHub Actions e seus fluxos de trabalho seguros: impedir solicitações pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)" no site do GitHub Security Lab.

{% endwarning %}

Por exemplo, você poderá executar um fluxo de trabalho quando uma solicitação de pull for `assigned`, `opened`, `synchronize` ou `reopened`.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### <a name="running-your-workflow-based-on-the-head-or-base-branch-of-a-pull-request"></a>Executando seu fluxo de trabalho com base no branch de cabeçalho ou de base de um pull request

Você pode usar o filtro `branches` ou `branches-ignore` para configurar seu fluxo de trabalho para que ele seja executado somente em solicitações de pull direcionadas a branches específicos. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)".

Por exemplo, este fluxo de trabalho será executado quando alguém abrir uma solicitação de pull direcionada a um branch cujo nome começa com `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**Observação:** {% data reusables.actions.branch-paths-filter %} Por exemplo, o seguinte fluxo de trabalho só será executado quando uma solicitação de pull que inclui uma alteração em um arquivo JavaScript (`.js`) for aberta em um branch cujo nome começa com `releases/`:

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

Para executar um trabalho com base no nome do branch de cabeçalho da solicitação de pull (em vez do nome do branch base da solicitação de pull), use o contexto `github.head_ref` em um condicional. Por exemplo, este fluxo de trabalho será executado sempre que uma solicitação de pull for aberta, mas o trabalho `run_if` só será executado se o cabeçalho da solicitação de pull for um branch cujo nome começa com `releases/`:

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

#### <a name="running-your-workflow-based-on-files-changed-in-a-pull-request"></a>Executando seu fluxo de trabalho com base em arquivos alterados em um pull request

Você pode usar o filtro `paths` ou `paths-ignore` para configurar o fluxo de trabalho para ser executado quando uma solicitação de pull alterar arquivos específicos. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Por exemplo, este fluxo de trabalho será executado quando uma solicitação de pull incluir uma alteração em um arquivo JavaScript (`.js`):

```yaml
on:
  pull_request_target:
    paths:
      - '**.js'
```

{% note %}

**Observação:** {% data reusables.actions.branch-paths-filter %} Por exemplo, o seguinte fluxo de trabalho só será executado quando uma solicitação de pull que inclui uma alteração em um arquivo JavaScript (`.js`) for aberta em um branch cujo nome começa com `releases/`:

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

#### <a name="running-your-workflow-when-a-pull-request-merges"></a>Executando o fluxo de trabalho quando um executado um merge de pull request

Quando um pull request faz merge, o pull request é automaticamente fechado. Para executar um fluxo de trabalho quando uma solicitação de pull é mesclada, use o tipo de evento `pull_request_target` `closed` com um condicional que verifica o valor `merged` do evento. Por exemplo, o fluxo de trabalho a seguir será executado sempre que um pull request for fechado. O trabalho `if_merged` só será executado se a solicitação de pull também tiver sido mesclada.

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

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#push) | n/a | Quando você exclui um branch, o SHA na execução do fluxo de trabalho (e os refs associados) é revertido para o branch padrão do repositório. | ref atualizado |

{% note %}

**Observação:** a carga do webhook disponível para o GitHub Actions não inclui os atributos `added`, `removed` e `modified` no objeto `commit`. Você pode recuperar o objeto de commit completo usando a API. Para obter informações, confira "[Commit](/graphql/reference/objects#commit)" na documentação da API do GraphQL ou "[Obter um commit](/rest/reference/commits#get-a-commit)" na documentação da API REST.

{% endnote %}

{% note %}

**Observação**: um evento não será criado quando você efetuar push de mais de três marcas de uma só vez.

{% endnote %}

Executa o fluxo de trabalho quando você faz push de um commit ou tag.

Por exemplo, você poderá executar um fluxo de trabalho quando o evento `push` ocorrer.

```yaml
on:
  push
```

{% note %}

**Observação**: quando um evento de webhook `push` aciona uma execução de fluxo de trabalho, o campo "enviado por" da interface do usuário de ações mostra a conta do pusher e não o autor ou o committer. No entanto, se as alterações forem enviadas para um repositório usando autenticação SSH com uma chave de implantação, o campo "enviado por" será o administrador do repositório que verificou a chave de implantação quando ela foi adicionada a um repositório.

{% endnote %}

#### <a name="running-your-workflow-only-when-a-push-to-specific-branches-occurs"></a>Executando o fluxo de trabalho apenas quando um push para branches específicos ocorre

Você pode usar o filtro `branches` ou `branches-ignore` para configurar seu fluxo de trabalho para ser executado somente quando branches específicos forem enviados por push. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

Por exemplo, este fluxo de trabalho será executado quando alguém efetuar push para `main` ou para um branch que começa com `releases/`.

```yaml
on:
  push:
    branches:
      - 'main'
      - 'releases/**'
```

{% note %}

**Observação:** {% data reusables.actions.branch-paths-filter %} Por exemplo, o seguinte fluxo de trabalho só será executado quando um push que inclui uma alteração em um arquivo JavaScript (`.js`) for feito em um branch cujo nome começa com `releases/`:

```yaml
on:
  push:
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### <a name="running-your-workflow-only-when-a-push-of-specific-tags-occurs"></a>Executando o fluxo de trabalho somente quando ocorre um push de tags específicas

Você pode usar o filtro `tags` ou `tags-ignore` para configurar seu fluxo de trabalho para ser executado somente quando marcas específicas forem enviadas por push. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)".

Por exemplo, este fluxo de trabalho será executado quando alguém efetuar push de uma marca que começa com `v1.`.

```yaml
on:
  push:
    tags:
      - v1.**
```

#### <a name="running-your-workflow-only-when-a-push-affects-specific-files"></a>Executando seu fluxo de trabalho apenas quando um push afeta arquivos específicos

Você pode usar o filtro `paths` ou `paths-ignore` para configurar o fluxo de trabalho para ser executado quando ocorrer um push para arquivos específicos. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

Por exemplo, este fluxo de trabalho será executado quando alguém efetuar push de uma alteração para um arquivo JavaScript (`.js`):

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Observação:** {% data reusables.actions.branch-paths-filter %} Por exemplo, o seguinte fluxo de trabalho só será executado quando um push que inclui uma alteração em um arquivo JavaScript (`.js`) for feito em um branch cujo nome começa com `releases/`:

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

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`registry_package`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#package) | - `published`<br/>- `updated` | Commit do pacote publicado | Branch ou tag do pacote publicado |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#registry_package)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando uma atividade relacionada ao {% data variables.product.prodname_registry %} ocorre no seu repositório. Para obter mais informações, confira "[Documentação do {% data variables.product.prodname_registry %}](/packages)".

Por exemplo, você pode executar um fluxo de trabalho quando uma nova versão do pacote foi `published`.

```yaml
on:
  registry_package:
    types: [published]
```

### `release`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`release`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Último commit na versão com tag | Referência de marca da versão `refs/tags/<tag_name>` |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**Observação:** os fluxos de trabalho não são disparados para os tipos de atividades `created`, `edited` ou `deleted` em versões de rascunho. Ao criar a sua versão por meio da interface de usuário do navegador de {% data variables.product.product_name %}, a sua versão poderá ser automaticamente salva como rascunho.

{% endnote %}

{% note %}

**Observação:** o tipo `prereleased` não será disparado em pré-lançamentos publicados das versões de rascunho, mas o tipo `published` será disparado. Caso deseje que um fluxo de trabalho seja executado quando as versões estáveis *e* de pré-lançamento forem publicadas, assine `published` em vez de `released` e `prereleased`.

{% endnote %}

Executa o fluxo de trabalho quando a atividade de da versão no repositório ocorre. Para obter informações sobre as APIs de versão, confira "[Versão](/graphql/reference/objects#release)" na documentação da API do GraphQL ou "[Versões](/rest/reference/releases)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando uma versão for `published`.

```yaml
on:
  release:
    types: [published]
```

### `repository_dispatch`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [repository_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) | Personalizado | Último commit no branch padrão | Branch padrão |

{% data reusables.actions.branch-requirement %}

Você pode usar a API do {% data variables.product.product_name %} para disparar um evento de webhook chamado [`repository_dispatch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) quando você deseja disparar um fluxo de trabalho para a atividade que ocorre fora do {% data variables.product.product_name %}. Para obter mais informações, confira "[Criar um evento de expedição de repositório](/rest/reference/repos#create-a-repository-dispatch-event)".

Ao fazer uma solicitação para criar um evento `repository_dispatch`, você precisa especificar um `event_type` para descrever o tipo de atividade. Por padrão, todos os tipos de atividade `repository_dispatch` disparam a execução de um fluxo de trabalho. Você pode usar a palavra-chave `types` para limitar o fluxo de trabalho a ser executado quando um valor `event_type` específico é enviado na carga do webhook `repository_dispatch`.

```yaml
on:
  repository_dispatch:
    types: [on-demand-test]
```

{% note %}

**Observação:** o valor `event_type` é limitado a 100 caracteres.

{% endnote %}

Todos os dados enviados por meio do parâmetro `client_payload` ficarão disponíveis no contexto `github.event` no seu fluxo de trabalho. Por exemplo, se você enviar esse texto de solicitação quando criar um evento de despacho de repositório:

```json
{
  "event_type": "test_result",
  "client_payload": {
    "passed": false,
    "message": "Error: timeout"
  }
}
```

então você poderá acessar a carga em um fluxo de trabalho assim:

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

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| n/a | n/a | Último commit no branch padrão | Branch padrão | Quando o fluxo de trabalho agendado é definido para ser executado. Um fluxo de trabalho agendado usa a [sintaxe cron POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Para obter mais informações, confira "[Como disparar um fluxo de trabalho com eventos](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)". |

{% data reusables.actions.schedule-delay %}

O evento `schedule` permite disparar um fluxo de trabalho em um horário agendado.

{% data reusables.repositories.actions-scheduled-workflow-example %}

A sintaxe cron tem cinco campos separados por um espaço, e cada campo representa uma unidade de tempo.

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

Você pode usar estes operadores em qualquer um dos cinco campos:

| Operador | Descrição | Exemplo |
| -------- | ----------- | ------- |
| * | Qualquer valor | `15 * * * *` é executado a cada quarto de hora todos os dias. |
| , | Separador de lista de valor | `2,10 4,5 * * *` é executado nos minutos 2 e 10 da quarta e da quinta hora todos os dias. |
| - | Intervalo de valores | `30 4-6 * * *` é executado a cada meia hora da quarta, da quinta e da sexta hora. |
| / | Valores de etapa | `20/15 * * * *` é executado a cada 15 minutos, começando do minuto 20 ao 59 (minutos 20, 35 e 50). |

{% note %}

**Observação:** O {% data variables.product.prodname_actions %} não dá suporte à sintaxe não padrão `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly` e `@reboot`.

{% endnote %}

Você pode usar o [crontab guru](https://crontab.guru/) para ajudar a gerar a sintaxe cron e confirmar a hora em que ela será executada. Para ajudar você a começar, há também uma lista de [exemplos do crontab guru](https://crontab.guru/examples.html).

As notificações de fluxos de trabalho agendados são enviadas ao usuário que modificou a sintaxe cron no arquivo do fluxo de trabalho. Para obter mais informações, confira "[Notificações para execuções de fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs)".

### `status`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | n/a | Último commit no branch padrão | n/a |

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando o status do commit de Git é alterado. Por exemplo, os commits podem ser marcados como `error`, `failure`, `pending` ou `success`. Caso deseje fornecer mais detalhes sobre a alteração de status, o ideal é usar o evento [`check_run`](#check_run). Para obter informações sobre as APIs do status de commit, confira "[Status](/graphql/reference/objects#statue)" na documentação da API do GraphQL ou "[Status](/rest/reference/commits#commit-statuses)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando o evento `status` ocorrer.

```yaml
on:
  status
```

Caso deseje executar um trabalho no seu fluxo de trabalho com base no novo estado de commit, use o contexto `github.event.state`. Por exemplo, o fluxo de trabalho a seguir é disparado quando um status de commit é alterado, mas o trabalho `if_error_or_failure` só é executado se o novo estado de commit é `error` ou `failure`.

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

### `watch`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`watch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#watch) | - `started` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} Embora apenas o tipo de atividade `started` tenha suporte, a especificação do tipo de atividade manterá seu fluxo de trabalho específico se mais tipos de atividade forem adicionados posteriormente. Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Executa o fluxo de trabalho quando o repositório do fluxo de trabalho é favoritado. Para obter informações sobre as APIs de solicitação de pull, confira "[addStar](/graphql/reference/mutations#addstar)" na documentação da API do GraphQL ou "[Adição aos favoritos](/rest/reference/activity#starring)" na documentação da API REST.

Por exemplo, você poderá executar um fluxo de trabalho quando alguém adiciona um repositório aos favoritos, que é o tipo de atividade `started` para um evento de inspeção.

```yaml
on:
  watch:
    types: [started]
```

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

### `workflow_call`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| Igual ao fluxo de trabalho de chamadas | n/a | Igual ao fluxo de trabalho de chamadas | Igual ao fluxo de trabalho de chamadas |

`workflow_call` é usado para indicar que um fluxo de trabalho pode ser chamado por outro fluxo de trabalho. Quando um fluxo de trabalho é disparado com o evento `workflow_call`, a carga do evento no fluxo de trabalho chamado é a mesma carga do evento do fluxo de trabalho de chamada. Para obter mais informações, confira "[Como reutilizar fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".

O exemplo abaixo só executa o fluxo de trabalho quando é chamado a partir de outro fluxo de trabalho:

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | n/a | Último commit no branch `GITHUB_REF` | Branch que recebeu envio |

Para disparar manualmente um fluxo de trabalho, use o evento `workflow_dispatch`. Você pode acionar manualmente uma execução de fluxo de trabalho usando a API do {% data variables.product.product_name %}, {% data variables.product.prodname_cli %} ou a interface do nevegador de {% data variables.product.product_name %}. Para obter mais informações, confira "[Como executar um fluxo de trabalho manualmente](/actions/managing-workflow-runs/manually-running-a-workflow)".

```yaml
on: workflow_dispatch
```

#### <a name="providing-inputs"></a>Fornecendo entradas

É possível configurar as propriedades de entrada definidas por personalização, os valores-padrão de entrada e as entradas obrigatórias para o evento diretamente no seu fluxo de trabalho. Ao disparar o evento, você pode fornecer a `ref` e qualquer `inputs`. Quando o fluxo de trabalho é executado, você pode acessar os valores de entrada no contexto {% ifversion actions-unified-inputs %} `inputs`{% else %}`github.event.inputs`{% endif %}. Para obter mais informações, confira "[Contextos](/actions/learn-github-actions/contexts)".

{% data reusables.actions.inputs-vs-github-event-inputs %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %} Este exemplo define as entradas chamadas `logLevel`, `tags` e `environment`. Você passa os valores destas entradas para o fluxo de trabalho quando o executa. Esse fluxo de trabalho imprime os valores no log, usando as propriedades de contexto {% ifversion actions-unified-inputs %} `inputs.logLevel`, `inputs.tags` e `inputs.environment`{% else %}`github.event.inputs.logLevel`, `github.event.inputs.tags` e `github.event.inputs.environment`{% endif %}.

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

Para obter mais informações, confira as informações sobre a {% data variables.product.prodname_cli %} em "[Executar um fluxo de trabalho manualmente](/actions/managing-workflow-runs/manually-running-a-workflow)".

{% else %} Este exemplo define as entradas `name` e `home` e as imprime usando os contextos {% ifversion actions-unified-inputs %}`inputs.name` e `inputs.home`{% else %}`github.event.inputs.name` e `github.event.inputs.home`{% endif %}. Se `home` não for fornecido, o valor-padrão 'The Octoverse' será impresso.

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

| Carga de evento webhook | Tipos de atividade | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_run) | - `completed`<br/>- `requested` | Último commit no branch padrão | Branch padrão |

{% note %}

**Observação**: {% data reusables.developer-site.multiple_activity_types %} O tipo de atividade `requested` não ocorre quando um fluxo de trabalho é executado novamente. Para obter informações sobre cada tipo de atividade, confira "[Eventos e carga do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)". {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Observação:** não é possível usar a `workflow_run` para encadear mais de três níveis de fluxos de trabalho. Por exemplo, se você tentar disparar cinco fluxos de trabalho (chamados de `B` para `F`) para serem executados sequencialmente após a execução de um fluxo de trabalho `A` inicial (ou seja: `A` → `B` → `C` → `D` → `E` →`F`), os fluxos de trabalho `E` e `F` não serão executados.

{% endnote %}

Este evento ocorre quando uma execução do fluxo de trabalho é solicitada ou concluída. Ele permite que você execute um fluxo de trabalho baseado na execução ou conclusão de outro fluxo de trabalho. O fluxo de trabalho iniciado pelo evento `workflow_run` pode acessar segredos e gravar tokens, mesmo que o fluxo de trabalho anterior não tenha essa permissão. Isso é útil em casos em que o fluxo de trabalho anterior não é intencionalmente privilegiado, mas você precisa tomar uma ação privilegiada em um fluxo de trabalho posterior.

Neste exemplo, um fluxo de trabalho está configurado para ser executado após o fluxo de trabalho "Executar Testes" separado ser concluído.

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

Se você especificar vários `workflows` para o evento `workflow_run`, apenas um dos fluxos de trabalho precisará ser executado. Por exemplo, um fluxo de trabalho com o seguinte gatilho será executado sempre que o fluxo de trabalho "Staging" ou "Lab" forem concluídos.

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### <a name="running-a-workflow-based-on-the-conclusion-of-another-workflow"></a>Executando um fluxo de trabalho com base na conclusão de outro fluxo de trabalho

A execução de um fluxo de trabalho é acionada independentemente da conclusão do fluxo de trabalho anterior. Caso deseje executar um trabalho ou uma etapa com base no resultado do fluxo de trabalho disparado, use uma condição com a propriedade `github.event.workflow_run.conclusion`. Por exemplo, este fluxo de trabalho será executado sempre que um fluxo de trabalho chamado "Build" for concluído, mas o trabalho `on-success` só será executado se o fluxo de trabalho "Build" for bem-sucedido, e o trabalho `on-failure` só será executado se o fluxo de trabalho "Build" falhar:

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

#### <a name="limiting-your-workflow-to-run-based-on-branches"></a>Limitando seu fluxo de trabalho para ser executado com base em branches

Você pode usar o filtro `branches` ou `branches-ignore` para especificar os branches em que o fluxo de trabalho de gatilho precisa ser executado para disparar o fluxo de trabalho. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore)". Por exemplo, um fluxo de trabalho com o gatilho a seguir só será executado quando o fluxo de trabalho chamado `Build` for executado em um branch chamado `canary`.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### <a name="using-data-from-the-triggering-workflow"></a>Usando dados do fluxo de trabalho acionador

Você pode acessar a [carga do evento `workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run) que corresponde ao fluxo de trabalho que disparou seu fluxo de trabalho. Por exemplo, se o fluxo de trabalho de disparo gerar artefatos, um fluxo de trabalho disparado com o evento `workflow_run` poderá acessar esses artefatos.

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

Quando uma execução do fluxo de trabalho acima é concluída, ela aciona a execução de um fluxo de trabalho seguinte. O fluxo de trabalho a seguir usa o contexto `github.event.workflow_run` e a API REST do {% data variables.product.product_name %} para baixar o artefato que foi carregado pelo fluxo de trabalho acima, descompacta o zip do artefato baixado e adiciona comentários à solicitação de pull cujo número foi carregado como um artefato.

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
