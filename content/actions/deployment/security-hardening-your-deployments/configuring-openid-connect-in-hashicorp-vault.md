---
title: Configuring OpenID Connect in HashiCorp Vault
shortTitle: Configuring OpenID Connect in HashiCorp Vault
intro: Use OpenID Connect within your workflows to authenticate with HashiCorp Vault.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: issue-4856
  ghec: '*'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to authenticate with a HashiCorp Vault to retrieve secrets.

This guide gives an overview of how to configure HashiCorp Vault to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and demonstrates how to use this configuration in the [hashicorp/vault-action](https://github.com/hashicorp/vault-action) action to retrieve secrets from HashiCorp Vault.

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adding the identity provider to HashiCorp Vault

To use OIDC with HashiCorp Vault, you will need to add a trust configuration for the {% data variables.product.prodname_dotcom %} OIDC provider. For more information, see the HashiCorp Vault [documentation](https://www.vaultproject.io/docs/auth/jwt).

Configure Vault to accept JSON Web Tokens (JWT) for authentication with the [JWT authentication method](https://www.vaultproject.io/api/auth/jwt#configure):
- For the `oidc_discovery_url`, use `https://token.actions.githubusercontent.com`
- For `bound_issuer`, use `https://token.actions.githubusercontent.com`

Additionally, you must configure a [JWT auth backend role](https://www.vaultproject.io/api/auth/jwt#create-role).

- Set `role_type` to `jwt`
- Set `user_claim` to a claim name (e.g., `run_id`) that is present in the OIDC token. See [Understanding the OIDC token](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token) for more information.

Then, ensure that the `bound_*` parameters for the JWT auth backend role are correctly defined for your security requirements.

- For a wildcard (non-exact) match, the `bound_claims_type` must be set to a value of `glob`. See the [Vault documentation](https://www.vaultproject.io/api/auth/jwt#bound_claims_type) for more information.
  
  The `bound_claims` parameter must be set to a JSON object. The object maps one or more claim names to corresponding wildcard values:

  ```json
  {"sub": "repo:<orgName>/*"}
  ```

- For an exact match, the `bound_claims_type` should be set to a value of `string`.

  The `bound_subject` parameter must exactly match the `sub` claim in the OIDC token. 
  
  For more details, see [Defining trust conditions on cloud roles using OIDC claims](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims).

## Updating your {% data variables.product.prodname_actions %} workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
2. Use the [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) action to exchange the OIDC token (JWT) for a cloud access token.


To add OIDC integration to your workflows that allow them to access secrets in Vault, you will need to add the following code changes:

- Grant permission to fetch the token from the {% data variables.product.prodname_dotcom %} OIDC provider:
  - The workflow needs `permissions:` settings with the `id-token` value set to `write` and the `content` value set to `read`. This lets you fetch the OIDC token from every job in the workflow.
- Request the JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and present it to HashiCorp Vault to receive an access token:
  - You can use the [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) action to fetch the JWT and receive the access token from Vault, or you could use the [Actions toolkit](https://github.com/actions/toolkit/) to fetch the tokens for your job.

This example demonstrates how to use OIDC with the official action to request a secret from HashiCorp Vault.

### Adding permissions settings

 {% data reusables.actions.oidc-permissions-token %}

### Requesting the access token

The `hashicorp/vault-action` action receives a JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and then requests an access token from your HashiCorp Vault instance to retrieve secrets. For more information, see the HashiCorp Vault [documentation](https://github.com/hashicorp/vault-action).

This example demonstrates how to create a job that requests a secret from HashiCorp Vault.

- `<Vault URL>`: Replace this with the URL of your HashiCorp Vault.
- `<Vault Role name>`: Replace this with the role you've set in the HashiCorp Vault trust relationship.
- `<Vault Namespace>`: Replace this with the Namespace you've set in HashiCorp Vault. For example: `admin`.
- `<Audience>`: Replace this with the audience you've defined in the HashiCorp Vault trust relationship.
- `<Secret-Path>`: Replace this with the path to the secret you're retrieving from HashiCorp Vault. For example: `secret/data/ci npmToken`.

{% note %}

**Note:** `<Vault Namespace>` must be set for a Vault Enterprise (including HCP Vault) deployment. See [Vault namespace](https://www.vaultproject.io/docs/enterprise/namespaces) for more information.

{% endnote %}

```yaml{:copy}
jobs:
    retrieve-secret:
        permissions:
            contents: read
            id-token: write

        steps:
            - name: Retrieve secret from Vault
              uses: hashicorp/vault-action@v2.4.0
              with:
                url: <Vault URL>
                role: <Vault Role name>
                method: jwt
                namespace: <Vault Namespace - HCP Vault and Vault Enterprise only>
                jwtGithubAudience: <Audience>
                secrets: <Secret-Path>
                
            - name: Use secret from Vault
               run: |
                 # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```
