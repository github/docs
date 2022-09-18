---
title: Administrar la política de bifurcación para tu organización
intro: 'Puedes permitir o evitar la bifurcación de cualquier repositorio privado{% ifversion ghes or ghae or ghec %} e interno{% endif %} propiedad de su organización.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage forking policy
ms.openlocfilehash: 11aad8ee3c08b62f6bc352f91b6d804f35eee6e6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145119298'
---
De manera predeterminada, las nuevas organizaciones se configuran para no permitir la bifurcación de repositorios privados{% ifversion ghes or ghec or ghae %} e internos{% endif %}.

Si permite la bifurcación de repositorios privados{% ifversion ghes or ghec or ghae %} e internos{% endif %} en el nivel de organización, también puede configurar la capacidad de bifurcar un repositorio privado{% ifversion ghes or ghec or ghae %} o interno{% endif %}. Para obtener más información, consulte "[Administración de la directiva de bifurcación para el repositorio](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. En "Repository forking", seleccione **Allow forking of private {% ifversion ghec or ghes or ghae %}and internal {% endif %}repositories**.

   {%- ifversion fpt %} ![ Casilla para permitir o no permitir las bifurcaciones en la organización](/assets/images/help/repository/allow-disable-forking-fpt.png) {%- elsif ghes or ghec or ghae %} ![Casilla para permitir o no permitir las bifurcaciones en la organización](/assets/images/help/repository/allow-disable-forking-organization.png) {%- endif %}
6. Haga clic en **Save**(Guardar).

## Información adicional

- "[Acerca de las bifurcaciones](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
