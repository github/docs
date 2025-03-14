---
title: Using OIDC with GitHub Copilot Extensions
intro: >-
  Learn how to use OpenID Connect (OIDC) with your {% data
  variables.product.prodname_copilot_extension_short %} to enhance security.
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Using OIDC
type: how_to
redirect_from:
  - /copilot/building-copilot-extensions/using-oidc-with-copilot-extensions
---

## About OpenID Connect (OIDC) for {% data variables.product.prodname_copilot_extensions_short %}

OpenID Connect (OIDC) allows {% data variables.product.prodname_copilot_extensions_short %} to exchange short-lived tokens directly from their cloud provider instead of storing long-lived {% data variables.product.github %} credentials. This feature enables both Copilot agents and skillsets to more securely authenticate users and access cloud resources.

## Overview of OIDC

{% data variables.product.prodname_copilot_extensions_short %} often need to access third-party resources or APIs on behalf of users. Traditionally, this required storing {% data variables.product.github %} tokens as secrets and making additional API calls to map these tokens to user identities in your system. With OIDC, your extension can request short-lived access tokens directly from your authentication service by exchanging {% data variables.product.github %} identity information.

When enabled, {% data variables.product.github %}'s OIDC provider automatically generates a token containing claims about the user and the request context. Your authentication service can validate these claims and exchange them for an access token scoped specifically for your service.

Using OIDC is especially valuable for {% data variables.product.prodname_copilot_short %} skillsets development because it allows you to leverage your existing API endpoints without maintaining separate {% data variables.product.github %}-specific endpoints. Instead of duplicating endpoints to accept {% data variables.product.github %} tokens, you can use OIDC to translate {% data variables.product.github %} identities into your service’s native authentication tokens.

## Benefits of using OIDC

By implementing OIDC token exchange in your {% data variables.product.prodname_copilot_extension_short %}, you can:

* Avoid storing long-lived {% data variables.product.github %} tokens or maintain a mapping between {% data variables.product.github %} and your service's identities.
* Use short-lived tokens that automatically expire and can be scoped specifically to your service's needs.
* Avoid making additional calls to {% data variables.product.github %}'s API to validate tokens and fetch user information.
* Enable direct integration for {% data variables.product.prodname_copilot_short %} Skills with your existing APIs without maintaining separate endpoints for {% data variables.product.github %}.
* Reuse existing API endpoints by translating {% data variables.product.github %} authentication into your service's native tokens.

## Token exchange flow

The following outlines how the {% data variables.product.prodname_copilot_extensibility_platform_short %} exchanges an OIDC token for an access token to authenticate requests to your extension.

### Initial request

1. The user sends a message to your {% data variables.product.prodname_copilot_extension_short %}.
1. GitHub generates an OIDC token containing user identity information.
1. GitHub calls your token exchange endpoint with the OIDC token.
1. Your service validates the token and returns an access token.
1. GitHub includes your access token in the request to your extension.

```http request
# HTTP header
Authorization: Bearer <your-service-token>
X-GitHub-Token: <github-token>
```

### Subsequent requests

1. {% data variables.product.github %} caches your access token for up to 10 minutes.
1. The cached token is reused for subsequent requests.
1. If the token expires or becomes invalid, {% data variables.product.github %} requests a new one.

## Understanding OIDC tokens

The OIDC token from {% data variables.product.github %} is a JWT containing claims about the user and request context:

```json
{
  "jti": "<unique-token-id>",
  "sub": "<github-user-id>",
  "aud": "<your-client-id>",
  "iss": "https://github.com/login/oauth",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567,
  "act": {
    "sub": "api.copilotchat.com"
  }
}
```

## Setting up OIDC for your extension

There are three steps to setting up OIDC for your extension.
1. [Configure your token exchange endpoint](#configure-your-token-exchange-endpoint).
1. [Enable OIDC in your Copilot extensions settings](#enable-oidc-in-your-copilot-extensions-settings).
1. [Validate OIDC tokens](#validate-oidc-tokens).

### Configure your token exchange endpoint

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
    "Issued_token_type":"urn:ietf:params:oauth:token-type:access_token",
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

### Enable OIDC in your {% data variables.product.prodname_copilot_extension_short %}'s settings

In your {% data variables.product.prodname_copilot_extension_short %}'s configuration, enable OIDC:

{% data reusables.apps.settings-step %}
{% data reusables.apps.enterprise-apps-steps %}
1. To the right of the {% data variables.product.prodname_github_app %} you want to configure for your {% data variables.product.prodname_copilot_extension_short %}, click **Edit**.
1. In the left sidebar, click **{% data variables.product.prodname_copilot_short %}**.
1. Under **OpenID Connect Token Exchange**, check **Enabled**.
1. In the **Token exchange endpoint** field, input your token exchange URL.
1. In the **Request header key** field, input the header key for your service's token. The default is `Authorization`.
1. In the **Request header value** field, input the header value format. The default is `Bearer ${token}`.

### Validate OIDC tokens

Your token exchange endpoint should validate the {% data variables.product.github %} OIDC token by following the steps below:
1. Fetch the JSON Web Key Set (JWKS) from https://github.com/login/oauth/.well-known/openid-configuration.
1. Verify  the token signature.
1. Validate required claims.
   * `aud`: Audience. Your {% data variables.product.prodname_copilot_extension_short %}'s client ID.
   * `sub`: Subject. The {% data variables.product.github %} user ID making the request. The response is limited to data that the user has permissions to access. If the user has no permissions `400 Bad Request` is shown.
   * `iat`: Issued At. The timestamp when the token was issued. It is typically a timestamp in the past but represents the exact moment the token was created.
   * `nbf`: Not Before. The timestamp before which the token is not valid. This should be a timestamp in the past.
   * `exp`: Expiration Time. The timestamp when the token expires. This should be a timestamp in the future.
   * `act`: Actor. The acting entity in delegated access. This should be a constant string.

## Troubleshooting

The following sections outline common problems and best practices for implementing OIDC for your {% data variables.product.prodname_copilot_extension_short %}.

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

### Best practices

* Scope tokens to the minimum required permissions.
* Implement proper error handling and logging.
* Monitor token exchange patterns for security anomalies.
* Keep tokens short-lived to minimize security risks.
* Validate all claims before issuing access tokens.
* Consider implementing rate limiting on your token exchange endpoint.
* Use HTTPS for all token exchange communications.
