---
title: Instalar el servidor de GitHub Enterprise en XenServer
intro: Para instalar {% data variables.product.prodname_ghe_server %} en XenServer, debes implementar la imagen de disco {% data variables.product.prodname_ghe_server %} a un servidor XenServer.
redirect_from:
- /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver
- /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
- /admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  ghes: <=3.2
type: tutorial
topics:
- Administrator
- Enterprise
- Infrastructure
- Set up
shortTitle: Install on XenServer
ms.openlocfilehash: f4991244e74c9a61d953ecba08cc5c4985906fb6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145116522"
---
{% note %}

  **Nota**: Se interrumpirá la compatibilidad con {% data variables.product.prodname_ghe_server %} en XenServer en {% data variables.product.prodname_ghe_server %} 3.3. Para obtener más información, vea las [notas de la versión de {% data variables.product.prodname_ghe_server %} 3.1](/admin/release-notes#3.1.0).

{% endnote %}

## Requisitos previos

- {% data reusables.enterprise_installation.software-license %}
- Debes instalar el XenServer Hypervisor en la máquina que ejecutará tu máquina virtual (VM) {% data variables.product.prodname_ghe_server %}. Admitimos versiones 6.0 a 7.0.
- Recomendamos utilizar XenCenter Windows Management Console para la configuración inicial. Abajo se incluyen instrucciones utilizando XenCenter Windows Management Console. Para obtener más información, vea la guía de Citrix "[Procedimientos para descargar e instalar una nueva versión de XenCenter](https://support.citrix.com/article/CTX118531)".

## Consideraciones de hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Descargar la imagen {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. En "{% data variables.product.prodname_dotcom %} Local", selecciona el menú desplegable "Seleccionar el hipervisor" y haz clic en **XenServer (VHD)** .
5. Para descargar el archivo de su licencia, haga clic en **Download license** (Descargar licencia).

## Crear la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. En XenCenter, importa la imagen {% data variables.product.prodname_ghe_server %} que descargaste. Para obtener instrucciones, vea la guía de XenCenter "[Importar imágenes de disco](https://docs.citrix.com/en-us/xencenter/current-release/vms-importdiskimage.html)".
    - Para el paso "Enable Operating System Fixup" (Habilitar Ajuste del sistema en funcionamiento), seleccione **Don't use Operating System Fixup** (No usar Ajuste del sistema en funcionamiento).
    - Deja la VM apagada cuando hayas finalizado.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Para obtener instrucciones, vea la guía de XenCenter "[Agregar discos virtuales](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html)".

## Configurar la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para más información, vea "[Configuración del dispositivo {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Información adicional

- "[Información general del sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
