---
title: Использование интерфейса командной строки GitHub в средстве выполнения
shortTitle: Use the GitHub CLI on a runner
intro: 'Использование расширенных функций {% data variables.product.prodname_actions %} для непрерывной интеграции (CI).'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111588'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор примера

{% data reusables.actions.example-workflow-intro-ci %} При активации этого рабочего процесса он автоматически запускает скрипт, который проверяет, есть ли на сайте Документов {% data variables.product.prodname_dotcom %} неработающие ссылки. Если обнаруживаются неработающие ссылки, рабочий процесс использует интерфейс командной строки {% data variables.product.prodname_dotcom %} для создания проблемы {% data variables.product.prodname_dotcom %} с подробными сведениями.

{% data reusables.actions.example-diagram-intro %}

![Обзорная схема этапов рабочего процесса](/assets/images/help/images/overview-actions-using-cli-ci-example.png)

## Функции, используемые в этом примере

{% data reusables.actions.example-table-intro %}

| **Возможность**  | **Реализация** |
| --- | --- |
{% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.if-conditions-table-entry %} {% data reusables.actions.secrets-table-entry %} {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Использование стороннего действия: | [`peter-evans/create-issue-from-file`](https://github.com/peter-evans/create-issue-from-file)| | Выполнение команд оболочки в средстве выполнения: | [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) | | Выполнение скрипта в средстве выполнения: | Использование `script/check-english-links.js` | | Создание выходного файла: | Передача выходных данных с помощью оператора `>` | | Проверка существующих проблем с использованием {% data variables.product.prodname_cli %}: | [`gh issue list`](https://cli.github.com/manual/gh_issue_list) | | Комментирование проблемы с использованием {% data variables.product.prodname_cli %}: | [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) |

## Пример рабочего процесса

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

## Общие сведения о примере

{% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%"><b>Код</b></th>
    <th style="width:40%"><b>Пояснение</b></th>
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

Определяет `workflow_dispatch` и `scheduled` как триггеры рабочего процесса:

* `workflow_dispatch` позволяет вам вручную запустить рабочий процесс из пользовательского интерфейса. Дополнительные сведения см. на веб-сайте [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
* Событие `schedule` позволяет использовать синтаксис `cron`, чтобы определить регулярный интервал для автоматического запуска рабочего процесса. Дополнительные сведения см. на веб-сайте [`schedule`](/actions/reference/events-that-trigger-workflows#schedule).
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

Изменяет разрешения по умолчанию, предоставленные `GITHUB_TOKEN`. Зависит от потребностей рабочего процесса. Дополнительные сведения см. в статье [Назначение разрешений заданиям](/actions/using-jobs/assigning-permissions-to-jobs).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Объединяет все задания, выполняемые в файле рабочего процесса.
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

Определяет задание с идентификатором `check_all_english_links` и именем `Check all links`, которое хранится в ключе `jobs`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
if: github.repository == 'github/docs-internal'
```
</td>
<td>

Задание `check_all_english_links` можно выполнять только в том случае, если репозиторий имеет имя `docs-internal` и находится в организации `github`. В противном случае задание будет отмечено как _пропущенное_.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
runs-on: ubuntu-latest
```
</td>
<td>

Настраивает задание для выполнения в последней версии средства выполнения Ubuntu Linux. Это означает, что задание будет выполняться на новой виртуальной машине, размещенной в {% data variables.product.prodname_dotcom %}. Примеры синтаксиса, где используются другие средства выполнения тестов, см. в статье «[Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)».
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

Создает пользовательские переменные среды и переопределяет встроенную переменную `GITHUB_TOKEN` для использования пользовательского [секрета](/actions/security-guides/encrypted-secrets). На эти переменные будут использоваться ссылки позже в рабочем процессе.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Группируют все шаги, которые будут выполняться в рамках задания `check_all_english_links`. Каждое задание в рабочем процессе имеет собственный раздел `steps`.
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

Ключевое слово `uses` сообщает заданию, что нужно получить действие с именем `actions/checkout`. Это действие, которое извлекает репозиторий и загружает его в средство выполнения, позволяя выполнять действия в коде (например, средства тестирования). Действие оформления заказа необходимо использовать в любой момент, когда рабочий процесс будет выполняться в коде репозитория или если вы используете действие, определенное в репозитории.
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

На этом шаге используется действие `actions/setup-node` для установки указанной версии пакета программного обеспечения `node` в средстве выполнения, которое предоставляет доступ к команде `npm`.
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

Ключевое слово `run` указывает заданию выполнить команду в средстве выполнения. В этом случае команды `npm ci` и `npm run build` выполняются в виде отдельных шагов для установки и сборки приложения Node.js в репозитории.
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

Эта команда `run` выполняет скрипт, хранящийся в репозитории в `script/check-english-links.js`, и передает выходные данные в файл с именем `broken_links.md`.
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

Если скрипт `check-english-links.js` обнаруживает неработающие ссылки и возвращает состояние выхода, отличное от нуля (сбой), используйте [команду рабочего процесса](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter), чтобы задать выходные данные, имеющие значение первой строки файла `broken_links.md` (используется в следующем шаге).
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

Использует действие `peter-evans/create-issue-from-file`, чтобы создать новую проблему {% data variables.product.prodname_dotcom %}. Этот пример закреплен к определенной версии действия с помощью SHA `b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e`.
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

Использует [`gh issue list`](https://cli.github.com/manual/gh_issue_list) для поиска ранее созданной проблемы из предыдущих запусков. Используется [псевдоним](https://cli.github.com/manual/gh_alias_set) `gh list-reports` для более простой обработки на последующих шагах. Чтобы получить URL-адрес проблемы, выражение `jq` обрабатывает полученные выходные данные JSON.

Затем используется [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment), чтобы добавить комментарий к новой проблеме, которая ссылается на предыдущую.
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

Если проблема из предыдущего запуска открыта и назначена кому-либо, используйте для [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment), чтобы добавить комментарий со ссылкой на новую проблему.
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

Если проблема из предыдущего запуска открыта и не назначена, выполните указанные ниже действия.

* Используйте [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment), чтобы добавить комментарий со ссылкой на новую проблему.
* Используйте [`gh issue close`](https://cli.github.com/manual/gh_issue_close), чтобы закрыть старую проблему.
* Используйте [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit), чтобы изменить старую проблему и удалить ее из определенной доски проекта {% data variables.product.prodname_dotcom %}.
</td>
</tr>
</tbody>
</table>

## Дальнейшие действия

{% data reusables.actions.learning-actions %}
