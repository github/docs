---
title: GitHub Actions for GitHub Enterprise Server 使用入门
shortTitle: Get started
intro: '了解首次在 {% data variables.product.prodname_ghe_server %} 上启用和配置 {% data variables.product.prodname_actions %}。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 886f057de3893ae10dbddda6c1ee03d428511677
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580573'
---
{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于 {% data variables.product.prodname_ghe_server %} 上的 {% data variables.product.prodname_actions %}

本文介绍站点管理员如何配置 {% data variables.product.prodname_ghe_server %} 来使用 {% data variables.product.prodname_actions %}。

{% data reusables.enterprise.upgrade-ghes-for-actions %}

{% data reusables.actions.ghes-actions-not-enabled-by-default %} 您需要确定您的实例是否有足够的 CPU 和内存资源处理来自 {% data variables.product.prodname_actions %} 的负载而不会造成性能损失，并可能增加这些资源。 你还需要确定将哪个存储提供商用于存储工作流运行生成的工件{% ifversion actions-caching %}和缓存{% endif %}所需的 Blob 存储。 然后，您将为企业启用 {% data variables.product.prodname_actions %}，管理访问权限，并添加自托管运行器以运行工作流程。

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## 检查硬件要求


{%- ifversion ghes < 3.6 %}

可用于 {% data variables.product.product_location %} 的 CPU 和内存资源可确定可同时运行且不造成绩效损失的工作数量。 {% data reusables.actions.minimum-hardware %}

在没有性能损失的情况下并行工作的高峰数量取决于作业持续时间限、构件使用、运行操作的仓库数量，以及实例所做的与操作无关的其他工作量等。 GitHub 的内部测试在一系列 CPU 和内存配置中证明了 GitHub Enterprise Server 的以下性能目标：

{% endif %}

{%- ifversion ghes > 3.5 %}

可用于 {% data variables.product.product_location %} 的 CPU 和内存资源可确定在不造成性能损失的情况下可以配置的运行器数量。 {% data reusables.actions.minimum-hardware %}

在没有性能损失的情况下连接运行器的高峰数量取决于作业持续时间限、构件使用、运行操作的存储库数量，以及实例所做的与操作无关的其他工作量等因素。 GitHub 的内部测试在一系列 CPU 和内存配置中证明了 GitHub Enterprise Server 的以下性能目标：

{% endif %}

{%- ifversion ghes = 3.2 %}

{% data reusables.actions.hardware-requirements-3.2 %}

最大并发性是使用多个存储库、大约 10 分钟的作业持续时间和 10 MB 的项目上传来度量的。 您可能会经历不同的性能，具体取决于实例的总体活动水平。

{%- endif %}

{%- ifversion ghes = 3.3 %}

{% data reusables.actions.hardware-requirements-3.3 %}

最大并发性是使用多个存储库、大约 10 分钟的作业持续时间和 10 MB 的项目上传来度量的。 您可能会经历不同的性能，具体取决于实例的总体活动水平。

{%- endif %}

{%- ifversion ghes = 3.4 %}

{% data reusables.actions.hardware-requirements-3.4 %}

最大并发性是使用多个存储库、大约 10 分钟的作业持续时间和 10 MB 的项目上传来度量的。 您可能会经历不同的性能，具体取决于实例的总体活动水平。

{%- endif %}

{%- ifversion ghes = 3.5 %}

{% data reusables.actions.hardware-requirements-3.5 %}

{% data variables.product.company_short %} 使用多个存储库、约 10 分钟的作业持续时间以及 10 MB 项目上传测得最大并行数。 您可能会经历不同的性能，具体取决于实例的总体活动水平。

{% note %}

注意：从 {% data variables.product.prodname_ghe_server %} 3.5 开始，{% data variables.product.company_short %} 的内部测试使用第三代 CPU 来更好地反映典型的客户配置。 CPU 中的这项更改表示此版本 {% data variables.product.prodname_ghe_server %} 中性能目标的一小部分更改。

{% endnote %}

{%- endif %}


{%- ifversion ghes = 3.6 %}

{% data reusables.actions.hardware-requirements-3.6 %}

{% data variables.product.company_short %} 使用多个存储库、约 10 分钟的作业持续时间以及 10 MB 项目上传测得最大连接运行器数量。 您可能会经历不同的性能，具体取决于实例的总体活动水平。

{% note %}

**注意：**

- 从 {% data variables.product.prodname_ghe_server %} 3.6 开始，{% data variables.product.company_short %} 记录连接运行器，而不是并发作业。 连接运行器表示可以连接并预期会利用的最多数量的运行器。 还应该注意的是，连接的运行器数量超出预期数量可能会对性能产生负面影响。

- 从 {% data variables.product.prodname_ghe_server %} 3.5 开始，{% data variables.product.company_short %} 的内部测试使用第三代 CPU 来更好地反映典型的客户配置。 CPU 中的这项更改表示此版本 {% data variables.product.prodname_ghe_server %} 中性能目标的一小部分更改。
{% endnote %} {%- endif %}

如果您计划为现有实例的用户启用 {% data variables.product.prodname_actions %}，请查看用户的活动级别和实例上的自动化，并确保已为用户预配足够的 CPU 和内存。 有关监视 {% data variables.product.prodname_ghe_server %} 的容量和性能的详细信息，请参阅“[监视设备](/admin/enterprise-management/monitoring-your-appliance)”。

有关 {% data variables.product.product_location %} 的最低硬件要求的更多信息，请参阅实例平台的硬件考虑因素。

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations){% ifversion ghes < 3.3 %}
- [XenServer](/admin/installation/installing-github-enterprise-server-on-xenserver#hardware-considerations){% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% ifversion ghes > 3.4 %}

（可选）可以通过为 {% data variables.product.prodname_actions %} 配置速率限制来限制对 {% data variables.product.product_location %} 的资源消耗。 有关详细信息，请参阅“[配置速率限制](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-rate-limits-for-github-actions)”。

{% endif %}

## 外部存储要求

要在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %}，您必须有权访问外部 Blob 存储。

