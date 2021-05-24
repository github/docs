---
title: Getting started with GitHub Actions for GitHub Enterprise Server
intro: 'Learn about enabling and configuring {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_server %} for the first time.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server
versions:
  enterprise-server: '>=2.22'
topics:
  - Actions
  - Enterprise
---
{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

This article explains how site administrators can configure {% data variables.product.prodname_ghe_server %} to use {% data variables.product.prodname_actions %}. It covers the hardware and software requirements, presents the storage options, and describes the security management policies.

{% endif %}

### Review hardware considerations

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" %}

{% note %}

**Note**: {% if currentVersion == "enterprise-server@2.22" %}{% data variables.product.prodname_actions %} was available for {% data variables.product.prodname_ghe_server %} 2.22 as a limited beta. {% endif %}If you're upgrading an existing {% data variables.product.prodname_ghe_server %} instance to 3.0 or later and want to configure {% data variables.product.prodname_actions %}, note that the minimum hardware requirements have increased. 更多信息请参阅“[升级 {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server#about-minimum-requirements-for-github-enterprise-server-30-and-later)。”

{% endnote %}

{% endif %}

{% data reusables.actions.enterprise-hardware-considerations %}

For more information about resource requirements for {% data variables.product.prodname_ghe_server %}, see the hardware considerations for your instance's platform.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud 平台](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations)
- [XenServer](/admin/installation/installing-github-enterprise-server-on-xenserver#hardware-considerations)

{% data reusables.enterprise_installation.about-adjusting-resources %}

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

{% data variables.product.prodname_actions %} support on {% data variables.product.prodname_ghe_server %} 2.22 was available as a limited beta. To configure {% data variables.product.prodname_actions %} for your instance, upgrade to {% data variables.product.prodname_ghe_server %} 3.0 or later. For more information, see the [{% data variables.product.prodname_ghe_server %} 3.0 release notes](/enterprise-server@3.0/admin/release-notes) and "[Upgrading {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)."

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
