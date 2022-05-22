1. Para agregar el nodo de reemplazo proporcionado recientemente, en cualquier nodo, modifica el archivo `cluster.conf` para eliminar el nodo fallido y agregar el nodo de reemplazo. Por ejemplo, este archivo `cluster.conf` modificado reemplaza el `ghe-data-node-3` con el nodo proporcionado recientemente, `ghe-replacement-data-node-3`: <pre>
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
