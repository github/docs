---
title: 在 HashiCorp Vault 中配置 OpenID Connect
shortTitle: 在 HashiCorp Vault 中配置 OpenID Connect
intro: 在工作流程中使用 OpenID Connect 通过 HashiCorp Vault 进行身份验证。
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

## 概览

OpenID Connect (OIDC) 允许您的 {% data variables.product.prodname_actions %} 工作流程使用 HashiCorp Vault 进行身份验证以检索机密。

本指南概述如何配置 HashiCorp Vault 信任 {% data variables.product.prodname_dotcom %} 的 OIDC 作为联合身份，并演示如何在 [hashicorp/vault-action](https://github.com/hashicorp/vault-action) 操作中使用此配置从 HashiCorp Vault 检索机密。

## 基本要求

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## 将身份提供商添加到 HashiCorp Vault

要将 OIDC 与 HashiCorp Vault 配合使用，您需要为 {% data variables.product.prodname_dotcom %} OIDC 提供商添加信任配置。 更多信息请参阅 HashiCorp Vault [文档](https://www.vaultproject.io/docs/auth/jwt)。

To configure your Vault server to accept JSON Web Tokens (JWT) for authentication:

1. Enable the JWT `auth` method, and use `write` to apply the configuration to your Vault. For `oidc_discovery_url` and `bound_issuer` parameters, use {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}. These parameters allow the Vault server to verify the received JSON Web Tokens (JWT) during the authentication process.

    ```sh{:copy}
    vault auth enable jwt
    ```

    ```sh{:copy}
    vault write auth/jwt/config \
      bound_issuer="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}" \
      oidc_discovery_url="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}"
    ```
2. Configure a policy that only grants access to the specific paths your workflows will use to retrieve secrets. For more advanced policies, see the HashiCorp Vault [Policies documentation](https://www.vaultproject.io/docs/concepts/policies).

    ```sh{:copy}
    vault policy write myproject-production - <<EOF
    # Read-only permission on 'secret/data/production/*' path

    path "secret/data/production/*" {
      capabilities = [ "read" ]
    }
    EOF
    ```
3. Configure roles to group different policies together. If the authentication is successful, these policies are attached to the resulting Vault access token.

    ```sh{:copy}
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

- `ttl` defines the validity of the resulting access token.
- Ensure that the `bound_claims` parameter is defined for your security requirements, and has at least one condition. Optionally, you can also set the `bound_subject` as well as the `bound_audiences` parameter.
- To check arbitrary claims in the received JWT payload, the `bound_claims` parameter contains a set of claims and their required values. In the above example, the role will accept any incoming authentication requests from the `repo-name` repository owned by the `user-or-org-name` account.
- To see all the available claims supported by {% data variables.product.prodname_dotcom %}'s OIDC provider, see ["Configuring the OIDC trust with the cloud"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud).

更多信息请参阅 HashiCorp Vault [文档](https://www.vaultproject.io/docs/auth/jwt)。

## 更新 {% data variables.product.prodname_actions %} 工作流程

要更新 OIDC 的工作流程，您需要对 YAML 进行两项更改：
1. 为令牌添加权限设置。
2. 使用 [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) 操作将 OIDC 令牌 (JWT) 交换为云访问令牌。


要将 OIDC 集成添加到您的工作流程中，以允许他们访问 Vault 中的密钥，您需要添加以下代码更改：

- 授予从 {% data variables.product.prodname_dotcom %} OIDC 提供商获取令牌的权限：
  - 工作流需要 `permissions:` 设置将 `id-token` 值设为 `write`。 这使您可以从工作流程中的每个作业中获取 OIDC 令牌。
- 向 {% data variables.product.prodname_dotcom %} OIDC 提供商请求 JWT，并将其提供给 HashiCorp Vault 以接收访问令牌：
  - You can use the [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) action to fetch the JWT and receive the access token from Vault, or you could use the [Actions toolkit](https://github.com/actions/toolkit/) to fetch the tokens for your job.

此示例演示如何将 OIDC 与官方操作结合使用，以向 HashiCorp Vault 请求机密。

### 添加权限设置

 {% data reusables.actions.oidc-permissions-token %}

{% note %}

**注**：

When the `permissions` key is used, all unspecified permissions are set to _no access_, with the exception of the metadata scope, which always gets _read_ access. As a result, you may need to add other permissions, such as `contents: read`. See [Automatic token authentication](/actions/security-guides/automatic-token-authentication) for more information.

{% endnote %}

### 请求访问令牌

`hashicorp/vault-action` 操作从 {% data variables.product.prodname_dotcom %} OIDC 提供商接收 JWT，然后从 HashiCorp Vault 实例请求访问令牌以检索机密。 For more information, see the HashiCorp Vault GitHub Action [documentation](https://github.com/hashicorp/vault-action).

此示例演示如何创建从 HashiCorp Vault请求机密的作业。

- `<Vault URL>`：将此值替换为您的 HashiCorp Vault 的URL。
- `<Vault Namespace>`: Replace this with the Namespace you've set in HashiCorp Vault. For example: `admin`.
- `<Role name>`：将此值替换为您在 HashiCorp Vault 信任关系中设置的角色。
- `<Secret-Path>`：将此值替换为您从 HashiCorp Vault 检索的机密的路径。 For example: `secret/data/production/ci npmToken`.

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
            namespace: <Vault Namespace - HCP Vault and Vault Enterprise only>
            role: <Role name>
            secrets: <Secret-Path>

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```

{% note %}

**注**：

- If your Vault server is not accessible from the public network, consider using a self-hosted runner with other available Vault [auth methods](https://www.vaultproject.io/docs/auth). 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”。
- `<Vault Namespace>` must be set for a Vault Enterprise (including HCP Vault) deployment. For more information, see [Vault namespace](https://www.vaultproject.io/docs/enterprise/namespaces).

{% endnote %}

### Revoking the access token

By default, the Vault server will automatically revoke access tokens when their TTL is expired, so you don't have to manually revoke the access tokens. However, if you do want to revoke access tokens immediately after your job has completed or failed, you can manually revoke the issued token using the [Vault API](https://www.vaultproject.io/api/auth/token#revoke-a-token-self).

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
