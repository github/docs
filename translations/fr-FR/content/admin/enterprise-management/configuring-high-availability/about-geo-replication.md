---
title: À propos de la géoréplication
intro: 'La géo-réplication sur {% data variables.product.prodname_ghe_server %} utilise plusieurs réplicas actifs pour répondre aux demandes provenant de centres de données géographiquement distribués.'
redirect_from:
  - /enterprise/admin/installation/about-geo-replication
  - /enterprise/admin/enterprise-management/about-geo-replication
  - /admin/enterprise-management/about-geo-replication
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - High availability
ms.openlocfilehash: d24b222ee411d6e8d06366dd78da6b0001280c4d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108420'
---
La présence de plusieurs réplicas actifs peut réduire la distance du réplica le plus proche. Par exemple, une organisation possédant des bureaux à San Francisco, New York et Londres pourrait exécuter l’appliance principale dans un centre de données proche de New York et deux réplicas dans des centres de données proches de San Francisco et Londres. Avec un système DNS qui prend en charge la géolocalisation, les utilisateurs peuvent être dirigés vers le serveur disponible le plus proche et accéder plus rapidement aux données de dépôt. Le fait d’accorder à l’appliance proche de New York le statut d’appliance principale permet à l’organisation d’avoir une latence entre les hôtes plus basse que si l’appliance proche de San Francisco était l’appliance principale, ce qui allongerait les temps de latence avec Londres.

Le réplica actif redirige via proxy les demandes qu’il ne peut pas traiter lui-même vers l’instance principale. Les réplicas font office de point de présence mettant fin à toutes les connexions SSL. Le trafic entre les hôtes transite par une connexion VPN chiffrée, de façon similaire à une configuration à haute disponibilité à deux nœuds sans géoréplication.

Les demandes Git et les demandes de serveur de fichiers spécifiques, telles que le partage de fichiers volumineux et les chargements de fichiers, peuvent être traitées directement à partir du réplica sans avoir à charger les données de l’appliance principale. Les requêtes web sont toujours routées vers l’appliance principale, mais si le réplica est plus proche de l’utilisateur, les requêtes sont plus rapides en raison de la plus grande proximité de la terminaison SSL.

Un service GeoDNS, tel que [Amazon Route 53](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo), est nécessaire au bon fonctionnement de la géoréplication. Le nom d’hôte de l’instance doit être résolu sur le réplica le plus proche de la localisation de l’utilisateur.

## Limites

L’écriture de demandes sur le réplica nécessite l’envoi des données à l’appliance principale et à tous les réplicas. Cela signifie que le niveau de performance de toutes les écritures est limité par le réplica le plus lent, même si les nouveaux géoréplicas peuvent amorcer la majorité de leurs données à partir des géoréplicas colocalisés existants, plutôt qu’à partir de l’appliance principale. Pour réduire la latence et la bande passante causées par la dissémination des équipes et les grandes batteries de serveurs CI sans impacter le débit d’écriture, vous pouvez configurer la mise en cache des dépôts. Pour plus d’informations, consultez « [À propos de la mise en cache des dépôts](/admin/enterprise-management/caching-repositories/about-repository-caching) ».

La géoréplication n’ajoute pas de la capacité à une instance {% data variables.product.prodname_ghe_server %} ni ne résout les problèmes de performances liés à une insuffisance de ressources de processeur ou de mémoire. Si l’appliance principale est hors connexion, les réplicas actifs ne pourront pas traiter les demandes de lecture ou d’écriture. 

{% data reusables.enterprise_installation.replica-limit %}

## Supervision d’une configuration de géoréplication

{% data reusables.enterprise_installation.monitoring-replicas %}

## Pour aller plus loin
- « [Création de réplicas de géoréplication](/enterprise/admin/guides/installation/creating-a-high-availability-replica/#creating-geo-replication-replicas) »
