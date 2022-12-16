---
title: Récupération d’une configuration à haute disponibilité
intro: 'Après avoir basculé sur une appliance {% data variables.product.prodname_ghe_server %}, vous devez rétablir la redondance dès que possible plutôt que de vous reposer sur une seule appliance.'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
  - /admin/enterprise-management/recovering-a-high-availability-configuration
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Recover a HA configuration
ms.openlocfilehash: a61cdf4b3f7338c986112f67a0ca66be33d75c5f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332767'
---
## À propos de la récupération d’une configuration à haute disponibilité

Vous pouvez utiliser l’ancienne appliance principale pour en faire la nouvelle appliance réplica si le basculement était planifié ou s’il n’était pas lié à l’intégrité de l’appliance. Si le basculement était lié à un problème au niveau de l’appliance principale, vous pouvez opter pour la création d’une appliance réplica. Pour plus d’informations, consultez « [Création d’un réplica à haute disponibilité](/enterprise/admin/guides/installation/creating-a-high-availability-replica/) ».

{% warning %}

**Avertissement :** Vous devez activer le mode maintenance avant de configurer une ancienne appliance principale en tant que nouveau réplica. Si vous n’activez pas le mode maintenance, vous provoquerez une panne de production.

{% endwarning %}

## Configuration d’une ancienne appliance principale en tant que nouveau réplica

1. Connectez-vous à l’adresse IP de l’ancienne appliance principale avec SSH.
  ```shell
  $ ssh -p 122 admin@<em>FORMER PRIMARY IP</em>
  ```
1. Activez le mode maintenance sur l’ancienne appliance principale. Pour plus d’informations, consultez « [Activation et planification du mode maintenance](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode) ».
1. Sur l’ancienne appliance principale, exécutez `ghe-repl-setup` avec l’adresse IP de l’ancien réplica.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Pour vérifier la connexion à la nouvelle appliance principale et activer le mode réplica pour le nouveau réplica, réexécutez `ghe-repl-setup`.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
