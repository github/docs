---
title: Instalar el servidor de GitHub Enterprise en Azure
intro: 'Para instalar {% data variables.product.prodname_ghe_server %} en Azure, debes implementar en una instancia de serie DS y usar almacenamiento Premium-LRS.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

Puedes implementar {% data variables.product.prodname_ghe_server %} en Azure mundial o Azure Government.

### Prerrequisitos

- {% data reusables.enterprise_installation.software-license %}
- Debes tener una cuenta Azure capaz de abastecer nuevas máquinas. Para obtener más información, consulta el [sitio web de Microsoft Azure](https://azure.microsoft.com).
- La mayoría de las acciones necesarias para lanzar tu máquina virtual (VM) también se podrían realizar por medio del Portal Azure. Sin embargo, recomendamos instalar la interfaz de la línea de comando de Azure (CLI) para la configuración inicial. Abajo se incluyen ejemplos que utilizan Azure CLI 2.0. Para obtener más información, consulta la guía de Azure "[Instalar Azure CLI 2.0](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest)."

### Consideraciones relativas al hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Determinar el tipo de máquina virtual

Antes de iniciar {% data variables.product.product_location %} en Azure, deberás determinar el tipo de máquina que mejor se adapte a las necesidades de tu organización. Para revisar los requisitos mínimos para {% data variables.product.product_name %}, consulta la sección "[Requisitos mínimos](#minimum-requirements)".

{% data reusables.enterprise_installation.warning-on-scaling %}

El aparato {% data variables.product.prodname_ghe_server %} requiere un disco de datos de almacenamiento prémium, y es compatible con cualquier Azure VM que admita almacenamiento prémium. Los tipos de Azure VM con el sufijo `s`s son compatibles con el almacenamiento premium. Para obtener más información, consulta las secciones "[¿Qué tipos de disco están disponibles en Azure?](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd)" y "[Almacenamiento premium de Azure: diseño para la disponibilidad alta](https://docs.microsoft.com/en-us/azure/virtual-machines/premium-storage-performance)" en la documentación de Azure.

{% data variables.product.company_short %} recomienda una VM con memoria optimizada para {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta la sección "[Tamaños de máquina virtual con memoria optimizada](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory)" en la documentación de Azure.

{% data variables.product.prodname_ghe_server %} admite cualquier región que sea compatible con tu tipo de VM. Para obtener más información sobre las regiones admitidas para cada VM, consulte los productos de Azure "[disponibles por región](https://azure.microsoft.com/regions/services/)."

### Crear la máquina virtual{% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Encuentra la imagen de aparato más reciente {% data variables.product.prodname_ghe_server %}. Para obtener más información sobre el comando `vm image list`, consulta "[lista de imagen vm de az](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list)" en la documentación de Microsoft.
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. Crea una nueva VM utilizando la imagen de aparato que encontraste. Para obtener más información, consulta "[crear vm de az](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create)" en la documentación de Microsoft.

  Aprueba opciones para el nombre de tu VM, el grupo de recurso, el tamaño de tu VM, el nombre de tu región Azure preferida, el nombre de la imagen de tu aparato VM que enumeraste en el paso anterior y el almacenamiento SKU para un almacenamiento prémium. Para obtener más información sobre grupos de recursos, consulta "[Grupos de recursos](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups)" en la documentación de Microsoft.

  ```shell
  $ az vm create -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --size <em>VM_SIZE</em> -l <em>REGION</em> --image <em>APPLIANCE_IMAGE_NAME</em> --storage-sku Premium_LRS
  ```

3. Configura los parámetros de seguridad en tu VM para abrir los puertos requeridos. Para obtener más información, consulta "[abrir puerto de vm de az](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port)" en la documentación de Microsoft. Consulta la tabla de abajo para obtener una descripción de cada puerto para determinar qué puertos debes abrir.

  ```shell
  $ az vm open-port -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --port <em>PORT_NUMBER</em>
  ```

  Esta tabla identifica para qué se utiliza cada puerto.

  {% data reusables.enterprise_installation.necessary_ports %}

4. Crea y adjunta a la VM un nuevo disco de datos descifrado y configura su tamaño con base en la cantidad de licencias que tengas. Para obtener más información, consulta "[adjuntar un disco de vm de az](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach)" en la documentación de Microsoft.

  Aprueba opciones para el nombre de tu VM (por ejemplo, `ghe-acme-corp`), el grupo de recurso, el almacenamiento prémium de SKU, el tamaño del disco (por ejemplo, `100`) y un nombre para el VHD resultante.

  ```shell
  $ az vm disk attach --vm-name <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --sku Premium_LRS --new -z <em>SIZE_IN_GB</em> --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **Nota:** para instancias no productivas que tengan suficiente rendimiento de E/S, el tamaño mínimo recomendado es de 40 GiB con caché de lectura/escritura activado (`--caching ReadWrite`).

   {% endnote %}

### Configurara la máquina virtual {% data variables.product.prodname_ghe_server %}

1. Antes de configurar el VM, debes esperar que pase al estado ReadyRole. Controla el estado del VM con el comando `vm list`. Para obtener más información, consulta "[lista de vm de az](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list)" en la documentación de Microsoft.
  ```shell
  $ az vm list -d -g <em>RESOURCE_GROUP</em> -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus

  ```
  {% note %}

  **Nota:** Azure no crea automáticamente una entrada FQDNS para el VM. Para obtener más información, consulta la guía de Azure sobre cómo "[Crear un nombre de dominio certificado completo en el portal de Azure para una VM de Linux](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn)."

  {% endnote %}

  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
  {% data reusables.enterprise_installation.upload-a-license-file %}
  {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obtener más información, consulta "[Configurar el aparato de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
  {% data reusables.enterprise_installation.instance-will-restart-automatically %}
  {% data reusables.enterprise_installation.visit-your-instance %}

### Leer más

- "[Resumen del sistema](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
  
