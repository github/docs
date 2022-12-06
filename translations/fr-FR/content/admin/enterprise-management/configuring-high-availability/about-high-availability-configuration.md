---
title: À propos de la configuration de la haute disponibilité
intro: 'Dans une configuration à haute disponibilité, une appliance {% data variables.product.prodname_ghe_server %} secondaire entièrement redondante reste synchronisée avec l’appliance principale via la réplication de tous les magasins de données principaux.'
redirect_from:
  - /enterprise/admin/installation/about-high-availability-configuration
  - /enterprise/admin/enterprise-management/about-high-availability-configuration
  - /admin/enterprise-management/about-high-availability-configuration
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: About HA configuration
ms.openlocfilehash: b54ca60c6cf1d79b9435ca8deedebec09ed39396
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108417'
---
Quand vous configurez la haute disponibilité, il existe une configuration automatisée de la réplication asynchrone unidirectionnelle de tous les magasins de données (dépôts Git, MySQL, Redis et Elasticsearch) de l’appliance principale à l’appliance réplica. La plupart des paramètres de configuration {% data variables.product.prodname_ghe_server %} sont également répliqués, y compris le mot de passe de la {% data variables.enterprise.management_console %}. Pour plus d’informations, consultez « [Accès à la console de gestion](/admin/configuration/configuring-your-enterprise/accessing-the-management-console) ».

{% data variables.product.prodname_ghe_server %} prend en charge une configuration active/passive, où l’appliance réplica s’exécute comme solution de secours avec les services de base de données en mode de réplication et les services d’application arrêtés.

Une fois la réplication établie, la {% data variables.enterprise.management_console %} n’est plus accessible sur les appliances réplicas. Si vous accédez à l’adresse IP ou au nom d’hôte du réplica sur le port 8443, vous verrez un message « Serveur en mode de réplication », qui indique que l’appliance est actuellement configurée en tant que réplica.
{% data reusables.enterprise_installation.replica-limit %}

## Scénarios d’échec ciblés

Utilisez une configuration à haute disponibilité pour la protection contre :

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

Une configuration à haute disponibilité n’est pas une bonne solution pour les opérations suivantes :

  - **Scale-out**. Bien que vous puissiez distribuer le trafic géographiquement à l’aide de la géoréplication, les performances des écritures sont limitées à la vitesse et à la disponibilité de l’appliance principale. Pour plus d’informations, consultez « [À propos de la géoréplication](/enterprise/admin/guides/installation/about-geo-replication/) ».
  - **Chargement CI/CD**. Si vous avez un grand nombre de clients CI qui sont géographiquement distants de votre instance principale, vous pouvez tirer parti de la configuration d’un cache de dépôt. Pour plus d’informations, consultez « [À propos de la mise en cache des dépôts](/admin/enterprise-management/caching-repositories/about-repository-caching) ».
  - **Sauvegarde de votre appliance principale**. Un réplica à haute disponibilité ne remplace pas les sauvegardes hors site dans votre plan de reprise d’activité après sinistre. Certaines formes d’altération ou de perte de données peuvent être répliquées immédiatement de l’appliance principale au réplica. Pour garantir une restauration sécurisée à un état passé stable, vous devez effectuer des sauvegardes régulières avec des instantanés historiques.
  - **Mises à niveau sans temps d’arrêt**. Pour éviter une perte de données et des situations de Split-Brain dans des scénarios de promotion contrôlée, placez l’appliance principale en mode de maintenance et attendez que toutes les écritures se terminent avant de promouvoir le réplica.

## Stratégies de basculement du trafic réseau

Pendant le basculement, vous devez configurer et gérer séparément le trafic réseau de redirection de l’appliance principale au réplica.

### Basculement DNS

Avec le basculement DNS, utilisez des valeurs de durée de vie courtes dans les enregistrements DNS qui pointent vers l’appliance principale {% data variables.product.prodname_ghe_server %}. Nous recommandons une durée de vie comprise entre 60 secondes et cinq minutes.

Pendant le basculement, vous devez placer l’appliance principale en mode de maintenance et rediriger ses enregistrements DNS vers l’adresse IP de l’appliance réplica. Le temps nécessaire pour rediriger le trafic de l’appliance principale au réplica dépend de la configuration de la durée de vie et du temps nécessaire pour mettre à jour les enregistrements DNS.

Si vous utilisez la géoréplication, vous devez configurer le service GeoDNS pour diriger le trafic vers le réplica le plus proche. Pour plus d’informations, consultez « [À propos de la géoréplication](/enterprise/admin/guides/installation/about-geo-replication/) ».

### Équilibrage de charge

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

Pendant le basculement, vous devez placer l’appliance principale en mode de maintenance. Vous pouvez configurer l’équilibreur de charge pour détecter automatiquement le moment où le réplica a été promu en appliance principale, ou cela peut nécessiter une modification de configuration manuelle. Vous devez promouvoir manuellement le réplica en appliance principale pour qu’il puisse répondre au trafic utilisateur. Pour plus d’informations, consultez « [Utilisation de {% data variables.product.prodname_ghe_server %} avec un équilibreur de charge](/enterprise/admin/guides/installation/using-github-enterprise-server-with-a-load-balancer/) ».

{% data reusables.enterprise_installation.monitoring-replicas %}

## Utilitaires pour la gestion de la réplication

