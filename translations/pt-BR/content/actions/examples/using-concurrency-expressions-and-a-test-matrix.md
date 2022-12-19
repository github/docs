---
title: 'Como usar simultaneidade, expressões e uma matriz de teste'
shortTitle: 'Using concurrency, expressions, and a test matrix'
intro: 'Como usar recursos avançados do {% data variables.product.prodname_actions %} para CI (integração contínua).'
versions:
  fpt: '*'
  ghes: '>= 3.5'
  ghae: '>= 3.5'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: f4edac59fdbcc8f8825a51e25b737b94b17128b0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147496577'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral de exemplo

{% data reusables.actions.example-workflow-intro-ci %} Quando esse fluxo de trabalho é disparado, ele testa o código usando uma matriz de combinações de teste com `npm test`.

{% data reusables.actions.example-diagram-intro %}

![Diagrama de visão geral das etapas do fluxo de trabalho](/assets/images/help/images/overview-actions-using-concurrency-expressions-and-a-test-matrix.png)

## Recursos usados neste exemplo

{% data reusables.actions.example-table-intro %}

| **Recurso**  | **Implementação** |
| --- | --- |
{% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | Como executar o trabalho em diferentes executores, dependendo do repositório: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.if-conditions-table-entry %} | Como usar uma matriz para criar diferentes configurações de teste: | [`matrix`](/actions/using-jobs/using-a-build-matrix-for-your-jobs)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Como armazenar dependências em cache: | [`actions/cache`](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows)| | Como executar testes no executor: | `npm test`|

## Fluxo de trabalho de exemplo

