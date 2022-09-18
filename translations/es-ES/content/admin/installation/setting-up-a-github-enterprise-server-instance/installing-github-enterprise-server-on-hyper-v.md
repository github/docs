---
title: Instalar el servidor de GitHub Enterprise en Hyper-V
intro: "Para instalar {% data variables.product.prodname_ghe_server %} en Hyper-V, debes implementarlo en una máquina que ejecute Windows\_Server\_2008 a través de Windows\_Server\_2019."
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
shortTitle: Install on Hyper-V
ms.openlocfilehash: f5b465edc4ff84be00e2749766091cc5cfb1962a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120273'
---
## Requisitos previos

- {% data reusables.enterprise_installation.software-license %}
- Debe tener Windows Server 2008 hasta Windows Server 2019, que admite Hyper-V.
- La mayoría de las acciones necesarias para crear la máquina virtual (VM) también se podrían realizar mediante el [Administrador de Hyper-V](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts). Sin embargo, recomendamos utilizar la shell de la línea de comando de Windows PowerShell para la configuración inicial. Abajo se incluyen ejemplos que utilizan PowerShell. Para más información, vea "[Introducción a Windows PowerShell](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1)".

## Consideraciones de hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Descargar la imagen {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. En "{% data variables.product.prodname_dotcom %} Local", selecciona el menú desplegable "Seleccionar el hipervisor" y haz clic en **Hyper-V (VHD)** .
5. Haga clic en **Download for Hyper-V (VHD)** .

## Crear la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Crea una nueva máquina virtual de Generación 1 en PowerShell, configura el tamaño de acuerdo con la cantidad de licencias que tengas, y adjunta la imagen de {% data variables.product.prodname_ghe_server %} que descargaste. Para más información, vea "[New-VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps)" en la documentación de Microsoft.
  ```shell
  PS C:\> New-VM -Generation 1 -Name <em>VM_NAME</em> -MemoryStartupBytes <em>MEMORY_SIZE</em> -BootDevice VHD -VHDPath <em>PATH_TO_VHD</em>  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} Reemplace `PATH_TO_DATA_DISK` con la ruta a la ubicación donde se crea el disco. Para más información, vea "[New-VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps)" en la documentación de Microsoft.
  ```shell
  PS C:\> New-VHD -Path <em>PATH_TO_DATA_DISK</em> -SizeBytes <em>DISK_SIZE</em>
  ```
3. Adjunta el disco de datos a tu instancia. Para más información, vea "[Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps)" en la documentación de Microsoft.
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName <em>VM_NAME</em> -Path <em>PATH_TO_DATA_DISK</em>
  ```
4. Inicie la máquina virtual. Para más información, vea "[Start-VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps)" en la documentación de Microsoft.
  ```shell
  PS C:\> Start-VM -Name <em>VM_NAME</em>
  ```
5. Obtén la dirección de IP de tu VM. Para más información, vea "[Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps)" en la documentación de Microsoft.
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName <em>VM_NAME</em>).IpAddresses
  ```
6. Copia la dirección de IP de la VM y pégala en el explorador web.

## Configurar la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para más información, vea "[Configuración del dispositivo {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Información adicional

- "[Información general del sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
