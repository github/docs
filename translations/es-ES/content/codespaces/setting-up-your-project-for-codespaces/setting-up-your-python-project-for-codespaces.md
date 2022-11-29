---
title: Configuración de un proyecto de Python para GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Python project
intro: 'Crea un contenedor de desarrollo personalizado para empezar a trabajar con tu proyecto de Python en {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-python-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Python
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 2d9c627907f447a3efd873fceba963b899b57c39
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159851'
---
## Introducción

En esta guía se muestra cómo configurar un proyecto de Python en {% data reusables.codespaces.setting-up-project-intro %}.

### Prerrequisitos

- Debes tener un proyecto existente de Python en un repositorio de {% data variables.product.prodname_dotcom_the_website %}. Si no tiene un proyecto, puede probar este tutorial con el ejemplo siguiente: https://github.com/2percentsilk/python-quickstart.
- Debes tener {% data variables.product.prodname_github_codespaces %} habilitado en tu organización.

## Paso 1: Abre tu proyecto en un codespace

1. Debajo del nombre del repositorio, usa el menú desplegable **Código de {% octicon "code" aria-label="The code icon" %}** y, en la pestaña **Codespaces**, haz clic en el signo más ({% octicon "plus" aria-label="The plus icon" %}).

  ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

Cuando creas un codespace, tu proyecto se crea en una MV remota dedicada a ti. Predeterminadamente, el contenedor para tu codespace tiene muchos lenguajes y tiempos de ejecución, incluyendo a Node.js, JavaScript, TypeScript, nvm, npm y yarn. También incluye un conjunto de herramientas comunes como git, wget, rsync, openssh y nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Paso 2: agregar una configuración de contenedor de desarrollo al repositorio desde una plantilla

El contenedor de desarrollo predeterminado, o "contenedor de desarrollo", para {% data variables.product.prodname_github_codespaces %} viene con la versión más reciente de Python, los administradores de paquetes (pip, Miniconda) y otras herramientas comunes preinstaladas. Sin embargo, recomendamos que configures tu propio contenedor de desarrollo para incluir todas las herramientas y scripts que necesita el proyecto. Esto garantizará un entorno totalmente reproducible para todos los usuarios de {% data variables.product.prodname_github_codespaces %} en el repositorio.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Para este ejemplo, haga clic en **Python 3**. Si necesitas características adicionales, puedes seleccionar cualquier contenedor que sea específico para Python o una combinación de herramientas tales como Python 3 y PostgreSQL.
  ![Selección de la opción Python en la lista](/assets/images/help/codespaces/add-python-prebuilt-container.png)
1. Haz clic en la versión recomendada de Python.
  ![Selección de la versión Python](/assets/images/help/codespaces/add-python-version.png)
1. Acepta la opción predeterminada para agregar a Node.js a tu personalización.
  ![Selección de agregar Node.js](/assets/images/help/codespaces/add-nodejs-selection.png) {% data reusables.codespaces.rebuild-command %}

### Anatomía de tu contenedor dev

Al agregar la plantilla de contenedor de desarrollo de Python, se agrega un directorio `.devcontainer` a la raíz del repositorio del proyecto con los archivos siguientes:

- `devcontainer.json`
- Dockerfile

En el archivo `devcontainer.json` recién agregado se definen varias propiedades que se describen después del ejemplo.

#### devcontainer.json

