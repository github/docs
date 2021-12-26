---
title: Iniciar con tu proyecto de C# (.NET) en Codespaces
shortTitle: Iniciar con tu proyecto de C# (.NET)
allowTitleToDifferFromFilename: true
intro: 'Inicia con tu proyecto de C# (.NET) en {% data variables.product.prodname_codespaces %} creando un contenedor dev personalizado.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### Introducción

Esta guía te muestra cómo configurar tu proyecto de C# (.NET) en {% data variables.product.prodname_codespaces %}. Te mostrará un ejemplo de cómo abrir tu proyecto en un codespace y cómo agregar y modificar una configuración de contenedor de dev desde una plantilla.

#### Prerrequisitos

- Debes tener un proyecto existente de C# (.NET) en un repositorio de {% data variables.product.prodname_dotcom_the_website %}. Si no tienes un proyecto, puedes probar este tutorial con el siguiente ejemplo: https://github.com/2percentsilk/dotnet-quickstart.
- Debes tener {% data variables.product.prodname_codespaces %} habilitado en tu organización.

### Paso 1: Abre tu proyecto en un codespace

1. Navega al repositorio de tu proyecto. Utiliza el menú desplegable de {% octicon "download" aria-label="The download icon" %}**Código** y selecciona **Abrir con Codespaces**. Si no ves esta opción, tu proyecto no está disponible para {% data variables.product.prodname_codespaces %}.

  ![Botón de abrir con codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

2. Para crear un codespace nuevo, haz clic en {% octicon "plus" aria-label="The plus icon" %} **Codespace nuevo**. ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

Cuando creas un codespace, tu proyecto se crea en una MV remota dedicada a ti. Predeterminadamente, el contenedor de tu codespace tiene muchos lenguajes de programación y tiempos de ejecución, incluyendo a .NET. También incluye un conjunto de herramientas comunes como git, wget, rsync, openssh y nano.

Puedes personalizar tu codespace si ajustas la cantidad de vCPU y RAM, [agregando dotfiles para personalizar tu ambiente](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account) o modificando las herramientas y scripts instalados.

{% data variables.product.prodname_codespaces %} utiliza un archivo denominado `devcontainer.json` para almacenar configuraciones. Cuando se lanzan, los {% data variables.product.prodname_codespaces %} utilizan el archivo para instalar cualquier herramienta, dependencia u otro tipo de configuración que pueda necesitarse para el proyecto. Para obtener más información, consulta la sección "[Configurar Codespaces para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".


### Paso 2: Agrega un contenedor de dev a tu codespace desde una plantilla

El contenedor predeterminado para los codespaces tiene la última versión de .NET y las herramientas más recientes preinstaladas. Sin embargo, te exhortamos a que configures un contenedor personalizado para que puedas diseñar las herramientas y scripts que se ejecutan como parte de la creación de un codespace para que satisfagan las necesidades de tu proyecto y garanticen un ambiente totalmente reproducible para todos los usuarios de {% data variables.product.prodname_codespaces %} en tu repositorio.

Para configurar tu proyecto con un contenedor personalizado, necesitarás utilizar un archivo `devcontainer.json` para definir el ambiente. En {% data variables.product.prodname_codespaces %}, puedes agregarlo ya sea desde una plantilla o puedes crear el tuyo propio. Para obtener más información sobre contenedores dev, consulta la sección "[Configurar Codespaces para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".


1. Accede a la paleta de comandos (`shift command P` / `shift control P`), y luego comienza a teclear "dev container". Haz clic en **Codespaces: Agregar archivos de configuración de contenedores de desarrollo...** !["Codespaces: Agregar archivos de configuración de contenedores de desarrollo..." en la paleta de comandos](/assets/images/help/codespaces/add-prebuilt-container-command.png)
2. Para este ejemplo, haz clic en **C# (.NET)**. Si necesitas características adicionales puedes seleccionar cualquier contenedor que sea específico para C# (.NET) o una combinación de herramientas tales como C# (.NET) y MS SQL. ![Selecciona la opción de C# (.NET) de la lista](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
3. Haz clic en la versión recomendada de .NET. ![Selección de la versión de.NET](/assets/images/help/codespaces/add-dotnet-version.png)
4. Acepta la opción predeterminada para agregar a Node.js a tu personalización. ![Agregar la selección Node.js](/assets/images/help/codespaces/dotnet-options.png)
5. Para volver a compilar tu contenedor, accede a la paleta de comandos (`shift command P` / `shift control P`) y luego comienza a teclear "rebuild". Haz clic en **Codespaces: Rebuild Container**. ![Opción de recompilar contenedor](/assets/images/help/codespaces/codespaces-rebuild.png)

#### Anatomía de tu contenedor dev

El agregar la plantilla de contenedor dev de C# (.NET) agregará una carpeta de `.devcontainer` a la raíz del repositorio de tu proyecto con los siguientes archivos:

- `devcontainer.json`
- Dockerfile

El archivo `devcontainer.json` recién agregado define unas cuantas propiedades que se describen después de la muestra.

##### devcontainer.json

```json
{
    "name": "C# (.NET)",
    "build": {
        "dockerfile": "Dockerfile",
        "args": { 
            // Update 'VARIANT' to pick a .NET Core version: 2.1, 3.1, 5.0
            "VARIANT": "5.0",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*",
            "INSTALL_AZURE_CLI": "false"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-dotnettools.csharp"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [5000, 5001],

    // [Optional] To reuse of your local HTTPS dev cert:
    //
    // 1. Export it locally using this command:
    //    * Windows PowerShell:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "$env:USERPROFILE/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //    * macOS/Linux terminal:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "${HOME}/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    // 
    // 2. Uncomment these 'remoteEnv' lines:
    //    "remoteEnv": {
    //        "ASPNETCORE_Kestrel__Certificates__Default__Password": "SecurePwdGoesHere",
    //        "ASPNETCORE_Kestrel__Certificates__Default__Path": "/home/vscode/.aspnet/https/aspnetapp.pfx",
    //    },
    //
    // 3. Do one of the following depending on your scenario:
    //    * When using GitHub Codespaces and/or Remote - Containers:
    //      1. Start the container
    //      2. Drag ~/.aspnet/https/aspnetapp.pfx into the root of the file explorer
    //      3. Open a terminal in VS Code and run "mkdir -p /home/vscode/.aspnet/https && mv aspnetapp.pfx /home/vscode/.aspnet/https"
    //
    //    * If only using Remote - Containers with a local container, uncomment this line instead:
    //      "mounts": [ "source=${env:HOME}${env:USERPROFILE}/.aspnet/https,target=/home/vscode/.aspnet/https,type=bind" ],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "dotnet restore",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **Name** - Puedes nombrar a tu contenedor dev como quieras, esto es solo lo predeterminado.
- **Build** - Las propiedades de compilación.
  - **Dockerfile** - En el objeto de compilación, `dockerfile` es una referencia al Dockerfile que también se agregó desde la plantilla.
  - **Args**
    - **Variant**: Este archivo solo contiene el argumento de compilación, el cual es la versión de .NET Core que queremos utilizar.
- **Settings** - Esta es la configuración de {% data variables.product.prodname_vscode %}.
  - **Terminal.integrated.shell.linux** - Si bien bash es lo predeterminado aquí, podrías utilizar otros shells de terminal si lo modificas.
- **Extensions** - Estas son las extensiones que se incluyen predeterminadamente.
  - **ms-dotnettools.csharp** - La extensión de C# de Microsoft proporciona soporte enriquecido para desarrollar en C#, incluyendo características tales como IntelliSense, limpieza de código, depuración, navegación de código, formateo de código, refactorización, explorador de variables, explorador de pruebas y más.
- **forwardPorts** - Cualquier puerto que se liste aquí se reenviará automáticamente.
- **postCreateCommand** - Si quieres ejecutar cualquier cosa después de que llegas a tu codespace y esto no se define en el Dockerfile, como `dotnet restore`, puedes hacerlo aquí.
- **remoteUser** - Predeterminadamente, lo estás ejecutando como el usuario de vscode, pero puedes configurar esto como root opcionalmente.

##### Dockerfile

```bash
# [Choice] .NET version: 5.0, 3.1, 2.1
ARG VARIANT="5.0"
FROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Option] Install Azure CLI
ARG INSTALL_AZURE_CLI="false"
COPY library-scripts/azcli-debian.sh /tmp/library-scripts/
RUN if [ "$INSTALL_AZURE_CLI" = "true" ]; then bash /tmp/library-scripts/azcli-debian.sh; fi \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/library-scripts

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Puedes utilizar este Dockerfile para agregar capas de contenedor adicionales y especificar paquetes de SO, versiones de nodo o paquetes globales que queremos incluir en nuestro contenedor.

