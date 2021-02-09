---
title: Getting started with GitHub Packages for your enterprise
intro: 'You can start using {% data variables.product.prodname_registry %} on {% data variables.product.product_location %} by enabling the feature, configuring third-party storage, configuring the ecosystems you want to support, and updating your TLS certificate.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% if currentVersion == "enterprise-server@2.22" %}

{% data reusables.package_registry.packages-ghes-release-stage %}

{% note %}

**Note:** After you've been invited to join the beta, follow the instructions from your account representative to enable {% data variables.product.prodname_registry %} for {% data variables.product.product_location %}.

{% endnote %}

{% endif %}

{% data reusables.package_registry.packages-cluster-support %}

### Step 1: Enable {% data variables.product.prodname_registry %} and configure external storage

{% data variables.product.prodname_ghe_server %} 上的 {% data variables.product.prodname_registry %} 使用外部 Blob 存储来存储您的软件包。

After enabling {% data variables.product.prodname_registry %} for {% data variables.product.product_location %}, you'll need to prepare your third-party storage bucket. The amount of storage required depends on your usage of {% data variables.product.prodname_registry %}, and the setup guidelines can vary by storage provider.

Supported external storage providers
- Amazon Web Services (AWS) S3 {% if currentVersion ver_gt "enterprise-server@2.22" %}
- Azure Blob Storage {% endif %}
- MinIO

To enable {% data variables.product.prodname_registry %} and configure third-party storage, see:
  - "[Enabling GitHub Packages with AWS](/admin/packages/enabling-github-packages-with-aws)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
  - "[Enabling GitHub Packages with Azure Blob Storage](/admin/packages/enabling-github-packages-with-azure-blob-storage)"{% endif %}
  - "[Enabling GitHub Packages with MinIO](/admin/packages/enabling-github-packages-with-minio)"

### Step 2: Specify the package ecosystems to support on your instance

Choose which package ecosystems you'd like to enable, disable, or set to read-only on your {% data variables.product.product_location %}. Available options are Docker, RubyGems, npm, Apache Maven, Gradle, or NuGet.  For more information, see "[Configuring package ecosystem support for your enterprise](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)."

### Step 3: Ensure you have a TLS certificate for your package host URL, if needed

If subdomain isolation is enabled for {% data variables.product.product_location %}{% if currentVersion == "enterprise-server@2.22" %}, which is required to use {% data variables.product.prodname_registry %} with Docker{% endif %}, you will need to create and upload a TLS certificate that allows the package host URL for each ecosystem you want to use, such as `npm.HOSTNAME`. 确保每个软件包主机 URL 包含 `https:///`。

  You can create the certificate manually, or you can use _Let's Encrypt_. If you already use _Let's Encrypt_, you must request a new TLS certificate after enabling {% data variables.product.prodname_registry %}. 有关包主机 URL 的更多信息，请参阅“[启用子域隔离](/enterprise/admin/configuration/enabling-subdomain-isolation)”。 有关将 TLS 证书上载到 {% data variables.product.product_name %} 的更多信息，请参阅“[配置 TLS](/enterprise/admin/configuration/configuring-tls)”。
