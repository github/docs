---
title: Setting up OIDC for your GitHub Copilot extension
intro: Learn how to set up OpenID Connect (OIDC) with your {% data variables.copilot.copilot_extension_short %} to enhance security.
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Set up OIDC
allowTitleToDifferFromFilename: true
redirect_from:
  - /copilot/building-copilot-extensions/using-oidc-with-copilot-extensions
  - /copilot/building-copilot-extensions/using-oidc-with-github-copilot-extensions
  - /copilot/how-tos/build-copilot-extensions/using-oidc-with-github-copilot-extensions
  - /copilot/how-tos/build-copilot-extensions/set-up-oidc
contentType: how-tos
category: 
  - Integrate Copilot with your tools
---

## Introduction

You can set up OIDC so that {% data variables.product.prodname_copilot_short %} agents and skillsets can more securely authenticate users and access cloud resources. For more information on OIDC, see [AUTOTITLE](/copilot/concepts/copilot-extensions/openid-connect).

There are three steps to setting up OIDC for your extension.
* [Configure your token exchange endpoint](#configure-your-token-exchange-endpoint).
* [Enable OIDC in your Copilot extensions settings](#enable-oidc-in-your-copilot-extensions-settings).
* [Validate OIDC tokens](#validate-oidc-tokens).

## Configure your token exchange endpoint

Create an endpoint in your service that conforms to the [RFC 8693 OAuth 2.0 Token Exchange](https://www.rfc-editor.org/rfc/rfc8693.html).
This endpoint should:
* Accept `POST` requests with the following form-encoded parameters:

  ```http request
  grant_type=urn:ietf:params:oauth:grant-type:token-exchange
  &resource=<https://your-service.com/resource>
  &subject_token=<github-jwt-token>
  &subject_token_type=urn:ietf:params:oauth:token-type:id_token
  ```

* Return a JSON response with your service's access token:

  ```json
  {
    "access_token": <"your-service-token">,
    "issued_token_type":"urn:ietf:params:oauth:token-type:access_token",
    "token_type": "Bearer",
    "expires_in": 3600
  }
  ```

* Return an error response when validation fails:

  ```json
  {
    "error": "invalid_request"
  }
  ```

## Enable OIDC in your {% data variables.copilot.copilot_extension_short %}'s settings

In your {% data variables.copilot.copilot_extension_short %}'s configuration, enable OIDC:

{% data reusables.apps.settings-step %}
{% data reusables.apps.enterprise-apps-steps %}
1. To the right of the {% data variables.product.prodname_github_app %} you want to configure for your {% data variables.copilot.copilot_extension_short %}, click **Edit**.
1. In the left sidebar, click **{% data variables.product.prodname_copilot_short %}**.
1. Under **OpenID Connect Token Exchange**, check **Enabled**.
1. In the **Token exchange endpoint** field, input your token exchange URL.
1. In the **Request header key** field, input the header key for your service's token. The default is `Authorization`.
1. In the **Request header value** field, input the header value format. The default is `Bearer ${token}`.

## Validate OIDC tokens

Your token exchange endpoint should validate the {% data variables.product.github %} OIDC token by following the steps below:
1. Fetch the JSON Web Key Set (JWKS) from https://github.com/login/oauth/.well-known/openid-configuration.
1. Verify the token signature.
1. Validate required claims.
   * `aud`: Audience. Your {% data variables.copilot.copilot_extension_short %}'s client ID.
   * `sub`: Subject. The {% data variables.product.github %} user ID making the request. The response is limited to data that the user has permissions to access. If the user has no permissions `400 Bad Request` is shown.
   * `iat`: Issued At. The timestamp when the token was issued. It is typically a timestamp in the past but represents the exact moment the token was created.
   * `nbf`: Not Before. The timestamp before which the token is not valid. This should be a timestamp in the past.
   * `exp`: Expiration Time. The timestamp when the token expires. This should be a timestamp in the future.
   * `act`: Actor. The acting entity in delegated access. This should be a constant string.

## Troubleshooting

The following sections outline common problems and best practices for implementing OIDC for your {% data variables.copilot.copilot_extension_short %}.

### Token validation errors

* Ensure you're using the correct JWKS endpoint.
* Verify that all the required claims are present and valid.
* Check that timestamps (`iat`, `nbf`, and `exp`) are within valid ranges.

### Token exchange failures

* Return `HTTP 400` for invalid tokens.
* Return `HTTP 403` if the user lacks the necessary permissions.
* If {% data variables.product.github %} receives a 403 response, it will retry the request with a new token.

### Performance issues

* Implement efficient token validation to minimize latency.
* Use appropriate token expiration times (recommended: 10 minutes or less).
* Consider caching implications for high-traffic extensions.

## Further reading

* [AUTOTITLE](/copilot/concepts/copilot-extensions/openid-connect)
