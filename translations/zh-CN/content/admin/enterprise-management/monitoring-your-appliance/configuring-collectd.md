---
title: 配置 collectd
intro: '{% data variables.product.prodname_enterprise %} 可以通过 `collectd` 收集数据并将数据发送到外部 `collectd` 服务器。 除了其他指标外，我们还会收集标准数据集，例如 CPU 利用率、内存与磁盘使用量、网络接口流量与错误，以及 VM 的总负荷。'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd
  - /enterprise/admin/enterprise-management/configuring-collectd
  - /admin/enterprise-management/configuring-collectd
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: f63eb940681be3131a470a7786e134550fdba152
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145100022'
---
## 设置外部 `collectd` 服务器

如果尚未设置外部 `collectd` 服务器，则需要在对 {% data variables.product.product_location %} 启用 `collectd` 转发之前进行设置。 `collectd` 服务器必须运行 `collectd` 5.x 或更高版本。

1. 登录到 `collectd` 服务器。
2. 创建或编辑 `collectd` 配置文件，以加载网络插件并使用正确的值填充服务器和端口指令。 在大多数发行版中，该文件位于 `/etc/collectd/collectd.conf`

用于运行 `collectd` 服务器的示例 collectd.conf：

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

## 在 {% data variables.product.prodname_enterprise %} 上启用 collectd 转发

默认情况下，在 {% data variables.product.prodname_enterprise %} 上禁用 `collectd` 转发。 请按照以下步骤启用和配置 `collectd` 转发：

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. 在日志转发设置下方，选择“启用 collectd 转发”。
1. 在“服务器地址”字段中，输入要将 {% data variables.product.prodname_enterprise %} 设备统计信息转发到的 `collectd` 服务器的地址。
1. 在“端口”字段中，输入用于连接到 `collectd` 服务器的端口。 （默认为 25826）
1. 在“加密设置”下拉菜单中，选择与 `collectd` 服务器通信的安全级别。 （无、签名数据包或加密数据包。）{% data reusables.enterprise_management_console.save-settings %}

## 使用 `ghe-export-graphs` 导出 collectd 数据

命令行工具 `ghe-export-graphs` 将导出 `collectd` 存储在 RRD 数据库中的数据。 此命令会将数据转换为 XML 格式并导出到一个 tarball (`.tgz`) 中。

此文件的主要用途是为 {% data variables.contact.contact_ent_support %} 团队提供关于 VM 性能的数据（无需下载整个支持包）， 不应包含在常规备份导出范围中，也没有对应的导入文件。 如果您联系 {% data variables.contact.contact_ent_support %}，我们可能会要求您提供此数据，以便协助故障排查。

### 使用情况

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

## 故障排除

### 中央 collectd 服务器未收到数据

{% data variables.product.prodname_enterprise %} 随附 `collectd` 版本 5.x。 `collectd` 5.x 不能后向兼容 4.x 发行版系列。 中央 `collectd` 服务器的版本至少需要是 5.x 才能接受从 {% data variables.product.product_location %} 发送的数据。

要获取其他问题的帮助，请联系 {% data variables.contact.contact_ent_support %}。
