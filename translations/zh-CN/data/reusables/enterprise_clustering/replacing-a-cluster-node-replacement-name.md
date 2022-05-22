1. 如果要替换 MySQL 主节点或 Redis 主节点，请在 `cluster.conf` 中使用替换节点名称修改 `mysql-master` 或 `redis-master` 值。

  例如，以下修改的 `cluster.conf` 文件指定新供应的集群节点 `ghe-replacement-data-node-1` 为 MySQL 和 Redis 主节点： <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
