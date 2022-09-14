---
title: Administración del acceso a los paneles de proyecto de la cuenta personal
intro: 'Como propietario de un tablero de proyecto, puedes agregar o eliminar a un colaborador y personalizar sus permisos a un tablero de proyecto.'
redirect_from:
  - /articles/managing-project-boards-in-your-repository-or-organization
  - /articles/managing-access-to-your-user-account-s-project-boards
  - /articles/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 4cbf968cee79ac8e4aafbc5eea8220949cf80a30
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145165218'
---
Un colaborador es una persona que tiene permisos a tablero de proyecto de tu propiedad. Un colaborador tendrá como predeterminado permisos de acceso de lectura. Para obtener más información, consulte "[Niveles de permisos para paneles de proyecto propiedad del usuario](/articles/permission-levels-for-user-owned-project-boards)".

## Invitar a colaboradores a un tablero de proyecto propiedad del usuario

1. Navegua hasta el tablero de proyecto donde deseas agregar a un colaborador.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. Debajo de "Search by username, full name or email address" (Buscar por nombre de usuario, nombre completo o dirección de correo electrónico), escribe el nombre, el nombre de usuario o el correo electrónico del colaborador {% data variables.product.prodname_dotcom %}.
   ![La sección Collaborators con el nombre de usuario de Octocat escrito en el campo de búsqueda ](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. Por defecto, el nuevo colaborador tiene permisos de lectura. De forma opcional, al lado del nombre del nuevo colaborador, utiliza el menú desplegable y elige un nivel de permiso diferente.
  ![Sección Collaborators con el menú desplegable de permisos seleccionado](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## Eliminar a un colaborador de un tablero de proyecto propiedad del usuario

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
