---
title: Acionando um fluxo de trabalho
shortTitle: Trigger a workflow
intro: 'Como acionar fluxos de trabalho de {% data variables.product.prodname_actions %} automaticamente'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cd91670d3d06d4d8f954afa114f6c4f189825d86
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191900'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre acionadores de fluxo de trabalho

{% data reusables.actions.about-triggers %}

Os gatilhos de fluxo de trabalho são definidos com a chave `on`. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#on)".

As etapas a seguir ocorrem para acionar a execução de um fluxo de trabalho:

1. Um evento ocorre no seu repositório. O evento tem um SHA de commit associado e um ref de Git.
1. O {% data variables.product.product_name %} pesquisa o diretório `.github/workflows` do seu repositório em busca dos arquivos de fluxo de trabalho que estão presentes no SHA do commit associado ou na referência do Git do evento.
1. A execução de um fluxo de trabalho é disparada para todos os fluxos de trabalho que têm valores `on:` correspondentes ao evento de gatilho. Alguns eventos também exigem que o arquivo do fluxo de trabalho esteja presente no branch padrão do repositório para ser executado.

  Cada execução de fluxo de trabalho usará a versão do fluxo de trabalho que está presente no SHA do commit ou na ref do Git do evento. Quando um fluxo de trabalho é executado, o {% data variables.product.product_name %} define as variáveis de ambiente `GITHUB_SHA` (SHA do commit) e `GITHUB_REF` (referência do Git) no ambiente do executor. Para obter mais informações, confira "[Como usar variáveis de ambiente](/actions/automating-your-workflow-with-github-actions/using-environment-variables)".

### Acionando um fluxo de trabalho a partir de um fluxo de trabalho

