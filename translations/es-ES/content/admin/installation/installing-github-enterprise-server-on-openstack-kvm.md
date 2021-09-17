---
title: Instalar el servidor de GitHub Enterprise en OpenStack KVM
intro: 'Para instalar {% data variables.product.prodname_ghe_server %} en OpenStack KVM, debes tener acceso a OpenStack y descargar la imagen QCOW2 {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Prerrequisitos

- {% data reusables.enterprise_installation.software-license %}
- Debes tener acceso a una instalación de OpenStack Horizon, la interfaz de usuario con base en la web para los servicios de OpenStack. Para obtener más información, consulta la [Documentación de Horizon](https://docs.openstack.org/horizon/latest/).

### Consideraciones relativas al hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Descargar la imagen {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Selecciona {% data variables.product.prodname_dotcom %} locales, después haz clic en **OpenStack KVM (QCOW2) (Abrir Stack KVM (QCOW2))**.
5. Haz clic en **Download for OpenStack KVM (QCOW2) (Descargar para OpenStack KVM (QCOW2))**.

### Crear la instancia {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. En OpenStack Horizon, carga la

imagen de {% data variables.product.prodname_ghe_server %} que descargaste. Para obtener instrucciones, dirígete a la sección "Cargar una imagen" en la guía de OpenStack "[Cargar y administrar imágenes](https://docs.openstack.org/horizon/latest/user/manage-images.html)".
{% data reusables.enterprise_installation.create-attached-storage-volume %} Para encontrar instrucciones, consulta la guía de OpenStack "[Crear y administrar volúmenes](https://docs.openstack.org/horizon/latest/user/manage-volumes.html)".
3. Crea un grupo de seguridad, y agrega una nueva regla de grupo de seguridad para cada puerto en la tabla de abajo. Para obtener instrucciones, consulta la guía de OpenStack "[Configurar acceso y seguridad para instancias](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html)."

  {% data reusables.enterprise_installation.necessary_ports %}
4. De forma opcional, asocia una IP flotante a la instancia. Según tu configuración de OpenStack, es posible que necesites asignar una IP flotante al proyecto y asociarla a la instancia. Contacta a tu administrador de sistema para determinar si este es tu caso. Para obtener más información, consulta "[Asignar una dirección de IP flotante a una instancia](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance)" en la documentación de OpenStack.
5. Inicia {% data variables.product.product_location %} utilizando la imagen, el volumen de datos y el grupo de seguridad creado en los pasos previos. Para obtener instrucciones, consulta la guía OpenStack "[Iniciar y administrar instancias](https://docs.openstack.org/horizon/latest/user/launch-instances.html)."

### Configurar la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obtener más información, consulta "[Configurar el aparato de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Leer más

- "[Resumen del sistema](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
