---
title: Administrar roles de repositorio personalizados en una organización
intro: 'Puede crear, editar o eliminar roles de repositorio personalizados para tu organización.'
permissions: Organization owners can manage custom repository roles.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: Manage custom roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
ms.openlocfilehash: f7f8be4eda3ecf62a1b587a509881f9fee1a463f
ms.sourcegitcommit: ca040a1871ab5e929b596686ef955b02c5afa051
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/02/2022
ms.locfileid: '148131022'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## Acerca de los roles de repositorio personalizados

{% data reusables.organizations.about-custom-repo-roles %} Para obtener más información, consulta "[Acerca de los roles de repositorio personalizados](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)".

## Crear un rol de repositorio

Para crear un rol de repositorio nuevo, puedes agregar permisos a un rol heredado y otorgarle un nombre a este.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
5. Haga clic en **Create a Role** (Crear un rol).
  ![Captura de pantalla del botón "Crear un rol"](/assets/images/help/organizations/repository-role-create-role.png)
4. Debajo de "Nombre", teclea el nombre del tu rol de repositorio.
  ![Campo en el cual se escribe el nombre del rol del repositorio](/assets/images/help/organizations/repository-role-name.png)
5. Debajo de "Descripción", teclea la descripción de tu rol de repositorio.
  ![Campo en el cual se escribe la descripción del rol de repositorio](/assets/images/help/organizations/repository-role-description.png)
6. Debajo de "Elige un rol a heredar", selecciona el rol que quieras heredar.
  ![Selección de la opción de rol base para el rol de repositorio](/assets/images/help/organizations/repository-role-base-role-option.png)
7. Debajo de "Agregar permisos", utiliza el menú desplegable para seleccionar los permisos que quieras que incluya tu rol personalizado.
  ![Selección de los niveles de permiso desde el menú desplegable del rol de repositorio](/assets/images/help/organizations/repository-role-drop-down.png)
7. Haga clic en **Create role** (Crear rol).
  ![Confirmación de la creación de un rol de repositorio](/assets/images/help/organizations/repository-role-creation-confirm.png)

## Editar un rol de repositorio

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. A la derecha del rol que quiera editar, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Edit** (Editar).
  ![Opción de editar en el menú desplegable de los roles de repositorio](/assets/images/help/organizations/repository-role-edit-setting.png)
4. Edítelo y, después, haga clic en **Update role** (Actualizar rol).
  ![Campos de editar y actualizar roles de repositorio](/assets/images/help/organizations/repository-role-update.png)

## Borrar un rol de repositorio

Si borras un rol de repositorio existente, todas las invitaciones pendientes, equipos y usuarios con el rol personalizado se reasignarán a los permisos base de la organización.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. A la derecha del rol que quiera eliminar, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Delete** (Eliminar).
  ![Opción de editar en el menú desplegable de los roles de repositorio](/assets/images/help/organizations/repository-role-delete-setting.png)
4. Revise los cambios del rol que quiere quitar y, después, haga clic en **Delete role** (Eliminar rol).
  ![Confirmación de la eliminación de un rol de repositorio](/assets/images/help/organizations/repository-role-delete-confirm.png)
