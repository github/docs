---
title: Hochverfügbarkeitsreplikat erstellen
intro: 'Bei einer Aktiv/Passiv-Konfiguration ist die Replikatappliance eine redundante Kopie der primären Appliance. Wenn die primäre Appliance ausfällt, ermöglicht der Hochverfügbarkeitsmodus dem Replikat, als primäre Appliance zu fungieren, was eine nur kurzzeitige Dienstunterbrechung ermöglicht.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106757'
---
{% data reusables.enterprise_installation.replica-limit %}

## Hochverfügbarkeitsreplikat erstellen

1. Richte eine neue {% data variables.product.prodname_ghe_server %}-Appliance auf deiner gewünschten Plattform ein. Die Replikat-Appliance sollte die CPU-, RAM- und Speichereinstellungen der primären Appliance spiegeln. Du solltest die Replikat-Appliance in einer unabhängigen Umgebung installieren. Die zugrunde liegenden Hardware-, Software und Netzwerkkomponenten sollten von denen der primären Appliance isoliert sein. Wenn du einen Cloud-Anbieter verwendest, solltest du eine separate Region oder Zone verwendest. Weitere Informationen findest du unter [Einrichten einer {% data variables.product.prodname_ghe_server %}-Instanz](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance).
1. Stelle sicher, dass die neue Appliance mit allen übrigen Appliances in dieser Hochverfügbarkeitsumgebung über die Ports 122/TCP und 1194/UDP kommunizieren kann. Weitere Informationen findest du unter [Netzwerkports](/admin/configuration/configuring-network-settings/network-ports#administrative-ports).
1. Navigiere in einem Browser zur IP-Adresse der neuen Replikat-Appliance, und lade deine {% data variables.product.prodname_enterprise %}-Lizenz hoch.
{% data reusables.enterprise_installation.replica-steps %}
1. Stelle mittels SSH eine Verbindung zur IP-Adresse der Replikat-Appliance her.
  ```shell
  $ ssh -p 122 admin@REPLICA_IP
  ```
{% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Führe erneut `ghe-repl-setup` aus, um die Verbindung mit dem primären Replikat zu überprüfen und den Replikatmodus für das neue Replikat zu aktivieren.
  ```shell
  $ ghe-repl-setup PRIMARY_IP
  ```
{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}

## Replikate der Geo-Replikation erstellen

Diese Beispielkonfiguration verwendet eine primäre Instanz und zwei Replikate, die sich in drei unterschiedlichen geografischen Regionen befinden. Obwohl sich die drei Knoten in unterschiedlichen Netzwerken befinden können, müssen alle Knoten über alle anderen Knoten zugänglich sein. Die erforderlichen Verwaltungsports sollten mindestens für alle anderen Knoten geöffnet sein. Weitere Informationen zu den Portanforderungen findest du unter [Netzwerkports](/enterprise/admin/guides/installation/network-ports/#administrative-ports).

{% data reusables.enterprise_clustering.network-latency %} Wenn die Latenz mehr als 70 Millisekunden beträgt, empfehlen wir stattdessen Cachereplikatknoten. Weitere Informationen findest Du unter [Konfigurieren eines Repositorycaches](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache).

1. Erstelle das erste Replikat genauso wie bei einer Standardkonfiguration mit zwei Knoten, indem du `ghe-repl-setup` für das erste Replikat ausführst.
  ```shell
  (replica1)$ ghe-repl-setup PRIMARY_IP
  (replica1)$ ghe-repl-start
  ```
2. Erstelle ein zweites Replikat, und verwende den Befehl `ghe-repl-setup --add`. Das `--add` Flag verhindert, dass die vorhandene Replikationskonfiguration überschrieben wird, und fügt der Konfiguration das neue Replikat hinzu.
  ```shell
  (replica2)$ ghe-repl-setup --add PRIMARY_IP
  (replica2)$ ghe-repl-start
  ```
3. Standardmäßig sind die Replikate für dasselbe Rechenzentrum konfiguriert und versuchen nun, ein Seeding von einem vorhandenen Knoten im selben Rechenzentrum durchzuführen. Konfiguriere die Replikate für unterschiedliche Rechenzentren, indem du für die Rechenzentrumsoption einen anderen Wert festlegst. Die entsprechenden Werte sind beliebig, sie müssen sich nur voneinander unterscheiden. Führe den Befehl `ghe-repl-node` für jeden Knoten aus, und gib das Rechenzentrum an.

  Auf der primären Instanz:
  ```shell
  (primary)$ ghe-repl-node --datacenter [PRIMARY DC NAME]
  ```
  Auf dem ersten Replikat:
  ```shell
  (replica1)$ ghe-repl-node --datacenter [FIRST REPLICA DC NAME]
  ```
  Auf dem zweiten Replikat:
  ```shell
  (replica2)$ ghe-repl-node --datacenter [SECOND REPLICA DC NAME]
  ```
  {% tip %}

  **Tipp:** Du kannst die Optionen `--datacenter` und `--active` gleichzeitig festlegen.

  {% endtip %}
4. Ein aktiver Replikatknoten speichert Kopien der Appliance-Daten und verarbeitet Anforderungen von Endbenutzern. Ein inaktiver Knoten speichert Kopien der Appliance-Daten, kann die Anforderungen von Endbenutzern jedoch nicht verarbeiten. Aktiviere mit dem Flag `--active` den aktiven Modus oder mit dem Flag `--inactive` den inaktiven Modus.

  Auf dem ersten Replikat:
  ```shell
  (replica1)$ ghe-repl-node --active
  ```
  Auf dem zweiten Replikat:
  ```shell
  (replica2)$ ghe-repl-node --active
  ```
5. Verwende zum Anwenden der Konfiguration den Befehl `ghe-config-apply` für das primäre Replikat.
  ```shell
  (primary)$ ghe-config-apply
  ```

## DNS für Geo-Replikation konfigurieren

Konfiguriere Geo DNS mit den IP-Adressen auf der primären Instanz und auf den Replikatknoten. Du kannst auch einen DNS CNAME für den primären Knoten erstellen (z. B. `primary.github.example.com`), um über SSH auf den primären Knoten zuzugreifen oder um ihn über `backup-utils` zu sichern.

Zu Testzwecken kannst du der Datei `hosts` der lokalen Arbeitsstation Einträge hinzufügen (zum Beispiel `/etc/hosts`). Diese Beispieleinträge lösen Anforderungen für `HOSTNAME` in `replica2` auf. Du kannst auf spezifische Hosts abzielen, indem du unterschiedliche Zeilen auskommentierst.

```
# <primary IP>      HOSTNAME 
# <replica1 IP>     HOSTNAME 
<replica2 IP>     HOSTNAME 
```

## Weitere Informationsquellen

- [Informationen zur Hochverfügbarkeitskonfiguration](/enterprise/admin/guides/installation/about-high-availability-configuration)
- [Hilfsprogramme für die Replikationsverwaltung](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)
- [Informationen zur Georeplikation](/enterprise/admin/guides/installation/about-geo-replication/)
