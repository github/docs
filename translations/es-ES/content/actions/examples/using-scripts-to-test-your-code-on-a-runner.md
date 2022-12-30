---
title: Uso de scripts para probar el código en un ejecutor
shortTitle: Using scripts to test your code on a runner
intro: 'Procedimientos para usar características fundamentales de {% data variables.product.prodname_actions %} para la integración continua (CI).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: f313a294bc2515564787268112f064b72d339d32
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146749533'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Información general de ejemplo

{% data reusables.actions.example-workflow-intro-ci %} Cuando se desencadena este flujo de trabajo, ejecuta automáticamente un script que comprueba si el sitio de documentación de {% data variables.product.prodname_dotcom %} tiene vínculos rotos.

{% data reusables.actions.example-diagram-intro %}

![Diagrama general de los pasos del flujo de trabajo](/assets/images/help/images/overview-actions-using-scripts-ci-example.png)

## Características que se usan en este ejemplo

{% data reusables.actions.example-table-intro %}

| **Característica**  | **Implementación** |
| --- | --- | 
{% data reusables.actions.push-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | Ejecución del trabajo en diferentes ejecutores, en función del repositorio: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Uso de una acción de terceros: | [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)| | Ejecución de un script en el ejecutor: | Uso de `./script/rendered-content-link-checker.mjs` |

## Flujo de trabajo de ejemplo

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

La palabra clave `on` te permite definir los eventos que se desencadenan cuando se ejecuta el flujo de trabajo. Aquí puedes definir varios eventos. Para obtener más información, consulta "[Desencadenamiento de un flujo de trabajo](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

Agrega el evento `workflow_dispatch` si quieres poder ejecutar manualmente este flujo de trabajo desde la interfaz de usuario. Para más información, vea [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
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

Agrega el evento `push` para que el flujo de trabajo se ejecute automáticamente cada vez que se inserta una confirmación en una rama llamada `main`. Para más información, vea [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
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
permissions:
  contents: read
  pull-requests: read
```
</td>
<td>

Modifica los permisos predeterminados concedidos a `GITHUB_TOKEN`. Esto variará en función de las necesidades del flujo de trabajo. Para obtener más información, consulta "[Asignación de permisos a trabajos](/actions/using-jobs/assigning-permissions-to-jobs)".
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
  check-links:
```
</td>
<td>

Define un trabajo con el id. `check-links` que se almacena dentro de la clave `jobs`.
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

Configura el trabajo para que se ejecute en un ejecutor hospedado de {% data variables.product.prodname_dotcom %} o en un ejecutor autohospedado, en función del repositorio que ejecuta el flujo de trabajo. En este ejemplo, el trabajo se ejecutará en un ejecutor autohospedado si el repositorio tiene el nombre `docs-internal` y está dentro de la organización `github`. Si el repositorio no coincide con esta ruta de acceso, se ejecutará en un ejecutor `ubuntu-latest` hospedado en {% data variables.product.prodname_dotcom %}. Para obtener más información sobre estas opciones, consulta "[Elección del ejecutor para un trabajo](/actions/using-jobs/choosing-the-runner-for-a-job)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Agrupa todos los pasos que se ejecutarán como parte del trabajo `check-links`. Cada trabajo de un flujo de trabajo tiene su propia sección `steps`.
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

La palabra clave `uses` indica al trabajo que recupere la acción denominada `actions/checkout`. Esta es una acción que revisa tu repositorio y lo descarga al ejecutor, lo que te permite ejecutar acciones contra tu código (tales como las herramientas de prueba). Debes utilizar la acción de verificación cada que tu flujo de trabajo se ejecute contra el código del repositorio o cada que estés utilizando una acción definida en el repositorio.
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

En este paso, se usa la acción `actions/setup-node` para instalar la versión especificada del paquete de software Node.js en el ejecutor, lo que te da acceso al comando `npm`.
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

La palabra clave `run` indica al trabajo que ejecute un comando en el ejecutor. En este caso, `npm ci` se usa para instalar los paquetes de software npm del proyecto.
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

Usa la acción `trilom/file-changes-action` para recopilar todos los archivos modificados. Este ejemplo se ancla a una versión específica de la acción mediante el SHA `a6ca26c14274c33b15e6499323aac178af06ad4b`.
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

Muestra una lista del contenido de `files.json`. Esto será visible en el registro de la ejecución del flujo de trabajo y puede ser útil para la depuración.
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

En este paso se usa el comando `run` para ejecutar un script almacenado en el repositorio en `script/rendered-content-link-checker.mjs` y se pasan todos los parámetros que necesita ejecutar.
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

En este paso también se usa el comando `run` para ejecutar un script almacenado en el repositorio en `script/rendered-content-link-checker.mjs` y se pasa un conjunto de parámetros distinto.
</tr>

</tbody>
</table>

## Pasos siguientes

{% data reusables.actions.learning-actions %}
