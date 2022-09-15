---
title: Crear y eliminar ramas en tu repositorio
intro: 'Puedes crear o eliminar ramas directamente en {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /articles/deleting-branches-in-a-pull-request
  - /articles/creating-and-deleting-branches-within-your-repository
  - /github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create & delete branches
ms.openlocfilehash: 44b56d8a1884e5cbfe0832f291cdc244b57a3810
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526634'
---
## Cómo crear una rama
Puedes crear una rama de diferentes maneras en{% data variables.product.product_name %}.

{% note %}

**Nota**: Solo puedes crear una rama en un repositorio en el que tengas acceso de inserción.

{% endnote %}

{% ifversion create-branch-from-overview %}
### Creación de una rama en la página de información general de ramas
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. Haz clic en **Nueva rama**.
   ![Captura de pantalla de la página de información general de ramas con el botón Nueva rama resaltado](/assets/images/help/branches/new-branch-button.png)
2. En el cuadro de diálogo, escribe el nombre de la rama y, opcionalmente, cambia su origen.  
   Si el repositorio es una bifurcación, también puedes seleccionar el repositorio ascendente como origen de la rama.
   ![Captura de pantalla del diálogo modal de creación de ramas para una bifurcación con un origen de rama resaltado](/assets/images/help/branches/branch-creation-popup-branch-source.png)
3. Haz clic en **Crear rama**.
   ![Captura de pantalla del diálogo modal de creación de ramas con el botón Crear rama resaltado](/assets/images/help/branches/branch-creation-popup-button.png) {% endif %}

### Creación de una rama mediante la lista desplegable de ramas
{% data reusables.repositories.navigate-to-repo %}
1. Opcionalmente, si quieres crear la rama desde una rama distinta de la predeterminada para el repositorio, haz clic en {% octicon "git-branch" aria-label="The branch icon" %} **Ramas** y, después, elige otra rama.
    ![Vínculo de ramas en la página de información general](/assets/images/help/branches/branches-overview-link.png)
1. Haz clic en el menú del selector de ramas.
    ![Menú del selector de ramas](/assets/images/help/branch/branch-selection-dropdown.png)
1. Escriba un nombre único para la nueva rama y seleccione **Crear rama**.
    ![Cuadro de texto de creación de ramas](/assets/images/help/branch/branch-creation-text-box.png)
    
{% ifversion fpt or ghec or ghes > 3.4 %}
### Creación de una rama para una incidencia
Puedes crear una rama para trabajar en una incidencia directamente desde la página de la incidencia y empezar de inmediato. Para obtener más información, consulta "[Creación de una rama para trabajar en una incidencia](/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue)".
{% endif %}

## Cómo eliminar una rama

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**Nota:** Si la rama que quiere eliminar es la predeterminada del repositorio, debe elegir una rama predeterminada nueva antes de eliminarla. Para más información, vea "[Cambio de la rama predeterminada](/github/administering-a-repository/changing-the-default-branch)".

{% endnote %}

Si la rama que quieres borrar está asociada con una solicitud de cambios abierta, debes fusionar o cerrar dicha solicitud antes de borrar la rama. Para más información, vea "[Combinación de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)" o "[Cierre de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. Desplácese hasta la rama que quiera eliminar y, después, haga clic en {% octicon "trash" aria-label="The trash icon to delete the branch" %}.
    ![eliminar la rama](/assets/images/help/branches/branches-delete.png) {% ifversion fpt or ghes > 3.5 or ghae-issue-6763 or ghec %}
1. Si intentas eliminar una rama asociada al menos a una solicitud de incorporación de cambios abierta, debes confirmar que tienes previsto cerrar las solicitudes de incorporación de cambios.
   
   ![Confirmación de la eliminación de una rama](/assets/images/help/branches/confirm-deleting-branch.png){% endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %} Para más información, vea "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)".

## Información adicional

- "[Acerca de las ramas](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[Visualización de ramas en el repositorio](/github/administering-a-repository/viewing-branches-in-your-repository)"
- "[Eliminación y restauración de ramas en una solicitud de incorporación de cambios](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"
