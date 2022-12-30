---
title: Comenzar con GitHub Desktop
intro: 'Aprende cómo ajustar, autenticar y configurar {% data variables.product.prodname_desktop %} para permitirte contribuir en proyectos directamente desde tu máquina.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
redirect_from:
  - /desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop
shortTitle: Get started
ms.openlocfilehash: ae67886e55d88ca3c6330d3d8f3c76528e765c78
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117321'
---
## Introducción
{% data variables.product.prodname_desktop %} es una aplicación que te habilita para interactuar con {% data variables.product.prodname_dotcom %} utilizando una GUI en vez de la línea de comandos o de un buscador web. {% data variables.product.prodname_desktop %} fomenta que tú y tu equipo colaboren utilizando las mejoras prácticas con Git y {% data variables.product.prodname_dotcom %}. Puedes utilizar {% data variables.product.prodname_desktop %} para completar la mayoría de los comandos de Git desde tu computadora de escritorio con confirmaciones visuales para los cambios. Puedes subir, extraer y clonar repositorios remotos con {% data variables.product.prodname_desktop %} y utilizar herramientas colaborativas tales como atribuir confirmaciones y crear solicitudes de extracción.

Esta guía te ayudará a iniciar con {% data variables.product.prodname_desktop %} mediante la configuración de la aplicación, la autenticación en tu cuenta, la configuración de ajustes básicos y la introducción de las bases fundamentales para administrar los proyectos con {% data variables.product.prodname_desktop %}. Podrás utilizar {% data variables.product.prodname_desktop %} para colaborar en proyectos y conectarte a repositorios remotos después de seguir esta guía.

Puede que te sea útil el entender los conceptos básicos de Git y de {% data variables.product.prodname_dotcom %} antes de comenzar a utilizar {% data variables.product.prodname_desktop %}. Para obtener más información, consulte los siguientes artículos.

- "[Uso de Git](/github/getting-started-with-github/using-git)"
- "[Información sobre {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)"
- "[Introducción a {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)"

{% data variables.product.prodname_desktop %} es un proyecto de código abierto. Puedes ver el itinerario, contribuir con el proyecto, o abrir un informe de problemas para proporcionar retroalimentación o solicitudes de características. Para más información, consulte el repositorio [`desktop/desktop`](https://github.com/desktop/desktop).

## Parte 1: Instalación y autenticación
Puedes instalar {% data variables.product.prodname_desktop %} en cualquier sistema operativo compatible. Para obtener más información, vea "[Sistemas operativos admitidos](/desktop/getting-started-with-github-desktop/supported-operating-systems)".

Para instalar {% data variables.product.prodname_desktop %}, visite la página de descarga de [{% data variables.product.prodname_desktop %}](https://desktop.github.com/). Para más información, vea "[Instalación de {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/installing-github-desktop)".

Después de que hayas instalado {% data variables.product.prodname_desktop %}, puedes autenticar la aplicación con tu cuenta en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}. Esta autenticación te permite conectarte remotamente a los repositorios en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}.

{% mac %}

1. Antes de que te autentiques en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}, necesitarás una cuenta. Para obtener más información sobre cómo crear una cuenta, consulte "[Registro para obtener una nueva cuenta de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-a-new-github-account)" o póngase en contacto con su administrador del sitio de {% data variables.product.prodname_enterprise %}.

2. En el menú desplegable de {% data variables.product.prodname_desktop %}, haga clic en **Preferences** (Preferencias). En la ventana de preferencias, haga clic en **Accounts** (Cuentas) y siga los pasos para iniciar sesión. Para obtener más información sobre cómo autenticarse, vea "[Autenticación en {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)".
  ![El botón de inicio de sesión en GitHub](/assets/images/help/desktop/mac-sign-in-github.png)

{% endmac %}

{% windows %}

1. Antes de que te autentiques en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}, necesitarás una cuenta. Para obtener más información sobre cómo crear una cuenta, consulte "[Registro para obtener una nueva cuenta de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-a-new-github-account)" o póngase en contacto con su administrador del sitio de {% data variables.product.prodname_enterprise %}.

2. En el menú desplegable File (Archivo), haga clic en **Options** (Opciones). En la ventana de opciones, haga clic en **Accounts** (Cuentas) y siga los pasos para iniciar sesión. Para obtener más información sobre cómo autenticarse, vea "[Autenticación en {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)".
  ![El botón de inicio de sesión en GitHub](/assets/images/help/desktop/windows-sign-in-github.png)

{% endwindows %}

## Parte 2: Configurar y personalizar {% data variables.product.prodname_desktop %}
Después de que instales {% data variables.product.prodname_desktop %}, puedes configurar y personalizar la app para que se adapte mejor a tus necesidades.

{% mac %}

Puedes conectar o eliminar cuentas en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}, elegir un editor de texto o shell predeterminado, editar tu configuración de Git, cambiar la apariencia de {% data variables.product.prodname_desktop %}, personalizar las cajas de diálogo del sistema y configurar las preferencias de privacidad en la ventana de Preferencias de {% data variables.product.prodname_desktop %}. Para más información, consulte "[Configuración básica](/desktop/getting-started-with-github-desktop/configuring-basic-settings)".

  ![Los ajustes básicos en la ventana de Preferencias](/assets/images/help/desktop/mac-appearance-tab-themes.png)

