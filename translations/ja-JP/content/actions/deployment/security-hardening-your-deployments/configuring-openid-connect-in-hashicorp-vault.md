---
title: Configuring OpenID Connect in HashiCorp Vault
shortTitle: Configuring OpenID Connect in HashiCorp Vault
intro: Use OpenID Connect within your workflows to authenticate with HashiCorp Vault.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: issue-4856
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to authenticate with a HashiCorp Vault to retrieve secrets.

This guide gives an overview of how to configure HashiCorp Vault to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and demonstrates how to use this configuration in the [hashicorp/vault-action](https://github.com/hashicorp/vault-action) action to retrieve secrets from HashiCorp Vault.

## 必要な環境

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adding the identity provider to HashiCorp Vault

To use OIDC with HashiCorp Vault, you will need to add a trust configuration for the {% data variables.product.prodname_dotcom %} OIDC provider. For more information, see the HashiCorp Vault [documentation](https://www.vaultproject.io/docs/auth/jwt).

Configure the vault to accept JSON Web Tokens (JWT) for authentication:
- For the `oidc_discovery_url`, use {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}
- For `bound_issuer`, use {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}
- Ensure that `bound_subject` is correctly defined for your security requirements. For more information, see ["Configuring the OIDC trust with the cloud"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud) and [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action).

## {% data variables.product.prodname_actions %} ワークフローを更新する

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
2. Use the [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) action to exchange the OIDC token (JWT) for a cloud access token.


To add OIDC integration to your workflows that allow them to access secrets in Vault, you will need to add the following code changes:

- {% data variables.product.prodname_dotcom %} OIDCプロバイダーからトークンをフェッチする権限の付与:
  - The workflow needs `permissions:` settings with the `id-token` value set to `write`. これによって、ワークフロー中のすべてのジョブからODICトークンをフェッチできるようになります。
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
- `<Audience>`: Replace this with the audience you've defined in the HashiCorp Vault trust relationship.
- `<Secret-Path>`: Replace this with the path to the secret you're retrieving from HashiCorp Vault. For example: `secret/data/ci npmToken`.

```yaml{:copy}
jobs:
    retrieve-secret:
        steps:
            - name: Retrieve secret from Vault
              uses: hashicorp/vault-action@v2.4.0
              with:
                url: <Vault URL>
                role: <Role name>
                method: jwt
                jwtGithubAudience: <Audience>
                secrets: <Secret-Path>

            - name: Use secret from Vault
               run: |
                 # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```
