---
title: Convidar pessoas para usar sua instância
intro: 'Ao usar a autenticação integrada para {% data variables.product.product_name %}, você pode convidar pessoas por e-mail para criar uma conta de usuário em sua instância.'
versions:
  ghes: '*'
permissions: 'Enterprise owners can invite people to create a user account on a {% data variables.product.product_name %} instance.'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Convidar pessoas
---

## Sobre convites para novos usuários

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %}

Você pode desabilitar as inscrições não autenticadas e exigir um convite para criar uma nova conta de usuário na sua instância. Para obter mais informações, consulte "[Desabilitando inscrições não autenticadas](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)".

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Convidar pessoas para criar uma conta de usuário

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

Se você tiver configurado o e-mail para notificações em {% data variables.product.product_location %}, sua instância enviará o convite para o endereço de e-mail fornecido. Para obter mais informações, consulte "[Configurar e-mail para notificações](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications).
