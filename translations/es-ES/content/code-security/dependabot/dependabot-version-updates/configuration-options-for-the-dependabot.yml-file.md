---
title: Opciones de configuración para el archivo dependabot.yml
intro: 'La información detallada para todas las opciones que puedes utilizar para personalizar como el {% data variables.product.prodname_dependabot %} mantiene tus repositorios.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: reference
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure dependabot.yml
ms.openlocfilehash: f7753a73f4a889b3c97ca1f47ad3dc1d41da5bc8
ms.sourcegitcommit: 8544f120269257d01adfe4a27b62f08fc8691727
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 08/02/2022
ms.locfileid: '147444657'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## <a name="about-the-dependabotyml-file"></a>Acerca del archivo *dependabot.yml*

El archivo de configuración de {% data variables.product.prodname_dependabot %}, *dependabot.yml*, utiliza la sintaxis YAML. Si no está familiarizado con YAML y quiere obtener más información, vea "[Aprender YAML en cinco minutos](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)".

Debe almacenar este archivo en el directorio `.github` del repositorio. Cuando agrega o actualiza el archivo *dependabot.yml*, se activa una comprobación inmediata de las actualizaciones de la versión. Para obtener más información y un ejemplo, vea "[Configuración de las actualizaciones de la versión de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-dependabot-version-updates)".

Cualquier opción que también afecte las actualizaciones de seguridad se utiliza en la siguiente ocasión en que una alerta de seguridad active una solicitud de cambios para una actualización de seguridad.  Para más información, vea "[Configuración de {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)".

El archivo *dependabot.yml* tiene dos claves obligatorias de nivel superior: `version` y `updates`. Opcionalmente, puedes incluir una clave `registries` de nivel superior{% ifversion ghes = 3.5 %} o una clave `enable-beta-ecosystems`{% endif %}. El archivo debe comenzar por `version: 2`.

## <a name="configuration-options-for-the-dependabotyml-file"></a>Opciones de configuración para el archivo *dependabot.yml*

La clave `updates` de nivel superior es obligatoria. La utilizas para configurar la forma en que el {% data variables.product.prodname_dependabot %} actualiza las versiones o las dependencias de tu proyecto. Cada entrada configura los ajustes de actualización para un administrador de paquetes en particular. Puede utilizar las siguientes opciones.

{% data reusables.dependabot.configuration-options %}

Estas opciones caen a groso modo en las siguientes categorías.

