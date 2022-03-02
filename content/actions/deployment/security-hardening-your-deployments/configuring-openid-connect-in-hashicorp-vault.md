---
title: Configuring OpenID Connect in HashiCorp Vault
shortTitle: Configuring OpenID Connect in HashiCorp Vault
intro: 'Use OpenID Connect within your workflows to authenticate with HashiCorp Vault.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: 'issue-4856'
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

To use OIDC with HashiCorp Vault, you will need to add a trust configuration for the {% data variables.product.prodname_dotcom %} OIDC provider.

To configure your Vault server to accept JSON Web Tokens (JWT) for authentication:

1. Enable the JWT auth method and write configuration.  
For `oidc_discovery_url` and `bound_issuer` parameters, use `https://token.actions.githubusercontent.com`. These parameters must be set so that the Vault server can verify the received JSON Web Tokens (JWT) upon authentication.

    ```sh
    $ vault auth enable jwt
    
    $ vault write auth/jwt/config \
      bound_issuer="https://token.actions.githubusercontent.com" \
      oidc_discovery_url="https://token.actions.githubusercontent.com"
    ```
2. Configure policies to only grant access for certain paths in which your workflows will be retrieving secrets. For more advanced policies, see the HashiCorp Vault [Policies documentation](https://www.vaultproject.io/docs/concepts/policies).

    ```sh
    $ vault policy write myproject-production - <<EOF
    # Read-only permission on 'secret/data/production/*' path

    path "secret/data/production/*" {
      capabilities = [ "read" ]
    }
    EOF
    ```
3. Configure roles to group different policies together. If the authentication is successful, these policies are attached to the resulting Vault access token.

    ```sh
    $ vault write auth/jwt/role/myproject-production -<<EOF
    {
      "role_type": "jwt",
      "user_claim": "actor",
      "bound_claims": {
        "repository": "user-or-org-name/repo-name"
      },
      "policies": ["myproject-production"],
      "ttl": "10m"
    }
    EOF
    ```

- `ttl` defines the validity of the resulting access token.
- Ensure that the `bound_claims` parameter is defined for your security requirements, and has at least one condition. Optionally, you can also set the `bound_subject` as well as the `bound_audiences` parameter.
- The `bound_claims` parameter contains a set of claims and their required values to check arbitrary claims in the received JWT payload. In the above example, the role will accept any incoming authentication requests from the `repo-name` repository owned by the `user-or-org-name` account.
- To see all the available claims supported by {% data variables.product.prodname_dotcom %}'s OIDC provider, see ["Configuring the OIDC trust with the cloud"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud).

For more information, see the HashiCorp Vault [documentation](https://www.vaultproject.io/docs/auth/jwt).

## Updating your {% data variables.product.prodname_actions %} workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
2. Use the [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) action to exchange the OIDC token (JWT) for a cloud access token.


To add OIDC integration to your workflows that allow them to access secrets in Vault, you will need to add the following code changes:

- Grant permission to fetch the token from the {% data variables.product.prodname_dotcom %} OIDC provider:
  - The workflow needs `permissions:` settings with the `id-token` value set to `write`. This lets you fetch the OIDC token from every job in the workflow.
- Request the JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and present it to HashiCorp Vault to receive an access token:
  - You could use the [Actions toolkit](https://github.com/actions/toolkit/) to fetch the tokens for your job, or you can use the [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) action to fetch the JWT and receive the access token from the Vault.

This example demonstrates how to use OIDC with the official action to request a secret from HashiCorp Vault.

### Adding permissions settings

 {% data reusables.actions.oidc-permissions-token %}

### Requesting the access token

The `hashicorp/vault-action` action receives a JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and then requests an access token from your HashiCorp Vault instance to retrieve secrets. For more information, see the HashiCorp Vault [documentation](https://github.com/hashicorp/vault-action).

This example demonstrates how to create a job that requests a secret from HashiCorp Vault.

- `<Vault URL>`: Replace this with the URL of your HashiCorp Vault.
- `<Role name>`: Replace this with the role you've set in the HashiCorp Vault trust relationship.
- `<Secret-Path>`: Replace this with the path to the secret you're retrieving from HashiCorp Vault. For example: `secret/data/production/ci npmToken`.

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            method: jwt
            url: <Vault URL>
            role: <Role name>
            secrets: <Secret-Path>
                
      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```

{% note %}

**Note**: If your Vault server is not accessible from the public network, you may use the [self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners).

{% endnote %}

### Revoking the access token

By default, the Vault server will automatically revoke access tokens when their TTL is expired, so you don't have to worry about revoking the access tokens.

But if you want to revoke access tokens immediately soon after your job is completed/failed for your security requirements, you can manually revoke the issued token using the [Vault API](https://www.vaultproject.io/api/auth/token#revoke-a-token-self).

1. Set the `exportToken` option to `true` (default: `false`). This exports the issued Vault access token as an environment variable: `VAULT_TOKEN`.
2. Add a step to call the [Revoke a Token (Self)](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) Vault API to revoke the access token.

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            exportToken: true
            method: jwt
            url: <Vault URL>
            role: <Role name>
            secrets: <Secret-Path>

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.

      - name: Revoke token
        # This step always runs at the end regardless of the previous steps result
        if: always()
        run: |
          curl -X POST -sv -H "X-Vault-Token: {% raw %}${{ env.VAULT_TOKEN }}{% endraw %}" \
            <Vault URL>/v1/auth/token/revoke-self
```
