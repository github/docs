---
title: OpenID Connect (OIDC) for GitHub Copilot Extensions
shortTitle: OpenID Connect
allowTitleToDifferFromFilename: true
intro: 'Learn how OpenID Connect (OIDC) enables {% data variables.copilot.copilot_extensions_short %} to securely authenticate users and access cloud resources without storing long-lived credentials.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
redirect_from:
  - /copilot/concepts/build-copilot-extensions/openid-connect
  - /copilot/concepts/copilot-extensions/openid-connect
contentType: concepts
category: 
  - Integrate Copilot with your tools
---

## About OpenID Connect (OIDC) for {% data variables.copilot.copilot_extensions_short %}

OpenID Connect (OIDC) allows {% data variables.copilot.copilot_extensions_short %} to exchange short-lived tokens directly from their cloud provider instead of storing long-lived {% data variables.product.github %} credentials. This feature enables both Copilot agents and skillsets to more securely authenticate users and access cloud resources.

### Overview of OIDC

{% data variables.copilot.copilot_extensions_short %} often need to access third-party resources or APIs on behalf of users. Traditionally, this required storing {% data variables.product.github %} tokens as secrets and making additional API calls to map these tokens to user identities in your system. With OIDC, your extension can request short-lived access tokens directly from your authentication service by exchanging {% data variables.product.github %} identity information.

When enabled, {% data variables.product.github %}'s OIDC provider automatically generates a token containing claims about the user and the request context. Your authentication service can validate these claims and exchange them for an access token scoped specifically for your service.

Using OIDC is especially valuable for {% data variables.product.prodname_copilot_short %} skillsets development because it allows you to leverage your existing API endpoints without maintaining separate {% data variables.product.github %}-specific endpoints. Instead of duplicating endpoints to accept {% data variables.product.github %} tokens, you can use OIDC to translate {% data variables.product.github %} identities into your service’s native authentication tokens.

### Benefits of using OIDC

By implementing OIDC token exchange in your {% data variables.copilot.copilot_extension_short %}, you can:

* Avoid storing long-lived {% data variables.product.github %} tokens or maintain a mapping between {% data variables.product.github %} and your service's identities.
* Use short-lived tokens that automatically expire and can be scoped specifically to your service's needs.
* Avoid making additional calls to {% data variables.product.github %}'s API to validate tokens and fetch user information.
* Enable direct integration for {% data variables.product.prodname_copilot_short %} Skills with your existing APIs without maintaining separate endpoints for {% data variables.product.github %}.
* Reuse existing API endpoints by translating {% data variables.product.github %} authentication into your service's native tokens.

## About token exchange flow

The following outlines how the {% data variables.copilot.copilot_extensibility_platform_short %} exchanges an OIDC token for an access token to authenticate requests to your extension.

### Initial request

1. The user sends a message to your {% data variables.copilot.copilot_extension_short %}.
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

## Best practices

* Scope tokens to the minimum required permissions.
* Implement proper error handling and logging.
* Monitor token exchange patterns for security anomalies.
* Keep tokens short-lived to minimize security risks.
* Validate all claims before issuing access tokens.
* Consider implementing rate limiting on your token exchange endpoint.
* Use HTTPS for all token exchange communications.

## Next steps

* [AUTOTITLE](/copilot/how-tos/build-copilot-extensions/set-up-oidc)