- Opciones básicas de configuración que debe incluir en todas las configuraciones: [`package-ecosystem`](#package-ecosystem), [`directory`](#directory) y [`schedule.interval`](#scheduleinterval).
- Opciones para personalizar la programación de la actualización: [`schedule.time`](#scheduletime), [`schedule.timezone`](#scheduletimezone) y [`schedule.day`](#scheduleday).
- Opciones para controlar qué dependencias se actualizan: [`allow`](#allow), [`ignore`](#ignore) y [`vendor`](#vendor).
- Opciones para agregar metadatos a solicitudes de incorporación de cambios: [`reviewers`](#reviewers), [`assignees`](#assignees), [`labels`](#labels) y [`milestone`](#milestone).
- Opciones para cambiar el comportamiento de las solicitudes de incorporación de cambios: [`target-branch`](#target-branch), [`versioning-strategy`](#versioning-strategy), [`commit-message`](#commit-message), [`rebase-strategy`](#rebase-strategy) y [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator).

Además, la opción [`open-pull-requests-limit`](#open-pull-requests-limit) cambia el número máximo de solicitudes de incorporación de cambios para las actualizaciones de la versión que {% data variables.product.prodname_dependabot %} puede abrir.

{% note %}

**Nota**: Algunas de estas opciones de configuración también pueden afectar a las solicitudes de incorporación de cambios que se generan para las actualizaciones de seguridad de los manifiestos de paquetes vulnerables.

Las actualizaciones de seguridad se levantan para los manifiestos de paquetes vulnerables únicamente en la rama predeterminada. Cuando se establecen opciones de configuración para la misma rama (true, a menos que use `target-branch`), y especifique un elemento `package-ecosystem` y `directory` para el manifiesto vulnerable, las solicitudes de incorporación de cambios para las actualizaciones de seguridad usan opciones relevantes.

En general, las actualizaciones de seguridad utilizan cualquier opción de configuración que afecte las solicitudes de extracción, por ejemplo, agregar metadatos o cambiar su comportamiento. Para obtener más información acerca de las actualizaciones de seguridad, vea "[Configuración de {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)".

{% endnote %}

### `package-ecosystem`

**Requerido**. Agregará un elemento `package-ecosystem` para cada administrador de paquetes que quiera que {% data variables.product.prodname_dependabot %} supervise a fin de encontrar versiones nuevas. El repositorio también debe contener un archivo bloqueado o de manifiesto de dependencias para cada uno de estos administradores de paquetes. Si quieres habilitar la delegación a proveedores para un administrador de paquetes que sea compatible con ella, las dependencias delegadas a proveedores deben ubicarse en el directorio requerido. Para más información, vea [`vendor`](#vendor) debajo.

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

### `directory`

**Requerido**. Debe definir la ubicación de los manifiestos de paquetes para cada administrador de paquetes (por ejemplo, *package.json* o *Gemfile*). Tú definierás el directorio relativo a la raíz del repositorio para todos los ecosistemas, menos para GitHub Actions. Para Acciones de GitHub, establezca el directorio en `/` para comprobar si hay archivos de flujo de trabajo en `.github/workflows`.

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

### `schedule.interval`

**Requerido**. Debes definir la frecuencia en la que se verificará si hay versiones nuevas para cada administrador de paquetes. Predeterminadamente, el {% data variables.product.prodname_dependabot %} asigna una hora aleatoria para aplicar todas las actualizaciones en el archivo de configuración. Para establecer una hora específica, puede usar [`schedule.time`](#scheduletime) y [`schedule.timezone`](#scheduletimezone).

- `daily`: se ejecuta cada día de la semana, de lunes a viernes.
- `weekly`: se ejecuta una vez a la semana. Predeterminadamente, esto ocurre los lunes. Para modificar este valor, use [`schedule.day`](#scheduleday).
- `monthly`: se ejecuta una vez al mes. Esto ocurre en el primer día de cada mes.

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

**Nota**: `schedule` define cuándo {% data variables.product.prodname_dependabot %} intenta hacer una nueva actualización. Sin embargo, no es la única ocasión en la que podrías recibir solilcitudes de cambio. Las actualizaciones pueden desencadenarse basándose en los cambios del archivo `dependabot.yml`, los cambios en los archivos de manifiesto después de una actualización errónea o {% data variables.product.prodname_dependabot_security_updates %}. Para más información, vea "[Frecuencia de las solicitudes de incorporación de cambios de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates#frequency-of-dependabot-pull-requests)" y "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)".

{% endnote %}

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Use la opción `allow` para personalizar las dependencias que se actualizan. Esto aplica tanto a la versión como a las actualizaciones de seguridad. Puede utilizar las siguientes opciones:

- `dependency-name`: se usa para permitir actualizaciones de dependencias con nombres que coinciden; opcionalmente, se usa `*` para que coincida con cero o más caracteres. Para las dependencias de Java, el formato del atributo `dependency-name` es `groupId:artifactId`; por ejemplo: `org.kohsuke:github-api`.
- `dependency-type`: se usa para permitir actualizaciones de dependencias de tipos específicos.

  | Tipos de dependencia | Administradores de paquete compatibles | Permitir actualizaciones |
  |------------------|-------------------------------|--------|
  | `direct` | Todo | Todas las dependencias definidas explícitamente. |
  | `indirect` | `bundler`, `pip`, `composer`, `cargo` | Las dependencias de las dependencias directas (también conocidas como sub-dependencias, o dependencias transitorias).|
  | `all` | Todo | Todas las dependencias definidas explícitamente. Para `bundler`, `pip`, `composer` y `cargo`, también las dependencias de las dependencias directas.|
  | `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Solo las dependencias en el "Grupo de dependencias de producción". |
  | `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Únicamente las dependencias en el "Grupo de dependencias de desarrollo". |

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

### `assignees`

Use `assignees` a fin de especificar usuarios asignados individuales para todas las solicitudes de incorporación de cambios generadas para un administrador de paquetes.

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

### `commit-message`

Predeterminadamente, el {% data variables.product.prodname_dependabot %} intenta detectar tus preferencias de mensajes de confirmación y utiliza patrones similares. Use la opción `commit-message` para especificar sus preferencias explícitamente.

Opciones admitidas

{% note %}

**Nota**: Las opciones `prefix` y `prefix-development` tienen un límite de 15 caracteres.

{% endnote %}

- `prefix` especifica un prefijo para todos los mensajes de confirmación.
- `prefix-development` especifica un prefijo independiente para todos los mensajes de confirmación que actualizan las dependencias en el grupo de dependencias de desarrollo. Cuando se especifica un valor para esta opción, `prefix` se utiliza únicamente para las actualizaciones a las dependencias en el grupo de dependencias de producción. Esta opción es compatible con: `bundler`, `composer`, `mix`, `maven`, `npm` y `pip`.
- `include: "scope"` especifica que cualquier prefijo va seguido de una lista de las dependencias actualizadas en la confirmación.

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
Si usas la misma configuración que en el ejemplo anterior, el aumento de la versión de la biblioteca `requests` en el grupo de dependencias de desarrollo `pip` generará un mensaje de confirmación como el siguiente:

   `pip dev: bump requests from 1.0.0 to 1.0.1`
   
### `ignore`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Las dependencias se pueden omitir agregándolas a `ignore` o mediante el comando `@dependabot ignore` en una solicitud de incorporación de cambios que abra {% data variables.product.prodname_dependabot %}.

#### <a name="creating-ignore-conditions-from-dependabot-ignore"></a>Creación de condiciones `ignore` a partir de `@dependabot ignore`

Las dependencias omitidas mediante el comando `@dependabot ignore` se almacenan de forma centralizada para cada administrador de paquetes. Si empieza a omitir las dependencias del archivo `dependabot.yml`, estas preferencias existentes se tienen en cuenta junto con las dependencias `ignore` de la configuración.

Para comprobar si un repositorio tiene preferencias `ignore` almacenadas, busque en el repositorio `"@dependabot ignore" in:comments`. Si quieres dejar de ignorar una dependencia que se haya ignorado de esta forma, vuelve a abrir la solicitud de cambios.

Para obtener más información acerca de los comandos `@dependabot ignore`, vea "[Administración de solicitudes de incorporación de cambios para las actualizaciones de dependencias](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)".

#### <a name="specifying-dependencies-and-versions-to-ignore"></a>Especificar dependencias y versiones para ignorar

Puede usar la opción `ignore` para personalizar las dependencias que se actualizan. La opción `ignore` admite las siguientes opciones.

- `dependency-name`: se usa para omitir actualizaciones de dependencias con nombres que coinciden; opcionalmente, se usa `*` para que coincida con cero o más caracteres. Para las dependencias de Java, el formato del atributo `dependency-name` es `groupId:artifactId`; por ejemplo: `org.kohsuke:github-api`. {% ifversion dependabot-grouped-dependencies %} Para impedir que {% data variables.product.prodname_dependabot %} actualice automáticamente las definiciones de tipo de TypeScript desde DefinitelyTyped, usa `@types/*`.{% endif %}
- `versions`: se usa para omitir versiones o rangos específicos de las versiones. Si quiere definir un rango, use el patrón estándar para el administrador de paquetes (por ejemplo: `^1.0.0` para npm o `~> 2.0` para Bundler).
- `update-types`: se usa para omitir los tipos de actualizaciones, como las actualizaciones `major`, `minor` o `patch` de semver en las actualizaciones de versiones (por ejemplo: `version-update:semver-patch` omitirá las actualizaciones de revisiones). Puede combinarlo con `dependency-name: "*"` a fin de omitir elementos `update-types` concretos para todas las dependencias. Actualmente, `version-update:semver-major`, `version-update:semver-minor` y `version-update:semver-patch` son las únicas opciones admitidas. Este ajuste no afectará a las actualizaciones de seguridad.

Si `versions` y `update-types` se usan de forma conjunta, {% data variables.product.prodname_dependabot %} omitirá las actualizaciones de cualquiera de los conjuntos.

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
        # For AWS SDK, ignore all patch updates
      - dependency-name: "aws-sdk"
        update-types: ["version-update:semver-patch"]
```

{% note %}

**Nota**: {% data variables.product.prodname_dependabot %} solo puede ejecutar actualizaciones de versión en los archivos de bloqueo o de manifiesto si puede acceder a todas las dependencias en estos archivos, incluso si agrega dependencias inaccesibles a la opción `ignore` del archivo de configuración. Para obtener más información, vea "[Administración de la configuración de seguridad y análisis para su organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)" y "[Solución de problemas de errores de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)".


{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% note %}

**Nota**: Para el ecosistema `pub`, {% data variables.product.prodname_dependabot %} no realizará una actualización cuando se omita la versión a la que intenta actualizar, incluso si hay disponible una versión anterior.

{% endnote %}

{% endif %}

### `insecure-external-code-execution`

Los administradores de paquetes con los valores `bundler`, `mix` y `pip` de `package-ecosystem` pueden ejecutar código externo en el manifiesto como parte del proceso de actualización de la versión. Esto podría permitir que un paquete que se haya puesto en riesgo borre las credenciales u obtenga acceso a los registros configurados. Al agregar un valor [`registries`](#registries) en una configuración `updates`, {% data variables.product.prodname_dependabot %} impide automáticamente la ejecución de código externo, en cuyo caso se puede producir un error en la actualización de la versión. Puede optar por invalidar este comportamiento y permitir la ejecución de código externo para los administradores de paquetes `bundler`, `mix` y `pip` estableciendo `insecure-external-code-execution` en `allow`.

Puede denegar explícitamente la ejecución de código externo, independientemente de si hay un valor `registries` para esta configuración de actualización, estableciendo `insecure-external-code-execution` en `deny`.

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

### `labels`

{% data reusables.dependabot.default-labels %}

Utilice `labels` a fin de anular las etiquetas predeterminadas y especificar etiquetas alternas para todas las solicitudes de incorporación de cambios que se hayan generado para un administrador de paquetes. Si ninguna de estas etiquetas se define en el repositorio, entonces se ha ignorado.
Para deshabilitar todas las etiquetas, incluidas las predeterminadas, use `labels: [ ]`.

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

### `milestone`

Use `milestone` a fin de asociar todas las solicitudes de incorporación de cambios generadas para un administrador de paquetes con un hito. Necesitas especificar el identificador numérico del hito y, no así, su etiqueta. Si ve un hito, la parte final de la dirección URL de la página, después de `milestone`, es el identificador. Por ejemplo: `https://github.com/<org>/<repo>/milestone/3`.

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

### `open-pull-requests-limit`

Predeterminadamente, {% data variables.product.prodname_dependabot %} abre un máximo de cinco solicitudes de extracción para las actualizaciones de versión. Una vez que hayan cinco solicitudes de cambio abiertas, las solicitudes nuevas se bloquearán hasta que fusiones o cierres algunas de las sollicitudes abiertas, después de lo cual, las solicitudes de cambiso nuevas pueden abrirse en actualizaciones subsecuentes. Use `open-pull-requests-limit` para cambiar este límite. Esto también proporciona una forma simple de inhabilitar temporalmente las actualizaciones de versión para un administrador de paquete.

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

### `pull-request-branch-name.separator`

El {% data variables.product.prodname_dependabot %} genera una rama para cada solicitud de extracción. Cada nombre de rama incluye `dependabot`, así como el administrador de paquetes y la dependencia que se actualizan. De manera predeterminada, estas partes están separadas por un símbolo `/`, por ejemplo: `dependabot/npm_and_yarn/next_js/acorn-6.4.1`.

Use `pull-request-branch-name.separator` para especificar un separador diferente. Puede ser `"-"`, `_` o `/`. El símbolo de guión debe estar entre comillas porque, de lo contrario, se interpretará como que está declarando una lista YAML vacía.

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

### `rebase-strategy`

Predeterminadamente, el{% data variables.product.prodname_dependabot %} rebasa automáticamente las solicitudes de cambios abiertas y detecta cualquier cambio en ellas. Use `rebase-strategy` para deshabilitar este comportamiento.

Estrategias de rebase disponibles

- `disabled` para deshabilitar la fusión automática mediante cambio de base.
- `auto` para utilizar el comportamiento predeterminado y fusionar mediante cambio de base las solicitudes de incorporación de cambios abiertas cuando se detecten cambios.

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

### `registries`

Para permitir que {% data variables.product.prodname_dependabot %} acceda a un registro de paquetes privado al realizar una actualización de versión, debe incluir un valor `registries` en la configuración `updates` pertinente. Puede permitir que todos los registros definidos se usen estableciendo `registries` en `"*"`. Como alternativa, puedes listar los registros que puede utilizar la actualización. Para ello, use el nombre del registro tal y como se define en la sección `registries` de nivel superior del archivo _dependabot.yml_. Para obtener más información, vea "[Opciones de configuración para registros privados](#configuration-options-for-private-registries)" debajo.

Para permitir que {% data variables.product.prodname_dependabot %} use los administradores de paquetes `bundler`, `mix` y `pip` a fin de actualizar las dependencias de los registros privados, puede optar por permitir la ejecución de código externo. Para más información, vea la sección [`insecure-external-code-execution`](#insecure-external-code-execution) anterior.

```yaml
# Allow {% data variables.product.prodname_dependabot %} to use one of the two defined private registries
# when updating dependency versions for this ecosystem

{% raw %}
version: 2
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
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
{% endraw %}
```

### `reviewers`

Utilice `reviewers` a fin de especificar los revisores o equipos individuales de revisores para las solicitudes de incorporación de cambios generadas para un administrador de paquetes. Debe utilizar el nombre completo del equipo, incluida la organización, como si estuviera @mentioning al equipo.

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

### `schedule.day`

Cuando configura una programación de actualizaciones de tipo `weekly`, de manera predeterminada, {% data variables.product.prodname_dependabot %} revisa si hay versiones nuevas los lunes a una hora aleatoria para el repositorio. Use `schedule.day` para especificar un día alternativo a fin de buscar actualizaciones.

Valores admitidos

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

### `schedule.time`

Predeterminadamente, el {% data variables.product.prodname_dependabot %} revisa si hay nuevas versiones en una hora aleatoria para el repositorio. Use `schedule.time` para especificar una hora alternativa y comprobar si hay actualizaciones (formato: `hh:mm`).

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

### `schedule.timezone`

Predeterminadamente, el {% data variables.product.prodname_dependabot %} revisa si hay nuevas versiones en una hora aleatoria para el repositorio. Use `schedule.timezone` para especificar una zona horaria alternativa. El identificador de zona horaria debe formar parte de la base de datos Time Zone que mantiene [iana](https://www.iana.org/time-zones). Para obtener más información, vea [Lista de zonas horarias de la base de datos tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

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

### `target-branch`

Predeterminadamente, el {% data variables.product.prodname_dependabot %} revisa si hay archivos de manifiesto en las ramas predeterminadas y levanta solicitudes de extracción para las actualizaciones de versión contra dicha rama. Use `target-branch` a fin de especificar una rama diferente para los archivos de manifiesto y las solicitudes de incorporación de cambios. Cuando utilizas esta opción, la configuración para este administrador de paquete ya no afectará ninguna solicitud de extracción que se haya levantado para las actualizaciones de seguridad.

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

### `vendor`

Use la opción `vendor` para indicar a {% data variables.product.prodname_dependabot %} que traslade las dependencias al directorio "vendor" cuando se actualicen. No utilice esta opción si está usando `gomod`, ya que {% data variables.product.prodname_dependabot %} detecta automáticamente el traslado al directorio "vendor" para esta herramienta.

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

| Administrador de paquetes | Ruta de archivo requerida para las dependencias delegadas | Más información |
  |------------------|-------------------------------|--------|
  | `bundler` | Las dependencias deben estar en el directorio _vendor/cache_.</br>Otras rutas de archivos no son compatibles. | [Documentación de `bundle cache`](https://bundler.io/man/bundle-cache.1.html) |
  | `gomod` | Ningún requisito de ruta de acceso (las dependencias normalmente se encuentran en el directorio _vendor_) | [Documentación de `go mod vendor`](https://golang.org/ref/mod#go-mod-vendor) |


### `versioning-strategy`

Cuando el {% data variables.product.prodname_dependabot %} edita un archivo de manifiesto para actualizar una versión, utiliza las siguientes estrategias generales:

- Para las apps, los requisitos de versión se incrementan, por ejemplo: npm, pip y Composer.
- Para las bibliotecas, el rango de versiones se amplía, por ejemplo: Bundler y Cargo.

Use la opción `versioning-strategy` a fin de cambiar este comportamiento para los administradores de paquetes admitidos.

{% data reusables.dependabot.option-affects-security-updates %}

Estrategias de actualización disponibles

| Opción | Compatible con | Acción |
|--------|--------------|--------|
| `lockfile-only` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Crear únicamente solicitudes de cambios para actualizar archivos de bloqueo. Ignorar cualquier versión nueva que pudiera requerir cambios en el paquete del manifiesto. |
| `auto` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Seguir la estrategia predeterminada descrita anteriormente.|
| `widen`| `composer`, `npm` | Relajar el requisito de versión para que incluya tanto la versión nueva como la anterior, cuando sea posible. |
| `increase`| `bundler`, `composer`, `npm` | Siempre incrementar el requisito de versión para que empate con la versión nueva. |
| `increase-if-necessary` | `bundler`, `composer`, `npm` | Incrementar el requisito de versión únicamente cuando lo requiera la versión nueva. |

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

## <a name="configuration-options-for-private-registries"></a>Opciones de configuración para los registros privados

La clave `registries` de nivel superior es opcional. Esta te permite especificar los detalles de autenticación que el {% data variables.product.prodname_dependabot %} puede utilizar para acceder a los registros de paquetes privados.

{% note %}

**Nota**: No se admiten registros privados detrás de firewalls en redes privadas.

{% endnote %}

El valor de la clave `registries` es una matriz asociativa, de la cual cada elemento consiste en una clave que identifica un registro en particular y un valor que es una matriz asociativa que especifica la configuración que se requiere para acceder a dicho registro. El siguiente archivo *dependabot.yml* configura un registro identificado como `dockerhub` en la sección `registries` del archivo y, después, hace referencia a este en la sección `updates` del archivo.

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

Utilizarás las siguientes opciones para especificar la configuración de acceso. La configuración del registro debe contener un elemento `type` y otro `url`, y normalmente incluirán una combinación `username` y `password`, o un elemento `token`.

| Opción&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Descripción |
|:---|:---|
| `type`                     | Identifica el tipo de registro. Consulta la lista completa de tipos más adelante. |
| `url`                      | La URL a utilizar para acceder a las dependencias en el registro. El protocolo es opcional. Si no se especifica, se da por hecho el valor `https://`. El {% data variables.product.prodname_dependabot %} agrega o ignora las diagonales iniciales conforme sea necesario. |
| `username`                 | El nombre de usuario que utilizará el {% data variables.product.prodname_dependabot %} para acceder al registro. |
| `password`                 | Una referencia a un secreto del {% data variables.product.prodname_dependabot %} que contenga la contraseña del usuario específico. Para más información, vea "[Administración de secretos cifrados para Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)". |
| `key`                    | Una referencia a un secreto del {% data variables.product.prodname_dependabot %} que contenga una clave de acceso para este registro. Para más información, vea "[Administración de secretos cifrados para Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)". |
| `token`                    | Una referencia a un secreto del {% data variables.product.prodname_dependabot %} que contenga un token de acceso para este registro. Para más información, vea "[Administración de secretos cifrados para Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)". |
| `replaces-base`            | Para los registros con `type: python-index`, si el valor booleano es `true`, pip resuelve las dependencias mediante la dirección URL especificada en lugar de la URL base del índice de paquetes de Python (de manera predeterminada, `https://pypi.org/simple`). |


Cada configuración `type` requiere que proporcione valores determinados. Algunos tipos permiten más de una forma de conectarse. En las siguientes secciones se proporcionan detalles de las configuraciones que debería utilizar para cada `type`.

### `composer-repository`

El tipo `composer-repository` admite el nombre de usuario y la contraseña.

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

### `docker-registry`

{% note %}

**Nota:** No se admite el Azure Container Registry (ACR).

{% endnote %}

El tipo `docker-registry` admite el nombre de usuario y la contraseña.

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

El tipo `docker-registry` también se puede usar para incorporar cambios de Amazon ECR mediante credenciales estáticas de AWS.

{% raw %}
```yaml
registries:
  ecr-docker:
    type: docker-registry
    url: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
    username: ${{secrets.ECR_AWS_ACCESS_KEY_ID}}
    password: ${{secrets.ECR_AWS_SECRET_ACCESS_KEY}}
```
{% endraw %}

### `git`

El tipo `git` admite el nombre de usuario y la contraseña.

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

### `hex-organization`

El tipo `hex-organization` admite la organización y la clave.

{% raw %}
```yaml
registries:
  github-hex-org:
    type: hex-organization
    organization: github
    key: ${{secrets.MY_HEX_ORGANIZATION_KEY}}
```
{% endraw %}

### `maven-repository`

El tipo `maven-repository` admite el nombre de usuario y la contraseña.

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

### `npm-registry`

El tipo `npm-registry` admite el nombre de usuario y la contraseña, o el token.

Al usar el nombre de usuario y la contraseña, el token de autenticación de `.npmrc` puede contener un elemento `_password` codificada en `base64`; pero la contraseña a la que se hace referencia en el archivo de configuración de {% data variables.product.prodname_dependabot %} debe ser la contraseña original (sin codificar).

{% raw %}
```yaml
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}  # Must be an unencoded password
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

### `nuget-feed`

El tipo `nuget-feed` admite el nombre de usuario y la contraseña, o el token.

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

### `python-index`

El tipo `python-index` admite el nombre de usuario y la contraseña, o el token.

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

### `rubygems-server`

El tipo `rubygems-server` admite el nombre de usuario y la contraseña, o el token.

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

### `terraform-registry`

El tipo `terraform-registry` admite un token.

{% raw %}
```yaml
registries:
  terraform-example:
    type: terraform-registry
    url: https://terraform.example.com
    token: ${{secrets.MY_TERRAFORM_API_TOKEN}}
```
{% endraw %}

{% ifversion fpt or ghec or ghes > 3.4 %} 
## <a name="enabling-support-for-beta-level-ecosystems"></a>Habilitación de la compatibilidad con ecosistemas de nivel beta

### `enable-beta-ecosystems`

De manera predeterminada, {% data variables.product.prodname_dependabot %} actualiza los manifiestos de dependencia y los archivos de bloqueo solo para ecosistemas totalmente compatibles. Use la marca `enable-beta-ecosystems` para optar por recibir las actualizaciones de ecosistemas que aún no están disponibles con carácter general.

```yaml
# Configure beta ecosystem

version: 2
enable-beta-ecosystems: true
updates:{% ifversion fpt or ghec or ghes > 3.5 %}
  - package-ecosystem: "beta-ecosystem"{% else %}
  - package-ecosystem: "pub"{% endif %}
    directory: "/"
    schedule:
      interval: "daily"
```
{% endif %}
