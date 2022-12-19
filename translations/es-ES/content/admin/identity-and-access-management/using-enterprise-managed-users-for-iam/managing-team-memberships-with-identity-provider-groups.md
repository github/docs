---
title: Administrar membrecías de equipo con grupos de proveedor de identidad
shortTitle: Manage teams with your IdP
intro: 'Puedes administrar la pertenencia de equipos y organización en {% data variables.product.product_name %} mediante tu proveedor de identidad (IdP) si conectas grupos de IdP con equipos en tu {% data variables.enterprise.prodname_emu_enterprise %}.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/managing-team-memberships-with-identity-provider-groups
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
ms.openlocfilehash: 179835d6642cd5718a565869337b5420b29407a5
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160828'
---
## Acerca de la administración de equipos con {% data variables.product.prodname_emus %}

Con {% data variables.product.prodname_emus %}, puede administrar la pertenencia a equipos y organizaciones dentro de su empresa a través de su IdP mediante la conexión de los equipos de {% data variables.product.prodname_dotcom %} con grupos de IdP. Cuando conectas un equipo en una de las organizaciones de tu empresa a un grupo de IdP, los cambios a la membrecía desde el grupo de IdP se reflejan automáticamente en tu empresa, lo cual reduce la necesidad de hacer actualizaciones manuales y scripts personalizados. 

Cuando un cambio a un grupo de IdP o una conexión de equipo nueva da como resultado que un {% data variables.enterprise.prodname_managed_user %} se una a un equipo en una organización de la cual no fueran ya miembros, el {% data variables.enterprise.prodname_managed_user %} se agregará automáticamente a dicha organización. Cuando desconectas un grupo de un equipo, los usuarios que se convirtieron en miembros de la organización a través de la membrecía de equipo se eliminan de esta si no se les asignó una membrecía en dicha organización por cualquier otro medio.

{% note %}

**Nota:** Los propietarios de la organización también pueden agregar datos {% data variables.enterprise.prodname_managed_users %} a las organizaciones manualmente, siempre y cuando las cuentas ya se hayan aprovisionado a través de SCIM.

{% endnote %}

Cuando cambia la membrecía de grupo en tu IdP, este envía una solicitud de SCIM con los cambios a {% data variables.product.prodname_dotcom_the_website %} de acuerdo con la programación que determinó tu IdP, así que el cambio podría no reflejarse de inmediato. Cualquier solicitud que cambie la membrecía de organización o equipo de se registrará en la bitácora de auditoría como cambios que realizó la cuenta que se utilizó para configurar el aprovisionamiento de usuarios.

Los equipos que se conectan con los grupos de IdP no pueden ser equipos padres ni hijos de otro equipo. Si el equipo que quieres conectar a un grupo de IdP es un equipo padre o hijo, te recomendamos crear un equipo nuevo o eliminar las relaciones anidadas que hacen de tu equipo un equipo padre.

Para administrar el acceso a los repositorios de cualquier equipo en tu empresa, incluyendo los equipos conectados a un grupo de IdP, debes hacer cambios en {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulte "[Administración del acceso de equipo a un repositorio de la organización](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".

## Requisitos para conectar grupos de IdP con equipos

Para poder conectar un grupo de IdP con un equipo en {% data variables.product.prodname_dotcom %}, debe asignar el grupo a la aplicación {% data variables.product.prodname_emu_idp_application %} en el IdP. Para obtener más información, consulta "[Acerca del aprovisionamiento de SCIM para {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users)".

Puedes conectar a un equipo de tu empresa a un grupo de IdP. Puedes asignar el mismo grupo de IdP a varios equipos de tu empresa.

Si estás conectando un equipo a un grupo de IdP, primero debes eliminar a cualquier miembro que se haya agregado manualmente. Después de que conectas a un equipo de tu empresa a un grupo de IdP, tu administrador de IdP debe hacer cambios de membrecía de equipo a través de tu proveedor de identidad. No puedes administrar la membrecía de los equipos en {% data variables.product.prodname_dotcom_the_website %}.

## Crear un equipo nuevo conectado a un grupo de IdP

Cualquier miembro de una organización puede crear un equipo nuevo y conectarlo a un grupo de IdP. 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %}
1. Para conectar a un equipo, selecciona el menú desplegable de "Grupos de Proveedor de Identidad" y haz clic en aquél que quieras conectar.
    ![Menú desplegable para elegir grupos de proveedores de identidades](/assets/images/help/teams/choose-an-idp-group.png) {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}

## Administrar la conexión entre un equipo existente y un grupo de IdP

Los propietarios organizacionales y mantenedores de equipos pueden administrar la conexión existente entre un grupo de IdP y un equipo.

{% note %}

**Nota**: Antes de conectar un equipo existente en {% data variables.product.prodname_dotcom_the_website %} a un grupo de IdP por primera vez, primero se deben quitar todos los miembros del equipo en {% data variables.product.prodname_dotcom_the_website %}. Para más información, vea "[Eliminación de miembros de la organización de un equipo](/github/setting-up-and-managing-organizations-and-teams/removing-organization-members-from-a-team)".

{% endnote %}

{% data reusables.profile.access_profile %}

{% data reusables.profile.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. Opcionalmente, debajo de "Grupo de Proveedor de Identidad", a la derecha del grupo de IdP que quieres desconectar, haz clic en {% octicon "x" aria-label="X symbol" %}. 
    ![Anulación de la selección de un grupo de IdP conectado desde el equipo de GitHub](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png)
1. Para conectar un grupo de IdP, debajo de "Grupo de Proveedor de Identidad"; selecciona el menú desplegable y haz clic en un grupo de proveedor de identidad de la lista.
    ![Menú desplegable para elegir un grupo de proveedor de identidades](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
1. Haga clic en **Guardar cambios**.

## Ver los grupos de IdP, la membrecía de grupos y los equipos conectados

Puedes revisar una lista de grupos de IdP, ver cualquier equipo que esté conectado en un grupo de IdP y ver la membrecía de cada grupo de IdP en {% data variables.product.product_name %}. Debes editar la membrecía de un grupo en tu IdP.

{% data reusables.enterprise-accounts.access-enterprise %}
1. Para ver una lista de grupos de IdP, en la barra lateral izquierda, haga clic en {% octicon "key" aria-label="The key icon" %} **Identity provider** (Proveedor de identidades).
    ![Captura de pantalla que muestra la pestaña "Identity provider" (Proveedor de identidades) en la barra lateral de la empresa](/assets/images/help/enterprises/enterprise-account-identity-provider-tab.png)
2. Para ver a los miembros y equipos conectados a un grupo de IdP, haz clic en el nombre del grupo.
    ![Captura de pantalla que muestra una lista de grupos de IdP en la que el nombre del grupo está resaltado](/assets/images/help/enterprises/select-idp-group.png)
4. Para ver los equipos conectados al grupo de IdP, haga clic en **Teams** (Equipos). 
    ![Captura de pantalla que muestra el botón "Teams" (Equipos)](/assets/images/help/enterprises/idp-groups-team-switcher.png)
