---
title: Instalar el servidor de GitHub Enterprise en VMare
intro: 'Para instalar {% data variables.product.prodname_ghe_server %} en VMware, debes descargar el cliente vSphere de VMware, y después descargar y desplegar el software de {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/articles/getting-started-with-vmware/
  - /enterprise/admin/articles/installing-vmware-tools/
  - /enterprise/admin/articles/vmware-esxi-virtual-machine-maximums/
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-vmware/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-vmware
  - /admin/installation/installing-github-enterprise-server-on-vmware
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Prerrequisitos

- {% data reusables.enterprise_installation.software-license %}
- Debes tener un VMware vSphere ESXi Hypervisor, aplicado a una máquina de metal expuesto que ejecutará {% data variables.product.product_location %}. Admitimos versiones 5.5 a 6.7. El Hipervisor de ESXi es gratuito y no incluye el vCenter Server (opcional). Para obtener más información, consulta la [Documentación de VMware ESXi](https://www.vmware.com/products/esxi-and-esx.html).
- Deberás acceder a vSphere Client. Si tienes vCenter Server puedes usar vSphere Web Client. Para obtener más información, consulta la guía de VMware "[Registrarse en vCenter Server al utilizar vSphere Web Client](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-CE128B59-E236-45FF-9976-D134DADC8178.html)."

### Consideraciones relativas al hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Descargar la imagen {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Selecciona {% data variables.product.prodname_dotcom %} local, después haz clic en **VMware ESXi/vSphere (OVA)**.
5. Haz clic en **Download for VMware ESXi/vSphere (OVA) (Descargar para VMware ESXi/vSphere (OVA))**.

### Crear la instancia {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Por medio de vSphere Windows Client o vCenter Web Client, importa la imagen del {% data variables.product.prodname_ghe_server %} que descargaste. Para obtener instrucciones, consulta la guía de VMware "[Implementar una plantilla OVF u OVA](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-17BEDA21-43F6-41F4-8FB2-E01D275FE9B4.html)."
    - Cuando seleccionas un almacén de datos, elige uno con suficiente espacio para alojar los discos de la VM. Para encontrar las especificaciones mínimas recomendadas de hardware para tu instancia, consulta las "[Consideraciones de hardware](#hardware-considerations)". Te recomendamos un aprovisionamiento robusto con lazy zeroing.
    - Deja el casillero **Power on after deployment (Encender después de la implementación)** sin marcar, ya que necesitarás agregar un volumen de almacenamiento adjunto para tus datos del repositorio después de aprovisionar la VM.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Para obtener instrucciones, consulta la guía de VMware "[Agregar un nuevo disco duro a una máquina virtual](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F4917C61-3D24-4DB9-B347-B5722A84368C.html)."

### Configurar la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obtener más información, consulta "[Configurar el aparato de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Leer más

- "[Resumen del sistema](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
