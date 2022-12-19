---
title: Configurar endereço IP usando o console de máquina virtual
intro: 'Por padrão, o {% data variables.product.prodname_ghe_server %} recupera as configurações de rede pelo protocolo de configuração dinâmica de host (DHCP). Se a sua plataforma for compatível ou se o DHCP estiver indisponível, você também poderá definir as configurações de rede usando o console da máquina virtual.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095991'
---
{% note %}

**Observação:** não damos suporte à inclusão de adaptadores de rede adicionais no {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{% data reusables.enterprise_installation.open-vm-console-start %}
3. Escolha entre a configuração do protocolo `IPv4` ou `IPv6`.
  ![Opções para escolha entre os protocolos IPv4 ou IPv6](/assets/images/enterprise/network-configuration/IPv4-or-IPv6-protocol.png)
4. Configure as opções para o protocolo escolhido.
  ![Menu com opções de protocolo IP](/assets/images/enterprise/network-configuration/network-settings-selection.png) {% data reusables.enterprise_installation.vm-console-done %}
