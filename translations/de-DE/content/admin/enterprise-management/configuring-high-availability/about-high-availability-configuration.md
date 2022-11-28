---
title: Informationen zur Hochverfügbarkeitskonfiguration
intro: 'In einer Hochverfügbarkeitskonfiguration bleibt eine voll redundante sekundäre {% data variables.product.prodname_ghe_server %}-Appliance mit der primären Appliance synchron. Dies erfolgt über die Replikation sämtlicher großer Datenspeicher.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108418'
---
Beim Konfigurieren der Hochverfügbarkeit gibt es eine automatisierte Einrichtung einer unidirektionalen asynchronen Replikation sämtlicher Datenspeicher (Git-Repositorys, MySQL, Redis und ElasticSearch) von der primären zur Replikat-Appliance. Die meisten {% data variables.product.prodname_ghe_server %}-Konfigurationseinstellungen werden ebenfalls repliziert, darunter auch das {% data variables.enterprise.management_console %}-Kennwort. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungskonsole](/admin/configuration/configuring-your-enterprise/accessing-the-management-console).

{% data variables.product.prodname_ghe_server %} unterstützt eine aktive/passive Konfiguration, bei der die Replikations-Appliance als Standby-Instanz mit Datenbankdiensten im Replikationsmodus ausgeführt wird, aber die Anwendungsdienste gestoppt werden.

Nachdem die Replikation eingerichtet wurde, ist die {% data variables.enterprise.management_console %} auf den Appliances für die Replikation nicht mehr zugänglich. Wenn du zur IP-Adresse oder zum Hostnamen des Replikats auf Port 8443 navigierst, wird die Meldung „Server im Replikationsmodus“ angezeigt, die darauf hinweist, dass die Appliance derzeit als Replikat konfiguriert ist.
{% data reusables.enterprise_installation.replica-limit %}

## Anvisierte Fehlerszenarien

Verwende eine Hochverfügbarkeitskonfiguration zum Schutz vor:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

Eine Hochverfügbarkeitskonfiguration eignet sich nicht für:

  - **Aufskalieren**: Mithilfe der Georeplikation kannst du den Datenverkehr zwar geografisch verteilen, aber die Leistung der Schreibvorgänge ist auf die Geschwindigkeit und Verfügbarkeit der primären Appliance beschränkt. Weitere Informationen findest du unter [Informationen zur Georeplikation](/enterprise/admin/guides/installation/about-geo-replication/).
  - **CI/CD-Last**: Wenn du über eine große Anzahl von CI-Clients verfügst, die geografisch weit von deiner primären Instanz entfernt sind, kannst du von der Konfiguration eines Repositorycaches profitieren. Weitere Informationen findest du unter [Informationen zum Repositoryspeichern](/admin/enterprise-management/caching-repositories/about-repository-caching).
  - **Sichern der primären Appliance**: Eine Hochverfügbarkeitsreplikat ersetzt keine Off-Site-Backups in deinem Disaster Recovery-Plan. Einige Formen von Datenbeschädigungen oder -verlusten werden möglicherweise sofort von der primären Instanz zum Replikat repliziert. Um einen sicheren Rollback auf einen stabilen vergangenen Zustand zu gewährleisten, musst du regelmäßige Backups mit historischen Snapshots durchführen.
  - **Upgrades ohne Downtime**: Platziere zum Verhindern von Datenverlusten und Split-Brain-Situationen in kontrollierten Hochstufungsszenarien die primäre Appliance in den Wartungsmodus, und warte auf den Abschluss sämtlicher Schreibvorgänge, bevor du das Replikat hochstufst.

## Netzwerk-Traffic-Failover-Strategien

Während des Failovers musst du den Netzwerk-Traffic separat konfigurieren und ihn manuell von der primären Instanz zum Replikat weiterleiten.

### DNS-Failover

Verwende mit DNS-Failover kurze TTL-Werte in den DNS-Einträgen, die auf die primäre {% data variables.product.prodname_ghe_server %}-Appliance verweisen. Du solltest einen TTL-Wert zwischen 60 Sekunden und fünf Minuten verwenden.