{% data reusables.actions.example-docs-engineering-intro %} [`test.yml`](https://github.com/github/docs/blob/main/.github/workflows/test.yml).

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
name: Node.js Tests

# **What it does**: Runs our tests.
# **Why we have it**: We want our tests to pass before merging code.
# **Who does it impact**: Docs engineering, open-source engineering contributors.

on:
  workflow_dispatch:
  pull_request:
  push:
    branches:
      - main

permissions:
  contents: read
  # Needed for the 'trilom/file-changes-action' action
  pull-requests: read

# This allows a subsequently queued workflow run to interrupt previous runs
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
  cancel-in-progress: true

jobs:
  test:
    # Run on self-hosted if the private repo or ubuntu-latest if the public repo
    # See pull # 17442 in the private repo for context
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
    timeout-minutes: 60
    strategy:
      fail-fast: false
      matrix:
        # The same array lives in test-windows.yml, so make any updates there too.
        test-group:
          [
            content,
            graphql,
            meta,
            rendering,
            routing,
            unit,
            linting,
            translations,
          ]
    steps:
      # Each of these ifs needs to be repeated at each step to make sure the required check still runs
      # Even if if doesn't do anything
      - name: Check out repo
        uses: {% data reusables.actions.action-checkout %}
        with:
          # Not all test suites need the LFS files. So instead, we opt to
          # NOT clone them initially and instead, include them manually
          # only for the test groups that we know need the files.
          lfs: {% raw %}${{ matrix.test-group == 'content' }}{% endraw %}
          # Enables cloning the Early Access repo later with the relevant PAT
          persist-credentials: 'false'

      - name: Figure out which docs-early-access branch to checkout, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        id: check-early-access
        uses: {% data reusables.actions.action-github-script %}
        env:
          BRANCH_NAME: {% raw %}${{ github.head_ref || github.ref_name }}{% endraw %}
        with:
          github-token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          result-encoding: string
          script: |
            // If being run from a PR, this becomes 'my-cool-branch'.
            // If run on main, with the `workflow_dispatch` action for
            // example, the value becomes 'main'.
            const { BRANCH_NAME } = process.env
            try {
              const response = await github.repos.getBranch({
                owner: 'github',
                repo: 'docs-early-access',
                BRANCH_NAME,
              })
              console.log(`Using docs-early-access branch called '${BRANCH_NAME}'.`)
              return BRANCH_NAME
            } catch (err) {
              if (err.status === 404) {
                console.log(`There is no docs-early-access branch called '${BRANCH_NAME}' so checking out 'main' instead.`)
                return 'main'
              }
              throw err
            }

      - name: Check out docs-early-access too, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: github/docs-early-access
          token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          path: docs-early-access
          ref: {% raw %}${{ steps.check-early-access.outputs.result }}{% endraw %}

      - name: Merge docs-early-access repo's folders
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        run: |
          mv docs-early-access/assets assets/images/early-access
          mv docs-early-access/content content/early-access
          mv docs-early-access/data data/early-access
          rm -r docs-early-access

      # This is necessary when LFS files where cloned but does nothing
      # if actions/checkout was run with `lfs:false`.
      - name: Checkout LFS objects
        run: git lfs checkout

      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        id: get_diff_files
        with:
          # So that `steps.get_diff_files.outputs.files` becomes
          # a string like `foo.js path/bar.md`
          output: ' '

      - name: Insight into changed files
        run: |

          # Must to do this because the list of files can be HUGE. Especially
          # in a repo-sync when there are lots of translation files involved.
          echo {% raw %}"${{ steps.get_diff_files.outputs.files }}" > get_diff_files.txt{% endraw %}

      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.14.x
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Cache nextjs build
        uses: {% data reusables.actions.action-cache %}
        with:
          path: .next/cache
          key: {% raw %}${{ runner.os }}-nextjs-${{ hashFiles('package*.json') }}{% endraw %}

      - name: Run build script
        run: npm run build

      - name: Run tests
        env:
          DIFF_FILE: get_diff_files.txt
          CHANGELOG_CACHE_FILE_PATH: tests/fixtures/changelog-feed.json
        run: npm test -- {% raw %}tests/${{ matrix.test-group }}/{% endraw %}
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
name: Node.js Tests
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

Adicione o evento `workflow_dispatch` se você quiser a capacidade de executar manualmente esse fluxo de trabalho na interface do usuário. Para obter mais informações, confira [`workflow_dispatch`](/actions/reference/events-that-trigger-workflows#workflow_dispatch).
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
  push:
    branches:
      - main
```
</td>
<td>

Adicione o evento `push` para que o fluxo de trabalho seja executado automaticamente sempre que um commit for enviado por push a um branch que corresponda ao filtro `main`. Para obter mais informações, confira [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
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


```yaml{:copy}
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
```
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
  test:
```
</td>
<td>

Define um trabalho com a ID `test` que é armazenada na chave `jobs`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
```
</td>
<td>

Configura o trabalho a ser executado em um executor hospedado no {% data variables.product.prodname_dotcom %} ou um executor auto-hospedado, dependendo do repositório que executa o fluxo de trabalho. Neste exemplo, o trabalho será executado em um executor auto-hospedado se o repositório for chamado `docs-internal` e estiver dentro da organização `github`. Se o repositório não corresponder a esse caminho, ele será executado em um executor `ubuntu-latest` hospedado no {% data variables.product.prodname_dotcom %}. Para obter mais informações sobre essas opções, confira "[Como escolher o executor para um trabalho](/actions/using-jobs/choosing-the-runner-for-a-job)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    timeout-minutes: 60
```
</td>
<td>

Define o número máximo de minutos para permitir que o trabalho seja executado antes de ser cancelado automaticamente. Para obter mais informações, confira [`timeout-minutes`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    strategy:
```
</td>
<td>
  Esta seção define a matriz de build dos trabalhos.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      fail-fast: false
```
</td>
<td>

A configuração de `fail-fast` como `false` impede que o {% data variables.product.prodname_dotcom %} cancele todos os trabalhos em andamento quando algum trabalho da matriz falhar.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      matrix:
        test-group:
          [
            content,
            graphql,
            meta,
            rendering,
            routing,
            unit,
            linting,
            translations,
          ]
```
</td>
<td>

Cria uma matriz chamada `test-group`, com uma matriz de grupos de teste. Esses valores correspondem aos nomes dos grupos de teste que serão executados por `npm test`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Agrupa todas as etapas que serão executadas durante o trabalho `test`. Cada trabalho em um fluxo de trabalho tem a própria seção `steps`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Check out repo
        uses: {% data reusables.actions.action-checkout %}
        with:
          lfs: {% raw %}${{ matrix.test-group == 'content' }}{% endraw %}
          persist-credentials: 'false'
```
</td>
<td>

A palavra-chave `uses` informa que o trabalho deve recuperar a ação chamada `actions/checkout`. Esta é uma ação que verifica seu repositório e o faz o download do runner, permitindo que você execute ações contra seu código (como, por exemplo, ferramentas de teste). Você deve usar a ação de checkout sempre que o fluxo de trabalho for executado no código do repositório ou você estiver usando uma ação definida no repositório. Algumas opções extras são fornecidas para a ação usando a chave `with`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Figure out which docs-early-access branch to checkout, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        id: check-early-access
        uses: {% data reusables.actions.action-github-script %}
        env:
          BRANCH_NAME: {% raw %}${{ github.head_ref || github.ref_name }}{% endraw %}
        with:
          github-token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          result-encoding: string
          script: |
            // If being run from a PR, this becomes 'my-cool-branch'.
            // If run on main, with the `workflow_dispatch` action for
            // example, the value becomes 'main'.
            const { BRANCH_NAME } = process.env
            try {
              const response = await github.repos.getBranch({
                owner: 'github',
                repo: 'docs-early-access',
                BRANCH_NAME,
              })
              console.log(`Using docs-early-access branch called '${BRANCH_NAME}'.`)
              return BRANCH_NAME
            } catch (err) {
              if (err.status === 404) {
                console.log(`There is no docs-early-access branch called '${BRANCH_NAME}' so checking out 'main' instead.`)
                return 'main'
              }
              throw err
            }
```
</td>
<td>

Se o repositório atual for o `github/docs-internal`, esta etapa usará a ação `actions/github-script` para executar um script e verificar se há um branch chamado `docs-early-access`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Check out docs-early-access too, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: github/docs-early-access
          token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          path: docs-early-access
          ref: {% raw %}${{ steps.check-early-access.outputs.result }}{% endraw %}
```
</td>
<td>

Se o repositório atual for o `github/docs-internal`, esta etapa verificará o branch do `github/docs-early-access` que foi identificado na etapa anterior.
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Merge docs-early-access repo's folders
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        run: |
          mv docs-early-access/assets assets/images/early-access
          mv docs-early-access/content content/early-access
          mv docs-early-access/data data/early-access
          rm -r docs-early-access
```
</td>
<td>

Se o repositório atual for o `github/docs-internal`, esta etapa usará a palavra-chave `run` para executar comandos do shell para mover as pastas do repositório `docs-early-access` para as pastas do repositório principal.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Checkout LFS objects
        run: git lfs checkout
```
</td>
<td>

Esta etapa executa um comando para fazer check-out de objetos LFS do repositório.
</td>
</tr>
<tr>
<td>


```yaml{:copy}
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        id: get_diff_files
        with:
          # So that `steps.get_diff_files.outputs.files` becomes
          # a string like `foo.js path/bar.md`
          output: ' '
```
</td>
<td>

Esta etapa usa a ação `trilom/file-changes-action` para reunir os arquivos alterados na solicitação de pull, para que eles possam ser analisados na próxima etapa. Este exemplo é fixado a uma versão específica da ação, usando o SHA `a6ca26c14274c33b15e6499323aac178af06ad4b`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Insight into changed files
        run: |
          echo {% raw %}"${{ steps.get_diff_files.outputs.files }}" > get_diff_files.txt{% endraw %}
```
</td>
<td>

Esta etapa executa um comando do shell que usa uma saída da etapa anterior para criar um arquivo contendo a lista de arquivos alterados na solicitação de pull.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.14.x
          cache: npm
```
</td>
<td>

Essa etapa usa a ação `actions/setup-node` para instalar a versão especificada do pacote de software `node` no executor, o que permite que você acesse o comando `npm`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Install dependencies
        run: npm ci
```
</td>
<td>

Esta etapa executa o comando do shell `npm ci` para instalar os pacotes de software npm do projeto.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Cache nextjs build
        uses: {% data reusables.actions.action-cache %}
        with:
          path: .next/cache
          key: {% raw %}${{ runner.os }}-nextjs-${{ hashFiles('package*.json') }}{% endraw %}
```
</td>
<td>

Esta etapa usa a ação `actions/cache` para armazenar em cache o build Next.js, para que o fluxo de trabalho tente recuperar um cache do build e não recriá-lo do zero sempre. Para obter mais informações, confira "[Como armazenar dependências em cache para acelerar os fluxos de trabalho](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run build script
        run: npm run build
```
</td>
<td>

Esta etapa executa o script de build.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run tests
        env:
          DIFF_FILE: get_diff_files.txt
          CHANGELOG_CACHE_FILE_PATH: tests/fixtures/changelog-feed.json
        run: npm test -- {% raw %}tests/${{ matrix.test-group }}/{% endraw %}
```
</td>
<td>

Esta etapa executa os testes usando `npm test`e a matriz de teste fornece um valor diferente de {% raw %}`${{ matrix.test-group }}`{% endraw %} para cada trabalho na matriz. Ela usa a variável de ambiente `DIFF_FILE` para saber quais arquivos foram alterados e usa a variável de ambiente `CHANGELOG_CACHE_FILE_PATH` para o arquivo de cache do changelog.
</td>
</tr>
</tbody>
</table>

## Próximas etapas

{% data reusables.actions.learning-actions %}
