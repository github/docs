---
title: Automatizar al Dependabot con las GitHub Actions
intro: 'Ejemplos de cómo puedes utilizar las {% data variables.product.prodname_actions %} para automatizar las tareas comunes relacionadas con el {% data variables.product.prodname_dependabot %}.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Utiliza el Dependabot con las acciones
redirect_from:
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## Acerca del {% data variables.product.prodname_dependabot %} y de las {% data variables.product.prodname_actions %}

El {% data variables.product.prodname_dependabot %} crea las solicitudes de cambios para mantener actualizadas tus dependencias y puedes utilizar las {% data variables.product.prodname_actions %} para llevar a cabo tareas automatizadas cuando se creen estas solicitudes de cambios. Por ejemplo, recupera artefactos adicionales, agrega etiquetas, ejecuta pruebas o modifica la solicitud de cambios de cualquier otra forma.

## Responder a los eventos

El {% data variables.product.prodname_dependabot %} puede activar flujos de trabajo de las {% data variables.product.prodname_actions %} en sus solicitudes de cambios y comentarios; sin embargo, algunos eventos se tratan de forma distinta.

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5792 %}
Para el caso de los flujos de trabajo que inicia el {% data variables.product.prodname_dependabot %} (`github.actor == "dependabot[bot]"`) y que utilizan los eventos `pull_request`, `pull_request_review`, `pull_request_review_comment`, `push`, `create`, `deployment` y `deployment_status`, aplican las siguientes restricciones:
{% endif %}

- {% ifversion ghes = 3.3 %} El `GITHUB_TOKEN` tiene permisos de solo lectura, a menos de que tu adminsitrador haya eliminado las restricciones.{% else %} El `GITHUB_TOKEN` tiene permisos de solo lectura predeterminadamente.{% endif %}
- {% ifversion ghes = 3.3 %}No se puede acceder a los secretos a menos de que tu administrador haya eliminado las restricciones.{% else %}Los secretos se llenan desde los secretos del {% data variables.product.prodname_dependabot %}. Los secretos de las {% data variables.product.prodname_actions %} no están disponibles.{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5792 %}
Para el caso de los flujos de trabajo que inicia el {% data variables.product.prodname_dependabot %}(`github.actor == "dependabot[bot]"`) y utilizan el evento `pull_request_target`, si {% data variables.product.prodname_dependabot %} (`github.actor == "dependabot[bot]"`) creó la ref base de la solicitud de cambios, entonces el `GITHUB_TOKEN` será de solo lectura y los secretos no estarán disponibles.
{% endif %}

Para obtener màs informaciòn, consulta la secciòn "[Mantener seguras tus GitHub Actions y flujos de trabajo: Prevenir solicitudes de tipo pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/)".

{% ifversion fpt or ghec or ghes > 3.3 %}

### Cambiar los permisos de `GITHUB_TOKEN`

Predeterminadamente, los flujos de trabajo de las {% data variables.product.prodname_actions %} que activa el {% data variables.product.prodname_dependabot %} obtendrán un `GITHUB_TOKEN` con permisos de solo lectura. Puedes utilizar la llave de `permissions` en tu flujo de trabajo para incrementar el acceso del token:

{% raw %}

```yaml
name: CI
on: pull_request

# Set the access for individual scopes, or use permissions: write-all
permissions:
  pull-requests: write
  issues: write
  repository-projects: write
  ...

jobs:
  ...
```

{% endraw %}

Para obtener màs informaciòn, consulta la secciòn "[Modificar los permisos para el GITHUB_TOKEN](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token)".

### Acceder a los secretos

Cuando un evento del {% data variables.product.prodname_dependabot %} activa un flujo de trabajo, los únicos secretos disponibles para dicho flujo de trabajo son los del {% data variables.product.prodname_dependabot %}. Los secretos de las {% data variables.product.prodname_actions %} no están disponibles. Por lo tanto, debes almacenar cualquier secreto que utilice un flujo de trabajo activado mediante los eventos del {% data variables.product.prodname_dependabot %} como secretos del {% data variables.product.prodname_dependabot %}. Para obtener más información, consulta la sección "[Administrar los secretos cifrados del Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)".

