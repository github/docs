---
title: Restringir las notificaciones por correo electrónico para tu empresa
intro: Puedes prevenir las fugas de información de tu empresa hacia cuentas de correo electrónico personales si restringes los dominos en los cuales los miembros pueden recibir notificaciones por correo electrónico sobre la actividad en las organizaciones que pertenecen a tu empresa.
product: '{% data reusables.gated-features.restrict-email-domain %}'
versions:
  ghec: '*'
  ghes: '>=3.2'
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

## About email restrictions for your enterprise

When you restrict email notifications, enterprise members can only use an email address in a verified or approved domain to receive email notifications about activity in organizations owned by your enterprise.

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

The domains can be inherited from the enterprise or configured for the specific organization. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)" y "[Restringir las notificaciones por correo electrónico para tu organización](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".

{% data reusables.notifications.email-restrictions-verification %}

If email restrictions are enabled for an enterprise, organization owners cannot disable email restrictions for any organization owned by the enterprise. If changes occur that result in an organization having no verified or approved domains, either inherited from an enterprise that owns the organization or for the specific organization, email restrictions will be disabled for the organization.

## Restringir las notificaciones por correo electrónico para tu empresa

Before you can restrict email notifications for your enterprise, you must verify or approve at least one domain for the enterprise. {% ifversion ghec %} For more information, see "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.organizations.restrict-email-notifications %}
1. Haz clic en **Save ** (guardar).
