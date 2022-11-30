---
title: Clusterknoten evakuieren
intro: Du kannst Datendienste auf einem Clusterknoten evakuieren.
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
  - /admin/enterprise-management/evacuating-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 775e53aafadae8c5c76a9f1dfef43ebaf7ceb9f1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106908'
---
## Informationen zum Evakuieren von Clusterknoten

In einer Clusterkonfiguration für {% data variables.product.product_name %} kannst du einen Knoten „evakuieren“, bevor du den Knoten offline schaltest. Die Evakuierung stellt sicher, dass die verbleibenden Knoten in einer Dienstebene alle Daten des Diensts enthalten. Wenn du zum Beispiel die VM eines Knotens in deinem Cluster ersetzt, solltest du zuerst den Knoten evakuieren.

Weitere Informationen zu Knoten und Dienstebenen für {% data variables.product.prodname_ghe_server %} findest du unter [Informationen zu Clusterknoten](/admin/enterprise-management/configuring-clustering/about-cluster-nodes).

{% warning %}

**Warnungen**:

- Zur Vermeidung eines Datenverlusts empfiehlt {% data variables.product.company_short %} dringend, dass du einen Knoten evakuierst, bevor du ihn offline schaltest. 

- Wenn du nur über drei Knoten in deinem Datendienstecluster verfügst, kannst du die Knoten nicht evakuieren, weil `ghe-spokes` kein weiterer Standort für das Erstellen einer Kopie zur Verfügung steht. Wenn du über vier oder mehr Knoten verfügst, verschiebt `ghe-spokes` alle Repositorys von dem evakuierten Knoten.

{% endwarning %}

## Clusterknoten evakuieren

Wenn du planst, einen Knoten offline zu schalten und dem Knoten eine Datendienstrolle wie `git-server`, `pages-server` oder `storage-server` zugewiesen ist, evakuiere jeden Knoten, bevor du den Knoten offline schaltest.

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. Führe den folgenden Befehl aus, um die UUID des zu evakuierenden Knotens zu ermitteln. Ersetze `HOSTNAME` durch den Hostnamen des Knotens.

   ```shell
   $ ghe-config cluster.<em>HOSTNAME</em>.uuid
   ```
1. Überwache den Status des Knotens, während {% data variables.product.product_name %} die Daten kopiert. Schalte den Knoten erst dann offline, wenn die Kopie vollständig ist. Um den Status deines Knotens zu überwachen, führe einen der folgenden Befehle aus, und ersetze `UUID` durch die UUID aus Schritt 2.

   - **Git**:

     ```shell
     $ ghe-spokes evac-status git-server-<em>UUID</em>
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ echo "select count(*) from pages_replicas where host = 'pages-server-<em>UUID</em>'" | ghe-dbconsole -y
     ```

   - **Storage**:

     ```shell
     $ ghe-storage evacuation-status storage-server-<em>UUID</em>
     ```
1. Nach Abschluss des Kopiervorgangs kannst du den Knoten evakuieren, indem du einen der folgenden Befehle ausführst und dabei `UUID` durch die UUID aus Schritt 2 ersetzt.

   - **Git**:

     ```shell
     $ ghe-spokes server evacuate git-server-<em>UUID</em> \'<em>REASON FOR EVACUATION</em>\'
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ ghe-dpages evacuate pages-server-<em>UUID</em>
     ```

   - Für **Speicher** schaltest du zunächst den Knoten offline, indem du den folgenden Befehl ausführst.

     ```shell
     $ ghe-storage offline storage-server-<em>UUID</em>
     ```

     Wenn der Speicherknoten offline ist, kannst du ihn evakuieren, indem du den folgenden Befehl ausführst.

     ```shell
     $ ghe-storage evacuate storage-server-<em>UUID</em>
     ```
