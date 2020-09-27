1. Si vas a reemplazar el nodo principal de MySQL o el nodo principal de Redis, en `cluster.conf`, cambia el valor de `mysql-master` o `redis-master` por el nombre del nodo de reemplazo.

  Por ejemplo, este archivo `cluster.conf` modificado especifica un nodo de la agrupación recién aprovisionado, `ghe-replacement-data-node-1`, como nodo principal de MySQL y Redis: <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
