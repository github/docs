---
title: Mantener la continuidad de propiedad para tu organización
intro: Las organizaciones pueden tener más de un propietario para evitar las intermitencias de propiedad.
redirect_from:
  - /articles/changing-a-person-s-role-to-owner
  - /articles/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/managing-ownership-continuity-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization
permissions: Organization owners can promote any member of an organization to an organization owner.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Maintain ownership continuity
ms.openlocfilehash: 636982e8985a79e617b01220df8a63256c874b70
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179563'
---
## Acerca de mantener la continuidad de propiedad para tu organización

{% data reusables.organizations.org-ownership-recommendation %}

Los propietarios de una organización tienen acceso administrativo completo a la misma. {% data reusables.organizations.new-org-permissions-more-info %}

{% note %}

**Nota**: Como propietario de la organización, puede cambiar el rol de otros miembros y propietarios de la organización. No puedes cambiar tu propio rol. 

{% endnote %}

{% ifversion enterprise-owner-join-org %} Si la organización es propiedad de una cuenta de empresa, cualquier propietario de la empresa podrá convertirse en propietario de la organización. Para obtener más información, consulte "[Administración de su rol en una organización que pertenece a su empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".
{% endif %}

## Designar un propietario de organización

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Selecciona la persona o las personas que quisieras promover a propietario.
  ![Lista de miembros con dos miembros seleccionados](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Encima de la lista de miembros, use el menú desplegable y haga clic en **Cambiar rol**.
  ![Menú desplegable con la opción para eliminar miembros](/assets/images/help/teams/user-bulk-management-options.png)
6. Seleccione un rol nuevo para la persona o personas, y después haga clic en **Cambiar rol**.
  ![Botones de opción con roles de propietario y miembros, y botón Cambiar rol](/assets/images/help/teams/select-and-confirm-new-role-bulk.png)
