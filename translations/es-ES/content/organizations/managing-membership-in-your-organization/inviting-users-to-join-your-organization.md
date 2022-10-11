---
title: Invitar a usuarios para que se unan a tu organización
intro: 'Puedes invitar a cualquier persona a que se convierta en miembro de tu organización usando su nombre de usuario o dirección de correo electrónico {% data variables.product.product_name %}.'
permissions: Organization owners can invite users to join an organization.
redirect_from:
  - /articles/adding-or-inviting-members-to-a-team-in-an-organization/
  - /articles/inviting-users-to-join-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

{% tip %}

**Tips**:
- Si tu organización tiene una suscripción de pago por usuario, debe de existir una licencia sin utilizarse antes de que puedas invitar a un nuevo miembro para que se una a la organización o antes de reinstaurar a algún miembro previo de la misma. Para obtener más información, consulta "[About per-user pricing](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-expiration %}
- Si tu organización requiere que los miembros utilicen autenticación bifactorial, los usuarios que invites deben habilitarla antes de aceptar la invitación. Para obtener más información, consulta las secciones "[Requerir autenticación bifactorial en tu organización](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)" y "[Asegurar tu cuenta con la autenticación bifactorial (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)".

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.invite_to_org %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role %}
{% data reusables.organizations.add-user-to-teams %}
{% data reusables.organizations.send-invitation %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}

### Leer más
- "[Agregar miembros de la organización a un equipo](/articles/adding-organization-members-to-a-team)"
