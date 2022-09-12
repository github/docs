---
title: Administrar los debates
intro: 'Puedes categorizar, resaltar, transferir o borrar los debates.'
permissions: Repository administrators and people with write or greater access to a repository can manage discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage discussions
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository
ms.openlocfilehash: 95e806959eef023fd05e91a43f9269c98b5db052
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147786218'
---
## Acerca de la administración de los debates

{% data reusables.discussions.about-discussions %} Para obtener más información, consulte "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".

Los propietarios de la organización pueden elegir los permisos que se requieren para crear un debate en los repositorios que pertenezcan a la organización. Del mismo modo, para elegir los permisos necesarios para crear un debate de la organización, los propietarios de la organización pueden cambiar los permisos necesarios en el repositorio de origen. Para más información, vea "[Administración de la creación de debates para repositorios de la organización](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)".

Como mantenedor de debates, puedes crear recursos comunitarios para impulsar los debates que se alinien con la meta general del proyecto y mantener así un foro abierto y amistoso para los colaboradores. La creación de{% ifversion fpt or ghec %} un código de conducta o{% endif %} directrices de colaboración para que los colaboradores los sigan te ayudará a proporcionar un foro colaborativo y productivo. Para obtener más información sobre la creación de recursos de la comunidad, consulta{% ifversion fpt or ghec %} "[Adición de un código de conducta al proyecto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" y{% endif %} "[Establecimiento de instrucciones para los colaboradores del repositorio](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)".

Cuando un debate produce una idea o error que está listo para solucionarse, puedes crear una propuesta nueva desde un debate. Para más información, vea "[Creación de una incidencia](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-discussion)".

Para obtener más información sobre cómo facilitar un debate correcto, vea "[Moderación de comentarios y conversaciones](/communities/moderating-comments-and-conversations)".

{% data reusables.discussions.you-can-label-discussions %}

## Prerrequisitos

Para administrar los debates en un repositorio, debes habilitar los {% data variables.product.prodname_discussions %} en este. Para más información, vea "[Habilitación o deshabilitación de {% data variables.product.prodname_discussions %} en un repositorio](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)".

Para administrar debates en una organización, los datos {% data variables.product.prodname_discussions %} debe estar habilitados para la organización. Para más información, consulta "[Habilitación o deshabilitación de {% data variables.product.prodname_discussions %} para una organización](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)".

## Cambiar la categoría de un debate

Puedes categorizar los debates para ayudar a que los miembros de la comunidad encuentren aquellos que tengan alguna relación. Para más información, consulta "[Administración de categorías para debates](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)".

También puedes migrar un debate a una categoría diferente. No es posible mover un debate a o desde la categoría de sondeos.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, a la derecha de "Categoría", haz clic en {% octicon "gear" aria-label="The gear icon" %}.
  ![Apartado "Category" (Categoría) con un icono de engranaje](/assets/images/help/discussions/category-in-sidebar.png)
1. Haz clic en una categoría.
  ![Menú desplegable "Change category" (Cambiar categoría)](/assets/images/help/discussions/change-category-drop-down.png)

## Fijar un debate

Puedes fijar hasta cuatro debates importantes sobre la lista de debates del repositorio u organización.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, haga clic en {% octicon "pin" aria-label="The pin icon" %} **Pin discussion** (Anclar debate).
  ![Opción "Pin discussion" (Anclar debate) en la barra lateral derecha del debate](/assets/images/help/discussions/click-pin-discussion.png)
1. Opcionalmente, personaliza la apariencia del debate que fijaste.
  ![Opciones de personalización para un debate anclado](/assets/images/help/discussions/customize-pinned-discussion.png)
1. Haga clic en **Pin discussion** (Anclar debate).
  ![Botón "Pin discussion" (Anclar debate) en las opciones de personalización del debate anclado](/assets/images/help/discussions/click-pin-discussion-button.png)

## Editar un debate que se fijó

