---
title: Cluster-Upgrade
intro: 'Verwenden Sie die Verwaltungsshell (SSH), um ein {% data variables.product.prodname_ghe_server %}-Cluster auf die neueste Version zu aktualisieren.'
redirect_from:
  - /enterprise/admin/clustering/upgrading-a-cluster
  - /enterprise/admin/enterprise-management/upgrading-a-cluster
  - /admin/enterprise-management/upgrading-a-cluster
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Upgrades
---

### Upgrade mit einem Hotpatch
{% data reusables.enterprise_installation.hotpatching-explanation %} Das Hotpatch-Installationsskript installiert den Hotpatch auf jedem Knoten im Cluster und startet die Dienste zum Vermeiden von Ausfallzeiten in ihrer entsprechenden Abfolge neu.

1. Sichern Sie Ihre Daten mit [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
2. Führen Sie an der Verwaltungsshell auf einem beliebigen Knoten den Befehl `ghe-cluster-hotpatch` aus, um den neuesten Hotpatch zu installieren. Sie können eine URL für einen Hotpatch bereitstellen oder den Hotpatch manuell herunterladen und einen lokalen Dateinamen angeben.
  ```shell
  $ ghe-cluster-hotpatch https://<em>HOTPATCH-URL/FILENAME</em>.hpkg
  ```

### Upgrade mit einem Upgrade-Paket
Verwenden Sie ein Upgrade-Paket, um ein Upgrade eines {% data variables.product.prodname_ghe_server %}-Clusters auf die neueste Feature-Veröffentlichung vorzunehmen. Beispielsweise können Sie ein Upgrade von `2.11` auf `2.13` vornehmen.

#### Upgrade vorbereiten

1. Überprüfe [Clusternetzwerk-Konfiguration](/enterprise/admin/guides/clustering/cluster-network-configuration) bezüglich der Version, auf die Du ein Upgrade durchführst, und aktualisiere Deine Konfiguration nach Bedarf.
2. Sichern Sie Ihre Daten mit [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
3. Planen Sie ein Wartungsfenster für Endbenutzer Ihres {% data variables.product.prodname_ghe_server %}-Clusters, da er während des Upgrades für die normale Nutzung nicht verfügbar ist. Der Wartungsmodus blockiert den Benutzerzugriff und verhindert Datenänderungen, während das Cluster-Upgrade ausgeführt wird.
4. Kopieren Sie auf der [{% data variables.product.prodname_ghe_server %}-Downloadseite](https://enterprise.github.com/download) die URL für die upzugradende *.pkg*-Datei in die Zwischenablage.
5. Führen Sie an der Verwaltungsshell eines beliebigen Knotens den Befehl `ghe-cluster-each` in Kombination mit `curl` aus, um das Versionspaket in einem einzelnen Schritt auf jeden Knoten herunterzuladen. Verwenden Sie die im vorherigen Schritt von Ihnen kopierte URL als ein Argument.
  ```shell
  $ ghe-cluster-each -- "cd /home/admin && curl -L -O  https://<em>PACKAGE-URL</em>.pkg"
  > ghe-app-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  24.2M      0  0:00:20  0:00:20 --:--:-- 27.4M
  > ghe-data-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  21.3M      0  0:00:23  0:00:23 --:--:-- 25.8M
  > ghe-data-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.6M
  > ghe-app-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.8M      0  0:00:25  0:00:25 --:--:-- 17.6M
  > ghe-data-node-3:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-3:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.5M
  ```
6. Identifizieren Sie den primären MySQL-Knoten, der in `cluster.conf` als `mysql-master = <hostname>` definiert ist. Dieser Knoten wird zuletzt upgegradet.

#### Clusterknoten upgraden

1. Aktivieren Sie den Wartungsmodus entsprechend Ihrem geplanten Fenster. Verbinden Sie sich dazu mit der Verwaltungsshell auf einem beliebigen Clusterknoten, und führen Sie `ghe-cluster-maintenance -s` aus.
2. Stellen Sie **mit Ausnahme des primären MySQL-Knotens** eine Verbindung zur Verwaltungsshell der jeweiligen {% data variables.product.prodname_ghe_server %}-Knoten her. Führen Sie den Befehl `ghe-upgrade` aus, und geben Sie den Namen der Paketdatei an, die Sie in Schritt 4 [Upgrade vorbereiten](#preparing-to-upgrade) heruntergeladen haben:
  ```shell
  $ ghe-upgrade <em>PACKAGE-FILENAME</em>.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
3. Der Upgrade-Prozess startet den Knoten nach dem Abschluss neu. Verifizieren Sie, dass Sie jeden Knoten nach dem Neustart `pingen` können.
4. Stellen Sie auf dem primären MySQL-Knoten eine Verbindung zur Verwaltungsshell her. Führen Sie den Befehl `ghe-upgrade` aus, und geben Sie den Namen der Paketdatei an, die Sie in Schritt 4 [Upgrade vorbereiten](#preparing-to-upgrade) heruntergeladen haben:
  ```shell
  $ ghe-upgrade <em>PACKAGE-FILENAME</em>.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
5. Der Upgrade-Prozess startet den primären MySQL-Knoten nach dem Abschluss neu. Verifizieren Sie, dass Sie jeden Knoten nach dem Neustart `pingen` können.
6. Führen Sie an der Verwaltungsshell eines beliebigen Knotens den Befehl `ghe-cluster-maintenance -u` aus, um den Wartungsmodus zu beenden.
