---
title: Getting started with GitHub Actions for GitHub Enterprise Server
intro: 'Learn about enabling and configuring {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_server %} for the first time.'
permissions: '站点管理员可以启用 {% data variables.product.prodname_actions %} 并配置企业设置。'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
versions:
  enterprise-server: '>=2.22'
---

{% if currentVersion == "enterprise-server@2.22" %}
{% note %}

**注：**{% data variables.product.prodname_ghe_server %} 2.22 上的 {% data variables.product.prodname_actions %} 支持是有限的公测版。 查看下面的外部存储要求并[注册测试版](https://resources.github.com/beta-signup/)。

{% endnote %}
{% endif %}

{% data reusables.actions.enterprise-github-hosted-runners %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

This article explains how site administrators can configure {% data variables.product.prodname_ghe_server %} to use {% data variables.product.prodname_actions %}. It covers the hardware and software requirements, presents the storage options, and describes the security management policies.

### Review hardware considerations

{% data reusables.actions.enterprise-hardware-considerations %}

{% endif %}

### External storage requirements

要在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %}，您必须有权访问外部 Blob 存储。

{% data variables.product.prodname_actions %} 使用 Blob 存储来存储工作流程运行生成的构件，如工作流程日志和用户上传的构建构件。 所需存储量取决于您使用 {% data variables.product.prodname_actions %} 的情况。 Only a single external storage configuration is supported, and you can't use multiple storage providers at the same time.

{% data variables.product.prodname_actions %} 支持以下存储提供商：

* Azure Blob 存储
* Amazon S3
* S3 兼容的 MinIO Gateway for NAS

{% note %}

**Note:** These are the only storage providers that {% data variables.product.company_short %} supports and can provide assistance with. Other S3 API-compatible storage providers are unlikely to work due to differences from the S3 API. [Contact us](https://support.github.com/contact) to request support for additional storage providers.

{% endnote %}

{% if currentVersion == "enterprise-server@2.22" %}

#### Amazon S3 权限

{% data reusables.actions.enterprise-s3-permission %}

### 启用 {% data variables.product.prodname_actions %}

{% data variables.product.prodname_ghe_server %} 2.22 上的 {% data variables.product.prodname_actions %} 支持是有限的公测版。 [注册测试版](https://resources.github.com/beta-signup/)。

### 延伸阅读

- “[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)”中平台的“硬件考量因素”。

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

### Enabling {% data variables.product.prodname_actions %} with your storage provider

Follow one of the procedures below to enable {% data variables.product.prodname_actions %} with your chosen storage provider:

* [Enabling GitHub Actions with Azure Blob storage](/admin/github-actions/enabling-github-actions-with-azure-blob-storage)
* [Enabling GitHub Actions with Amazon S3 storage](/admin/github-actions/enabling-github-actions-with-amazon-s3-storage)
* [Enabling GitHub Actions with MinIO Gateway for NAS storage](/admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage)

### Managing access permissions for {% data variables.product.prodname_actions %} in your enterprise

You can use policies to manage access to {% data variables.product.prodname_actions %}. For more information, see "[Enforcing GitHub Actions policies for your enterprise](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."

### 添加自托管的运行器

{% data reusables.actions.enterprise-github-hosted-runners %}

To run {% data variables.product.prodname_actions %} workflows, you need to add self-hosted runners. You can add self-hosted runners at the enterprise, organization, or repository levels. 更多信息请参阅“[添加自托管的运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

### Managing which actions can be used in your enterprise

You can control which actions your users are allowed to use in your enterprise. This includes setting up {% data variables.product.prodname_github_connect %} for automatic access to actions from {% data variables.product.prodname_dotcom_the_website %}, or manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}.

For more information, see "[About using actions on {% data variables.product.prodname_ghe_server %}](/admin/github-actions/about-using-actions-on-github-enterprise-server)."

### General security hardening for {% data variables.product.prodname_actions %}

If you want to learn more about security practices for {% data variables.product.prodname_actions %}, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions)."

{% endif %}
