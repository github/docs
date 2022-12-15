---
title: Ver los roles de las personas en una organización
intro: You can view a list of the people in your organization and filter by their role. For more information on organization roles, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."
permissions: Organization members can see people's roles in the organization.
redirect_from:
- /articles/viewing-people-s-roles-in-an-organization
- /articles/viewing-peoples-roles-in-an-organization
- /github/setting-up-and-managing-your-github-user-account/viewing-peoples-roles-in-an-organization
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: View people in an organization
ms.openlocfilehash: d492821546b16a7c863d96867ef431362e7056ce
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091901"
---
## <a name="view-organization-roles"></a>Ver los roles de la organización

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Verás una lista de personas en tu organización. Para filtrar la lista por rol, haga clic en **Rol** y seleccione el rol que está buscando.
  ![click-role](/assets/images/help/organizations/view-list-of-people-in-org-by-role.png)

{% ifversion fpt %}

Si tu organización utiliza {% data variables.product.prodname_ghe_cloud %}, también puedes ver a los propietarios de la empresa que administran los ajustes de facturación y las políticas para todas las organizaciones de esta. Para obtener más información, consulte la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization#view-enterprise-owners-and-their-roles-in-an-organization).

{% endif %}

{% if enterprise-owners-visible-for-org-members %}
## <a name="view-enterprise-owners-and-their-roles-in-an-organization"></a>Ver a los propietarios de la empresa y sus roles en la organización

Si una cuenta empresarial administra tu organización, entonces puedes ver a los propietarios de la empresa que administran los ajustes de facturación y las políticas de todas las organizaciones de esta. Para obtener más información sobre las cuentas empresariales, consulte "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

También puedes ver si un propietario de empresa tiene un rol específico en la organización. Los propietarios de las empresas también pueden ser miembros de una organización, tener cualquier otro rol o no estar afiliados a ella.

{% note %}

**Nota:** Si es propietario de una organización, también puede invitar a un propietario de la empresa para que tome un rol en la organización. Si un propietario de empresa acepta la invitación, se utilizará una plaza o licencia en la organización de entre aquellas disponibles en tu empresa. Para obtener más información sobre cómo funcionan las licencias, consulte "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)".

{% endnote %}

| **Rol en la empresa** | **Role en la organización** | **Acceso o impacto en la organización** |
|----|----|----|----|
| Propietario de empresa | No afiliados o sin rol oficial en la organización | No puede acceder al contenido de la organización ni a sus repositorios, pero administra los ajustes y políticas de la empresa que impactan a tu organización. |
| Propietario de empresa | Propietario de la organización | Puede configurar los ajustes de la organización y administrar el acceso a los recursos de la misma mediante equipos, etc. | 
| Propietario de empresa | Miembro de la organización | Puede acceder a los recursos y contenido de la organización, tales como repositorios, sin acceder a los ajustes de la misma. |

Para revisar todos los roles de una organización, consulte "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)". {% if custom-repository-roles %} Un miembro de la organización también puede tener un rol personalizado para un repositorio específico. Para obtener más información, consulte "[Administración de roles de repositorio personalizados para una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".{% endif %}

Para obtener más información sobre los roles de propietarios de empresas, consulte "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)". 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. En la barra lateral izquierda, en "Enterprise permissions", haga clic en **Enterprise owners**.
  ![Captura de pantalla de la opción "Enterprise owners" en el menú de la barra lateral](/assets/images/help/organizations/enterprise-owners-sidebar.png)
5. Ve la lista de propietarios de tu empresa. Si el propietario de la empresa también es un miembro de tu organización, podrás ver su rol en esta.

  ![Captura de pantalla de la lista de propietarios de empresa y de sus roles en la organización](/assets/images/help/organizations/enterprise-owners-list-on-org-page.png)

{% endif %}
