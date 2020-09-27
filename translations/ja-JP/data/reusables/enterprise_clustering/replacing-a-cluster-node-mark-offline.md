1. 障害が起きたノードをオフラインとしてマークするには、任意のノードで[クラスタ設定ファイル](/enterprise/{{ currentVersion }}/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)（`cluster.conf`）のそのノードのセクションに`offline = true`というテキストを含めてください。

  たとえば以下の修正された `cluster.conf`は、 `ghe-data-node-3`ノードをオフラインとしてマークします。

   
   <pre>[cluster "ghe-data-node-3"]
 hostname = ghe-data-node-3
 <em>offline = true</em>
 ipv4 = 192.168.0.6
 # ipv6 = fd12:3456:789a:1::6
 </pre>
