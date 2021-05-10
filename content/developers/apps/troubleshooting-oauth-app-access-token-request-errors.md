---
title: Troubleshooting OAuth App access token request errors
intro: '{% data reusables.shortdesc.troubleshooting_access_token_reques_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/
  - /apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - OAuth Apps
---

{% note %}

**Note:** These examples only show JSON responses.

{% endnote %}

### Incorrect client credentials

If the client\_id and or client\_secret you pass are incorrect you will
receive this error response.

```json
{
  "error": "incorrect_client_credentials",
  "error_description": "The client_id and/or client_secret passed are incorrect.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#incorrect-client-credentials"
}
```

To solve this error, make sure you have the correct credentials for your {% data variables.product.prodname_oauth_app %}. Double check the `client_id` and `client_secret` to make sure they are correct and being passed correctly
to {% data variables.product.product_name %}.

### Redirect URI mismatch

If you provide a `redirect_uri` that doesn't match what you've registered with your {% data variables.product.prodname_oauth_app %}, you'll receive this error message:

```json
{
  "error": "redirect_uri_mismatch",
  "error_description": "The redirect_uri MUST match the registered callback URL for this application.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-authorization-request-errors/#redirect-uri-mismatch2"
}
```

To correct this error, either provide a `redirect_uri` that matches what
you registered or leave out this parameter to use the default one
registered with your application.

### Bad verification code

```json
{
  "add_scopes": [
    "repo"
  ],
  "note": "admin script"
}
```

If the verification code you pass is incorrect, expired, or doesn't
match what you received in the first request for authorization you will
receive this error.

```json
{
  "error": "bad_verification_code",
  "error_description": "The code passed is incorrect or expired.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code"
}
```

To solve this error, start the [OAuth authorization process again](/apps/building-oauth-apps/authorizing-oauth-apps/)
and get a new code.
