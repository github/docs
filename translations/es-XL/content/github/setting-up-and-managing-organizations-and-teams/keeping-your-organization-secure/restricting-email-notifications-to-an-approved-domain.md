---
title: Restringir las notificaciones por correo electrónico para un dominio aprobado
intro: 'Para evitar que se fugue información de la organización a las cuentas personales, los propietarios de la organización pueden restringir las notificaciones por correo electrónico sobre la actividad de una organización para un dominio verificado.'
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
  - /github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
---
Cuando se habilitan las notificaciones por correo electrónico restringidas en una organización, los miembros solo pueden recibir notificaciones por correo electrónico acerca de la actividad de la organización en una dirección de correo electrónico asociada con el dominio verificado de la organización. Para obtener más información, consulta "[Verificar el dominio de tu organización](/articles/verifying-your-organization-s-domain)".

Los colabores externos no están sujetos a las restricciones en las notificaciones por correo electrónico para los dominios verificados. Para obtener más información sobre los colaboradores externos, consulta la sección "[Niveles de permiso para una organización](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. En "Enforcement preferences" (Preferencias de aplicación), selecciona **Restrict email notifications to domain email** (Restringir las notificaciones por correo electrónico para el correo electrónico del dominio). ![Casilla para restringir las notificaciones por correo electrónico para los correos electrónicos de dominio verificado](/assets/images/help/organizations/restrict-email-notifications-to-domain.png)
6. Haz clic en **Save (Guardar)**.
