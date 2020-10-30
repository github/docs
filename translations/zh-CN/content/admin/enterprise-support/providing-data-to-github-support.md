---
title: 将数据提供给 GitHub Support
intro: '由于 {% data variables.contact.github_support %} 无法访问您的环境，因此我们需要您提供一些附加信息。'
redirect_from:
  - /enterprise/admin/guides/installation/troubleshooting/
  - /enterprise/admin/articles/support-bundles/
  - /enterprise/admin/guides/enterprise-support/providing-data-to-github-enterprise-support/
  - /enterprise/admin/enterprise-support/providing-data-to-github-support
versions:
  enterprise-server: '*'
---

### 创建和共享诊断文件

诊断是 {% data variables.product.prodname_ghe_server %} 实例的设置和环境的概览，其中包含：

- 客户端许可信息，包括公司名称、到期日期和用户许可数量
- 版本号和 SHA
- VM 架构
- 主机名、私有模式、SSL 设置
- 加载和处理列表
- 网络设置
- 身份验证方法和详情
- 仓库、用户和其他安装数据的数量

您可以从 {% data variables.enterprise.management_console %} 或通过运行 `ghe-diagnostics` 命令行实用程序下载实例的诊断。

#### 从 {% data variables.enterprise.management_console %} 创建诊断文件

如果您没有随时可用的 SSH 密钥，则可以使用此方法。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. 单击 **Download diagnostics info**。

#### 使用 SSH 创建诊断文件

您无需登录 {% data variables.enterprise.management_console %} 即可使用此方法。

使用 [ghe-diagnostics](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-diagnostics) 命令行实用程序检索实例的诊断。

```shell
$ ssh -p122 admin@<em>hostname</em> -- 'ghe-diagnostics' > diagnostics.txt
```

### 创建和共享支持包

您提交支持请求后，我们可能会要求您与我们团队共享支持包。 支持包是一个 gzip 压缩的 tar 存档，其中包含来自您的实例的诊断和重要日志，例如：

- 在对身份验证错误进行故障排查或者配置 LDAP、CAS 或 SAML 时，与身份验证相关的日志可能会十分有用
- {% data variables.enterprise.management_console %} 日志
- `github-logs/exceptions.log`：关于站点上遇到的 500 个错误的信息
- `github-logs/audit.log`：{% data variables.product.prodname_ghe_server %} 审核日志
- `babeld-logs/babeld.log`：Git 代理日志
- `system-logs/haproxy.log`：HAProxy 日志
- `elasticsearch-logs/github-enterprise.log`：Elasticsearch 日志
- `configuration-logs/ghe-config.log`：{% data variables.product.prodname_ghe_server %} 配置日志
- `collectd/logs/collectd.log`：Collectd 日志
- `mail-logs/mail.log`：SMTP 电子邮件交付日志
- `hookshot-logs/exceptions.log`：Web 挂钩交付错误

更多信息请参阅“[审核日志](/enterprise/{{ currentVersion }}/admin/guides/installation/audit-logging)”。

支持包包含过去两天的日志。 要获取过去七天的日志，您可以下载扩展支持包。 更多信息请参阅“[创建和共享扩展支持包](#creating-and-sharing-extended-support-bundles)”。

{% tip %}

**提示：**当您联系 {% data variables.contact.github_support %} 时，您将收到一封确认电子邮件，其中包含事件单参考链接。 如果 {% data variables.contact.github_support %} 要求您上传支持包，则可以使用事件单参考链接来上传支持包。

{% endtip %}

#### 从 {% data variables.enterprise.management_console %} 创建支持包

如果您可以访问基于 web 的 {% data variables.enterprise.management_console %} 并具有出站互联网访问权限，则可以使用下列步骤来创建和共享支持包。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. 单击 **Download support bundle**。
{% data reusables.enterprise_enterprise_support.sign-in-to-support %}
{% data reusables.enterprise_enterprise_support.upload-support-bundle %}

#### 使用 SSH 创建支持包

如果您可以通过 SSH 访问 {% data variables.product.prodname_ghe_server %} 设备并具有出站互联网访问权限，则可以使用下列步骤来创建和共享支持包。

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}