Während des Failovers musst du die primäre Instanz in den Wartungsmodus versetzen und ihre DNS-Einträge an die IP-Adresse der Replikat-Appliance weiterleiten. Die zum Weiterleiten des Traffics von der primären Instanz zum Replikat erforderliche Zeit hängt von der TTL-Konfiguration und der zum Aktualisieren der DNS-Einträge erforderlichen Zeit ab.

Wenn du die Geo-Replikation verwendest musst du Geo DNS so konfigurieren, dass der Traffic an das nächstgelegene Replikat weitergeleitet wird. Weitere Informationen findest du unter [Informationen zur Georeplikation](/enterprise/admin/guides/installation/about-geo-replication/).

### Load Balancer

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

Während des Failovers musst du die primäre Appliance in den Wartungsmodus versetzen. Du kannst den Load-Balancer so konfigurieren, dass automatisch erkannt wird, wenn das Replikat auf die primäre Instanz hochgestuft wurde, oder dass eine manuelle Konfigurationsänderung erforderlich ist. Du musst das Replikat manuell auf die primäre Instanz hochstufen, bevor es auf den Benutzer-Traffic antwortet. Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_ghe_server %} mit einem Lastenausgleich](/enterprise/admin/guides/installation/using-github-enterprise-server-with-a-load-balancer/).

{% data reusables.enterprise_installation.monitoring-replicas %}

## Dienstprogramm zur Replikationsverwaltung

Verwende zum Verwalten der Replikation auf {% data variables.product.prodname_ghe_server %} diese Befehlszeilendienstprogramme, indem du mittels SSH eine Verbindung zur Replikat-Appliance herstellst.

### ghe-repl-setup

Der Befehl `ghe-repl-setup` versetzt eine {% data variables.product.prodname_ghe_server %}-Appliance in den Replikat-Standbymodus.

 - Für die Kommunikation zwischen den beiden Appliances wird ein verschlüsselter WireGuard-VPN-Tunnel konfiguriert.
 - Datenbankdienste werden für die Replikation konfiguriert und gestartet.
 - Anwendungsdienste werden deaktiviert. Wenn versucht wird, über HTTP, Git oder über andere unterstützte Protokolle auf die Replikat-Appliance zuzugreifen, wird die Wartungsseite „appliance in replica mode“ (Appliance im Replikatmodus) oder eine Fehlermeldung angezeigt.

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

Der Befehl `ghe-repl-start` aktiviert die aktive Replikation für alle Datenspeicher.

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

Der Befehl `ghe-repl-status` gibt den Status `OK`, `WARNING` oder `CRITICAL` für jeden Datenspeicher-Replikationsstream zurück. Wenn sich einer der Replikationskanäle im Zustand `WARNING` befindet, wird der Befehl mit dem Code `1` beendet. Ebenso wird der Befehl mit dem Code `2` beendet, wenn sich einer der Kanäle im Zustand `CRITICAL` befindet.

```shell
admin@169-254-1-2:~$ ghe-repl-status
OK: mysql replication in sync
OK: redis replication is in sync
OK: elasticsearch cluster is in sync
OK: git data is in sync (10 repos, 2 wikis, 5 gists)
OK: pages data is in sync
```

Die Optionen `-v` und `-vv` geben Auskunft über den Replikationsstatus der einzelnen Datenspeicher:

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

Der Befehl `ghe-repl-stop` deaktiviert vorübergehend die Replikation für alle Datenspeicher und beendet die Replikationsdienste. Verwende den Befehl [ghe-repl-start](#ghe-repl-start), um die Replikation fortzusetzen.

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

Der Befehl `ghe-repl-promote` deaktiviert die Replikation und konvertiert die Replikatappliance in eine primäre Appliance. Die Appliance wird mit denselben Einstellungen wie die ursprüngliche primäre Instanz konfiguriert, und alle Dienste sind aktiviert.

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

Der Befehl `ghe-repl-teardown` deaktiviert den Replikationsmodus vollständig und entfernt die Replikationskonfiguration.

## Weiterführende Themen

- [Erstellen eines Hochverfügbarkeitsreplikats](/enterprise/admin/guides/installation/creating-a-high-availability-replica)
- [Netzwerkports](/admin/configuration/configuring-network-settings/network-ports)
