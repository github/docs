---
title: Configuración de un proyecto de Java para GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up with your Java project
intro: 'Crea un contenedor de desarrollo personalizado para empezar a trabajar con tu proyecto de Java en {% data variables.product.prodname_github_codespaces %}.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-java-project-in-codespaces
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: b861744483f61bc01e8069188c1ce6298411d57e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158769'
---
## Introducción

En esta guía se muestra cómo configurar un proyecto de Java en {% data reusables.codespaces.setting-up-project-intro %}.

### Requisitos previos

- Debes tener un proyecto de Java existente en un repositorio de {% data variables.product.prodname_dotcom_the_website %}. Si no tiene un proyecto, puede probar este tutorial con el ejemplo siguiente: https://github.com/microsoft/vscode-remote-try-java.
- Debes tener {% data variables.product.prodname_github_codespaces %} habilitado en tu organización.

## Paso 1: Abre tu proyecto en un codespace

1. Debajo del nombre del repositorio, usa el menú desplegable **{% octicon "code" aria-label="The code icon" %} Código** y, en la pestaña **Codespaces**, haz clic en el signo más ({% octicon "plus" aria-label="The plus icon" %}).

  ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

Cuando creas un codespace, tu proyecto se crea en una MV remota dedicada a ti. Predeterminadamente, el contenedor para tu codespace tiene muchos lenguajes y tiempos de ejecución, incluyendo Java, nvm, npm y Yarn. También incluye un conjunto de herramientas de uso común como git, wget, rsync, openssh y nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Paso 2: agregar una configuración de contenedor de desarrollo al repositorio desde una plantilla

El contenedor de desarrollo predeterminado, o «contenedor de desarrollo», para {% data variables.product.prodname_github_codespaces %} viene con la versión más reciente de Java, los administradores de paquetes (Maven, Gradle) y otras herramientas comunes preinstaladas. Sin embargo, recomendamos que configures tu propio contenedor de desarrollo para incluir todas las herramientas y scripts que necesita el proyecto. Esto garantizará un entorno totalmente reproducible para todos los usuarios de {% data variables.product.prodname_github_codespaces %} en el repositorio.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Para este ejemplo, haga clic en **Java**. En la práctica, podrías seleccionar cualquier contenedor que sea específico de Java o una combinación de herramientas tales como Java y Azure Functions.
  ![Selección de la opción de Java de la lista](/assets/images/help/codespaces/add-java-prebuilt-container.png)
1. Haz clic en la versión recomendada de Java.
  ![Selección de la versión de Java](/assets/images/help/codespaces/add-java-version.png) {% data reusables.codespaces.rebuild-command %}

### Anatomía de tu contenedor dev

Al agregar la plantilla de contenedor de desarrollo de Java, se agrega un directorio `.devcontainer` a la raíz del repositorio del proyecto con los archivos siguientes:

- `devcontainer.json`
- Dockerfile

En el archivo `devcontainer.json` recién agregado se definen varias propiedades que se describen después del ejemplo.

#### devcontainer.json

```json
// For format details, see https://aka.ms/vscode-remote/devcontainer.json or this file's README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java
{
    "name": "Java",
    "build": {
        "dockerfile": "Dockerfile",
        "args": {
            // Update the VARIANT arg to pick a Java version: 11, 14
            "VARIANT": "11",
            // Options
            "INSTALL_MAVEN": "true",
            "INSTALL_GRADLE": "false",
            "INSTALL_NODE": "false",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "java.home": "/docker-java-home",
        "maven.executable.path": "/usr/local/sdkman/candidates/maven/current/bin/mvn"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "vscjava.vscode-java-pack"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "java -version",

    // Uncomment to connect as a non-root user. See https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **name**: puedes asignar cualquier nombre al contenedor de desarrollo; este es solo el valor predeterminado.
- **build**: las propiedades de compilación.
  - **dockerfile**: en el objeto `build`, `dockerfile` contiene la ruta de acceso al Dockerfile que también se ha agregado desde la plantilla.
  - **args**
    - **variant**: este archivo solo contiene un argumento de compilación, que es la versión de Java que se pasa al Dockerfile.
- **settings**: se trata de la configuración de {% data variables.product.prodname_vscode %} que puedes establecer.
  - **terminal.integrated.shell.linux**: aunque aquí bash sea el shell de terminal predeterminado, puedes modificarlo y usar otros.
- **extensions**: extensiones incluidas de forma predeterminada.
  - **vscjava.vscode-java-pack**: el paquete de extensiones de Java proporciona extensiones populares para comenzar con el desarrollo en Java.
- **forwardPorts**: cualquier puerto que se incluya aquí se reenviará de forma automática. Para más información, vea "[Reenvío de puertos en el codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".
- **postCreateCommand**: después de crear el codespace, usa esta opción para ejecutar comandos que no están definidos en el Dockerfile.
- **remoteUser**: de manera predeterminada, la ejecución se realiza como el usuario `vscode`, pero opcionalmente se puede establecer en `root`.

#### Dockerfile

```bash
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java/.devcontainer/base.Dockerfile
ARG VARIANT="14"
FROM mcr.microsoft.com/vscode/devcontainers/java:0-${VARIANT}

# [Optional] Install Maven or Gradle
ARG INSTALL_MAVEN="false"
ARG MAVEN_VERSION=3.6.3
ARG INSTALL_GRADLE="false"
ARG GRADLE_VERSION=5.4.1
RUN if [ "${INSTALL_MAVEN}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install maven \"${MAVEN_VERSION}\""; fi \
    && if [ "${INSTALL_GRADLE}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install gradle \"${GRADLE_VERSION}\""; fi

# [Optional] Install a version of Node.js using nvm for front end dev
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Puedes usar el Dockerfile para agregar capas de contenedor adicionales para especificar paquetes de sistema operativo, versiones de Java o paquetes globales que quieras incluir en nuestro contenedor.

## Paso 3: Modifica tu archivo devcontainer.json

Con la configuración del contenedor de desarrollo agregada y un conocimiento básico de lo que hace cada elemento, ya puedes realizar cambios para personalizar aún más el entorno. En este ejemplo, agregarás porpiedades para instalar extensiones y tus dependencias de pryecto cuando se lance tu codespace.

1. En el Explorador, seleccione el archivo `devcontainer.json` del árbol para abrirlo. Es posible que tenga que expandir la carpeta `.devcontainer` para verlo.

   ![Archivo de devcontainer.json en el explorador](/assets/images/help/codespaces/devcontainers-options.png)

2. Agregue las siguientes líneas al archivo `devcontainer.json` después de `extensions`.

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## Paso 4: Ejecución de la aplicación

En la sección anterior, ha usado `postCreateCommand` para instalar un conjunto de paquetes mediante npm. Ahora puedes utilizar esto para ejecutar nuestra aplicación con npm.

1. Presione `F5` para ejecutar la aplicación.

2. Cuando se inicie el proyecto, deberías ver un mensaje de notificación del sistema en la esquina inferior derecha de {% data variables.product.prodname_vscode_shortname %}, que contiene un mensaje para conectarse al puerto que usa el proyecto.

   ![Notificación del sistema de enrutamiento de puerto](/assets/images/help/codespaces/codespaces-port-toast.png)

## Paso 5: Confirma tus cambios

{% data reusables.codespaces.committing-link-to-procedure %}

## Pasos siguientes

Ahora ya deberías poder empezar a desarrollar tu proyecto de Java en {% data variables.product.prodname_github_codespaces %}. Aquí tienes algunos recursos adicionales para situaciones más avanzadas.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
