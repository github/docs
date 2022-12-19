---
title: Connexion à un réseau privé
intro: 'Vous pouvez connecter {% data variables.product.prodname_github_codespaces %} aux ressources sur un réseau privé, notamment les registres de packages, les serveurs de licences et les bases de données locales.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: 92b8f2b9ea438a4cc799aec1969ff6773f90c298
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159603'
---
## À propos de la mise en réseau de codespace

Par défaut, vos codespaces ont accès à toutes les ressources sur l’Internet public, notamment les gestionnaires de packages, les serveurs de licences, les bases de données et les API de plateforme cloud, mais pas aux ressources sur des réseaux privés.

## Connexion à des ressources sur un réseau privé

Il existe deux méthodes d’accès aux ressources sur un réseau privé dans {% data variables.product.prodname_github_codespaces %}.
- Utilisation d’une extension {% data variables.product.prodname_cli %} pour configurer votre ordinateur local en tant que passerelle pour les ressources distantes.
- Utilisation d’un VPN. 

### Utilisation de l’extension CLI GitHub pour accéder aux ressources distantes

{% note %}

**Remarque :** L’extension {% data variables.product.prodname_cli %} est actuellement en version bêta et peut faire l’objet de modification. 

{% endnote %}

Utiliser l’extension {% data variables.product.prodname_cli %} vous permet de créer un pont entre un codespace et votre ordinateur local, afin que le codespace puisse accéder à n’importe quelle ressource distante accessible à partir de votre ordinateur. Le codespace utilise votre ordinateur local comme passerelle réseau pour atteindre ces ressources. Pour plus d’informations, consultez « [Utilisation de {% data variables.product.prodname_cli %} pour accéder aux ressources distantes](https://github.com/github/gh-net#codespaces-network-bridge) ».

   
   

### Utilisation d’un VPN pour accéder aux ressources derrière un réseau privé

Comme alternative à l’extension {% data variables.product.prodname_cli %}, vous pouvez utiliser un VPN pour accéder aux ressources derrière un réseau privé à partir de votre codespace.

Nous vous recommandons des outils VPN tels que [OpenVPN](https://openvpn.net/) pour accéder aux ressources sur un réseau privé. Pour plus d’informations, consultez « [Utilisation du client OpenVPN à partir de {% data variables.product.prodname_github_codespaces %}](https://github.com/codespaces-contrib/codespaces-openvpn) ».

Il existe également un certain nombre de solutions tierces qui, bien qu’elles ne soient pas explicitement approuvées par {% data variables.product.prodname_dotcom %}, ont fourni des exemples d’intégration avec {% data variables.product.prodname_github_codespaces %}.

Ces solutions tierces sont :

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Mise en liste verte de ressources privées pour des codespaces

Bien que {% data variables.product.prodname_dotcom %} publie des plages d’adresses IP pour plusieurs produits sur son API Meta, les adresses IP de codespaces sont affectées de manière dynamique, ce qui signifie qu’il n’est pas garanti que votre codespace ait la même adresse IP jour après jour. Nous déconseillons fortement aux utilisateurs de mettre en liste verte une plage d’adresses IP entière, car cela donnerait un accès trop large à tous les codespaces (y compris des utilisateurs non affiliés avec vos codespaces).

Pour plus d’informations sur l’API Meta, consultez « [Meta](/rest/reference/meta) ».

## Restriction de l’accès à l’Internet public

Actuellement, il n’existe aucun moyen de restreindre l’accès des codespaces à l’Internet public, ou de restreindre de manière appropriée l’accès d’utilisateurs authentifiés à un port transféré.

Pour plus d’informations sur la sécurisation de vos espaces de code, consultez « [Sécurité dans {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces) ».
