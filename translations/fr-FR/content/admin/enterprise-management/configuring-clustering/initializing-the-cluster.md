---
title: Initialisation du cluster
intro: 'Un cluster {% data variables.product.prodname_ghe_server %} doit être configuré avec une licence et initialisé à l’aide de l’interpréteur de commandes d’administration (SSH).'
redirect_from:
  - /enterprise/admin/clustering/initializing-the-cluster
  - /enterprise/admin/enterprise-management/initializing-the-cluster
  - /admin/enterprise-management/initializing-the-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 91394d1d39301f77bc49a87012e04c3d5e9c3b60
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167078'
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

## Installation de {% data variables.product.prodname_ghe_server %}

1. Sur chaque nœud du cluster, provisionnez et installez {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez « [Configuration d’une instance {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance) ».
2. En utilisant l’interpréteur de commandes d’administration ou DHCP, configurez **uniquement** l’adresse IP de chaque nœud. Ne configurez pas d’autres paramètres.

## Configuration du premier nœud

1. Connectez-vous au nœud qui sera désigné comme nœud principal MySQL dans `cluster.conf`. Pour plus d’informations, consultez « [À propos du fichier de configuration de cluster](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file) ».
2. Dans votre navigateur web, accédez à `https://<ip address>:8443/setup/`.
{% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} {% data reusables.enterprise_installation.instance-will-restart-automatically %}

## Initialisation du cluster

Pour initialiser le cluster, vous avez besoin d’un fichier de configuration de cluster (`cluster.conf`). Pour plus d’informations, consultez « [À propos du fichier de configuration de cluster](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file) ».

1. À partir du premier nœud qui a été configuré, exécutez `ghe-cluster-config-init`.  Le cluster est alors initialisé si des nœuds ne sont pas configurés dans le fichier de configuration de cluster.
2. Exécutez `ghe-cluster-config-apply`. Cette commande valide le fichier `cluster.conf`, applique la configuration à chaque fichier de nœud et fait apparaître les services configurés sur chaque nœud.

Pour vérifier l’état d’un cluster en cours d’exécution, utilisez la commande `ghe-cluster-status`.

## À propos du fichier de configuration de cluster

Le fichier de configuration de cluster (`cluster.conf`) définit les nœuds qui composent le cluster ainsi que les services qu’ils exécutent.
Pour plus d’informations, consultez « [À propos des nœuds de cluster](/enterprise/admin/guides/clustering/about-cluster-nodes) ».

Cet exemple de `cluster.conf` définit un cluster à 11 nœuds.

  - Deux nœuds appelés `ghes-front-end-node-\*` exécutent des services chargés de répondre aux demandes des clients.
  - Trois nœuds appelés `ghes-database-node-\*` exécutent des services chargés du stockage, de la récupération et de la réplication des données de base de données.
  - Trois nœuds appelés `ghes-search-node-\*` exécutent des services chargés des fonctionnalités de recherche.
  - Trois nœuds appelés `ghes-storage-node-\*` exécutent des services chargés du stockage, de la récupération et de la réplication des données.

Vous pouvez donner à un nœud n’importe quel nom d’hôte valide. Les noms sont définis en tant que nom d’hôte de chaque nœud et sont aussi ajoutés à `/etc/hosts` sur chaque nœud, si bien que les nœuds peuvent se résoudre localement entre eux.

Spécifiez le premier nœud de cluster que vous avez configuré comme nœud principal MySQL via `mysql-server` et `mysql-master`.

```ini
[cluster]
  mysql-master = ghes-database-node-1
  redis-master = ghes-database-node-1
  primary-datacenter = primary
[cluster "ghes-front-end-node-1"]
  hostname = ghes-front-end-node-1
  ipv4 = 192.168.0.2
  # ipv6 = fd12:3456:789a:1::2
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-front-end-node-2"]
  hostname = ghes-front-end-node-2
  ipv4 = 192.168.0.3
  # ipv6 = fd12:3456:789a:1::3
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-database-node-1"]
  hostname = ghes-database-node-1
  ipv4 = 192.168.0.4
  # ipv6 = fd12:3456:789a:1::4
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-2"]
  hostname = ghes-database-node-2
  ipv4 = 192.168.0.5
  # ipv6 = fd12:3456:789a:1::5
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-3"]
  hostname = ghes-database-node-3
  ipv4 = 192.168.0.6
  # ipv6 = fd12:3456:789a:1::6
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-search-node-1"]
  hostname = ghes-search-node-1
  ipv4 = 192.168.0.7
  # ipv6 = fd12:3456:789a:1::7
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-2"]
  hostname = ghes-search-node-2
  ipv4 = 192.168.0.8
  # ipv6 = fd12:3456:789a:1::8
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-3"]
  hostname = ghes-search-node-3
  ipv4 = 192.168.0.9
  # ipv6 = fd12:3456:789a:1::9
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-storage-node-1"]
  hostname = ghes-storage-node-1
  ipv4 = 192.168.0.10
  # ipv6 = fd12:3456:789a:1::10
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-2"]
  hostname = ghes-storage-node-2
  ipv4 = 192.168.0.11
  # ipv6 = fd12:3456:789a:1::11
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-3"]
  hostname = ghes-storage-node-3
  ipv4 = 192.168.0.12
  # ipv6 = fd12:3456:789a:1::12
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
```

Créez le fichier `/data/user/common/cluster.conf` sur le premier nœud configuré. Par exemple, en utilisant `vim` :

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
