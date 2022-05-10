---
title: Introducción a los contenedores dev
intro: 'Cuando trabajas en un codespace, el ambiente en el que estás trabajando se crea utilizando un contenedor de desarrollo o contenedor dev, el cual se hospeda en una máquina virtual.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
  - /codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project
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

Los contenedores de desarrollo o contenedores dev son contenedores de Docker que se configuran específicamente para proporcionar un ambiente de desarrollo con características completas. Cuando sea que trabajes en un codespace, estarás utilizando un contenedor dev en una máquina virtual.

Puedes configurar el dev container en un repositorio para que el codespace que se cree para dicho repositorio te proporcione un ambiente de desarrollo personalizado, completo con todas las herramientas y tiempos de ejecución que necesitas para trabajar en un proyecto específico. Si no defines una configuración en el repositorio, entonces el {% data variables.product.prodname_github_codespaces %} utilizará una configuración predeterminada, la cual contendrá muchas de las herramientas comunes que podría necesitar tu equipo para el desarrollo de tu proyecto. Para obtener más información, consulta la sección "[Utilizar la configuración predeterminada](#using-the-default-dev-container-configuration)".

Los archivos de configuración de un contenedor dev se contienen en un directorio `.devcontainer` en tu repositorio. Puedes utilizar {% data variables.product.prodname_vscode %} para que agregue archivos de configuración para ti. Puedes elegir de entre una variedad de configuraciones predefinidas para varios tipos de proyecto. Puedes utilizarlos sin configuraciones subsecuentes o puedes editar las configuraciones para refinar el ambiente de desarrollo que producen. Para obtener más información, consulta la sección "[Utilizar una configuración predefinida de contenedor dev](#using-a-predefined-dev-container-configuration)".

Como alternativa, puedes agregar tus propios archivos de configuración persionalizados. Para obtener más información, consulta la sección "[Crear una configuración personalizada de contenedor dev](#creating-a-custom-dev-container-configuration)".

Puedes definir una sola configuración de contenedor dev para un repositorios, configuraciones diferentes para ramas diferentes o configuraciones múltiples. Cuando hay configuraciones múltiples disponibles, los usuarios pueden elegir su configuración preferida cuando crean un codespace. Esto es particularmente útil para los repositorios grandes que contienen código fuente en diversos lenguajes de programación o para proyectos diferentes. Puedes crear una variedad de configuraciones que permitan que los diferentes equipos trabajen en un codespace que se configuró adecuadamente para el trabajo que están realizando.

### devcontainer.json

El archivo principal en una configuración de contenedor dev es `devcontainer.json`. Puedes utilizar este archivo para determinar el ambiente de los codespaces que se crean para tu repositorio. El contenido de este archivo define un contenedor dev que puede incluir marcos de trabajo, herramientas, extensiones y reenvío de puertos. El archivo `devcontainer.json` a menudo contiene una referencia a un Dockerfile, que habitualmente se ubica en todo el archivo `devcontainer.json`.

Si no agregas un archivo `devcontainer.json` a tu repositorio, se utilizará la configuración del contenedor dev predeterminado. Para obtener más información, consulta la sección "[Utilizar la configuración predeterminada](#using-the-default-dev-container-configuration)".

El archivo `devcontainer.json` a menudo se ubica en el directorio `.devcontainer` de tu repositorio. Como alternativa, puedes ubicarlo directamente en la raíz del repositorio, en cuyo caso el nombre de archivo debe comenzar con un punto: `.devcontainer.json`.

SI quieres tener una variedad de configuraciones de contenedores dev en tu repositorio, cualquier alternativa al archivo `.devcontainer/devcontainer.json` (o `.devcontainer.json`) debe ubicarse en su propio subdirectorio en la ruta  `.devcontainer/SUBDIRECTORY/devcontainer.json`. Por ejemplo, podrías tener una elección de dos configuracones:
* `.devcontainer/database-dev/devcontainer.json`
* `.devcontainer/gui-dev/devcontainer.json`

