---
title: Utilizar scripts para probar tu código en un ejecutor
shortTitle: Utilizar scripts para probar tu código en un ejecutor
intro: 'Cómo utilizar características esenciales de {% data variables.product.prodname_actions %} para una integración continua (IC).'
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

## Resumen de ejemplo

{% data reusables.actions.example-workflow-intro-ci %} Cuando se activa este flujo de trabajo, este ejecuta automáticamente un script que verifica si el sitio de {% data variables.product.prodname_dotcom %} Docs tiene enlaces rotos.

{% data reusables.actions.example-diagram-intro %}

![Diagrama de resumen de los pasos del flujo de trabajo](/assets/images/help/images/overview-actions-using-scripts-ci-example.png)

## Características utilizadas en este ejemplo

{% data reusables.actions.example-table-intro %}

| **Característica** | **Implementación** |
| ------------------ | ------------------ |
|                    |                    |
{% data reusables.actions.push-table-entry %}
{% data reusables.actions.pull-request-table-entry %}
{% data reusables.actions.workflow-dispatch-table-entry %}
{% data reusables.actions.permissions-table-entry %}
{% data reusables.actions.concurrency-table-entry %}
| Ejecutar el job en ejecutores diferentes, dependiendo del repositorio: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)|
{% data reusables.actions.checkout-action-table-entry %}
{% data reusables.actions.setup-node-table-entry %}
| Utilizar una acción de terceros: | [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)| | Ejecutar un script en el ejecutor: | Utilizando `./script/rendered-content-link-checker.mjs` |

## Ejemplo de flujo de trabajo

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

La palabra clave `on` te permite definir los eventos que se activan cuando se ejecuta el flujo de trabajo. Puedes definir eventos múltiples aquí. Para obtener más información, consulta la sección "[Activar un flujo de trabajo](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

Agrega el evento `workflow_dispatch` si quieres poder ejecutar este flujo de trabajo manualmente desde la IU. Para obtener más información, consulta [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
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

Agrega el evento `push` para que el flujo de trabajo se ejecute automáticamente cada vez que se suba una confirmación a una rama llamada `main`. Para obtener más información, consulta [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

Agrega el evento `pull_request` para que el flujo de trabajo se ejecute automáticamente cada que se cree o actualice una solicitud de cambios. Para obtener más información, consulta [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request).
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

{% raw %}
```yaml{:copy}
concurrency:
  group: '${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'
```
{% endraw %}
</td>
<td>

Crea un grupo de concurrencia para los eventos específicos y utiliza el operador `||` para definir los valores de reserva. Para obtener más información, consulta la sección "[Utilizar concurrencia](/actions/using-jobs/using-concurrency)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

Cancela cualquier job o flujo de trabajo concurrentes en el mismo grupo de concurrencia.
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
  check-links:
```
</td>
<td>

Define un job con la ID `check-links` que se almacena dentro de la llave `jobs`.
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

Configura el job para ejecutarse en un ejecutor hospedado en {% data variables.product.prodname_dotcom %} o en un ejecutor auto-hospedado, dependiendo del repositorio que ejecuta el flujo de trabajo. En este ejemplo, el job se ejecutará en un ejecutor auto-hospedado si se nombra al repositorio `docs-internal` y está dentro de la organización `github`. Si el repositorio no empata con esta ruta, entonces se ejecutará en un ejecutor `ubuntu-latest` hospedado por {% data variables.product.prodname_dotcom %}. Para obtener más información sobre estas opciones, consulta la sección "[Elegir el ejecutor para un job](/actions/using-jobs/choosing-the-runner-for-a-job)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Agrupa a todos los pasos que se ejecutarán como parte del job `check-links`. Cada job en un flujo de trabajo tiene su propia sección de `steps`.
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

La palabra clave `uses` le indica al job recuperar la acción llamada `actions/checkout`. Esta es una acción que revisa tu repositorio y lo descarga al ejecutor, lo que te permite ejecutar acciones contra tu código (tales como las herramientas de prueba). Debes utilizar la acción de verificación cada que tu flujo de trabajo se ejecute contra el código del repositorio o cada que estés utilizando una acción definida en el repositorio.
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

Este paso utiliza la acción `actions/setup-node` para instalar la versión específica del paquete de software de Node.js en el ejecutor, lo cual te da acceso al comando `npm`.
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

La palabra clave `run` le indica al job ejecutar un comando en el ejecutor. En este caso, `npm ci` se utiliza para instalar los paquetes de software de npm para el proyecto.
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

Utiliza la acción `trilom/file-changes-action` para juntar todos los archivos que cambiaron. Este ejemplo se fija a una versión específica de la acción utilizando el SHA `a6ca26c14274c33b15e6499323aac178af06ad4b`.
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

Lista el contenido de `files.json`. Esto se podrá ver en la bitácora de ejecución de flujo de trabajo y podrá ser útil para la depuración.
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

Este paso usa el comando `run` para ejecutar un script que está almacenado en el repositorio en `script/rendered-content-link-checker.mjs` y pasa todos los parámetros que necesita para ejecutarse.
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

Este paso también utiliza el comando `run` para ejecutar un script que se almacena en el repositorio en `script/rendered-content-link-checker.mjs` y pasa un conjunto de parámetros diferentes.
</tr>

</tbody>
</table>

## Pasos siguientes

{% data reusables.actions.learning-actions %}
