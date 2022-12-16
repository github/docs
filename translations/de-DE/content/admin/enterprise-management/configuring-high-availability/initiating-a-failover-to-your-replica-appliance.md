---
title: Initiieren eines Failovers zu deiner Replikat-Appliance
intro: 'Du kannst an der Befehlszeile zu Wartungs- und Testzwecken oder beim Fehlschlagen der primären Appliance ein Failover zu einer {% data variables.product.prodname_ghe_server %}-Replikat-Appliance durchführen.'
redirect_from:
  - /enterprise/admin/installation/initiating-a-failover-to-your-replica-appliance
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate failover to appliance
ms.openlocfilehash: e2c15dab0a812fe6031f78e7edbccaff6a2503c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192993'
---
Die für das Failover erforderliche Zeit hängt davon ab, wie lange es dauert, das Replikat manuell hochzustufen und den Traffic weiterzuleiten. Die durchschnittliche Dauer liegt zwischen 20–30 Minuten.

{% data reusables.enterprise_installation.promoting-a-replica %}

1. Wenn die primäre Appliance verfügbar ist, versetze die primäre Appliance in den Wartungsmodus, damit die Replikation abgeschlossen werden kann, bevor du die Geräte wechselst.

    - Versetze die Appliance in den Wartungsmodus.

       - Informationen zur Verwendung der Verwaltungskonsole findest du unter [Aktivieren und Planen des Wartungsmodus](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/).

       - Du kannst auch den Befehl `ghe-maintenance -s` verwenden.
         ```shell
         $ ghe-maintenance -s
         ```

   - Wenn die Anzahl der aktiven Git-Vorgänge, MySQL-Abfragen und Resque-Aufträge null erreicht, warte 30 Sekunden. 

      {% note %}

      **Hinweis**: In Nomad werden immer Aufträge ausgeführt, auch im Wartungsmodus. Daher kannst du diese Aufträge gefahrlos ignorieren.
    
      {% endnote %}

   - Um den Status `OK` für alle Berichte zu Replikationskanälen zu überprüfen, verwende den Befehl `ghe-repl-status -vv`.

      ```shell
      $ ghe-repl-status -vv
      ```

4. Um die Replikation zu beenden und die Replikat-Appliance auf den Status „primär“ hochzustufen, verwende den Befehl `ghe-repl-promote` auf der Replikat-Appliance. Dadurch wird der primäre Knoten automatisch in den Wartungsmodus versetzt, sofern er erreichbar ist.
  ```shell
  $ ghe-repl-promote
  ```

   {% note %}

   **Hinweis:** Wenn der primäre Knoten nicht verfügbar ist, können Warnungen und Timeouts auftreten, die jedoch ignoriert werden können.

  {% endnote %}

5. Aktualisiere den DNS-Eintrag so, dass er auf die IP-Adresse des Replikats verweist. Nach dem Verstreichen des TTL-Zeitraums wird der Traffic an das Replikat geleitet. Stelle bei der Verwendung eines Load-Balancers sicher, dass er so konfiguriert ist, den Traffic an das Replikat zu senden.
6. Benachrichtige die Benutzer, dass sie die normalen Vorgänge wieder aufnehmen können.
7. Richte bei Bedarf die Replikation von der neuen primären Instanz auf die bestehenden Appliances und die vorherige primäre Instanz ein. Weitere Informationen findest du unter [Informationen zur Hochverfügbarkeitskonfiguration](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management).
8. Appliances, für die du keine Replikation einrichten möchtest, die aber vor dem Failover Teil der Hochverfügbarkeitskonfiguration waren, müssen anhand ihrer UUID aus der Hochverfügbarkeitskonfiguration entfernt werden.
    - Rufe die UUID auf den früheren Appliances über `cat /data/user/common/uuid` ab.
      ```shell
      $ cat /data/user/common/uuid
      ```
    - Entferne auf der neuen primären Appliance die UUIDs mithilfe von `ghe-repl-teardown`. Ersetze *`UUID`* durch eine UUID, die du im vorherigen Schritt abgerufen hast.
      ```shell
      $ ghe-repl-teardown -u  UUID
      ```

## Weitere Informationsquellen

- [Hilfsprogramme für die Replikationsverwaltung](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)
