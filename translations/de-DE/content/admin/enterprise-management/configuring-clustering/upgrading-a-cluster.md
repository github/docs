---
title: Cluster-Upgrade
intro: 'Verwende die Verwaltungsshell (SSH), um ein {% data variables.product.prodname_ghe_server %}-Cluster auf die neueste Version zu aktualisieren.'
redirect_from:
  - /enterprise/admin/clustering/upgrading-a-cluster
  - /enterprise/admin/enterprise-management/upgrading-a-cluster
  - /admin/enterprise-management/upgrading-a-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Upgrades
ms.openlocfilehash: 040fe0d315f440c8d5489b04f808dbe1f6c67972
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106892'
---
## Upgrade mit einem Hotpatch
{% data reusables.enterprise_installation.hotpatching-explanation %} Das Hotpatch-Installationsskript installiert den Hotpatch auf jedem Knoten im Cluster und startet die Dienste zum Vermeiden von Ausfallzeiten in ihrer entsprechenden Abfolge neu.

1. Sichere deine Daten mit [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
2. Führe den Befehl `ghe-cluster-hotpatch` über die Verwaltungsshell eines beliebigen Knotens aus, um den neuesten Hotpatch zu installieren. Du kannst eine URL für einen Hotpatch bereitstellen oder den Hotpatch manuell herunterladen und einen lokalen Dateinamen angeben.
  ```shell
  $ ghe-cluster-hotpatch https://<em>HOTPATCH-URL/FILENAME</em>.hpkg
  ```

## Upgrade mit einem Upgrade-Paket
Verwende ein Upgrade-Paket, um ein Upgrade eines {% data variables.product.prodname_ghe_server %}-Clusters auf die neueste Feature-Veröffentlichung vorzunehmen. Du kannst beispielsweise ein Upgrade von Version `2.11` auf Version `2.13` durchführen.

### Upgrade vorbereiten

1. Überprüfe die [Clusternetzwerkkonfiguration](/enterprise/admin/guides/clustering/cluster-network-configuration) auf die Version, auf die du ein Upgrade durchführst, und aktualisiere deine Konfiguration bei Bedarf.
2. Sichere deine Daten mit [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
3. Plane ein Wartungsfenster für Endbenutzer deines {% data variables.product.prodname_ghe_server %}-Clusters, da er während des Upgrades für die normale Nutzung nicht verfügbar ist. Der Wartungsmodus blockiert den Benutzerzugriff und verhindert Datenänderungen, während das Cluster-Upgrade ausgeführt wird.
4. Kopiere auf der [{% data variables.product.prodname_ghe_server %}-Downloadseite](https://enterprise.github.com/download) die URL für das Upgrade der *PKG*-Datei in die Zwischenablage.
5. Führe über die Verwaltungsshell eines beliebigen Knotens den Befehl `ghe-cluster-each` in Kombination mit `curl` aus, um das Releasepaket in einem einzelnen Schritt in jeden Knoten herunterzuladen. Verwende die im vorherigen Schritt von dir kopierte URL als ein Argument.
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
6. Identifiziere den primären MySQL-Knoten, der in `cluster.conf` als `mysql-master = <hostname>` definiert ist. Dieser Knoten wird zuletzt upgegradet.

### Clusterknoten upgraden

1. Aktiviere den Wartungsmodus gemäß deinem geplanten Fenster, indem du eine Verbindung mit der Verwaltungsshell eines beliebigen Serverknotens herstellst und `ghe-cluster-maintenance -s` ausführst.
2. Stelle **mit Ausnahme des primären MySQL-Knotens** eine Verbindung mit der Verwaltungsshell der jeweiligen {% data variables.product.prodname_ghe_server %}-Knoten her.
Führe den Befehl `ghe-upgrade` aus, indem du den Namen der Paketdatei angibst, die du in Schritt 4 des Abschnitts [Vorbereiten des Upgrades](#preparing-to-upgrade) heruntergeladen hast:
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
3. Der Upgrade-Prozess startet den Knoten nach dem Abschluss neu. Stelle sicher, dass du jeden Knoten nach dem Neustart pingen (`ping`) kannst.
4. Stelle auf dem primären MySQL-Knoten eine Verbindung zur Verwaltungsshell her. Führe den Befehl `ghe-upgrade` aus, indem du den Namen der Paketdatei angibst, die du in Schritt 4 des Abschnitts [Vorbereiten des Upgrades](#preparing-to-upgrade) heruntergeladen hast:
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
5. Der Upgrade-Prozess startet den primären MySQL-Knoten nach dem Abschluss neu. Stelle sicher, dass du jeden Knoten nach dem Neustart pingen (`ping`) kannst.{% ifversion ghes %}
6. Stelle eine Verbindung mit der Verwaltungsshell des primären MySQL-Knotens her, und führe den `ghe-cluster-config-apply`-Befehl aus.
7. Überprüfe nach Abschluss von `ghe-cluster-config-apply` durch das Ausführen von `ghe-cluster-status`, ob die Dienste problemlos funktionieren.{% endif %}
8. Beende den Wartungsmodus über die Verwaltungsshell eines beliebigen Knotens, indem du `ghe-cluster-maintenance -u` ausführst.
