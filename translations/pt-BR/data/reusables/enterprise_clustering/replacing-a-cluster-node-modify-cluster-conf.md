1. Para adicionar o novo nó de substituição provisionado, em qualquer nó, modifique o arquivo `cluster.conf` para remover o nó com falha e adicionar o nó de substituição. Por exemplo, este arquivo modificado `cluster.conf` substitui `ghe-data-node-3` pelo novo nó provisionado, `ghe-replacement-data-node-3`: <pre>
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
