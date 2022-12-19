---
title: Convertir a un miembro de la organización en un colaborador externo
intro: Si un miembro actual de tu organización solo necesita acceso a determinados repositorios, como consultores o empleados temporales, puedes convertirlo en colaborador externo.
permissions: Organization owners can convert an organization member to an outside collaborator.
redirect_from:
- /articles/converting-an-organization-member-to-an-outside-collaborator
- /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-member-to-an-outside-collaborator
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Convert member to collaborator
ms.openlocfilehash: 4b9330559895ec96cb6c842d89dbe4e9a8773685
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146754602"
---
## Acerca de la conversión de miembros de la organización a colaboradores externos

Puedes convertir a un miembro de una organización en colaborador externo. Para obtener más información sobre los colaboradores externos, consulte "[Agregar colaboradores externos a repositorios de la organización](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".

{% ifversion fpt or ghec %}Si la organización es propiedad de una empresa, se puede restringir la conversión de{% elsif ghes or ghae %}Conversión de{% endif %} un miembro de la organización en colaborador externo. Para más información, consulta "[Aplicación de directivas de administración de repositorios en la empresa]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-{% ifversion fpt or ghec %}outside-{% endif %}collaborators-to-repositories){% ifversion ghec or ghes or ghae %}". {% elsif fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}. {% endif %}

{% data reusables.organizations.outside-collaborators-use-seats %}{% data reusables.organizations.outside_collaborator_forks %}

Luego de convertir a un miembro de la organización en un colaborador externo, solo tendrá acceso a los repositorios que permite su membresía de equipo actual. La persona ya no será un miembro explícito de la organización, y ya no podrá:

- Crear equipos
- Ver todos los miembros y equipos de la organización
- @mention cualquier equipo visible
- Ser un mantenedor del equipo

Para más información, vea "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Recomendamos revisar el acceso del miembro de la organización a los repositorios para garantizar que su acceso sea el que esperas. Para más información, vea "[Administración del acceso de un usuario a un repositorio de la organización](/articles/managing-an-individual-s-access-to-an-organization-repository)".

Al convertir un miembro de la organización en un colaborador externo, sus privilegios como miembros de la organización se guardan durante tres meses para que puedas restaurar sus privilegios de pertenencia si {% ifversion fpt or ghec %} los invitas a volver a unirse{% else %} los agregas de nuevo a{% endif %} tu organización durante ese plazo de tiempo. Para más información, vea "[Readmisión de un antiguo miembro de la organización](/articles/reinstating-a-former-member-of-your-organization)".

## Convertir a un miembro de la organización en un colaborador externo

{% note %}

**Nota**: Es posible que no puedas convertir un miembro de la organización a un colaborador externo, si un propietario de la organización{% ifversion not fpt %} o propietario de empresa{% endif %} ha restringido la capacidad de agregar colaboradores externos.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Selecciona la persona o las personas a quienes deseas convertir en colaboradores externos.
  ![Lista de miembros con dos miembros seleccionados](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Encima de la lista de miembros, utiliza el menú desplegable y haz clic en **Convert to outside collaborator** (Convertir en colaborador externo).
  ![Menú desplegable con la opción para convertir miembros en colaboradores externos](/assets/images/help/teams/user-bulk-management-options.png)
6. Lee la información sobre cómo convertir miembros en colaboradores externos y luego haz clic en **Convert to outside collaborator** (Convertir en colaborador externo).
  ![Información sobre permisos de colaboradores externos y botón para convertir en colaboradores externos](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

## Información adicional

- "[Adición de colaboradores externos a los repositorios en la organización](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Eliminación de un colaborador externo de un repositorio de la organización](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
- "[Conversión de un colaborador externo en un miembro de la organización](/articles/converting-an-outside-collaborator-to-an-organization-member)"
