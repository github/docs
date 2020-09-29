---
title: Autorizaciones de OAuth
redirect_from:
  - /v3/oauth_authorizations
  - /v3/oauth-authorizations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.apps.deprecating_token_oauth_authorizations %}
{% data reusables.apps.deprecating_password_auth %}

Puedes utilizar esta API para administrar el acceso que las aplicaciones de OAuth tienen en tu cuenta. Solo puedes acceder a esta API a través de la [Autenticación Básica](/rest/overview/other-authentication-methods#basic-authentication) utilizando tu nombre de usuario y contraseña, y no los tokens.

Si tú o tus usuarios habilitaron la autenticación de dos factores, asegúrate de que entiendes cómo [trabajar con la autenticación de dos factores](/rest/overview/other-authentication-methods#working-with-two-factor-authentication).

{% include rest_operations_at_current_path %}
