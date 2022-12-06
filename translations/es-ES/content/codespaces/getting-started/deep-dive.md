---
title: 'Análisis en profundidad de {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Deep dive into {% data variables.product.prodname_codespaces %}'
intro: 'Comprende el funcionamiento de {% data variables.product.prodname_github_codespaces %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
ms.openlocfilehash: 01e4f3990cc47f61678811f7c4a77b86626fd8a5
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188268'
---
{% data variables.product.prodname_github_codespaces %} es un entorno de desarrollo instantáneo basado en la nube que usa un contenedor para proporcionar lenguajes comunes, herramientas y utilidades para el desarrollo. {% data variables.product.prodname_github_codespaces %} también es configurable, lo cual te permite crear un entorno de desarrollo personalizado para tu proyecto. Al configurar un ambiente de desarrollo personalizado para tu proyecto, puedes tener una configuración de codespace repetible para todos los usuarios de dicho proyecto.

## Crea tu codespace

Hay varios puntos de entrada para crear un codespace.

- Desde una plantilla de {% data variables.product.company_short %} o desde cualquier repositorio de plantilla en {% data variables.product.prodname_dotcom_the_website %} para iniciar un nuevo proyecto
- Desde una rama del repositorio para el nuevo trabajo destacado
- Desde una solicitud de incorporación de cambios abierta para explorar el trabajo en curso
- Desde una confirmación en el historial de un repositorio para investigar un error en un punto específico del tiempo

{% data reusables.codespaces.ways-to-create-a-codespace %}
  
Tu codespace puede ser efímero si necesitas probar algo o puedes volver al mismo codespace para trabajar en trabajo destacado a largo plazo. 

Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)", "[Creación de un codespace a partir de una plantilla](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)" o "[Apertura de un codespace existente](/codespaces/developing-in-codespaces/opening-an-existing-codespace)".

{% note %}

**Nota**: Puedes crear más de un codespace por repositorio o incluso por rama. Sin embargo, hay límites para el número de codespaces que puede crear y el número de codespaces que puede ejecutar al mismo tiempo. Si alcanza el número máximo de codespaces e intenta crear otro, se muestra un mensaje que indica que debe quitar un codespace existente para poder crear uno nuevo.

{% endnote %}

### Proceso de creación de un codespace

Al crear un codespace, se producen varios pasos en segundo plano antes de que el codespace esté disponible para ti.

### Paso 1: Se asigna una MV y un almacenamiento a tu codespace

Al crear un codespace, se genera un [clon superficial](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) del repositorio o del repositorio de plantilla si vas a crear un codespace a partir de una plantilla. El repositorio se clona en una máquina virtual de Linux dedicada y privada para ti. El tener una MV dedicada garantiza que tengas un conjunto completo de recursos de cómputo disponibles para ti desde esa máquina. Si es necesario, esto también te permitirá tener acceso de raíz total a tu contenedor.

### Paso 2: Se crea el contenedor

