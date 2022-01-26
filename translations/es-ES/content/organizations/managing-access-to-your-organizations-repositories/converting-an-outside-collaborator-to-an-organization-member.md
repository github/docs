---
title: Convertir un colaborador externo en un miembro de la organización
intro: 'Si deseas que un colaborador externo en los repositorios de la organización tenga más permisos dentro de tu organización, puedes {% ifversion fpt or ghec %}invitarlo a convertirse en miembro de{% else %}convertirlo en miembro de{% endif %} la organización.'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: 'Organization owners can {% ifversion fpt or ghec %}invite users to join{% else %}add users to{% endif %} an organization.'
topics:
  - Organizations
  - Teams
shortTitle: Convertir a un colaborador en miembro
---

{% ifversion fpt or ghec %}
Si tu organización está en una suscripción de pago por usuario, debes contar con una licencia sin utilizarse antes de que puedas invitar a un nuevo miembro a unirse a tu organización o a reinstalar a un miembro previo de la misma. Para obtener más información, consulta "[About per-user pricing](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% ifversion not ghae %}
Si tu organización [requiere que los miembros utilicen autenticación bifactorial](/articles/requiring-two-factor-authentication-in-your-organization), los usuarios {% ifversion fpt or ghec %}que invites deben [habilitar la autenticación bifactorial](/articles/securing-your-account-with-two-factor-authentication-2fa) antes de que puedan aceptar la invitación.{% else %}deben [habilitar la autenticación bifactorial](/articles/securing-your-account-with-two-factor-authentication-2fa) antes de que puedas agregarlos a tu organización.{% endif %}
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
{% ifversion fpt or ghec %}
5. A la derecha del nombre del colaborador externo que quieres hacer miembro, usa el menú desplegable {% octicon "gear" aria-label="The gear icon" %} y haz clic en **Invitar a la organización**.![Invitar colaboradores externos a la organización](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png)
{% else %}
5. A la derecha del nombre del colaborador externo que quieres hacer miembro, haz clic en **Invite to organization** (Invitar a la organización).![Invitar colaboradores externos a la organización](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png)
{% endif %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role-send-invitation %}
{% ifversion fpt or ghec %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## Leer más

- "[Convertir a un miembro de la organización en colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
