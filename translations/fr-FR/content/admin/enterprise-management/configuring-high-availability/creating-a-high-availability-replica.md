---
title: Création d’un réplica à haute disponibilité
intro: 'Dans une configuration active/passive, l’appliance réplica est une copie redondante de l’appliance primaire. Si l’appliance primaire échoue, le mode haute disponibilité permet au réplica d’agir comme appliance principale, ce qui permet une interruption minimale du service.'
redirect_from:
  - /enterprise/admin/installation/creating-a-high-availability-replica
  - /enterprise/admin/enterprise-management/creating-a-high-availability-replica
  - /admin/enterprise-management/creating-a-high-availability-replica
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Create HA replica
ms.openlocfilehash: ee384588ee76cd455facdb6fcbe838fc110bc223
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106756'
---
{% data reusables.enterprise_installation.replica-limit %}

## Création d’un réplica à haute disponibilité

1. Configurez une nouvelle appliance {% data variables.product.prodname_ghe_server %} sur la plateforme de votre choix. L’appliance réplica doit reprendre les paramètres de processeur, de RAM et de stockage de l’appliance principale. Nous vous recommandons d’installer l’appliance réplica dans un environnement indépendant. Les composants matériels, logiciels et réseau sous-jacents doivent être isolés de ceux de l’appliance principale. Si vous avez recours à un fournisseur de cloud, utilisez une région ou une zone distincte. Pour plus d’informations, consultez « [Configuration d’une instance {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance) ».
1. Vérifiez que la nouvelle appliance peut communiquer avec toutes les autres appliances de cet environnement haute disponibilité sur les ports 122/TCP et 1194/UDP. Pour plus d’informations, consultez « [Ports réseau](/admin/configuration/configuring-network-settings/network-ports#administrative-ports) ».
1. Dans un navigateur, accédez à l’adresse IP de la nouvelle appliance réplica et chargez votre licence {% data variables.product.prodname_enterprise %}.
{% data reusables.enterprise_installation.replica-steps %}
1. Connectez-vous à l’adresse IP de l’appliance réplica avec SSH.
  ```shell
  $ ssh -p 122 admin@REPLICA_IP
  ```
{% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Pour vérifier la connexion à l’appliance principale et activer le mode réplica pour le nouveau réplica, réexécutez `ghe-repl-setup`.
  ```shell
  $ ghe-repl-setup PRIMARY_IP
  ```
{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}

## Création de réplicas de géoréplication

Cet exemple de configuration utilise une appliance principale et deux réplicas, qui sont situés dans trois régions géographiques différentes. Même si les trois nœuds peuvent se trouver sur des réseaux différents, tous les nœuds doivent être mutuellement accessibles. Au minimum, les ports d’administration nécessaires doivent être ouverts à tous les autres nœuds. Pour plus d’informations sur les ports nécessaires, consultez « [Ports réseau](/enterprise/admin/guides/installation/network-ports/#administrative-ports) ».

{% data reusables.enterprise_clustering.network-latency %} Si la latence est supérieure à 70 millisecondes, nous vous recommandons plutôt de mettre en cache les nœuds de réplica. Pour plus d’informations, consultez « [Configuration d’un cache de dépôt](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache) ».

1. Créez le premier réplica comme vous le feriez pour une configuration standard à deux nœuds en exécutant `ghe-repl-setup` sur le premier réplica.
  ```shell
  (replica1)$ ghe-repl-setup PRIMARY_IP
  (replica1)$ ghe-repl-start
  ```
2. Créez un deuxième réplica et utilisez la commande `ghe-repl-setup --add`. L’indicateur `--add` l’empêche de remplacer la configuration de réplication existante et ajoute le nouveau réplica à la configuration.
  ```shell
  (replica2)$ ghe-repl-setup --add PRIMARY_IP
  (replica2)$ ghe-repl-start
  ```
3. Par défaut, les réplicas sont configurés sur le même centre de données et tenteront désormais d’amorcer à partir d’un nœud existant du même centre de données. Configurez les réplicas pour différents centres de données en définissant une valeur différente pour l’option de centre de données. Vous pouvez indiquer n’importe quelles valeurs du moment qu’elles sont différentes les unes des autres. Exécutez la commande `ghe-repl-node` sur chaque nœud et spécifiez le centre de données.

  Sur l’appliance principale :
  ```shell
  (primary)$ ghe-repl-node --datacenter [PRIMARY DC NAME]
  ```
  Sur le premier réplica :
  ```shell
  (replica1)$ ghe-repl-node --datacenter [FIRST REPLICA DC NAME]
  ```
  Sur le deuxième réplica :
  ```shell
  (replica2)$ ghe-repl-node --datacenter [SECOND REPLICA DC NAME]
  ```
  {% tip %}

  **Conseil :** Vous pouvez définir les options `--datacenter` et `--active` options en même temps.

  {% endtip %}
4. Un nœud réplica actif stocke des copies des données de l’appliance et traite les demandes des utilisateurs finaux. Un nœud inactif stocke des copies des données de l’appliance, mais ne peut pas traiter les demandes des utilisateurs finaux. Activez le mode actif à l’aide de l’indicateur `--active` ou le mode inactif à l’aide de l’indicateur `--inactive`.

  Sur le premier réplica :
  ```shell
  (replica1)$ ghe-repl-node --active
  ```
  Sur le deuxième réplica :
  ```shell
  (replica2)$ ghe-repl-node --active
  ```
5. Pour appliquer la configuration, utilisez la commande `ghe-config-apply` sur l’appliance principale.
  ```shell
  (primary)$ ghe-config-apply
  ```

## Configuration de DNS pour la géoréplication

Configurez le service GeoDNS en utilisant les adresses IP du nœud principal et des nœuds réplicas. Vous pouvez aussi créer un enregistrement CNAME DNS pour le nœud principal (par exemple, `primary.github.example.com`) pour accéder au nœud principal via SSH ou pour le sauvegarder via `backup-utils`.

En guise de test, vous pouvez ajouter des entrées au fichier `hosts` de la station de travail locale (par exemple, `/etc/hosts`). Ces exemples d’entrées résolvent les demandes de `HOSTNAME` en `replica2`. Vous pouvez cibler des hôtes spécifiques en commentant différentes lignes.

```
# <primary IP>      HOSTNAME 
# <replica1 IP>     HOSTNAME 
<replica2 IP>     HOSTNAME 
```

## Pour aller plus loin

- « [À propos de la configuration à haute disponibilité](/enterprise/admin/guides/installation/about-high-availability-configuration) »
- « [Utilitaires pour la gestion de la réplication](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management) »
- « [À propos de la géoréplication](/enterprise/admin/guides/installation/about-geo-replication/) »
