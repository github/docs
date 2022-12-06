---
title: Haute disponibilité pour GitHub Actions
intro: 'Il existe des considérations particulières à prendre en compte pour l’administration de {% data variables.product.prodname_actions %} dans une configuration à haute disponibilité.'
versions:
  ghes: '*'
type: reference
topics:
  - Actions
  - Enterprise
  - High availability
  - Infrastructure
  - Storage
redirect_from:
  - /admin/github-actions/high-availability-for-github-actions
shortTitle: HA for GitHub Actions
ms.openlocfilehash: c8b71ddb651baa0757100c356ce3f9edb0e1edee
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145102946'
---
## Réplication ou redondance de vos données {% data variables.product.prodname_actions %}

{% data reusables.actions.enterprise-storage-ha-backups %}

Nous vous recommandons vivement de configurer votre stockage externe {% data variables.product.prodname_actions %} de sorte qu’il utilise la redondance ou la réplication de données. Pour plus d’informations, consultez la documentation de votre fournisseur de stockage :

* [Documentation sur la redondance de Stockage Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy)
* [Documentation sur la réplication Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html)

## Réplicas à haute disponibilité

### Promotion d’un réplica

Quand vous activez une configuration à haute disponibilité, les réplicas éventuels sont automatiquement configurés pour utiliser la configuration de stockage externe {% data variables.product.prodname_actions %}. Si vous devez lancer un basculement pour promouvoir un réplica, aucune modification de configuration supplémentaire n’est nécessaire pour {% data variables.product.prodname_actions %}.

Pour plus d’informations, consultez « [Lancement d’un basculement vers votre appliance réplica](/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance) ».

### Suppression d’un réplica à haute disponibilité

Évitez de permettre à plusieurs instances d’écrire sur un même stockage externe {% data variables.product.prodname_actions %}. Cela peut se produire au moment d’utiliser la commande `ghe-repl-teardown` pour arrêter et supprimer définitivement un réplica prenant en charge {% data variables.product.prodname_actions %}. La raison en est que le réplica est converti en instance {% data variables.product.prodname_ghe_server %} autonome, et une fois la suppression opérée, elle utilise toujours la même configuration de stockage externe que l’instance principale.

Pour éviter ce problème, nous vous recommandons de désactiver le serveur réplica ou de mettre à jour sa configuration {% data variables.product.prodname_actions %} avec un stockage externe différent.
