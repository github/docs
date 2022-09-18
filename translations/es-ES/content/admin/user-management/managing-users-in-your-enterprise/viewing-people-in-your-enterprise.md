---
title: Visualizar a las personas en tu empresa
intro: 'Para auditar el acceso a los recursos que pertenezcan a tu empresa o al uso de licencias de usuario, los propietarios de la empresa pueden ver a cada administrador y miembro de la misma.'
permissions: Enterprise owners can view the people in an enterprise.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
ms.openlocfilehash: 11d7446ad93035cea55ee3be6f84e3b411ea4578
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578654'
---
## Acerca de la lista de personas de tu empresa

Para auditar el acceso a los recursos de la empresa y administrar el uso de licencias, puedes ver una lista de todas las personas que tienen acceso a tu empresa. 

Puedes ver todos los miembros de la empresa actuales y administradores de empresa{% ifversion ghec %}, así como invitaciones pendientes para convertirse en miembros y administradores{% endif %}. Para facilitar el consumo de esta información, puedes buscar y filtrar las listas.

{% ifversion ghec %}

Si {% data variables.product.prodname_github_connect %} está configurado para tu empresa, al filtrar una lista de personas de la empresa, se aplican las siguientes limitaciones.

- El filtro para el estado de autenticación en dos fases (2FA) no muestra a las personas que solo tienen una cuenta en una instancia de {% data variables.product.prodname_ghe_server %}.
- Si combinas el filtro para cuentas de instancias de {% data variables.product.prodname_ghe_server %} con el filtro para organizaciones o el estado de autenticación en dos fases, no verá ningún resultado.

Para obtener más información acerca de {% data variables.product.prodname_github_connect %}, consulta los siguientes artículos.

- "[Acerca de {% data variables.product.prodname_github_connect %}](/enterprise-server/admin/configuration/configuring-github-connect/about-github-connect)" en la documentación de {% data variables.product.prodname_ghe_server %}
- "[Acerca de {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect)" en la documentación de {% data variables.product.prodname_ghe_managed %}

{% endif %}

## Visualización de administradores de empresa

Puedes ver todos los propietarios actuales de la empresa{% ifversion ghec %} y los administradores de facturación{% endif %} de tu empresa.{% ifversion enterprise-membership-view-improvements %} Puedes ver información útil sobre cada administrador{% ifversion ghec %} y filtrar la lista por rol{% endif %}.{% endif %} Para encontrar una persona específica, busca por su nombre de usuario o nombre para mostrar.

{% ifversion ghes > 3.5 %} Los propietarios de empresa cuyas cuentas están suspendidas se incluyen en la lista de administradores de empresa y se identifican como suspendidas. Debes considerar la posibilidad de degradar a los propietarios suspendidos que observes. Para obtener más información, vea "[Promoción o degradación de un administrador de sitio](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator#demoting-a-site-administrator-from-the-enterprise-settings)".
{% endif %}

{% ifversion not ghae %} También puedes quitar un administrador. Para obtener más información, consulta "[Invitación a usuarios a administrar la empresa](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account)".
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}

## Visualización de miembros {% ifversion enterprise-membership-view-improvements %}{% else %}y colaboradores externos{% endif %}

Puedes ver todos los miembros actuales {% ifversion enterprise-membership-view-improvements %}{% else %}o los colaboradores externos{% endif %} de tu empresa. Puedes ver información útil sobre cada cuenta y filtrar la lista de maneras útiles, como por rol. Puedes encontrar una persona específica al buscar por su nombre de usuario o nombre que se muestra.

Puedes ver más información sobre el acceso de la persona a tu empresa, como las organizaciones a las que pertenece la persona, haciendo clic en el nombre de la persona.

{% ifversion remove-enterprise-members %} También puedes quitar cualquier miembro de la empresa de todas las organizaciones que pertenecen a la empresa. Para obtener más información, consulta "[Eliminar a un miembro de tu empresa](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)".
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}{% ifversion enterprise-membership-view-improvements %}{% else %}
1. De manera opcional, para ver una lista de colaboradores externos en lugar de una lista de miembros, haga clic en **Outside collaborators** (Colaboradores externos).

   ![Pestaña Colaboradores externos en la página de miembros de la empresa](/assets/images/help/business-accounts/outside-collaborators-tab.png){% endif %}

{% ifversion enterprise-membership-view-improvements %}
## Visualización de colaboradores externos

