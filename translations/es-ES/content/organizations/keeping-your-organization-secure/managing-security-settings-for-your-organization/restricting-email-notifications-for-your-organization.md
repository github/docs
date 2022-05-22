---
title: Restringir las notificaciones por correo electrónico para tu organización
intro: 'Para prevenir que se fugue la información de la organización en la scuentas personales de correo electrónico, puedes restringir los dominios en donde los miembros pueden recibir este tipo de notificaciones sobre la actividad de la organización.'
permissions: Organization owners can restrict email notifications for an organization.
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain
  - /articles/restricting-email-notifications-to-an-approved-domain
  - /github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization
versions:
  ghes: '>=3.2'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Restringir las notificaciones por correo electrónico
---

## Acerca de las restricciones de correo electrónico

Cuando se habilitan las notificaciones por correo electrónico restringidas en una organización, los miembros solo pueden utilizar direcciones de correco electrónico asociadas con un dominio aprobado o verificado para recibir este tipo de notificaciones sobre la actividad de la organización. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."

{% ifversion ghec %}
{% note %}

**Note:** To restrict email notifications, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.notifications.email-restrictions-verification %}

Los colabores externos no están sujetos a las restricciones en las notificaciones por correo electrónico para los dominios verificados o aprobados. Para obtener más información sobre los colaboradores externos, consulta la sección "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)".

Si tu organización pertenece a una cuenta empresarial, los miembros de dicha organización podrán recibir notificaciones de cualquier dominio que verifique o apruebe esta cuenta, adicionalmente a cualquier dominio que la misma organización verifique o apruebe. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".

## Restringir las notificciones por correo electrónico

Antes de que puedas restringir las notificaciones por correo electrónico para tu organización, debes verificar o aprobar por lo menos un dominio para la organización o un propietario de la empresa debe haber verificado o aprobado por lo menos un dominio para la cuenta empresarial.

Para obtener más información acerca de verificar y aprobar los dominios para una organización, consulta la sección "[Verificar o aprobar un dominio para tu organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.restrict-email-notifications %}
6. Haz clic en **Save ** (guardar).
