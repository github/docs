---
title: Asignación de grupos de Okta a equipos
shortTitle: Map Okta groups to teams
intro: 'Puedes asignar los grupos de Okta a los equipos en {% data variables.product.prodname_ghe_managed %} para agregar y quitar automáticamente miembros del equipo.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 43185a1593892086064588ceb593a72b9d93ea3f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116538'
---
{% data reusables.saml.okta-ae-sso-beta %}

## Acerca de la asignación de equipos

Si usa Okta como IdP, puede asignar el grupo de Okta a un equipo de {% data variables.product.prodname_ghe_managed %}. Los miembros del grupo de Okta se convertirán de forma automática en miembros del equipo asignado de {% data variables.product.prodname_ghe_managed %}. Para configurar esta asignación, puede configurar la aplicación "GitHub AE" de Okta para insertar el grupo y sus miembros en {% data variables.product.prodname_ghe_managed %}. Después, puede elegir qué equipo de {% data variables.product.prodname_ghe_managed %} se asignará al grupo de Okta.

## Requisitos previos

Usted o el administrador de Okta debe ser un administrador global o un administrador de roles con privilegios en Okta.
 
Debe habilitar el inicio de sesión único de SAML con Okta. Para más información, vea "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

Debe autenticarse en la cuenta empresarial mediante el SSO de SAML y Okta. Para más información, vea "[Autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)".

## Asignación del grupo de Okta a la aplicación "GitHub AE"

1. En el panel de Okta, abra la configuración del grupo.
1. Haga clic en **Administrar aplicaciones**.
  ![Adición del grupo a una aplicación](/assets/images/help/saml/okta-ae-group-add-app.png)

1. A la derecha de "GitHub AE", haga clic en **Asignar**.

  ![Asignación de la aplicación](/assets/images/help/saml/okta-ae-assign-group-to-app.png)

1. Haga clic en **Done**(Listo).

## Inserción del grupo de Okta en {% data variables.product.prodname_ghe_managed %}

Al insertar un grupo de Okta y asignarlo a un equipo, todos los miembros del grupo podrán iniciar sesión en {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %}

1. Haga clic en **Insertar grupos**.

  ![Pestaña de Grupos de Subida](/assets/images/help/saml/okta-ae-push-groups-tab.png)

1. Seleccione el menú desplegable Insertar grupos y haga clic en **Buscar grupos por nombre**.

  ![Botón para agregar grupos](/assets/images/help/saml/okta-ae-push-groups-add.png)

1. Escriba el nombre del grupo que se va a insertar en {% data variables.product.prodname_ghe_managed %} y, después, haga clic en **Guardar**.

  ![Agrega un nombre de grupo](/assets/images/help/saml/okta-ae-push-groups-by-name.png)

## Asignación de un equipo al grupo de Okta

Puede asignar un equipo de la empresa a un grupo de Okta que haya insertado previamente en {% data variables.product.prodname_ghe_managed %}. Después, los miembros del grupo de Okta se convertirán de forma automática en miembros del equipo de {% data variables.product.prodname_ghe_managed %}. Los cambios posteriores en la pertenencia del grupo de Okta se sincronizan automáticamente con el equipo de {% data variables.product.prodname_ghe_managed %}.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
6. En "Grupo de proveedor de identidades", use el menú desplegable y seleccione un grupo de proveedor de identidades de la lista.
    ![Menú desplegable para elegir un grupo de proveedor de identidades](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
7. Haga clic en **Guardar cambios**.

## Comprobación del estado de los equipos asignados

Los propietarios de la empresa pueden usar el panel de administración del sitio para comprobar cómo se asignan los grupos de Okta a los equipos en {% data variables.product.prodname_ghe_managed %}.

1. Para acceder al panel, en la esquina superior derecha de cualquier página, haga clic en {% octicon "rocket" aria-label="The rocket ship" %}.
  ![Icono de cohete para acceder a la configuración de administrador del sitio](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

1. En el panel de la izquierda, haga clic en **Grupos externos**.

  ![Agrega un nombre de grupo](/assets/images/help/saml/okta-ae-site-admin-external-groups.png)

1. Para ver más detalles sobre un grupo, en la lista de grupos externos, haga clic en un grupo.

  ![Lista de grupos externos](/assets/images/help/saml/okta-ae-site-admin-list-groups.png)

1. Los detalles del grupo incluyen el nombre del grupo de Okta, una lista de usuarios de Okta que son miembros del grupo y el equipo mapeado correspondiente en {% data variables.product.prodname_ghe_managed %}. 

  ![Lista de grupos externos](/assets/images/help/saml/okta-ae-site-admin-group-details.png)

## Ver los eventos de log de auditoría para los grupos mapeados

 Para monitorear la actividad de SSO para los grupos mapeados, puedes revisar los siguientes eventos en la bitácora de auditoría de {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.external-group-audit-events %}

{% data reusables.saml.external-identity-audit-events %}

Para más información, vea "[Revisión del registro de auditoría de la organización](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)".
