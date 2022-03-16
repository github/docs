---
title: Introduction to dev containers
intro: 'Puedes utilizar un archivo de `devcontainer.json` para definir un ambiente de {% data variables.product.prodname_codespaces %} para tu repositorio.'
allowTitleToDifferFromFilename: true
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
---

 

## Acerca de los contenedores dev

Un contenedor de desarrollo o contenedor dev es el ambiente que utilizan los {% data variables.product.prodname_codespaces %} para proporcionar las herramientas y tiempos de ejecución que necesita tu proyecto para su desarrollo. Si tu proyecto aún no cuenta con un contenedor dev definido, {% data variables.product.prodname_codespaces %} utilizará la configuración predeterminada, la cual contiene muchas de las herramientas comunes que tu equipo podría necesitar para desarrollar en tu proyecto. Para obtener más información, consulta la sección "[Utilizar la configuración predeterminada](#using-the-default-configuration)".

Si quieres que todos los usuarios de tu proyecto tengan un ambiente consistente que se adapte a tu proyecto, puedes agregar un contenedor dev a tu repositorio. Puedes utilizar una configuración predeterminada para seleccionar una configuración común para varios tipos de proyecto con la opción de poder personalizar tu proyecto aún más o puedes crear tu configuración personalizada propia. Para obtener más información, consulta las secciones "[Utilizar una configuración de contenedor predefinida](#using-a-predefined-container-configuration)" y "[Crear una configuración de codespace personalizada](#creating-a-custom-codespace-configuration)". La opción que elijas dependerá de las herramientas, tiempos de ejecución, dependencias y flujos de trabajo que el usuario pudiese necesitar para tener éxito en tu proyecto.

{% data variables.product.prodname_codespaces %} permite la personalización por proyecto y por rama con un archivo `devcontainer.json`. Este archivo de configuración determina el ambiente de cada codespace nuevo que cualquier persona cree en tu repositorio definiendo un contenedor de desarrollo que puede incluir marcos de trabajo, herramientas, extensiones y reenvío de puertos. También puede utilizarse un Dockerfile junto con el archivo `devcontainer.json` en la carpeta `.devcontainer` para definir todo lo que se necesita para crear una imagen de contenedor.

### devcontainer.json

{% data reusables.codespaces.devcontainer-location %}