```json
{
    "name": "Python 3",
    "build": {
        "dockerfile": "Dockerfile",
        "context": "..",
        "args": {
            // Update 'VARIANT' to pick a Python version: 3, 3.6, 3.7, 3.8, 3.9
            "VARIANT": "3",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "python.pythonPath": "/usr/local/bin/python",
        "python.linting.enabled": true,
        "python.linting.pylintEnabled": true,
        "python.formatting.autopep8Path": "/usr/local/py-utils/bin/autopep8",
        "python.formatting.blackPath": "/usr/local/py-utils/bin/black",
        "python.formatting.yapfPath": "/usr/local/py-utils/bin/yapf",
        "python.linting.banditPath": "/usr/local/py-utils/bin/bandit",
        "python.linting.flake8Path": "/usr/local/py-utils/bin/flake8",
        "python.linting.mypyPath": "/usr/local/py-utils/bin/mypy",
        "python.linting.pycodestylePath": "/usr/local/py-utils/bin/pycodestyle",
        "python.linting.pydocstylePath": "/usr/local/py-utils/bin/pydocstyle",
        "python.linting.pylintPath": "/usr/local/py-utils/bin/pylint"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-python.python"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "pip3 install --user -r requirements.txt",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **name**: puedes asignar el nombre que quieras al contenedor de desarrollo, este es solo el nombre predeterminado.
- **build**: las propiedades de compilación.
  - **dockerfile**: en el objeto `build`, `dockerfile` contiene la ruta de acceso al Dockerfile que también se ha agregado desde la plantilla.
  - **args**
    - **variant**: este archivo solo contiene un argumento de compilación, que es la variante del nodo que queremos usar que se pasa al Dockerfile.
- **settings**: la configuración de {% data variables.product.prodname_vscode %}.
  - **terminal.integrated.shell.linux**: aunque aquí bash sea el shell de terminal predeterminado, puedes modificarlo y usar otros.
- **extensions**: las extensiones incluidas de forma predeterminada.
  - **ms-python.python**: la extensión de Python de Microsoft te proporciona una compatibilidad enriquecida para el lenguaje Python (para todas las versiones compatibles del lenguaje: >=3.6), incluidas las características tales como IntelliSense, linting, depuración, navegación de código, formato de código, refactorización, explorador de variables, explorador de pruebas y mucho más.
- **forwardPorts**: cualquier puerto que se incluya aquí se reenviará de forma automática. Para más información, vea "[Reenvío de puertos en el codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".
- **postCreateCommand**: después de crear el codespace, usa esta opción para ejecutar comandos que no están definidos en el Dockerfile, como `pip3 install -r requirements`.
- **remoteUser**: de manera predeterminada, la ejecución se realiza como el usuario `vscode`, pero opcionalmente se puede establecer en `root`.

#### Dockerfile

```bash
# [Choice] Python version: 3, 3.9, 3.8, 3.7, 3.6
ARG VARIANT="3"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] If your pip requirements rarely change, uncomment this section to add them to the image.
# COPY requirements.txt /tmp/pip-tmp/
# RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
#    && rm -rf /tmp/pip-tmp

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Puedes utilizar este Dockerfile para agregar capas de contenedor adicionales y especificar paquetes de SO, versiones de nodo o paquetes globales que queremos incluir en nuestro contenedor.

## Paso 3: Modifica tu archivo devcontainer.json

Con la configuración del contenedor de desarrollo agregada y un conocimiento básico de lo que hace cada elemento, ya puedes realizar cambios para personalizar aún más el entorno. En este ejemplo, agregarás porpiedades para instalar extensiones y tus dependencias de pryecto cuando se lance tu codespace.

1. En el Explorador, expanda la carpeta `.devcontainer` y seleccione el archivo `devcontainer.json` del árbol para abrirlo.

  ![Archivo de devcontainer.json en el explorador](/assets/images/help/codespaces/devcontainers-options.png)

2. Actualice la lista `extensions` del archivo `devcontainer.json` para agregar algunas extensiones que son útiles al trabajar con el proyecto.

  ```json{:copy}
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker"
      ],
  ```

3. Quite la marca de comentario de `postCreateCommand` para instalar automáticamente los requisitos como parte del proceso de instalación de los codespaces.

  ```json{:copy}
  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Verifica tus cambios en donde se aplicaron con éxito verificando que se hayan instalado las extensiones "Code Spell Checker" y "Flask Snippet".

   ![Lista de extensiones](/assets/images/help/codespaces/python-extensions.png)

## Paso 4: Ejecución de la aplicación

En la sección anterior, ha usado `postCreateCommand` para instalar un conjunto de paquetes mediante pip3. Ahora que instalaste tus dependencias, puedes ejecutar tu aplicación.

1. Para ejecutar la aplicación, presione `F5` o escriba `python -m flask run` en el terminal del codespace.

2. Cuando se inicie el proyecto, deberías ver un mensaje de notificación del sistema en la esquina inferior derecha de {% data variables.product.prodname_vscode_shortname %}, que contendrá un mensaje para conectarse al puerto que usa el proyecto.

  ![Notificación del sistema de enrutamiento de puerto](/assets/images/help/codespaces/python-port-forwarding.png)

## Paso 5: Confirma tus cambios

{% data reusables.codespaces.committing-link-to-procedure %}

## Pasos siguientes

Ahora ya deberías poder empezar a desarrollar tu proyecto de Python en {% data variables.product.prodname_github_codespaces %}. Aquí tienes algunos recursos adicionales para situaciones más avanzadas.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
