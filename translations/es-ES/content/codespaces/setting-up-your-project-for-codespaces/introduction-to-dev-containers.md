---
title: Introducción a los contenedores dev
intro: 'Cuando trabajas en un codespace, el entorno en el que trabajas se crea mediante un contenedor de desarrollo hospedado en una máquina virtual.'
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
ms.openlocfilehash: 646f8068e68040f1d12f8155c3ba9e2bdb84c2ca
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185095'
---
## Acerca de los contenedores dev

Los contenedores de desarrollo son contenedores de Docker que están configurados específicamente para proporcionar un entorno de desarrollo completo. Siempre que trabajes en un codespace, estarás usando un contenedor de desarrollo en una máquina virtual.

Puedes configurar el contenedor de desarrollo para un repositorio a fin de que los codespaces creados para ese repositorio te proporcionen un entorno de desarrollo personalizado, completo con todas las herramientas y entornos de ejecución que necesitas para trabajar en un proyecto específico. Si no defines una configuración en el repositorio, {% data variables.product.prodname_github_codespaces %} usa una configuración predeterminada, que incluye muchas de las herramientas comunes que el equipo podría necesitar para el desarrollo con el proyecto. Para obtener más información, consulta "[Uso de la configuración predeterminada del contenedor de desarrollo](#using-the-default-dev-container-configuration)".

Los archivos de configuración de un contenedor de desarrollo se incluyen en un directorio `.devcontainer` del repositorio. Puedes usar {% data variables.product.prodname_vscode %} para agregar archivos de configuración automáticamente. Puedes elegir entre una selección de configuraciones predefinidas para varios tipos de proyecto. Puedes usarlos sin ninguna configuración adicional, o bien puedes editar las configuraciones para refinar el entorno de desarrollo que producen. Para obtener más información, consulta "[Uso de una configuración predefinida del contenedor de desarrollo](#using-a-predefined-dev-container-configuration)".

Como alternativa, puedes agregar tus propios archivos de configuración personalizados. Para obtener más información, consulta "[Creación de una configuración personalizada de contenedor de desarrollo](#creating-a-custom-dev-container-configuration)".

Puedes definir una única configuración de contenedor de desarrollo para un repositorio, configuraciones diferentes para distintas ramas o varias configuraciones. Cuando hay varias configuraciones disponibles, los usuarios pueden elegir su configuración preferida cuando crean un codespace. Esto es especialmente útil para repositorios de gran tamaño que contienen código fuente en diferentes lenguajes de programación o para proyectos diferentes. Puedes crear una selección de configuraciones que permitan a los distintos equipos trabajar en un codespace configurado adecuadamente para el trabajo que están realizando.

Al crear un codespace a partir de una plantilla, puedes empezar con uno o varios archivos de configuración de contenedor de desarrollo en el área de trabajo. Para configurar aún más el entorno, puedes agregar o quitar la configuración de estos archivos y recompilar el contenedor para aplicar los cambios en el espacio de código en el que estás trabajando. Si publicas el codespace en un repositorio en {% data variables.product.product_name %}, los codespaces creados a partir de ese repositorio compartirán la configuración que hayas definido. Para obtener más información, consulta "[Aplicación de cambios de configuración a un codespace](#applying-configuration-changes-to-a-codespace)" y "[Creación de un codespace a partir de una plantilla](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-remote-repository)".

### devcontainer.json

El archivo principal de una configuración de contenedor de desarrollo es el archivo `devcontainer.json`. Puedes usar este archivo a fin de determinar el entorno de los codespaces creados para el repositorio. El contenido de este archivo define un contenedor de desarrollo que puede incluir marcos, herramientas, extensiones y desvío de puertos. El archivo `devcontainer.json` normalmente contiene una referencia a un Dockerfile, que normalmente se encuentra junto con el archivo `devcontainer.json`.

Si creas un codespace desde un repositorio sin un archivo `devcontainer.json`, o si empiezas desde la plantilla en blanco de {% data variables.product.company_short %}, se usa la configuración predeterminada del contenedor de desarrollo. Para obtener más información, consulta "[Uso de la configuración predeterminada del contenedor de desarrollo](#using-the-default-dev-container-configuration)".

