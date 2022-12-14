---
title: Eliminar un colaborador de un repositorio personal
intro: When you remove a collaborator from your project, they lose read/write access to your repository. If the repository is private and the person has created a fork, then that fork is also deleted.
redirect_from:
- /articles/how-do-i-remove-a-collaborator
- /articles/what-happens-when-i-remove-a-collaborator-from-my-private-repository
- /articles/removing-a-collaborator-from-a-private-repository
- /articles/deleting-a-private-fork-of-a-private-user-repository
- /articles/how-do-i-delete-a-fork-of-my-private-repository
- /articles/removing-a-collaborator-from-a-personal-repository
- /github/setting-up-and-managing-your-github-user-account/removing-a-collaborator-from-a-personal-repository
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
shortTitle: Remove a collaborator
ms.openlocfilehash: eafe4f8bb1cea085910179a95f17c0b4a1358ad2
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145093167"
---
## <a name="deleting-forks-of-private-repositories"></a>Eliminar bifurcaciones de repositorios privados

Aunque se borren las bifurcaciones de los repositorios privados cuando se elimina un colaborador, la persona seguirá teniendo todos los clones locales de tu repositorio.

## <a name="removing-collaborator-permissions-from-a-person-contributing-to-a-repository"></a>Eliminar los permisos de colaborador de una persona que contribuye con un repositorio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %}
4. A la derecha del colaborador que quiera quitar, haga clic en {% octicon "trash" aria-label="The trash icon" %}.
  ![Botón para quitar a un colaborador](/assets/images/help/repository/collaborator-remove.png) {% else %}
3. En la barra lateral de la izquierda, haga clic en **Colaboradores y equipos**.
  ![Pestaña Colaboradores](/assets/images/help/repository/repo-settings-collaborators.png)
4. Junto al colaborador que quiera quitar, haga clic en el icono **X**.
  ![Vínculo Quitar](/assets/images/help/organizations/Collaborator-Remove.png) {% endif %}

## <a name="further-reading"></a>Información adicional

- "[Eliminación de miembros de la organización de un equipo](/articles/removing-organization-members-from-a-team)"
- "[Eliminación de un colaborador externo de un repositorio de la organización](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
