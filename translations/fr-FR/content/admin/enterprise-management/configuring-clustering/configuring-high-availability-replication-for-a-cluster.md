---
title: Configuration de la réplication à haute disponibilité pour un cluster
intro: 'Vous pouvez configurer un réplica passif de l’intégralité de votre cluster {% data variables.product.prodname_ghe_server %} à un autre emplacement, ce qui permet un basculement de votre cluster vers des nœuds redondants.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
  - /admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Configure HA replication
ms.openlocfilehash: 3663fe290fab6644c5650c3f1ff435dfae87bcf4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106910'
---
## À propos de la configuration de la réplication à haute disponibilité pour un cluster

Vous pouvez configurer un déploiement de cluster de {% data variables.product.prodname_ghe_server %} à des fins de haute disponibilité, où un ensemble identique de nœuds passifs est synchronisé avec les nœuds de votre cluster actif. Si des défaillances matérielles ou logicielles touchent le centre de données où se trouve votre cluster actif, vous pouvez basculer manuellement vers les nœuds réplicas et continuer à traiter les demandes utilisateur, réduisant ainsi l’impact de la panne.

En mode haute disponibilité, chaque nœud actif se synchronise régulièrement avec un nœud passif correspondant. Le nœud passif s’exécute en veille et ne sert pas les applications ni ne traite les demandes utilisateur.

Nous vous recommandons de configurer la haute disponibilité dans le cadre d’un plan de reprise d’activité après sinistre pour {% data variables.product.prodname_ghe_server %}. De même, nous vous recommandons d’effectuer des sauvegardes régulières. Pour plus d’informations, consultez « [Configuration des sauvegardes sur votre appliance](/enterprise/admin/configuration/configuring-backups-on-your-appliance) ».

## Prérequis

### Matériels et logiciels

Pour chaque nœud existant dans votre cluster actif, vous devez provisionner une deuxième machine virtuelle avec des ressources matérielles identiques. Par exemple, si votre cluster compte 11 nœuds et que chaque nœud est doté de 12 processeurs virtuels, de 96 Go de RAM et de 750 Go de stockage attaché, vous devez provisionner 11 nouvelles machines virtuelles possédant chacune 12 processeurs virtuels, 96 Go de RAM et 750 Go de stockage attaché.

Sur chaque nouvelle machine virtuelle, installez la même version de {% data variables.product.prodname_ghe_server %} que celle qui s’exécute sur les nœuds de votre cluster actif. Vous n’avez pas besoin de charger une licence ou d’effectuer une configuration supplémentaire. Pour plus d’informations, consultez « [Configuration d’une instance {% data variables.product.prodname_ghe_server %}](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance) ».

{% note %}

**Remarque** : Les nœuds que vous envisagez d’utiliser pour la réplication à haute disponibilité doivent être des instances {% data variables.product.prodname_ghe_server %} autonomes. N’initialisez pas les nœuds passifs en tant que deuxième cluster.

{% endnote %}

### Réseau

Vous devez attribuer une adresse IP statique à chaque nouveau nœud que vous provisionnez, et vous devez configurer un équilibreur de charge qui accepte les connexions et les dirige vers le niveau front-end de votre cluster.

Nous vous déconseillons de configurer un pare-feu entre le réseau où se trouve votre cluster actif et le réseau où se trouve votre cluster passif. La latence entre le réseau comportant les nœuds actifs et le réseau doté des nœuds passifs doit être inférieure à 70 millisecondes. Pour plus d’informations sur la connectivité réseau entre les nœuds du cluster passif, consultez « [Configuration réseau d’un cluster](/enterprise/admin/enterprise-management/cluster-network-configuration) ».

## Création d’un réplica à haute disponibilité pour un cluster

