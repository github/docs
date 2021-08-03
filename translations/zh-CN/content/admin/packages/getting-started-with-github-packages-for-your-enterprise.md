---
title: 企业 GitHub Packages 使用入门
shortTitle: Getting started with GitHub Packages
intro: '您可以通过启用功能、配置第三方存储、配置您想要支持的生态系统以及更新您的 TLS 证书，开始在 {% data variables.product.product_location %} 上使用 {% data variables.product.prodname_registry %}。'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
type: how_to
topics:
  - Enterprise
  - Packages
---

{% if currentVersion == "enterprise-server@2.22" %}

{% data reusables.package_registry.packages-ghes-release-stage %}

{% note %}

**注意：**在您被邀请加入测试版后，按照客户代表的说明为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_registry %}。

{% endnote %}

{% endif %}

{% data reusables.package_registry.packages-cluster-support %}

### 第 1 步：启用 {% data variables.product.prodname_registry %} 并配置外部存储

{% data variables.product.prodname_ghe_server %} 上的 {% data variables.product.prodname_registry %} 使用外部 Blob 存储来存储您的软件包。

在为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_registry %} 后，需要准备您的第三方存储桶。 所需的存储量取决于您对 {% data variables.product.prodname_registry %} 的使用，且设置指南可能因存储提供商而异。

支持的外部存储提供商
- Amazon Web Services (AWS) S3 {% if currentVersion ver_gt "enterprise-server@2.22" %}
- Azure Blob Storage {% endif %}
- MinIO

要启用 {% data variables.product.prodname_registry %} 并配置第三方存储，请参阅：
  - “[对 AWS 启用 GitHub Packages](/admin/packages/enabling-github-packages-with-aws)”{% if currentVersion ver_gt "enterprise-server@2.22" %}
  - “[对 Azure Blob Storage 启用 GitHub Packages](/admin/packages/enabling-github-packages-with-azure-blob-storage)”{% endif %}
  - “[对 MinIO 启用 GitHub Packages](/admin/packages/enabling-github-packages-with-minio)”

### 第 2 步：指定包生态系统以支持您的实例

选择您要在 {% data variables.product.product_location %} 上启用、禁用或设置为只读的包生态系统。 可用的选项包括 Docker、RubyGems、npm、Apache Maven、Gradle 或 Nuget。  更多信息请参阅“[为企业配置包生态系统支持](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)”。

### 第 3 步：如果需要，请确保您有包主机 URL 的 TLS 证书

如果为 {% data variables.product.product_location %}{% if currentVersion == "enterprise-server@2.22" %} 启用了子域隔离，这需要 {% data variables.product.prodname_registry %} 与 Docker 一起使用{% endif %}，您需要创建并上传 TLS 证书以允许您想要使用的每个生态系统的包主机 URL，例如 `npm.HOSTNAME`。 确保每个软件包主机 URL 包含 `https:///`。

  您可以手动创建证书，也可以使用_让我们加密_。 如果您已经使用 _Let's Encrypt（让我们加密）_，您必须在启用 {% data variables.product.prodname_registry %} 后申请新的 TLS 证书。 有关包主机 URL 的更多信息，请参阅“[启用子域隔离](/enterprise/admin/configuration/enabling-subdomain-isolation)”。 有关将 TLS 证书上载到 {% data variables.product.product_name %} 的更多信息，请参阅“[配置 TLS](/enterprise/admin/configuration/configuring-tls)”。
