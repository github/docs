---
title: Evacuar un nodo de agrupación
intro: Puedes evacuar los servicios de datos en un nodo de agrupación.
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
versions:
  enterprise-server: '*'
topics:
  - empresa
---

Si solo tienes tres nodos en tu agrupación de servicios de datos, no puedes evacuar los nodos, porque `ghe-spokes` no tiene otro lugar para realizar una copia. Si tienes cuatro o más, `ghe-spokes` moverá todos los repositorios del nodo evacuado.

Si colocas fuera de línea un nodo que tiene otros servicios de datos (como git, páginas o almacenamiento), debes evacuar cada nodo antes de ponerlo fuera de línea.

1. Encuentra la `uuid` del nodo con el comando `ghe-config`.

    ```
    $ ghe-config cluster._hostname_.uuid
    ```

2. Deberás supervisar el estado de tu nodo mientras se copian los datos. Idealmente, el nodo no debería estar fuera de línea hasta que se complete la copia. Para supervisar el estado de tu nodo, ejecuta alguno de los siguientes comandos:

    Para Git
    ```
    ghe-spokes evac-status
    ```
    Para {% data variables.product.prodname_pages %}
    {% raw %}
    ```
    echo "select count(*) from pages_replicas where host = 'pages-server-<uuid>'" | ghe-dbconsole -y
    ```
    {% endraw %}
    Para almacenamiento
    ```
    ghe-storage evacuation-status
    ```

3. Una vez que la copia esté completa, puedes evacuar el servicio de almacenamiento. Ejecuta alguno de los siguientes comandos:

    Para Git
    {% raw %}
    ```
    ghe-spokes server evacuate git-server-<uuid>
    ```
    {% endraw %}
    Para {% data variables.product.prodname_pages %}
    {% raw %}
    ```
    ghe-dpages evacuate pages-server-<uuid>
    ```
    {% endraw %}
    Para almacenamiento, coloca el nodo fuera de línea
    {% raw %}
    ```
    ghe-storage offline storage-server-<uuid>
    ```
    {% endraw %}
      luego evacúa
    {% raw %}
    ```
    ghe-storage evacuate storage-server-<uuid>
    ```
    {% endraw %}
