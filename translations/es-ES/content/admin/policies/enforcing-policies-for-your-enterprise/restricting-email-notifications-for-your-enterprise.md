---
title: Restringir las notificaciones por correo electrónico para tu empresa
intro: Puedes prevenir las fugas de información de tu empresa hacia cuentas de correo electrónico personales si restringes los dominos en los cuales los miembros pueden recibir notificaciones por correo electrónico sobre la actividad en las organizaciones que pertenecen a tu empresa.
product: '{% data reusables.gated-features.restrict-email-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can restrict email notifications for an enterprise.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policies
redirect_from:
  - /admin/policies/restricting-email-notifications-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/restricting-email-notifications-for-your-enterprise-account
shortTitle: Restringir las notificaciones por correo electrónico
---

## Acerca de las restricciones de correo electrónico para tu empresa

Cuando restringes las notificaciones por correo electrónico, los miembros empresariales solo pueden utilizar una dirección de correo electrónico en un dominio aprobado o verificado para recibir notificaciones por correo electrónico sobre la actividad en las organizaciones que pertenecen a tu empresa.

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

Los dominios pueden heredarse desde la empresa o configurarse para la organización específica. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)" y "[Restringir las notificaciones por correo electrónico para tu organización](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".

{% data reusables.notifications.email-restrictions-verification %}

Si se habilitan las restricciones de correo electrónico para una empresa, los propietarios de la organización no podrán inhabilitarlas en ninguna de las organizaciones que pertenezcan a esta. Si ocurre cualquier cambio que dé como resultado que una organización tenga dominios sin verificar o aprobar, ya se que los herede de una empresa que sea propietaria de la organización o que se configuren para la organización específica, las restricciones por correo electrónico se inhabilitarán para dicha organización.

## Restringir las notificaciones por correo electrónico para tu empresa

Antes de restringir las notificaciones por correo electrónico, debes verificar o aprobar por lo menos un dominio para la empresa. {% ifversion ghec %}Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.organizations.restrict-email-notifications %}
1. Haz clic en **Save ** (guardar).
