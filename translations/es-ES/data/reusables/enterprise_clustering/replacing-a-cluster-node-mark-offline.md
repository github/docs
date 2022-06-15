1. Para marcar el nodo que falló fuera de línea, en cualquier nodo, modifica el [archivo de configuración de agrupación](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file) (`cluster.conf`) en la sección de nodo correspondiente para incluir el texto `offline = true`.

  Por ejemplo, este archivo `cluster.conf` modificado marcará el nodo `ghe-data-node-3` como fuera de línea:

   
   <pre>[cluster "ghe-data-node-3"]
 hostname = ghe-data-node-3
 <em>offline = true</em>
 ipv4 = 192.168.0.6
 # ipv6 = fd12:3456:789a:1::6
 </pre>
