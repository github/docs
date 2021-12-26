---
title: Personalizar las actualizaciones de las dependencias
intro: 'Puedes personalizar cómo el {% data variables.product.prodname_dependabot %} mantiene tus dependencias.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
redirect_from:
  - /github/administering-a-repository/customizing-dependency-updates
  - /code-security/supply-chain-security/customizing-dependency-updates
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
  - Vulnerabilities
---

### Acerca de personalizar las actualizaciones de las dependencias

Después de que hayas habilitado la actualización de versiones, puedes personalizar como el {% data variables.product.prodname_dependabot %} mantiene tus dependencias si agregas más opciones al archivo *dependabot.yml*. Por ejemplo, podrías:

- Especifica en qué día de la semana se abrirán las solicitudes de extracción para la actualización de versiones: `schedule.day`
- Establece revisores, asignados y etiquetas para cada administrador de paquete: `reviewers`, `assignees`, y `labels`
- Define una estrategia de versionamiento para los cambios que se realicen en cada archivo de manifiesto: `versioning-strategy`
- Cambia la cantidad máxima de solicitudes de extracción abiertas para actualizaciones de versión del valor predeterminado que es 5: `open-pull-requests-limit`
- Abre solicitudes de extracción para actualizaciones de versión para seleccionar una rama específica en vez de la rama predeterminada: `target-branch`

Para obtener más información acerca de las opciones de configuración, consulta la sección "[Opciones de configuración para actualizaciones de dependencias](/github/administering-a-repository/configuration-options-for-dependency-updates)".

Cuando actualizas el archivo *dependabot.yml* en tu repositorio, el {% data variables.product.prodname_dependabot %} ejecuta una revisión inmediata con la nueva configuración. Verás una lista de dependencias actualizada en cuestión de minutos en la pestaña de **{% data variables.product.prodname_dependabot %}**, esto podría tomar más tiempo si el reposiorio tiene muchas dependencias. También puedes ver las solicitudes de extracción nuevas para las actualizaciones de versión. Para obtener más información, consulta la sección "[Listar dependencias configuradas para actualizaciones de versión](/github/administering-a-repository/listing-dependencies-configured-for-version-updates)".

### Impacto de los cambios de configuración en las actualizaciones de seguridad

Si personalizas el archivo *dependabot.yml*, podrías notar algunos cambios en las solicitudes de extracción que se levantan para las actualizaciones de seguridad. Estas solicitudes de extracción siempre se activan mediante una asesoría de seguridad para una dependencia en vez de mediante un calendario de programación del {% data variables.product.prodname_dependabot %}. Sin embargo, estas heredan la configuración de ajustes relevante del archivo *dependabot.yml* a menos de que especifiques una rama destino diferente para las actualizaciones de versión.

Por ejemplo, consulta la sección "[Configurar etiquetas personalizadas](#setting-custom-labels)" a más adelante.

### Modificar la programación

Cuando configuras una actualización de tipo `daily`, predeterminadamente, el {% data variables.product.prodname_dependabot %} revisa si hay nuevas versiones a las 05:00 UTC. Puedes utilizar `schedule.time` para especificar una hora alterna para que revise actualizaciones (en formato: `hh:mm`).

El archivo *dependabot.yml* de ejemplo a continuación expande la configuración de npm para especificar cuándo el {% data variables.product.prodname_dependabot %} debería revisar si hay actualizaciones de versión para las dependencias.

```yaml
# dependabot.yml file with
# customized schedule for version updates

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    # Check the npm registry for updates at 2am UTC
    schedule:
      interval: "daily"
      time: "02:00"
```

### Configurar los revisores y asignados

Predeterminadamente, el {% data variables.product.prodname_dependabot %} levanta solicitudes de extracción sin ningún revisor o asignado.

Puedes utilizar `reviewers` y `assignees` para especificar los revisores y asignados para todas las solicitudes de extracción que se levanten para un administrador de paquete. Cuando especificas un equipo, debes utilizar el nombre completo de éste, como si estuvieras @mencionándolo (incluyendo la organización).

El ejemplo de archivo *dependabot.yml* mostrado a continuación cambia las configuraciones npm para que todas las solicitudes de extracción que se hayan abierto con actualizaciones de versión y de seguridad para npm tengan dos revisores y un asignado.

```yaml
# dependabot.yml file with
# reviews and an assignee for all npm pull requests

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise all npm pull requests with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests with an assignee
    assignees:
      - "user-name"
```

### Configurar las etiquetas personalizadas

{% data reusables.dependabot.default-labels %}

Puedes utilizar `labels` para anular las etiquetas predeterminadas y especificar etiquetas alternas para todas las solicitudes de extracción que se han levantado para un administrador de paquete. No puedes crear etiquetas nuevas en el archivo *dependabot.yml*, así que las etiquetas alternas ya deben existir en el repositorio.

El siguiente ejemplo de archivo *dependabot.yml* cambia la configuración de npm para que las solicitudes de extracción abiertas con actualizaciones de versión y de seguridad para npm tengan etiquetas personalizadas. También cambia la configuración de Docker para revisar las actualizaciones de versión contra una rama personalizada y para levantar solicitudes de extracción con etiquetas personalizadas contra dicha rama personalizada. Los cambios en Docker no afectarán las solicitudes de extracción para actualizaciones de seguridad, ya que dichas actualizaciones de seguridad siempre se hacen contra la rama predeterminada.

{% note %}

**Nota:** La nueva `target-branch` deberá contener un Dockerfile para actualizar, de lo contrario, este cambio tendrá el efecto de inhabilitar las actualizaciones de versión para Docker.

{% endnote %}

```yaml
# dependabot.yml file with
# customized npm configuration

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise all npm pull requests with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"

    # Keep Docker dependencies up to date
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise pull requests for Docker version updates
    # against the "develop" branch. The Docker configuration
    # no longer affects security update pull requests.
    target-branch: "develop"
    # Use custom labels on pull requests for Docker version updates
    labels:
      - "Docker dependencies"
      - "triage-board"
```

### Más ejemplos

Para obtener más ejemplos, consulta la sección "[Opciones de configuración para actualizaciones de dependencias](/github/administering-a-repository/configuration-options-for-dependency-updates)".
