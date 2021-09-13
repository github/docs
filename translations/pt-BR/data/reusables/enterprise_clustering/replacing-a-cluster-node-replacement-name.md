1. Se você estiver substituindo o nó primário do MySQL ou Redis, no `cluster.conf`, modifique o valor de `mysql-master` ou `redis-master` com o nome do nó de substituição.

  Por exemplo, o arquivo `cluster.conf` modificado especifica um novo nó de cluster provisionado, `ghe-replacement-data-node-1` como o nó principal do MySQL e do Redis: <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
