---
title: Cambiar la rama predeterminada
intro: 'Si tienes màs de una rama en tu repositorio, puedes configurar cualquiera de ellas como la predeterminada.'
permissions: People with admin permissions to a repository can change the default branch for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/administering-a-repository/setting-the-default-branch
  - /articles/setting-the-default-branch
  - /github/administering-a-repository/changing-the-default-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/changing-the-default-branch
topics:
  - Repositories
shortTitle: Change the default branch
ms.openlocfilehash: e8f88499ab258e5855804288a4f811b38237df97
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136969'
---
## Acerca de cambiar la rama predeterminada

Puedes elegir la rama predeterminada para un repositorio. Èsta es la rama base para las solicitudes de cambios y confirmaciones de còdigo. Para obtener más información sobre la rama predeterminada, consulte "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% ifversion not ghae %} {% note %}

**Nota**: Si usa el puente Git-Subversion, el cambio de la rama predeterminada afectará al contenido de la rama de su `trunk` y al `HEAD` que verá al enumerar referencias del repositorio remoto. Para obtener más información, consulte "[Compatibilidad con clientes de Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients)" y [git-ls-remote](https://git-scm.com/docs/git-ls-remote.html) en la documentación de Git.

{% endnote %} {% endif %}

También puedes renombrar la rama predeterminada. Para obtener más información, consulte "[Renombrar una rama](/github/administering-a-repository/renaming-a-branch)."

{% data reusables.branches.set-default-branch %}

## Requisitos previos

Para cambiar la rama predeterminada, tu repositorio debe tener màs de una rama. Para obtener más información, consulte "[Creación y eliminación de ramas en el repositorio](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)".

## Cambiar la rama predeterminada

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. Debajo de "Rama predeterminada", a la derecha del nombre de rama predeterminado, da clic en el {% octicon "arrow-switch" aria-label="The switch icon with two arrows" %}.
   ![Icono de cambio con dos flechas hacia la derecha del nombre de la rama predeterminada actual](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. Utiliza el menù desplegable y luego da clic en el nombre de una rama.
   ![Menú desplegable para elegir una rama predeterminada nueva](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. Haga clic en **Update**(Actualizar).
   ![Botón "Update" después de elegir una nueva rama predeterminada](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. Lea la advertencia y, a continuación, haga clic en **I understand, update the default branch.** 
   !["I understand, update the default branch." botón para realizar la actualización](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)

