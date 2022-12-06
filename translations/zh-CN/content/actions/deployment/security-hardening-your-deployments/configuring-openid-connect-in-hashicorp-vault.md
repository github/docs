---
title: 在 HashiCorp Vault 中配置 OpenID Connect
shortTitle: OpenID Connect in HashiCorp Vault
intro: 在工作流程中使用 OpenID Connect 通过 HashiCorp Vault 进行身份验证。
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 174243818443709ee6ffe3b22aa668cff254266f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106627'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概述

OpenID Connect (OIDC) 允许您的 {% data variables.product.prodname_actions %} 工作流程使用 HashiCorp Vault 进行身份验证以检索机密。

本指南概述如何将 HashiCorp Vault 配置为信任作为联合标识的 {% data variables.product.prodname_dotcom %} 的 OIDC，并演示如何在 [hashicorp/vault-action](https://github.com/hashicorp/vault-action) 操作中使用此配置从 HashiCorp Vault 检索机密。

## 先决条件

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## 将身份提供商添加到 HashiCorp Vault

要将 OIDC 与 HashiCorp Vault 配合使用，您需要为 {% data variables.product.prodname_dotcom %} OIDC 提供商添加信任配置。 有关详细信息，请参阅 HashiCorp Vault [文档](https://www.vaultproject.io/docs/auth/jwt)。

将 Vault 服务器配置为接受 JSON Web 令牌 (JWT) 进行身份验证：

1. 启用 JWT `auth` 方法，并使用 `write` 将配置应用于 Vault。 
  对于 `oidc_discovery_url` 和 `bound_issuer` 参数，请使用 {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}。 这些参数使 Vault 服务器可以在身份验证过程中验证收到的 JSON Web 令牌 (JWT)。

    ```sh{:copy}
    vault auth enable jwt
    ```
    
    ```sh{:copy}
    vault write auth/jwt/config \
      bound_issuer="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}" \
      oidc_discovery_url="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}"
    ```
2. 配置策略以便仅授予对工作流将用于检索机密的特定路径的访问权限。 有关更高级的策略，请参阅 HashiCorp Vault [策略文档](https://www.vaultproject.io/docs/concepts/policies)。

    ```sh{:copy}
    vault policy write myproject-production - <<EOF
    # Read-only permission on 'secret/data/production/*' path

    path "secret/data/production/*" {
      capabilities = [ "read" ]
    }
    EOF
    ```
3. 配置角色以将不同策略分组在一起。 如果身份验证成功，这些策略会附加到生成的 Vault 访问令牌。

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

- `ttl` 定义所生成的访问令牌的有效性。
- 确保针对安全要求定义 `bound_claims` 参数，并且该参数至少有一个条件。 （可选）还可以设置 `bound_subject` 和 `bound_audiences` 参数。
- 为了检查收到的 JWT 有效负载中的任意声明，`bound_claims` 参数包含一组声明及其所需值。 在上面的示例中，角色会接受来自 `user-or-org-name` 帐户拥有的 `repo-name` 存储库的任何传入身份验证请求。
- 若要查看 {% data variables.product.prodname_dotcom %} 的 OIDC 提供程序支持的所有可用声明，请参阅[“通过云配置 OIDC 信任”](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)。

有关详细信息，请参阅 HashiCorp Vault [文档](https://www.vaultproject.io/docs/auth/jwt)。

## 更新 {% data variables.product.prodname_actions %} 工作流程

要更新 OIDC 的工作流程，您需要对 YAML 进行两项更改：
1. 为令牌添加权限设置。
2. 使用操作 [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) 将 OIDC 令牌 (JWT) 交换为云访问令牌。


要将 OIDC 集成添加到您的工作流程中，以允许他们访问 Vault 中的密钥，您需要添加以下代码更改：

- 授予从 {% data variables.product.prodname_dotcom %} OIDC 提供程序提取令牌的权限：
  - 工作流需要将 `id-token` 值设置为 `write` 的 `permissions:` 设置。 这样，便可以从工作流中的每个作业中提取 OIDC 令牌。
- 向 {% data variables.product.prodname_dotcom %} OIDC 提供商请求 JWT，并将其提供给 HashiCorp Vault 以接收访问令牌：
  - 可以使用 [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) 操作提取 JWT 并从 Vault 接收访问令牌，也可以使用[操作工具包](https://github.com/actions/toolkit/) 提取作业的令牌。

此示例演示如何将 OIDC 与官方操作结合使用，以向 HashiCorp Vault 请求机密。

### 添加权限设置

 {% data reusables.actions.oidc-permissions-token %}

{% note %}

**注意**：

使用 `permissions` 密钥时，所有未指定的权限都设置为无访问权限，但元数据范围除外，它始终拥有读取访问权限 。 因此，可能需要添加其他权限，例如 `contents: read`。 有关详细信息，请参阅[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)。

{% endnote %}

### 请求访问令牌

`hashicorp/vault-action` 操作从 {% data variables.product.prodname_dotcom %} OIDC 提供程序接收 JWT，然后从 HashiCorp Vault 实例请求访问令牌以检索机密。 有关详细信息，请参阅 HashiCorp Vault GitHub 操作[文档](https://github.com/hashicorp/vault-action)。

此示例演示如何创建从 HashiCorp Vault请求机密的作业。

- `<Vault URL>`：将此替换为 HashiCorp Vault 的 URL。
- `<Vault Namespace>`：将此值替换为在 HashiCorp Vault 中设置的命名空间。 例如：`admin`。
- `<Role name>`：将此值替换为在 HashiCorp Vault 信任关系中设置的角色。
- `<Secret-Path>`：将此值替换为从 HashiCorp Vault 检索的机密的路径。 例如：`secret/data/production/ci npmToken`。

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

**注意**：

- 如果无法从公共网络访问 Vault 服务器，请考虑将自承载运行程序与其他可用 Vault [身份验证方法](https://www.vaultproject.io/docs/auth)配合使用。 有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)。
- 必须针对 Vault Enterprise（包括 HCP Vault）部署设置 `<Vault Namespace>`。 有关详细信息，请参阅 [Vault 命名空间](https://www.vaultproject.io/docs/enterprise/namespaces)。

{% endnote %}

### 撤销访问令牌

默认情况下，Vault 服务器会在 TTL 过期时自动撤销访问令牌，因此无需手动撤销访问令牌。 但是，如果确实要在作业完成或失败后立即撤销访问令牌，则可以使用 [Vault API](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) 手动撤销颁发的令牌。

1. 将 `exportToken` 选项设置为 `true`（默认值：`false`）。 这会将颁发的 Vault 访问令牌导出为环境变量：`VAULT_TOKEN`。
2. 添加一个步骤以调用[撤销令牌（自行）](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) Vault API 来撤销访问令牌。

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
