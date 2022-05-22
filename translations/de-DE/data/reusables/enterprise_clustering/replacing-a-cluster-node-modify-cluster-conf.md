1. Um den neu verteilten Ersatzknoten hinzuzufügen, entferne auf einem beliebigen Knoten in der Datei `cluster.conf` den ausgefallenen Knoten, und füge den neuen Ersatzknoten hinzu. So ersetzt beispielsweise diese geänderte Datei `cluster.conf` den Wert `ghe-data-node-3` durch den neu verteilten Knoten `ghe-replacement-data-node-3`: <pre>
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
