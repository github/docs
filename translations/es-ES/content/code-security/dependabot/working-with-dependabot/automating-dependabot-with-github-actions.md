---
title: Automatizar al Dependabot con las GitHub Actions
intro: 'Ejemplos de cómo puedes utilizar las {% data variables.product.prodname_actions %} para automatizar las tareas comunes relacionadas con el {% data variables.product.prodname_dependabot %}.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Use Dependabot with Actions
redirect_from:
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions
ms.openlocfilehash: 3280b42309b388c5faf2071d6e3a39d9a0e58474
ms.sourcegitcommit: 67aba5f277f3a8ef2ab1ccb14465ae486eabaa2b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165085'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Acerca del {% data variables.product.prodname_dependabot %} y de las {% data variables.product.prodname_actions %}

El {% data variables.product.prodname_dependabot %} crea las solicitudes de cambios para mantener actualizadas tus dependencias y puedes utilizar las {% data variables.product.prodname_actions %} para llevar a cabo tareas automatizadas cuando se creen estas solicitudes de cambios. Por ejemplo, recupera artefactos adicionales, agrega etiquetas, ejecuta pruebas o modifica la solicitud de cambios de cualquier otra forma.

## Responder a los eventos

El {% data variables.product.prodname_dependabot %} puede activar flujos de trabajo de las {% data variables.product.prodname_actions %} en sus solicitudes de cambios y comentarios; sin embargo, algunos eventos se tratan de forma distinta.

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} En el caso de los flujos de trabajo iniciados por {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) mediante los eventos `pull_request`, `pull_request_review`, `pull_request_review_comment`, `push`, `create`, `deployment` y `deployment_status`, se aplican las restricciones siguientes: {% endif %}

