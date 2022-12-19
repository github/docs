---
title: Configurar la dirección IP usando la consola de la máquina virtual
intro: 'Por defecto, {% data variables.product.prodname_ghe_server %} recupera las configuraciones de red a través del protocolo de configuración dinámica de host (DHCP). Si es compatible con tu plataforma, o si el DHCP no está disponible, también puedes establecer las configuraciones de red usando la consola de la máquina virtual.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-ip-address-using-the-virtual-machine-console
  - /enterprise/admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
  - /admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Set the IP using the console
ms.openlocfilehash: db183677409757e516515a5ac7def5a70affd01f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120770'
---
{% note %}

**Nota:** No se admite la adición de otros adaptadores de red a {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{% data reusables.enterprise_installation.open-vm-console-start %}
3. Elija configurar el protocolo `IPv4` o `IPv6`.
  ![Opciones para elegir el protocolo IPv4 o el IPv6](/assets/images/enterprise/network-configuration/IPv4-or-IPv6-protocol.png)
4. Configura las opciones para el protocolo que elegiste.
  ![Menú con opciones de protocolo IP](/assets/images/enterprise/network-configuration/network-settings-selection.png) {% data reusables.enterprise_installation.vm-console-done %}
