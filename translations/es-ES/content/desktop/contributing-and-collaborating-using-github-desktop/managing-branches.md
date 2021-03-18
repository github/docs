---
title: Administrar ramas
intro: Puedes crear una rama nueva desde la rama predeterminada de un repositorio para que puedas experimentar con los cambios de forma segura.
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
versions:
  free-pro-team: '*'
---

### Acerca de administrar ramas
Puedes utilizar las ramas para experimentar de forma segura con los cambios de tu proyecto. Las ramas aislan tu trabajo de desarrollo de otras ramas en el repositorio. Por ejemplo, puedes utilizar una rama para desarrollar una nueva característica o para corregir un error.

Siempre puedes crear una rama a partir de otra rama existente. Habitualmente, puedes crear una rama desde la rama predeterminada de tu repositorio. Podrás entonces trabajar en esta rama nueva aislado de los cambios que otras personas hacen al repositorio.

Una vez que estás satisfecho con to trabajo puedes crear una solicitud de extracción para fusionar tus cambios en la rama actual en alguna otra rama. Para obtener más información, consulta la sección "[Crear un informe de problemas o solicitud de extracción](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" y "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)".

Siempre podrás crear una rama en {% data variables.product.prodname_desktop %} si tienes acceso de lectura en un repositorio, pero solo podrás cargar la rama a {% data variables.product.prodname_dotcom %} si tienes acceso de escritura en el repositorio en cuestión.

{% data reusables.desktop.protected-branches %}

### Cómo crear una rama

{% tip %}

**Tip:** La primera rama nueva que creas se basará en la rama predeterminada. Si tienes más de una rama, puedes elegir basar la nueva rama en aquella que has revisado actualmente o en la rama predeterminada.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![Menú desplegable para cambiar tu rama actual](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
{% data reusables.desktop.create-new-branch %}
  ![Opción New Branch (Rama nueva) en el menú Branch (Rama)](/assets/images/help/desktop/new-branch-button-mac.png)
{% data reusables.desktop.name-branch %}
  ![Campo para crear un nombre para la rama nueva](/assets/images/help/desktop/create-branch-name-mac.png)
{% data reusables.desktop.select-base-branch %}
  ![Opciones de rama base](/assets/images/help/desktop/create-branch-choose-branch-mac.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![Botón Create Branch (Crear rama)](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![Menú desplegable para cambiar tu rama actual](/assets/images/help/desktop/click-branch-in-drop-down-win.png)
{% data reusables.desktop.create-new-branch %}
  ![Opción New Branch (Rama nueva) en el menú Branch (Rama)](/assets/images/help/desktop/new-branch-button-win.png)
{% data reusables.desktop.name-branch %}
  ![Campo para crear un nombre para la rama nueva](/assets/images/help/desktop/create-branch-name-win.png)
{% data reusables.desktop.select-base-branch %}
  ![Opciones de rama base](/assets/images/help/desktop/create-branch-choose-branch-win.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![Botón Create Branch (Crear rama)](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

### Publicar una rama

Si creas una rama en {% data variables.product.product_name %}, necesitarás publicarla para que se muestre disponible para colaboración en {% data variables.product.prodname_dotcom %}.

1. En la parte superior de la app, da clic en {% octicon "git-branch" aria-label="The branch icon" %} **Rama Actual** y luego en la rama que quieres publicar. ![Menú desplegable para seleccionar qué rama publicar](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
2. Da clic en **Publicar rama**. ![El botón de publicar rama](/assets/images/help/desktop/publish-branch-button.png)

### Alternar entre ramas
Puedes ver y realizar confirmaciones en cualquiera de las ramas de tu repositorio. Si tienes cambios guardados, no confirmados, deberás decidir qué hacer con tus cambios antes de alternar las ramas. Puedes confirmar tus cambios en la rama actual, acumula tus cambios en la rama actual, o lleva los cambios a tu nueva rama. Si quieres confirmar tus cambios en la rama actual, sigue los pasos en [Confirmar y revisar cambios en tu proyecto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project) antes de alternar entre ramas.

{% tip %}

**Consejo**: Puedes configurar un comportamiento predeterminado para alternar entre ramas en la configuración **Avanzada**. Para obtener más información, consulta la sección "[Configurar los ajustes básicos](/desktop/getting-started-with-github-desktop/configuring-basic-settings)".

{% endtip %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![Lista de ramas en el repositorio](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. Si tienes cambios guardados, sin confirmar, elige **Leave my changes** (Dejar mis cambios) o **Bring my changes** (Traer mis cambios) y luego haz clic en **Switch Branch** (Cambiar rama). ![Alternar ramas con opciones de cambios](/assets/images/help/desktop/stash-changes-options.png)

### Recuperar cambios acumulados
Para acceder a los cambios que has acumulado en otra rama, vuelve a cambiar a la rama en la que acumulaste los cambios.

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![Lista de ramas en el repositorio](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. En la barra lateral a la izquierda, haz clic en **Stashed Changes** (Cambios acumulados). ![Opción de cambios acumulados](/assets/images/help/desktop/stashed-changes.png)
4. Para eliminar tus cambios acumulados, haz clic en **Discard **, o bien, para usar tus cambios acumulados, haz clic en **Restore**. ![Descartar o restaurar cambios acumulados](/assets/images/help/desktop/discard-restore-stash-buttons.png)

### Cómo eliminar una rama

No puedes borrar una rama que esté actualmente asociada con una solicitud de extracción abierta. No puedes revertir el haber borrado una rama.

{% mac %}

{% data reusables.desktop.select-branch-to-delete %}
  ![Menú desplegable para seleccionar qué rama borrar](/assets/images/help/desktop/select-branch-to-delete.png)
{% data reusables.desktop.delete-branch-mac %}
  ![Opción de "borrar..." en el menú de la rama](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %}
  ![Menú desplegable para seleccionar qué rama borrar](/assets/images/help/desktop/select-branch-to-delete.png)
{% data reusables.desktop.delete-branch-win %}
  ![Opción de "borrar..." en el menú de la rama](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

### Leer más

- [Clonar un repositorio de {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)
- "[Rama](/articles/github-glossary/#branch)" en el glosario {% data variables.product.prodname_dotcom %}
- "[Acerca de las ramas](/articles/about-branches)"
- "[Ramas en resumen](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)" en la documentación de Git
