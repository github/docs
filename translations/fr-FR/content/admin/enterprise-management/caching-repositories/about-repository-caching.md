---
title: À propos de la mise en cache des dépôts
intro: Vous pouvez augmenter les performances des opérations de lecture Git pour les équipes et les batteries de serveurs CI disséminées avec la mise en cache de dépôt.
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
ms.openlocfilehash: e32df9becd6142f581d45784e4758cf19a8d1af0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108321'
---
{% data reusables.enterprise.repository-caching-release-phase %}

Si vous avez des équipes et des batteries de serveurs CI situés dans le monde entier, il se peut que le niveau de performance de votre instance {% data variables.product.prodname_ghe_server %} connaisse une baisse. Bien que des géoréplicas actifs puissent améliorer le niveau de performance des demandes de lecture, cela se fait au détriment du débit d’écriture. Pour réduire la charge au niveau de votre instance principale et améliorer les performances de débit en écriture, vous pouvez configurer un cache de dépôts, c’est-à-dire un miroir asynchrone et en lecture seule des dépôts situés près de ces clients géographiquement distribués. 

Un cache de dépôts évite à {% data variables.product.product_name %} de transmettre les mêmes données Git via une liaison réseau longue distance plusieurs fois pour servir plusieurs clients, en servant les données de vos dépôts à proximité des batteries de serveurs CI et des équipes distribuées. Par exemple, si votre instance principale se trouve en Amérique du Nord et que vous avez aussi une présence importante en Asie, le fait de configurer le cache de dépôts en Asie pour permettre aux exécuteurs CI d’Asie de l’utiliser vous sera profitable.

Le cache de dépôts écoute l’instance principale, qu’il s’agisse d’une instance unique ou d’un ensemble d’instances géorépliqué, pour les modifications apportées aux données Git. Les batteries de serveurs CI et autres consommateurs à lecture intensive clonent et extraient dans le cache de dépôts et non dans l’instance principale. Les modifications sont propagées sur le réseau, à intervalles réguliers, une fois par instance de cache et non une fois par client. Les données Git sont généralement visibles dans le cache de dépôts quelques minutes après que les données ont été envoyées (push) à l’instance principale.  {% ifversion ghes > 3.3 %}Le [webhook `cache_sync`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#cache_sync) peut être utilisé par les systèmes CI pour réagir aux données disponibles dans le cache.{% endif %}

Vous disposez d’un contrôle précis sur les dépôts autorisés à se synchroniser avec le cache de dépôts. Les données Git sont répliquées uniquement aux emplacements que vous spécifiez.

{% data reusables.enterprise.repository-caching-config-summary %} Pour plus d’informations, consultez « [Configuration d’un cache de dépôts](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache) ».
