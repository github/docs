---
title: Instalar el servidor de GitHub Enterprise en Azure
intro: 'Para instalar {% data variables.product.prodname_ghe_server %} en Azure, debes ejecutar la implementación en una instancia optimizada para memoria que admita Premium Storage.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
  - /admin/installation/installing-github-enterprise-server-on-azure
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Azure
ms.openlocfilehash: 7d5d1024083e448785ca1429ffd71e343e7cd507
ms.sourcegitcommit: 152a2399e22f476eba91a74d1980b96f468f4d2c
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160869'
---
Puedes implementar {% data variables.product.prodname_ghe_server %} en Azure mundial o Azure Government.

## Requisitos previos

- {% data reusables.enterprise_installation.software-license %}
- Debes tener una cuenta Azure capaz de abastecer nuevas máquinas. Para obtener más información, consulte el [sitio web de Microsoft Azure](https://azure.microsoft.com).
- La mayoría de las acciones necesarias para lanzar tu máquina virtual (VM) también se podrían realizar por medio del Portal Azure. Sin embargo, recomendamos instalar la interfaz de la línea de comando de Azure (CLI) para la configuración inicial. Abajo se incluyen ejemplos que utilizan Azure CLI 2.0. Para obtener más información, consulte la guía de Azure "[Instalación de CLI de Azure 2.0](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest)".

## Consideraciones de hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Determinar el tipo de máquina virtual

Antes de iniciar {% data variables.location.product_location %} en Azure, deberás determinar el tipo de máquina que mejor se adapte a las necesidades de tu organización. Para obtener más información sobre las máquinas optimizadas para memoria, consulta "[Tamaños de máquina virtual optimizados para memoria](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes-memory) " en la documentación de Microsoft Azure. Para revisar los requisitos mínimos de recursos para {% data variables.product.product_name %}, consulta "[Requisitos mínimos](#minimum-requirements)".


{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

## Crear la máquina virtual{% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Encuentra la imagen de aparato más reciente {% data variables.product.prodname_ghe_server %}. Para obtener más información sobre el comando `vm image list`, consulte "[`az vm image list`](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list)" en la documentación de Microsoft.
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. Crea una nueva VM utilizando la imagen de aparato que encontraste. Para obtener más información, consulte "[`az vm create`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create)" en la documentación de Microsoft.

  Aprueba opciones para el nombre de tu VM, el grupo de recurso, el tamaño de tu VM, el nombre de tu región Azure preferida, el nombre de la imagen de tu aparato VM que enumeraste en el paso anterior y el almacenamiento SKU para un almacenamiento prémium. Para obtener más información sobre los grupos de recursos, consulte "[Grupos de recursos](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups)" en la documentación de Microsoft.

  ```shell
  $ az vm create -n VM_NAME -g RESOURCE_GROUP --size VM_SIZE -l REGION --image APPLIANCE_IMAGE_NAME --storage-sku Premium_LRS
  ```

3. Configura los parámetros de seguridad en tu VM para abrir los puertos requeridos. Para obtener más información, consulte "[`az vm open-port`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port)" en la documentación de Microsoft. Consulta la tabla de abajo para obtener una descripción de cada puerto para determinar qué puertos debes abrir.

  ```shell
  $ az vm open-port -n VM_NAME -g RESOURCE_GROUP --port PORT_NUMBER
  ```

  Esta tabla identifica para qué se utiliza cada puerto.

  {% data reusables.enterprise_installation.necessary_ports %}

4. Crea y adjunta a la VM un nuevo disco de datos descifrado y configura su tamaño con base en la cantidad de licencias que tengas. Para obtener más información, consulte "[`az vm disk attach`](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach)" en la documentación de Microsoft.

  Apruebe opciones para el nombre de su máquina virtual (por ejemplo, `ghe-acme-corp`), el grupo de recurso, el almacenamiento premium de SKU, el tamaño del disco (por ejemplo, `200`) y un nombre para el disco duro virtual resultante.

  ```shell
  $ az vm disk attach --vm-name VM_NAME -g RESOURCE_GROUP --sku Premium_LRS --new -z SIZE_IN_GB --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **Nota:** Para que las instancias que no sean de producción tengan suficiente rendimiento de E/S, el tamaño mínimo de disco recomendado es de 150 GiB con caché de lectura y escritura habilitada (`--caching ReadWrite`).

   {% endnote %}

## Configurara la máquina virtual {% data variables.product.prodname_ghe_server %}

1. Antes de configurar el VM, debes esperar que pase al estado ReadyRole. Compruebe el estado de la máquina virtual con el comando `vm list`. Para obtener más información, consulte "[`az vm list`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list)" en la documentación de Microsoft.
  ```shell
  $ az vm list -d -g RESOURCE_GROUP -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus
  
  ```
  {% note %}
  
  **Nota:** Azure no crea automáticamente una entrada FQDNS para la máquina virtual. Para obtener más información, consulte "[Creación de un nombre de dominio completo en Azure Portal para una máquina virtual Windows](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn)" en la guía de Azure.
  
  {% endnote %}
  
  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para más información, vea "[Configuración del dispositivo {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
  {% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}
  
## Características de extensión de Azure

{% data variables.product.product_name %} no admite la instalación de características de extensión de Azure. La imagen de {% data variables.product.prodname_ghe_server %} se incluye con un paquete personalizado `waagent` que solo admite funciones básicas de administración de máquinas virtuales y bloquea funciones avanzadas de administración de máquinas virtuales. 

Para evitar la inestabilidad del sistema de la instancia de {% data variables.product.prodname_ghe_server %}, el `walinuxagent` servicio se ejecuta intencionadamente en {% data variables.product.prodname_ghe_server %} en un modo restringido, lo que impide explícitamente que el agente pueda instalar otros agentes. Las características de administración de máquinas virtuales que se basan en agentes y extensiones adicionales más allá de lo que se incluye con la imagen {% data variables.product.prodname_ghe_server %}, como la extensión del Agente de supervisión para Azure Insights o Azure Backups, no se admiten.

Dado que {% data variables.product.product_name %} ejecuta un sistema operativo Linux personalizado con solo las aplicaciones y servicios necesarios, la instalación o actualización manual de paquetes de sistema operativo sobrescribirá estas personalizaciones y puede provocar un comportamiento inesperado. Para más información, vea "[Información general del sistema](/admin/overview/system-overview)".

## Información adicional

- "[Información general del sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
