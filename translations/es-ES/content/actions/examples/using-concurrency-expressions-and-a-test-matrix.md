---
title: 'Uso de simultaneidad, expresiones y una matriz de pruebas'
shortTitle: 'Using concurrency, expressions, and a test matrix'
intro: 'Cómo usar características avanzadas de {% data variables.product.prodname_actions %} para la integración continua (CI).'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496584'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Información general de ejemplo

{% data reusables.actions.example-workflow-intro-ci %} Cuando se desencadena este flujo de trabajo, prueba el código mediante una matriz de combinaciones de pruebas con `npm test`.

{% data reusables.actions.example-diagram-intro %}

![Diagrama general de los pasos del flujo de trabajo](/assets/images/help/images/overview-actions-using-concurrency-expressions-and-a-test-matrix.png)

## Características que se usan en este ejemplo

{% data reusables.actions.example-table-intro %}

| **Característica**  | **Implementación** |
| --- | --- |
{% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | Ejecución del trabajo en ejecutores diferentes en función del repositorio: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.if-conditions-table-entry %} | Uso de una matriz para crear configuraciones de prueba diferentes: | [`matrix`](/actions/using-jobs/using-a-build-matrix-for-your-jobs)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Almacenamiento en caché de las dependencias: | [`actions/cache`](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows)| | Ejecución de las pruebas en el ejecutor: | `npm test`|

## Flujo de trabajo de ejemplo

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

## Descripción del ejemplo

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

La palabra clave `on` te permite definir los eventos que se desencadenan cuando se ejecuta el flujo de trabajo. Aquí puedes definir varios eventos. Para más información, consulta "[Desencadenamiento de un flujo de trabajo](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

Agrega el evento `workflow_dispatch` si quieres ejecutar manualmente este flujo de trabajo en la interfaz de usuario. Para más información, vea [`workflow_dispatch`](/actions/reference/events-that-trigger-workflows#workflow_dispatch).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

Agrega el evento `pull_request` para que el flujo de trabajo se ejecute automáticamente cada vez que se crea o actualiza una solicitud de incorporación de cambios. Para más información, vea [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request).
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

Agrega el evento `push` para que el flujo de trabajo se ejecute automáticamente cada vez que se inserta una confirmación en una rama que coincida con el filtro `main`. Para más información, vea [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
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

Modifica los permisos predeterminados concedidos a `GITHUB_TOKEN`. Esto variará en función de las necesidades del flujo de trabajo. Para más información, consulta "[Asignación de permisos a trabajos](/actions/using-jobs/assigning-permissions-to-jobs)".
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

Crea un grupo de simultaneidad para eventos específicos y utiliza el operador `||` para definir los valores de reserva. Para más información, consulta "[Uso de simultaneidad](/actions/using-jobs/using-concurrency)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

Cancela cualquier flujo de trabajo o trabajo actualmente en ejecución en el mismo grupo de simultaneidad.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Agrupa todos los trabajos que se ejecutan en el archivo de flujo de trabajo.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  test:
```
</td>
<td>

Define un trabajo con el identificador `test` que se almacena dentro de la clave `jobs`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
```
</td>
<td>

Configura el trabajo para que se ejecute en un ejecutor hospedado en {% data variables.product.prodname_dotcom %} o en un ejecutor autohospedado en función del repositorio que ejecuta el flujo de trabajo. En este ejemplo, el trabajo se ejecutará en un ejecutor autohospedado si el repositorio tiene el nombre `docs-internal` y está dentro de la organización `github`. Si el repositorio no coincide con esta ruta de acceso, se ejecutará en un ejecutor `ubuntu-latest` hospedado en {% data variables.product.prodname_dotcom %}. Para más información sobre estas opciones, consulta "[Elección del ejecutor para un trabajo](/actions/using-jobs/choosing-the-runner-for-a-job)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    timeout-minutes: 60
```
</td>
<td>

Establece el número máximo de minutos para permitir que el trabajo se ejecute antes de que se cancele automáticamente. Para más información, vea [`timeout-minutes`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    strategy:
```
</td>
<td>
  En esta sección, se define la matriz de compilación de los trabajos.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      fail-fast: false
```
</td>
<td>

Cuando`fail-fast` se establece en `false`, se impide que {% data variables.product.prodname_dotcom %} cancele todos los trabajos en curso si se produce algún error en un trabajo de la matriz.
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

Crea una matriz denominada `test-group` con una matriz de grupos de pruebas. Estos valores coinciden con los nombres de los grupos de pruebas que `npm test` ejecutará.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Agrupa todos los pasos que se ejecutarán como parte del trabajo `test`. Cada trabajo de un flujo de trabajo tiene su propia sección `steps`.
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

La palabra clave `uses` indica al trabajo que recupere la acción denominada `actions/checkout`. Esta es una acción que revisa tu repositorio y lo descarga al ejecutor, lo que te permite ejecutar acciones contra tu código (tales como las herramientas de prueba). Debes utilizar la acción de verificación cada que tu flujo de trabajo se ejecute contra el código del repositorio o cada que estés utilizando una acción definida en el repositorio. Algunas opciones adicionales se proporcionan a la acción mediante la clave `with`.
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

Si el repositorio actual es el repositorio `github/docs-internal`, este paso usa la acción `actions/github-script` para ejecutar un script a fin de comprobar si hay una rama denominada `docs-early-access`.
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

Si el repositorio actual es el repositorio `github/docs-internal`, este paso extrae la rama del `github/docs-early-access` que se identificó en el paso anterior.
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

Si el repositorio actual es el repositorio`github/docs-internal`, este paso usa la palabra clave `run` para ejecutar comandos de shell para mover las carpetas del repositorio `docs-early-access` a las carpetas del repositorio principal.
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

En este paso, se ejecuta un comando para extraer objetos LFS del repositorio.
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

En ese paso, se usa la acción `trilom/file-changes-action` para recopilar los archivos modificados en la solicitud de incorporación de cambios a fin de que se los pueda analizar en el paso siguiente. Este ejemplo se ancla a una versión específica de la acción mediante el SHA `a6ca26c14274c33b15e6499323aac178af06ad4b`.
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

En este paso, se ejecuta un comando de shell que utiliza una salida del paso anterior para crear un archivo que contenga la lista de archivos modificados en la solicitud de incorporación de cambios.
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

En este paso, se usa la acción `actions/setup-node` para instalar la versión especificada del paquete de software `node` en el ejecutor, lo que te da acceso al comando `npm`.
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

En este paso, se ejecuta el comando de shell `npm ci` para instalar los paquetes de software npm para el proyecto.
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

En este paso, se usa la acción `actions/cache` para almacenar en caché la compilación Next.js de modo que el flujo de trabajo intente recuperar una caché de la compilación y no recompilarla de cero cada vez. Para más información, vea "[Almacenamiento en caché de dependencias para acelerar los flujos de trabajo](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".
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

En este paso, se ejecuta el script de compilación.
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

En este paso, se ejecutan las pruebas mediante `npm test` y la matriz de pruebas proporciona un valor distinto para {% raw %}`${{ matrix.test-group }}`{% endraw %} para cada trabajo de la matriz. Usa la variable de entorno `DIFF_FILE` para saber qué archivos se modificaron y la variable de entorno `CHANGELOG_CACHE_FILE_PATH` para el archivo de caché del registro de cambios.
</td>
</tr>
</tbody>
</table>

## Pasos siguientes

{% data reusables.actions.learning-actions %}