### Paso 3: Modifica tu archivo devcontainer.json

Ahora que agregaste tu contenedor dev y tienes un entendimiento básico de lo que hace cada cosa, puedes hacer cambios para configurarlo para tu ambiente. En este ejemplo, agregarás porpiedades para instalar extensiones y restablecer las dependencias de tu proyecto cuando se lance tu codespace.

1. En el explorador, expande la carpeta `.devcontainer` y selecciona el archivo `devcontainer.json` del árbol para abrirlo.

  !["Codespaces: Reconstruir contenedor" en la paleta de comandos](/assets/images/help/codespaces/devcontainers-options.png)

2. Actualiza tu lista de `extensions` en tu archivo `devcontainer.json` para agregar algunas extensiones que son útiles al trabajar con tu proyecto.

  ```json{:copy} 
  "extensions": [
          "ms-dotnettools.csharp",
          "streetsidesoftware.code-spell-checker",
      ],
  ```

3. Deja de comentar el `postCreateCommand` para restablecer las dependencias como parte del proceso de configuración del codespace.

  ```json{:copy} 
  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "dotnet restore",
  ```

4. Para volver a compilar tu contenedor y aplicar los cambios del devcontainer.json, accede a la paleta de comandos (`shift command P` / `shift control P`) y luego comienza a teclear "rebuild". Haz clic en **Codespaces: Rebuild Container**.

  ![Opción de recompilar contenedor](/assets/images/help/codespaces/codespaces-rebuild.png)

  Reconstruir dentro de tu codespace garantiza que tus cambios funcionan como se espera antes de que los confirmes los en el repositorio. Si algo falla, se te colocará en un codespace con un contenedor de recuperación desde el cual puedes volver a compilar para seguir ajustando tu contenedor.

