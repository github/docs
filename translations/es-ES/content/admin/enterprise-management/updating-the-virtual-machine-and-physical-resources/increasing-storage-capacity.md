---
title: Aumentar la capacidad de almacenamiento
intro: 'Puedes aumentar o cambiar la cantidad de almacenamiento disponible para los repositorios de Git, las bases de datos, los índices de búsqueda y otros datos de aplicaciones persistentes.'
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/increasing-storage-capacity
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

A medida que se suman usuarios {% data variables.product.product_location %}, es posible que necesites ajustar el tamaño de tu volumen de almacenamiento. Consulta la documentación de tu plataforma de virtualización para obtener más información sobre ajuste de tamaño de almacenamiento.

### Requisitos y recomendaciones

{% note %}

**Nota:** Antes de ajustar el tamaño de cualquier volumen de almacenamiento, pon tu instancia en modo de mantenimiento. Para obtener más información, consulta "[Habilitar y programar el modo mantenimiento](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

{% endnote %}

#### Requisitos mínimos

{% data reusables.enterprise_installation.hardware-rec-table %}

### Aumentar el tamaño de partición de datos

1. Ajusta el disco de volumen existente del usuario utilizando las herramientas de tu plataforma de virtualización.
{% data reusables.enterprise_installation.ssh-into-instance %}
3. Pon el aparato en modo mantenimiento. Para obtener más información, consulta "[Habilitar y programar el modo mantenimiento](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."
4. Reinicia el aparato para detectar la nueva asignación de almacenamiento:
  ```shell
  $ sudo reboot
  ```
5. Ejecuta el comando `ghe-storage-extend` para expandir el sistema de archivos `/data/user`:
  ```shell
  $ ghe-storage-extend
  ```

### Aumentar el tamaño de partición raíz utilizando un nuevo aparato

1. Configura una nueva instancia {% data variables.product.prodname_ghe_server %} con un disco raíz más grande utilizando la misma versión que tu aparato actual. Para obtener más información, consulta "[Configurar una instancia {% data variables.product.prodname_ghe_server %} ](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)."
2. Cierra el aparato actual:
  ```shell
  $ sudo poweroff
  ```
3. Desconecta el disco de datos de tu aparato actual utilizando las herramientas de tu plataforma de virtualización.
4. Conecta el disco de datos al nuevo aparato con un disco raíz más grande.

### Aumentar el tamaño de partición raíz utilizando un aparato existente

{% warning %}

**Advertencia:** Antes de incrementar el tamaño de la partición raíz, debes poner tu instancia en modo de mantenimiento. Para obtener más información, consulta "[Habilitar y programar el modo mantenimiento](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

{% endwarning %}

1. Conecta un nuevo disco a tu aparato {% data variables.product.prodname_ghe_server %}.
2. Ejecuta el comando `parted` para formatear el disco:
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
3. Ejecuta el comando `ghe-upgrade` para instalar un paquete específico de plataforma completo al disco recientemente particionado. Un paquete de actualización de hotpatch universal, como `github-enterprise-2.11.9.hpkg` no funcionará como se espera. Después de que se complete el comando `ghe-upgrade`, los servicios de aplicación se terminarán automáticamente.

  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
4. Como usuario raíz, utilizando un editor de texto de tu elección, edita el archivo _/etc/fstab_, cambiando la UUID por el punto de montaje `/` para la UUID de la unidad raíz nueva. Puedes obtener la UUID de la unidad raíz nueva con el comando `sudo lsblk -f`.
5. Cierra el aparato:
  ```shell
  $ sudo poweroff
  ```
6. En el hipervisor, quita el disco raíz anterior y agrega el nuevo disco raíz en la misma ubicación del disco raíz anterior.
7. Inicia el aparato.
8. Asegúrate de que los servicios de sistema estén funcionando correctamente y luego sal del modo de mantenimiento. Para obtener más información, consulta "[Habilitar y programar el modo mantenimiento](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."
