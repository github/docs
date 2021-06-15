---
title: Habilitar e inhabilitar las actualizaciones de versión
intro: 'Puedes configurar tu repositorio para que el {% data variables.product.prodname_dependabot %} actualice automáticamente los paquetes que utilizas.'
permissions: 'People with write permissions to a repository can enable or disable {% data variables.product.prodname_dependabot_version_updates %} for the repository.'
redirect_from:
  - /github/administering-a-repository/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/enabling-and-disabling-version-updates
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About version updates for dependencies".-->

### Acerca de las actualizaciones de versión para las dependencias

Habilitarás {% data variables.product.prodname_dependabot_version_updates %} mediante la selección de un archivo de configuración de *dependabot.yml* en el directorio `.github` dentro de tu repositorio. El {% data variables.product.prodname_dependabot %} levanta entonces las solicitudes de extracción para mantener actualizadas las dependencias que configures. Para cada dependencia del administrador de paquete que quieras actualizar, debes especificar la ubicación de los archivos de manifiesto de dicho paquete, así como la periodicidad en la que quieres buscar actualizaciones para las dependencias listadas en esos archivos. Para obtener más información sobre habilitar las actualizaciones de seguridad, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)".

{% data reusables.dependabot.initial-updates %} Para obtener más información, consulta la sección "[Personalizar las actualizaciones de las dependencias](/github/administering-a-repository/customizing-dependency-updates)".

{% data reusables.dependabot.private-dependencies-note %} Adicionalmente, el {% data variables.product.prodname_dependabot %} no es compatible con dependencias privadas de {% data variables.product.prodname_dotcom %} para todos los administradores de paquetes. Para obtener más información, consulta las secciones "[Acerca de las actualizaciones de versión del Dependabot](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)" y "[Soporte para idiomas de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/github-language-support)".

### Habilitar las {% data variables.product.prodname_dependabot_version_updates %}

{% data reusables.dependabot.create-dependabot-yml %} Para obtener más información, consulta la sección "[Opciones de configuración para las actualziaciones de las dependencias](/github/administering-a-repository/configuration-options-for-dependency-updates)".
1. Agrega una `version`.
1. Opcionalmente, si tienes dependencias en un registro privado, agrega una sección de `registries` que contenga los detalles de autenticación.
1. Agrega una sección de `updates` con una entrada para cada administrador de paquetes que quieras que monitoree el {% data variables.product.prodname_dependabot %}.
1. Para cada administrador de paquete, utiliza:
    - `package-ecosystem` para especificar el administrador de paquetes.
    - `directory` para especificar la ubicación del manifiesto u otros archivos de definición.
    - `schedule.interval` para especificar qué tan a menudo se debe revisar si hay nuevas versiones.
{% data reusables.dependabot.check-in-dependabot-yml %}

#### Archivo *dependabot.yml* de ejemplo

El archivo de ejemplo *dependabot.yml* que se muestra a continuación actualiza dos administradores de paquetes: npm y Docker. Cuando se registra este archivo, el {% data variables.product.prodname_dependabot %} revisa los archivos de manifiesto en la rama predeterminada par ver si hay dependencias desactualizadas. Si encuentra dependencias desactualizadas, levantará solicitudes de extracción contra la rama predeterminada para actualizar estas dependencias.

```yaml
# Basic dependabot.yml file with
# minimum configuration for two package managers

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: "daily"

  # Enable version updates for Docker
  - package-ecosystem: "docker"
    # Look for a `Dockerfile` in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"
```

En el ejemplo anterior, si las dependencias de Docker estuvieran muy desactualizadas, tal vez quisieras comenzar con una programación de tipo `daily` hasta que las dependencias estén bien actualizadas y, posteriormente, tomar una programación semanal.

#### Habilitar las actualizaciones de versión en las bifurcaciones

Si quieres habilitar las actualizaciones de versión en las bifurcaciones, hay un paso extra que debes tomar. Las actualizaciones de versión no se habilitan automáticamente en las bifurcaciones cuando existe un archivo de configuración *dependabot.yml*. Esto garantiza que los dueños de la bifurcación no habiliten las actualizaciones de versión accidentalmente cuando suben cambios, incluyendo el archivo de configuración *dependabot.yml* del repositorio original.

En una bifurcación, también necesitas habilitar explícitamente el {% data variables.product.prodname_dependabot %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
5. Debajo de "Habilitar el Dependabot", da clic en **Enable Dependabot**.

### Revisar el estado de las actualizaciones de versión

Después de que habilitas las actualizaciones de versión, verás una nueva pestaña de **Dependabot** en la gráfica de dependencias del repositorio. Esta pestaña muestra los administradores de paquetes para los cuales se configuró el monitoreo del {% data variables.product.prodname_dependabot %} y cuándo éste revisó las últimas versiones.

![Pestaña de perspectivas de repositorio, gráfica de dependencias, pestaña de dependabot](/assets/images/help/dependabot/dependabot-tab-view-beta.png)

Para obtener más información, consulta la sección "[Listar las dependencias configuradas para las actualizaciones de versión](/github/administering-a-repository/listing-dependencies-configured-for-version-updates)".

### Inhabilitar las {% data variables.product.prodname_dependabot_version_updates %}

Puedes inhabilitar las actualizaciones de versión completamente si eliminas el archivo *dependabot.yml* de tu repositorio. Normalmente, tal vez quieras inhabilitar las actualizaciones temporalmente para una o más dependencias o administradores de paquete.

- Administradores de paquete: inhabilítalas configurando `open-pull-requests-limit: 0` o dejando de comentar el `package-ecosystem` relevante en el archivo de configuración.
- Dependencias específicas: inhabilítalas agregando los atributos de `ignore` para los paquetes o aplicaciones que quieras excluir de las actualizaciones.

Cuando inhabilitas las dependencias, puedes utilizar comodines para empatar con un conjunto de bibliotecas relacionadas. También puedes especificar qué versiones excluir. Esto es particularmente útil si necesitas bloquear actualizaciones en una biblioteca, el trabajo pendiente para apoyar un cambio sustancial en su API, pero quieres quieres obtener cualquier arreglo de seguridad para la versión que utilices.

#### Ejemplo de inhabilitar las actualizaciones de versión para algunas dependencias

En este archivo de *dependabot.yml* de ejemplo se incluyen ejemplos de las formas diferentes para inhabilitar las actualizaciones en algunas dependencias, mientras que se permite que otras actualizaciones continuen.

```yaml
# dependabot.yml file with updates
# disabled for Docker and limited for npm

version: 2
updates:
  # Configuration for Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Disable all pull requests for Docker dependencies
    open-pull-requests-limit: 0

  # Configuration for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
      # For all packages, ignore all patch updates
      - dependency-name: "*"
        update-types: ["version-update:semver-patch"]
```

Para obtener más información acerca de revisar si existen preferencias para ignorar, consulta la sección "[Opciones de configuración para las actualizaciones de depdendencias](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)".
