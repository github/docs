---
title: 'Verwenden von Parallelität, Ausdrücken und einer Testmatrix'
shortTitle: 'Using concurrency, expressions, and a test matrix'
intro: 'Verwenden erweiterter {% data variables.product.prodname_actions %}-Features für Continuous Integration (CI).'
versions:
  fpt: '*'
  ghes: '>= 3.5'
  ghae: '>= 3.5'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: f4edac59fdbcc8f8825a51e25b737b94b17128b0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496580'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht über das Beispiel

{% data reusables.actions.example-workflow-intro-ci %} Wenn dieser Workflow ausgelöst wird, testet er deinen Code mithilfe einer Matrix von Testkombinationen mit `npm test`.

{% data reusables.actions.example-diagram-intro %}

![Übersichtsdiagramm der Workflowschritte](/assets/images/help/images/overview-actions-using-concurrency-expressions-and-a-test-matrix.png)

## In diesem Beispiel verwendete Features

{% data reusables.actions.example-table-intro %}

| **Feature**  | **Implementierung** |
| --- | --- |
{% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | Ausführen des Auftrags auf verschiedenen Runnern in Abhängigkeit vom Repository: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.if-conditions-table-entry %} | Verwenden einer Matrix zum Erstellen verschiedener Testkonfigurationen: | [`matrix`](/actions/using-jobs/using-a-build-matrix-for-your-jobs)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Zwischenspeichern von Abhängigkeiten: | [`actions/cache`](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows)| | Ausführen von Tests auf dem Runner: | `npm test`|

## Beispielworkflow

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

