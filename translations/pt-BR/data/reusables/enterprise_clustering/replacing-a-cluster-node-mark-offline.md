1. Para marcar a falha do nó offline, em qualquer nó, modifique o [cluster configuration file](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file) (`cluster.conf`) na seção nó relevante para incluir o texto `offline = true`.

  Por exemplo, esta modificação `cluster.conf` irá marcar o nó `ghe-data-node-3` como offline:

   
   <pre>[cluster "ghe-data-node-3"]
 hostname = ghe-data-node-3
 <em>offline = true</em>
 ipv4 = 192.168.0.6
 # ipv6 = fd12:3456:789a:1::6
 </pre>
