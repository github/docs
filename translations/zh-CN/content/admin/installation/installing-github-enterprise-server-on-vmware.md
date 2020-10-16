---
title: 在 VMware 上安装 GitHub Enterprise Server
intro: '要在 VMWare 上安装 {% data variables.product.prodname_ghe_server %}，您必须下载 VMWare vSphere 客户端，然后下载并部署 {% data variables.product.prodname_ghe_server %} 软件。'
redirect_from:
  - /enterprise/admin/articles/getting-started-with-vmware/
  - /enterprise/admin/articles/installing-vmware-tools/
  - /enterprise/admin/articles/vmware-esxi-virtual-machine-maximums/
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-vmware/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-vmware
versions:
  enterprise-server: '*'
---

### 基本要求

- {% data reusables.enterprise_installation.software-license %}
- 您必须为将要运行 {% data variables.product.product_location_enterprise %} 的裸金属机应用 VMware vSphere ESXi Hypervisor。 我们支持版本 5.5 到 6.7。 ESXi Hypervisor 免费提供，不包含（可选）vCenter Server。 更多信息请参阅 [VMware ESXi 文档](https://www.vmware.com/products/esxi-and-esx.html)。
- 您将需要访问 vSphere Client。 如果您有 vCenter Server，可以使用 vSphere Web Client。 更多信息请参阅 VMware 指南“[使用 vSphere Web Client 登录 vCenter Server](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-CE128B59-E236-45FF-9976-D134DADC8178.html)”。

### 硬件考量因素

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### 下载 {% data variables.product.prodname_ghe_server %} 映像

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. 选择 {% data variables.product.prodname_dotcom %} 内部部署，然后单击 **VMware ESXi/vSphere (OVA)**。
5. 单击 **Download for VMware ESXi/vSphere (OVA)**。

### 创建 {% data variables.product.prodname_ghe_server %} 实例

{% data reusables.enterprise_installation.create-ghe-instance %}

1. 使用 vSphere Windows Client 或 vCenter Web Client 导入您下载的 {% data variables.product.prodname_ghe_server %} 映像。 有关说明，请参阅 VMware 指南“[部署 OVF 或 OVA 模板](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-17BEDA21-43F6-41F4-8FB2-E01D275FE9B4.html)”。
    - 选择数据存储时，请选择空间足以容纳 VM 磁盘的数据存储。 有关建议为实例使用的最低硬件规格，请参阅“[硬件考量因素](#hardware-considerations)”。 建议采用支持延迟归零的密集预配。
    - 让 **Power on after deployment** 框保持取消选中状态，因为您需要在配置 VM 后为仓库数据添加连接的存储卷。
{% data reusables.enterprise_installation.create-attached-storage-volume %} 有关说明，请参阅 VMware 指南“[向虚拟机添加新硬盘](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F4917C61-3D24-4DB9-B347-B5722A84368C.html)”。

### 配置 {% data variables.product.prodname_ghe_server %} 实例

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 更多信息请参阅“[配置 {% data variables.product.prodname_ghe_server %} 设备](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”。
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### 延伸阅读

 - "[系统概述](/enterprise/admin/guides/installation/system-overview)"
