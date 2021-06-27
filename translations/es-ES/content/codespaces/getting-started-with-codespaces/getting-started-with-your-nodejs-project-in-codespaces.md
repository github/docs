---
title: Iniciar con tu proyecto de Node.js en Codespaces
shortTitle: Iniciar con tu proyecto de Node.js
intro: 'Inicia con tu proyecto de JavaScript, Node.js o TypeScript en {% data variables.product.prodname_codespaces %} creando un contenedor dev personalizado.'
versions:
  free-pro-team: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
  - Node
  - JavaScript
---

{% data reusables.codespaces.release-stage %}

### Introducción

Esta guía te muestra cómo configurar tu proyecto de JavaScript, Node.js o TypeScript en {% data variables.product.prodname_codespaces %}. Te mostrará un ejemplo de cómo abrir tu proyecto en un codespace y cómo agregar y modificar una configuración de contenedor de dev desde una plantilla.

#### Prerrequisitos

- Debes tener un proyecto existente de JavaScript, Node.js, TypeScript en un repositorio de {% data variables.product.prodname_dotcom_the_website %}. Si no tienes un proyecto, puedes probar este tutorial con el siguiente ejemplo: https://github.com/microsoft/vscode-remote-try-node
- Debes tener {% data variables.product.prodname_codespaces %} habilitado en tu organización.

### Paso 1: Abre tu proyecto en un codespace

