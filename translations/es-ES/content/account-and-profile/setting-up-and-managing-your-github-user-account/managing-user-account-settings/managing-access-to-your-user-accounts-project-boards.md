---
title: Administrar el acceso a los tableros de proyecto de tu cuenta de usuario
intro: As a project board owner, you can add or remove a collaborator and customize their permissions to a project board.
redirect_from:
- /articles/managing-project-boards-in-your-repository-or-organization
- /articles/managing-access-to-your-user-account-s-project-boards
- /articles/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 5a5cf08169fec04a896b05b7934c80cfe9f2eded
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091936"
---
Un colaborador es una persona que tiene permisos a tablero de proyecto de tu propiedad. Un colaborador tendrá como predeterminado permisos de acceso de lectura. Para obtener más información, consulte "[Niveles de permisos para paneles de proyecto propiedad del usuario](/articles/permission-levels-for-user-owned-project-boards)".

## <a name="inviting-collaborators-to-a-user-owned-project-board"></a>Invitar a colaboradores a un tablero de proyecto propiedad del usuario

1. Navegua hasta el tablero de proyecto donde deseas agregar a un colaborador.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. Debajo de "Search by username, full name or email address" (Buscar por nombre de usuario, nombre completo o dirección de correo electrónico), escribe el nombre, el nombre de usuario o el correo electrónico del colaborador {% data variables.product.prodname_dotcom %}.
   ![La sección Collaborators con el nombre de usuario de Octocat escrito en el campo de búsqueda ](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. Por defecto, el nuevo colaborador tiene permisos de lectura. De forma opcional, al lado del nombre del nuevo colaborador, utiliza el menú desplegable y elige un nivel de permiso diferente.
  ![Sección Collaborators con el menú desplegable de permisos seleccionado](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## <a name="removing-a-collaborator-from-a-user-owned-project-board"></a>Eliminar a un colaborador de un tablero de proyecto propiedad del usuario

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
