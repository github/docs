---
title: 'Использование параллелизма, выражений и тестовой матрицы'
shortTitle: 'Use concurrency, expressions, and a test matrix'
intro: 'Использование расширенных функций {% data variables.product.prodname_actions %} для непрерывной интеграции (CI).'
versions:
  fpt: '*'
  ghes: '>= 3.5'
  ghae: '>= 3.5'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: 8e34f9e9c553f5ea908b9a1340385db490bd4d1b
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093892'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор примера

{% data reusables.actions.example-workflow-intro-ci %} Когда этот рабочий процесс активируется, он проверяет код с помощью матрицы сочетаний тестов с `npm test`.

{% data reusables.actions.example-diagram-intro %}

![Обзорная схема этапов рабочего процесса](/assets/images/help/images/overview-actions-using-concurrency-expressions-and-a-test-matrix.png)

## Функции, используемые в этом примере

{% data reusables.actions.example-table-intro %}

| **Возможность**  | **Реализация** |
| --- | --- |
{% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | Выполнение задания в разных средствах выполнения тестов в зависимости от репозитория: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.if-conditions-table-entry %} | Использование матрицы для создания различных конфигураций тестов: | [`matrix`](/actions/using-jobs/using-a-build-matrix-for-your-jobs)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Зависимости кэширования: | [`actions/cache`](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows)| | Выполнение тестов в средстве выполнения тестов: | `npm test`|

## Пример рабочего процесса

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
          # Enables cloning the Early Access repo later with the relevant {% data variables.product.pat_generic %}
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

Добавьте событие `workflow_dispatch`, если требуется возможность вручную запустить этот рабочий процесс в пользовательском интерфейсе. Дополнительные сведения см. на веб-сайте [`workflow_dispatch`](/actions/reference/events-that-trigger-workflows#workflow_dispatch).
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
  push:
    branches:
      - main
```
</td>
<td>

Добавьте событие `push`, чтобы рабочий процесс запускался автоматически при каждой отправке фиксации в ветвь, соответствующую фильтру `main`. Дополнительные сведения см. на веб-сайте [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
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


```yaml{:copy}
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
```
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
  test:
```
</td>
<td>

Определяет задание с идентификатором `test`, который хранится в ключе `jobs`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
```
</td>
<td>

Настраивает задание для запуска в средстве выполнения тестов, размещенном в {% data variables.product.prodname_dotcom %}, или в локальном средстве выполнения тестов в зависимости от репозитория, выполняющего рабочий процесс. В этом примере задание будет выполняться в локальном средстве выполнения тестов, если репозиторий называется `docs-internal` и находится в организации `github`. Если репозиторий не соответствует этому пути, задание будет выполняться в средстве выполнения тестов `ubuntu-latest`, размещенном в {% data variables.product.prodname_dotcom %}. Дополнительные сведения об этих параметрах см. в статье [Выбор средства выполнения тестов для задания](/actions/using-jobs/choosing-the-runner-for-a-job).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    timeout-minutes: 60
```
</td>
<td>

Задает максимальное количество минут, в течение которых задание будет выполняться до его автоматической отмены. Дополнительные сведения см. на веб-сайте [`timeout-minutes`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    strategy:
```
</td>
<td>
  В этом разделе определяется матрица сборки для заданий.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      fail-fast: false
```
</td>
<td>

Если для `fail-fast` задать значение `false`, {% data variables.product.prodname_dotcom %} запрещается отменять любые выполняемые задания при сбое какого-либо задания в матрице.
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

Создает матрицу с именем `test-group` с массивом тестовых групп. Эти значения соответствуют именам тестовых групп, которые будут выполняться `npm test`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Группируют все шаги, которые будут выполняться в рамках задания `test`. Каждое задание в рабочем процессе имеет собственный раздел `steps`.
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

Ключевое слово `uses` сообщает заданию, что нужно получить действие с именем `actions/checkout`. Это действие, которое извлекает репозиторий и загружает его в средство выполнения, позволяя выполнять действия в коде (например, средства тестирования). Действие извлечения необходимо использовать в любой момент, когда рабочий процесс будет выполняться в коде репозитория или если вы используете действие, определенное в репозитории. Некоторые дополнительные параметры предоставляются действию с помощью ключа `with`.
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

Если текущий репозиторий является репозиторием `github/docs-internal`, на этом шаге используется действие `actions/github-script` для запуска скрипта для проверки наличия ветви `docs-early-access`.
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

Если текущий репозиторий является репозиторием `github/docs-internal`, на этом шаге извлекается ветвь из `github/docs-early-access`, указанного на предыдущем шаге.
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

Если текущий репозиторий является репозиторием `github/docs-internal`, на этом шаге используется ключевое слово `run` для выполнения команд оболочки для перемещения папок репозитория `docs-early-access` в папки основного репозитория.
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

На этом шаге выполняется команда для извлечения объектов LFS из репозитория.
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

На этом шаге используется действие `trilom/file-changes-action` для сбора файлов, измененных в запросе на вытягивание, чтобы их можно было проанализировать на следующем шаге. Этот пример закрепляется в определенной версии действия с помощью SHA `a6ca26c14274c33b15e6499323aac178af06ad4b`.
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

На этом шаге выполняется команда оболочки, которая использует выходные данные предыдущего шага для создания файла, содержащего список файлов, измененных в запросе на вытягивание.
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

На этом шаге используется действие `actions/setup-node` для установки указанной версии пакета программного обеспечения `node` в средстве выполнения тестов, которое предоставляет доступ к команде `npm`.
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

На этом шаге выполняется команда оболочки `npm ci` для установки пакетов программного обеспечения npm для проекта.
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

На этом шаге используется действие `actions/cache` для кэширования сборки Next.js, чтобы рабочий процесс пытался получить кэш сборки, а не перестраивать его с нуля каждый раз. Дополнительные сведения см. в разделе [Кэширование зависимостей для ускорения рабочих процессов](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).
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

На этом шаге запускается скрипт сборки.
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

На этом шаге выполняются тесты с использованием `npm test`, а матрица тестов предоставляет другое значение для {% raw %}`${{ matrix.test-group }}`{% endraw %} для каждого задания в матрице. Она использует переменную среды `DIFF_FILE`, чтобы узнать, какие файлы были изменены, и переменную среды `CHANGELOG_CACHE_FILE_PATH` для файла кэша изменений.
</td>
</tr>
</tbody>
</table>

## Дальнейшие действия

{% data reusables.actions.learning-actions %}
