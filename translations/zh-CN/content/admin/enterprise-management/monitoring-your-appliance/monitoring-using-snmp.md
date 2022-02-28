---
title: 使用 SNMP 进行监视
intro: '{% data variables.product.prodname_enterprise %} 通过 SNMP 提供关于磁盘使用情况、CPU 利用率和内存使用情况等方面的数据。'
redirect_from:
  - /enterprise/admin/installation/monitoring-using-snmp
  - /enterprise/admin/articles/monitoring-using-snmp
  - /enterprise/admin/enterprise-management/monitoring-using-snmp
  - /admin/enterprise-management/monitoring-using-snmp
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
---

SNMP 是一种用于通过网络监视设备的公共标准。 强烈建议启用 SNMP，以便监视 {% data variables.product.product_location %} 的健康状态并了解何时向主机增加更多内存、存储空间或处理器能力。

{% data variables.product.prodname_enterprise %} 采用标准 SNMP 安装，因此您可以充分利用 Nagios 或其他任何监视系统可用的[多种插件](http://www.monitoring-plugins.org/doc/man/check_snmp.html)。

## 配置 SNMP v2c

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.access-monitoring %}
{% data reusables.enterprise_management_console.enable-snmp %}
4. 在 **Community string** 字段中，输入新的社区字符串。 如果留空，此字段将默认为 `public`。 ![添加社区字符串的字段](/assets/images/enterprise/management-console/community-string.png)
{% data reusables.enterprise_management_console.save-settings %}
5. 要测试 SNMP 配置，请在网络中支持 SNMP 的单独工作站上运行以下命令：
  ```shell
  # community-string is your community string
  # hostname is the IP or domain of your Enterprise instance
  $ snmpget -v 2c -c <em>community-string</em> -O e <em>hostname</em> hrSystemDate.0
  ```

这应该返回 {% data variables.product.product_location %} 主机上的系统时间。

## 基于用户的安全性

如果您启用 SNMP v3，则可以通过用户安全模型 (USM) 充分利用提升的基于用户的安全性。 对于每个唯一的用户，您可以指定一个安全等级：
- `noAuthNoPriv`: 此安全等级不提供任何身份验证和隐私保护。
- `authNoPriv`: 此安全等级提供身份验证，但不提供隐私保护。 要查询设备，您需要用户名和密码（长度必须至少为八个字符）。 与 SNMPv2 相似，发送的信息不会进行加密。 身份验证协议可以是 MD5 或 SHA，默认为 SHA。
- `authPriv`: 这个安全等级提供身份验证和隐私保护。 要求进行身份验证（包含一个长度至少为八个字符的身份验证密码），并且会对响应进行加密。 不需要隐私密码，但如果提供隐私密码，其长度必须至少为八个字符。 如果不提供隐私密码，将使用身份验证密码。 隐私协议可以是 DES 或 AES，默认为 AES。

