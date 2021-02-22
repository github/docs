---
title: Cambiar la rama base de una solicitud de extracción
intro: 'Una vez abierta una solicitud de extracción, puedes cambiar la rama base para comparar los cambios en la solicitud de extracción frente a una rama diferente.'
redirect_from:
  - /articles/changing-the-base-branch-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% warning %}

**Advertencia**: Cuando cambias la rama base de tu solicitud de extracción, algunas confirmaciones se eliminarán de la cronología. La revisión de los comentarios también puede estar desactualizada, ya que es posible que la línea del código a la que el comentario hizo referencia no sea parte de los cambios en la solicitud de extracción.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista "Pull Requests" (Solicitudes de extracción), haz clic en la solicitud de extracción que deseas modificar.
3. Junto al título de la solicitud de extracción, haz clic en **Edit** (Editar). ![Botón Pull request edit (Edición de solicitud de extracción)](/assets/images/help/pull_requests/pull-request-edit.png)
4. En el menú desplegable de la rama base, seleccione aquella contra la que desea [comparar cambios](/github/committing-changes-to-your-project/comparing-commits#comparing-branches). ![Menú desplegable de la rama base ](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. Lee la información sobre cómo cambiar la rama base y haz clic en **Change base** (Cambiar base). ![Botón de confirmación para cambiar la rama base ](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

**Tip:** Cuando abres una solicitud de cambios, {% data variables.product.product_name %} configurará la base en la confirmación que referencie esa rama. Si la rama se actualiza en el futuro, {% data variables.product.product_name %} no actualizará la confirmación de la rama base.

{% endtip %}

### Leer más

- "[Crear una solicitud de extracción](/articles/creating-a-pull-request)"
- "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)"
- "[Revisar los cambios propuestos en una solicitud de extracción](/articles/reviewing-proposed-changes-in-a-pull-request)"