Puedes utilizar tu `devcontainer.json` para configurar los ajustes predeterminados para todo el ambiente de codespaces, incluyendo el editor, pero también puedes configurar ajustes específicos del editor para [espacios de trabajo](https://code.visualstudio.com/docs/editor/workspaces) individuales de un codespace en un archivo llamado `.vscode/settings.json`.

Para obtener más información sobre la configuración y propiedades que puedes configurar en un `devcontainer.json`, consulta la [referencia a devcontainer.json](https://aka.ms/vscode-remote/devcontainer.json) en la documentación de {% data variables.product.prodname_vscode %}.

### Dockerfile

Un Dockerfile también vive en la carpeta `.devcontainer`.

Puedes agregar un Dockerfile a tu proyecto para definir una imagen de contenedor e instalar software. En el Dockerfile, puedes utilizar `FROM` para especificar la imagen de contenedor.

```Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14

# ** [Optional] Uncomment this section to install additional packages. **
# USER root
#
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
#
# USER codespace
```

Puedes utilizar la instrucción e `RUN` para instalar cualquier software y `&&` para unir comandos.

Referencia tu Dockerfile en tu archivo de `devcontainer.json` utilizando la propiedad `dockerfile`.

```json
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

Para obtener más información sobre cómo utilizar un Dockerfile en un contenedor de dev, consulta la sección [Crear un contenedor de desarrollo](https://code.visualstudio.com/docs/remote/create-dev-container#_dockerfile) en la documentación de {% data variables.product.prodname_vscode %}.

## Utilizar la configuración predeterminada

Si no defines una configuración en tu repositorio, {% data variables.product.prodname_dotcom %} creará un codespace con una imagen base de Linux. La imagen base de Linux incluye lenguajes y tiempos de ejecución como Python, Node.js, JavaScript, TypeScript, C++, Java, .NET, PHP, PowerShell, Go, Ruby, y Rust. También incluye otras herramientas y utilidades de desarrollador como git, el CLI de GitHub, yarn, openssh y vim. Para ver todos los lenguajes, tiempos de ejecución y herramientas que se incluyen, utiliza el comando `devcontainer-info content-url` dentro de tu terminal del codespace y sigue la url que este produce.

Como alternativa, para obtener más información sobre todo lo que incluye la imagen básica de Linux, consulta el archivo más reciente del repositorio [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

La configuración predeterminada es una buena opción si estás trabajando en un proyecto pequeño que utilice los lenguajes y herramientas que proporciona {% data variables.product.prodname_codespaces %}.


## Utilizar una configuración de contenedor predefinida

Las definiciones predefinidas de contenedores incluyen una configuración común para u tipo de proyecto en particular y pueden ayudarte a iniciar rápidamente con una configuración que ya tenga las opciones adecuadas del contenedor, los ajustes de {% data variables.product.prodname_vscode %} y las extensiones de {% data variables.product.prodname_vscode %} que deben estar instaladas.

Utilizar una configuración predefinida es una gran idea si necesitas extensibilidad adicional. También puedes iniciar con una configuración predefinida y modificarla conforme lo requieras de acuerdo con los ajustes de tu proyecto.

{% data reusables.codespaces.command-palette-container %}
1. Haz clic en la definición que quieras utilizar. ![Lista de definiciones de contenedores predefinidas](/assets/images/help/codespaces/predefined-container-definitions-list.png)
1. Sigue los mensajes para personalizar tu definición. Para obtener más información sobre las opciones para personalizar tu definición, consulta la sección "[Agregar características adicionales a tu archivo `devcontainer.json`](#adding-additional-features-to-your-devcontainerjson-file)".
1. Haz clic en **OK** (aceptar). ![Botón de OK](/assets/images/help/codespaces/prebuilt-container-ok-button.png)
1. Para aplicar los cambios, en la esquina inferior derecha de la pantalla, haz clic en **Reconstruir ahora**. Para obtener más información sbre reconstruir tu contenedor, consulta la sección "[Acplicar los cambios a tu configuración](#applying-changes-to-your-configuration)". !["Codespaces: Reconstruir contenedor" en la {% data variables.product.prodname_vscode_command_palette %}](/assets/images/help/codespaces/rebuild-prompt.png)

### Agregar características adicionales a tu archivo de `devcontainer.json`

{% note %}

**Nota:** Esta característica se encuentra en beta y está sujeta a cambios.

{% endnote %}

Puedes agregar características a tu configuración de contenedor predefinido para personalizar qué herramientas estarán disponibles y extender la funcionalidad de tu espacio de trabajo sin crear una configuración personalizada del codespace. Por ejemplo, puedes utilizar una configuración de contenedor predefinida y agregar el {% data variables.product.prodname_cli %} también. Puedes hacer que estas características adicionales estén disponibles para tu proyecto agregándolas a tu archivo de `devcontainer.json` cuando configures los ajustes de dicho contenedor.

Puedes agregar algunas de las características más comunes seleccionándolas cuando configures tu contenedor predefinido. Para obtener más información sobre las características disponibles, consulta la [librería de scripts](https://github.com/microsoft/vscode-dev-containers/tree/main/script-library#scripts) en el repositorio `vscode-dev-containers`.

![El menú de selección de características adicionales durante la configuración del contenedor.](/assets/images/help/codespaces/select-additional-features.png)

También puedes agregar o eliminar características fuera del flujo de trabajo de **Agregar archivos de configuración del contenedor de desarrollo**.
1. Accede a la paleta de comandos (`Shift + Command + P` / `Ctrl + Shift + P`) y luego comienza a teclear "configurar". Selecciona **Codespaces: configurar las características del devcontainer**. ![El comando de configurar características del devcontainer en la paleta de comandos](/assets/images/help/codespaces/codespaces-configure-features.png)
2. Actualiza tus selecciones de características y luego haz clic en **OK**. ![El menú de selección de características adicionales durante la configuración del contenedor.](/assets/images/help/codespaces/select-additional-features.png)
1. Para aplicar los cambios, en la esquina inferior derecha de la pantalla, haz clic en **Reconstruir ahora**. Para obtener más información sbre reconstruir tu contenedor, consulta la sección "[Acplicar los cambios a tu configuración](#applying-changes-to-your-configuration)". !["Codespaces: Reconstruir contenedor" en la paleta de comandos](/assets/images/help/codespaces/rebuild-prompt.png)


## Crear una configuración personalizada para un codespace

Si ninguna de las configuraciones predefinidas satisface tus necesidades, puedes crear una configuración personalizada si agregas un archivo `devcontainer.json`. {% data reusables.codespaces.devcontainer-location %}

En el archivo, puedes utilizar las [llaves de configuración compatibles](https://code.visualstudio.com/docs/remote/devcontainerjson-reference) para especificar los aspectos del ambiente del codespace, como cuáles extensiones de {% data variables.product.prodname_vscode %} se instalarán.

{% data reusables.codespaces.vscode-settings-order %}

Puedes definir la configuración predeterminada del editor para {% data variables.product.prodname_vscode %} en dos lugares.

* La configuración del editor que se definió en `.vscode/settings.json` se aplica como una configuración con alcance de _Workspace_- en este codespace.
* La configuración del editor que se definió en la clave `settings` en `devcontainer.json` se aplica como una configuración con alcance de _Remote [Codespaces]_ en este codespace.

Después de actualizar el archivo `devcontainer.json`, puedes reconstruir el contenedor para que tu codespace aplique los cambios. Para obtener más información, consulta la sección "[Aplicar cambios a tu configuración](#applying-changes-to-your-configuration)".


<!--
## Supported codespace configuration keys

You can use configuration keys supported by {% data variables.product.prodname_codespaces %} in `devcontainer.json`.

### General settings

- `name`
- `settings`
- `extensions`
- `forwardPorts`
- `postCreateCommand`

### Docker, Dockerfile, or image settings

- `image`
- `dockerFile`
- `context`
- `containerEnv`
- `remoteEnv`
- `containerUser`
- `remoteUser`
- `mounts`
- `runArgs`
- `overrideCommand`
- `dockerComposeFile`

For more information about the available settings for `devcontainer.json`, see [devcontainer.json reference](https://aka.ms/vscode-remote/devcontainer.json) in the {% data variables.product.prodname_vscode %} documentation.
-->

## Aplicar cambios a tu configuración

{% data reusables.codespaces.apply-devcontainer-changes %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %} Arreglar los errores en la configuración. ![Mensaje de error sobre el modo de recuperación](/assets/images/help/codespaces/recovery-mode-error-message.png)
   - Para diagnosticar el error revisando la bitácora de creación, haz clic en **Ver bitácora de creación**.
   - Para arreglar los errores que se identificaron en las bitácoras, actualiza tu archivo `devcontainer.json`.
   - Para aplicar los cambios, vuelve a crear tu contenedor.

## Leer más

- "[Prebuilding your codespaces](/codespaces/prebuilding-your-codespaces)"
