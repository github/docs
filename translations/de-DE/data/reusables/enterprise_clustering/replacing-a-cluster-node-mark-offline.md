1. Um den ausgefallenen Knoten als offline zu markieren, füge auf einem beliebigen Knoten in der [Clusterkonfigurationsdatei](/enterprise/{{ currentVersion }}/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file) (`cluster.conf`) im Abschnitt mit dem entsprechenden Knoten den Text `offline = true` hinzu.

  Beispielsweise wird in der folgenden geänderten Datei `cluster.conf` der Knoten `ghe-data-node-3` als offline markiert:

   
   <pre>[cluster "ghe-data-node-3"]
 hostname = ghe-data-node-3
 <em>offline = true</em>
 ipv4 = 192.168.0.6
 # ipv6 = fd12:3456:789a:1::6
 </pre>
