---
title: Guía de inicio rápido para los Codespaces de GitHub
intro: 'Prueba los {% data variables.product.prodname_codespaces %} en 5 minutos o menos.'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
---

{% data reusables.codespaces.release-stage %}

### Introducción

En esta guía, crearás un codespace desde el [repositorio de muestra](https://github.com/2percentsilk/haikus-for-codespaces) y explorarás algunas de las características esenciales disponibles para ti dentro del codespace.

El siguiente ejemplo muestra cómo crear un codespace, conectarlo a un puerto reenviado para ver tu aplicación en ejecución y personalizar tu configuración con extensiones adicionales y dotfiles.

### Crea tu codespace

1. Navega a la página principal del [repositorio de muestra](https://github.com/2percentsilk/haikus-for-codespaces).

2. Debajo del nombre del repositorio, utiliza el menú desplegable {% octicon "download" aria-label="The download icon" %} **Código**, y selecciona **Abrir con codespaces**.

  ![Botón de abrir con codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

3. Para crear un codespace, haz clic en {% octicon "plus" aria-label="The plus icon" %} **Codespace nuevo**.

  ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

### Ejecuta la aplicación

Con tu proyecto abierto en un codespace, ahora puedes ejecutar la aplicación y lanzarla en un buscador.

1. Inicia la aplicación ingresando `npm run dev` en la terminal. Este comando ejecuta el script `dev` en el archivo package.json e inicia la aplicación web que se define en el repositorio de muestra.

   ![npm run dev en la temrinal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

2. Cuando tu proyecto inicia, debes ver una alerta en la esquina inferior derecha con un mensaje para conectarte al puerto que utiliza tu proyecto.

  ![Notificación de reenvío de puertos](/assets/images/help/codespaces/quickstart-port-toast.png)

3. Haz clic en **Abrir en el buscador** para ver tu aplicación que se está ejecutando en una pestaña nueva.

### Personalización con una extensión de tema

Dentro de un codespace, tienes acceso al Visual Studio Code Marketplace. En este ejemplo, instalarás una extensión que alterará el tema, pero puedes instalar cualquier extensión que sea útil para tu flujo de trabajo.

1. En la barra lateral, haz clic en el icono de extensiones.

2.  En la barra de búsqueda, ingresa `fairyfloss` e instala la extensión de fairyfloss.

  ![Agregar una extensión](/assets/images/help/codespaces/add-extension.png)

3. Selecciona el tema `fairyfloss` seleccionándolo de la lista.

  ![Seleccionar el tema de fairyfloss](/assets/images/help/codespaces/fairyfloss.png)

4. Los cambios que hagas a tu configuración de editor en el codespace actual, tales como el tema y los enlaces de teclado, se sincronizarán automáticamente a otros codespaces a través de la [Sincronización de ajustes](https://code.visualstudio.com/docs/editor/settings-sync).

### Personalización con dotfiles

Si tu cuenta de usuario de GitHub es propietaria de un repositorio público denominado dotfiles, GitHub lo utilizará automáticamente para personalizar tu ambiente de codespace durante su creación.

Este ejemplo te orienta para crear un repositorio de dotfiles para tus codespaces.

1. Navega al [repositorio de dotfiles](https://github.com/aw-test-93/dotfiles/) de muestra.

2. Bifurca el repositorio hacia tu cuenta y asegúrate de que sea público.

   Verifica que el repositorio que creaste en tu cuenta se llame dotfiles, por ejemplo `yourname/dotfiles`. Cualquier otro nombre ocasionará que {% data variables.product.prodname_codespaces %} ignore la personalización del repositorio.

3. El crear un codespace nuevo desde el [repositorio de aplicación de muestra](https://github.com/2percentsilk/haikus-for-codespaces) como actualizaciones de dotfile solo se aplica en el momento de la creación. Los dotfiles de ejemplo cambiarán el símbolo de sistema para que muestre texto en negritas morado y azul.

  ![Personalizar el símbolo de sistema](/assets/images/help/codespaces/custom-prompt.png)

### Siguientes pasos

Creaste, personalizaste y ejecutaste exitosamente tu primer aplicación dentro de un codespace, pero ¡hay mucho más que explorar! Aquí tienes algunos recursos útiles para que tomes tus siguientes pasos con {% data variables.product.prodname_codespaces %}.
  - "[Guías de inicio](/codespaces/getting-started-with-codespaces)" Para utilizar {% data variables.product.prodname_codespaces %} con lenguajes específicos
  - [Crear una configuración personalizada](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project) para configurar {% data variables.product.prodname_codespaces %} para tu proyecto.
