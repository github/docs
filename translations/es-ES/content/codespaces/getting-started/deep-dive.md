---
title: 'Análisis en profundidad de {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Deep dive into {% data variables.product.prodname_codespaces %}'
intro: 'Comprende el funcionamiento de {% data variables.product.prodname_github_codespaces %}.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
ms.openlocfilehash: 5513956ea915701656e476681dbdbd6a2064b629
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147783035'
---
{% data variables.product.prodname_github_codespaces %} es un entorno de desarrollo instantáneo basado en la nube que usa un contenedor para proporcionar lenguajes comunes, herramientas y utilidades para el desarrollo. {% data variables.product.prodname_codespaces %} también es configurable, lo cual te permite crear un ambiente de desarrollo personalizado para tu proyecto. Al configurar un ambiente de desarrollo personalizado para tu proyecto, puedes tener una configuración de codespace repetible para todos los usuarios de dicho proyecto.

## Crea tu codespace

Hay varios puntos de entrada para crear un codespace.

- Desde tu repositorio para trabajo destacado nuevo.
- Desde una solicitud de cambios abierta para explorar el trabajo en curso.
- Desde una confirmación en el historial del repositorio para investigar un error en un punto específico del tiempo.
- Desde {% data variables.product.prodname_vscode %}.
  
Tu codespace puede ser efímero si necesitas probar algo o puedes volver al mismo codespace para trabajar en trabajo destacado a largo plazo. Para obtener más información, consulte "[Creación de un codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".

Una vez que hayas seleccionado la opción para crear un codespace y, opcionalmente, entre las distintas opciones de configuración del codespace, algunos pasos se producirán en segundo plano antes de que el codespace esté disponible.

![Botón de abrir con codespaces](/assets/images/help/codespaces/new-codespace-button.png)

### Paso 1: Se asigna una MV y un almacenamiento a tu codespace

Cuando se crea un codespace, se realiza un [clon superficial](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) del repositorio en una máquina virtual Linux dedicada y privada. El tener una MV dedicada garantiza que tengas un conjunto completo de recursos de cómputo disponibles para ti desde esa máquina. Si es necesario, esto también te permitirá tener acceso de raíz total a tu contenedor.

### Paso 2: Se crea el contenedor