1. Navega al repositorio de tu proyecto. Utiliza el menú desplegable de {% octicon "download" aria-label="The download icon" %}**Código** y selecciona **Abrir con Codespaces**. Si no ves esta opción, tu proyecto no está disponible para {% data variables.product.prodname_codespaces %}.

  ![Botón de abrir con codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

2. Para crear un codespace nuevo, haz clic en {% octicon "plus" aria-label="The plus icon" %} **Codespace nuevo**. ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

Cuando creas un codespace, tu proyecto se crea en una MV remota dedicada a ti. Predeterminadamente, el contenedor para tu codespace tiene muchos lenguajes y tiempos de ejecución, incluyendo a Node.js, JavaScript, TypeScript, nvm, npm y yarn. También incluye un conjunto de herramientas comunes como git, wget, rsync, openssh y nano.

Puedes personalizar tu codespace si ajustas la cantidad de vCPU y RAM, [agregando dotfiles para personalizar tu ambiente](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account) o modificando las herramientas y scripts instalados.

{% data variables.product.prodname_codespaces %} utiliza un archivo denominado `devcontainer.json` para almacenar configuraciones. Cuando se lanzan, los {% data variables.product.prodname_codespaces %} utilizan el archivo para instalar cualquier herramienta, dependencia u otro tipo de configuración que pueda necesitarse para el proyecto. Para obtener más información, consulta la sección "[Configurar Codespaces para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

### Paso 2: Agrega un contenedor de dev a tu codespace desde una plantilla

El contenedor predeterminado de codespaces será compatible para ejecutar proyectos de Node.js como [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node) fuera de la caja. Al configurar un contenedor personalizado, puedes personalizar las herramientas y scripts que se ejecutan como parte de la creación de codespaces y asegurarte de que haya un ambiente integralmente reproducible para todos los usuarios de {% data variables.product.prodname_codespaces %} en tu repositorio.

Para configurar tu proyecto con un contenedor personalizado, necesitarás utilizar un archivo `devcontainer.json` para definir el ambiente. En {% data variables.product.prodname_codespaces %}, puedes agregarlo ya sea desde una plantilla o puedes crear el tuyo propio. Para obtener más información sobre contenedores dev, consulta la sección "[Configurar Codespaces para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

1. Accede a la paleta de comandos (`shift command P` / `shift control P`), y luego comienza a teclear "dev container". Haz clic en **Codespaces: Agregar archivos de configuración de contenedores de desarrollo...** !["Codespaces: Agregar archivos de configuración de contenedores de desarrollo..." en la paleta de comandos](/assets/images/help/codespaces/add-prebuilt-container-command.png)
3. Para este ejemplo, haz clic en **Node.js**.  Si necesitas características adicionales, puedes seleccionar cualquier contenedor que sea específico para Node o una combinación de herramientas tales como Node y MongoDB. ![Selecciona la opción Node de la lista](/assets/images/help/codespaces/add-node-prebuilt-container.png)
4. Haz clic en la versión recomendada de Node.js. ![Selección de la versión de Node.js](/assets/images/help/codespaces/add-node-version.png)
5. Para volver a compilar tu contenedor, accede a la paleta de comandos (`shift command P` / `shift control P`) y luego comienza a teclear "rebuild". Haz clic en **Codespaces: Rebuild Container**. ![Opción de recompilar contenedor](/assets/images/help/codespaces/codespaces-rebuild.png)

#### Anatomía de tu contenedor dev

El agregar la plantilla de contenedor dev de Node.js agregará una carpeta de `.devcontainer` a la raíz del repositorio de tu proyecto con los siguientes archivos:

- `devcontainer.json`
- Dockerfile

El archivo `devcontainer.json` recién agregado define unas cuantas propiedades que se describen después de la muestra.

##### devcontainer.json

```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.162.0/containers/javascript-node
{
    "name": "Node.js",
    "build": {
        "dockerfile": "Dockerfile",
        // Update 'VARIANT' to pick a Node version: 10, 12, 14
        "args": { "VARIANT": "14" }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": { 
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "dbaeumer.vscode-eslint"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "yarn install",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "node"
}
```

- **Name** - Puedes nombrar a tu contenedor dev como quieras, esto es solo lo predeterminado.
- **Build** - Las propiedades de compilación.
  - **dockerfile** - En el objeto de compilación, dockerfile es una referencia al Dockerfile que también se agregó desde la plantilla.
  - **Args**
    - **Variant**: Este archivo solo contiene un argumento de compilación, el cual es la variante de nodo que queremos utilizar y que se pasa en el Dockerfile.
- **Settings** - Estos son los ajustes de {% data variables.product.prodname_vscode %} que puedes configurar.
  - **Terminal.integrated.shell.linux** - Si bien bash es lo predeterminado aquí, podrías utilizar otros shells de terminal si lo modificas.
- **Extensions** - Estas son las extensiones que se incluyen predeterminadamente.
  - **Dbaeumer.vscode-eslint** - ES lint es una extención genial para limpiar código, pero para JavaScript, hay varias extensiones buenas en Marketplace que también podrías incluir.
- **forwardPorts** - Cualquier puerto que se liste aquí se reenviará automáticamente.
- **postCreateCommand** - Si quieres ejecutar lo que sea después de que llegas a tu codespace, lo cual no está definido en tu Dockerfile, puedes hacerlo aquí.
- **remoteUser** - Predeterminadamente, lo estás ejecutando como el usuario de vscode, pero puedes configurar esto como root opcionalmente.

##### Dockerfile

```bash
# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
```

Puedes utilizar este Dockerfile para agregar capas de contenedor adicionales y especificar paquetes de SO, versiones de nodo o paquetes globales que queremos incluir en nuestro Dockerfile.

### Paso 3: Modifica tu archivo devcontainer.json

Ahora que agregaste tu contenedor dev y tienes un entendimiento básico de lo que hace cada cosa, puedes hacer cambios para configurarlo para tu ambiente. En este ejemplo, agregarás propiedades para instalar npm cuando tu codespace se lance y haga una lista de puertos dentro del contenedor que está disponible localmente.

1. En el explorador, selecciona el archivo `devcontainer.json` del árbol para abrirlo. Puede que tengas que expandir la carpeta `.devcontainer` para verlo.

  !["Codespaces: Reconstruir contenedor" en la paleta de comandos](/assets/images/help/codespaces/devcontainers-options.png)

2. Agrega las siguientes líneas a tu archivo `devcontainer.json` después de `extensions`:

  ```json{:copy}
  "postCreateCommand": "npm install",
  "forwardPorts": [4000],
  ```

  Para obtener más información sobre las propiedades de `devcontainer.json`, consulta la [ referencia de devcontainer.json](https://code.visualstudio.com/docs/remote/devcontainerjson-reference) en los documentos de {% data variables.product.prodname_vscode %}.

3. Para volver a compilar tu contenedor, accede a la paleta de comandos (`shift command P` / `shift control P`) y luego comienza a teclear "rebuild". Haz clic en **Codespaces: Rebuild Container**.

  ![Opción de recompilar contenedor](/assets/images/help/codespaces/codespaces-rebuild.png)

  Reconstruir dentro de tu codespace garantiza que tus cambios funcionan como se espera antes de que los confirmes los en el repositorio. Si algo falla, se te colocará en un codespace con un contenedor de recuperación desde el cual puedes volver a compilar para seguir ajustando tu contenedor.


### Paso 4: Ejecuta tu aplicación

En la sección anterior, utilizaste `postCreateCommand` para instalar un conjunto de paquetes a través de npm. Ahora puedes utilizar esto para ejecutar nuestra aplicación con npm.

1. Ejecuta tu comando de inicio en la terminal con `npm start`.

  ![npm start en la terminal](/assets/images/help/codespaces/codespaces-npmstart.png)

2. Cuando tu proyecto inicia, debes ver una alerta en la esquina inferior derecha con un mensaje para conectarte al puerto que utiliza tu proyecto.

  ![Notificación de reenvío de puertos](/assets/images/help/codespaces/codespaces-port-toast.png)

### Paso 5: Confirma tus cambios

{% data reusables.codespaces.committing-link-to-procedure %}

### Pasos siguientes

Ahora debes estar listo para comenzar a desarrollar tu proyecto de JavaScript en {% data variables.product.prodname_codespaces %}. Aquí tienes algunos recursos adicionales para situaciones más avanzadas.

- [Administrar secretos cifrados para tus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)
- [Administrar la verificación GPG para {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces)
- [Reenviar puertos en tu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
