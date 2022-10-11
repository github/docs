---
title: Confirmar y revisar cambios en su proyecto
intro: '{% data variables.product.prodname_desktop %} registra todos los cambios a medida que los editas. Puedes decidir cómo agrupar los cambios para crear confirmaciones significativas.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project
versions:
  free-pro-team: '*'
---

### Acerca de las confirmaciones

{% data reusables.commits.about-commits %} También puedes agregar un coautor en cualquier confirmación en la que colabores.

{% data reusables.desktop.update-email-address %} Para obtener más información, consulta la sección ["Configurar Git para GitHub Desktop](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)".

### Elegir una rama y realizar cambios

1. [Crear una rama nueva](/desktop/guides/contributing-to-projects/managing-branches) o seleccionar una rama existente haciendo clic en {% octicon "git-branch" aria-label="The branch icon" %}**Current Branch** (Rama actual) en la barra de herramientas y seleccionando la rama de la lista.

  ![Despliega el menú para cambiar tu rama actual](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.make-changes %}

### Elige cómo mostrar los diffs

Puedes cambiar la forma en la que se muestran los diffs en {% data variables.product.prodname_desktop %} para que satisfagan tus necesidades de revisión.

Para cambiar la forma en la que ves los diffs, en la esquina superior derecha de la vista del diff, haz clic en {% octicon "gear" aria-label="The Gear icon" %}.
- Para cambiar la forma en la que se muestra todo el diff, debajo de "visualización de diff", selecciona **Unificada** o **Dividida**. La vista unificada te muestra los cambios de forma linea, mientras que la vista dividida te muestra el contenido antiguo en la parte izquierda y el nuevo en la derecha.
- Para ocultar los cambios de espacios en blanco para que puedas enfocarte en cambios más sustanciales, selecciona **Ocultar los cambios a los espacios en blanco**.

![Menú de opción de diff](/assets/images/help/desktop/diff-selection.png)

Si necesitas ver más del archivo que lo que te muestra {% data variables.product.prodname_desktop %} predeterminadamente, puedes expandir el diff.
- Para ver las siguientes líneas abajo o arriba de los cambios resaltados, haz clic en la flecha de arriba o de abajo de los números de línea.
- Para seleccionar todo el archivo, haz clic derecho en la vista del diff y haz clic en **Expandir todo el archivo**.

![Vista de expansión de diff](/assets/images/help/desktop/expand-diff-view.png)

### Seleccionar cambios para incluirlos en una confirmación

A medida que realizas cambios en los archivos en tu editor de texto y que los guardas localmente, también verás los cambios en {% data variables.product.prodname_desktop %}.

* El icono rojo {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} hace referencia a los archivos eliminados.
* El icono amarillo {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} hace referencia a los archivos modificados.
* El icono verde {% octicon "diff-added" aria-label="The diff added icon color-green" %} hace referencia a los archivos agregados.
* Para acceder a los cambios acumulados, haz clic en **Stashed Changes** (Cambios acumulados).

  ![Opción de cambios acumulados](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}

  ![Selecciona la casilla de verificación para confirmar todos los archivos cambiados](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}

  ![Selecciona las casillas de verificación junto a los archivos que deseas confirmar](/assets/images/help/desktop/commit-some.png)

#### Crear una confirmación parcial

Si un archivo contiene varios cambios pero solo quieres que algunos de ellos se incluyan en una confirmación, puedes crear una confirmación parcial. El resto de los cambios permanecerán intactos, por lo que puedes realizar confirmaciones y modificaciones adicionales. Esto permite realizar confirmaciones separadas, significativas, como mantener cambios de interrupción de línea en una confirmación separada desde cambios en el código o la prosa.

Para excluir de tu confirmación las líneas que cambiaron, da clic en una o más de ellas para que las azules desaparezcan. Las líneas que aún se resalten en azul se incluirán en la confirmación.

  ![Líneas no seleccionadas en un archivo](/assets/images/help/desktop/partial-commit.png)

### Descartar cambios
Si retiraste la confirmación de los cambios que no quieres mantener, puedes descartarlos. Esto eliminará los cambios de los archivos en tu computadora. Puedes descartar todos los cambios que dejaste de confirmar en uno o más archivos, o puedes descartar las líneas específicas que agregaste.

Los cambios que descartas se guardan en un archivo con fecha en la sección de basura. Puedes recuperar los cambios que descartaste antes de que se vacíe la basura.

#### Descartar cambios en uno o más archivos

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}

  ![Opción Discard Changes (Descartar cambios) en el menú contextual](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}

  ![Botón Discard Changes (Descartar cambios) en el cuadro de diálogo de confirmación](/assets/images/help/desktop/discard-changes-confirm-mac.png)

#### Descartar los cambios en una o más líneas
Puedes descartar una o más líneas que hayan cambiado y que se hayan dejado de confirmar.

{% note %}

**Nota:** Se inhabilita la capacidad para descartar líneas sencillas en los grupos de cmabios que agreguen y eliminen líneas.

{% endnote %}

Para descartar una línea que se haya agregado, en la lista de líneas que cambiaron, da clic derecho sobre aquella que quieras descartar y selecciona **Descargar línea agregada**.

  ![Descartar una línea sencilla en el diálogo de confirmación](/assets/images/help/desktop/discard-single-line.png)

Para descartar un grupo de líneas que cambiaron, da clic derecho en la barra vertical a la derecha de los números de línea para aquellas líneas que quieras descartar y luego selecciona **Descartar líneas agregadas**.

  ![Descartar un grupo de líneas agregadas en el diálogo de confirmación](/assets/images/help/desktop/discard-multiple-lines.png)


### Escribir un mensaje de confirmación y subir los cambios

Una vez que estés satisfecho con los cambios que elegiste incluir en tu confirmación, escribe tu mensaje de confirmación y sube los cambios. Si has colaborado en una confirmación, también puedes contribuir en una confirmación de más de un autor.

{% note %}

**Nota**: {% data reusables.desktop.tags-push-with-commits %} Para obtener más información, consulta la sección "[Administrar las etiquetas](/desktop/contributing-to-projects/managing-tags)".

{% endnote %}

{% data reusables.desktop.commit-message %}

  ![Campo para mensaje de confirmación](/assets/images/help/desktop/commit-message.png)
2. De manera opcional, para atribuir una confirmación a otro autor, haz clic en el icono de coautores y escribe el nombre de usuario que deseas incluir.

  ![Agregar un coautor al mensaje de confirmación](/assets/images/help/desktop/add-co-author-commit.png)
{% data reusables.desktop.commit-button %}

  ![Botón Commit (Confirmar)](/assets/images/help/desktop/commit-button.png)
4. Si la rama a la que intentas comprometerte está protegida, Desktop te avisará.
    - Para mover tus cambios, haz clic en **switch btanches (cambiar ramas)**.
    - Para confirmar tus cambios en la rama protegida, haz clic en **Commit to _BRANCH_****(Enviar a _RAMA)_**.

  Para más información sobre ramas protegidas, ve "[Acerca de ramas protegidas](/github/administering-a-repository/about-protected-branches)".

  ![Advertencia de rama protegida](/assets/images/help/desktop/protected-branch-warning.png)
{% data reusables.desktop.push-origin %}
