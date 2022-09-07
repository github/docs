---
title: 向 GitHub 支持提供数据
intro: '由于 {% data variables.contact.github_support %} 无法访问环境，因此有时需要你提供一些额外的信息。'
shortTitle: Providing data
versions:
  ghes: '*'
redirect_from:
  - /enterprise/admin/guides/installation/troubleshooting
  - /enterprise/admin/articles/support-bundles
  - /enterprise/admin/guides/enterprise-support/providing-data-to-github-enterprise-support
  - /enterprise/admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/providing-data-to-github-support
topics:
  - Support
ms.openlocfilehash: 56a90a9449a92577d08e068095e5b0dc5b443bb2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331910'
---
## 关于诊断文件和支持包

{% data variables.contact.github_support %} 可能会要求以清理日志文件的形式提供其他数据。 可能需要提供三种类型的日志文件。

诊断文件包含有关 {% data variables.product.prodname_ghe_server %} 实例的设置和环境的信息，支持包包含过去两天的诊断和日志，而扩展支持包还包含诊断和日志，但仅限于过去七天。

## 关于日志文件清理

身份验证令牌、密钥和机密将从支持包或诊断文件中包含的以下日志目录中的日志文件中删除：

* `alambic-logs`
* `babeld-logs`
* `codeload-logs`
* `enterprise-manage-logs`
* `github-logs`
* `hookshot-logs`
* `lfs-server-logs`
* `semiotic-logs`
* `task-dispatcher-logs`
* `pages-logs`
* `registry-logs`
* `render-logs`
* `svn-bridge-logs`

## 创建和共享诊断文件

诊断文件是 {% data variables.product.prodname_ghe_server %} 实例的设置和环境的概述，其中包含：

- 客户端许可信息，包括公司名称、到期日期和用户许可数量
- 版本号和 SHA
- VM 架构
- 主机名、私有模式、SSL 设置
- 加载和处理列表
- 网络设置
- 身份验证方法和详情
- 仓库、用户和其他安装数据的数量

可以从 {% data variables.enterprise.management_console %} 或通过运行 `ghe-diagnostics` 命令行实用程序下载实例的诊断。

### 从 {% data variables.enterprise.management_console %} 创建诊断文件

如果您没有随时可用的 SSH 密钥，则可以使用此方法。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. 单击“下载诊断信息”。

### 使用 SSH 创建诊断文件

您无需登录 {% data variables.enterprise.management_console %} 即可使用此方法。