## 配置 SNMP v3 的用户

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.access-monitoring %}
{% data reusables.enterprise_management_console.enable-snmp %}
4. 选择 **SNMP v3**。 ![启用 SNMP v3 的按钮](/assets/images/enterprise/management-console/enable-snmpv3.png)
5. 在“Username（用户名）”中，输入 SNMP v3 用户的唯一用户名。 ![SNMP v3 用户名输入字段](/assets/images/enterprise/management-console/snmpv3-username.png)
6. 在 **Security Level（安全等级）**下拉菜单中，单击 SNMP v3 用户的安全等级。 ![SNMP v3 用户安全等级下拉菜单](/assets/images/enterprise/management-console/snmpv3-securitylevel.png)
7. 对于拥有 `authnopriv` 安全等级的 SNMP v3 用户： ![Authnopriv 安全等级设置](/assets/images/enterprise/management-console/snmpv3-authnopriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
8. 对于拥有 `authpriv` 安全等级的 SNMP v3 用户： ![Authpriv 安全等级设置](/assets/images/enterprise/management-console/snmpv3-authpriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
    - （可选）在“Privacy password（隐私密码）”中输入隐私保护密码。
    - 在“Privacy password（隐私密码）”右侧，在 **Protocol（协议）** 下拉菜单中，单击您要使用的隐私协议方法。
9. 单击 **Add user（添加用户）**。 ![用于添加 SNMP v3 用户的按钮](/assets/images/enterprise/management-console/snmpv3-adduser.png)
{% data reusables.enterprise_management_console.save-settings %}

#### 查询 SNMP 数据

关于您的设备的硬件和软件级信息都适用于 SNMP v3。 由于 `noAuthNoPriv` 和 `authNoPriv` 安全等级缺乏加密和隐私，因此我们的结果 SNMP 报告中不包括 `hrSWRun` 表 (1.3.6.1.2.1.25.4.)。 如果您使用的是 `authPriv` 安全等级，我们将包括此表。 更多信息请参阅“[OID 参考文档](http://oidref.com/1.3.6.1.2.1.25.4)。

如果使用 SNMP v2c，则仅会提供关于您的设备的硬件级信息。 {% data variables.product.prodname_enterprise %} 中的应用程序和服务未配置 OID 来报告指标。 有多个 MIB 可用，在网络中 SNMP 的支持下，在单独的工作站上运行 `smpwaste` 可以看到：

```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
$ snmpwalk -v 2c -c <em>community-string</em> -O e <em>hostname</em>
```

在 SNMP 的可用 MIB 中，最有用的是 `HOST-RESOURCES-MIB` (1.3.6.1.2.1.25)。 请参见下表，了解此 MIB 中的一些重要对象：

| 名称                         | OID                      | 描述                                           |
| -------------------------- | ------------------------ | -------------------------------------------- |
| hrSystemDate.2             | 1.3.6.1.2.1.25.1.2       | 本地日期和时间的主机标记。                                |
| hrSystemUptime.0           | 1.3.6.1.2.1.25.1.1.0     | 自主机上次初始化以来的时间。                               |
| hrMemorySize.0             | 1.3.6.1.2.1.25.2.2.0     | 主机上 RAM 的大小。                                 |
| hrSystemProcesses.0        | 1.3.6.1.2.1.25.1.6.0     | 主机上当前加载或运行的进程上下文数。                           |
| hrStorageUsed.1            | 1.3.6.1.2.1.25.2.3.1.6.1 | 主机上已占用的存储空间大小（单位为 hrStorageAllocationUnits）。 |
| hrStorageAllocationUnits.1 | 1.3.6.1.2.1.25.2.3.1.4.1 | hrStorageAllocationUnit 的大小（单位为字节）           |

例如，要通过 SNMP v3 查询 `hrMemorySize`，请在您的网络中支持 SNMP 的单独工作站上运行以下命令：
```shell
# username is the unique username of your SNMP v3 user
# auth password is the authentication password
# privacy password is the privacy password
# hostname is the IP or domain of your Enterprise instance
$ snmpget -v 3 -u <em>username</em> -l authPriv \
  -A "<em>auth password</em>" -a SHA \
  -X "<em>privacy password</em>" -x AES \
  -O e <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

如果使用 SNMP v2c，要查询 `hrMemorySize`，请在您的网络中支持 SNMP 的单独工作站上运行以下命令：
```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
snmpget -v 2c -c <em>community-string</em> <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

{% tip %}

**注**：为避免泄漏关于设备上所运行服务的信息，我们会将 `hrSWRun` 表 (1.3.6.1.2.1.25.4) 从生成的 SNMP 报告中排除，除非您对 SNMP v3 使用的是 `authPriv` 安全级别。 如果您使用的安全级别为 `authPriv`，我们将包含 `hrSWRun` 表。

{% endtip %}

更多关于 SNMP 中常用系统属性的 OID 映射的信息，请参阅“[CPU、内存和磁盘统计信息的 Linux SNMP OID](http://www.linux-admins.net/2012/02/linux-snmp-oids-for-cpumemory-and-disk.html)”。