5. Verifica que tus cambios se hayan aplicado con éxito verificando que se haya instalado la extensión "Code Spell Checker".

    ![Lista de extensiones](/assets/images/help/codespaces/dotnet-extensions.png)

### Paso 4: Ejecuta tu aplicación

En la sección anterior, utilizaste `postCreateCommand` para instalar un conjunto de paquetes a través de pip3. Ahora que instalamos nuestras dependencias, podemos ejecutar nuestra aplicación.

1. Ejecuta tu aplicación presionando `F5` o ingresando `dotnet watch run` en tu terminal.

2. Cuando tu proyecto inicia, debes ver una alerta en la esquina inferior derecha con un mensaje para conectarte al puerto que utiliza tu proyecto.

  ![Notificación de reenvío de puertos](/assets/images/help/codespaces/python-port-forwarding.png)

### Paso 5: Confirma tus cambios

{% data reusables.codespaces.committing-link-to-procedure %}

### Pasos siguientes

Ahora debes estar listo para comenzar a desarrollar tu proyecto de C# (.NET) en {% data variables.product.prodname_codespaces %}. Aquí tienes algunos recursos adicionales para situaciones más avanzadas.

- [Administrar secretos cifrados para {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [Administrar la verificación GPG para {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [Reenviar puertos en tu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