{% data variables.product.prodname_codespaces %} utiliza un contenedor como el ambiente de desarrollo. Este contenedor se crea en función de las configuraciones que puede definir en un archivo `devcontainer.json` o Dockerfile en el repositorio. Si no [configura un contenedor](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project), {% data variables.product.prodname_codespaces %} usa una [imagen predeterminada](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#using-the-default-configuration), que tiene muchos lenguajes y entornos de ejecución disponibles. Para obtener información sobre lo que contiene la imagen predeterminada, vea el repositorio [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

{% note %}

**Nota:** Si quiere usar enlaces de Git en el codespace y aplicar cualquier cosa en el [directorio de plantillas de Git](https://git-scm.com/docs/git-init#_template_directory) al codespace, tendrá que configurar enlaces durante el paso 4 después de crear el contenedor.

Como el repositorio se clona en la máquina virtual host antes de crear el contenedor, todo lo que se encuentra en el [directorio de plantillas de Git](https://git-scm.com/docs/git-init#_template_directory) no se aplicará en el codespace a menos que configure enlaces en el archivo de configuración `devcontainer.json` mediante `postCreateCommand` en el paso 4. Para más información, vea "[Paso 4: Configuración posterior a la creación](#step-4-post-creation-setup)".

{% endnote %}

### Paso 3: Conectarse al codespace

Cuando tu contenedor se crea y se ejecuta cualquier otra inicialización, estarás conectado a tu codespace. Puedes conectarte a él mediante la web o [{% data variables.product.prodname_vscode_shortname %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code), o ambos, si es necesario.

### Paso 4: Ajustes post-creación

Una vez que se conecte al codespace, la configuración automatizada podría continuar la compilación en función de la configuración especificada en el archivo `devcontainer.json`. Es posible que vea que se ejecutan `postCreateCommand` y `postAttachCommand`.

Si quiere usar enlaces de Git en el codespace, configure enlaces mediante los [scripts de ciclo de vida `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), como `postCreateCommand`. Para más información, consulta la [referencia de `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) en la documentación de {% data variables.product.prodname_vscode_shortname %}.

Si tienes un repositorio público de dotfiles para {% data variables.product.prodname_github_codespaces %}, puedes habilitarlo para utilizarlo con nuevos codespaces. Cuando lo habilitas, tus dotfiles se clonarán en el contenedor y se invocará el script de instalación. Para más información, consulta "[Personalización de {% data variables.product.prodname_github_codespaces %} para la cuenta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)". 

Finalmente, todo el historial del repositorio se copiará con un clon integral.

Durante la configuración post-creación, aún podrás utilizar la terminal integrada y editar tus archivos, pero ten cuidado de evitar cualquier condiciones de carrera entre tu trabajo y los comandos que se están ejecutando.
## Ciclo de vida de los {% data variables.product.prodname_codespaces %}

### Guardar archivos en tu codespace

Conforme desarrollas en tu codespace, este guardará cualquier cambio en tus archivos cada algunos cuantos segundos. Tu codespace seguirá ejecutándose durante 30 minutos después de la última actividad. Después de este tiempo, este dejará de ejecutarse, pero puedes reiniciarlo ya sea desde la pestaña existente del buscador o desde la lista de codespaces existentes. Los cambios de archivo del editor y de la salida de la terminal se cuentan como actividad y, por lo tanto, tu codespace no se detendrá si la salida de la terminal sigue.

{% note %}

**Nota**: Los cambios en un codespace de {% data variables.product.prodname_vscode_shortname %} no se guardan de forma automática, a menos que hayas habilitado [Guardar automáticamente](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save).
{% endnote %}

### Cerrar o detener tu codespace

Par detener tu codespace, puedes [usar el {% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace) (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)). Si sales de tu codespace sin ejecutar el comando para detenerlo (por ejemplo, cerrar la pestaña del buscador) o si dejas el codespace ejecutándose sin interacción, este y sus procesos en ejecución seguirán hasta que ocurra una ventana de inactividad, después de la cual se detendrá el codespace.  Predeterminadamente, la ventana de inactividad es de 30 minutos. 

Cuando cierras o detienes tu codespace, todos los cambios sin confirmar se preservan hasta que te conectes al codespace nuevamente.


## Ejecutar tu aplicación

La redirección de puertos te otorga acceso a los puertos CRP dentro de tu codespace. Por ejemplo, si estás ejecutando una aplicación web por el puerto 4000 dentro de tu codespace, puedes reenviar ese puerto automáticamente para hacer la aplicación accesible desde tu buscador.

El reenvío de puertos determina cuáles de ellos se hicieron accesibles para ti desde la máquina remota. Incluso si no reenvías un puerto, este será accesible para otros procesos que se ejecuten dentro del mismo codespace.

![Diagrama que muestra cómo funciona el reenvío de puertos en un codespace](/assets/images/help/codespaces/port-forwarding.png)

Cuando una aplicción que se ejecuta dentro del {% data variables.product.prodname_codespaces %} da salida a un puerto hacia la consola, el {% data variables.product.prodname_codespaces %} detecta el patrón de URL del host local y reenvía el puerto automáticamente. Puedes hacer clic en la URL de la terminal o en el mensaje de notificación para abrir el puerto en un buscador. Predeterminadamente, {% data variables.product.prodname_codespaces %} reenvía el puerto utilizando HTTP. Para más información sobre el reenvío de puertos, vea "[Reenvío de puertos en el codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Si bien los puertos pueden reenviarse automáticamente, no son accesibles públicamente en la internet. Predeterminadamente, todos los puertos son privados, pero puedes poner a un puerto como disponible para tu organización o como público manualmente y luego compartir el acceso a través de una URL. Para más información, vea "[Uso compartido de un puerto](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port)".

El ejecutar tu aplicación cuando llegas por primera vez a tu codespace puede convertirse en un bucle de desarrollador interno rápido. Mientras editas, tus cambios se guardan automáticamente y se ponen disponibles en tu puerto reenviado. Para ver los cambios, regresa a la pestaña de la aplicación en ejecución en tu buscador y actualízala.

## Confirmar y subir tus cambios

Git se encuentra disponible predeterminadamente en tu codespace, entonces puedes confiar en tu flujo de trabajo existente de Git. Puedes trabajar con Git en el codespace mediante el terminal o con la interfaz de usuario de control de código fuente de [{% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/editor/versioncontrol). Para más información, vea "[Uso del control de código fuente en el codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)"

![Ejecutar un estado de git en la Terminal de Codespaces](/assets/images/help/codespaces/git-status.png)

Puedes crear un codespace desde cualquier rama, confirmación o solicitud de cambios en tu proyecto o puedes cambiar a una rama existente o nueva desde dentro de tu codespace activo. Ya que {% data variables.product.prodname_github_codespaces %} está diseñado para ser efímero, puedes utilizarlo como un ambiente aislado para experimentar, verificar la solicitud de incorporación de cambios de un compañero o arreglar conflictos de fusión. Puedes crear más de un codespace por repositorio o incluso por rama. Pero cada cuenta personal tiene un límite de 10 codespaces. Si has alcanzado el límite y quieres crear un codespace nuevo, primero debes borrar un codespace.

{% note %}

**Nota:** Las confirmaciones desde el codespace se atribuirán al nombre y al correo electrónico público configurados en https://github.com/settings/profile. Para la autenticación, se usará un token con ámbito en el repositorio, incluido en el entorno como `GITHUB_TOKEN`, y las credenciales de GitHub.

{% endnote %}

## Personalizar tu codespace con extensiones

El uso de {% data variables.product.prodname_vscode_shortname %} en tu codespace te proporciona acceso a {% data variables.product.prodname_vscode_marketplace %} para que puedas agregar cualquier extensión que necesites. Para obtener información sobre cómo se ejecutan las extensiones en {% data variables.product.prodname_codespaces %}, consulta [Compatibilidad con el desarrollo remoto y Codespaces de GitHub](https://code.visualstudio.com/api/advanced-topics/remote-extensions) en la documentación de {% data variables.product.prodname_vscode_shortname %}. 

Si ya usas {% data variables.product.prodname_vscode_shortname %}, puedes usar [Sincronizar configuración](https://code.visualstudio.com/docs/editor/settings-sync) para sincronizar automáticamente extensiones, configuraciones, temas y métodos abreviados de teclado entre la instancia local y los {% data variables.product.prodname_codespaces %} que crees.

## Información adicional

- "[Habilitación de {% data variables.product.prodname_codespaces %} para tu organización](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)"
- "[Administración de la facturación de {% data variables.product.prodname_codespaces %} en tu organización](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)"
- "[Configuración del proyecto para Codespaces](/codespaces/setting-up-your-project-for-codespaces)"
- "[Ciclo de vida de Codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle)"
