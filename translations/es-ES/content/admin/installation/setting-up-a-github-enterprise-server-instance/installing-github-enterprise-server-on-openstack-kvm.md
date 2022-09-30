---
title: Instalar el servidor de GitHub Enterprise en OpenStack KVM
intro: 'Para instalar {% data variables.product.prodname_ghe_server %} en OpenStack KVM, debes tener acceso a OpenStack y descargar la imagen QCOW2 {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
  - /admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on OpenStack
ms.openlocfilehash: 105201d2759b333d297278aa7fe32a9544c68839
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884959'
---
## Requisitos previos

- {% data reusables.enterprise_installation.software-license %}
- Debes tener acceso a una instalación de OpenStack Horizon, la interfaz de usuario con base en la web para los servicios de OpenStack. Para más información, vea la [documentación de Horizon](https://docs.openstack.org/horizon/latest/).

## Consideraciones de hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Descargar la imagen {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. En "{% data variables.product.prodname_dotcom %} Local", selecciona el menú desplegable "Seleccionar el hipervisor" y haz clic en **OpenStack KVM (QCOW2)** .
5. Haga clic en **Descargar para OpenStack KVM (QCOW2)** .

## Crear la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. En OpenStack Horizon, carga la imagen {% data variables.product.prodname_ghe_server %} que descargaste. Para obtener instrucciones, vea la sección "Carga de una imagen" de la guía de OpenStack en "[Carga y administración de imágenes](https://docs.openstack.org/horizon/latest/user/manage-images.html)".
{% data reusables.enterprise_installation.create-attached-storage-volume %} Para obtener instrucciones, vea la guía de OpenStack "[Creación y administración de volúmenes](https://docs.openstack.org/horizon/latest/user/manage-volumes.html)".
3. Crea un grupo de seguridad, y agrega una nueva regla de grupo de seguridad para cada puerto en la tabla de abajo. Para obtener instrucciones, vea la guía de OpenStack "[Configuración del acceso y la seguridad de las instancias](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html)".

  {% data reusables.enterprise_installation.necessary_ports %}
4. De forma opcional, asocia una IP flotante a la instancia. Según tu configuración de OpenStack, es posible que necesites asignar una IP flotante al proyecto y asociarla a la instancia. Contacta a tu administrador de sistema para determinar si este es tu caso. Para más información, vea "[Asignación de una dirección IP flotante a una instancia](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance)" en la documentación de OpenStack.
5. Inicie {% data variables.product.product_location %} con la imagen, el volumen de datos y el grupo de seguridad creados en los pasos anteriores. Para obtener instrucciones, vea la guía de OpenStack "[Inicio y administración de instancias](https://docs.openstack.org/horizon/latest/user/launch-instances.html)".

## Configurar la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para más información, vea "[Configuración del dispositivo {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Información adicional

- "[Información general del sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
