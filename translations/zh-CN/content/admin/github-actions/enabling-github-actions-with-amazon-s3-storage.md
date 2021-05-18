---
title: 使用 Amazon S3 存储启用 GitHub Actions
intro: '您可以在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %}，并使用 Amazon S3 存储来存储工作流程运行生成的构件。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

### 基本要求

{% data reusables.actions.enterprise-s3-support-warning %}

在启用 {% data variables.product.prodname_actions %} 之前，请确保您已完成以下步骤：

* 创建 Amazon S3 存储桶，用于存储工作流程运行生成的构件。 {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}

{% data reusables.actions.enterprise-common-prereqs %}

### 使用 Amazon S3 存储启用 {% data variables.product.prodname_actions %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.actions %}
{% data reusables.actions.enterprise-enable-checkbox %}
1. 在“Artifact & Log Storage（构件与日志存储）”下，选择 **Amazon S3**，然后输入您的存储桶详细信息：

   * **AWS 服务 URL**：存储桶的服务 URL。 例如，如果您的 S3 存储桶是在 `us-west-2` 区域中创建的，则此值应为 `https://s3.us-west-2.amazonaws.com`。

     更多信息请参阅 AWS 文档中的“[AWS 服务端点](https://docs.aws.amazon.com/general/latest/gr/rande.html)”。
   * **AWS S3 桶**：S3 存储桶的名称。
   * **AWS S3 访问密钥**和 **AWS S3 密钥**：用于存储桶的 AWS 访问密钥 ID 和密钥。 有关管理 AWS 访问密钥的更多信息，请参阅“[AWS 身份和访问管理文档](https://docs.aws.amazon.com/iam/index.html)”。

   ![用于选择 Amazon S3 存储的单选按钮和用于 S3 配置的字段](/assets/images/enterprise/management-console/actions-aws-s3-storage.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
