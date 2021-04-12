---
title: 在 OpenStack KVM 上安装 GitHub Enterprise Server
intro: '要在 OpenStack KVM 上安装 {% data variables.product.prodname_ghe_server %}，您必须具有 OpenStack 访问权限并下载 {% data variables.product.prodname_ghe_server %} QCOW2 映像。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  enterprise-server: '*'
topics:
  - 企业
---

### 基本要求

- {% data reusables.enterprise_installation.software-license %}
- 您必须有权访问 OpenStack Horizon，即 OpenStack 服务基于 Web 的用户界面。 更多信息请参阅 [Horizon 文档](https://docs.openstack.org/horizon/latest/)。

### 硬件考量因素

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### 下载 {% data variables.product.prodname_ghe_server %} 映像

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. 选择 {% data variables.product.prodname_dotcom %} 内部部署，然后单击 **OpenStack KVM (QCOW2)**。
5. 单击 **Download for OpenStack KVM (QCOW2)**。

### 创建 {% data variables.product.prodname_ghe_server %} 实例

{% data reusables.enterprise_installation.create-ghe-instance %}

1. 在 OpenStack Horizon 中，上传

您下载的 {% data variables.product.prodname_ghe_server %} 映像。 有关说明，请参阅 OpenStack 指南“[上传和管理图像](https://docs.openstack.org/horizon/latest/user/manage-images.html)”的“上传图像”部分。
{% data reusables.enterprise_installation.create-attached-storage-volume %}有关说明，请参阅 OpenStack 指南“[创建和管理卷](https://docs.openstack.org/horizon/latest/user/manage-volumes.html)”。
3. 创建安全组，并为下表中的各个端口添加新的安全组规则。 有关说明，请参阅 OpenStack 指南“[为实例配置访问和安全](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html)”。

  {% data reusables.enterprise_installation.necessary_ports %}
4. 也可以将浮动 IP 关联到实例。 根据 OpenStack 设置，您可能需要将浮动 IP 分配给项目并将其关联到实例。 请联系您的系统管理员以确定您是否属于这种情况。 更多信息请参阅 OpenStack 文档中的“[为实例分配浮动 IP 地址](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance)”。
5. 使用在前几步创建的映像、数据卷和安全组启动 {% data variables.product.product_location %}。 有关说明，请参阅 OpenStack 指南“[启动和管理实例](https://docs.openstack.org/horizon/latest/user/launch-instances.html)”。

### 配置 {% data variables.product.prodname_ghe_server %} 实例

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 更多信息请参阅“[配置 {% data variables.product.prodname_ghe_server %} 设备](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”。
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### 延伸阅读

- "[系统概述](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[关于升级到新版本](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