Editar un debate que se ha fijado no cambiará la categoría del mismo. Para más información, consulta "[Administración de categorías para debates](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)".

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, haga clic en {% octicon "pencil" aria-label="The pencil icon" %} **Edit pinned discussion** (Editar debate anclado).
  ![Opción "Edit pinned discussion" (Editar debate anclado) en la barra lateral derecha del debate](/assets/images/help/discussions/click-edit-pinned-discussion.png)
1. Personaliza la apariencia del debate que fijaste.
  ![Opciones de personalización para un debate anclado](/assets/images/help/discussions/customize-pinned-discussion.png)
1. Haga clic en **Pin discussion** (Anclar debate).
  ![Botón "Pin discussion" (Anclar debate) en las opciones de personalización del debate anclado](/assets/images/help/discussions/click-pin-discussion-button.png)

## Dejar de fijar un debate

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, haga clic en {% octicon "pin" aria-label="The pin icon" %} **Unpin discussion** (Desanclar debate).
  ![Opción "Unpin discussion" (Desanclar debate) en la barra lateral derecha del debate](/assets/images/help/discussions/click-unpin-discussion.png)
1. Lea la advertencia y haga clic en **Unpin discussion** (Desanclar debate).
  ![Botón "Unpin discussion" (Desanclar debate) debajo de la advertencia en el cuadro de diálogo modal](/assets/images/help/discussions/click-unpin-discussion-button.png)

## Transferir un debate

Para transferir un debate, debes tener permisos para crear debates en el repositorio a donde quieras trasnferirlo. Si quieres transferir un debate a una organización, debes tener permisos para crear debates en el repositorio de origen para los debates de la organización. Solo puedes transferir debates entre los repositorios que pertenezcan a la misma cuenta de organización o de usuario. No se puede transferir un debate de un repositorio privado{% ifversion ghec or ghes %} o interno{% endif %} a un repositorio público.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, haga clic en {% octicon "arrow-right" aria-label="The right arrow icon" %} **Transfer discussion** (Transferir debate).
  ![Opción "Transfer discussion" (Transferir debate) en la barra lateral derecha del debate](/assets/images/help/discussions/click-transfer-discussion.png)
1. Seleccione el menú desplegable **Choose a repository** (Elegir un repositorio) y haga clic en el repositorio al que quiera transferir el debate. Si deseas transferir un debate a una organización, elige el repositorio de origen para los debates de la organización.
  ![Menú desplegable "Choose a repository" (Elegir un repositorio), campo de búsqueda "Find a repository" (Buscar un repositorio) y repositorio en la lista](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)
1. Haga clic en **Transfer discussion** (Transferir debate).
  ![Botón "Transfer discussion" (Transferir debate)](/assets/images/help/discussions/click-transfer-discussion-button.png)

## Borrar un debate

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, haga clic en {% octicon "trash" aria-label="The trash arrow icon" %} **Delete discussion** (Eliminar debate).
  ![Opción "Delete discussion" (Eliminar debate) en la barra lateral derecha del debate](/assets/images/help/discussions/click-delete-discussion.png)
1. Lea la advertencia y haga clic en **Delete this discussion** (Eliminar este debate).
  ![Botón "Delete this discussion" (Eliminar este debate) debajo de la advertencia en el cuadro de diálogo modal](/assets/images/help/discussions/click-delete-this-discussion-button.png)

## Convertir propuestas con base en las etiquetas

Puedes convertir todas las propuestas con la misma etiqueta en debates, por lote. Las propuestas subsecuentes que tengan esta etiqueta también se convertirán automáticamente en el debate y categoría que configures.

1. En {% data variables.product.product_location %}, ve hasta la página principal del repositorio o, para los debates de organizaciones, el repositorio de origen.
{% data reusables.repositories.sidebar-issues %} {% data reusables.project-management.labels %}
1. Junto a la etiqueta que quiere convertir en incidencias, haga clic en **Convert issues** (Convertir incidencias).
1. Seleccione el menú desplegable **Choose a category** (Seleccionar una categoría) y haga clic en una categoría para el debate.
1. Haga clic en **I understand, convert this issue to a discussion** (Lo entiendo, convertir esta incidencia en un debate).
