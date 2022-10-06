---
title: Configurar servidores de nombres DNS
intro: '{% data variables.product.prodname_ghe_server %} utiliza el protocolo de configuración dinámica de host (DHCP) para los ajustes DNS cuando las concesiones de DHCP ofrecen servidores de nombres. Si una concesión del protocolo de configuración dinámica de host (DHCP) no proporciona los servidores de nombres o si debes utilizar ajustes DNS particulares, puedes especificar los servidores de nombres de manera manual.'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers
  - /enterprise/admin/installation/configuring-dns-nameservers
  - /enterprise/admin/configuration/configuring-dns-nameservers
  - /admin/configuration/configuring-dns-nameservers
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure DNS servers
ms.openlocfilehash: b01dc25b9002bf1feb672bbce597c8046b93f12f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147419717'
---
Los servidores de nombres que especifique deben resolver el nombre del host de {% data variables.product.product_location %}.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

## Configurar servidores de nombres utilizando la consola de la máquina virtual

{% data reusables.enterprise_installation.open-vm-console-start %}
2. Configurar servidores de nombres para tu instancia.
{% data reusables.enterprise_installation.vm-console-done %}

## Configurar servidores de nombres utilizando el shell administrativo

{% data reusables.enterprise_installation.ssh-into-instance %}

2. Para editar los servidores de nombres, usa el comando `ghe-setup-network` en modo visual. Para más información, vea "[Utilidades de línea de comandos](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-setup-network)".

  ```shell
  ghe-setup-network -v
  ```

5. Para agregar tus entradas nuevas de servidores de nombres en {% data variables.product.product_location %}, ejecuta lo siguiente:

  ```shell
  sudo service resolvconf restart
  sudo service dnsmasq restart
  ```
