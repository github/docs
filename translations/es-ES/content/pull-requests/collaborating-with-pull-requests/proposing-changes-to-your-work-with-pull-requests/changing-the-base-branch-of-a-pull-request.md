---
title: Cambiar la rama base de una solicitud de extracción
intro: 'Una vez abierta una solicitud de extracción, puedes cambiar la rama base para comparar los cambios en la solicitud de extracción frente a una rama diferente.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
  - /articles/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the base branch
ms.openlocfilehash: 6e8e78ac4f3e0d3f81b5efc07bb48151040baa9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137749'
---
{% warning %}

**Advertencia**: Cuando cambias la rama base de tu solicitud de incorporación de cambios, es posible que algunas confirmaciones se quiten de la escala de tiempo. La revisión de los comentarios también puede estar desactualizada, ya que es posible que la línea del código a la que el comentario hizo referencia no sea parte de los cambios en la solicitud de extracción.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista "Pull Requests" (Solicitudes de extracción), haz clic en la solicitud de extracción que deseas modificar.
3. Junto al título de la solicitud de incorporación de cambios, haz clic en **Editar**. ![Botón Editar solicitud de incorporación de cambios](/assets/images/help/pull_requests/pull-request-edit.png)
4. En el menú desplegable de la rama base, selecciona la rama base con la que quieres [comparar los cambios](/github/committing-changes-to-your-project/comparing-commits#comparing-branches). ![Menú desplegable de la rama base](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. Lee la información sobre cómo cambiar la rama base y haz clic en **Cambiar base**. ![Botón de confirmación para cambiar la rama base](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

**Sugerencia:** Cuando abras una solicitud de incorporación de cambios, {% data variables.product.product_name %} configurará la base en la confirmación que referencie esa rama. Si la rama se actualiza en el futuro, {% data variables.product.product_name %} no actualizará la confirmación de la rama base.

{% endtip %}

## Información adicional

- "[Creación de una solicitud de incorporación de cambios](/articles/creating-a-pull-request)"
- "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Revisión de los cambios propuestos en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
