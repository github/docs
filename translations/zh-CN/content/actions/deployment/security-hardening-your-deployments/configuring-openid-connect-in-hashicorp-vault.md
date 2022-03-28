---
title: 在 HashiCorp Vault 中配置 OpenID Connect
shortTitle: 在 HashiCorp Vault 中配置 OpenID Connect
intro: 在工作流程中使用 OpenID Connect 通过 HashiCorp Vault 进行身份验证。
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

## 概览

OpenID Connect (OIDC) 允许您的 {% data variables.product.prodname_actions %} 工作流程使用 HashiCorp Vault 进行身份验证以检索机密。

本指南概述如何配置 HashiCorp Vault 信任 {% data variables.product.prodname_dotcom %} 的 OIDC 作为联合身份，并演示如何在 [hashicorp/vault-action](https://github.com/hashicorp/vault-action) 操作中使用此配置从 HashiCorp Vault 检索机密。

## 基本要求

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## 将身份提供商添加到 HashiCorp Vault

要将 OIDC 与 HashiCorp Vault 配合使用，您需要为 {% data variables.product.prodname_dotcom %} OIDC 提供商添加信任配置。 更多信息请参阅 HashiCorp Vault [文档](https://www.vaultproject.io/docs/auth/jwt)。

配置 Vault 接受 JSON Web 令牌 (JWT) 进行身份验证：
- 对于 `oidc_discovery_url`，请使用 `https://token.actions.githubusercontent.com`
- 对于 `bound_issuer`，请使用 `https://token.actions.githubusercontent.com`
- 确保针对您的安全要求正确定义了 `bound_subject`。 更多信息请参阅[“使用云配置 OIDC 信任”](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)和 [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action)。

## 更新 {% data variables.product.prodname_actions %} 工作流程

要更新 OIDC 的工作流程，您需要对 YAML 进行两项更改：
1. 为令牌添加权限设置。
2. 使用 [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) 操作将 OIDC 令牌 (JWT) 交换为云访问令牌。


要将 OIDC 集成添加到您的工作流程中，以允许他们访问 Vault 中的密钥，您需要添加以下代码更改：

- Grant permission to fetch the token from the {% data variables.product.prodname_dotcom %} OIDC provider:
  - 工作流需要 `permissions:` 设置将 `id-token` 值设为 `write`。 This lets you fetch the OIDC token from every job in the workflow.
- 向 {% data variables.product.prodname_dotcom %} OIDC 提供商请求 JWT，并将其提供给 HashiCorp Vault 以接收访问令牌：
  - 您可以使用[操作工具包](https://github.com/actions/toolkit/)来获取作业的令牌，也可以使用 [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) 操作来获取 JWT 并从 Vault 接收访问令牌。

此示例演示如何将 OIDC 与官方操作结合使用，以向 HashiCorp Vault 请求机密。

### 添加权限设置

 {% data reusables.actions.oidc-permissions-token %}

### 请求访问令牌

`hashicorp/vault-action` 操作从 {% data variables.product.prodname_dotcom %} OIDC 提供商接收 JWT，然后从 HashiCorp Vault 实例请求访问令牌以检索机密。 更多信息请参阅 HashiCorp Vault [文档](https://github.com/hashicorp/vault-action)。

此示例演示如何创建从 HashiCorp Vault请求机密的作业。

- `<Vault URL>`：将此值替换为您的 HashiCorp Vault 的URL。
- `<Role name>`：将此值替换为您在 HashiCorp Vault 信任关系中设置的角色。
- `<Audience>`：将此值替换为您在 HashiCorp Vault 信任关系中定义的受众。
- `<Secret-Path>`：将此值替换为您从 HashiCorp Vault 检索的机密的路径。 例如：`secret/data/ci npmToken`。

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
