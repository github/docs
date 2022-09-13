---
title: 在 Google Cloud Platform 中配置 OpenID Connect
shortTitle: Configuring OpenID Connect in Google Cloud Platform
intro: 在工作流程中使用 OpenID Connect 向 Google Cloud 平台进行身份验证。
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: issue-4856
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: f8b2c63d442fb5dc5758a6f33bb9db5c2a49c9cc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145087307'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概述

OpenID Connect (OIDC) 允许您的 {% data variables.product.prodname_actions %} 工作流程访问 Google Cloud 平台中的资源，而无需将任何 GCP 凭据存储为长期 {% data variables.product.prodname_dotcom %} 机密。 

本指南概述了如何配置 GCP 信任 {% data variables.product.prodname_dotcom %} 的 OIDC 作为联合标识，并包含 [`google-github-actions/auth`](https://github.com/google-github-actions/auth) 操作的工作流示例，该操作使用令牌向 GCP 进行身份验证并访问资源。

## 先决条件

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## 添加 Google Cloud 工作负载身份提供商

要在 GCP 中配置 OIDC 身份提供商，您需要执行以下配置。 若要了解如何进行这些更改，请参阅 [GCP 文档](https://github.com/google-github-actions/auth)。

1. 创建新的身份池。
2. 配置映射并添加条件。
3. 将新池连接到服务帐户。 

配置身份提供商的附加指导：

- 有关安全强化，请确保已查看[“使用云配置 OIDC 信任”](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)。 有关示例，请参阅[“在云提供商中配置主题”](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider)。
- 要使服务帐户可用于配置，需要将其分配给 `roles/iam.workloadIdentityUser` 角色。 有关详细信息，请参阅 [GCP 文档](https://cloud.google.com/iam/docs/workload-identity-federation?_ga=2.114275588.-285296507.1634918453#conditions)。
- 要使用的颁发者 URL：{% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}

## 更新 {% data variables.product.prodname_actions %} 工作流程

要更新 OIDC 的工作流程，您需要对 YAML 进行两项更改：
1. 为令牌添加权限设置。
2. 使用 [`google-github-actions/auth`](https://github.com/google-github-actions/auth) 操作将 OIDC 令牌 (JWT) 交换为云访问令牌。

### 添加权限设置

 {% data reusables.actions.oidc-permissions-token %}

### 请求访问令牌

`google-github-actions/auth` 操作从 {% data variables.product.prodname_dotcom %} OIDC 提供商接收 JWT，然后从 GCP 请求访问令牌。 有关详细信息，请参阅 [GCP 文档](https://github.com/google-github-actions/auth)。

此示例有一个名为 `Get_OIDC_ID_token` 的作业，该作业使用操作从 GCP 请求服务列表。

- `<example-workload-identity-provider>`：将此值替换为指向 GCP 中标识提供者的路径。 例如： `projects/<example-project-id>/locations/global/workloadIdentityPools/<name-of-pool/providers/<name-of-provider>`
- `<example-service-account>`：将此值替换为你在 GCP 中的服务帐户的名称。
- `<project-id>`：将此值替换为 GCP 项目的 ID。

此操作使用[工作负载联合身份验证](https://cloud.google.com/iam/docs/workload-identity-federation)将 {% data variables.product.prodname_dotcom %} OIDC 令牌交换为 Google Cloud 访问令牌。

{% raw %}
```yaml{:copy}
name: List services in GCP
on:
  pull_request:
    branches:
      - main

permissions:
  id-token: write

jobs:
  Get_OIDC_ID_token:
    runs-on: ubuntu-latest
    steps:
    - id: 'auth'
      name: 'Authenticate to GCP'
      uses: 'google-github-actions/auth@v0.3.1'
      with:
          create_credentials_file: 'true'
          workload_identity_provider: '<example-workload-identity-provider>'
          service_account: '<example-service-account>'
    - id: 'gcloud'
      name: 'gcloud'
      run: |-
        gcloud auth login --brief --cred-file="${{ steps.auth.outputs.credentials_file_path }}"
        gcloud services list
```
{% endraw %}
