---
title: Convertir un colaborador externo en un miembro de la organización
intro: Si deseas que un colaborador externo en los repositorios de la organización tenga más permisos dentro de tu organización, puedes {% ifversion fpt or ghec %}invitarlo a convertirse en miembro de{% else %}convertirlo en miembro de{% endif %} la organización.
redirect_from:
- /articles/converting-an-outside-collaborator-to-an-organization-member
- /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can {% ifversion fpt or ghec %}invite users to join{% else %}add users to{% endif %} an organization.
topics:
- Organizations
- Teams
shortTitle: Convert collaborator to member
ms.openlocfilehash: bac55802407b46344c807798e4d8eade5f608e01
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145135006"
---
{% ifversion fpt or ghec %} Si la organización tiene una suscripción de pago por usuario, debe haber disponible una licencia sin usar antes de poder invitar a un nuevo miembro a unirse a la organización o a reinstaurar a un miembro previo de la misma. Para más información, vea "[Acerca de los precios por usuario](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% ifversion not ghae %} Si en la organización es [obligatorio que los miembros usen la autenticación en dos fases](/articles/requiring-two-factor-authentication-in-your-organization), los usuarios {% ifversion fpt or ghec %}que invite deben [habilitar la autenticación en dos fases](/articles/securing-your-account-with-two-factor-authentication-2fa) para poder aceptar la invitación. {% else %}deben [habilitar la autenticación en dos fases](/articles/securing-your-account-with-two-factor-authentication-2fa) para que pueda agregarlos a la organización.{% endif %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %} {% ifversion fpt or ghec %}
5. A la derecha del nombre del colaborador externo que quiera convertir en miembro, use el menú desplegable {% octicon "gear" aria-label="The gear icon" %} y haga clic en **Invitar a la organización**.![Invitación de colaboradores externos a la organización](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png) {% else %}
5. A la derecha del nombre del colaborador externo que quiera convertir en miembro, haga clic en **Invitar a la organización**.![Invitación de colaboradores externos a la organización](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png) {% endif %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role-send-invitation %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## Información adicional

- "[Convertir un miembro de la organización en un colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
