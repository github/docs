---
title: Instalar el servidor de GitHub Enterprise en Hyper-V
intro: 'Para instalar {% data variables.product.prodname_ghe_server %} en Hyper-V, debes implementarlo en una máquina ejecutando Windows Server 2008 a través de Windows Server 2019.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-hyper-v/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-hyper-v
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Prerrequisitos

- {% data reusables.enterprise_installation.software-license %}
- Debes tener Windows Server 2008 a través de Windows Server 2019, que admita Hyper-V.
- La mayoría de las acciones necesarias para crear tu máquina virtual (VM) también se pueden realizar utilizando el [Administrador de Hyper-V](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts). Sin embargo, recomendamos utilizar la shell de la línea de comando de Windows PowerShell para la configuración inicial. Abajo se incluyen ejemplos que utilizan PowerShell. Para obtener más información, consulta la guía de Microsoft "[Instrucciones para Windows PowerShell](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1)."

### Consideraciones relativas al hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Descargar la imagen {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Selecciona {% data variables.product.prodname_dotcom %} locales, después haz clic en **Hyper-V (VHD)**.
5. Haz clic en **Download for Hyper-V (VHD) (Descarga para Hyper-V (VHD))**.

### Crear la instancia {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Crea una nueva máquina virtual de Generación 1 en PowerShell, configura el tamaño de acuerdo con la cantidad de licencias que tengas, y adjunta la imagen de {% data variables.product.prodname_ghe_server %} que descargaste. Para obtener más información, consulta "[VM nuevo](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps)" en la documentación de Microsoft.
  ```shell
  PS C:\> New-VM -Generation 1 -Name <em>VM_NAME</em> -MemoryStartupBytes <em>MEMORY_SIZE</em> -BootDevice VHD -VHDPath <em>PATH_TO_VHD</em>  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} Reemplaza la `PATH_TO_DATA_DISK` con la ruta a la ubicación donde creas el disco. Para obtener más información, consulta "[VHD nuevo](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps)" en la documentación de Microsoft.
  ```shell
  PS C:\> New-VHD -Path <em>PATH_TO_DATA_DISK</em> -SizeBytes <em>DISK_SIZE</em>
  ```
3. Adjunta el disco de datos a tu instancia. Para obtener más información, consulta "[Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps)" en la documentación de Microsoft.
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName <em>VM_NAME</em> -Path <em>PATH_TO_DATA_DISK</em>
  ```
4. Inicia la VM. Para obtener más información, consulta "[Iniciar la VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps)" en la documentación de Microsoft.
  ```shell
  PS C:\> Start-VM -Name <em>VM_NAME</em>
  ```
5. Obtén la dirección de IP de tu VM. Para obtener más información, consulta "[Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps)" en la documentación de Microsoft.
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName <em>VM_NAME</em>).IpAddresses
  ```
6. Copia la dirección de IP de la VM y pégala en el explorador web.

### Configurar la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obtener más información, consulta "[Configurar el aparato de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Leer más

- "[Resumen del sistema](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
