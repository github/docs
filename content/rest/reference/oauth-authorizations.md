---
title: OAuth Authorizations
redirect_from:
  - /v3/oauth_authorizations
  - /v3/oauth-authorizations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.apps.deprecating_token_oauth_authorizations %}
{% data reusables.apps.deprecating_password_auth %}

You can use this API to manage the access OAuth applications have to your account. You can only access this API via [Basic Authentication](/rest/overview/other-authentication-methods#basic-authentication) using your username and password, not tokens.

If you or your users have two-factor authentication enabled, make sure you understand how to [work with two-factor authentication](/rest/overview/other-authentication-methods#working-with-two-factor-authentication).

{% include rest_operations_at_current_path %}
