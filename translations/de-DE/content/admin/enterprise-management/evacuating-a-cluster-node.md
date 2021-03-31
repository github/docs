---
title: Clusterknoten evakuieren
intro: Sie können Datendienste auf einem Clusterknoten evakuieren.
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
versions:
  enterprise-server: '*'
topics:
  - Unternehmen
---

Wenn auf Ihrem Datendienstcluster nur drei Knoten vorhanden sind, können Sie die Knoten nicht evakuieren, da `ghe-spokes` keinen anderen Platz besitzt, um eine Kopie vorzunehmen. Bei mindestens vier Knoten verschiebt `ghe-spokes` alle Repositorys vom evakuierten Knoten.

Wenn Sie einen Knoten offline nehmen, der Datendienste aufweist (wie Git, Pages oder Storage), evakuieren Sie jeden Knoten, bevor Sie ihn offline nehmen.

1. Finde die `uuid` des Knotens mit dem Befehl `ghe-config` heraus.

    ```
    $ ghe-config cluster._hostname_.uuid
    ```

2. Sie müssen den Status Ihres Knotens überwachen, während die Daten geöffnet werden. Im Idealfall sollte der Knoten nicht offline genommen werden, bis der Kopiervorgang abgeschlossen ist. Führen Sie einen der folgenden Befehle aus, um den Status Ihres Knotens zu überwachen:

    Für Git
    ```
    ghe-spokes evac-status
    ```
    Für {% data variables.product.prodname_pages %}
    {% raw %}
    ```
    echo "select count(*) from pages_replicas where host = 'pages-server-<uuid>'" | ghe-dbconsole -y
    ```
    {% endraw %}
    Für Storage
    ```
    ghe-storage evacuation-status
    ```

3. Nach Abschluss des Kopiervorgangs können Sie den Speicherdienst evakuieren. Führen Sie einen der folgenden Befehle aus:

    Für Git
    {% raw %}
    ```
    ghe-spokes server evacuate git-server-<uuid>
    ```
    {% endraw %}
    Für {% data variables.product.prodname_pages %}
    {% raw %}
    ```
    ghe-dpages evacuate pages-server-<uuid>
    ```
    {% endraw %}
    Nehmen Sie für Storage den Knoten offline.
    {% raw %}
    ```
    ghe-storage offline storage-server-<uuid>
    ```
    {% endraw %}
      Evakuieren Sie anschließend
    {% raw %}
    ```
    ghe-storage evacuate storage-server-<uuid>
    ```
    {% endraw %}
