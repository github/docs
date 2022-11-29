---
title: Configuration des clés d’hôte pour votre instance
shortTitle: Configure host keys
intro: 'Vous pouvez accroître la sécurité de {% data variables.location.product_location %} en configurant les algorithmes qu’utilise votre instance afin de générer et publier des clés d’hôte pour les connexions SSH entrantes.'
permissions: 'Site administrators can configure the host keys for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 6454568e63b15fc947994ab39aef9baad9d5c146
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107108'
---
## À propos des clés d’hôte pour votre instance

Les serveurs qui acceptent les connexions SSH publient une ou plusieurs clés d’hôte de chiffrement pour identifier de manière sécurisée le serveur sur les clients SSH. Pour confirmer l’identité du serveur lors de l’initialisation d’une connexion, les clients stockent et vérifient la clé d’hôte. Pour plus d’informations, consultez [SSH Host Key - What, Why, How](https://ssh.com/academy/ssh/host-key) sur le site web SSH Academy.

{% data reusables.enterprise.about-ssh-ports %}

Par défaut, {% data variables.location.product_location %} génère et publie des clés d’hôte avec une rotation de clés d’hôte de type OpenSSH. Pour renforcer la sécurité de SSH dans votre environnement, vous pouvez activer des algorithmes supplémentaires pour la génération de clés d’hôte.

{% note %}

**Remarque** : Si vous activez des algorithmes de clés d’hôte supplémentaires, les clients qui n’utilisent pas OpenSSH pour les connexions SSH risquent de rencontrer des avertissements pendant la connexion ou de ne pas arriver à se connecter totalement. Certaines implémentations SSH peuvent ignorer les algorithmes non pris en charge et se replier sur un autre algorithme. Si le client ne prend pas en charge le repli, la connexion échoue. Par exemple, la bibliothèque SSH pour Go ne prend pas en charge le repli sur un autre algorithme.

{% endnote %}

## Gestion d’une clé d’hôte Ed25519

Pour améliorer la sécurité des clients qui se connectent à {% data variables.location.product_location %}, vous pouvez activer la génération et la publication d’une clé d’hôte Ed25519. Ed25519 est immunisée contre certaines attaques qui ciblent des algorithmes de signature plus anciens, sans sacrifier la vitesse. Des clients SSH plus anciens peuvent ne pas prendre en charge Ed25519. Par défaut, les instances {% data variables.product.product_name %} ne génèrent ni ne publient de clé d’hôte Ed25519. Pour plus d’informations, consultez le [site web Ed25519](https://ed25519.cr.yp.to).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Pour activer la génération et la publication de la clé d’hôte Ed25519, entrez la commande suivante.

   ```shell
   ghe-config app.babeld.host-key-ed25519 true
   ```
1. Si vous le souhaitez, entrez la commande suivante pour désactiver la génération et la publication de la clé d’hôte Ed25519.

   ```shell
   ghe-config app.babeld.host-key-ed25519 false
   ```
{% data reusables.enterprise.apply-configuration %}
