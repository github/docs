---
title: Inviting people to use your instance
intro: 'When you use built-in authentication for {% data variables.product.product_name %}, you can invite people by email address to create a user account on your instance.'
versions:
  ghes: '*'
permissions: 'Enterprise owners can invite people to create a user account on a {% data variables.product.product_name %} instance.'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Invite people
---

## About invitations for new users

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %}

You can disable unauthenticated sign-ups and require an invitation to create a new user account on your instance. Para obtener más información, consulta la sección "[Inhabilitar los inicios de sesión no autenticados](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)".

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Inviting people to create a user account

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

If you've configured email for notifications on {% data variables.product.product_location %}, your instance will send the invitation to the provided email address. Para obtener más información, consulta la sección "[Configurar las notificaciones de correo electrónico](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)".
