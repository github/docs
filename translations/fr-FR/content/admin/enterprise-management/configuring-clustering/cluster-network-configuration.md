---
title: Configuration réseau de cluster
intro: 'Le clustering {% data variables.product.prodname_ghe_server %} repose sur une résolution de noms DNS, un équilibrage de charge et une communication appropriés entre les nœuds pour fonctionner correctement.'
redirect_from:
  - /enterprise/admin/clustering/cluster-network-configuration
  - /enterprise/admin/enterprise-management/cluster-network-configuration
  - /admin/enterprise-management/cluster-network-configuration
versions:
  ghes: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - Infrastructure
  - Networking
shortTitle: Configure a cluster network
ms.openlocfilehash: d6e4d50077cccc3e5582be0af39bdae0046cd8c8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145102977'
---
## Considérations relatives au réseau

La plus simple conception réseau pour le clustering consiste à placer les nœuds sur un même réseau local. Si un cluster doit englober des sous-réseaux, nous vous déconseillons de configurer des règles de pare-feu entre les réseaux. La latence entre les nœuds doit être inférieure à 1 milliseconde.

{% ifversion ghes %}Pour la haute disponibilité, la latence entre le réseau comportant les nœuds actifs et le réseau doté des nœuds passifs doit être inférieure à 70 millisecondes. Nous vous déconseillons de configurer un pare-feu entre les deux réseaux.{% endif %}

### Ports d’application pour les utilisateurs finaux

Les ports d’application fournissent un accès à l’application web et à Git pour les utilisateurs finaux.

| Port     | Description     | Chiffré  |
| :------------- | :------------- | :------------- |
| 22/TCP    | Git via SSH | Oui |
| 25/TCP    | SMTP | Nécessite STARTTLS |
| 80/TCP    | HTTP | Non<br>(Quand SSL est activé, ce port redirige vers HTTPS) |
| 443/TCP   | HTTPS | Oui |
| 9418/TCP  | Port du protocole Git simple<br>(Désactivé en mode privé) | Non |

### Ports d’administration

Les ports d’administration ne sont pas nécessaires dans le cadre d’une utilisation d’application simple de la part des utilisateurs finaux.

| Port     | Description     | Chiffré  |
| :------------- | :------------- | :------------- |
| ICMP      | Ping ICMP | Non |
| 122/TCP   | SSH administratif | Oui |
| 161/UDP    | SNMP | Non |
| 8080/TCP  | HTTP Management Console | Non<br>(Quand SSL est activé, ce port redirige vers HTTPS) |
| 8443/TCP  | HTTPS Management Console | Oui |

### Ports de communication de cluster

Si un pare-feu au niveau du réseau est en place entre les nœuds, ces ports doivent être accessibles. La communication entre les nœuds n’est pas chiffrée. Ces ports ne doivent pas être accessibles en externe.

| Port     | Description     |
| :------------- | :------------- |
| 1336/TCP  | API interne |
| 3033/TCP  | Accès SVN interne |
| 3037/TCP  | Accès SVN interne |
| 3306/TCP  | MySQL |
| 4486/TCP  | Accès Governor |
| 5115/TCP  | Back-end de stockage |
| 5208/TCP  | Accès SVN interne |
| 6379/TCP  | Redis |
| 8001/TCP  | Grafana |
| 8090/TCP  | Accès GPG interne |
| 8149/TCP  | Accès au serveur de fichiers GitRPC |
| 8300/TCP | Consul |
| 8301/TCP | Consul |
| 8302/TCP | Consul |
| 9000/TCP  | Démon Git |
| 9102/TCP  | Serveur de fichiers Pages |
| 9105/TCP  | Serveur LFS |
| 9200/TCP  | Elasticsearch |
| 9203/TCP | Service de code sémantique |
| 9300/TCP  | Elasticsearch |
| 11211/TCP | Memcache |
| 161/UDP   | SNMP |
| 8125/UDP  | Statsd |
| 8301/UDP | Consul |
| 8302/UDP | Consul |
| 25827/UDP | Collectd |

## Configuration d’un équilibreur de charge

 Nous recommandons un équilibreur de charge TCP externe qui prend en charge le protocole PROXY pour répartir le trafic entre les nœuds. Prenez en considération ces configurations d’équilibreur de charge :

 - Les ports TCP (indiqués ci-dessous) doivent être transférés vers les nœuds exécutant le service `web-server`. Ce sont les seuls nœuds à traiter les demandes clientes externes.
 - Les sessions persistantes ne doivent pas être activées.

{% data reusables.enterprise_installation.terminating-tls %}

## Gestion des informations sur les connexions clientes

Sachant que les connexions clientes au cluster proviennent de l’équilibreur de charge, l’adresse IP du client peut être perdue. Pour capturer correctement les informations sur les connexions clientes, il convient de prendre en compte d’autres considérations.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

### Activation de la prise en charge de PROXY sur {% data variables.product.prodname_ghe_server %}

Nous vous recommandons vivement d’activer la prise en charge de PROXY pour votre instance et pour l’équilibreur de charge.

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

 - Pour votre instance, utilisez cette commande :
  ```shell
  $ ghe-config 'loadbalancer.proxy-protocol' 'true' && ghe-cluster-config-apply
  ```
  - Pour l’équilibreur de charge, utilisez les instructions fournies par votre fournisseur.

  {% data reusables.enterprise_clustering.proxy_protocol_ports %}

### Activation de la prise en charge de X-Forwarded-For sur {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

Pour activer l’en-tête `X-Forwarded-For`, utilisez cette commande :

```shell
$ ghe-config 'loadbalancer.http-forward' 'true' && ghe-cluster-config-apply
```

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

### Configuration des contrôles d’intégrité
Les contrôles d’intégrité permettent à un équilibreur de charge d’arrêter l’envoi de trafic à un nœud qui ne répond pas si une vérification préconfigurée échoue sur ce nœud. Si un nœud de cluster échoue, les contrôles d’intégrité associés à des nœuds redondants offrent une haute disponibilité.

{% data reusables.enterprise_clustering.health_checks %} {% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## Configuration requise du DNS

{% data reusables.enterprise_clustering.load_balancer_dns %}
