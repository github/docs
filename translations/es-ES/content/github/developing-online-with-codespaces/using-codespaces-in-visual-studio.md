---
title: Utilizar Codespaces en Visual Studio
intro: 'Puedes desarrollar en tu codespace directamente en {% data variables.product.prodname_vs %} si conectas tu cuenta con {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
---

{% note %}

**Nota:**{% data variables.product.prodname_codespaces %} actualmente está en un beta público limitado y está sujeto a cambios. Durante el periodo beta, {% data variables.product.prodname_dotcom %} no garantiza la disponibilidad de {% data variables.product.prodname_codespaces %}. [Regístrate para el beta público limitado](https://github.com/features/codespaces/signup-vs). Par obtener más información acerca de unirse al beta, consulta "[Acerca de {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces#joining-the-beta)".

{% endnote %}

### Acerca de los codespaces en {% data variables.product.prodname_vs %}

Puedes crear un codespace en {% data variables.product.prodname_vs %} para desarrollar aplicaciones en un ambiente Windows. Cuando usas un codespace en {% data variables.product.prodname_vs %}, puedes buscar código fuente, crear soluciones, y confirmar cambios a tu repositorio.

Debes crear un codespace en {% data variables.product.prodname_vs %} para utilizarlo con la aplicación. Los codespaces que se crean fuera de {% data variables.product.prodname_vs %} no pueden utilizarse con {% data variables.product.prodname_vs %} actualmente.

### Prerrequisitos

Antes de que configures un codespace en {% data variables.product.prodname_vs %}, debes descargar la última versión de la [Vista previa de {% data variables.product.prodname_vs %}](https://aka.ms/vspreview).

#### Habilitar la conexión entre {% data variables.product.prodname_vs %} y {% data variables.product.prodname_github_codespaces %}

La conexión a {% data variables.product.prodname_github_codespaces %} con la vista previa de {% data variables.product.prodname_vs %} no se encuentra habilitada predeterminadamente, así que primero necesitarás habilitar la opción de Vista Previa de las Características.

1. En la vista previa de {% data variables.product.prodname_vs %}, utiliza el menú desplegable de herramientas y da clic en **Opciones**.
2. Debajo de **Ambiente**, selecciona **Características de la vista previa** y selecciona la característica de vista previa que dice **Conectarse a {% data variables.product.prodname_github_codespaces %}**. ![Verifica la característica de conectarse a la vista previa de {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/connect-to-github-codespaces-preview-feature.png)
3. Necesitarás reiniciar {% data variables.product.prodname_vs %} para que la característica esté disponible.

### Crear un codespace en {% data variables.product.prodname_vs %}

1. Cuando lanzas a {% data variables.product.prodname_vs %}, la ventana de inicio mostrará un botón de **Conectarse a un codespace** debajo de "Iniciar". ![Ventana de inicio de Visual Studio con conexión a un codespace](/assets/images/help/codespaces/visual-studio-start-window.png)
2. Da clic en **Conectarse a un codespace**.
3. Da clic en **Ingresar a {% data variables.product.prodname_dotcom %}** y sigue las indicaciones, o da clic en **¡Crear uno!** para crear una cuenta de {% data variables.product.prodname_dotcom %} nueva e ingresar en ella. ![Inicio de sesión de Visual Studio a {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/visual-studio-sign-in-to-github.png)
4. Debajo de "Detalles del codespace", teclea la URL del repositorio que quieres que {% data variables.product.prodname_github_codespaces %} clone en tu codespace.
5. Opcionalmente, utiliza los menúes de "Tipo de instancia" y "Suspender después" para configurar más detalles del codespace. ![Detalles de codespace de Visual Studio](/assets/images/help/codespaces/visual-studio-codespace-details.png)
6. Da clic en **Crear y conectar**. {% data variables.product.prodname_github_codespaces %} comenzará a preparar el codespace y abrirá {% data variables.product.prodname_vs %} después de que el codespace esté listo. El nombre del codespace aparecerá en el indicador remoto en el menú. ![Visual Studio conectado al codespace del repositorio de eShopOnWeb](/assets/images/help/codespaces/visual-studio-eshoponweb-codespace.png)

### Abrir un codespace en {% data variables.product.prodname_vs %}

1. Utiliza el menú desplegable de "Archivo" y da clic en **Conectarse a un codespace**. ![Conexión de archivos de Visual Studio a un elemento de menú de un codespace](/assets/images/help/codespaces/visual-studio-file-connect-to-codespace.png)
2. Debajo de "{% data variables.product.prodname_github_codespaces %}", da clic en el codespace al que quieres conectarte y luego da clic en **Conectar**. ![Visual Studio mostrando los detalles y codespaces disponibles](/assets/images/help/codespaces/visual-studio-connect-codespace.png)

### Configurar un codespace para {% data variables.product.prodname_vs %}

Un codespace que se crea con {% data variables.product.prodname_vs %} puede personalizarse mediante una herramienta nueva llamada devinit, una herramienta de la línea de comandos que se incluye con {% data variables.product.prodname_vs %}.

#### devinit

[devinit](https://docs.microsoft.com/visualstudio/devinit/getting-started-with-devinit) te permite instalar marcos de trabajo y herramientas adicionales en tus codespaces de desarrollo de Windows, modificar variables de ambiente y más.

devinit es compatible con un archivo de configuración que se llama [devinit.json](https://docs.microsoft.com/visualstudio/devinit/devinit-json). Puedes agregar este archivo a tu proyecto si quieres crear un ambiente de desarrollo repetible y personalizado. Cuando utilizas devinit con un archivo [devcontainer.json](https://docs.microsoft.com/visualstudio/ide/codespaces/customize-codespaces#running-devinit-when-creating-a-codespace), tus codespaces se configurarán automáticamente cuando los crees.

Para obtener más información acerca de la configuración de devinit y de los codespaces de Windows, consulta la sección [Personalizar un codespace](https://docs.microsoft.com/visualstudio/ide/codespaces/customize-codespaces) en la documentación de {% data variables.product.prodname_vs %}. Para obtener más información sobre devinit, consulta la sección de [Iniciar con devinit](https://docs.microsoft.com/visualstudio/devinit/getting-started-with-devinit).