{% data reusables.actions.actions-do-not-trigger-workflows %} Para obter mais informações, confira "[Autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Se você deseja disparar um fluxo em uma execução de fluxo de trabalho, pode usar um {% data variables.product.pat_generic %} em vez de `GITHUB_TOKEN` para acionar eventos que exigem um token. Você precisará criar um {% data variables.product.pat_generic %} e armazená-lo como um segredo. Para minimizar seus custos de uso {% data variables.product.prodname_actions %}, certifique-se de que você não cria execução de fluxo de trabalho recursivo ou não intencional. Para obter mais informações de como criar um {% data variables.product.pat_generic %}, confira "[Como criar um {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)". Para obter mais informações sobre como armazenar {% data variables.product.pat_generic %} como um segredo, confira "[Como criar e armazenar segredos criptografados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

Por exemplo, o fluxo de trabalho a seguir usa um {% data variables.product.pat_generic %} (armazenado como um segredo chamado `MY_TOKEN`) para adicionar um rótulo a um problema por meio da {% data variables.product.prodname_cli %}. Todos os fluxos de trabalho que forem executados quando uma etiqueta é adicionada, serão executados assim que esta etapa for executada.

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

Por outro lado, o fluxo de trabalho a seguir usa `GITHUB_TOKEN` para adicionar um rótulo a um problema. Ele não acionará nenhum fluxo de trabalho executado quando uma etiqueta é adicionada.

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

Use a chave `on` para especificar os eventos que disparam o fluxo de trabalho. Para obter mais informações sobre os eventos que podem ser usados, confira "[Eventos que disparam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows)".

### Usando um evento único

{% data reusables.actions.on-single-example %}

### Usando eventos múltiplos

{% data reusables.actions.on-multiple-example %}

### Usando tipos de atividade e filtros com vários eventos

É possível usar tipos de atividade e filtros para controlar ainda mais quando o fluxo de trabalho será executado. Para obter mais informações, confira [Como usar tipos de atividade de evento](#using-event-activity-types) e [Como usar filtros](#using-filters). {% data reusables.actions.actions-multiple-types %}

## Usando tipos de atividade do evento

{% data reusables.actions.actions-activity-types %}

## Usando filtros

{% data reusables.actions.actions-filters %}

### Usando filtros para direcionar branches específicos para eventos de pull request

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### Usando filtros para direcionar branches ou tags específicas para eventos de push

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### Usando filtros para direcionar caminhos específicos para pull requests uu eventos de push

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### Usando filtros para direcionar branches específicos para eventos de execução de fluxo de trabalho

{% data reusables.actions.workflows.section-specifying-branches %}

## Definindo entradas para fluxos de trabalho acionados manualmente

{% data reusables.actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Definindo entradas, saídas e segredos para fluxos de trabalho reutilizáveis

{% data reusables.actions.reusable-workflows-enterprise-beta %}

É possível definir entradas e segredos que um fluxo de trabalho reutilizável deve receber de um fluxo de trabalho chamado. Também é possível especificar saídas que um fluxo de trabalho reutilizável disponibilizará para um fluxo de trabalho chamado. Para obter mais informações, confira "[Como reutilizar fluxos de trabalho](/actions/using-workflows/reusing-workflows)".

{% endif %}

## Usando informações do evento

As informações sobre o evento que disparou uma execução de fluxo de trabalho estão disponíveis no contexto `github.event`. As propriedades no contexto `github.event` dependem do tipo de evento que disparou o fluxo de trabalho. Por exemplo, um fluxo de trabalho acionado quando um problema está etiquetado teria informações sobre o problema e a etiqueta.

### Visualizando todas as propriedades de um evento

Referência à documentação de evento de webhook para propriedades comuns e cargas de exemplo. Para obter mais informações, confira "[Eventos e cargas do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)".

Imprima também o contexto `github.event` inteiro para ver quais propriedades estão disponíveis para o evento que disparou seu fluxo de trabalho:

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

Use o contexto `github.event` no fluxo de trabalho. Por exemplo, o fluxo de trabalho a seguir é executado quando uma solicitação de pull que altera `package*.json`, `.github/CODEOWNERS` ou `.github/workflows/**` é aberta. Se o autor da solicitação de pull (`github.event.pull_request.user.login`) não for `octobot` nem `dependabot[bot]`, o fluxo de trabalho usará a {% data variables.product.prodname_cli %} para rotular a solicitação de pull e adicionar comentários a ela (`github.event.pull_request.number`).

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
          gh pr comment $PR --body 'It looks like you edited `package*.json`, `.github/CODEOWNERS`, or `.github/workflows/**`. We do not allow contributions to these files. Please review our [contributing guidelines](https://github.com/octo-org/octo-repo/blob/main/CONTRIBUTING.md) for what contributions are accepted.'
```

Para obter mais informações sobre contextos, confira "[Contextos](/actions/learn-github-actions/contexts)". Para obter mais informações sobre cargas de eventos, confira "[Eventos e cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)".

## Controlando ainda mais como seu fluxo de trabalho será executado

Se você quiser um controle mais granular do que o fornecido por eventos, tipos de atividade do evento ou filtros de evento, use condicionais e ambientes para controlar se trabalhos ou etapas individuais serão executados no fluxo de trabalho.

### Usando condicionais

Você pode usar condicionais para controlar ainda mais se os trabalhos ou etapas no seu fluxo de trabalho serão executados.

#### Exemplo de uso de um valor na carga do evento

Por exemplo, caso você deseje que o fluxo de trabalho seja executado quando um rótulo específico for adicionado a um problema, dispare o tipo de atividade do evento `issues labeled` e use um condicional para verificar qual rótulo disparou o fluxo de trabalho. O fluxo de trabalho a seguir será executado quando qualquer rótulo for adicionado a um problema no repositório do fluxo de trabalho, mas o trabalho `run_if_label_matches` só será executado se o rótulo for chamado `bug`.

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

#### Exemplo de uso do tipo de evento

Por exemplo, se você deseja executar diferentes tarefas ou etapas, dependendo de qual evento acionou o fluxo de trabalho, você poderá usar uma condicional para verificar se um tipo de evento específico existe no contexto do evento. O fluxo de trabalho seguinte será executado sempre que um problema ou pull request for fechado. Se o fluxo de trabalho tiver sido executado porque um problema foi fechado, o contexto `github.event` conterá um valor para `issue`, mas não para `pull_request`. Portanto, a etapa `if_issue` será executada, mas a etapa `if_pr` não. Por outro lado, se o fluxo de trabalho for executado porque uma solicitação de pull foi fechada, a etapa `if_pr` será executada, mas a etapa `if_issue` não será executada.

```yaml
on:
  issues:
    types:
      - closed
  pull_request:
    types:
      - closed

jobs:
  state_event_type:
    runs-on: ubuntu-latest
    steps:
    - name: if_issue
      if: github.event.issue
      run: |
        echo An issue was closed
    - name: if_pr
      if: github.event.pull_request
      run: |
        echo A pull request was closed
```

Para obter mais informações sobre as informações que estão disponíveis no contexto do evento, confira "[Como usar as informações do evento](#using-event-information)". Para obter mais informações sobre como usar condicionais, confira "[Expressões](/actions/learn-github-actions/expressions)".

### Usando ambientes para acionar trabalhos de fluxo de trabalho manualmente

Se você quiser acionar manualmente uma tarefa específica em um fluxo de trabalho, você pode usar um ambiente que exige a aprovação de uma equipe ou usuário específico. Primeiro, configure um ambiente com os revisores necessários. Para obter mais informações, confira "[Como usar ambientes para implantação](/actions/deployment/targeting-different-environments/using-environments-for-deployment)". Em seguida, referencie o nome do ambiente em um trabalho no fluxo de trabalho usando a chave `environment:`. Qualquer trabalho que faz referência ao ambiente não será executado até que pelo menos um revisor aprove o trabalho.

Por exemplo, o seguinte fluxo de trabalho será executado sempre que houver um push para o principal. O trabalho `build` sempre será executado. O trabalho `publish` só será executado depois que o trabalho `build` for concluído com sucesso (devido a `needs: [build]`) e depois de todas as regras (incluindo os revisores obrigatórios) para o ambiente chamado `production` forem aprovadas (devido a `environment: production`).

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

## Eventos disponíveis

Para ver uma lista completa dos eventos disponíveis, confira "[Eventos que disparam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows)".
