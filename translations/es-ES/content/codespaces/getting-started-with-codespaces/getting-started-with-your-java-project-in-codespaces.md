---
title: Iniciar con tu proyecto de Java en Codespaces
shortTitle: Iniciar con tu proyecto de Java
intro: 'Inica con tu proyecto de Java en {% data variables.product.prodname_codespaces %} creando un contenedor dev personalizado.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### Introducción

Esta guía te muestra cómo configurar tu proyecto de Java en {% data variables.product.prodname_codespaces %}. Te mostrará un ejemplo de cómo abrir tu proyecto en un codespace y cómo agregar y modificar una configuración de contenedor de dev desde una plantilla.

#### Prerrequisitos

- Debes tener un proyecto de Java existente en un repositorio de {% data variables.product.prodname_dotcom_the_website %}. Si no tienes un proyecto, puedes probar este tutorial con el siguiente ejemplo: https://github.com/microsoft/vscode-remote-try-java
- Debes tener {% data variables.product.prodname_codespaces %} habilitado en tu organización.

### Paso 1: Abre tu proyecto en un codespace

1. Navega al repositorio de tu proyecto. Utiliza el menú desplegable de {% octicon "download" aria-label="The download icon" %}**Código** y selecciona **Abrir con Codespaces**. Si no ves esta opción, tu proyecto no está disponible para {% data variables.product.prodname_codespaces %}.

  ![Botón de abrir con codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

2. Para crear un codespace nuevo, haz clic en {% octicon "plus" aria-label="The plus icon" %} **Codespace nuevo**. ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

Cuando creas un codespace, tu proyecto se crea en una MV remota dedicada a ti. Predeterminadamente, el contenedor para tu codespace tiene muchos lenguajes y tiempos de ejecución, incluyendo Java, nvm, npm, y yarn. También incluye un conjunto de herramientas comunes como git, wget, rsync, openssh y nano.

Puedes personalizar tu codespace si ajustas la cantidad de vCPU y RAM, [agregando dotfiles para personalizar tu ambiente](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account) o modificando las herramientas y scripts instalados.

{% data variables.product.prodname_codespaces %} utiliza un archivo denominado `devcontainer.json` para almacenar configuraciones. Cuando se lanzan, los {% data variables.product.prodname_codespaces %} utilizan el archivo para instalar cualquier herramienta, dependencia u otro tipo de configuración que pueda necesitarse para el proyecto. Para obtener más información, consulta la sección "[Configurar Codespaces para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".


### Paso 2: Agrega un contenedor de dev a tu codespace desde una plantilla

El contenedor predeterminado para los codespaces viene con la última versión de Java, adminsitradores de paquetes (Maven, Gradle) y otras herramientas comunes preinstaladas. Sin embargo, te recomendamos que configures un contenedor personalizado para definir las herramientas y scripts que necesita tu proyecto. Esto garantizará un ambiente totalmente reproducible para todos los usuarios de {% data variables.product.prodname_codespaces %} de tu repositorio.

Para configurar tu proyecto con un contenedor personalizado, necesitarás utilizar un archivo `devcontainer.json` para definir el ambiente. En {% data variables.product.prodname_codespaces %}, puedes agregarlo ya sea desde una plantilla o puedes crear el tuyo propio. Para obtener más información sobre contenedores dev, consulta la sección "[Configurar Codespaces para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".


1. Accede a la paleta de comandos (`shift command P` / `shift control P`), y luego comienza a teclear "dev container". Haz clic en **Codespaces: Agregar archivos de configuración de contenedores de desarrollo...** !["Codespaces: Agregar archivos de configuración de contenedores de desarrollo..." en la paleta de comandos](/assets/images/help/codespaces/add-prebuilt-container-command.png)
3. Para este ejemplo, haz clic en **Java**. En la práctica, podrías seleccionar cualquier contenedor que sea específico de Java o una combinación de herramientas tales como Java y Azure Functions. ![Selecciona la opción de Java de la lista](/assets/images/help/codespaces/add-java-prebuilt-container.png)
4. Haz clic en la versión recomendada de Java. ![Selección de la versión de Java](/assets/images/help/codespaces/add-java-version.png)
5. Para volver a compilar tu contenedor, accede a la paleta de comandos (`shift command P` / `shift control P`) y luego comienza a teclear "rebuild". Haz clic en **Codespaces: Rebuild Container**. ![Opción de recompilar contenedor](/assets/images/help/codespaces/codespaces-rebuild.png)

#### Anatomía de tu contenedor dev

El agregar la plantilla de contenedor dev de Java agrega una carpeta de `.devcontainer` a la raíz del repositorio de tu proyecto con los siguientes archivos:

- `devcontainer.json`
- Dockerfile

El archivo `devcontainer.json` recién agregado define unas cuantas propiedades que se describen después de la muestra.

##### devcontainer.json

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

- **Name** - Puedes nombrar a tu contenedor dev como quieras, esto es solo lo predeterminado.
- **Build** - Las propiedades de compilación.
  - **Dockerfile** - En el objeto de compilación, dockerfile es una referencia al Dockerfile que también se agregó desde la plantilla.
  - **Args**
    - **Variant**: Este archivo solo contiene un argumento de compilación, el cual es la versión de Java que se pasa al Dockerfile.
- **Settings** - Estos son los ajustes de {% data variables.product.prodname_vscode %} que puedes configurar.
  - **Terminal.integrated.shell.linux** - Si bien bash es lo predeterminado aquí, podrías utilizar otros shells de terminal si lo modificas.
- **Extensions** - Estas son las extensiones que se incluyen predeterminadamente.
  - **Vscjava.vscode-java-pack** - El paquete de extensión de Java proporciona extensiones populares para que puedas comenzar a desarrollar en Java.
- **forwardPorts** - Cualquier puerto que se liste aquí se reenviará automáticamente.
- **postCreateCommand** - Si quieres ejecutar lo que sea después de que llegas a tu codespace, lo cual no está definido en tu Dockerfile, puedes hacerlo aquí.
- **remoteUser** - Predeterminadamente, lo estás ejecutando como el usuario de `vscode`, pero puedes configurar esto como `root` opcionalmente.

##### Dockerfile

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

Puedes utilizar este Dockerfile para agregar capas de contenedor adicionales y especificar paquetes de SO, versiones de Java o paquetes globales que queremos incluir en nuestro Dockerfile.

### Paso 3: Modifica tu archivo devcontainer.json

Ahora que agregaste tu contenedor dev y tienes un entendimiento básico de lo que hace cada cosa, puedes hacer cambios para configurarlo para tu ambiente. En este ejemplo, agregarás porpiedades para instalar extensiones y tus dependencias de pryecto cuando se lance tu codespace.

1. En el explorador, selecciona el archivo `devcontainer.json` del árbol para abrirlo. Puede que tengas que expandir la carpeta `.devcontainer` para verlo.

  !["Codespaces: Reconstruir contenedor" en la paleta de comandos](/assets/images/help/codespaces/devcontainers-options.png)

2. Agrega las siguientes líneas a tu archivo `devcontainer.json` después de `extensions`.

  ```json{:copy}
  "postCreateCommand": "npm install",
  "forwardPorts": [4000],
  ```

  Para obtener más información sobre las propiedades de `devcontainer.json`, consulta las [referencias de devcontainer.json](https://code.visualstudio.com/docs/remote/devcontainerjson-reference) en los documentos de Visual Studio Code.

3. Para volver a compilar tu contenedor, accede a la paleta de comandos (`shift command P` / `shift control P`) y luego comienza a teclear "rebuild". Haz clic en **Codespaces: Rebuild Container**.

  ![Opción de recompilar contenedor](/assets/images/help/codespaces/codespaces-rebuild.png)

  Reconstruir dentro de tu codespace garantiza que tus cambios funcionan como se espera antes de que los confirmes los en el repositorio. Si algo falla, se te colocará en un codespace con un contenedor de recuperación desde el cual puedes volver a compilar para seguir ajustando tu contenedor.


### Paso 4: Ejecuta tu aplicación

En la sección anterior, utilizaste `postCreateCommand` para instalar un conjunto de paquetes a través de npm. Ahora puedes utilizar esto para ejecutar nuestra aplicación con npm.

1. Ejecuta tu aplicación presionando `F5`.

2. Cuando tu proyecto inicia, debes ver una alerta en la esquina inferior derecha con un mensaje para conectarte al puerto que utiliza tu proyecto.

  ![Notificación de reenvío de puertos](/assets/images/help/codespaces/codespaces-port-toast.png)

### Paso 5: Confirma tus cambios

{% data reusables.codespaces.committing-link-to-procedure %}

### Pasos siguientes

Ahora debes estar listo para desarrollar tu proyecto de Java en {% data variables.product.prodname_codespaces %}. Aquí tienes algunos recursos adicionales para situaciones más avanzadas.

- [Administrar secretos cifrados para {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [Administrar la verificación GPG para {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [Reenviar puertos en tu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
