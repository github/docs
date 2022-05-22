1. 新たにプロビジョニングされた置き換えノードを追加するには、任意のノードで`cluster.conf`ファイルを修正し、障害が起きたノードを取り除き、置き換えのノードを追加します。 たとえば以下の修正された`cluster.conf`ファイルは、`ghe-data-node-3`を新たにプロビジョニングされた`ghe-replacement-data-node-3`で置き換えます。 <pre>
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
