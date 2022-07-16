---
title: 'Using concurrency, expressions, and a test matrix'
shortTitle: 'Using concurrency, expressions, and a test matrix'
intro: 'Cómo utilizar características avanzadas de {% data variables.product.prodname_actions %} para la integración continua (IC).'
versions:
  fpt: '*'
  ghes: '>= 3.5'
  ghae: issue-4925
  ghec: '*'
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen de ejemplo

{% data reusables.actions.example-workflow-intro-ci %} When this workflow is triggered, it tests your code using a matrix of test combinations with `npm test`.

{% data reusables.actions.example-diagram-intro %}

![Diagrama de resumen de los pasos del flujo de trabajo](/assets/images/help/images/overview-actions-using-concurrency-expressions-and-a-test-matrix.png)

## Características utilizadas en este ejemplo

{% data reusables.actions.example-table-intro %}

| **Característica** | **Implementación** |
| ------------------ | ------------------ |
|                    |                    |
{% data reusables.actions.workflow-dispatch-table-entry %}
{% data reusables.actions.pull-request-table-entry %}
{% data reusables.actions.cron-table-entry %}
{% data reusables.actions.permissions-table-entry %}
{% data reusables.actions.concurrency-table-entry %}
| Running the job on different runners, depending on the repository: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)|
{% data reusables.actions.if-conditions-table-entry %}
| Using a matrix to create different test configurations: | [`matrix`](/actions/using-jobs/using-a-build-matrix-for-your-jobs)|
{% data reusables.actions.checkout-action-table-entry %}
{% data reusables.actions.setup-node-table-entry %}
| Caching dependencies: | [`actions/cache`](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows)| | Running tests on the runner: | `npm test`|

## Ejemplo de flujo de trabajo

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
      - gh-readonly-queue/main/**

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

## Cómo entender el ejemplo

 {% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%"><b>Código</b></th>
    <th style="width:40%"><b>Explicación</b></th>
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

The `on` keyword lets you define the events that trigger when the workflow is run. You can define multiple events here. For more information, see "[Triggering a workflow](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)."
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

Add the `workflow_dispatch` event if you want to be able to manually run this workflow in the UI. For more information, see [`workflow_dispatch`](/actions/reference/events-that-trigger-workflows#workflow_dispatch).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

Add the `pull_request` event, so that the workflow runs automatically every time a pull request is created or updated. For more information, see [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  push:
    branches:
      - gh-readonly-queue/main/**
```
</td>
<td>

Add the `push` event, so that the workflow runs automatically every time a commit is pushed to a branch matching the filter `gh-readonly-queue/main/**`. For more information, see [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
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

Modifica los permisos predeterminados que se otorgan al `GITHUB_TOKEN`. Esto variará dependiendo de las necesidades de tu flujo de trabajo. Para obtener más información, consulta la sección "[Asignar permisos a los jobs](/actions/using-jobs/assigning-permissions-to-jobs)".
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

Creates a concurrency group for specific events, and uses the `||` operator to define fallback values. For more information, see "[Using concurrency](/actions/using-jobs/using-concurrency)."
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

Cancels any currently running job or workflow in the same concurrency group.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Agrupa todos los jobs que se ejecutan en el archivo de flujo de trabajo.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  test:
```
</td>
<td>

Defines a job with the ID `test` that is stored within the `jobs` key.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
```
</td>
<td>

Configures the job to run on a {% data variables.product.prodname_dotcom %}-hosted runner or a self-hosted runner, depending on the repository running the workflow. In this example, the job will run on a self-hosted runner if the repository is named `docs-internal` and is within the `github` organization. If the repository doesn't match this path, then it will run on an `ubuntu-latest` runner hosted by {% data variables.product.prodname_dotcom %}. For more information on these options see "[Choosing the runner for a job](/actions/using-jobs/choosing-the-runner-for-a-job)."
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    timeout-minutes: 60
```
</td>
<td>

Sets the maximum number of minutes to let the job run before it is automatically canceled. For more information, see [`timeout-minutes`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    strategy:
```
</td>
<td>
  This section defines the build matrix for your jobs.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      fail-fast: false
```
</td>
<td>

Setting `fail-fast` to `false` prevents {% data variables.product.prodname_dotcom %} from cancelling all in-progress jobs if any matrix job fails.
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

Creates a matrix named `test-group`, with an array of test groups. These values match the names of test groups that will be run by `npm test`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Groups together all the steps that will run as part of the `test` job. Each job in a workflow has its own `steps` section.
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

La palabra clave `uses` le indica al job recuperar la acción llamada `actions/checkout`. Esta es una acción que revisa tu repositorio y lo descarga al ejecutor, lo que te permite ejecutar acciones contra tu código (tales como las herramientas de prueba). Debes utilizar la acción de verificación cada que tu flujo de trabajo se ejecute contra el código del repositorio o cada que estés utilizando una acción definida en el repositorio. Some extra options are provided to the action using the `with` key.
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

If the current repository is the `github/docs-internal` repository, this step uses the `actions/github-script` action to run a script to check if there is a branch called `docs-early-access`.
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

If the current repository is the `github/docs-internal` repository, this step checks out the branch from the `github/docs-early-access` that was identified in the previous step.
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

If the current repository is the `github/docs-internal` repository, this step uses the `run` keyword to execute shell commands to move the `docs-early-access` repository's folders into the main repository's folders.
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

This step runs a command to check out LFS objects from the repository.
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

This step uses the `trilom/file-changes-action` action to gather the files changed in the pull request, so they can be analyzed in the next step. This example is pinned to a specific version of the action, using the `a6ca26c14274c33b15e6499323aac178af06ad4b` SHA.
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

This step runs a shell command that uses an output from the previous step to create a file containing the list of files changed in the pull request.
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

Este paso utiliza la acción `actions/setup-node` para instalar la versión especificada del paquete de software `node` en el ejecutor, lo cuál te da acceso al comando `npm`.
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

This step runs the `npm ci` shell command to install the npm software packages for the project.
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

This step uses the `actions/cache` action to cache the Next.js build, so that the workflow will attempt to retrieve a cache of the build, and not rebuild it from scratch every time. For more information, see "[Caching dependencies to speed up workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)."
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

This step runs the build script.
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

This step runs the tests using `npm test`, and the test matrix provides a different value for {% raw %}`${{ matrix.test-group }}`{% endraw %} for each job in the matrix. It uses the `DIFF_FILE` environment variable to know which files have changed, and uses the `CHANGELOG_CACHE_FILE_PATH` environment variable for the changelog cache file.
</td>
</tr>
</tbody>
</table>

## Pasos siguientes

{% data reusables.actions.learning-actions %}
