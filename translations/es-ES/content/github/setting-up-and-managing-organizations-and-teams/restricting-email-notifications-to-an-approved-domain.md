---
title: Restringir las notificaciones por correo electrónico para un dominio aprobado
intro: 'Para evitar que se fugue información de la organización a las cuentas personales, los propietarios de la organización pueden restringir las notificaciones por correo electrónico sobre la actividad de una organización para un dominio verificado.'
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
topics:
  - organizations
  - equipos
---

### Acerca de las restricciones de correo electrónico

Cuando se habilita la restricción de notificaciones por correo electrónico en una organización, los miembros solo pueden utilizar una dirección de correo electrónico que se haya asociado con los dominios verificados de dicha organización para recibir notificaciones de correo electrónico sobre la actividad de ésta. Para obtener más información, consulta "[Verificar el dominio de tu organización](/articles/verifying-your-organization-s-domain)".

Los colabores externos no están sujetos a las restricciones en las notificaciones por correo electrónico para los dominios verificados. Para obtener más información sobre los colaboradores externos, consulta la sección "[Niveles de permiso para una organización](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)".

Si tu organización le pertenece a una cuenta empresarial, sus miembros podrán recibir notificaciones de cualquier dominio verificado para la cuenta empresarial adicionalmente a cualquier dominio verificado de la organización. Para obtener más información, consulta la sección "[Verificar el dominio de tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)".

### Restringir las notificaciones por correo electrónico para un dominio aprobado

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.restrict-email-notifications %}
6. Haz clic en **Save ** (guardar).
