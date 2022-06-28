---
title: 在 Amazon Web Services 中配置 OpenID Connect
shortTitle: 在 Amazon Web Services 中配置 OpenID Connect
intro: 在工作流程中使用 OpenID Connect 向 Amazon Web Services 进行身份验证。
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

OpenID Connect (OIDC) 允许您的 {% data variables.product.prodname_actions %} 工作流程访问 Amazon Web Services (AWS) 中的资源，而无需将任何 AWS 凭据存储为长期 {% data variables.product.prodname_dotcom %} 机密。

本指南介绍如何配置 AWS 信任 {% data variables.product.prodname_dotcom %} 的 OIDC 作为联合标识，并包括使用令牌向 AWS 验证并访问资源的 [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) 工作流程示例。

## 基本要求

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## 将身份提供商添加到 AWS

要将 {% data variables.product.prodname_dotcom %} OIDC 提供商添加到 IAM，请参阅 [AWS 文档](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)。

- 对于提供程序 URL：使用 {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}
- 对于“受众”：如果您使用的是[官方操作](https://github.com/aws-actions/configure-aws-credentials)，请使用 `sts.amazonaws.com`。

### 配置角色和信任策略

要在 IAM 中配置角色和信任，请参阅 AWS 文档中的[“假定角色”](https://github.com/aws-actions/configure-aws-credentials#assuming-a-role)和[“为 Web 身份或 OpenID Connect Federation 创建角色”](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html)。

编辑信任关系以将 `sub` 字段添加到验证条件。 例如：

```json{:copy}
"Condition": {
  "StringEquals": {
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:aud": "sts.amazonaws.com",
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/octo-branch"
  }
}
```

## 更新 {% data variables.product.prodname_actions %} 工作流程

要更新 OIDC 的工作流程，您需要对 YAML 进行两项更改：
1. 为令牌添加权限设置。
2. 使用 [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) 操作将 OIDC 令牌 (JWT) 交换为云访问令牌。

### 添加权限设置

 {% data reusables.actions.oidc-permissions-token %}

### 请求访问令牌

`aws-actions/configure-aws-credentials` 操作从 {% data variables.product.prodname_dotcom %} OIDC 提供商接收 JWT，然后从 AWS 请求访问令牌。 更多信息请参阅 AWS [文档](https://github.com/aws-actions/configure-aws-credentials)。

- `<example-bucket-name>`：在此处添加 S3 存储桶的名称。
- `<role-to-assume>`：将示例替换为您的 AWS 角色。
- `<example-aws-region>`：在此处添加您的 AWS 区域的名称。

```yaml{:copy}
# Sample workflow to access AWS resources when workflow is tied to branch
# The workflow Creates static website using aws s3
name: AWS example workflow
on:
  push
env:
  BUCKET_NAME : "<example-bucket-name>"
  AWS_REGION : "<example-aws-region>"
# permission can be added at job level or workflow level    
permissions:
      id-token: write
      contents: read    # This is required for actions/checkout
jobs:
  S3PackageUpload:
    runs-on: ubuntu-latest
    steps:
      - name: Git clone the repository
        uses: {% data reusables.actions.action-checkout %}
      - name: configure aws credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          role-to-assume: arn:aws:iam::1234567890:role/example-role
          role-session-name: samplerolesession
          aws-region: {% raw %}${{ env.AWS_REGION }}{% endraw %}
      # Upload a file to AWS s3
      - name:  Copy index.html to s3
        run: |
          aws s3 cp ./index.html s3://{% raw %}${{ env.BUCKET_NAME }}{% endraw %}/
```
