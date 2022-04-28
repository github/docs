---
title: Desabilitar assinaturas não autenticadas
redirect_from:
  - /enterprise/admin/articles/disabling-sign-ups
  - /enterprise/admin/user-management/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/disabling-unauthenticated-sign-ups
  - /admin/authentication/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
intro: 'Se você estiver usando a autenticação integrada para {% data variables.product.product_location %}, você pode impedir que pessoas não autenticadas criem novas contas de usuário em sua instância.'
permissions: 'Site administrators can disable unauthenticated sign-ups on a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Bloquear inscrição não autenticada
---

## Sobre inscrições não autenticadas

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %} Você pode desabilitar inscrições não autenticadas e exigir um convite para criar uma nova conta de usuário em sua instância.

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Desabilitar assinaturas não autenticadas

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Desmarque a seleção na caixa **Enable sign-up** (Habilitar assinatura). ![Caixa de seleção Enable sign-up (Habilitar assinatura)](/assets/images/enterprise/management-console/enable-sign-up.png)
{% data reusables.enterprise_management_console.save-settings %}
