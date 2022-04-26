---
title: Acionando um fluxo de trabalho
shortTitle: Acionando um fluxo de trabalho
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre acionadores de fluxo de trabalho

{% data reusables.actions.about-triggers %}

Os gatilhos de fluxo de trabalho estão definidos com a chave `on`. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#on)".

As etapas a seguir ocorrem para acionar a execução de um fluxo de trabalho:

1. Um evento ocorre no seu repositório. O evento tem um SHA de commit associado e um ref de Git.
1. {% data variables.product.product_name %} pesquisa no diretório `.github/workflows` no seu repositório para arquivos de fluxo de trabalho que estão presentes no commit SHA ou no ref do Git do evento.
1. A execução de um fluxo de trabalho é acionada para todos fluxos de trabalho com valores `on:` que correspondem ao evento de acionamento. Alguns eventos também exigem que o arquivo do fluxo de trabalho esteja presente no branch padrão do repositório para ser executado.

  Cada execução de fluxo de trabalho usará a versão do fluxo de trabalho que está presente no SHA do commit ou na ref do Git do evento. Quando um fluxo de trabalho é executado, o {% data variables.product.product_name %} configura as variáveis de ambiente `GITHUB_SHA` (commit SHA) e `GITHUB_REF` (Git ref) no ambiente do executor. Para obter mais informações, consulte "[Usando variáveis de ambiente](/actions/automating-your-workflow-with-github-actions/using-environment-variables)".

### Acionando um fluxo de trabalho a partir de um fluxo de trabalho

{% data reusables.actions.actions-do-not-trigger-workflows %} Para obter mais informações, consulte "[Efetuando a autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

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

Use a chave `on` para especificar quais eventos acionam o seu fluxo de trabalho. Para obter mais informações sobre eventos que você pode usar, consulte "[Eventos que acionam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows)."

### Usando um evento único

{% data reusables.actions.on-single-example %}

### Usando eventos múltiplos

{% data reusables.actions.on-multiple-example %}

### Usando tipos de atividade e filtros com vários eventos

É possível usar tipos de atividade e filtros para controlar ainda mais quando o fluxo de trabalho será executado. Para obter mais informações, consulte [Usando tipos de atividade do evento](#using-event-activity-types) e [Usando filtros](#using-filters). {% data reusables.actions.actions-multiple-types %}

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

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## Definindo entradas, saídas e segredos para fluxos de trabalho reutilizáveis

{% data reusables.actions.reusable-workflows-ghes-beta %}

É possível definir entradas e segredos que um fluxo de trabalho reutilizável deve receber de um fluxo de trabalho chamado. Também é possível especificar saídas que um fluxo de trabalho reutilizável disponibilizará para um fluxo de trabalho chamado. Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/using-workflows/reusing-workflows)".

{% endif %}

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

Se você quiser mais controle granular do que os eventos, tipos de atividade do evento ou filtros de evento fornecem, você poderá usar condicionais{% ifversion fpt or ghae or ghes > 3.1 or ghec %} e ambientes{% endif %} para controlar se os trabalhos ou etapas individuais no seu fluxo de trabalho serão executados.

### Usando condicionais

Você pode usar condicionais para controlar ainda mais se os trabalhos ou etapas no seu fluxo de trabalho serão executados.

#### Exemplo de uso de um valor na carga do evento

Se você quiser, por exemplo, que o fluxo de trabalho seja executado quando uma etiqueta específica for adicionada a um problema, você poderá acionar o tipo de atividade do evento `issues labeled` e usar uma condicional para verificar qual etiqueta acionou o fluxo de trabalho. O fluxo de trabalho a seguir será executado quando qualquer etiqueta for adicionada a um problema no repositório do fluxo de trabalho, mas a o trabalho `run_if_label_matches` só será executado se a etiqueta tiver o nome de `bug`.

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

Por exemplo, se você deseja executar diferentes tarefas ou etapas, dependendo de qual evento acionou o fluxo de trabalho, você poderá usar uma condicional para verificar se um tipo de evento específico existe no contexto do evento. O fluxo de trabalho seguinte será executado sempre que um problema ou pull request for fechado. Se o fluxo de trabalho foi executado porque um problema foi fechado, o `github.event` conterá um valor para `problema` mas não para `pull_request`. Portanto, a etapa `if_issue` será executada mas oa etapa `if_pr` não será executada. Por outro lado, se o fluxo de trabalho foi executado porque um pull request foi fechado, a etapa `if_pr` será executada mas a etapa `if_issue` não será executada.

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

Para obter mais informações sobre quais informações estão disponíveis no contexto do evento, consulte "[Usando informações do evento](#using-event-information)". Para obter mais informações sobre como usar condicionais, consulte "[Expressões](/actions/learn-github-actions/expressions)".

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}

### Usando ambientes para acionar trabalhos de fluxo de trabalho manualmente

Se você quiser acionar manualmente uma tarefa específica em um fluxo de trabalho, você pode usar um ambiente que exige a aprovação de uma equipe ou usuário específico. Primeiro, configure um ambiente com os revisores necessários. Para obter mais informações, consulte "[Usando ambientes para implantação](/actions/deployment/targeting-different-environments/using-environments-for-deployment)". Em seguida, faça referência ao nome do ambiente em um trabalho no seu fluxo de trabalho usando o a chave `environment:`. Qualquer trabalho que faz referência ao ambiente não será executado até que pelo menos um revisor aprove o trabalho.

Por exemplo, o seguinte fluxo de trabalho será executado sempre que houver um push para o principal. O trabalho `build` sempre será executado. O trabalho `publicar` será executado somente após a conclusão do trabalho de `criar` (devido a `needs: [build]`) e após todas as regras (incluindo os revisores necessários) para o ambiente denominado `produção` serem aprovadas (devido a `environment: production`).

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

Para obter uma lista completa de eventos disponíveis, consulte "[Eventos que acionam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows)".
