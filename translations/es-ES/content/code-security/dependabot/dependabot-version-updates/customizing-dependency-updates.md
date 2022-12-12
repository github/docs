---
title: Personalizar las actualizaciones de las dependencias
intro: 'Puedes personalizar cómo el {% data variables.product.prodname_dependabot %} mantiene tus dependencias.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
redirect_from:
  - /github/administering-a-repository/customizing-dependency-updates
  - /code-security/supply-chain-security/customizing-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/customizing-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
  - Vulnerabilities
shortTitle: Customize updates
ms.openlocfilehash: 99a3869313598733493d21f8b15d46db98b1a53c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107745'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Acerca de personalizar las actualizaciones de las dependencias

Después de habilitar la actualización de versiones, puede personalizar cómo mantiene {% data variables.product.prodname_dependabot %} sus dependencias. Para ello, agregue más opciones al archivo *dependabot.yml*. Por ejemplo, podría realizar estas acciones:

- Especificar el día de la semana que se deben abrir las solicitudes de incorporación de cambios de las actualizaciones de versión: `schedule.day`
- Establecer revisores, usuarios asignados y etiquetas para cada administrador de paquetes: `reviewers`, `assignees`y `labels`
- Definir una estrategia de control de versiones para los cambios en cada archivo de manifiesto: `versioning-strategy`
- Cambiar el número máximo de solicitudes de incorporación de cambios abiertas para las actualizaciones de versión a partir del valor predeterminado de 5: `open-pull-requests-limit`
- Abrir solicitudes de incorporación de cambios de actualizaciones de versión para seleccionar una rama específica en vez de la rama predeterminada: `target-branch`

Para obtener más información sobre las opciones de configuración, consulte "[Opciones de configuración para el archivo dependabot.yml](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)".

Cuando actualice el archivo *dependabot.yml* en el repositorio, {% data variables.product.prodname_dependabot %} ejecutará una comprobación inmediata con la nueva configuración. Verá una lista de dependencias actualizada en cuestión de minutos en la pestaña de **{% data variables.product.prodname_dependabot %}** ; esto podría demorarse más si el repositorio tiene muchas dependencias. También puedes ver las solicitudes de extracción nuevas para las actualizaciones de versión. Para obtener más información, consulte "[Enumerar las dependencias configuradas para las actualizaciones de versión](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates)".

## Impacto de los cambios de configuración en las actualizaciones de seguridad

Si personaliza el archivo *dependabot.yml*, podría notar algunos cambios en las solicitudes de incorporación de cambios que se envían para las actualizaciones de seguridad. Estas solicitudes de extracción siempre se activan mediante una asesoría de seguridad para una dependencia en vez de mediante un calendario de programación del {% data variables.product.prodname_dependabot %}. Sin embargo, heredan la configuración correspondiente del archivo *dependabot.yml* a menos que especifique una rama de destino diferente para las actualizaciones de versión.

Para ver un ejemplo, consulte "[Configuración de etiquetas personalizadas](#setting-custom-labels)" a continuación.

## Modificar la programación

Cuando configura una programación de actualización de tipo `daily`, de manera predeterminada, {% data variables.product.prodname_dependabot %} revisa si hay versiones nuevas a las 05:00 UTC. Puede usar `schedule.time` para especificar una hora alternativa y comprobar si hay actualizaciones (formato: `hh:mm`).

El archivo *dependabot.yml* de ejemplo expande la configuración de npm para especificar cuándo debe revisar {% data variables.product.prodname_dependabot %} las actualizaciones de versión para las dependencias.

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

## Configurar los revisores y asignados

Predeterminadamente, el {% data variables.product.prodname_dependabot %} levanta solicitudes de extracción sin ningún revisor o asignado.

Puede usar `reviewers` y `assignees`  para especificar revisores y usuarios asignados para todas las solicitudes de incorporación de cambios generadas de un administrador de paquetes. Cuando especifique un equipo, debe utilizar su nombre completo, como si estuviera @mentioning (incluida la organización).

El archivo *dependabot.yml* de ejemplo mostrado a continuación cambia la configuración de npm para que todas las solicitudes de incorporación de cambios que se hayan abierto con actualizaciones de versión y seguridad para npm tengan dos revisores y un usuario asignado.

```yaml
# dependabot.yml file with
# reviews and an assignee for all npm pull requests

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests with an assignee
    assignees:
      - "user-name"
```

## Configurar las etiquetas personalizadas

{% data reusables.dependabot.default-labels %}

Puede utilizar `labels` para anular las etiquetas predeterminadas y especificar etiquetas alternas para todas las solicitudes de incorporación de cambios que se hayan generado para un administrador de paquetes. No puede crear etiquetas nuevas en el archivo *dependabot.yml*, así que las etiquetas alternativas ya deben existir en el repositorio.

El archivo *dependabot.yml* de ejemplo mostrado a continuación cambia la configuración de npm para que todas las solicitudes de incorporación de cambios que se hayan abierto con actualizaciones de versión y seguridad para npm tengan etiquetas personalizadas. También cambia la configuración de Docker para revisar las actualizaciones de versión contra una rama personalizada y para levantar solicitudes de extracción con etiquetas personalizadas contra dicha rama personalizada. Los cambios en Docker no afectarán las solicitudes de extracción para actualizaciones de seguridad, ya que dichas actualizaciones de seguridad siempre se hacen contra la rama predeterminada.

{% note %}

**Nota:** El nuevo `target-branch` debe contener un Dockerfile para actualizar; de lo contrario, este cambio tendrá el efecto de deshabilitar las actualizaciones de versión para Docker.

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
      interval: "weekly"
    # Raise all npm pull requests with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"

    # Keep Docker dependencies up to date
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise pull requests for Docker version updates
    # against the "develop" branch. The Docker configuration
    # no longer affects security update pull requests.
    target-branch: "develop"
    # Use custom labels on pull requests for Docker version updates
    labels:
      - "Docker dependencies"
      - "triage-board"
```

## Más ejemplos

Para ver más ejemplos, consulte "[Opciones de configuración para el archivo dependabot.yml](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)".
