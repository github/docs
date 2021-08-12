---
title: Informationen zur Hochverfügbarkeitskonfiguration
intro: 'In einer Hochverfügbarkeitskonfiguration bleibt eine voll redundante sekundäre {% data variables.product.prodname_ghe_server %}-Appliance mit der primären Appliance synchron. Dies erfolgt über die Replikation sämtlicher großer Datenspeicher.'
redirect_from:
  - /enterprise/admin/installation/about-high-availability-configuration
  - /enterprise/admin/enterprise-management/about-high-availability-configuration
  - /admin/enterprise-management/about-high-availability-configuration
versions:
  enterprise-server: '*'
type: overview
topics:
  - Enterprise
  - High availability
  - Infrastructure
---

Beim Konfigurieren der Hochverfügbarkeit gibt es eine automatisierte Einrichtung einer unidirektionalen asynchronen Replikation sämtlicher Datenspeicher (Git-Repositorys, MySQL, Redis und ElasticSearch) von der primären zur Replikat-Appliance.

{% data variables.product.prodname_ghe_server %} unterstützt eine aktive/passive Konfiguration, bei der die Replikations-Appliance als Standby-Instanz mit Datenbankdiensten im Replikationsmodus ausgeführt wird, aber die Anwendungsdienste gestoppt werden.

{% data reusables.enterprise_installation.replica-limit %}

### Anvisierte Fehlerszenarien

Verwenden Sie eine Hochverfügbarkeitskonfiguration zum Schutz vor:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

Eine Hochverfügbarkeitskonfiguration eignet sich nicht für:

  - **Das horizontale Hochskalieren**. Obwohl Sie den Traffic geografisch mittels Geo-Replikation verteilen können, ist die Leistung von Schreibvorgängen entsprechend der Geschwindigkeit und Verfügbarkeit der primären Appliance begrenzt. Weitere Informationen finden Sie unter „[Informationen zur Geo-Replikation](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)“.
  - **Das Sichern der primären Appliance**. Eine Hochverfügbarkeitsreplikat ersetzt keine Off-Site-Backups in Ihrem Disaster Recovery-Plan. Einige Formen von Datenbeschädigungen oder -verlusten werden möglicherweise sofort von der primären Instanz zum Replikat repliziert. Um einen sicheren Rollback auf einen stabilen vergangenen Zustand zu gewährleisten, müssen Sie regelmäßige Backups mit historischen Snapshots durchführen.
  - **Upgrades ohne Ausfallzeit**. Platzieren Sie zum Verhindern von Datenverlusten und Split-Brain-Situationen in kontrollierten Hochstufungsszenarien die primäre Appliance in den Wartungsmodus, und warten Sie auf den Abschluss sämtlicher Schreibvorgänge, bevor Sie das Replikat hochstufen.

### Netzwerk-Traffic-Failover-Strategien

Während des Failovers müssen Sie den Netzwerk-Traffic separat konfigurieren und ihn manuell von der primären Instanz zum Replikat weiterleiten.

#### DNS-Failover

Verwenden Sie mit DNS-Failover kurze TTL-Werte in den DNS-Einträgen, die auf die primäre {% data variables.product.prodname_ghe_server %}-Appliance verweisen. Sie sollten einen TTL-Wert zwischen 60 Sekunden und fünf Minuten verwenden.

Während des Failovers müssen Sie die primäre Instanz in den Wartungsmodus versetzen und ihre DNS-Einträge an die IP-Adresse der Replikat-Appliance weiterleiten. Die zum Weiterleiten des Traffics von der primären Instanz zum Replikat erforderliche Zeit hängt von der TTL-Konfiguration und der zum Aktualisieren der DNS-Einträge erforderlichen Zeit ab.

Wenn Sie die Geo-Replikation verwenden, müssen Sie Geo DNS so konfigurieren, dass der Traffic an das nächstgelegene Replikat weitergeleitet wird. Weitere Informationen finden Sie unter „[Informationen zur Geo-Replikation](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)“.

#### Load-Balancer

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

Während des Failovers müssen Sie die primäre Appliance in den Wartungsmodus versetzen. Sie können den Load-Balancer so konfigurieren, dass automatisch erkannt wird, wenn das Replikat auf die primäre Instanz hochgestuft wurde, oder dass eine manuelle Konfigurationsänderung erforderlich ist. Sie müssen das Replikat manuell auf die primäre Instanz hochstufen, bevor es auf den Benutzer-Traffic antwortet. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %} mit einem Load-Balancer verwenden](/enterprise/{{ currentVersion }}/admin/guides/installation/using-github-enterprise-server-with-a-load-balancer/)“.

{% data reusables.enterprise_installation.monitoring-replicas %}

### Dienstprogramm zur Replikationsverwaltung

Verwenden Sie zum Verwalten der Replikation auf {% data variables.product.prodname_ghe_server %} diese Befehlszeilendienstprogramme, indem Sie mittels SSH eine Verbindung zur Replikat-Appliance herstellen.

#### ghe-repl-setup

Der Befehl `ghe-repl-setup` versetzt eine {% data variables.product.prodname_ghe_server %}-Appliance in den Replikat-Standbymodus.

 - An encrypted WireGuard VPN tunnel is configured for communication between the two appliances.
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

#### ghe-repl-start

Der Befehl `ghe-repl-start` aktiviert die aktive Replikation sämtlicher Datenspeicher.

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

#### ghe-repl-status

Der Befehl `ghe-repl-status` gibt den Status `OK`, `WARNING` (Warnung) oder `CRITICAL` (Kritisch) für jeden Datenspeicher-Replikationsstream zurück. Wenn einer der Replikationskanäle den Zustand `WARNING` (Warnung) aufweist, wird der Befehl mit dem Code `1` beendet. Wenn einer der Kanäle den Zustand `CRITICAL` (Kritisch) aufweist, wird der Befehl entsprechend mit dem Code `2`2 beendet.

```shell
admin@169-254-1-2:~$ ghe-repl-status
OK: mysql replication in sync
OK: redis replication is in sync
OK: elasticsearch cluster is in sync
OK: git data is in sync (10 repos, 2 wikis, 5 gists)
OK: pages data is in sync
```

Die Optionen `-v` und `-vv` stellen Details zum Replikationszustand jedes Datenspeichers bereit:

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

#### ghe-repl-stop

Der Befehl `ghe-repl-stop` deaktiviert die Replikation temporär für alle Datenspeicher und stoppt die Replikationsdienste. Führen Sie den Befehl [ghe-repl-start](#ghe-repl-start) aus, um die Replikation wieder aufzunehmen.

```shell
admin@168-254-1-2:~$ ghe-repl-stop
Stopping Pages replication ...
Stopping Git replication ...
Stopping MySQL replication ...
Stopping Redis replication ...
Stopping Elasticsearch replication ...
Success: replication was stopped for all services.
```

#### ghe-repl-promote

Der Befehl `ghe-repl-promote` deaktiviert die Replikation und wandelt die Replikat-Appliance in eine primäre Instanz um. Die Appliance wird mit denselben Einstellungen wie die ursprüngliche primäre Instanz konfiguriert, und alle Dienste sind aktiviert.

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

#### ghe-repl-teardown

Der Befehl `ghe-repl-teardown` deaktiviert den Replikationsmodus vollständig und entfernt die Replikatkonfiguration.

### Weiterführende Informationen

- „[Hochverfügbarkeitsreplikat erstellen](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica)“
