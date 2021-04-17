---
title: Instalar el servidor de GitHub Enterprise en XenServer
intro: 'Para instalar {% data variables.product.prodname_ghe_server %} en XenServer, debes implementar la imagen de disco {% data variables.product.prodname_ghe_server %} a un servidor XenServer.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  enterprise-server: '*'
topics:
  - empresa
---

### Prerrequisitos

- {% data reusables.enterprise_installation.software-license %}
- Debes instalar el XenServer Hypervisor en la máquina que ejecutará tu máquina virtual (VM) {% data variables.product.prodname_ghe_server %}. Admitimos versiones 6.0 a 7.0.
- Recomendamos utilizar XenCenter Windows Management Console para la configuración inicial. Abajo se incluyen instrucciones utilizando XenCenter Windows Management Console. Para obtener más información, consulta la guía de Citrix "[Cómo descargar e instalar una nueva versión de XenCenter](https://support.citrix.com/article/CTX118531)."

### Consideraciones relativas al hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Descargar la imagen {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Selecciona {% data variables.product.prodname_dotcom %} local, después haz clic en **XenServer (VHD)**.
5. Para descargar tu archivo de licencia, haz clic en **Download license (Descargar licencia)**.

### Crear la instancia {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. En XenCenter, importa la imagen {% data variables.product.prodname_ghe_server %} que descargaste. Para obtener instrucciones, consulta la guía de XenCenter "[Importar imágenes de disco](https://docs.citrix.com/en-us/xencenter/current-release/vms-importdiskimage.html)."
    - Para el paso "Enable Operating System Fixup (Habilitar Ajuste del sistema en funcionamiento)", selecciona **Don't use Operating System Fixup (No usar Ajuste del sistema en funcionamiento)**.
    - Deja la VM apagada cuando hayas finalizado.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Para obtener instrucciones, consulta la guía de XenCenter "[Agregar discos virtuales](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html)."

### Configurar la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obtener más información, consulta "[Configurar el aparato de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Leer más

- "[Resumen del sistema](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
