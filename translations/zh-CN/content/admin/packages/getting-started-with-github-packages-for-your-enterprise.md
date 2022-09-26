---
title: 企业 GitHub Packages 使用入门
shortTitle: Getting started with GitHub Packages
intro: '您可以通过启用功能、配置第三方存储、配置您想要支持的生态系统以及更新您的 TLS 证书，开始在 {% data variables.product.product_location %} 上使用 {% data variables.product.prodname_registry %}。'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
ms.openlocfilehash: 2389eba768a8b2f865165b43dde0e1b6381c6ae7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '146199960'
---
{% data reusables.package_registry.packages-cluster-support %}

## 步骤 1：检查 {% data variables.product.prodname_registry %} 是否可用于您的企业

{% data variables.product.prodname_registry %} 在 {% data variables.product.prodname_ghe_server %} 3.0 或更高版本中可用。 如果您使用的是早期版本的 {% data variables.product.prodname_ghe_server %}，则必须升级才能使用 {% data variables.product.prodname_registry %}。 有关升级 {% data variables.product.prodname_ghe_server %} 实例的详细信息，请参阅“[关于升级到新版本](/admin/overview/about-upgrades-to-new-releases)”。
## 步骤 2：启用 {% data variables.product.prodname_registry %} 并配置外部存储

{% data variables.product.prodname_ghe_server %} 上的 {% data variables.product.prodname_registry %} 使用外部 Blob 存储来存储您的软件包。

在为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_registry %} 后，需要准备您的第三方存储桶。 所需的存储量取决于您对 {% data variables.product.prodname_registry %} 的使用，且设置指南可能因存储提供商而异。

支持的外部存储提供商
- Amazon Web Services (AWS) S3 {% ifversion ghes %}
- Azure Blob Storage {% endif %}
- MinIO

要启用 {% data variables.product.prodname_registry %} 并配置第三方存储，请参阅：
  - [使用 AWS 启用 GitHub 包](/admin/packages/enabling-github-packages-with-aws){% ifversion ghes %}
  - [使用 Azure Blob 存储启用 GitHub 包](/admin/packages/enabling-github-packages-with-azure-blob-storage){% endif %}
  - [使用 MinIO 启用 GitHub Packages](/admin/packages/enabling-github-packages-with-minio)

## 步骤 3：指定包生态系统以支持实例

选择您要在 {% data variables.product.product_location %} 上启用、禁用或设置为只读的包生态系统。 可用选项包括 {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}、{% endif %}Docker、RubyGems、npm、Apache Maven、Gradle 或 NuGet。  有关详细信息，请参阅“[为企业配置包生态系统支持](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)”。

## 步骤 4：如果需要，请确保具有包主机 URL 的 TLS 证书

如果为 {% data variables.product.product_location %} 启用了子域隔离，则需要创建并上传 TLS 证书，该证书允许要使用的每个生态系统的包主机 URL，例如 `{% data reusables.package_registry.container-registry-hostname %}`。 确保每个包主机 URL 包含 `https://`。

  可以手动创建证书，也可以使用“让我们加密”。 如果已经使用“让我们加密”，必须在启用 {% data variables.product.prodname_registry %} 后申请新的 TLS 证书。 有关包主机 URL 的详细信息，请参阅“[启用子域隔离](/enterprise/admin/configuration/enabling-subdomain-isolation)”。 有关将 TLS 证书上传到 {% data variables.product.product_name %} 的详细信息，请参阅“[配置 TLS](/enterprise/admin/configuration/configuring-tls)”。

## 步骤 5：检查并重命名保留名称

如果要在禁用子域隔离的情况下使用 Docker 生态系统，必须先重命名 {% data variables.product.product_location %} 上名为 `v2` 的任何用户或组织，然后才能在 {% data variables.enterprise.management_console %} 中启用 Docker 生态系统支持。 Docker 使用 `v2` 帐户名称来管理与 Docker API 的路径冲突；启用 Docker 注册表支持后，将无法再使用此名称。

可导航到站点管理仪表板中的“保留登录名”页来查看已保留供内部使用的登录名完整列表。 有关详细信息，请参阅“[保留登录名](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#reserved-logins)”。
