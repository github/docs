---
title: 在 Hyper-V 上安装 GitHub Enterprise Server
intro: '要在 Hyper-V 上安装 {% data variables.product.prodname_ghe_server %}，您必须部署到运行 Windows Server 2008 至 Windows Server 2019 的机器上。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-hyper-v
  - /enterprise/admin/installation/installing-github-enterprise-server-on-hyper-v
  - /admin/installation/installing-github-enterprise-server-on-hyper-v
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: 在 Hyper-V 上安装
---

## 基本要求

- {% data reusables.enterprise_installation.software-license %}
- 您必须具有 Windows Server 2008 至 Windows Server 2019，这些版本支持 Hyper-V。
- 创建虚拟机 (VM）所需的大部分操作也可以使用 [Hyper-V Manager](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts) 执行。 不过，我们建议使用 Windows PowerShell 命令行 shell 进行初始设置。 下文介绍了使用 PowerShell 的示例。 更多信息请参阅 Microsoft 指南“[Windows PowerShell 使用入门](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1)”。

## 硬件考量因素

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## 下载 {% data variables.product.prodname_ghe_server %} 映像

{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. 在“{% data variables.product.prodname_dotcom %} 本地”下，选择“Select your hypervisor（选择您的虚拟机管理程序）”下拉菜单，然后单击 **Hyper-V (VHD)**。
5. 单击 **Download for Hyper-V (VHD)**。

## 创建 {% data variables.product.prodname_ghe_server %} 实例

{% data reusables.enterprise_installation.create-ghe-instance %}

1. 在 PowerShell 中，创建新的第 1 代虚拟机，根据用户许可数配置大小，并附上您下载的 {% data variables.product.prodname_ghe_server %} 图像。 更多信息请参阅 Microsoft 文档中的“[New-VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps)”。
  ```shell
  PS C:\> New-VM -Generation 1 -Name <em>VM_NAME</em> -MemoryStartupBytes <em>MEMORY_SIZE</em> -BootDevice VHD -VHDPath <em>PATH_TO_VHD</em>  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} 将 `PATH_TO_DATA_DISK` 替换为磁盘创建位置的路径。 更多信息请参阅 Microsoft 文档中的“[New-VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps)”。
  ```shell
  PS C:\> New-VHD -Path <em>PATH_TO_DATA_DISK</em> -SizeBytes <em>DISK_SIZE</em>
  ```
3. 将数据磁盘连接到实例。 更多信息请参阅 Microsoft 文档中的“[Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps)”。
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName <em>VM_NAME</em> -Path <em>PATH_TO_DATA_DISK</em>
  ```
4. 启动 VM。 更多信息请参阅 Microsoft 文档中的“[Start-VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps)”。
  ```shell
  PS C:\> Start-VM -Name <em>VM_NAME</em>
  ```
5. 获取 VM 的 IP 地址。 更多信息请参阅 Microsoft 文档中的“[Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps)”。
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName <em>VM_NAME</em>).IpAddresses
  ```
6. 复制 VM 的 IP 地址并将其粘贴到 Web 浏览器中。

## 配置 {% data variables.product.prodname_ghe_server %} 实例

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 更多信息请参阅“[配置 {% data variables.product.prodname_ghe_server %} 设备](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”。
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

## 延伸阅读

- "[系统概述](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[关于升级到新版本](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
