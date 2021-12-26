---
title: Iniciar con tu proyecto de Python en Codespaces
shortTitle: Iniciar con tu proyecto de Python
intro: 'Iniciar con tu proyecto de Python en {% data variables.product.prodname_codespaces %} creando un contenedor de dev personalizado.'
versions:
  free-pro-team: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
  - Python
---

{% data reusables.codespaces.release-stage %}

### Introducción

Esta guía te muestra cómo configurar tu proyecto de Python en {% data variables.product.prodname_codespaces %}. Te mostrará un ejemplo de cómo abrir tu proyecto en un codespace y cómo agregar y modificar una configuración de contenedor de dev desde una plantilla.

#### Prerrequisitos

- Debes tener un proyecto existente de Python en un repositorio de {% data variables.product.prodname_dotcom_the_website %}. Si no tienes un proyecto, puedes probar este tutorial con el siguiente ejemplo: https://github.com/2percentsilk/python-quickstart.
- Debes tener {% data variables.product.prodname_codespaces %} habilitado en tu organización.

### Paso 1: Abre tu proyecto en un codespace

1. Navega al repositorio de tu proyecto. Utiliza el menú desplegable de {% octicon "download" aria-label="The download icon" %}**Código** y selecciona **Abrir con Codespaces**. Si no ves esta opción, tu proyecto no está disponible para {% data variables.product.prodname_codespaces %}.

  ![Botón de abrir con codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

2. Para crear un codespace nuevo, haz clic en {% octicon "plus" aria-label="The plus icon" %} **Codespace nuevo**. ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

Cuando creas un codespace, tu proyecto se crea en una MV remota dedicada a ti. Predeterminadamente, el contenedor para tu codespace tiene muchos lenguajes y tiempos de ejecución, incluyendo a Node.js, JavaScript, TypeScript, nvm, npm y yarn. También incluye un conjunto de herramientas comunes como git, wget, rsync, openssh y nano.

Puedes personalizar tu codespace si ajustas la cantidad de vCPU y RAM, [agregando dotfiles para personalizar tu ambiente](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account) o modificando las herramientas y scripts instalados.

{% data variables.product.prodname_codespaces %} utiliza un archivo denominado `devcontainer.json` para almacenar configuraciones. Cuando se lanzan, los {% data variables.product.prodname_codespaces %} utilizan el archivo para instalar cualquier herramienta, dependencia u otro tipo de configuración que pueda necesitarse para el proyecto. Para obtener más información, consulta la sección "[Configurar Codespaces para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".


### Paso 2: Agrega un contenedor de dev a tu codespace desde una plantilla

El contenedor predeterminado de codespaces viene con la última versión de Python, administradores de paquete (pip, Miniconda), y otras herramientas comunes preinstaladas. Sin embargo, te recomendamos que configures un contenedor personalizado para definir las herramientas y scripts que necesita tu proyecto. Esto garantizará un ambiente totalmente reproducible para todos los usuarios de {% data variables.product.prodname_codespaces %} de tu repositorio.

Para configurar tu proyecto con un contenedor personalizado, necesitarás utilizar un archivo `devcontainer.json` para definir el ambiente. En {% data variables.product.prodname_codespaces %}, puedes agregarlo ya sea desde una plantilla o puedes crear el tuyo propio. Para obtener más información sobre contenedores dev, consulta la sección "[Configurar Codespaces para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".


1. Accede a la paleta de comandos (`shift command P` / `shift control P`), y luego comienza a teclear "dev container". Haz clic en **Codespaces: Agregar archivos de configuración de contenedores de desarrollo...** !["Codespaces: Agregar archivos de configuración de contenedores de desarrollo..." en la paleta de comandos](/assets/images/help/codespaces/add-prebuilt-container-command.png)
2. Para este ejemplo, haz clic en **Python 3**. Si necesitas características adicionales, puedes seleccionar cualquier contenedor que sea específico para Python o una combinación de herramientas tales como Python 3 y PostgreSQL. ![Selecciona la opción Python de la lista](/assets/images/help/codespaces/add-python-prebuilt-container.png)
3. Haz clic en la versión recomendada de Python. ![Selección de la versión Python](/assets/images/help/codespaces/add-python-version.png)
4. Acepta la opción predeterminada para agregar a Node.js a tu personalización. ![Agregar la selección Node.js](/assets/images/help/codespaces/add-nodejs-selection.png)
5. Para volver a compilar tu contenedor, accede a la paleta de comandos (`shift command P` / `shift control P`) y luego comienza a teclear "rebuild". Haz clic en **Codespaces: Rebuild Container**. ![Opción de recompilar contenedor](/assets/images/help/codespaces/codespaces-rebuild.png)

#### Anatomía de tu contenedor dev

El agregar la plantilla de contenedor dev de Python agregará una carpeta de `.devcontainer` a la raíz del repositorio de tu proyecto con los siguientes archivos:

- `devcontainer.json`
- Dockerfile

El archivo `devcontainer.json` recién agregado define unas cuantas propiedades que se describen después de la muestra.

##### devcontainer.json

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
        "ms-python.python",
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "pip3 install --user -r requirements.txt",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **Name** - Puedes nombrar a tu contenedor dev como quieras, esto es solo lo predeterminado.
- **Build** - Las propiedades de compilación.
  - **Dockerfile** - En el objeto de compilación, `dockerfile` es una referencia al Dockerfile que también se agregó desde la plantilla.
  - **Args**
    - **Variant**: Este archivo solo contiene un argumento de compilación, el cual es la variante de nodo que queremos utilizar y que se pasa en el Dockerfile.
- **Settings** - Esta es la configuración de {% data variables.product.prodname_vscode %}.
  - **Terminal.integrated.shell.linux** - Si bien bash es lo predeterminado aquí, podrías utilizar otros shells de terminal si lo modificas.
- **Extensions** - Estas son las extensiones que se incluyen predeterminadamente.
  - **ms-python.python** - La extensión de Python de Microsoft te proporciona una compatibilidad enriquecida para el lenguaje Python (para todas las versiones compatibles del lenguaje: >=3.6), incluyendo las característcas tales como IntelliSense, limpieza, depuración, navegación de código, formateo de código, refactorización, explorador de variables, explorador de pruebas y más.
- **forwardPorts** - Cualquier puerto que se liste aquí se reenviará automáticamente.
- **postCreateCommand** - Si quieres ejecutar cualquier cosa después de que llegues a tu codespace y que no se defina en el Dockerfile, como `pip3 install -r requirements`, puedes hacerlo aquí.
- **remoteUser** - Predeterminadamente, lo estás ejecutando como el usuario de `vscode`, pero puedes configurar esto como `root` opcionalmente.

##### Dockerfile

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

### Paso 3: Modifica tu archivo devcontainer.json

Ahora que agregaste tu contenedor dev y tienes un entendimiento básico de lo que hace cada cosa, puedes hacer cambios para configurarlo para tu ambiente. En este ejemplo, agregarás porpiedades para instalar extensiones y tus dependencias de pryecto cuando se lance tu codespace.

1. En el explorador, expande la carpeta `.devcontainer` y selecciona el archivo `devcontainer.json` del árbol para abrirlo.

  !["Codespaces: Reconstruir contenedor" en la paleta de comandos](/assets/images/help/codespaces/devcontainers-options.png)

2. Actualiza la lista de `extensions` en tu archivo `devcontainer.json` para agregar algunas extensiones que son útiles al trabajar con tu proyecto.

  ```json{:copy} 
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker",
      ],
  ```

3. Quita el comentario de `postCreateCommand` para instalar automáticamente los requisitos como parte del proceso de configuración de codespaces.

  ```json{:copy} 
  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

4. Para volver a compilar tu contenedor y aplicar los cambios del devcontainer.json, accede a la paleta de comandos (`shift command P` / `shift control P`) y luego comienza a teclear "rebuild". Haz clic en **Codespaces: Rebuild Container**.

  ![Opción de recompilar contenedor](/assets/images/help/codespaces/codespaces-rebuild.png)

  Reconstruir dentro de tu codespace garantiza que tus cambios funcionan como se espera antes de que confirmes los cambios en el repositorio. Si algo resulta en un fallo, se te colocará en un codespace con un contenedor de recuperación desde el cual puedes reconstruir para seguir ajustando tu contenedor.

5. Verifica tus cambios en donde se aplicaron con éxito verificando que se hayan instalado las extensiones "Code Spell Checker" y "Flask Snippet".

    ![Lista de extensiones](/assets/images/help/codespaces/python-extensions.png)

### Paso 4: Ejecuta tu aplicación

En la sección anterior, utilizaste `postCreateCommand` para instalar un conjunto de paquetes a través de pip3. Ahora que instalaste tus dependencias, puedes ejecutar tu aplicación.

1. Ejecuta tu aplicación presionando `F5` o ingresando `python -m flask run` en la terminal del codespace.

2. Cuando tu proyecto inicia, debes ver una alerta en la esquina inferior derecha con un mensaje para conectarte al puerto que utiliza tu proyecto.

  ![Notificación de reenvío de puertos](/assets/images/help/codespaces/python-port-forwarding.png)

### Paso 5: Confirma tus cambios

{% data reusables.codespaces.committing-link-to-procedure %}

### Pasos siguientes

Ahora debes estar listo para comenzar a desarrollar tu proyecto de Python en {% data variables.product.prodname_codespaces %}. Aquí tienes algunos recursos adicionales para situaciones más avanzadas.

- [Administrar secretos cifrados para {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [Administrar la verificación GPG para {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [Reenviar puertos en tu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
