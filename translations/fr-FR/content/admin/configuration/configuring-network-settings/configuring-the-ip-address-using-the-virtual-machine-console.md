---
title: Configuration de l’adresse IP à l’aide de la console de machine virtuelle
intro: 'Par défaut, {% data variables.product.prodname_ghe_server %} récupère les paramètres réseau via le protocole DHCP (Dynamic Host Configuration Protocol). Si votre plateforme le prend en charge, ou si le protocole DHCP n’est pas disponible, vous pouvez également configurer les paramètres réseau à l’aide de la console de machine virtuelle.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106981'
---
{% note %}

**Remarque :** Nous ne prenons pas en charge l’ajout de cartes réseau supplémentaires à {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{% data reusables.enterprise_installation.open-vm-console-start %}
3. Choisissez entre configurer le protocole `IPv4` ou `IPv6`.
  ![Options pour choisir le protocole IPv4 ou IPv6](/assets/images/enterprise/network-configuration/IPv4-or-IPv6-protocol.png)
4. Configurez les options du protocole que vous avez choisi.
  ![Menu avec les options du protocole IP](/assets/images/enterprise/network-configuration/network-settings-selection.png) {% data reusables.enterprise_installation.vm-console-done %}
