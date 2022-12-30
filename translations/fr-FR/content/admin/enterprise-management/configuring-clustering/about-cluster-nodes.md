---
title: À propos des nœuds de cluster
intro: 'Les *nœuds* sont des instances de {% data variables.product.prodname_ghe_server %} qui fonctionnent dans un cluster. Chaque nœud exécute un ensemble de services qui sont fournis au cluster et, en fin de compte, aux utilisateurs.'
redirect_from:
  - /enterprise/admin/clustering/about-cluster-nodes
  - /enterprise/admin/enterprise-management/about-cluster-nodes
  - /admin/enterprise-management/about-cluster-nodes
versions:
  ghes: '*'
type: overview
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 6c009e5d5aa1c2f0b2d3effb3beab2d51f48b070
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167072'
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

## Recommandations matérielles minimales
Chaque nœud doit avoir un volume racine ainsi qu’un volume de données distinct. Il s’agit de recommandations minimales. Selon votre utilisation, comme l’activité des utilisateurs et le choix des intégrations, des ressources supplémentaires peuvent être nécessaires.

| Services | Mémoire minimale requise    | Espace libre minimal nécessaire pour le volume de données |
| :-: | :-: | :-: |
| `job-server`,<br/>`memcache-server`,<br/>`web-server` | 14 Go | 1 Go |
| `consul-server`,<br/>`mysql-server`,<br/>`redis-server` | 14 Go | 10 Go |
| `git-server`,<br/>`metrics-server`,<br/>`pages-server`,<br/>`storage-server` | 14 Go | 10 Go |
| `elasticsearch-server` | 14 Go | 10 Go |

## Services nécessaires pour le clustering
Pour une redondance convenable, utilisez le nombre minimal de nœuds indiqué ci-dessous pour chaque service.

{% tip %}

**Remarque :** Les besoins de votre organisation en matière de scalabilité dépendent de nombreux facteurs, notamment de la taille et du nombre de dépôts, du nombre d’utilisateurs et de l’utilisation globale.

{% endtip %}

| Services | Nombre minimal de nœuds nécessaires |
| :-: | :-: |
| `job-server`,<br/>`memcache-server`,<br/>`metrics-server`,<br/>`web-server` | 2 |
| `mysql-server`,<br/>`redis-server` | 2 |
| `consul-server` | 3 |
| `git-server`,<br/>`pages-server`,<br/>`storage-server` | 3 |
| `elasticsearch-server` | 3 |

## Recommandations relatives à la conception des clusters

Le clustering permet aux services qui composent {% data variables.product.prodname_ghe_server %} de faire l’objet d’un scale-out indépendamment les uns des autres. Cette flexibilité permet de concevoir et d’implémenter un cluster qui répond aux différentes besoins de scalabilité des organisations. Par exemple, certaines organisations peuvent avoir besoin d’un débit de stockage plus important pour les récupérations (fetch) volumineuses ou fréquentes, tout en ayant une utilisation relativement limitée du serveur web. D’autres organisations peuvent bénéficier d’un bon niveau de performance avec moins de ressources de stockage, mais nécessiter qu’un grand nombre de nœuds exécutent `pages-server` ou `elasticsearch-server`. De nombreuses combinaisons différentes sont possibles. Rapprochez-vous de votre représentant de compte pour déterminer la configuration de cluster la mieux adaptée à vos besoins spécifiques.

- Répartissez les nœuds redondants sur du matériel indépendant. Si vous partagez le processeur, la mémoire ou des dispositifs de stockage, vous perdrez en performances et introduirez des points de défaillance uniques. Le partage de composants de réseau peut aussi réduire le débit et accroître le risque de perte de connectivité en cas de panne.
- Utilisez un stockage rapide. Les réseaux de zone de stockage (SAN) sont souvent optimisés pour une utilisation d’espace maximale, la disponibilité et la tolérance de panne, mais pas pour un débit absolu. Le clustering {% data variables.product.prodname_ghe_server %} assure redondance et disponibilité et fonctionne de manière optimale sur le stockage le plus rapide à disposition. Un stockage SSD local est recommandé.
- Établissez des niveaux de nœuds qui font sens pour votre organisation. Exemple de configuration :
  - Niveau front-end avec deux nœuds et les services suivants :
    - `web-server`
    - `job-server`
    - `memcache-server`
  - Niveau base de données avec trois nœuds et les services suivants :
    - `consul-server`
    - `mysql-server`
    - `redis-server`
  - Niveau recherche avec trois nœuds et les services suivants :
    - `elasticsearch-server`
  - Niveau stockage avec trois nœuds et les services suivants :
    - `git-server`
    - `pages-server`
    - `storage-server`
    - `metrics-server`

### Diagramme d’un exemple de cluster
{% note %}

**Remarque : Ceci n’est qu’un exemple.** La conception optimale du cluster de votre organisation variera en fonction de vos besoins uniques. Entretenez-vous avec votre représentant dédié ou avec l’{% data variables.contact.contact_enterprise_sales %} afin que nous puissions vous aider à déterminer la meilleure configuration de cluster possible.

{% endnote %}

<img src="/assets/images/enterprise/cluster/cluster-diagram.png" alt="Example Cluster" style="width: 800px;border:0"/>