- {% ifversion ghes = 3.3 %}`GITHUB_TOKEN` tiene permisos de solo lectura, a menos que el administrador haya quitado las restricciones.{% else %}`GITHUB_TOKEN` tiene permisos de solo lectura de forma predeterminada.{% endif %}
- {% ifversion ghes = 3.3 %}No se puede acceder a los secretos a menos de que tu administrador haya eliminado las restricciones.{% else %}Los secretos se llenan desde los secretos del {% data variables.product.prodname_dependabot %}. Los secretos de las {% data variables.product.prodname_actions %} no están disponibles.{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} En el caso de los flujos de trabajo iniciados por {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) mediante el evento `pull_request_target`, si la referencia base de la solicitud de incorporación de cambios se ha creado mediante {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`), el valor `GITHUB_TOKEN` será de solo lectura y los secretos no estarán disponibles.
{% endif %}

{% ifversion actions-stable-actor-ids %}Estas restricciones se aplican incluso si otro actor vuelve a ejecutar el flujo de trabajo.{% endif %}

Para más información, vea ["Mantenimiento de la seguridad de flujos de trabajo y Acciones de GitHub: prevención de solicitudes pwn"](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/).

{% ifversion fpt or ghec or ghes > 3.3 %}

### Cambio de permisos `GITHUB_TOKEN`

De manera predeterminada, los flujos de trabajo de {% data variables.product.prodname_actions %} desencadenados por {% data variables.product.prodname_dependabot %} obtienen un valor `GITHUB_TOKEN` con permisos de solo lectura. Puede usar la clave `permissions` del flujo de trabajo para aumentar el acceso del token:

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

Para más información, vea "[Modificación de los permisos para GITHUB_TOKEN](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token)".

### Acceder a los secretos

Cuando un evento del {% data variables.product.prodname_dependabot %} activa un flujo de trabajo, los únicos secretos disponibles para dicho flujo de trabajo son los del {% data variables.product.prodname_dependabot %}. Los secretos de las {% data variables.product.prodname_actions %} no están disponibles. Por lo tanto, debes almacenar cualquier secreto que utilice un flujo de trabajo activado mediante los eventos del {% data variables.product.prodname_dependabot %} como secretos del {% data variables.product.prodname_dependabot %}. Para más información, vea "[Administración de secretos cifrados para Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)".

Los secretos de {% data variables.product.prodname_dependabot %} se agregan al contexto `secrets` y se les hace referencia mediante la misma sintaxis exacta que la de los secretos para {% data variables.product.prodname_actions %}. Para más información, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow)".

Si tienes un flujo de trabajo que se activará mediante el {% data variables.product.prodname_dependabot %} y también mediante otros actores, la solución más simple es almacenar el token con los permisos requeridos en una acción y en un secreto del {% data variables.product.prodname_dependabot %} con nombres idénticos. Entonces, el flujo de trabajo puede incluir una llamada simple a estos secretos. Si el secreto del {% data variables.product.prodname_dependabot %} tiene un nombre diferente, utiliza condiciones para especificar los secretos correctos para que los utilicen los diferentes actores. Para obtener ejemplos de condiciones de uso, vea "[Automatizaciones comunes](#common-dependabot-automations)" a continuación.

Para acceder a un registro de contenedor privado en AWS con un nombre de usuario y una contraseña, un flujo de trabajo debe incluir un secreto para `username` y `password`. En el ejemplo siguiente, cuando {% data variables.product.prodname_dependabot %} desencadena el flujo de trabajo, se usan los secretos de {% data variables.product.prodname_dependabot %} con los nombres `READONLY_AWS_ACCESS_KEY_ID` y `READONLY_AWS_ACCESS_KEY`. Si otro actor activa el flujo de trabajo, se utilizarán los secretos de las acciones con estos nombres.

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

**Nota**: El administrador del sitio puede invalidar estas restricciones para {% data variables.location.product_location %}. Para más información, vea "[Solución de problemas de {% data variables.product.prodname_actions %} para la empresa](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#troubleshooting-failures-when-dependabot-triggers-existing-workflows)".

Si se quitan las restricciones, cuando {% data variables.product.prodname_dependabot %} desencadena un flujo de trabajo, tendrá acceso a los secretos de {% data variables.product.prodname_actions %} y podrá usar el término `permissions` para incrementar el ámbito predeterminado de `GITHUB_TOKEN` desde el acceso de solo lectura. Puede omitir los pasos específicos de las secciones "Control de eventos `pull_request`" y "Control de eventos `push`" porque ya no se aplican.

{% endnote %}

### Controlar eventos `pull_request`

Si el flujo de trabajo necesita acceso a secretos o una instancia de `GITHUB_TOKEN` con permisos de escritura, tiene dos opciones: usar `pull_request_target`, o bien utilizar dos flujos de trabajo independientes. En esta sección se detallarán los detalles del uso de `pull_request_target` y, a continuación, el uso de dos flujos de trabajo en "[Control de eventos `push`](#handling-push-events)".

A continuación se muestra un ejemplo sencillo de un flujo de trabajo de `pull_request` que ahora podría producir errores:

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

Puede reemplazar `pull_request` por `pull_request_target`, que se usa para las solicitudes de incorporación de cambios de bifurcaciones y comprobar explícitamente la solicitud de incorporación de cambios `HEAD`.

{% warning %}

**Advertencia:** El uso de `pull_request_target` como sustituto de `pull_request` le expone a comportamientos no seguros. Se recomienda usar el método de dos flujos de trabajo, como se describe a continuación en "[Control de eventos `push`](#handling-push-events)".

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

También se recomienda encarecidamente reducir el ámbito de los permisos concedidos a `GITHUB_TOKEN` para evitar la pérdida de un token con más privilegios de los necesarios. Para más información, vea "[Permisos para `GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

### Controlar eventos `push`

Como no hay ningún `pull_request_target` equivalente para los eventos `push`, tendrá que usar dos flujos de trabajo: uno que no es de confianza y que finaliza con la carga de artefactos, lo que desencadena un segundo flujo de trabajo de confianza que descarga artefactos y continúa el procesamiento.

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

{% ifversion actions-stable-actor-ids %}

Cuando vuelvas a ejecutar manualmente un flujo de trabajo de Dependabot, se ejecutará con los mismos privilegios que antes incluso si el usuario que inició la nueva ejecución tiene otros privilegios. Para más información, consulta "[Volver a ejecutar flujos de trabajo y trabajos](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".

{% else %}

También puedes volver a ejecutar un flujo de trabajo fallido del Dependabot manualmente y este seguirá ejecutándose con un token de lectura-escritura y con acceso a los secretos. Antes de volver a ejecutar los flujos de trabajo fallidos manualmente, siempre debes verificar la dependencia que se está actualizando para asegurarte de que el cambio no introduzca ningún comportamiento imprevisto o malicioso.

{% endif %}

## Automatizaciones comunes del Dependabot

Aquí mostramos varios escenarios comunes que pueden automatizarse utilizando las {% data variables.product.prodname_actions %}.

{% ifversion ghes = 3.3 %}

{% note %}

**Nota**: Si el administrador del sitio ha invalidado las restricciones para {% data variables.product.prodname_dependabot %} en {% data variables.location.product_location %}, puede usar `pull_request` en lugar de `pull_request_target` en los flujos de trabajo siguientes.

{% endnote %}

{% endif %}

### Recuperar metadatos de una solicitud de cambios

Automatizar mucho requiere saber información del contenido de la solicitud de cambios: cuál era el nombre de la dependencia, si es una dependencia productva y si es una actualización de parche menor o mayor.

La acción `dependabot/fetch-metadata` proporciona toda esa información de forma automática:

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

Para más información, vea el repositorio [`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata).

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

Si quieres permitir que los mantenedores marquen determinadas solicitudes de incorporación de cambios para la fusión mediante combinación automática, puedes usar la funcionalidad de fusión mediante combinación automática de {% data variables.product.prodname_dotcom %}. Esto habilita a la solicitud de cambios para que se fusione cuando se cumpla cualquier prueba y aprobación requerida por las reglas de protección de rama. Para más información, consulta "[Fusionar una solicitud de cambios automáticamente](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)" y "[Administración de una regla de protección de rama](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)".

{% note %}

**Nota:** Si usas comprobaciones de estado para probar las solicitudes de incorporación de cambios, debes habilitar **Requerir comprobaciones de estado superadas antes de la fusión** para la rama de destino para las solicitudes de incorporación de cambios {% data variables.product.prodname_dependabot %}. Esta regla de protección de rama garantiza que las solicitudes de incorporación de cambios no se fusionan a menos que se superen todas las comprobaciones de estado necesarias. Para más información, vea "[Administración de una regla de protección de rama](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)".

{% endnote %}

En su lugar, puedes usar {% data variables.product.prodname_actions %} y {% data variables.product.prodname_cli %}. Este es un ejemplo que combina automáticamente todas las actualizaciones de revisión de `my-dependency`:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  contents: write
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
- Va a extraer del repositorio el `ref` correcto para `pull_request`.
- No intenta acceder a secretos desde un evento `pull_request`, `pull_request_review`, `pull_request_review_comment` o `push` desencadenado por Dependabot.
- No intenta realizar ninguna acción `write` desde un evento `pull_request`, `pull_request_review`, `pull_request_review_comment` o `push` desencadenado por Dependabot.

{% else %}

- Estás ejecutando el flujo de trabajo únicamente cuando el actor adecuado lo activa.
- Va a extraer del repositorio el `ref` correcto para `pull_request`.
- Tus secretos están disponibles en los secretos del {% data variables.product.prodname_dependabot %}, en vez de como secretos de las {% data variables.product.prodname_actions %}.
- Tiene un `GITHUB_TOKEN` con los permisos correctos.

{% endif %}

Para obtener información sobre cómo escribir y depurar {% data variables.product.prodname_actions %}, vea "[Más información sobre Acciones de GitHub](/actions/learn-github-actions)".
