---
title: Autorizações do OAuth
redirect_from:
  - /v3/oauth_authorizations
  - /v3/oauth-authorizations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.apps.deprecating_token_oauth_authorizations %}
{% data reusables.apps.deprecating_password_auth %}

Você pode usar esta API para gerenciar o acesso do aplicativo OAuth à sua conta. Você só pode acessar esta API através da [Autenticação básica](/rest/overview/other-authentication-methods#basic-authentication) usando seu nome de usuário e senha, não tokens.

Se você ou seus usuários tiverem a autenticação de dois fatores habilitada, certifique-se de entender como [trabalhar com autenticação de dois fatores](/rest/overview/other-authentication-methods#working-with-two-factor-authentication).

{% include rest_operations_at_current_path %}
