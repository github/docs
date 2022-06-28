1. To mark the failed node offline, on any node, modify the [cluster configuration file](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file) (`cluster.conf`) in the relevant node section to include the text `offline = true`.

  For example, this modified `cluster.conf` will mark the `ghe-data-node-3` node as offline:

    <pre>
    [cluster "ghe-data-node-3"]
    hostname = ghe-data-node-3
    <em>offline = true</em>
    ipv4 = 192.168.0.6
    # ipv6 = fd12:3456:789a:1::6
    </pre>
