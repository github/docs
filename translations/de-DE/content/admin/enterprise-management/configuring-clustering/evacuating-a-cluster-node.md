---
title: Clusterknoten evakuieren
intro: Sie können Datendienste auf einem Clusterknoten evakuieren.
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
---

Wenn auf Ihrem Datendienstcluster nur drei Knoten vorhanden sind, können Sie die Knoten nicht evakuieren, da `ghe-spokes` keinen anderen Platz besitzt, um eine Kopie vorzunehmen. Bei mindestens vier Knoten verschiebt `ghe-spokes` alle Repositorys vom evakuierten Knoten.

Wenn Sie einen Knoten offline nehmen, der Datendienste aufweist (wie Git, Pages oder Storage), evakuieren Sie jeden Knoten, bevor Sie ihn offline nehmen.

1. Finde die `uuid` des Knotens mit dem Befehl `ghe-config` heraus.

    ```shell
    $ ghe-config cluster.<em>HOSTNAME</em>.uuid
    ```

2. Sie müssen den Status Ihres Knotens überwachen, während die Daten geöffnet werden. Im Idealfall sollte der Knoten nicht offline genommen werden, bis der Kopiervorgang abgeschlossen ist. Führen Sie einen der folgenden Befehle aus, um den Status Ihres Knotens zu überwachen:

    Für Git
    ```
    ghe-spokes evac-status
    ```
    Für {% data variables.product.prodname_pages %}

    ```shell
    echo "select count(*) from pages_replicas where host = 'pages-server-<em>UUID</em>'" | ghe-dbconsole -y
    ```

    Für Storage
    ```
    ghe-storage evacuation-status
    ```

3. Nach Abschluss des Kopiervorgangs können Sie den Speicherdienst evakuieren. Führen Sie einen der folgenden Befehle aus:

    Für Git

    ```shell
    ghe-spokes server evacuate git-server-<em>UUID</em> \'<em>REASON FOR EVACUATION</em>\'
    ```

    Für {% data variables.product.prodname_pages %}

    ```shell
    ghe-dpages evacuate pages-server-<em>UUID</em>
    ```

    Nehmen Sie für Storage den Knoten offline.

    ```shell
    ghe-storage offline storage-server-<em>UUID</em>
    ```

      Evakuieren Sie anschließend

    ```shell
    ghe-storage evacuate storage-server-<em>UUID</em>
    ```
