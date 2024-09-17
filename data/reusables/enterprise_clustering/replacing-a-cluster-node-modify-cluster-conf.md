1. To add the newly provisioned replacement node, on any node, modify the `cluster.conf` file to remove the failed node and add the replacement node. For example, this modified `cluster.conf` file replaces `ghe-data-node-3` with the newly provisioned node, `ghe-replacement-data-node-3`:

   <pre>
   [cluster "<em>ghe-replacement-data-node-3</em>"]
     hostname = <em>ghe-replacement-data-node-3</em>
     ipv4 = <em>192.168.0.7</em>
     # ipv6 = fd12:3456:789a:1::7
     consul-datacenter = PRIMARY-DATACENTER
     git-server = true
     pages-server = true
     mysql-server = true
     elasticsearch-server = true
     redis-server = true
     memcache-server = true
     metrics-server = true
     storage-server = true
   </pre>

   You can choose to defer database seeding of a new MySQL replica node, resulting in being able to open your appliance to traffic sooner. For more information, see "[AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-clustering/deferring-database-seeding)."
