---
title: Usando o GitHub CLI em um executor
shortTitle: Usando o GitHub CLI em um executor
intro: 'Como usar funcionalidades avançadas de {% data variables.product.prodname_actions %} para integração contínua (IC).'
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

{% data reusables.actions.example-workflow-intro-ci %} Quando esse fluxo de trabalho é acionado, ele executa automaticamente um script que verifica se o site Docs de {% data variables.product.prodname_dotcom %} tem algum link quebrado. Se algum link quebrado for encontrado, o fluxo de trabalho usará a CLI de {% data variables.product.prodname_dotcom %} para criar um problema de {% data variables.product.prodname_dotcom %} com os detalhes.

{% data reusables.actions.example-diagram-intro %}

![Diagrama de visão geral das etapas do fluxo de trabalho](/assets/images/help/images/overview-actions-using-cli-ci-example.png)

## Características utilizadas neste exemplo

{% data reusables.actions.example-table-intro %}

| **Funcionalidade** | **Implementação** |
| ------------------ | ----------------- |
|                    |                   |
{% data reusables.actions.cron-table-entry %}
{% data reusables.actions.permissions-table-entry %}
{% data reusables.actions.if-conditions-table-entry %}
{% data reusables.actions.secrets-table-entry %}
{% data reusables.actions.checkout-action-table-entry %}
{% data reusables.actions.setup-node-table-entry %}
| Usando uma ação de terceiros: | [`peter-evans/create-issue-from-file`](https://github.com/peter-evans/create-issue-from-file)| | Executando comandos de shell no executor: | [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) | | Executando um script no executor: | Usando `script/check-english-links.js` | | Gerando um arquivo de saída: | Canalizando a saída usando o operador `>`| | Verificando problemas existentes que usam {% data variables.product.prodname_cli %}: | [`gh issue list`](https://cli.github.com/manual/gh_issue_list) | | Comentando em um problema que usa {% data variables.product.prodname_cli %}: | [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) |

## Exemplo de fluxo de trabalho

{% data reusables.actions.example-docs-engineering-intro %} [`check-all-english-links.yml`](https://github.com/github/docs/blob/main/.github/workflows/check-all-english-links.yml).

{% data reusables.actions.note-understanding-example %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:70%"></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: Check all English links

# **What it does**: This script once a day checks all English links and reports in issues.
# **Why we have it**: We want to know if any links break.
# **Who does it impact**: Docs content.

on:
  workflow_dispatch:
  schedule:
    - cron: '40 19 * * *' # once a day at 19:40 UTC / 11:40 PST

permissions:
  contents: read
  issues: write

jobs:
  check_all_english_links:
    name: Check all links
    if: github.repository == 'github/docs-internal'
    runs-on: ubuntu-latest
    env:
      GITHUB_TOKEN: {% raw %}${{ secrets.DOCUBOT_READORG_REPO_WORKFLOW_SCOPES }}{% endraw %}
      FIRST_RESPONDER_PROJECT: Docs content first responder
      REPORT_AUTHOR: docubot
      REPORT_LABEL: broken link report
      REPORT_REPOSITORY: github/docs-content
    steps:
      - name: Check out repo's default branch
        uses: {% data reusables.actions.action-checkout %}
      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm
      - name: npm ci
        run: npm ci
      - name: npm run build
        run: npm run build
      - name: Run script
        run: |
          script/check-english-links.js > broken_links.md

      # check-english-links.js returns 0 if no links are broken, and 1 if any links
      # are broken. When an Actions step's exit code is 1, the action run's job status
      # is failure and the run ends. The following steps create an issue for the
      # broken link report only if any links are broken, so {% raw %}`if: ${{ failure() }}`{% endraw %}
      # ensures the steps run despite the previous step's failure of the job.

      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Get title for issue
        id: check
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Create issue from file
        id: broken-link-report
        uses: peter-evans/create-issue-from-file@b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e
        with:
          token: {% raw %}${{ env.GITHUB_TOKEN }}{% endraw %}

          title: {% raw %}${{ steps.check.outputs.title }}{% endraw %}
          content-filepath: ./broken_links.md
          repository: {% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %}
          labels: {% raw %}${{ env.REPORT_LABEL }}{% endraw %}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Close and/or comment on old issues
        env:
          {% raw %}NEW_REPORT_URL: 'https://github.com/${{ env.REPORT_REPOSITORY }}/issues/${{ steps.broken-link-report.outputs.issue-number }}'{% endraw %}
        run: |
          gh alias set list-reports "issue list \
                                       --repo {% raw %}${{ env.REPORT_REPOSITORY }} \{% endraw %}
                                       --author {% raw %}${{ env.REPORT_AUTHOR }} \{% endraw %}
                                       --label {% raw %}'${{ env.REPORT_LABEL }}'"{% endraw %}

          # Link to the previous report from the new report that triggered this
          # workflow run.

          previous_report_url=$(gh list-reports \
                                  --state all \
                                  --limit 2 \
                                  --json url \
                                  --jq '.[].url' \
                                  | grep -v {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} | head -1)

          gh issue comment {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} --body "⬅️ [Previous report]($previous_report_url)"

          # If an old report is open and assigned to someone, link to the newer
          # report without closing the old report.

          for issue_url in $(gh list-reports \
                                  --json assignees,url \
                                  --jq '.[] | select (.assignees != []) | .url'); do
            if [ "$issue_url" != {% raw %}"${{ env.NEW_REPORT_URL }}"{% endraw %} ]; then
              gh issue comment $issue_url --body "➡️ [Newer report]({% raw %}${{ env.NEW_REPORT_URL }}{% endraw %})"
            fi
          done

          # Link to the newer report from any older report that is still open,
          # then close the older report and remove it from the first responder's
          # project board.

          for issue_url in $(gh list-reports \
                                  --search 'no:assignee' \
                                  --json url \
                                  --jq '.[].url'); do
            if [ "$issue_url" != {% raw %}"${{ env.NEW_REPORT_URL }}"{% endraw %} ]; then
              gh issue comment $issue_url --body "➡️ [Newer report]({% raw %}${{ env.NEW_REPORT_URL }})"{% endraw %}
              gh issue close $issue_url
              gh issue edit $issue_url --remove-project "{% raw %}${{ env.FIRST_RESPONDER_PROJECT }}"{% endraw %}
            fi
          done
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
name: Check all English links
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
  workflow_dispatch:
  schedule:
    - cron: '40 20 * * *' # once a day at 20:40 UTC / 12:40 PST
```
</td>
<td>

Defines the `workflow_dispatch` and `scheduled` as triggers for the workflow:

* The `workflow_dispatch` lets you manually run this workflow from the UI. Para obter mais informações, consulte [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
* The `schedule` event lets you use `cron` syntax to define a regular interval for automatically triggering the workflow. Para obter mais informações, consulte ['agendamento'](/actions/reference/events-that-trigger-workflows#schedule).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
permissions:
  contents: read
  issues: write
```
</td>
<td>

Modifica as permissões padrão concedidas a "GITHUB_TOKEN". Isso vai variar dependendo das necessidades do seu fluxo de trabalho. Para obter mais informações, consulte "[Atribuindo permissões a trabalhos](/actions/using-jobs/assigning-permissions-to-jobs)."
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
  check_all_english_links:
    name: Check all links
```
</td>
<td>

Define um trabalho com o ID "check_all_english_links", e o nome 'Verificar todos os links', que é armazenado na chave "trabalhos".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
if: github.repository == 'github/docs-internal'
```
</td>
<td>

Só execute o trabalho de "check_all_english_links" se o repositório for denominado "docs-internal" e estiver dentro da organização "github". Caso contrário, o trabalho é marcado como _skipped_.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
runs-on: ubuntu-latest
```
</td>
<td>

Configura o trabalho a ser executado em um executor do Ubuntu Linux. Isso significa que o trabalho será executado em uma nova máquina virtual hospedada por {% data variables.product.prodname_dotcom %}. Para obter exemplos de sintaxe usando outros executores, consulte "[Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)."
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    env:
      GITHUB_TOKEN: {% raw %}${{ secrets.DOCUBOT_READORG_REPO_WORKFLOW_SCOPES }}{% endraw %}
      REPORT_AUTHOR: docubot
      REPORT_LABEL: broken link report
      REPORT_REPOSITORY: github/docs-content
```
</td>
<td>

Cria variáveis de ambiente personalizadas e redefine a variável "GITHUB_TOKEN" incorporada para usar um [secret](/actions/security-guides/encrypted-secrets) personalizado. Essas variáveis serão referenciadas posteriormente no fluxo de trabalho.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Agrupa todos os passos que serão executados como parte do trabalho "check_all_english_links". Cada trabalho no fluxo de trabalho tem sua própria seção de "etapas".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Check out repo's default branch
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
      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.8.x
          cache: npm
```
</td>
<td>

Esta etapa usa a ação `actions/setup-node` para instalar a versão especificada do pacote do "node" de software no executor, que lhe dá acesso ao comando `npm`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run the "npm ci" command
        run: npm ci
      - name: Run the "npm run build" command
        run: npm run build
```
</td>
<td>

A palavra-chave `executar` diz ao trabalho para executar um comando no executor. Neste caso, os comandos "npm ci" e "npm run build" são executados como etapas separadas para instalar e construir o aplicativo Node.js no repositório.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run script
        run: |
          script/check-english-links.js > broken_links.md
```
</td>
<td>

Este comando "executar" executa um script armazenado no repositório em "script/check-english-links.js" e canalizado a saída para um arquivo denominado 'broken_links.md'.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Get title for issue
        id: check
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
```
</td>
<td>

Se o script "check-english-links.js" detectar links quebrados e retornar um status de saída não zero (falha) e, em seguida, usar um [comando de fluxo de trabalho](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter) para definir uma saída que tenha o valor da primeira linha do arquivo 'broken_links.md' (este será usado na próxima etapa).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Create issue from file
        id: broken-link-report
        uses: peter-evans/create-issue-from-file@b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e
        with:
          token: {% raw %}${{ env.GITHUB_TOKEN }}{% endraw %}

          title: {% raw %}${{ steps.check.outputs.title }}{% endraw %}
          content-filepath: ./broken_links.md
          repository: {% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %}
          labels: {% raw %}${{ env.REPORT_LABEL }}{% endraw %}
```
</td>
<td>

Usa a ação "peter-evans/create-issue-from-file" para criar um novo problema de {% data variables.product.prodname_dotcom %}. Este exemplo é fixado em uma versão específica da ação, usando o SHA de "b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Close and/or comment on old issues
        env:
          NEW_REPORT_URL: 'https://github.com/{% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %}/issues/{% raw %}${{ steps.broken-link-report.outputs.issue-number }}{% endraw %}'
        run: |
          gh alias set list-reports "issue list \
                                       --repo {% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %} \
                                       --author {% raw %}${{ env.REPORT_AUTHOR }}{% endraw %} \
                                       --label '{% raw %}${{ env.REPORT_LABEL }}{% endraw %}'"
          previous_report_url=$(gh list-reports \
                                  --state all \
                                  --limit 2 \
                                  --json url \
                                  --jq '.[].url' \
                                  | grep -v {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} | head -1)

          gh issue comment {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} --body "⬅️ [Previous report]($previous_report_url)"
```
</td>
<td>

Usa [`gh issue list`](https://cli.github.com/manual/gh_issue_list) para localizar a emissão anteriormente criada a partir de execuções anteriores. Este é [aliased](https://cli.github.com/manual/gh_alias_set) para 'gh list-reports' para processamento mais simples em etapas posteriores. Para obter a URL do problema, a expressão "jq" processa a saída do JSON resultante.

[`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) é usado em seguida para adicionar um comentário ao novo problema que vincula com o anterior.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
          for issue_url in $(gh list-reports \
                                  --json assignees,url \
                                  --jq '.[] | select (.assignees != []) | .url'); do
            if [ "$issue_url" != "${{ env.NEW_REPORT_URL }}" ]; then
              gh issue comment $issue_url --body "➡️ [Newer report](${{ env.NEW_REPORT_URL }})"
            fi
          done
```
</td>
<td>

Se um problema de uma execução anterior estiver aberto e atribuído a alguém, use [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) para adicionar um comentário com um link para a nova edição.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
          for issue_url in $(gh list-reports \
                                  --search 'no:assignee' \
                                  --json url \
                                  --jq '.[].url'); do
            if [ "$issue_url" != "{% raw %}${{ env.NEW_REPORT_URL }}{% endraw %}" ]; then
              gh issue comment $issue_url --body "➡️ [Newer report]({% raw %}${{ env.NEW_REPORT_URL }}{% endraw %})"
              gh issue close $issue_url
              gh issue edit $issue_url --remove-project "{% raw %}${{ env.FIRST_RESPONDER_PROJECT }}{% endraw %}"
            fi
          done
```
</td>
<td>

Se um problema de uma execução anterior estiver aberto e não for atribuído a ninguém, então:

* Use [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) to add a comment with a link to the new issue.
* Use [`gh issue close`](https://cli.github.com/manual/gh_issue_close) to close the old issue.
* Use [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit) to edit the old issue to remove it from a specific {% data variables.product.prodname_dotcom %} project board.
</td>
</tr>
</tbody>
</table>

## Próximas etapas

{% data reusables.actions.learning-actions %}