1. 通过 SSH 下载支持包：
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
  ```
  有关 `ghe-support-bundle` 命令的更多信息，请参阅“[命令行实用程序](/enterprise/admin/guides/installation/command-line-utilities#ghe-support-bundle)”。
{% data reusables.enterprise_enterprise_support.sign-in-to-support %}
{% data reusables.enterprise_enterprise_support.upload-support-bundle %}

#### 使用您的企业帐户上传支持包

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. 在左侧边栏中，单击 **Enterprise licensing（企业许可）**。 ![企业帐户设置侧边栏中的"Enterprise licensing（企业许可）"选项卡](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. 在“{% data variables.product.prodname_enterprise %} 帮助”下，单击 **Upload a support bundle（上传支持包）**。 ![上传支持包链接](/assets/images/enterprise/support/upload-support-bundle.png)
5. 在“Select an enterprise account（选择企业帐户）”下，从下拉菜单选择支持包的相关帐户。 ![选择支持包的企业帐户](/assets/images/enterprise/support/support-bundle-account.png)
6. 在“为 {% data variables.contact.enterprise_support %} 上传支持包”下，选择您的支持包，单击 **Choose file（选择文件）**，或将您的支持包文件拖到 **Choose file（选择文件）**上。 ![上传支持包文件](/assets/images/enterprise/support/choose-support-bundle-file.png)
7. 单击 **Upload（上传）**。

#### 使用 SSH 直接上传支持包

在以下情况下您可以直接将支持包上传到我们的服务器：
- 您可以通过 SSH 访问 {% data variables.product.prodname_ghe_server %} 设备。
- 允许从 {% data variables.product.prodname_ghe_server %} 设备通过 TCP 端口 443 建立出站 HTTPS 连接。

1. 将包上传到我们的支持包服务器：
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
  ```

### 创建和共享扩展支持包

支持包包括过去两天的日志，而_扩展_支持包包括过去七天的日志。 如果 {% data variables.contact.github_support %} 调查的事件发生在两天之前，我们可能会要求您分享扩展支持包。 需要 SSH 权限才能下载扩展包 - 不能从 {% data variables.enterprise.management_console %} 下载扩展包。

为避免体积变得太大，支持包只包含尚未轮换和压缩的日志。 关于 {% data variables.product.prodname_ghe_server %} 上的日志轮换，可针对不同的日志文件设置不同的频率（每日或每周），具体取决于我们期望的日志大小。

#### 使用 SSH 创建扩展支持包

如果您可以通过 SSH 访问 {% data variables.product.prodname_ghe_server %} 设备并具有出站互联网访问权限，则可以使用下列步骤来创建和共享扩展支持包。

1. 要通过 SSH 下载扩展支持包，可将 `-x` 标记添加到 `ghe-support-bundle` 命令中：
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o -x' > support-bundle.tgz
  ```
{% data reusables.enterprise_enterprise_support.sign-in-to-support %}
{% data reusables.enterprise_enterprise_support.upload-support-bundle %}

#### 使用 SSH 直接上传扩展支持包

在以下情况下您可以直接将支持包上传到我们的服务器：
- 您可以通过 SSH 访问 {% data variables.product.prodname_ghe_server %} 设备。
- 允许从 {% data variables.product.prodname_ghe_server %} 设备通过 TCP 端口 443 建立出站 HTTPS 连接。

1. 将包上传到我们的支持包服务器：
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u -x'
  ```

### 延伸阅读

- “[关于 {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)”
- “[关于 {% data variables.product.prodname_ghe_server %} 的 {% data variables.contact.premium_support %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)”。
