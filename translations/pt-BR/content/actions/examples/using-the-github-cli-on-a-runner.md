---
title: Usando a CLI do GitHub em um executor
shortTitle: Use the GitHub CLI on a runner
intro: 'Como usar recursos avançados do {% data variables.product.prodname_actions %} para CI (integração contínua).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: e0787d09cd194de0038d259c1aff777cc91a4a6a
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111582'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral de exemplo

{% data reusables.actions.example-workflow-intro-ci %} Quando esse fluxo de trabalho é disparado, ele executa automaticamente um script que verifica se o site {% data variables.product.prodname_dotcom %} Docs tem links desfeitos. Quando são encontrados links desfeitos, o fluxo de trabalho usa a CLI do {% data variables.product.prodname_dotcom %} para criar um problema do {% data variables.product.prodname_dotcom %} com os detalhes.

{% data reusables.actions.example-diagram-intro %}

![Diagrama de visão geral das etapas do fluxo de trabalho](/assets/images/help/images/overview-actions-using-cli-ci-example.png)

## Recursos usados neste exemplo

{% data reusables.actions.example-table-intro %}

| **Recurso**  | **Implementação** |
| --- | --- |
{% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.if-conditions-table-entry %} {% data reusables.actions.secrets-table-entry %} {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Como usar uma ação de terceiros: | [`peter-evans/create-issue-from-file`](https://github.com/peter-evans/create-issue-from-file)| | Como executar comandos do shell no executor: | [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) | | Como executar um script no executor: | Como usar `script/check-english-links.js` | | Como gerar um arquivo de saída: | Como direcionar a saída usando o operador `>` | | Como verificar se há problemas usando a {% data variables.product.prodname_cli %}: | [`gh issue list`](https://cli.github.com/manual/gh_issue_list) | | Como comentar em um problema usando a {% data variables.product.prodname_cli %}: | [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) |

## Fluxo de trabalho de exemplo

{% data reusables.actions.example-docs-engineering-intro %} [`check-all-english-links.yml`](https://github.com/github/docs/blob/6e01c0653836c10d7e092a17566a2c88b10504ce/.github/workflows/check-all-english-links.yml).

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
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "title=$(head -1 broken_links.md)" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
{%- endif %}
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

Define `workflow_dispatch` e `scheduled` como gatilhos para o fluxo de trabalho:

* O `workflow_dispatch` permite executar manualmente esse fluxo de trabalho por meio da interface do usuário. Para obter mais informações, confira [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
* O evento `schedule` permite que você use a sintaxe `cron` para definir um intervalo regular para disparar automaticamente o fluxo de trabalho. Para obter mais informações, confira [`schedule`](/actions/reference/events-that-trigger-workflows#schedule).
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

Modifica as permissões padrão concedidas a `GITHUB_TOKEN`. Isso variará dependendo das necessidades do fluxo de trabalho. Para obter mais informações, confira "[Como atribuir permissões a trabalhos](/actions/using-jobs/assigning-permissions-to-jobs)".
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
  check_all_english_links:
    name: Check all links
```
</td>
<td>

Define um trabalho com a ID `check_all_english_links` e o nome `Check all links`, armazenados dentro da chave `jobs`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
if: github.repository == 'github/docs-internal'
```
</td>
<td>

O trabalho `check_all_english_links` só será executado se o repositório chamar `docs-internal` e estiver dentro da organização `github`. Caso contrário, o trabalho será marcado como _ignorado_.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
runs-on: ubuntu-latest
```
</td>
<td>

Configura o trabalho a ser executado em um executor do Ubuntu Linux. Isto significa que o trabalho será executado em uma nova máquina virtual hospedada pelo {% data variables.product.prodname_dotcom %}. Para ver exemplos de sintaxe que usam outros executores, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)".
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

Cria variáveis de ambiente personalizadas e redefine a variável interna `GITHUB_TOKEN` para usar um [segredo](/actions/security-guides/encrypted-secrets) personalizado. Essas variáveis serão referenciadas mais tarde no fluxo de trabalho.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Agrupa todas as etapas que serão executadas durante o trabalho `check_all_english_links`. Cada trabalho no fluxo de trabalho tem a própria seção `steps`.
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

A palavra-chave `uses` informa que o trabalho deve recuperar a ação chamada `actions/checkout`. Esta é uma ação que verifica seu repositório e o faz o download do runner, permitindo que você execute ações contra seu código (como, por exemplo, ferramentas de teste). Você deve usar a ação de checkout sempre que o fluxo de trabalho for executado no código do repositório ou você estiver usando uma ação definida no repositório.
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

Essa etapa usa a ação `actions/setup-node` para instalar a versão especificada do pacote de software `node` no executor, o que permite que você acesse o comando `npm`.
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

A palavra-chave `run` instrui o trabalho a executar um comando no executor. Nesse caso, os comandos `npm ci` e `npm run build` são executados como etapas separadas para instalar e compilar o aplicativo Node.js no repositório.
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

Esse comando `run` executa um script que é armazenado no repositório em `script/check-english-links.js` e direciona a saída para um arquivo chamado `broken_links.md`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Get title for issue
        id: check
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "title=$(head -1 broken_links.md)" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
{%- endif %}
```
</td>
<td>

Se o script `check-english-links.js` detectar links desfeitos e retornar um status de saída diferente de zero (falha), use um [comando de fluxo de trabalho](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter) para definir uma saída que tenha o valor da primeira linha do arquivo `broken_links.md` (usado na próxima etapa).
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

Usa a ação `peter-evans/create-issue-from-file` para criar um problema do {% data variables.product.prodname_dotcom %}. Este exemplo é fixado a uma versão específica da ação, usando o SHA `b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e`.
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

Usa [`gh issue list`](https://cli.github.com/manual/gh_issue_list) para localizar o problema que já foi criado de execuções anteriores. O [alias](https://cli.github.com/manual/gh_alias_set) `gh list-reports` é usado para simplificar o processamento nas próximas etapas. Para obter a URL do problema, a expressão `jq` processa a saída JSON resultante.

Depois, [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) é usado para adicionar um comentário ao novo problema vinculado ao anterior.
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

Se um problema de uma execução anterior estiver aberto e atribuído a alguém, use [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) para adicionar um comentário com um link para o novo problema.
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

Se um problema de uma execução anterior estiver aberto e não estiver atribuído a ninguém:

* Use [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) para adicionar um comentário com um link para o novo problema.
* Use [`gh issue close`](https://cli.github.com/manual/gh_issue_close) para fechar o problema antigo.
* Use [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit) para editar o problema antigo a fim de removê-lo de um quadro de projeto do {% data variables.product.prodname_dotcom %}.
</td>
</tr>
</tbody>
</table>

## Próximas etapas

{% data reusables.actions.learning-actions %}
