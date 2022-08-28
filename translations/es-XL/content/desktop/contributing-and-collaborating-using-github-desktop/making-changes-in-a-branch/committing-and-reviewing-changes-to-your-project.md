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

### 1. Elegir una rama y realizar cambios

1. [Crea una rama nueva](/desktop/guides/contributing-to-projects/managing-branches), o selecciona una rama existente dando clic

{% octicon "git-branch" aria-label="The branch icon" %} **Rama Actual** en la barra de herramientas y seleccionando la rama de la lista.
  ![Despliega el menú para cambiar tu rama actual](/assets/images/help/desktop/click-branch-in-drop-down.png)
{% data reusables.desktop.make-changes %}

### 2. Seleccionar cambios para incluirlos en una confirmación

A medida que realizas cambios en los archivos en tu editor de texto y que los guardas localmente, también verás los cambios en {% data variables.product.prodname_desktop %}.

* El icono rojo {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} hace referencia a los archivos eliminados.
* El icono amarillo {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} hace referencia a los archivos modificados.
* El icono verde {% octicon "diff-added" aria-label="The diff added icon color-green" %} hace referencia a los archivos agregados.
* Para acceder a los cambios acumulados, haz clic en **Stashed Changes** (Cambios acumulados). ![Opción de cambios acumulados](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}![Selecciona la casilla de verificación para confirmar todos los archivos cambiados](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}![Selecciona las casillas de verificación junto a los archivos que deseas confirmar](/assets/images/help/desktop/commit-some.png)

#### Crear una confirmación parcial

Si un archivo contiene múltiples cambios, pero solo quieres que *algunos* de esos cambios se incluyan en una confirmación, puedes crear una confirmación parcial. El resto de los cambios permanecerán intactos, por lo que puedes realizar confirmaciones y modificaciones adicionales. Esto permite realizar confirmaciones separadas, significativas, como mantener cambios de interrupción de línea en una confirmación separada desde cambios en el código o la prosa.

Cuando revises la diferencia del archivo, las líneas que se incluirán en la confirmación están resaltadas en azul. Para excluir el cambio, haz clic en la línea cambiada para que desaparezca el azul.

![Líneas no seleccionadas en un archivo](/assets/images/help/desktop/partial-commit.png)

#### Descartar cambios

Puedes descartar todos los cambios no confirmados en un archivo, o rango de archivos, o descartar todos los cambios en todos los archivos desde la última confirmación.

{% mac %}

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}
  ![Opción Discard Changes (Descartar cambios) en el menú contextual](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}
  ![Botón Discard Changes (Descartar cambios) en el cuadro de diálogo de confirmación](/assets/images/help/desktop/discard-changes-confirm-mac.png)

{% tip %}

**Sugerencia:** Los cambios que descartaste se cargarán en un archivo fechado en la Papelera y puedes recuperarlos hasta que se vacíe la Papelera.

{% endtip %}

{% endmac %}

{% windows %}

{% data reusables.desktop.select-discard-files %}{% data reusables.desktop.click-discard-files %}
  ![Opción Discard Changes (Descartar cambios) en el menú contextual](/assets/images/help/desktop/discard-changes-win.png)
{% data reusables.desktop.confirm-discard-files %}
  ![Botón Discard Changes (Descartar cambios) en el cuadro de diálogo de confirmación](/assets/images/help/desktop/discard-changes-confirm-win.png)

{% tip %}

**Sugerencia:** Los cambios que descartaste se guardarán en un archivo en la Papelera de reciclaje y puedes recuperarlos hasta que se vacíe.

{% endtip %}

{% endwindows %}

### 3. Escribir un mensaje de confirmación y subir los cambios

Una vez que estés satisfecho con los cambios que elegiste incluir en tu confirmación, escribe tu mensaje de confirmación y sube los cambios. Si has colaborado en una confirmación, también puedes contribuir en una confirmación de más de un autor.

{% note %}

**Nota**: {% data reusables.desktop.tags-push-with-commits %} Para obtener más información, consulta la sección "[Administrar las etiquetas](/desktop/contributing-to-projects/managing-tags)".

{% endnote %}

{% data reusables.desktop.commit-message %}
  ![Campo para mensaje de confirmación](/assets/images/help/desktop/commit-message.png)
2. De manera opcional, para atribuir una confirmación a otro autor, haz clic en el icono de coautores y escribe el nombre de usuario que deseas incluir. ![Agregar un coautor al mensaje de confirmación](/assets/images/help/desktop/add-co-author-commit.png)
{% data reusables.desktop.commit-button %}
  ![Botón Commit (Confirmar)](/assets/images/help/desktop/commit-button.png)
4. Si la rama a la que intentas comprometerte está protegida, Desktop te avisará.
    - Para mover tus cambios, haz clic en **switch btanches (cambiar ramas)**.
    - Para confirmar tus cambios en la rama protegida, haz clic en **Commit to _BRANCH_****(Enviar a _RAMA)_**.

  Para más información sobre ramas protegidas, ve "[Acerca de ramas protegidas](/github/administering-a-repository/about-protected-branches)". ![Advertencia de rama protegida](/assets/images/help/desktop/protected-branch-warning.png)
{% data reusables.desktop.push-origin %}
