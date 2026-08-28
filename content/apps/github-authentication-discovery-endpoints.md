---
title: GitHub authentication discovery endpoints
shortTitle: OAuth 2.0 and OIDC Discovery documents
intro: '{% data variables.product.github %} publishes OAuth 2.0 and OpenID Connect metadata documents.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Understand GitHub Apps
---

> [!NOTE]
> The {% data variables.product.github %} authentication metadata documents described in this article are in {% data variables.release-phases.public_preview %} and subject to change.
> While the endpoints may be present on {% data variables.enterprise.data_residency %} and some versions of {% data variables.product.prodname_ghe_server %}, they contain incorrect information.

{% data variables.product.github %} publishes two metadata documents used in the OAuth 2.0 and OpenID Connect protocols:

* **OAuth 2.0 Authorization Server Metadata** ([RFC 8414](https://datatracker.ietf.org/doc/html/rfc8414)): `https://github.com/.well-known/oauth-authorization-server/login/oauth`
* **OpenID Connect Discovery** ([OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html)): `https://github.com/login/oauth/.well-known/openid-configuration`

These documents are used to validate tokens issued by {% data variables.product.github %} as well as programmatically determine how to sign in a user.

## Intended use

These documents are only published for MCP clients using [RFC 9728](https://datatracker.ietf.org/doc/html/rfc9728) to discover the OAuth 2.0 endpoints needed to get a token for the {% data variables.product.github %} MCP server.

{% data variables.product.github %} does not currently implement OpenID Connect in its OAuth flows and does not issue ID tokens for users or apps.

## Issuer

The issuer for {% data variables.product.prodname_dotcom_the_website %} is `https://github.com/login/oauth`.

This is the base URL used to find the other documents listed and an important parameter when configuring authentication libraries.

## Difference from GitHub Actions tokens

These metadata documents do not apply to the tokens issued for {% data variables.product.prodname_actions %} workflows. {% data variables.product.prodname_actions %} uses a separate dedicated issuer and token profile. For more information about Actions tokens, see [AUTOTITLE](/actions/concepts/security/openid-connect).
