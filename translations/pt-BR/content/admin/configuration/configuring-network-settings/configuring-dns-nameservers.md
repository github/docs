---
title: Configurar servidores de nomes DNS
intro: 'O {% data variables.product.prodname_ghe_server %} usa o protocolo de configuração dinâmica de host (DHCP) para configurações de DNS quando as concessões de DHCP fornecem servidores de nomes. Se os servidores de nomes não forem fornecidos por uma concessão do protocolo DHCP, ou caso você precise usar configurações DNS específicas, será possível especificá-los manualmente.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147419710'
---
Os servidores de nomes especificados precisam resolver o nome do host do {% data variables.product.product_location %}.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

## Configurar servidores de nomes usando o console de máquina virtual

{% data reusables.enterprise_installation.open-vm-console-start %}
2. Configure os servidores de nomes da sua instância.
{% data reusables.enterprise_installation.vm-console-done %}

## Configurar servidores de nomes usando o shell administrativo

{% data reusables.enterprise_installation.ssh-into-instance %}

2. Para editar seus nomes de servidores, use o comando `ghe-setup-network` no modo visual. Para obter mais informações, confira "[Utilitários de linha de comando](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-setup-network)".

  ```shell
  ghe-setup-network -v
  ```

5. Para adicionar as suas novas entradas de nameserver para {% data variables.product.product_location %}, execute o seguinte:

  ```shell
  sudo service resolvconf restart
  sudo service dnsmasq restart
  ```
