---
title: Konfigurieren der Hochverfügbarkeitsreplikation für einen Cluster
intro: 'Du kannst ein passives Replikat deines gesamten {% data variables.product.prodname_ghe_server %}-Clusters an einem anderen Ort konfigurieren, sodass dein Cluster ein Failover auf redundante Knoten ausführen kann.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106911'
---
## Informationen zur Hochverfügbarkeitsreplikation für Cluster

Du kannst eine Clusterbereitstellung von {% data variables.product.prodname_ghe_server %} für Hochverfügbarkeit konfigurieren. Dabei wird eine identische Gruppe passiver Knoten mit den Knoten im aktiven Cluster synchronisiert. Wenn sich Hardware- oder Softwarefehler auf das Rechenzentrum mit dem aktiven Cluster auswirken, kannst du ein manuelles Failover auf die Replikatknoten ausführen und die Verarbeitung von Benutzeranforderungen fortsetzen. Dadurch werden die Auswirkungen des Ausfalls minimiert.

Im Hochverfügbarkeitsmodus wird jeder aktive Knoten regelmäßig mit einem entsprechenden passiven Knoten synchronisiert. Der passive Knoten wird im Standbymodus ausgeführt. Von ihm werden keine Anwendungen bereitgestellt und keine Benutzeranforderungen verarbeitet.

Es wird empfohlen, Hochverfügbarkeit als Teil eines umfassenden Notfallwiederherstellungsplans für {% data variables.product.prodname_ghe_server %} zu konfigurieren. Außerdem wird empfohlen, regelmäßige Sicherungen durchzuführen. Weitere Informationen findest du unter [Konfigurieren von Sicherungen auf deiner Appliance](/enterprise/admin/configuration/configuring-backups-on-your-appliance).

## Voraussetzungen

### Hardware und Software

Für jeden vorhandenen Knoten im aktiven Cluster musst du einen zweiten virtuellen Computer mit identischen Hardwareressourcen bereitstellen. Wenn der Cluster beispielsweise über 11 Knoten und jeder Knoten über 12 vCPUs, 96 GB RAM und 750 GB zugeordneten Speicher verfügt, musst du 11 neue virtuelle Computer bereitstellen, die jeweils über 12 vCPUs, 96 GB RAM und 750 GB zugeordneten Speicher verfügen.

Installiere auf jedem neuen virtuellen Computer dieselbe Version von {% data variables.product.prodname_ghe_server %}, die auf den Knoten im aktiven Cluster ausgeführt wird. Du musst keine Lizenz hochladen oder zusätzliche Konfigurationen ausführen. Weitere Informationen findest du unter [Einrichten {% data variables.product.prodname_ghe_server %}-Instanz](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance).

{% note %}

**Hinweis**: Die Knoten, die du für die Hochverfügbarkeitsreplikation verwenden möchtest, müssen eigenständige {% data variables.product.prodname_ghe_server %}-Instanzen sein. Initialisiere die passiven Knoten nicht als zweiten Cluster.

{% endnote %}

### Netzwerk

Du musst jedem von dir bereitgestellten neuen Knoten eine statische IP-Adresse zuweisen, und du musst einen Lastenausgleich konfigurieren, damit Verbindungen akzeptiert und an die Knoten in der Front-End-Schicht des Clusters weitergeleitet werden.

Es wird nicht empfohlen, eine Firewall zwischen dem Netzwerk mit dem aktiven Cluster und dem Netzwerk mit dem passiven Cluster zu konfigurieren. Die Latenz zwischen dem Netzwerk mit den aktiven Knoten und dem Netzwerk mit den passiven Knoten muss kleiner als 70 Millisekunden sein. Weitere Informationen zur Netzwerkkonnektivität zwischen Knoten im passiven Cluster findest du unter [Konfiguration von Clusternetzwerken](/enterprise/admin/enterprise-management/cluster-network-configuration).

## Erstellen eines Hochverfügbarkeitsreplikats für einen Cluster

