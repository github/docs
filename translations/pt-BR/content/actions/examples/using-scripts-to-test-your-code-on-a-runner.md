---
title: Coo usar scripts para testar seu código em um executor
shortTitle: Using scripts to test your code on a runner
intro: 'Como usar recursos essenciais do {% data variables.product.prodname_actions %} para integração contínua (CI).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: f313a294bc2515564787268112f064b72d339d32
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146749525'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral de exemplo

{% data reusables.actions.example-workflow-intro-ci %} Quando esse fluxo de trabalho é disparado, ele executa automaticamente um script que verifica se o site Docs do {% data variables.product.prodname_dotcom %} tem links desfeitos.

{% data reusables.actions.example-diagram-intro %}

![Diagrama de visão geral das etapas do fluxo de trabalho](/assets/images/help/images/overview-actions-using-scripts-ci-example.png)

## Recursos usados neste exemplo

{% data reusables.actions.example-table-intro %}

| **Recurso**  | **Implementação** |
| --- | --- | 
{% data reusables.actions.push-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | Como executar o trabalho em diferentes executores, dependendo do repositório: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job) | {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Como usar uma ação de terceiros: | [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)| | Como executar um script no executor | Usar `./script/rendered-content-link-checker.mjs` |

## Fluxo de trabalho de exemplo

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

## Compreendendo o exemplo

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

A palavra-chave `on` permite definir os eventos que são disparados quando o fluxo de trabalho é executado. Você pode definir vários eventos aqui. Para obter mais informações, confira "[Como disparar um fluxo de trabalho](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

Adicione o evento `workflow_dispatch` se você quiser a capacidade de executar manualmente esse fluxo de trabalho a partir da interface do usuário. Para obter mais informações, confira [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
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

Adicione o evento `push` para que o fluxo de trabalho seja executado automaticamente sempre que um commit for enviado por push a um branch denominado `main`. Para obter mais informações, confira [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

Adicione o evento `pull_request` para que o fluxo de trabalho seja executado automaticamente sempre que uma solicitação de pull for criada ou atualizada. Para obter mais informações, confira [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request).
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

Modifica as permissões padrão concedidas a `GITHUB_TOKEN`. Isso variará dependendo das necessidades do fluxo de trabalho. Para obter mais informações, confira "[Como atribuir permissões a trabalhos](/actions/using-jobs/assigning-permissions-to-jobs)".
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

Cria um grupo de simultaneidade para eventos específicos e usa o operador `||` para definir valores de fallback. Para mais informações, confira "[Como usar a simultaneidade](/actions/using-jobs/using-concurrency)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

Cancela todos os trabalhos ou fluxos de trabalho em execução no mesmo grupo de simultaneidade.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Agrupa todos os trabalhos executados no arquivo de fluxo de trabalho.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  check-links:
```
</td>
<td>

Define um trabalho com a ID `check-links` que é armazenada na chave `jobs`.
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

Configura o trabalho a ser executado em um executor hospedado no {% data variables.product.prodname_dotcom %} ou um executor auto-hospedado, dependendo do repositório que executa o fluxo de trabalho. Neste exemplo, o trabalho será executado em um executor auto-hospedado se o repositório for chamado `docs-internal` e estiver dentro da organização `github`. Se o repositório não corresponder a esse caminho, ele será executado em um executor `ubuntu-latest` hospedado no {% data variables.product.prodname_dotcom %}. Para obter mais informações sobre essas opções, confira "[Como escolher o executor para um trabalho](/actions/using-jobs/choosing-the-runner-for-a-job)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Agrupa todas as etapas que serão executadas durante o trabalho `check-links`. Cada trabalho em um fluxo de trabalho tem a própria seção `steps`.
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

A palavra-chave `uses` informa que o trabalho deve recuperar a ação chamada `actions/checkout`. Esta é uma ação que verifica seu repositório e o faz o download do runner, permitindo que você execute ações contra seu código (como, por exemplo, ferramentas de teste). Você deve usar a ação de checkout sempre que o fluxo de trabalho for executado no código do repositório ou você estiver usando uma ação definida no repositório.
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

Esta etapa usa a ação `actions/setup-node` para instalar a versão especificada do pacote de software Node.js no executor, o que permite que você acesse o comando `npm`.
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

A palavra-chave `run` instrui o trabalho a executar um comando no executor. Nesse caso, `npm ci` é usado para instalar os pacotes de software npm para o projeto.
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

Usa a ação `trilom/file-changes-action` para reunir todos os arquivos alterados. Este exemplo é fixado a uma versão específica da ação, usando o SHA `a6ca26c14274c33b15e6499323aac178af06ad4b`.
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

Lista o conteúdo de `files.json`. Isso ficará visível no log da execução do fluxo de trabalho e poderá ser útil para depuração.
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

Esta etapa usa o comando `run` para executar um script que está armazenado no repositório `script/rendered-content-link-checker.mjs` e passa todos os parâmetros necessários para execução.
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

Esta etapa usa o comando `run` para executar um script que está armazenado no repositório `script/rendered-content-link-checker.mjs` e passa todos os parâmetros necessários para execução.
</tr>

</tbody>
</table>

## Próximas etapas

{% data reusables.actions.learning-actions %}
