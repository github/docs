---
title: Usando scripts para testar seu código em um executor
shortTitle: Usando scripts para testar seu código em um executor
intro: 'Como usar funcionalidades essenciais de {% data variables.product.prodname_actions %} para integração contínua (IC).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral do exemplo

{% data reusables.actions.example-workflow-intro-ci %} Quando esse fluxo de trabalho é acionado, ele executa automaticamente um script que verifica se o site Docs de {% data variables.product.prodname_dotcom %} tem algum link quebrado.

{% data reusables.actions.example-diagram-intro %}

![Diagrama de visão geral das etapas do fluxo de trabalho](/assets/images/help/images/overview-actions-using-scripts-ci-example.png)

## Características utilizadas neste exemplo

{% data reusables.actions.example-table-intro %}

| **Funcionalidade** | **Implementação** |
| ------------------ | ----------------- |
|                    |                   |
{% data reusables.actions.push-table-entry %}
{% data reusables.actions.pull-request-table-entry %}
{% data reusables.actions.workflow-dispatch-table-entry %}
{% data reusables.actions.permissions-table-entry %}
{% data reusables.actions.concurrency-table-entry %}
| Executando o trabalho em diferentes corredores, dependendo do repositório: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)|
{% data reusables.actions.checkout-action-table-entry %}
{% data reusables.actions.setup-node-table-entry %}
| Usando a ação de terceiros: | [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)| | Executando um script no executor: | Using `./script/rendered-content-link-checker.mjs` |

## Exemplo de fluxo de trabalho

{% data reusables.actions.example-docs-engineering-intro %} [`link-check-all.yml`](https://github.com/github/docs/blob/main/.github/workflows/link-check-all.yml).

{% data reusables.actions.note-understanding-example %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:100%"></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: 'Link Checker: All English'

# **What it does**: Renders the content of every page and check all internal links.
# **Why we have it**: To make sure all links connect correctly.
# **Who does it impact**: Docs content.

on:
  workflow_dispatch:
  push:
    branches:
      - main
  pull_request:

permissions:
  contents: read
  # Needed for the 'trilom/file-changes-action' action
  pull-requests: read

# This allows a subsequently queued workflow run to interrupt previous runs
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
  cancel-in-progress: true

jobs:
  check-links:
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm

      - name: Install
        run: npm ci

      # Creates file "${{ env.HOME }}/files.json", among others
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'

      # For verification
      - name: Show files changed
        run: cat $HOME/files.json

      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json

      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```
</tr>
</td>
</tbody>
</table>

## Entendendo o exemplo

{% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%"><b>Código</b></th>
    <th style="width:40%"><b>Explicação</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: 'Link Checker: All English'
```
</td>
<td>

{% data reusables.actions.explanation-name-key %}
</td>
</tr>
<tr>
<td>

```yaml{:copy}
on:
```
</td>
<td>

A palavra-chave 'on' permite definir os eventos que acionam quando o fluxo de trabalho é executado. Você pode definir vários eventos aqui. Para obter mais informações, consulte "[Acionando um fluxo de trabalho](//actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)."
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

Adicione o evento "workflow_dispatch" se você quiser poder executar manualmente este fluxo de trabalho a partir da interface do usuário. Para obter mais informações, consulte [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  push:
    branches:
      - main
```
</td>
<td>

Adicione o evento "push", para que o fluxo de trabalho seja executado automaticamente toda vez que um commit for enviado por push para uma branch denominado "main". Para obter mais informações, consulte ['push'](/actions/using-workflows/events-that-trigger-workflows#push).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

Adicione o evento "pull_request", para que o fluxo de trabalho seja executado automaticamente toda vez que um pull request for criado ou atualizado. Para obter mais informações, consulte ['pull_request'](/actions/using-workflows/events-that-trigger-workflows#pull_request).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
permissions:
  contents: read
  pull-requests: read
```
</td>
<td>

Modifica as permissões padrão concedidas a "GITHUB_TOKEN". Isso vai variar dependendo das necessidades do seu fluxo de trabalho. Para obter mais informações, consulte "[Atribuindo permissões a trabalhos](/actions/using-jobs/assigning-permissions-to-jobs)."
</td>
</tr>
<tr>
<td>

{% raw %}
```yaml{:copy}
concurrency:
  group: '${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'
```
{% endraw %}
</td>
<td>

Cria um grupo de concorrência para eventos específicos e usa o operador "||" para definir valores de recuo. Para obter mais informações, consulte "[Usando concorrência](/actions/using-jobs/using-concurrency)."
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

Cancela qualquer trabalho ou fluxo de trabalho em execução no mesmo grupo de concorrência.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Agrupa todos os trabalhos executados no arquivo do fluxo de trabalho.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  check-links:
```
</td>
<td>

Define uma trabalho com o ID "check-links" que é armazenado dentro da chave "jobs".
</td>
</tr>
<tr>
<td>

{% raw %}
```yaml{:copy}
    runs-on: ${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}
```
{% endraw %}
</td>
<td>

Configura o trabalho a ser executado em um executor hospedado em {% data variables.product.prodname_dotcom %} ou em um executor auto-hospedado, dependendo do repositório que executa o fluxo de trabalho. Neste exemplo, o trabalho será executado em um runner auto-hospedado se o repositório for denominado "docs-internal" e estiver dentro da organização "github". Se o repositório não corresponder a este caminho, então ele será executado em um executor "ubuntu-latest" hospedado por {% data variables.product.prodname_dotcom %}. Para obter mais informações sobre essas opções consulte "[Escolhendo o executor para um trabalho](/actions/using-jobs/choosing-the-runner-for-a-job)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Agrupa todos as etapas que serão executados como parte do trabalho `check-links`. Cada trabalho em um fluxo de trabalho tem sua própria seção "etapas".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
```
</td>
<td>

A palavra-chave "uses" diz para o trabalho recuperar a ação denominada "actions/checkout". Esta é uma ação que verifica seu repositório e o faz o download do runner, permitindo que você execute ações contra seu código (como, por exemplo, ferramentas de teste). Você deve usar a ação de checkout sempre que o fluxo de trabalho for executado no código do repositório ou você estiver usando uma ação definida no repositório.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm
```
</td>
<td>

Esta etapa usa a ação `actions/setup-node` para instalar a versão especificada do pacote do Node.js de software no executor, que lhe dá acesso ao comando `npm`.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Install
        run: npm ci
```
</td>
<td>

A palavra-chave `executar` diz ao trabalho para executar um comando no executor. Neste caso, o `npm ci` é usado para instalar pacotes de software do npm para o projeto.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'
```
</td>
<td>

Usa a ação `trilom/file-changes-action` para coletar todos os arquivos alterados. Este exemplo está fixado a uma versão específica da ação usando o SHA `a6ca26c14274c33b15e6499323aac178af06ad4b`.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Show files changed
        run: cat $HOME/files.json
```
</td>
<td>

Lista o conteúdo de `files.json`. Isso será visível no log da execução do fluxo de trabalho e pode ser útil para depuração.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json
```
</td>
<td>

Esta etapa usa o comando 'executar' para executar um script armazenado no repositório em 'script/rendered-content-link-checker.mjs' e passa todos os parâmetros necessários para executar.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```
</td>
<td>

Esta etapa também usa o comando `run` para executar um script que é armazenado no repositório em `script/rendered-content-link-checker.mjs` e passa um conjunto diferente de parâmetros.
</tr>

</tbody>
</table>

## Próximas etapas

{% data reusables.actions.learning-actions %}
