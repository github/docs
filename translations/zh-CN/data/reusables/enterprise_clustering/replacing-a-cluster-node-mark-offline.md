1. 要将失败的节点标记为离线，在任何节点上修改相关代码部分的[群集配置文件](/enterprise/{{ currentVersion }}/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file) (`cluster.conf`)，以包含文本 `offline = true`。

  例如，下面修改的 `cluster.conf` 会将 `ghe-data-node-3` 节点标记为离线：

   
   <pre>[cluster "ghe-data-node-3"]
 hostname = ghe-data-node-3
 <em>offline = true</em>
 ipv4 = 192.168.0.6
 # ipv6 = fd12:3456:789a:1::6
 </pre>
