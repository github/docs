---
title: Aumentar la capacidad de almacenamiento
intro: 'Puedes aumentar o cambiar la cantidad de almacenamiento disponible para los repositorios de Git, las bases de datos, los índices de búsqueda y otros datos de aplicaciones persistentes.'
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/increasing-storage-capacity
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
shortTitle: Increase storage capacity
ms.openlocfilehash: b6542e1f43ce4111358de3940c8e46dea2afd5d5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881126'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

A medida los usuarios se unan a {% data variables.product.product_location %}, es posible que tenga cambiar el tamaño del volumen de almacenamiento. Consulta la documentación de tu plataforma de virtualización para obtener más información sobre ajuste de tamaño de almacenamiento.

## Requisitos y recomendaciones

{% note %}

**Nota:** antes de cambiar el tamaño de cualquier volumen de almacenamiento, coloca la instancia en modo de mantenimiento.{% ifversion ip-exception-list %} Puedes validar los cambios configurando una lista de excepciones de IP para permitir el acceso desde direcciones IP especificadas. {% endif %} Para más información, consulta "[Habilitación y programación del modo de mantenimiento](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

{% endnote %}

### Requisitos mínimos

{% data reusables.enterprise_installation.hardware-rec-table %}

## Aumentar el tamaño de partición de datos

1. Ajusta el disco de volumen existente del usuario utilizando las herramientas de tu plataforma de virtualización.
{% data reusables.enterprise_installation.ssh-into-instance %}
3. Pon el aparato en modo mantenimiento. Para más información, vea "[Habilitación y programación del modo de mantenimiento](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".
4. Reinicie el dispositivo para detectar la nueva asignación de almacenamiento:
  ```shell
  $ sudo reboot
  ```
5. Ejecute el comando `ghe-storage-extend` para expandir el sistema de archivos `/data/user`:
  ```shell
  $ ghe-storage-extend
  ```

## Aumentar el tamaño de partición raíz utilizando un nuevo aparato

1. Configura una nueva instancia {% data variables.product.prodname_ghe_server %} con un disco raíz más grande utilizando la misma versión que tu aparato actual. Para más información, vea "[Configuración de una instancia de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)".
2. Apague el dispositivo actual:
  ```shell
  $ sudo poweroff
  ```
3. Desconecta el disco de datos de tu aparato actual utilizando las herramientas de tu plataforma de virtualización.
4. Conecta el disco de datos al nuevo aparato con un disco raíz más grande.

## Aumentar el tamaño de partición raíz utilizando un aparato existente

{% warning %}

**Advertencia:** Antes de aumentar el tamaño de la partición raíz, debe colocar la instancia en modo de mantenimiento. Para más información, vea "[Habilitación y programación del modo de mantenimiento](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

{% endwarning %}

1. Conecta un nuevo disco a tu aparato {% data variables.product.prodname_ghe_server %}.
1. Ejecuta el comando `lsblk` para identificar el nombre del dispositivo del nuevo disco.
1. Ejecuta el comando `parted` para dar formato al disco, sustituyendo el nombre del dispositivo por `/dev/xvdg`:
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
1. Para detener la replicación, ejecute el comando `ghe-repl-stop`.

   ```shell
   $ ghe-repl-stop
   ```
   
1. Ejecute el comando `ghe-upgrade` para instalar un paquete completo específico de la plataforma en el disco recién particionado. Un paquete de actualización de revisión en caliente universal, como `github-enterprise-2.11.9.hpkg`, no funcionará según lo previsto. Una vez que se complete el comando `ghe-upgrade`, los servicios de aplicación finalizarán de forma automática.

  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
1. Apague el dispositivo:
  ```shell
  $ sudo poweroff
  ```
1. En el hipervisor, quita el disco raíz anterior y agrega el nuevo disco raíz en la misma ubicación del disco raíz anterior.
1. Inicie el dispositivo.
1. Asegúrate de que los servicios de sistema estén funcionando correctamente y luego sal del modo de mantenimiento. Para más información, vea "[Habilitación y programación del modo de mantenimiento](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

Si el dispositivo está configurado para alta disponibilidad o replicación geográfica, recuerde iniciar la replicación en cada nodo de réplica mediante `ghe-repl-start` después de actualizar el almacenamiento en todos los nodos.
