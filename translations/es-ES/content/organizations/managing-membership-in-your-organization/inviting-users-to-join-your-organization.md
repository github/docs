---
title: Invitar a los usuarios a unirse a su organización
intro: 'Puedes invitar a cualquier persona para que se convierta en miembro de tu organización, utilizando su nombre de usuario o dirección de correo electrónico para {% data variables.product.product_location %}.'
permissions: Organization owners can invite users to join an organization.
redirect_from:
  - /articles/adding-or-inviting-members-to-a-team-in-an-organization
  - /articles/inviting-users-to-join-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Invite users to join
ms.openlocfilehash: f0b5d1c41fc5f348077a77d29ac4be309c1cad0f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109777'
---
## Acerca de las invitaciones a una organización

Si tu organización tiene una suscripción de pago por usuario, debe de existir una licencia sin utilizarse antes de que puedas invitar a un nuevo miembro para que se una a la organización o antes de reinstaurar a algún miembro previo de la misma. Para obtener más información, consulta "[Acerca de los precios por usuario](/articles/about-per-user-pricing)". 

{% data reusables.organizations.org-invite-scim %}

Si tu organización requiere que los miembros utilicen autenticación bifactorial, los usuarios que invites deben habilitarla antes de aceptar la invitación. Para obtener más información, consulta "[Requerir la autenticación en dos fases en la organización](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)" y "[Protección de la cuenta con la autenticación en dos fases (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)".

{% ifversion fpt %}Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} pueden{% else %}Tú puedes{% endif %} implementar SCIM para agregar, administrar y eliminar el acceso de los miembros de la organización a {% data variables.product.prodname_dotcom_the_website %} mediante un proveedor de identidad (IdP). Para obtener más información, consulta "[Acerca de SCIM para las organizaciones](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

## Invitar a un usuario para que se una a tu organización

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.invite_to_org %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role %} {% data reusables.organizations.add-user-to-teams %} {% data reusables.organizations.send-invitation %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}

## Información adicional
- "[Adición de miembros de la organización a un equipo](/articles/adding-organization-members-to-a-team)"