Cuando tienes varios archivos de `devcontainer.json` en tu repositorio, cada codespace se crea desde solo una de las configuraciones. No se pueden importar los ajustes ni heredarlos entre archivos de `devcontainer.json`. Si un archivo de `devcontainer.json` en un subdirectorio personalizado tiene archivos dependientes, tales como el Dockerfile o los scripts que ejecutan los comandos en dicho archivo `devcontainer.json`, se recomienda que coloques ambos de estos archivos en el mismo directorio.

Para obtener más información sobre cómo elegir tu configuración preferida de contenedor dev cuando creas un codespace, consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

{% data reusables.codespaces.more-info-devcontainer %}

#### Cómo utilizar el devcontainer.json

Es útil pensar que el archivo `devcontainer.json` sirve para proporcionar "adaptación" en vez de "personalización". Solo debes incluir las cosas que necesiten todos los que trabajan en tus codespaces como elementos estándar del ambiente de desarrollo, no las que son preferencias personales. Las cosas como los limpiadores son buenas para estandarizar y para requerir que todos las tengan instaladas, así que es bueno incluirlas en tu archivo `devcontainer.json`. Las cosas como los decoradores de interfaz de usuario o los temas son elecciones personales que no deberían ponerse en el archivo `devcontainer.json`.

Puedes personalizar tus codespaces utilizando dotfiles y la sincronización de ajustes. Para obtener más información, consulta la sección "[Personalizar los codespaces para tu cuenta](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account)".

### Dockerfile

Puedes agregar un Dockerfile como parte de tu configuración de contenedor dev.

El Dockerfile es un archivo de texto que contiene las instrucciones necesarias para crear una imagen de contenedor de Docker. Esta imagen se utiliza para generar un contenedor de desarrollo cada que alguien crea un codespace utilizando el archivo `devcontainer.json` que referencia a este Dockerfile. Las instrucciones en el Dockerfile habitualmente comienzan haciendo referencia a una imagen padre en la cual se basa la imagen que se creará. A esto le siguen los comandos que se ejecutan durante el proceso de creación de imagen, por ejemplo, para instalar paquetes de software.

El Dockerfile para un contenedor dev se ubica habitualmente en la carpeta `-.devcontainer`, junto con el `devcontainer.json` en el cual se referencia.

{% note %}

**Nota**: Como alternativa a utilizar un Dockerfile, puedes utilizar la propiedad `image` en el archivo `devcontainer.json` para referirte directamente a una imagen existente que quieras utilizar. Si no se encuentra un Dockerfile ni una imagen, entonces se utilizará la imagen de contenedor predeterminada. Para obtener más información, consulta la sección "[Utilizar la configuración predeterminada](#using-the-default-dev-container-configuration)".

{% endnote %}

#### Ejemplo de un Dockerfile simple

El siguiente ejemplo utiliza cuatro instrucciones:

`ARG` define una variable de tiempo de compilación.

`FROM` especifica la imagen padre en la cual se basará la imagen de Docker generada.

`COPY` copia un archivo y lo agrega al sistema de archivos.

`RUN` actualiza las listas de paquetes y ejecuta un script. También puedes utilizar una instrucción de `RUN` para instalar software, tal como lo muestran las instrucciones en las cuales se comentó. Para ejecutar comandos múltiples, utiliza `&&` para combinar los comandos en una sola declaración de `RUN`.

```Dockerfile{:copy}
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
```

Para obtener más información sobre las instrucciones de los Dockerfiles, consulta la "[referencia de Dockerfile](https://docs.docker.com/engine/reference/builder)" en la documentación de Docker.

#### Utilizar un Dockerfile

Para utilizar un Dockerfile como parte de una configuración de contenedor dev, referénciala en tu `devcontainer.json` utilizando la propiedad `dockerfile`.

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

Para obtener más información sobre cómo utilizar un Dockerfile en una configuración de contenedor dev, consulta la documentación de {% data variables.product.prodname_vscode %} "[Crear un contenedor de desarrollo](https://code.visualstudio.com/docs/remote/create-dev-container#_dockerfile)".

## Utilizar la configuración de contenedor dev predeterminada

