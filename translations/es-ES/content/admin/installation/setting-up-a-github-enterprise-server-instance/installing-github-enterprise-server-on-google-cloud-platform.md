---
title: Instalar el servidor de GitHub Enterprise en Google Cloud Platform
intro: 'Para instalar {% data variables.product.prodname_ghe_server %} en Google Cloud Platform, debes implementar un tipo de máquina soportado y utilizar un disco estándar persistente o un SSD persistente.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
  - /admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on GCP
ms.openlocfilehash: 0fffebece94753365e1b98f014f0514cdef4f98a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116529'
---
## Requisitos previos

- {% data reusables.enterprise_installation.software-license %}
- Debes tener una cuenta de Google Cloud Platform capaz de iniciar instancias de la máquina virtual (VM) de Google Compute Engine (GCE). Para obtener más información, vea el [sitio web de Google Cloud Platform](https://cloud.google.com/) y la [documentación de Google Cloud Platform](https://cloud.google.com/docs/).
- La mayoría de las acciones necesarias para iniciar la instancia también se pueden realizar mediante la [consola de Google Cloud Platform](https://cloud.google.com/compute/docs/console). Sin embargo, recomendamos instalar la herramienta de línea de comando de gcloud compute para la configuración inicial. Se incluyen abajo ejemplos que utilizan la herramienta de línea de comando de gcloud compute. Para obtener más información, vea la guía de instalación y configuración de "[proceso de gcloud](https://cloud.google.com/compute/docs/gcloud-compute/)" en la documentación de Google.

## Consideraciones de hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Determinar el tipo de máquina

Antes de iniciar {% data variables.product.product_location %} en Google Cloud Platform, deberá determinar el tipo de máquina que mejor se adapte a las necesidades de su organización. Para revisar los requisitos mínimos de {% data variables.product.product_name %}, vea "[Requisitos mínimos](#minimum-requirements)".

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data variables.product.company_short %} recomienda una máquina de propósitos generales con memoria alta para {% data variables.product.prodname_ghe_server %}. Para obtener más información, vea "[Tipos de máquina](https://cloud.google.com/compute/docs/machine-types#n2_high-memory_machine_types)" en la documentación de Google Compute Engine.

## Seleccionar la imagen {% data variables.product.prodname_ghe_server %}

1. Con la herramienta de línea de comandos de [proceso de gcloud](https://cloud.google.com/compute/docs/gcloud-compute/), muestre una lista de las imágenes públicas de {% data variables.product.prodname_ghe_server %}:
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

2. Toma nota del nombre de la imagen para la última imagen de GCE de {% data variables.product.prodname_ghe_server %}.

## Configuración del firewall

Las máquinas virtuales de GCE se crean como un miembro de la red, que tiene un firewall. Para la red asociada con la VM {% data variables.product.prodname_ghe_server %}, deberás configurar el firewall para permitir los puertos requeridos en la tabla de abajo. Para obtener más información sobre las reglas de firewall en Google Cloud Platform, vea la guía de Google "[Información general sobre las reglas de firewall](https://cloud.google.com/vpc/docs/firewalls)".

1. Crea la red utilizando la herramienta de línea de comando de gcloud compute. Para obtener más información, vea "[Creación de redes de proceso de gcloud](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create)" en la documentación de Google.
   ```shell
   $ gcloud compute networks create <em>NETWORK-NAME</em> --subnet-mode auto
   ```
2. Crea una regla de firewall para cada uno de los puertos en la tabla de abajo. Para obtener más información, vea "[Reglas de firewall de proceso de gcloud](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/)" en la documentación de Google.
   ```shell
   $ gcloud compute firewall-rules create <em>RULE-NAME</em> \
   --network <em>NETWORK-NAME</em> \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```
   Esta tabla identifica los puertos requeridos y para qué se usa cada puerto.

   {% data reusables.enterprise_installation.necessary_ports %}

## Asignar una IP estática y atribuirla a una VM

Si es un aparato de producción, recomendamos firmemente reservar una dirección de IP estática externa y asignarla a la VM {% data variables.product.prodname_ghe_server %}. En caso contrario, la dirección de IP pública de la VM no se mantendrá después de que se reinicie. Para obtener más información, vea la guía de Google "[Reserva de una dirección IP externa estática](https://cloud.google.com/compute/docs/configure-instance-ip-addresses)".

En las configuraciones de alta disponibilidad de producción, tantos en el aparato principal como en la réplica deberían asignarse direcciones estáticas de IP separadas.

## Crear la instancia de {% data variables.product.prodname_ghe_server %}

Para crear la instancia {% data variables.product.prodname_ghe_server %}, deberás crear una instancia de GCE con tu imagen {% data variables.product.prodname_ghe_server %} y adjuntarle volumen de almacenamiento adicional para los datos de tu instancia. Para más información, vea "[Consideraciones de hardware](#hardware-considerations)".

1. Crea un disco de datos para utilizar como un volumen de almacenamiento adjunto para tu instancia de datos utilizando la herramienta de línea de comandos para cálculo gcloud y configura el tamaño con base en la cantidad de licencias que tengas. Para obtener más información, vea "[Creación de discos de proceso de gcloud](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create)" en la documentación de Google.
   ```shell
   $ gcloud compute disks create <em>DATA-DISK-NAME</em> --size <em>DATA-DISK-SIZE</em> --type <em>DATA-DISK-TYPE</em> --zone <em>ZONE</em>
   ```

2. Después crea una instancia utilizando el nombre de la imagen {% data variables.product.prodname_ghe_server %} que seleccionaste, y adjunta el disco de datos. Para obtener más información, vea "[Creación de instancias de proceso de gcloud](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create)" en la documentación de Google.
   ```shell
   $ gcloud compute instances create <em>INSTANCE-NAME</em> \
   --machine-type n1-standard-8 \
   --image <em>GITHUB-ENTERPRISE-IMAGE-NAME</em> \
   --disk name=<em>DATA-DISK-NAME</em> \
   --metadata serial-port-enable=1 \
   --zone <em>ZONE</em> \
   --network <em>NETWORK-NAME</em> \
   --image-project github-enterprise-public
   ```

## Configurar la instancia

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para más información, vea "[Configuración del dispositivo {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Información adicional

- "[Información general del sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
