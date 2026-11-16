---
title: Authorizing credentials for single sign-on with a GitHub App
intro: 'Authorize credentials for multiple organizations by allowing an enterprise-installed {% data variables.product.prodname_github_app %} to manage single sign-on (SSO) authorizations.'
versions:
  ghec: '*'
permissions: Enterprise owners and users with the "Manage enterprise credentials" permission
shortTitle: Authorize credentials with an app
category:
  - Sign in with SSO or a passkey
---

## About authorizing credentials with a {% data variables.product.prodname_github_app %}

By default, enterprise-installed {% data variables.product.prodname_github_apps %} cannot authorize credentials. To reduce the number of times that enterprise members must authorize the same credential for individual organizations, you can allow an app to authorize existing {% data variables.product.pat_v1_plural %} or verified, user-owned SSH authentication keys. Up to 50 selected organizations are allowed per request.

To authorize a credential for a single organization without a {% data variables.product.prodname_github_app %}, see [AUTOTITLE](/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on) or [AUTOTITLE](/authentication/authenticating-with-single-sign-on/authorizing-an-ssh-key-for-use-with-single-sign-on).

## Prerequisites

Before the app can authorize credentials, the following requirements must be met:

* The enterprise must use enterprise-level SSO.
* The credential owner must be a member of every organization where the app will authorize the credential.

## Creating the {% data variables.product.prodname_github_app %}

1. Register a new app. For instructions, see [AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/registering-a-github-app#registering-a-github-app). The app must:

   * Be owned by the enterprise or an organization in the enterprise.
   * Have write access to the "Enterprise credentials" permission.

1. Note the app's client ID, then generate and securely store a private key. See [AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps).
1. Install the app on your enterprise account. See [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-on-your-enterprise).
1. In the URL of the app's installation page, note the installation ID. The ID is the string of numbers at the end of the `/enterprises/ENTERPRISE/settings/installations/ID` URL.

## Allowing a {% data variables.product.prodname_github_app %} to authorize credentials

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.security-tab %}

1. Under "Credentials," enable **Allow {% data variables.product.prodname_github_apps %} to authorize credentials**.

## Generating an installation access token

The app must use an enterprise installation access token to authenticate its API requests. Organization installation access tokens, user access tokens, and {% data variables.product.pat_generic_plural %} are not supported.

To generate an installation access token:

1. Use the app's client ID and private key to generate a JSON Web Token (JWT). See [AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-json-web-token-jwt-for-a-github-app).
1. Use the JWT and enterprise installation ID to create an installation access token. See [AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app).

The installation access token inherits the enterprise permissions granted to the app, cannot be scoped down, and expires after one hour.

## Finding credential identifiers

For credentials that are already authorized for an organization in your enterprise, an organization owner can use the REST API to obtain identifiers in bulk. See [AUTOTITLE](/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization).

In the response, use `authorized_credential_id` for a {% data variables.product.pat_v1 %}, or `fingerprint` for an SSH key. Do not use `credential_id`, which identifies the credential's authorization for that organization.

This endpoint does not return credentials that have not been authorized for the organization. To obtain an identifier for another credential, use one of these methods:

* For a {% data variables.product.pat_v1 %}, open the token from the [token settings](https://github.com/settings/tokens) page. The token ID is the number at the end of the `/settings/tokens/ID` URL. Alternatively, if the token was used for an action recorded in the enterprise audit log, an enterprise owner can find the ID in the event's `token_id` field. The ID is available in the audit log only while an enterprise-visible event authenticated with that token is retained. Share the ID, not the token value. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) and [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise).
* For an SSH key, find the SHA-256 fingerprint for the verified, user-owned authentication key. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys).

## Authorizing a credential

Use the REST API to authorize the credential for selected organizations. For example:

```shell
curl --request POST \
  --url "https://api.github.com/enterprises/ENTERPRISE/credential-authorizations" \
  --header "Accept: application/vnd.github+json" \
  --header "Authorization: Bearer INSTALLATION-ACCESS-TOKEN" \
  --header "X-GitHub-Api-Version: 2026-03-10" \
  --data '{
    "credential_id": 12345678,
    "credential_type": "classic_pat",
    "organizations": ["ORGANIZATION-1", "ORGANIZATION-2"]
  }'
```

Replace `ENTERPRISE` with the enterprise slug, `INSTALLATION-ACCESS-TOKEN` with the installation access token, and `ORGANIZATION-1` and `ORGANIZATION-2` with the organization slugs. Replace `12345678` with the ID of the {% data variables.product.pat_v1 %}. To authorize an SSH key instead, replace `12345678` with the key's SHA-256 fingerprint and replace `classic_pat` with `ssh_key`.

For more information, see [AUTOTITLE](/rest/enterprise-admin/credential-authorizations).

## Disabling credential authorization by {% data variables.product.prodname_github_apps %}

Disabling the setting prevents apps from creating new credential authorizations. Existing authorizations remain active until they are revoked, the credential is revoked or deleted, or the credential owner loses membership in the organization.

You can use the same REST API to revoke authorizations that an app created through enterprise delegation.
