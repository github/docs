---
title: Confirmar y revisar cambios en su proyecto
intro: '{% data variables.product.prodname_desktop %} registra todos los cambios a medida que los editas. Puedes decidir cómo agrupar los cambios para crear confirmaciones significativas.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project
versions:
  fpt: '*'
shortTitle: Commit & review changes
ms.openlocfilehash: ecc12722a7d0eebeedc13878972d138ca894db5a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145117554'
---
## Acerca de las confirmaciones

{% data reusables.commits.about-commits %} También puedes agregar un coautor en cualquier confirmación en la que colabores.

{% data reusables.desktop.update-email-address %} Para más información, vea ["Configuración de Git para GitHub Desktop](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)".

## Elegir una rama y realizar cambios

1. [Cree una rama](/desktop/guides/contributing-to-projects/managing-branches) o seleccione una existente; para ello, haga clic en {% octicon "git-branch" aria-label="The branch icon" %} **Rama actual** en la barra de herramientas y seleccione la rama de la lista.

  ![Menú desplegable para cambiar la rama actual](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.make-changes %}

## Elige cómo mostrar los diffs

Puedes cambiar la forma en la que se muestran los diffs en {% data variables.product.prodname_desktop %} para que satisfagan tus necesidades de revisión.

Para cambiar la forma en la que ves los diffs, en la esquina superior derecha de la vista del diff, haz clic en {% octicon "gear" aria-label="The Gear icon" %}.
- Para cambiar cómo se muestra toda la diferencia, en "Diff display" (Pantalla de diferencias), seleccione **Unified** (Unificada) o **Split** (Dividida). La vista unificada te muestra los cambios de forma linea, mientras que la vista dividida te muestra el contenido antiguo en la parte izquierda y el nuevo en la derecha.
- A fin de ocultar los cambios de espacios en blanco para que se pueda centrar en cambios más sustanciales, seleccione **Hide Whitespace Changes** (Ocultar los cambios de espacios en blanco).

![Menú de opción de diff](/assets/images/help/desktop/diff-selection.png)

Si necesitas ver más del archivo que lo que te muestra {% data variables.product.prodname_desktop %} predeterminadamente, puedes expandir el diff.
- Para ver las siguientes líneas abajo o arriba de los cambios resaltados, haz clic en la flecha de arriba o de abajo de los números de línea.
- Para ver todo el archivo, haga clic con el botón derecho en la vista de diferencias y haga clic en **Expand Whole File** (Expandir todo el archivo).

![Vista de expansión de diff](/assets/images/help/desktop/expand-diff-view.png)

## Seleccionar cambios para incluirlos en una confirmación

A medida que realizas cambios en los archivos en tu editor de texto y que los guardas localmente, también verás los cambios en {% data variables.product.prodname_desktop %}.

* El icono rojo {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} indica archivos eliminados.
* El icono amarillo {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} indica archivos modificados.
* El icono verde {% octicon "diff-added" aria-label="The diff added icon color-green" %} indica archivos agregados.
* Para acceder a los cambios acumulados, haga clic en **Stashed Changes** (Cambios acumulados).

  ![Opción de cambios acumulados](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}

  ![Selecciona la casilla de verificación para confirmar todos los archivos cambiados](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}

  ![Selecciona las casillas de verificación junto a los archivos que deseas confirmar](/assets/images/help/desktop/commit-some.png)

### Crear una confirmación parcial

Si un archivo contiene varios cambios pero solo quieres que algunos de ellos se incluyan en una confirmación, puedes crear una confirmación parcial. El resto de los cambios permanecerán intactos, por lo que puedes realizar confirmaciones y modificaciones adicionales. Esto permite realizar confirmaciones separadas, significativas, como mantener cambios de interrupción de línea en una confirmación separada desde cambios en el código o la prosa.

Para excluir de tu confirmación las líneas que cambiaron, da clic en una o más de ellas para que las azules desaparezcan. Las líneas que aún se resalten en azul se incluirán en la confirmación.

  ![Líneas no seleccionadas en un archivo](/assets/images/help/desktop/partial-commit.png)

## Descartar cambios
Si retiraste la confirmación de los cambios que no quieres mantener, puedes descartarlos. Esto eliminará los cambios de los archivos en tu computadora. Puedes descartar todos los cambios que dejaste de confirmar en uno o más archivos, o puedes descartar las líneas específicas que agregaste.

Los cambios que descartas se guardan en un archivo con fecha en la sección de basura. Puedes recuperar los cambios que descartaste antes de que se vacíe la basura.

### Descartar cambios en uno o más archivos

{% data reusables.desktop.select-discard-files %} {% data reusables.desktop.click-discard-files %}

  ![Opción Discard Changes (Descartar cambios) en el menú contextual](/assets/images/help/desktop/discard-changes-mac.png) {% data reusables.desktop.confirm-discard-files %}

  ![Botón Discard Changes (Descartar cambios) en el cuadro de diálogo de confirmación](/assets/images/help/desktop/discard-changes-confirm-mac.png)

### Descartar los cambios en una o más líneas
Puedes descartar una o más líneas que hayan cambiado y que se hayan dejado de confirmar.

{% note %}

**Nota:** El descarte de líneas sencillas está deshabilitado en los grupos de cambios que agregan y eliminan líneas.

{% endnote %}

Para descartar una línea agregada, en la lista de líneas que han cambiado, haga clic con el botón derecho sobre la que quiera descartar y seleccione **Discard added line** (Descartar línea agregada).

  ![Descartar una línea sencilla en el diálogo de confirmación](/assets/images/help/desktop/discard-single-line.png)

Para descartar un grupo de líneas que han cambiado, haga clic con el botón derecho en la barra vertical situada a la derecha de los números de las líneas que quiera descartar y luego seleccione **Discard added lines** (Descartar líneas agregadas).

  ![Descartar un grupo de líneas agregadas en el diálogo de confirmación](/assets/images/help/desktop/discard-multiple-lines.png)


## Escribir un mensaje de confirmación y subir los cambios

Una vez que estés satisfecho con los cambios que elegiste incluir en tu confirmación, escribe tu mensaje de confirmación y sube los cambios. Si has colaborado en una confirmación, también puedes contribuir en una confirmación de más de un autor.

{% note %}

**Nota**: {% data reusables.desktop.tags-push-with-commits %} Para más información, vea "[Administración de etiquetas](/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/managing-tags)".

{% endnote %}

{% data reusables.desktop.commit-message %}

  ![Campo para mensaje de confirmación](/assets/images/help/desktop/commit-message.png)
1. De manera opcional, para atribuir una confirmación a otro autor, haz clic en el icono de coautores y escribe el nombre de usuario que deseas incluir.

  ![Adición de un coautor al mensaje de confirmación](/assets/images/help/desktop/add-co-author-commit.png) {% data reusables.desktop.commit-button %}

  ![Botón Confirmar](/assets/images/help/desktop/commit-button.png)
4. Si la rama a la que intentas comprometerte está protegida, Desktop te avisará.
    - Para mover los cambios, haga clic en **switch branches** (cambiar ramas).
    - Para confirmar los cambios en la rama protegida, haga clic en **Confirmar en _RAMA_**.

  Para más información sobre las ramas protegidas, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)".

  ![Advertencia de rama protegida](/assets/images/help/desktop/protected-branch-warning.png) {% data reusables.desktop.push-origin %}

6. Si tienes una solicitud de incorporación de cambios basada en la rama en la que estás trabajando, {% data variables.product.prodname_desktop %} mostrará el estado de las comprobaciones que se han ejecutado para dicha solicitud. Para obtener más información sobre las comprobaciones, consulta "[Visualización y nueva ejecución de comprobaciones en GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)".

 ![Visualización de las comprobaciones junto al nombre de la rama](/assets/images/help/desktop/checks-dialog.png)

 Si no se ha creado una solicitud de incorporación de cambios para la rama actual, {% data variables.product.prodname_desktop %} te ofrecerá la opción de crear una. Para obtener más información, consulta "[Creación de una incidencia o una solicitud de incorporación de cambios](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request)".

 ![Crear una solicitud de incorporación de cambios](/assets/images/help/desktop/mac-create-pull-request.png)
