---
title: Configurar Codespaces para tu proyecto
intro: Puedes configurar ajustes predeterminados para cada codespace nuevo de tu repositorio para garantizar que los colaboradores tengan todas las herramientas y configuraciones que requieran en su ambiente de desarrollo en línea.
product: '{% data reusables.gated-features.codespaces %}'
permissions: Las personas con permisos de escritura en un repositorio pueden crear o editar la configuración predeterminada del codespace.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### Acerca de las configuraciones predeterminadas de los codespaces

{% data reusables.codespaces.about-configuration %}

Si no defines una configuración en tu repositorio, {% data variables.product.prodname_dotcom %} creará un codespace con una imagen base de Linux. La imagen base de Linux incluye herramientas para Node.js, JavaScript, TypeScript, Python, C++, Java, C#, .NET Core, PHP, y PowerShell. Para obtener más información acerca de la imagen base de Linux, consulta el repositorio [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers/codespaces-linux).

{% data reusables.codespaces.about-personalization %}{% data reusables.codespaces.codespace-config-order %}Para obtener más información, consulta la sección "[Personalizar {% data variables.product.prodname_codespaces %} para tu cuenta](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)".

Puedes crear una configuración predeterminada para tus codespaces utilizando una configuración de contenedor pre-compilado para tu tipo de proyecto, o puedes crear una configuración personalizada específica para las necesidades de tu proyecto.

{% data variables.product.prodname_codespaces %} utiliza una configuración que se contiene en un archivo llamado `devcontainer.json` en la raíz del repositorio o en una carpeta `.devcontainer`. Puedes utilizar `devcontainer.json` para configurar los ajustes predeterminados para todo el ambiente del codespace, incluyendo el editor de {% data variables.product.prodname_vscode %}, pero también puedes configurar los ajustes específicos para el editor en un archivo llamado `.vscode/settings.json`.

Los cambios a la configuración de un codespace en un repositorio se aplican únicamente a cada codespace nuevo y no afectan a los ya existentes.

### Utilizar una configuración de contenedor pre-compilado

Puedes utilizar cualquier configuración de contenedor pre-compilado para {% data variables.product.prodname_vscode %} que se encuentre disponible en el repositorio [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers). Las definiciones de los contenedores pre-compilados incluyen una configuración común para un tipo de proyecto en particular, y pueden ayudarte a comenzar rápidamente con una configuración que ya tenga las opciones adecuadas para el contenedor, los ajustes de {% data variables.product.prodname_vscode %}, y las extensiones de {% data variables.product.prodname_vscode %} que deben estar instaladas.

1. Clona o descarga el repositorio [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers).
1. En el repositorio `vscode-dev-containers`, navega a la carpeta [`containers`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers), y luego escoge una configuración de contenedor de acuerdo con las necesidades de tu proyecto. Utilizaremos la configuración del contenedor de [Node.js & JavaScript](https://aka.ms/vscode-dev-containers/definitions/node) como ejemplo.
1. Desde la carpeta de [`Node.js & JavaScript`](https://aka.ms/vscode-dev-containers/definitions/node), copia la carpeta `.devcontainer` a la raíz del repositorio de tu proyecto.
1. Confirma y carga la nueva confirmación al repositorio de tu proyecto en {% data variables.product.prodname_dotcom %}.

Cada coedspace nuevo que crées desde una rama que contenga la carpeta `.devcontainer` se configurará de acuerdo con el contenido de la misma. Para obtener más información, consulta la sección "[Crear un codespace](/github/developing-online-with-codespaces/creating-a-codespace)".

### Crear una configuración personalizada para un codespace

Si ninguna de las configuraciones pre-compiladas se ajusta a tus necesidades, puedes crear una configuración personalizada si agregas un archivo `devcontainer.json` a la raíz de tu repositorio o una carpeta `.devcontainer`. En el archivo, puedes utilizar claves de configuración compatibles para especificar aspectos del ambiente del codespace, como por ejemplo, qué extensiones de {% data variables.product.prodname_vscode %} deben instalarse.

{% data reusables.codespaces.vscode-settings-order %}

Puedes definir la configuración predeterminada del editor para {% data variables.product.prodname_vscode %} en dos lugares.

* La configuración del editor que se definió en `.vscode/settings.json` se aplica como una configuración con alcance de _Workspace_- en este codespace.
* La configuración del editor que se definió en la clave `settings` en `devcontainer.json` se aplica como una configuración con alcance de _Remote [Codespaces]_ en este codespace.

### Claves de configuración compatibles con los codespaces

Puedes utilizar claves de configuración compatibles con {% data variables.product.prodname_codespaces %} en `devcontainer.json`.

#### Ajustes generales

- `name (nombre)`
- `parámetros`
- `extensions`
- `forwardPorts`
- `devPort`
- `postCreateCommand`

#### Ajustes de Docker, Dockerfile o de imagen

- `imagen`
- `dockerFile`
- `context`
- `containerEnv`
- `remoteEnv`
- `containerUser`
- `remoteUser`
- `updateRemoteUserUID`
- `mounts`
- `workspaceMount`
- `workspaceFolder`
- `runArgs`
- `overrideCommand`
- `shutdownAction`
- `dockerComposeFile`

Para obtener más información acerca de los ajustes disponibles para `devcontainer.json`, consulta la sección [devcontainer.json reference](https://aka.ms/vscode-remote/devcontainer.json) en la documentación de {% data variables.product.prodname_vscode %}.
