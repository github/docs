1. Se você estiver substituindo o nó mestre MySQL ou o nó mestre Redis, no `cluster.conf`, modifique o valor `mysql-master` ou `redis-master` pelo nome do nó substituto.

  Por exemplo, este arquivo modificado `cluster.conf` especifica um nó de cluster recém-provisionado, `ghe-replacement-data-node-1` como o nó mestre MySQL e Redis: <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