Los secretos del {% data variables.product.prodname_dependabot %} se agregan al contexto de `secrets` y se referencian utilizando exactamente la misma sintaxis que la de los secretos para las {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow)".

Si tienes un flujo de trabajo que se activará mediante el {% data variables.product.prodname_dependabot %} y también mediante otros actores, la solución más simple es almacenar el token con los permisos requeridos en una acción y en un secreto del {% data variables.product.prodname_dependabot %} con nombres idénticos. Entonces, el flujo de trabajo puede incluir una llamada simple a estos secretos. Si el secreto del {% data variables.product.prodname_dependabot %} tiene un nombre diferente, utiliza condiciones para especificar los secretos correctos para que los utilicen los diferentes actores. Para ver ejemplos que utilizan condiciones, consulta la sección de "[Automatizaciones comunes](#common-dependabot-automations)" a continuación.

Para acceder a un registro de contenedor privado en AWS con un nombre de usuario y contraseña, un flujo de trabajo deberá incluir un secreto para el `username` y la `password`. En el siguiente ejemplo, cuando el {% data variables.product.prodname_dependabot %} activa el flujo de trabajo, se utilizan los secretos del {% data variables.product.prodname_dependabot %} con los nombres `READONLY_AWS_ACCESS_KEY_ID` y `READONLY_AWS_ACCESS_KEY`. Si otro actor activa el flujo de trabajo, se utilizarán los secretos de las acciones con estos nombres.

```yaml
name: CI
on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      - name: Login to private container registry for dependencies
        uses: docker/login-action@v1
        with:
          registry: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
          username: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY_ID }}{% endraw %}
          password: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY }}{% endraw %}

      - name: Build the Docker image
        run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
```

{% endif %}

{% ifversion ghes = 3.3 %}

{% note %}