El archivo `devcontainer.json` se encuentra normalmente en el directorio `.devcontainer` del repositorio. Como alternativa, puedes localizarlo directamente en la raíz del repositorio, en cuyo caso el nombre de archivo debe comenzar con un punto: `.devcontainer.json`. 

Si quieres tener una selección de configuraciones de contenedor de desarrollo en el repositorio, cualquier alternativa al archivo `.devcontainer/devcontainer.json` (o `.devcontainer.json`) debe encontrarse en su propio subdirectorio en la ruta de acceso `.devcontainer/SUBDIRECTORY/devcontainer.json`. Por ejemplo, podrías tener una selección de dos configuraciones: 
* `.devcontainer/database-dev/devcontainer.json` 
* `.devcontainer/gui-dev/devcontainer.json`

Cuando tienes varios archivos `devcontainer.json` en el repositorio, cada codespace se crea a partir de una de las configuraciones únicamente. La configuración no se puede importar ni heredar entre archivos `devcontainer.json`. Si un archivo `devcontainer.json` de un subdirectorio personalizado tiene archivos dependientes, como Dockerfile o scripts que se ejecutan mediante comandos en el archivo `devcontainer.json`, se recomienda colocar estos archivos en el mismo subdirectorio.

Para obtener información sobre cómo elegir la configuración de contenedor de desarrollo preferida al crear un codespace, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".

{% data reusables.codespaces.more-info-devcontainer %}

#### Procedimientos para usar devcontainer.json

Es útil pensar en `devcontainer.json` como un archivo que proporciona "customization" (personalización) en lugar de "personalization" (personalización). Solo debes incluir cosas que todos los usuarios que trabajan en el código base necesitan como elementos estándar del entorno de desarrollo, no como cosas que sean preferencias personales. Las cosas como linters son buenas para estandarizar y exigir que todos los usuarios lo tengan instalado, por lo que son buenas para incluir en tu archivo `devcontainer.json`. Las cosas como los decoradores de la interfaz de usuario o los temas son opciones personales que no deben colocarse en el archivo `devcontainer.json`.

Puedes personalizar los codespaces mediante dotfiles y la sincronización de la configuración. Para más información, consulta "[Personalización de {% data variables.product.prodname_github_codespaces %} para tu cuenta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)".

### Dockerfile

Puedes agregar un Dockerfile como parte de la configuración del contenedor de desarrollo. 

Dockerfile es un archivo de texto que contiene las instrucciones necesarias para crear una imagen de contenedor de Docker. Esta imagen se usa para generar un contenedor de desarrollo cada vez que alguien crea un codespace mediante el archivo `devcontainer.json` que hace referencia a este Dockerfile. Normalmente, las instrucciones del Dockerfile comienzan haciendo referencia a una imagen primaria en la que se basa la imagen que se creará. Esto va seguido de comandos que se ejecutan durante el proceso de creación de imágenes, por ejemplo, para instalar paquetes de software.

El Dockerfile de un contenedor de desarrollo se encuentra normalmente en la carpeta `.devcontainer`, junto con el elemento `devcontainer.json` en el que se hace referencia al mismo. 

{% note %}

**Nota**: Como alternativa al uso de un Dockerfile, puede usar la propiedad `image` en el archivo `devcontainer.json` para hacer referencia directamente a una imagen existente que quieras usar. La imagen que especifiques aquí debe estar permitida por cualquier directiva de imagen de la organización que se haya establecido. Para obtener más información, consulta "[Restringir la imagen base para los codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)". Si no se encuentra un Dockerfile ni una imagen, se usará la imagen de contenedor predeterminada. Para obtener más información, consulta "[Uso de la configuración predeterminada del contenedor de desarrollo](#using-the-default-dev-container-configuration)".

{% endnote %}

#### Ejemplo de Dockerfile sencillo

