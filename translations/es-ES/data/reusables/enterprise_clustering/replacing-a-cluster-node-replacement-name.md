1. Si estás reemplazando el nodo primerio de MySQL o de Redis, en `cluster.conf`, modifica el valor de `mysql-master` o de `redis-master` con el nombre del nodo de reemplazo.

  Por ejemplo, este archivo `cluster.conf` modificado especifica un nodo de clúster recién aprovisionado, `ghe-replacement-data-node-1` como el nodo primario de MySQL y Redis: <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
