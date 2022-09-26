---
title: Administración de categorías de debate
intro: 'Puedes categorizar los debates para organizar las conversaciones para los miembros de tu comunidad, y puedes elegir un formato para cada categoría.'
permissions: Repository administrators and people with write or greater access to a repository can manage categories for discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage categories for discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage categories
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository
ms.openlocfilehash: e16d25ad2bb72f4aea9b441529cb8e9a7a0fee48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410471'
---
## Acerca de las categorías para los debates

{% data reusables.discussions.about-discussions %} {% data reusables.discussions.about-categories-and-formats %}

{% data reusables.discussions.about-announcement-format %}

Cada categoría debe tener un nombre único y un emoji distintivo, y se le puede acompañar con una descripción detallada que describa su propósito. Las categorías ayudan a que los mantenedores organicen cómo se archivan sus conversaciones y se pueden personalizar para distinguir categorías que son de preguntas y respuestas o conversaciones más abiertas. {% data reusables.discussions.repository-category-limit %} Para más información, vea "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)".

## Categorías predeterminadas

| Category | Propósito | Formato |
| :- | :- | :- |
| 📣 Anuncios | Actualizaciones y noticias de los mantenedores de proyecto | Anuncio |
| #️⃣ General | Cualquier cosa que sea relevante para el proyecto | Debates abiertos |
|💡 Ideas | Ideas para cambiar o mejorar el proyecto | Debates abiertos |
| 🗳 Sondeos | Sondeos con varias opciones para que la comunidad vote y debata | Sondeos |
| 🙏 Preguntas y respuestas | Preguntas para que responda la comunidad, con un formato de pregunta/respuesta | Preguntas y respuestas |
| 🙌 Mostrar y contar | Creaciones, experimentos, o pruebas relevantes para el proyecto | Debates abiertos |

## Crear una categoría

1. En {% data variables.product.product_location %}, ve a la página principal del repositorio o la organización en la que quieres crear una categoría.
{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.edit-categories %}
1. Haga clic en **Nueva categoría**.
  ![Botón "Nueva categoría" sobre la lista de categorías de debate para un repositorio](/assets/images/help/discussions/click-new-category-button.png)
1. Edita el emoji, título, descripción y formato del debate para la categoría. Para más información sobre los formatos de debate, vea "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)".
  ![Emoji, título, descripción y formato de debate para la categoría nueva](/assets/images/help/discussions/edit-category-details.png)
1. Haga clic en **Crear**.
  ![Botón "Crear" para la nueva categoría](/assets/images/help/discussions/new-category-click-create-button.png)

## Editar una categoría

Puedes editar una categoría para cambiar el emoji, título, descripción y formato de debate de la misma.

1. En {% data variables.product.product_location %}, ve a la página principal del repositorio o la organización en la que quieres editar una categoría.
{% data reusables.discussions.discussions-tab %}
1. A la derecha de la categoría en la lista, da clic en {% octicon "pencil" aria-label="The pencil icon" %}.
  ![Botón Editar a la derecha de la categoría en la lista de categorías de un repositorio](/assets/images/help/discussions/click-edit-for-category.png)
1. {% data reusables.discussions.edit-category-details %} ![Edición del emoji, título, descripción y formato de debate para la categoría existente](/assets/images/help/discussions/edit-existing-category-details.png)
1. Haga clic en **Guardar cambios**.
  ![Botón "Guardar cambios" para la categoría existente](/assets/images/help/discussions/existing-category-click-save-changes-button.png)

## Borrar una categoría

Cuando borras una categoría, {% data variables.product.product_name %} enviará todos los debates en la categoría que se borró a una categoría existente que elijas.

1. En {% data variables.product.product_location %}, ve a la página principal del repositorio o la organización en la que quieres eliminar una categoría.
{% data reusables.discussions.discussions-tab %}
1. A la derecha de la categoría en la lista, da clic en {% octicon "trash" aria-label="The trash icon" %}.
  ![Botón Papelera de reciclaje a la derecha de la categoría en la lista de categorías de un repositorio](/assets/images/help/discussions/click-delete-for-category.png)
1. Utiliza el menú desplegable y elige una categoría nueva para cualquier debate en la categoría que estás eliminando.
  ![Menú desplegable para elegir una categoría nueva al eliminar una categoría existente](/assets/images/help/discussions/choose-new-category.png)
1. Haga clic en **Eliminar y mover**.
  ![Menú desplegable para elegir una categoría nueva al eliminar una categoría existente](/assets/images/help/discussions/click-delete-and-move-button.png)
