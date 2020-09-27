1. 要添加新配置的更换节点，在任何节点上，修改 `cluster.conf` 文件以删除失败的节点并添加更换节点。 例如，下面修改的 `cluster.conf` 文件会将 `ghe-data-node-3` 替换为新配置的节点 `ghe-replacement-data-node-3`： <pre>
  [cluster "<em>ghe-replacement-data-node-3</em>"]
    hostname = <em>ghe-replacement-data-node-3</em>
    ipv4 = <em>192.168.0.7</em>
    # ipv6 = fd12:3456:789a:1::7
    git-server = true
    pages-server = true
    mysql-server = true
    elasticsearch-server = true
    redis-server = true
    memcache-server = true
    metrics-server = true
    storage-server = true
  </pre>
