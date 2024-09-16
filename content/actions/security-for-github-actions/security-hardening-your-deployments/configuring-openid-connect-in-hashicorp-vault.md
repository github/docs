---
title: Configuring OpenID Connect in HashiCorp Vault
shortTitle: OpenID Connect in HashiCorp Vault
intro: Use OpenID Connect within your workflows to authenticate with HashiCorp Vault.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: tutorial
topics:
  - Security
redirect_from:
  - /actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to authenticate with a HashiCorp Vault to retrieve secrets.

This guide gives an overview of how to configure HashiCorp Vault to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and demonstrates how to use this configuration in the [hashicorp/vault-action](https://github.com/hashicorp/vault-action) action to retrieve secrets from HashiCorp Vault.

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adding the identity provider to HashiCorp Vault

To use OIDC with HashiCorp Vault, you will need to add a trust configuration for the {% data variables.product.prodname_dotcom %} OIDC provider. For more information, see the HashiCorp Vault [documentation](https://www.vaultproject.io/docs/auth/jwt).

To configure your Vault server to accept JSON Web Tokens (JWT) for authentication:

1. Enable the JWT `auth` method, and use `write` to apply the configuration to your Vault.
   For `oidc_discovery_url` and `bound_issuer` parameters, use {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}. These parameters allow the Vault server to verify the received JSON Web Tokens (JWT) during the authentication process.

   ```shell copy
   vault auth enable jwt
   ```

   ```shell copy
   vault write auth/jwt/config \
     bound_issuer="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}" \
     oidc_discovery_url="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}"
   ```

   {% ifversion ghec %}
   {% note %}

   **Note:** If a unique issuer URL for an enterprise was set using the REST API (as described in "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#switching-to-a-unique-token-url)"), the values for `bound_issuer` and `oidc_discover_url` must match that unique URL. For example, for an enterprise named `octocat` that uses the unique issuer URL, `bound_issuer` and `oidc_discovery_url` must be set to `https://token.actions.githubusercontent.com/octocat`.

   {% endnote %}
   {% endif %}

1. Configure a policy that only grants access to the specific paths your workflows will use to retrieve secrets. For more advanced policies, see the HashiCorp Vault [Policies documentation](https://www.vaultproject.io/docs/concepts/policies).

   ```shell copy
   vault policy write myproject-production - <<EOF
   # Read-only permission on 'secret/data/production/*' path

   path "secret/data/production/*" {
     capabilities = [ "read" ]
   }
   EOF
   ```

1. Configure roles to group different policies together. If the authentication is successful, these policies are attached to the resulting Vault access token.

   ```shell copy
   vault write auth/jwt/role/myproject-production -<<EOF
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

* `ttl` defines the validity of the resulting access token.
* Ensure that the `bound_claims` parameter is defined for your security requirements, and has at least one condition. Optionally, you can also set the `bound_subject` as well as the `bound_audiences` parameter.
* To check arbitrary claims in the received JWT payload, the `bound_claims` parameter contains a set of claims and their required values. In the above example, the role will accept any incoming authentication requests from the `repo-name` repository owned by the `user-or-org-name` account.
* To see all the available claims supported by {% data variables.product.prodname_dotcom %}'s OIDC provider, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)."

For more information, see the HashiCorp Vault [documentation](https://www.vaultproject.io/docs/auth/jwt).

## Updating your {% data variables.product.prodname_actions %} workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
1. Use the [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) action to exchange the OIDC token (JWT) for a cloud access token.

{% data reusables.actions.oidc-deployment-protection-rules %}

To add OIDC integration to your workflows that allow them to access secrets in Vault, you will need to add the following code changes:

* Grant permission to fetch the token from the {% data variables.product.prodname_dotcom %} OIDC provider:
  * The workflow needs `permissions:` settings with the `id-token` value set to `write`. This lets you fetch the OIDC token from every job in the workflow.
* Request the JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and present it to HashiCorp Vault to receive an access token:
  * You can use the [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) action to fetch the JWT and receive the access token from Vault, or you could use the [Actions toolkit](https://github.com/actions/toolkit/) to fetch the tokens for your job.

This example demonstrates how to use OIDC with the official action to request a secret from HashiCorp Vault.

### Adding permissions settings

{% data reusables.actions.oidc-permissions-token %}

{% note %}

**Note**:

When the `permissions` key is used, all unspecified permissions are set to _no access_, with the exception of the metadata scope, which always gets _read_ access. As a result, you may need to add other permissions, such as `contents: read`. See [Automatic token authentication](/actions/security-guides/automatic-token-authentication) for more information.

{% endnote %}

### Requesting the access token

The `hashicorp/vault-action` action receives a JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and then requests an access token from your HashiCorp Vault instance to retrieve secrets. For more information, see the HashiCorp Vault GitHub Action [documentation](https://github.com/hashicorp/vault-action).

This example demonstrates how to create a job that requests a secret from HashiCorp Vault.

* `VAULT-URL`: Replace this with the URL of your HashiCorp Vault.
* `VAULT-NAMESPACE`: Replace this with the Namespace you've set in HashiCorp Vault. For example: `admin`.
* `ROLE-NAME`: Replace this with the role you've set in the HashiCorp Vault trust relationship.
* `SECRET-PATH`: Replace this with the path to the secret you're retrieving from HashiCorp Vault. For example: `secret/data/production/ci npmToken`.

```yaml copy
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
            url: VAULT-URL
            namespace: VAULT-NAMESPACE # HCP Vault and Vault Enterprise only
            role: ROLE-NAME
            secrets: SECRET-PATH

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```

{% note %}

**Note**:

* If your Vault server is not accessible from the public network, consider using a self-hosted runner with other available Vault [auth methods](https://www.vaultproject.io/docs/auth). For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)."
* `VAULT-NAMESPACE` must be set for a Vault Enterprise (including HCP Vault) deployment. For more information, see [Vault namespace](https://www.vaultproject.io/docs/enterprise/namespaces).

{% endnote %}

### Revoking the access token

By default, the Vault server will automatically revoke access tokens when their TTL is expired, so you don't have to manually revoke the access tokens. However, if you do want to revoke access tokens immediately after your job has completed or failed, you can manually revoke the issued token using the [Vault API](https://www.vaultproject.io/api/auth/token#revoke-a-token-self).

1. Set the `exportToken` option to `true` (default: `false`). This exports the issued Vault access token as an environment variable: `VAULT_TOKEN`.
1. Add a step to call the [Revoke a Token (Self)](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) Vault API to revoke the access token.

```yaml copy
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
            url: VAULT-URL
            role: ROLE-NAME
            secrets: SECRET-PATH

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.

      - name: Revoke token
        # This step always runs at the end regardless of the previous steps result
        if: always()
        run: |
          curl -X POST -sv -H "X-Vault-Token: {% raw %}${{ env.VAULT_TOKEN }}{% endraw %}" \
            VAULT-URL/v1/auth/token/revoke-self
```

## Further reading

{% data reusables.actions.oidc-further-reading %}
