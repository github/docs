---
title: Troubleshooting OAuth app access token request errors
intro: '{% data reusables.shortdesc.troubleshooting_access_token_request_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /developers/apps/troubleshooting-oauth-app-access-token-request-errors
  - /developers/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - OAuth apps
shortTitle: Troubleshoot token request
---
{% note %}

**Note:** These examples only show JSON responses.

{% endnote %}

## Incorrect client credentials

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

## Redirect URI mismatch

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

## Bad verification code

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

To solve this error, start the [OAuth authorization process again](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)
and get a new code.

## Unverified user email

If the user for whom you are trying to generate a user access token has not verified their primary email address with {% data variables.product.company_short %}, you will receive this error.

```json
{
  "error": "unverified_user_email",
  "error_description": "The user must have a verified primary email.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#unverified_user_email"
}
```

To resolve this error, prompt the user to verify the primary email address on their {% data variables.product.company_short %} account. For more information, see {% ifversion fpt or ghec %}"[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address)."{% else %}"[AUTOTITLE](/free-pro-team@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address)" in the  {% data variables.product.prodname_free_user %} documentation.{% endif %}
