---
title: Connexion à un réseau privé
intro: 'Vous pouvez connecter des exécuteurs hébergés par {% data variables.product.prodname_dotcom %} à des ressources sur un réseau privé, notamment des registres de packages, des gestionnaires de secrets et d’autres services locaux.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Developer
ms.openlocfilehash: 2a74b149596e0158cdc6b5e40508b1d4a54eb8e6
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884268'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos de l’accès réseau des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}

Par défaut, les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} ont accès à l’Internet public. Toutefois, vous pouvez également souhaiter que ces exécuteurs accèdent aux ressources de votre réseau privé, par exemple un registre de packages, un gestionnaire de secrets ou d’autres services locaux. 

Les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} sont partagés entre tous les clients {% data variables.product.prodname_dotcom %}. Vous devez donc trouver un moyen de connecter votre réseau privé uniquement à vos exécuteurs pendant qu’ils exécutent vos workflows. Vous pouvez adopter différentes approches pour configurer cet accès, chacune ayant des avantages et des inconvénients distincts.

{% ifversion fpt or ghec or ghes > 3.4 %}
### Utilisation d’une passerelle API avec OIDC

Avec {% data variables.product.prodname_actions %}, vous pouvez utiliser des jetons OIDC (OpenID Connect) pour authentifier votre workflow hors de {% data variables.product.prodname_actions %}. Par exemple, vous pouvez exécuter une passerelle API en périphérie de votre réseau privé, qui authentifie les requêtes entrantes à l’aide du jeton OIDC, puis émet des requêtes d’API au nom de votre workflow dans votre réseau privé.

Le diagramme suivant donne une vue d’ensemble de l’architecture de cette solution :

![Diagramme d’une passerelle OIDC](/assets/images/help/images/actions-oidc-gateway.png)

Il est important d’authentifier le fait que le jeton OIDC provient de {% data variables.product.prodname_actions %}, mais également qu’il provient spécifiquement des workflows attendus. Ainsi, les autres utilisateurs {% data variables.product.prodname_actions %} ne peuvent pas accéder aux services de votre réseau privé. Vous pouvez utiliser des revendications OIDC pour créer ces conditions. Pour plus d’informations, consultez « [Définition de conditions d’approbation sur des rôles cloud à l’aide de revendications OIDC](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims) ».

Le principal inconvénient de cette approche est que vous devez implémenter la passerelle API pour émettre des requêtes en votre nom, et que vous devez l’exécuter en périphérie de votre réseau.

Mais il existe également divers avantages :
- Vous n’avez pas besoin de configurer de pare-feu, ni de modifier le routage de votre réseau privé. 
- La passerelle API est sans état. Elle fait donc l’objet d’une mise à l’échelle horizontale pour prendre en charge la haute disponibilité et un débit élevé.

Pour plus d’informations, consultez l’[implémentation de référence d’une passerelle API](https://github.com/github/actions-oidc-gateway-example) (notez que cette opération nécessite une personnalisation de votre cas d’usage et qu’elle n’est pas prête à l’emploi en l’état) et « [À propos du durcissement de la sécurité avec OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) ».
{% endif %}

### Utilisation de WireGuard pour créer un réseau de superposition

Si vous ne souhaitez pas gérer d’infrastructure distincte pour une passerelle API, vous pouvez créer un réseau de superposition entre votre exécuteur et un service de votre réseau privé, en exécutant WireGuard aux deux emplacements.

Cette approche présente divers inconvénients : 

- Pour atteindre l’instance de WireGuard s’exécutant sur votre service privé, vous avez besoin d’une adresse IP et d’un port bien connus que votre workflow peut référencer : il peut s’agir d’une adresse IP et d’un port publics, d’un mappage de port sur une passerelle réseau ou d’un service qui met à jour dynamiquement le DNS. 
- Dans la mesure où WireGuard ne prend pas en charge NAT-T (NAT Traversal) par défaut, vous devez identifier un moyen de fournir ce service.
- Dans la mesure où cette connexion est de type un-à-un, si vous avez besoin de haute disponibilité ou d’un débit élevé, vous devez la superposer à WireGuard. 
- Vous devez générer et stocker de manière sécurisée les clés de l’exécuteur et de votre service privé. Dans la mesure où WireGuard utilise le protocole UDP, votre réseau doit prendre en charge le trafic UDP.

Il existe également certains avantages, car vous pouvez exécuter WireGuard sur un serveur existant pour ne pas avoir à gérer d’infrastructure distincte. De plus, il est bien pris en charge sur les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}.

### Exemple : Configuration de WireGuard

Cet exemple de workflow configure WireGuard pour la connexion à un service privé.

Pour cet exemple, l’instance de WireGuard s’exécutant sur le réseau privé présente la configuration suivante :
- Adresse IP de réseau de superposition : `192.168.1.1`
- Adresse IP et port public : `1.2.3.4:56789`
- Clé publique : `examplepubkey1234...`

L’instance de WireGuard dans l’exécuteur {% data variables.product.prodname_actions %} présente la configuration suivante :
- Adresse IP de réseau de superposition : `192.168.1.2`
- La clé privée est stockée sous forme de secret {% data variables.product.prodname_actions %} sous `WIREGUARD_PRIVATE_KEY`

```yaml
name: WireGuard example

on:
  workflow_dispatch:

jobs:
  wireguard_example:
    runs-on: ubuntu-latest
    steps:
      - run: sudo apt install wireguard

      - run: echo "${{ secrets.WIREGUARD_PRIVATE_KEY }}" > privatekey

      - run: sudo ip link add dev wg0 type wireguard

      - run: sudo ip address add dev wg0 192.168.1.2 peer 192.168.1.1

      - run: sudo wg set wg0 listen-port 48123 private-key privatekey peer examplepubkey1234... allowed-ips 0.0.0.0/0 endpoint 1.2.3.4:56789

      - run: sudo ip link set up dev wg0

      - run: curl -vvv http://192.168.1.1
```

Pour plus d’informations, consultez [Démarrage rapide de WireGuard](https://www.wireguard.com/quickstart/) ainsi que « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) » afin de découvrir comment stocker les clés de manière sécurisée.

### Utilisation de Tailscale pour créer un réseau de superposition

Tailscale est un produit commercial basé sur WireGuard. Cette option est très similaire à celle de WireGuard, à la différence près que Tailscale est une expérience produit plus complète et non un composant open source.

Ses inconvénients sont similaires à ceux de WireGuard : la connexion étant de type un-à-un, vous devrez peut-être effectuer du travail supplémentaire pour obtenir une haute disponibilité ou un débit élevé. Vous devez toujours générer et stocker les clés de manière sécurisée. Le protocole étant toujours UDP, votre réseau doit prendre en charge le trafic UDP.

Toutefois, il existe certains avantages par rapport à WireGuard : NAT-T (NAT Traversal) est intégré, vous n’avez donc pas besoin d’exposer un port au réseau Internet public. Il s’agit de loin de l’option la plus rapide pour être opérationnel, car Tailscale fournit un workflow {% data variables.product.prodname_actions %} d’une seule étape pour se connecter au réseau de superposition.

Pour plus d’informations, consultez [Tailscale GitHub Action](https://github.com/tailscale/github-action) ainsi que « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) » afin de découvrir comment stocker les clés de manière sécurisée.
