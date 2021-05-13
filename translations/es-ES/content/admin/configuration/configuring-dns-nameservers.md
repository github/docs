---
title: Configurar servidores de nombres DNS
intro: '{% data variables.product.prodname_ghe_server %} utiliza el protocolo de configuración dinámica de host (DHCP) para los ajustes DNS cuando las concesiones de DHCP ofrecen servidores de nombres. Si una concesión del protocolo de configuración dinámica de host (DHCP) no proporciona los servidores de nombres o si debes utilizar ajustes DNS particulares, puedes especificar los servidores de nombres de manera manual.'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers/
  - /enterprise/admin/installation/configuring-dns-nameservers
  - /enterprise/admin/configuration/configuring-dns-nameservers
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

Los servidores de nombres que especifiques deben resolver el nombre del host de {% data variables.product.product_location %}.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

### Configurar servidores de nombres utilizando la consola de la máquina virtual

{% data reusables.enterprise_installation.open-vm-console-start %}
2. Configurar servidores de nombres para tu instancia.
{% data reusables.enterprise_installation.vm-console-done %}

### Configurar servidores de nombres utilizando el shell administrativo

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Para editar tus servidores de nombres, ingresa lo siguiente:
  ```shell
  $ sudo vim /etc/resolvconf/resolv.conf.d/head
  ```
3. Agrega cualquier entrada de `nameserver` (servidor de nombres) y luego guarda el archivo.
4. Después de verificar tus cambios, guarda el archivo.
5. Para agregar tus entradas nuevas de servidores de nombres en {% data variables.product.product_location %}, ingresa lo siguiente:
  ```shell
  $ sudo service resolvconf restart
  ```
