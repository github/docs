---
title: Configuration de serveurs de noms DNS
intro: '{% data variables.product.prodname_ghe_server %} utilise le protocole DHCP (Dynamic Host Configuration Protocol) pour les paramètres DNS quand les baux DHCP fournissent des serveurs de noms. Si les serveurs de noms ne sont pas fournis par un bail DHCP (Dynamic Host Configuration Protocol), ou si vous devez utiliser des paramètres DNS spécifiques, vous pouvez spécifier les serveurs de noms manuellement.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147419712'
---
Les serveurs de noms que vous spécifiez doivent résoudre le nom d’hôte de {% data variables.product.product_location %}.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

## Configuration de serveurs de noms à l’aide de la console de machine virtuelle

{% data reusables.enterprise_installation.open-vm-console-start %}
2. Configurez les serveurs de noms pour votre instance.
{% data reusables.enterprise_installation.vm-console-done %}

## Configuration de serveurs de noms à l’aide de l’interpréteur de commandes d’administration

{% data reusables.enterprise_installation.ssh-into-instance %}

2. Pour modifier vos serveurs de noms, utilisez la commande `ghe-setup-network` en mode visuel. Pour plus d’informations, consultez « [Utilitaires en ligne de commande](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-setup-network) ».

  ```shell
  ghe-setup-network -v
  ```

5. Pour ajouter vos nouvelles entrées de serveur de noms à {% data variables.product.product_location %}, exécutez ce qui suit :

  ```shell
  sudo service resolvconf restart
  sudo service dnsmasq restart
  ```
