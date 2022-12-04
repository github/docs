---
title: Cluster initialisieren
intro: 'Ein {% data variables.product.prodname_ghe_server %}-Cluster muss mit einer Lizenz eingerichtet und mithilfe der Verwaltungsshell (SSH) initialisiert werden.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167079'
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

## {% data variables.product.prodname_ghe_server %} installieren

1. Stelle auf jedem Clusterknoten {% data variables.product.prodname_ghe_server %} bereit, und installiere es. Weitere Informationen findest du unter [Einrichten einer {% data variables.product.prodname_ghe_server %}-Instanz](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance).
2. Konfiguriere mithilfe der Verwaltungsshell oder DHCP **nur** die IP-Adresse jedes Knotens. Konfiguriere keine anderen Einstellungen.

## Ersten Knoten konfigurieren

1. Stelle eine Verbindung mit dem Knoten her, der in `cluster.conf` als primäre MySQL-Instanz gekennzeichnet wird. Weitere Informationen findest du unter [Informationen zur Clusterkonfigurationsdatei](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file).
2. Wechsle in deinem Webbrowser zu `https://<ip address>:8443/setup/`.
{% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} {% data reusables.enterprise_installation.instance-will-restart-automatically %}

## Cluster initialisieren

Um den Cluster zu initialisieren, benötigst du eine Clusterkonfigurationsdatei (`cluster.conf`). Weitere Informationen findest du unter [Informationen zur Clusterkonfigurationsdatei](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file).

1. Führe auf dem ersten Knoten, der konfiguriert wurde, `ghe-cluster-config-init` aus.  Dadurch wird der Cluster initialisiert, wenn in der Clusterkonfigurationsdatei nicht konfigurierte Knoten vorhanden sind.
2. Führe aus `ghe-cluster-config-apply`. Dieser Befehl validiert die Datei `cluster.conf`, wendet die Konfiguration auf jede Knotendatei an und lädt die konfigurierten Dienste auf jeden Knoten.

Um den Status eines ausgeführten Clusters zu überprüfen, verwende den Befehl `ghe-cluster-status`.

## Informationen zur Clusterkonfigurationsdatei

Die Clusterkonfigurationsdatei (`cluster.conf`) definiert die Knoten im Cluster und die von ihnen ausgeführten Dienste.
Weitere Informationen findest du unter [Informationen zu Clusterknoten](/enterprise/admin/guides/clustering/about-cluster-nodes).

Diese `cluster.conf`-Beispieldatei definiert einen Cluster mit 11 Knoten.

  - Zwei Knoten mit dem Namen `ghes-front-end-node-\*` führen die für die Reaktion auf Clientanforderungen zuständigen Dienste aus
  - Drei Knoten mit dem Namen `ghes-database-node-\*` führen Dienste aus, die für die Speicherung, den Abruf und die Replikation von Datenbankdaten verantwortlich sind
  - Drei Knoten mit dem Namen `ghes-search-node-\*` führen Dienste aus, die für die Suchfunktionalität verantwortlich sind
  - Drei Knoten mit dem Namen `ghes-storage-node-\*` führen Dienste aus, die für die Speicherung, den Abruf und die Replikation von Daten verantwortlich sind

Die Namen der Knoten können beliebige gültige Hostnamen sein. Die Namen sind als Hostnamen jedes Knotens festgelegt und werden auf jedem Knoten zu `/etc/hosts` hinzugefügt, damit die Knoten untereinander lokal auflösbar sind.

Gib den ersten Clusterknoten an, den du über `mysql-server` und `mysql-master` als primär MySQL-Instanz konfiguriert hast.

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

Erstelle die Datei `/data/user/common/cluster.conf` auf dem konfigurierten ersten Knoten. Beispielsweise gilt bei Verwendung von `vim`:

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
