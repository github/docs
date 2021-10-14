---
title: Conoce los Codespaces a profundidad
intro: 'Comprender cómo funciona {% data variables.product.prodname_codespaces %}.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
type: quick_start
topics:
  - Codespaces
---

{% data variables.product.prodname_codespaces %} es un ambiente de desarrollo basado en la nube e instantáneo que utiliza un contenedor para proporcionarte lenguajes comunes, herramientas y utilidades para el desarrollo. {% data variables.product.prodname_codespaces %} también es configurable, lo cual te permite crear un ambiente de desarrollo personalizado para tu proyecto. Al configurar un ambiente de desarrollo personalizado para tu proyecto, puedes tener una configuración de codespace repetible para todos los usuarios de dicho proyecto.

## Crea tu codespace

Hay varios puntos de entrada para crear un codespace.

- Desde tu repositorio para trabajo destacado nuevo.
- Desde una solicitud de cambios abierta para explorar el trabajo en curso.
- Desde una confirmación en el historial del repositorio para investigar un error en un punto específico del tiempo.
- Desde {% data variables.product.prodname_vscode %}.

Tu codespace puede ser efímero si necesitas probar algo o puedes volver al mismo codespace para trabajar en trabajo destacado a largo plazo. Para obtener más información, consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".

Una vez que hayas seleccionado la opción de crear un codespace nuevo, algunos pasos suceden en segundo plano antes de que este esté disponible para ti.

![Botón de abrir con codespaces](/assets/images/help/codespaces/new-codespace-button.png)
### Paso 1: Se asigna una MV y un almacenamiento a tu codespace

Cuando creas un codespace, se hace un [clon superficial](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) de tu repositorio en una máquina virtual Linux que es tanto dedicada como privada para ti. El tener una MV dedicada garantiza que tengas un conjunto completo de recursos de cómputo disponibles para ti desde esa máquina. Si es necesario, esto también te permitirá tener acceso de raíz total a tu contenedor.

### Paso 2: Se crea el contenedor

{% data variables.product.prodname_codespaces %} utiliza un contenedor como el ambiente de desarrollo. Este contenedor se crea con base en las configuraciones que puedes definir en un archivo de `devcontainer.json` o Dockerfile en tu repositorio. Si no [configuras un contenedor](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project), {% data variables.product.prodname_codespaces %} utilizará una [imagen predeterminada](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#using-the-default-configuration), la cual tiene muchos lenguajes y tiempos de ejecución disponibles. Para obtener más información sobre lo que contiene la imagen predeterminada, consulta el repositorio [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

### Paso 3: Conectarse al codespace

Cuando tu contenedor se crea y se ejecuta cualquier otra inicialización, estarás conectado a tu codespace. Puedes conectarte a este a través de la web o a través de [Visual Studio Code](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code) o a través de ambos, en caso de ser necesario.

### Paso 4: Ajustes post-creación

Una vez que estés conectado a tu codespace, la configuración automática que especificaste en tu archivo `devcontainer.json`, tal como ejecutar el `postCreateCommand` y el `postAttachCommand`, podría continuar. Si tienes un {% data variables.product.prodname_codespaces %} de repositorio de dotfiles público, puedes habilitarlo para utilizarlo con el codespace nuevo. Cuando lo habilitas, tus dotfiles se clonarán en el contenedor y buscarán un archivo de instalación. Para obtener más información, consulta la sección "[Personalizar {% data variables.product.prodname_codespaces %} para tu cuenta](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account#dotfiles)".

Finalmente, todo el historial del repositorio se copiará con un clon integral.

Durante la configuración post-creación, aún podrás utilizar la terminal integrada y editar tus archivos, pero ten cuidado de evitar cualquier condiciones de carrera entre tu trabajo y los comandos que se están ejecutando.
## Ciclo de vida de los {% data variables.product.prodname_codespaces %}

### Guardar archivos en tu codespace

Conforme desarrollas en tu codespace, este guardará cualquier cambio en tus archivos cada algunos cuantos segundos. Tu codespace seguirá ejecutándose durante 30 minutos después de la última actividad. Después de este tiempo, este dejará de ejecutarse, pero puedes reiniciarlo ya sea desde la pestaña existente del buscador o desde la lista de codespaces existentes. Los cambios de archivo del editor y de la salida de la terminal se cuentan como actividad y, por lo tanto, tu codespace no se detendrá si la salida de la terminal sigue.

{% note %}

**Nota:** Los cambios en un codespace en {% data variables.product.prodname_vscode %} no se guardan automáticamente a menos de que hayas habilitado el [Guardado automático](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save).
{% endnote %}

### Cerrar o detener tu codespace

Para detener tu codespace, puedes [utilizar la paleta de comandos](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace) (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)). Si sales de tu codespace sin ejecutar el comando para detenerlo (por ejemplo, cerrar la pestaña del buscador) o si dejas el codespace ejecutándose sin interacción, este y sus procesos en ejecución seguirán hasta que ocurra una ventana de inactividad, después de la cual se detendrá el codespace.  Predeterminadamente, la ventana de inactividad es de 30 minutos.

