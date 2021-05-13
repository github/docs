---
title: 在 XenServer 上安装 GitHub Enterprise Server
intro: '要在 XenServer 上安装 {% data variables.product.prodname_ghe_server %}，您必须先将 {% data variables.product.prodname_ghe_server %} 磁盘映像部署到 XenServer 主机。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 基本要求

- {% data reusables.enterprise_installation.software-license %}
- 您必须在将要运行 {% data variables.product.prodname_ghe_server %} 虚拟机 (VM) 的机器上安装 XenServer Hypervisor 。 我们支持版本 6.0 到 7.0。
- 我们建议使用 XenCenter Windows Management Console 进行初始设置。 下文介绍了使用 XenCenter Windows Management Console 的说明。 更多信息请参阅 Citrix 指南“[如何下载和安装 XenCenter](https://support.citrix.com/article/CTX118531)”。

### 硬件考量因素

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### 下载 {% data variables.product.prodname_ghe_server %} 映像

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. 选择 {% data variables.product.prodname_dotcom %} 内部部署，然后单击 **XenServer (VHD)**。
5. 要下载许可文件，请单击 **Download license**。

### 创建 {% data variables.product.prodname_ghe_server %} 实例

{% data reusables.enterprise_installation.create-ghe-instance %}

1. 在 XenCenter 中，导入您下载的 {% data variables.product.prodname_ghe_server %} 映像。 有关说明，请参阅 XenCenter 指南“[导入磁盘映像](https://docs.citrix.com/en-us/xencenter/current-release/vms-importdiskimage.html)”。
    - 对于“启用操作系统修复”步骤，请选择 **Don't use Operating System Fixup**。
    - 完成后使 VM 保持关机状态。
{% data reusables.enterprise_installation.create-attached-storage-volume %} 有关说明，请参阅 XenCenter 指南“[添加虚拟磁盘](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html)”。

### 配置 {% data variables.product.prodname_ghe_server %} 实例

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 更多信息请参阅“[配置 {% data variables.product.prodname_ghe_server %} 设备](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”。
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### 延伸阅读

- "[系统概述](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[关于升级到新版本](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