- [Affectation de nœuds actifs au centre de données principal](#assigning-active-nodes-to-the-primary-datacenter)
- [Ajout de nœuds passifs au fichier de configuration de cluster](#adding-passive-nodes-to-the-cluster-configuration-file)
- [Exemple de configuration](#example-configuration)

### Affectation de nœuds actifs au centre de données principal

Avant de définir un centre de données secondaire pour vos nœuds passifs, veillez à affecter vos nœuds actifs au centre de données principal.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. Notez le nom du centre de données principal de votre cluster. La section `[cluster]` située en haut du fichier de configuration de cluster définit le nom du centre de données principal en utilisant la paire clé-valeur `primary-datacenter`. Par défaut, le centre de données principal de votre cluster se nomme `default`.

    ```shell
    [cluster]
      mysql-master = <em>HOSTNAME</em>
      redis-master = <em>HOSTNAME</em>
      <strong>primary-datacenter = default</strong>
    ```

    - Vous pouvez éventuellement remplacez le nom du centre de données principal par quelque chose de plus descriptif ou précis en modifiant la valeur de `primary-datacenter`.

4. {% data reusables.enterprise_clustering.configuration-file-heading %} Sous le titre de chaque nœud, ajoutez une nouvelle paire clé-valeur pour affecter le nœud à un centre de données. Utilisez la même valeur de `primary-datacenter` qu’à l’étape 3 ci-dessus. Par exemple, si vous souhaitez utiliser le nom par défaut (`default`), ajoutez la paire clé-valeur suivante à la section pour chaque nœud.

    ```
    datacenter = default
    ```

    Quand vous avez terminé, la section de chaque nœud du fichier de configuration de cluster doit ressembler à l’exemple suivant. {% data reusables.enterprise_clustering.key-value-pair-order-irrelevant %}

    ```shell
    [cluster "<em>HOSTNAME</em>"]
      <strong>datacenter = default</strong>
      hostname = <em>HOSTNAME</em>
      ipv4 = <em>IP ADDRESS</em>
      ...
    ...
    ```

    {% note %}

    **Remarque** : Si vous avez changé le nom du centre de données principal à l’étape 3, recherchez la paire clé-valeur `consul-datacenter` dans la section de chaque nœud et remplacez la valeur par le nouveau nom du centre de données principal. Par exemple, si vous avez nommé le centre de données principal `primary`, utilisez la paire clé-valeur suivante pour chaque nœud.

    ```
    consul-datacenter = primary
    ```

    {% endnote %}

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

Une fois que {% data variables.product.prodname_ghe_server %} vous a renvoyé à l’invite, l’affectation de vos nœuds au centre de données principal du cluster est terminée.

### Ajout de nœuds passifs au fichier de configuration de cluster

Pour configurer la haute disponibilité, vous devez définir un nœud passif correspondant pour chaque nœud actif de votre cluster. Les instructions suivantes visent à créer une nouvelle configuration de cluster qui définit les nœuds actifs et les nœuds passifs. Vous allez :

- Créer une copie du fichier de configuration de cluster actif.
- Modifier la copie pour définir des nœuds passifs qui correspondent aux nœuds actifs, en ajoutant les adresses IP des nouvelles machines virtuelles que vous avez provisionnées.
- Fusionner la copie modifiée de la configuration du cluster dans votre configuration active.
- Appliquer la nouvelle configuration pour commencer la réplication.

Pour voir un exemple de configuration, consultez « [Exemple de configuration](#example-configuration) ».

1. Pour chaque nœud de votre cluster, provisionnez une machine virtuelle correspondante avec des spécifications identiques, exécutant la même version de {% data variables.product.prodname_ghe_server %}. Notez l’adresse IPv4 et le nom d’hôte de chaque nouveau nœud de cluster. Pour plus d’informations, consultez « [Prérequis](#prerequisites) ».

    {% note %}

    **Remarque** : Si vous reconfigurez la haute disponibilité après un basculement, vous pouvez à la place utiliser les anciens nœuds du centre de données principal.

    {% endnote %}

{% data reusables.enterprise_clustering.ssh-to-a-node %}

3. Sauvegardez votre configuration de cluster existante.

    ```
    cp /data/user/common/cluster.conf ~/$(date +%Y-%m-%d)-cluster.conf.backup
    ```

4. Créez une copie de votre fichier de configuration de cluster existant dans un emplacement provisoire, comme _/home/admin/cluster-passive.conf_. Supprimez les paires clé-valeur uniques pour les adresses IP (`ipv*`), les UUID (`uuid`) et les clés publiques pour WireGuard (`wireguard-pubkey`).

    ```
    grep -Ev "(?:|ipv|uuid|vpn|wireguard\-pubkey)" /data/user/common/cluster.conf > ~/cluster-passive.conf
    ```

5. Supprimez la section `[cluster]` du fichier de configuration de cluster provisoire que vous avez copié à l’étape précédente.

    ```
    git config -f ~/cluster-passive.conf --remove-section cluster
    ```

6. Choisissez un nom pour le centre de données secondaire dans lequel vous avez provisionné vos nœuds passifs, puis mettez à jour le fichier de configuration de cluster provisoire avec le nouveau nom de centre de données. Remplacez `SECONDARY` par le nom que vous avez choisi.

    ```shell
    sed -i 's/datacenter = default/datacenter = <em>SECONDARY</em>/g' ~/cluster-passive.conf
    ```

7. Choisissez un modèle pour les noms d’hôte des nœuds passifs.

    {% warning %}

    **Avertissement** : Les noms d’hôte des nœuds passifs doivent être uniques et différents des noms d’hôte des nœuds actifs correspondants.

    {% endwarning %}

8. Ouvrez le fichier de configuration de cluster provisoire de l’étape 3 dans un éditeur de texte. Par exemple, vous pouvez utiliser Vim.

    ```shell
    sudo vim ~/cluster-passive.conf
    ```

9. Dans chaque section du fichier de configuration de cluster provisoire, mettez à jour la configuration du nœud. {% data reusables.enterprise_clustering.configuration-file-heading %}

    - Remplacez le nom d’hôte entre guillemets dans le titre de section et la valeur de `hostname` dans la section par nom d’hôte du nœud passif, selon le modèle que vous avez choisi à l’étape 7 ci-dessus.
    - Ajoutez une nouvelle clé nommée `ipv4`, puis définissez la valeur sur l’adresse IPv4 statique du nœud passif.
    - Ajoutez une nouvelle paire clé-valeur, `replica = enabled`.

    ```shell
    [cluster "<em>NEW PASSIVE NODE HOSTNAME</em>"]
      ...
      hostname = <em>NEW PASSIVE NODE HOSTNAME</em>
      ipv4 = <em>NEW PASSIVE NODE IPV4 ADDRESS</em>
      <strong>replica = enabled</strong>
      ...
    ...
    ```

10. Ajoutez le contenu du fichier de configuration de cluster provisoire que vous avez créé à l’étape 4 au fichier de configuration actif.

    ```shell
    cat ~/cluster-passive.conf >> /data/user/common/cluster.conf
    ```

11. Désignez les nœuds MySQL et Redis principaux dans le centre de données secondaire. Remplacez `REPLICA MYSQL PRIMARY HOSTNAME` et `REPLICA REDIS PRIMARY HOSTNAME` par les noms d’hôte des nœuds passifs que vous avez provisionnés pour qu’ils correspondent à vos nœuds principaux MySQL et Redis existants.

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-master-replica <em>REPLICA MYSQL PRIMARY HOSTNAME</em>
    git config -f /data/user/common/cluster.conf cluster.redis-master-replica <em>REPLICA REDIS PRIMARY HOSTNAME</em>
    ```

    {% warning %}

    **Avertissement** : Passez en revue votre fichier de configuration de cluster avant de continuer.

    - Dans la section `[cluster]` de niveau supérieur, vérifiez que les valeurs de `mysql-master-replica` et `redis-master-replica` correspondent aux noms d’hôte appropriés pour les nœuds passifs du centre de données secondaire qui serviront de nœuds principaux MySQL et Redis après un basculement.
    - Dans chaque section d’un nœud actif nommé <code>[cluster "<em>ACTIVE NODE HOSTNAME</em>"]</code>, vérifiez une nouvelle fois les paires clé-valeur suivantes.
      - `datacenter` doit correspondre à la valeur de `primary-datacenter` dans la section `[cluster]` de niveau supérieur.
      - `consul-datacenter` doit correspondre à la valeur de `datacenter`, qui doit être identique à la valeur de `primary-datacenter` dans la section `[cluster]` de niveau supérieur.
    - Pour chaque nœud actif, vérifiez que la configuration présente **une** section correspondante pour **un** nœud passif avec les mêmes rôles. Dans chaque section d’un nœud passif, vérifiez bien chaque paire clé-valeur.
      - `datacenter` doit correspondre à tous les autres nœuds passifs.
      - `consul-datacenter` doit correspondre à tous les autres nœuds passifs.
      - `hostname` doit correspondre au nom d’hôte dans le titre de section.
      - `ipv4` doit correspondre à l’adresse IPv4 statique unique du nœud.
      - `replica` doit être configuré avec le paramètre `enabled`.
    - Profitez de l’occasion pour supprimer les sections correspondant aux nœuds hors connexion qui n’ont plus d’utilité.

    Pour voir un exemple de configuration, consultez « [Exemple de configuration](#example-configuration) ».

    {% endwarning %}

13. Initialisez la nouvelle configuration de cluster. {% data reusables.enterprise.use-a-multiplexer %}

    ```shell
    ghe-cluster-config-init
    ```

14. Une fois l’initialisation terminée, {% data variables.product.prodname_ghe_server %} affiche le message suivant.

    ```shell
    Finished cluster initialization
    ```

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

17. Configurez un équilibreur de charge qui accepte les connexions des utilisateurs si vous basculez vers les nœuds passifs. Pour plus d’informations, consultez « [Configuration du réseau du cluster](/enterprise/admin/enterprise-management/cluster-network-configuration#configuring-a-load-balancer) ».

La configuration de la réplication à haute disponibilité des nœuds de votre cluster est terminée. Chaque nœud actif commence à répliquer la configuration et les données sur son nœud passif correspondant, et vous pouvez diriger le trafic vers l’équilibreur de charge du centre de données secondaire en cas de défaillance. Pour plus d’informations sur le basculement, consultez « [Lancement d’un basculement vers votre cluster réplica](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster) ».

### Exemple de configuration

La configuration générale de `[cluster]` doit ressembler à l’exemple suivant.

```shell
[cluster]
  mysql-master = <em>HOSTNAME OF ACTIVE MYSQL MASTER</em>
  redis-master = <em>HOSTNAME OF ACTIVE REDIS MASTER</em>
  primary-datacenter = <em>PRIMARY DATACENTER NAME</em>
  mysql-master-replica = <em>HOSTNAME OF PASSIVE MYSQL MASTER</em>
  redis-master-replica = <em>HOSTNAME OF PASSIVE REDIS MASTER</em>
  mysql-auto-failover = false
...
```

La configuration d’un nœud actif dans le niveau de stockage de votre cluster doit ressembler à l’exemple suivant.

```shell
...
[cluster "<em>UNIQUE ACTIVE NODE HOSTNAME</em>"]
  datacenter = default
  hostname = <em>UNIQUE ACTIVE NODE HOSTNAME</em>
  ipv4 = <em>IPV4 ADDRESS</em>
  consul-datacenter = default
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  vpn = <em>IPV4 ADDRESS SET AUTOMATICALLY</em>
  uuid = <em>UUID SET AUTOMATICALLY</em>
  wireguard-pubkey = <em>PUBLIC KEY SET AUTOMATICALLY</em>
...
```

La configuration du nœud passif correspondant dans le niveau de stockage doit ressembler à l’exemple suivant.

- Les différences importantes par rapport au nœud actif correspondant sont indiquées **en gras**.
- Sachant que {% data variables.product.prodname_ghe_server %} attribue automatiquement des valeurs à `vpn`, `uuid` et `wireguard-pubkey`, vous ne devez pas définir les valeurs des nœuds passifs que vous prévoyez d’initialiser.
- Les rôles serveur, définis par les clés `*-server`, sont identiques au nœud actif correspondant.

```shell
...
<strong>[cluster "<em>UNIQUE PASSIVE NODE HOSTNAME</em>"]</strong>
  <strong>replica = enabled</strong>
  <strong>ipv4 = <em>IPV4 ADDRESS OF NEW VM WITH IDENTICAL RESOURCES</em></strong>
  <strong>datacenter = <em>SECONDARY DATACENTER NAME</em></strong>
  <strong>hostname = <em>UNIQUE PASSIVE NODE HOSTNAME</em></strong>
  <strong>consul-datacenter = <em>SECONDARY DATACENTER NAME</em></strong>
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  <strong>vpn = <em>DO NOT DEFINE</em></strong>
  <strong>uuid = <em>DO NOT DEFINE</em></strong>
  <strong>wireguard-pubkey = <em>DO NOT DEFINE</em></strong>
...
```

## Supervision de la réplication entre les nœuds de cluster actifs et passifs

La réplication initiale entre les nœuds actifs et passifs de votre cluster prend du temps. La durée dépend de la quantité de données à répliquer et des niveaux d’activité de {% data variables.product.prodname_ghe_server %}.

Vous pouvez superviser la progression de n’importe quel nœud du cluster à l’aide des outils en ligne de commande disponibles via l’interpréteur de commandes d’administration {% data variables.product.prodname_ghe_server %} . Pour plus d’informations sur l’interpréteur de commandes d’administration, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh) ».

- Supervision de la réplication des bases de données :

  ```
  /usr/local/share/enterprise/ghe-cluster-status-mysql
  ```

- Supervision de la réplication des données de dépôt et de Gist :

  ```
  ghe-spokes status
  ```

- Supervision de la réplication des données d’attachement et LFS :

  ```
  ghe-storage replication-status
  ```

- Supervision de la réplication des données Pages :

  ```
  ghe-dpages replication-status
  ```

Vous pouvez utiliser `ghe-cluster-status` pour examiner la santé globale de votre cluster. Pour plus d’informations, consultez « [Utilitaires en ligne de commande](/enterprise/admin/configuration/command-line-utilities#ghe-cluster-status) ».

## Reconfiguration de la réplication à haute disponibilité après un basculement

Après avoir opéré un basculement des nœuds actifs du cluster vers les nœuds passifs du cluster, vous pouvez reconfigurer la réplication à haute disponibilité de deux façons.

### Provisionnement et configuration de nouveaux nœuds passifs

Après un basculement, vous pouvez reconfigurer la haute disponibilité de deux façons. La méthode que vous choisissez va dépendre de la raison pour laquelle vous avez effectué le basculement et de l’état des nœuds actifs d’origine.

1. Provisionnez et configurez un nouvel ensemble de nœuds passifs pour chaque nouveau nœud actif de votre centre de données secondaire.

2. Utilisez les anciens nœuds actifs comme nouveaux nœuds passifs.

Le processus de reconfiguration de la haute disponibilité est identique au processus de configuration initiale de la haute disponibilité. Pour plus d’informations, consultez « [Création d’un réplica à haute disponibilité pour un cluster](#creating-a-high-availability-replica-for-a-cluster) ».


## Désactivation de la réplication à haute disponibilité pour un cluster

Vous pouvez mettre fin à la réplication vers les nœuds passifs pour le déploiement de votre cluster de {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. Dans la section `[cluster]` de niveau supérieur, supprimez les paires clé-valeur `redis-master-replica` et `mysql-master-replica`.

4. Supprimez chaque section de nœud passif. Pour les nœuds passifs, `replica` est configuré avec le paramètre `enabled`.

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

Une fois que {% data variables.product.prodname_ghe_server %} vous a renvoyé à l’invite, la désactivation de la réplication à haute disponibilité est terminée.
