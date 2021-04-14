---
title: Opciones de configuración para actualizaciones de dependencias
intro: 'La información detallada para todas las opciones que puedes utilizar para personalizar como el {% data variables.product.prodname_dependabot %} mantiene tus repositorios.'
permissions: 'Las personas con permisos de escritura en un repositorio pueden configurar el {% data variables.product.prodname_dependabot %} para el mismo.'
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
topics:
  - repositories
---

### Acerca del archivo *dependabot.yml*

El archivo de configuración del {% data variables.product.prodname_dependabot %}, *dependabot.yml*, utiliza la sintaxis YAML. Si eres nuevo en YAML y deseas conocer más, consulta "[Aprender YAML en cinco minutos](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)".

Debes almacenar este archivo en el directorio `.github` de tu repositorio. Cuando agregas o actualizas el archivo *dependabot.yml*, esto activa una revisión inmediata de las actualizaciones de la versión. Cualquier opción que también afecte las actualizaciones de seguridad se utiliza en la siguiente ocasión en que una alerta de seguridad active una solicitud de cambios para una actualización de seguridad. Para obtener más información, consulta las secciónes "[Habilitar e inhabilitar las actualizaciones de versión](/github/administering-a-repository/enabling-and-disabling-version-updates)" y "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)".

El archivo *dependabot.yml* tiene dos claves mandatorias de nivel superior: `version`, y `updates`. Opcionalmente, puedes incluir una clave de `registries` de nivel superior. El archivo debe comenzar con `version: 2`.

### Opciones de configuración para las actualizaciones

La clave `updates` de nivel superior es obligatoria. La utilizas para configurar la forma en que el {% data variables.product.prodname_dependabot %} actualiza las versiones o las dependencias de tu proyecto. Cada entrada configura los ajustes de actualización para un administrador de paquetes en particular. Puedes utilizar las siguientes opciones.

