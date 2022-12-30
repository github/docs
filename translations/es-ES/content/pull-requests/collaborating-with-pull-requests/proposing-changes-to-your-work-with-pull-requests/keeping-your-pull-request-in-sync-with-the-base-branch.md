---
title: Mantener la solicitud de incorporación de cambios sincronizada con la rama base
intro: 'Después de abrir una solicitud de incorporación de cambios, puedes actualizar la rama principal, que contiene los cambios, con los cambios realizados en la rama base.'
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Update the head branch
ms.openlocfilehash: d7819b45cf3290c09e3b231825e494fd1d82daea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139597'
---
## Acerca de cómo mantener sincronizada la solicitud de incorporación de cambios

Antes de combinar las solicitudes de incorporación de cambios, es posible que se combinen otros cambios en la rama base, lo que hace que la rama principal de la solicitud de incorporación de cambios no esté sincronizada. La actualización de la solicitud de incorporación de cambios con los cambios más recientes de la rama base puede ayudar a detectar problemas antes de la combinación.

Puede actualizar la rama principal de una solicitud de incorporación de cambios desde la línea de comandos o la página de la solicitud de incorporación de cambios. El botón **Update branch** aparece cuando se cumplen todos estos valores:

* No hay conflictos de combinación entre la rama de solicitud de incorporación de cambios y la rama base.
* La rama de solicitud de incorporación de cambios no está actualizada con la rama base.
* La rama base requiere que las ramas estén actualizadas antes de combinarse{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} o tener habilitado el ajuste para sugerir siempre la actualización de ramas{% endif %}.

Para obtener más información, consulte "[Requerir comprobaciones de estado antes de las combinaciones](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}" y "[Administración de sugerencias para actualizar ramas de solicitudes de incorporación de cambios](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches){% endif %}".

Si hay cambios en la rama base que provocan conflictos de combinación en la rama de solicitud de incorporación de cambios, no podrá actualizar la rama hasta que se resuelvan todos los conflictos. Para más información, vea "[Acerca de los conflictos de combinación](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)".

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} En la página de la solicitud de incorporación de cambios, puede actualizar su rama mediante una combinación tradicional o un cambio de base. Una combinación tradicional genera una confirmación de combinación que combina la rama base en la rama principal de la solicitud de incorporación de cambios. El cambio de base aplica los cambios de _la_ rama a la versión más reciente de la rama base. El resultado es una rama con un historial lineal, ya que no se crea ninguna confirmación de combinación.
{% else %} La actualización de la rama desde la página de la solicitud de incorporación de cambios realiza una combinación tradicional. La confirmación de combinación resultante combina la rama base en la rama principal de la solicitud de incorporación de cambios.
{% endif %}

## Actualización de la rama de solicitud de incorporación de cambios

{% data reusables.repositories.sidebar-pr %}

1. En la lista "Pull Requests", haga clic en la solicitud de incorporación de cambios que desea actualizar.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
1. En la sección Merge, cerca de la parte inferior de la página, puede hacer lo siguiente:
   - Haga clic en **Update branch** para realizar una combinación tradicional.
   ![Botón para actualizar una rama](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)
   - Haga clic en el menú desplegable Update branch, haga clic en **Update with rebase** y, a continuación, haga clic en **Rebase branch** para actualizar mediante el cambio de base de la rama base.
   ![Menú desplegable que muestra las opciones de combinación y cambio de base](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png) {% else %}
1. En la sección Merge, cerca de la parte inferior de la página, haga clic en **Update branch** para realizar una combinación tradicional.
  ![Botón para actualizar una rama](/assets/images/help/pull_requests/pull-request-update-branch.png) {% endif %}

## Información adicional

- "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Cambiar la etapa de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)"
- "[Confirmación de cambios en una rama de solicitud de incorporación de cambios creada a partir de una bifurcación](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)"
