---
title: クラスタノードからの待避
intro: データサービスをクラスタノードから待避させることができます。
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
versions:
  enterprise-server: '*'
---

データサービスクラスタにノードが3つしかない場合、ノードからの待避はできません。`ghe-spokes`に、コピーを作成する別の場所がないからです。 ノードが4つ以上ある場合は、`ghe-spokes`によってすべてのリポジトリが待避元のノードから移動されます。

データサービス (Git、ページ、ストレージ) があるノードをオフラインにする場合、ノードをオフラインにする前に各ノードからの待避を実行してください。

1. `ghe-config`コマンドでクラスタ内のノードの`uuid`を見つけてください。

    ```
    $ ghe-config cluster._hostname_.uuid
    ```

2. データのコピー中は、ノードのステータスをモニターする必要があります。 コピーが完了するまで、ノードはオフラインにしないでください。 ノードのステータスをモニターするには、次のいずれかのコマンドを実行します。

    Git:
    ```
    ghe-spokes evac-status
    ```
    {% data variables.product.prodname_pages %}:
    ```
    echo "select count(*) from pages_replicas where host = 'pages-server-<uuid>'" | ghe-dbconsole -y
    ```
    ストレージ:
    ```
    ghe-storage evacuation-status
    ```

3. コピーが完了したら、ストレージサービスを待避させます。 実行するコマンドは次のいずれかです。

    Git:
    ```
    ghe-spokes server evacuate git-server-<uuid>
    ```
    {% data variables.product.prodname_pages %}:
    ```
    ghe-dpages evacuate pages-server-<uuid>
    ```
    ストレージに対して、ノードをオフラインにします。
    ```
    ghe-storage offline storage-server-<uuid>
    ```
      次に、待避を実行します。
    ```
    ghe-storage evacuate storage-server-<uuid>
    ```