| Opción                                                                     | Requerido | Descripción                                                                                        |
|:-------------------------------------------------------------------------- |:---------:|:-------------------------------------------------------------------------------------------------- |
| [`package-ecosystem`](#package-ecosystem)                                  |   **X**   | Administrador de paquetes a utilizar                                                               |
| [`directorio`](#directory)                                                 |   **X**   | Ubicación de los manifiestos del paquete                                                           |
| [`schedule.interval`](#scheduleinterval)                                   |   **X**   | Qué tan a menudo se revisará si hay actualizaciones                                                |
| [`allow`](#allow)                                                          |           | Personalizar qué actualizaciones se permitirán                                                     |
| [`asignatarios`](#assignees)                                               |           | Los asignados a configurar en las solicitudes de extracción                                        |
| [`commit-message`](#commit-message)                                        |           | Preferencias de mensaje de confirmación                                                            |
| [`ignore`](#ignore)                                                        |           | Ignorar ciertas dependencias o versiones                                                           |
| [`insecure-external-code-execution`](#insecure-external-code-execution)    |           | Permite o rechaza la ejecución de código en los archivos de manifiesto                             |
| [`etiquetas`](#labels)                                                     |           | Las etiquetas a configurar en las solicitudes de extracción                                        |
| [`hito`](#milestone)                                                       |           | Hito a configurar en las solicitudes de extracción                                                 |
| [`open-pull-requests-limit`](#open-pull-requests-limit)                    |           | Limitar la cantidad de solicitudes de extracción abiertas para las actualizaciones de versión      |
| [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator) |           | Cambiar el separador para los nombres de rama de la solicitud de extracción                        |
| [`rebase-strategy`](#rebase-strategy)                                      |           | Inhabilitar el rebase automático                                                                   |
| [`registries`](#registries)                                                |           | Los registros privados a los que puede acceder el {% data variables.product.prodname_dependabot %}
| [`reviewers`](#reviewers)                                                  |           | Los revisores a configurar en las solicitudes de extracción                                        |
| [`schedule.day`](#scheduleday)                                             |           | Día de la semana para revisar si hay actualizaciones                                               |
| [`schedule.time`](#scheduleday)                                            |           | Hora del día para revisar si hay actualizaciones (hh:mm)                                           |
| [`schedule.timezone`](#scheduletimezone)                                   |           | Huso horario para la hora del día (identificador de zona)                                          |
| [`target-branch`](#target-branch)                                          |           | Rama contra la cual se creará la solicitud de extracción                                           |
| [`vendor`](#vendor)                                                        |           | Actualiza las dependencias delegadas a proveedores o almacenadas en caché                          |
| [`versioning-strategy`](#versioning-strategy)                              |           | Cómo actualizar los requisitos de la versión del manifiesto                                        |

Estas opciones caen a groso modo en las siguientes categorías.

- Opciones de configuración esenciales que debes incluir en todas las configuraciones: [`package-ecosystem`](#package-ecosystem), [`directory`](#directory),[`schedule.interval`](#scheduleinterval).
- Opciones para personalizar el calendario de actualización: [`schedule.time`](#scheduletime), [`schedule.timezone`](#scheduletimezone), [`schedule.day`](#scheduleday).
- Las opciones para controlar qué dependencias se actualizarán: [`allow`](#allow), [`ignore`](#ignore), [`vendor`](#vendor).
- Opciones para agregar metadatos a las solicitudes de extracción: [`reviewers`](#reviewers), [`assignees`](#assignees), [`labels`](#labels), [`milestone`](#milestone).
- Opciones para cambiar el comportamiento de las solicitudes de extracción: [`target-branch`](#target-branch), [`versioning-strategy`](#versioning-strategy), [`commit-message`](#commit-message), [`rebase-strategy`](#rebase-strategy), [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator).

Adicionalmente, la opción [`open-pull-requests-limit`](#open-pull-requests-limit) cambia la cantidad máxima de solicitudes de extracción para las actualizaciones de versión que puede abrir el {% data variables.product.prodname_dependabot %}.

{% note %}

**Nota:** Algunas de estas opciones de configuración también pueden afectar a las solicitudes de extracción que se levantan para las actualizaciones de seguridad de los manifiestos delos paquetes vulnerables.

Las actualizaciones de seguridad se levantan para los manifiestos de paquetes vulnerables únicamente en la rama predeterminada. Cuando se establecen las opciones de configuración para la misma rama (como "true" a menos de que utilices `target-branch`), y se especifica un `package-ecosystem` y `directory` para el manifiesto vulnerable, entonces las solicitudes de extracción para las actualizaciones de seguridad utilizan las opciones relevantes.

En general, las actualizaciones de seguridad utilizan cualquier opción de configuración que afecte las solicitudes de extracción, por ejemplo, agregar metadatos o cambiar su comportamiento. Para obtener más información acerca de las actualizaciones de seguridad, consulta la sección "[Configurar {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)".

{% endnote %}

#### `package-ecosystem`

**Requerido**. Agregarás un elemento de `package-ecosystem` para cada administrador de paquetes que quieras que monitoree el {% data variables.product.prodname_dependabot %} para encontrar versiones nuevas. El repositorio también debe contener un archivo bloqueado o de manifiesto de dependencias para cada uno de estos administradores de paquetes. Si quieres habilitar la delegación a proveedores para un administrador de paquetes que sea compatible con ella, las dependencias delegadas a proveedores deben ubicarse en el directorio requerido. Para obtener más información, consulta la sección [`vendor`](#vendor) a continuación.

{% data reusables.dependabot.supported-package-managers %}

```yaml
# Basic set up for three package managers

version: 2
updates:

  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for Composer
  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
```

#### `directorio`

**Requerido**. Debes definir la ubicación de los manifiestos de los paquetes para cada administrador de paquetes (por ejemplo, el *package.json* o *Gemfile*). Tú definierás el directorio relativo a la raíz del repositorio para todos los ecosistemas, menos para GitHub Actions. Para GitHub Actions, configura el directorio para que sea `/` y así revisar los archivos de flujo de trabajo en `.github/workflows`.

```yaml
# Specify location of manifest files for each package manager

version: 2
updates:
  - package-ecosystem: "composer"
    # Files stored in repository root
    directory: "/"
    schedule:
      interval: "daily"

  - package-ecosystem: "npm"
    # Files stored in `app` directory
    directory: "/app"
    schedule:
      interval: "daily"

  - package-ecosystem: "github-actions"
    # Workflow files stored in the
    # default location of `.github/workflows`
    directory: "/"
    schedule:
      interval: "daily"
```

#### `schedule.interval`

**Requerido**. Debes definir la frecuencia en la que se verificará si hay versiones nuevas para cada administrador de paquetes. Predeterminadamente, esto ocurre a las 5am UTC. Para modificar esto, utiliza [`schedule.time`](#scheduletime) and [`schedule.timezone`](#scheduletimezone).

- `daily`—se ejecuta en cada día de la semana, de Lunes a Viernes.
- `weekly`—se ejecuta una vez cada semana. Predeterminadamente, esto ocurre los lunes. Para modificar esto, utiliza [`schedule.day`](#scheduleday).
- `monthly`—se ejecuta una vez al mes. Esto ocurre en el primer día de cada mes.

```yaml
# Set update schedule for each package manager

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every weekday
      interval: "daily"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      # Check for updates managed by Composer once a week
      interval: "weekly"
```

{% note %}

**Note**: `schedule` define cuando el {% data variables.product.prodname_dependabot %} intenta hacer una actualización nueva. Sin embargo, no es la única ocasión en la que podrías recibir solilcitudes de cambio. Las actualizaciones pueden activarse con base en los cambios a tu archivo de `dependabot.yml`, los cambios a tus archivo(s) de manifiesto después de una actualización fallida, o las {% data variables.product.prodname_dependabot_security_updates %}. Para obtener más información, consulta las secciones "[Frecuencia de las solicitudes de cambio del {% data variables.product.prodname_dependabot %}](/github/administering-a-repository/about-dependabot-version-updates#frequency-of-dependabot-pull-requests)" y "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".

{% endnote %}

#### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Utiliza la opción `allow` para personalizar qué dependencias se actualizan. Esto no impacta en las actualizaciones de seguridad para las dependencias vulnerables. Puedes utilizar las siguientes opciones:

- `dependency-name`—se utiliza para permitir actualizaciones para las dependencias con nombres coincidentes, opcionalmente, utiliza `*` para empatar cero o más caracteres. Para las dependencias de Java, el formato del atributo `dependency-name` es: `groupId:artifactId`, por ejemplo: `org.kohsuke:github-api`.
- `dependency-type`—utilízalo para permitir actualizaciones para dependencias de tipos específicos.

  | Tipos de dependencia | Administradores de paquete compatibles              | Permitir actualizaciones                                                                                                                            |
  | -------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `direct`             | Todas                                               | Todas las dependencias definidas explícitamente.                                                                                                    |
  | `indirect`           | `bundler`, `pip`, `composer`, `cargo`               | Las dependencias de las dependencias directas (también conocidas como sub-dependencias, o dependencias transitorias).                               |
  | `all`                | Todas                                               | Todas las dependencias definidas explícitamente. Para `bundler`, `pip`, `composer`, `cargo`, también las dependencias de las dependencias directas. |
  | `production`         | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Únicamente las dependencias en el "Grupo de dependencias del producto".                                                                             |
  | `development`        | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Únicamente las dependencias en el "Grupo de dependencias de desarrollo".                                                                            |

```yaml
# Use `allow` to specify which dependencies to maintain

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow updates for Lodash
      - dependency-name: "lodash"
      # Allow updates for React and any packages starting "react"
      - dependency-name: "react*"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow both direct and indirect updates for all packages
      - dependency-type: "all"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow only direct updates for
      # Django and any packages starting "django"
      - dependency-name: "django*"
        dependency-type: "direct"
      # Allow only production updates for Sphinx
      - dependency-name: "sphinx"
        dependency-type: "production"
```

#### `asignatarios`

Utiliza `assignees` para especificar a los asignados individuales para todas las solicitudes de extracción levantadas para un administrador de paquete.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify assignees for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Add assignees
    assignees:
      - "octocat"
```

#### `commit-message`

Predeterminadamente, el {% data variables.product.prodname_dependabot %} intenta detectar tus preferencias de mensajes de confirmación y utiliza patrones similares. Utiliza la opción`commit-message` para especificar tus preferencias explícitamente.

Opciones compatibles

- `prefix` especifica un prefijo para todos los mensajes de confirmación.
- `prefix-development` especifica un prefijo separado para todos los mensajes de confirmación que actualizan dependencias en el grupo de dependencias de desarrollo. Cuando especificas un valor para esta opción, `prefix` se utiliza únicamente para las actualizaciones a las dependencias en el grupo de dependencias de producción. Esto es compatible con: `bundler`, `composer`, `mix`, `maven`, `npm`, y `pip`.
- `include: "scope"` especifica que cualquier prefijo es sucedido por una lista de dependencias actualizadas en la confirmación.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customize commit messages

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    commit-message:
      # Prefix all commit messages with "npm"
      prefix: "npm"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Prefix all commit messages with "Composer"
    # include a list of updated dependencies
    commit-message:
      prefix: "Composer"
      include: "scope"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Include a list of updated dependencies
    # with a prefix determined by the dependency group
    commit-message:
      prefix: "pip prod"
      prefix-development: "pip dev"
      include: "scope"
```

#### `ignore`

{% data reusables.dependabot.warning-ignore-option %}

##### Revisar por preferencias ignoradas existentes

Antes de que agreges una opción de `ignore` al archivo de configuración, revisa si has utilizado previamente cualquiera de los comandos de `@dependabot ignore` en una solicitud de extracción de actualizaciones de seguridad o de versión. El {% data variables.product.prodname_dependabot %} almacena estas preferencias para cada administrador de paquetes centralmente, y esta información se sobreescribe mediante la opción `ignore`. Para obtener más información acerca de los comandos de `@dependabot ignore`, consulta la sección "[Administrar las solicitudes de extracción para las actualizaciones de dependencias](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)".

Puedes revisar si un repositorio ha almacenado las preferencias si buscas dicho repositorio con `"@dependabot ignore" in:comments`. Si revias alguna solicitud de extracción en los resultados, puedes decidir si quieres o no especificar esas dependencias o versiones ignoradas en el archivo de configuración.

##### Especificar dependencias y versiones para ignorar

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Puedes utilizar la opción `ignore` para personalizar qué dependencias se actualizarán. La opción `ignore` es compatible con las siguientes opciones.

- `dependency-name`—se utiliza para ignorar actualizaciones para las dependencias con nombres coincidentes, opcionalmente, utiliza `*` para empatar cero o más caracteres. Para las dependencias de Java, el formato del atributo `dependency-name` es: `groupId:artifactId`, por ejemplo: `org.kohsuke:github-api`.
- `versions`—se utiliza para ignorar versiones o rangos específicos de las versiones. Si quieres definir un rango, utiliza el patrón estándar del administrador de paquetes (por ejemplo: `^1.0.0` para npm, o `~> 2.0` para Bundler).

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Use `ignore` to specify dependencies that should not be updated 

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "express"
        # For Express, ignore all updates for version 4 and 5
        versions: ["4.x", "5.x"]
        # For Lodash, ignore all updates
      - dependency-name: "lodash"
```

{% note %}

**Nota**: El {% data variables.product.prodname_dependabot %} solo puede ejecutar actualizaciones de versión en los archivos de bloqueo o de manifiesto si puede acceder a todas las dependencias en estos archivos, aún si agregas dependencias inaccesibles a la opción `ignore` de tu archivo de configuración. Para obtener más información, consulta las secciones "[Administrar la configuración de seguridad y deanálisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)" y "[Solucionar los errores del {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)".


{% endnote %}

#### `insecure-external-code-execution`

Los administradores de paquetes con los valores `bundler`, `mix`, y `pip` de `package-ecosystem` pueden ejecutar el código externo en el manifiesto como parte del proceso de actualización de la versión. Esto podría permitir que un paquete que se haya puesto en riesgo borre las credenciales u obtenga acceso a los registros configurados. Cuando agregas un ajuste de [`registries`](#registries) dentro de una configuración de `updates`, el {% data variables.product.prodname_dependabot %} prevendrá automáticamente la ejecución de código externo, en cuyo caso, la actualización de versión podría fallar. Puedes elegir ignorar este comportamiento y permitir la ejecución de código externo para los administradores de paquetes `bundler`, `mix`, y `pip` si configuras a `insecure-external-code-execution` en `allow`.

Puedes negar explícitamente la ejecución de código externo, sin importar si es que hay un ajuste de `registries` para esta configuración de actualización, configurando a `insecure-external-code-execution` en `deny`.

{% raw %}
```yaml
# Allow external code execution when updating dependencies from private registries

version: 2
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
updates:
  - package-ecosystem: "bundler"
    directory: "/rubygems-server"
    insecure-external-code-execution: allow
    registries: "*"
    schedule:
      interval: "monthly"
```
{% endraw %}

#### `etiquetas`

{% data reusables.dependabot.default-labels %}

Utiliza `labels` para anular las etiquetas predeterminadas y especificar las etiquetas alternas para todas las solicitudes de extracción que se levante para un administrador de paquete. Si ninguna de estas etiquetas se define en el repositorio, entonces se ha ignorado. Para inhabilitar todas las etiquetas, incluyendo aquellas predeterminadas, utiliza `labels: [ ]`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify labels for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Specify labels for npm pull requests
    labels:
      - "npm"
      - "dependencies"
```

#### `hito`

Utiliza `milestone` para asociar todas las solicitudes de extracción que se han levantado para un administrador de paquete con un hito. Necesitas especificar el identificador numérico del hito y, no así, su etiqueta. Si ves un hito, la parte final de la URL de la página, después de `milestone`, es el identificador. Por ejemplo: `https://github.com/<org>/<repo>/milestone/3`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a milestone for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Associate pull requests with milestone "4"
    milestone: 4
```

#### `open-pull-requests-limit`

Predeterminadamente, {% data variables.product.prodname_dependabot %} abre un máximo de cinco solicitudes de extracción para las actualizaciones de versión. Una vez que hayan cinco solicitudes de cambio abiertas, las solicitudes nuevas se bloquearán hasta que fusiones o cierres algunas de las sollicitudes abiertas, después de lo cual, las solicitudes de cambiso nuevas pueden abrirse en actualizaciones subsecuentes. Utiliza `open-pull-requests-limit` para cambiar este límite. Esto también proporciona una forma simple de inhabilitar temporalmente las actualizaciones de versión para un administrador de paquete.

Esta opción no tiene impacto en las actualizaciones de seguridad que tienen un límite separado e interno de diez solicitudes de extracción abiertas.

```yaml
# Specify the number of open pull requests allowed

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Allow up to 10 open pull requests for pip dependencies
    open-pull-requests-limit: 10
```

#### `pull-request-branch-name.separator`

El {% data variables.product.prodname_dependabot %} genera una rama para cada solicitud de extracción. Cada nombre de rama incluye `dependabot`, y el administrador de paquete y la dependencia que se actualizaron. Predeterminadamente, estas partes están separadas por un símbolo de `/`, por ejemplo: `dependabot/npm_and_yarn/next_js/acorn-6.4.1`.

Utiliza `pull-request-branch-name.separator` para especificar un separador diferente. Este puede ser alguno de entre: `"-"`, `_` o `/`. El símbolo de guión debe estar entre comillas porque, de lo contrario, se interpretará como que está declarando una lista YAML vacía.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a different separator for branch names

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    pull-request-branch-name:
      # Separate sections of the branch name with a hyphen
      # for example, `dependabot-npm_and_yarn-next_js-acorn-6.4.1`
      separator: "-"
```

#### `rebase-strategy`

Predeterminadamente, el {% data variables.product.prodname_dependabot %} rebasa automáticamente las solicitudes de extracción abiertas cuando detecta conflictos. Utiliza `rebase-strategy` para inhabilitar este comportamiento.

Estrategias de rebase disponibles

- `disabled` para inhabilitar el rebase automático.
- `auto` para utilizar el comportamiento predeterminado y rebasar las solicitudes de extracción abiertas cuando se detecten conflictos.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Disable automatic rebasing

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable rebasing for npm pull requests
    rebase-strategy: "disabled"
```

#### `registries`

Para permitir que el {% data variables.product.prodname_dependabot %} acceda a un registro de paquete privado cuando esté realizando una actualización de versión, debes incluir un ajuste de `registries` dentro de la configuración relevante de `updates`. Puedes permitir que se utilicen todos los registros definidos si configuras a `registries` en `"*"`. Como alternativa, puedes listar los registros que puede utilizar la actualización. Para hacerlo, utiliza el nombre del registro como se define en la sección `registries` de nivel superior en el archivo _dependabot.yml_.

Para permitir que el {% data variables.product.prodname_dependabot %} utilice los administradores de paquetes `bundler`, `mix`, y `pip` para actualizar dependencias en los registros privados, puedes elegir el permitir la ejecución de código externo. Para obtener más información, consulta [`insecure-external-code-execution`](#insecure-external-code-execution).

{% raw %}
```yaml
# Allow {% data variables.product.prodname_dependabot %} to use one of the two defined private registries 
# when updating dependency versions for this ecosystem

version: 2
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}
updates:
  - package-ecosystem: "gitsubmodule"
    directory: "/"
    registries:
    - maven-github
    schedule:
      interval: "monthly"
```
{% endraw %}

#### `reviewers`

Utiliza `reviewers` para especificar los revisores o equipos individuales de revisores para las solicitudes de extracción que se levantaron para un administrador de paquete. Debes utilizar el nombre completo del equipo, incluyendo la organización, como si lo estuvieras @mencionando.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify reviewers for pull requests

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Add reviewers
    reviewers:
      - "octocat"
      - "my-username"
      - "my-org/python-team"
```

#### `schedule.day`

Cuando configuras un calendario de actualización en `weekly`, predeterminadamente, el {% data variables.product.prodname_dependabot %} revisa las nuevas versiones los lunes a las 05:00 UTC. Utiliza `schedule.day` para especificar un día alterno para revisar si hay actualizaciones.

Valores compatibles

- `monday`
- `tuesday`
- `wednesday`
- `thursday`
- `friday`
- `saturday`
- `sunday`

```yaml
# Specify the day for weekly checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
```

#### `schedule.time`

Predeterminadamente, el {% data variables.product.prodname_dependabot %} revisa si hay nuevas versiones a las 05:00 UTC. Utiliza `schedule.time` para especificar una hora alterna para revisar si hay actualizaciones (formato: `hh:mm`).

```yaml
# Set a time for checks
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      # Check for npm updates at 9am UTC
      time: "09:00"
```

#### `schedule.timezone`

Predeterminadamente, el {% data variables.product.prodname_dependabot %} revisa si hay nuevas versiones a las 05:00 UTC. Utiliza `schedule.timezone` para especificar un huso horario alternativo. El identificador de zona debe ser tomado de la base de datos de Husos Horarios que mantiene [iana](https://www.iana.org/time-zones). Para obtener más información, consulta la [Lista de bases de datos tz para husos horarios](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```yaml
# Specify the timezone for checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      # Use Japan Standard Time (UTC +09:00)
      timezone: "Asia/Tokyo"
```

#### `target-branch`

Predeterminadamente, el {% data variables.product.prodname_dependabot %} revisa si hay archivos de manifiesto en las ramas predeterminadas y levanta solicitudes de extracción para las actualizaciones de versión contra dicha rama. Utiliza `target-branch` para especificar una rama diferente para los archivos de manifiesto y para las solicitudes de extracción. Cuando utilizas esta opción, la configuración para este administrador de paquete ya no afectará ninguna solicitud de extracción que se haya levantado para las actualizaciones de seguridad.

```yaml
# Specify a non-default branch for pull requests for pip

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise pull requests for version updates
    # to pip against the `develop` branch
    target-branch: "develop"
    # Labels on pull requests for version updates only
    labels:
      - "pip dependencies"

  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
    # Labels on pull requests for security and version updates
    labels:
      - "npm dependencies"
```

#### `vendor`

Utiliza la opción `vendor` para indicar al {% data variables.product.prodname_dependabot %} delegar las dependencias a los proveedores cuando se actualicen. No utilices esta opción si estás usando `gomod`, ya que el {% data variables.product.prodname_dependabot %} detecta la delegación a vendedores automáticamente para esta herramienta.

```yaml
# Configure version updates for both dependencies defined in manifests and vendored dependencies

version: 2
updates:
  - package-ecosystem: "bundler"
    # Raise pull requests to update vendored dependencies that are checked in to the repository
    vendor: true
    directory: "/"
    schedule:
      interval: "weekly"
```

El {% data variables.product.prodname_dependabot %} solo actualiza las dependencias delegadas a proveedores que se ubiquen en directorios específicos en un repositorio.

| Administración de paquetes | Ruta de archivo requerida para las dependencias delegadas                                                    | Más información                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `bundler`                  | Las dependencias deben estar en el directorio _vendor/cache_.</br>Otras rutas de archivo no son compatibles. | [documentación de `bundle cache`](https://bundler.io/man/bundle-cache.1.html) |
| `gomod`                    | No hay requisitos de ruta (las dependencias se ubican habitualmente en el directorio _vendor_)               | [documentación de `go mod vendor`](https://golang.org/ref/mod#go-mod-vendor)  |


#### `versioning-strategy`

Cuando el {% data variables.product.prodname_dependabot %} edita un archivo de manifiesto para actualizar una versión, utiliza las siguientes estrategias generales:

- Para las apps, los requisitos de versión se incrementan, por ejemplo: npm, pip y Composer.
- Para las bibliotecas, el rango de versiones se amplía, por ejemplo: Bundler y Cargo.

Utiliza la opción `versioning-strategy` para cambiar este comportamiento para los administradores de paquete compatibles.

{% data reusables.dependabot.option-affects-security-updates %}

Estrategias de actualización disponibles

| Opción                  | Compatible con                                      | Acción                                                                                                                                                                  |
| ----------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lockfile-only`         | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Crear únicamente solicitudes de cambios para actualizar archivos de bloqueo. Ignorar cualquier versión nueva que pudiera requerir cambios en el paquete del manifiesto. |
| `auto`                  | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Seguir la estrategia predeterminada descrita anteriormente.                                                                                                             |
| `widen`                 | `composer`, `npm`                                   | Relajar el requisito de versión para que incluya tanto la versión nueva como la anterior, cuando sea posible.                                                           |
| `increase`              | `bundler`, `composer`, `npm`                        | Siempre incrementar el requisito de versión para que empate con la versión nueva.                                                                                       |
| `increase-if-necessary` | `bundler`, `composer`, `npm`                        | Incrementar el requisito de versión únicamente cuando lo requiera la versión nueva.                                                                                     |

```yaml
# Customize the manifest version strategy

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Update the npm manifest file to relax
    # the version requirements
    versioning-strategy: widen

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Increase the version requirements for Composer
    # only when required
    versioning-strategy: increase-if-necessary

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Only allow updates to the lockfile for pip and
    # ignore any version updates that affect the manifest
    versioning-strategy: lockfile-only
```

### Opciones de configuración para los registros privados

La clave de nivel superior `registries` es opcional. Esta te permite especificar los detalles de autenticación que el {% data variables.product.prodname_dependabot %} puede utilizar para acceder a los registros de paquetes privados.

{% note %}

**Nota:** Los registros privados detras de los cortafuegos en las redes privadas no son compatibles.

{% endnote %}

El valor de la clave `registries` es un arreglo asociativo, del cual cada elemento consiste de una clave que identifica un registro en particular y un valor que es un arreglo asociativo que especifica la configuración que se requiere para acceder a dicho registro. El siguiente archivo de *dependabot.yml* configura un registro que se identifica como `dockerhub` en la sección de `registries` del archivo y luego lo referencia en la sección de `updates` del mismo.

{% raw %}
```yaml
# Minimal settings to update dependencies in one private registry

version: 2
registries:
  dockerhub: # Define access for a private registry 
    type: docker-registry
    url: registry.hub.docker.com
    username: octocat
    password: ${{secrets.DOCKERHUB_PASSWORD}}
updates:
  - package-ecosystem: "docker"
    directory: "/docker-registry/dockerhub"
    registries:
    - dockerhub # Allow version updates for dependencies in this registry
    schedule:
      interval: "monthly"
```
{% endraw %}

Utilizarás las siguientes opciones para especificar la configuración de acceso. La configuración del registro debe contener un `type` y una `url` y, habitualmente, ya sea una combinación de `username` y `password` o un `token`.

| Opción&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Descripción                                                                                                                                                                                                                                                                                                                |
|:------------------------------------------------------------------------------------------------------ |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                 | Identifica el tipo de registro. Consulta la lista completa de tipos más adelante.                                                                                                                                                                                                                                          |
| `url`                                                                                                  | La URL a utilizar para acceder a las dependencias en el registro. El protocolo es opcional. Si no se especifica, se asumirá que es `https://`. El {% data variables.product.prodname_dependabot %} agrega o ignora las diagonales iniciales conforme sea necesario.                                                        |
| `nombre de usuario`                                                                                    | El nombre de usuario que utilizará el {% data variables.product.prodname_dependabot %} para acceder al registro.                                                                                                                                                                                                           |
| `contraseña`                                                                                           | Una referencia a un secreto del {% data variables.product.prodname_dependabot %} que contenga la contraseña del usuario específico. Para obtener más información, consulta la sección "[Administrar los secretos cifrados del Dependabot](/github/administering-a-repository/managing-encrypted-secrets-for-dependabot)".  |
| `token`                                                                                                | Una referencia a un secreto del {% data variables.product.prodname_dependabot %} que contenga un token de acceso para este registro. Para obtener más información, consulta la sección "[Administrar los secretos cifrados del Dependabot](/github/administering-a-repository/managing-encrypted-secrets-for-dependabot)". |
| `replaces-base`                                                                                        | Para los registros con `type: python-index`, si el valor booleano es `true`, pip resuleve las dependencias utilizando la URL especificada en vez de la URL base del Índice de Paquetes de Python (que predeterminadamente es `https://pypi.org/simple`).                                                                   |


Cada `type` de configuración requiere que proporciones ajustes en particular. Algunos tipos permiten más de una forma de conectarse. Las siguientes secciones proporcionan detalles de las configuraciones que deberías utilizar para cada `type`.

#### `composer-repository`

El tipo `composer-repository` es compatible con nombre de usuario y contraseña.

{% raw %}
```yaml
registries:
  composer:
    type: composer-repository
    url: https://repo.packagist.com/example-company/
    username: octocat
    password: ${{secrets.MY_PACKAGIST_PASSWORD}}
```
{% endraw %}

#### `docker-registry`

El tipo `docker-registry` es compatible con nombre de usuario y contraseña.

{% raw %}
```yaml
registries:
  dockerhub:
    type: docker-registry
    url: https://registry.hub.docker.com
    username: octocat
    password: ${{secrets.MY_DOCKERHUB_PASSWORD}}
```
{% endraw %}

#### `git`

El tipo `git` es compatible con nombre de usuario y contraseña.

{% raw %}
```yaml
registries:
  github-octocat:
    type: git
    url: https://github.com
    username: x-access-token
    password: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

#### `maven-repository`

El tipo `maven-repository` es compatible con nombre de usuario y contraseña, o token.

{% raw %}
```yaml
registries:
  maven-artifactory:
    type: maven-repository
    url: https://artifactory.example.com
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

#### `npm-registry`

El tipo `npm-registry` es compatible con nombre de usuario y contraseña, o token.

{% raw %}
```yaml
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  npm-github:
    type: npm-registry
    url: https://npm.pkg.github.com
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

#### `nuget-feed`

El tipo `nuget-feed` es compatible con nombre de usuario y contraseña, o token.

{% raw %}
```yaml
registries:
  nuget-example:
    type: nuget-feed
    url: https://nuget.example.com/v3/index.json
    username: octocat@example.com
    password: ${{secrets.MY_NUGET_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  nuget-azure-devops:
    type: nuget-feed
    url: https://pkgs.dev.azure.com/.../_packaging/My_Feed/nuget/v3/index.json
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
```
{% endraw %}

#### `python-index`

El tipo `python-index` es compatible con nombre de usuario y contraseña, o token.

{% raw %}
```yaml
registries:
  python-example:
    type: python-index
    url: https://example.com/_packaging/my-feed/pypi/example
    username: octocat
    password: ${{secrets.MY_BASIC_AUTH_PASSWORD}}
    replaces-base: true
```
{% endraw %}

{% raw %}
```yaml
registries:
  python-azure:
    type: python-index
    url: https://pkgs.dev.azure.com/octocat/_packaging/my-feed/pypi/example
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
    replaces-base: true
```
{% endraw %}

#### `rubygems-server`

El tipo `rubygems-server` es compatible con nombre de usuario y contraseña, o token.

{% raw %}
```yaml
registries:
  ruby-example:
    type: rubygems-server
    url: https://rubygems.example.com
    username: octocat@example.com
    password: ${{secrets.MY_RUBYGEMS_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}