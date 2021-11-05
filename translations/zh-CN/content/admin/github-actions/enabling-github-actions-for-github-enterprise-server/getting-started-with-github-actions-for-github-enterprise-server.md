---
title: GitHub Actions for GitHub Enterprise Server 使用入门
shortTitle: GitHub Actions 使用入门
intro: '了解首次在 {% data variables.product.prodname_ghe_server %} 上启用和配置 {% data variables.product.prodname_actions %}。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
---

{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion ghes %}

本文介绍站点管理员如何配置 {% data variables.product.prodname_ghe_server %} 来使用 {% data variables.product.prodname_actions %}。 它涵盖了硬件和软件需求、存储选项以及安全管理策略。

{% endif %}

## 查看硬件注意事项

{% ifversion ghes = 3.0 %}

{% note %}

**Note**: If you're upgrading an existing {% data variables.product.prodname_ghe_server %} instance to 3.0 or later and want to configure {% data variables.product.prodname_actions %}, note that the minimum hardware requirements have increased. 更多信息请参阅“[升级 {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server#about-minimum-requirements-for-github-enterprise-server-30-and-later)。”

{% endnote %}

{% endif %}

{%- ifversion ghes < 3.2 %}

{% data variables.product.product_location %} 可用的 CPU 和内存资源决定了 {% data variables.product.prodname_actions %} 的最大作业吞吐量。

{% data variables.product.company_short %} 的内部测试展示了具有系列 CPU 和内存配置的 {% data variables.product.prodname_ghe_server %} 实例的以下最大吞吐量。 您可能会看到不同的吞吐量，具体取决于实例的总体活动水平。

{%- endif %}

{%- ifversion ghes > 3.1 %}

可用于 {% data variables.product.product_location %} 的 CPU 和内存资源可确定可同时运行且不造成绩效损失的工作数量。

在没有性能损失的情况下并行工作的高峰数量取决于作业持续时间限、构件使用、运行操作的仓库数量，以及实例所做的与操作无关的其他工作量等。 GitHub 的内部测试在一系列 CPU 和内存配置中证明了 GitHub Enterprise Server 的以下性能目标：

{% endif %}

{%- ifversion ghes < 3.2 %}

| vCPU | 内存     | 最大作业吞吐量 |
|:---- |:------ |:------- |
| 4    | 32 GB  | 演示或轻量测试 |
| 8    | 64 GB  | 25 个作业  |
| 16   | 160 GB | 35 个作业  |
| 32   | 256 GB | 100 个作业 |

{%- endif %}

{%- ifversion ghes > 3.1 %}

| vCPU | 内存     | 最大并行数*   |
|:---- |:------ |:-------- |
| 32   | 128 GB | 1500 个作业 |
| 64   | 256 GB | 1900 个作业 |
| 96   | 384 GB | 2200 个作业 |

*最大并行数使用多个仓库、约 10 分钟的作业持续时间以及 10 MB 构件上传测得。 您可能会经历不同的性能，具体取决于实例的总体活动水平。

{%- endif %}

If you plan to enable {% data variables.product.prodname_actions %} for the users of an existing instance, review the levels of activity for users and automations on the instance and ensure that you have provisioned adequate CPU and memory for your users. 有关监控 {% data variables.product.prodname_ghe_server %} 容量和性能的更多信息，请参阅“[监控您的设备](/admin/enterprise-management/monitoring-your-appliance)”。

有关 {% data variables.product.product_location %} 的最低硬件要求的更多信息，请参阅实例平台的硬件考虑因素。

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud 平台](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations)
- [XenServer](/admin/installation/installing-github-enterprise-server-on-xenserver#hardware-considerations)

{% data reusables.enterprise_installation.about-adjusting-resources %}

## 外部存储要求

要在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %}，您必须有权访问外部 Blob 存储。

{% data variables.product.prodname_actions %} 使用 Blob 存储来存储工作流程运行生成的构件，如工作流程日志和用户上传的构建构件。 所需存储量取决于您使用 {% data variables.product.prodname_actions %} 的情况。 仅支持单个外部存储配置，不能同时使用多个存储提供程序。

{% data variables.product.prodname_actions %} 支持以下存储提供商：

* Azure Blob 存储
* Amazon S3
* S3 兼容的 MinIO Gateway for NAS

{% note %}

**注：**只有这些是 {% data variables.product.company_short %} 支持并可以提供帮助的存储提供程序。 由于 S3 API 的差异，其他 S3 API 兼容的存储提供程序难以正常工作。 [联系我们](https://support.github.com/contact) 以请求支持额外的存储提供程序。

{% endnote %}

## 网络考虑因素

{% data reusables.actions.proxy-considerations %} 有关使用 {% data variables.product.prodname_ghe_server %} 代理的更多信息，请参阅“[配置出站网络代理服务器](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server)”。

{% ifversion ghes %}

## 使用您的存储提供程序启用 {% data variables.product.prodname_actions %}

请按照以下过程之一使用所选存储提供程序启用 {% data variables.product.prodname_actions %}：

* [使用 Azure Blob 存储启用 GitHub Actions](/admin/github-actions/enabling-github-actions-with-azure-blob-storage)
* [使用 Amazon S3 存储启用 GitHub Actions](/admin/github-actions/enabling-github-actions-with-amazon-s3-storage)
* [使用 MinIO Gateway for NAS 存储启用 GitHub Actions](/admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage)

## 管理企业中 {% data variables.product.prodname_actions %} 的访问权限

您可以使用策略来管理 {% data variables.product.prodname_actions %} 的访问。 更多信息请参阅“[为企业执行 GitHub Actions 策略](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)”。

## 添加自托管的运行器

{% data reusables.actions.enterprise-github-hosted-runners %}

要运行 {% data variables.product.prodname_actions %} 工作流程，您需要添加自托管运行器。 您可以在企业、组织或仓库级别添加自托管运行器。 更多信息请参阅“[添加自托管的运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

## 管理哪些操作可用于您的企业

您可以控制允许用户在企业中使用哪些操作。 这包括设置 {% data variables.product.prodname_github_connect %} 以自动访问来自 {% data variables.product.prodname_dotcom_the_website %} 的操作，或手动同步来自 {% data variables.product.prodname_dotcom_the_website %} 的操作。

更多信息请参阅“[关于使用企业中的操作](/admin/github-actions/about-using-actions-in-your-enterprise)”。

## {% data variables.product.prodname_actions %} 的一般安全性增强

如需了解有关 {% data variables.product.prodname_actions %} 安全实践的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的安全性增强](/actions/learn-github-actions/security-hardening-for-github-actions)”。

{% endif %}

## 保留名称

为企业启用 {% data variables.product.prodname_actions %} 时，将创建两个组织：`github` 和 `actions`。 如果您的企业已经使用 `github` 组织名称，则将改用 `github-org` （如果 `github-org` 也在使用中，则改用 `github-github-org`）。 如果您的企业已经使用 `actions` 组织名称，则将改用 `github-actions`（如果 `github-actions` 也在使用中，则改用 `github-actions-org`）。 启用操作后，您将无法再使用这些名称。
