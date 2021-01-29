---
title: Cómo clonar y bifurcar repositorios desde GitHub Desktop
intro: 'Puedes utilizar {% data variables.product.prodname_desktop %} para clonar y ramificar los repositorios que están en {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
versions:
  free-pro-team: '*'
---

### Clonar repositorios
Los repositorios en {% data variables.product.prodname_dotcom %} son remotos.  Puedes clonar repositorios públicos de otros dueños. Puedes clonar tu propio repositorio para crear una copia local en tu computadora y sincronizarla entre las dos ubicaciones.

También puedes clonar un repositorio directamente desde {% data variables.product.prodname_dotcom %} o {% data variables.product.prodname_enterprise %}. Para obtener más información, visita "[Cómo clonar un repositorio desde {% data variables.product.prodname_dotcom %} hacia {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)".

{% mac %}

{% data reusables.desktop.choose-clone-repository %}
  ![Clonar opción de menú en la aplicación Mac](/assets/images/help/desktop/clone-file-menu-mac.png)
{% data reusables.desktop.cloning-location-tab %}
  ![Pestañas de ubicación en el menú Clone a repository (Clonar un repositorio)](/assets/images/help/desktop/choose-repository-location-mac.png)
{% data reusables.desktop.cloning-repository-list %}
  ![Clonar una lista de repositorio](/assets/images/help/desktop/clone-a-repository-list-mac.png)
4. Haz clic en **Choose...** (Elegir...) y, a través de la ventana Finder (Buscador) desplázate hasta la ruta donde deseas clonar el repositorio. ![El botón Choose (Elegir)](/assets/images/help/desktop/clone-choose-button-mac.png)
5. Haz clic en **Clone**. ![El botón Clone (Clonar)](/assets/images/help/desktop/clone-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.choose-clone-repository %}
  ![Opción Clone menu (Clonar menú) en la app de Windows](/assets/images/help/desktop/clone-file-menu-windows.png)
{% data reusables.desktop.cloning-location-tab %}
  ![Pestañas de ubicación en el menú Clone a repository (Clonar un repositorio)](/assets/images/help/desktop/choose-repository-location-win.png)
{% data reusables.desktop.cloning-repository-list %}
  ![Clonar una lista de repositorio](/assets/images/help/desktop/clone-a-repository-list-win.png)
4. Haz clic en **Choose...** (Elegir...) y, a través de Windows Explorer, desplázate hasta la ruta donde deseas clonar el repositorio. ![El botón Choose (Elegir)](/assets/images/help/desktop/clone-choose-button-win.png)
5. Haz clic en **Clone**. ![El botón Clone (Clonar)](/assets/images/help/desktop/clone-button-win.png)

{% endwindows %}

### Ramificar repositorios
Puedes utilizar {% data variables.product.prodname_desktop %} para crear una ramificación del repositorio y contribuir con un proyecto en donde no tengas privilegios de escritura. Los cambios en tu ramificación no afectarán al repositorio original. Puedes confirmar los cambios en tu ramificación y generar una solicitud de extracción del repositorio original con los cambios que propones. Para obtener más información, visita "[Acerca de las ramificaciones](/github/collaborating-with-issues-and-pull-requests/about-forks)."

1. Si clonaste un repositorio en donde no tienes privilegios de escritura, intenta confirmar los cambios, {% data variables.product.prodname_desktop %} enviará una alerta de que "No cuentas con privilegios de escritura para el **REPOSITORIO**". Da clic en **crear una ramificación**. ![Crear un enlace para la ramificación](/assets/images/help/desktop/create-a-fork.png)
3. Da clic en **Ramificar este repositorio**. ![Botón para ramificar este repositorio](/assets/images/help/desktop/fork-this-repo-button.png)
4. Para ver tu ramificación en {% data variables.product.prodname_dotcom %}, da clic en tu foto de perfil en la esquina superior derecha de {% data variables.product.prodname_dotcom %} y posteriormente en **Tus repositorios**. ![Enlace a tus repositorios](/assets/images/help/profile/your-repositories.png)
