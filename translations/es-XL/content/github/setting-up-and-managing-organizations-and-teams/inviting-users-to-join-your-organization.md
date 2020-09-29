---
title: Invitar a usuarios a unirse a tu organización
intro: 'Puedes invitar a cualquier persona a que se convierta en miembro de tu organización usando su nombre de usuario o dirección de correo electrónico {% data variables.product.product_name %}.'
redirect_from:
  - /articles/adding-or-inviting-members-to-a-team-in-an-organization/
  - /articles/inviting-users-to-join-your-organization
versions:
  free-pro-team: '*'
---

{% tip %}

**Tips**:
- Solo los propietarios de la organización pueden invitar a usuarios a unirse a una organización. Para obtener más información, consulta "[Niveles de permiso para una organización](/articles/permission-levels-for-an-organization)".
- Si tu organización tiene una suscripción de pago por usuario, debe de existir una licencia sin utilizarse antes de que puedas invitar a un nuevo miembro para que se una a la organización o antes de reinstalar a algún mimbro previo de la misma. Para obtener más información, consulta "[About per-user pricing](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-expiration %}
- Si tu organización [requiere que los miembros usen la autenticación de dos factores](/articles/requiring-two-factor-authentication-in-your-organization), los usuarios que invites deben[habilitar la autenticación de dos factores](/articles/securing-your-account-with-two-factor-authentication-2fa) para poder aceptar la invitación.

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
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
