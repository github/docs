---
title: Installing GitHub Enterprise Server on Hyper-V
intro: 'To install {% data variables.product.prodname_ghe_server %} on Hyper-V, you must deploy onto a machine running Windows Server 2008 through Windows Server 2019.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-hyper-v/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-hyper-v
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 빌드전 요구 사양

- {% data reusables.enterprise_installation.software-license %}
- You must have Windows Server 2008 through Windows Server 2019, which support Hyper-V.
- Most actions needed to create your virtual machine (VM) may also be performed using the [Hyper-V Manager](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts). However, we recommend using the Windows PowerShell command-line shell for initial setup. Examples using PowerShell are included below. For more information, see the Microsoft guide "[Getting Started with Windows PowerShell](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1)."

### Hardware considerations

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Downloading the {% data variables.product.prodname_ghe_server %} image

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Select {% data variables.product.prodname_dotcom %} On-premises, then click **Hyper-V (VHD)**.
5. Click **Download for Hyper-V (VHD)**.

### Creating the {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.create-ghe-instance %}

1. In PowerShell, create a new Generation 1 virtual machine, configure the size based on your user license count, and attach the {% data variables.product.prodname_ghe_server %} image you downloaded. For more information, see "[New-VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps)" in the Microsoft documentation.
  ```shell
  PS C:\> New-VM -Generation 1 -Name <em>VM_NAME</em> -MemoryStartupBytes <em>MEMORY_SIZE</em> -BootDevice VHD -VHDPath <em>PATH_TO_VHD</em>  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} Replace `PATH_TO_DATA_DISK` with the path to the location where you create the disk. For more information, see "[New-VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps)" in the Microsoft documentation.
  ```shell
  PS C:\> New-VHD -Path <em>PATH_TO_DATA_DISK</em> -SizeBytes <em>DISK_SIZE</em>
  ```
3. Attach the data disk to your instance. For more information, see "[Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps)" in the Microsoft documentation.
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName <em>VM_NAME</em> -Path <em>PATH_TO_DATA_DISK</em>
  ```
4. Start the VM. For more information, see "[Start-VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps)" in the Microsoft documentation.
  ```shell
  PS C:\> Start-VM -Name <em>VM_NAME</em>
  ```
5. Get the IP address of your VM. For more information, see "[Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps)" in the Microsoft documentation.
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName <em>VM_NAME</em>).IpAddresses
  ```
6. Copy the VM's IP address and paste it into a web browser.

### Configuring the {% data variables.product.prodname_ghe_server %} instance

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} For more information, see "[Configuring the {% data variables.product.prodname_ghe_server %} appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### 더 읽을거리

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
