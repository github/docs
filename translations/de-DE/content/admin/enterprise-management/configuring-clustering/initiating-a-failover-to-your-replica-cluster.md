---
title: Initiieren eines Failovers zu deinem Replikatcluster
intro: 'Wenn bei deinem {% data variables.product.prodname_ghe_server %}-Cluster ein Fehler auftritt, kannst du ein Failover zum passiven Replikat ausführen.'
redirect_from:
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate a failover to replica
ms.openlocfilehash: 14889e5d861475bc2d887062fb12450194cd6505
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106900'
---
## Informationen zu einem Failover zu deinem Replikatcluster

Wenn ein Fehler im primären Rechenzentrum auftritt, kannst du ein Failover zu den Replikatknoten im sekundären Rechenzentrum ausführen, wenn du für jeden Knoten in deinem aktiven Cluster einen passiven Replikatknoten konfigurierst.

Wie lange das Failover dauert, hängt davon ab, wie lange es dauert, den Replikatcluster manuell hochzustufen und den Datenverkehr dorthin umzuleiten.

Wenn ein Replikatcluster hochgestuft wird, wird nicht automatisch die Replikation für den vorhandenen Cluster eingerichtet. Nach dem Hochstufen eines Replikatclusters kannst du die Replikation aus dem neuen aktiven Cluster neu konfigurieren. Weitere Informationen findest du unter [Konfigurieren von Hochverfügbarkeit für einen Cluster](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster#reconfiguring-high-availability-replication-after-a-failover).

## Voraussetzungen

Um ein Failover zu passiven Replikatknoten auszuführen, musst du hohe Verfügbarkeit für deinen Cluster konfiguriert haben. Weitere Informationen findest du unter [Konfigurieren von Hochverfügbarkeit für einen Cluster](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster).

## Initiieren eines Failovers zu deinem Replikatcluster

1. Stelle eine SSH-Verbindung mit jedem passiven Knoten im sekundären Rechenzentrum für deinen Cluster her. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh).

2. Initialisiere das Failover an den sekundären Cluster, und konfiguriere ihn, als aktiver Knoten zu fungieren.

    ```shell
  ghe-cluster-failover
  ```

{% data reusables.enterprise_clustering.configuration-finished %}

3. Aktualisiere den DNS-Eintrag, um auf die IP-Adresse des Lastenausgleichs für deinen passiven Cluster zu verweisen. Nach dem Verstreichen des TTL-Zeitraums wird der Traffic an das Replikat geleitet.

Nachdem {% data variables.product.prodname_ghe_server %} dich zur Eingabeaufforderung zurückgeführt hat und die DNS-Updates übertragen wurden, ist das Failover abgeschlossen. Benutzer können mithilfe des üblichen Hostnamens für deinen Cluster auf {% data variables.product.prodname_ghe_server %} zugreifen.