Si no defines una configuración en tu repositorio, {% data variables.product.prodname_dotcom %} creará un codespace utilizando una imagen de Linux predeterminada. Esta imagen de Linux incluye lenguajes y tiempos de ejecución como Python, Node.js, JavaScript, TypeScript, C++, Java, .NET, PHP, PowerShell, Go, Ruby y Rust. También incluye otras herramientas y utilidades de desarrollador como Git, el CLI de GitHub, yarn, openssh y vim. Para ver todos los lenguajes, tiempos de ejecución y herramientas que se incluyen, utiliza el comando `devcontainer-info content-url` dentro de tu terminal del codespace y sigue la URL que este produce.

Como alternativa, para obtener más información sobre todo lo que incluye la imagen predeterminada de Linux, consulta el archivo más reciente del repositorio [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

La configuración predeterminada es una buena opción si estás trabajando en un proyecto pequeño que utilice los lenguajes y herramientas que proporciona {% data variables.product.prodname_github_codespaces %}.

## Utilizar una configuración predeterminada de contenedor dev

Puedes elegir de entre una lista de configuraciones predeterminadas para crear una configuración de contenedor dev para tu repositorio. Estas configuraciones proporcionan ajustes comunes para tipos de proyecto particulares y pueden ayudarte a iniciar rápidamente con una configuración que ya tenga las opciones de contenedor, ajustes de {% data variables.product.prodname_vscode %} y extensiones de {% data variables.product.prodname_vscode %} que deberían instalarse.

Utilizar una configuración predefinida es una gran idea si necesitas extensibilidad adicional. También puedes comenzar con una configuración predeterminada y modificarla conforme la necesites para tu proyecto.

Puedes agregar una configuración de contenedor dev predefinida ya sea mientras trabajas en un codespace o localmente en un repositorio.

{% data reusables.codespaces.command-palette-container %}
1. Haz clic en la definición que quieres utilizar.

   ![Lista de definiciones de contenedores predefinidas](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. Sigue los mensajes para personalizar tu definición. Para obtener más información sobre las opciones para personalizar tu definición, consulta la sección "[Agregar características adicionales a tu archivo `devcontainer.json`](#adding-additional-features-to-your-devcontainerjson-file)".
1. Haz clic en **OK** (aceptar).

   ![Botón de OK](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. Si estás trabajando en un codespace, aplica tus cambios haciendo clic en **Recompilar ahora** en el mensaje en la parte inferior derecha de la ventana. Para obtener más información sbre reconstruir tu contenedor, consulta la sección "[Acplicar los cambios a tu configuración](#applying-changes-to-your-configuration)".

   !["Codespaces: Reconstruir contenedor" en la {% data variables.product.prodname_vscode_command_palette %}](/assets/images/help/codespaces/rebuild-prompt.png)

### Agregar características adicionales a tu archivo de `devcontainer.json`

{% note %}

**Nota:** Esta característica se encuentra en beta y está sujeta a cambios.

{% endnote %}

Puedes agregar características a tu configuración predefinida de contenedor para personaliza las herramientas que están disponibles y extender la funcionalidad de tu espacio de trabajo sin tener que crear una configuración personalizada de contenedor dev desde cero. Por ejemplo, podrías utilizar una configuración predefinida de contenedor y agregar el {% data variables.product.prodname_cli %}. Puedes hacer que estas características adicionales estén disponibles para tu proyecto agregándolas a tu archivo de `devcontainer.json` cuando configures los ajustes de dicho contenedor.

Puedes agregar algunas de las características más comunes seleccionándolas cuando configures tu contenedor predefinido. Para obtener más información sobre las características disponibles, consulta la [librería de scripts](https://github.com/microsoft/vscode-dev-containers/tree/main/script-library#scripts) en el repositorio `vscode-dev-containers`.


1. Accede a la paleta de comandos (`Shift + Command + P` / `Ctrl + Shift + P`) y luego comienza a teclear "configurar". Selecciona **Codespaces: configurar las características del devcontainer**.

   ![El comando de configurar características del devcontainer en la paleta de comandos](/assets/images/help/codespaces/codespaces-configure-features.png)

1. Actualiza tus selecciones de características y luego haz clic en **OK**.

   ![The select additional features menu during container configuration](/assets/images/help/codespaces/select-additional-features.png)

1. Para aplicar los cambios, en la esquina inferior derecha de la pantalla, haz clic en **Reconstruir ahora**. Para obtener más información sbre reconstruir tu contenedor, consulta la sección "[Acplicar los cambios a tu configuración](#applying-changes-to-your-configuration)".

   !["Codespaces: Reconstruir contenedor" en la paleta de comandos](/assets/images/help/codespaces/rebuild-prompt.png)

## Crear una configuración de contenedor dev personalizada

Si ninguna de las configuraciones predefinidas satisface tus necesidades, puedes crear una configuración personalizada si escribes tu propio archivo `devcontainer.json`.

* Si estás agregando un solo archivo `devcontainer.json` que utilizará todo aquél que cree un codespace desde tu repositorio, crea el archivo dentro de un directorio de `.devcontainer` en la raíz del repositorio.
* Si quieres ofrecer a los usuarios una elección de configuración, puedes crear archivos múltiples de `devcontainer.json`, cada uno ubicado dentro de un subdirectorio por separado del directorio `.devcontainer`.

   {% note %}

   **Nota**: No puedes ubicar tus archivos de `devcontainer.json` en los directorios a más de un nivel debajo de `.devcontainer`. Por ejemplo, un archivo en la ruta `.devcontainer/teamA/devcontainer.json` sí funcionaría, pero uno en `.devcontainer/teamA/testing/devcontainer.json`, no.

   {% endnote %}

   Si se encuentran archivos `devcontainer.json` múltiples en el repositorio, estos se listarán en la página de opciones de creación de codespaces. Para obtener más información, consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

   ![A choice of configuration files](/assets/images/help/codespaces/configuration-file-choice.png)

### Selección de configuración predeterminada durante la creación de codespaces

Si existe el archivo `.devcontainer/devcontainer.json` o `.devcontainer.json`, este será la selección predeterminada en la lista de archivos de configuración disponibles cuando crees un codespace. Si no existe ninguno de ellos, se seleccionará la configuración de contenedor dev predefinida.

![The default configuration choice selected](/assets/images/help/codespaces/configuration-file-choice-default.png)

### Editar el archivo devcontainer.json

Puedes agregar y editar las claves de configuración compatibles en el archivo `devcontainer.json` para especificar los aspectos del ambiente del codespace, como qué extensiones de {% data variables.product.prodname_vscode %} se instalarán. {% data reusables.codespaces.more-info-devcontainer %}

El archivo de `devcontainer.json` se escribe utilizando el formato JSONC. Esto te permite incluir comentarios dentro del archivo de configuración. For more information, see "[Editing JSON with Visual Studio Code](https://code.visualstudio.com/docs/languages/json#_json-with-comments)" in the {% data variables.product.prodname_vscode %} documentation.

{% note %}

**Note**: If you use a linter to validate the `devcontainer.json` file, make sure it is set to JSONC and not JSON or comments will be reported as errors.

{% endnote %}

### Editor settings for Visual Studio Code

{% data reusables.codespaces.vscode-settings-order %}

Puedes definir la configuración predeterminada del editor para {% data variables.product.prodname_vscode %} en dos lugares.

* Editor settings defined in the `.vscode/settings.json` file in your repository are applied as _Workspace_-scoped settings in the codespace.
* Editor settings defined in the `settings` key in the `devcontainer.json` file are applied as _Remote [Codespaces]_-scoped settings in the codespace.

## Aplicar cambios a tu configuración

{% data reusables.codespaces.apply-devcontainer-changes %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %} Fix the errors in the configuration.

   ![Mensaje de error sobre el modo de recuperación](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - Para diagnosticar el error revisando la bitácora de creación, haz clic en **Ver bitácora de creación**.
   - Para arreglar los errores que se identificaron en las bitácoras, actualiza tu archivo `devcontainer.json`.
   - Para aplicar los cambios, vuelve a crear tu contenedor.

## Leer más

- "[Precompilar tus codespaces](/codespaces/prebuilding-your-codespaces)"