{% data variables.product.prodname_actions %} 使用 Blob 存储来存储工作流运行生成的数据，如工作流日志{% ifversion actions-caching %}、缓存{% endif %} 和用户上传的生成工件。 所需存储量取决于您使用 {% data variables.product.prodname_actions %} 的情况。 仅支持单个外部存储配置，不能同时使用多个存储提供程序。

{% data variables.product.prodname_actions %} 支持以下存储提供商：

* Azure Blob 存储
* Amazon S3
* S3 兼容的 MinIO Gateway for NAS

{% note %}

注意：只有这些是 {% data variables.product.company_short %} 支持并可以提供帮助的存储提供程序。 由于 S3 API 的差异，其他 S3 API 兼容的存储提供程序难以正常工作。 [联系我们](https://support.github.com/contact)以请求支持额外的存储提供程序。

{% endnote %}

{% data reusables.actions.minio-gateways-removal %}

在启用 {% data variables.product.prodname_actions %} 之前，可使用 `ghe-actions-precheck` 实用程序从管理 shell 测试存储配置。 有关详细信息，请参阅“[命令行实用程序](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-actions-check)”和“[访问管理 shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)”。

## 网络注意事项

{% data reusables.actions.proxy-considerations %} 有关将代理与 {% data variables.product.prodname_ghe_server %} 配合使用的详细信息，请参阅“[配置出站 Web 代理服务器](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server)”。

{% ifversion ghes %}

## 使用您的存储提供程序启用 {% data variables.product.prodname_actions %}

请按照以下过程之一使用所选存储提供程序启用 {% data variables.product.prodname_actions %}：

* [使用 Azure Blob 存储启用 GitHub Actions](/admin/github-actions/enabling-github-actions-with-azure-blob-storage)
* [使用 Amazon S3 存储启用 GitHub Actions](/admin/github-actions/enabling-github-actions-with-amazon-s3-storage)
* [使用 MinIO Gateway for NAS 存储启用 GitHub Actions](/admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage)

## 管理企业中 {% data variables.product.prodname_actions %} 的访问权限

您可以使用策略来管理 {% data variables.product.prodname_actions %} 的访问。 有关详细信息，请参阅“[为企业强制实施 GitHub Actions 策略](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)”。

## 添加自托管的运行器

{% data reusables.actions.enterprise-github-hosted-runners %}

要运行 {% data variables.product.prodname_actions %} 工作流程，您需要添加自托管运行器。 您可以在企业、组织或仓库级别添加自托管运行器。 有关详细信息，请参阅“[添加自托管运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

## 管理哪些操作可用于您的企业

您可以控制允许用户在企业中使用哪些操作。 这包括设置 {% data variables.product.prodname_github_connect %} 以自动访问来自 {% data variables.product.prodname_dotcom_the_website %} 的操作，或手动同步来自 {% data variables.product.prodname_dotcom_the_website %} 的操作。

有关详细信息，请参阅“[关于在企业中使用操作](/admin/github-actions/about-using-actions-in-your-enterprise)”。

{% data reusables.actions.general-security-hardening %}

{% endif %}

## 保留名称

为企业启用 {% data variables.product.prodname_actions %} 时，会创建两个组织：`github` 和 `actions`。 如果企业已使用 `github` 组织名称，则将改用 `github-org`（如果 `github-org` 也在使用中，则改用 `github-github-org`）。 如果企业已使用 `actions` 组织名称，则将改用 `github-actions`（如果 `github-actions` 也在使用中，则改用 `github-actions-org`）。 启用操作后，您将无法再使用这些名称。
