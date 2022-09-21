---
title: 开始使用 GitHub Enterprise Server
intro: '开始设置和管理 {% data variables.product.product_location %}。'
versions:
  ghes: '*'
ms.openlocfilehash: 01ed16fd08a57e96270ed1cc577784ba52a15dbf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146454267'
---
本指南将引导您以企业管理员身份设置、配置和管理 {% data variables.product.product_location %}。

{% data variables.product.company_short %} 提供了两种部署 {% data variables.product.prodname_enterprise %} 的方法。

- {% data variables.product.prodname_ghe_cloud %}
- {% data variables.product.prodname_ghe_server %}

{% data variables.product.company_short %} 托管 {% data variables.product.prodname_ghe_cloud %}。 可以在自己的数据中心或受支持的云提供商中部署和托管 {% data variables.product.prodname_ghe_server %} 。

有关 {% data variables.product.product_name %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server)”。

## 第 1 部分：安装 {% data variables.product.product_name %}
要开始使用 {% data variables.product.product_name %}，您需要创建企业帐户、安装实例、使用管理控制台进行初始设置、配置实例和管理帐单。 
### 1. 创建企业帐户
在安装 {% data variables.product.product_name %} 之前，可以通过联系 [{% data variables.product.prodname_dotcom %} 的销售团队](https://enterprise.github.com/contact)在 {% data variables.product.prodname_dotcom_the_website %} 上创建一个企业帐户。 {% data variables.product.prodname_dotcom_the_website %} 上的企业帐户可用于计费以及通过 {% data variables.product.prodname_github_connect %} 与 {% data variables.product.prodname_dotcom_the_website %} 共享功能。  有关详细信息，请参阅[关于企业帐户](/admin/overview/about-enterprise-accounts)。
### 2. 安装 {% data variables.product.product_name %}
要开始使用 {% data variables.product.product_name %}，您需要在所选的虚拟化平台上安装设备。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/admin/installation/setting-up-a-github-enterprise-server-instance)”。

### 3. 使用管理控制台
您将使用管理控制台在首次启动 {% data variables.product.product_location %} 时完成初始设置过程。 您还可以使用管理控制台管理实例设置，例如许可证、域、身份验证和 TLS。 有关详细信息，请参阅“[访问管理控制台](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)”。

### 4. 配置 {% data variables.product.product_location %}
除了管理控制台之外，您还可以使用站点管理仪表板和管理 shell (SSH) 来管理 {% data variables.product.product_location %}。 例如，您可以配置应用程序和速率限制、查看报告、使用命令行实用程序。 有关详细信息，请参阅“[配置你的企业](/admin/configuration/configuring-your-enterprise)”。

您可以使用 {% data variables.product.product_name %} 通过动态主机配置协议 (DHCP) 使用的默认网络设置，也可以使用虚拟机控制台配置网络设置。 您还可以配置代理服务器或防火墙规则。 有关详细信息，请参阅“[配置网络设置](/admin/configuration/configuring-network-settings)”。

### 5. 配置高可用性
您可以配置 {% data variables.product.product_location %} 以实现高可用性，以最大程度地减少硬件故障和网络中断的影响。 有关详细信息，请参阅“[配置高可用性](/admin/enterprise-management/configuring-high-availability)”。

### 6. 设置暂存实例
您可以设置暂存实例来测试修改、规划灾难恢复，并在将更新应用于 {% data variables.product.product_location %} 之前试用更新。  有关详细信息，请参阅“[设置暂存实例](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)”。

### 7. 指定备份和灾难恢复
要保护生产数据，您可以使用 {% data variables.product.prodname_enterprise_backup_utilities %} 配置 {% data variables.product.product_location %} 的自动备份。 有关详细信息，请参阅“[在设备上配置备份](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)”。

### 8. 管理企业的账单
对于连接到您的企业帐户的所有组织和 {% data variables.product.product_name %} 实例，帐单将汇总到所有付费 {% data variables.product.prodname_dotcom %}.com 服务的单个帐单费用中。 企业所有者和帐单管理员均可访问和管理企业帐户的帐单设置。 有关详细信息，请参阅“[管理企业的计费](/admin/overview/managing-billing-for-your-enterprise)”。

## 第 2 部分：组织和管理团队
作为企业所有者或管理员，您可以管理用户、存储库、团队和组织级别的设置。 您可以管理企业成员、创建和管理组织、设置存储库管理策略以及创建和管理团队。

### 1. 管理 {% data variables.product.product_location %} 的成员
{% data reusables.getting-started.managing-enterprise-members %}

### 2. 创建组织
{% data reusables.getting-started.creating-organizations %}

### 3. 向组织添加成员
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. 创建团队
{% data reusables.getting-started.creating-teams %}

### 5. 设置组织和存储库权限级别
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. 实施存储库管理策略
{% data reusables.getting-started.enforcing-repo-management-policies %}

