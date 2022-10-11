---
title: Comenzar con GitHub Desktop
intro: 'Aprende cómo ajustar, autenticar y configurar {% data variables.product.prodname_desktop %} para permitirte contribuir en proyectos directamente desde tu máquina.'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
redirect_from:
  - /desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop
---

### Introducción
{% data variables.product.prodname_desktop %} es una aplicación que te habilita para interactuar con {% data variables.product.prodname_dotcom %} utilizando una GUI en vez de la línea de comandos o de un buscador web. {% data variables.product.prodname_desktop %} fomenta que tú y tu equipo colaboren utilizando las mejoras prácticas con Git y {% data variables.product.prodname_dotcom %}. Puedes utilizar {% data variables.product.prodname_desktop %} para completar la mayoría de los comandos de Git desde tu computadora de escritorio con confirmaciones visuales para los cambios. Puedes subir, extraer y clonar repositorios remotos con {% data variables.product.prodname_desktop %} y utilizar herramientas colaborativas tales como atribuir confirmaciones y crear solicitudes de extracción.

Esta guía te ayudará a iniciar con {% data variables.product.prodname_desktop %} mediante la configuración de la aplicación, la autenticación en tu cuenta, la configuración de ajustes básicos y la introducción de las bases fundamentales para administrar los proyectos con {% data variables.product.prodname_desktop %}. Podrás utilizar {% data variables.product.prodname_desktop %} para colaborar en proyectos y conectarte a repositorios remotos después de seguir esta guía.

Puede que te sea útil el entender los conceptos básicos de Git y de {% data variables.product.prodname_dotcom %} antes de comenzar a utilizar {% data variables.product.prodname_desktop %}. Para obtener más información, consulta los siguientes artículos.

- "[Utilizar Git](/github/getting-started-with-github/using-git)"
- "[Aprender más sobre {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)"
- "[Iniciar con {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)"

{% data variables.product.prodname_desktop %} es un proyecto de código abierto. Puedes ver el itinerario, contribuir con el proyecto, o abrir un informe de problemas para proporcionar retroalimentación o solicitudes de características. Para obtener más información, consulta el repositorio [`desktop/desktop`](https://github.com/desktop/desktop).

### Parte 1: Instalación y autenticación
Puedes instalar {% data variables.product.prodname_desktop %} o cualquier sistema operativo compatible. Para obtener más información, consulta la sección "[Sistemas operativos compatibles](/desktop/getting-started-with-github-desktop/supported-operating-systems)".

Para instalar {% data variables.product.prodname_desktop %}, visita la página de descargas para [{% data variables.product.prodname_desktop %}](https://desktop.github.com/). Para obtener más información, consulta la sección "[Instalar {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/installing-github-desktop)".

Después de que hayas instalado {% data variables.product.prodname_desktop %}, puedes autenticar la aplicación con tu cuenta en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}. Esta autenticación te permite conectarte remotamente a los repositorios en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}.

{% mac %}

1. Antes de que te puedas autenticar en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}, necesitarás una cuenta. Para obtener más información acerca de cómo crear una cuenta, consulta la sección "[Registrar una cuenta de {% data variables.product.prodname_dotcom %} nueva](/github/getting-started-with-github/signing-up-for-a-new-github-account)" o contacta a tu administrador de stio de {% data variables.product.prodname_enterprise %}.

2. En el menú desplegable de {% data variables.product.prodname_desktop %}, da clic en **Preferencias**. En la ventana de preferencias, da clic en **Cuentas** y sigue los pasos para iniciar sesión. Para obtener más información sobre la autenticación, consulta la sección "[Autenticarte en {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)". ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-github.png)

{% endmac %}

{% windows %}

1. Antes de que te puedas autenticar en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}, necesitarás una cuenta. Para obtener más información acerca de cómo crear una cuenta, consulta la sección "[Registrar una cuenta de {% data variables.product.prodname_dotcom %} nueva](/github/getting-started-with-github/signing-up-for-a-new-github-account)" o contacta a tu administrador de stio de {% data variables.product.prodname_enterprise %}.

2. En el menú desplegable de archivo, da clic en **Opciones**. En la ventana de opciones, da clic en **Cuentas** y sigue los pasos para iniciar sesión. Para obtener más información sobre la autenticación, consulta la sección "[Autenticarte en {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)". ![El botón Sign In (Iniciar sesión) para GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-github.png)

{% endwindows %}

### Parte 2: Configurar y personalizar {% data variables.product.prodname_desktop %}
Después de que instales {% data variables.product.prodname_desktop %}, puedes configurar y personalizar la app para que se adapte mejor a tus necesidades.

{% mac %}

Puedes conectar o eliminar cuentas en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}, elegir un editor de texto o shell predeterminado, editar tu configuración de Git, cambiar la apariencia de {% data variables.product.prodname_desktop %}, personalizar las cajas de diálogo del sistema y configurar las preferencias de privacidad en la ventana de Preferencias de {% data variables.product.prodname_desktop %}. Para obtener más información, consulta la sección "[Configurar los ajustes básicos](/desktop/getting-started-with-github-desktop/configuring-basic-settings)".

  ![Los ajustes básicos en la ventana de Preferencias](/assets/images/help/desktop/mac-appearance-tab-themes.png)

