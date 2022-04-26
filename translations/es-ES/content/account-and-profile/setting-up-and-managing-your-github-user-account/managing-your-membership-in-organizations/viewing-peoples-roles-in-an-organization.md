---
title: Ver los roles de las personas en una organización
intro: 'Puedes ver una lista de personas en tu organización y filtrar por su rol. Para obtener más información sobre los roles de organización, consulta "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".'
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
shortTitle: Visualizar a las personas en una organización
---

## Ver los roles de la organización

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. Verás una lista de personas en tu organización. Para filtrar esta lista por rol, haz clic en **Role (Rol)** y seleccionar el rol que estás buscando. ![click-role](/assets/images/help/organizations/view-list-of-people-in-org-by-role.png)

{% ifversion fpt %}

Si tu organización utiliza {% data variables.product.prodname_ghe_cloud %}, también puedes ver a los propietarios de la empresa que administran los ajustes de facturación y las políticas para todas las organizaciones de esta. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization#view-enterprise-owners-and-their-roles-in-an-organization).

{% endif %}

{% if enterprise-owners-visible-for-org-members %}
## Ver a los propietarios de la empresa y sus roles en la organización

Si una cuenta empresarial administra tu organización, entonces puedes ver a los propietarios de la empresa que administran los ajustes de facturación y las políticas de todas las organizaciones de esta. Para obtener más información sobre las cuentas empresariales, consulta la sección "[Tipos de cuenta de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

También puedes ver si un propietario de empresa tiene un rol específico en la organización. Los propietarios de las empresas también pueden ser un miembro de la organización, tener cualquier otro rol en ella o estar desafiliados con ella.

{% note %}

**Nota:** Si eres el propietario de una organización, también puedes invitar a un propietario de la empresa para que tome un rol en dicha organización. Si un propietario de empresa acepta la invitación, se utilizará una plaza o licencia en la organización de entre aquellas disponibles en tu empresa. Para obtener más información sobre cómo funcionan las licencias, consulta la sección "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)".

{% endnote %}

| **Roles en la empresa** | **Roles en la organización**                     | **Acceso o impacto a la organización**                                                                                                                        |
| ----------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Propietario de empresa  | Desafiliado o sin rol oficial en la organización | No puede acceder al contenido de la organización ni a sus repositorios, pero administra los ajustes y políticas de la empresa que impactan a tu organización. |
| Propietario de empresa  | Propietario de la organización                   | Puede configurar los ajustes de la organización y administrar el acceso a los recursos de la misma mediante equipos, etc.                                     |
| Propietario de empresa  | Miembro de la organización                       | Puede acceder a los recursos y contenido de la organización, tales como repositorios, sin acceder a los ajustes de la misma.                                  |

Para revisar todos los roles en una organización, consulta la sección "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)". {% ifversion ghec %} Los miembros de la organización también pueden tener roles personalizados para un repositorio específico. Para obtener más información, consulta la sección "[Administrar los roles personalizados de repositorio en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".{% endif %}

Para obtener más información sobre el rol de propietario de empresa, consulta la sección "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)".

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. En la barra lateral izquierda, debajo de "Permisos empresariales", haz clic en **Propietarios de la empresa**. ![Captura de pantalla de la opción de "Propietarios de empresa" en el menú de la barra lateral](/assets/images/help/organizations/enterprise-owners-sidebar.png)
5. Ve la lista de propietarios de tu empresa. Si el propietario de la empresa también es un miembro de tu organización, podrás ver su rol en esta.

  ![Captura de pantalla de la lista de propietarios de empresa y de sus roles en la organización](/assets/images/help/organizations/enterprise-owners-list-on-org-page.png)

{% endif %}
