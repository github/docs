1. If you're replacing the primary MySQL or Redis node, in `cluster.conf`, modify the `mysql-master` or `redis-master` value with the replacement node name.

  For example, this modified `cluster.conf` file specifies a newly provisioned cluster node, `ghe-replacement-data-node-1` as the primary MySQL and Redis node: <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
