1. Wenn Du den MySQL-Masterknoten oder den Redis-Masterknoten ersetzt, ersetze in der Datei `cluster.conf` den Wert `mysql-master` oder `redis-master` durch den Namen des Ersatzknotens.

  So gibt beispielsweise diese geänderte Datei `cluster.conf` den neu verteilten Clusterknoten `ghe-replacement-data-node-1` als MySQL- und Redis-Masterknoten an: <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