{% endmac %}

{% windows %}

Puedes conectar o eliminar cuentas en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}, elegir un editor de texto o shell predeterminado, editar tu configuración de Git, cambiar la apariencia de {% data variables.product.prodname_desktop %}, personalizar las cajas de diálogo del sistema y configurar las preferencias de privacidad en la ventana de Opciones de {% data variables.product.prodname_desktop %}. Para más información, consulte "[Configuración básica](/desktop/getting-started-with-github-desktop/configuring-basic-settings)".

  ![Los ajustes básicos en la ventana de Opciones](/assets/images/help/desktop/windows-appearance-tab-themes.png)

{% endwindows %}

## Parte 3: Colaborar en proyectos con {% data variables.product.prodname_desktop %}
Después deinstalar, autenticarte y configurar la app, estás listo para comenzar a utilizar {% data variables.product.prodname_desktop %}. Puedes crear, agregar, o clonar los repositorios y utilizar {% data variables.product.prodname_desktop %} para administrar las contribuciones a tus repositorios.

### Crear, agregar y clonar repositorios
Para crear un repositorio, seleccione el menú File (Archivo) y haga clic en **New repository…** (Nuevo repositorio…). Para obtener más información, vea "[Creación del primer repositorio mediante {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop)".

Para agregar un repositorio desde el equipo local, seleccione el menú File (Archivo) y haga clic en **Add Local Repository…** (Agregar repositorio local…). Para obtener más información, vea "[Adición de un repositorio desde el equipo local a {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/adding-a-repository-from-your-local-computer-to-github-desktop)".

Para clonar un repositorio de {% data variables.product.prodname_dotcom %}, seleccione el menú File (Archivo) y haga clic en **Clone Repository…** (Clonar repositorio…). Para obtener más información, vea "[Clonación y bifurcación de repositorios de {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)".

{% mac %}

  ![Las opciones del menú de Archivo para crear, agregar, y clonar repositorios](/assets/images/help/desktop/mac-file-menu.png)

{% endmac %}

{% windows %}

  ![Las opciones del menú de Archivo para crear, agregar, y clonar repositorios](/assets/images/help/desktop/windows-file-menu.png)

{% endwindows %}

### Realizar cambios en una rama
Puedes utilizar {% data variables.product.prodname_desktop %} para crearuna rama de un proyecto. Las ramas aislan tu trabajo de desarrollo de otras ramas en el repositorio para que puedas experimentar con varios cambios de manera segura. Para más información, vea "[Administración de ramas](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)".

  ![El botón de Rama Nueva](/assets/images/help/desktop/new-branch-button-mac.png)

Después de que hagas cambios a una rama, puedes revisarlos en {% data variables.product.prodname_desktop %} y hacer una confirmación para controlar dichos cambios. Para más información, vea "[Confirmación y revisión de los cambios en el proyecto](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)".

  ![Viualizar y hacer confirmaciones](/assets/images/help/desktop/commit-button.png)

Si quieres acceder a tus cambios de manera remota o si quieres compartirlos con otras personas, puedes cargar tus confirmaciones en {% data variables.product.prodname_dotcom %}. Para más información, vea "[Inserción de cambios en {% data variables.product.prodname_dotcom %}](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)".

### Colaborar con {% data variables.product.prodname_desktop %}
Puedes utilizar {% data variables.product.prodname_desktop %} para crear informes de problemas o solicitudes de extracción para colaborar en proyectos con otras personas. Los informes de problemas te ayudan a llevar un seguimiento de las ideas y debatir los posibles cambios a los proyectos. Las solicitudes de extracción te permiten compartir tus cambios propuestos con los demás, recibir retroalimentación y fusionar los cambios en un proyecto. Para más información, vea "[Creación de una incidencia o una solicitud de incorporación de cambios](/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request)".

Puedes ver tus propias solicitudes de extracción o las de tus colaboradores en {% data variables.product.prodname_desktop %}. El visualizar una solicitud de extracción en {% data variables.product.prodname_desktop %} te permite ver cualquier cambio propuesto y hacer cambios adicionales si abres los repositorios y archivos del proyecto en tu editor de texto predeterminado. Para más información, vea "[Visualización de una solicitud de incorporación de cambios en {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop)".

### Mantener tu repositorio local sincronizado
Cuando haces cambios a tus repositorios locales o cuando otros hacen cambios a los repositorios remotos, necesitarás sincronizar tu copia local del proyecto con el repositorio remoto. {% data variables.product.prodname_desktop %} puede mantener sincronizada tu copia local de un proyecto con la versión remota al subir y extraer las confirmaciones. Para más información, vea "[Sincronización de la rama](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)".

## Información adicional
- "[Instalación y autenticación de {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/installing-and-authenticating-to-github-desktop)"
- "[Contribución y colaboración mediante {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop)"