En el ejemplo siguiente se usan cuatro instrucciones:

`ARG` define una variable en tiempo de compilación.

`FROM` especifica la imagen primaria en la que se basará la imagen de Docker generada.

`COPY` copia un archivo y lo agrega al sistema de archivos. 

`RUN` actualiza las listas de paquetes y ejecuta un script. También puedes usar una instrucción `RUN` para instalar software, tal como se muestra en las instrucciones comentadas. Para ejecutar varios comandos, usa `&&` a fin de combinar los comandos en una sola instrucción `RUN`.

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

Para obtener más información sobre las instrucciones compatibles con Docker, consulta "[Referencia de Dockerfile](https://docs.docker.com/engine/reference/builder)" en la documentación de Docker.

#### Uso de un Dockerfile

Para usar un Dockerfile como parte de una configuración de contenedor de desarrollo, haz referencia a él en el archivo `devcontainer.json` mediante la propiedad `dockerfile`.

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

Hay varias opciones disponibles si quieres usar la orquestación de contenedores existente en el contenedor de desarrollo. Para obtener más información, consulta la sección "Opciones de orquestación" de la [especificación](https://containers.dev/implementors/spec/#orchestration-options) en el sitio web de contenedores de desarrollo.

## Uso de la configuración predeterminada del contenedor de desarrollo

Si no defines una configuración en tu repositorio, {% data variables.product.prodname_dotcom %} creará un codespace con una imagen predeterminada de Linux. Esta imagen de Linux incluye varias versiones en tiempo de ejecución para lenguajes populares como Python, Node, PHP, Java, Go, C++, Ruby y .NET Core/C#. Se usan las versiones LTS o más recientes de estos lenguajes. También hay herramientas para admitir la ciencia de datos y el aprendizaje automático, como JupyterLab y Conda. La imagen también incluye otras herramientas y utilidades para desarrolladores como Git, la CLI de GitHub, yarn, openssh y vim. Para ver todos los lenguajes, tiempos de ejecución y herramientas que se incluyen, usa el comando `devcontainer-info content-url` dentro del terminal de codespace y sigue la dirección URL que genera el comando.

Para obtener información sobre lo que se incluye en la imagen de Linux predeterminada, consulta el repositorio [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal). 

La configuración predeterminada es una buena opción si estás trabajando en un proyecto pequeño que utiliza los lenguajes y herramientas que proporciona {% data variables.product.prodname_github_codespaces %}.

## Uso de una configuración predefinida de contenedor de desarrollo

Si usas {% data variables.product.prodname_codespaces %} en {% data variables.product.prodname_vscode %}, o en un explorador web, puedes crear una configuración de contenedor de desarrollo para el repositorio eligiendo una lista de configuraciones predefinidas. Estas configuraciones proporcionan una configuración común para tipos de proyecto en particular, y pueden ayudarte a comenzar rápidamente con una configuración que ya tenga las opciones adecuadas para el contenedor, la configuración de {% data variables.product.prodname_vscode %}, y las extensiones de {% data variables.product.prodname_vscode %} que deben estar instaladas.

Utilizar una configuración predefinida es una gran idea si necesitas extensibilidad adicional. También puedes iniciar con una configuración predefinida y modificarla conforme lo requieras de acuerdo con el proyecto. Para obtener más información sobre las definiciones de contenedores de desarrollo predefinidos, consulta el repositorio [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src).

Puedes agregar una configuración predefinida de contenedor de desarrollo mientras trabajas en un codespace o en un repositorio localmente. Para hacerlo en {% data variables.product.prodname_vscode_shortname %} mientras trabajas localmente y no estás conectado a un espacio de código, debes tener la extensión "Contenedores de desarrollo" instalada y habilitada. Para obtener más información sobre esta extensión, consulta [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). En el procedimiento siguiente se describe el proceso cuando se usa un codespace. Los pasos de {% data variables.product.prodname_vscode_shortname %} cuando no estás conectado a un codespace son muy similares.

{% data reusables.codespaces.command-palette-container %}
1. Haz clic en la definición que quieras utilizar.

   ![Captura de pantalla de una lista de definiciones de contenedores predefinidas](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. Sigue los mensajes para personalizar tu definición. Para obtener más información sobre las opciones disponibles para personalizar la definición, consulte "[Agregar características adicionales al archivo `devcontainer.json`](#adding-additional-features-to-your-devcontainerjson-file)".
1. Haga clic en **OK**.

   ![Captura de pantalla del botón Aceptar](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. Si estás trabajando en un codespace, aplica los cambios; para ello, haz clic en **Rebuild now** (Recompilar ahora) en el mensaje situado en la parte inferior derecha de la ventana. Para obtener más información sobre cómo recompilar el contenedor, consulte "[Aplicación de cambios a la configuración](#applying-configuration-changes-to-a-codespace)".

   ![Captura de pantalla de un mensaje para 'Recompilar ahora'](/assets/images/help/codespaces/rebuild-prompt.png)

### Agregar características adicionales al archivo `devcontainer.json`

{% data reusables.codespaces.about-features %} Para obtener más información, consulta "[Agregar características a un archivo `devcontainer.json`](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=vscode)".

## Creación de una configuración personalizada de contenedor de desarrollo

Si no hay ninguna de las configuraciones predefinidas que satisfaga tus necesidades, puedes crear una configuración personalizada escribiendo tu propio archivo `devcontainer.json`.

* Si vas a agregar un único archivo `devcontainer.json` que usarán todos los usuarios que creen un codespace desde el repositorio, crea el archivo en un directorio `.devcontainer` en la raíz del repositorio. 
* Si quieres ofrecer a los usuarios una opción de configuración, puedes crear varios archivos personalizados `devcontainer.json`, cada uno ubicado en un subdirectorio independiente del directorio `.devcontainer`.

   {% note %}

   **Notas**:
   - No se pueden encontrar los archivos `devcontainer.json` en directorios de más de un nivel por debajo de `.devcontainer`. Por ejemplo, un archivo en `.devcontainer/teamA/devcontainer.json` funcionará, pero en `.devcontainer/teamA/testing/devcontainer.json` no.
   - {% data reusables.codespaces.configuration-choice-templates %} Para obtener más información, consulta "[Configuración de un repositorio de plantillas para {% data variables.product.prodname_github_codespaces %}](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces)".

   {% endnote %}

   Si se encuentran varios archivos `devcontainer.json` en el repositorio, se mostrarán en la página de opciones de creación del codespace. Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".

   ![Captura de pantalla de una selección de archivos de configuración](/assets/images/help/codespaces/configuration-file-choice.png)

### Adición de un archivo `devcontainer.json`

Si aún no tienes un archivo `devcontainer.json` en el repositorio, puedes agregar rápidamente uno de {% data variables.product.prodname_dotcom_the_website %}.
1. Ve al repositorio y haz clic en la lista desplegable **{% octicon "code" aria-label="The code icon" %} de código**.
1. En la pestaña **Codespaces**, haz clic en los puntos suspensivos ( **...** ) y selecciona **Configurar contenedor de desarrollo**.

   ![Captura de pantalla de la lista desplegable Código, con "Configurar contenedor de desarrollo" resaltado](/assets/images/help/codespaces/configure-dev-container.png)

Se abrirá un nuevo archivo `.devcontainer/devcontainer.json` en el editor. El archivo contendrá algunas propiedades iniciales, incluido un objeto `features` al que puedes agregar nuevas herramientas, bibliotecas o entornos de ejecución. Para obtener más información, consulta "[Agregar características a un archivo `devcontainer.json`](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=webui)".

Si el repositorio ya contiene uno o varios archivos `devcontainer.json`, al hacer clic en **Configurar contenedor de desarrollo** se abrirá el archivo `devcontainer.json` existente con la prioridad más alta según la [especificación](https://containers.dev/implementors/spec/#devcontainerjson) de containers.dev. 

### Selección de configuración predeterminada durante la creación del codespace

Si `.devcontainer/devcontainer.json` o `.devcontainer.json` existen, uno de los dos será la selección predeterminada en la lista de archivos de configuración disponibles al crear un codespace. Si no existe ningún archivo, la configuración predeterminada del contenedor de desarrollo se seleccionará de manera predeterminada. 

![Captura de pantalla de la opción de configuración predeterminada seleccionada](/assets/images/help/codespaces/configuration-file-choice-default.png)

### Edición del archivo devcontainer.json

Puedes agregar y editar las claves de configuración compatibles en el archivo `devcontainer.json` para especificar aspectos del entorno del codespace, como por ejemplo, qué extensiones de {% data variables.product.prodname_vscode_shortname %} se instalarán. {% data reusables.codespaces.more-info-devcontainer %}

El archivo `devcontainer.json` se escribe con el formato JSONC (JSON con comentarios). Esto permite incluir comentarios en el archivo de configuración. Para obtener más información, consulta la documentación de {% data variables.product.prodname_vscode_shortname %} "[Edición de JSON con {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/languages/json#_json-with-comments)".

{% note %}

**Nota**: Si usas un linter para validar el archivo `devcontainer.json`, asegúrate de que está establecido en JSONC y no en JSON; de lo contrario, los comentarios se notificarán como errores.

{% endnote %}

### Opciones de la interfaz de {% data variables.product.prodname_vscode_shortname %}

Puedes configurar las opciones de interfaz de {% data variables.product.prodname_vscode_shortname %}, con tres ámbitos: Área de trabajo, Remoto [Codespaces] y Usuario. Puedes ver estos ámbitos en el editor de configuración de {% data variables.product.prodname_vscode_shortname %}.

![Captura de pantalla que muestra la elección de ámbitos en el editor de configuración](/assets/images/help/codespaces/scopes-for-vscode.png)

Si se define un valor en varios ámbitos, el valor Área de trabajo tiene prioridad, después Remoto [Codespaces] y después Usuario.

Puedes definir la configuración predeterminada del editor de {% data variables.product.prodname_vscode_shortname %} en dos lugares.

* La configuración de la interfaz definida en el archivo `.vscode/settings.json` del repositorio se aplica como configuración con ámbito de área de trabajo en el codespace.
* La configuración de la interfaz definida en la clave `settings` del archivo `devcontainer.json` se aplica como configuración con ámbito de [Codespaces] remotos en el codespace.

## Aplicación de cambios de configuración a un codespace

Los cambios en una configuración se aplicarán la próxima vez que crees un codespace. Sin embargo, puedes aplicar los cambios a un codespace existente recompilando el contenedor. Puedes hacerlo dentro de un codespace en la aplicación de escritorio o cliente web {% data variables.product.prodname_vscode_shortname %}, o bien puedes usar {% data variables.product.prodname_cli %}.

### Recompilación del contenedor de desarrollo en el cliente web o aplicación de escritorio de {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %}

   ![Captura de pantalla del mensaje de error sobre el modo de recuperación](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - Para diagnosticar el error revisando los registros de creación, haga clic en **View creation log**.
   - Para corregir los errores identificados en los registros, actualice el archivo `devcontainer.json`.
   - Para aplicar los cambios, vuelve a crear tu contenedor. 

### Uso de {% data variables.product.prodname_cli %} para volver a generar un contenedor de desarrollo

Si has cambiado una configuración de contenedor de desarrollo fuera de VS Code (por ejemplo, en {% data variables.product.prodname_dotcom_the_website %} o en un IDE de JetBrains), puedes usar {% data variables.product.prodname_cli %} para recompilar el contenedor de desarrollo para un codespace existente.

1. En un terminal, escribe el siguientes comando.

   ```
   gh cs rebuild
   ```

   Se muestran los codespace.

1. Use las teclas de dirección del teclado para resaltar el codespace necesario y, a continuación, presiona <kbd>Entrar</kbd>.


## Información adicional

- "[Precompilación de los codespaces](/codespaces/prebuilding-your-codespaces)"
