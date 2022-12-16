---
ms.openlocfilehash: 7de065c9dec15e3b92cabf5d3fa711c7d88249ba
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882786"
---
- [Configuration minimale requise](#minimum-requirements)
- [Stockage](#storage)
- [Processeur et mémoire](#cpu-and-memory)

### Configuration minimale requise

Nous recommandons différentes configurations matérielles en fonction du nombre de licences utilisateur pour {% data variables.product.product_location %}. Si vous approvisionnez plus de ressources que le minimum requis, cela améliorera les performances et la mise à l’échelle de votre instance.

{% data reusables.enterprise_installation.hardware-rec-table %}

{% data reusables.actions.more-resources-for-ghes %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

### Stockage

Nous recommandons un disque SSD haute performance avec un nombre élevé d’IOPS et une faible latence pour {% data variables.product.prodname_ghe_server %}. Les charges de travail sont gourmandes en E/S. Si vous utilisez un hyperviseur nu, nous vous recommandons d’attacher directement le disque ou d’utiliser un disque d’un réseau de zone de stockage (SAN).

Votre instance nécessite un disque de données persistant séparé du disque racine. Pour plus d’informations, consultez « [Vue d’ensemble du système](/enterprise/admin/guides/installation/system-overview) ».

{% ifversion ghes %}

Pour configurer {% data variables.product.prodname_actions %}, vous devez fournir un stockage d’objets blob externe. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements) ».

{% endif %}

L’espace disponible sur le système de fichiers racine sera de 50 % de la taille totale du disque. Vous pouvez redimensionner le disque racine de votre instance en créant une nouvelle instance ou en utilisant une instance existante. Pour plus d’informations, consultez « [Vue d’ensemble du système](/enterprise/admin/guides/installation/system-overview#storage-architecture) » et « [Augmentation de la capacité de stockage](/enterprise/admin/guides/installation/increasing-storage-capacity) ».

### Processeur et mémoire

Les ressources processeur et mémoire que {% data variables.product.prodname_ghe_server %} requiert dépendent des niveaux d’activité pour les utilisateurs, les automatisations et les intégrations.

{% ifversion ghes %}

Si vous envisagez d’activer {% data variables.product.prodname_actions %} pour les utilisateurs de votre instance {% data variables.product.prodname_ghe_server %}, il se peut que vous deviez approvisionner des ressources processeur et mémoire supplémentaires pour celle-ci. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations) ».

{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**Avertissement :** nous recommandons aux utilisateurs de configurer des événements de webhook pour avertir des systèmes externes de l’activité sur {% data variables.product.prodname_ghe_server %}. Les vérifications automatisées des modifications, ou _l’interrogation_, auront un impact négatif sur les performances et la scalabilité de votre instance. Pour plus d’informations, consultez « [À propos des webhooks](/github/extending-github/about-webhooks) ».

{% endwarning %}

Pour plus d’informations sur la supervision de la capacité et du niveau de performance de {% data variables.product.prodname_ghe_server %}, consultez « [Supervision de votre appliance](/admin/enterprise-management/monitoring-your-appliance) ».

Vous pouvez augmenter les ressources processeur ou mémoire de votre instance. Pour plus d’informations, consultez « [Augmentation des ressources processeur ou mémoire](/enterprise/admin/installation/increasing-cpu-or-memory-resources) ».
