---
title: 系统概述
intro: '{% data variables.product.prodname_ghe_server %} 是包含在虚拟设备中属于您的组织的 {% data variables.product.prodname_dotcom %} 私有副本，此虚拟设备托管在您配置和控制的本地或云中。'
redirect_from:
  - /enterprise/admin/installation/system-overview
  - /enterprise/admin/overview/system-overview
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Security
  - Storage
---

## 存储架构

{% data variables.product.prodname_ghe_server %} 需要两个存储卷，一个安装在*根文件系统*路径下 (`/`)，另一个安装在*用户文件系统*路径下 (`/data/user`)。 这种架构将运行软件环境与持久应用程序数据分离，从而可以简化升级、回滚和恢复程序。

根文件系统包含在分布式机器映像中。 它包含基本操作系统和 {% data variables.product.prodname_ghe_server %} 应用程序环境。 根文件系统应被视为临时性的。 升级到今后的 {% data variables.product.prodname_ghe_server %} 版本时，根文件系统中的所有数据都将被替代。

根存储量分成两个相同大小的分区。 其中一个分区将被挂载为根文件系统 (`/`)。 另一个分区仅在升级和升级的回滚过程中作为 `/mnt/upgrade` 安装，以便在必要时更容易行回滚。 例如，如果分配了 200GB 根卷，將有 100GB 分配到根文件系统，100GB 用于升级和回滚。

根文件系统包含：
  - 自定义证书颁发机构 (CA) 证书（*/usr/local/share/ca-certificates* 中）
  - 自定义网络配置
  - 自定义防火墙配置
  - 复制状态

用户文件系统包含用户配置和数据，例如：
  - Git 仓库
  - 数据库
  - 搜索索引
  - 在 {% data variables.product.prodname_pages %} 站点上发布的内容
  - {% data variables.large_files.product_name_long %} 中的大文件
  - 预接收挂钩环境

## 部署选项

您可以将 {% data variables.product.prodname_ghe_server %} 部署为一个虚拟设备，也可采用高可用性配置。 更多信息请参阅“[配置 {% data variables.product.prodname_ghe_server %} 以实现高可用性](/admin/enterprise-management/configuring-high-availability)”。

某些拥有成千上万名开发者的组织还会从使用 {% data variables.product.prodname_ghe_server %} 集群中受益。 更多信息请参阅“[关于集群](/admin/enterprise-management/configuring-clustering/about-clustering)。”

## 数据保留和数据中心冗余

{% danger %}

在生产环境中使用 {% data variables.product.prodname_ghe_server %} 之前，我们强烈建议您设置备份和灾难恢复计划。 更多信息请参阅“[在设备上配置备份](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)”。

{% enddanger %}

{% data variables.product.prodname_ghe_server %} 支持通过 [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils) 进行在线和增量备份。 您可以通过安全网络链接（SSH 管理端口）远距离为场外或地理上分散的存储生成增量快照。 在主数据中心发生灾难时，您可以在恢复时通过网络将快照恢复到新配置的设备中。

除网络备份外，在设备处于离线或维护模式时，还支持用户存储卷的 AWS (EBS) 和 VMware 磁盘快照。 如果您的服务级别要求允许定期离线维护，可以将定期卷快照用作低成本、低复杂性的方案，代替通过 {% data variables.product.prodname_enterprise_backup_utilities %} 进行网络备份。

更多信息请参阅“[在设备上配置备份](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)”。

## 安全

{% data variables.product.prodname_ghe_server %} 是一个在基础设施上运行的虚拟设备，受您现有的信息安全控制（如防火墙、IAM、监控和 VPN）所管辖。 使用 {% data variables.product.prodname_ghe_server %} 可以帮助您避免因云解决方案而产生的管理合规问题。

{% data variables.product.prodname_ghe_server %} 还包含额外的安全功能。

