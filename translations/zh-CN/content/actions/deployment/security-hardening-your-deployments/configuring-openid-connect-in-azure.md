---
title: 在 Azure 中配置 OpenID Connect
shortTitle: 在 Azure 中配置 OpenID Connect
intro: 在工作流程中使用 OpenID Connect 向 Azure 进行身份验证。
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

OpenID Connect (OIDC) 允许您的 {% data variables.product.prodname_actions %} 工作流程访问 Azure 中的资源，而无需将任何 Azure 凭据存储为长期 {% data variables.product.prodname_dotcom %} 机密。

本指南概述了如何配置 Azure 信任 {% data variables.product.prodname_dotcom %} 的 OIDC 作为联合标识，并包括 [`azure/login`](https://github.com/Azure/login) 操作的工作流程示例，该操作使用令牌向 Azure 进行身份验证和访问资源。

## 基本要求

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## 将联合凭据添加到 Azure

{% data variables.product.prodname_dotcom %} 的 OIDC 提供商与 Azure 的工作负载联合身份验证配合使用。 有关概述，请参阅 Microsoft 的文档“[工作负载联合身份验证](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation)”。

要在 Azure 中配置 OIDC 身份提供商，您需要执行以下配置。 有关进行这些更改的说明，请参阅 [Azure 文档](https://docs.microsoft.com/en-us/azure/developer/github/connect-from-azure)。

1. 创建 Azure Active Directory 应用程序和服务主体。
2. 为 Azure Active Directory 应用程序添加联合凭据。
3. 创建用于存储 Azure 配置的 {% data variables.product.prodname_dotcom %} 机密。

配置身份提供商的附加指导：

- 为强化安全，请确保您已查看[“使用云配置 OIDC 信任”](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)。 有关示例，请参阅[“在云提供商中配置主题”](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider)。
- 对于`受众`设置，建议的值为 `api://AzureADTokenExchange`，但您也可以在此处指定其他值。

## 更新 {% data variables.product.prodname_actions %} 工作流程

要更新 OIDC 的工作流程，您需要对 YAML 进行两项更改：
1. 为令牌添加权限设置。
2. 使用 [`azure/login`](https://github.com/Azure/login) 操作将 OIDC 令牌 (JWT) 交换为云访问令牌。

### 添加权限设置

 {% data reusables.actions.oidc-permissions-token %}

### 请求访问令牌

[`azure/login`](https://github.com/Azure/login) 操作从 {% data variables.product.prodname_dotcom %} OIDC 提供商接收 JWT，然后从 Azure 请求访问令牌。 更多信息请参阅 [`azure/login`](https://github.com/Azure/login) 文档。

以下示例将 OIDC ID 令牌与 Azure 交换以接收访问令牌，然后可以使用该令牌访问云资源。

{% raw %}
```yaml{:copy}
name: Run Azure Login with OIDC
on: [push]

permissions:
      id-token: write
      contents: read
jobs: 
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 'Az CLI login'
        uses: azure/login@v1
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}

      - name: 'Run az commands'
        run: |
          az account show
          az group list
```
 {% endraw %}