Puedes ver todos los colaboradores externos actuales de tu empresa. Puedes ver información útil sobre cada colaborador y filtrar la lista de maneras útiles, como por organización. Puedes encontrar una persona específica al buscar por su nombre de usuario o nombre para mostrar.

Puedes ver más información sobre el acceso de la persona a tu empresa, como una lista de todos los repositorios a los que tiene acceso el colaborador, haciendo clic en el nombre de la persona.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. En "Personas", haz clic en **Colaboradores externos**.

  ![Pestaña Colaboradores externos en la barra lateral de configuración empresarial]{% ifversion ghec%}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% else %}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% endif %}
  
{% endif %}

{% ifversion ghec %}
## Visualización de invitaciones pendientes

Puedes ver todas las invitaciones pendientes para convertirse en miembros, administradores o colaboradores externos de tu empresa. Puedes filtrar la lista de maneras útiles, por ejemplo, por organización. Puedes encontrar una persona específica al buscar por su nombre de usuario o nombre que se muestra.

En la lista de miembros pendientes, para cualquier cuenta individual, puedes cancelar todas las invitaciones para unirse a las organizaciones que pertenecen a tu empresa. Esto no cancela ninguna invitación para que esa misma persona se convierta en administrador de empresa o colaborador externo. 

{% note %}

**Nota:** Si se ha aprovisionado una invitación mediante SCIM, debes cancelar la invitación a través del proveedor de identidades (IdP) en lugar de en {% data variables.product.prodname_dotcom %}.

{% endnote %}

Si usas {% data variables.product.prodname_vss_ghe %}, la lista de invitaciones pendientes incluye todos los suscriptores de {% data variables.product.prodname_vs %} que no se han unido a ninguna de las organizaciones de {% data variables.product.prodname_dotcom %}, incluso si el suscriptor no tiene una invitación pendiente para unirse a una organización. Para obtener más información sobre cómo obtener acceso de suscriptores de {% data variables.product.prodname_vs %} a {% data variables.product.prodname_enterprise %}, consulta "[Configuración de {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)."

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. En "Personas", haz clic en **Invitaciones pendientes**.

   ![Captura de pantalla de la pestaña "Invitaciones pendientes" en la barra lateral](/assets/images/help/enterprises/pending-invitations-tab.png)
1. Opcionalmente, para cancelar todas las invitaciones de una cuenta para unirse a las organizaciones que pertenecen a tu empresa, a la derecha de la cuenta, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y, a continuación, en **Cancelar invitación**.

   ![Captura de pantalla del botón "Cancelar invitación"](/assets/images/help/enterprises/cancel-enterprise-member-invitation.png)
1. Opcionalmente, para ver las invitaciones pendientes de administradores de empresa o colaboradores externos, en "Miembros pendientes", haz clic en **Administradores** o **Colaboradores externos**.

   ![Captura de pantalla de las pestañas "Miembros", "Administradores" y "Colaboradores externos"](/assets/images/help/enterprises/pending-invitations-type-tabs.png)

## Visualizar a los miembros suspendidos en {% data variables.product.prodname_emu_enterprise %}

Si tu empresa utiliza {% data variables.product.prodname_emus %}, también puedes ver a los usuarios suspendidos. Los usuarios suspendidos son miembros que se desaprovisionaron después de que se desasignaron de la aplicación de {% data variables.product.prodname_emu_idp_application %} o que se borraron del proveedor de identidad. Para obtener más información, vea "[Acerca de los usuarios administrados empresariales](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Para ver una lista de miembros suspendidos, sobre la lista de miembros activos, haz clic en **Suspended** (Suspendido).
  ![Captura de pantalla en la que se muestra la opción "Suspendido"](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## Visualizar usuarios inactivos

Puedes ver una lista de usuarios inactivos {% ifversion ghes or ghae %} a quienes no se les ha suspendido y {% endif %}quienes no son administradores de sitio. {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} Para obtener más información, vea "[Administración de usuarios inactivos](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)".

{% ifversion ghec or ghes %}
## Visualización de miembros sin una dirección de correo electrónico de un dominio comprobado

Puedes ver una lista de los miembros de tu empresa que no tienen una dirección de correo electrónico de un dominio comprobado asociado a su cuenta de usuario en {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. En "Preferencias de notificación", haz clic en el vínculo {% octicon "eye" aria-label="The github eye icon" %} **Visualización de los miembros de la empresa sin un correo electrónico de dominio aprobado o comprobado**.
{% endif %}

## Información adicional

- "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)"