Pour gérer la réplication sur {% data variables.product.prodname_ghe_server %}, utilisez ces utilitaires de ligne de commande en vous connectant à l’appliance réplica à l’aide de SSH.

### ghe-repl-setup

La commande `ghe-repl-setup` place une appliance {% data variables.product.prodname_ghe_server %} en mode de secours de réplica.

 - Un tunnel VPN WireGuard chiffré est configuré pour la communication entre les deux appliances.
 - Les services de base de données sont configurés pour la réplication et démarrés.
 - Les services d’application sont désactivés. Les tentatives d’accès à l’appliance réplica via HTTP, Git ou d’autres protocoles pris en charge entraînent l’affichage d’un message d’erreur ou d’une page de maintenance « appliance en mode réplica ».

```shell
admin@169-254-1-2:~$ ghe-repl-setup 169.254.1.1
Verifying ssh connectivity with 169.254.1.1 ...
Connection check succeeded.
Configuring database replication against primary ...
Success: Replica mode is configured against 169.254.1.1.
To disable replica mode and undo these changes, run `ghe-repl-teardown'.
Run `ghe-repl-start' to start replicating against the newly configured primary.
```

### ghe-repl-start

La commande `ghe-repl-start` lance la réplication active de tous les magasins de données.

```shell
admin@169-254-1-2:~$ ghe-repl-start
Starting MySQL replication ...
Starting Redis replication ...
Starting Elasticsearch replication ...
Starting Pages replication ...
Starting Git replication ...
Success: replication is running for all services.
Use `ghe-repl-status' to monitor replication health and progress.
```

### ghe-repl-status

La commande `ghe-repl-status` retourne un état `OK`, `WARNING` ou `CRITICAL` pour chaque flux de réplication de magasin de données. Quand l’un des canaux de réplication est dans un état `WARNING`, la commande s’arrête avec le code `1`. De façon similaire, quand l’un des canaux se trouve dans un état `CRITICAL`, la commande s’arrête avec le code `2`.

```shell
admin@169-254-1-2:~$ ghe-repl-status
OK: mysql replication in sync
OK: redis replication is in sync
OK: elasticsearch cluster is in sync
OK: git data is in sync (10 repos, 2 wikis, 5 gists)
OK: pages data is in sync
```

Les options `-v` et `-vv` fournissent des détails sur l’état de réplication de chaque magasin de données :

```shell
$ ghe-repl-status -v
OK: mysql replication in sync
  | IO running: Yes, SQL running: Yes, Delay: 0

OK: redis replication is in sync
  | master_host:169.254.1.1
  | master_port:6379
  | master_link_status:up
  | master_last_io_seconds_ago:3
  | master_sync_in_progress:0

OK: elasticsearch cluster is in sync
  | {
  |   "cluster_name" : "github-enterprise",
  |   "status" : "green",
  |   "timed_out" : false,
  |   "number_of_nodes" : 2,
  |   "number_of_data_nodes" : 2,
  |   "active_primary_shards" : 12,
  |   "active_shards" : 24,
  |   "relocating_shards" : 0,
  |   "initializing_shards" : 0,
  |   "unassigned_shards" : 0
  | }

OK: git data is in sync (366 repos, 31 wikis, 851 gists)
  |                   TOTAL         OK      FAULT    PENDING      DELAY
  | repositories        366        366          0          0        0.0
  |        wikis         31         31          0          0        0.0
  |        gists        851        851          0          0        0.0
  |        total       1248       1248          0          0        0.0

OK: pages data is in sync
  | Pages are in sync
```

### ghe-repl-stop

La commande `ghe-repl-stop` désactive temporairement la réplication pour tous les magasins de données et arrête les services de réplication. Pour reprendre la réplication, utilisez la commande [ghe-repl-start](#ghe-repl-start).

```shell
admin@168-254-1-2:~$ ghe-repl-stop
Stopping Pages replication ...
Stopping Git replication ...
Stopping MySQL replication ...
Stopping Redis replication ...
Stopping Elasticsearch replication ...
Success: replication was stopped for all services.
```

### ghe-repl-promote

La commande `ghe-repl-promote` désactive la réplication et convertit l’appliance réplica en appliance principale. L’appliance est configurée avec les mêmes paramètres que l’appliance principale d’origine et tous les services sont activés.

{% data reusables.enterprise_installation.promoting-a-replica %}

```shell
admin@168-254-1-2:~$ ghe-repl-promote
Enabling maintenance mode on the primary to prevent writes ...
Stopping replication ...
  | Stopping Pages replication ...
  | Stopping Git replication ...
  | Stopping MySQL replication ...
  | Stopping Redis replication ...
  | Stopping Elasticsearch replication ...
  | Success: replication was stopped for all services.
Switching out of replica mode ...
  | Success: Replication configuration has been removed.
  | Run `ghe-repl-setup' to re-enable replica mode.
Applying configuration and starting services ...
Success: Replica has been promoted to primary and is now accepting requests.
```

### ghe-repl-teardown

La commande `ghe-repl-teardown` désactive complètement le mode de réplication et supprime la configuration du réplica.

## Pour aller plus loin

- « [Création d’un réplica à haute disponibilité](/enterprise/admin/guides/installation/creating-a-high-availability-replica) »
- « [Ports réseau](/admin/configuration/configuring-network-settings/network-ports) »