使用 [ghe-diagnostics](/enterprise/admin/guides/installation/command-line-utilities#ghe-diagnostics) 命令行实用程序检索实例的诊断。

```shell
$ ssh -p122 admin@<em>hostname</em> -- 'ghe-diagnostics' > diagnostics.txt
```

## 创建和共享支持包

您提交支持请求后，我们可能会要求您与我们团队共享支持包。 支持包是一个 gzip 压缩的 tar 存档，其中包含来自您的实例的诊断和重要日志，例如：

- 在对身份验证错误进行故障排查或者配置 LDAP、CAS 或 SAML 时，与身份验证相关的日志可能会十分有用
- {% data variables.enterprise.management_console %} 日志
- `github-logs/exceptions.log`：关于站点上遇到的 500 个错误的信息
- `github-logs/audit.log`{% data variables.product.prodname_ghe_server %} 审核日志
- `babeld-logs/babeld.log`：Git 代理日志
- `system-logs/haproxy.log`：HAProxy 日志
- `elasticsearch-logs/github-enterprise.log`：Elasticsearch 日志
- `configuration-logs/ghe-config.log`：{% data variables.product.prodname_ghe_server %} 配置日志
- `collectd/logs/collectd.log`：收集的日志
- `mail-logs/mail.log`：SMTP 电子邮件传递日志

有关详细信息，请参阅“[关于你企业的审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)”。

支持包包含过去两天的日志。 要获取过去七天的日志，您可以下载扩展支持包。 有关详细信息，请参阅“[创建和共享扩展支持包](#creating-and-sharing-extended-support-bundles)”。

{% tip %}

**提示：** 联系 {% data variables.contact.github_support %} 时，你将收到一封确认电子邮件，其中包含票证参考链接。 如果 {% data variables.contact.github_support %} 要求您上传支持包，则可以使用事件单参考链接来上传支持包。

{% endtip %}

### 从 {% data variables.enterprise.management_console %} 创建支持包

如果您可以访问基于 web 的 {% data variables.enterprise.management_console %} 并具有出站互联网访问权限，则可以使用下列步骤来创建和共享支持包。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. 单击“下载支持包”。
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### 使用 SSH 创建支持包

如果您可以通过 SSH 访问 {% data variables.product.product_location %} 并且拥有出站互联网访问权限，则可以使用下列步骤来创建和共享支持包。

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}

1. 通过 SSH 下载支持包：
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
  ```
  有关 `ghe-support-bundle` 命令的详细信息，请参阅“[命令行实用工具](/enterprise/admin/guides/installation/command-line-utilities#ghe-support-bundle)”。
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### 使用您的企业帐户上传支持包

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
3. 在左侧边栏中，单击“企业许可”。
  ![显示企业帐户设置侧边栏中的“企业许可”链接的屏幕截图。](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. 在“{% data variables.product.prodname_enterprise %} 帮助”下，单击“上传支持包”。
  ![显示“上传支持包链接”的屏幕截图。](/assets/images/enterprise/support/upload-support-bundle.png)
5. 在“Select an enterprise account（选择企业帐户）”下，从下拉菜单选择支持包的相关帐户。
  ![显示下拉菜单的屏幕截图，用于选择支持包的企业帐户。](/assets/images/enterprise/support/support-bundle-account.png)
6. 在“为 {% data variables.contact.enterprise_support %} 上传支持包”下，选择你的支持包，单击“选择文件”，或将你的支持包文件拖到“选择文件” 。
  ![显示“选择文件”按钮的屏幕截，用于上传支持包文件。](/assets/images/enterprise/support/choose-support-bundle-file.png)
7. 单击“上载” 。

### 使用 SSH 直接上传支持包

在以下情况下您可以直接将支持包上传到我们的服务器：
- 您可以通过 SSH 访问 {% data variables.product.product_location %}。
- 通过 TCP 端口 443 的出站 HTTPS 连接允许从 {% data variables.product.product_location %} 连接到 _enterprise-bundles.github.com_ 和 _esbtoolsproduction.blob.core.windows.net_。

1. 将包上传到我们的支持包服务器：
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
  ```

## 创建和共享扩展支持包

支持包包括过去两天的日志，而扩展支持包包括过去七天的日志。 如果 {% data variables.contact.github_support %} 调查的事件发生在两天之前，我们可能会要求您分享扩展支持包。 需要 SSH 权限才能下载扩展包 - 不能从 {% data variables.enterprise.management_console %} 下载扩展包。

为避免体积变得太大，支持包只包含尚未轮换和压缩的日志。 关于 {% data variables.product.prodname_ghe_server %} 上的日志轮换，可针对不同的日志文件设置不同的频率（每日或每周），具体取决于我们期望的日志大小。

### 使用 SSH 创建扩展支持包

如果您可以通过 SSH 访问 {% data variables.product.product_location %} 并有拥有出站互联网访问权限，则可以使用下列步骤来创建和共享扩展支持包。

1. 将 `-x` 标记添加到 `ghe-support-bundle` 命令，通过 SSH 下载扩展支持包：
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o -x' > support-bundle.tgz
  ```
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### 使用 SSH 直接上传扩展支持包

在以下情况下您可以直接将支持包上传到我们的服务器：
- 您可以通过 SSH 访问 {% data variables.product.product_location %}。
- 通过 TCP 端口 443 的出站 HTTPS 连接允许从 {% data variables.product.product_location %} 连接到 _enterprise-bundles.github.com_ 和 _esbtoolsproduction.blob.core.windows.net_。

1. 将包上传到我们的支持包服务器：
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u -x'
  ```

## 延伸阅读

- [关于 GitHub 支持](/support/learning-about-github-support/about-github-support)
- [为企业生成运行状况检查](/enterprise-server@latest/admin/enterprise-management/monitoring-your-appliance/generating-a-health-check-for-your-enterprise)