**Nota:** Tu administrador de sitio puede anular estas restricciones para {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Solucionar los problemas de las {% data variables.product.prodname_actions %} en tu empresa](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#troubleshooting-failures-when-dependabot-triggers-existing-workflows)".

Si se eliminan las restricciones, cuando el {% data variables.product.prodname_dependabot %} active un flujo de trabajo, este tendrá acceso a los secretos de las {% data variables.product.prodname_actions %} y podrá utilizar el término `permissions` para incrementar el alcance predeterminado del `GITHUB_TOKEN` desde el acceso de solo lectura. Puedes ignorar los pasos específicos en las secciones de "Eventos de manejo de `pull_request`" y de "Eventos de manejo de `push`", ya que esto ya no aplica.

{% endnote %}

### Manejar los eventos de `pull_request`

Si tu flujo de trabajo necesita acceso a los secretos o a un `GITHUB_TOKEN` con permisos de escritura, tienes dos opciones: utilizar `pull_request_target`, o utilizar dos flujos de trabajo separados. En esta sección, describiremos a detalle cómo utilizar `pull_request_target` y utilizaremos los dos siguientes flujos de trabajo en cómo "[Manejar eventos `push`](#handling-push-events)".

Debajo hay un ejemplo simple de un flujo de trabajo de una `pull_request` que podría estar fallando ahora:

```yaml
### This workflow now has no secrets and a read-only token
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # Always check the actor is Dependabot to prevent your workflow from failing on non-Dependabot PRs
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
```

Puedes reemplazar a `pull_request` con `pull_request_target`, el cual se utiliza para las solicitudes de cambio de las bifurcaciones y revisar explícitamente el `HEAD` de la solicitud de cambios.

{% warning %}

**Advertencia:** El utilizar `pull_request_target` como sustituto de `pull_request` de expone a un comportamiento inseguro. Te recomendamos utilizar el método de dos flujos de trabajo de acuerdo con lo que se describe a continuación en "[Administrar eventos `push`](#handling-push-events)".

{% endwarning %}

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
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          # Check out the pull request HEAD
          ref: {% raw %}${{ github.event.pull_request.head.sha }}{% endraw %}
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

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

{% endif %}

### Volver a ejecutar un flujo de trabajo manualmente

También puedes volver a ejecutar un flujo de trabajo fallido del Dependabot manualmente y este seguirá ejecutándose con un token de lectura-escritura y con acceso a los secretos. Antes de volver a ejecutar los flujos de trabajo fallidos manualmente, siempre debes verificar la dependencia que se está actualizando para asegurarte de que el cambio no introduzca ningún comportamiento imprevisto o malicioso.

## Automatizaciones comunes del Dependabot

Aquí mostramos varios escenarios comunes que pueden automatizarse utilizando las {% data variables.product.prodname_actions %}.

{% ifversion ghes = 3.3 %}

{% note %}

**Nota:** Si tu administrador de sitio anuló las restricciones del {% data variables.product.prodname_dependabot %} en {% data variables.product.product_location %}, puedes utilizar `pull_request` en vez de `pull_request_target` en los siguientes flujos de trabajo.

{% endnote %}

{% endif %}

### Recuperar metadatos de una solicitud de cambios

Automatizar mucho requiere saber información del contenido de la solicitud de cambios: cuál era el nombre de la dependencia, si es una dependencia productva y si es una actualización de parche menor o mayor.

La acción `dependabot/fetch-metadata` te proporciona toda esta información:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot fetch metadata
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
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.dependabot-metadata.outputs.dependency-names
      #  - steps.dependabot-metadata.outputs.dependency-type
      #  - steps.dependabot-metadata.outputs.update-type      
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request

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

{% endif %}

Para obtener más información, consulta el repositorio [`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata).

### Etiquetar una solicitud de cambios

Si tienes otros flujos de trabajo de automatización o clasificación que se basen en etiquetas de {% data variables.product.prodname_dotcom %}, puedes configurar una acción para asignar etiquetas con base en los metadatos proporcionados.

Por ejemplo, si quieres etiquetar todas las actualizaciones de las dependencias de producción con una etiqueta:

{% ifversion ghes = 3.3 %}

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
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.dependabot-metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request

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

{% endif %}

### Aprobar una solicitud de cambios

Si quieres aprobar las solicitudes de cambios del Dependabot automáticamente, puedes utilizar el {% data variables.product.prodname_cli %} en un flujo de trabajo:

{% ifversion ghes = 3.3 %}

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
        id: dependabot-metadata
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

{% else %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request

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

{% endif %}

### Habilita la fusión automática en una solicitud de cambios

Si quieres fusionar tus solicitudes de cambios automáticamente, puedes utilizar la funcionalidad de fusión automática de {% data variables.product.prodname_dotcom %}. Esto habilita a la solicitud de cambios para que se fusione cuando se cumpla con todas las pruebas y aprobaciones requeridas. For more information on auto-merge, see "[Automatically merging a pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)."

Aquí tienes un ejemplo de cómo habilitar la fusión automática para todas las actualizaciones de parche en `my-dependency`:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  contents: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.dependabot-metadata.outputs.dependency-names, 'my-dependency') && steps.dependabot-metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request

permissions:
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

{% endif %}

## Solucionar los problemas de las ejecuciones de flujo de trabajo fallidas

Si tu ejecución de flujo de trabajo falla, verifica lo siguiente:

{% ifversion ghes = 3.3 %}

- Estás ejecutando el flujo de trabajo únicamente cuando el actor adecuado lo activa.
- Estás verificando la `ref` de tu `pull_request`.
- No estás intentando acceder a los secretos desde un evento de `pull_request`, `pull_request_review`, `pull_request_review_comment`, o `push` activado por el Dependabot.
- No estás intentando llevar a cabo ninguna acción de `write` desde dentro de un evento de tipo `pull_request`, `pull_request_review`, `pull_request_review_comment`, o `push` que haya activado el Dependabot.

{% else %}

- Estás ejecutando el flujo de trabajo únicamente cuando el actor adecuado lo activa.
- Estás verificando la `ref` de tu `pull_request`.
- Tus secretos están disponibles en los secretos del {% data variables.product.prodname_dependabot %}, en vez de como secretos de las {% data variables.product.prodname_actions %}.
- Si tienes un `GITHUB_TOKEN` con los permisos correctos.

{% endif %}

Para obtener más información sobre cómo escribir y depurar las {% data variables.product.prodname_actions %}, consulta la sección "[Aprender sobre las Acciones de GitHub](/actions/learn-github-actions)".