## 第 3 部分：安全构建
要提高 {% data variables.product.product_location %} 的安全性，可以为企业成员配置身份验证，使用工具和审核日志记录以保持合规性，为组织配置安全性和分析功能，以及选择性地启用 {% data variables.product.prodname_GH_advanced_security %}。
### 1. 对企业成员进行身份验证
可以使用 {% data variables.product.product_name %} 的内置身份验证方法，也可以在外部身份验证提供程序（如 CAS、LDAP 或 SAML）之间进行选择，以集成现有帐户并集中管理用户对 {% data variables.product.product_location %} 的访问。 有关详细信息，请参阅“[关于企业身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”。

您还可以要求对每个组织进行双重身份验证。 有关详细信息，请参阅“[要求对组织进行双因素身份验证](/admin/user-management/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization)”。

### 2. 保持合规性
您可以实施所需的状态检查和提交验证，以强制实施组织的合规性标准并自动执行合规性工作流。 您还可以使用组织的审核日志来查看团队执行的操作。 有关详细信息，请参阅“[使用预接收挂钩强制实施策略](/admin/policies/enforcing-policy-with-pre-receive-hooks)”和“[关于企业审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)”。

{% ifversion ghes %}
### 3. 为组织配置安全功能
{% data reusables.getting-started.configuring-security-features %} {% endif %}

{% ifversion ghes %}
### 4. 启用 {% data variables.product.prodname_GH_advanced_security %} 功能
您可以升级 {% data variables.product.product_name %} 许可证以包含 {% data variables.product.prodname_GH_advanced_security %}。 这将提供额外的功能，帮助用户发现和修复其代码中的安全问题，例如代码和机密扫描。 有关详细信息，请参阅“[企业的 {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)”。
{% endif %}

## 第 4 部分：自定义和自动化企业在 {% data variables.product.prodname_dotcom %} 上的工作
您可以使用 {% data variables.product.prodname_dotcom %} 和 {% data variables.product.prodname_oauth_apps %}、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API、{% data variables.product.prodname_actions %}、{% data variables.product.prodname_registry %} 和 {% data variables.product.prodname_pages %} 自定义和自动化企业中组织中的工作。

### 1. 构建 {% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %}
您可以构建与 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 的集成，如 {% data variables.product.prodname_github_apps %} 或 {% data variables.product.prodname_oauth_apps %}，以便在企业中的组织中使用，以补充和扩展您的工作流程。 有关详细信息，请参阅“[关于应用](/developers/apps/getting-started-with-apps/about-apps)”。
### 2. 使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API
{% data reusables.getting-started.api %}

{% ifversion ghes %}
### 3. 生成 {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

有关在 {% data variables.product.product_name %} 上启用和配置 {% data variables.product.prodname_actions %} 的详细信息，请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 使用入门](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)”。

### 4. 发布和管理 {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

有关启用和配置 {% data variables.product.product_location %} 的 {% data variables.product.prodname_registry %} 的详细信息，请参阅“[企业的 {% data variables.product.prodname_registry %} 使用入门](/admin/packages/getting-started-with-github-packages-for-your-enterprise)”。
{% endif %}

### 5. 使用 {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}

## 第 5 部分：与其他 {% data variables.product.prodname_dotcom %} 资源连接
您可以使用 {% data variables.product.prodname_github_connect %} 共享资源。

如果您既是 {% data variables.product.product_name %} 实例的所有者，又是 {% data variables.product.prodname_ghe_cloud %} 组织或企业帐户的所有者，则可以启用 {% data variables.product.prodname_github_connect %}。 {% data variables.product.prodname_github_connect %} 允许您在 {% data variables.product.product_location %} 与 {% data variables.product.prodname_ghe_cloud %} 之间共享特定的工作流程和功能，例如统一搜索和贡献。 有关详细信息，请参阅“[将 {% data variables.product.prodname_ghe_server %} 连接到 {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)”。

## 第 6 部分：使用 {% data variables.product.prodname_dotcom %} 的学习和支持资源
您的企业成员可以通过我们的学习资源了解有关 Git 和 {% data variables.product.prodname_dotcom %} 的更多信息，并且您可以使用 {% data variables.product.prodname_dotcom %} Enterprise 支持来设置和管理 {% data variables.product.product_location %} 时获得所需的支持。

### 1. 在 {% data variables.product.prodname_docs %} 上阅读 {% data variables.product.product_name %}

您可以阅读反映 {% data variables.product.prodname_ghe_server %} 可用功能的文档。 有关详细信息，请参阅[关于 {% data variables.product.prodname_docs %} 的版本](/get-started/learning-about-github/about-versions-of-github-docs)。

### 2. 通过 {% data variables.product.prodname_learning %} 学习
{% data reusables.getting-started.learning-enterprise %}

### 3. 使用 {% data variables.product.prodname_dotcom %} Enterprise 支持
{% data reusables.getting-started.contact-support-enterprise %}
