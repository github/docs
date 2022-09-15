---
title: 关于 GitHub Enterprise Server
intro: '{% data variables.product.product_name %} 是可在专用环境中托管的软件开发平台。'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 2622e3708cc31b24fe39929da68ba5dc8e864d88
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147877157'
---
## 关于 {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %}你的团队可以使用 {% data variables.product.product_name %} 通过 Git 版本控制、强大的 API、生产力和协作工具及集成生成和交付软件。 熟悉 {% data variables.product.prodname_dotcom_the_website %} 的开发人员可以使用熟悉的功能和工作流无缝加入和参与。 {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data reusables.enterprise.github-distributes-ghes %}有关详细信息，请参阅“[系统概述](/admin/overview/system-overview)”。

可以选择在本地部署 {% data variables.product.product_name %} 或支持云环境。

## 支持的部署环境

可以将 {% data variables.product.product_name %} 部署到本地数据中心内的虚拟化虚拟机监控程序，或部署到公有云服务。

{% data variables.product.company_short %} 支持用于本地部署的以下虚拟化虚拟机监控程序。

- Microsoft Hyper-V
- OpenStack KVM
- VMware ESXi

{% data variables.product.company_short %} 支持以下云部署服务。

- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- Microsoft Azure

有关详细信息，请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/admin/installation/setting-up-a-github-enterprise-server-instance)”。

## 关于发布和升级

{% data reusables.enterprise.constantly-improving %}你负责升级到实例。 有关详细信息，请参阅“[{% data variables.product.product_name %} 版本](/admin/all-releases)”。

## 关于管理

可以通过浏览器、管理 SSH 访问和 REST 或 GraphQL API 配置和监视 {% data variables.product.product_name %}。 {% data variables.product.company_short %} 发现，具有 Linux 管理体验的人员在部署和维护 {% data variables.product.product_name %} 时更为成功。

你可以向某些员工授予对 {% data variables.product.product_name %} 的管理访问权限，以便他们可以设置外部身份验证、配置实例以满足开发人员需求，以及监视实例的活动和性能。 为了确保符合业务规则或法规限制，管理员可以配置控制人们如何使用 {% data variables.product.product_location %} 的策略。 有关详细信息，请参阅以下文章。

- “[关于企业身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”
- “[配置你的企业](/admin/configuration/configuring-your-enterprise)”
- “[关于 {% data variables.product.prodname_enterprise %} API](/admin/overview/about-the-github-enterprise-api)”
- “[监视你的设备](/admin/enterprise-management/monitoring-your-appliance)”
- “[监视企业中的活动](/admin/monitoring-activity-in-your-enterprise)”
- “[关于企业策略](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)”

## 关于可选功能

可以为 {% data variables.product.product_name %} 配置可选功能，以提高企业的软件开发生命周期。

| 功能 | 说明 | 详细信息 |
| :- | :- | :- |
| {% data variables.product.prodname_actions %} | 自动化 CI/CD 和开发工作流 | “[关于企业的 {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)” |
| {% data variables.product.prodname_github_connect %} | 以有限方式受益于 {% data variables.product.prodname_dotcom_the_website %} 的强大功能 | “[关于 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)” |
| {% data variables.product.prodname_GH_advanced_security %} | 提高代码安全性和质量 | “[关于 {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)” |
| {% data variables.product.prodname_registry %} | 为企业托管软件包 | “[{% data variables.product.prodname_registry %} 简介](/packages/learn-github-packages/introduction-to-github-packages)” |

## 关于部署拓扑

默认情况下，{% data variables.product.product_name %} 作为独立实例运行。 可以通过为部署使用不同的拓扑来提高 {% data variables.product.product_name %} 的可靠性和性能。

- 若要缓解系统或网络故障的影响，可以部署被动副本实例。 在影响主实例的中断期间，可以手动故障转移到副本实例。 有关详细信息，请参阅“[关于高可用性配置](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)”。
- 可以配置多个活动副本，以提高与主实例相距很远的开发人员的性能。 有关详细信息，请参阅“[有关异地复制](/admin/enterprise-management/configuring-high-availability/about-geo-replication)”。
- 一些拥有数万个开发人员的企业可能会受益于横向缩放而不是垂直缩放的群集配置。 有关详细信息，请参阅“[关于群集](/admin/enterprise-management/configuring-clustering/about-clustering)”。

## 关于备份和灾难恢复

为了防止开发人员的数据丢失或服务中断，{% data variables.product.company_short %} 强烈建议你制定灾难恢复计划。 可以通过使用 {% data variables.product.prodname_enterprise_backup_utilities %} 部署和配置 Linux 或 Unix 主机系统来备份实例的配置和用户数据。 有关详细信息，请参阅“[在设备上配置备份](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)”。

此外，还可以将被动副本实例配置为在系统或网络出现故障时故障转移到该实例。 有关详细信息，请参阅“[关于部署拓扑](#about-deployment-topologies)”。

## 关于文档

此网站上提供了 {% data variables.product.product_name %} 的管理员和用户的文档 {% data variables.product.prodname_docs %}。 

- [企业管理员文档](/admin)
- [用户文档](/)

{% data variables.product.product_name %} 的不同版本分别反映在有关 {% data variables.product.prodname_docs %} 的文档中。 有关详细信息，请参阅[关于 {% data variables.product.prodname_docs %} 的版本](/get-started/learning-about-github/about-versions-of-github-docs)。

## 尝试 {% data variables.product.product_name %}

可以注册 {% data variables.product.product_name %} 的免费 45 天试用版。 有关详细信息，请参阅“[设置试用版 {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)”。

## 延伸阅读

- “[{% data variables.product.product_name %} 入门](/get-started/onboarding/getting-started-with-github-enterprise-server)”
- “[关于 {% data variables.contact.github_support %}](/support/learning-about-github-support/about-github-support)”
- `github/roadmap` 存储库中的 [{% data variables.product.prodname_roadmap %}]( {% data variables.product.prodname_roadmap_link %} )