## Grundlegendes zum Beispiel

 {% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%"><b>Code</b></th>
    <th style="width:40%"><b>Erklärung</b></th>
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

Mit dem `on`-Schlüsselwort kannst du die bei Ausführung des Workflows ausgelösten Ereignisse definieren. Du kannst hier mehrere Ereignisse definieren. Weitere Informationen findest du unter [Auslösen eines Workflows](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

Füge das `workflow_dispatch`-Ereignis hinzu, wenn du diesen Workflow manuell auf der Benutzeroberfläche ausführen möchtest. Weitere Informationen findest du unter [`workflow_dispatch`](/actions/reference/events-that-trigger-workflows#workflow_dispatch).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

Füge das `pull_request`-Ereignis hinzu, sodass der Workflow jedes Mal automatisch ausgeführt wird, wenn ein Pull Request erstellt oder aktualisiert wird. Weitere Informationen findest du unter [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request).
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

Füge das `push`-Ereignis hinzu, sodass der Workflow jedes Mal automatisch ausgeführt wird, wenn ein Commit an einen Branch gepusht wird, der mit dem Filter `main` übereinstimmt. Weitere Informationen findest du unter [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
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

Ändert die für `GITHUB_TOKEN` gewährten Standardberechtigungen. Dies variiert je nach den Anforderungen deines Workflows. Weitere Informationen findest du unter [Zuweisen von Berechtigungen zu Aufträgen](/actions/using-jobs/assigning-permissions-to-jobs).
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

Erstellt eine Parallelitätsgruppe für bestimmte Ereignisse und verwendet den `||`-Operator zum Definieren von Fallbackwerten. Weitere Informationen findest du unter [Verwenden von Parallelität](/actions/using-jobs/using-concurrency).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

Bricht alle derzeit ausgeführten Aufträge oder Workflows in derselben Parallelitätsgruppe ab.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Gruppiert alle in der Workflowdatei ausgeführten Aufträge.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  test:
```
</td>
<td>

Definiert einen Auftrag mit der ID `test`, die innerhalb des `jobs`-Schlüssels gespeichert ist.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
```
</td>
<td>

Konfiguriert den Auftrag abhängig von dem Repository, das den Workflow ausführt, zur Ausführung auf einem von {% data variables.product.prodname_dotcom %} gehosteten oder selbstgehosteten Runner. In diesem Beispiel wird der Auftrag auf einem selbstgehosteten Runner ausgeführt, wenn das Repository mit `docs-internal` benannt ist und sich innerhalb der `github`-Organisation befindet. Wenn das Repository nicht mit diesem Pfad übereinstimmt, wird er auf einem von {% data variables.product.prodname_dotcom %} gehosteten `ubuntu-latest`-Runner ausgeführt. Weitere Informationen zu diesen Optionen findest du unter [Auswählen des Runners für einen Auftrag](/actions/using-jobs/choosing-the-runner-for-a-job).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    timeout-minutes: 60
```
</td>
<td>

Legt die maximale Anzahl von Minuten fest, die der Auftrag ausgeführt werden kann, bevor er automatisch abgebrochen wird. Weitere Informationen findest du unter [`timeout-minutes`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    strategy:
```
</td>
<td>
  In diesem Abschnitt wird die Buildmatrix für deine Aufträge definiert.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      fail-fast: false
```
</td>
<td>

Einstellung `fail-fast` bis `false` verhindert, dass {% data variables.product.prodname_dotcom %} alle in Bearbeitung befindliche Aufträge abbricht, wenn ein Matrixauftrag fehlschlägt.
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

Erstellt eine Matrix namens `test-group` mit einem Array von Testgruppen. Diese Werte entsprechen den Namen von Testgruppen, die von `npm test` ausgeführt werden.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Gruppiert alle Schritte, die als Teil des `test`-Auftrags ausgeführt werden. Jeder Auftrag in einem Workflow verfügt über einen eigenen `steps`-Abschnitt.
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

Das `uses`-Schlüsselwort weist den Auftrag an, die Aktion mit dem Namen `actions/checkout` abzurufen. Mit dieser Aktion wird dein Repository ausgecheckt und in den Runner heruntergeladen. Dadurch kannst du Aktionen für deinen Code ausführen (z. B. Testtools). Du musst die Auscheckaktion jedes Mal verwenden, wenn dein Workflow mit dem Code des Repositorys ausgeführt wird, oder du eine im Repository definierte Aktion verwendest. Einige zusätzliche Optionen werden der Aktion mithilfe des `with`-Schlüssels zur Verfügung gestellt.
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

Wenn das aktuelle Repository das Repository `github/docs-internal` ist, wird in diesem Schritt Aktion `actions/github-script` verwendet, um ein Skript auszuführen, mit dem überprüft wird, ob ein Branch namens `docs-early-access` aufgerufen wird.
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

Wenn das aktuelle Repository das Repository `github/docs-internal` ist, wird in diesem Schritt der Branch aus dem `github/docs-early-access` überprüft, der im vorherigen Schritt identifiziert wurde.
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

Wenn das aktuelle Repository das Repository `github/docs-internal` ist, wird in diesem Schritt das Schlüsselwort `run` verwendet, um Shellbefehle auszuführen, mit denen die Ordner von Repository `docs-early-access` in die Ordner des Hauptrepositorys verschoben werden.
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

In diesem Schritt wird ein Befehl zum Auschecken von LFS-Objekten aus dem Repository ausgeführt.
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

In diesem Schritt wird die Aktion `trilom/file-changes-action` verwendet, um die Dateien im Pull Request zu sammeln, sodass sie im nächsten Schritt analysiert werden können. Dieses Beispiel wird mit `a6ca26c14274c33b15e6499323aac178af06ad4b`-SHA einer bestimmten Version der Aktion angeheftet.
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

In diesem Schritt wird ein Shellbefehl ausgeführt, der anhand einer Ausgabe aus dem vorherigen Schritt eine Datei erstellt, die die Liste der im Pull Request geänderten Dateien enthält.
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

In diesem Schritt wird mit der Aktion `actions/setup-node` die angegebene Version des `node`-Softwarepakets auf dem Runner installiert. Dadurch erhältst du Zugriff auf den `npm`-Befehl.
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

In diesem Schritt wird der Shellbefehl `npm ci` ausgeführt, um die npm-Softwarepakete für das Projekt zu installieren.
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

In diesem Schritt wird die Aktion `actions/cache` verwendet, um den Next.js-Build zwischenzuspeichern, sodass der Workflow versucht, einen Cache des Builds abzurufen, statt ihn jedes Mal von Grund auf neu zu erstellen. Weitere Informationen findest du unter [Zwischenspeichern von Abhängigkeiten zum Beschleunigen von Workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).
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

In diesem Schritt wird das Buildskript ausgeführt.
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

In diesem Schritt werden die Tests mithilfe von `npm test` ausgeführt, und die Testmatrix stellt für jeden Auftrag in der Matrix einen anderen Wert für {% raw %}`${{ matrix.test-group }}`{% endraw %} bereit. Dabei wird anhand der Umgebungsvariable `DIFF_FILE` festgestellt, welche Dateien geändert wurden, und die Umgebungsvariable für die `CHANGELOG_CACHE_FILE_PATH` Changelog-Cachedatei verwendet.
</td>
</tr>
</tbody>
</table>

## Nächste Schritte

{% data reusables.actions.learning-actions %}
