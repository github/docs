---
title: Использование скриптов для тестирования кода в средстве выполнения тестов
shortTitle: Use scripts to test your code on a runner
intro: 'Использование основных функций {% data variables.product.prodname_actions %} для непрерывной интеграции (CI).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: 05204ce87cd5b8ef3260c997d36a9656fc08d7f1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093972'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор примера

{% data reusables.actions.example-workflow-intro-ci %} При активации этого рабочего процесса он автоматически запускает скрипт, который проверяет, есть ли на сайте Документов {% data variables.product.prodname_dotcom %} неработающие ссылки.

{% data reusables.actions.example-diagram-intro %}

![Обзорная схема этапов рабочего процесса](/assets/images/help/images/overview-actions-using-scripts-ci-example.png)

## Функции, используемые в этом примере

{% data reusables.actions.example-table-intro %}

| **Возможность**  | **Реализация** |
| --- | --- | 
{% data reusables.actions.push-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | Выполнение задания в различных средствах выполнения тестов в зависимости от репозитория: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Использование стороннего действия: | [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)| | Выполнение скрипта в средстве выполнения тестов: | Использование `./script/rendered-content-link-checker.mjs` |

## Пример рабочего процесса

{% data reusables.actions.example-docs-engineering-intro %} [`check-broken-links-github-github.yml`](https://github.com/github/docs/blob/main/.github/workflows/check-broken-links-github-github.yml).

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

Ключевое слово `on` позволяет определять события, которые активируются при запуске рабочего процесса. Здесь можно определить несколько событий. Дополнительные сведения см. в статье [Активация рабочего процесса](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

Добавьте событие `workflow_dispatch`, если требуется возможность вручную запустить этот рабочий процесс из пользовательского интерфейса. Дополнительные сведения см. на веб-сайте [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
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

Добавьте событие `push`, чтобы рабочий процесс запускался автоматически при каждой отправке фиксации в ветвь с именем `main`. Дополнительные сведения см. на веб-сайте [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

Добавьте событие `pull_request`, чтобы рабочий процесс запускался автоматически при каждом создании или обновлении запроса на вытягивание. Дополнительные сведения см. на веб-сайте [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request).
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

Изменяет разрешения по умолчанию, предоставленные `GITHUB_TOKEN`. Зависит от потребностей рабочего процесса. Дополнительные сведения см. в статье [Назначение разрешений заданиям](/actions/using-jobs/assigning-permissions-to-jobs).
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

Создает группу параллелизма для определенных событий и использует оператор `||` для определения резервных значений. Дополнительные сведения см. в статье [Использование параллелизма](/actions/using-jobs/using-concurrency).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

Отменяет задание или рабочий процесс, которые сейчас выполняются в той же группе параллелизма.
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
  check-links:
```
</td>
<td>

Определяет задание с идентификатором `check-links`, которое хранится в ключе `jobs`.
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

Настраивает задание для запуска в средстве выполнения тестов, размещенном в {% data variables.product.prodname_dotcom %}, или в локальном средстве выполнения тестов в зависимости от репозитория, выполняющего рабочий процесс. В этом примере задание будет выполняться в локальном средстве выполнения тестов, если репозиторий называется `docs-internal` и находится в организации `github`. Если репозиторий не соответствует этому пути, задание будет выполняться в средстве выполнения тестов `ubuntu-latest`, размещенном в {% data variables.product.prodname_dotcom %}. Дополнительные сведения об этих вариантах см. в статье [Выбор средства выполнения тестов для задания](/actions/using-jobs/choosing-the-runner-for-a-job).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Группирует все шаги, которые будут выполняться в рамках задания `check-links`. Каждое задание в рабочем процессе имеет собственный раздел `steps`.
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

Ключевое слово `uses` сообщает заданию, что нужно получить действие с именем `actions/checkout`. Это действие, которое извлекает репозиторий и загружает его в средство выполнения, позволяя выполнять действия в коде (например, средства тестирования). Действие извлечения необходимо использовать в любой момент, когда рабочий процесс будет выполняться в коде репозитория или если вы используете действие, определенное в репозитории.
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

На этом шаге используется действие `actions/setup-node` для установки указанной версии пакета программного обеспечения Node.js в средстве выполнения тестов, которое предоставляет доступ к команде `npm`.
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

Ключевое слово `run` указывает заданию выполнить команду в средстве выполнения. В этом случае `npm ci` используется для установки пакетов программного обеспечения npm для проекта.
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

Использует действие `trilom/file-changes-action` для сбора всех измененных файлов. Этот пример закреплен к определенной версии действия с помощью SHA `a6ca26c14274c33b15e6499323aac178af06ad4b`.
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

Выводит список содержимого `files.json`. Это отразится в журнале выполнения рабочего процесса и может быть полезно для отладки.
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

На этом шаге используется команда `run` для выполнения скрипта, хранящегося в репозитории `script/rendered-content-link-checker.mjs`, которая передает все необходимые параметры.
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

На этом шаге используется команда `run` для выполнения скрипта, хранящегося в репозитории `script/rendered-content-link-checker.mjs`, которая передает другой набор параметров.
</tr>

</tbody>
</table>

## Дальнейшие действия

{% data reusables.actions.learning-actions %}
