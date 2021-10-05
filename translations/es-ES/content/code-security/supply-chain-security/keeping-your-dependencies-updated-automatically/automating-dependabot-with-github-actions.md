---
title: Automatizar al Dependabot con las GitHub Actions
intro: 'Ejemplos de cómo puedes utilizar las {% data variables.product.prodname_actions %} para automatizar las tareas comunes relacionadas con el {% data variables.product.prodname_dependabot %}.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Use Dependabot with actions
---

## Acerca del {% data variables.product.prodname_dependabot %} y de las {% data variables.product.prodname_actions %}

El {% data variables.product.prodname_dependabot %} crea las solicitudes de cambios para mantener actualizadas tus dependencias y puedes utilizar las {% data variables.product.prodname_actions %} para llevar a cabo tareas automatizadas cuando se creen estas solicitudes de cambios. Por ejemplo, recupera artefactos adicionales, agrega etiquetas, ejecuta pruebas o modifica la solicitud de cambios de cualquier otra forma.

## Responder a los eventos

El {% data variables.product.prodname_dependabot %} puede activar los flujos de trabajo de las {% data variables.product.prodname_actions %} en sus solicitudes de cambios y comentarios; sin embargo, debido a que los["Flujos de trabajo de las GitHub Actions que activen las solicitudes de cambios del Dependabot se ejecutarán con permisos de solo lectura"](https://github.blog/changelog/2021-02-19-github-actions-workflows-triggered-by-dependabot-prs-will-run-with-read-only-permissions/), se tratará a algunos eventos de forma distinta.

En el caso de los flujos de trabajos que inició el {% data variables.product.prodname_dependabot %} (`github.actor == "dependabot[bot]"`) y que utilizan los eventos `pull_request`, `pull_request_review`, `pull_request_review_comment`, y `push`, aplicarán las siguientes restricciones:

- `GITHUB_TOKEN` tiene permisos de solo lectura.
- No se puede acceder a los secretos.

Para obtener màs informaciòn, consulta la secciòn "[Mantener seguras tus GitHub Actions y flujos de trabajo: Prevenir solicitudes de tipo pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/)".

### Manejar los eventos de `pull_request`

Si tu flujo de trabajo necesita acceso a los secretos o a un `GITHUB_TOKEN` con permisos de escritura, tienes dos opciones: utilizar `pull_request_target`, o utilizar dos flujos de trabajo separados. En esta sección, describiremos a detalle cómo utilizar `pull_request_target` y utilizaremos los dos siguientes flujos de trabajo en cómo "[Manejar eventos `push`](#handling-push-events)".

Debajo hay un ejemplo simple de un flujo de trabajo de una `pull_request` que podría estar fallando ahora:

{% raw %}
```yaml
### This workflow now has no secrets and a read-only token
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # Always check the actor is Dependabot to prevent your workflow from failing on non-Dependabot PRs
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: actions/checkout@v2
```
{% endraw %}

Puedes reemplazar a `pull_request` con `pull_request_target`, el cual se utiliza para las solicitudes de cambio de las bifurcaciones y revisar explícitamente el `HEAD` de la solicitud de cambios.

{% warning %}

**Advertencia:** El utilizar `pull_request_target` como sustituto de `pull_request` de expone a un comportamiento inseguro. Te recomendamos utilizar el método de dos flujos de trabajo de acuerdo con lo que se describe a continuación en "[Administrar eventos `push`](#handling-push-events)".

{% endwarning %}

{% raw %}
```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Workflow
on:
  pull_request_target

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: actions/checkout@v2
        with:
          # Check out the pull request HEAD
          ref: ${{ github.event.pull_request.head.sha }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

También se recomienda fuertemente que bajes el alcance de los permisos que otorgas al `GITHUB_TOKEN` para poder evitar que se fugue un token con más privilegios de lo necesario. Para obtener más información, consulta ña sección "[Permisos del `GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

### Manejar eventos `push`

Ya que no hay un equivalente de `pull_request_target` para los eventos `push`, tendrás que utilizar dos flujos de trabajo: uno no confiable que termine cargando artefactos, el cual activará un segundo flujo de trabajo que descargará los artefactos y seguirá procesándose.

El primer flujo de trabajo lleva a cabo cualquier trabajo no confiable:

{% raw %}
```yaml
### This workflow doesn't have access to secrets and has a read-only token
name: Dependabot Untrusted Workflow
on:
  push

jobs:
  check-dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: ...
```
{% endraw %}

El segundo flujo de trabajo llevará a cabo el trabajo confiable después de que el primero se complete exitosamente:

{% raw %}
```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Trusted Workflow
on:
  workflow_run:
    workflows: ["Dependabot Untrusted Workflow"]
    types: 
      - completed

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - uses: ...
```
{% endraw %}

### Volver a ejecutar un flujo de trabajo manualmente

También puedes volver a ejecutar un flujo de trabajo fallido del Dependabot manualmente y este seguirá ejecutándose con un token de lectura-escritura y con acceso a los secretos. Antes de volver a ejecutar los flujos de trabajo fallidos manualmente, siempre debes verificar la dependencia que se está actualizando para asegurarte de que el cambio no introduzca ningún comportamiento imprevisto o malicioso.

## Automatizaciones comunes del Dependabot

Aquí mostramos varios escenarios comunes que pueden automatizarse utilizando las {% data variables.product.prodname_actions %}.

### Recuperar metadatos de una solicitud de cambios

Automatizar mucho requiere saber información del contenido de la solicitud de cambios: cuál era el nombre de la dependencia, si es una dependencia productva y si es una actualización de parche menor o mayor.

La acción `dependabot/fetch-metadata` te proporciona toda esta información:

{% raw %}
```yaml
name: Dependabot auto-label
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.metadata.outputs.dependency-names
      #  - steps.metadata.outputs.dependency-type
      #  - steps.metadata.outputs.update-type      
```
{% endraw %}

Para obtener más información, consulta el repositorio [`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata).

### Etiquetar una solicitud de cambios

Si tienes otros flujos de trabajo de automatización o clasificación que se basen en etiquetas de {% data variables.product.prodname_dotcom %}, puedes configurar una acción para asignar etiquetas con base en los metadatos proporcionados.

Por ejemplo, si quieres etiquetar todas las actualizaciones de las dependencias de producción con una etiqueta:

{% raw %}
```yaml
name: Dependabot auto-label
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```
{% endraw %}

### Aprobar una solicitud de cambios

Si quieres aprobar las solicitudes de cambios del Dependabot automáticamente, puedes utilizar el {% data variables.product.prodname_cli %} en un flujo de trabajo:

{% raw %}
```yaml
name: Dependabot auto-approve
on: pull_request_target

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```
{% endraw %}

### Habilita la fusión automática en una solicitud de cambios

Si quieres fusionar tus solicitudes de cambios automáticamente, puedes utilizar la funcionalidad de fusión automática de {% data variables.product.prodname_dotcom %}. Esto habilita a la solicitud de cambios para que se fusione cuando se cumpla con todas las pruebas y aprobaciones requeridas. Para obtener más información sobre la fusión automática, consulta la sección "[Fusionar una solicitud de cambios automáticamente](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)".

Aquí tienes un ejemplo de cómo habilitar la fusión automática para todas las actualizaciones de parche en `my-dependency`:

{% raw %}
```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  pull-requests: write
  contents: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.metadata.outputs.dependency-names, 'my-dependency') && steps.metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```
{% endraw %}

## Solucionar los problemas de las ejecuciones de flujo de trabajo fallidas

Si tu ejecución de flujo de trabajo falla, verifica lo siguiente:

- Estás ejecutando el flujo de trabajo únicamente cuando el actor adecuado lo activa.
- Estás verificando la `ref` de tu `pull_request`.
- No estás intentando acceder a los secretos desde un evento de `pull_request`, `pull_request_review`, `pull_request_review_comment`, o `push` activado por el Dependabot.
- No estás intentando llevar a cabo ninguna acción de `write` desde dentro de un evento de tipo `pull_request`, `pull_request_review`, `pull_request_review_comment`, o `push` que haya activado el Dependabot.

Para obtener más información sobre cómo escribir y depurar las {% data variables.product.prodname_actions %}, consulta la sección "[Aprender sobre las Acciones de GitHub](/actions/learn-github-actions)".