- [操作系统、软件和补丁](#operating-system-software-and-patches)
- [网络安全性](#network-security)
- [应用程序安全性](#application-security)
- [外部服务和支持](#external-services-and-support-access)
- [加密通信](#encrypted-communication)
- [用户和访问权限](#users-and-access-permissions)
- [身份验证](#authentication)
- [审核和访问日志记录](#audit-and-access-logging)

### 操作系统、软件和补丁

{% data variables.product.prodname_ghe_server %} 运行自定义的 Linux 操作系统，其中只包含必要的应用程序和服务。 {% data variables.product.prodname_dotcom %} 将管理设备核心操作系统的补丁作为其标准产品发布周期的一部分。 补丁可解决 {% data variables.product.prodname_dotcom %} 应用程序的功能、稳定性和非关键性安全问题。 {% data variables.product.prodname_dotcom %} 还根据需要在常规发布周期之外提供重要的安全补丁。

{% data variables.product.prodname_ghe_server %} 作为一种设备提供，许多操作系统包与通常的 Debian 分发相比进行了修改。 因此，我们不支持修改基础操作系统（包括操作系统升级），与 [{% data variables.product.prodname_ghe_server %} 许可和支持协议](https://enterprise.github.com/license)第 11.3“除外条款”保持一致。

目前，{% data variables.product.prodname_ghe_server %} 设备的基础是 Debian 9 (Stretch)，并接受 Debian 长期支持计划的支持。  计划在 Stretch 的 Debian LTS 期间结束前迁移到更新的基础操作系统。

定期补丁更新发布在 {% data variables.product.prodname_ghe_server %} [发行](https://enterprise.github.com/releases)页面上，[发行说明](/admin/release-notes)页面提供详细信息。 这些补丁一般含有经过测试并且质量经过我们工程团队批准的上游供应商和项目安全补丁。 从上游更新发布到测试以及捆绑于即将发布的 {% data variables.product.prodname_ghe_server %} 补丁版本中时，可能稍有延迟。

### 网络安全性

{% data variables.product.prodname_ghe_server %} 的内部防火墙限制对设备服务的网络访问。 网络上仅提供设备正常运行所需的服务。 更多信息请参阅“[网络端口](/admin/configuration/configuring-network-settings/network-ports)”。

### 应用程序安全性

{% data variables.product.prodname_dotcom %} 的应用程序安全团队全时关注 {% data variables.product.prodname_dotcom %} 产品（包括 {% data variables.product.prodname_ghe_server %}）的漏洞评估、渗透测试和代码审查。 {% data variables.product.prodname_dotcom %} 还与外部安全公司签约，要求他们对 {% data variables.product.prodname_dotcom %} 产品定期进行安全性评估。

### 外部服务和支持

{% data variables.product.prodname_ghe_server %} 无需从网络访问外部服务也可以正常运行。 您可以选择集成外部服务，以提供电子邮件传送、外部监控和日志转发等功能。 更多信息请参阅“[配置电子邮件通知](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)”、“[设置外部监控](/admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring)”和“[日志转发](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)”。

您可以手动收集故障排除数据并发送至 {% data variables.contact.github_support %}。 更多信息请参阅“[将数据提供给 {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support)”。

### 加密通信

{% data variables.product.prodname_dotcom %} 将 {% data variables.product.prodname_ghe_server %} 设计为在公司防火墙后面运行。 为确保线路通信安全，我们建议您启用传输层安全协议 (TLS)。 {% data variables.product.prodname_ghe_server %} 在 HTTPS 流量方面支持 2048 位和更高的商业 TLS 证书。 更多信息请参阅“[配置 TLS](/admin/configuration/configuring-network-settings/configuring-tls)”。

默认情况下，该设备还为使用 Git 的仓库访问和管理目的提供安全 Shell (SSH) 访问。 更多信息请参阅“[关于 SSH](/authentication/connecting-to-github-with-ssh/about-ssh)”和“[访问管理 shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)“。

{% ifversion ghes > 3.3 %}

如果您为 {% data variables.product.product_location %} 配置 SAML 身份验证，则可以在实例和 SAML IdP 之间启用加密断言。 更多信息请参阅“[使用 SAML](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-saml#enabling-encrypted-assertions)”。

{% endif %}

### 用户和访问权限

{% data variables.product.prodname_ghe_server %} 提供三种类型的帐户。

- `管理员` Linux 用户帐户已控制对基础操作系统的访问，包括对直接文件系统和数据库的访问。 一小部分受信任的管理员应该有权访问此帐户，他们可以通过 SSH 访问。 更多信息请参阅“[访问管理 shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)。”
- 设备 Web 应用程序中的用户帐户对自己的数据以及其他用户或组织明确授予权限的任何数据具有完全访问权限。
- 设备 Web 应用程序中的站点管理员是可以管理高级 Web 应用程序和设备设置、用户和组织帐户设置以及仓库数据的用户帐户。

关于 {% data variables.product.prodname_ghe_server %} 用户权限的更多信息，请参阅“[GitHub 上的访问权限](/get-started/learning-about-github/access-permissions-on-github) ”。

### 身份验证

{% data variables.product.prodname_ghe_server %} 提供四种身份验证方法。

- SSH 公钥身份验证提供使用 Git 的仓库访问权限和管理 shell 的访问权限。 更多信息请参阅“[关于 SSH](/authentication/connecting-to-github-with-ssh/about-ssh)”和“[访问管理 shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)“。
- 使用 HTTP cookie 的用户名和密码身份验证提供 Web 应用程序访问和会话管理权限，可选择双重身份验证 (2FA)。 更多信息请参阅“[使用内置身份验证](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication)”。
- 使用 LDAP 服务、SAML 身份提供程序 (IdP) 或其他兼容服务的外部 LDAP、SAML 或 CAS 身份验证提供对 Web 应用程序的访问权限。 更多信息请参阅“[为您的 GitHub Enterprise Server 实例验证用户身份](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance)“。
- OAuth 和个人访问令牌为外部客户端和服务提供对 Git 仓库数据和 API 的访问权限。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

### 审核和访问日志记录

{% data variables.product.prodname_ghe_server %} 存储传统的操作系统日志和应用程序日志。 应用程序还会编写详细的审核和安全日志，永久存储在 {% data variables.product.prodname_ghe_server %} 上。 您可以通过 `syslog-ng` 协议将两种类型的日志实时转发到多个目标。 更多信息请参阅“[日志转发](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)。”

访问和审核日志包括如下信息。

#### 访问日志

- 关于浏览器和 API 访问的完整 web 服务器日志
- 通过 Git、HTTP 和 SSH 协议访问仓库数据的完整日志
- 通过 HTTPS 和 SSH 的管理访问日志

#### 审核日志

- 用户登录、密码重置、2FA 请求、电子邮件设置更改，以及对授权应用程序和 API 的更改
- 站点管理员操作，例如解锁用户帐户和仓库
- 仓库推送事件、访问授权、转让和重命名
- 组织成员变更，包括团队创建和删除

## {% data variables.product.prodname_ghe_server %} 的开源依赖项

要查看您的设备 {% data variables.product.prodname_ghe_server %} 版本中依赖项的完整列表以及每个项目的许可，请访问 `http(s)://HOSTNAME/site/credits`。

您的设备上提供包含依赖项和关联元数据完整列表的 tarball：
- 要查看所有平台通用的依赖项，请访问 `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`
- 要查看平台特有的依赖项，请访问 `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`

还提供包含依赖项和元数据完整列表的 tarball，地址为 `https://enterprise.github.com/releases/<version>/download.html`。

## 延伸阅读

- “[设置 {% data variables.product.prodname_ghe_server %} 的试用版](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)”
- “[设置 {% data variables.product.prodname_ghe_server %} 实例](/admin/installation/setting-up-a-github-enterprise-server-instance)”
- `github/roadmap` 仓库中的 [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %})
