---
title: Administrar las categorías de los debates en tu repositorio
intro: Puedes categorizar los debates en tu repositorio para organizar las conversaciones para los miembros de tu comunidad, y puedes elegir un formato para cada categoría.
permissions: Los administradores de repositorio y las personas con acceso de escritura o superior en el mismo pueden habilitar los debates para éste.
versions:
  free-pro-team: '*'
---

{% data reusables.discussions.beta %}

### Acerca de las categorías para los debates

{% data reusables.discussions.about-discussions %} {% data reusables.discussions.about-categories-and-formats %}

Cada categoría debe tener un nombre único y un emoji distintivo, y se le puede acompañar con una descripción detallada que describa su propósito. Las categorías ayudan a que los mantenedores organicen cómo se archivan sus conversaciones y se pueden personalizar para distinguir si las categorías que son de preguntas y respuestas o más abiertas. {% data reusables.discussions.repository-category-limit %} Para obtener más información, consulta la sección "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)".

### Categorías predeterminadas

| Categoría          | Propósito                                                                      | Type                 |
|:------------------ |:------------------------------------------------------------------------------ |:-------------------- |
| #️⃣ General        | Cualquier cosa que sea relevante para el proyecto                              | Debates abiertos     |
| 💡Ideas             | Ideas para cambiar o mejorar el proyecto                                       | Debates abiertos     |
| 🙏 Q&A              | Preguntas para que responda la comunidad, con un formato de pregunta/respuesta | Pregunta y respuesta |
| 🙌 Mostrar y contar | Creaciones, experimentos, o pruebas relevantes para el proyecto                | Debates abiertos     |

### Crear una categoría

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.edit-categories %}
1. Da clic en **Categoría nueva**. ![Botón de "Categoría nueva" sobre la lista de categorías de debate para un repositorio](/assets/images/help/discussions/click-new-category-button.png)
1. Edita el emoji, título, descripción y formato del debate para la categoría. Para obtener más información sobre los formatos de debate, consulta la sección [Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)". ![Emoji, título, descripción y formato de debate para la categoría nueva](/assets/images/help/discussions/edit-category-details.png)
1. Da clic en **Crear**. ![Botón de "Crear" para la categoría nueva](/assets/images/help/discussions/new-category-click-create-button.png)

### Editar una categoría

Puedes editar una categoría para cambiar el emoji, título, descripción y formato de debate de la misma.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
1. A la derecha de la categoría en la lista, da clic en {% octicon "pencil" aria-label="The pencil icon" %}. ![Botón de editar a la derecha de la categoría en la lista de categorías de un repositorio](/assets/images/help/discussions/click-edit-for-category.png)
1. {% data reusables.discussions.edit-category-details %}
![Editar el emoji, título, descripción y formato del debate para la categoría existente](/assets/images/help/discussions/edit-existing-category-details.png)
1. Haz clic en **Guardar cambios**. ![Botón de "Guardar cambios" para la categoría existente](/assets/images/help/discussions/existing-category-click-save-changes-button.png)

### Borrar una categoría

Cuando borras una categoría, {% data variables.product.product_name %} enviará todos los debates en la categoría que se borró a una categoría existente que elijas.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
1. A la derecha de la categoría en la lista, da clic en {% octicon "trash" aria-label="The trash icon" %}. ![Botón de cesto de basura a la derecha de la categoría en la lista de categorías de un repositorio](/assets/images/help/discussions/click-delete-for-category.png)
1. Utiliza el menú desplegable y elige una categoría nueva para cualquier debate en la categoría que estás eliminando. ![Menú desplegable para elegir una categoría nueva cuando se borra una categoría existente](/assets/images/help/discussions/choose-new-category.png)
1. Da clic en **Borrar & Mover**. ![Menú desplegable para elegir una categoría nueva cuando se borra una categoría existente](/assets/images/help/discussions/click-delete-and-move-button.png)
