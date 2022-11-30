---
title: Configuración de un proyecto de Node.js para GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Node.js project
intro: 'Crea un contenedor de desarrollo personalizado para empezar a trabajar con tu proyecto de JavaScript, Node.js o TypeScript en {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-nodejs-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Node
  - JavaScript
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 19c29f7d3c8110d1c671a9af46227a399a467800
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159907'
---
## Introducción

En esta guía se muestra cómo configurar un proyecto de JavaScript, Node.js o TypeScript en {% data reusables.codespaces.setting-up-project-intro %}.

### Requisitos previos

- Debes tener un proyecto existente de JavaScript, Node.js, TypeScript en un repositorio de {% data variables.product.prodname_dotcom_the_website %}. Si no tiene un proyecto, puede probar este tutorial con el ejemplo siguiente: https://github.com/microsoft/vscode-remote-try-node.
- Debes tener {% data variables.product.prodname_github_codespaces %} habilitado en tu organización.

## Paso 1: Abre tu proyecto en un codespace

1. Debajo del nombre del repositorio, usa el menú desplegable **{% octicon "code" aria-label="The code icon" %} Código** y, en la pestaña **Codespaces**, haz clic en el signo más ({% octicon "plus" aria-label="The plus icon" %}).

   ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

Cuando creas un codespace, tu proyecto se crea en una MV remota dedicada a ti. Predeterminadamente, el contenedor para tu codespace tiene muchos lenguajes y tiempos de ejecución, incluyendo a Node.js, JavaScript, TypeScript, nvm, npm y yarn. También incluye un conjunto de herramientas comunes como git, wget, rsync, openssh y nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Paso 2: agregar una configuración de contenedor de desarrollo al repositorio desde una plantilla

El contenedor de desarrollo predeterminado, o «contenedor de desarrollo», para {% data variables.product.prodname_github_codespaces %} admitirá la ejecución de proyectos de Node.js como [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node) listo para usar. Sin embargo, recomendamos que configures tu propio contenedor de desarrollo, ya que esto permite definir todas las herramientas y scripts específicos que necesite el proyecto. Esto garantizará un entorno totalmente reproducible para todos los usuarios de {% data variables.product.prodname_github_codespaces %} en el repositorio.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Para este ejemplo, haga clic en **Node.js**.  Si necesitas características adicionales, puedes seleccionar cualquier contenedor que sea específico para Node o una combinación de herramientas tales como Node y MongoDB.

   ![Selecciona la opción Node de la lista](/assets/images/help/codespaces/add-node-prebuilt-container.png)

1. Haz clic en la versión recomendada de Node.js.

   ![Selección de la versión de Node.js](/assets/images/help/codespaces/add-node-version.png)

{% data reusables.codespaces.rebuild-command %}

### Anatomía de tu contenedor dev

Al agregar la plantilla de contenedor de desarrollo de Node.js, se agrega un directorio `.devcontainer` a la raíz del repositorio del proyecto con los archivos siguientes:

- `devcontainer.json`
- Dockerfile

En el archivo `devcontainer.json` recién agregado se definen varias propiedades que se describen después del ejemplo.

#### devcontainer.json

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

- **name**: puedes asignar cualquier nombre al contenedor de desarrollo; este es solo el valor predeterminado.
- **build**: las propiedades de compilación.
  - **dockerfile**: en el objeto `build`, `dockerfile` contiene la ruta de acceso al Dockerfile que también se ha agregado desde la plantilla.
  - **args**
    - **variant**: este archivo solo contiene un argumento de compilación, que es la variante de nodo que queremos usar y que se pasa al Dockerfile.
- **settings**: son las opciones {% data variables.product.prodname_vscode %} que puedes establecer.
  - **terminal.integrated.shell.linux**: aunque aquí bash sea el shell de terminal predeterminado, puedes modificarlo y usar otros.
- **extensions**: extensiones incluidas de forma predeterminada.
  - **dbaeumer.vscode-eslint**: ES lint es una muy buena extensión para linting, pero para JavaScript hay una serie de extensiones excelentes de Marketplace que también puedes incluir.
- **forwardPorts**: cualquier puerto que se incluya aquí se reenviará de forma automática. Para más información, vea "[Reenvío de puertos en el codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".
- **postCreateCommand**: después de crear el codespace, usa esta opción para ejecutar comandos que no están definidos en el Dockerfile.
- **remoteUser**: de manera predeterminada, la ejecución se realiza como el usuario vscode, pero opcionalmente se puede establecer en root.

#### Dockerfile

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

Puedes utilizar este Dockerfile para agregar capas de contenedor adicionales y especificar paquetes de SO, versiones de nodo o paquetes globales que queremos incluir en nuestro contenedor.

## Paso 3: Modifica tu archivo devcontainer.json

Con la configuración del contenedor de desarrollo agregada y tu conocimiento básico de lo que hace cada cosa, ahora puedes realizar cambios para personalizar aún más el entorno. En este ejemplo, agregarás propiedades para instalar npm cuando tu codespace se lance y haga una lista de puertos dentro del contenedor que está disponible localmente.

1. En el Explorador, seleccione el archivo `devcontainer.json` del árbol para abrirlo. Es posible que tenga que expandir la carpeta `.devcontainer` para verlo.

   ![Archivo de devcontainer.json en el explorador](/assets/images/help/codespaces/devcontainers-options.png)

2. Agregue las siguientes líneas al archivo `devcontainer.json` después de `extensions`:

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## Paso 4: Ejecución de la aplicación

En la sección anterior, ha usado `postCreateCommand` para instalar un conjunto de paquetes mediante npm. Ahora puedes utilizar esto para ejecutar nuestra aplicación con npm.

1. Ejecute el comando start en el terminal con`npm start`.

   ![npm start en la terminal](/assets/images/help/codespaces/codespaces-npmstart.png)

2. Cuando se inicie el proyecto, deberías ver un mensaje de notificación del sistema en la esquina inferior derecha de {% data variables.product.prodname_vscode_shortname %}, que contiene un mensaje para conectarse al puerto que usa el proyecto.

   ![Notificación del sistema de enrutamiento de puerto](/assets/images/help/codespaces/codespaces-port-toast.png)

## Paso 5: Confirma tus cambios

{% data reusables.codespaces.committing-link-to-procedure %}

## Pasos siguientes

Ahora ya deberías poder empezar a desarrollar tu proyecto de JavaScript en {% data variables.product.prodname_github_codespaces %}. Aquí tienes algunos recursos adicionales para situaciones más avanzadas.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