- [Zuweisen von aktiven Knoten zum primären Rechenzentrum](#assigning-active-nodes-to-the-primary-datacenter)
- [Hinzufügen von passiven Knoten zur Clusterkonfigurationsdatei](#adding-passive-nodes-to-the-cluster-configuration-file)
- [Beispielkonfiguration](#example-configuration)

### Zuweisen von aktiven Knoten zum primären Rechenzentrum

Bevor du ein sekundäres Rechenzentrum für die passiven Knoten definierst, stelle sicher, dass du die aktiven Knoten dem primären Rechenzentrum zuweist.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. Notiere dich den Namen des primären Rechenzentrums deines Clusters. Im Abschnitt `[cluster]`, der oben in der Clusterkonfigurationsdatei enthalten ist, wird der Name des primären Rechenzentrums mithilfe des `primary-datacenter`-Schlüssel-Wert-Paars definiert. Standardmäßig erhält das primäre Rechenzentrum für den Cluster den Namen `default`.

    ```shell
    [cluster]
      mysql-master = <em>HOSTNAME</em>
      redis-master = <em>HOSTNAME</em>
      <strong>primary-datacenter = default</strong>
    ```

    - Änder den Namen des primären Rechenzentrums optional in eine aussagekräftigere oder genauere Bezeichnung, indem du den Wert `primary-datacenter` bearbeitest.

4. {% data reusables.enterprise_clustering.configuration-file-heading %} Füge unter der Überschrift jedes Knotens ein neues Schlüssel-Wert-Paar hinzu, um den Knoten einem Rechenzentrum zuzuweisen. Verwende denselben Wert wie für `primary-datacenter` im oben erläuterten Schritt 3. Wenn du beispielsweise den Standardnamen (`default`) verwenden möchtest, füge dem Abschnitt für jeden Knoten das folgende Schlüssel-Wert-Paar hinzu.

    ```
    datacenter = default
    ```

    Wenn du fertig bist, sollte der Abschnitt für jeden Knoten in der Clusterkonfigurationsdatei wie das folgende Beispiel aussehen. {% data reusables.enterprise_clustering.key-value-pair-order-irrelevant %}

    ```shell
    [cluster "<em>HOSTNAME</em>"]
      <strong>datacenter = default</strong>
      hostname = <em>HOSTNAME</em>
      ipv4 = <em>IP ADDRESS</em>
      ...
    ...
    ```

    {% note %}

    **Hinweis**: Wenn du den Namen des primären Rechenzentrums in Schritt 3 geändert hast, suche nach dem `consul-datacenter`-Schlüssel-Wert-Paar im Abschnitt für den jeweiligen Knoten, und ändere den Wert in das umbenannte primäre Rechenzentrum. Wenn du beispielsweise das primäre Rechenzentrum mit der Bezeichnung `primary` benannt hast, verwende das folgende Schlüssel-Wert-Paar für die jeweiligen Knoten.

    ```
    consul-datacenter = primary
    ```

    {% endnote %}

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

Wenn von {% data variables.product.prodname_ghe_server %} wieder die Eingabeaufforderung angezeigt wird, hast du den Vorgang abgeschlossen, bei dem du die Knoten dem primären Rechenzentrum des Clusters zugewiesen hast.

### Hinzufügen von passiven Knoten zur Clusterkonfigurationsdatei

Zum Konfigurieren von Hochverfügbarkeit musst du für jeden aktiven Knoten im Cluster einen entsprechenden passiven Knoten definieren. In den folgenden Anweisungen wird eine neue Clusterkonfiguration erstellt, in der sowohl aktive als auch passive Knoten definiert werden. Dieses Modul umfasst Folgendes:

- Du erstellst eine Kopie der aktiven Clusterkonfigurationsdatei.
- Du bearbeitest die Kopie, um passive Knoten zu definieren, die den aktiven Knoten entsprechen, und fügst die IP-Adressen der neuen virtuellen Computer hinzu, die du bereitgestellt hast.
- Du führst die geänderte Kopie der Clusterkonfiguration wieder mit der aktiven Konfiguration zusammen.
- Du wendest die neue Konfiguration an, um die Replikation zu starten.

Eine Beispielkonfiguration findest du unter [Beispielkonfiguration](#example-configuration).

1. Stelle für jeden Knoten im Cluster einen übereinstimmenden virtuellen Computer mit identischen Spezifikationen bereit, auf dem dieselbe Version von {% data variables.product.prodname_ghe_server %} ausgeführt wird. Notiere dich die IPv4-Adresse und den Hostnamen jedes neuen Clusterknotens. Weitere Informationen findest du unter [Voraussetzungen](#prerequisites).

    {% note %}

    **Hinweis**: Wenn du Hochverfügbarkeit nach einem Failover neu konfigurierst, kannst du stattdessen die alten Knoten aus dem primären Rechenzentrum verwenden.

    {% endnote %}

{% data reusables.enterprise_clustering.ssh-to-a-node %}

3. Sichere die bestehende Clusterkonfiguration.

    ```
    cp /data/user/common/cluster.conf ~/$(date +%Y-%m-%d)-cluster.conf.backup
    ```

4. Erstelle eine Kopie der bestehenden Clusterkonfigurationsdatei an einem temporären Speicherort, z. B. _/home/admin/cluster-passive.conf_. Lösche eindeutige Schlüssel-Wert-Paare für IP-Adressen (`ipv*`), UUIDs (`uuid`) und öffentliche Schlüssel für WireGuard (`wireguard-pubkey`).

    ```
    grep -Ev "(?:|ipv|uuid|vpn|wireguard\-pubkey)" /data/user/common/cluster.conf > ~/cluster-passive.conf
    ```

5. Entferne den Abschnitt `[cluster]` aus der temporären Clusterkonfigurationsdatei, die du im vorherigen Schritt kopiert hast.

    ```
    git config -f ~/cluster-passive.conf --remove-section cluster
    ```

6. Entscheide dich für einen Namen für das sekundäre Rechenzentrum, in dem du die passiven Knoten bereitgestellt hast, und aktualisiere dann die temporäre Clusterkonfigurationsdatei mit dem neuen Rechenzentrumsnamen. Ersetze `SECONDARY` durch den Namen, den du ausgewählt hast.

    ```shell
    sed -i 's/datacenter = default/datacenter = <em>SECONDARY</em>/g' ~/cluster-passive.conf
    ```

7. Entscheide dich für ein Muster für die Hostnamen der passiven Knoten.

    {% warning %}

    **Warnung**: Hostnamen für passive Knoten müssen eindeutig sein und sich vom Hostnamen für den entsprechenden aktiven Knoten unterscheiden.

    {% endwarning %}

8. Öffne die temporäre Clusterkonfigurationsdatei aus Schritt 3 in einem Text-Editor. Beispielsweise kannst du Vim verwenden.

    ```shell
    sudo vim ~/cluster-passive.conf
    ```

9. Aktualisiere in jedem Abschnitt in der temporären Clusterkonfigurationsdatei die Konfiguration des Knotens. {% data reusables.enterprise_clustering.configuration-file-heading %}

    - Ändere den zwischen Anführungszeichen stehenden Hostnamen in der Abschnittsüberschrift und den Wert für `hostname` innerhalb des Abschnitts in den Hostnamen des passiven Knotens, und orientiere dich dabei an dem Muster, das du im oben beschriebenen Schritt 7 ausgewählt hast.
    - Füge einen neuen Schlüssel mit der Bezeichnung `ipv4` hinzu, und lege den Wert auf die statische IPv4-Adresse des passiven Knotens fest.
    - Erstelle das neue Schlüssel-Wert-Paar `replica = enabled`.

    ```shell
    [cluster "<em>NEW PASSIVE NODE HOSTNAME</em>"]
      ...
      hostname = <em>NEW PASSIVE NODE HOSTNAME</em>
      ipv4 = <em>NEW PASSIVE NODE IPV4 ADDRESS</em>
      <strong>replica = enabled</strong>
      ...
    ...
    ```

10. Füge den Inhalt der temporären Clusterkonfigurationsdatei, die du in Schritt 4 erstellt hast, an die aktive Konfigurationsdatei an.

    ```shell
    cat ~/cluster-passive.conf >> /data/user/common/cluster.conf
    ```

11. Benenne die primären MySQL- und Redis-Knoten im sekundären Rechenzentrum. Ersetze `REPLICA MYSQL PRIMARY HOSTNAME` und `REPLICA REDIS PRIMARY HOSTNAME` durch die Hostnamen des passiven Knotens, den du bereitgestellt hast, sodass sie den vorhandenen primären MySQL- und Redis-Knoten entsprechen.

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-master-replica <em>REPLICA MYSQL PRIMARY HOSTNAME</em>
    git config -f /data/user/common/cluster.conf cluster.redis-master-replica <em>REPLICA REDIS PRIMARY HOSTNAME</em>
    ```

    {% warning %}

    **Warnung**: Überprüfe die Clusterkonfigurationsdatei, bevor du den Vorgang fortsetzt.

    - Vergewissere dich im Abschnitt `[cluster]` der obersten Ebene, dass die Werte für `mysql-master-replica` und `redis-master-replica` auf die richtigen Hostnamen für die passiven Knoten im sekundären Rechenzentrum festgelegt sind, die nach einem Failover als primäre MySQL- und Redis-Knoten dienen.
    - Überprüfe in jedem Abschnitt für einen aktiven Knoten mit der Bezeichnung <code>[cluster "<em>ACTIVE NODE HOSTNAME</em>"]</code> die folgenden Schlüssel-Wert-Paare sehr sorgfältig.
      - `datacenter` muss dem Wert `primary-datacenter` im Abschnitt `[cluster]` der obersten Ebene entsprechen.
      - `consul-datacenter` muss mit dem Wert `datacenter` übereinstimmen, der dem Wert `primary-datacenter` im Abschnitt `[cluster]` der obersten Ebene entsprechen muss.
    - Vergewissere dich, dass die Konfiguration für jeden aktiven Knoten **genau einen** entsprechenden Abschnitt für **genau einen** passiven Knoten mit denselben Rollen aufweist. Überprüfe in jedem Abschnitt für einen passiven Knoten sehr sorgfältig jedes Schlüssel-Wert-Paar.
      - `datacenter` muss allen anderen passiven Knoten entsprechen.
      - `consul-datacenter` muss allen anderen passiven Knoten entsprechen.
      - `hostname` muss dem Hostnamen in der Abschnittsüberschrift entsprechen.
      - `ipv4` muss der eindeutigen statischen IPv4-Adresse des Knotens entsprechen.
      - `replica` muss als `enabled` konfiguriert sein.
    - Nutze die Gelegenheit, Abschnitte für Offlineknoten zu entfernen, die nicht mehr verwendet werden.

    Eine Beispielkonfiguration findest du unter [Beispielkonfiguration](#example-configuration).

    {% endwarning %}

13. Initialisiere die neue Clusterkonfiguration. {% data reusables.enterprise.use-a-multiplexer %}

    ```shell
    ghe-cluster-config-init
    ```

14. Nachdem die Initialisierung abgeschlossen ist, wird von {% data variables.product.prodname_ghe_server %} die folgende Meldung angezeigt.

    ```shell
    Finished cluster initialization
    ```

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

17. Konfiguriere einen Lastenausgleich, der Verbindungen von Benutzern akzeptiert, wenn du ein Failover auf die passiven Knoten ausführst. Weitere Informationen findest du unter [Konfiguration von Clusternetzwerken](/enterprise/admin/enterprise-management/cluster-network-configuration#configuring-a-load-balancer).

Du hast die Konfiguration der Hochverfügbarkeitsreplikation für die Knoten im Cluster abgeschlossen. Jeder aktive Knoten beginnt mit dem Replizieren von Konfigurationen und Daten auf die entsprechenden passiven Knoten. Wenn ein Fehler auftritt, kannst du den Datenverkehr zum Lastenausgleich für das sekundäre Rechenzentrum weiterleiten. Weitere Informationen zum Ausführen eines Failovers findest du unter [Initiieren eines Failovers auf den Replikatcluster](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster).

### Beispielkonfiguration

Die Konfiguration für den `[cluster]` auf oberster Ebene muss wie im folgenden Beispiel aussehen.

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

Die Konfiguration für einen aktiven Knoten auf der Speicherebene des Clusters muss wie das folgende Beispiel aussehen.

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

Die Konfiguration für den entsprechenden passiven Knoten auf der Speicherebene muss wie das folgende Beispiel aussehen.

- Wichtige Unterschiede zum entsprechenden aktiven Knoten sind **fett** hervorgehoben.
- Von {% data variables.product.prodname_ghe_server %} werden Werte für `vpn`, `uuid` und `wireguard-pubkey` automatisch zugewiesen, sodass du die Werte für passive Knoten, die du initialisierst, nicht definieren darfst.
- Die von `*-server`-Schlüsseln definierten Serverrollen stimmen mit dem entsprechenden aktiven Knoten überein.

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

## Überwachen der Replikation zwischen aktiven und passiven Clusterknoten

Die anfängliche Replikation zwischen den aktiven und passiven Knoten im Cluster nimmt eine gewisse Zeit in Anspruch. Die Dauer hängt von der Datenmenge ab, die repliziert werden soll, sowie von den Aktivitätsstufen für {% data variables.product.prodname_ghe_server %}.

Du kannst den Fortschritt auf jedem Knoten im Cluster überwachen, indem du Befehlszeilentools verwendest, die über die {% data variables.product.prodname_ghe_server %}-Verwaltungsshell verfügbar bist. Weitere Informationen zur Verwaltungsshell findest du unter [Zugriff auf die Verwaltungsshell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh).

- Überwachen der Replikation von Datenbanken:

  ```
  /usr/local/share/enterprise/ghe-cluster-status-mysql
  ```

- Überwachen der Replikation von Repository- und Gist-Daten:

  ```
  ghe-spokes status
  ```

- Überwachen der Replikation von Anlagen- und LFS-Daten:

  ```
  ghe-storage replication-status
  ```

- Überwachen der Replikation von Seitendaten:

  ```
  ghe-dpages replication-status
  ```

Du kannst `ghe-cluster-status` verwenden, um die allgemeine Integrität des Clusters zu überprüfen. Weitere Informationen findest du unter [Befehlszeilenprogramme](/enterprise/admin/configuration/command-line-utilities#ghe-cluster-status).

## Neukonfigurieren der Hochverfügbarkeitsreplikation nach einem Failover

Nachdem du ein Failover von den aktiven Knoten des Clusters auf die passiven Knoten des Clusters ausgeführt hast, kannst du die Hochverfügbarkeitsreplikation auf zwei Arten neu konfigurieren.

### Bereitstellen und Konfigurieren neuer passiver Knoten

Nach einem Failover kannst du Hochverfügbarkeit auf zwei Arten neu konfigurieren. Die von dir ausgewählte Methode hängt vom Grund ab, aus dem du ein Failover ausgeführt hast, sowie vom Zustand der ursprünglichen aktiven Knoten.

1. Stelle eine neue Gruppe von passiven Knoten für jede der neuen aktiven Knoten im sekundären Rechenzentrum bereit, und konfiguriere diese.

2. Verwende die alten aktiven Knoten als neue passive Knoten.

Der Prozess zum Neukonfigurieren von Hochverfügbarkeit ist identisch mit der anfänglichen Konfiguration von Hochverfügbarkeit. Weitere Informationen findest du unter [Erstellen eines Hochverfügbarkeitsreplikats für einen Cluster](#creating-a-high-availability-replica-for-a-cluster).


## Deaktivieren der Hochverfügbarkeitsreplikation für einen Cluster

Du kannst die Replikation auf die passiven Knoten für die Clusterbereitstellung von {% data variables.product.prodname_ghe_server %} beenden.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. Lösche im Abschnitt `[cluster]` der obersten Ebene die Schlüssel-Wert-Paare `redis-master-replica` und `mysql-master-replica`.

4. Lösche jeden Abschnitt für einen passiven Knoten. Bei passiven Knoten ist `replica` als `enabled` konfiguriert.

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

Wenn von {% data variables.product.prodname_ghe_server %} wieder die Eingabeaufforderung angezeigt wird, hast du die Deaktivierung der Hochverfügbarkeitsreplikation abgeschlossen.