{% data variables.product.prodname_github_codespaces %} utiliza un contenedor como el ambiente de desarrollo. Este contenedor se crea en función de las configuraciones que puedes definir en un archivo `devcontainer.json` u, opcionalmente, en un Dockerfile. Si creas un codespace a partir de la plantilla en blanco de {% data variables.product.company_short %} o desde un repositorio sin el archivo `devcontainer.json`, {% data variables.product.prodname_github_codespaces %} usa una imagen predeterminada, que tiene muchos lenguajes y tiempos de ejecución disponibles. Para obtener más información, consulte "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)". Para obtener detalles sobre lo que contiene la imagen predeterminada, consulta el repositorio [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

{% note %}

**Nota:** Si quiere usar enlaces de Git en el codespace y aplicar cualquier cosa en el [directorio de plantillas de Git](https://git-scm.com/docs/git-init#_template_directory) al codespace, tendrá que configurar enlaces durante el paso 4 después de crear el contenedor.

Como el repositorio se clona en la máquina virtual host antes de crear el contenedor, todo lo que se encuentra en el [directorio de plantillas de Git](https://git-scm.com/docs/git-init#_template_directory) no se aplicará en el codespace a menos que configure enlaces en el archivo de configuración `devcontainer.json` mediante `postCreateCommand` en el paso 4. Para más información, vea "[Paso 4: Configuración posterior a la creación](#step-4-post-creation-setup)".

{% endnote %}

### Paso 3: Conectarse al codespace

Cuando tu contenedor se crea y se ejecuta cualquier otra inicialización, estarás conectado a tu codespace. Puedes conectarse a él mediante lo siguiente:

* El explorador web
* [Visual Studio Code](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
* [Un IDE de JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [{% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)

### Paso 4: Ajustes post-creación

Una vez que te conectes al codespace, la configuración automatizada podría continuar la compilación en función de la configuración especificada en el archivo `devcontainer.json`. Es posible que vea que se ejecutan `postCreateCommand` y `postAttachCommand`.

Si quieres usar enlaces de Git en el codespace, configura enlaces mediante los [`devcontainer.json`scripts de ciclo de vida ](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), como `postCreateCommand`. Para más información, consulta la [referencia de `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) en la documentación de {% data variables.product.prodname_vscode_shortname %}.

Si tienes un repositorio público de dotfiles para {% data variables.product.prodname_github_codespaces %}, puedes habilitarlo para utilizarlo con nuevos codespaces. Cuando lo habilitas, tus dotfiles se clonarán en el contenedor y se invocará el script de instalación. Para más información, consulta "[Personalización de {% data variables.product.prodname_github_codespaces %} para la cuenta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)". 

Por último, si has creado el codespace desde un repositorio, todo el historial del repositorio se copiará con un clon integral. Si has creado el codespace a partir de una plantilla, no se conservará el historial completo del repositorio de plantilla. En su lugar, a menos que uses la plantilla en blanco, empezarás con una confirmación inicial para el contenido del repositorio de plantilla.

Durante la configuración post-creación, aún podrás utilizar la terminal integrada y editar tus archivos, pero ten cuidado de evitar cualquier condiciones de carrera entre tu trabajo y los comandos que se están ejecutando.
## Ciclo de vida de los {% data variables.product.prodname_codespaces %}

### Guardar archivos en tu codespace

Guarda los cambios en los archivos de la manera habitual, según el editor que estés usando.

Si trabajas en codespaces en {% data variables.product.prodname_vscode %}, puedes habilitar el [Guardado automático](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) para asegurarte de que los cambios siempre se guardan. 

### Cerrar o detener tu codespace

El codespace seguirá ejecutándose mientras lo usas, pero se agotará el tiempo de espera después de un período de inactividad. Los cambios de archivo del editor y de la salida del terminal se cuentan como actividad. Por lo tanto, no se agotará el tiempo de espera de tu codespace si la salida del terminal sigue. El período de tiempo de espera de inactividad predeterminado es de 30 minutos. Puedes definir un configuración de tiempo de espera personal para los codespaces que crees, pero una directiva de tiempo de espera de la organización puede invalidarla. Para obtener más información, consulta "[Configuración del tiempo de espera para los codespaces](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces)". 

Si se agota el tiempo de espera de un codespace, dejará de ejecutarse, pero puedes reiniciarlo desde la pestaña del explorador (si estabas usando el codespace en el explorador), desde {% data variables.product.prodname_vscode_shortname %} o desde tu lista de codespaces en [https://github.com/codespaces](https://github.com/codespaces).

Para detener un codespace, puedes hacer lo siguiente:

* En el explorador: en tu lista de codespaces de [https://github.com/codespaces](https://github.com/codespaces), haz clic en los puntos suspensivos ( **...** ) situados a la derecha del codespace que deseas detener y haz clic en **Detener codespace**.
* En {% data variables.product.prodname_vscode_shortname %}: abre [la {% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace) (por ejemplo, presiona <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>Entrar</kbd> (Windows/Linux) o <kbd>Mayús</kbd>+<kbd>Comando</kbd>+<kbd>P</kbd> (Mac)), escribe `Codespaces: stop` y presiona <kbd>Entrar</kbd>.
* En el cliente de JetBrains, haz clic en el botón de detener situado en la parte superior de la ventana de herramientas de {% data variables.product.prodname_github_codespaces %}. Para obtener más información, consulta la pestaña "IDE de JetBrains" de "[Detención e inicio de un codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)".
* En una ventana del terminal: usa el comando `gh codespace stop` de la {% data variables.product.prodname_cli %}. Para obtener más información, consulta "[Uso de {% data variables.product.prodname_github_codespaces %} con la {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#gh-commands-for-github-codespaces)".

Si sales de tu codespace sin ejecutar el comando para detenerlo (por ejemplo, cerrando la pestaña del explorador) o si dejas el codespace ejecutándose sin interacción, este y sus procesos en ejecución seguirán durante el período de tiempo de espera de inactividad. 

Cuando cierras o detienes tu codespace, todos los cambios sin confirmar se preservan hasta que te conectes al codespace nuevamente.

## Ejecutar tu aplicación

La redirección de puertos te otorga acceso a los puertos CRP dentro de tu codespace. Por ejemplo, si estás ejecutando una aplicación web por el puerto 4000 dentro de tu codespace, puedes reenviar ese puerto automáticamente para hacer la aplicación accesible desde tu buscador.

El reenvío de puertos determina cuáles de ellos se hicieron accesibles para ti desde la máquina remota. Incluso si no reenvías un puerto, este será accesible para otros procesos que se ejecuten dentro del mismo codespace.

![Diagrama que muestra cómo funciona el reenvío de puertos en un codespace](/assets/images/help/codespaces/port-forwarding.png)

Cuando una aplicación que se ejecuta dentro de {% data variables.product.prodname_github_codespaces %} da salida a un puerto hacia la consola, {% data variables.product.prodname_github_codespaces %} detecta el patrón de URL del localhost y reenvía el puerto automáticamente. Puedes hacer clic en la dirección URL del terminal o en el vínculo del mensaje de notificación del sistema que aparece en la esquina inferior derecha de {% data variables.product.prodname_vscode_shortname %} para abrir el puerto en un explorador. De manera predeterminada, {% data variables.product.prodname_github_codespaces %} reenvía el puerto utilizando HTTP. Para más información sobre el reenvío de puertos, vea "[Reenvío de puertos en el codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Si bien los puertos pueden reenviarse automáticamente, no son accesibles públicamente en la internet. Predeterminadamente, todos los puertos son privados, pero puedes poner a un puerto como disponible para tu organización o como público manualmente y luego compartir el acceso a través de una URL. Para más información, vea "[Uso compartido de un puerto](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port)".

El ejecutar tu aplicación cuando llegas por primera vez a tu codespace puede convertirse en un bucle de desarrollador interno rápido. Mientras editas, tus cambios se guardan automáticamente y se ponen disponibles en tu puerto reenviado. Para ver los cambios, regresa a la pestaña de la aplicación en ejecución en tu buscador y actualízala.

## Confirmar y subir tus cambios

Git está instalado de manera predeterminada en tu codespace, por lo que puedes confiar en tu flujo de trabajo existente de Git. Puedes trabajar con Git en el codespace mediante el terminal o con las características de control de código fuente de {% data variables.product.prodname_vscode_shortname %} o JetBrains.

Si estás trabajando con un repositorio existente, puedes crear un codespace desde cualquier rama, confirmación o solicitud de incorporación de cambios en el repositorio o puedes cambiar a una rama existente o nueva desde dentro de tu codespace activo. Ya que {% data variables.product.prodname_github_codespaces %} está diseñado para ser efímero, puedes utilizarlo como un ambiente aislado para experimentar, verificar la solicitud de incorporación de cambios de un compañero o arreglar conflictos de fusión.

Si estás trabajando en un codespace creado a partir de una plantilla, Git se instalará de manera predeterminada, pero tendrás que publicar el codespace en un repositorio remoto para conservar el trabajo y compartirlo con otros usuarios. Si empiezas a partir de la plantilla en blanco de {% data variables.product.company_short %}, primero deberás inicializar el área de trabajo como repositorio de Git (por ejemplo, escribiendo `git init`) para comenzar a usar el control de código fuente en el codespace.

Para más información, vea "[Uso del control de código fuente en el codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)".

{% note %}

**Nota:** Las confirmaciones desde el codespace se atribuirán al nombre y al correo electrónico público configurados en https://github.com/settings/profile. Para la autenticación, se usará un token con ámbito en el repositorio, incluido en el entorno como `GITHUB_TOKEN`, y las credenciales de GitHub.

{% endnote %}

## Personalización de un codespace con extensiones o complementos

Puedes agregar complementos y extensiones en un codespace para personalizar tu experiencia en JetBrains y {% data variables.product.prodname_vscode_shortname %} respectivamente.

### Extensiones de {% data variables.product.prodname_vscode_shortname %}

Si trabajas con los codespaces en la aplicación de escritorio de {% data variables.product.prodname_vscode_shortname %} o en el cliente web, puedes agregar las extensiones que necesites desde {% data variables.product.prodname_vscode_marketplace %}. Para obtener información sobre cómo se ejecutan las extensiones en {% data variables.product.prodname_github_codespaces %}, consulta [Compatibilidad con el desarrollo remoto y {% data variables.product.prodname_github_codespaces %}](https://code.visualstudio.com/api/advanced-topics/remote-extensions) en la documentación de {% data variables.product.prodname_vscode_shortname %}. 

Si ya usas {% data variables.product.prodname_vscode_shortname %}, puedes usar [Sincronización de ajustes](https://code.visualstudio.com/docs/editor/settings-sync) para sincronizar automáticamente extensiones, configuraciones, temas y métodos abreviados de teclado entre la instancia local y los codespaces que crees.

### Complementos de JetBrains

Si trabajas con los codespaces en un IDE de JetBrains, puedes agregar complementos desde JetBrains Marketplace.

1. Haz clic en el **Cliente JetBrains** y, después, en **Preferencias**.
1. En el cuadro de diálogo Preferencias, haz clic en **Complementos en el host** para instalar un complemento en el IDE de JetBrains completo que se ejecuta de forma remota o en  **Complementos** para instalar un complemento en el cliente local, por ejemplo, para cambiar el tema de la interfaz de usuario. 
1. Haz clic en la pestaña **Marketplace**.

   ![Captura de pantalla de la pestaña Marketplace de "Complementos en host"](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. Haz clic en **Instalar** junto al complemento necesario.

## Información adicional

- "[Habilitación de {% data variables.product.prodname_github_codespaces %} en la organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)"
- "[Administración del costo de {% data variables.product.prodname_github_codespaces %} en la organización](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
- "[Adición de una configuración de contenedor de desarrollo al repositorio](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)"
- "[Ciclo de vida de un codespace](/codespaces/getting-started/the-codespace-lifecycle)"
