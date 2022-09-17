---
title: Administrar ramas
intro: Puedes crear una rama nueva desde la rama predeterminada de un repositorio para que puedas experimentar con los cambios de forma segura.
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-branches
versions:
  fpt: '*'
ms.openlocfilehash: 30604c6b3ed0ab9ca5c0f3f8ca0fe853624ee86b
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886946'
---
## Acerca de administrar ramas
Puedes utilizar las ramas para experimentar de forma segura con los cambios de tu proyecto. Las ramas aislan tu trabajo de desarrollo de otras ramas en el repositorio. Por ejemplo, puedes utilizar una rama para desarrollar una nueva característica o para corregir un error.

Siempre puedes crear una rama a partir de otra rama existente. Habitualmente, puedes crear una rama desde la rama predeterminada de tu repositorio. Podrás entonces trabajar en esta rama nueva aislado de los cambios que otras personas hacen al repositorio.

También puedes crear una rama, comenzando desde una confirmación previa, en el historial de una rama. Esto puede ser útil si necesitas regresar a una vista anterior del repositorio para investigar un error o para crear un hot fix sobre tu lanzamiento más reciente.

Una vez que estás satisfecho con to trabajo puedes crear una solicitud de extracción para fusionar tus cambios en la rama actual en alguna otra rama. Para más información, vea "[Creación de una incidencia o una solicitud de incorporación de cambios](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" y "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".

Siempre podrás crear una rama en {% data variables.product.prodname_desktop %} si tienes acceso de lectura en un repositorio, pero solo podrás cargar la rama a {% data variables.product.prodname_dotcom %} si tienes acceso de escritura en el repositorio en cuestión.

{% data reusables.desktop.protected-branches %}

## Cómo crear una rama

{% tip %}

**Sugerencia:** La primera rama que cree se basará en la rama predeterminada. Si tienes más de una rama, puedes elegir basar la nueva rama en aquella que has revisado actualmente o en la rama predeterminada.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![Menú desplegable para cambiar la rama actual](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.create-new-branch %} ![Opción Rama nueva en el menú Rama](/assets/images/help/desktop/new-branch-button-mac.png) {% data reusables.desktop.name-branch %} ![Campo para crear un nombre para la rama nueva](/assets/images/help/desktop/create-branch-name-mac.png) {% data reusables.desktop.select-base-branch %} ![Opciones de la rama base](/assets/images/help/desktop/create-branch-choose-branch-mac.png) {% data reusables.desktop.confirm-new-branch-button %} ![Botón Crear rama](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![Menú desplegable para cambiar la rama actual](/assets/images/help/desktop/click-branch-in-drop-down-win.png) {% data reusables.desktop.create-new-branch %} ![Opción Rama nueva en el menú Rama](/assets/images/help/desktop/new-branch-button-win.png) {% data reusables.desktop.name-branch %} ![Campo para crear un nombre para la rama nueva](/assets/images/help/desktop/create-branch-name-win.png) {% data reusables.desktop.select-base-branch %} ![Opciones de la rama base](/assets/images/help/desktop/create-branch-choose-branch-win.png) {% data reusables.desktop.confirm-new-branch-button %} ![Botón Crear rama](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

## Crear una rama a partir de una confirmación previa

{% data reusables.desktop.history-tab %}
2. Haga clic con el botón derecho en la confirmación desde la que quiera crear una rama y seleccione **Crear rama desde confirmación**.
  ![Crear rama desde el menú contextual de confirmación](/assets/images/help/desktop/create-branch-from-commit-context-menu.png) {% data reusables.desktop.name-branch %} {% data reusables.desktop.confirm-new-branch-button %} ![Crear rama desde la confirmación](/assets/images/help/desktop/create-branch-from-commit-overview.png)

## Publicar una rama

Si creas una rama en {% data variables.product.product_name %}, necesitarás publicarla para que se muestre disponible para colaboración en {% data variables.product.prodname_dotcom %}.

1. En la parte superior de la aplicación, haga clic en {% octicon "git-branch" aria-label="The branch icon" %} **Rama actual** y después en la rama que quiera publicar.
  ![Menú desplegable para seleccionar la rama para publicar](/assets/images/help/desktop/select-branch-from-dropdown.png)
2. Haga clic en **Publicar rama**.
  ![El botón Publicar rama](/assets/images/help/desktop/publish-branch-button.png)

## Cambiar de una rama a otra
Puedes ver y realizar confirmaciones en cualquiera de las ramas de tu repositorio. Si tienes cambios guardados, no confirmados, deberás decidir qué hacer con tus cambios antes de alternar las ramas. Puedes confirmar tus cambios en la rama actual, acumular tus cambios para guardarlos temporalmente en la rama actual, o llevar los cambios a tu rama nueva. Si quiere confirmar los cambios antes de cambiar de rama, vea "[Confirmación y revisión de los cambios en el proyecto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)".
{% tip %}

**Sugerencia**: Puede establecer un comportamiento predeterminado para el cambio de ramas en la configuración **Avanzado**. Para más información, vea "[Configuración básica](/desktop/getting-started-with-github-desktop/configuring-basic-settings)".

{% endtip %}

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.switching-between-branches %} ![Lista de ramas en el repositorio](/assets/images/help/desktop/select-branch-from-dropdown.png)
3. Si ha guardado cambios sin confirmar, elija **Dejar mis cambios** o **Traer mis cambios** y, después, haga clic en **Cambiar rama**.
  ![Cambiar rama con opciones de cambios](/assets/images/help/desktop/stash-changes-options.png)

## Cómo eliminar una rama

No puedes borrar una rama que esté actualmente asociada con una solicitud de extracción abierta. No puedes revertir el haber borrado una rama.

{% mac %}

{% data reusables.desktop.select-branch-to-delete %} ![Menú desplegable para seleccionar la rama para eliminar](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-mac %} ![Opción Eliminar... en el menú Rama](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %} ![Menú desplegable para seleccionar la rama para eliminar](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-win %} ![Opción Eliminar... en el menú Rama](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

## Lecturas adicionales

- "[Clonación de un repositorio desde {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)"
- "[Rama](/articles/github-glossary/#branch)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Acerca de las ramas](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[Resumen de las ramas](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)" en la documentación de Git
- "[Guardado provisional de cambios](/desktop/contributing-and-collaborating-using-github-desktop/stashing-changes)"
