---
title: Configurar la dirección IP usando la consola de la máquina virtual
intro: 'Por defecto, {% data variables.product.prodname_ghe_server %} recupera las configuraciones de red a través del protocolo de configuración dinámica de host (DHCP). Si es compatible con tu plataforma, o si el DHCP no está disponible, también puedes establecer las configuraciones de red usando la consola de la máquina virtual.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-ip-address-using-the-virtual-machine-console
  - /enterprise/admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
versions:
  enterprise-server: '*'
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
---

{% data reusables.enterprise_installation.open-vm-console-start %}
3. Para configurar, elige el protocolo `IPv4` o `IPv6`. ![Opciones para elegir el protocolo IPv4 o el IPv6](/assets/images/enterprise/network-configuration/IPv4-or-IPv6-protocol.png)
4. Configura las opciones para el protocolo que elegiste. ![Menú con opciones de protocolo IP](/assets/images/enterprise/network-configuration/network-settings-selection.png)
{% data reusables.enterprise_installation.vm-console-done %}