{% endmac %}

{% windows %}

Puedes conectar o eliminar cuentas en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}, elegir un editor de texto o shell predeterminado, editar tu configuración de Git, cambiar la apariencia de {% data variables.product.prodname_desktop %}, personalizar las cajas de diálogo del sistema y configurar las preferencias de privacidad en la ventana de Opciones de {% data variables.product.prodname_desktop %}. Para obtener más información, consulta la sección "[Configurar los ajustes básicos](/desktop/getting-started-with-github-desktop/configuring-basic-settings)".

  ![Los ajustes básicos en la ventana de Opciones](/assets/images/help/desktop/windows-appearance-tab-themes.png)

{% endwindows %}

### Parte 3: Colaborar en proyectos con {% data variables.product.prodname_desktop %}
Después deinstalar, autenticarte y configurar la app, estás listo para comenzar a utilizar {% data variables.product.prodname_desktop %}. Puedes crear, agregar, o clonar los repositorios y utilizar {% data variables.product.prodname_desktop %} para administrar las contribuciones a tus repositorios.

#### Crear, agregar y clonar repositorios
Puedes crear un repositorio nuevo si seleccionas el menú de archivo y das clic en **Repositorio nuevo...**. Para obtener más información, consulta la sección "[Crear tu primer repositorio utilizando {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop)".

Puedes agregar un repositorio desde tu computadora local si seleccionas el menú de Archivo y das clic en **Agregar Repositorio Local...**. Para obtener más información, consulta la sección [Agregar un repositorio a {% data variables.product.prodname_desktop %} desde tu computadora local](/desktop/contributing-and-collaborating-using-github-desktop/adding-a-repository-from-your-local-computer-to-github-desktop)".

Puedes clonar un repositorio desde {% data variables.product.prodname_dotcom %} si seleccionas el menú de Archivo y das clic en **Clonar Repositorio...**. Para obtener más información, consulta la sección "[Clonar y Bifurcar Repositorios desde {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)".

{% mac %}

  ![Las opciones del menú de Archivo para crear, agregar, y clonar repositorios](/assets/images/help/desktop/mac-file-menu.png)

{% endmac %}

{% windows %}

  ![Las opciones del menú de Archivo para crear, agregar, y clonar repositorios](/assets/images/help/desktop/windows-file-menu.png)

{% endwindows %}

#### Realizar cambios en una rama
Puedes utilizar {% data variables.product.prodname_desktop %} para crearuna rama de un proyecto. Las ramas aislan tu trabajo de desarrollo de otras ramas en el repositorio para que puedas experimentar con varios cambios de manera segura. Para obtener más información, consulta la sección "[Administrar ramas](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)".

  ![El botón de Rama Nueva](/assets/images/help/desktop/new-branch-button-mac.png)

Después de que hagas cambios a una rama, puedes revisarlos en {% data variables.product.prodname_desktop %} y hacer una confirmación para controlar dichos cambios. Para obtener más información, consulta la sección "[Confirmar y revisar cambios hechos a tu proyecto](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)".

  ![Viualizar y hacer confirmaciones](/assets/images/help/desktop/commit-button.png)

Si quieres acceder a tus cambios de manera remota o si quieres compartirlos con otras personas, puedes cargar tus confirmaciones en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Subir los cambios a {% data variables.product.prodname_dotcom %}](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)".

#### Colaborar con {% data variables.product.prodname_desktop %}
Puedes utilizar {% data variables.product.prodname_desktop %} para crear informes de problemas o solicitudes de extracción para colaborar en proyectos con otras personas. Los informes de problemas te ayudan a llevar un seguimiento de las ideas y debatir los posibles cambios a los proyectos. Las solicitudes de extracción te permiten compartir tus cambios propuestos con los demás, recibir retroalimentación y fusionar los cambios en un proyecto. Para obtener más información, consulta la sección "[Crear un informe de problemas o solicitud de extracción](/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request)."''

Puedes ver tus propias solicitudes de extracción o las de tus colaboradores en {% data variables.product.prodname_desktop %}. El visualizar una solicitud de extracción en {% data variables.product.prodname_desktop %} te permite ver cualquier cambio propuesto y hacer cambios adicionales si abres los repositorios y archivos del proyecto en tu editor de texto predeterminado. Para obtener más información, consulta la sección "[Visualizar una solicitud de extracción en {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop)".

#### Mantener tu repositorio local sincronizado
Cuando haces cambios a tus repositorios locales o cuando otros hacen cambios a los repositorios remotos, necesitarás sincronizar tu copia local del proyecto con el repositorio remoto. {% data variables.product.prodname_desktop %} puede mantener sincronizada tu copia local de un proyecto con la versión remota al subir y extraer las confirmaciones. Para obtener más información, consulta la sección "[Sincronizar tu rama](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)".

### Leer más
- "[Instalar y autenticarse en {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/installing-and-authenticating-to-github-desktop)"
- "[Colaborar y contribuir utilizando {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop)"