Cuando cierras o detienes tu codespace, todos los cambios sin confirmar se preservan hasta que te conectes al codespace nuevamente.


## Ejecutar tu aplicación

La redirección de puertos te otorga acceso a los puertos CRP dentro de tu codespace. Por ejemplo, si estás ejecutando una aplicación web por el puerto 4000 dentro de tu codespace, puedes reenviar ese puerto automáticamente para hacer la aplicación accesible desde tu buscador.

El reenvío de puertos determina cuáles de ellos se hicieron accesibles para ti desde la máquina remota. Incluso si no reenvías un puerto, este será accesible para otros procesos que se ejecuten dentro del mismo codespace.

![Diagrama que muestra cómo funciona el reenvío de puertos en un codespace](/assets/images/help/codespaces/port-forwarding.png)

Cuando una aplicción que se ejecuta dentro del {% data variables.product.prodname_codespaces %} da salida a un puerto hacia la consola, el {% data variables.product.prodname_codespaces %} detecta el patrón de URL del host local y reenvía el puerto automáticamente. Puedes hacer clic en la URL de la terminal o en el mensaje de notificación para abrir el puerto en un buscador. Para obtener más información sobre el reenvío de puertos, consulta la sección "[Reenviar puertos en tu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Si bien los puertos pueden reenviarse automáticamente, no son accesibles públicamente en la internet. Predeterminadamente, todos los puertos son privados, pero puedes [hacer un puerto público manualmente](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port) para compartir el acceso mediante una URL.

El ejecutar tu aplicación cuando llegas por primera vez a tu codespace puede convertirse en un bucle de desarrollador interno rápido. Mientras editas, tus cambios se guardan automáticamente y se ponen disponibles en tu puerto reenviado. Para ver los cambios, regresa a la pestaña de la aplicación en ejecución en tu buscador y actualízala.

## Confirmar y subir tus cambios

Git se encuentra disponible predeterminadamente en tu codespace, entonces puedes confiar en tu flujo de trabajo existente de Git. Puedes trabajar con Git en tu codespace, ya sea a través de la Terminal o utilizando la IU de control de código fuente de [Visual Studio Code](https://code.visualstudio.com/docs/editor/versioncontrol). Para obtener más información, consulta la sección "[Utilizar el control de código fuente en tu codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)"

![Ejecutar un estado de git en la Terminal de Codespaces](/assets/images/help/codespaces/git-status.png)

Puedes crear un codespace desde cualquier rama, confirmación o solicitud de cambios en tu proyecto o puedes cambiar a una rama existente o nueva desde dentro de tu codespace activo. Ya que {% data variables.product.prodname_codespaces %} está diseñado para ser efímero, puedes utilizarlo como un ambiente aislado para experimentar, verificar la solicitud de cambios de un compañero o arreglar conflictos de fusión. Puedes crear más de un codespace por repositorio o incluso por rama. Sin embargo, cada cuenta de usuario tiene un límite de 10 codespaces. Si has alcanzado el límite y quieres crear un codespace nuevo, primero debes borrar un codespace.

{% note %}

**Nota:** Las confirmaciones desde tu codespace se atribuirán al nombre y correo electrónico público que se configuró en https://github.com/settings/profile. Para autenticarte, se utilizará un token con alcance al repositorio, incluido en el ambiente como `GITHUB_TOKEN`, y tus credenciales de GitHub.

{% endnote %}

## Personalizar tu codespace con extensiones

El utilizar {% data variables.product.prodname_vscode %} en tu codespace te proporciona acceso a el Mercado de {% data variables.product.prodname_vscode %} para que puedas agregar cualquier extensión que necesites. Para obtener más información sobre cómo se ejecutan las extensiones en {% data variables.product.prodname_codespaces %}, consulta la sección [Apoyar el desarrollo remoto y a los Codespaces de GitHub](https://code.visualstudio.com/api/advanced-topics/remote-extensions) en los documentos de {% data variables.product.prodname_vscode %}.

Si yta utilizas {% data variables.product.prodname_vscode %}, puedes usar la [Sincronización de ajustes](https://code.visualstudio.com/docs/editor/settings-sync) para sincronizar automáticamente extensiones, ajustes, temas y atajos de teclado entre tu instancia local y cualquier {% data variables.product.prodname_codespaces %} que crees.

## Leer más

- [Habilitar los {% data variables.product.prodname_codespaces %} para tu organización](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)
- [Administrar la facturación para los {% data variables.product.prodname_codespaces %} en tu organización](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
- [Configurar tu proyecto para los Codespaces](/codespaces/setting-up-your-project-for-codespaces)
