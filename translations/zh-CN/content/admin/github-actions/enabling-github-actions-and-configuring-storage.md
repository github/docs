---
title: 启用 GitHub Actions 并配置存储
intro: '外部存储必须配置为在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %} 的一部分。'
permissions: '站点管理员可以启用 {% data variables.product.prodname_actions %} 并配置企业设置。'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
versions:
  enterprise-server: '>=2.22'
---

{% if currentVersion == "enterprise-server@2.22" %}
{% note %}

**注：**{% data variables.product.prodname_ghe_server %} 2.22 上的 {% data variables.product.prodname_actions %} 支持是有限的公测版。 查看下面的外部存储要求并[注册测试版](https://resources.github.com/beta-signup/)。

{% endnote %}
{% endif %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于外部存储要求

要在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %}，您必须有权访问外部 Blob 存储。

{% data variables.product.prodname_actions %} 使用 Blob 存储来存储工作流程运行生成的构件，如工作流程日志和用户上传的构建构件。 所需存储量取决于您使用 {% data variables.product.prodname_actions %} 的情况。

{% data variables.product.prodname_actions %} 支持以下存储提供商：

* Amazon S3
* Azure Blob 存储
* S3 兼容的 MinIO Gateway for NAS

#### Amazon S3 权限

如果您使用 Amazon S3，{% data variables.product.prodname_actions %} 需要以下权限来访问您的 AWS 访问密钥 ID 和密码：

* `s3:PutObject`
* `s3:GetObject`
* `s3:ListBucketMultipartUploads`
* `s3:ListMultipartUploadParts`
* `s3:AbortMultipartUpload`
* `s3:DeleteObject`

### 启用 {% data variables.product.prodname_actions %}

{% if currentVersion == "enterprise-server@2.22" %}
{% data variables.product.prodname_ghe_server %} 2.22 上的 {% data variables.product.prodname_actions %} 支持是有限的公测版。 [注册测试版](https://resources.github.com/beta-signup/)。
{% endif %}

### 延伸阅读

- “[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)”中平台的“硬件考量因素”。
