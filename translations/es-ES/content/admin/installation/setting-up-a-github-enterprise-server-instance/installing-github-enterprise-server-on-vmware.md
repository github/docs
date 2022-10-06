---
title: Instalación del servidor de GitHub Enterprise en VMware
intro: 'Para instalar {% data variables.product.prodname_ghe_server %} en VMware, debes descargar el cliente vSphere de VMware, y después descargar y desplegar el software de {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/articles/getting-started-with-vmware
  - /enterprise/admin/articles/installing-vmware-tools
  - /enterprise/admin/articles/vmware-esxi-virtual-machine-maximums
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-vmware
  - /enterprise/admin/installation/installing-github-enterprise-server-on-vmware
  - /admin/installation/installing-github-enterprise-server-on-vmware
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on VMware
ms.openlocfilehash: f9e81c624f93c7478eed04b65b3ef43a69ef9291
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147859414'
---
## Requisitos previos

- {% data reusables.enterprise_installation.software-license %}
- Debe tener un hipervisor ESXi de VMware vSphere, aplicado a un equipo sin sistema operativo que ejecutará {% data variables.product.product_location %}s. Se admiten las versiones 5.5 a 6.7 para {% data variables.product.prodname_ghe_server %} 3.4 y versiones anteriores. ESX versión 7.0 es compatible con {% data variables.product.prodname_ghe_server %} 3.5 y versiones posteriores. El Hipervisor de ESXi es gratuito y no incluye el vCenter Server (opcional). Para más información, vea la [documentación de VMware ESXi](https://www.vmware.com/products/esxi-and-esx.html).
- Deberás acceder a vSphere Client. Si tienes vCenter Server puedes usar vSphere Web Client. Para más información,vea la guía de VMware "[Inicio de sesión en vCenter Server mediante el cliente web vSphere](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-CE128B59-E236-45FF-9976-D134DADC8178.html)".

## Consideraciones de hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Descargar la imagen {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. En «{% data variables.product.prodname_dotcom %} Local», selecciona el menú desplegable «Seleccionar el hipervisor» y haz clic en **VMware ESXi/vSphere (OVA)** .
5. Haga clic en **Download for VMware ESXi/vSphere (OVA)** .

## Crear la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Por medio de vSphere Windows Client o vCenter Web Client, importa la imagen del {% data variables.product.prodname_ghe_server %} que descargaste. Para obtener instrucciones, vea la guía de VMware "[Implementación de una plantilla OVF u OVA](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-17BEDA21-43F6-41F4-8FB2-E01D275FE9B4.html)".
    - Cuando seleccionas un almacén de datos, elige uno con suficiente espacio para alojar los discos de la VM. Para obtener las especificaciones de hardware mínimas recomendadas para el tamaño de la instancia, vea "[Consideraciones de hardware](#hardware-considerations)". Te recomendamos un aprovisionamiento robusto con lazy zeroing.
    - Mantenga desactivada la casilla **Power on after deployment**, ya que tendrá que agregar un volumen de almacenamiento adjunto para los datos del repositorio después de aprovisionar la VM.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Para obtener instrucciones, vea la guía de VMware "[Adición de un nuevo disco duro a una máquina virtual](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F4917C61-3D24-4DB9-B347-B5722A84368C.html)".

## Configurar la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para más información, vea "[Configuración del dispositivo {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Información adicional

- "[Información general del sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
